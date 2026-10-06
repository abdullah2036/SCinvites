import { describe, it, expect } from 'vitest';
import { randomSlug, isValidCustomSlug } from '@/lib/shared/slugs';

describe('slugs', () => {
  it('generates 16-char lowercase alphanumeric slugs', () => {
    const seen = new Set<string>();
    for (let i = 0; i < 1000; i++) {
      const s = randomSlug();
      expect(s).toMatch(/^[a-z0-9]{16}$/);
      seen.add(s);
    }
    expect(seen.size).toBe(1000);
  });
  it('validates custom slugs', () => {
    expect(isValidCustomSlug('rr26')).toBe(true);
    expect(isValidCustomSlug('rocket-revolution-26')).toBe(true);
    for (const bad of ['RR26', 'a', 'ab', 'studio', 'api', 'rr 26', 'x'.repeat(33), 'ثورة']) expect(isValidCustomSlug(bad), bad).toBe(false);
  });
});
