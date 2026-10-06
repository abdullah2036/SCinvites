import { describe, it, expect } from 'vitest';
import { parseNames } from '@/lib/shared/names';

describe('parseNames', () => {
  it('handles CRLF, blank lines, Arabic commas, extra spaces and duplicates', () => {
    const r = parseNames('أحمد علي، وكالة الفضاء\r\n\r\n  سارة  محمد ,جامعة, د.\nأحمد علي');
    expect(r.people).toEqual([
      { name: 'أحمد علي', org: 'وكالة الفضاء', title: null },
      { name: 'سارة محمد', org: 'جامعة', title: 'د.' },
      { name: 'أحمد علي', org: null, title: null },
    ]);
    expect(r.duplicates).toEqual(['أحمد علي']);
  });

  it('accepts the design’s em-dash format', () => {
    const r = parseNames('د. محمد أحمد — وكالة الفضاء السعودية — الرئيس التنفيذي\nأ. نورة القحطاني — مدينة الملك عبدالعزيز للعلوم والتقنية');
    expect(r.people[0]).toEqual({ name: 'د. محمد أحمد', org: 'وكالة الفضاء السعودية', title: 'الرئيس التنفيذي' });
    expect(r.people[1]).toEqual({ name: 'أ. نورة القحطاني', org: 'مدينة الملك عبدالعزيز للعلوم والتقنية', title: null });
  });

  it('keeps hyphenated names intact and ignores empty fields', () => {
    const r = parseNames('عبدالله آل-سعود ،  ، \t');
    expect(r.people).toEqual([{ name: 'عبدالله آل-سعود', org: null, title: null }]);
  });

  it('returns nothing for whitespace-only input', () => {
    expect(parseNames(' \n\r\n  ')).toEqual({ people: [], duplicates: [], overflow: [] });
  });
});
