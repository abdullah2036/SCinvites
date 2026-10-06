import { handler, json, readJson } from '@/lib/server/http';
import { requireLeader } from '@/lib/server/leader-auth';
import { submitRequest, listLeaderRequests } from '@/lib/server/requests';
import { RequestInputSchema } from '@/lib/shared/schemas';

export const GET = handler(async (req) => {
  const s = await requireLeader(req);
  return json(await listLeaderRequests(s.leaderId));
});

export const POST = handler(async (req) => {
  const s = await requireLeader(req);
  return json(await submitRequest(s.leaderId, RequestInputSchema.parse(await readJson(req))), { status: 201 });
});
