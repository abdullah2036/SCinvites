import postgres from 'postgres';

type Sql = postgres.Sql<Record<string, never>>;
export type Tx = postgres.TransactionSql<Record<string, never>>;
export type Db = Sql | Tx;

let instance: Sql | null = null;

function connect(): Sql {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set');
  return postgres(url, {
    prepare: false,
    max: Number(process.env.DB_POOL_MAX ?? 5),
    idle_timeout: 20,
    connect_timeout: 10,
    onnotice: () => {},
  });
}

/** Lazily-connected postgres.js client. Server-only. */
export const sql: Sql = new Proxy(function () {} as unknown as Sql, {
  get(_t, prop) {
    instance ??= connect();
    const v = Reflect.get(instance, prop);
    return typeof v === 'function' ? v.bind(instance) : v;
  },
  apply(_t, _this, args) {
    instance ??= connect();
    return (instance as unknown as (...a: unknown[]) => unknown)(...args);
  },
});

export function withTx<T>(fn: (tx: Tx) => Promise<T>): Promise<T> {
  return sql.begin((tx) => fn(tx as Tx)) as Promise<T>;
}

export async function closeDb(): Promise<void> {
  if (instance) {
    const i = instance;
    instance = null;
    await i.end({ timeout: 5 });
  }
}
