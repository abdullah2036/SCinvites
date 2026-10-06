import { describe, it, expect, beforeEach } from 'vitest';
import { getSettings, updateSettings, DEFAULT_SETTINGS } from '@/lib/server/settings';
import { listLeaders } from '@/lib/server/leader-auth';
import { requestLeaderAccess } from '@/lib/server/leader-auth';
import { outbox } from '@/lib/server/email';
import { createSession, OWNER_COOKIE } from '@/lib/server/sessions';
import { GET as getRoute, PATCH as patchRoute } from '@/app/api/settings/route';
import { resetDb, makeLeader } from '../setup/db';
import { makeRequest } from '../setup/request';

const p = { params: Promise.resolve({}) };

describe('settings', () => {
  beforeEach(async () => {
    await resetDb();
    outbox.length = 0;
  });

  it('returns defaults on an empty table', async () => {
    expect(await getSettings()).toEqual(DEFAULT_SETTINGS);
  });

  it('updates only the given keys and validates them', async () => {
    await updateSettings({ owner_name: 'جنى سقطي', retention_days: 120 });
    const s = await getSettings();
    expect(s).toMatchObject({ owner_name: 'جنى سقطي', retention_days: 120, owner_title: DEFAULT_SETTINGS.owner_title });
    await expect(updateSettings({ retention_days: 10 })).rejects.toThrow();
    await expect(updateSettings({ owner_email: 'not-an-email' })).rejects.toThrow();
  });

  it('turning leader-request notifications off stops those emails', async () => {
    await updateSettings({ owner_email: 'owner@example.com', notifications: { leaderRequests: false, invitationRequests: true } });
    await requestLeaderAccess({ name: 'أحمد علي', email: 'ahmad@uqu.edu.sa', committee: 'لجنة العلاقات' }, '9.9.9.9');
    expect(outbox).toHaveLength(0);
  });

  it('lists leaders by status, pending first', async () => {
    await makeLeader({ name: 'معتمد', status: 'approved' });
    await makeLeader({ name: 'جديد', status: 'pending', approved_at: null });
    await makeLeader({ name: 'موقوف', status: 'revoked' });
    const all = await listLeaders();
    expect(all.map((l) => l.name)).toEqual(['جديد', 'معتمد', 'موقوف']);
  });

  it('is owner-only and rejects bad input with 400', async () => {
    expect((await getRoute(makeRequest('GET', '/api/settings'), p)).status).toBe(401);
    const { token } = await createSession('owner', null, 't');
    const c = { [OWNER_COOKIE]: token };
    expect((await patchRoute(makeRequest('PATCH', '/api/settings', { body: { retention_days: 5 }, cookies: c }), p)).status).toBe(400);
    const ok = await patchRoute(makeRequest('PATCH', '/api/settings', { body: { owner_title: 'رئيسة قسم الإعلام' }, cookies: c }), p);
    expect(ok.status).toBe(200);
    expect((await ok.json()).owner_title).toBe('رئيسة قسم الإعلام');
  });
});
