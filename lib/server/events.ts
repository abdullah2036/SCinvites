import type { z } from 'zod';
import { sql } from './db';
import { audit } from './audit';
import type { EventInput, EventPatch } from '@/lib/shared/schemas';
import { AppError, type PlaceType, type Track } from '@/lib/shared/types';

export type EventRow = {
  id: string;
  title: string;
  subtitle: string | null;
  latin_title: string | null;
  track: Track;
  starts_at: Date;
  ends_at: Date | null;
  place_type: PlaceType;
  place_name: string | null;
  place_url: string | null;
  status: 'draft' | 'active' | 'archived';
  created_at: Date;
};

export async function createEvent(input: z.infer<typeof EventInput>): Promise<EventRow> {
  const [row] = await sql<EventRow[]>`
    insert into events (title, subtitle, latin_title, track, starts_at, ends_at, place_type, place_name, place_url, status)
    values (${input.title}, ${input.subtitle ?? null}, ${input.latinTitle ?? null}, ${input.track}, ${input.startsAt},
            ${input.endsAt ?? null}, ${input.place.type}, ${input.place.name ?? null}, ${input.place.url ?? null}, ${input.status})
    returning *`;
  return row;
}

export async function updateEvent(id: string, patch: z.infer<typeof EventPatch>): Promise<EventRow> {
  const current = await getEvent(id);
  if (!current) throw new AppError('not_found', 404, 'الفعالية غير موجودة');
  const place = patch.place ?? { type: current.place_type, name: current.place_name, url: current.place_url };
  const [row] = await sql<EventRow[]>`
    update events set
      title = ${patch.title ?? current.title},
      subtitle = ${patch.subtitle !== undefined ? patch.subtitle : current.subtitle},
      latin_title = ${patch.latinTitle !== undefined ? patch.latinTitle : current.latin_title},
      track = ${patch.track ?? current.track},
      starts_at = ${patch.startsAt ?? current.starts_at},
      ends_at = ${patch.endsAt !== undefined ? patch.endsAt : current.ends_at},
      place_type = ${place.type}, place_name = ${place.name ?? null}, place_url = ${place.url ?? null},
      status = ${patch.status ?? current.status}
    where id = ${id} returning *`;
  return row;
}

export async function getEvent(id: string): Promise<EventRow | null> {
  const [row] = await sql<EventRow[]>`select * from events where id = ${id}`;
  return row ?? null;
}

export type EventListItem = EventRow & { invitations: number; confirmed: number; templates: number };

export async function listEvents(filter: { track?: Track } = {}): Promise<EventListItem[]> {
  return sql<EventListItem[]>`
    select e.*,
      (select count(*)::int from templates t where t.event_id = e.id and t.status = 'approved') as templates,
      (select count(*)::int from invitations i join templates t on t.id = i.template_id where t.event_id = e.id and i.status <> 'revoked') as invitations,
      (select count(*)::int from rsvps r join invitations i on i.id = r.invitation_id join templates t on t.id = i.template_id
         where t.event_id = e.id and r.answer = 'yes') as confirmed
    from events e
    where e.status <> 'archived' ${filter.track ? sql`and e.track = ${filter.track}` : sql``}
    order by e.starts_at desc`;
}

/** Deletes an event that has no templates; otherwise the owner archives it (sent invitations keep working). */
export async function deleteEvent(id: string): Promise<void> {
  const [{ n }] = await sql<{ n: number }[]>`select count(*)::int as n from templates where event_id = ${id}`;
  if (n > 0) throw new AppError('event_in_use', 409, 'لهذه الفعالية قوالب. احذفي قوالبها أولًا، أو اختاري الحالة «مؤرشفة» لإخفائها');
  const rows = await sql`delete from events where id = ${id} returning id`;
  if (!rows.length) throw new AppError('not_found', 404, 'الفعالية غير موجودة');
  await audit('owner', 'event.delete', id);
}
