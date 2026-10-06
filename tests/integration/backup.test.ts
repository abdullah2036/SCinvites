import { describe, it, expect, beforeEach } from 'vitest';
import { sql } from '@/lib/server/db';
import { createBackup, restoreBackup } from '@/lib/server/backup';
import { resetDb, makeEvent, makeTemplate, makeInvitation, makeLeader } from '../setup/db';

const PASS = 'correct horse battery staple';

async function counts() {
  const rows = await sql<{ t: string; n: number }[]>`
    select 'events' as t, count(*)::int as n from events union all select 'templates', count(*)::int from templates
    union all select 'invitations', count(*)::int from invitations union all select 'registrations', count(*)::int from registrations
    union all select 'rsvps', count(*)::int from rsvps union all select 'leaders', count(*)::int from leaders
    union all select 'settings', count(*)::int from settings union all select 'audit_log', count(*)::int from audit_log`;
  return Object.fromEntries(rows.map((r) => [r.t, r.n]));
}

describe('encrypted backup and restore', () => {
  beforeEach(resetDb);

  it('restores every row, including arrays, json and Arabic text, after a wipe', async () => {
    const ev = await makeEvent({ title: 'ثورة الصواريخ ١٤٤٨' });
    const v1 = await makeTemplate({ event_id: ev.id, stamp_types: ['VIP', 'متحدث'], allowed_committees: ['لجنة العلاقات'] });
    await makeTemplate({ event_id: ev.id, version: 2, supersedes_id: v1.id, status: 'draft', approved_at: null });
    const g = await makeInvitation({ template_id: v1.id, kind: 'general', invitee_name: null, slug: 'rr26' });
    const [r] = await sql`insert into registrations (invitation_id, name, email, source) values (${g.id}, 'ريم', 'r@x.com', 'whatsapp') returning id`;
    await sql`insert into rsvps (invitation_id, registration_id, answer) values (${g.id}, ${r.id}, 'yes')`;
    await makeLeader();
    await sql`insert into settings (key, value) values ('notifications', ${sql.json({ leaderRequests: false, invitationRequests: true })})`;
    await sql`insert into audit_log (actor, action, target, meta) values ('owner', 'x', 'y', ${sql.json({ n: 1 })})`;
    await sql`insert into sessions (subject, token_hash, expires_at) values ('owner', 'h', now() + interval '1 day')`;
    const before = await counts();

    const file = await createBackup({ passphrase: PASS });
    await resetDb();
    const summary = await restoreBackup(file, { passphrase: PASS });

    expect(await counts()).toEqual(before);
    expect(summary.tables.invitations).toBe(1);
    const [t] = await sql`select stamp_types, allowed_committees from templates where id = ${v1.id}`;
    expect(t).toEqual({ stamp_types: ['VIP', 'متحدث'], allowed_committees: ['لجنة العلاقات'] });
    const [s] = await sql`select value from settings where key = 'notifications'`;
    expect(s.value).toEqual({ leaderRequests: false, invitationRequests: true });
    const [{ n }] = await sql`select count(*)::int as n from sessions`;
    expect(n).toBe(0); // sessions are never restored: everyone signs in again
  });

  it('rejects a wrong passphrase and a tampered file', async () => {
    await makeEvent();
    const file = await createBackup({ passphrase: PASS });
    await expect(restoreBackup(file, { passphrase: 'wrong' })).rejects.toThrow(/passphrase|corrupt/i);
    const tampered = Buffer.from(file);
    tampered[tampered.length - 5] ^= 0xff;
    await expect(restoreBackup(tampered, { passphrase: PASS })).rejects.toThrow(/passphrase|corrupt/i);
  });

  it('refuses to restore into a database with data unless forced', async () => {
    await makeEvent();
    const file = await createBackup({ passphrase: PASS });
    await expect(restoreBackup(file, { passphrase: PASS })).rejects.toThrow(/not empty/);
    await restoreBackup(file, { passphrase: PASS, replace: true });
    expect((await counts()).events).toBe(1);
  });
});
