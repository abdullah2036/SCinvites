'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardDarkView from '@/components/boards/DashboardDarkView';
import { PALETTE, TRACK_INFO } from '@/components/invitation/palette';
import type { PendingRequest } from '@/lib/server/requests';

type State = 'بانتظار' | 'معتمدة' | 'تعديل';
const COL: Record<State, [string, string]> = {
  'معتمدة': ['#13707B', 'rgba(19,112,123,.12)'],
  'تعديل': ['#8E6C1F', 'rgba(201,154,46,.15)'],
  'بانتظار': ['#5E594F', 'rgba(125,119,105,.13)'],
};
const ar = (n: number) => n.toLocaleString('ar-SA');

function daysLeft(iso: string) {
  const d = Math.ceil((new Date(iso).getTime() - Date.now()) / 86400_000);
  if (d <= 0) return 'الفعالية اليوم أو مضت';
  if (d === 1) return 'الفعالية غدًا';
  if (d === 2) return 'الفعالية بعد يومين';
  return `الفعالية بعد ${ar(d)} ${d <= 10 ? 'أيام' : 'يومًا'}`;
}

export default function ApprovalsClient({ requests: initial }: { requests: PendingRequest[]; now?: number }) {
  // Local copy: router.refresh() (for the sidebar badge) must not drop decided requests from this screen.
  const [requests] = useState(initial);
  const router = useRouter();
  const [sel, setSel] = useState(0);
  const [states, setStates] = useState<State[]>(() => requests.map(() => 'بانتظار'));
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
    const res = await fetch(`/api/requests/${cur.id}/decide`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).catch(() => null);
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
      what: `دعوات ${r.stamp} · ${ar(r.people.length)} ${r.people.length === 1 ? 'مدعو' : 'مدعوين'}`,
      from: `${r.committee} · ${r.leaderName}`,
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
      what: `دعوات ${cur.stamp} · ${ar(cur.people.length)} ${cur.people.length === 1 ? 'مدعو' : 'مدعوين'}`,
      from: `${cur.committee} · ${cur.leaderName}`,
      tpl: `${cur.eventTitle} · ${PALETTE[cur.color].label} · ${TRACK_INFO[cur.track].name}`,
      stamp: cur.stamp,
      due: daysLeft(cur.startsAt),
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
    approveLabel: !cur ? '' : states[sel] === 'معتمدة' ? 'اعتُمدت وأُبلغ القائد' : `اعتماد ${ar(kept)} ${kept === 1 ? 'اسم' : 'أسماء'}`,
    approve: () => decide('approve'),
    revise: () => decide('changes_requested'),
    empty: (
      <section className="glass s2" style={{ gridColumn: 'span 2', borderRadius: 30, padding: 32, display: 'grid', placeItems: 'center', textAlign: 'center', gap: 8, minHeight: 220 }}>
        <b style={{ fontSize: 18, color: '#0B3B41' }}>لا توجد طلبات بانتظارك</b>
        <span style={{ fontSize: 14, color: '#4F6567' }}>تظهر هنا طلبات القادة قبل إرسال أي دعوة</span>
      </section>
    ),
  };

  return <DashboardDarkView v={v} />;
}
