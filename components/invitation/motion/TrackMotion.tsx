'use client';

import { createElement, lazy, Suspense, type ComponentType, type LazyExoticComponent } from 'react';
import { TRACKS, type Track } from '@/lib/shared/types';

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

type Lazy = LazyExoticComponent<ComponentType>;
const build = (pick: (m: TrackModule) => ComponentType) =>
  Object.fromEntries(TRACKS.map((t) => [t, lazy(() => TRACK_MODULES[t]().then((m) => ({ default: pick(m) })))])) as Record<Track, Lazy>;

const SCENES = build((m) => m.Scene);
const LOADERS = build((m) => m.Loader);

/** Colors come from the invitation's --c1/--c2/--sc variables. */
export default function TrackMotion({ track, kind }: { track: Track; kind: 'scene' | 'loader' }) {
  return (
    <div data-track={track} data-kind={kind} style={{ display: 'contents' }}>
      <Suspense fallback={null}>{createElement((kind === 'scene' ? SCENES : LOADERS)[track])}</Suspense>
    </div>
  );
}
