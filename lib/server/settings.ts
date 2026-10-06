import { sql } from './db';

export type Settings = {
  owner_email: string | null;
  notifications: { leaderRequests: boolean; invitationRequests: boolean };
  retention_days: number;
  email_sender_name: string;
  email_sender_address: string | null;
};

export const DEFAULT_SETTINGS: Settings = {
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
