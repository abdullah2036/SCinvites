import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import bcrypt from 'bcryptjs';
import { sql } from '@/lib/server/db';
import { getSession, createSession, LEADER_COOKIE, OWNER_COOKIE } from '@/lib/server/sessions';
import { normalizeEmail, mayRequestLeaderAccess } from '@/lib/server/leader-auth';
import { outbox } from '@/lib/server/email';
import { POST as requestAccess } from '@/app/api/leaders/request/route';
import { POST as approve } from '@/app/api/leaders/[id]/approve/route';
import { POST as revoke } from '@/app/api/leaders/[id]/revoke/route';
import { resetDb, makeLeader } from '../setup/db';
import { makeRequest, readSetCookies } from '../setup/request';
import { LIMITS } from '@/lib/server/ratelimit';

const noParams = { params: Promise.resolve({}) };
const idParams = (id: string) => ({ params: Promise.resolve({ id }) });
let ownerCookie: Record<string, string>;

const ask = (body: Record<string, string>, ip = '5.5.5.5') => requestAccess(makeRequest('POST', '/api/leaders/request', { body, ip }), noParams);
async function newLeader(email = 's443012345@uqu.edu.sa') {
  const res = await ask({ name: 'خالد الحربي', email });
  expect(res.status).toBe(200);
  const [l] = await sql`select * from leaders where email = ${email}`;
  return l;
}
async function approveLeader(id: string) {
  const res = await approve(makeRequest('POST', `/api/leaders/${id}/approve`, { cookies: ownerCookie }), idParams(id));
  expect(res.status).toBe(200);
}
const sessionOf = (res: Response) => decodeURIComponent(readSetCookies(res)[LEADER_COOKIE].value);

describe('leader email rules', () => {
  it('normalizes whitespace and case', () => {
    expect(normalizeEmail('  S443012345@UQU.EDU.SA ')).toBe('s443012345@uqu.edu.sa');
    expect(normalizeEmail('not an email')).toBeNull();
  });
  it('accepts the university format s4<student id>@uqu.edu.sa', () => {
    expect(mayRequestLeaderAccess('s443012345@uqu.edu.sa')).toBe(true);
    for (const bad of ['khalid@uqu.edu.sa', 's4abc@uqu.edu.sa', 's3123@uqu.edu.sa', 's443@uqu.edu.sa.evil.com', 's443@stu-uqu.edu.sa', 's443@sub.uqu.edu.sa', 'x@gmail.com']) {
      expect(mayRequestLeaderAccess(bad), bad).toBe(false);
    }
  });
  it('also accepts the review addresses listed in EXTRA_LEADER_EMAILS, and nothing else', () => {
    expect(mayRequestLeaderAccess('reviewer@gmail.com')).toBe(true);
    expect(mayRequestLeaderAccess('owner.review@gmail.com')).toBe(true);
    expect(mayRequestLeaderAccess('someone@gmail.com')).toBe(false);
    expect(mayRequestLeaderAccess('')).toBe(false);
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
    const res = await requestAccess(makeRequest('POST', '/api/leaders/request', { body: { name: 'خالد', email: 'S443012345@uqu.edu.sa' }, ip: '5.5.5.6' }), noParams);
    expect(await res.json()).toEqual({ status: 'pending' });
    const [{ n }] = await sql`select count(*)::int as n from leaders`;
    expect(n).toBe(1);
  });

  it('rejects new emails outside the s4 format with an Arabic message', async () => {
    for (const email of ['x@gmail.com', 'khalid@uqu.edu.sa']) {
      const res = await ask({ name: 'أحمد', email });
      expect(res.status).toBe(400);
      expect(await res.json()).toMatchObject({ error: { code: 'invalid_email', message: expect.stringContaining('s443012345@uqu.edu.sa') } });
    }
    const [{ n }] = await sql`select count(*)::int as n from leaders`;
    expect(n).toBe(0);
  });

  it('lets the developer and owner review addresses register', async () => {
    const l = await newLeader('Reviewer@Gmail.com'.toLowerCase());
    expect(l.status).toBe('pending');
  });

  it('keeps signing in leaders approved before the s4 rule', async () => {
    const old = await makeLeader({ email: 'staff.member@uqu.edu.sa' });
    const res = await ask({ email: 'staff.member@uqu.edu.sa' });
    expect(await res.json()).toEqual({ status: 'approved', redirect: '/leader' });
    expect(await getSession(sessionOf(res), 'leader')).toMatchObject({ leaderId: old.id });
  });

  it('approval needs no link: the approved email signs in with a 180-day leader session', async () => {
    const l = await newLeader();
    await approveLeader(l.id);
    const res = await ask({ email: ' S443012345@UQU.edu.sa ' }, '6.6.6.6');
    expect(await res.json()).toEqual({ status: 'approved', redirect: '/leader' });
    const c = readSetCookies(res)[LEADER_COOKIE];
    expect(c.attrs).toMatch(/Max-Age=15552000/);
    expect(await getSession(sessionOf(res), 'leader')).toMatchObject({ leaderId: l.id });
  });

  it('a pending email gets its status but no session', async () => {
    await newLeader();
    const res = await ask({ email: 's443012345@uqu.edu.sa' });
    expect(await res.json()).toEqual({ status: 'pending' });
    expect(readSetCookies(res)[LEADER_COOKIE]).toBeUndefined();
  });

  it('a first request without a name asks for it', async () => {
    const res = await ask({ email: 's443999999@uqu.edu.sa', name: '' });
    expect(res.status).toBe(400);
    expect((await res.json()).error.code).toBe('details_required');
    const [{ n }] = await sql`select count(*)::int as n from leaders`;
    expect(n).toBe(0);
  });

  it('an approved leader can sign in again many times a day (no per-email request limit)', async () => {
    const l = await newLeader();
    await approveLeader(l.id);
    for (let i = 0; i < 6; i++) expect((await ask({ email: 's443012345@uqu.edu.sa' }, `8.8.8.${i}`)).status).toBe(200);
  });

  it('a revoked email cannot sign in, and revoking ends existing sessions', async () => {
    const l = await newLeader();
    await approveLeader(l.id);
    const session = sessionOf(await ask({ email: 's443012345@uqu.edu.sa' }));
    await revoke(makeRequest('POST', `/api/leaders/${l.id}/revoke`, { cookies: ownerCookie }), idParams(l.id));
    expect(await getSession(session, 'leader')).toBeNull();
    const again = await ask({ email: 's443012345@uqu.edu.sa' });
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
    await ask({ email: 's443012345@uqu.edu.sa' });
    await revoke(makeRequest('POST', `/api/leaders/${l.id}/revoke`, { cookies: ownerCookie }), idParams(l.id));
    const rows = await sql`select action from audit_log where target = ${l.id} order by at`;
    expect(rows.map((r) => r.action)).toEqual(['leader.approve', 'leader.login', 'leader.revoke']);
  });

  it('lets many leaders behind one campus IP request access, but stops a flood', async () => {
    for (let i = 0; i < 40; i++) expect((await ask({ name: 'أحمد', email: `s44300${i}@uqu.edu.sa` }, '7.7.7.7')).status).toBe(200);
    await sql`update rate_limits set count = ${LIMITS.leaderNewPerIpPerHour} where key like 'leader-req:ip:%'`;
    expect((await ask({ name: 'أحمد', email: 's443777777@uqu.edu.sa' }, '7.7.7.7')).status).toBe(429);
  });
});
