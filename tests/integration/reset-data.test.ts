import { describe, it, expect, beforeEach } from 'vitest';
import { sql } from '@/lib/server/db';
import { resetAppData } from '@/lib/server/reset';
import { resetDb, makeEvent, makeTemplate, makeInvitation, makeLeader } from '../setup/db';

describe('resetAppData (wipe test data before launch)', () => {
  beforeEach(resetDb);

  it('removes all test data and sessions but keeps settings and semesters when asked', async () => {
    const t = await makeTemplate({ event_id: (await makeEvent()).id });
    await makeInvitation({ template_id: t.id });
    await makeLeader();
    await sql`insert into settings (key, value) values ('owner_email', ${sql.json('owner@example.com')})`;
    await sql`insert into semesters (name, starts_on, ends_on) values ('ف١', '2026-08-20', '2026-12-31')`;
    await sql`insert into sessions (subject, token_hash, expires_at) values ('owner', 'h', now() + interval '1 day')`;
    const removed = await resetAppData({ keepSettings: true });
    expect(removed.invitations).toBe(1);
    const [c] = await sql`select (select count(*) from events)::int e, (select count(*) from invitations)::int i, (select count(*) from leaders)::int l,
      (select count(*) from sessions)::int s, (select count(*) from settings)::int st, (select count(*) from semesters)::int se`;
    expect(c).toEqual({ e: 0, i: 0, l: 0, s: 0, st: 1, se: 1 });
  });

  it('wipes settings and semesters too by default', async () => {
    await sql`insert into settings (key, value) values ('owner_email', ${sql.json('x@example.com')})`;
    await resetAppData({});
    const [{ n }] = await sql`select count(*)::int as n from settings`;
    expect(n).toBe(0);
  });
});
