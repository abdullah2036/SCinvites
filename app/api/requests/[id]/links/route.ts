import { handler, json } from '@/lib/server/http';
import { requireLeader } from '@/lib/server/leader-auth';
import { getRequestLinks } from '@/lib/server/requests';

export const GET = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  const s = await requireLeader(req);
  return json(await getRequestLinks(s.leaderId, (await params).id));
});
