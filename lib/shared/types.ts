export const TRACKS = ['club', 'space', 'chem', 'phys', 'bio', 'math', 'sport'] as const;
export const COLORS = ['petrol', 'night', 'ivory'] as const;
/** Stamp types drawn in the design (Create board); «عضو» is used on public invitations. */
export const STAMPS = ['VIP', 'ضيف', 'متحدث', 'شريك', 'عضو'] as const;
export type Track = (typeof TRACKS)[number];
export type Color = (typeof COLORS)[number];
export type InvitationKind = 'personal' | 'general';
export type PlaceType = 'none' | 'in_person' | 'online';
export type Place = { type: PlaceType; name: string | null; url: string | null };
export type InvitationStatus = 'created' | 'opened' | 'confirmed' | 'declined' | 'revoked';
export type TemplateStatus = 'draft' | 'approved' | 'superseded';
export type LeaderStatus = 'pending' | 'approved' | 'revoked';
export type RequestStatus = 'pending' | 'approved' | 'changes_requested';
export type Session = { id: string; subject: 'owner' | 'leader'; leaderId: string | null };

export type GuestView = {
  slug: string;
  kind: InvitationKind;
  status: InvitationStatus;
  track: Track;
  color: Color;
  stamp: string;
  artworkUrl: string | null;
  invitee: { name: string; org: string | null; title: string | null } | null;
  event: { title: string; subtitle: string | null; latinTitle: string | null; startsAt: string; endsAt: string | null };
  place: Place;
  qrSvg: string | null;
};

export type InvitationListItem = {
  id: string;
  slug: string;
  url: string;
  kind: InvitationKind;
  status: InvitationStatus;
  color: Color;
  track: Track;
  stamp: string;
  inviteeName: string | null;
  inviteeOrg: string | null;
  eventTitle: string;
  createdAt: string;
  registrations: number;
};

export class AppError extends Error {
  constructor(
    public code: string,
    public status: number,
    message: string,
  ) {
    super(message);
  }
}
