import { createClient } from '@supabase/supabase-js';
import { sql } from '@/lib/server/db';
import { checkOwnerHashFormat } from '@/lib/server/owner-auth';

export const dynamic = 'force-dynamic';

// Number of files in supabase/migrations — bump when adding one.
const MIGRATIONS = 5;

/**
 * Plain-language health report for the developer: each part says "ok" or what is wrong.
 * Reports only yes/no facts — never secret values, connection strings or the owner path.
 */
export async function GET(req: Request) {
  const checks: Record<string, string> = {};

  try {
    const t0 = performance.now();
    await sql`select 1`;
    checks.database = `ok (${Math.round(performance.now() - t0)} ms)`;
    const [{ n }] = await sql<{ n: number }[]>`select count(*)::int as n from schema_migrations`;
    checks.tables = n >= MIGRATIONS ? 'ok' : `only ${n} of ${MIGRATIONS} migrations applied — run the "Migrate production database" action`;
  } catch {
    checks.database = 'cannot connect — check DATABASE_URL (Transaction pooler, port 6543, password filled in)';
    checks.tables = 'unknown';
  }

  // Session mode (5432) gives every open client connection its own database connection, and suspended functions keep
  // theirs, so the pool fills up and requests wait ("loads forever"). Functions must use the Transaction pooler.
  try {
    const port = new URL(process.env.DATABASE_URL ?? '').port;
    checks.pooler = port === '6543' ? 'ok (transaction pooler)' : port === '5432' ? 'WRONG: session pooler (5432) — set DATABASE_URL to the Transaction pooler URL (port 6543)' : `port ${port || 'default'}`;
  } catch {
    checks.pooler = 'unknown';
  }
  if (checks.database.startsWith('ok')) {
    try {
      const [c] = await sql<{ total: number; active: number; stuck: number }[]>`
        select count(*)::int as total,
               count(*) filter (where state = 'active')::int as active,
               count(*) filter (where state like 'idle in transaction%')::int as stuck
        from pg_stat_activity where datname = current_database()`;
      checks.connections = `${c.total} open, ${c.active} busy, ${c.stuck} stuck in a transaction`;
    } catch {
      checks.connections = 'unknown';
    }
  }
  checks.server = `${process.env.VERCEL_REGION ?? 'local'}, up ${Math.round(process.uptime())} s`;

  const pw = checkOwnerHashFormat();
  checks.ownerPassword =
    pw === 'ok' ? 'ok' : pw === 'missing' ? 'OWNER_PASSWORD_HASH is not set' : 'OWNER_PASSWORD_HASH is not a valid hash — paste the full b64:… line from npm run hash-password';
  checks.ownerPath = process.env.OWNER_PATH ? 'ok' : 'OWNER_PATH is not set';

  let expected = '';
  try {
    expected = new URL(process.env.APP_URL ?? '').host;
  } catch {
    /* not set */
  }
  const visited = new URL(req.url).host;
  checks.appUrl = !expected ? 'APP_URL is not set' : expected === visited ? 'ok' : `mismatch — APP_URL is for ${expected} but this page was opened on ${visited}`;

  checks.cronSecret = process.env.CRON_SECRET ? 'ok' : 'CRON_SECRET is not set (daily jobs will be refused)';

  if (process.env.SUPABASE_URL && process.env.SUPABASE_SECRET_KEY) {
    try {
      const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, { auth: { persistSession: false } });
      const { data, error } = await sb.storage.listBuckets();
      checks.storage = error ? 'cannot reach Supabase Storage — check SUPABASE_URL / SUPABASE_SECRET_KEY' : data.some((b) => b.name === 'artwork') ? 'ok' : 'bucket "artwork" is missing';
    } catch {
      checks.storage = 'cannot reach Supabase Storage';
    }
  } else {
    checks.storage = 'SUPABASE_URL / SUPABASE_SECRET_KEY not set (artwork uploads disabled)';
  }

  checks.email = process.env.RESEND_API_KEY ? 'ok' : 'not set up yet (test copies and alerts are not sent)';

  const ok = ['tables', 'ownerPassword', 'ownerPath', 'appUrl'].every((k) => checks[k] === 'ok') && checks.database.startsWith('ok') && !checks.pooler.startsWith('WRONG');
  return Response.json({ ok, checks }, { status: ok ? 200 : 503, headers: { 'cache-control': 'no-store' } });
}
