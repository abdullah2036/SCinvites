import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { getSettings, updateSettings } from '@/lib/server/settings';

export const GET = handler(async (req) => {
  await requireOwner(req);
  return json(await getSettings());
});

export const PATCH = handler(async (req) => {
  await requireOwner(req);
  return json(await updateSettings(await readJson(req)));
});
