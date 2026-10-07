import { describe, it, expect, beforeEach } from 'vitest';
import { sql } from '@/lib/server/db';
import { createSession, OWNER_COOKIE, LEADER_COOKIE } from '@/lib/server/sessions';
import { PATCH as patchInvitation, DELETE as deleteInvitationRoute } from '@/app/api/invitations/[id]/route';
import { DELETE as deleteTemplateRoute } from '@/app/api/templates/[id]/route';
import { DELETE as deleteEventRoute } from '@/app/api/events/[id]/route';
import { PATCH as patchMe } from '@/app/api/leader/me/route';
import { approveTemplate, updateTemplate } from '@/lib/server/templates';
import { resetDb, makeEvent, makeTemplate, makeInvitation, makeLeader } from '../setup/db';
import { makeRequest } from '../setup/request';

const idp = (id: string) => ({ params: Promise.resolve({ id }) });
let owner: Record<string, string>;

describe('owner can edit and delete what they made', () => {
  beforeEach(async () => {
    await resetDb();
    owner = { [OWNER_COOKIE]: (await createSession('owner', null, 't')).token };
  });

  it('edits a personal invitation’s name, organization and title', async () => {
    const inv = await makeInvitation({ invitee_name: 'خطأ', invitee_org: null });
    const res = await patchInvitation(makeRequest('PATCH', `/api/invitations/${inv.id}`, { cookies: owner, body: { inviteeName: 'د. هالة', inviteeOrg: 'جامعة أم القرى', inviteeTitle: '' } }), idp(inv.id));
    expect(res.status).toBe(200);
    const [row] = await sql`select invitee_name, invitee_org, invitee_title from invitations where id = ${inv.id}`;
    expect(row).toEqual({ invitee_name: 'د. هالة', invitee_org: 'جامعة أم القرى', invitee_title: null });
  });

  it('cancels by default and deletes for good with ?permanent=1, answers included', async () => {
    const inv = await makeInvitation({ kind: 'general', invitee_name: null, slug: 'test-del' });
    const [r] = await sql`insert into registrations (invitation_id, name, email) values (${inv.id}, 'ريم', 'r@x.com') returning id`;
    await sql`insert into rsvps (invitation_id, registration_id, answer) values (${inv.id}, ${r.id}, 'yes')`;
    await deleteInvitationRoute(makeRequest('DELETE', `/api/invitations/${inv.id}`, { cookies: owner }), idp(inv.id));
    expect((await sql`select status from invitations where id = ${inv.id}`)[0].status).toBe('revoked');
    const res = await deleteInvitationRoute(makeRequest('DELETE', `/api/invitations/${inv.id}?permanent=1`, { cookies: owner }), idp(inv.id));
    expect(res.status).toBe(200);
    const [{ n }] = await sql`select (select count(*) from invitations) + (select count(*) from registrations) + (select count(*) from rsvps) as n`;
    expect(Number(n)).toBe(0);
  });

  it('deletes an unused template with all its versions, and refuses one that invitations use', async () => {
    const ev = await makeEvent();
    const v1 = await makeTemplate({ event_id: ev.id });
    const v2 = await approveTemplate((await updateTemplate(v1.id, { stampTypes: ['ضيف'] })).id);
    expect((await deleteTemplateRoute(makeRequest('DELETE', `/api/templates/${v2.id}`, { cookies: owner }), idp(v2.id))).status).toBe(200);
    expect((await sql`select count(*)::int as n from templates`)[0].n).toBe(0);

    const used = await makeTemplate({ event_id: ev.id });
    await makeInvitation({ template_id: used.id });
    const res = await deleteTemplateRoute(makeRequest('DELETE', `/api/templates/${used.id}`, { cookies: owner }), idp(used.id));
    expect(res.status).toBe(409);
    expect((await res.json()).error.code).toBe('template_in_use');
  });

  it('deletes an event without templates, and refuses one that has templates', async () => {
    const empty = await makeEvent();
    expect((await deleteEventRoute(makeRequest('DELETE', `/api/events/${empty.id}`, { cookies: owner }), idp(empty.id))).status).toBe(200);
    const busy = await makeEvent();
    await makeTemplate({ event_id: busy.id });
    expect((await deleteEventRoute(makeRequest('DELETE', `/api/events/${busy.id}`, { cookies: owner }), idp(busy.id))).status).toBe(409);
  });

  it('only the owner can edit or delete', async () => {
    const inv = await makeInvitation();
    expect((await deleteInvitationRoute(makeRequest('DELETE', `/api/invitations/${inv.id}?permanent=1`), idp(inv.id))).status).toBe(401);
    expect((await patchInvitation(makeRequest('PATCH', `/api/invitations/${inv.id}`, { body: { inviteeName: 'x' } }), idp(inv.id))).status).toBe(401);
  });

  it('a leader renames themselves from «حسابي»', async () => {
    const l = await makeLeader({ name: 'قديم' });
    const cookies = { [LEADER_COOKIE]: (await createSession('leader', l.id, 't')).token };
    const res = await patchMe(makeRequest('PATCH', '/api/leader/me', { cookies, body: { name: '  سعد   القرشي ' } }), { params: Promise.resolve({}) });
    expect(await res.json()).toEqual({ name: 'سعد القرشي' });
    expect((await sql`select name from leaders where id = ${l.id}`)[0].name).toBe('سعد القرشي');
    expect((await patchMe(makeRequest('PATCH', '/api/leader/me', { cookies, body: { name: 'x' } }), { params: Promise.resolve({}) })).status).toBe(400);
  });
});
