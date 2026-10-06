import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import bcrypt from 'bcryptjs';
import { sql } from '@/lib/server/db';
import { getSession, OWNER_COOKIE } from '@/lib/server/sessions';
import { outbox } from '@/lib/server/email';
import { POST as login } from '@/app/api/owner/login/route';
import { POST as logout } from '@/app/api/owner/logout/route';
import { resetDb } from '../setup/db';
import { makeRequest, readSetCookies } from '../setup/request';

const ctx = { params: Promise.resolve({}) };
const attempt = (password: string, ip = '1.1.1.1') => login(makeRequest('POST', '/api/owner/login', { body: { password }, ip }), ctx);

describe('owner login', () => {
  beforeAll(() => {
    process.env.OWNER_PASSWORD_HASH = bcrypt.hashSync('correct horse', 4);
  });
  beforeEach(async () => {
    await resetDb();
    outbox.length = 0;
    await sql`insert into settings (key, value) values ('owner_email', ${sql.json('owner@example.com')})`;
  });

  it('sets a secure owner session cookie and returns the studio redirect', async () => {
    const res = await attempt('correct horse');
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ redirect: '/test-studio' });
    const c = readSetCookies(res)[OWNER_COOKIE];
    expect(c.attrs).toMatch(/HttpOnly/);
    expect(c.attrs).toMatch(/Secure/);
    expect(c.attrs).toMatch(/SameSite=Lax/);
    expect(c.attrs).toMatch(/Max-Age=2592000/);
    expect(await getSession(decodeURIComponent(c.value), 'owner')).toMatchObject({ subject: 'owner' });
  });

  it('accepts the hash in b64: form (survives env-file $ expansion)', async () => {
    const raw = process.env.OWNER_PASSWORD_HASH!;
    process.env.OWNER_PASSWORD_HASH = 'b64:' + Buffer.from(raw).toString('base64');
    try {
      expect((await attempt('correct horse')).status).toBe(200);
      expect((await attempt('nope')).status).toBe(401);
    } finally {
      process.env.OWNER_PASSWORD_HASH = raw;
    }
  });

  it('rejects a wrong password with an Arabic message', async () => {
    const res = await attempt('nope');
    expect(res.status).toBe(401);
    expect((await res.json()).error).toEqual({ code: 'bad_password', message: 'كلمة السر غير صحيحة' });
  });

  it('locks an IP after 5 failures, even for the right password, and unlocks after 15 minutes', async () => {
    for (let i = 0; i < 5; i++) expect((await attempt('nope')).status).toBe(401);
    const locked = await attempt('correct horse');
    expect(locked.status).toBe(423);
    expect((await locked.json()).error.code).toBe('locked');
    expect((await attempt('correct horse', '2.2.2.2')).status).toBe(200);
    await sql`update auth_attempts set at = at - interval '16 minutes'`;
    expect((await attempt('correct horse')).status).toBe(200);
  });

  it('locks globally after 20 failures across IPs within an hour and alerts the owner once', async () => {
    for (let i = 0; i < 20; i++) await attempt('nope', `9.9.9.${i}`);
    expect((await attempt('correct horse', '8.8.8.8')).status).toBe(423);
    expect((await attempt('nope', '8.8.8.9')).status).toBe(423);
    expect(outbox.filter((m) => m.to === 'owner@example.com')).toHaveLength(1);
  });

  it('logout revokes the session server-side', async () => {
    const res = await attempt('correct horse');
    const token = decodeURIComponent(readSetCookies(res)[OWNER_COOKIE].value);
    const out = await logout(makeRequest('POST', '/api/owner/logout', { cookies: { [OWNER_COOKIE]: token } }), ctx);
    expect(out.status).toBe(200);
    expect(await getSession(token, 'owner')).toBeNull();
  });

  it('treats expired sessions as absent', async () => {
    const res = await attempt('correct horse');
    const token = decodeURIComponent(readSetCookies(res)[OWNER_COOKIE].value);
    await sql`update sessions set expires_at = now() - interval '1 second'`;
    expect(await getSession(token, 'owner')).toBeNull();
  });

  it('refuses cross-origin login posts', async () => {
    const res = await login(makeRequest('POST', '/api/owner/login', { body: { password: 'correct horse' }, origin: 'https://evil.example' }), ctx);
    expect(res.status).toBe(403);
  });
});
