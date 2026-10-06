import { handler, json } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { getStats } from '@/lib/server/stats';

export const GET = handler(async (req) => {
  await requireOwner(req);
  return json(await getStats(), { headers: { 'cache-control': 'no-store' } });
});
