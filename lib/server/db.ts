import net from 'node:net';
import postgres from 'postgres';
import { waitUntil } from '@vercel/functions';

type Sql = postgres.Sql<Record<string, never>>;
export type Tx = postgres.TransactionSql<Record<string, never>>;
export type Db = Sql | Tx;

/** Idle connections close after this long. */
const IDLE_SECONDS = 5;
/** Stay awake this long after the last query starts: covers queries that wait their turn in the pool, then idle close. */
const HOLD_SECONDS = 20;
/**
 * A connection that neither sends nor receives anything for this long while in use is dead (pooler hiccup, dropped
 * network): it is destroyed, its query fails with an error the page can retry, and the pool opens a fresh one.
 * Without this, one silent connection could hold a server's requests forever ("everything loads forever until I close
 * the windows"). Idle pooled connections close after IDLE_SECONDS, long before this.
 */
const SILENT_MS = Number(process.env.DB_SILENT_MS ?? 15_000);

type SocketOptions = { host: string | string[]; port: number | number[] };
const first = <T,>(x: T | T[]) => (Array.isArray(x) ? x[0] : x);

/** Exported for tests. */
export function socketWithTimeout(o: SocketOptions, silentMs = SILENT_MS): Promise<net.Socket> {
  return new Promise((resolve, reject) => {
    const s = net.connect(Number(first(o.port)), String(first(o.host)));
    s.setKeepAlive(true, 10_000);
    s.setTimeout(silentMs, () => s.destroy(new Error(`database connection silent for ${silentMs} ms`)));
    s.once('connect', () => resolve(s));
    s.once('error', reject);
  });
}

let instance: Sql | null = null;

function connect(): Sql {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set');
  return postgres(url, {
    prepare: false,
    max: Number(process.env.DB_POOL_MAX ?? 5),
    idle_timeout: IDLE_SECONDS,
    max_lifetime: 10 * 60,
    connect_timeout: 10,
    onnotice: () => {},
    socket: (o: SocketOptions) => socketWithTimeout(o),
  } as never);
}

/*
 * Vercel suspends a function between requests, and timers don't run while it is suspended. A pooled connection that
 * was idle at that moment survives the pause, may be dropped by the database pooler in the meantime, and the next
 * request that reuses it waits on a dead socket ("loads forever", then "suddenly works"). Like Vercel's
 * attachDatabasePool (which doesn't support postgres.js), keep the function alive after each query until the pool's
 * idle timeout has closed its connections. Outside Vercel, waitUntil is a no-op.
 */
let release: (() => void) | null = null;
let releaseTimer: ReturnType<typeof setTimeout> | null = null;

function holdUntilIdle() {
  if (releaseTimer) clearTimeout(releaseTimer);
  release?.();
  const done = new Promise<void>((resolve) => (release = resolve));
  releaseTimer = setTimeout(() => release?.(), HOLD_SECONDS * 1000);
  try {
    waitUntil(done);
  } catch {
    /* outside a request (scripts, tests): nothing to keep alive */
  }
}

/** Lazily-connected postgres.js client. Server-only. */
export const sql: Sql = new Proxy(function () {} as unknown as Sql, {
  get(_t, prop) {
    instance ??= connect();
    if (prop === 'begin') holdUntilIdle();
    const v = Reflect.get(instance, prop);
    return typeof v === 'function' ? v.bind(instance) : v;
  },
  apply(_t, _this, args) {
    instance ??= connect();
    holdUntilIdle();
    return (instance as unknown as (...a: unknown[]) => unknown)(...args);
  },
});

export function withTx<T>(fn: (tx: Tx) => Promise<T>): Promise<T> {
  return sql.begin((tx) => fn(tx as Tx)) as Promise<T>;
}

export async function closeDb(): Promise<void> {
  if (releaseTimer) clearTimeout(releaseTimer);
  release?.();
  if (instance) {
    const i = instance;
    instance = null;
    await i.end({ timeout: 5 });
  }
}
