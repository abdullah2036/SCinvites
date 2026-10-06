// Wipe all test data from the database at DATABASE_URL (takes an encrypted backup first).
// Usage: npm run reset-data -- --yes [--keep-settings]
// Env: DATABASE_URL (direct connection), BACKUP_PASSPHRASE
import { mkdirSync, writeFileSync } from 'node:fs';
import { createBackup } from '../lib/server/backup.ts';
import { resetAppData } from '../lib/server/reset.ts';
import { closeDb } from '../lib/server/db.ts';

const host = new URL(process.env.DATABASE_URL ?? 'postgres://unset').host;
if (!process.argv.includes('--yes')) {
  console.error(`This deletes every event, template, invitation, leader and guest on ${host}.\nRe-run with --yes to confirm (add --keep-settings to keep owner settings and semesters).`);
  process.exit(1);
}
const file = await createBackup({ passphrase: process.env.BACKUP_PASSPHRASE ?? '' });
mkdirSync('backups', { recursive: true });
const name = `backups/before-reset-${new Date().toISOString().replace(/[:.]/g, '-')}.scb`;
writeFileSync(name, file);
console.log(`Backup saved: ${name}`);
const removed = await resetAppData({ keepSettings: process.argv.includes('--keep-settings') });
console.log(`Wiped ${host}:`, removed);
await closeDb();
