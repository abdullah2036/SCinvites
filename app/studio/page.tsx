import type { Metadata } from 'next';
import Studio from '@/components/shell/Studio';
import { getStats } from '@/lib/server/stats';
import { getSettings } from '@/lib/server/settings';
import DashboardClient from './DashboardClient';

export const metadata: Metadata = { title: 'الرئيسية — منصة الدعوات' };

export default async function StudioHome() {
  const [stats, settings] = await Promise.all([getStats(), getSettings()]);
  return (
    <Studio active="dashboard">
      <DashboardClient stats={stats} base={`/${process.env.OWNER_PATH}`} ownerName={settings.owner_name} />
    </Studio>
  );
}
