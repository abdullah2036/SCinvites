'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/** Any page that fails to load shows this instead of a blank or frozen screen; «إعادة المحاولة» re-fetches it. */
export default function PageError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <main style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', padding: 16, background: 'var(--page-bg, #EAF3F0)', fontFamily: 'TS, sans-serif' }}>
      <div className="glass" role="alert" style={{ width: 'min(420px, 100%)', borderRadius: 28, padding: 26, display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'center', color: '#0B3B41' }}>
        <b style={{ fontSize: 20 }}>تعذر تحميل الصفحة</b>
        <span style={{ fontSize: 14, color: '#4F6567', lineHeight: 1.7 }}>قد يكون الاتصال ضعيفًا أو الخادم مشغولًا للحظة. حاول مرة أخرى.</span>
        <button type="button" onClick={() => retry()} style={{ height: 48, borderRadius: 999, border: 0, background: 'linear-gradient(160deg,#13707B,#0B3B41)', color: '#fff', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
          إعادة المحاولة
        </button>
        <Link href="/" style={{ fontSize: 14, color: '#13707B' }}>
          الصفحة الرئيسية
        </Link>
      </div>
    </main>
  );
}
