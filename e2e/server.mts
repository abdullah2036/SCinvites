// Playwright web server: real local Postgres + migrations, then `next dev` on :3100 with e2e settings.
import { spawn } from 'node:child_process';
import bcrypt from 'bcryptjs';
import { startLocalPostgres } from '../lib/server/local-pg.ts';
import { E2E } from './config.ts';

const pg = await startLocalPostgres({ dataDir: '.pge2e', port: E2E.dbPort, persistent: false });
const child = spawn('npx', ['next', 'dev', '-p', String(E2E.port)], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NEXT_DIST_DIR: '.next-e2e',
    DATABASE_URL: pg.url,
    DB_POOL_MAX: '5',
    APP_URL: E2E.baseURL,
    OWNER_PATH: E2E.ownerPath,
    OWNER_PASSWORD_HASH: bcrypt.hashSync(E2E.ownerPassword, 4),
    CRON_SECRET: 'e2e-cron',
    RESEND_API_KEY: '',
    SUPABASE_URL: '',
  },
});
const stop = async () => {
  child.kill();
  await pg.stop();
  process.exit(0);
};
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
child.on('exit', stop);
