import { describe, it, expect } from 'vitest';
import { eventPhase } from '@/lib/shared/event-phase';

describe('eventPhase', () => {
  const at = Date.parse('2026-10-12T16:00:00Z');
  const e = { status: 'active' as const, startsAt: '2026-10-12T16:00:00Z', endsAt: null };
  it('labels upcoming, live and ended events', () => {
    expect(eventPhase(e, at - 1)).toBe('قادم');
    expect(eventPhase(e, at + 3600_000)).toBe('فعّال');
    expect(eventPhase(e, at + 7 * 3600_000)).toBe('منتهي');
    expect(eventPhase({ ...e, endsAt: '2026-10-14T16:00:00Z' }, at + 24 * 3600_000)).toBe('فعّال');
  });
  it('labels drafts and archived events regardless of time', () => {
    expect(eventPhase({ ...e, status: 'draft' }, at)).toBe('مسودة');
    expect(eventPhase({ ...e, status: 'archived' }, at)).toBe('مؤرشفة');
  });
});
