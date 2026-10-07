import { sql } from './db';
import { sha256 } from './crypto';
import { audit } from './audit';
import { hitRateLimit } from './ratelimit';
import { getSettings } from './settings';
import { sendEmail, emailLayout, escapeHtml } from './email';
import { createSession, getSession, revokeLeaderSessions, LEADER_COOKIE } from './sessions';
import { readCookie } from './http';
import { AppError, type LeaderStatus, type Session } from '@/lib/shared/types';

export function normalizeLeaderEmail(raw: string): string | null {
  const e = raw.trim().toLowerCase();
  return /^[^\s@]+@uqu\.edu\.sa$/.test(e) ? e : null;
}

/**
 * One form for both cases (the owner's choice: the university email is the identity, no one-time links):
 * a new email becomes a pending request; an approved email signs straight in with a 180-day sliding session.
 */
export async function requestLeaderAccess(
  input: { name?: string; email: string; committee?: string },
  ip: string,
  userAgent = '',
): Promise<{ status: LeaderStatus; session?: { token: string; maxAge: number } }> {
  const email = normalizeLeaderEmail(input.email);
  if (!email) throw new AppError('invalid_email', 400, 'استخدم بريدك الجامعي المنتهي بـ uqu.edu.sa');
  await hitRateLimit(`leader-check:ip:${sha256(ip)}`, 3600, 30);

  const [existing] = await sql<{ id: string; status: LeaderStatus }[]>`select id, status from leaders where email = ${email}`;
  if (existing?.status === 'approved') {
    const session = await createSession('leader', existing.id, userAgent);
    await audit('leader', 'leader.login', existing.id);
    return { status: 'approved', session };
  }
  if (existing) return { status: existing.status };

  const name = input.name?.trim() ?? '';
  const committee = input.committee?.trim() ?? '';
  if (name.length < 2 || committee.length < 2) throw new AppError('details_required', 400, 'أول مرة؟ اكتب اسمك ولجنتك مع بريدك');
  await hitRateLimit(`leader-req:ip:${sha256(ip)}`, 3600, 5);
  await hitRateLimit(`leader-req:email:${email}`, 86400, 3);

  await sql`insert into leaders (name, email, committee) values (${name}, ${email}, ${committee}) on conflict (email) do nothing`;
  const s = await getSettings();
  if (s.owner_email && s.notifications.leaderRequests) {
    await sendEmail({
      to: s.owner_email,
      subject: 'طلب دخول جديد من قائد',
      html: emailLayout(`<p>طلب دخول جديد على منصة الدعوات</p><p><strong>${escapeHtml(name)}</strong> · ${escapeHtml(committee)}<br>${escapeHtml(email)}</p><p>راجعي الطلب من صفحة الإعدادات</p>`),
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

export type LeaderListItem = { id: string; name: string; email: string; committee: string; status: LeaderStatus; createdAt: string };

export async function listLeaders(): Promise<LeaderListItem[]> {
  const rows = await sql<(LeaderListItem & { createdAt: Date })[]>`
    select id, name, email, committee, status, created_at as "createdAt" from leaders
    order by case status when 'pending' then 0 when 'approved' then 1 else 2 end, name`;
  return rows.map((r) => ({ ...r, createdAt: new Date(r.createdAt).toISOString() }));
}

export async function updateLeaderCommittee(id: string, committee: string): Promise<void> {
  const c = committee.replace(/\s+/g, ' ').trim();
  if (c.length < 2 || c.length > 60) throw new AppError('invalid_input', 400, 'اكتبي اسم اللجنة');
  const rows = await sql`update leaders set committee = ${c} where id = ${id} returning id`;
  if (!rows.length) throw new AppError('not_found', 404, 'القائد غير موجود');
  await audit('owner', 'leader.committee', id, { committee: c });
}
