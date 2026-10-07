'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Re-fetches the page's server data every `seconds` while the tab is visible, and right away when the
 * user comes back to the tab — so new requests and approvals show up without a manual refresh.
 * Client state (open forms, typed text) survives a router.refresh().
 */
export default function AutoRefresh({ seconds = 30 }: { seconds?: number }) {
  const router = useRouter();
  useEffect(() => {
    let last = Date.now();
    const refresh = () => {
      if (document.visibilityState !== 'visible') return;
      last = Date.now();
      router.refresh();
    };
    const timer = setInterval(refresh, seconds * 1000);
    const onVisible = () => Date.now() - last > 5000 && refresh();
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onVisible);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('focus', onVisible);
    };
  }, [router, seconds]);
  return null;
}
