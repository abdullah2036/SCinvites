import { handler, json } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { deleteSemester } from '@/lib/server/semesters';

export const DELETE = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  await requireOwner(req);
  await deleteSemester((await params).id);
  return json({ ok: true });
});
