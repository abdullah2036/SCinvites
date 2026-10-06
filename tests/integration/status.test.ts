import { describe, it, expect, beforeAll, afterEach } from 'vitest';
import bcrypt from 'bcryptjs';
import { ownerHash, checkOwnerHashFormat } from '@/lib/server/owner-auth';
import { GET as status } from '@/app/api/status/route';
import { makeRequest } from '../setup/request';

const raw = bcrypt.hashSync('correct horse', 4);
const b64 = 'b64:' + Buffer.from(raw).toString('base64');
const saved = process.env.OWNER_PASSWORD_HASH;
afterEach(() => {
  process.env.OWNER_PASSWORD_HASH = saved;
});

describe('owner hash tolerance', () => {
  it('ignores surrounding quotes and whitespace pasted into the env var', () => {
    for (const v of [`"${b64}"`, `'${b64}'`, `  ${b64}\n`, `"${raw}"`]) {
      process.env.OWNER_PASSWORD_HASH = v;
      expect(ownerHash(), v).toBe(raw);
    }
  });
  it('reports the hash format', () => {
    process.env.OWNER_PASSWORD_HASH = '';
    expect(checkOwnerHashFormat()).toBe('missing');
    process.env.OWNER_PASSWORD_HASH = 'my-plain-password';
    expect(checkOwnerHashFormat()).toBe('invalid');
    process.env.OWNER_PASSWORD_HASH = 'b64:bm90LWEtaGFzaA==';
    expect(checkOwnerHashFormat()).toBe('invalid');
    process.env.OWNER_PASSWORD_HASH = b64;
    expect(checkOwnerHashFormat()).toBe('ok');
  });
});

describe('/api/status', () => {
  beforeAll(() => {
    process.env.OWNER_PASSWORD_HASH = b64;
  });
  it('reports each part as a plain check without exposing secrets', async () => {
    const res = await status(makeRequest('GET', '/api/status'));
    const body = await res.json();
    expect(body.checks.database).toBe('ok');
    expect(body.checks.tables).toBe('ok');
    expect(body.checks.ownerPassword).toBe('ok');
    expect(body.checks.ownerPath).toBe('ok');
    expect(body.checks.appUrl).toBe('ok');
    expect(JSON.stringify(body)).not.toMatch(/b64:|\$2[aby]\$|test-studio|postgres:\/\//);
  });
  it('flags an APP_URL that does not match the address being visited', async () => {
    const res = await status(new Request('https://other-host.example/api/status'));
    expect((await res.json()).checks.appUrl).toMatch(/mismatch/);
  });
});
