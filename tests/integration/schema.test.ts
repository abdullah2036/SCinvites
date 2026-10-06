import { describe, it, expect, beforeEach } from 'vitest';
import { sql } from '@/lib/server/db';
import { runMigrations } from '@/lib/server/migrate';
import { resetDb, makeEvent, makeTemplate, makeInvitation } from '../setup/db';

describe('schema', () => {
  beforeEach(resetDb);

  it('applies migrations idempotently', async () => {
    expect(await runMigrations(sql)).toEqual([]);
  });

  it('stores Arabic text and Arabic-Indic digits (UTF-8 like Supabase)', async () => {
    const [{ enc }] = await sql<{ enc: string }[]>`select current_setting('server_encoding') as enc`;
    expect(enc).toBe('UTF8');
    const [{ v }] = await sql<{ v: string }[]>`select ${'الفصل الأول ١٤٤٨ · ✦'}::text as v`;
    expect(v).toBe('الفصل الأول ١٤٤٨ · ✦');
  });

  it('enables RLS with no policies on every app table', async () => {
    const tables = await sql<{ relname: string; relrowsecurity: boolean }[]>`
      select c.relname, c.relrowsecurity from pg_class c join pg_namespace n on n.oid = c.relnamespace
      where n.nspname = 'public' and c.relkind = 'r' and c.relname <> 'schema_migrations'`;
    expect(tables.length).toBeGreaterThanOrEqual(14);
    for (const t of tables) expect(t.relrowsecurity, t.relname).toBe(true);
    const [{ count }] = await sql<{ count: number }[]>`select count(*)::int as count from pg_policies where schemaname = 'public'`;
    expect(count).toBe(0);
  });

  it('accepts only lowercase uqu.edu.sa leader emails', async () => {
    await expect(sql`insert into leaders (name, email, committee) values ('أ', 'x@gmail.com', 'ع')`).rejects.toThrow(/check/);
    await expect(sql`insert into leaders (name, email, committee) values ('أ', 'X@uqu.edu.sa', 'ع')`).rejects.toThrow(/check/);
    await sql`insert into leaders (name, email, committee) values ('أ', 'x@uqu.edu.sa', 'ع')`;
  });

  it('keeps invitation slugs unique', async () => {
    const t = await makeTemplate({ event_id: (await makeEvent()).id, status: 'approved' });
    await makeInvitation({ template_id: t.id, slug: 'rr26' });
    await expect(makeInvitation({ template_id: t.id, slug: 'rr26' })).rejects.toThrow(/unique|duplicate/);
  });

  it('allows one rsvp per personal invitation and per registration', async () => {
    const t = await makeTemplate({ event_id: (await makeEvent()).id, status: 'approved' });
    const personal = await makeInvitation({ template_id: t.id });
    await sql`insert into rsvps (invitation_id, answer) values (${personal.id}, 'yes')`;
    await expect(sql`insert into rsvps (invitation_id, answer) values (${personal.id}, 'no')`).rejects.toThrow(/unique|duplicate/);

    const general = await makeInvitation({ template_id: t.id, kind: 'general', invitee_name: null });
    const [reg] = await sql`insert into registrations (invitation_id, name, email) values (${general.id}, 'ريم', 'r@x.com') returning id`;
    await sql`insert into rsvps (invitation_id, registration_id, answer) values (${general.id}, ${reg.id}, 'yes')`;
    await expect(sql`insert into rsvps (invitation_id, registration_id, answer) values (${general.id}, ${reg.id}, 'no')`).rejects.toThrow(/unique|duplicate/);
  });

  it('rate_limit_hit allows up to max within the window', async () => {
    const results: boolean[] = [];
    for (let i = 0; i < 3; i++) {
      const [{ ok }] = await sql<{ ok: boolean }[]>`select rate_limit_hit('k', 60, 2) as ok`;
      results.push(ok);
    }
    expect(results).toEqual([true, true, false]);
  });
});
