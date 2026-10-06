import type { Metadata } from 'next';
import Studio from '@/components/shell/Studio';
import { listInvitations } from '@/lib/server/invitations';
import InvitationsClient from './InvitationsClient';

export const metadata: Metadata = { title: 'الدعوات — منصة الدعوات' };

export default async function InvitationsPage() {
  const items = await listInvitations({ limit: 2000 });
  return (
    <Studio active="invitations">
      <InvitationsClient items={items} />
    </Studio>
  );
}
