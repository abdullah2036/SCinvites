import postgres from 'postgres';
import { sql } from '@/lib/server/db';

export const dynamic = 'force-dynamic';

const within = <T,>(p: Promise<T>, ms: number) =>
  Promise.race([p, new Promise<never>((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))]);

/**
 * Diagnostics for "the whole site loads forever": compares the app's own connection pool with a brand-new connection,
 * and lists what every database session is doing (state, lock waits, ages, the first characters of the parameterized
 * query — no data values). Counts and timings only; nothing secret.
 */
export async function GET() {
  const out: Record<string, unknown> = { server: `${process.env.VERCEL_REGION ?? 'local'}, up ${Math.round(process.uptime())} s` };

  const t0 = performance.now();
  try {
    await within(sql`select 1`, 8000);
    out.appPool = `ok ${Math.round(performance.now() - t0)} ms`;
  } catch (e) {
    out.appPool = `${(e as Error).message === 'timeout' ? 'STUCK (no answer in 8 s)' : 'error'} after ${Math.round(performance.now() - t0)} ms`;
  }

  const probe = postgres(process.env.DATABASE_URL ?? '', { prepare: false, max: 1, connect_timeout: 5, idle_timeout: 1, onnotice: () => {} });
  const t1 = performance.now();
  try {
    const rows = await within(
      probe<{ state: string | null; wait: string | null; xact_s: number | null; query_s: number | null; blocked_by: number; query: string | null }[]>`
        select state, nullif(concat_ws(':', wait_event_type, wait_event), '') as wait,
               extract(epoch from now() - xact_start)::int as xact_s, extract(epoch from now() - query_start)::int as query_s,
               cardinality(pg_blocking_pids(pid)) as blocked_by, left(regexp_replace(query, '[[:space:]]+', ' ', 'g'), 70) as query
        from pg_stat_activity
        where datname = current_database() and pid <> pg_backend_pid() and backend_type = 'client backend'
        order by xact_start nulls last`,
      8000,
    );
    out.freshConnection = `ok ${Math.round(performance.now() - t1)} ms`;
    out.sessions = rows.map((r) => `${r.state ?? '?'}${r.wait ? ` wait=${r.wait}` : ''}${r.xact_s != null ? ` tx=${r.xact_s}s` : ''}${r.query_s != null ? ` q=${r.query_s}s` : ''}${r.blocked_by ? ` BLOCKED by ${r.blocked_by}` : ''} | ${r.query ?? ''}`);
  } catch (e) {
    out.freshConnection = `${(e as Error).message === 'timeout' ? 'STUCK (no answer in 8 s)' : `error: ${(e as Error).message.slice(0, 80)}`} after ${Math.round(performance.now() - t1)} ms`;
  } finally {
    await probe.end({ timeout: 1 }).catch(() => {});
  }
  return Response.json(out, { headers: { 'cache-control': 'no-store' } });
}
