import type { Metadata } from 'next';
import { requireOwnerFromCookies } from '@/lib/server/page-auth';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { robots: { index: false, follow: false } };

/** Every studio page requires the owner session; without one it is a plain 404. */
export default async function StudioLayout({ children }: { children: React.ReactNode }) {
  await requireOwnerFromCookies();
  return children;
}
