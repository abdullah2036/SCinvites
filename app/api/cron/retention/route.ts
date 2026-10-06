import { timingSafeEqual } from 'node:crypto';
import { runRetention } from '@/lib/server/retention';

export const dynamic = 'force-dynamic';

function authorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  const got = req.headers.get('authorization') ?? '';
  if (!secret) return false;
  const want = Buffer.from(`Bearer ${secret}`);
  const have = Buffer.from(got);
  return have.length === want.length && timingSafeEqual(have, want);
}

/** Vercel Cron calls this daily with `Authorization: Bearer $CRON_SECRET`. */
export async function GET(req: Request) {
  if (!authorized(req)) return Response.json({ error: { code: 'unauthorized', message: 'غير مصرح' } }, { status: 401 });
  return Response.json(await runRetention());
}
