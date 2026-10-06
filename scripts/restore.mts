// Restore an encrypted backup into DATABASE_URL (migrations must already be applied there).
// Usage: npm run restore -- backups/backup-….scb [--replace]
// Env: DATABASE_URL, BACKUP_PASSPHRASE, optional SUPABASE_URL + SUPABASE_SECRET_KEY to re-upload artwork
import { readFileSync } from 'node:fs';
import { restoreBackup } from '../lib/server/backup.ts';
import { closeDb } from '../lib/server/db.ts';

const file = process.argv[2];
if (!file) {
  console.error('Usage: npm run restore -- <backup file> [--replace]');
  process.exit(1);
}
const replace = process.argv.includes('--replace');
const target = new URL(process.env.DATABASE_URL ?? 'postgres://unset').host;
console.log(`Restoring ${file} into ${target}${replace ? ' (replacing existing data)' : ''}`);
const r = await restoreBackup(readFileSync(file), { passphrase: process.env.BACKUP_PASSPHRASE ?? '', replace });
console.log(`Restored backup from ${r.createdAt}:`, r.tables, `artwork files: ${r.artwork}`);
await closeDb();
