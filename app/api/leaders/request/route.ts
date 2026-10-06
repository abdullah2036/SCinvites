import { handler, json, readJson, clientIp } from '@/lib/server/http';
import { requestLeaderAccess } from '@/lib/server/leader-auth';
import { LeaderRequestInput } from '@/lib/shared/schemas';

export const POST = handler(async (req) => {
  const input = LeaderRequestInput.parse(await readJson(req));
  return json(await requestLeaderAccess(input, clientIp(req)));
});
