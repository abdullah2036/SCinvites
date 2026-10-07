import { describe, it, expect, beforeEach, vi } from 'vitest';
import { sql } from '@/lib/server/db';
import { submitRequest, resubmitRequest, decideRequest, getRequestLinks, listLeaderRequests, listPendingRequests, getLeaderRequest } from '@/lib/server/requests';
import * as invitations from '@/lib/server/invitations';
import { createSession, LEADER_COOKIE, OWNER_COOKIE } from '@/lib/server/sessions';
import { POST as postRequest } from '@/app/api/requests/route';
import { POST as decideRoute } from '@/app/api/requests/[id]/decide/route';
import { GET as linksRoute } from '@/app/api/requests/[id]/links/route';
import { outbox } from '@/lib/server/email';
import { resetDb, makeEvent, makeTemplate, makeLeader } from '../setup/db';
import { makeRequest } from '../setup/request';

const EVENT_AT = '2026-10-12T15:00:00Z';
const people = [
  { name: 'د. هالة البيشي', org: 'جامعة الملك عبدالعزيز', title: null },
  { name: 'أ. عبدالله الغامدي', org: null, title: null },
  { name: 'م. ريم العمري', org: 'أرامكو', title: 'مهندسة' },
];

async function setup() {
  const ev = await makeEvent({ starts_at: new Date(EVENT_AT) });
  const t = await makeTemplate({ event_id: ev.id, allowed_colors: ['night', 'petrol'], stamp_types: ['VIP', 'متحدث'], request_deadline_days: 3 });
  const leader = await makeLeader();
  return { ev, t, leader };
}
const input = (templateId: string, over: Record<string, unknown> = {}) => ({ templateId, stamp: 'VIP', color: 'night', place: null, showQr: true, people, ...over }) as never;

describe('leader requests', () => {
  beforeEach(async () => {
    await resetDb();
    outbox.length = 0;
    vi.useRealTimers();
  });

  it('accepts a request up to the deadline and rejects it after (absolute instants)', async () => {
    const { t, leader } = await setup();
    vi.useFakeTimers({ now: new Date('2026-10-09T14:59:59Z'), toFake: ['Date'] });
    const ok = await submitRequest(leader.id, input(t.id));
    expect(ok.count).toBe(3);
    vi.setSystemTime(new Date('2026-10-09T15:00:01Z'));
    await expect(submitRequest(leader.id, input(t.id))).rejects.toMatchObject({ code: 'deadline_passed', status: 409, message: 'انتهى موعد الطلب لهذه الفعالية' });
  });

  it('refuses templates that are not open to leaders (draft or outside their dates)', async () => {
    const { t, leader } = await setup();
    vi.useFakeTimers({ now: new Date('2026-10-01T00:00:00Z'), toFake: ['Date'] });
    await sql`update templates set available_from = '2026-10-05T00:00:00Z' where id = ${t.id}`;
    await expect(submitRequest(leader.id, input(t.id))).rejects.toMatchObject({ code: 'template_not_available', status: 403 });
    await sql`update templates set available_from = null, status = 'draft' where id = ${t.id}`;
    await expect(submitRequest(leader.id, input(t.id))).rejects.toMatchObject({ code: 'template_not_available', status: 403 });
  });

  it('validates color and stamp against the template', async () => {
    const { t, leader } = await setup();
    vi.useFakeTimers({ now: new Date('2026-10-01T00:00:00Z'), toFake: ['Date'] });
    await expect(submitRequest(leader.id, input(t.id, { color: 'ivory' }))).rejects.toMatchObject({ code: 'color_not_allowed' });
    await expect(submitRequest(leader.id, input(t.id, { stamp: 'شريك' }))).rejects.toMatchObject({ code: 'stamp_not_allowed' });
  });

  it('approving with exclusions creates exactly the right personal invitations', async () => {
    const { t, leader } = await setup();
    vi.useFakeTimers({ now: new Date('2026-10-01T00:00:00Z'), toFake: ['Date'] });
    const { id } = await submitRequest(leader.id, input(t.id));
    vi.useRealTimers();
    const ppl = await sql`select id, name from leader_request_people where request_id = ${id} order by position`;
    await decideRequest(id, { decision: 'approve', excludedPersonIds: [ppl[1].id] });
    const invs = await sql`select invitee_name, created_by_leader_id, kind, color, stamp from invitations where leader_request_id = ${id} order by invitee_name`;
    expect(invs.map((i) => i.invitee_name).sort()).toEqual(['د. هالة البيشي', 'م. ريم العمري'].sort());
    expect(invs.every((i) => i.created_by_leader_id === leader.id && i.kind === 'personal' && i.color === 'night')).toBe(true);
    const [req] = await sql`select status, decided_at from leader_requests where id = ${id}`;
    expect(req.status).toBe('approved');
    expect(req.decided_at).not.toBeNull();
    const [ex] = await sql`select excluded from leader_request_people where id = ${ppl[1].id}`;
    expect(ex.excluded).toBe(true);
  });

  it('a failure mid-approval leaves nothing behind', async () => {
    const { t, leader } = await setup();
    vi.useFakeTimers({ now: new Date('2026-10-01T00:00:00Z'), toFake: ['Date'] });
    const { id } = await submitRequest(leader.id, input(t.id));
    vi.useRealTimers();
    const real = invitations.createInvitation;
    let n = 0;
    const spy = vi.spyOn(invitations, 'createInvitation').mockImplementation(async (...args) => {
      if (++n === 2) throw new Error('boom');
      return real(...args);
    });
    await expect(decideRequest(id, { decision: 'approve', excludedPersonIds: [] })).rejects.toThrow('boom');
    spy.mockRestore();
    const [{ c }] = await sql`select count(*)::int as c from invitations`;
    expect(c).toBe(0);
    const [req] = await sql`select status from leader_requests where id = ${id}`;
    expect(req.status).toBe('pending');
  });

  it('changes requested → leader resubmits → pending again', async () => {
    const { t, leader } = await setup();
    vi.useFakeTimers({ now: new Date('2026-10-01T00:00:00Z'), toFake: ['Date'] });
    const { id } = await submitRequest(leader.id, input(t.id));
    await decideRequest(id, { decision: 'changes_requested', note: 'أضف المسمى الوظيفي' });
    expect((await listLeaderRequests(leader.id))[0]).toMatchObject({ status: 'changes_requested', note: 'أضف المسمى الوظيفي' });
    await resubmitRequest(leader.id, id, input(t.id, { people: [people[0]] }));
    const [req] = await sql`select status, note from leader_requests where id = ${id}`;
    expect(req.status).toBe('pending');
    const [{ c }] = await sql`select count(*)::int as c from leader_request_people where request_id = ${id}`;
    expect(c).toBe(1);
    expect((await listPendingRequests())[0].people).toHaveLength(1);
  });

  it('links appear only after approval and only to the owning leader', async () => {
    const { t, leader } = await setup();
    const other = await makeLeader();
    vi.useFakeTimers({ now: new Date('2026-10-01T00:00:00Z'), toFake: ['Date'] });
    const { id } = await submitRequest(leader.id, input(t.id));
    vi.useRealTimers();
    await expect(getRequestLinks(leader.id, id)).rejects.toMatchObject({ code: 'not_approved', status: 409 });
    await decideRequest(id, { decision: 'approve', excludedPersonIds: [] });
    const links = await getRequestLinks(leader.id, id);
    expect(links).toHaveLength(3);
    expect(links[0].url).toMatch(/\/i\/[a-z0-9]{16}$/);
    await expect(getRequestLinks(other.id, id)).rejects.toMatchObject({ status: 403 });
  });

  it('routes enforce roles: leaders submit, the owner decides', async () => {
    const { t, leader } = await setup();
    await sql`update events set starts_at = now() + interval '20 days'`;
    const { token: lt } = await createSession('leader', leader.id, 't');
    const { token: ot } = await createSession('owner', null, 't');
    const p = { params: Promise.resolve({}) };
    expect((await postRequest(makeRequest('POST', '/api/requests', { body: input(t.id), cookies: { [OWNER_COOKIE]: ot } }), p)).status).toBe(401);
    const res = await postRequest(makeRequest('POST', '/api/requests', { body: input(t.id), cookies: { [LEADER_COOKIE]: lt } }), p);
    expect(res.status).toBe(201);
    const { id } = await res.json();
    const ip = { params: Promise.resolve({ id }) };
    expect((await decideRoute(makeRequest('POST', `/api/requests/${id}/decide`, { body: { decision: 'approve', excludedPersonIds: [] }, cookies: { [LEADER_COOKIE]: lt } }), ip)).status).toBe(401);
    expect((await decideRoute(makeRequest('POST', `/api/requests/${id}/decide`, { body: { decision: 'approve', excludedPersonIds: [] }, cookies: { [OWNER_COOKIE]: ot } }), ip)).status).toBe(200);
    const links = await linksRoute(makeRequest('GET', `/api/requests/${id}/links`, { cookies: { [LEADER_COOKIE]: lt } }), ip);
    expect((await links.json()).length).toBe(3);
  });

  it('returns the leader’s own request for editing, never another leader’s', async () => {
    const { t, leader } = await setup();
    const other = await makeLeader();
    vi.useFakeTimers({ now: new Date('2026-10-01T00:00:00Z'), toFake: ['Date'] });
    const { id } = await submitRequest(leader.id, input(t.id));
    const r = await getLeaderRequest(leader.id, id);
    expect(r).toMatchObject({ id, templateId: t.id, color: 'night', stamp: 'VIP' });
    expect(r.people.map((p) => p.name)).toEqual(people.map((p) => p.name));
    await expect(getLeaderRequest(other.id, id)).rejects.toMatchObject({ status: 403 });
  });

  it('notifies the owner of a new request when enabled', async () => {
    const { t, leader } = await setup();
    await sql`insert into settings (key, value) values ('owner_email', ${sql.json('owner@example.com')})`;
    vi.useFakeTimers({ now: new Date('2026-10-01T00:00:00Z'), toFake: ['Date'] });
    await submitRequest(leader.id, input(t.id));
    expect(outbox.some((m) => m.to === 'owner@example.com' && m.subject.includes('طلب دعوات'))).toBe(true);
  });
});
