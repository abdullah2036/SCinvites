import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import bcrypt from 'bcryptjs';
import { sql } from '@/lib/server/db';
import { getSession, createSession, LEADER_COOKIE, OWNER_COOKIE } from '@/lib/server/sessions';
import { normalizeLeaderEmail } from '@/lib/server/leader-auth';
import { outbox } from '@/lib/server/email';
import { POST as requestAccess } from '@/app/api/leaders/request/route';
import { POST as approve } from '@/app/api/leaders/[id]/approve/route';
import { POST as revoke } from '@/app/api/leaders/[id]/revoke/route';
import { resetDb } from '../setup/db';
import { makeRequest, readSetCookies } from '../setup/request';
import { LIMITS } from '@/lib/server/ratelimit';

const noParams = { params: Promise.resolve({}) };
const idParams = (id: string) => ({ params: Promise.resolve({ id }) });
let ownerCookie: Record<string, string>;

const ask = (body: Record<string, string>, ip = '5.5.5.5') => requestAccess(makeRequest('POST', '/api/leaders/request', { body, ip }), noParams);
async function newLeader(email = 'khalid@uqu.edu.sa') {
  const res = await ask({ name: 'خالد الحربي', email, committee: 'العلاقات' });
  expect(res.status).toBe(200);
  const [l] = await sql`select * from leaders where email = ${email}`;
  return l;
}
async function approveLeader(id: string) {
  const res = await approve(makeRequest('POST', `/api/leaders/${id}/approve`, { cookies: ownerCookie }), idParams(id));
  expect(res.status).toBe(200);
}
const sessionOf = (res: Response) => decodeURIComponent(readSetCookies(res)[LEADER_COOKIE].value);

describe('leader email normalization', () => {
  it('accepts uqu.edu.sa with whitespace and case', () => {
    expect(normalizeLeaderEmail('  Khalid@UQU.EDU.SA ')).toBe('khalid@uqu.edu.sa');
  });
  it('rejects lookalike and foreign domains', () => {
    for (const bad of ['x@uqu.edu.sa.evil.com', 'x@stu-uqu.edu.sa', 'a b@uqu.edu.sa', 'x@gmail.com', '@uqu.edu.sa', 'x@sub.uqu.edu.sa']) {
      expect(normalizeLeaderEmail(bad), bad).toBeNull();
    }
  });
});

describe('leader access', () => {
  beforeAll(() => {
    process.env.OWNER_PASSWORD_HASH = bcrypt.hashSync('pw', 4);
  });
  beforeEach(async () => {
    await resetDb();
    outbox.length = 0;
    await sql`insert into settings (key, value) values ('owner_email', ${sql.json('owner@example.com')})`;
    const { token } = await createSession('owner', null, 'test');
    ownerCookie = { [OWNER_COOKIE]: token };
  });

  it('stores a pending request and notifies the owner', async () => {
    const l = await newLeader();
    expect(l.status).toBe('pending');
    expect(outbox).toHaveLength(1);
    expect(outbox[0].to).toBe('owner@example.com');
  });

  it('does not duplicate a repeated request and returns its status', async () => {
    await newLeader();
    const res = await requestAccess(makeRequest('POST', '/api/leaders/request', { body: { name: 'خالد', email: 'KHALID@uqu.edu.sa', committee: 'العلاقات' }, ip: '5.5.5.6' }), noParams);
    expect(await res.json()).toEqual({ status: 'pending' });
    const [{ n }] = await sql`select count(*)::int as n from leaders`;
    expect(n).toBe(1);
  });

  it('rejects non-university emails with an Arabic message', async () => {
    const res = await requestAccess(makeRequest('POST', '/api/leaders/request', { body: { name: 'أحمد', email: 'x@gmail.com', committee: 'العلاقات' } }), noParams);
    expect(res.status).toBe(400);
    expect((await res.json()).error.code).toBe('invalid_email');
  });

  it('approval needs no link: the approved email signs in with a 180-day leader session', async () => {
    const l = await newLeader();
    await approveLeader(l.id);
    const res = await ask({ email: ' Khalid@UQU.edu.sa ' }, '6.6.6.6');
    expect(await res.json()).toEqual({ status: 'approved', redirect: '/leader' });
    const c = readSetCookies(res)[LEADER_COOKIE];
    expect(c.attrs).toMatch(/Max-Age=15552000/);
    expect(await getSession(sessionOf(res), 'leader')).toMatchObject({ leaderId: l.id });
  });

  it('a pending email gets its status but no session', async () => {
    await newLeader();
    const res = await ask({ email: 'khalid@uqu.edu.sa' });
    expect(await res.json()).toEqual({ status: 'pending' });
    expect(readSetCookies(res)[LEADER_COOKIE]).toBeUndefined();
  });

  it('a first request without a name or committee asks for them', async () => {
    const res = await ask({ email: 'new@uqu.edu.sa', name: '', committee: '' });
    expect(res.status).toBe(400);
    expect((await res.json()).error.code).toBe('details_required');
    const [{ n }] = await sql`select count(*)::int as n from leaders`;
    expect(n).toBe(0);
  });

  it('an approved leader can sign in again many times a day (no per-email request limit)', async () => {
    const l = await newLeader();
    await approveLeader(l.id);
    for (let i = 0; i < 6; i++) expect((await ask({ email: 'khalid@uqu.edu.sa' }, `8.8.8.${i}`)).status).toBe(200);
  });

  it('a revoked email cannot sign in, and revoking ends existing sessions', async () => {
    const l = await newLeader();
    await approveLeader(l.id);
    const session = sessionOf(await ask({ email: 'khalid@uqu.edu.sa' }));
    await revoke(makeRequest('POST', `/api/leaders/${l.id}/revoke`, { cookies: ownerCookie }), idParams(l.id));
    expect(await getSession(session, 'leader')).toBeNull();
    const again = await ask({ email: 'khalid@uqu.edu.sa' });
    expect(await again.json()).toEqual({ status: 'revoked' });
    expect(readSetCookies(again)[LEADER_COOKIE]).toBeUndefined();
  });

  it('only the owner can approve', async () => {
    const l = await newLeader();
    const res = await approve(makeRequest('POST', `/api/leaders/${l.id}/approve`), idParams(l.id));
    expect(res.status).toBe(401);
  });

  it('writes audit rows for approve, sign-in and revoke', async () => {
    const l = await newLeader();
    await approveLeader(l.id);
    await ask({ email: 'khalid@uqu.edu.sa' });
    await revoke(makeRequest('POST', `/api/leaders/${l.id}/revoke`, { cookies: ownerCookie }), idParams(l.id));
    const rows = await sql`select action from audit_log where target = ${l.id} order by at`;
    expect(rows.map((r) => r.action)).toEqual(['leader.approve', 'leader.login', 'leader.revoke']);
  });

  it('lets many leaders behind one campus IP request access, but stops a flood', async () => {
    for (let i = 0; i < 40; i++) expect((await ask({ name: 'أحمد', email: `l${i}@uqu.edu.sa`, committee: 'العلاقات' }, '7.7.7.7')).status).toBe(200);
    await sql`update rate_limits set count = ${LIMITS.leaderNewPerIpPerHour} where key like 'leader-req:ip:%'`;
    expect((await ask({ name: 'أحمد', email: 'flood@uqu.edu.sa', committee: 'العلاقات' }, '7.7.7.7')).status).toBe(429);
  });
});
