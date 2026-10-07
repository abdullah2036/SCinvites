import type { Metadata } from 'next';
import Studio from '@/components/shell/Studio';
import { getSettings } from '@/lib/server/settings';
import { listLeaders } from '@/lib/server/leader-auth';
import SettingsClient from './SettingsClient';

export const metadata: Metadata = { title: 'الإعدادات — منصة الدعوات' };

export default async function SettingsPage() {
  const [settings, leaders] = await Promise.all([getSettings(), listLeaders()]);
  return (
    <Studio active="settings">
      <SettingsClient settings={settings} leaders={leaders} emailReady={!!process.env.RESEND_API_KEY} />
    </Studio>
  );
}
