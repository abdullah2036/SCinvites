import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { createInvitation, createInvitationBatch, listInvitations } from '@/lib/server/invitations';
import { InvitationBatchInput, InvitationInput } from '@/lib/shared/schemas';
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

/** Body with `people: [...]` creates a batch of personal invitations; otherwise one invitation. */
export const POST = handler(async (req) => {
  await requireOwner(req);
  const body = (await readJson(req)) as Record<string, unknown>;
  if (Array.isArray(body?.people)) return json({ items: await createInvitationBatch(InvitationBatchInput.parse(body)) }, { status: 201 });
  return json(await createInvitation(InvitationInput.parse(body)), { status: 201 });
});
