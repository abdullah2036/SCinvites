'use client';

import { useEffect, useState } from 'react';
import type { InvitationMode } from './Invitation';

/** Reduced-motion users get the static invitation; repeating animations pause while the tab is hidden. */
export function useMotionMode(requested: InvitationMode): InvitationMode {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read once after hydration to avoid an SSR mismatch
    setReduced(!!mq?.matches);
    const onVisibility = () => document.documentElement.classList.toggle('paused', document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return reduced ? 'static' : requested;
}
