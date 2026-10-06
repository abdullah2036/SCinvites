import { describe, it, expect } from 'vitest';
import { sha256, randomToken } from '@/lib/server/crypto';

describe('crypto', () => {
  it('hashes with sha256 hex', () => {
    expect(sha256('a')).toBe('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb');
  });
  it('makes 32-byte base64url tokens', () => {
    const t = randomToken();
    expect(t).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(randomToken()).not.toBe(t);
  });
});
