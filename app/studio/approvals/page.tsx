import type { Metadata } from 'next';
import Studio from '@/components/shell/Studio';
import { listPendingRequests } from '@/lib/server/requests';
import ApprovalsClient from './ApprovalsClient';

export const metadata: Metadata = { title: 'طلبات الاعتماد — منصة الدعوات' };

export default async function ApprovalsPage() {
  const requests = await listPendingRequests();
  return (
    <Studio active="approvals">
      <ApprovalsClient requests={requests} />
    </Studio>
  );
}
