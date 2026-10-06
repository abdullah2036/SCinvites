import 'server-only';
import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import { getSession, OWNER_COOKIE, LEADER_COOKIE } from './sessions';
import type { Session } from '@/lib/shared/types';

/** Server components: 404 when there is no owner session, so the studio's existence is never revealed. */
export async function requireOwnerFromCookies(): Promise<Session> {
  const s = await getSession((await cookies()).get(OWNER_COOKIE)?.value, 'owner');
  if (!s) notFound();
  return s;
}

/** Server components: leaders without a session go back to the login page. */
export async function requireLeaderFromCookies(): Promise<Session & { leaderId: string }> {
  const s = await getSession((await cookies()).get(LEADER_COOKIE)?.value, 'leader');
  if (!s || !s.leaderId) redirect('/');
  return s as Session & { leaderId: string };
}
