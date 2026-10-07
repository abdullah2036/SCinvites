import { z } from 'zod';
import { handler, json, readJson, readCookie, clientIp } from '@/lib/server/http';
import { answerRsvp } from '@/lib/server/guest';
import { hitRateLimit, LIMITS } from '@/lib/server/ratelimit';
import { sha256 } from '@/lib/server/crypto';

const Body = z.object({ answer: z.enum(['yes', 'no']) });

export const POST = handler<{ params: Promise<{ slug: string }> }>(async (req, { params }) => {
  const { slug } = await params;
  // Per person (their registration on a public link), not per IP: a whole campus can answer at once.
  const registration = readCookie(req, `sc_reg_${slug}`);
  await hitRateLimit(`guest-rsvp:${slug}:${registration ? sha256(registration) : sha256(clientIp(req))}`, 60, LIMITS.guestRsvpPerPersonPerMinute);
  const { answer } = Body.parse(await readJson(req));
  await answerRsvp(slug, answer, registration);
  return json({ answer });
});
