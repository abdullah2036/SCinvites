import { describe, it, expect, beforeEach } from 'vitest';
import { sql } from '@/lib/server/db';
import { getAnalytics } from '@/lib/server/analytics';
import { upsertSemester, listSemesters } from '@/lib/server/semesters';
import { createSession, OWNER_COOKIE, LEADER_COOKIE } from '@/lib/server/sessions';
import { GET as getAnalyticsRoute } from '@/app/api/analytics/route';
import { resetDb, makeEvent, makeTemplate, makeInvitation, makeLeader } from '../setup/db';
import { makeRequest } from '../setup/request';

// Riyadh is UTC+3: Monday 2026-10-12 20:00 Riyadh = 17:00Z; Tuesday 2026-10-13 09:00 Riyadh = 06:00Z.
const MON_20 = '2026-10-12T17:00:00Z';
const TUE_09 = '2026-10-13T06:00:00Z';

async function fixture() {
  const ev = await makeEvent({ title: 'ثورة الصواريخ', starts_at: new Date('2026-10-20T16:00:00Z') }); // Tue 19:00 Riyadh
  const t = await makeTemplate({ event_id: ev.id });
  const a = await makeInvitation({ template_id: t.id, status: 'confirmed', opened_at: new Date('2026-10-12T16:00:00Z'), open_source: 'whatsapp' });
  await sql`insert into rsvps (invitation_id, answer, answered_at) values (${a.id}, 'yes', ${MON_20})`;
  const b = await makeInvitation({ template_id: t.id, status: 'declined', opened_at: new Date('2026-10-12T10:00:00Z'), open_source: 'email' });
  await sql`insert into rsvps (invitation_id, answer, answered_at) values (${b.id}, 'no', ${TUE_09})`;
  await makeInvitation({ template_id: t.id, status: 'created' });
  const g = await makeInvitation({ template_id: t.id, kind: 'general', invitee_name: null, slug: 'rr26' });
  const [r1] = await sql`insert into registrations (invitation_id, name, email, source, created_at) values (${g.id}, 'أ', 'a@x.com', 'whatsapp', '2026-10-12T16:30:00Z') returning id`;
  const [r2] = await sql`insert into registrations (invitation_id, name, email, source, created_at) values (${g.id}, 'ب', 'b@x.com', 'instagram', '2026-10-13T05:00:00Z') returning id`;
  await sql`insert into registrations (invitation_id, name, email, source) values (${g.id}, 'ج', 'c@x.com', 'qr')`;
  await sql`insert into rsvps (invitation_id, registration_id, answer, answered_at) values (${g.id}, ${r1.id}, 'yes', ${MON_20}), (${g.id}, ${r2.id}, 'yes', ${TUE_09})`;
  return { ev };
}

describe('owner analytics', () => {
  beforeEach(resetDb);

  it('counts attending, declined and unanswered across personal and public invitations', async () => {
    await fixture();
    const a = await getAnalytics({});
    expect(a.totals).toMatchObject({ attending: 3, declined: 1, noAnswer: 1, opened: 5, invitations: 4, registrations: 3, events: 1 });
    expect(a.totals.confirmationRate).toBeCloseTo(3 / 5);
  });

  it('finds the weekday and hour most people confirm, in Riyadh time', async () => {
    await fixture();
    const a = await getAnalytics({});
    expect(a.heatmap[1][20]).toBe(2); // Monday 20:00
    expect(a.heatmap[2][9]).toBe(1); // Tuesday 09:00
    expect(a.peak).toEqual({ weekday: 1, hour: 20, count: 2 });
  });

  it('measures time from opening to confirming', async () => {
    await fixture();
    const a = await getAnalytics({});
    // personal: 60 min; general r1: 30 min; general r2: 60 min
    expect(a.timeToConfirm?.meanMinutes).toBeCloseTo(50);
    expect(a.timeToConfirm?.medianMinutes).toBeCloseTo(60);
  });

  it('ranks registration sources', async () => {
    await fixture();
    const a = await getAnalytics({});
    expect(a.sources[0]).toEqual({ source: 'whatsapp', count: 2 });
    expect(a.sources.map((s) => s.source).sort()).toEqual(['email', 'instagram', 'qr', 'whatsapp']);
  });

  it('reports the best event slot by confirmation rate', async () => {
    await fixture();
    const a = await getAnalytics({});
    expect(a.bestSlots[0]).toMatchObject({ weekday: 2, hour: 19, events: 1 });
  });

  it('splits totals by semester and puts events outside all semesters in «خارج الفصول»', async () => {
    await fixture();
    const other = await makeEvent({ title: 'قديمة', starts_at: new Date('2025-01-10T16:00:00Z') });
    await makeInvitation({ template_id: (await makeTemplate({ event_id: other.id })).id });
    await upsertSemester({ name: 'الفصل الأول ١٤٤٨', startsOn: '2026-08-20', endsOn: '2026-12-31' });
    await upsertSemester({ name: 'الفصل الثاني ١٤٤٨', startsOn: '2027-01-10', endsOn: '2027-05-30' });
    const a = await getAnalytics({});
    const first = a.semesters.find((s) => s.name === 'الفصل الأول ١٤٤٨')!;
    expect(first.totals.attending).toBe(3);
    expect(a.semesters.find((s) => s.name === 'الفصل الثاني ١٤٤٨')!.totals.invitations).toBe(0);
    expect(a.semesters.find((s) => s.id === null)).toMatchObject({ name: 'خارج الفصول' });
    const scoped = await getAnalytics({ semesterId: first.id! });
    expect(scoped.totals.events).toBe(1);
  });

  it('rejects overlapping semesters', async () => {
    await upsertSemester({ name: 'أ', startsOn: '2026-08-20', endsOn: '2026-12-31' });
    await expect(upsertSemester({ name: 'ب', startsOn: '2026-12-01', endsOn: '2027-03-01' })).rejects.toMatchObject({ code: 'semester_overlap' });
    expect(await listSemesters()).toHaveLength(1);
  });

  it('keeps counting after guest data is anonymized', async () => {
    await fixture();
    await sql`update registrations set name = 'محذوف', email = 'deleted+' || id || '@invalid', anonymized_at = now()`;
    expect((await getAnalytics({})).totals.attending).toBe(3);
  });

  it('is owner-only: leaders get 401', async () => {
    const leader = await makeLeader();
    const { token: lt } = await createSession('leader', leader.id, 't');
    expect((await getAnalyticsRoute(makeRequest('GET', '/api/analytics', { cookies: { [LEADER_COOKIE]: lt } }), { params: Promise.resolve({}) })).status).toBe(401);
    const { token } = await createSession('owner', null, 't');
    expect((await getAnalyticsRoute(makeRequest('GET', '/api/analytics', { cookies: { [OWNER_COOKIE]: token } }), { params: Promise.resolve({}) })).status).toBe(200);
  });
});
