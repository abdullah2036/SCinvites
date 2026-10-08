'use client';

import { useCallback, useEffect, useState } from 'react';
import MainView from '@/components/boards/MainView';
import { timeoutSignal } from '@/lib/shared/timeout';

// The leader's email is remembered on this device so signing in later is one tap.
const EMAIL_KEY = 'sc_leader_email';
const CHECK_EVERY_MS = 30_000;

async function postJson(url: string, body: unknown) {
  const res = await fetch(url, { signal: timeoutSignal(), method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).catch(() => null);
  const data = await res?.json().catch(() => null);
  if (!res?.ok) throw new Error(data?.error?.message ?? 'تعذر الاتصال، حاول مرة أخرى');
  return data;
}

export default function MainClient({ ownerHref = null }: { ownerHref?: string | null }) {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [step, setStep] = useState<'mail' | 'wait'>('mail');
  const [status, setStatus] = useState<'pending' | 'approved' | 'revoked'>('pending');
  const [serverMsg, setServerMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const [gate, setGate] = useState(false);
  const [pass, setPass] = useState('');
  const [passBusy, setPassBusy] = useState(false);
  const [passError, setPassError] = useState('');
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(EMAIL_KEY);
      if (saved) setMail((cur) => cur || saved); // eslint-disable-line react-hooks/set-state-in-effect -- never overwrite what the user started typing
    } catch {
      /* storage unavailable: the field just starts empty */
    }
  }, []);

  const m = mail.trim();
  // The university format; the server also accepts leaders already approved and the review addresses.
  const uni = /^s4\d+@uqu\.edu\.sa$/i.test(m);
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m);
  // An approved email signs in on its own; the name is only needed for a first request (the server says so).
  const ready = ok;

  async function ask() {
    if (!ready || busy) return;
    setBusy(true);
    setServerMsg('');
    try {
      const r = await postJson('/api/leaders/request', { name, email: m });
      try {
        localStorage.setItem(EMAIL_KEY, m);
      } catch {
        /* not remembered on this device */
      }
      if (r.redirect) {
        location.assign(r.redirect);
        return;
      }
      setStatus(r.status);
      setStep('wait');
    } catch (e) {
      setServerMsg((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  // While waiting for approval: check now and then (and on demand); once approved the server signs the leader in.
  const check = useCallback(async () => {
    setChecking(true);
    try {
      const r = await postJson('/api/leaders/request', { email: m });
      if (r.redirect) location.assign(r.redirect);
      else setStatus(r.status);
    } catch {
      /* try again on the next check */
    } finally {
      setChecking(false);
    }
  }, [m]);

  useEffect(() => {
    if (step !== 'wait' || status !== 'pending') return;
    const timer = setInterval(() => document.visibilityState === 'visible' && check(), CHECK_EVERY_MS);
    return () => clearInterval(timer);
  }, [step, status, check]);

  async function login() {
    if (pass.length < 4 || passBusy) return;
    setPassBusy(true);
    setPassError('');
    try {
      const r = await postJson('/api/owner/login', { password: pass });
      location.assign(r.redirect);
    } catch (e) {
      setPassError((e as Error).message);
      setPassBusy(false);
    }
  }

  const v = {
    name,
    onName: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    mail,
    onMail: (e: React.ChangeEvent<HTMLInputElement>) => {
      setMail(e.target.value);
      setServerMsg(''); // a corrected address shouldn't keep showing the last error
    },
    border: !m ? 'rgba(255,255,255,.95)' : uni ? '#13707B' : ok ? 'rgba(255,255,255,.95)' : '#B5533F',
    msgColor: serverMsg ? '#B5533F' : uni ? '#13707B' : m && !ok ? '#B5533F' : '#4F6567',
    msg:
      serverMsg ||
      (!m ? 'أول مرة؟ اكتب اسمك وبريدك. بعد موافقة صاحبة المنصة تدخل من هنا ببريدك فقط' : uni ? 'بريد جامعي صحيح' : ok ? 'البريد الجامعي يبدأ بـ s4 ثم رقمك الجامعي' : 'اكتب بريدك الجامعي كاملًا'),
    goOp: ready ? 1 : 0.55,
    busy,
    ask,
    stepMail: step === 'mail',
    stepWait: step === 'wait',
    goLabel: 'دخول',
    enterKey: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') void ask();
    },
    waitTitle: status === 'revoked' ? 'تم إيقاف هذا الحساب' : 'وصل طلبك',
    waitText:
      status === 'revoked'
        ? 'تواصل مع صاحبة المنصة إذا كان هذا خطأ'
        : 'بانتظار موافقة صاحبة المنصة. اترك الصفحة مفتوحة وتدخل تلقائيًا أول ما توافق، أو ارجع لاحقًا لهذه الصفحة واضغط «دخول» ببريدك نفسه',
    waitActions: (
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        {status === 'pending' && (
          <button type="button" onClick={() => void check()} disabled={checking} style={{ height: 44, padding: '0 20px', borderRadius: 999, border: 0, background: 'linear-gradient(160deg,#13707B,#0B3B41)', color: '#fff', fontWeight: 700, cursor: 'pointer', opacity: checking ? 0.6 : 1 }}>
            {checking ? 'نتحقق…' : 'تحقق الآن'}
          </button>
        )}
        <button type="button" onClick={() => setStep('mail')} style={{ height: 44, padding: '0 20px', borderRadius: 999, border: '1px solid rgba(19,112,123,.3)', background: 'transparent', color: '#0B3B41', cursor: 'pointer' }}>
          رجوع
        </button>
      </div>
    ),
    gate,
    openGate: () => (ownerHref ? location.assign(ownerHref) : setGate(true)),
    closeGate: () => {
      setGate(false);
      setPass('');
      setPassError('');
    },
    pass,
    onPass: (e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value),
    // A real form submit lets Chrome and Safari offer to save the password.
    submitLogin: (e: React.FormEvent) => {
      e.preventDefault();
      login();
    },
    passOp: pass.length >= 4 ? 1 : 0.5,
    passBusy,
    passError,
    login,
  };

  return <MainView v={v} />;
}
