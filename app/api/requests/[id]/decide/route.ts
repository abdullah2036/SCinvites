import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { decideRequest } from '@/lib/server/requests';
import { DecideInput } from '@/lib/shared/schemas';

export const POST = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  await requireOwner(req);
  await decideRequest((await params).id, DecideInput.parse(await readJson(req)));
  return json({ ok: true });
});
