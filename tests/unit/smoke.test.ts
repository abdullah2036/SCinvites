import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';

describe('toolchain', () => {
  it('runs in UTC', () => {
    expect(process.env.TZ).toBe('UTC');
  });

  // Fonts are not in git (license); CI builds without them.
  it.skipIf(!!process.env.CI)('has the Thmanyah fonts locally', () => {
    for (const f of ['thmanyahsans-Regular', 'thmanyahsans-Medium', 'thmanyahsans-Bold', 'thmanyahserifdisplay-Bold']) {
      expect(existsSync(path.join(process.cwd(), 'public/fonts', `${f}.woff2`))).toBe(true);
    }
  });
});
