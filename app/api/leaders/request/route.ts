import { handler, json, readJson, clientIp, setCookie } from '@/lib/server/http';
import { requestLeaderAccess } from '@/lib/server/leader-auth';
import { LEADER_COOKIE } from '@/lib/server/sessions';
import { LeaderRequestInput } from '@/lib/shared/schemas';

export const POST = handler(async (req) => {
  const input = LeaderRequestInput.parse(await readJson(req));
  const { status, session } = await requestLeaderAccess(input, clientIp(req), req.headers.get('user-agent') ?? '');
  if (!session) return json({ status });
  const res = json({ status, redirect: '/leader' });
  setCookie(res, LEADER_COOKIE, session.token, session.maxAge);
  return res;
});
