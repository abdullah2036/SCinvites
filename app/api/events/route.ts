import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { createEvent, listEvents } from '@/lib/server/events';
import { EventInput } from '@/lib/shared/schemas';
import { TRACKS, type Track } from '@/lib/shared/types';

export const GET = handler(async (req) => {
  await requireOwner(req);
  const track = new URL(req.url).searchParams.get('track');
  return json(await listEvents({ track: TRACKS.includes(track as Track) ? (track as Track) : undefined }));
});

export const POST = handler(async (req) => {
  await requireOwner(req);
  return json(await createEvent(EventInput.parse(await readJson(req))), { status: 201 });
});
