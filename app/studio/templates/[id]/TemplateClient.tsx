'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import TemplateView from '@/components/boards/TemplateView';
import Invitation from '@/components/invitation/Invitation';
import { PALETTE, TRACK_INFO, paletteVars } from '@/components/invitation/palette';
import { TRACKS, COLORS, type Color, type Track, type GuestView, type PlaceType } from '@/lib/shared/types';
import { timeoutSignal } from '@/lib/shared/timeout';
import { riyadhDay } from '@/lib/shared/dates';

export type TemplateDraft = {
  id: string | null;
  status: 'draft' | 'approved' | 'superseded' | null;
  version: number;
  eventId: string;
  track: Track;
  allowedColors: Color[];
  stampTypes: string[];
  availableFrom: string | null;
  availableTo: string | null;
  requestDeadlineDays: number;
  artworkPath: string | null;
  artworkUrl: string | null;
};

export type EventChoice = { id: string; status: 'draft' | 'active' | 'archived'; title: string; subtitle: string | null; latinTitle: string | null; startsAt: string; place: { type: PlaceType; name: string | null; url: string | null } };

const toDay = (iso: string | null) => riyadhDay(iso);
const fromDay = (d: string, endOfDay = false) => (d ? new Date(`${d}T${endOfDay ? '23:59:59' : '00:00:00'}+03:00`).toISOString() : null);
const field: React.CSSProperties = { height: 44, borderRadius: 999, padding: '0 14px', border: '1px solid rgba(255,255,255,.95)', background: 'rgba(255,255,255,.78)', color: '#18292C', fontSize: 14, width: '100%', boxSizing: 'border-box' };
const label: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#3E5456' };

async function call(url: string, method: string, body?: unknown) {
  const res = await fetch(url, { signal: timeoutSignal(60_000), method, headers: body instanceof FormData ? undefined : { 'content-type': 'application/json' }, body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined }).catch(() => null);
  const data = await res?.json().catch(() => null);
  if (!res?.ok) throw new Error(data?.error?.message ?? 'تعذر الحفظ، حاولي مرة أخرى');
  return data;
}

export default function TemplateClient({ initial, events, base }: { initial: TemplateDraft; events: EventChoice[]; base: string }) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [t, setT] = useState(initial);
  const [previewColor, setPreviewColor] = useState<Color>(initial.allowedColors[0] ?? 'night');
  const [run, setRun] = useState(0);
  const [loader, setLoader] = useState(false);
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const editingApproved = initial.status === 'approved';
  const ev = events.find((e) => e.id === t.eventId) ?? events[0];
  // Say plainly who will see the template, so it never silently fails to reach the leaders.
  const [now] = useState(() => Date.now());
  const visibility = (() => {
    if (ev?.status === 'draft') return { warn: true, text: `الفعالية «${ev.title}» مسودة: لن يظهر القالب للقادة حتى تجعليها «فعّالة» من صفحة الفعاليات` };
    if (ev && new Date(ev.startsAt).getTime() - t.requestDeadlineDays * 86400_000 < now) return { warn: true, text: 'يظهر للقادة، لكن انتهى موعد الطلبات لهذه الفعالية فلن يستطيعوا إرسال أسماء' };
    return { warn: false, text: 'بعد الاعتماد يظهر مباشرة لكل القادة المعتمدين' };
  })();
  const set = (patch: Partial<TemplateDraft>) => {
    setT((x) => ({ ...x, ...patch }));
    setSaved(false);
  };

  function body() {
    return {
      eventId: t.eventId,
      track: t.track,
      allowedColors: t.allowedColors,
      stampTypes: t.stampTypes,
      artworkPath: t.artworkPath,
      availableFrom: t.availableFrom,
      availableTo: t.availableTo,
      requestDeadlineDays: t.requestDeadlineDays,
    };
  }

  /** Saves and returns the id of the draft row (an approved template becomes a new draft version). */
  async function save(): Promise<string | null> {
    if (!t.eventId) {
      setError('اختاري الفعالية أولًا');
      return null;
    }
    if (!t.allowedColors.length || !t.stampTypes.length) {
      setError('اختاري لونًا واحدًا وختمًا واحدًا على الأقل');
      return null;
    }
    setBusy(true);
    setError('');
    try {
      const { eventId, ...patch } = body();
      const row = t.id && t.status !== 'superseded' ? await call(`/api/templates/${t.id}`, 'PATCH', patch) : await call('/api/templates', 'POST', { eventId, ...patch });
      set({ id: row.id, status: row.status, version: row.version });
      setSaved(true);
      // Keep this screen mounted (and its state) while the URL follows the new draft version.
      if (row.id !== initial.id) window.history.replaceState(null, '', `${base}/templates/${row.id}`);
      return row.id as string;
    } catch (e) {
      setError((e as Error).message);
      return null;
    } finally {
      setBusy(false);
    }
  }

  async function approve() {
    const id = t.status === 'draft' && saved ? t.id : await save();
    if (!id) return;
    setBusy(true);
    try {
      await call(`/api/templates/${id}`, 'PATCH', { action: 'approve' });
      setOk(true);
      set({ status: 'approved' });
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    if (!t.id || !confirm('حذف هذا القالب نهائيًا؟')) return;
    setBusy(true);
    setError('');
    try {
      await call(`/api/templates/${t.id}`, 'DELETE');
      router.push(`${base}/templates`);
    } catch (e) {
      setError((e as Error).message);
      setBusy(false);
    }
  }

  async function upload(file: File) {
    const form = new FormData();
    form.set('file', file);
    setBusy(true);
    try {
      const r = await call('/api/uploads/artwork', 'POST', form);
      set({ artworkPath: r.path, artworkUrl: r.url });
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  const trackIdx = TRACKS.indexOf(t.track);
  const r: Record<string, unknown> = {};
  TRACKS.forEach((x, i) => {
    r['is_' + x] = i === trackIdx;
    r['on' + i] = i === trackIdx ? 'true' : 'false';
    r['bd' + i] = i === trackIdx ? '#13707B' : 'transparent';
    r['pk' + i] = () => {
      set({ track: x });
      setLoader(false);
      setRun((n) => n + 1);
    };
  });

  const view: GuestView | null = ev
    ? {
        slug: 'preview',
        kind: 'personal',
        status: 'created',
        track: t.track,
        color: previewColor,
        stamp: t.stampTypes.find((s) => s !== 'عضو') ?? 'VIP',
        artworkUrl: t.artworkUrl,
        invitee: { name: 'د. محمد أحمد', org: 'وكالة الفضاء السعودية', title: null },
        event: { title: ev.title, subtitle: ev.subtitle, latinTitle: ev.latinTitle, startsAt: ev.startsAt, endsAt: null },
        place: ev.place,
        qrSvg: null,
      }
    : null;


  const v = {
    ...r,
    base,
    vs: paletteVars(previewColor),
    crumb: t.id ? `القوالب / ${ev?.title ?? 'قالب'}${t.version > 1 ? ` · الإصدار ${t.version.toLocaleString('ar-SA')}` : ''}` : 'القوالب / قالب جديد',
    subtitle: 'اختاري هوية الحركة واللون، وبعد الاعتماد يطلع القالب في المعرض وللقادة',
    draftLabel: saved ? 'حُفظت المسودة' : 'حفظ كمسودة',
    saveDraft: () => void save(),
    approve: () => void approve(),
    approveLabel: ok ? 'معتمد ومنشور' : editingApproved ? 'اعتماد ونشر الإصدار الجديد' : 'اعتماد ونشر',
    busy,
    ok,
    notice:
      error || editingApproved ? (
        <div role={error ? 'alert' : 'status'} className="glass" style={{ borderRadius: 20, padding: '12px 16px', fontSize: 14, color: error ? '#9B3B2E' : '#0B3B41' }}>
          {error || 'هذا القالب معتمد: أي تعديل يُحفظ كإصدار جديد، والدعوات المرسلة تبقى كما هي'}
        </div>
      ) : null,
    artworkThumb: t.artworkUrl ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={t.artworkUrl} alt="" style={{ width: 48, height: 84, objectFit: 'cover', borderRadius: 10 }} />
    ) : (
      <span aria-hidden="true" style={{ width: 48, height: 84, borderRadius: 10, ...{ background: PALETTE[previewColor].bg } }} />
    ),
    artworkName: t.artworkPath ? 'صورة مرفوعة' : 'بدون صورة',
    artworkAction: t.artworkPath ? 'استبدال' : 'رفع صورة',
    pickArtwork: () => fileRef.current?.click(),
    fileInput: (
      <>
        <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
        {t.artworkPath && (
          <button type="button" onClick={() => set({ artworkPath: null, artworkUrl: null })} style={{ border: 0, background: 'transparent', color: '#9B3B2E', cursor: 'pointer', fontSize: 13 }}>
            إزالة
          </button>
        )}
      </>
    ),
    variants: COLORS.map((c) => {
      const on = t.allowedColors.includes(c);
      return {
        name: PALETTE[c].label,
        bg: PALETTE[c].bg,
        on: on ? 'true' : 'false',
        border: on ? '#13707B' : 'rgba(255,255,255,.9)',
        pick: () => {
          const next = on ? t.allowedColors.filter((x) => x !== c) : [...t.allowedColors, c];
          set({ allowedColors: COLORS.filter((x) => next.includes(x)) });
          if (!on) setPreviewColor(c);
          else if (previewColor === c && next.length) setPreviewColor(next[0]);
          setRun((n) => n + 1);
        },
      };
    }),
    availability: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <label style={label}>
          الفعالية
          <select value={t.eventId} onChange={(e) => set({ eventId: e.target.value })} className="field" style={field}>
            {events.map((e) => (
              <option key={e.id} value={e.id}>
                {e.title}
              </option>
            ))}
          </select>
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <label style={label}>
            متاح من
            <input type="date" value={toDay(t.availableFrom)} onChange={(e) => set({ availableFrom: fromDay(e.target.value) })} className="field" style={field} />
          </label>
          <label style={label}>
            إلى
            <input type="date" value={toDay(t.availableTo)} onChange={(e) => set({ availableTo: fromDay(e.target.value, true) })} className="field" style={field} />
          </label>
        </div>
        <span style={{ fontSize: 12, color: '#4F6567', marginTop: -4 }}>تظهر هذه التواريخ للقادة على القالب للعلم فقط، ولا تخفيه عنهم</span>
        <p role="status" style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: visibility.warn ? '#9B3B2E' : '#3E5456' }}>
          {visibility.text}
        </p>
        {t.id && (
          <button type="button" disabled={busy} onClick={() => void remove()} style={{ alignSelf: 'flex-start', height: 34, padding: '0 14px', borderRadius: 999, border: '1px solid rgba(155,59,46,.35)', background: 'transparent', color: '#9B3B2E', fontSize: 13, cursor: 'pointer' }}>
            حذف القالب
          </button>
        )}
        <label style={label}>
          آخر موعد للطلبات (أيام قبل الفعالية)
          <input type="number" min={0} max={60} value={t.requestDeadlineDays} onChange={(e) => set({ requestDeadlineDays: Math.max(0, Math.min(60, Number(e.target.value) || 0)) })} className="field" style={field} />
        </label>
        {!events.length && (
          <a href={`${base}/events`} style={{ fontSize: 13 }}>
            أضيفي فعالية أولًا
          </a>
        )}
      </div>
    ),
    showLoader: () => {
      setLoader(true);
      setRun((n) => n + 1);
    },
    replay: () => {
      setLoader(false);
      setRun((n) => n + 1);
    },
    preview: view ? <Invitation key={`${run}-${loader}`} view={view} mode={loader ? 'live' : 'static'} frame="device" /> : null,
    t: { name: TRACK_INFO[t.track].name },
  };

  return <TemplateView v={v} />;
}
