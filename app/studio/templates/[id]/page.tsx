import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTemplate } from '@/lib/server/templates';
import { listEvents } from '@/lib/server/events';
import { artworkUrl } from '@/lib/server/storage';
import TemplateClient, { type TemplateDraft } from './TemplateClient';

export const metadata: Metadata = { title: 'إعداد قالب — منصة الدعوات' };

const iso = (d: Date | null) => (d ? new Date(d).toISOString() : null);

export default async function TemplatePage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ event?: string }> }) {
  const { id } = await params;
  const events = (await listEvents()).filter((e) => e.status !== 'archived');
  const choices = events.map((e) => ({
    id: e.id,
    title: e.title,
    subtitle: e.subtitle,
    latinTitle: e.latin_title,
    startsAt: new Date(e.starts_at).toISOString(),
    place: { type: e.place_type, name: e.place_name, url: e.place_url },
  }));
  let initial: TemplateDraft;
  if (id === 'new') {
    const eventId = (await searchParams).event ?? choices[0]?.id ?? '';
    const ev = events.find((e) => e.id === eventId);
    initial = {
      id: null, status: null, version: 1, eventId, track: ev?.track ?? 'space', allowedColors: ['petrol', 'night', 'ivory'], stampTypes: ['VIP'],
      allowedCommittees: [], availableFrom: null, availableTo: null, requestDeadlineDays: 3, artworkPath: null, artworkUrl: null,
    };
  } else {
    if (!/^[0-9a-f-]{36}$/.test(id)) notFound();
    const t = await getTemplate(id);
    if (!t) notFound();
    initial = {
      id: t.id, status: t.status, version: t.version, eventId: t.event_id, track: t.track, allowedColors: t.allowed_colors, stampTypes: t.stamp_types,
      allowedCommittees: t.allowed_committees, availableFrom: iso(t.available_from), availableTo: iso(t.available_to),
      requestDeadlineDays: t.request_deadline_days, artworkPath: t.artwork_path, artworkUrl: artworkUrl(t.artwork_path),
    };
  }
  return <TemplateClient initial={initial} events={choices} base={`/${process.env.OWNER_PATH}`} />;
}
