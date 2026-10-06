import bcrypt from 'bcryptjs';
import { sql } from './db';
import { sha256 } from './crypto';
import { createSession } from './sessions';
import { audit } from './audit';
import { getSettings } from './settings';
import { sendEmail, emailLayout } from './email';
import { AppError } from '@/lib/shared/types';

const IP_MAX = 5;
const GLOBAL_MAX = 20;
const LOCK_MINUTES = 15;
// Compared against when no hash is configured, so response timing doesn't reveal that.
const DUMMY_HASH = bcrypt.hashSync('not-the-password', 12);

/** OWNER_PASSWORD_HASH may be a raw bcrypt hash or "b64:<base64>" ($-free, so .env expansion cannot mangle it). */
export function ownerHash(): string | undefined {
  const v = process.env.OWNER_PASSWORD_HASH?.trim();
  if (!v) return undefined;
  return v.startsWith('b64:') ? Buffer.from(v.slice(4), 'base64').toString('utf8') : v;
}

async function isLocked(ipHash: string): Promise<boolean> {
  const [r] = await sql<{ ip_fails: number; global_fails: number; last_fail_recent: boolean }[]>`
    select
      count(*) filter (where ip_hash = ${ipHash} and at > now() - ${LOCK_MINUTES} * interval '1 minute')::int as ip_fails,
      count(*)::int as global_fails,
      coalesce(max(at) > now() - ${LOCK_MINUTES} * interval '1 minute', false) as last_fail_recent
    from auth_attempts where not succeeded and at > now() - interval '1 hour'`;
  return r.ip_fails >= IP_MAX || (r.global_fails >= GLOBAL_MAX && r.last_fail_recent);
}

/** Attempts made while locked are not recorded, so an attacker cannot extend the lock forever. */
export async function ownerLogin(password: string, ip: string, userAgent: string) {
  const ipHash = sha256(ip);
  if (await isLocked(ipHash)) throw new AppError('locked', 423, 'تم إيقاف الدخول مؤقتًا، حاول بعد ١٥ دقيقة');

  const hash = ownerHash();
  const ok = (await bcrypt.compare(password, hash || DUMMY_HASH)) && !!hash;
  await sql`insert into auth_attempts (ip_hash, succeeded) values (${ipHash}, ${ok})`;

  if (!ok) {
    const [{ n }] = await sql<{ n: number }[]>`select count(*)::int as n from auth_attempts where not succeeded and at > now() - interval '1 hour'`;
    if (n === GLOBAL_MAX) await alertOwner();
    throw new AppError('bad_password', 401, 'كلمة السر غير صحيحة');
  }
  await audit('owner', 'owner.login', 'owner');
  return createSession('owner', null, userAgent);
}

async function alertOwner() {
  const { owner_email } = await getSettings();
  await audit('system', 'owner.lockout', 'owner');
  if (!owner_email) return;
  await sendEmail({
    to: owner_email,
    subject: 'تنبيه: محاولات دخول كثيرة على منصة الدعوات',
    html: emailLayout(
      '<p>سُجّلت ٢٠ محاولة دخول خاطئة خلال ساعة، وتم إيقاف الدخول مؤقتًا لمدة ١٥ دقيقة</p>' +
        '<p>كلمة السر ما زالت محمية، وإذا تكرر هذا فتواصلي مع المطور لتغيير مسار الدخول</p>',
    ),
  });
}
