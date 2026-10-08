'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LeaderView from '@/components/boards/LeaderView';
import AutoRefresh from '@/components/shell/AutoRefresh';
import { PALETTE, TRACK_INFO } from '@/components/invitation/palette';
import { taggedUrl } from '@/lib/shared/source';
import type { LeaderRequestItem, RequestLink } from '@/lib/server/requests';
import type { TemplateOption } from '@/components/create/CreateForm';
import { timeoutSignal } from '@/lib/shared/timeout';
import { copyText } from '@/lib/shared/copy';

const ar = (n: number) => n.toLocaleString('ar-SA');
const day = (iso: string) => new Intl.DateTimeFormat('ar-SA-u-ca-gregory-nu-arab', { timeZone: 'Asia/Riyadh', day: 'numeric', month: 'long' }).format(new Date(iso));
const STATUS: Record<string, [string, string, string]> = {
  pending: ['بانتظار الاعتماد', '#5E594F', 'rgba(125,119,105,.14)'],
  approved: ['معتمدة · جاهزة للإرسال', '#13707B', 'rgba(19,112,123,.12)'],
  changes_requested: ['طلب تعديل', '#8E6C1F', 'rgba(201,154,46,.15)'],
};


export default function LeaderClient({ leader, templates, requests }: { leader: { name: string; email: string }; templates: TemplateOption[]; requests: LeaderRequestItem[] }) {
  const router = useRouter();
  const [links, setLinks] = useState<{ title: string; event: string; general: boolean; items: RequestLink[] } | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [copied, setCopied] = useState<{ key: string; ok: boolean } | null>(null);
  const [error, setError] = useState('');
  const [account, setAccount] = useState(false);
  const [nameDraft, setNameDraft] = useState(leader.name);
  const [accountMsg, setAccountMsg] = useState<{ text: string; error?: boolean } | null>(null);
  const [accountBusy, setAccountBusy] = useState(false);

  async function saveName() {
    setAccountBusy(true);
    setAccountMsg(null);
    const res = await fetch('/api/leader/me', { signal: timeoutSignal(), method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: nameDraft }) }).catch(() => null);
    const data = await res?.json().catch(() => null);
    setAccountBusy(false);
    if (!res?.ok) return setAccountMsg({ text: data?.error?.message ?? 'تعذر الحفظ، حاول مرة أخرى', error: true });
    setNameDraft(data.name);
    setAccountMsg({ text: 'حُفظ الاسم' });
    router.refresh();
  }

  async function signOut() {
    setAccountBusy(true);
    await fetch('/api/leader/logout', { signal: timeoutSignal(), method: 'POST' }).catch(() => null);
    router.replace('/');
    router.refresh();
  }

  async function openLinks(r: LeaderRequestItem) {
    setBusyId(r.id);
    setError('');
    const res = await fetch(`/api/requests/${r.id}/links`, { signal: timeoutSignal() }).catch(() => null);
    setBusyId(null);
    if (!res?.ok) {
      setError('تعذر تحميل الروابط، حاول مرة أخرى');
      return;
    }
    const general = r.kind === 'general';
    setLinks({ title: general ? r.eventTitle : `${r.eventTitle} · ختم ${r.stamp}`, event: r.eventTitle, general, items: await res.json() });
  }

  async function copy(text: string, key: string) {
    setCopied({ key, ok: await copyText(text) });
    setTimeout(() => setCopied((c) => (c?.key === key ? null : c)), 2500);
  }

  // Without a template there is nothing to create yet: say so plainly instead of leaving dead buttons.
  const noTemplatesText = 'لا توجد قوالب معتمدة بعد. عندما تعتمد صاحبة المنصة قالبًا يظهر هنا مباشرة وتقدر تنشئ الدعوات';

  // The design's menu links are in-page anchors (#mine, #templates, #account). On a short page the browser's jump
  // lands at the very bottom; instead scroll only when the section is off-screen, and briefly highlight it.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!a) return;
      if (a.getAttribute('href') === '#account') {
        e.preventDefault();
        setAccount(true);
        return;
      }
      const el = document.getElementById(a.getAttribute('href')!.slice(1));
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
      kind: `${TRACK_INFO[t.track].name}${t.availableFrom || t.availableTo ? ` · متاح ${t.availableFrom ? `من ${day(t.availableFrom)} ` : ''}${t.availableTo ? `إلى ${day(t.availableTo)}` : ''}`.trimEnd() : ''}`,
      pub: day(t.startsAt),
      due: t.deadline ? day(t.deadline) : '—',
      bg: PALETTE[t.allowedColors[0] ?? 'night'].bg,
      href: `/leader/create/${t.id}`,
    })),
    mine: requests.map((r) => {
      const st = STATUS[r.status];
      const general = r.kind === 'general';
      return {
        what: general ? `رابط عام · ختم ${r.stamp}` : `${ar(r.people)} ${r.people === 1 ? 'مدعو' : 'مدعوين'} · ختم ${r.stamp}`,
        note: r.status === 'changes_requested' && r.note ? `${r.eventTitle} · ملاحظة: ${r.note}` : `${r.eventTitle} · ${day(r.createdAt)}`,
        bg: PALETTE[r.color].bg,
        status: st[0],
        sc: st[1],
        sb: st[2],
        ready: r.status === 'approved' || r.status === 'changes_requested',
        busy: busyId === r.id,
        sendLabel: r.status !== 'approved' ? 'تعديل الطلب' : general ? 'الرابط العام' : r.people === 1 ? 'رابط الدعوة' : `روابط ${ar(r.people)} دعوات`,
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
        {account && (
          <div role="dialog" aria-modal="true" aria-label="حسابي" onClick={() => setAccount(false)} style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(7,37,41,.35)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', display: 'grid', placeItems: 'center', padding: 16 }}>
            <div onClick={(e) => e.stopPropagation()} className="glass inA" style={{ width: 'min(420px, 100%)', borderRadius: 28, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <b style={{ fontSize: 18, color: '#0B3B41' }}>حسابي</b>
                <button type="button" onClick={() => setAccount(false)} aria-label="إغلاق" style={{ border: 0, background: 'transparent', fontSize: 22, cursor: 'pointer', color: '#4F6567' }}>
                  ×
                </button>
              </div>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#3E5456' }}>
                اسمك كما يظهر لصاحبة المنصة
                <input className="field" value={nameDraft} onChange={(e) => setNameDraft(e.target.value)} style={{ height: 46, borderRadius: 999, padding: '0 16px', border: '1px solid rgba(255,255,255,.95)', background: 'rgba(255,255,255,.85)', fontSize: 15 }} />
              </label>
              <span style={{ fontSize: 13, color: '#4F6567' }}>
                البريد: <span dir="ltr">{leader.email}</span>
              </span>
              {accountMsg && (
                <span role={accountMsg.error ? 'alert' : 'status'} style={{ fontSize: 13, color: accountMsg.error ? '#9B3B2E' : '#13707B' }}>
                  {accountMsg.text}
                </span>
              )}
              <button type="button" disabled={accountBusy || nameDraft.trim() === leader.name} onClick={() => void saveName()} style={{ height: 46, borderRadius: 999, border: 0, background: 'linear-gradient(160deg,#13707B,#0B3B41)', color: '#fff', fontWeight: 700, cursor: 'pointer', opacity: accountBusy || nameDraft.trim() === leader.name ? 0.55 : 1 }}>
                حفظ الاسم
              </button>
              <button type="button" disabled={accountBusy} onClick={() => void signOut()} style={{ height: 46, borderRadius: 999, border: '1px solid rgba(155,59,46,.35)', background: 'transparent', color: '#9B3B2E', cursor: 'pointer' }}>
                تسجيل الخروج
              </button>
            </div>
          </div>
        )}
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
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: '#4F6567' }}>
                {links.general ? 'رابط واحد للجميع، أرسله في القروبات، ويسجّل كل شخص اسمه قبل فتح الدعوة' : 'كل رابط خاص بشخص واحد، أرسل لكل شخص رابطه فقط'}
              </p>
              {!links.items.length && (
                <p role="status" style={{ margin: 0, padding: '12px 14px', borderRadius: 16, background: 'rgba(255,255,255,.7)', fontSize: 14, color: '#8E6C1F' }}>
                  لا توجد روابط فعّالة في هذا الطلب، ربما ألغتها صاحبة المنصة. تواصل معها أو أرسل طلبًا جديدًا
                </p>
              )}
              {links.items.map((l) => {
                const url = taggedUrl(l.url, 'link');
                const general = l.kind === 'general';
                const message = general ? `دعوة من نادي العلوم لفعالية ${links.event}: ${taggedUrl(l.url, 'whatsapp')}` : `${l.name}، يسعدنا دعوتك من نادي العلوم: ${taggedUrl(l.url, 'whatsapp')}`;
                const state = copied?.key === l.url ? copied : null;
                return (
                  <div key={l.url} style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '12px', borderRadius: 18, background: 'rgba(255,255,255,.75)' }}>
                    <span>
                      <b style={{ fontSize: 14, color: '#0B3B41' }}>{general ? `رابط عام · ختم ${l.stamp}` : l.name}</b>
                      {!general && l.org && <span style={{ fontSize: 12, color: '#4F6567' }}> · {l.org}</span>}
                    </span>
                    {/* The link itself, visible and selectable: long-press to copy where the copy button can't */}
                    <input
                      readOnly
                      value={url}
                      dir="ltr"
                      aria-label={`رابط ${general ? 'الدعوة العامة' : l.name}`}
                      onFocus={(e) => e.currentTarget.select()}
                      style={{ height: 40, borderRadius: 12, border: '1px solid rgba(11,59,65,.18)', background: '#fff', padding: '0 12px', fontSize: 13, color: '#0B3B41', fontFamily: 'ui-monospace, monospace', width: '100%', boxSizing: 'border-box' }}
                    />
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener"
                        style={{ height: 36, padding: '0 14px', display: 'inline-flex', alignItems: 'center', borderRadius: 999, background: '#0B3B41', color: '#fff', textDecoration: 'none', fontSize: 13 }}
                      >
                        واتساب
                      </a>
                      <button type="button" onClick={() => void copy(url, l.url)} style={{ height: 36, padding: '0 14px', borderRadius: 999, border: '1px solid #0B3B41', background: 'transparent', color: '#0B3B41', cursor: 'pointer', fontSize: 13 }}>
                        {state ? (state.ok ? 'نُسخ ✓' : 'تعذر النسخ') : 'نسخ الرابط'}
                      </button>
                      {typeof navigator !== 'undefined' && 'share' in navigator && (
                        <button
                          type="button"
                          onClick={() => void navigator.share({ title: 'دعوة من نادي العلوم', text: message.replace(/https?:\/\/\S+$/, ''), url: taggedUrl(l.url, 'link') }).catch(() => {})}
                          style={{ height: 36, padding: '0 14px', borderRadius: 999, border: '1px solid rgba(11,59,65,.3)', background: 'transparent', color: '#0B3B41', cursor: 'pointer', fontSize: 13 }}
                        >
                          مشاركة
                        </button>
                      )}
                    </div>
                    {state && !state.ok && <span style={{ fontSize: 12, color: '#9B3B2E' }}>المتصفح منع النسخ، اضغط مطولًا على الرابط في الخانة وانسخه</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    ),
  };
  return <LeaderView v={v} />;
}
