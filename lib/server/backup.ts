import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'node:crypto';
import { gzipSync, gunzipSync } from 'node:zlib';
import { createClient } from '@supabase/supabase-js';
import { sql } from './db';

/**
 * Data-level backup of every app table (the schema itself lives in supabase/migrations).
 * File format: "SCB1" | salt(16) | iv(12) | tag(16) | AES-256-GCM(gzip(JSON)).
 * Sessions, login tokens, auth attempts and rate limits are intentionally excluded.
 */

// Parents before children, so a restore can insert in this order.
const TABLES = ['events', 'templates', 'leaders', 'leader_requests', 'leader_request_people', 'invitations', 'registrations', 'rsvps', 'audit_log', 'settings', 'semesters'] as const;
const ORDER_BY: Partial<Record<(typeof TABLES)[number], string>> = {
  templates: 'version, created_at',
  settings: 'key',
  leader_request_people: 'request_id, position',
  rsvps: 'answered_at, id',
  audit_log: 'at, id',
  semesters: 'starts_on',
};
const MAGIC = Buffer.from('SCB1');

type Bundle = {
  format: 1;
  createdAt: string;
  migrations: string[];
  tables: Record<string, Record<string, unknown>[]>;
  artwork: Record<string, { type: string; data: string }>;
};

const key = (passphrase: string, salt: Buffer) => scryptSync(passphrase, salt, 32, { N: 2 ** 15, r: 8, p: 1, maxmem: 64 * 1024 * 1024 });

function encrypt(plain: Buffer, passphrase: string): Buffer {
  const salt = randomBytes(16);
  const iv = randomBytes(12);
  const c = createCipheriv('aes-256-gcm', key(passphrase, salt), iv);
  const body = Buffer.concat([c.update(plain), c.final()]);
  return Buffer.concat([MAGIC, salt, iv, c.getAuthTag(), body]);
}

function decrypt(file: Buffer, passphrase: string): Buffer {
  if (file.length < 48 || !file.subarray(0, 4).equals(MAGIC)) throw new Error('Not a backup file or corrupt');
  const salt = file.subarray(4, 20);
  const iv = file.subarray(20, 32);
  const tag = file.subarray(32, 48);
  try {
    const d = createDecipheriv('aes-256-gcm', key(passphrase, salt), iv);
    d.setAuthTag(tag);
    return Buffer.concat([d.update(file.subarray(48)), d.final()]);
  } catch {
    throw new Error('Wrong passphrase or corrupt backup');
  }
}

function storage() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SECRET_KEY) return null;
  return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, { auth: { persistSession: false } }).storage.from('artwork');
}

export async function createBackup(opts: { passphrase: string }): Promise<Buffer> {
  if (!opts.passphrase || opts.passphrase.length < 12) throw new Error('BACKUP_PASSPHRASE must be at least 12 characters');
  const tables: Bundle['tables'] = {};
  for (const t of TABLES) {
    tables[t] = await sql.unsafe(`select * from ${t} order by ${ORDER_BY[t] ?? 'created_at, id'}`);
  }
  const migrations = (await sql<{ name: string }[]>`select name from schema_migrations order by name`).map((r) => r.name);
  const artwork: Bundle['artwork'] = {};
  const bucket = storage();
  if (bucket) {
    const { data, error } = await bucket.list('', { limit: 1000 });
    if (error) throw new Error(`artwork list failed: ${error.message}`);
    for (const o of data ?? []) {
      const { data: blob, error: e } = await bucket.download(o.name);
      if (e || !blob) throw new Error(`artwork download failed for ${o.name}`);
      artwork[o.name] = { type: blob.type, data: Buffer.from(await blob.arrayBuffer()).toString('base64') };
    }
  }
  const bundle: Bundle = { format: 1, createdAt: new Date().toISOString(), migrations, tables, artwork };
  return encrypt(gzipSync(Buffer.from(JSON.stringify(bundle))), opts.passphrase);
}

/** Restores into the database at DATABASE_URL, which must already have the same migrations applied. */
export async function restoreBackup(file: Buffer, opts: { passphrase: string; replace?: boolean }): Promise<{ createdAt: string; tables: Record<string, number>; artwork: number }> {
  const bundle = JSON.parse(gunzipSync(decrypt(file, opts.passphrase)).toString('utf8')) as Bundle;
  const applied = (await sql<{ name: string }[]>`select name from schema_migrations order by name`).map((r) => r.name);
  const missing = bundle.migrations.filter((m) => !applied.includes(m));
  if (missing.length) throw new Error(`Apply migrations first: ${missing.join(', ')}`);

  const summary: Record<string, number> = {};
  await sql.begin(async (tx) => {
    const [{ n }] = await tx.unsafe<{ n: number }[]>(`select (${TABLES.map((t) => `(select count(*) from ${t})`).join(' + ')})::int as n`);
    if (n > 0 && !opts.replace) throw new Error('Target database is not empty (pass replace to overwrite)');
    await tx.unsafe(`truncate ${[...TABLES, 'sessions', 'login_tokens'].join(', ')} restart identity cascade`);
    for (const t of TABLES) {
      const rows = bundle.tables[t] ?? [];
      summary[t] = rows.length;
      for (let i = 0; i < rows.length; i += 500) {
        const chunk = rows.slice(i, i + 500).map((r) => Object.fromEntries(Object.entries(r).map(([k, v]) => [k, v !== null && typeof v === 'object' && !Array.isArray(v) ? tx.json(v as never) : v])));
        await tx`insert into ${tx(t)} ${tx(chunk)}`;
      }
    }
  });

  let artwork = 0;
  const bucket = storage();
  if (bucket) {
    for (const [name, a] of Object.entries(bundle.artwork)) {
      const { error } = await bucket.upload(name, Buffer.from(a.data, 'base64'), { contentType: a.type, upsert: true });
      if (error) throw new Error(`artwork upload failed for ${name}: ${error.message}`);
      artwork++;
    }
  }
  return { createdAt: bundle.createdAt, tables: summary, artwork };
}
