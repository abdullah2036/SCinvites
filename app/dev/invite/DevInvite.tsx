'use client';

import Invitation from '@/components/invitation/Invitation';
import { TRACKS, COLORS, type Track, type Color, type GuestView } from '@/lib/shared/types';

const QR = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="70" height="70"><path fill="currentColor" d="M0 0h3v3H0zM4 0h3v3H4zM0 4h3v3H0zM4 4h1v1H4zM6 6h1v1H6z"/></svg>';

export default function DevInvite({ params }: { params: Record<string, string | undefined> }) {
  const track = (TRACKS.includes(params.track as Track) ? params.track : 'space') as Track;
  const color = (COLORS.includes(params.color as Color) ? params.color : 'night') as Color;
  const general = params.kind === 'general';
  const place = params.place === 'online' ? 'online' : params.place === 'none' ? 'none' : 'in_person';
  const view: GuestView = {
    slug: 'dev',
    kind: general ? 'general' : 'personal',
    status: 'created',
    track,
    color,
    stamp: general ? 'عضو' : 'VIP',
    artworkUrl: null,
    invitee: general ? null : { name: 'د. محمد أحمد', org: 'وكالة الفضاء السعودية', title: null },
    event: { title: 'ثورة الصواريخ', subtitle: 'أسبوع الفلك والفضاء 2026', latinTitle: 'ROCKET REVOLUTION', startsAt: '2026-10-12T16:00:00Z', endsAt: null },
    place: place === 'none' ? { type: 'none', name: null, url: null } : place === 'online' ? { type: 'online', name: 'بث مباشر عبر Zoom', url: 'https://zoom.us' } : { type: 'in_person', name: 'قاعة الفعاليات الرئيسية', url: 'https://maps.google.com' },
    qrSvg: place === 'none' ? null : QR,
  };
  const mode = params.mode === 'static' ? 'static' : 'live';
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100dvh', background: '#EAF3F0' }}>
      <Invitation key={JSON.stringify(params)} view={view} mode={mode} frame="device" onOpen={async () => {}} onRsvp={async () => {}} />
    </div>
  );
}
