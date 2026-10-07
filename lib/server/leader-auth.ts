import { sql } from './db';
import { sha256 } from './crypto';
import { audit } from './audit';
import { hitRateLimit, LIMITS } from './ratelimit';
import { getSettings } from './settings';
import { sendEmail, emailLayout, escapeHtml } from './email';
import { createSession, getSession, revokeLeaderSessions, LEADER_COOKIE } from './sessions';
import { readCookie } from './http';
import { AppError, type LeaderStatus, type Session } from '@/lib/shared/types';

/** Lower-cased email if it is shaped like one, else null. */
export function normalizeEmail(raw: string): string | null {
  const e = raw.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? e : null;
}

/**
 * Who may ask for leader access: university accounts in the s4<student id>@uqu.edu.sa format, plus the developer's
 * and owner's review addresses in EXTRA_LEADER_EMAILS (comma-separated; kept in Vercel, not in this public repo).
 */
export function mayRequestLeaderAccess(email: string): boolean {
  if (/^s4\d+@uqu\.edu\.sa$/.test(email)) return true;
  const extra = (process.env.EXTRA_LEADER_EMAILS ?? '').split(',').map((e) => e.trim().toLowerCase());
  return extra.includes(email);
}

const FORMAT_MESSAGE = 'استخدم بريدك الجامعي، مثل: s443012345@uqu.edu.sa';

/**
 * One form for both cases (the owner's choice: the university email is the identity, no one-time links):
 * a new email becomes a pending request; an approved email signs straight in with a 180-day sliding session.
 * The email format applies to new requests; leaders the owner already approved keep signing in.
 */
export async function requestLeaderAccess(
  input: { name?: string; email: string },
  ip: string,
  userAgent = '',
): Promise<{ status: LeaderStatus; session?: { token: string; maxAge: number } }> {
  const email = normalizeEmail(input.email);
  if (!email) throw new AppError('invalid_email', 400, FORMAT_MESSAGE);
  await hitRateLimit(`leader-check:ip:${sha256(ip)}`, 3600, LIMITS.leaderCheckPerIpPerHour);

  const [existing] = await sql<{ id: string; status: LeaderStatus }[]>`select id, status from leaders where email = ${email}`;
  if (existing?.status === 'approved') {
    await hitRateLimit(`leader-signin:email:${email}`, 3600, LIMITS.leaderSignInPerEmailPerHour);
    const session = await createSession('leader', existing.id, userAgent);
    await audit('leader', 'leader.login', existing.id);
    return { status: 'approved', session };
  }
  if (existing) return { status: existing.status };

  if (!mayRequestLeaderAccess(email)) throw new AppError('invalid_email', 400, FORMAT_MESSAGE);
  const name = input.name?.trim() ?? '';
  if (name.length < 2) throw new AppError('details_required', 400, 'أول مرة؟ اكتب اسمك مع بريدك');
  await hitRateLimit(`leader-req:ip:${sha256(ip)}`, 3600, LIMITS.leaderNewPerIpPerHour);
  await hitRateLimit(`leader-req:email:${email}`, 86400, LIMITS.leaderNewPerEmailPerDay);

  // committee: no longer used (the column stays for old rows and backups).
  await sql`insert into leaders (name, email, committee) values (${name}, ${email}, '') on conflict (email) do nothing`;
  const s = await getSettings();
  if (s.owner_email && s.notifications.leaderRequests) {
    await sendEmail({
      to: s.owner_email,
      subject: 'طلب دخول جديد من قائد',
      html: emailLayout(`<p>طلب دخول جديد على منصة الدعوات</p><p><strong>${escapeHtml(name)}</strong><br>${escapeHtml(email)}</p><p>راجعي الطلب من صفحة الإعدادات</p>`),
    }).catch((e) => console.error('leader request email failed', e));
  }
  return { status: 'pending' };
}

export async function approveLeader(id: string): Promise<void> {
  const rows = await sql`update leaders set status = 'approved', approved_at = coalesce(approved_at, now()) where id = ${id} returning id`;
  if (!rows.length) throw new AppError('not_found', 404, 'القائد غير موجود');
  await audit('owner', 'leader.approve', id);
}

export async function revokeLeader(id: string): Promise<void> {
  await sql.begin(async (tx) => {
    const rows = await tx`update leaders set status = 'revoked' where id = ${id} returning id`;
    if (!rows.length) throw new AppError('not_found', 404, 'القائد غير موجود');
    await revokeLeaderSessions(id, tx);
  });
  await audit('owner', 'leader.revoke', id);
}

export async function requireLeader(req: Request): Promise<Session & { leaderId: string }> {
  const s = await getSession(readCookie(req, LEADER_COOKIE), 'leader');
  if (!s || !s.leaderId) throw new AppError('unauthorized', 401, 'يلزم تسجيل الدخول');
  return s as Session & { leaderId: string };
}

export type LeaderListItem = { id: string; name: string; email: string; status: LeaderStatus; createdAt: string };

export async function listLeaders(): Promise<LeaderListItem[]> {
  const rows = await sql<(LeaderListItem & { createdAt: Date })[]>`
    select id, name, email, status, created_at as "createdAt" from leaders
    order by case status when 'pending' then 0 when 'approved' then 1 else 2 end, name`;
  return rows.map((r) => ({ ...r, createdAt: new Date(r.createdAt).toISOString() }));
}

export async function updateLeaderName(id: string, raw: string): Promise<string> {
  const name = raw.replace(/[​-‏‪-‮⁦-⁩﻿]/g, '').replace(/\s+/g, ' ').trim();
  if (name.length < 2 || name.length > 80) throw new AppError('invalid_input', 400, 'اكتب اسمك (حرفان على الأقل)');
  await sql`update leaders set name = ${name} where id = ${id}`;
  await audit('leader', 'leader.rename', id);
  return name;
}
