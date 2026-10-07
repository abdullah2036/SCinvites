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
    await sql`select 1`;
    checks.database = 'ok';
    const [{ n }] = await sql<{ n: number }[]>`select count(*)::int as n from schema_migrations`;
    checks.tables = n >= MIGRATIONS ? 'ok' : `only ${n} of ${MIGRATIONS} migrations applied — run the "Migrate production database" action`;
  } catch {
    checks.database = 'cannot connect — check DATABASE_URL (Transaction pooler, port 6543, password filled in)';
    checks.tables = 'unknown';
  }

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

  const ok = ['database', 'tables', 'ownerPassword', 'ownerPath', 'appUrl'].every((k) => checks[k] === 'ok');
  return Response.json({ ok, checks }, { status: ok ? 200 : 503, headers: { 'cache-control': 'no-store' } });
}
