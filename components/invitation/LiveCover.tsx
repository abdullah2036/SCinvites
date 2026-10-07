'use client';

import { createElement, lazy, Suspense, useEffect, useRef, useState, type ComponentType } from 'react';
import type { Track } from '@/lib/shared/types';

const COVERS: Record<Track, ComponentType> = {
  club: lazy(() => import('./covers/club')),
  space: lazy(() => import('./covers/space')),
  chem: lazy(() => import('./covers/chem')),
  phys: lazy(() => import('./covers/phys')),
  bio: lazy(() => import('./covers/bio')),
  math: lazy(() => import('./covers/math')),
  sport: lazy(() => import('./covers/sport')),
};

/** A card cover for a track (or template artwork). Animations pause while the card is off-screen. */
export default function LiveCover({ track, artworkUrl }: { track: Track; artworkUrl?: string | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '80px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // content-visibility: the browser skips styling and painting covers that are off-screen (long lists on phones).
    <div ref={ref} data-paused={visible ? 'false' : 'true'} style={{ position: 'absolute', inset: 0, contentVisibility: 'auto' }}>
      {artworkUrl ? (
         
        <img src={artworkUrl} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <Suspense fallback={null}>{createElement(COVERS[track])}</Suspense>
      )}
    </div>
  );
}
