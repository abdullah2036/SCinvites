import { describe, it, expect, beforeEach } from 'vitest';
import { sql } from '@/lib/server/db';
import { createSession, OWNER_COOKIE } from '@/lib/server/sessions';
import { createInvitation, createInvitationBatch, revokeInvitation, sendTestCopy, listInvitations } from '@/lib/server/invitations';
import { outbox } from '@/lib/server/email';
import { POST as postInvitation } from '@/app/api/invitations/route';
import { resetDb, makeEvent, makeTemplate } from '../setup/db';
import { makeRequest } from '../setup/request';

const personal = (templateId: string, over: Record<string, unknown> = {}) =>
  ({ templateId, color: 'night', stamp: 'VIP', kind: 'personal', invitee: { name: 'د. محمد أحمد', org: 'وكالة الفضاء', title: null }, showQr: true, ...over }) as never;

describe('owner invitations', () => {
  let templateId: string;
  beforeEach(async () => {
    await resetDb();
    outbox.length = 0;
    await sql`insert into settings (key, value) values ('owner_email', ${sql.json('owner@example.com')})`;
    const ev = await makeEvent({ place_type: 'in_person', place_name: 'القاعة الكبرى', place_url: 'https://maps.example.com/a' });
    templateId = (await makeTemplate({ event_id: ev.id, allowed_colors: ['night', 'petrol'], stamp_types: ['VIP', 'متحدث'] })).id;
  });

  it('gives personal invitations a 16-char random slug and a full URL', async () => {
    const r = await createInvitation(personal(templateId));
    expect(r.slug).toMatch(/^[a-z0-9]{16}$/);
    expect(r.url).toBe(`http://localhost:3000/i/${r.slug}`);
  });

  it('accepts a custom slug for general invitations and rejects a taken one', async () => {
    const r = await createInvitation({ templateId, color: 'night', stamp: 'عضو', kind: 'general', customSlug: 'rr26', showQr: true } as never);
    expect(r.slug).toBe('rr26');
    await expect(createInvitation({ templateId, color: 'night', stamp: 'عضو', kind: 'general', customSlug: 'rr26', showQr: true } as never)).rejects.toMatchObject({
      code: 'slug_taken',
      status: 409,
    });
    await expect(createInvitation({ templateId, color: 'night', stamp: 'عضو', kind: 'general', customSlug: 'Studio', showQr: true } as never)).rejects.toMatchObject({
      code: 'bad_slug',
    });
  });

  it('enforces the template colors, stamps, approval and invitee name', async () => {
    await expect(createInvitation(personal(templateId, { color: 'ivory' }))).rejects.toMatchObject({ code: 'color_not_allowed' });
    await expect(createInvitation(personal(templateId, { stamp: 'ضيف' }))).rejects.toMatchObject({ code: 'stamp_not_allowed' });
    await expect(createInvitation(personal(templateId, { invitee: null }))).rejects.toMatchObject({ code: 'invitee_required' });
    const draft = await makeTemplate({ status: 'draft', approved_at: null });
    await expect(createInvitation(personal(draft.id))).rejects.toMatchObject({ code: 'template_not_approved' });
  });

  it('copies the event place when none is given, and uses an explicit place otherwise', async () => {
    const a = await createInvitation(personal(templateId));
    const [rowA] = await sql`select place_type, place_name, place_url from invitations where id = ${a.id}`;
    expect(rowA).toEqual({ place_type: 'in_person', place_name: 'القاعة الكبرى', place_url: 'https://maps.example.com/a' });
    const b = await createInvitation(personal(templateId, { place: { type: 'online', name: 'Zoom', url: 'https://zoom.example.com/j/1' } }));
    const [rowB] = await sql`select place_type, place_url from invitations where id = ${b.id}`;
    expect(rowB).toEqual({ place_type: 'online', place_url: 'https://zoom.example.com/j/1' });
  });

  it('revokes with an audit entry', async () => {
    const r = await createInvitation(personal(templateId));
    await revokeInvitation(r.id);
    const [row] = await sql`select status, revoked_at from invitations where id = ${r.id}`;
    expect(row.status).toBe('revoked');
    expect(row.revoked_at).not.toBeNull();
    const [a] = await sql`select action from audit_log where target = ${r.id}`;
    expect(a.action).toBe('invitation.revoke');
  });

  it('sends a test copy with the link to the owner', async () => {
    const r = await createInvitation(personal(templateId));
    await sendTestCopy(r.id);
    expect(outbox).toHaveLength(1);
    expect(outbox[0].to).toBe('owner@example.com');
    expect(outbox[0].subject).toContain('نسخة تجريبية');
    expect(outbox[0].html).toContain(r.url);
  });

  it('refuses a test copy when no owner email is set', async () => {
    await sql`delete from settings`;
    const r = await createInvitation(personal(templateId));
    await expect(sendTestCopy(r.id)).rejects.toMatchObject({ code: 'owner_email_missing' });
  });

  it('lists and searches invitations by Arabic name and status', async () => {
    await createInvitation(personal(templateId, { invitee: { name: 'سارة الغامدي', org: null, title: null } }));
    const b = await createInvitation(personal(templateId, { invitee: { name: 'محمد العتيبي', org: null, title: null } }));
    await revokeInvitation(b.id);
    expect(await listInvitations({})).toHaveLength(2);
    expect((await listInvitations({ q: 'سارة' })).map((i) => i.inviteeName)).toEqual(['سارة الغامدي']);
    expect((await listInvitations({ status: 'revoked' })).map((i) => i.id)).toEqual([b.id]);
  });

  it('creates one personal invitation per person in a batch, atomically', async () => {
    const people = [{ name: 'أ. نورة', org: null, title: null }, { name: 'م. سلمان', org: 'الجمعية الفلكية', title: null }];
    const r = await createInvitationBatch({ templateId, color: 'night', stamp: 'VIP', people, showQr: true } as never);
    expect(r.map((x) => x.name)).toEqual(['أ. نورة', 'م. سلمان']);
    expect(new Set(r.map((x) => x.slug)).size).toBe(2);
    await expect(createInvitationBatch({ templateId, color: 'ivory', stamp: 'VIP', people, showQr: true } as never)).rejects.toMatchObject({ code: 'color_not_allowed' });
    const [{ n }] = await sql`select count(*)::int as n from invitations`;
    expect(n).toBe(2);
  });

  it('the API requires the owner', async () => {
    const res = await postInvitation(makeRequest('POST', '/api/invitations', { body: personal(templateId) }), { params: Promise.resolve({}) });
    expect(res.status).toBe(401);
    const { token } = await createSession('owner', null, 't');
    const ok = await postInvitation(makeRequest('POST', '/api/invitations', { body: personal(templateId), cookies: { [OWNER_COOKIE]: token } }), { params: Promise.resolve({}) });
    expect(ok.status).toBe(201);
  });
});
