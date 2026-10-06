import { sql } from './db';

const DATA = ['rsvps', 'registrations', 'invitations', 'leader_request_people', 'leader_requests', 'login_tokens', 'sessions', 'leaders', 'templates', 'events', 'audit_log', 'auth_attempts', 'rate_limits'];

/**
 * Wipes all app data (e.g. test runs on production before handing over). Settings and semesters are kept
 * with keepSettings. The owner password lives in env vars and is unaffected; uploaded artwork stays in Storage.
 */
export async function resetAppData(opts: { keepSettings?: boolean }): Promise<Record<string, number>> {
  const tables = opts.keepSettings ? DATA : [...DATA, 'settings', 'semesters'];
  return sql.begin(async (tx) => {
    const counts: Record<string, number> = {};
    for (const t of tables) counts[t] = Number((await tx.unsafe<{ n: number }[]>(`select count(*)::int as n from ${t}`))[0].n);
    await tx.unsafe(`truncate ${tables.join(', ')} restart identity cascade`);
    return counts;
  });
}
