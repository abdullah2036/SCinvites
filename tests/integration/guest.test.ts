import { describe, it, expect, beforeEach } from 'vitest';
import { sql } from '@/lib/server/db';
import { getGuestView, openInvitation, answerRsvp } from '@/lib/server/guest';
import { GET as getView } from '@/app/api/i/[slug]/route';
import { POST as postOpen } from '@/app/api/i/[slug]/open/route';
import { POST as postRsvp } from '@/app/api/i/[slug]/rsvp/route';
import { GET as getIcs } from '@/app/api/i/[slug]/ics/route';
import { resetDb, makeEvent, makeTemplate, makeInvitation, makeLeader } from '../setup/db';
import { makeRequest, readSetCookies } from '../setup/request';

const params = (slug: string) => ({ params: Promise.resolve({ slug }) });
const meta = { src: null, userAgent: 'vitest', referer: null };

describe('guest api', () => {
  let templateId: string;
  beforeEach(async () => {
    await resetDb();
    const ev = await makeEvent({ starts_at: new Date('2026-10-12T15:00:00Z'), title: 'ثورة الصواريخ' });
    templateId = (await makeTemplate({ event_id: ev.id })).id;
  });

  it('exposes only what the guest page needs', async () => {
    const leader = await makeLeader();
    await makeInvitation({ template_id: templateId, slug: 'personal00000001', created_by_leader_id: leader.id });
    const view = await getGuestView('personal00000001');
    expect(view).toMatchObject({ slug: 'personal00000001', kind: 'personal', invitee: { name: 'د. محمد أحمد' } });
    const s = JSON.stringify(view);
    expect(s).not.toContain(leader.id);
    expect(s).not.toMatch(/created_by|leader_request|registrations|email/);
    expect(await getGuestView('missing')).toBeNull();
  });

  it('hides invitee and place on a revoked invitation', async () => {
    await makeInvitation({ template_id: templateId, slug: 'revoked000000001', status: 'revoked' });
    const v = await getGuestView('revoked000000001');
    expect(v?.status).toBe('revoked');
    expect(v?.invitee).toBeNull();
    expect(v?.place.type).toBe('none');
    expect(v?.qrSvg).toBeNull();
  });

  it('includes a QR only when enabled and a place URL exists', async () => {
    await makeInvitation({ template_id: templateId, slug: 'withqr0000000001', show_qr: true });
    await makeInvitation({ template_id: templateId, slug: 'noqr000000000001', show_qr: false });
    await makeInvitation({ template_id: templateId, slug: 'nourl00000000001', show_qr: true, place_url: null });
    expect((await getGuestView('withqr0000000001'))?.qrSvg).toMatch(/^<svg/);
    expect((await getGuestView('noqr000000000001'))?.qrSvg).toBeNull();
    expect((await getGuestView('nourl00000000001'))?.qrSvg).toBeNull();
  });

  it('dedupes general registrations by lowercased email and records the source', async () => {
    await makeInvitation({ template_id: templateId, slug: 'rr26', kind: 'general', invitee_name: null });
    const a = await openInvitation('rr26', { name: 'ريم', email: '  Reem@Example.com ' }, null, { ...meta, src: 'whatsapp' });
    const b = await openInvitation('rr26', { name: 'ريم الزهراني', email: 'reem@example.com' }, null, meta);
    expect(b.registrationId).toBe(a.registrationId);
    const regs = await sql`select name, email, source from registrations`;
    expect(regs).toHaveLength(1);
    expect(regs[0].source).toBe('whatsapp');
  });

  it('requires a valid name and email for general invitations', async () => {
    await makeInvitation({ template_id: templateId, slug: 'rr26', kind: 'general', invitee_name: null });
    await expect(openInvitation('rr26', { name: '', email: 'x@y.com' }, null, meta)).rejects.toMatchObject({ code: 'invalid_input' });
    await expect(openInvitation('rr26', { name: 'ريم', email: 'not-an-email' }, null, meta)).rejects.toMatchObject({ code: 'invalid_input' });
  });

  it('marks a personal invitation opened once, keeping the first source', async () => {
    const inv = await makeInvitation({ template_id: templateId, slug: 'personal00000002' });
    await openInvitation('personal00000002', {}, null, { ...meta, src: 'email' });
    await openInvitation('personal00000002', {}, null, { ...meta, src: 'qr' });
    const [row] = await sql`select status, opened_at, open_source from invitations where id = ${inv.id}`;
    expect(row.status).toBe('opened');
    expect(row.open_source).toBe('email');
  });

  it('lets guests change their RSVP, keeping one row', async () => {
    const inv = await makeInvitation({ template_id: templateId, slug: 'personal00000003' });
    await answerRsvp('personal00000003', 'yes', null);
    let [row] = await sql`select status from invitations where id = ${inv.id}`;
    expect(row.status).toBe('confirmed');
    await answerRsvp('personal00000003', 'no', null);
    [row] = await sql`select status from invitations where id = ${inv.id}`;
    expect(row.status).toBe('declined');
    const rsvps = await sql`select answer from rsvps`;
    expect(rsvps).toEqual([{ answer: 'no' }]);
  });

  it('requires a registration to RSVP on a general invitation', async () => {
    await makeInvitation({ template_id: templateId, slug: 'rr26', kind: 'general', invitee_name: null });
    await expect(answerRsvp('rr26', 'yes', null)).rejects.toMatchObject({ code: 'registration_required', status: 400 });
    const { registrationId } = await openInvitation('rr26', { name: 'ريم', email: 'r@x.com' }, null, meta);
    await answerRsvp('rr26', 'yes', registrationId);
    const [r] = await sql`select answer, registration_id from rsvps`;
    expect(r).toEqual({ answer: 'yes', registration_id: registrationId });
  });

  it('refuses RSVPs on a revoked invitation with the Arabic message', async () => {
    await makeInvitation({ template_id: templateId, slug: 'personal00000004', status: 'revoked' });
    await expect(answerRsvp('personal00000004', 'yes', null)).rejects.toMatchObject({ code: 'revoked', status: 410, message: 'هذه الدعوة لم تعد متاحة' });
  });

  it('open route sets the registration cookie and a returning guest skips the form', async () => {
    await makeInvitation({ template_id: templateId, slug: 'rr26', kind: 'general', invitee_name: null });
    const res = await postOpen(makeRequest('POST', '/api/i/rr26/open', { body: { name: 'ريم', email: 'r@x.com' }, ip: '3.3.3.3' }), params('rr26'));
    expect(res.status).toBe(200);
    const cookie = readSetCookies(res)['sc_reg_rr26'];
    expect(cookie.attrs).toMatch(/HttpOnly/);
    const again = await postOpen(makeRequest('POST', '/api/i/rr26/open', { body: {}, cookies: { sc_reg_rr26: cookie.value }, ip: '3.3.3.3' }), params('rr26'));
    expect(again.status).toBe(200);
    const rsvp = await postRsvp(makeRequest('POST', '/api/i/rr26/rsvp', { body: { answer: 'yes' }, cookies: { sc_reg_rr26: cookie.value }, ip: '3.3.3.3' }), params('rr26'));
    expect(rsvp.status).toBe(200);
  });

  it('view route returns 404 for unknown slugs', async () => {
    expect((await getView(makeRequest('GET', '/api/i/nope'), params('nope'))).status).toBe(404);
  });

  it('builds a calendar file in UTC with CRLF line endings', async () => {
    await makeInvitation({ template_id: templateId, slug: 'personal00000005' });
    const res = await getIcs(makeRequest('GET', '/api/i/personal00000005/ics'), params('personal00000005'));
    expect(res.headers.get('content-type')).toContain('text/calendar');
    const body = await res.text();
    expect(body).toContain('BEGIN:VEVENT');
    expect(body).toContain('DTSTART:20261012T150000Z');
    expect(body).toContain('DTEND:20261012T170000Z');
    expect(body).toContain('\r\n');
    expect(body).not.toMatch(/[^\r]\n/);
  });

  it('rate-limits a flood of opens from one IP', async () => {
    await makeInvitation({ template_id: templateId, slug: 'personal00000006' });
    let status = 0;
    for (let i = 0; i < 31; i++) status = (await postOpen(makeRequest('POST', '/api/i/personal00000006/open', { body: {}, ip: '4.4.4.4' }), params('personal00000006'))).status;
    expect(status).toBe(429);
  });
});
