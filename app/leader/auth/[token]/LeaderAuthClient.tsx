'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LeaderAuthClient({ token }: { token: string }) {
  const router = useRouter();
  const [state, setState] = useState<'idle' | 'busy' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function enter() {
    setState('busy');
    const res = await fetch('/api/leader/auth', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ token }),
    }).catch(() => null);
    if (res?.ok) {
      router.replace('/leader');
      return;
    }
    const body = await res?.json().catch(() => null);
    setMessage(body?.error?.message ?? 'تعذر الاتصال، حاول مرة أخرى');
    setState('error');
  }

  return (
    <main style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', padding: 24 }}>
      <section
        style={{
          width: 'min(420px, 100%)',
          background: 'var(--glass)',
          backdropFilter: 'blur(var(--glass-blur))',
          WebkitBackdropFilter: 'blur(var(--glass-blur))',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-card)',
          boxShadow: 'var(--shadow)',
          padding: 32,
          textAlign: 'center',
        }}
      >
        <Image src="/brand/logo-128.png" alt="شعار ملتقى المستجدين" width={56} height={56} style={{ objectFit: 'contain' }} priority />
        <h1 className="display" style={{ fontSize: 28, margin: '12px 0 6px', color: 'var(--teal-800)' }}>
          دخول القادة
        </h1>
        <p style={{ margin: '0 0 24px', color: 'var(--ink)', opacity: 0.75 }}>اضغط «دخول» لفتح بوابة القادة على هذا الجهاز</p>
        <button
          type="button"
          onClick={enter}
          disabled={state === 'busy'}
          style={{
            width: '100%',
            border: 0,
            borderRadius: 'var(--radius-pill)',
            background: 'var(--gold)',
            color: '#fff',
            fontWeight: 700,
            padding: '14px 20px',
            cursor: 'pointer',
          }}
        >
          {state === 'busy' ? 'جارٍ الدخول' : 'دخول'}
        </button>
        {state === 'error' && (
          <p role="alert" style={{ color: '#9B2C2C', marginTop: 16 }}>
            {message}
          </p>
        )}
        <p style={{ fontSize: 12, opacity: 0.6, marginTop: 20 }}>لا تشارك هذا الرابط مع أحد</p>
      </section>
    </main>
  );
}
