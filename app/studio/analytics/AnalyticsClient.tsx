'use client';

import { useState, useTransition } from 'react';
import type { Analytics, Totals } from '@/lib/server/analytics';
import type { Semester } from '@/lib/server/semesters';
import { SOURCE_LABELS } from '@/lib/shared/source';
import { toArabicDigits } from '@/lib/shared/dates';
import { timeoutSignal } from '@/lib/shared/timeout';

const DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
/** Sequential teal ramp from the design tokens (light → dark). 0 = empty cell. */
const RAMP = ['rgba(19,112,123,.06)', '#D5EBEB', '#A9D4D5', '#6FB7B8', '#13707B', '#0B3B41'];
const ar = (n: number) => Math.round(n).toLocaleString('ar-SA');
const pct = (r: number) => `${ar(r * 100)}٪`;
const hourLabel = (h: number) => `${toArabicDigits(h % 12 === 0 ? 12 : h % 12)} ${h < 12 ? 'ص' : 'م'}`;
const duration = (m: number) => (m < 60 ? `${ar(m)} دقيقة` : m < 48 * 60 ? `${ar(m / 60)} ساعة` : `${ar(m / 1440)} يوم`);

const card: React.CSSProperties = { borderRadius: 28, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 };
const h3: React.CSSProperties = { margin: 0, fontSize: 17, fontWeight: 700, color: '#0B3B41' };
const muted: React.CSSProperties = { fontSize: 13, color: '#4F6567' };

type Events = { id: string; title: string }[];

export default function AnalyticsClient({ initial, semesters: initialSemesters, events }: { initial: Analytics; semesters: Semester[]; events: Events }) {
  const [data, setData] = useState(initial);
  const [semesters, setSemesters] = useState(initialSemesters);
  const [semester, setSemester] = useState('');
  const [event, setEvent] = useState('');
  const [error, setError] = useState('');
  const [pending, start] = useTransition();
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(null);

  function load(next: { semester?: string; event?: string }) {
    const s = next.semester ?? semester;
    const e = next.event ?? event;
    setSemester(s);
    setEvent(e);
    start(async () => {
      const q = new URLSearchParams();
      if (s) q.set('semester', s);
      if (e) q.set('event', e);
      const res = await fetch(`/api/analytics?${q}`, { signal: timeoutSignal() }).catch(() => null);
      if (!res?.ok) {
        setError('تعذر تحميل الإحصائيات، حاولي مرة أخرى');
        return;
      }
      setError('');
      setData(await res.json());
    });
  }

  const t = data.totals;
  const max = Math.max(1, ...data.heatmap.flat());
  const level = (n: number) => (n === 0 ? 0 : Math.min(5, 1 + Math.floor((n / max) * 4.999)));
  const srcMax = Math.max(1, ...data.sources.map((s) => s.count));
  const srcTotal = data.sources.reduce((a, s) => a + s.count, 0) || 1;
  const showTip = (e: React.MouseEvent | React.FocusEvent, text: string) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTip({ x: r.left + r.width / 2, y: r.top, text });
  };

  return (
    <main className="mn" style={{ flex: '999 1 560px', minWidth: 0, boxSizing: 'border-box', padding: '24px 14px 40px', display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 1200, opacity: pending ? 0.6 : 1, transition: 'opacity .2s' }}>
      <header style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <h1 className="display h1m" style={{ margin: 0, fontSize: 42, color: '#0B3B41' }}>
            الإحصائيات
          </h1>
          <p style={{ ...muted, margin: '6px 0 0' }}>لكِ وحدك، ولا تظهر لقادة النادي</p>
        </div>
        <div className="stack" style={{ display: 'flex', gap: 10 }}>
          <select aria-label="الفصل" className="field" value={semester} onChange={(e) => load({ semester: e.target.value })} style={selectStyle}>
            <option value="">كل الفصول</option>
            {semesters.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          <select aria-label="الفعالية" className="field" value={event} onChange={(e) => load({ event: e.target.value })} style={selectStyle}>
            <option value="">كل الفعاليات</option>
            {events.map((e) => (
              <option key={e.id} value={e.id}>
                {e.title}
              </option>
            ))}
          </select>
        </div>
      </header>
      {error && (
        <div role="alert" className="glass" style={{ ...card, color: '#9B3B2E' }}>
          {error}
        </div>
      )}

      <section className="g4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <Stat label="أكّدوا الحضور" value={ar(t.attending)} note={`من ${ar(t.opened)} فتحوا الدعوة`} />
        <Stat label="نسبة التأكيد" value={pct(t.confirmationRate)} note={`${ar(t.declined)} اعتذروا · ${ar(t.noAnswer)} بلا رد`} />
        <Stat label="متوسط وقت التأكيد" value={data.timeToConfirm ? duration(data.timeToConfirm.meanMinutes) : '—'} note={data.timeToConfirm ? `الوسيط ${duration(data.timeToConfirm.medianMinutes)}` : 'لا توجد تأكيدات بعد'} />
        <Stat label="سجّلوا عبر الرابط العام" value={ar(t.registrations)} note={`${ar(t.invitations)} دعوة · ${ar(t.events)} فعالية`} />
      </section>

      <section className="glass" style={card}>
        <h3 style={h3}>متى يؤكد أغلب المدعوين حضورهم</h3>
        <p style={{ margin: 0, fontSize: 15, color: '#18292C' }}>
          {data.peak ? (
            <>
              أكثر وقت: <b>{DAYS[data.peak.weekday]}</b> الساعة <b>{hourLabel(data.peak.hour)}</b> ({ar(data.peak.count)} تأكيد) بتوقيت مكة
            </>
          ) : (
            'لا توجد تأكيدات بعد'
          )}
        </p>
        <div style={{ overflowX: 'auto' }}>
          <div role="img" aria-label="خريطة أوقات التأكيد حسب اليوم والساعة" style={{ display: 'grid', gridTemplateColumns: '64px repeat(24, minmax(14px, 1fr))', gap: 2, minWidth: 520, direction: 'rtl' }}>
            <span />
            {Array.from({ length: 24 }, (_, h) => (
              <span key={h} style={{ fontSize: 10, color: '#4F6567', textAlign: 'center' }}>
                {h % 3 === 0 ? hourLabel(h) : ''}
              </span>
            ))}
            {data.heatmap.map((row, d) => (
              <Row key={d} day={DAYS[d]} row={row} level={level} onTip={showTip} clear={() => setTip(null)} />
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, ...muted, fontSize: 12 }}>
          أقل
          {RAMP.slice(1).map((c) => (
            <span key={c} style={{ width: 14, height: 14, borderRadius: 4, background: c }} />
          ))}
          أكثر
        </div>
        <table className="sr-only">
          <caption>عدد التأكيدات حسب اليوم والساعة</caption>
          <tbody>
            {data.heatmap.map((row, d) => (
              <tr key={d}>
                <th scope="row">{DAYS[d]}</th>
                {row.map((n, h) => (n ? <td key={h}>{`${hourLabel(h)}: ${n}`}</td> : null))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 20 }}>
        <section className="glass" style={card}>
          <h3 style={h3}>من أين وصل المدعوون</h3>
          {data.sources.length === 0 && <p style={muted}>لا توجد بيانات بعد</p>}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.sources.map((s) => (
              <li
                key={s.source}
                tabIndex={0}
                onMouseEnter={(e) => showTip(e, `${SOURCE_LABELS[s.source]}: ${ar(s.count)} (${pct(s.count / srcTotal)})`)}
                onFocus={(e) => showTip(e, `${SOURCE_LABELS[s.source]}: ${ar(s.count)} (${pct(s.count / srcTotal)})`)}
                onMouseLeave={() => setTip(null)}
                onBlur={() => setTip(null)}
                style={{ display: 'grid', gridTemplateColumns: '92px 1fr 70px', alignItems: 'center', gap: 10, fontSize: 13, outline: 'none' }}
              >
                <span style={{ color: '#18292C' }}>{SOURCE_LABELS[s.source]}</span>
                <span style={{ height: 14, borderRadius: 4, background: 'rgba(19,112,123,.08)', overflow: 'hidden' }}>
                  <span className="growX" style={{ display: 'block', height: '100%', width: `${(s.count / srcMax) * 100}%`, background: '#13707B', borderRadius: 4, transformOrigin: '100% 50%' }} />
                </span>
                <span style={{ color: '#4F6567', textAlign: 'left' }}>
                  {ar(s.count)} · {pct(s.count / srcTotal)}
                </span>
              </li>
            ))}
          </ul>
          <p style={{ ...muted, fontSize: 12, margin: 0 }}>انسخي الروابط من «إنشاء دعوة» أو «الدعوات» بالمنصة المناسبة ليُعرف مصدرها بدقة</p>
        </section>

        <section className="glass" style={card}>
          <h3 style={h3}>أفضل موعد للفعالية</h3>
          <p style={{ ...muted, margin: 0 }}>نسبة من أكّد الحضور حسب يوم الفعالية وساعتها</p>
          {data.bestSlots.length === 0 && <p style={muted}>لا توجد بيانات بعد</p>}
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.bestSlots.map((s, i) => (
              <li key={`${s.weekday}-${s.hour}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 18, background: i === 0 ? 'rgba(201,154,46,.12)' : 'rgba(255,255,255,.55)' }}>
                <span className="display" style={{ fontSize: 22, color: i === 0 ? '#8E6C1F' : '#0B3B41', width: 28 }}>
                  {toArabicDigits(i + 1)}
                </span>
                <span style={{ flex: 1 }}>
                  <b>{DAYS[s.weekday]}</b> · {hourLabel(s.hour)}
                  <span style={{ ...muted, display: 'block', fontSize: 12 }}>
                    {ar(s.events)} {s.events === 1 ? 'فعالية' : 'فعاليات'} · {ar(s.attending)} حضور مؤكد
                  </span>
                </span>
                <b style={{ color: '#13707B' }}>{pct(s.rate)}</b>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="glass" style={card}>
        <h3 style={h3}>ملخص الفصول</h3>
        <SemesterTable rows={data.semesters} />
        <SemesterForm
          onSaved={(s) => {
            setSemesters((all) => [s, ...all.filter((x) => x.id !== s.id)].sort((a, b) => b.startsOn.localeCompare(a.startsOn)));
            load({});
          }}
        />
      </section>

      {tip && (
        <div role="tooltip" style={{ position: 'fixed', left: tip.x, top: tip.y - 8, transform: 'translate(-50%, -100%)', background: '#0B3B41', color: '#fff', fontSize: 12, padding: '6px 10px', borderRadius: 10, pointerEvents: 'none', zIndex: 40, whiteSpace: 'nowrap' }}>
          {tip.text}
        </div>
      )}
    </main>
  );
}

const selectStyle: React.CSSProperties = { height: 44, borderRadius: 999, padding: '0 16px', border: '1px solid rgba(255,255,255,.95)', background: 'rgba(255,255,255,.78)', color: '#18292C', minWidth: 170 };

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="glass" style={{ borderRadius: 24, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={muted}>{label}</span>
      <span className="display" style={{ fontSize: 32, lineHeight: 1.1, color: '#0B3B41' }}>
        {value}
      </span>
      <span style={{ ...muted, fontSize: 12 }}>{note}</span>
    </div>
  );
}

function Row({ day, row, level, onTip, clear }: { day: string; row: number[]; level: (n: number) => number; onTip: (e: React.MouseEvent | React.FocusEvent, t: string) => void; clear: () => void }) {
  return (
    <>
      <span style={{ fontSize: 12, color: '#2C4245', alignSelf: 'center' }}>{day}</span>
      {row.map((n, h) => {
        const text = `${day} ${hourLabel(h)}: ${ar(n)} تأكيد`;
        return (
          <span
            key={h}
            tabIndex={n ? 0 : -1}
            aria-label={n ? text : undefined}
            onMouseEnter={(e) => onTip(e, text)}
            onFocus={(e) => onTip(e, text)}
            onMouseLeave={clear}
            onBlur={clear}
            style={{ height: 22, borderRadius: 4, background: RAMP[level(n)], outline: 'none' }}
          />
        );
      })}
    </>
  );
}

function SemesterTable({ rows }: { rows: Analytics['semesters'] }) {
  if (!rows.length) return <p style={muted}>أضيفي الفصول الدراسية بالأسفل ليظهر ملخص كل فصل</p>;
  const cols: [string, (t: Totals) => string][] = [
    ['الفعاليات', (t) => ar(t.events)],
    ['الدعوات', (t) => ar(t.invitations)],
    ['المسجّلون', (t) => ar(t.registrations)],
    ['أكّدوا', (t) => ar(t.attending)],
    ['اعتذروا', (t) => ar(t.declined)],
    ['نسبة التأكيد', (t) => pct(t.confirmationRate)],
  ];
  const sum = rows.reduce<Totals>(
    (a, r) => ({
      attending: a.attending + r.totals.attending,
      declined: a.declined + r.totals.declined,
      noAnswer: a.noAnswer + r.totals.noAnswer,
      opened: a.opened + r.totals.opened,
      invitations: a.invitations + r.totals.invitations,
      registrations: a.registrations + r.totals.registrations,
      events: a.events + r.totals.events,
      confirmationRate: 0,
    }),
    { attending: 0, declined: 0, noAnswer: 0, opened: 0, invitations: 0, registrations: 0, events: 0, confirmationRate: 0 },
  );
  sum.confirmationRate = sum.opened ? sum.attending / sum.opened : 0;
  const cell: React.CSSProperties = { padding: '10px 8px', textAlign: 'center', fontSize: 14, borderBottom: '1px solid rgba(19,112,123,.12)' };
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
        <thead>
          <tr>
            <th style={{ ...cell, textAlign: 'right', color: '#4F6567', fontWeight: 500 }}>الفصل</th>
            {cols.map(([c]) => (
              <th key={c} style={{ ...cell, color: '#4F6567', fontWeight: 500 }}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id ?? 'outside'}>
              <th scope="row" style={{ ...cell, textAlign: 'right', fontWeight: 700, color: '#0B3B41' }}>
                {r.name}
              </th>
              {cols.map(([c, f]) => (
                <td key={c} style={cell}>
                  {f(r.totals)}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th scope="row" style={{ ...cell, textAlign: 'right', fontWeight: 700, color: '#8E6C1F', borderBottom: 0 }}>
              المجموع
            </th>
            {cols.map(([c, f]) => (
              <td key={c} style={{ ...cell, fontWeight: 700, borderBottom: 0 }}>
                {f(sum)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function SemesterForm({ onSaved }: { onSaved: (s: Semester) => void }) {
  const [name, setName] = useState('');
  const [startsOn, setStartsOn] = useState('');
  const [endsOn, setEndsOn] = useState('');
  const [msg, setMsg] = useState('');
  async function save() {
    setMsg('');
    const res = await fetch('/api/semesters', { signal: timeoutSignal(), method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name, startsOn, endsOn }) }).catch(() => null);
    const body = await res?.json().catch(() => null);
    if (!res?.ok) {
      setMsg(body?.error?.message ?? 'تعذر الحفظ');
      return;
    }
    setName('');
    setStartsOn('');
    setEndsOn('');
    onSaved(body);
  }
  const input: React.CSSProperties = { height: 44, borderRadius: 999, padding: '0 16px', border: '1px solid rgba(255,255,255,.95)', background: 'rgba(255,255,255,.78)', color: '#18292C' };
  return (
    <details>
      <summary style={{ cursor: 'pointer', color: '#13707B', fontWeight: 700, fontSize: 14 }}>إضافة فصل دراسي</summary>
      <div className="stack" style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#3E5456' }}>
          الاسم
          <input className="field" value={name} onChange={(e) => setName(e.target.value)} placeholder="الفصل الأول ١٤٤٨" style={input} />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#3E5456' }}>
          من
          <input className="field" type="date" value={startsOn} onChange={(e) => setStartsOn(e.target.value)} style={input} />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#3E5456' }}>
          إلى
          <input className="field" type="date" value={endsOn} onChange={(e) => setEndsOn(e.target.value)} style={input} />
        </label>
        <button type="button" onClick={save} style={{ height: 44, padding: '0 22px', border: 0, borderRadius: 999, background: '#C99A2E', color: '#0B2B30', fontWeight: 700, cursor: 'pointer' }}>
          حفظ
        </button>
      </div>
      {msg && (
        <p role="alert" style={{ color: '#9B3B2E', fontSize: 13 }}>
          {msg}
        </p>
      )}
    </details>
  );
}
