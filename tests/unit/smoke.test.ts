import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';

describe('toolchain', () => {
  it('runs in UTC with the Thmanyah fonts present', () => {
    expect(process.env.TZ).toBe('UTC');
    for (const f of ['thmanyahsans-Regular', 'thmanyahsans-Medium', 'thmanyahsans-Bold', 'thmanyahserifdisplay-Bold']) {
      expect(existsSync(path.join(process.cwd(), 'app/fonts', `${f}.woff2`))).toBe(true);
    }
  });
});
