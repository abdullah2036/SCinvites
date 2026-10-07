import { describe, it, expect } from 'vitest';
import { GET } from '@/app/api/status/db/route';

describe('/api/status/db', () => {
  it('compares the app pool with a fresh connection and lists sessions without data', async () => {
    const body = await (await GET()).json();
    expect(body.appPool).toMatch(/^ok \d+ ms$/);
    expect(body.freshConnection).toMatch(/^ok \d+ ms$/);
    expect(Array.isArray(body.sessions)).toBe(true);
    expect(body.oneRoundTrip).toMatch(/^yes \(PDBES\)$/);
  });
});
