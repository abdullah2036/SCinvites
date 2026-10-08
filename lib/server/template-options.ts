import { artworkUrl } from './storage';
import type { TemplateWithEvent } from './templates';
import type { TemplateOption } from '@/components/create/CreateForm';

/** Shapes template rows for the Create screen (serializable for client components). */
export function toTemplateOption(t: TemplateWithEvent): TemplateOption {
  const startsAt = new Date(t.event_starts_at);
  return {
    id: t.id,
    track: t.track,
    eventTitle: t.event_title,
    eventSubtitle: t.event_subtitle,
    latinTitle: t.event_latin_title,
    startsAt: startsAt.toISOString(),
    endsAt: t.event_ends_at ? new Date(t.event_ends_at).toISOString() : null,
    allowedColors: t.allowed_colors,
    stampTypes: t.stamp_types,
    artworkUrl: artworkUrl(t.artwork_path),
    place: { type: t.event_place_type as TemplateOption['place']['type'], name: t.event_place_name, url: t.event_place_url },
    deadline: new Date(startsAt.getTime() - t.request_deadline_days * 86400_000).toISOString(),
    availableFrom: t.available_from ? new Date(t.available_from).toISOString() : null,
    availableTo: t.available_to ? new Date(t.available_to).toISOString() : null,
  };
}
