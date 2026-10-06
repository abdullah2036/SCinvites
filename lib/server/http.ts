import { ZodError } from 'zod';
import { AppError } from '@/lib/shared/types';

export function json(data: unknown, init?: ResponseInit): Response {
  return Response.json(data, init);
}

export function errorResponse(e: unknown): Response {
  if (e instanceof AppError) return json({ error: { code: e.code, message: e.message } }, { status: e.status });
  if (e instanceof ZodError) return json({ error: { code: 'invalid_input', message: 'البيانات المدخلة غير صحيحة' } }, { status: 400 });
  const requestId = crypto.randomUUID();
  console.error(`[${requestId}]`, e);
  return json({ error: { code: 'server_error', message: 'حدث خطأ، حاول مرة أخرى', requestId } }, { status: 500 });
}

export function assertSameOrigin(req: Request): void {
  const origin = req.headers.get('origin');
  const expected = new URL(process.env.APP_URL ?? 'http://localhost:3000').origin;
  if (!origin || origin !== expected) throw new AppError('bad_origin', 403, 'طلب غير مسموح');
}

type Ctx = { params: Promise<Record<string, string>> };

/** Wraps a route handler: same-origin check on non-GET, errors mapped to JSON. */
export function handler<C extends Ctx = Ctx>(fn: (req: Request, ctx: C) => Promise<Response>) {
  return async (req: Request, ctx: C): Promise<Response> => {
    try {
      if (req.method !== 'GET' && req.method !== 'HEAD') assertSameOrigin(req);
      return await fn(req, ctx);
    } catch (e) {
      return errorResponse(e);
    }
  };
}

export function clientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return req.headers.get('x-real-ip')?.trim() || '0.0.0.0';
}

export function readCookie(req: Request, name: string): string | null {
  const header = req.headers.get('cookie');
  if (!header) return null;
  for (const part of header.split(';')) {
    const i = part.indexOf('=');
    if (i > 0 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return null;
}

const secure = () => (process.env.APP_URL ?? '').startsWith('https://') || process.env.NODE_ENV === 'production' || process.env.VITEST === 'true';

export function setCookie(res: Response, name: string, value: string, maxAgeSeconds: number, path = '/'): void {
  const parts = [`${name}=${encodeURIComponent(value)}`, `Path=${path}`, `Max-Age=${maxAgeSeconds}`, 'HttpOnly', 'SameSite=Lax'];
  if (secure()) parts.push('Secure');
  res.headers.append('set-cookie', parts.join('; '));
}

export function clearCookie(res: Response, name: string, path = '/'): void {
  setCookie(res, name, '', 0, path);
}

export async function readJson(req: Request): Promise<unknown> {
  try {
    return await req.json();
  } catch {
    throw new AppError('invalid_input', 400, 'البيانات المدخلة غير صحيحة');
  }
}
