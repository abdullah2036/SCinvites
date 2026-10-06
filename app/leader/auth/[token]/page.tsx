import type { Metadata } from 'next';
import LeaderAuthClient from './LeaderAuthClient';

export const metadata: Metadata = { title: 'دخول القادة — نادي العلوم', robots: { index: false, follow: false } };

// Deliberately does no database work: WhatsApp and other apps fetch links to build previews,
// and a GET must never use up the one-time token. The token is consumed only by the button's POST.
export default async function LeaderAuthPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return <LeaderAuthClient token={token} />;
}
