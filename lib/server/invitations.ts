import { sql, type Db } from './db';
import { audit } from './audit';
import { getSettings } from './settings';
import { sendEmail, emailLayout, escapeHtml } from './email';
import { randomSlug, isValidCustomSlug } from '@/lib/shared/slugs';
import type { InvitationInputT } from '@/lib/shared/schemas';
import { AppError, type InvitationListItem, type InvitationStatus, type InvitationKind } from '@/lib/shared/types';

export const invitationUrl = (slug: string) => `${process.env.APP_URL}/i/${slug}`;

const isUniqueViolation = (e: unknown) => (e as { code?: string })?.code === '23505';

/**
 * Creates one invitation from an approved template. Used by the owner directly and,
 * inside the approval transaction, for each person in a leader's request.
 */
export async function createInvitation(
  input: InvitationInputT,
  opts: { leaderId?: string | null; requestId?: string | null; db?: Db } = {},
): Promise<{ id: string; slug: string; url: string }> {
  const db = opts.db ?? sql;
  const [t] = await db<{ status: string; allowed_colors: string[]; stamp_types: string[]; place_type: string; place_name: string | null; place_url: string | null }[]>`
    select t.status, t.allowed_colors, t.stamp_types, e.place_type, e.place_name, e.place_url
    from templates t join events e on e.id = t.event_id where t.id = ${input.templateId}`;
  if (!t) throw new AppError('not_found', 404, 'القالب غير موجود');
  if (t.status !== 'approved') throw new AppError('template_not_approved', 409, 'القالب غير معتمد');
  if (!t.allowed_colors.includes(input.color)) throw new AppError('color_not_allowed', 400, 'هذا اللون غير متاح لهذا القالب');
  if (input.kind === 'personal' && !t.stamp_types.includes(input.stamp)) throw new AppError('stamp_not_allowed', 400, 'هذا الختم غير متاح لهذا القالب');
  if (input.kind === 'personal' && !input.invitee?.name) throw new AppError('invitee_required', 400, 'اكتبي اسم المدعو');

  const place = input.place ?? { type: t.place_type, name: t.place_name, url: t.place_url };
  const custom = input.kind === 'general' ? input.customSlug : null;
  if (custom && !isValidCustomSlug(custom)) throw new AppError('bad_slug', 400, 'الرابط المختصر: حروف إنجليزية صغيرة وأرقام وشرطة فقط، من ٣ إلى ٣٢ حرفًا');

  for (let attempt = 0; attempt < 4; attempt++) {
    const slug = custom ?? randomSlug();
    try {
      const [row] = await db<{ id: string }[]>`
        insert into invitations (template_id, color, stamp, kind, invitee_name, invitee_org, invitee_title,
                                 place_type, place_name, place_url, slug, show_qr, created_by_leader_id, leader_request_id)
        values (${input.templateId}, ${input.color}, ${input.stamp}, ${input.kind},
                ${input.kind === 'personal' ? input.invitee!.name : null},
                ${input.kind === 'personal' ? (input.invitee!.org ?? null) : null},
                ${input.kind === 'personal' ? (input.invitee!.title ?? null) : null},
                ${place.type}, ${place.name ?? null}, ${place.url ?? null}, ${slug}, ${input.showQr ?? true},
                ${opts.leaderId ?? null}, ${opts.requestId ?? null})
        returning id`;
      return { id: row.id, slug, url: invitationUrl(slug) };
    } catch (e) {
      if (!isUniqueViolation(e)) throw e;
      if (custom) throw new AppError('slug_taken', 409, 'هذا الرابط مستخدم');
    }
  }
  throw new Error('could not allocate a unique slug');
}

export async function revokeInvitation(id: string): Promise<void> {
  const rows = await sql`update invitations set status = 'revoked', revoked_at = now() where id = ${id} and status <> 'revoked' returning id`;
  if (!rows.length) {
    const [exists] = await sql`select 1 from invitations where id = ${id}`;
    if (!exists) throw new AppError('not_found', 404, 'الدعوة غير موجودة');
    return;
  }
  await audit('owner', 'invitation.revoke', id);
}

export async function sendTestCopy(id: string): Promise<void> {
  const [inv] = await sql<{ slug: string; title: string; invitee_name: string | null }[]>`
    select i.slug, e.title, i.invitee_name from invitations i
    join templates t on t.id = i.template_id join events e on e.id = t.event_id where i.id = ${id}`;
  if (!inv) throw new AppError('not_found', 404, 'الدعوة غير موجودة');
  const { owner_email } = await getSettings();
  if (!owner_email) throw new AppError('owner_email_missing', 409, 'أضيفي بريدك من صفحة الإعدادات أولًا');
  const url = invitationUrl(inv.slug);
  await sendEmail({
    to: owner_email,
    subject: `نسخة تجريبية — ${inv.title}`,
    html: emailLayout(
      `<p>هذه نسخة تجريبية من الدعوة${inv.invitee_name ? ` المرسلة إلى ${escapeHtml(inv.invitee_name)}` : ''}</p>` +
        `<p><a href="${url}">${url}</a></p><p>افتحيها على جوالك وتأكدي منها قبل الإرسال</p>`,
    ),
  });
}

export async function listInvitations(filter: { q?: string; status?: InvitationStatus; kind?: InvitationKind; eventId?: string; limit?: number }): Promise<InvitationListItem[]> {
  const q = filter.q?.trim();
  const rows = await sql<(Omit<InvitationListItem, 'url'> & { createdAt: Date })[]>`
    select i.id, i.slug, i.kind, i.status, i.color, i.stamp, t.track, i.invitee_name as "inviteeName", i.invitee_org as "inviteeOrg",
           e.title as "eventTitle", i.created_at as "createdAt",
           (select count(*)::int from registrations r where r.invitation_id = i.id) as registrations
    from invitations i join templates t on t.id = i.template_id join events e on e.id = t.event_id
    where true
      ${q ? sql`and (i.invitee_name ilike ${'%' + q + '%'} or i.invitee_org ilike ${'%' + q + '%'} or i.slug ilike ${'%' + q + '%'})` : sql``}
      ${filter.status ? sql`and i.status = ${filter.status}` : sql``}
      ${filter.kind ? sql`and i.kind = ${filter.kind}` : sql``}
      ${filter.eventId ? sql`and e.id = ${filter.eventId}` : sql``}
    order by i.created_at desc
    limit ${filter.limit ?? 500}`;
  return rows.map((r) => ({ ...r, createdAt: new Date(r.createdAt).toISOString(), url: invitationUrl(r.slug) }));
}
