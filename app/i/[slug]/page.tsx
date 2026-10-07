import type { Metadata } from 'next';
import { cache } from 'react';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { getGuestView as loadGuestView, getRegistration } from '@/lib/server/guest';
import GuestClient from './GuestClient';
import Unavailable from './Unavailable';

export const dynamic = 'force-dynamic';

// Metadata and the page need the same invitation: load it once per request.
const getGuestView = cache(loadGuestView);

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ src?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const view = await getGuestView((await params).slug);
  // Never put the invitee's name in metadata or previews.
  return {
    title: view ? `دعوة — ${view.event.title}` : 'دعوة — نادي العلوم',
    robots: { index: false, follow: false },
    openGraph: view ? { title: `دعوة من نادي العلوم — ${view.event.title}`, description: view.event.subtitle ?? 'نادي العلوم' } : undefined,
  };
}

export default async function GuestPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const view = await getGuestView(slug);
  if (!view) notFound();
  if (view.status === 'revoked') return <Unavailable />;
  const registration = view.kind === 'general' ? await getRegistration(slug, (await cookies()).get(`sc_reg_${slug}`)?.value) : null;
  const { src } = await searchParams;
  return <GuestClient view={view} registeredName={registration?.name ?? null} initialAnswer={registration?.answer ?? null} src={src ?? null} />;
}
