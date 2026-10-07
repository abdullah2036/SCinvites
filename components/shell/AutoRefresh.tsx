'use client';

import { useEffect, useRef, useTransition } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Re-fetches the page's server data every `seconds` while the tab is visible, and right away when the
 * user comes back to the tab — so new requests and approvals show up without a manual refresh.
 * Client state (open forms, typed text) survives a router.refresh(). A refresh never starts while the previous one
 * is still waiting on a slow server, so they can't pile up.
 */
export default function AutoRefresh({ seconds = 30 }: { seconds?: number }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const busy = useRef(false);
  useEffect(() => {
    busy.current = pending;
  }, [pending]);
  useEffect(() => {
    let last = Date.now();
    const refresh = () => {
      if (document.visibilityState !== 'visible' || busy.current) return;
      last = Date.now();
      startTransition(() => router.refresh());
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
