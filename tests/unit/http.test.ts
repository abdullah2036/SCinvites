import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { clientIp, assertSameOrigin, errorResponse, readCookie, handler } from '@/lib/server/http';
import { AppError } from '@/lib/shared/types';
import { makeRequest } from '../setup/request';

describe('http helpers', () => {
  it('picks the first x-forwarded-for entry', () => {
    expect(clientIp(makeRequest('GET', '/', { ip: '1.2.3.4' }))).toBe('1.2.3.4');
    expect(clientIp(new Request('http://x/'))).toBe('0.0.0.0');
  });
  it('rejects missing or foreign origins', () => {
    expect(() => assertSameOrigin(makeRequest('POST', '/', { origin: null }))).toThrow(AppError);
    expect(() => assertSameOrigin(makeRequest('POST', '/', { origin: 'https://evil.example' }))).toThrow(AppError);
    expect(() => assertSameOrigin(makeRequest('POST', '/'))).not.toThrow();
  });
  it('maps AppError to its status and body', async () => {
    const res = errorResponse(new AppError('x', 409, 'م'));
    expect(res.status).toBe(409);
    expect(await res.json()).toEqual({ error: { code: 'x', message: 'م' } });
  });
  it('maps zod errors to 400 invalid_input', async () => {
    const r = z.object({ a: z.string() }).safeParse({});
    const res = errorResponse(r.error);
    expect(res.status).toBe(400);
    expect((await res.json()).error.code).toBe('invalid_input');
  });
  it('maps unknown errors to 500 without leaking details', async () => {
    const orig = console.error;
    console.error = () => {};
    const res = errorResponse(new Error('db password is hunter2'));
    console.error = orig;
    expect(res.status).toBe(500);
    expect(JSON.stringify(await res.json())).not.toContain('hunter2');
  });
  it('reads cookies', () => {
    expect(readCookie(makeRequest('GET', '/', { cookies: { a: '1', sc_owner: 'tok' } }), 'sc_owner')).toBe('tok');
  });
  it('handler enforces origin on non-GET', async () => {
    const h = handler(async () => new Response('ok'));
    expect((await h(makeRequest('POST', '/', { origin: 'https://evil.example' }), {} as any)).status).toBe(403);
    expect((await h(makeRequest('GET', '/', { origin: null }), {} as any)).status).toBe(200);
  });
});
