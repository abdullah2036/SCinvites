'use client';

import { useState } from 'react';
import TemplatesView from '@/components/boards/TemplatesView';
import { PALETTE, TRACK_INFO, paletteVars } from '@/components/invitation/palette';
import { STAMPS, TRACKS, type Color, type Track } from '@/lib/shared/types';

export type GalleryCard = {
  id: string;
  track: Track;
  eventTitle: string;
  eventSubtitle: string | null;
  stampTypes: string[];
  allowedColors: Color[];
  artworkUrl: string | null;
  status: 'draft' | 'approved' | 'superseded';
  version: number;
  /** Why leaders can't see it now (null: they can), plus the date it opens for 'not_yet'. */
  hidden: { reason: 'not_approved' | 'event_draft' | 'event_archived' | 'not_yet' | 'ended' | null; from: string | null };
};

const dayAr = (iso: string) => new Intl.DateTimeFormat('ar-SA-u-ca-gregory-nu-arab', { timeZone: 'Asia/Riyadh', day: 'numeric', month: 'long' }).format(new Date(iso));
const LEADERS: Record<NonNullable<GalleryCard['hidden']['reason']>, string> = {
  not_approved: 'مسودة: لا يراها القادة حتى تعتمديها',
  event_draft: 'لا يراه القادة: الفعالية مسودة',
  event_archived: 'لا يراه القادة: الفعالية مؤرشفة',
  not_yet: 'يظهر للقادة لاحقًا',
  ended: 'لا يراه القادة: انتهت مدة ظهوره',
};
const leadersLine = (h: GalleryCard['hidden']) =>
  !h.reason ? 'يراه القادة ✓' : h.reason === 'not_yet' && h.from ? `يظهر للقادة من ${dayAr(h.from)}` : LEADERS[h.reason];

const DOT: Record<Track, string> = { club: '#13707B', space: '#0B3B41', chem: '#2F8C8A', phys: '#6FB7B8', bio: '#4F8F7E', math: '#C99A2E', sport: '#E0B95A' };

export default function TemplatesClient({ cards, base }: { cards: GalleryCard[]; base: string }) {
  const [ty, setTy] = useState(0);
  const [tr, setTr] = useState(0);
  const types = ['الكل', ...STAMPS];
  const chip = (names: string[], cur: number, set: (i: number) => void, dots?: string[]) =>
    names.map((name, i) => ({
      name,
      on: i === cur ? 'true' : 'false',
      border: i === cur ? '#0B3B41' : 'rgba(255,255,255,.9)',
      bg: i === cur ? '#0B3B41' : 'rgba(255,255,255,.55)',
      text: i === cur ? '#FFFFFF' : '#2C4245',
      dot: dots ? dots[i] : 'transparent',
      pick: () => set(i),
    }));
  const shown = cards.filter((c) => (ty === 0 || c.stampTypes.includes(types[ty]) || (types[ty] === 'عضو')) && (tr === 0 || c.track === TRACKS[tr - 1]));

  const v = {
    base,
    types: chip(types, ty, setTy),
    tracks: chip(['كل المسارات', ...TRACKS.map((t) => TRACK_INFO[t].name)], tr, setTr, ['#8FA3A5', ...TRACKS.map((t) => DOT[t])]),
    cards: shown.map((c) => ({
      id: c.id,
      href: `${base}/templates/${c.id}`,
      track: c.track,
      artworkUrl: c.artworkUrl,
      vars: paletteVars(c.allowedColors[0] ?? 'night'),
      subtitle: c.eventSubtitle ?? TRACK_INFO[c.track].name,
      title: c.eventTitle,
      line: `${TRACK_INFO[c.track].name} · ${c.stampTypes.join(' · ')} · ${leadersLine(c.hidden)}`,
      colors: c.allowedColors.map((x) => PALETTE[x].label).join('، '),
    })),
    empty: shown.length ? null : (
      <div className="glass" style={{ gridColumn: '1 / -1', borderRadius: 26, padding: 32, textAlign: 'center', color: '#4F6567' }}>
        {cards.length ? 'لا توجد قوالب بهذه التصفية' : 'لا توجد قوالب بعد، جهّزي أول قالب'}
      </div>
    ),
  };
  return <TemplatesView v={v} />;
}
