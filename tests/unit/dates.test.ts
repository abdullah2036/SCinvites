import { describe, it, expect } from 'vitest';
import { formatDate, formatTime, formatDateShort, toArabicDigits } from '@/lib/shared/dates';

// 12 October 2026 is a Monday («الاثنين»); the design boards' «الأحد ١٢ أكتوبر» is a mock-data slip.
describe('Arabic dates in Riyadh time', () => {
  it('uses the Riyadh day across the UTC midnight boundary', () => {
    expect(formatDate('2026-10-11T20:30:00Z')).toBe('الأحد ١١ أكتوبر ٢٠٢٦'); // 23:30 Riyadh
    expect(formatDate('2026-10-11T21:30:00Z')).toBe('الاثنين ١٢ أكتوبر ٢٠٢٦'); // 00:30 Riyadh
  });
  it('uses the Gregorian calendar, never Hijri', () => {
    const s = formatDate('2026-10-12T15:00:00Z');
    expect(s).toContain('أكتوبر');
    expect(s).not.toMatch(/ربيع|جمادى|هـ/);
  });
  it('formats time and short date', () => {
    expect(formatTime('2026-10-12T15:00:00Z')).toBe('٦:٠٠ م');
    expect(formatDateShort('2026-10-12T15:00:00Z')).toBe('الاثنين ١٢ أكتوبر');
  });
  it('converts digits', () => {
    expect(toArabicDigits(2026)).toBe('٢٠٢٦');
  });
});
