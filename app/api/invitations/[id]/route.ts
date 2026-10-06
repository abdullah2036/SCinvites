import { handler, json } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { revokeInvitation } from '@/lib/server/invitations';

/** Revokes (never deletes): the link then shows «هذه الدعوة لم تعد متاحة». */
export const DELETE = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  await requireOwner(req);
  await revokeInvitation((await params).id);
  return json({ ok: true });
});
