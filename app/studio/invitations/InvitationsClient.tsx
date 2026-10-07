'use client';

import { useEffect, useMemo, useState } from 'react';
import InvitationsView from '@/components/boards/InvitationsView';
import Invitation from '@/components/invitation/Invitation';
import { TRACK_INFO } from '@/components/invitation/palette';
import { taggedUrl } from '@/lib/shared/source';
import type { GuestView, InvitationListItem, InvitationStatus } from '@/lib/shared/types';
import { timeoutSignal } from '@/lib/shared/timeout';

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
const PAGE = 60;
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
  // Thousands of rows freeze a phone: draw the newest ones and add more on request.
  const [shown, setShown] = useState(PAGE);
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

  // «إدارة الدعوة»: correct the name, cancel the link, or delete it for good.
  const [manage, setManage] = useState<{ item: InvitationListItem; name: string; org: string; title: string } | null>(null);
  const [manageBusy, setManageBusy] = useState(false);

  async function act(url: string, init: RequestInit, ok: string, update: (all: InvitationListItem[]) => InvitationListItem[]) {
    setManageBusy(true);
    const res = await fetch(url, { signal: timeoutSignal(), ...init }).catch(() => null);
    const data = await res?.json().catch(() => null);
    setManageBusy(false);
    if (!res?.ok) return say(data?.error?.message ?? 'تعذر الحفظ، حاولي مرة أخرى', true);
    setItems(update);
    setManage(null);
    say(ok);
  }
  const saveEdit = () =>
    manage &&
    act(
      `/api/invitations/${manage.item.id}`,
      { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ inviteeName: manage.name, inviteeOrg: manage.org, inviteeTitle: manage.title }) },
      'حُفظت التعديلات',
      (all) => all.map((x) => (x.id === manage.item.id ? { ...x, inviteeName: manage.name.trim(), inviteeOrg: manage.org.trim() || null, inviteeTitle: manage.title.trim() || null } : x)),
    );
  const revoke = () =>
    manage &&
    confirm(`إلغاء دعوة ${manage.item.inviteeName ?? 'الأعضاء'}؟ سيعرض الرابط «هذه الدعوة لم تعد متاحة»`) &&
    act(`/api/invitations/${manage.item.id}`, { method: 'DELETE' }, 'أُلغيت الدعوة', (all) => all.map((x) => (x.id === manage.item.id ? { ...x, status: 'revoked' } : x)));
  const remove = () =>
    manage &&
    confirm(`حذف دعوة ${manage.item.inviteeName ?? 'الأعضاء'} نهائيًا؟ يُحذف معها التسجيل والردود ولا يمكن التراجع`) &&
    act(`/api/invitations/${manage.item.id}?permanent=1`, { method: 'DELETE' }, 'حُذفت الدعوة', (all) => all.filter((x) => x.id !== manage.item.id));

  async function openPreview(i: InvitationListItem) {
    const res = await fetch(`/api/i/${i.slug}`, { signal: timeoutSignal() }).catch(() => null);
    if (!res?.ok) return say('تعذر فتح المعاينة', true);
    setPreview(await res.json());
  }

  const v = {
    q,
    onQ: (e: React.ChangeEvent<HTMLInputElement>) => {
      setQ(e.target.value);
      setShown(PAGE);
    },
    statuses: FILTERS.map(([name, , dot], i) => ({
      name,
      on: i === f ? 'true' : 'false',
      border: i === f ? '#0B3B41' : 'rgba(255,255,255,.9)',
      bg: i === f ? '#0B3B41' : 'rgba(255,255,255,.55)',
      text: i === f ? '#FFFFFF' : '#2C4245',
      dot,
      pick: () => {
        setF(i);
        setShown(PAGE);
      },
    })),
    rows: rows.slice(0, shown).map((i) => {
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
        preview: () => openPreview(i),
        copy: async () => {
          await navigator.clipboard?.writeText(taggedUrl(i.url, 'link')).catch(() => {});
          say('نُسخ الرابط');
        },
        manage: () => setManage({ item: i, name: i.inviteeName ?? '', org: i.inviteeOrg ?? '', title: i.inviteeTitle ?? '' }),
      };
    }),
    empty: rows.length ? null : (
      <div style={{ padding: '28px 10px', textAlign: 'center', color: '#4F6567', fontSize: 14 }}>{items.length ? 'لا توجد دعوات بهذه التصفية' : 'لم تُنشأ أي دعوة بعد'}</div>
    ),
    overlay: (
      <>
        {rows.length > shown && (
          <button type="button" onClick={() => setShown((n) => n + PAGE)} className="glass" style={{ alignSelf: 'center', height: 44, padding: '0 22px', borderRadius: 999, border: 0, color: '#0B3B41', fontWeight: 700, cursor: 'pointer' }}>
            عرض المزيد ({(rows.length - shown).toLocaleString('ar-SA')} متبقية)
          </button>
        )}
        {toast && (
          <div role={toast.error ? 'alert' : 'status'} className="glass" style={{ position: 'fixed', insetInline: 16, bottom: 90, zIndex: 30, maxWidth: 360, margin: '0 auto', borderRadius: 18, padding: '12px 16px', textAlign: 'center', color: toast.error ? '#9B3B2E' : '#0B3B41' }}>
            {toast.text}
          </div>
        )}
        {manage && (
          <div role="dialog" aria-modal="true" aria-label="إدارة الدعوة" onClick={() => setManage(null)} style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(7,37,41,.35)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', display: 'grid', placeItems: 'center', padding: 16 }}>
            <div onClick={(e) => e.stopPropagation()} className="glass inA" style={{ width: 'min(460px, 100%)', borderRadius: 28, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <b style={{ fontSize: 18, color: '#0B3B41' }}>{manage.item.kind === 'general' ? `دعوة عامة · ${manage.item.slug}` : 'تعديل الدعوة'}</b>
                <button type="button" onClick={() => setManage(null)} aria-label="إغلاق" style={{ border: 0, background: 'transparent', fontSize: 22, cursor: 'pointer', color: '#4F6567' }}>
                  ×
                </button>
              </div>
              <span style={{ fontSize: 13, color: '#4F6567' }}>{manage.item.eventTitle}</span>
              {manage.item.kind === 'personal' && (
                <>
                  {(['name', 'org', 'title'] as const).map((k) => (
                    <label key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, color: '#3E5456' }}>
                      {k === 'name' ? 'اسم المدعو' : k === 'org' ? 'الجهة (اختياري)' : 'المسمى (اختياري)'}
                      <input className="field" value={manage[k]} onChange={(e) => setManage({ ...manage, [k]: e.target.value })} style={{ height: 44, borderRadius: 999, padding: '0 14px', border: '1px solid rgba(255,255,255,.95)', background: 'rgba(255,255,255,.85)', fontSize: 14 }} />
                    </label>
                  ))}
                  <button type="button" disabled={manageBusy || manage.name.trim().length < 1} onClick={() => void saveEdit()} style={{ height: 46, borderRadius: 999, border: 0, background: 'linear-gradient(160deg,#13707B,#0B3B41)', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>
                    حفظ التعديلات
                  </button>
                </>
              )}
              {manage.item.status !== 'revoked' && (
                <button type="button" disabled={manageBusy} onClick={() => void revoke()} style={{ height: 44, borderRadius: 999, border: '1px solid rgba(19,112,123,.3)', background: 'transparent', color: '#0B3B41', cursor: 'pointer' }}>
                  إلغاء الدعوة (يبقى الرابط ويعرض أنها لم تعد متاحة)
                </button>
              )}
              <button type="button" disabled={manageBusy} onClick={() => void remove()} style={{ height: 44, borderRadius: 999, border: '1px solid rgba(155,59,46,.35)', background: 'transparent', color: '#9B3B2E', cursor: 'pointer' }}>
                حذف نهائيًا
              </button>
            </div>
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
