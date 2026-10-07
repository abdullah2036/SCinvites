import { sql } from './db';
import { AppError } from '@/lib/shared/types';

/**
 * Abuse limits. In Saudi Arabia many real people share one public IP (carrier CGNAT, campus Wi-Fi), so per-IP
 * limits only stop floods — they must never bite a classroom opening the same link at the same moment.
 * Per-person limits (registration cookie, email) do the fine-grained work.
 */
export const LIMITS = {
  guestOpenPerIpPerMinute: 600,
  guestRsvpPerPersonPerMinute: 20,
  // the waiting screen checks every 30 s, and many leaders can be waiting behind one campus IP
  leaderCheckPerIpPerHour: 3000,
  leaderSignInPerEmailPerHour: 30,
  leaderNewPerIpPerHour: 100,
  leaderNewPerEmailPerDay: 3,
} as const;

export async function hitRateLimit(key: string, windowSeconds: number, max: number): Promise<void> {
  const [{ ok }] = await sql<{ ok: boolean }[]>`select rate_limit_hit(${key}, ${windowSeconds}, ${max}) as ok`;
  if (!ok) throw new AppError('rate_limited', 429, 'محاولات كثيرة، حاول بعد قليل');
}
