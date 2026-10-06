import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { createInvitation, listInvitations } from '@/lib/server/invitations';
import { InvitationInput } from '@/lib/shared/schemas';
import type { InvitationKind, InvitationStatus } from '@/lib/shared/types';

const STATUSES = ['created', 'opened', 'confirmed', 'declined', 'revoked'];

export const GET = handler(async (req) => {
  await requireOwner(req);
  const p = new URL(req.url).searchParams;
  const status = p.get('status');
  const kind = p.get('kind');
  return json(
    await listInvitations({
      q: p.get('q') ?? undefined,
      status: status && STATUSES.includes(status) ? (status as InvitationStatus) : undefined,
      kind: kind === 'personal' || kind === 'general' ? (kind as InvitationKind) : undefined,
      eventId: p.get('eventId') ?? undefined,
    }),
  );
});

export const POST = handler(async (req) => {
  await requireOwner(req);
  return json(await createInvitation(InvitationInput.parse(await readJson(req))), { status: 201 });
});
