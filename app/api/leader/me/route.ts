import { z } from 'zod';
import { handler, json, readJson } from '@/lib/server/http';
import { requireLeader, updateLeaderName } from '@/lib/server/leader-auth';

const Body = z.object({ name: z.string().max(80) });

/** A signed-in leader changes the name shown to the owner and in their portal. */
export const PATCH = handler(async (req) => {
  const s = await requireLeader(req);
  const { name } = Body.parse(await readJson(req));
  return json({ name: await updateLeaderName(s.leaderId, name) });
});
