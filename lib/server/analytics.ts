import { sql } from './db';
import { listSemesters } from './semesters';
import type { Source } from '@/lib/shared/source';

export type Totals = {
  attending: number;
  declined: number;
  noAnswer: number;
  opened: number;
  invitations: number;
  registrations: number;
  events: number;
  confirmationRate: number;
};

export type Analytics = {
  totals: Totals;
  /** [weekday 0=Sunday][hour 0–23] count of «سأحضر» answers, Riyadh time */
  heatmap: number[][];
  peak: { weekday: number; hour: number; count: number } | null;
  timeToConfirm: { meanMinutes: number; medianMinutes: number } | null;
  bestSlots: { weekday: number; hour: number; rate: number; events: number; attending: number }[];
  sources: { source: Source; count: number }[];
  semesters: { id: string | null; name: string; startsOn: string | null; endsOn: string | null; totals: Totals }[];
};

type Scope = { semesterId?: string | null; outsideSemesters?: boolean; eventId?: string };

const TZ = 'Asia/Riyadh';

/** Events in scope: a semester (by Riyadh start date), events outside every semester, or one event. */
function scoped(scope: Scope) {
  return sql`
    select e.* from events e
    where e.status <> 'archived'
      ${scope.eventId ? sql`and e.id = ${scope.eventId}` : sql``}
      ${scope.semesterId ? sql`and exists (select 1 from semesters s where s.id = ${scope.semesterId} and (e.starts_at at time zone ${TZ})::date between s.starts_on and s.ends_on)` : sql``}
      ${scope.outsideSemesters ? sql`and not exists (select 1 from semesters s where (e.starts_at at time zone ${TZ})::date between s.starts_on and s.ends_on)` : sql``}`;
}

/** One row per personal invitation or public registration ("a person who could attend"). */
function units(scope: Scope) {
  return sql`
    with ev as (${scoped(scope)})
    select e.id as event_id, e.starts_at, 'personal' as kind, i.opened_at as start_at,
           (i.opened_at is not null or r.id is not null) as opened, r.answer, r.answered_at, i.open_source as source
    from invitations i join templates t on t.id = i.template_id join ev e on e.id = t.event_id
    left join rsvps r on r.invitation_id = i.id and r.registration_id is null
    where i.kind = 'personal' and i.status <> 'revoked'
    union all
    select e.id, e.starts_at, 'general', g.created_at, true, r.answer, r.answered_at, g.source
    from registrations g join invitations i on i.id = g.invitation_id join templates t on t.id = i.template_id join ev e on e.id = t.event_id
    left join rsvps r on r.registration_id = g.id
    where i.status <> 'revoked'`;
}

async function totals(scope: Scope): Promise<Totals> {
  const [[u], [inv]] = await Promise.all([
    sql<Omit<Totals, 'invitations' | 'events' | 'confirmationRate'>[]>`
      select count(*) filter (where answer = 'yes')::int as attending,
             count(*) filter (where answer = 'no')::int as declined,
             count(*) filter (where opened and answer is null)::int as "noAnswer",
             count(*) filter (where opened)::int as opened,
             count(*) filter (where kind = 'general')::int as registrations
      from (${units(scope)}) u`,
    sql<{ invitations: number; events: number }[]>`
      with ev as (${scoped(scope)})
      select (select count(*)::int from invitations i join templates t on t.id = i.template_id join ev e on e.id = t.event_id where i.status <> 'revoked') as invitations,
             (select count(*)::int from ev) as events`,
  ]);
  return { ...u, ...inv, confirmationRate: u.opened ? u.attending / u.opened : 0 };
}

export async function getAnalytics(filter: { semesterId?: string; eventId?: string }): Promise<Analytics> {
  const scope: Scope = { semesterId: filter.semesterId, eventId: filter.eventId };
  const [t, cells, [ttc], slots, sources, semesters, [outside]] = await Promise.all([
    totals(scope),
    sql<{ dow: number; hour: number; n: number }[]>`
      select extract(dow from answered_at at time zone ${TZ})::int as dow, extract(hour from answered_at at time zone ${TZ})::int as hour, count(*)::int as n
      from (${units(scope)}) u where answer = 'yes' group by 1, 2`,
    sql<{ mean: number | null; median: number | null }[]>`
      select avg(m)::float as mean, percentile_cont(0.5) within group (order by m)::float as median
      from (select extract(epoch from answered_at - start_at) / 60 as m from (${units(scope)}) u
            where answer = 'yes' and start_at is not null and answered_at >= start_at) x`,
    sql<{ weekday: number; hour: number; attending: number; total: number; events: number }[]>`
      select extract(dow from starts_at at time zone ${TZ})::int as weekday, extract(hour from starts_at at time zone ${TZ})::int as hour,
             count(*) filter (where answer = 'yes')::int as attending, count(*)::int as total, count(distinct event_id)::int as events
      from (${units(scope)}) u group by 1, 2`,
    sql<{ source: Source; count: number }[]>`
      select source, count(*)::int as count from (${units(scope)}) u where opened and source is not null group by source order by count desc, source`,
    listSemesters(),
    sql<{ n: number }[]>`select count(*)::int as n from (${scoped({ outsideSemesters: true })}) x`,
  ]);

  const heatmap = Array.from({ length: 7 }, () => Array<number>(24).fill(0));
  let peak: Analytics['peak'] = null;
  for (const c of cells) {
    heatmap[c.dow][c.hour] = c.n;
    if (!peak || c.n > peak.count) peak = { weekday: c.dow, hour: c.hour, count: c.n };
  }

  const perSemester = await Promise.all(
    semesters.map(async (s) => ({ id: s.id as string | null, name: s.name, startsOn: s.startsOn as string | null, endsOn: s.endsOn as string | null, totals: await totals({ semesterId: s.id }) })),
  );
  if (outside.n > 0) perSemester.push({ id: null, name: 'خارج الفصول', startsOn: null, endsOn: null, totals: await totals({ outsideSemesters: true }) });

  return {
    totals: t,
    heatmap,
    peak,
    timeToConfirm: ttc.mean === null ? null : { meanMinutes: ttc.mean, medianMinutes: ttc.median ?? ttc.mean },
    bestSlots: slots
      .map((s) => ({ weekday: s.weekday, hour: s.hour, events: s.events, attending: s.attending, rate: s.total ? s.attending / s.total : 0 }))
      .sort((a, b) => b.rate - a.rate || b.attending - a.attending)
      .slice(0, 5),
    sources,
    semesters: perSemester,
  };
}
