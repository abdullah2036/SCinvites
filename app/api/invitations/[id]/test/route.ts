import { handler, json } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { sendTestCopy } from '@/lib/server/invitations';

export const POST = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  await requireOwner(req);
  await sendTestCopy((await params).id);
  return json({ ok: true });
});
