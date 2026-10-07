'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SettingsView from '@/components/boards/SettingsView';
import type { Settings } from '@/lib/server/settings';
import type { LeaderListItem } from '@/lib/server/leader-auth';
import { timeoutSignal } from '@/lib/shared/timeout';

const input: React.CSSProperties = { height: 44, borderRadius: 999, padding: '0 16px', border: '1px solid rgba(255,255,255,.95)', background: 'rgba(255,255,255,.78)', color: '#18292C', fontSize: 14, width: '100%', boxSizing: 'border-box' };
const label: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#3E5456' };
const small: React.CSSProperties = { height: 32, padding: '0 12px', borderRadius: 999, fontSize: 12, cursor: 'pointer' };

async function call(url: string, method: string, body?: unknown) {
  const res = await fetch(url, { signal: timeoutSignal(), method, headers: { 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined }).catch(() => null);
  const data = await res?.json().catch(() => null);
  if (!res?.ok) throw new Error(data?.error?.message ?? 'تعذر الحفظ');
  return data;
}

export default function SettingsClient({ settings: initial, leaders: initialLeaders, emailReady }: { settings: Settings; leaders: LeaderListItem[]; emailReady: boolean }) {
  const router = useRouter();
  const [s, setS] = useState(initial);
  const [form, setForm] = useState({ owner_name: initial.owner_name, owner_title: initial.owner_title, owner_email: initial.owner_email ?? '' });
  const [extra, setExtra] = useState({ retention_days: initial.retention_days, email_sender_name: initial.email_sender_name, email_sender_address: initial.email_sender_address ?? '' });
  const [leaders, setLeaders] = useState(initialLeaders);
  // New access requests arrive via auto-refresh: take the server's list whenever it changes.
  const [seen, setSeen] = useState(initialLeaders);
  if (seen !== initialLeaders) {
    setSeen(initialLeaders);
    setLeaders(initialLeaders);
  }
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ text: string; error?: boolean } | null>(null);

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

  async function leaderAction(l: LeaderListItem, action: 'approve' | 'revoke') {
    setBusy(l.id);
    setMsg(null);
    try {
      await call(`/api/leaders/${l.id}/${action}`, 'POST');
      if (action === 'revoke') setLeaders((all) => all.map((x) => (x.id === l.id ? { ...x, status: 'revoked' } : x)));
      else {
        setLeaders((all) => all.map((x) => (x.id === l.id ? { ...x, status: 'approved' } : x)));
        setMsg({ text: `اعتُمد ${l.name}، يدخل الآن من الصفحة الرئيسية ببريده الجامعي` });
      }
    } catch (e) {
      setMsg({ text: (e as Error).message, error: true });
    } finally {
      setBusy(null);
    }
  }

  const pending = leaders.filter((l) => l.status === 'pending');
  // Approved first, then turned-off accounts (so a mistaken «إيقاف» or «×» can be undone).
  const active = [...leaders.filter((l) => l.status === 'approved'), ...leaders.filter((l) => l.status === 'revoked')];
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
        <span role="status" style={{ fontSize: 12, lineHeight: 1.7, color: emailReady && s.owner_email ? '#13707B' : '#8E6C1F' }}>
          {!emailReady
            ? 'إرسال البريد غير مفعّل بعد على المنصة، فالتنبيهات تظهر هنا فقط حتى يفعّله المطوّر'
            : s.owner_email
              ? `تصل التنبيهات إلى ${s.owner_email}`
              : 'اكتبي بريدك واحفظيه لتصلك التنبيهات'}
        </span>
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
      label: `${l.name} · ${l.email}`,
      busy: busy === l.id,
      ok: () => leaderAction(l, 'approve'),
      no: () => confirm(`رفض طلب ${l.name}؟ لن يستطيع الدخول حتى تعيدي تفعيله`) && leaderAction(l, 'revoke'),
    })),
    joinsEmpty: pending.length ? '' : 'لا توجد طلبات جديدة',
    leaders: active.map((l) => ({
      ini: l.name.replace(/^(د|أ|م)\.?\s*/, '').charAt(0),
      name: l.name,
      role: l.status === 'revoked' ? 'موقوف' : 'قائد',
      mail: l.email,
      actions: (
        <span style={{ display: 'flex', gap: 6 }}>
          {l.status === 'revoked' ? (
            <button type="button" disabled={busy === l.id} onClick={() => leaderAction(l, 'approve')} style={{ ...small, border: 0, background: 'rgba(19,112,123,.12)', color: '#13707B', fontWeight: 700 }}>
              إعادة التفعيل
            </button>
          ) : (
            <button type="button" disabled={busy === l.id} onClick={() => confirm(`إيقاف ${l.name}؟ سيُسجّل خروجه فورًا`) && leaderAction(l, 'revoke')} style={{ ...small, border: '1px solid rgba(155,59,46,.35)', background: 'transparent', color: '#9B3B2E' }}>
              إيقاف
            </button>
          )}
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
      </>
    ),
  };

  return <SettingsView v={v} />;
}
