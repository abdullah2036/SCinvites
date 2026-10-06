export function makeRequest(
  method: string,
  url: string,
  opts: { body?: unknown; cookies?: Record<string, string>; ip?: string; origin?: string | null; headers?: Record<string, string> } = {},
): Request {
  const headers = new Headers(opts.headers);
  const base = process.env.APP_URL ?? 'http://localhost:3000';
  if (opts.origin !== null) headers.set('origin', opts.origin ?? new URL(base).origin);
  if (opts.ip) headers.set('x-forwarded-for', `${opts.ip}, 10.0.0.1`);
  if (opts.cookies) headers.set('cookie', Object.entries(opts.cookies).map(([k, v]) => `${k}=${v}`).join('; '));
  if (!headers.has('user-agent')) headers.set('user-agent', 'vitest');
  let body: BodyInit | undefined;
  if (opts.body instanceof FormData) body = opts.body;
  else if (opts.body !== undefined) {
    body = JSON.stringify(opts.body);
    headers.set('content-type', 'application/json');
  }
  return new Request(new URL(url, base), { method, headers, body });
}

/** Parses Set-Cookie headers into name → { value, attrs }. */
export function readSetCookies(res: Response): Record<string, { value: string; attrs: string }> {
  const out: Record<string, { value: string; attrs: string }> = {};
  for (const line of res.headers.getSetCookie()) {
    const [pair, ...rest] = line.split(';');
    const i = pair.indexOf('=');
    out[pair.slice(0, i).trim()] = { value: pair.slice(i + 1), attrs: rest.join(';') };
  }
  return out;
}
