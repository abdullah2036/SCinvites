import { z } from 'zod';
import { handler, json, readJson, setCookie, clientIp } from '@/lib/server/http';
import { ownerLogin } from '@/lib/server/owner-auth';
import { OWNER_COOKIE } from '@/lib/server/sessions';

const Body = z.object({ password: z.string().min(1).max(200) });

export const POST = handler(async (req) => {
  const { password } = Body.parse(await readJson(req));
  const { token, maxAge } = await ownerLogin(password, clientIp(req), req.headers.get('user-agent') ?? '');
  const res = json({ redirect: `/${process.env.OWNER_PATH}` });
  setCookie(res, OWNER_COOKIE, token, maxAge);
  return res;
});
