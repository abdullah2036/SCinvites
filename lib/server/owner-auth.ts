import bcrypt from 'bcryptjs';
import { sql } from './db';
import { randomToken, sha256 } from './crypto';
import { createSession } from './sessions';
import { audit } from './audit';
import { getSettings } from './settings';
import { sendEmail, emailLayout } from './email';
import { AppError } from '@/lib/shared/types';

const IP_MAX = 5;
const GLOBAL_MAX = 20;
const LOCK_MINUTES = 15;
const MAX_DEVICES = 10;
// Compared against when no hash is configured, so response timing doesn't reveal that.
const DUMMY_HASH = bcrypt.hashSync('not-the-password', 12);

export const OWNER_DEVICE_COOKIE = 'sc_owner_device';
export const OWNER_DEVICE_MAX_AGE = 365 * 86400;

/** OWNER_PASSWORD_HASH may be a raw bcrypt hash or "b64:<base64>" ($-free, so .env expansion cannot mangle it). */
export function ownerHash(): string | undefined {
  const v = process.env.OWNER_PASSWORD_HASH?.trim();
  if (!v) return undefined;
  return v.startsWith('b64:') ? Buffer.from(v.slice(4), 'base64').toString('utf8') : v;
}

/** Devices that signed in successfully before are exempt from the global lock, so an attacker can't lock the owner out. */
async function isTrustedDevice(token: string | null | undefined): Promise<boolean> {
  if (!token) return false;
  const [row] = await sql<{ value: string[] }[]>`select value from settings where key = 'owner_devices'`;
  return !!row?.value?.includes(sha256(token));
}

async function trustDevice(): Promise<string> {
  const token = randomToken();
  const [row] = await sql<{ value: string[] }[]>`select value from settings where key = 'owner_devices'`;
  const next = [sha256(token), ...(row?.value ?? [])].slice(0, MAX_DEVICES);
  await sql`insert into settings (key, value) values ('owner_devices', ${sql.json(next)}) on conflict (key) do update set value = excluded.value`;
  return token;
}

async function counts(ipHash: string) {
  const [r] = await sql<{ ip_fails: number; global_fails: number; last_fail_recent: boolean }[]>`
    select
      count(*) filter (where ip_hash = ${ipHash} and at > now() - ${LOCK_MINUTES} * interval '1 minute')::int as ip_fails,
      count(*)::int as global_fails,
      coalesce(max(at) > now() - ${LOCK_MINUTES} * interval '1 minute', false) as last_fail_recent
    from auth_attempts where not succeeded and at > now() - interval '1 hour'`;
  return r;
}

const locked = () => new AppError('locked', 423, 'تم إيقاف الدخول مؤقتًا، حاول بعد ١٥ دقيقة');

/**
 * Per-IP lock after 5 failures and a global lock after 20 failures/hour, both for 15 minutes.
 * The attempt is reserved before the (slow) password check so parallel requests count against each other;
 * attempts refused while locked are not recorded.
 */
export async function ownerLogin(password: string, ip: string, userAgent: string, deviceToken?: string | null) {
  const ipHash = sha256(ip);
  const trusted = await isTrustedDevice(deviceToken);
  const before = await counts(ipHash);
  if (before.ip_fails >= IP_MAX || (!trusted && before.global_fails >= GLOBAL_MAX && before.last_fail_recent)) throw locked();

  const [{ id }] = await sql<{ id: string }[]>`insert into auth_attempts (ip_hash, succeeded) values (${ipHash}, false) returning id`;
  const now = await counts(ipHash);
  if (now.ip_fails > IP_MAX || (!trusted && now.global_fails > GLOBAL_MAX)) {
    await sql`delete from auth_attempts where id = ${id}`;
    throw locked();
  }

  const hash = ownerHash();
  const ok = (await bcrypt.compare(password, hash || DUMMY_HASH)) && !!hash;
  if (!ok) {
    if (now.global_fails >= GLOBAL_MAX) await alertOwnerOnce();
    throw new AppError('bad_password', 401, 'كلمة السر غير صحيحة');
  }
  await sql`update auth_attempts set succeeded = true where id = ${id}`;
  await audit('owner', 'owner.login', 'owner');
  const session = await createSession('owner', null, userAgent);
  return { ...session, deviceToken: trusted ? null : await trustDevice() };
}

async function alertOwnerOnce() {
  const [recent] = await sql`select 1 from audit_log where action = 'owner.lockout' and at > now() - ${LOCK_MINUTES} * interval '1 minute' limit 1`;
  if (recent) return;
  const { owner_email } = await getSettings();
  await audit('system', 'owner.lockout', 'owner');
  if (!owner_email) return;
  await sendEmail({
    to: owner_email,
    subject: 'تنبيه: محاولات دخول كثيرة على منصة الدعوات',
    html: emailLayout(
      '<p>سُجّلت ٢٠ محاولة دخول خاطئة خلال ساعة، وتم إيقاف الدخول مؤقتًا لمدة ١٥ دقيقة من الأجهزة الجديدة</p>' +
        '<p>أجهزتك التي دخلتِ منها سابقًا تستطيع الدخول كالمعتاد. إذا تكرر هذا فتواصلي مع المطور لتغيير مسار الدخول</p>',
    ),
  });
}
