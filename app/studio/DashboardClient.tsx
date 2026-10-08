'use client';

import { useEffect, useState } from 'react';
import DashboardView from '@/components/boards/DashboardView';
import TrackMotion from '@/components/invitation/motion/TrackMotion';
import { TRACK_INFO, paletteVars } from '@/components/invitation/palette';
import { css } from '@/components/boards/css';
import { formatDateShort, toArabicDigits } from '@/lib/shared/dates';
import { taggedUrl } from '@/lib/shared/source';
import { TRACKS } from '@/lib/shared/types';
import type { Stats } from '@/lib/server/stats';
import { copyText } from '@/lib/shared/copy';

const STATUS: Record<string, [string, string, string]> = {
  confirmed: ['مؤكَّد', '#13707B', 'rgba(19,112,123,.12)'],
  opened: ['فُتحت', '#2F8C8A', 'rgba(111,183,184,.16)'],
  created: ['أُنشئت', '#8E6C1F', 'rgba(201,154,46,.15)'],
  declined: ['اعتذر', '#5E594F', 'rgba(125,119,105,.14)'],
  revoked: ['ملغاة', '#9B3B2E', 'rgba(155,59,46,.12)'],
};
const TILE: Record<string, string> = { club: '#13707B', space: '#0B3B41', chem: '#2F8C8A', phys: '#6FB7B8', bio: '#4F8F7E', math: '#C99A2E', sport: '#E0B95A' };
const two = (v: number) => toArabicDigits(String(v).padStart(2, '0'));
const ar = (v: number) => Math.round(v).toLocaleString('ar-SA');

export default function DashboardClient({ stats, base, ownerName }: { stats: Stats; base: string; ownerName: string }) {
  const [now, setNow] = useState<number | null>(null);
  const [p, setP] = useState(0);
  const [q, setQ] = useState('');
  const [copied, setCopied] = useState(false);

  const hasNext = !!stats.nextEvent; // a boolean, so auto-refresh (new objects every 30 s) doesn't restart the intro
  useEffect(() => {
    setNow(Date.now()); // eslint-disable-line react-hooks/set-state-in-effect -- start the clock after hydration
    // The countdown redraws the whole board every second: only while there is an upcoming event to count down to.
    const tick = hasNext ? setInterval(() => setNow(Date.now()), 1000) : undefined;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const x = Math.min(1, (t - t0) / 1200);
      setP(1 - Math.pow(1 - x, 3));
      if (x < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      clearInterval(tick);
      cancelAnimationFrame(raf);
    };
  }, [hasNext]);

  const ne = stats.nextEvent;
  const left = ne && now ? Math.max(0, new Date(ne.startsAt).getTime() - now) : 0;
  const s = stats.byStatus;
  const total = stats.total || 1;
  const pct = (n: number) => (n / total) * 100;
  const segs = [s.confirmed, s.opened, s.created, s.declined].map(pct);
  let acc = 0;
  const donut = segs.map((seg) => {
    const d = { dash: `${seg} ${100 - seg}`, offset: `${-acc}` };
    acc += seg;
    return d;
  });
  const maxTrack = Math.max(1, ...TRACKS.map((t) => stats.byTrack[t]));
  const g = stats.generalInvitation;
  const term = q.trim();

  const v = {
    base,
    greeting: `مرحبًا، ${ownerName.split(' ')[0]}`,
    today: now ? formatDateShort(new Date(now)) : '',
    pendingLine: stats.pendingApprovals ? `${ar(stats.pendingApprovals)} ${stats.pendingApprovals === 1 ? 'طلب ينتظر' : 'طلبات تنتظر'} اعتمادك` : 'لا توجد طلبات بانتظارك',
    scopeLine: `${ar(stats.activeTracks)} مسارات · ${ar(stats.semesterEvents)} فعاليات هذا الفصل`,
    nextLine: ne ? `${ne.title} · ${formatDateShort(ne.startsAt)}` : 'لا توجد فعالية قادمة',
    cdD: two(Math.floor(left / 864e5)),
    cdH: two(Math.floor((left % 864e5) / 36e5)),
    cdM: two(Math.floor((left % 36e5) / 6e4)),
    cdS: two(Math.floor((left % 6e4) / 1e3)),
    confirmLine: ne ? `تأكيد الحضور ${ar(ne.confirmed)} من ${ar(ne.total)}` : 'تأكيد الحضور',
    confirmPct: ne && ne.total ? `${Math.round((ne.confirmed / ne.total) * 100)}%` : '0%',
    heroBadge: ne ? `فعّال · مسار ${TRACK_INFO[ne.track].name}` : 'لا توجد فعالية قادمة',
    heroSubtitle: ne?.subtitle ?? '',
    heroTitle: ne?.title ?? 'أضيفي فعالية جديدة',
    heroMedia: ne?.artworkUrl ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={ne.artworkUrl} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '30% 40%', opacity: 0.9 }} />
    ) : ne ? (
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, ...css(paletteVars(ne.color)) }}>
        <TrackMotion track={ne.track} kind="scene" />
      </div>
    ) : null,
    generalLink: g ? g.url.replace(/^https?:\/\//, '') : 'لا توجد دعوة عامة بعد',
    copyGeneral: async () => {
      if (!g) return;
      if (!(await copyText(taggedUrl(g.url, 'link')))) return;
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    },
    copyLabel: copied ? 'نُسخ' : 'نسخ',
    total: ar(stats.total * p),
    donut,
    kpis: [
      { label: 'مؤكَّد الحضور', val: ar(s.confirmed * p), pct: `${pct(s.confirmed)}%`, color: '#13707B' },
      { label: 'نسبة الفتح', val: `${ar(stats.openRate * 100 * p)}٪`, pct: `${stats.openRate * 100}%`, color: '#2F8C8A' },
      { label: 'مسجّلون عبر الدعوة العامة', val: ar(stats.generalRegistrations * p), pct: `${Math.min(100, pct(stats.generalRegistrations))}%`, color: '#8E6C1F' },
      {
        label: 'متوسط وقت الاعتماد',
        val: stats.avgApprovalHours === null ? '—' : `${ar(stats.avgApprovalHours * p)} س`,
        pct: `${Math.min(100, ((stats.avgApprovalHours ?? 0) / 24) * 100)}%`,
        color: '#0B3B41',
      },
    ],
    bars: TRACKS.map((t, i) => ({
      label: ar(stats.byTrack[t]),
      h: `${Math.max(4, (stats.byTrack[t] / maxTrack) * 110)}px`,
      bg: `linear-gradient(180deg,${TILE[t]},${TILE[t]}55)`,
      delay: `${(0.2 + i * 0.12).toFixed(2)}s`,
    })),
    reqs: stats.pendingList.map((r) => ({
      what: `دعوة ${r.stamp} · ${r.eventTitle}`,
      who: `${r.leaderName} · ${r.people ? `${ar(r.people)} ${r.people === 1 ? 'اسم' : 'أسماء'}` : 'رابط عام'}`,
      bg: css(paletteVars('night')).background as string,
    })),
    q,
    onQ: (e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value),
    recent: stats.recent
      .filter((r) => !term || (r.inviteeName ?? '').includes(term) || r.eventTitle.includes(term))
      .map((r) => {
        const st = STATUS[r.status] ?? STATUS.created;
        return {
          name: r.kind === 'general' ? 'أعضاء نادي العلوم' : r.inviteeName,
          org: r.kind === 'general' ? `دعوة عامة · ${ar(r.registrations)} مسجّلًا` : (r.inviteeOrg ?? ''),
          track: TRACK_INFO[r.track].name,
          dot: TILE[r.track],
          by: r.eventTitle,
          status: st[0],
          sc: st[1],
          sb: st[2],
        };
      }),
  };

  return <DashboardView v={v} />;
}
