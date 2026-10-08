import type { z } from 'zod';
import { sql } from './db';
import { audit } from './audit';
import type { TemplateInput, TemplatePatch } from '@/lib/shared/schemas';
import { AppError, type Color, type TemplateStatus, type Track } from '@/lib/shared/types';

export type TemplateRow = {
  id: string;
  event_id: string;
  track: Track;
  version: number;
  supersedes_id: string | null;
  allowed_colors: Color[];
  artwork_path: string | null;
  stamp_types: string[];
  available_from: Date | null;
  available_to: Date | null;
  request_deadline_days: number;
  status: TemplateStatus;
  approved_at: Date | null;
  created_at: Date;
};

export type TemplateWithEvent = TemplateRow & {
  event_status: 'draft' | 'active' | 'archived';
  event_title: string;
  event_subtitle: string | null;
  event_latin_title: string | null;
  event_starts_at: Date;
  event_ends_at: Date | null;
  event_place_type: string;
  event_place_name: string | null;
  event_place_url: string | null;
};

const withEvent = (extra = sql``) => sql`
  select t.*, e.status as event_status, e.title as event_title, e.subtitle as event_subtitle, e.latin_title as event_latin_title,
         e.starts_at as event_starts_at, e.ends_at as event_ends_at, e.place_type as event_place_type,
         e.place_name as event_place_name, e.place_url as event_place_url ${extra}
  from templates t join events e on e.id = t.event_id`;

export async function createTemplate(input: z.infer<typeof TemplateInput>): Promise<TemplateRow> {
  const [row] = await sql<TemplateRow[]>`
    insert into templates (event_id, track, allowed_colors, artwork_path, stamp_types, available_from, available_to, request_deadline_days)
    values (${input.eventId}, ${input.track}, ${input.allowedColors}, ${input.artworkPath ?? null}, ${input.stampTypes},
            ${input.availableFrom ?? null}, ${input.availableTo ?? null}, ${input.requestDeadlineDays ?? 3})
    returning *`;
  return row;
}

export async function getTemplate(id: string): Promise<TemplateWithEvent | null> {
  const [row] = await sql<TemplateWithEvent[]>`${withEvent()} where t.id = ${id}`;
  return row ?? null;
}

function merged(t: TemplateRow, p: z.infer<typeof TemplatePatch>) {
  return {
    track: p.track ?? t.track,
    allowed_colors: p.allowedColors ?? t.allowed_colors,
    artwork_path: p.artworkPath !== undefined ? p.artworkPath : t.artwork_path,
    stamp_types: p.stampTypes ?? t.stamp_types,
    available_from: p.availableFrom !== undefined ? p.availableFrom : t.available_from,
    available_to: p.availableTo !== undefined ? p.availableTo : t.available_to,
    request_deadline_days: p.requestDeadlineDays ?? t.request_deadline_days,
  };
}

/** Drafts change in place; an approved template becomes a new draft version so sent invitations never change. */
export async function updateTemplate(id: string, patch: z.infer<typeof TemplatePatch>): Promise<TemplateRow> {
  const [t] = await sql<TemplateRow[]>`select * from templates where id = ${id}`;
  if (!t) throw new AppError('not_found', 404, 'القالب غير موجود');
  if (t.status === 'superseded') throw new AppError('template_superseded', 409, 'هذا إصدار قديم من القالب');
  const m = merged(t, patch);
  if (t.status === 'draft') {
    const [row] = await sql<TemplateRow[]>`update templates set ${sql(m)} where id = ${id} returning *`;
    return row;
  }
  // Reuse the open draft of this template if there is one, so there is only ever one next version.
  const [draft] = await sql<TemplateRow[]>`select * from templates where supersedes_id = ${t.id} and status = 'draft'`;
  if (draft) {
    const [row] = await sql<TemplateRow[]>`update templates set ${sql(merged(draft, patch))} where id = ${draft.id} returning *`;
    return row;
  }
  const [row] = await sql<TemplateRow[]>`
    insert into templates ${sql({ ...m, event_id: t.event_id, version: t.version + 1, supersedes_id: t.id, status: 'draft' })}
    returning *`;
  return row;
}

export async function approveTemplate(id: string): Promise<TemplateRow> {
  const row = await sql.begin(async (tx) => {
    const [r] = await tx<TemplateRow[]>`
      update templates set status = 'approved', approved_at = now() where id = ${id} and status = 'draft' returning *`;
    if (!r) throw new AppError('not_draft', 409, 'القالب معتمد مسبقًا أو غير موجود');
    if (r.supersedes_id) await tx`update templates set status = 'superseded' where id = ${r.supersedes_id} and status = 'approved'`;
    return r;
  });
  await audit('owner', 'template.approve', id, { version: row.version });
  return row;
}

/** Owner list: current versions (drafts and approved), newest first. */
export async function listTemplates(): Promise<(TemplateWithEvent & { hidden_reason: HiddenReason })[]> {
  return sql<(TemplateWithEvent & { hidden_reason: HiddenReason })[]>`
    ${withEvent(sql`, ${hiddenReason()} as hidden_reason`)}
    where t.status <> 'superseded' order by t.created_at desc`;
}

/**
 * Why leaders can't see a template (null = they can). The one rule for both the leader page and the owner's list.
 * Dates never hide a template: «متاح من / إلى» and the event date are shown to leaders, not used to filter.
 * To take a template away, the owner sets its event to «مسودة» or «مؤرشفة», or deletes the template.
 */
export type HiddenReason = 'not_approved' | 'event_draft' | 'event_archived' | null;
const hiddenReason = () => sql`
  case when t.status <> 'approved' then 'not_approved'
       when e.status = 'draft' then 'event_draft'
       when e.status = 'archived' then 'event_archived'
  end`;

/** For the status page: how many current templates leaders can see, and why the others are hidden (counts only). */
export async function leaderTemplateCounts(): Promise<Record<string, number>> {
  const rows = await sql<{ reason: string | null; n: number }[]>`
    select ${hiddenReason()} as reason, count(*)::int as n
    from templates t join events e on e.id = t.event_id
    where t.status <> 'superseded' group by 1`;
  return Object.fromEntries(rows.map((r) => [r.reason ?? 'visible', r.n]));
}

/** Every approved leader sees every approved template of an active event, whatever its dates. */
export async function templatesVisibleToLeaders(): Promise<TemplateWithEvent[]> {
  return sql<TemplateWithEvent[]>`
    ${withEvent()}
    where ${hiddenReason()} is null
    order by e.starts_at asc`;
}

/** The currently approved version descending from a template (itself if still approved), or null. */
export async function currentVersionOf(templateId: string): Promise<string | null> {
  const [row] = await sql<{ id: string }[]>`
    with recursive line as (
      select id, status, version from templates where id = ${templateId}
      union all
      select t.id, t.status, t.version from templates t join line l on t.supersedes_id = l.id
    )
    select id from line where status = 'approved' order by version desc limit 1`;
  return row?.id ?? null;
}

/** Approved templates; `upcoming` keeps events that have not ended (with a day of grace). */
export async function listGalleryTemplates(filter: { track?: Track; stamp?: string; upcoming?: boolean }): Promise<TemplateWithEvent[]> {
  return sql<TemplateWithEvent[]>`
    ${withEvent()}
    where t.status = 'approved'
      ${filter.track ? sql`and t.track = ${filter.track}` : sql``}
      ${filter.stamp ? sql`and ${filter.stamp} = any(t.stamp_types)` : sql``}
      ${filter.upcoming ? sql`and coalesce(e.ends_at, e.starts_at) > now() - interval '1 day'` : sql``}
    order by t.approved_at desc`;
}

/**
 * Deletes a template with all its versions, but only if nothing was made from it (an invitation or a leader request
 * would lose its design). Otherwise the owner archives the event instead.
 */
export async function deleteTemplate(id: string): Promise<void> {
  await sql.begin(async (tx) => {
    const line = await tx<{ id: string; version: number }[]>`
      with recursive up as (
        select id, supersedes_id from templates where id = ${id}
        union select t.id, t.supersedes_id from templates t join up on t.id = up.supersedes_id
      ), down as (
        select id from templates where id = ${id}
        union select t.id from templates t join down on t.supersedes_id = down.id
      )
      select t.id, t.version from templates t where t.id in (select id from up union select id from down) order by t.version desc`;
    if (!line.length) throw new AppError('not_found', 404, 'القالب غير موجود');
    const ids = line.map((r) => r.id);
    const [{ used }] = await tx<{ used: boolean }[]>`
      select exists (select 1 from invitations where template_id = any(${ids})) or exists (select 1 from leader_requests where template_id = any(${ids})) as used`;
    if (used) throw new AppError('template_in_use', 409, 'هذا القالب استُخدم في دعوات أو طلبات فلا يمكن حذفه. لإخفائه عن القادة اجعلي الفعالية «مؤرشفة»');
    for (const r of line) await tx`delete from templates where id = ${r.id}`; // newest first: versions point at older ones
  });
  await audit('owner', 'template.delete', id);
}
