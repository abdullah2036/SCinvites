import { z } from 'zod';
import { handler, json, readJson, readCookie, clientIp } from '@/lib/server/http';
import { answerRsvp } from '@/lib/server/guest';
import { hitRateLimit } from '@/lib/server/ratelimit';
import { sha256 } from '@/lib/server/crypto';

const Body = z.object({ answer: z.enum(['yes', 'no']) });

export const POST = handler<{ params: Promise<{ slug: string }> }>(async (req, { params }) => {
  const { slug } = await params;
  await hitRateLimit(`guest:${sha256(clientIp(req))}:${slug}`, 60, 30);
  const { answer } = Body.parse(await readJson(req));
  await answerRsvp(slug, answer, readCookie(req, `sc_reg_${slug}`));
  return json({ answer });
});
