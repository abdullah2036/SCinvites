import { handler, json, readCookie, clearCookie } from '@/lib/server/http';
import { LEADER_COOKIE, revokeSession } from '@/lib/server/sessions';
import { requireLeader } from '@/lib/server/leader-auth';

export const POST = handler(async (req) => {
  await requireLeader(req);
  await revokeSession(readCookie(req, LEADER_COOKIE));
  const res = json({ ok: true });
  clearCookie(res, LEADER_COOKIE);
  return res;
});
