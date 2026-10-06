import { handler, json } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { listLeaders } from '@/lib/server/leader-auth';

export const GET = handler(async (req) => {
  await requireOwner(req);
  return json(await listLeaders());
});
