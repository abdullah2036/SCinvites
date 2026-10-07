import { sql } from '@/lib/server/db';
import { getSettings } from '@/lib/server/settings';
import StudioShell, { type StudioNav } from './StudioShell';
import { requireOwnerFromCookies } from '@/lib/server/page-auth';
import AutoRefresh from './AutoRefresh';

/** Server wrapper for every studio page: sidebar data (pending approvals, owner profile) + shell. */
export default async function Studio({ active, live = true, children }: { active: StudioNav; live?: boolean; children: React.ReactNode }) {
  // Layouts are not a security boundary in Next (a page segment can render without its layout), so check here too.
  await requireOwnerFromCookies();
  const [settings, [counts]] = await Promise.all([
    getSettings(),
    sql<{ requests: number; joins: number }[]>`
      select (select count(*) from leader_requests where status = 'pending')::int as requests,
             (select count(*) from leaders where status = 'pending')::int as joins`,
  ]);
  return (
    <StudioShell base={`/${process.env.OWNER_PATH}`} active={active} pending={counts.requests} pendingJoins={counts.joins} owner={{ name: settings.owner_name, title: settings.owner_title }}>
      {live && <AutoRefresh />}
      {children}
    </StudioShell>
  );
}
