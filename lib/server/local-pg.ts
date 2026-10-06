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

/** A previous run that was killed (e.g. by Playwright) can leave its postmaster running; stop it. */
async function stopStale(databaseDir: string) {
  const { readFile } = await import('node:fs/promises');
  try {
    const pid = Number((await readFile(path.join(databaseDir, 'postmaster.pid'), 'utf8')).split(/\r?\n/)[0]);
    if (pid !== 0) {
      const p = Math.abs(pid); // Windows can record a negative pid
      if (process.platform === 'win32') {
        const { execFileSync } = await import('node:child_process');
        try {
          execFileSync('taskkill', ['/PID', String(p), '/T', '/F'], { stdio: 'ignore' });
        } catch {
          /* already gone */
        }
      } else process.kill(p);
      for (let i = 0; i < 50; i++) {
        try {
          process.kill(Math.abs(pid), 0);
          await new Promise((r) => setTimeout(r, 100));
        } catch {
          break;
        }
      }
    }
  } catch {
    /* no stale server */
  }
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
  await stopStale(databaseDir);
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
