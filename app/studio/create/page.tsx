import type { Metadata } from 'next';
import { requireOwnerFromCookies } from '@/lib/server/page-auth';
import CreateForm from '@/components/create/CreateForm';
import { listGalleryTemplates } from '@/lib/server/templates';
import { getSettings } from '@/lib/server/settings';
import { toTemplateOption } from '@/lib/server/template-options';

export const metadata: Metadata = { title: 'إنشاء دعوة — منصة الدعوات' };

export default async function CreatePage({ searchParams }: { searchParams: Promise<{ template?: string }> }) {
  await requireOwnerFromCookies();
  const [templates, settings] = await Promise.all([listGalleryTemplates({ upcoming: true }), getSettings()]);
  return (
    <CreateForm
      mode="owner"
      templates={templates.map(toTemplateOption)}
      homeHref={`/${process.env.OWNER_PATH}`}
      roleLine={settings.owner_name}
      initialTemplateId={(await searchParams).template}
    />
  );
}
