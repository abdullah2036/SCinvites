import { handler, json, readJson } from '@/lib/server/http';
import { requireLeader } from '@/lib/server/leader-auth';
import { resubmitRequest } from '@/lib/server/requests';
import { RequestInputSchema } from '@/lib/shared/schemas';

/** Leader resubmits a request after the owner asked for changes. */
export const PATCH = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  const s = await requireLeader(req);
  await resubmitRequest(s.leaderId, (await params).id, RequestInputSchema.parse(await readJson(req)));
  return json({ ok: true });
});
