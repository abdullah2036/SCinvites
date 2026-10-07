import { handler, json } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { approveLeader } from '@/lib/server/leader-auth';

export const POST = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  await requireOwner(req);
  const { id } = await params;
  await approveLeader(id);
  return json({ ok: true });
});
