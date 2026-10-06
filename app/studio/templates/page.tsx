import type { Metadata } from 'next';
import Studio from '@/components/shell/Studio';
import { listTemplates } from '@/lib/server/templates';
import { artworkUrl } from '@/lib/server/storage';
import TemplatesClient from './TemplatesClient';

export const metadata: Metadata = { title: 'القوالب — منصة الدعوات' };

export default async function TemplatesPage() {
  const templates = await listTemplates();
  return (
    <Studio active="templates">
      <TemplatesClient
        base={`/${process.env.OWNER_PATH}`}
        cards={templates.map((t) => ({
          id: t.id, track: t.track, eventTitle: t.event_title, eventSubtitle: t.event_subtitle, stampTypes: t.stamp_types,
          allowedColors: t.allowed_colors, artworkUrl: artworkUrl(t.artwork_path), status: t.status, version: t.version,
        }))}
      />
    </Studio>
  );
}
