import { describe, it, expect } from 'vitest';
import net from 'node:net';
import postgres from 'postgres';

// patches/postgres+3.4.9.patch: plain values must go in one round trip (Parse+Bind+Execute+Sync, no Flush), so the
// Supabase transaction pooler never holds a connection waiting on a client mid-query. Lists still describe first.
describe('postgres.js patch: one round trip for plain values', () => {
  it('sends scalar-parameter queries in one write ending in Sync, and still describes first for arrays', async () => {
    const url = new URL(process.env.DATABASE_URL!);
    const writes: Buffer[] = [];
    const sql = postgres(process.env.DATABASE_URL!, {
      prepare: false,
      max: 1,
      onnotice: () => {},
      socket: () =>
        new Promise<net.Socket>((resolve, reject) => {
          const s = net.connect(Number(url.port || 5432), url.hostname);
          const write = s.write.bind(s) as (...a: unknown[]) => boolean;
          s.write = ((chunk: unknown, ...rest: unknown[]) => {
            writes.push(Buffer.from(chunk as Buffer));
            return write(chunk, ...rest);
          }) as typeof s.write;
          s.once('connect', () => resolve(s));
          s.once('error', reject);
        }),
    });
    try {
      await sql`select 1`; // connection setup
      writes.length = 0;
      const [r] = await sql`select ${'abc'}::text as t, ${42} as n, ${new Date(0)}::timestamptz as d, ${true} as b`;
      expect(r).toMatchObject({ t: 'abc', n: '42', b: true });
      const types = writes.flatMap(messageTypes);
      expect(types).toEqual(['P', 'D', 'B', 'E', 'S']); // one exchange, no Flush ('H')

      writes.length = 0;
      const [a] = await sql`select ${['x', 'y']}::text[] as list`;
      expect(a.list).toEqual(['x', 'y']);
      expect(writes.flatMap(messageTypes)).toContain('H'); // arrays: describe first, as before
    } finally {
      await sql.end();
    }
  });
});

/** Frontend message type letters in a buffer (each message: 1 type byte + int32 length incl. itself). */
function messageTypes(buf: Buffer): string[] {
  const out: string[] = [];
  for (let i = 0; i + 5 <= buf.length; ) {
    out.push(String.fromCharCode(buf[i]));
    i += 1 + buf.readInt32BE(i + 1);
  }
  return out;
}
