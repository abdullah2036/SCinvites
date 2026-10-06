import { sql, type Db } from './db';
import { randomToken, sha256 } from './crypto';
import { readCookie } from './http';
import { AppError, type Session } from '@/lib/shared/types';

export const OWNER_COOKIE = 'sc_owner';
export const LEADER_COOKIE = 'sc_leader';
export const OWNER_MAX_AGE = 30 * 86400;
export const LEADER_MAX_AGE = 180 * 86400;

export async function createSession(subject: 'owner' | 'leader', leaderId: string | null, userAgent: string, db: Db = sql) {
  const token = randomToken();
  const maxAge = subject === 'owner' ? OWNER_MAX_AGE : LEADER_MAX_AGE;
  await db`insert into sessions (subject, leader_id, token_hash, user_agent, expires_at)
           values (${subject}, ${leaderId}, ${sha256(token)}, ${userAgent.slice(0, 300)}, now() + ${maxAge} * interval '1 second')`;
  return { token, maxAge };
}

export async function getSession(token: string | null | undefined, subject: 'owner' | 'leader'): Promise<Session | null> {
  if (!token) return null;
  const [row] = await sql<{ id: string; leader_id: string | null; stale: boolean }[]>`
    select s.id, s.leader_id, s.last_seen_at < now() - interval '1 day' as stale
    from sessions s left join leaders l on l.id = s.leader_id
    where s.token_hash = ${sha256(token)} and s.subject = ${subject} and s.revoked_at is null and s.expires_at > now()
      and (s.subject = 'owner' or l.status = 'approved')`;
  if (!row) return null;
  if (row.stale) {
    if (subject === 'leader') {
      await sql`update sessions set last_seen_at = now(), expires_at = now() + ${LEADER_MAX_AGE} * interval '1 second' where id = ${row.id}`;
    } else {
      await sql`update sessions set last_seen_at = now() where id = ${row.id}`;
    }
  }
  return { id: row.id, subject, leaderId: row.leader_id };
}

export async function revokeSession(token: string | null): Promise<void> {
  if (!token) return;
  await sql`update sessions set revoked_at = now() where token_hash = ${sha256(token)} and revoked_at is null`;
}

export async function revokeLeaderSessions(leaderId: string, db: Db = sql): Promise<void> {
  await db`update sessions set revoked_at = now() where leader_id = ${leaderId} and revoked_at is null`;
}

export async function requireOwner(req: Request): Promise<Session> {
  const s = await getSession(readCookie(req, OWNER_COOKIE), 'owner');
  if (!s) throw new AppError('unauthorized', 401, 'يلزم تسجيل الدخول');
  return s;
}
