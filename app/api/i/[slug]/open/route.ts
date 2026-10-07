import { z } from 'zod';
import { handler, json, readJson, readCookie, setCookie, clientIp } from '@/lib/server/http';
import { openInvitation } from '@/lib/server/guest';
import { hitRateLimit, LIMITS } from '@/lib/server/ratelimit';
import { sha256 } from '@/lib/server/crypto';

const Body = z.object({ name: z.string().max(200).optional(), email: z.string().max(200).optional(), src: z.string().max(20).nullish() });
const regCookie = (slug: string) => `sc_reg_${slug}`;

export const POST = handler<{ params: Promise<{ slug: string }> }>(async (req, { params }) => {
  const { slug } = await params;
  await hitRateLimit(`guest-open:${sha256(clientIp(req))}:${slug}`, 60, LIMITS.guestOpenPerIpPerMinute);
  const body = Body.parse(await readJson(req));
  const { registrationId } = await openInvitation(slug, body, readCookie(req, regCookie(slug)), {
    src: body.src ?? null,
    userAgent: req.headers.get('user-agent'),
    referer: req.headers.get('x-guest-referrer') ?? null,
  });
  const res = json({ registered: !!registrationId });
  if (registrationId) setCookie(res, regCookie(slug), registrationId, 365 * 86400);
  return res;
});
