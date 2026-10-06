import { z } from 'zod';
import { handler, json, readJson, setCookie } from '@/lib/server/http';
import { consumeLoginToken } from '@/lib/server/leader-auth';
import { LEADER_COOKIE } from '@/lib/server/sessions';

const Body = z.object({ token: z.string().min(20).max(100) });

export const POST = handler(async (req) => {
  const { token } = Body.parse(await readJson(req));
  const session = await consumeLoginToken(token, req.headers.get('user-agent') ?? '');
  const res = json({ redirect: '/leader' });
  setCookie(res, LEADER_COOKIE, session.token, session.maxAge);
  return res;
});
