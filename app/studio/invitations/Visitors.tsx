'use client';

import { useMemo, useState } from 'react';
import type { RegistrationRow } from '@/lib/server/invitations';
import { timeoutSignal } from '@/lib/shared/timeout';

const ANSWER: Record<string, [string, string, string]> = {
  yes: ['سيحضر', '#13707B', 'rgba(19,112,123,.12)'],
  no: ['اعتذر', '#9B3B2E', 'rgba(155,59,46,.10)'],
  none: ['لم يرد بعد', '#5E594F', 'rgba(125,119,105,.13)'],
};
const when = (iso: string) =>
  new Intl.DateTimeFormat('ar-SA-u-ca-gregory-nu-arab', { timeZone: 'Asia/Riyadh', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' }).format(new Date(iso));
const csvCell = (s: string) => `"${s.replace(/"/g, '""')}"`;

/** «قائمة الزوار»: everyone who registered through a public link (name, email, answer). Loaded only when opened. */
export default function Visitors() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<RegistrationRow[] | null>(null);
  const [error, setError] = useState('');
  const [q, setQ] = useState('');
  const [busy, setBusy] = useState(false);

  async function load() {
    setOpen(true);
    setBusy(true);
    setError('');
    const res = await fetch('/api/registrations', { signal: timeoutSignal() }).catch(() => null);
    setBusy(false);
    if (!res?.ok) return setError('تعذر تحميل القائمة، حاولي مرة أخرى');
    setRows(await res.json());
  }

  const shown = useMemo(() => {
    const t = q.trim().toLowerCase();
    return (rows ?? []).filter((r) => !t || `${r.name} ${r.email} ${r.eventTitle}`.toLowerCase().includes(t));
  }, [rows, q]);
  const yes = (rows ?? []).filter((r) => r.answer === 'yes').length;

  function download() {
    const head = ['الاسم', 'البريد', 'الرد', 'الفعالية', 'الختم', 'وقت التسجيل'];
    const lines = shown.map((r) => [r.name, r.email, ANSWER[r.answer ?? 'none'][0], r.eventTitle, r.stamp, when(r.createdAt)].map(csvCell).join(','));
    // BOM so Excel reads the Arabic correctly
    const blob = new Blob(['﻿' + [head.map(csvCell).join(','), ...lines].join('\r\n')], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'الزوار.csv';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  const btn: React.CSSProperties = { height: 38, padding: '0 16px', borderRadius: 999, border: '1px solid #0B3B41', background: '#0B3B41', color: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer' };
  return (
    <>
      <button type="button" onClick={() => void load()} style={btn}>
        قائمة الزوار (الأسماء والبريد)
      </button>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="قائمة الزوار" onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(7,37,41,.35)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', display: 'grid', placeItems: 'center', padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} className="glass inA" style={{ width: 'min(760px, 100%)', maxHeight: '88dvh', overflow: 'auto', borderRadius: 28, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
              <b style={{ fontSize: 18, color: '#0B3B41' }}>قائمة الزوار</b>
              <button type="button" onClick={() => setOpen(false)} aria-label="إغلاق" style={{ border: 0, background: 'transparent', fontSize: 22, cursor: 'pointer', color: '#4F6567' }}>
                ×
              </button>
            </div>
            <p style={{ margin: 0, fontSize: 13, color: '#4F6567' }}>
              من سجّل اسمه وبريده من الروابط العامة{rows ? ` · ${rows.length.toLocaleString('ar-SA')} زائر، ${yes.toLocaleString('ar-SA')} سيحضرون` : ''}. المدعوون بدعوات شخصية تظهر ردودهم في قائمة الدعوات.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="ابحثي بالاسم أو البريد" aria-label="بحث في الزوار" className="field" style={{ flex: '1 1 220px', height: 40, borderRadius: 999, border: '1px solid rgba(11,59,65,.18)', padding: '0 14px', background: 'rgba(255,255,255,.85)' }} />
              <button type="button" onClick={download} disabled={!shown.length} style={{ ...btn, opacity: shown.length ? 1 : 0.5 }}>
                تنزيل Excel
              </button>
              <button type="button" onClick={() => void load()} disabled={busy} style={{ ...btn, background: 'transparent', color: '#0B3B41' }}>
                تحديث
              </button>
            </div>
            {busy && !rows && <span style={{ fontSize: 14, color: '#4F6567' }}>نحمّل القائمة…</span>}
            {error && (
              <span role="alert" style={{ fontSize: 14, color: '#9B3B2E' }}>
                {error}
              </span>
            )}
            {rows && !shown.length && <span style={{ fontSize: 14, color: '#4F6567' }}>{rows.length ? 'لا نتائج لهذا البحث' : 'لم يسجّل أحد بعد'}</span>}
            {shown.map((r) => {
              const a = ANSWER[r.answer ?? 'none'];
              return (
                <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 16, background: 'rgba(255,255,255,.75)', flexWrap: 'wrap' }}>
                  <span style={{ flex: '1 1 220px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <b style={{ fontSize: 14, color: '#0B3B41' }}>{r.name}</b>
                    <span dir="ltr" style={{ fontSize: 13, color: '#3E5456', textAlign: 'right', overflowWrap: 'anywhere', userSelect: 'all' }}>
                      {r.email}
                    </span>
                    <span style={{ fontSize: 12, color: '#4F6567' }}>
                      {r.eventTitle} · ختم {r.stamp} · {when(r.createdAt)}
                    </span>
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 700, padding: '5px 11px', borderRadius: 999, color: a[1], background: a[2] }}>{a[0]}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
