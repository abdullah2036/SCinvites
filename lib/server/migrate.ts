import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import type postgres from 'postgres';

const DIR = path.join(process.cwd(), 'supabase', 'migrations');

/** Applies supabase/migrations/*.sql in filename order; returns the names applied this run. */
export async function runMigrations(sql: postgres.Sql<Record<string, never>>): Promise<string[]> {
  await sql`create table if not exists schema_migrations (name text primary key, applied_at timestamptz not null default now())`;
  const applied = new Set((await sql<{ name: string }[]>`select name from schema_migrations`).map((r) => r.name));
  const files = (await readdir(DIR)).filter((f) => f.endsWith('.sql')).sort();
  const done: string[] = [];
  for (const file of files) {
    if (applied.has(file)) continue;
    const body = await readFile(path.join(DIR, file), 'utf8');
    await sql.begin(async (tx) => {
      await tx.unsafe(body);
      await tx`insert into schema_migrations (name) values (${file})`;
    });
    done.push(file);
  }
  return done;
}
