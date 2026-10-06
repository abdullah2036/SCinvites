import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { createTemplate, listTemplates } from '@/lib/server/templates';
import { TemplateInput } from '@/lib/shared/schemas';

export const GET = handler(async (req) => {
  await requireOwner(req);
  return json(await listTemplates());
});

export const POST = handler(async (req) => {
  await requireOwner(req);
  return json(await createTemplate(TemplateInput.parse(await readJson(req))), { status: 201 });
});
