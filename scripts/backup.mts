// Encrypted data backup → backups/backup-<UTC timestamp>.scb
// Env: DATABASE_URL (use the direct/session connection), BACKUP_PASSPHRASE, optional SUPABASE_URL + SUPABASE_SECRET_KEY (artwork)
import { mkdirSync, writeFileSync } from 'node:fs';
import { createBackup } from '../lib/server/backup.ts';
import { closeDb } from '../lib/server/db.ts';

const passphrase = process.env.BACKUP_PASSPHRASE ?? '';
const file = await createBackup({ passphrase });
mkdirSync('backups', { recursive: true });
const name = `backups/backup-${new Date().toISOString().replace(/[:.]/g, '-')}.scb`;
writeFileSync(name, file);
console.log(`Wrote ${name} (${(file.length / 1024).toFixed(1)} KB)`);
await closeDb();
