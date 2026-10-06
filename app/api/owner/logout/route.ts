import { handler, json, readCookie, clearCookie } from '@/lib/server/http';
import { OWNER_COOKIE, requireOwner, revokeSession } from '@/lib/server/sessions';

export const POST = handler(async (req) => {
  await requireOwner(req);
  await revokeSession(readCookie(req, OWNER_COOKIE));
  const res = json({ ok: true });
  clearCookie(res, OWNER_COOKIE);
  return res;
});
