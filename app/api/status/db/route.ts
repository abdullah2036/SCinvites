import net from 'node:net';
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

  // Records what the client sends, to confirm patches/postgres+3.4.9.patch is live: a query with a plain value must go
  // in one exchange (no Flush/'H' message mid-query).
  const sent: string[] = [];
  const url = new URL(process.env.DATABASE_URL ?? 'postgres://localhost');
  const probe = postgres(process.env.DATABASE_URL ?? '', {
    prepare: false, max: 1, connect_timeout: 5, idle_timeout: 1, onnotice: () => {},
    socket: () =>
      new Promise<net.Socket>((resolve, reject) => {
        const s = net.connect(Number(url.port || 5432), url.hostname);
        const write = s.write.bind(s) as (...a: unknown[]) => boolean;
        s.write = ((chunk: unknown, ...rest: unknown[]) => {
          const b = Buffer.from(chunk as Buffer);
          for (let i = 0; i + 5 <= b.length; i += 1 + b.readInt32BE(i + 1)) sent.push(String.fromCharCode(b[i]));
          return write(chunk, ...rest);
        }) as typeof s.write;
        s.once('connect', () => resolve(s));
        s.once('error', reject);
      }),
  } as never);
  const t1 = performance.now();
  try {
    const rows = await within(
      probe<{ who: string | null; state: string | null; wait: string | null; xact_s: number | null; query_s: number | null; blocked_by: number; query: string | null }[]>`
        select usename as who, state, nullif(concat_ws(':', wait_event_type, wait_event), '') as wait,
               extract(epoch from now() - xact_start)::int as xact_s, extract(epoch from now() - query_start)::int as query_s,
               cardinality(pg_blocking_pids(pid)) as blocked_by, left(regexp_replace(query, '[[:space:]]+', ' ', 'g'), 70) as query
        from pg_stat_activity
        where datname = current_database() and pid <> pg_backend_pid() and backend_type = 'client backend'
        order by xact_start nulls last`,
      8000,
    );
    out.freshConnection = `ok ${Math.round(performance.now() - t1)} ms`;
    sent.length = 0;
    await within(probe`select ${'probe'}::text as x`, 5000);
    out.oneRoundTrip = sent.includes('H') ? `NO (${sent.join('')}) — postgres.js patch not applied` : `yes (${sent.join('')})`;
    out.sessions = rows.map((r) => `${r.who ?? '?'} ${r.state ?? '?'}${r.wait ? ` wait=${r.wait}` : ''}${r.xact_s != null ? ` tx=${r.xact_s}s` : ''}${r.query_s != null ? ` q=${r.query_s}s` : ''}${r.blocked_by ? ` BLOCKED by ${r.blocked_by}` : ''} | ${r.query ?? ''}`);
    // What the stuck-connection job did: runs that ended at least one connection, and any failed runs (last 2 days).
    const runs = await within(
      probe<{ at: string; status: string; message: string }[]>`
        select to_char(start_time at time zone 'Asia/Riyadh', 'MM-DD HH24:MI:SS') as at, status, left(return_message, 80) as message
        from cron.job_run_details d join cron.job j on j.jobid = d.jobid
        where j.jobname = 'reap-stuck-connections' and start_time > now() - interval '2 days'
          and (status <> 'succeeded' or return_message <> 'SELECT 0')
        order by start_time desc limit 25`,
      5000,
    ).catch(() => null);
    out.reaperActions = runs ? runs.map((r) => `${r.at} ${r.status} ${r.message}`) : 'unavailable';
  } catch (e) {
    out.freshConnection = `${(e as Error).message === 'timeout' ? 'STUCK (no answer in 8 s)' : `error: ${(e as Error).message.slice(0, 80)}`} after ${Math.round(performance.now() - t1)} ms`;
  } finally {
    await probe.end({ timeout: 1 }).catch(() => {});
  }
  return Response.json(out, { headers: { 'cache-control': 'no-store' } });
}
