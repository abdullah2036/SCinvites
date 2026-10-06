const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';
const RESERVED = new Set(['api', 'studio', 'leader', 'i', 'admin', 'dev', 'new']);

/** Crypto-random [a-z0-9] slug without modulo bias. */
export function randomSlug(len = 16): string {
  const out: string[] = [];
  const buf = new Uint8Array(len * 2);
  while (out.length < len) {
    crypto.getRandomValues(buf);
    for (const b of buf) {
      if (b < 252 && out.length < len) out.push(ALPHABET[b % 36]); // 252 = 7 × 36
    }
  }
  return out.join('');
}

export function isValidCustomSlug(s: string): boolean {
  return /^[a-z0-9-]{3,32}$/.test(s) && !RESERVED.has(s);
}
