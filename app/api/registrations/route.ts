import { handler, json } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { listRegistrations } from '@/lib/server/invitations';

/** Owner: the visitors who registered through public links, with their answers. */
export const GET = handler(async (req) => {
  await requireOwner(req);
  return json(await listRegistrations());
});
