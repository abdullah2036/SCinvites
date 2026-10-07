'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PLAY_MS = 6000;

/**
 * Dozens of looping decorations (stars, orbits, waves, live covers) kept phones' processors 55–85% busy while a
 * page sat idle, which made taps lag. Outside the guest invitation, each looping animation plays for a few seconds
 * and then holds its current frame; one-off entrance animations are left alone. Loops that start later (a refresh,
 * a changed preview) get their own few seconds. With "reduce motion" switched on, loops hold still right away.
 */
export default function CalmMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.startsWith('/i/')) return;
    const limit = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : PLAY_MS;
    const calm = () => {
      for (const a of document.getAnimations()) {
        if (a.playState !== 'running') continue;
        const t = a.effect?.getComputedTiming();
        const target = (a.effect as KeyframeEffect | null)?.target as Element | null;
        if (target?.closest('[data-keep-motion]')) continue; // progress indicators keep moving
        if (t?.iterations === Infinity && Number(a.currentTime ?? 0) >= limit) a.pause();
      }
    };
    calm();
    const timer = setInterval(calm, 1000);
    return () => clearInterval(timer);
  }, [pathname]);
  return null;
}
