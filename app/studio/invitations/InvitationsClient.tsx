'use client';

import { useEffect, useMemo, useState } from 'react';
import InvitationsView from '@/components/boards/InvitationsView';
import Invitation from '@/components/invitation/Invitation';
import { TRACK_INFO } from '@/components/invitation/palette';
import { taggedUrl } from '@/lib/shared/source';
import type { GuestView, InvitationListItem, InvitationStatus } from '@/lib/shared/types';

const TILE: Record<string, string> = { club: '#13707B', space: '#0B3B41', chem: '#2F8C8A', phys: '#6FB7B8', bio: '#4F8F7E', math: '#C99A2E', sport: '#E0B95A' };
const FILTERS: [string, InvitationStatus | null, string][] = [
  ['الكل', null, '#8FA3A5'],
  ['أُنشئت', 'created', '#C99A2E'],
  ['فُتحت', 'opened', '#6FB7B8'],
  ['مؤكَّد الحضور', 'confirmed', '#13707B'],
  ['اعتذر', 'declined', '#B9B2A3'],
  ['ملغاة', 'revoked', '#8E3B2E'],
];
const LABEL: Record<InvitationStatus, [string, string, string]> = {
  created: ['أُنشئت', '#8E6C1F', 'rgba(201,154,46,.15)'],
  opened: ['فُتحت', '#2F8C8A', 'rgba(111,183,184,.16)'],
  confirmed: ['مؤكَّد الحضور', '#13707B', 'rgba(19,112,123,.12)'],
  declined: ['اعتذر', '#5E594F', 'rgba(125,119,105,.14)'],
  revoked: ['ملغاة', '#8E3B2E', 'rgba(142,59,46,.1)'],
};
const day = (iso: string) => new Intl.DateTimeFormat('ar-SA-u-ca-gregory-nu-arab', { timeZone: 'Asia/Riyadh', day: 'numeric', month: 'long' }).format(new Date(iso));

export default function InvitationsClient({ items: initial }: { items: InvitationListItem[] }) {
  const [items, setItems] = useState(initial);
  // New invitations and opens arrive via auto-refresh: take the server's list whenever it changes.
  const [seen, setSeen] = useState(initial);
  if (seen !== initial) {
    setSeen(initial);
    setItems(initial);
  }
  const [q, setQ] = useState('');
  const [f, setF] = useState(0);
  const [toast, setToast] = useState<{ text: string; error?: boolean } | null>(null);
  const [preview, setPreview] = useState<GuestView | null>(null);
  const [scale, setScale] = useState(0.81);

  useEffect(() => {
    if (!preview) return;
    // Fit the 390×844 invitation and the close button inside the viewport.
    setScale(Math.min(0.81, (window.innerHeight - 130) / 844, (window.innerWidth - 32) / 390)); // eslint-disable-line react-hooks/set-state-in-effect
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPreview(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  const say = (text: string, error = false) => {
    setToast({ text, error });
    setTimeout(() => setToast(null), 2200);
  };

  const rows = useMemo(() => {
    const term = q.trim();
    const st = FILTERS[f][1];
    return items.filter((i) => (!st || i.status === st) && (!term || `${i.inviteeName ?? ''} ${i.inviteeOrg ?? ''} ${i.eventTitle} ${i.slug}`.includes(term)));
  }, [items, q, f]);

  async function revoke(i: InvitationListItem) {
    if (!confirm(`إلغاء دعوة ${i.inviteeName ?? 'الأعضاء'}؟ سيعرض الرابط «هذه الدعوة لم تعد متاحة»`)) return;
    const res = await fetch(`/api/invitations/${i.id}`, { method: 'DELETE' }).catch(() => null);
    if (!res?.ok) return say('تعذر الإلغاء، حاولي مرة أخرى', true);
    setItems((all) => all.map((x) => (x.id === i.id ? { ...x, status: 'revoked' } : x)));
    say('أُلغيت الدعوة');
  }

  async function openPreview(i: InvitationListItem) {
    const res = await fetch(`/api/i/${i.slug}`).catch(() => null);
    if (!res?.ok) return say('تعذر فتح المعاينة', true);
    setPreview(await res.json());
  }

  const v = {
    q,
    onQ: (e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value),
    statuses: FILTERS.map(([name, , dot], i) => ({
      name,
      on: i === f ? 'true' : 'false',
      border: i === f ? '#0B3B41' : 'rgba(255,255,255,.9)',
      bg: i === f ? '#0B3B41' : 'rgba(255,255,255,.55)',
      text: i === f ? '#FFFFFF' : '#2C4245',
      dot,
      pick: () => setF(i),
    })),
    rows: rows.map((i) => {
      const st = LABEL[i.status];
      return {
        name: i.kind === 'general' ? `دعوة عامة · ${i.slug}` : i.inviteeName,
        org: i.kind === 'general' ? `${i.registrations.toLocaleString('ar-SA')} مسجّلًا` : (i.inviteeOrg ?? ''),
        title: `${i.eventTitle}`,
        dot: TILE[i.track],
        stamp: i.stamp,
        status: st[0],
        sc: st[1],
        sb: st[2],
        date: day(i.createdAt),
        revoked: i.status === 'revoked',
        preview: () => openPreview(i),
        copy: async () => {
          await navigator.clipboard?.writeText(taggedUrl(i.url, 'link')).catch(() => {});
          say('نُسخ الرابط');
        },
        revoke: () => revoke(i),
      };
    }),
    empty: rows.length ? null : (
      <div style={{ padding: '28px 10px', textAlign: 'center', color: '#4F6567', fontSize: 14 }}>{items.length ? 'لا توجد دعوات بهذه التصفية' : 'لم تُنشأ أي دعوة بعد'}</div>
    ),
    overlay: (
      <>
        {toast && (
          <div role={toast.error ? 'alert' : 'status'} className="glass" style={{ position: 'fixed', insetInline: 16, bottom: 90, zIndex: 30, maxWidth: 360, margin: '0 auto', borderRadius: 18, padding: '12px 16px', textAlign: 'center', color: toast.error ? '#9B3B2E' : '#0B3B41' }}>
            {toast.text}
          </div>
        )}
        {preview && (
          <div role="dialog" aria-modal="true" aria-label="معاينة الدعوة" onClick={() => setPreview(null)} style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(7,37,41,.45)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', display: 'grid', placeItems: 'center', padding: 16 }}>
            <div onClick={(e) => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 390 * scale, height: 844 * scale, borderRadius: 30, overflow: 'hidden', boxShadow: '0 40px 80px rgba(12,22,48,.35)' }}>
                <div style={{ width: 390, height: 844, transform: `scale(${scale})`, transformOrigin: 'top right' }}>
                  {preview.status === 'revoked' ? (
                    <div style={{ height: '100%', display: 'grid', placeItems: 'center', background: '#0B2533', color: '#fff', fontSize: 22 }}>هذه الدعوة لم تعد متاحة</div>
                  ) : (
                    <Invitation view={preview} mode="static" frame="device" registered={preview.kind === 'general'} registeredName={preview.kind === 'general' ? 'اسم العضو' : undefined} />
                  )}
                </div>
              </div>
              <span style={{ color: '#fff', fontSize: 13 }}>{TRACK_INFO[preview.track].name}</span>
              <button type="button" onClick={() => setPreview(null)} style={{ height: 40, padding: '0 22px', borderRadius: 999, border: '1px solid rgba(255,255,255,.5)', background: 'transparent', color: '#fff', cursor: 'pointer' }}>
                إغلاق
              </button>
            </div>
          </div>
        )}
      </>
    ),
  };
  return <InvitationsView v={v} />;
}
