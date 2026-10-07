import { describe, it, expect, beforeEach } from 'vitest';
import { sql } from '@/lib/server/db';
import { getStats } from '@/lib/server/stats';
import { createSession, OWNER_COOKIE } from '@/lib/server/sessions';
import { GET as getStatsRoute } from '@/app/api/stats/route';
import { resetDb, makeEvent, makeTemplate, makeInvitation, makeLeader } from '../setup/db';
import { makeRequest } from '../setup/request';

const day = 86400_000;

describe('getStats', () => {
  beforeEach(resetDb);

  it('returns empty-safe values on an empty database', async () => {
    const s = await getStats();
    expect(s.nextEvent).toBeNull();
    expect(s.generalInvitation).toBeNull();
    expect(s.byStatus).toEqual({ confirmed: 0, opened: 0, created: 0, declined: 0 });
    expect(s.total).toBe(0);
    expect(s.recent).toEqual([]);
  });

  it('counts personal statuses and general registrations together', async () => {
    const ev = await makeEvent({ starts_at: new Date(Date.now() + 5 * day) });
    const t = await makeTemplate({ event_id: ev.id, track: 'space' });
    await makeInvitation({ template_id: t.id, status: 'confirmed' });
    const p2 = await makeInvitation({ template_id: t.id, status: 'created' });
    await sql`update invitations set status = 'created' where id = ${p2.id}`;
    const g = await makeInvitation({ template_id: t.id, kind: 'general', invitee_name: null, slug: 'rr26' });
    const regs = await sql`insert into registrations (invitation_id, name, email) values (${g.id}, 'أ', 'a@x.com'), (${g.id}, 'ب', 'b@x.com'), (${g.id}, 'ج', 'c@x.com') returning id`;
    await sql`insert into rsvps (invitation_id, registration_id, answer) values (${g.id}, ${regs[0].id}, 'yes'), (${g.id}, ${regs[1].id}, 'yes')`;
    const s = await getStats();
    expect(s.byStatus).toEqual({ confirmed: 3, opened: 1, created: 1, declined: 0 });
    expect(s.total).toBe(5);
    expect(s.byTrack.space).toBe(5);
    expect(s.generalInvitation?.slug).toBe('rr26');
  });

  it('picks the soonest future active event with its confirmation count', async () => {
    const later = await makeEvent({ title: 'لاحقة', starts_at: new Date(Date.now() + 20 * day) });
    const soon = await makeEvent({ title: 'قريبة', starts_at: new Date(Date.now() + 2 * day) });
    await makeEvent({ title: 'ماضية', starts_at: new Date(Date.now() - 2 * day) });
    await makeEvent({ title: 'مؤرشفة', starts_at: new Date(Date.now() + 1 * day), status: 'archived' });
    const t = await makeTemplate({ event_id: soon.id });
    await makeInvitation({ template_id: t.id, status: 'confirmed' });
    await makeInvitation({ template_id: t.id, status: 'opened' });
    void later;
    const s = await getStats();
    expect(s.nextEvent).toMatchObject({ title: 'قريبة', confirmed: 1, total: 2 });
  });

  it('counts pending leader requests and lists them', async () => {
    const t = await makeTemplate();
    const l = await makeLeader({ name: 'خالد الحربي' });
    await sql`insert into leader_requests (leader_id, template_id, stamp, color) values (${l.id}, ${t.id}, 'VIP', 'night')`;
    const s = await getStats();
    expect(s.pendingApprovals).toBe(1);
    expect(s.pendingList[0]).toMatchObject({ leaderName: 'خالد الحربي', stamp: 'VIP' });
  });

  it('is owner-only over HTTP', async () => {
    expect((await getStatsRoute(makeRequest('GET', '/api/stats'), { params: Promise.resolve({}) })).status).toBe(401);
    const { token } = await createSession('owner', null, 't');
    expect((await getStatsRoute(makeRequest('GET', '/api/stats', { cookies: { [OWNER_COOKIE]: token } }), { params: Promise.resolve({}) })).status).toBe(200);
  });
});
