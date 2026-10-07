'use client';

import { useRouter } from 'next/navigation';
import { timeoutSignal } from '@/lib/shared/timeout';

export default function LogoutButton({ endpoint = '/api/owner/logout' }: { endpoint?: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      aria-label="تسجيل الخروج"
      title="تسجيل الخروج"
      onClick={async () => {
        await fetch(endpoint, { signal: timeoutSignal(), method: 'POST' }).catch(() => null);
        router.replace('/');
        router.refresh();
      }}
      style={{ width: 34, height: 34, borderRadius: '50%', border: 0, background: 'transparent', color: '#4F6567', cursor: 'pointer', display: 'grid', placeItems: 'center' }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 17l-5-5 5-5M5 12h11" />
      </svg>
    </button>
  );
}
