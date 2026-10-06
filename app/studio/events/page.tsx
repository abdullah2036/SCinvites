import type { Metadata } from 'next';
import Studio from '@/components/shell/Studio';
import { sql } from '@/lib/server/db';
import { listEvents } from '@/lib/server/events';
import EventsClient from './EventsClient';

export const metadata: Metadata = { title: 'الفعاليات — منصة الدعوات' };

export default async function EventsPage() {
  const [events, tpl] = await Promise.all([
    listEvents(),
    sql<{ event_id: string; id: string }[]>`select distinct on (event_id) event_id, id from templates where status = 'approved' order by event_id, approved_at desc`,
  ]);
  const byEvent = new Map(tpl.map((t) => [t.event_id, t.id]));
  return (
    <Studio active="events">
      <EventsClient
        base={`/${process.env.OWNER_PATH}`}
        events={events.map((e) => ({
          id: e.id, title: e.title, subtitle: e.subtitle, latinTitle: e.latin_title, track: e.track,
          startsAt: new Date(e.starts_at).toISOString(), endsAt: e.ends_at ? new Date(e.ends_at).toISOString() : null, status: e.status,
          place: { type: e.place_type, name: e.place_name, url: e.place_url }, invitations: e.invitations, confirmed: e.confirmed, templateId: byEvent.get(e.id) ?? null,
        }))}
      />
    </Studio>
  );
}
