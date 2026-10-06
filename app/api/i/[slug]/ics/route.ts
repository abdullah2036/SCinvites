import { handler } from '@/lib/server/http';
import { getIcsData } from '@/lib/server/guest';
import { buildIcs } from '@/lib/server/ics';

export const GET = handler<{ params: Promise<{ slug: string }> }>(async (_req, { params }) => {
  const data = await getIcsData((await params).slug);
  return new Response(buildIcs(data), {
    headers: {
      'content-type': 'text/calendar; charset=utf-8',
      'content-disposition': 'attachment; filename="invitation.ics"',
      'cache-control': 'no-store',
    },
  });
});
