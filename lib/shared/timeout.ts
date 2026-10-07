/**
 * Abort signal for browser requests: a stuck server shows an error after `ms` instead of a button spinning forever.
 * AbortSignal.timeout is missing on older iPhones (iOS 15), hence the fallback.
 */
export function timeoutSignal(ms = 20_000): AbortSignal | undefined {
  if (typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal) return AbortSignal.timeout(ms);
  if (typeof AbortController === 'undefined') return undefined;
  const c = new AbortController();
  setTimeout(() => c.abort(), ms);
  return c.signal;
}
