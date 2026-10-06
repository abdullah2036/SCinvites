import { z } from 'zod';
import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { updateLeaderCommittee } from '@/lib/server/leader-auth';

const Body = z.object({ committee: z.string().max(60) });

/** Owner corrects a leader's committee (it decides which templates they see). */
export const PATCH = handler<{ params: Promise<{ id: string }> }>(async (req, { params }) => {
  await requireOwner(req);
  const { committee } = Body.parse(await readJson(req));
  await updateLeaderCommittee((await params).id, committee);
  return json({ ok: true });
});
