import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import bcrypt from 'bcryptjs';
import { sql } from '@/lib/server/db';
import { sha256 } from '@/lib/server/crypto';
import { getSession, createSession, LEADER_COOKIE, OWNER_COOKIE } from '@/lib/server/sessions';
import { normalizeLeaderEmail } from '@/lib/server/leader-auth';
import { outbox } from '@/lib/server/email';
import { POST as requestAccess } from '@/app/api/leaders/request/route';
import { POST as approve } from '@/app/api/leaders/[id]/approve/route';
import { POST as reissue } from '@/app/api/leaders/[id]/link/route';
import { POST as revoke } from '@/app/api/leaders/[id]/revoke/route';
import { POST as consume } from '@/app/api/leader/auth/route';
import LeaderAuthPage from '@/app/leader/auth/[token]/page';
import { resetDb } from '../setup/db';
import { makeRequest, readSetCookies } from '../setup/request';

const noParams = { params: Promise.resolve({}) };
const idParams = (id: string) => ({ params: Promise.resolve({ id }) });
let ownerCookie: Record<string, string>;

async function newLeader(email = 'khalid@uqu.edu.sa') {
  const res = await requestAccess(makeRequest('POST', '/api/leaders/request', { body: { name: 'خالد الحربي', email, committee: 'العلاقات' }, ip: '5.5.5.5' }), noParams);
  expect(res.status).toBe(200);
  const [l] = await sql`select * from leaders where email = ${email}`;
  return l;
}
async function approveLeader(id: string) {
  const res = await approve(makeRequest('POST', `/api/leaders/${id}/approve`, { cookies: ownerCookie }), idParams(id));
  expect(res.status).toBe(200);
  return (await res.json()).loginUrl as string;
}
const tokenOf = (url: string) => url.split('/').pop()!;
const consumeToken = (token: string) => consume(makeRequest('POST', '/api/leader/auth', { body: { token } }), noParams);

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

  it('approval returns a one-time link and stores only its hash', async () => {
    const l = await newLeader();
    const url = await approveLeader(l.id);
    expect(url).toMatch(/\/leader\/auth\/[A-Za-z0-9_-]{43}$/);
    const [t] = await sql`select token_hash from login_tokens where leader_id = ${l.id}`;
    expect(t.token_hash).toBe(sha256(tokenOf(url)));
    const [after] = await sql`select status from leaders where id = ${l.id}`;
    expect(after.status).toBe('approved');
  });

  it('a link works once and starts a 180-day leader session', async () => {
    const l = await newLeader();
    const token = tokenOf(await approveLeader(l.id));
    const ok = await consumeToken(token);
    expect(ok.status).toBe(200);
    const c = readSetCookies(ok)[LEADER_COOKIE];
    expect(c.attrs).toMatch(/Max-Age=15552000/);
    expect(await getSession(decodeURIComponent(c.value), 'leader')).toMatchObject({ leaderId: l.id });
    const again = await consumeToken(token);
    expect(again.status).toBe(410);
    expect((await again.json()).error.code).toBe('link_expired');
  });

  it('a link expires after 24 hours', async () => {
    const l = await newLeader();
    const token = tokenOf(await approveLeader(l.id));
    await sql`update login_tokens set expires_at = now() - interval '1 second'`;
    expect((await consumeToken(token)).status).toBe(410);
  });

  it('re-issuing invalidates the previous unused link', async () => {
    const l = await newLeader();
    const first = tokenOf(await approveLeader(l.id));
    const res = await reissue(makeRequest('POST', `/api/leaders/${l.id}/link`, { cookies: ownerCookie }), idParams(l.id));
    const second = tokenOf((await res.json()).loginUrl);
    expect((await consumeToken(first)).status).toBe(410);
    expect((await consumeToken(second)).status).toBe(200);
  });

  it('rendering the auth page does not consume the token (link previews)', async () => {
    const l = await newLeader();
    const token = tokenOf(await approveLeader(l.id));
    await LeaderAuthPage({ params: Promise.resolve({ token }) });
    const [t] = await sql`select used_at from login_tokens where leader_id = ${l.id}`;
    expect(t.used_at).toBeNull();
  });

  it('revoking ends existing sessions', async () => {
    const l = await newLeader();
    const ok = await consumeToken(tokenOf(await approveLeader(l.id)));
    const session = decodeURIComponent(readSetCookies(ok)[LEADER_COOKIE].value);
    await revoke(makeRequest('POST', `/api/leaders/${l.id}/revoke`, { cookies: ownerCookie }), idParams(l.id));
    expect(await getSession(session, 'leader')).toBeNull();
  });

  it('only the owner can approve', async () => {
    const l = await newLeader();
    const res = await approve(makeRequest('POST', `/api/leaders/${l.id}/approve`), idParams(l.id));
    expect(res.status).toBe(401);
  });

  it('writes audit rows for approve, link issue and revoke', async () => {
    const l = await newLeader();
    await approveLeader(l.id);
    await reissue(makeRequest('POST', `/api/leaders/${l.id}/link`, { cookies: ownerCookie }), idParams(l.id));
    await revoke(makeRequest('POST', `/api/leaders/${l.id}/revoke`, { cookies: ownerCookie }), idParams(l.id));
    const rows = await sql`select action from audit_log where target = ${l.id} order by at`;
    expect(rows.map((r) => r.action)).toEqual(['leader.approve', 'leader.link', 'leader.link', 'leader.revoke']);
  });

  it('rate-limits repeated requests from one IP', async () => {
    let last = 0;
    for (let i = 0; i < 6; i++) {
      const res = await requestAccess(makeRequest('POST', '/api/leaders/request', { body: { name: 'أحمد', email: `l${i}@uqu.edu.sa`, committee: 'العلاقات' }, ip: '7.7.7.7' }), noParams);
      last = res.status;
    }
    expect(last).toBe(429);
  });
});
