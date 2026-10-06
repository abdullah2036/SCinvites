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
  allowed_committees: string[];
  available_from: Date | null;
  available_to: Date | null;
  request_deadline_days: number;
  status: TemplateStatus;
  approved_at: Date | null;
  created_at: Date;
};

export type TemplateWithEvent = TemplateRow & {
  event_title: string;
  event_subtitle: string | null;
  event_latin_title: string | null;
  event_starts_at: Date;
  event_ends_at: Date | null;
  event_place_type: string;
  event_place_name: string | null;
  event_place_url: string | null;
};

const withEvent = () => sql`
  select t.*, e.title as event_title, e.subtitle as event_subtitle, e.latin_title as event_latin_title,
         e.starts_at as event_starts_at, e.ends_at as event_ends_at, e.place_type as event_place_type,
         e.place_name as event_place_name, e.place_url as event_place_url
  from templates t join events e on e.id = t.event_id`;

export async function createTemplate(input: z.infer<typeof TemplateInput>): Promise<TemplateRow> {
  const [row] = await sql<TemplateRow[]>`
    insert into templates (event_id, track, allowed_colors, artwork_path, stamp_types, allowed_committees,
                           available_from, available_to, request_deadline_days)
    values (${input.eventId}, ${input.track}, ${input.allowedColors}, ${input.artworkPath ?? null}, ${input.stampTypes},
            ${input.allowedCommittees ?? []}, ${input.availableFrom ?? null}, ${input.availableTo ?? null}, ${input.requestDeadlineDays ?? 3})
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
    allowed_committees: p.allowedCommittees ?? t.allowed_committees,
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
export async function listTemplates(): Promise<TemplateWithEvent[]> {
  return sql<TemplateWithEvent[]>`${withEvent()} where t.status <> 'superseded' order by t.created_at desc`;
}

export async function templatesVisibleToLeader(leader: { committee: string }, now = new Date()): Promise<TemplateWithEvent[]> {
  return sql<TemplateWithEvent[]>`
    ${withEvent()}
    where t.status = 'approved'
      and (t.available_from is null or t.available_from <= ${now})
      and (t.available_to is null or t.available_to >= ${now})
      and (cardinality(t.allowed_committees) = 0 or ${leader.committee} = any(t.allowed_committees))
      and e.status = 'active'
    order by e.starts_at asc`;
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
