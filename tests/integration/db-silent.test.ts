import { describe, it, expect } from 'vitest';
import postgres from 'postgres';
import { socketWithTimeout } from '@/lib/server/db';

// A connection that goes silent mid-query must fail fast (and the pool recover), never hang the server.
describe('silent database connections are cut', () => {
  it('fails a query whose connection says nothing for too long, then works on a fresh connection', async () => {
    const sql = postgres(process.env.DATABASE_URL!, {
      prepare: false,
      max: 1,
      onnotice: () => {},
      socket: (o: { host: string[]; port: number[] }) => socketWithTimeout(o, 500),
    } as never);
    try {
      await expect(sql`select pg_sleep(1.5)`).rejects.toThrow();
      const [r] = await sql`select ${'ok'}::text as x`;
      expect(r.x).toBe('ok');
    } finally {
      await sql.end({ timeout: 1 });
    }
  });
});
