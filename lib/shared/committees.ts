/** Suggested committees, shared by the leader sign-up form and the template setup. */
export const COMMITTEES = ['لجنة العلاقات', 'لجنة الفعاليات', 'قسم الإعلام', 'لجنة البرامج', 'لجنة التطوير', 'اللجنة العلمية', 'اللجنة الرياضية'];

/** Comparison key: ignores a leading «لجنة/قسم/اللجنة», spacing, invisible marks and alef/taa/yaa forms. */
export function committeeKey(s: string): string {
  return s
    .replace(/[​-‏‪-‮⁦-⁩﻿]/g, '')
    .replace(/[إأآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^(ال)?(لجنه|قسم)\s+/, '')
    .trim();
}
