import { z } from 'zod';
import { sql } from './db';
import { qrSvg } from './qr';
import { artworkUrl } from './storage';
import { detectSource, deviceClass } from '@/lib/shared/source';
import { AppError, type GuestView, type InvitationKind, type InvitationStatus, type PlaceType, type Track, type Color } from '@/lib/shared/types';

type Row = {
  id: string;
  slug: string;
  kind: InvitationKind;
  status: InvitationStatus;
  color: Color;
  stamp: string;
  invitee_name: string | null;
  invitee_org: string | null;
  invitee_title: string | null;
  place_type: PlaceType;
  place_name: string | null;
  place_url: string | null;
  show_qr: boolean;
  track: Track;
  artwork_path: string | null;
  title: string;
  subtitle: string | null;
  latin_title: string | null;
  starts_at: Date;
  ends_at: Date | null;
};

async function load(slug: string): Promise<Row | null> {
  if (!/^[a-z0-9-]{3,32}$/.test(slug)) return null;
  const [row] = await sql<Row[]>`
    select i.id, i.slug, i.kind, i.status, i.color, i.stamp, i.invitee_name, i.invitee_org, i.invitee_title,
           i.place_type, i.place_name, i.place_url, i.show_qr, t.track, t.artwork_path,
           e.title, e.subtitle, e.latin_title, e.starts_at, e.ends_at
    from invitations i join templates t on t.id = i.template_id join events e on e.id = t.event_id
    where i.slug = ${slug}`;
  return row ?? null;
}

export async function getGuestView(slug: string): Promise<GuestView | null> {
  const r = await load(slug);
  if (!r) return null;
  const revoked = r.status === 'revoked';
  const event = {
    title: r.title,
    subtitle: r.subtitle,
    latinTitle: r.latin_title,
    startsAt: r.starts_at.toISOString(),
    endsAt: r.ends_at?.toISOString() ?? null,
  };
  if (revoked) {
    return { slug: r.slug, kind: r.kind, status: r.status, track: r.track, color: r.color, stamp: r.stamp, artworkUrl: null, invitee: null, event, place: { type: 'none', name: null, url: null }, qrSvg: null };
  }
  return {
    slug: r.slug,
    kind: r.kind,
    status: r.status,
    track: r.track,
    color: r.color,
    stamp: r.stamp,
    artworkUrl: artworkUrl(r.artwork_path),
    invitee: r.kind === 'personal' && r.invitee_name ? { name: r.invitee_name, org: r.invitee_org, title: r.invitee_title } : null,
    event,
    place: { type: r.place_type, name: r.place_name, url: r.place_url },
    qrSvg: r.show_qr && r.place_type !== 'none' && r.place_url ? await qrSvg(r.place_url) : null,
  };
}

const Registration = z.object({ name: z.string().trim().min(1).max(80), email: z.email().max(160) });

type Meta = { src: string | null; userAgent: string | null; referer: string | null };

function active(r: Row | null): Row {
  if (!r) throw new AppError('not_found', 404, 'الدعوة غير موجودة');
  if (r.status === 'revoked') throw new AppError('revoked', 410, 'هذه الدعوة لم تعد متاحة');
  return r;
}

export async function openInvitation(
  slug: string,
  input: { name?: string; email?: string },
  existingRegistrationId: string | null,
  meta: Meta,
): Promise<{ registrationId: string | null }> {
  const inv = active(await load(slug));
  const source = detectSource({ src: meta.src, userAgent: meta.userAgent, referer: meta.referer });
  const device = deviceClass(meta.userAgent);

  if (inv.kind === 'personal') {
    await sql`
      update invitations set
        status = case when status = 'created' then 'opened' else status end,
        opened_at = coalesce(opened_at, now()),
        open_source = coalesce(open_source, ${source}),
        open_device = coalesce(open_device, ${device})
      where id = ${inv.id}`;
    return { registrationId: null };
  }

  if (existingRegistrationId && /^[0-9a-f-]{36}$/.test(existingRegistrationId)) {
    const [mine] = await sql`select id from registrations where id = ${existingRegistrationId} and invitation_id = ${inv.id}`;
    if (mine) return { registrationId: mine.id };
  }
  const parsed = Registration.safeParse({ name: input.name ?? '', email: (input.email ?? '').trim() });
  if (!parsed.success) throw new AppError('invalid_input', 400, 'اكتب اسمك وبريدًا صحيحًا');
  const [row] = await sql<{ id: string }[]>`
    insert into registrations (invitation_id, name, email, source, device)
    values (${inv.id}, ${parsed.data.name}, ${parsed.data.email.toLowerCase()}, ${source}, ${device})
    on conflict (invitation_id, lower(email)) do update set name = excluded.name
    returning id`;
  return { registrationId: row.id };
}

export async function answerRsvp(slug: string, answer: 'yes' | 'no', registrationId: string | null): Promise<void> {
  const inv = active(await load(slug));
  if (inv.kind === 'personal') {
    await sql.begin(async (tx) => {
      await tx`
        insert into rsvps (invitation_id, answer) values (${inv.id}, ${answer})
        on conflict (invitation_id) where registration_id is null do update set answer = excluded.answer, answered_at = now()`;
      await tx`update invitations set status = ${answer === 'yes' ? 'confirmed' : 'declined'}, opened_at = coalesce(opened_at, now()) where id = ${inv.id}`;
    });
    return;
  }
  const valid = registrationId && /^[0-9a-f-]{36}$/.test(registrationId)
    ? (await sql`select id from registrations where id = ${registrationId} and invitation_id = ${inv.id}`)[0]
    : undefined;
  if (!valid) throw new AppError('registration_required', 400, 'سجّل اسمك وبريدك أولًا');
  await sql`
    insert into rsvps (invitation_id, registration_id, answer) values (${inv.id}, ${registrationId}, ${answer})
    on conflict (invitation_id, registration_id) where registration_id is not null do update set answer = excluded.answer, answered_at = now()`;
}

export async function getIcsData(slug: string) {
  const inv = active(await load(slug));
  return {
    uid: `${inv.slug}@scinvites`,
    title: inv.title,
    startsAt: inv.starts_at,
    endsAt: inv.ends_at,
    location: inv.place_type === 'none' ? null : inv.place_name,
    url: `${process.env.APP_URL}/i/${inv.slug}`,
  };
}

/** A returning general guest (sc_reg_<slug> cookie): their name and earlier answer, or null. */
export async function getRegistration(slug: string, registrationId: string | null | undefined): Promise<{ name: string; answer: 'yes' | 'no' | null } | null> {
  if (!registrationId || !/^[0-9a-f-]{36}$/.test(registrationId)) return null;
  const [row] = await sql<{ name: string; answer: 'yes' | 'no' | null }[]>`
    select r.name, v.answer from registrations r join invitations i on i.id = r.invitation_id
    left join rsvps v on v.registration_id = r.id
    where r.id = ${registrationId} and i.slug = ${slug} and r.anonymized_at is null`;
  return row ?? null;
}

export async function getRegistrationName(slug: string, registrationId: string | null | undefined): Promise<string | null> {
  return (await getRegistration(slug, registrationId))?.name ?? null;
}
