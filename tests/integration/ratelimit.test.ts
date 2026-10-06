import { describe, it, expect, beforeEach } from 'vitest';
import { hitRateLimit } from '@/lib/server/ratelimit';
import { resetDb } from '../setup/db';

describe('hitRateLimit', () => {
  beforeEach(resetDb);
  it('throws rate_limited after max hits', async () => {
    await hitRateLimit('t', 60, 2);
    await hitRateLimit('t', 60, 2);
    await expect(hitRateLimit('t', 60, 2)).rejects.toMatchObject({ code: 'rate_limited', status: 429 });
  });
});
