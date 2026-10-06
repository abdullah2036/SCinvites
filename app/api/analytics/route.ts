import { handler, json } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { getAnalytics } from '@/lib/server/analytics';

const UUID = /^[0-9a-f-]{36}$/;

/** Owner only — leaders never see statistics. */
export const GET = handler(async (req) => {
  await requireOwner(req);
  const p = new URL(req.url).searchParams;
  const semesterId = p.get('semester');
  const eventId = p.get('event');
  return json(
    await getAnalytics({ semesterId: semesterId && UUID.test(semesterId) ? semesterId : undefined, eventId: eventId && UUID.test(eventId) ? eventId : undefined }),
    { headers: { 'cache-control': 'no-store' } },
  );
});
