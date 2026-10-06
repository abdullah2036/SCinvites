import { sql } from '@/lib/server/db';
import { getSettings } from '@/lib/server/settings';
import StudioShell, { type StudioNav } from './StudioShell';

/** Server wrapper for every studio page: sidebar data (pending approvals, owner profile) + shell. */
export default async function Studio({ active, children }: { active: StudioNav; children: React.ReactNode }) {
  const [settings, [{ n }]] = await Promise.all([getSettings(), sql<{ n: number }[]>`select count(*)::int as n from leader_requests where status = 'pending'`]);
  return (
    <StudioShell base={`/${process.env.OWNER_PATH}`} active={active} pending={n} owner={{ name: settings.owner_name, title: settings.owner_title }}>
      {children}
    </StudioShell>
  );
}
