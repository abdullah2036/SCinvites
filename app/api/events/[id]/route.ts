import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { deleteEvent, updateEvent } from '@/lib/server/events';
import { EventPatch } from '@/lib/shared/schemas';

export const PATCH = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  await requireOwner(req);
  const { id } = await params;
  return json(await updateEvent(id, EventPatch.parse(await readJson(req))));
});

/** Deletes an event that has no templates. */
export const DELETE = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  await requireOwner(req);
  await deleteEvent((await params).id);
  return json({ ok: true });
});
