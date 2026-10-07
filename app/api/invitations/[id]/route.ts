import { z } from 'zod';
import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { deleteInvitation, revokeInvitation, updateInvitation } from '@/lib/server/invitations';

type Ctx = { params: Promise<{ id: string }> };
const Patch = z.object({
  inviteeName: z.string().trim().min(1).max(80),
  inviteeOrg: z.string().trim().max(120).nullish().transform((s) => s || null),
  inviteeTitle: z.string().trim().max(80).nullish().transform((s) => s || null),
});

/** Corrects a personal invitation's name / organization / title. */
export const PATCH = handler<Ctx>(async (req, { params }) => {
  await requireOwner(req);
  await updateInvitation((await params).id, Patch.parse(await readJson(req)));
  return json({ ok: true });
});

/** Default: revoke (the link then shows «هذه الدعوة لم تعد متاحة»). With ?permanent=1: delete it and its answers. */
export const DELETE = handler<Ctx>(async (req, { params }) => {
  await requireOwner(req);
  const { id } = await params;
  if (new URL(req.url).searchParams.get('permanent') === '1') await deleteInvitation(id);
  else await revokeInvitation(id);
  return json({ ok: true });
});
