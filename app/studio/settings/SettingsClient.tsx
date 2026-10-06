'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SettingsView from '@/components/boards/SettingsView';
import type { Settings } from '@/lib/server/settings';
import type { LeaderListItem } from '@/lib/server/leader-auth';

const input: React.CSSProperties = { height: 44, borderRadius: 999, padding: '0 16px', border: '1px solid rgba(255,255,255,.95)', background: 'rgba(255,255,255,.78)', color: '#18292C', fontSize: 14, width: '100%', boxSizing: 'border-box' };
const label: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#3E5456' };
const small: React.CSSProperties = { height: 32, padding: '0 12px', borderRadius: 999, fontSize: 12, cursor: 'pointer' };

async function call(url: string, method: string, body?: unknown) {
  const res = await fetch(url, { method, headers: { 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined }).catch(() => null);
  const data = await res?.json().catch(() => null);
  if (!res?.ok) throw new Error(data?.error?.message ?? 'تعذر الحفظ');
  return data;
}

export default function SettingsClient({ settings: initial, leaders: initialLeaders }: { settings: Settings; leaders: LeaderListItem[] }) {
  const router = useRouter();
  const [s, setS] = useState(initial);
  const [form, setForm] = useState({ owner_name: initial.owner_name, owner_title: initial.owner_title, owner_email: initial.owner_email ?? '' });
  const [extra, setExtra] = useState({ retention_days: initial.retention_days, email_sender_name: initial.email_sender_name, email_sender_address: initial.email_sender_address ?? '' });
  const [leaders, setLeaders] = useState(initialLeaders);
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ text: string; error?: boolean } | null>(null);
  const [link, setLink] = useState<{ name: string; url: string } | null>(null);
  const [copied, setCopied] = useState(false);

  async function save(patch: Partial<Settings>, okText = 'حُفظت الإعدادات') {
    setBusy('settings');
    try {
      const next = await call('/api/settings', 'PATCH', patch);
      setS(next);
      setMsg({ text: okText });
      router.refresh();
    } catch (e) {
      setMsg({ text: (e as Error).message, error: true });
    } finally {
      setBusy(null);
    }
  }

  async function leaderAction(l: LeaderListItem, action: 'approve' | 'link' | 'revoke') {
    setBusy(l.id);
    setMsg(null);
    try {
      const r = await call(`/api/leaders/${l.id}/${action}`, 'POST');
      if (action === 'revoke') setLeaders((all) => all.map((x) => (x.id === l.id ? { ...x, status: 'revoked' } : x)));
      else {
        setLeaders((all) => all.map((x) => (x.id === l.id ? { ...x, status: 'approved' } : x)));
        setLink({ name: l.name, url: r.loginUrl });
        setCopied(false);
      }
    } catch (e) {
      setMsg({ text: (e as Error).message, error: true });
    } finally {
      setBusy(null);
    }
  }

  async function changeCommittee(l: LeaderListItem) {
    const committee = prompt(`لجنة ${l.name}`, l.committee)?.trim();
    if (!committee || committee === l.committee) return;
    setBusy(l.id);
    try {
      await call(`/api/leaders/${l.id}`, 'PATCH', { committee });
      setLeaders((all) => all.map((x) => (x.id === l.id ? { ...x, committee } : x)));
      setMsg({ text: 'حُدّثت اللجنة' });
    } catch (e) {
      setMsg({ text: (e as Error).message, error: true });
    } finally {
      setBusy(null);
    }
  }

  const pending = leaders.filter((l) => l.status === 'pending');
  const active = leaders.filter((l) => l.status === 'approved');
  const toggles: [keyof Settings['notifications'], string][] = [
    ['invitationRequests', 'إشعار عند وصول طلب اعتماد'],
    ['leaderRequests', 'إشعار عند طلب قائد للدخول'],
  ];

  const v = {
    profile: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 64, height: 64, flex: '0 0 64px', borderRadius: '50%', background: 'linear-gradient(135deg,#13707B,#6FB7B8)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'TD, serif', fontSize: 26 }}>
            {form.owner_name.trim().charAt(0) || 'ن'}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
            <input aria-label="الاسم" className="field" value={form.owner_name} onChange={(e) => setForm({ ...form, owner_name: e.target.value })} style={input} />
            <input aria-label="الصفة" className="field" value={form.owner_title} onChange={(e) => setForm({ ...form, owner_title: e.target.value })} style={input} />
          </div>
        </div>
        <label style={label}>
          بريدك (للنسخ التجريبية والتنبيهات)
          <input type="email" dir="ltr" className="field" value={form.owner_email} onChange={(e) => setForm({ ...form, owner_email: e.target.value })} placeholder="name@uqu.edu.sa" style={{ ...input, textAlign: 'left' }} />
        </label>
        <button type="button" disabled={busy === 'settings'} onClick={() => save({ ...form, owner_email: form.owner_email.trim() || null })} style={{ ...small, height: 40, border: 0, background: '#0B3B41', color: '#fff', fontWeight: 700 }}>
          حفظ الملف الشخصي
        </button>
      </div>
    ),
    toggles: toggles.map(([key, text]) => {
      const on = s.notifications[key];
      return {
        label: text,
        on: on ? 'true' : 'false',
        track: on ? '#13707B' : 'rgba(19,112,123,.2)',
        knob: on ? '23px' : '3px',
        flip: () => save({ notifications: { ...s.notifications, [key]: !on } }, on ? 'أُوقف الإشعار' : 'فُعّل الإشعار'),
      };
    }),
    extra: (
      <details style={{ borderTop: '1px solid rgba(19,112,123,.12)', paddingTop: 10 }}>
        <summary style={{ cursor: 'pointer', fontSize: 14, color: '#13707B', fontWeight: 700 }}>البيانات والبريد</summary>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
          <label style={label}>
            حذف أسماء وبريد المدعوين بعد الفعالية (أيام)
            <input type="number" min={30} max={365} className="field" value={extra.retention_days} onChange={(e) => setExtra({ ...extra, retention_days: Number(e.target.value) || 90 })} style={input} />
          </label>
          <label style={label}>
            اسم المرسل في البريد
            <input className="field" value={extra.email_sender_name} onChange={(e) => setExtra({ ...extra, email_sender_name: e.target.value })} style={input} />
          </label>
          <label style={label}>
            عنوان المرسل (من نطاق موثّق في Resend)
            <input type="email" dir="ltr" className="field" value={extra.email_sender_address} onChange={(e) => setExtra({ ...extra, email_sender_address: e.target.value })} placeholder="invites@example.org" style={{ ...input, textAlign: 'left' }} />
          </label>
          <button type="button" disabled={busy === 'settings'} onClick={() => save({ ...extra, email_sender_address: extra.email_sender_address.trim() || null })} style={{ ...small, height: 40, border: 0, background: '#0B3B41', color: '#fff', fontWeight: 700 }}>
            حفظ
          </button>
        </div>
      </details>
    ),
    joins: pending.map((l) => ({
      label: `${l.name} · ${l.committee} · ${l.email}`,
      busy: busy === l.id,
      ok: () => leaderAction(l, 'approve'),
      no: () => leaderAction(l, 'revoke'),
    })),
    joinsEmpty: pending.length ? '' : 'لا توجد طلبات جديدة',
    leaders: active.map((l) => ({
      ini: l.name.replace(/^(د|أ|م)\.?\s*/, '').charAt(0),
      name: l.name,
      role: l.committee,
      mail: l.email,
      actions: (
        <span style={{ display: 'flex', gap: 6 }}>
          <button type="button" disabled={busy === l.id} onClick={() => changeCommittee(l)} style={{ ...small, border: '1px solid rgba(19,112,123,.3)', background: 'transparent', color: '#0B3B41' }}>
            اللجنة
          </button>
          <button type="button" disabled={busy === l.id} onClick={() => leaderAction(l, 'link')} style={{ ...small, border: 0, background: 'rgba(19,112,123,.12)', color: '#13707B', fontWeight: 700 }}>
            رابط دخول جديد
          </button>
          <button type="button" disabled={busy === l.id} onClick={() => confirm(`إيقاف ${l.name}؟ سيُسجّل خروجه فورًا`) && leaderAction(l, 'revoke')} style={{ ...small, border: '1px solid rgba(155,59,46,.35)', background: 'transparent', color: '#9B3B2E' }}>
            إيقاف
          </button>
        </span>
      ),
    })),
    overlay: (
      <>
        {msg && (
          <div role={msg.error ? 'alert' : 'status'} className="glass" style={{ position: 'fixed', insetInline: 16, bottom: 90, zIndex: 30, maxWidth: 420, margin: '0 auto', borderRadius: 18, padding: '12px 16px', textAlign: 'center', color: msg.error ? '#9B3B2E' : '#0B3B41' }}>
            {msg.text}
          </div>
        )}
        {link && (
          <div role="dialog" aria-modal="true" aria-label="رابط دخول القائد" style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(7,37,41,.35)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', display: 'grid', placeItems: 'center', padding: 16 }}>
            <div className="glass inA" style={{ width: 'min(460px, 100%)', borderRadius: 28, padding: 24, display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'center' }}>
              <b style={{ fontSize: 18, color: '#0B3B41' }}>رابط دخول {link.name}</b>
              <p style={{ margin: 0, fontSize: 13, color: '#4F6567' }}>صالح لمرة واحدة خلال ٢٤ ساعة، ويفتح بوابة القادة على جواله. لن يظهر الرابط مرة أخرى</p>
              <code dir="ltr" style={{ padding: '10px 12px', borderRadius: 14, background: 'rgba(255,255,255,.8)', fontSize: 12, wordBreak: 'break-all' }}>
                {link.url}
              </code>
              <div style={{ display: 'flex', gap: 8 }}>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`رابط دخولك لمنصة دعوات نادي العلوم: ${link.url}`)}`}
                  target="_blank"
                  rel="noopener"
                  style={{ flex: 1, height: 46, borderRadius: 999, background: '#0B3B41', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontWeight: 700 }}
                >
                  إرسال بالواتساب
                </a>
                <button
                  type="button"
                  onClick={async () => {
                    await navigator.clipboard?.writeText(link.url).catch(() => {});
                    setCopied(true);
                  }}
                  style={{ flex: 1, height: 46, borderRadius: 999, border: '1px solid #0B3B41', background: 'transparent', color: '#0B3B41', fontWeight: 700, cursor: 'pointer' }}
                >
                  {copied ? 'نُسخ' : 'نسخ'}
                </button>
              </div>
              <button type="button" onClick={() => setLink(null)} style={{ border: 0, background: 'transparent', color: '#4F6567', cursor: 'pointer' }}>
                إغلاق
              </button>
            </div>
          </div>
        )}
      </>
    ),
  };

  return <SettingsView v={v} />;
}
