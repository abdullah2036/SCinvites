'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LeaderView from '@/components/boards/LeaderView';
import LogoutButton from '@/components/shell/LogoutButton';
import AutoRefresh from '@/components/shell/AutoRefresh';
import { PALETTE, TRACK_INFO } from '@/components/invitation/palette';
import { taggedUrl } from '@/lib/shared/source';
import type { LeaderRequestItem } from '@/lib/server/requests';
import type { TemplateOption } from '@/components/create/CreateForm';

const ar = (n: number) => n.toLocaleString('ar-SA');
const day = (iso: string) => new Intl.DateTimeFormat('ar-SA-u-ca-gregory-nu-arab', { timeZone: 'Asia/Riyadh', day: 'numeric', month: 'long' }).format(new Date(iso));
const STATUS: Record<string, [string, string, string]> = {
  pending: ['بانتظار الاعتماد', '#5E594F', 'rgba(125,119,105,.14)'],
  approved: ['معتمدة · جاهزة للإرسال', '#13707B', 'rgba(19,112,123,.12)'],
  changes_requested: ['طلب تعديل', '#8E6C1F', 'rgba(201,154,46,.15)'],
};

type Link = { name: string; org: string | null; url: string };

export default function LeaderClient({ leader, templates, requests }: { leader: { name: string }; templates: TemplateOption[]; requests: LeaderRequestItem[] }) {
  const router = useRouter();
  const [links, setLinks] = useState<{ title: string; items: Link[] } | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState('');

  async function openLinks(r: LeaderRequestItem) {
    setBusyId(r.id);
    setError('');
    const res = await fetch(`/api/requests/${r.id}/links`).catch(() => null);
    setBusyId(null);
    if (!res?.ok) {
      setError('تعذر تحميل الروابط، حاول مرة أخرى');
      return;
    }
    setLinks({ title: `${r.eventTitle} · دعوات ${r.stamp}`, items: await res.json() });
  }

  async function copy(text: string, key: string) {
    await navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(key);
    setTimeout(() => setCopied(null), 1600);
  }

  // Without a template there is nothing to create yet: say so plainly instead of leaving dead buttons.
  const noTemplatesText = 'لا توجد قوالب معتمدة بعد. عندما تعتمد صاحبة المنصة قالبًا يظهر هنا مباشرة وتقدر تنشئ الدعوات';

  // The design's menu links are in-page anchors (#mine, #templates, #account). On a short page the browser's jump
  // lands at the very bottom; instead scroll only when the section is off-screen, and briefly highlight it.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
      const el = a && document.getElementById(a.getAttribute('href')!.slice(1));
      if (!el) return;
      e.preventDefault();
      const r = el.getBoundingClientRect();
      if (r.top < 0 || r.top > innerHeight - 80) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.animate?.([{ boxShadow: '0 0 0 3px rgba(201,154,46,.7)' }, { boxShadow: '0 0 0 3px rgba(201,154,46,0)' }], { duration: 1200 });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  const first = leader.name.replace(/^(د|أ|م|كابتن)\.?\s*/, '').trim();
  const v = {
    createHref: templates[0] ? `/leader/create/${templates[0].id}` : '#templates',
    initial: first.charAt(0) || 'ق',
    name: leader.name,
    roleLine: 'قائد',
    greeting: `مرحبًا، ${first.split(' ')[0]}`,
    deadlineNote: templates.length ? 'أرسل طلبك قبل الموعد النهائي لكل قالب' : 'تظهر هنا القوالب بعد أن تعتمدها صاحبة المنصة',
    pubs: templates.map((t) => ({
      event: t.eventSubtitle ?? TRACK_INFO[t.track].name,
      title: t.eventTitle,
      kind: `${t.stampTypes.filter((s) => s !== 'عضو').join(' · ')} · ${TRACK_INFO[t.track].name}`,
      pub: day(t.startsAt),
      due: t.deadline ? day(t.deadline) : '—',
      bg: PALETTE[t.allowedColors[0] ?? 'night'].bg,
      href: `/leader/create/${t.id}`,
    })),
    mine: requests.map((r) => {
      const st = STATUS[r.status];
      return {
        what: `دعوات ${r.stamp} · ${ar(r.people)} ${r.people === 1 ? 'مدعو' : 'مدعوين'}`,
        note: r.status === 'changes_requested' && r.note ? `${r.eventTitle} · ملاحظة: ${r.note}` : `${r.eventTitle} · ${day(r.createdAt)}`,
        bg: PALETTE[r.color].bg,
        status: st[0],
        sc: st[1],
        sb: st[2],
        ready: r.status === 'approved' || r.status === 'changes_requested',
        busy: busyId === r.id,
        sendLabel: r.status === 'approved' ? `روابط ${ar(r.people)} دعوات` : 'تعديل الطلب',
        send: () => (r.status === 'approved' ? openLinks(r) : router.push(`/leader/create/${r.templateId}?edit=${r.id}`)),
      };
    }),
    overlay: (
      <>
        <AutoRefresh />
        {!templates.length && !error && (
          <div role="status" className="glass" style={{ position: 'fixed', insetInline: 16, bottom: 150, zIndex: 30, maxWidth: 460, margin: '0 auto', borderRadius: 18, padding: '12px 16px', color: '#0B3B41', textAlign: 'center', fontSize: 14, lineHeight: 1.7 }}>
            {noTemplatesText}
          </div>
        )}
        <div id="account" style={{ position: 'fixed', insetInlineStart: 16, bottom: 92, zIndex: 25 }}>
          <LogoutButton endpoint="/api/leader/logout" />
        </div>
        {error && (
          <div role="alert" className="glass" style={{ position: 'fixed', insetInline: 16, bottom: 92, zIndex: 30, borderRadius: 18, padding: '12px 16px', color: '#9B3B2E', textAlign: 'center' }}>
            {error}
          </div>
        )}
        {links && (
          <div role="dialog" aria-modal="true" aria-label="روابط الدعوات" style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(7,37,41,.35)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', display: 'grid', placeItems: 'center', padding: 16 }}>
            <div className="glass inA" style={{ width: 'min(520px, 100%)', maxHeight: '86dvh', overflow: 'auto', borderRadius: 28, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <b style={{ fontSize: 17, color: '#0B3B41' }}>{links.title}</b>
                <button type="button" onClick={() => setLinks(null)} aria-label="إغلاق" style={{ border: 0, background: 'transparent', fontSize: 22, cursor: 'pointer', color: '#4F6567' }}>
                  ×
                </button>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: '#4F6567' }}>كل رابط خاص بشخص واحد، أرسله له فقط</p>
              {links.items.map((l) => (
                <div key={l.url} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderRadius: 16, background: 'rgba(255,255,255,.7)' }}>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <b style={{ display: 'block', fontSize: 14 }}>{l.name}</b>
                    <span style={{ fontSize: 12, color: '#4F6567' }}>{l.org}</span>
                  </span>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${l.name}، يسعدنا دعوتك من نادي العلوم: ${taggedUrl(l.url, 'whatsapp')}`)}`}
                    target="_blank"
                    rel="noopener"
                    style={{ height: 34, padding: '0 12px', display: 'inline-flex', alignItems: 'center', borderRadius: 999, background: '#0B3B41', color: '#fff', textDecoration: 'none', fontSize: 13 }}
                  >
                    واتساب
                  </a>
                  <button type="button" onClick={() => copy(taggedUrl(l.url, 'link'), l.url)} style={{ height: 34, padding: '0 12px', borderRadius: 999, border: '1px solid #0B3B41', background: 'transparent', color: '#0B3B41', cursor: 'pointer', fontSize: 13 }}>
                    {copied === l.url ? 'نُسخ' : 'نسخ'}
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => copy(links.items.map((l) => `${l.name}: ${taggedUrl(l.url, 'link')}`).join('\n'), 'all')}
                style={{ height: 46, borderRadius: 999, border: 0, background: '#C99A2E', color: '#0B2B30', fontWeight: 700, cursor: 'pointer' }}
              >
                {copied === 'all' ? 'نُسخت كل الروابط' : 'نسخ كل الروابط'}
              </button>
            </div>
          </div>
        )}
      </>
    ),
  };
  return <LeaderView v={v} />;
}
