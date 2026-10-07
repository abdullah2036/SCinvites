import type { Metadata } from 'next';
import Studio from '@/components/shell/Studio';
import { getAnalytics } from '@/lib/server/analytics';
import { listSemesters } from '@/lib/server/semesters';
import { listEvents } from '@/lib/server/events';
import AnalyticsClient from './AnalyticsClient';

export const metadata: Metadata = { title: 'الإحصائيات — منصة الدعوات' };

export default async function AnalyticsPage() {
  const [analytics, semesters, events] = await Promise.all([getAnalytics({}), listSemesters(), listEvents()]);
  return (
    <Studio active="analytics" live={false}>
      <AnalyticsClient initial={analytics} semesters={semesters} events={events.map((e) => ({ id: e.id, title: e.title }))} />
    </Studio>
  );
}
