'use client';

/** Last resort when the root layout itself fails: its own document, no app styles. */
export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html dir="rtl" lang="ar">
      <body style={{ margin: 0, minHeight: '100dvh', display: 'grid', placeItems: 'center', background: '#EAF3F0', fontFamily: 'system-ui, sans-serif', color: '#0B3B41' }}>
        <title>تعذر تحميل الصفحة</title>
        <div role="alert" style={{ textAlign: 'center', padding: 24 }}>
          <p style={{ fontSize: 20, fontWeight: 700 }}>تعذر تحميل الصفحة</p>
          <button type="button" onClick={() => retry()} style={{ height: 46, padding: '0 24px', borderRadius: 999, border: 0, background: '#0B3B41', color: '#fff', fontSize: 15, cursor: 'pointer' }}>
            إعادة المحاولة
          </button>
        </div>
      </body>
    </html>
  );
}
