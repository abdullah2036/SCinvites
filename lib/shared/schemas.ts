import { z } from 'zod';
import { TRACKS, COLORS, STAMPS } from './types';

const text = (min: number, max: number) => z.string().trim().min(min).max(max);
const optText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((s) => s || null)
    .nullish();

export const LeaderRequestInput = z.object({
  name: text(2, 80),
  email: text(3, 120),
  committee: text(2, 60),
});

export const PlaceInput = z.object({
  type: z.enum(['none', 'in_person', 'online']),
  name: optText(160),
  url: z.union([z.literal(''), z.url({ protocol: /^https?$/ })]).transform((s) => s || null).nullish(),
});

export const EventInput = z.object({
  title: text(2, 80),
  subtitle: optText(120),
  latinTitle: optText(80),
  track: z.enum(TRACKS),
  startsAt: z.iso.datetime({ offset: true }),
  endsAt: z.iso.datetime({ offset: true }).nullish(),
  place: PlaceInput.default({ type: 'none', name: null, url: null }),
  status: z.enum(['draft', 'active', 'archived']).default('active'),
});
export const EventPatch = EventInput.partial();

export const TemplateInput = z.object({
  eventId: z.uuid(),
  track: z.enum(TRACKS),
  allowedColors: z.array(z.enum(COLORS)).min(1),
  artworkPath: optText(200),
  stampTypes: z.array(z.enum(STAMPS)).min(1).max(STAMPS.length),
  allowedCommittees: z.array(text(1, 60)).max(20).default([]),
  availableFrom: z.iso.datetime({ offset: true }).nullish(),
  availableTo: z.iso.datetime({ offset: true }).nullish(),
  requestDeadlineDays: z.number().int().min(0).max(60).default(3),
});
export const TemplatePatch = TemplateInput.omit({ eventId: true }).partial();

export const InvitationInput = z.object({
  templateId: z.uuid(),
  color: z.enum(COLORS),
  stamp: text(1, 24),
  kind: z.enum(['personal', 'general']),
  invitee: z
    .object({ name: text(1, 80), org: optText(120), title: optText(80) })
    .nullish(),
  customSlug: optText(32),
  place: PlaceInput.nullish(),
  showQr: z.boolean().default(true),
});
export type InvitationInputT = z.infer<typeof InvitationInput>;

export const InvitationBatchInput = z.object({
  templateId: z.uuid(),
  color: z.enum(COLORS),
  stamp: text(1, 24),
  people: z.array(z.object({ name: text(1, 80), org: optText(120), title: optText(80) })).min(1).max(200),
  place: PlaceInput.nullish(),
  showQr: z.boolean().default(true),
});
