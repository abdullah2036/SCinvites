import { sql } from '@/lib/server/db';

export const dynamic = 'force-dynamic';

/** Uptime monitor + daily keep-alive: a real database round-trip (keeps the free Supabase project awake). */
export async function GET() {
  try {
    await sql`select 1`;
    return Response.json({ ok: true }, { headers: { 'cache-control': 'no-store' } });
  } catch (e) {
    console.error('health check failed', e);
    return Response.json({ ok: false }, { status: 503, headers: { 'cache-control': 'no-store' } });
  }
}
