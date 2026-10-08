'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardDarkView from '@/components/boards/DashboardDarkView';
import { PALETTE, TRACK_INFO } from '@/components/invitation/palette';
import type { PendingRequest } from '@/lib/server/requests';
import { timeoutSignal } from '@/lib/shared/timeout';

type State = 'بانتظار' | 'معتمدة' | 'تعديل';
const COL: Record<State, [string, string]> = {
  'معتمدة': ['#13707B', 'rgba(19,112,123,.12)'],
  'تعديل': ['#8E6C1F', 'rgba(201,154,46,.15)'],
  'بانتظار': ['#5E594F', 'rgba(125,119,105,.13)'],
};
const ar = (n: number) => n.toLocaleString('ar-SA');
/** What a request asks for: one public link, or one personal invitation per name. */
const what = (r: PendingRequest) => (r.kind === 'general' ? `رابط عام · ختم ${r.stamp}` : `${ar(r.people.length)} ${r.people.length === 1 ? 'مدعو' : 'مدعوين'} · ختم ${r.stamp}`);

function daysLeft(iso: string) {
  const d = Math.ceil((new Date(iso).getTime() - Date.now()) / 86400_000);
  if (d <= 0) return 'الفعالية اليوم أو مضت';
  if (d === 1) return 'الفعالية غدًا';
  if (d === 2) return 'الفعالية بعد يومين';
  return `الفعالية بعد ${ar(d)} ${d <= 10 ? 'أيام' : 'يومًا'}`;
}

export default function ApprovalsClient({ requests: initial }: { requests: PendingRequest[]; now?: number }) {
  // Local copy: router.refresh() (sidebar badge, auto-refresh) must not drop decided requests from this screen;
  // requests that arrive meanwhile are appended.
  const [requests, setRequests] = useState(initial);
  const router = useRouter();
  const [sel, setSel] = useState(0);
  const [states, setStates] = useState<State[]>(() => requests.map(() => 'بانتظار'));
  useEffect(() => {
    const fresh = initial.filter((r) => !requests.some((x) => x.id === r.id));
    if (!fresh.length) return;
    setRequests((all) => [...all, ...fresh]); // eslint-disable-line react-hooks/set-state-in-effect
    setStates((st) => [...st, ...fresh.map((): State => 'بانتظار')]);
  }, [initial, requests]);
  const [off, setOff] = useState<Record<string, boolean>>({});
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const cur = requests[sel];

  async function decide(decision: 'approve' | 'changes_requested') {
    if (!cur) return;
    if (decision === 'changes_requested' && note.trim().length < 2) {
      setError('اكتبي للقائد ما المطلوب تعديله');
      return;
    }
    setBusy(true);
    setError('');
    const body = decision === 'approve' ? { decision, excludedPersonIds: cur.people.filter((p) => off[p.id]).map((p) => p.id) } : { decision, note };
    const res = await fetch(`/api/requests/${cur.id}/decide`, { signal: timeoutSignal(), method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).catch(() => null);
    setBusy(false);
    if (!res?.ok) {
      const e = await res?.json().catch(() => null);
      setError(e?.error?.message ?? 'تعذر الحفظ، حاولي مرة أخرى');
      return;
    }
    setStates((st) => st.map((x, i) => (i === sel ? (decision === 'approve' ? 'معتمدة' : 'تعديل') : x)));
    setNote('');
    router.refresh(); // sidebar badge and dashboard counts
    const next = states.findIndex((x, i) => i !== sel && x === 'بانتظار');
    if (next >= 0) setTimeout(() => setSel(next), 900);
  }

  const kept = cur ? cur.people.filter((p) => !off[p.id]).length : 0;
  const v = {
    reqs: requests.map((r, i) => ({
      what: what(r),
      from: r.leaderName,
      bg: PALETTE[r.color].bg,
      state: states[i],
      sc: COL[states[i]][0],
      sb: COL[states[i]][1],
      on: i === sel ? 'true' : 'false',
      outline: i === sel ? '2px solid #13707B' : 'none',
      pick: () => {
        setSel(i);
        setError('');
        setNote('');
      },
    })),
    cur: cur && {
      what: what(cur),
      from: cur.leaderName,
      tpl: `${cur.eventTitle} · ${PALETTE[cur.color].label} · ${TRACK_INFO[cur.track].name}`,
      stamp: cur.stamp,
      due: daysLeft(cur.startsAt),
      placeLine: (
        <span style={{ fontSize: 13, color: '#3E5456', display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          {cur.place.type === 'none' ? 'بدون مكان' : `${cur.place.type === 'online' ? 'عن بعد' : 'المكان'}: ${cur.place.name ?? '—'}`}
          {cur.place.url && (
            <a href={cur.place.url} target="_blank" rel="noopener noreferrer" dir="ltr" style={{ fontSize: 12 }}>
              {cur.place.url}
            </a>
          )}
          {cur.place.url && <span>· {cur.showQr ? 'يحمل باركود لهذا الرابط' : 'بدون باركود'}</span>}
          {cur.kind === 'general' && <span style={{ flexBasis: '100%' }}>رابط واحد يرسله القائد للجميع، ويسجّل كل شخص اسمه قبل فتح الدعوة</span>}
        </span>
      ),
    },
    names: cur
      ? cur.people.map((p) => {
          const isOff = !!off[p.id];
          return {
            name: p.name,
            org: [p.title, p.org].filter(Boolean).join(' · '),
            on: isOff ? 'false' : 'true',
            box: isOff ? 'transparent' : '#13707B',
            op: isOff ? 0.45 : 1,
            flip: () => setOff((o) => ({ ...o, [p.id]: !isOff })),
          };
        })
      : [],
    note,
    onNote: (e: React.ChangeEvent<HTMLTextAreaElement>) => setNote(e.target.value),
    busy,
    error,
    decided: !!cur && states[sel] !== 'بانتظار',
    approveLabel: !cur ? '' : states[sel] === 'معتمدة' ? 'اعتُمدت وأُبلغ القائد' : cur.kind === 'general' ? 'اعتماد الرابط العام' : `اعتماد ${ar(kept)} ${kept === 1 ? 'اسم' : 'أسماء'}`,
    approve: () => decide('approve'),
    revise: () => decide('changes_requested'),
    empty: (
      <section className="glass s2" style={{ gridColumn: 'span 2', borderRadius: 30, padding: 32, display: 'grid', placeItems: 'center', textAlign: 'center', gap: 8, minHeight: 220 }}>
        <b style={{ fontSize: 18, color: '#0B3B41' }}>لا توجد طلبات بانتظارك</b>
        <span style={{ fontSize: 14, color: '#4F6567' }}>تظهر هنا طلبات القادة (قوائم أسماء أو روابط عامة) قبل إنشاء دعواتهم. طلبات دخول القادة الجدد في «الإعدادات»</span>
      </section>
    ),
  };

  return <DashboardDarkView v={v} />;
}
