'use client';

import { useState } from 'react';
import { eventPhase } from '@/lib/shared/event-phase';
import { useRouter } from 'next/navigation';
import EventsView from '@/components/boards/EventsView';
import { TRACK_INFO, paletteVars } from '@/components/invitation/palette';
import { TRACKS, type PlaceType, type Track } from '@/lib/shared/types';
import { timeoutSignal } from '@/lib/shared/timeout';

export type EventCard = {
  id: string;
  title: string;
  subtitle: string | null;
  latinTitle: string | null;
  track: Track;
  startsAt: string;
  endsAt: string | null;
  status: 'draft' | 'active' | 'archived';
  place: { type: PlaceType; name: string | null; url: string | null };
  invitations: number;
  confirmed: number;
  templateId: string | null;
};

const DOT: Record<Track, string> = { club: '#13707B', space: '#0B3B41', chem: '#2F8C8A', phys: '#6FB7B8', bio: '#4F8F7E', math: '#C99A2E', sport: '#E0B95A' };
const COLOR_FOR: Record<Track, 'petrol' | 'night'> = { club: 'petrol', space: 'night', chem: 'petrol', phys: 'night', bio: 'petrol', math: 'night', sport: 'petrol' };
const fmt = new Intl.DateTimeFormat('ar-SA-u-ca-gregory-nu-arab', { timeZone: 'Asia/Riyadh', day: 'numeric', month: 'long' });
const ar = (n: number) => n.toLocaleString('ar-SA');

/** "2026-10-12T19:00" in Riyadh time ↔ ISO */
const toLocal = (iso: string | null) => {
  if (!iso) return '';
  const d = new Date(new Date(iso).getTime() + 3 * 3600_000);
  return d.toISOString().slice(0, 16);
};
const fromLocal = (v: string) => (v ? new Date(`${v}:00+03:00`).toISOString() : null);

type Form = { id?: string; title: string; subtitle: string; latinTitle: string; track: Track; startsAt: string; endsAt: string; placeType: PlaceType; placeName: string; placeUrl: string; status: 'draft' | 'active' | 'archived' };
const blank: Form = { title: '', subtitle: '', latinTitle: '', track: 'space', startsAt: '', endsAt: '', placeType: 'in_person', placeName: '', placeUrl: '', status: 'active' };
const field: React.CSSProperties = { height: 44, borderRadius: 999, padding: '0 14px', border: '1px solid rgba(255,255,255,.95)', background: 'rgba(255,255,255,.85)', color: '#18292C', fontSize: 14, width: '100%', boxSizing: 'border-box' };
const lab: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#3E5456' };

export default function EventsClient({ events, base }: { events: EventCard[]; base: string }) {
  const router = useRouter();
  const [f, setF] = useState(0);
  const [form, setForm] = useState<Form | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const shown = events.filter((e) => f === 0 || e.track === TRACKS[f - 1]);

  async function save() {
    if (!form) return;
    if (form.title.trim().length < 2 || !form.startsAt) {
      setError('اكتبي اسم الفعالية وموعدها');
      return;
    }
    setBusy(true);
    setError('');
    const body = {
      title: form.title,
      subtitle: form.subtitle || null,
      latinTitle: form.latinTitle || null,
      track: form.track,
      startsAt: fromLocal(form.startsAt),
      endsAt: fromLocal(form.endsAt),
      place: { type: form.placeType, name: form.placeType === 'none' ? null : form.placeName || null, url: form.placeType === 'none' ? '' : form.placeUrl.trim() ? (/^https?:\/\//.test(form.placeUrl.trim()) ? form.placeUrl.trim() : `https://${form.placeUrl.trim()}`) : '' },
      status: form.status,
    };
    const res = await fetch(form.id ? `/api/events/${form.id}` : '/api/events', { signal: timeoutSignal(), method: form.id ? 'PATCH' : 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).catch(() => null);
    setBusy(false);
    if (!res?.ok) {
      const e = await res?.json().catch(() => null);
      setError(e?.error?.message ?? 'تعذر الحفظ');
      return;
    }
    setForm(null);
    router.refresh();
  }

  async function remove() {
    if (!form?.id || !confirm(`حذف الفعالية «${form.title}» نهائيًا؟`)) return;
    setBusy(true);
    setError('');
    const res = await fetch(`/api/events/${form.id}`, { signal: timeoutSignal(), method: 'DELETE' }).catch(() => null);
    setBusy(false);
    if (!res?.ok) {
      const e = await res?.json().catch(() => null);
      setError(e?.error?.message ?? 'تعذر الحذف');
      return;
    }
    setForm(null);
    router.refresh();
  }

  const statusOf = (e: EventCard) => eventPhase(e);

  const v = {
    filters: ['الكل', ...TRACKS.map((t) => TRACK_INFO[t].name)].map((name, i) => ({
      name,
      on: i === f ? 'true' : 'false',
      border: i === f ? '#0B3B41' : 'rgba(255,255,255,.9)',
      bg: i === f ? '#0B3B41' : 'rgba(255,255,255,.55)',
      text: i === f ? '#FFFFFF' : '#2C4245',
      dot: i === 0 ? '#8FA3A5' : DOT[TRACKS[i - 1]],
      pick: () => setF(i),
    })),
    events: shown.map((e) => ({
      id: e.id,
      track: e.track,
      vars: paletteVars(COLOR_FOR[e.track]),
      status: statusOf(e),
      subtitle: e.subtitle ?? TRACK_INFO[e.track].name,
      title: e.title,
      trackName: TRACK_INFO[e.track].name,
      meta: `${fmt.format(new Date(e.startsAt))} · ${ar(e.invitations)} دعوة · ${ar(e.confirmed)} مؤكَّد`,
      cta: e.templateId ? 'دعوة' : 'قالب',
      href: e.templateId ? `${base}/create?template=${e.templateId}` : `${base}/templates/new?event=${e.id}`,
      editButton: (
        <button
          type="button"
          onClick={() =>
            setForm({ id: e.id, title: e.title, subtitle: e.subtitle ?? '', latinTitle: e.latinTitle ?? '', track: e.track, startsAt: toLocal(e.startsAt), endsAt: toLocal(e.endsAt), placeType: e.place.type, placeName: e.place.name ?? '', placeUrl: e.place.url ?? '', status: e.status })
          }
          style={{ border: 0, background: 'transparent', color: '#13707B', fontSize: 13, cursor: 'pointer' }}
        >
          تعديل
        </button>
      ),
    })),
    empty: shown.length ? null : (
      <div className="glass" style={{ gridColumn: '1 / -1', borderRadius: 28, padding: 32, textAlign: 'center', color: '#4F6567' }}>
        {events.length ? 'لا توجد فعاليات في هذا المسار' : 'لا توجد فعاليات بعد، ابدئي بفعالية جديدة'}
      </div>
    ),
    newEvent: (ev: React.MouseEvent) => {
      ev.preventDefault();
      setError('');
      setForm({ ...blank });
    },
    overlay: form && (
      <div role="dialog" aria-modal="true" aria-label={form.id ? 'تعديل الفعالية' : 'فعالية جديدة'} style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(7,37,41,.35)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', display: 'grid', placeItems: 'center', padding: 16, overflowY: 'auto' }}>
        <div className="glass inA" style={{ width: 'min(560px, 100%)', borderRadius: 28, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <b style={{ fontSize: 20, color: '#0B3B41' }}>{form.id ? 'تعديل الفعالية' : 'فعالية جديدة'}</b>
          <label style={lab}>
            اسم الفعالية
            <input className="field" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="ثورة الصواريخ" style={field} />
          </label>
          <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <label style={lab}>
              السطر الأعلى
              <input className="field" value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} placeholder="أسبوع الفلك والفضاء 2026" style={field} />
            </label>
            <label style={lab}>
              العنوان الإنجليزي
              <input className="field" dir="ltr" value={form.latinTitle} onChange={(e) => setForm({ ...form, latinTitle: e.target.value.toUpperCase() })} placeholder="ROCKET REVOLUTION" style={field} />
            </label>
          </div>
          <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <label style={lab}>
              المسار
              <select className="field" value={form.track} onChange={(e) => setForm({ ...form, track: e.target.value as Track })} style={field}>
                {TRACKS.map((t) => (
                  <option key={t} value={t}>
                    {TRACK_INFO[t].name}
                  </option>
                ))}
              </select>
            </label>
            <label style={lab}>
              الحالة
              <select className="field" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Form['status'] })} style={field}>
                <option value="active">فعّالة</option>
                <option value="draft">مسودة</option>
                <option value="archived">مؤرشفة</option>
              </select>
            </label>
          </div>
          <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <label style={lab}>
              يبدأ (بتوقيت مكة)
              <input className="field" type="datetime-local" value={form.startsAt} onChange={(e) => setForm({ ...form, startsAt: e.target.value })} style={field} />
            </label>
            <label style={lab}>
              ينتهي (اختياري)
              <input className="field" type="datetime-local" value={form.endsAt} onChange={(e) => setForm({ ...form, endsAt: e.target.value })} style={field} />
            </label>
          </div>
          <label style={lab}>
            المكان
            <select className="field" value={form.placeType} onChange={(e) => setForm({ ...form, placeType: e.target.value as PlaceType })} style={field}>
              <option value="in_person">حضوري</option>
              <option value="online">عن بعد</option>
              <option value="none">بدون</option>
            </select>
          </label>
          {form.placeType !== 'none' && (
            <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <label style={lab}>
                {form.placeType === 'online' ? 'المنصة' : 'اسم المكان'}
                <input className="field" value={form.placeName} onChange={(e) => setForm({ ...form, placeName: e.target.value })} style={field} />
              </label>
              <label style={lab}>
                {form.placeType === 'online' ? 'رابط الاجتماع' : 'رابط الموقع'}
                <input className="field" dir="ltr" type="url" value={form.placeUrl} onChange={(e) => setForm({ ...form, placeUrl: e.target.value })} style={field} />
              </label>
            </div>
          )}
          {error && (
            <p role="alert" style={{ margin: 0, color: '#9B3B2E', fontSize: 13 }}>
              {error}
            </p>
          )}
          <div style={{ display: 'flex', gap: 10 }}>
            <button type="button" onClick={save} disabled={busy} style={{ flex: 1, height: 48, border: 0, borderRadius: 999, background: '#C99A2E', color: '#0B2B30', fontWeight: 700, cursor: 'pointer' }}>
              حفظ
            </button>
            <button type="button" onClick={() => setForm(null)} style={{ height: 48, padding: '0 20px', borderRadius: 999, border: '1px solid #0B3B41', background: 'transparent', color: '#0B3B41', cursor: 'pointer' }}>
              إلغاء
            </button>
          </div>
          {form.id && (
            <button type="button" onClick={() => void remove()} disabled={busy} style={{ height: 40, borderRadius: 999, border: '1px solid rgba(155,59,46,.35)', background: 'transparent', color: '#9B3B2E', cursor: 'pointer' }}>
              حذف الفعالية
            </button>
          )}
        </div>
      </div>
    ),
  };
  return <EventsView v={v} />;
}
