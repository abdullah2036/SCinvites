'use client';

import { lazy, Suspense, useMemo, type ComponentType } from 'react';
import type { Track } from '@/lib/shared/types';

type TrackModule = { Scene: ComponentType; Loader: ComponentType };

/** One code-split module per track, so a guest downloads only the track their invitation uses. */
export const TRACK_MODULES: Record<Track, () => Promise<TrackModule>> = {
  club: () => import('./tracks/club'),
  space: () => import('./tracks/space'),
  chem: () => import('./tracks/chem'),
  phys: () => import('./tracks/phys'),
  bio: () => import('./tracks/bio'),
  math: () => import('./tracks/math'),
  sport: () => import('./tracks/sport'),
};

const cache = new Map<string, ComponentType>();

function component(track: Track, kind: 'scene' | 'loader'): ComponentType {
  const key = `${track}:${kind}`;
  let c = cache.get(key);
  if (!c) {
    c = lazy(() => TRACK_MODULES[track]().then((m) => ({ default: kind === 'scene' ? m.Scene : m.Loader })));
    cache.set(key, c);
  }
  return c;
}

/** Colors come from the invitation's --c1/--c2/--sc variables. */
export default function TrackMotion({ track, kind }: { track: Track; kind: 'scene' | 'loader' }) {
  const C = useMemo(() => component(track, kind), [track, kind]);
  return (
    <div data-track={track} data-kind={kind} style={{ display: 'contents' }}>
      <Suspense fallback={null}>
        <C />
      </Suspense>
    </div>
  );
}
