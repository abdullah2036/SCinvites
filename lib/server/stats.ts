import { sql } from './db';
import { listInvitations, invitationUrl } from './invitations';
import { artworkUrl } from './storage';
import { TRACKS, type InvitationListItem, type Track, type Color } from '@/lib/shared/types';

export type Stats = {
  nextEvent: { id: string; title: string; subtitle: string | null; track: Track; startsAt: string; confirmed: number; total: number; artworkUrl: string | null; color: Color } | null;
  generalInvitation: { slug: string; url: string; registrations: number } | null;
  pendingApprovals: number;
  pendingList: { id: string; leaderName: string; stamp: string; eventTitle: string; track: Track; createdAt: string; people: number }[];
  byStatus: Record<'confirmed' | 'opened' | 'created' | 'declined', number>;
  total: number;
  byTrack: Record<Track, number>;
  openRate: number;
  generalRegistrations: number;
  avgApprovalHours: number | null;
  activeTracks: number;
  semesterEvents: number;
  recent: InvitationListItem[];
};

/**
 * One "attendee unit" per personal invitation or per general registration:
 * confirmed = yes, declined = no, opened = opened/registered without answer, created = never opened.
 */
const units = () => sql`
  select t.track, e.id as event_id,
    case when i.status = 'confirmed' then 'confirmed' when i.status = 'declined' then 'declined'
         when i.status = 'opened' then 'opened' else 'created' end as state
  from invitations i join templates t on t.id = i.template_id join events e on e.id = t.event_id
  where i.kind = 'personal' and i.status <> 'revoked'
  union all
  select t.track, e.id,
    case when r2.answer = 'yes' then 'confirmed' when r2.answer = 'no' then 'declined' else 'opened' end
  from registrations r join invitations i on i.id = r.invitation_id join templates t on t.id = i.template_id
  join events e on e.id = t.event_id left join rsvps r2 on r2.registration_id = r.id
  where i.status <> 'revoked'`;

export async function getStats(): Promise<Stats> {
  const [statusRows, trackRows, [next], [general], [pending], pendingList, [approval], [scope], recent] = await Promise.all([
    sql<{ state: keyof Stats['byStatus']; n: number }[]>`select state, count(*)::int as n from (${units()}) u group by state`,
    sql<{ track: Track; n: number }[]>`select track, count(*)::int as n from (${units()}) u group by track`,
    sql<{ id: string; title: string; subtitle: string | null; track: Track; starts_at: Date; artwork_path: string | null; color: Color | null }[]>`
      select e.id, e.title, e.subtitle, e.track, e.starts_at,
        (select t.artwork_path from templates t where t.event_id = e.id and t.status = 'approved' order by t.approved_at desc limit 1) as artwork_path,
        (select i.color from invitations i join templates t on t.id = i.template_id where t.event_id = e.id order by i.created_at desc limit 1) as color
      from events e where e.status = 'active' and e.starts_at > now() order by e.starts_at asc limit 1`,
    sql<{ slug: string; registrations: number }[]>`
      select i.slug, (select count(*)::int from registrations r where r.invitation_id = i.id) as registrations
      from invitations i join templates t on t.id = i.template_id join events e on e.id = t.event_id
      where i.kind = 'general' and i.status <> 'revoked'
      order by (e.starts_at > now()) desc, abs(extract(epoch from e.starts_at - now())) asc, (i.created_by_leader_id is null) desc, i.created_at desc limit 1`,
    sql<{ n: number }[]>`select count(*)::int as n from leader_requests where status = 'pending'`,
    sql<Stats['pendingList']>`
      select r.id, l.name as "leaderName", r.stamp, e.title as "eventTitle", t.track, r.created_at as "createdAt",
        (select count(*)::int from leader_request_people p where p.request_id = r.id) as people
      from leader_requests r join leaders l on l.id = r.leader_id join templates t on t.id = r.template_id join events e on e.id = t.event_id
      where r.status = 'pending' order by r.created_at desc limit 3`,
    sql<{ hours: number | null }[]>`select avg(extract(epoch from decided_at - created_at) / 3600)::float as hours from leader_requests where status = 'approved' and decided_at is not null`,
    sql<{ tracks: number; events: number }[]>`
      select count(distinct e.track)::int as tracks, count(*)::int as events from events e
      where e.status <> 'archived' and e.starts_at > now() - interval '120 days'`,
    listInvitations({ limit: 6 }),
  ]);

  const byStatus = { confirmed: 0, opened: 0, created: 0, declined: 0 };
  for (const r of statusRows) byStatus[r.state] = r.n;
  const byTrack = Object.fromEntries(TRACKS.map((t) => [t, 0])) as Record<Track, number>;
  for (const r of trackRows) byTrack[r.track] = r.n;
  const total = byStatus.confirmed + byStatus.opened + byStatus.created + byStatus.declined;

  let nextEvent: Stats['nextEvent'] = null;
  if (next) {
    const [c] = await sql<{ confirmed: number; total: number }[]>`
      select count(*) filter (where state = 'confirmed')::int as confirmed, count(*)::int as total from (${units()}) u where event_id = ${next.id}`;
    nextEvent = {
      id: next.id,
      title: next.title,
      subtitle: next.subtitle,
      track: next.track,
      startsAt: next.starts_at.toISOString(),
      confirmed: c.confirmed,
      total: c.total,
      artworkUrl: artworkUrl(next.artwork_path),
      color: next.color ?? 'night',
    };
  }
  const [{ regs }] = await sql<{ regs: number }[]>`select count(*)::int as regs from registrations`;

  return {
    nextEvent,
    generalInvitation: general ? { slug: general.slug, url: invitationUrl(general.slug), registrations: general.registrations } : null,
    pendingApprovals: pending.n,
    pendingList: pendingList.map((p) => ({ ...p, createdAt: new Date(p.createdAt).toISOString() })),
    byStatus,
    total,
    byTrack,
    openRate: total ? (byStatus.confirmed + byStatus.opened + byStatus.declined) / total : 0,
    generalRegistrations: regs,
    avgApprovalHours: approval.hours,
    activeTracks: scope.tracks,
    semesterEvents: scope.events,
    recent,
  };
}
