'use client';

import { useMemo, useState } from 'react';
import CreateView from '@/components/boards/CreateView';
import Invitation from '@/components/invitation/Invitation';
import { PALETTE, TRACK_INFO, paletteVars } from '@/components/invitation/palette';
import { parseNames } from '@/lib/shared/names';
import { taggedUrl } from '@/lib/shared/source';
import { TRACKS, COLORS, STAMPS, type Color, type GuestView, type PlaceType, type Track } from '@/lib/shared/types';

export type TemplateOption = {
  id: string;
  track: Track;
  eventTitle: string;
  eventSubtitle: string | null;
  latinTitle: string | null;
  startsAt: string;
  endsAt: string | null;
  allowedColors: Color[];
  stampTypes: string[];
  artworkUrl: string | null;
  place: { type: PlaceType; name: string | null; url: string | null };
  deadline?: string | null;
};

type Mode = 'owner' | 'leader';
const PLACE_TYPES: PlaceType[] = ['none', 'in_person', 'online'];

function onlineName(url: string) {
  if (/zoom\./i.test(url)) return 'بث مباشر عبر Zoom';
  if (/teams\./i.test(url)) return 'بث مباشر عبر Teams';
  if (/meet\.google/i.test(url)) return 'بث مباشر عبر Google Meet';
  if (/youtu/i.test(url)) return 'بث مباشر عبر YouTube';
  return 'بث مباشر';
}

const normalizeUrl = (u: string) => (!u.trim() ? '' : /^https?:\/\//i.test(u.trim()) ? u.trim() : `https://${u.trim()}`);

async function postJson(url: string, body: unknown) {
  const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).catch(() => null);
  const data = await res?.json().catch(() => null);
  if (!res?.ok) throw new Error(data?.error?.message ?? 'تعذر الاتصال، حاول مرة أخرى');
  return data;
}

export default function CreateForm({
  mode,
  templates,
  homeHref,
  roleLine,
  initialTemplateId,
  edit,
}: {
  mode: Mode;
  templates: TemplateOption[];
  homeHref: string;
  roleLine: string;
  initialTemplateId?: string;
  /** Leader resubmitting after «طلب تعديل» */
  edit?: { requestId: string; color: Color; stamp: string; showQr: boolean; place: TemplateOption['place']; peopleText: string; note: string | null };
}) {
  const leader = mode === 'leader';
  const first = templates.find((t) => t.id === initialTemplateId) ?? templates[0];
  const [templateId, setTemplateId] = useState(first?.id ?? '');
  const tpl = templates.find((t) => t.id === templateId) ?? first;
  const [color, setColor] = useState<Color>(edit?.color ?? tpl?.allowedColors[0] ?? 'night');
  const [stamp, setStamp] = useState<string>(edit?.stamp ?? tpl?.stampTypes.find((s) => s !== 'عضو') ?? 'VIP');
  const [aud, setAud] = useState(0); // 0 personal, 1 general (owner only)
  const [cnt, setCnt] = useState(edit || leader ? 1 : 0); // 0 single, 1 several
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [title, setTitle] = useState('');
  const [bulk, setBulk] = useState(edit?.peopleText ?? '');
  const [customSlug, setCustomSlug] = useState('');
  const startPlace = edit?.place ?? tpl?.place;
  const [placeIdx, setPlaceIdx] = useState(PLACE_TYPES.indexOf(startPlace?.type ?? 'none'));
  const [venue, setVenue] = useState(startPlace?.name ?? '');
  const [placeUrl, setPlaceUrl] = useState(startPlace?.url ?? '');
  const [qr, setQr] = useState(edit?.showQr ?? true);
  const [n, setN] = useState(0);
  const [step, setStep] = useState(0);
  const [busy, setBusy] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [created, setCreated] = useState<{ id: string; url: string; count: number } | null>(null);
  const [copied, setCopied] = useState(false);
  const [selfSent, setSelfSent] = useState(false);
  const [leaderDoneCount, setLeaderDoneCount] = useState<number | null>(null);

  const gen = !leader && aud === 1;
  const multi = !gen && cnt === 1;
  const { people, duplicates, overflow } = useMemo(() => parseNames(bulk), [bulk]);
  const placeType = PLACE_TYPES[placeIdx];
  const bump = () => setN((x) => x + 1);

  function pickTemplate(id: string) {
    const t = templates.find((x) => x.id === id);
    if (!t) return;
    setTemplateId(id);
    if (!t.allowedColors.includes(color)) setColor(t.allowedColors[0]);
    if (!t.stampTypes.includes(stamp)) setStamp(t.stampTypes.find((s) => s !== 'عضو') ?? t.stampTypes[0]);
    setPlaceIdx(PLACE_TYPES.indexOf(t.place.type));
    setVenue(t.place.name ?? '');
    setPlaceUrl(t.place.url ?? '');
    bump();
  }

  const place = {
    type: placeType,
    name: placeType === 'none' ? null : placeType === 'online' ? onlineName(placeUrl) : venue.trim() || null,
    url: placeType === 'none' ? null : normalizeUrl(placeUrl) || null,
  };

  function validate(): string | null {
    if (!tpl) return 'لا توجد قوالب معتمدة بعد';
    if (!gen && !multi && !name.trim()) return 'اكتبي اسم المدعو';
    if (multi && !people.length) return 'أضيفي اسمًا واحدًا على الأقل، كل اسم في سطر';
    if (place.url && !/^https?:\/\/[^\s]+\.[^\s]+/.test(place.url)) return 'رابط المكان غير صحيح';
    if (gen && customSlug && !/^[a-z0-9-]{3,32}$/.test(customSlug)) return 'الرابط المختصر: حروف إنجليزية صغيرة وأرقام وشرطة';
    return null;
  }

  async function make(): Promise<{ id: string; url: string; count: number } | null> {
    if (created) return created;
    const problem = validate();
    if (problem) {
      setErrorMsg(problem);
      return null;
    }
    setBusy(true);
    setErrorMsg('');
    try {
      if (leader) {
        const payload = { templateId: tpl!.id, color, stamp, place, showQr: qr, people: multi ? people : [{ name: name.trim(), org: org.trim() || null, title: title.trim() || null }] };
        if (edit) {
          const res = await fetch(`/api/requests/${edit.requestId}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) }).catch(() => null);
          const data = await res?.json().catch(() => null);
          if (!res?.ok) throw new Error(data?.error?.message ?? 'تعذر الإرسال');
          setLeaderDoneCount(payload.people.length);
        } else {
          const r = await postJson('/api/requests', payload);
          setLeaderDoneCount(r.count);
        }
        return null;
      }
      const base = { templateId: tpl!.id, color, stamp: gen ? 'عضو' : stamp, place, showQr: qr };
      if (multi) {
        const r = await postJson('/api/invitations', { ...base, people });
        const c = { id: r.items[0].id, url: r.items[0].url, count: r.items.length };
        setCreated(c);
        return c;
      }
      const r = await postJson('/api/invitations', gen ? { ...base, kind: 'general', customSlug: customSlug || null } : { ...base, kind: 'personal', invitee: { name: name.trim(), org: org.trim() || null, title: title.trim() || null } });
      const c = { id: r.id, url: r.url, count: 1 };
      setCreated(c);
      return c;
    } catch (e) {
      setErrorMsg((e as Error).message);
      return null;
    } finally {
      setBusy(false);
    }
  }

  async function selfSend() {
    const c = await make();
    if (!c) return;
    try {
      await postJson(`/api/invitations/${c.id}/test`, {});
      setSelfSent(true);
    } catch (e) {
      setErrorMsg((e as Error).message);
    }
  }

  const avail = new Set(templates.map((t) => t.track));
  const trackIdx = TRACKS.indexOf(tpl?.track ?? 'space');
  const sameTrack = templates.filter((t) => t.track === tpl?.track);
  const shownName = gen ? 'اسم العضو بعد التسجيل' : multi ? (people[0]?.name ?? 'اسم المدعو') : name.trim() || 'اسم المدعو';
  const shownOrg = gen ? 'عضو نادي العلوم' : multi ? 'معاينة أول مدعو' : org.trim();

  const previewView: GuestView | null = tpl
    ? {
        slug: 'preview',
        kind: gen ? 'general' : 'personal',
        status: 'created',
        track: tpl.track,
        color,
        stamp: gen ? 'عضو' : stamp,
        artworkUrl: tpl.artworkUrl,
        invitee: gen ? null : { name: shownName, org: shownOrg || null, title: multi ? null : title.trim() || null },
        event: { title: tpl.eventTitle, subtitle: tpl.eventSubtitle, latinTitle: tpl.latinTitle, startsAt: tpl.startsAt, endsAt: tpl.endsAt },
        place,
        qrSvg: qr && place.url ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="70" height="70"><path fill="currentColor" d="M0 0h3v3H0zM4 0h3v3H4zM0 4h3v3H0zM4 4h1v1H4zM6 6h1v1H6zM5 5h1v1H5z"/></svg>' : null,
      }
    : null;

  const opt = (names: string[], cur: number, set: (i: number) => void) =>
    names.map((nm, i) => ({ name: nm, on: i === cur ? 'true' : 'false', bg: i === cur ? '#0B3B41' : 'transparent', text: i === cur ? '#FFFFFF' : '#3E5456', pick: () => set(i) }));

  const r: Record<string, unknown> = {};
  TRACKS.forEach((t, i) => {
    r['is_' + t] = i === trackIdx;
    r['av_' + t] = avail.has(t);
    r['on' + i] = i === trackIdx ? 'true' : 'false';
    r['bd' + i] = i === trackIdx ? '#C99A2E' : 'transparent';
    r['pk' + i] = () => {
      const t0 = templates.find((x) => x.track === t);
      if (t0) pickTemplate(t0.id);
    };
  });
  STAMPS.forEach((s, i) => {
    const on = s === stamp;
    r['st' + i] = !gen && s !== 'عضو' && !!tpl?.stampTypes.includes(s);
    r['so' + i] = on ? 'true' : 'false';
    r['sb' + i] = on ? '#13707B' : 'rgba(255,255,255,.9)';
    r['sg' + i] = on ? 'rgba(255,255,255,.88)' : 'rgba(255,255,255,.42)';
    r['pr' + i] = on ? (n % 2 ? 'pA' : 'pB') : '';
    r['sp' + i] = () => {
      setStamp(s);
      bump();
    };
  });

  const link = created ? taggedUrl(created.url, 'link') : '';
  const v = {
    ...r,
    t: { name: TRACK_INFO[tpl?.track ?? 'space'].name },
    vs: paletteVars(color),
    vName: PALETTE[color].label,
    variants: COLORS.filter((c) => !tpl || tpl.allowedColors.includes(c)).map((c) => ({
      name: PALETTE[c].label,
      bg: PALETTE[c].bg,
      on: c === color ? 'true' : 'false',
      border: c === color ? '#13707B' : 'rgba(255,255,255,.9)',
      pick: () => {
        setColor(c);
        bump();
      },
    })),
    tplNote: leader ? 'قوالب معتمدة لك' : 'لكل مسار حركته، وثلاثة ألوان من هوية النادي',
    stampLabel: gen ? 'عضو' : stamp,
    admin: !leader,
    leader,
    showTpl: !leader || step === 0,
    showPeople: !leader || step === 1,
    showPlace: !leader || step === 2,
    showSend: leader && step === 3,
    showActions: !leader || step === 3,
    wizNav: leader && step < 3,
    steps: ['القالب', 'المدعوون', 'المكان', 'الإرسال'].map((nm, i) => ({
      name: nm,
      cur: i === step ? 'step' : 'false',
      bg: i === step ? '#0B3B41' : i < step ? 'rgba(19,112,123,.14)' : 'transparent',
      text: i === step ? '#FFFFFF' : '#2C4245',
      go: () => setStep(i),
    })),
    next: () => setStep((s) => Math.min(3, s + 1)),
    back: () => setStep((s) => Math.max(0, s - 1)),
    backOp: step === 0 ? 0.4 : 1,
    reviewPeople: multi ? `${people.length.toLocaleString('ar-SA')} مدعوين` : name.trim() || '—',
    audiences: opt(['دعوة شخصية', 'دعوة عامة للأعضاء'], aud, setAud),
    counts: opt(['مدعو واحد', 'عدة مدعوين'], cnt, setCnt),
    personal: !gen,
    general: gen,
    single: !multi,
    multi,
    name,
    org,
    title,
    venue,
    bulk,
    placeUrl,
    customSlug,
    onName: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    onOrg: (e: React.ChangeEvent<HTMLInputElement>) => setOrg(e.target.value),
    onTitle: (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
    onVenue: (e: React.ChangeEvent<HTMLInputElement>) => setVenue(e.target.value),
    onBulk: (e: React.ChangeEvent<HTMLTextAreaElement>) => setBulk(e.target.value),
    onPlaceUrl: (e: React.ChangeEvent<HTMLInputElement>) => setPlaceUrl(e.target.value),
    onCustomSlug: (e: React.ChangeEvent<HTMLInputElement>) => setCustomSlug(e.target.value.toLowerCase()),
    people,
    peopleCount: `${people.length.toLocaleString('ar-SA')} مدعوين، كل واحد له دعوة باسمه${duplicates.length ? ` · مكرر: ${duplicates.join('، ')}` : ''}${overflow.length ? ` · أكثر من ٣ خانات في: ${overflow.join(' | ')} (الاسم — الجهة — المسمى)` : ''}`,
    places: opt(['بدون', 'حضوري', 'عن بعد'], placeIdx, setPlaceIdx),
    placeName: place.name ?? (placeType === 'none' ? 'بدون' : '—'),
    inPerson: placeType === 'in_person',
    online: placeType === 'online',
    hasPlace: placeType !== 'none',
    qr,
    qrOn: qr ? 'true' : 'false',
    qrBg: qr ? '#13707B' : 'rgba(255,255,255,.7)',
    qrText: qr ? '#FFFFFF' : '#0B3B41',
    qrBtn: qr ? 'باركود الموقع مضاف' : 'إضافة باركود للموقع أو الرابط',
    toggleQr: () => setQr((q) => !q),
    ctaLabel: leader ? 'إرسال للاعتماد' : 'إنشاء الدعوة',
    busy,
    errorMsg,
    doneAdmin: !!created && !leader,
    doneLeader: leaderDoneCount !== null && leader,
    leaderDone:
      (leaderDoneCount ?? 0) > 1
        ? `أرسلت ${(leaderDoneCount ?? 0).toLocaleString('ar-SA')} أسماء دفعة وحدة، وبعد الاعتماد تطلع لك روابطها جاهزة للإرسال`
        : 'بعد الاعتماد يطلع لك رابط الدعوة جاهز للإرسال',
    roleLine,
    roleDot: leader ? '#6FB7B8' : '#C99A2E',
    crumb: leader ? (edit ? `دعواتي / تعديل الطلب${edit.note ? ` · ${edit.note}` : ''}` : 'دعواتي / إنشاء') : 'الدعوات / إنشاء',
    homeHref,
    selfSend,
    selfSent,
    selfMsg: 'أُرسلت نسخة تجريبية إلى بريدك، افتحيها من جوالك وشوفي التجربة كاملة',
    make: () => void make(),
    again: () => {
      setCreated(null);
      setSelfSent(false);
      setCopied(false);
      setName('');
      setOrg('');
      setTitle('');
      setBulk('');
      setCustomSlug('');
    },
    link: created && created.count > 1 ? `${created.count.toLocaleString('ar-SA')} دعوات جاهزة · صفحة الدعوات` : link,
    copy: async () => {
      await navigator.clipboard?.writeText(link).catch(() => {});
      setCopied(true);
    },
    copyLabel: copied ? 'تم النسخ' : 'نسخ الرابط',
    waHref: created ? `https://wa.me/?text=${encodeURIComponent(`دعوة من نادي العلوم: ${taggedUrl(created.url, 'whatsapp')}`)}` : '#',
    share: (e: React.MouseEvent) => {
      if (navigator.share && created) {
        e.preventDefault();
        navigator.share({ title: 'دعوة من نادي العلوم', url: taggedUrl(created.url, 'link') }).catch(() => {});
      }
    },
    eventPicker:
      sameTrack.length > 1 ? (
        <label className="glass" style={{ borderRadius: 26, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, fontWeight: 700, color: '#13707B' }}>
          الفعالية
          <select
            className="field"
            value={templateId}
            onChange={(e) => pickTemplate(e.target.value)}
            style={{ height: 48, borderRadius: 999, padding: '0 16px', border: '1px solid rgba(255,255,255,.95)', background: 'rgba(255,255,255,.78)', color: '#18292C', fontWeight: 400 }}
          >
            {sameTrack.map((t) => (
              <option key={t.id} value={t.id}>
                {t.eventTitle}
              </option>
            ))}
          </select>
        </label>
      ) : null,
    preview: previewView ? (
      <Invitation key={`${templateId}-${n}-${aud}`} view={previewView} mode="preview" frame="device" registered={gen} registeredName={gen ? 'اسم العضو بعد التسجيل' : undefined} />
    ) : null,
  };

  if (!templates.length) {
    return (
      <main style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', padding: 24, textAlign: 'center' }}>
        <div className="glass" style={{ borderRadius: 28, padding: 32, maxWidth: 420 }}>
          <h1 className="display" style={{ margin: '0 0 8px', color: '#0B3B41' }}>
            لا توجد قوالب معتمدة بعد
          </h1>
          <p style={{ margin: '0 0 16px', color: '#3E5456' }}>{leader ? 'تظهر هنا القوالب بعد أن تعتمدها صاحبة المنصة' : 'جهّزي قالبًا واعتمديه أولًا من صفحة القوالب'}</p>
          <a href={homeHref}>رجوع</a>
        </div>
      </main>
    );
  }
  return <CreateView v={v} />;
}
