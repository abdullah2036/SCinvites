import { sql } from './db';
import { audit } from './audit';
import { getSettings } from './settings';
import { sendEmail, emailLayout, escapeHtml } from './email';
import { templatesVisibleToLeader } from './templates';
import * as invitations from './invitations';
import { AppError, type Color, type PlaceType, type RequestStatus, type Track } from '@/lib/shared/types';

export type RequestPerson = { name: string; org?: string | null; title?: string | null };
export type RequestInput = {
  templateId: string;
  stamp: string;
  color: Color;
  place?: { type: PlaceType; name?: string | null; url?: string | null } | null;
  showQr?: boolean;
  people: RequestPerson[];
};

async function leaderOf(leaderId: string) {
  const [l] = await sql<{ id: string; name: string; committee: string; status: string }[]>`select id, name, committee, status from leaders where id = ${leaderId}`;
  if (!l || l.status !== 'approved') throw new AppError('unauthorized', 401, 'يلزم تسجيل الدخول');
  return l;
}

/** Template must be visible to the leader now, the colour/stamp allowed, and the deadline not passed. */
async function checkTemplate(leader: { committee: string }, input: RequestInput) {
  const now = new Date();
  const t = (await templatesVisibleToLeader(leader, now)).find((x) => x.id === input.templateId);
  if (!t) throw new AppError('template_not_available', 403, 'هذا القالب غير متاح لك');
  if (!t.allowed_colors.includes(input.color)) throw new AppError('color_not_allowed', 400, 'هذا اللون غير متاح لهذا القالب');
  if (!t.stamp_types.includes(input.stamp)) throw new AppError('stamp_not_allowed', 400, 'هذا الختم غير متاح لهذا القالب');
  const deadline = new Date(t.event_starts_at).getTime() - t.request_deadline_days * 86400_000;
  if (now.getTime() > deadline) throw new AppError('deadline_passed', 409, 'انتهى موعد الطلب لهذه الفعالية');
  if (!input.people.length || input.people.length > 200) throw new AppError('invalid_input', 400, 'أضف من ١ إلى ٢٠٠ اسم');
  return t;
}

async function insertPeople(tx: typeof sql, requestId: string, people: RequestPerson[]) {
  await tx`insert into leader_request_people ${tx(
    people.map((p, i) => ({ request_id: requestId, position: i, name: p.name.trim(), org: p.org?.trim() || null, title: p.title?.trim() || null })),
  )}`;
}

export async function submitRequest(leaderId: string, input: RequestInput): Promise<{ id: string; count: number }> {
  const leader = await leaderOf(leaderId);
  const t = await checkTemplate(leader, input);
  const place = input.place ?? { type: t.event_place_type as PlaceType, name: t.event_place_name, url: t.event_place_url };
  const id = await sql.begin(async (tx) => {
    const [r] = await tx<{ id: string }[]>`
      insert into leader_requests (leader_id, template_id, stamp, color, place_type, place_name, place_url, show_qr)
      values (${leaderId}, ${input.templateId}, ${input.stamp}, ${input.color}, ${place.type}, ${place.name ?? null}, ${place.url ?? null}, ${input.showQr ?? true})
      returning id`;
    await insertPeople(tx as unknown as typeof sql, r.id, input.people);
    return r.id;
  });
  const s = await getSettings();
  if (s.owner_email && s.notifications.invitationRequests) {
    await sendEmail({
      to: s.owner_email,
      subject: `طلب دعوات جديد — ${t.event_title}`,
      html: emailLayout(`<p>${escapeHtml(leader.name)} (${escapeHtml(leader.committee)}) أرسل طلب ${input.people.length} دعوة لفعالية ${escapeHtml(t.event_title)}</p><p>راجعيه من صفحة طلبات الاعتماد</p>`),
    }).catch((e) => console.error('request email failed', e));
  }
  return { id, count: input.people.length };
}

export async function resubmitRequest(leaderId: string, id: string, input: RequestInput): Promise<void> {
  const leader = await leaderOf(leaderId);
  const [r] = await sql<{ status: RequestStatus; leader_id: string }[]>`select status, leader_id from leader_requests where id = ${id}`;
  if (!r || r.leader_id !== leaderId) throw new AppError('forbidden', 403, 'هذا الطلب ليس لك');
  if (r.status !== 'changes_requested') throw new AppError('not_editable', 409, 'لا يمكن تعديل هذا الطلب الآن');
  const t = await checkTemplate(leader, input);
  const place = input.place ?? { type: t.event_place_type as PlaceType, name: t.event_place_name, url: t.event_place_url };
  await sql.begin(async (tx) => {
    await tx`update leader_requests set template_id = ${input.templateId}, stamp = ${input.stamp}, color = ${input.color}, place_type = ${place.type},
             place_name = ${place.name ?? null}, place_url = ${place.url ?? null}, show_qr = ${input.showQr ?? true}, status = 'pending', note = null
             where id = ${id}`;
    await tx`delete from leader_request_people where request_id = ${id}`;
    await insertPeople(tx as unknown as typeof sql, id, input.people);
  });
}

export async function decideRequest(
  id: string,
  d: { decision: 'approve'; excludedPersonIds: string[] } | { decision: 'changes_requested'; note: string },
): Promise<void> {
  await sql.begin(async (tx) => {
    const [r] = await tx<{ id: string; leader_id: string; template_id: string; stamp: string; color: Color; place_type: PlaceType; place_name: string | null; place_url: string | null; show_qr: boolean; status: RequestStatus }[]>`
      select * from leader_requests where id = ${id} for update`;
    if (!r) throw new AppError('not_found', 404, 'الطلب غير موجود');
    if (r.status !== 'pending') throw new AppError('not_pending', 409, 'تم البت في هذا الطلب مسبقًا');
    if (d.decision === 'changes_requested') {
      await tx`update leader_requests set status = 'changes_requested', note = ${d.note.trim()}, decided_at = now() where id = ${id}`;
      await audit('owner', 'request.changes', id, { note: d.note }, tx as never);
      return;
    }
    const excluded = new Set(d.excludedPersonIds);
    const people = await tx<{ id: string; name: string; org: string | null; title: string | null }[]>`
      select id, name, org, title from leader_request_people where request_id = ${id} order by position`;
    if (excluded.size) await tx`update leader_request_people set excluded = (id = any(${[...excluded]})) where request_id = ${id}`;
    const kept = people.filter((p) => !excluded.has(p.id));
    if (!kept.length) throw new AppError('nothing_to_approve', 400, 'استبعدتِ كل الأسماء، اطلبي تعديلًا بدلًا من ذلك');
    for (const p of kept) {
      await invitations.createInvitation(
        { templateId: r.template_id, color: r.color, stamp: r.stamp, kind: 'personal', invitee: { name: p.name, org: p.org, title: p.title }, customSlug: null, place: { type: r.place_type, name: r.place_name, url: r.place_url }, showQr: r.show_qr },
        { leaderId: r.leader_id, requestId: id, db: tx as never },
      );
    }
    await tx`update leader_requests set status = 'approved', decided_at = now() where id = ${id}`;
    await audit('owner', 'request.approve', id, { created: kept.length, excluded: excluded.size }, tx as never);
  });
}

export async function getRequestLinks(leaderId: string, id: string): Promise<{ name: string; org: string | null; url: string }[]> {
  const [r] = await sql<{ leader_id: string; status: RequestStatus }[]>`select leader_id, status from leader_requests where id = ${id}`;
  if (!r || r.leader_id !== leaderId) throw new AppError('forbidden', 403, 'هذا الطلب ليس لك');
  if (r.status !== 'approved') throw new AppError('not_approved', 409, 'تظهر الروابط بعد الاعتماد');
  const rows = await sql<{ invitee_name: string; invitee_org: string | null; slug: string }[]>`
    select invitee_name, invitee_org, slug from invitations where leader_request_id = ${id} and status <> 'revoked' order by created_at, invitee_name`;
  return rows.map((x) => ({ name: x.invitee_name, org: x.invitee_org, url: invitations.invitationUrl(x.slug) }));
}

export type LeaderRequestItem = {
  id: string;
  status: RequestStatus;
  note: string | null;
  createdAt: string;
  templateId: string;
  eventTitle: string;
  track: Track;
  color: Color;
  stamp: string;
  people: number;
};

export async function listLeaderRequests(leaderId: string): Promise<LeaderRequestItem[]> {
  const rows = await sql<(LeaderRequestItem & { createdAt: Date })[]>`
    select r.id, r.status, r.note, r.created_at as "createdAt", r.template_id as "templateId", e.title as "eventTitle", t.track, r.color, r.stamp,
           (select count(*)::int from leader_request_people p where p.request_id = r.id and not p.excluded) as people
    from leader_requests r join templates t on t.id = r.template_id join events e on e.id = t.event_id
    where r.leader_id = ${leaderId} order by r.created_at desc`;
  return rows.map((r) => ({ ...r, createdAt: new Date(r.createdAt).toISOString() }));
}

export type PendingRequest = {
  id: string;
  createdAt: string;
  leaderName: string;
  committee: string;
  eventTitle: string;
  eventSubtitle: string | null;
  latinTitle: string | null;
  startsAt: string;
  track: Track;
  color: Color;
  stamp: string;
  place: { type: PlaceType; name: string | null; url: string | null };
  people: { id: string; name: string; org: string | null; title: string | null }[];
};

export async function listPendingRequests(): Promise<PendingRequest[]> {
  const rows = await sql<{ id: string; created_at: Date; leader_name: string; committee: string; title: string; subtitle: string | null; latin_title: string | null; starts_at: Date; track: Track; color: Color; stamp: string; place_type: PlaceType; place_name: string | null; place_url: string | null }[]>`
    select r.id, r.created_at, l.name as leader_name, l.committee, e.title, e.subtitle, e.latin_title, e.starts_at, t.track, r.color, r.stamp, r.place_type, r.place_name, r.place_url
    from leader_requests r join leaders l on l.id = r.leader_id join templates t on t.id = r.template_id join events e on e.id = t.event_id
    where r.status = 'pending' order by r.created_at asc`;
  if (!rows.length) return [];
  const people = await sql<{ id: string; request_id: string; name: string; org: string | null; title: string | null }[]>`
    select id, request_id, name, org, title from leader_request_people where request_id = any(${rows.map((r) => r.id)}) order by position`;
  return rows.map((r) => ({
    id: r.id,
    createdAt: r.created_at.toISOString(),
    leaderName: r.leader_name,
    committee: r.committee,
    eventTitle: r.title,
    eventSubtitle: r.subtitle,
    latinTitle: r.latin_title,
    startsAt: r.starts_at.toISOString(),
    track: r.track,
    color: r.color,
    stamp: r.stamp,
    place: { type: r.place_type, name: r.place_name, url: r.place_url },
    people: people.filter((p) => p.request_id === r.id).map(({ request_id: _r, ...p }) => p),
  }));
}
