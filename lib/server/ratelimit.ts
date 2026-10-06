import { sql } from './db';
import { AppError } from '@/lib/shared/types';

export async function hitRateLimit(key: string, windowSeconds: number, max: number): Promise<void> {
  const [{ ok }] = await sql<{ ok: boolean }[]>`select rate_limit_hit(${key}, ${windowSeconds}, ${max}) as ok`;
  if (!ok) throw new AppError('rate_limited', 429, 'محاولات كثيرة، حاول بعد قليل');
}
