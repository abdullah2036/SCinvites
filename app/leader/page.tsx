import { leaderContext } from '@/lib/server/leader-page';
import { listLeaderRequests } from '@/lib/server/requests';
import LeaderClient from './LeaderClient';

export const dynamic = 'force-dynamic';

export default async function LeaderPage() {
  const { leader, templates } = await leaderContext();
  const requests = await listLeaderRequests(leader.id);
  return <LeaderClient leader={{ name: leader.name, email: leader.email }} templates={templates} requests={requests} />;
}
