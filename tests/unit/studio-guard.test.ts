import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { routeFor } from '@/lib/routing';

function pages(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return statSync(p).isDirectory() ? pages(p) : f === 'page.tsx' ? [p] : [];
  });
}

describe('C1: every studio page checks the owner session itself', () => {
  it('the shared Studio wrapper verifies the session', () => {
    expect(readFileSync('components/shell/Studio.tsx', 'utf8')).toMatch(/await requireOwnerFromCookies\(\)/);
  });
  it.each(pages('app/studio'))('%s is guarded (calls requireOwnerFromCookies or renders <Studio>)', (file) => {
    const src = readFileSync(file, 'utf8');
    expect(/await requireOwnerFromCookies\(\)/.test(src) || /<Studio\b/.test(src)).toBe(true);
  });
});

describe('secret path routing normalizes encoded paths', () => {
  it('hides /studio even when percent-encoded or upper-cased', () => {
    expect(routeFor('/%73tudio', 's3cret')).toEqual({ notFound: true });
    expect(routeFor('/STUDIO/settings', 's3cret')).toEqual({ notFound: true });
    expect(routeFor('/%2Fstudio', 's3cret')).toEqual({ notFound: true });
  });
});
