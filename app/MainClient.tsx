'use client';

import { useState } from 'react';
import MainView from '@/components/boards/MainView';

import { COMMITTEES } from '@/lib/shared/committees';

async function postJson(url: string, body: unknown) {
  const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).catch(() => null);
  const data = await res?.json().catch(() => null);
  if (!res?.ok) throw new Error(data?.error?.message ?? 'تعذر الاتصال، حاول مرة أخرى');
  return data;
}

export default function MainClient() {
  const [name, setName] = useState('');
  const [committee, setCommittee] = useState('');
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
  const ok = /^[^\s@]+@uqu\.edu\.sa$/i.test(m);
  // An approved email signs in on its own; name and committee are only needed for a first request (the server says so).
  const ready = ok;

  async function ask() {
    if (!ready || busy) return;
    setBusy(true);
    setServerMsg('');
    try {
      const r = await postJson('/api/leaders/request', { name, email: m, committee });
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
    committee,
    onCommittee: (e: React.ChangeEvent<HTMLInputElement>) => setCommittee(e.target.value),
    committees: COMMITTEES,
    mail,
    onMail: (e: React.ChangeEvent<HTMLInputElement>) => setMail(e.target.value),
    border: !m ? 'rgba(255,255,255,.95)' : ok ? '#13707B' : '#B5533F',
    msgColor: serverMsg ? '#B5533F' : ok ? '#13707B' : m ? '#B5533F' : '#4F6567',
    msg: serverMsg || (!m ? 'نوافق على بريدك مرة وحدة، وبعدها تدخل بدون كلمة سر' : ok ? 'بريد جامعي صحيح' : 'استخدم بريدك الجامعي'),
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
