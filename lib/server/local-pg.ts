import net from 'node:net';
import path from 'node:path';
import { rm } from 'node:fs/promises';
import postgres from 'postgres';
import { runMigrations } from './migrate';

export async function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const s = net.createServer();
    s.unref();
    s.on('error', reject);
    s.listen(0, '127.0.0.1', () => {
      const port = (s.address() as net.AddressInfo).port;
      s.close(() => resolve(port));
    });
  });
}

/** Applies migrations to the database at url. */
export async function migrateUrl(url: string): Promise<string[]> {
  const sql = postgres(url, { prepare: false, max: 1, onnotice: () => {} });
  try {
    return await runMigrations(sql);
  } finally {
    await sql.end();
  }
}

/**
 * Starts a real local Postgres (embedded-postgres binaries, no Docker) and applies migrations.
 * Dev/test only — never imported by app code.
 */
export async function startLocalPostgres(opts: { dataDir: string; port?: number; persistent: boolean }) {
  const { default: EmbeddedPostgres } = await import('embedded-postgres');
  const port = opts.port ?? (await freePort());
  const databaseDir = path.resolve(opts.dataDir);
  if (!opts.persistent) await rm(databaseDir, { recursive: true, force: true });
  const pg = new EmbeddedPostgres({
    databaseDir,
    user: 'postgres',
    password: 'postgres',
    port,
    persistent: opts.persistent,
    // Match Supabase: UTF-8 regardless of the OS locale (Windows would otherwise pick e.g. WIN1256).
    initdbFlags: ['--encoding=UTF8', '--locale=C', '--lc-collate=C', '--lc-ctype=C'],
    onLog: () => {},
    onError: (e: unknown) => console.error('[postgres]', e),
  });
  const { existsSync } = await import('node:fs');
  if (!existsSync(path.join(databaseDir, 'PG_VERSION'))) await pg.initialise();
  await pg.start();
  const url = `postgres://postgres:postgres@127.0.0.1:${port}/postgres`;
  const applied = await migrateUrl(url);
  return { url, applied, stop: () => pg.stop() };
}
