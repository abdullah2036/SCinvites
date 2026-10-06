import { z } from 'zod';
import { sql } from './db';

export type Settings = {
  owner_name: string;
  owner_title: string;
  owner_email: string | null;
  notifications: { leaderRequests: boolean; invitationRequests: boolean };
  retention_days: number;
  email_sender_name: string;
  email_sender_address: string | null;
};

export const DEFAULT_SETTINGS: Settings = {
  owner_name: 'صاحبة المنصة',
  owner_title: 'نادي العلوم',
  owner_email: null,
  notifications: { leaderRequests: true, invitationRequests: true },
  retention_days: 90,
  email_sender_name: 'نادي العلوم',
  email_sender_address: null,
};

export async function getSettings(): Promise<Settings> {
  const rows = await sql<{ key: string; value: unknown }[]>`select key, value from settings`;
  const out: Settings = structuredClone(DEFAULT_SETTINGS);
  for (const r of rows) {
    if (r.key in out) (out as Record<string, unknown>)[r.key] = r.value;
  }
  out.notifications = { ...DEFAULT_SETTINGS.notifications, ...out.notifications };
  return out;
}


const SettingsPatch = z
  .object({
    owner_name: z.string().trim().min(2).max(60),
    owner_title: z.string().trim().min(2).max(80),
    owner_email: z.email().max(160).nullable(),
    notifications: z.object({ leaderRequests: z.boolean(), invitationRequests: z.boolean() }),
    retention_days: z.number().int().min(30).max(365),
    email_sender_name: z.string().trim().min(2).max(60),
    email_sender_address: z.email().max(160).nullable(),
  })
  .partial()
  .strict();

/** Validates and upserts only the given keys; returns the full settings. */
export async function updateSettings(patch: unknown): Promise<Settings> {
  const p = SettingsPatch.parse(patch);
  // null means "not set": remove the row so getSettings falls back to the default.
  const cleared = Object.entries(p).filter(([, v]) => v === null).map(([k]) => k);
  const rows = Object.entries(p).filter(([, v]) => v !== null).map(([key, value]) => ({ key, value: sql.json(value as never) }));
  if (cleared.length) await sql`delete from settings where key = any(${cleared})`;
  if (rows.length) await sql`insert into settings ${sql(rows)} on conflict (key) do update set value = excluded.value`;
  return getSettings();
}
