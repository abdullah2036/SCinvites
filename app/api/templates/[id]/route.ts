import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { approveTemplate, deleteTemplate, updateTemplate } from '@/lib/server/templates';
import { TemplatePatch } from '@/lib/shared/schemas';

/** PATCH { action: 'approve' } approves and publishes; any other body edits (approved → new draft version). */
export const PATCH = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  await requireOwner(req);
  const { id } = await params;
  const body = (await readJson(req)) as Record<string, unknown>;
  if (body?.action === 'approve') return json(await approveTemplate(id));
  return json(await updateTemplate(id, TemplatePatch.parse(body)));
});

/** Deletes the template and its versions if nothing was made from it. */
export const DELETE = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  await requireOwner(req);
  await deleteTemplate((await params).id);
  return json({ ok: true });
});
