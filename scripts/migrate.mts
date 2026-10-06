// Applies pending migrations to $DATABASE_URL (use the direct/session connection, port 5432, in production).
import { migrateUrl } from '../lib/server/local-pg.ts';

const url = process.env.DATABASE_URL;
if (!url) throw new Error('DATABASE_URL is not set');
const applied = await migrateUrl(url);
console.log(applied.length ? `Applied: ${applied.join(', ')}` : 'No pending migrations');
