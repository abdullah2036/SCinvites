import { describe, it, expect, beforeEach, beforeAll, vi } from 'vitest';
import bcrypt from 'bcryptjs';
import { sql } from '@/lib/server/db';
import { updateSettings, getSettings } from '@/lib/server/settings';
import { approveTemplate, updateTemplate, createTemplate, templatesVisibleToLeader, currentVersionOf } from '@/lib/server/templates';
import { submitRequest, decideRequest } from '@/lib/server/requests';
import { runRetention } from '@/lib/server/retention';
import { getAnalytics } from '@/lib/server/analytics';
import { getRegistration, openInvitation, answerRsvp } from '@/lib/server/guest';
import { updateLeaderCommittee } from '@/lib/server/leader-auth';
import { POST as login } from '@/app/api/owner/login/route';
import { PATCH as patchLeader } from '@/app/api/leaders/[id]/route';
import { createSession } from '@/lib/server/sessions';
import { OWNER_COOKIE } from '@/lib/server/sessions';
import { resetDb, makeEvent, makeTemplate, makeLeader, makeInvitation } from '../setup/db';
import { makeRequest, readSetCookies } from '../setup/request';

const p = { params: Promise.resolve({}) };
const day = 86400_000;

describe('review fixes', () => {
  beforeAll(() => {
    process.env.OWNER_PASSWORD_HASH = bcrypt.hashSync('correct horse', 4);
  });
  beforeEach(async () => {
    await resetDb();
    vi.useRealTimers();
  });

  it('I1: saving settings with empty email fields stores nothing instead of crashing', async () => {
    await updateSettings({ owner_email: 'owner@example.com' });
    await updateSettings({ owner_email: null, email_sender_address: null, retention_days: 60 });
    const s = await getSettings();
    expect(s.owner_email).toBeNull();
    expect(s.email_sender_address).toBeNull();
    expect(s.retention_days).toBe(60);
  });

  it('I2: parallel wrong passwords from one IP get at most 5 checks', async () => {
    const attempt = () => login(makeRequest('POST', '/api/owner/login', { body: { password: 'nope' }, ip: '6.6.6.6' }), p);
    const results = await Promise.all(Array.from({ length: 15 }, attempt));
    expect(results.filter((r) => r.status === 401).length).toBeLessThanOrEqual(5);
    expect(results.filter((r) => r.status === 423).length).toBeGreaterThanOrEqual(10);
    const [{ n }] = await sql`select count(*)::int as n from auth_attempts where not succeeded`;
    expect(n).toBeLessThanOrEqual(5);
  });

  it('I11: a device that logged in before is not locked out by the global lock', async () => {
    const ok = await login(makeRequest('POST', '/api/owner/login', { body: { password: 'correct horse' }, ip: '1.1.1.1' }), p);
    const device = readSetCookies(ok)['sc_owner_device'];
    expect(device?.attrs).toMatch(/HttpOnly/);
    for (let i = 0; i < 20; i++) await login(makeRequest('POST', '/api/owner/login', { body: { password: 'nope' }, ip: `9.9.8.${i}` }), p);
    const stranger = await login(makeRequest('POST', '/api/owner/login', { body: { password: 'correct horse' }, ip: '2.2.2.2' }), p);
    expect(stranger.status).toBe(423);
    const known = await login(makeRequest('POST', '/api/owner/login', { body: { password: 'correct horse' }, ip: '3.3.3.3', cookies: { sc_owner_device: decodeURIComponent(device.value) } }), p);
    expect(known.status).toBe(200);
    expect(readSetCookies(known)[OWNER_COOKIE]).toBeTruthy();
  });

  it('I3a: a pending leader request on v1 can still be approved after v2 is published', async () => {
    const ev = await makeEvent({ starts_at: new Date(Date.now() + 20 * day) });
    const v1 = await makeTemplate({ event_id: ev.id, allowed_committees: [] });
    const leader = await makeLeader();
    const { id } = await submitRequest(leader.id, { templateId: v1.id, stamp: 'VIP', color: 'night', people: [{ name: 'أ' }, { name: 'ب' }] } as never);
    await approveTemplate((await updateTemplate(v1.id, { requestDeadlineDays: 2 })).id);
    await decideRequest(id, { decision: 'approve', excludedPersonIds: [] });
    const [{ n }] = await sql`select count(*)::int as n from invitations where leader_request_id = ${id}`;
    expect(n).toBe(2);
  });

  it('I3b: editing an approved template twice reuses its open draft (one current version)', async () => {
    const ev = await makeEvent();
    const v1 = await approveTemplate((await createTemplate({ eventId: ev.id, track: 'space', allowedColors: ['night'], stampTypes: ['VIP'], allowedCommittees: [], requestDeadlineDays: 3 } as never)).id);
    const d1 = await updateTemplate(v1.id, { stampTypes: ['VIP', 'ضيف'] });
    const d2 = await updateTemplate(v1.id, { stampTypes: ['ضيف'] });
    expect(d2.id).toBe(d1.id);
    expect(d2.stamp_types).toEqual(['ضيف']);
    await approveTemplate(d2.id);
    const rows = await sql`select status from templates order by version`;
    expect(rows.map((r) => r.status)).toEqual(['superseded', 'approved']);
  });

  it('I4: retention also removes names from leader requests', async () => {
    const ev = await makeEvent({ starts_at: new Date(Date.now() - 100 * day) });
    const t = await makeTemplate({ event_id: ev.id });
    const l = await makeLeader();
    const [r] = await sql`insert into leader_requests (leader_id, template_id, stamp, color) values (${l.id}, ${t.id}, 'VIP', 'night') returning id`;
    await sql`insert into leader_request_people (request_id, name, org, title) values (${r.id}, 'د. هالة', 'جامعة', 'أستاذة')`;
    await runRetention();
    const [pp] = await sql`select name, org, title from leader_request_people`;
    expect(pp).toEqual({ name: 'محذوف', org: null, title: null });
  });

  it('I5: committee names match regardless of the «لجنة» prefix and spacing; owner can fix a leader committee', async () => {
    const ev = await makeEvent();
    await makeTemplate({ event_id: ev.id, allowed_committees: ['لجنة العلاقات'] });
    expect(await templatesVisibleToLeader({ committee: 'العلاقات ' })).toHaveLength(1);
    expect(await templatesVisibleToLeader({ committee: 'لجنة  الفعاليات' })).toHaveLength(0);
    const l = await makeLeader({ committee: 'علاقات خارجية' });
    await updateLeaderCommittee(l.id, 'لجنة العلاقات');
    const [row] = await sql`select committee from leaders where id = ${l.id}`;
    expect(row.committee).toBe('لجنة العلاقات');
  });

  it('I10: archived events still count in analytics', async () => {
    const ev = await makeEvent({ status: 'archived' });
    const t = await makeTemplate({ event_id: ev.id });
    const inv = await makeInvitation({ template_id: t.id, status: 'confirmed', opened_at: new Date() });
    await sql`insert into rsvps (invitation_id, answer) values (${inv.id}, 'yes')`;
    expect((await getAnalytics({})).totals.attending).toBe(1);
  });

  it('M2: a returning general guest gets their name and earlier answer back', async () => {
    const t = await makeTemplate();
    await makeInvitation({ template_id: t.id, kind: 'general', invitee_name: null, slug: 'rr26' });
    const { registrationId } = await openInvitation('rr26', { name: 'ريم', email: 'r@x.com' }, null, { src: null, userAgent: null, referer: null });
    await answerRsvp('rr26', 'no', registrationId);
    expect(await getRegistration('rr26', registrationId)).toEqual({ name: 'ريم', answer: 'no' });
  });

  it('I3: a request on an old version finds the current version for editing', async () => {
    const ev = await makeEvent();
    const v1 = await makeTemplate({ event_id: ev.id });
    const v2 = await approveTemplate((await updateTemplate(v1.id, { stampTypes: ['ضيف'] })).id);
    expect(await currentVersionOf(v1.id)).toBe(v2.id);
    expect(await currentVersionOf(v2.id)).toBe(v2.id);
  });

  it('I5: only the owner can change a leader committee over HTTP', async () => {
    const l = await makeLeader();
    const ip = { params: Promise.resolve({ id: l.id }) };
    expect((await patchLeader(makeRequest('PATCH', '/api/leaders/x', { body: { committee: 'لجنة الفعاليات' } }), ip)).status).toBe(401);
    const { token } = await createSession('owner', null, 't');
    const ok = await patchLeader(makeRequest('PATCH', '/api/leaders/x', { body: { committee: 'لجنة الفعاليات' }, cookies: { [OWNER_COOKIE]: token } }), ip);
    expect(ok.status).toBe(200);
  });
});
