import { sql } from './db';
import { randomToken, sha256 } from './crypto';
import { audit } from './audit';
import { hitRateLimit } from './ratelimit';
import { getSettings } from './settings';
import { sendEmail, emailLayout, escapeHtml } from './email';
import { createSession, getSession, revokeLeaderSessions, LEADER_COOKIE } from './sessions';
import { readCookie } from './http';
import { AppError, type LeaderStatus, type Session } from '@/lib/shared/types';

const TOKEN_HOURS = 24;

export function normalizeLeaderEmail(raw: string): string | null {
  const e = raw.trim().toLowerCase();
  return /^[^\s@]+@uqu\.edu\.sa$/.test(e) ? e : null;
}

export async function requestLeaderAccess(input: { name: string; email: string; committee: string }, ip: string): Promise<{ status: LeaderStatus }> {
  const email = normalizeLeaderEmail(input.email);
  if (!email) throw new AppError('invalid_email', 400, 'استخدم بريدك الجامعي المنتهي بـ uqu.edu.sa');
  await hitRateLimit(`leader-req:ip:${sha256(ip)}`, 3600, 5);
  await hitRateLimit(`leader-req:email:${email}`, 86400, 3);

  const [existing] = await sql<{ status: LeaderStatus }[]>`select status from leaders where email = ${email}`;
  if (existing) return { status: existing.status };

  await sql`insert into leaders (name, email, committee) values (${input.name.trim()}, ${email}, ${input.committee.trim()})`;
  const s = await getSettings();
  if (s.owner_email && s.notifications.leaderRequests) {
    await sendEmail({
      to: s.owner_email,
      subject: 'طلب دخول جديد من قائد',
      html: emailLayout(`<p>طلب دخول جديد على منصة الدعوات</p><p><strong>${escapeHtml(input.name)}</strong> · ${escapeHtml(input.committee)}<br>${escapeHtml(email)}</p><p>راجعي الطلب من صفحة الإعدادات</p>`),
    }).catch((e) => console.error('leader request email failed', e));
  }
  return { status: 'pending' };
}

/** Issues a fresh one-time login link; previous unused links stop working. */
export async function issueLoginLink(leaderId: string): Promise<{ loginUrl: string }> {
  const [leader] = await sql<{ status: LeaderStatus }[]>`select status from leaders where id = ${leaderId}`;
  if (!leader) throw new AppError('not_found', 404, 'القائد غير موجود');
  if (leader.status !== 'approved') throw new AppError('leader_not_approved', 409, 'القائد غير معتمد');
  const token = randomToken();
  await sql.begin(async (tx) => {
    await tx`update login_tokens set used_at = now() where leader_id = ${leaderId} and used_at is null`;
    await tx`insert into login_tokens (leader_id, token_hash, expires_at)
             values (${leaderId}, ${sha256(token)}, now() + ${TOKEN_HOURS} * interval '1 hour')`;
  });
  await audit('owner', 'leader.link', leaderId);
  return { loginUrl: `${process.env.APP_URL}/leader/auth/${token}` };
}

export async function approveLeader(id: string): Promise<{ loginUrl: string }> {
  const rows = await sql`update leaders set status = 'approved', approved_at = coalesce(approved_at, now()) where id = ${id} returning id`;
  if (!rows.length) throw new AppError('not_found', 404, 'القائد غير موجود');
  await audit('owner', 'leader.approve', id);
  return issueLoginLink(id);
}

export async function revokeLeader(id: string): Promise<void> {
  await sql.begin(async (tx) => {
    const rows = await tx`update leaders set status = 'revoked' where id = ${id} returning id`;
    if (!rows.length) throw new AppError('not_found', 404, 'القائد غير موجود');
    await revokeLeaderSessions(id, tx);
    await tx`update login_tokens set used_at = now() where leader_id = ${id} and used_at is null`;
  });
  await audit('owner', 'leader.revoke', id);
}

export async function consumeLoginToken(token: string, userAgent: string) {
  return sql.begin(async (tx) => {
    const [row] = await tx<{ id: string; leader_id: string }[]>`
      update login_tokens t set used_at = now()
      from leaders l
      where t.token_hash = ${sha256(token)} and t.used_at is null and t.expires_at > now()
        and l.id = t.leader_id and l.status = 'approved'
      returning t.id, t.leader_id`;
    if (!row) throw new AppError('link_expired', 410, 'انتهت صلاحية الرابط، اطلب رابطًا جديدًا من صاحبة المنصة');
    return createSession('leader', row.leader_id, userAgent, tx);
  });
}

export async function requireLeader(req: Request): Promise<Session & { leaderId: string }> {
  const s = await getSession(readCookie(req, LEADER_COOKIE), 'leader');
  if (!s || !s.leaderId) throw new AppError('unauthorized', 401, 'يلزم تسجيل الدخول');
  return s as Session & { leaderId: string };
}
