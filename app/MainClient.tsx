'use client';

import { useState } from 'react';
import MainView from '@/components/boards/MainView';


async function postJson(url: string, body: unknown) {
  const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).catch(() => null);
  const data = await res?.json().catch(() => null);
  if (!res?.ok) throw new Error(data?.error?.message ?? 'تعذر الاتصال، حاول مرة أخرى');
  return data;
}

export default function MainClient() {
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
      (!m ? 'نوافق على بريدك مرة وحدة، وبعدها تدخل بدون كلمة سر' : uni ? 'بريد جامعي صحيح' : ok ? 'البريد الجامعي يبدأ بـ s4 ثم رقمك الجامعي' : 'اكتب بريدك الجامعي كاملًا'),
    goOp: ready ? 1 : 0.55,
    busy,
    ask,
    stepMail: step === 'mail',
    stepWait: step === 'wait',
    waitTitle: status === 'approved' ? 'بريدك معتمد' : status === 'revoked' ? 'تم إيقاف هذا الحساب' : 'وصل طلبك',
    waitText:
      status === 'approved'
        ? 'اطلب رابط الدخول من صاحبة المنصة، يصلك على الواتساب ويفتح البوابة على جوالك'
        : status === 'revoked'
          ? 'تواصل مع صاحبة المنصة إذا كان هذا خطأ'
          : 'أول ما تعتمد صاحبة المنصة بريدك، ادخل من هنا ببريدك الجامعي فقط بدون كلمة سر',
    gate,
    openGate: () => setGate(true),
    closeGate: () => {
      setGate(false);
      setPass('');
      setPassError('');
    },
    pass,
    onPass: (e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value),
    passKey: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') login();
    },
    passOp: pass.length >= 4 ? 1 : 0.5,
    passBusy,
    passError,
    login,
  };

  return <MainView v={v} />;
}
