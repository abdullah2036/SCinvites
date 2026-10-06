import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'بوابة القادة — منصة الدعوات', robots: { index: false, follow: false } };

export default function LeaderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
