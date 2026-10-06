import { describe, it, expect, beforeEach } from 'vitest';
import { sql } from '@/lib/server/db';
import { runRetention } from '@/lib/server/retention';
import { getAnalytics } from '@/lib/server/analytics';
import { GET as health } from '@/app/api/health/route';
import { GET as cron } from '@/app/api/cron/retention/route';
import { resetDb, makeEvent, makeTemplate, makeInvitation } from '../setup/db';
import { makeRequest } from '../setup/request';

const day = 86400_000;
const p = { params: Promise.resolve({}) };

async function eventWithGuests(daysAgo: number, slug: string) {
  const ev = await makeEvent({ starts_at: new Date(Date.now() - daysAgo * day) });
  const t = await makeTemplate({ event_id: ev.id });
  const g = await makeInvitation({ template_id: t.id, kind: 'general', invitee_name: null, slug });
  const [r] = await sql`insert into registrations (invitation_id, name, email, source) values (${g.id}, 'ريم', ${slug + '@x.com'}, 'whatsapp') returning id`;
  await sql`insert into rsvps (invitation_id, registration_id, answer) values (${g.id}, ${r.id}, 'yes')`;
  const personal = await makeInvitation({ template_id: t.id, invitee_name: 'د. محمد أحمد', invitee_org: 'وكالة الفضاء', status: 'confirmed' });
  await sql`insert into rsvps (invitation_id, answer) values (${personal.id}, 'yes')`;
  return { personal };
}

describe('guest data retention', () => {
  beforeEach(resetDb);

  it('anonymizes guests of events that ended more than retention_days ago and keeps newer ones', async () => {
    const old = await eventWithGuests(91, 'oldevent');
    await eventWithGuests(89, 'newevent');
    const r = await runRetention();
    expect(r.anonymized).toBe(2); // one registration + one personal invitation
    const regs = await sql`select email, name, anonymized_at from registrations order by email`;
    expect(regs.find((x) => x.email.startsWith('newevent'))?.name).toBe('ريم');
    expect(regs.find((x) => x.anonymized_at)?.name).toBe('محذوف');
    const [inv] = await sql`select invitee_name, invitee_org from invitations where id = ${old.personal.id}`;
    expect(inv).toEqual({ invitee_name: 'محذوف', invitee_org: null });
  });

  it('keeps statistics intact and is idempotent', async () => {
    await eventWithGuests(120, 'oldevent');
    const before = (await getAnalytics({})).totals;
    await runRetention();
    expect((await runRetention()).anonymized).toBe(0);
    expect((await getAnalytics({})).totals).toEqual(before);
  });

  it('honours a custom retention period', async () => {
    await eventWithGuests(40, 'event40');
    await sql`insert into settings (key, value) values ('retention_days', ${sql.json(30)})`;
    expect((await runRetention()).anonymized).toBe(2);
  });

  it('health check queries the database', async () => {
    const res = await health();
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });

  it('cron route requires the bearer secret', async () => {
    expect((await cron(makeRequest('GET', '/api/cron/retention'))).status).toBe(401);
    expect((await cron(makeRequest('GET', '/api/cron/retention', { headers: { authorization: 'Bearer wrong' } }))).status).toBe(401);
    const ok = await cron(makeRequest('GET', '/api/cron/retention', { headers: { authorization: `Bearer ${process.env.CRON_SECRET}` } }));
    expect(ok.status).toBe(200);
  });
});
