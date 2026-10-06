import { z } from 'zod';
import { handler, json, readJson, readCookie, setCookie, clientIp } from '@/lib/server/http';
import { ownerLogin, OWNER_DEVICE_COOKIE, OWNER_DEVICE_MAX_AGE } from '@/lib/server/owner-auth';
import { OWNER_COOKIE } from '@/lib/server/sessions';

const Body = z.object({ password: z.string().min(1).max(200) });

export const POST = handler(async (req) => {
  const { password } = Body.parse(await readJson(req));
  const r = await ownerLogin(password, clientIp(req), req.headers.get('user-agent') ?? '', readCookie(req, OWNER_DEVICE_COOKIE));
  const res = json({ redirect: `/${process.env.OWNER_PATH}` });
  setCookie(res, OWNER_COOKIE, r.token, r.maxAge);
  if (r.deviceToken) setCookie(res, OWNER_DEVICE_COOKIE, r.deviceToken, OWNER_DEVICE_MAX_AGE, '/api/owner');
  return res;
});
