import { describe, it, expect } from 'vitest';
import { parseNames } from '@/lib/shared/names';
import { riyadhDay } from '@/lib/shared/dates';
import { committeeKey } from '@/lib/shared/committees';
import { InvitationBatchInput } from '@/lib/shared/schemas';

describe('review fixes (pure)', () => {
  it('I8: invisible direction/zero-width marks are stripped and never become a name', () => {
    const r = parseNames('‏\nأحمد علي‏\nأحمد علي\n​سارة‫');
    expect(r.people.map((x) => x.name)).toEqual(['أحمد علي', 'أحمد علي', 'سارة']);
    expect(r.duplicates).toEqual(['أحمد علي']);
  });

  it('I8: lines with more than three fields are reported', () => {
    expect(parseNames('خالد, سارة, منى, ريم').overflow).toEqual(['خالد, سارة, منى, ريم']);
  });

  it('I8: the server rejects names that are only invisible marks', () => {
    const r = InvitationBatchInput.safeParse({ templateId: '00000000-0000-4000-8000-000000000000', color: 'night', stamp: 'VIP', people: [{ name: '‏​' }] });
    expect(r.success).toBe(false);
  });

  it('I9: date inputs show the Riyadh calendar day', () => {
    expect(riyadhDay('2026-10-09T21:00:00.000Z')).toBe('2026-10-10');
    expect(riyadhDay('2026-10-10T20:59:59.000Z')).toBe('2026-10-10');
    expect(riyadhDay(null)).toBe('');
  });

  it('I5: committee keys ignore the لجنة/قسم prefix, spacing and alef/taa forms', () => {
    expect(committeeKey('لجنة  العلاقات ')).toBe(committeeKey('العلاقات'));
    expect(committeeKey('قسم الإعلام')).toBe(committeeKey('الاعلام'));
    expect(committeeKey('لجنة الفعاليات')).not.toBe(committeeKey('لجنة العلاقات'));
  });
});
