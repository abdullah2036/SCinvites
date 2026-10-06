import { describe, it, expect, beforeEach } from 'vitest';
import { sql } from '@/lib/server/db';
import { createSession, OWNER_COOKIE } from '@/lib/server/sessions';
import { createTemplate, updateTemplate, approveTemplate, templatesVisibleToLeader, listGalleryTemplates } from '@/lib/server/templates';
import { createEvent } from '@/lib/server/events';
import { uploadArtwork } from '@/lib/server/storage';
import { POST as postTemplate } from '@/app/api/templates/route';
import { PATCH as patchTemplate } from '@/app/api/templates/[id]/route';
import { POST as postEvent } from '@/app/api/events/route';
import { POST as postUpload } from '@/app/api/uploads/artwork/route';
import { resetDb, makeEvent, makeInvitation } from '../setup/db';
import { makeRequest } from '../setup/request';

const noParams = { params: Promise.resolve({}) };
const day = 86400_000;

async function draft(eventId: string, over: Record<string, unknown> = {}) {
  return createTemplate({
    eventId,
    track: 'space',
    allowedColors: ['night', 'petrol'],
    stampTypes: ['VIP'],
    allowedCommittees: [],
    requestDeadlineDays: 3,
    ...over,
  } as never);
}

describe('events', () => {
  beforeEach(resetDb);
  it('creates an event with place fields', async () => {
    const e = await createEvent({
      title: 'ثورة الصواريخ',
      subtitle: null,
      latinTitle: 'ROCKET REVOLUTION',
      track: 'space',
      startsAt: '2026-10-12T15:00:00Z',
      endsAt: null,
      place: { type: 'in_person', name: 'القاعة', url: 'https://maps.example.com/x' },
      status: 'active',
    });
    expect(e).toMatchObject({ title: 'ثورة الصواريخ', place_type: 'in_person', place_url: 'https://maps.example.com/x' });
  });
});

describe('templates', () => {
  beforeEach(resetDb);

  it('editing an approved template creates a new draft version and approval supersedes the old one', async () => {
    const ev = await makeEvent();
    const v1 = await approveTemplate((await draft(ev.id)).id);
    expect(v1.status).toBe('approved');
    const v2 = await updateTemplate(v1.id, { allowedColors: ['ivory'] });
    expect(v2.id).not.toBe(v1.id);
    expect(v2).toMatchObject({ version: 2, supersedes_id: v1.id, status: 'draft', allowed_colors: ['ivory'] });
    const [stillV1] = await sql`select status from templates where id = ${v1.id}`;
    expect(stillV1.status).toBe('approved');
    await approveTemplate(v2.id);
    const [old] = await sql`select status from templates where id = ${v1.id}`;
    expect(old.status).toBe('superseded');
  });

  it('keeps invitations on the version they were made from', async () => {
    const ev = await makeEvent();
    const v1 = await approveTemplate((await draft(ev.id)).id);
    const inv = await makeInvitation({ template_id: v1.id, color: 'night' });
    await approveTemplate((await updateTemplate(v1.id, { allowedColors: ['ivory'] })).id);
    const [row] = await sql`select t.allowed_colors from invitations i join templates t on t.id = i.template_id where i.id = ${inv.id}`;
    expect(row.allowed_colors).toEqual(['night', 'petrol']);
  });

  it('edits drafts in place', async () => {
    const t = await draft((await makeEvent()).id);
    const same = await updateTemplate(t.id, { stampTypes: ['VIP', 'متحدث'] });
    expect(same.id).toBe(t.id);
    expect(same.stamp_types).toEqual(['VIP', 'متحدث']);
  });

  it('shows leaders only approved, in-window templates for their committee', async () => {
    const ev = await makeEvent();
    const now = new Date();
    const open = await approveTemplate((await draft(ev.id, { allowedCommittees: [] })).id);
    const rel = await approveTemplate((await draft(ev.id, { allowedCommittees: ['العلاقات'] })).id);
    await draft(ev.id); // draft: hidden
    await approveTemplate(
      (await draft(ev.id, { availableFrom: new Date(now.getTime() + day).toISOString() })).id,
    ); // not yet open
    await approveTemplate(
      (await draft(ev.id, { availableTo: new Date(now.getTime() - day).toISOString() })).id,
    ); // closed
    const superseded = await approveTemplate((await draft(ev.id)).id);
    await approveTemplate((await updateTemplate(superseded.id, { stampTypes: ['ضيف'] })).id);

    const forEvents = (await templatesVisibleToLeader({ committee: 'الفعاليات' })).map((t) => t.id);
    expect(forEvents).toContain(open.id);
    expect(forEvents).not.toContain(rel.id);
    expect(forEvents).not.toContain(superseded.id);
    expect(forEvents).toHaveLength(2); // open + the new version of `superseded`

    const forRel = (await templatesVisibleToLeader({ committee: 'العلاقات' })).map((t) => t.id);
    expect(forRel).toContain(rel.id);
  });

  it('gallery lists approved templates only, filterable by track and stamp', async () => {
    const ev = await makeEvent();
    await draft(ev.id);
    const a = await approveTemplate((await draft(ev.id, { track: 'chem', stampTypes: ['متحدث'] })).id);
    await approveTemplate((await draft(ev.id, { track: 'space', stampTypes: ['VIP'] })).id);
    expect(await listGalleryTemplates({})).toHaveLength(2);
    expect((await listGalleryTemplates({ track: 'chem' })).map((t) => t.id)).toEqual([a.id]);
    expect((await listGalleryTemplates({ stamp: 'متحدث' })).map((t) => t.id)).toEqual([a.id]);
  });
});

describe('artwork upload', () => {
  beforeEach(resetDb);
  const png = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0]);

  it('accepts a real PNG and returns a random path', async () => {
    const r = await uploadArtwork(new File([png], 'rocket.png', { type: 'image/png' }));
    expect(r.path).toMatch(/^[A-Za-z0-9_-]{16}\.png$/);
    expect(r.url).toContain(r.path);
  });
  it('rejects gif, svg, disguised files, and files over 5 MB', async () => {
    await expect(uploadArtwork(new File([new Uint8Array([0x47, 0x49, 0x46, 0x38])], 'a.gif', { type: 'image/gif' }))).rejects.toMatchObject({ code: 'bad_file' });
    await expect(uploadArtwork(new File(['<svg/>'], 'a.svg', { type: 'image/svg+xml' }))).rejects.toMatchObject({ code: 'bad_file' });
    await expect(uploadArtwork(new File(['<svg/>'], 'a.png', { type: 'image/png' }))).rejects.toMatchObject({ code: 'bad_file' });
    const big = new Uint8Array(6 * 1024 * 1024);
    big.set(png);
    await expect(uploadArtwork(new File([big], 'big.png', { type: 'image/png' }))).rejects.toMatchObject({ code: 'file_too_large' });
  });
});

describe('owner-only routes', () => {
  beforeEach(resetDb);
  it('return 401 without an owner session', async () => {
    expect((await postTemplate(makeRequest('POST', '/api/templates', { body: {} }), noParams)).status).toBe(401);
    expect((await patchTemplate(makeRequest('PATCH', '/api/templates/x', { body: {} }), { params: Promise.resolve({ id: 'x' }) })).status).toBe(401);
    expect((await postEvent(makeRequest('POST', '/api/events', { body: {} }), noParams)).status).toBe(401);
    expect((await postUpload(makeRequest('POST', '/api/uploads/artwork', { body: new FormData() }), noParams)).status).toBe(401);
  });
  it('approve via PATCH action works for the owner', async () => {
    const { token } = await createSession('owner', null, 't');
    const t = await draft((await makeEvent()).id);
    const res = await patchTemplate(
      makeRequest('PATCH', `/api/templates/${t.id}`, { body: { action: 'approve' }, cookies: { [OWNER_COOKIE]: token } }),
      { params: Promise.resolve({ id: t.id }) },
    );
    expect(res.status).toBe(200);
    expect((await res.json()).status).toBe('approved');
  });
});
