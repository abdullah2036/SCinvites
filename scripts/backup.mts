// Encrypted data backup → backups/backup-<UTC timestamp>.scb
// Env: DATABASE_URL (use the direct/session connection), BACKUP_PASSPHRASE, optional SUPABASE_URL + SUPABASE_SECRET_KEY (artwork)
import { mkdirSync, writeFileSync } from 'node:fs';
import { createBackup } from '../lib/server/backup.ts';
import { closeDb } from '../lib/server/db.ts';

const passphrase = process.env.BACKUP_PASSPHRASE ?? '';
let file: Buffer;
try {
  file = await createBackup({ passphrase });
} catch (e) {
  const msg = (e as Error).message;
  console.error(`Backup failed: ${msg}`);
  if (/ENOTFOUND|ENETUNREACH|EHOSTUNREACH|ETIMEDOUT|ECONNREFUSED/.test(msg)) console.error('Hint: DATABASE_URL must be the Supabase *Session pooler* URL (port 5432), not "Direct connection".');
  if (/password authentication failed/i.test(msg)) console.error('Hint: wrong database password in DATABASE_URL (reset it in Supabase → Database settings, avoid @ # / in it).');
  if (/DATABASE_URL is not set|BACKUP_PASSPHRASE/.test(msg)) console.error('Hint: add the DATABASE_URL_DIRECT and BACKUP_PASSPHRASE repository secrets.');
  process.exit(1);
}
mkdirSync('backups', { recursive: true });
const name = `backups/backup-${new Date().toISOString().replace(/[:.]/g, '-')}.scb`;
writeFileSync(name, file);
console.log(`Wrote ${name} (${(file.length / 1024).toFixed(1)} KB)`);
await closeDb();
