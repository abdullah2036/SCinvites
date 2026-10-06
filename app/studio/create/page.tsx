import type { Metadata } from 'next';
import CreateForm from '@/components/create/CreateForm';
import { listGalleryTemplates } from '@/lib/server/templates';
import { getSettings } from '@/lib/server/settings';
import { toTemplateOption } from '@/lib/server/template-options';

export const metadata: Metadata = { title: 'إنشاء دعوة — منصة الدعوات' };

export default async function CreatePage({ searchParams }: { searchParams: Promise<{ template?: string }> }) {
  const [templates, settings] = await Promise.all([listGalleryTemplates({}), getSettings()]);
  const upcoming = templates.filter((t) => new Date(t.event_starts_at).getTime() > Date.now() - 86400_000);
  return (
    <CreateForm
      mode="owner"
      templates={upcoming.map(toTemplateOption)}
      homeHref={`/${process.env.OWNER_PATH}`}
      roleLine={settings.owner_name}
      initialTemplateId={(await searchParams).template}
    />
  );
}
