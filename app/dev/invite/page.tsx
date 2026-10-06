import { notFound } from 'next/navigation';
import DevInvite from './DevInvite';

/** Development-only preview of the invitation in every track, color and place. 404 in production. */
export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  if (process.env.NODE_ENV === 'production') notFound();
  return <DevInvite params={await searchParams} />;
}
