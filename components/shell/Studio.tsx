import { sql } from '@/lib/server/db';
import { getSettings } from '@/lib/server/settings';
import StudioShell, { type StudioNav } from './StudioShell';
import { requireOwnerFromCookies } from '@/lib/server/page-auth';
import AutoRefresh from './AutoRefresh';

/** Server wrapper for every studio page: sidebar data (pending approvals, owner profile) + shell. */
export default async function Studio({ active, live = true, children }: { active: StudioNav; live?: boolean; children: React.ReactNode }) {
  // Layouts are not a security boundary in Next (a page segment can render without its layout), so check here too.
  await requireOwnerFromCookies();
  const [settings, [{ n }]] = await Promise.all([getSettings(), sql<{ n: number }[]>`select count(*)::int as n from leader_requests where status = 'pending'`]);
  return (
    <StudioShell base={`/${process.env.OWNER_PATH}`} active={active} pending={n} owner={{ name: settings.owner_name, title: settings.owner_title }}>
      {live && <AutoRefresh />}
      {children}
    </StudioShell>
  );
}
