export type ParsedPerson = { name: string; org: string | null; title: string | null };

const SEP = /\s*[—–|\t,،]\s*/;
/** Direction marks, zero-width characters and BOMs that ride along when text is copied from WhatsApp or Word. */
export const INVISIBLE = /[​-‏‪-‮⁦-⁩﻿]/g;
export const cleanText = (s: string | undefined) => (s ?? '').replace(INVISIBLE, '').replace(/\s+/g, ' ').trim();

/**
 * One person per non-empty line: "name — org — title" (also comma, Arabic comma, | or tab).
 * Duplicated names and lines with more than three fields are reported, never silently dropped.
 */
export function parseNames(text: string): { people: ParsedPerson[]; duplicates: string[]; overflow: string[] } {
  const people: ParsedPerson[] = [];
  const seen = new Set<string>();
  const duplicates: string[] = [];
  const overflow: string[] = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(INVISIBLE, '');
    const parts = line.split(SEP).map(cleanText).filter(Boolean);
    if (!parts.length) continue;
    if (parts.length > 3) overflow.push(cleanText(line));
    const [name, org, title] = parts;
    people.push({ name, org: org ?? null, title: title ?? null });
    if (seen.has(name) && !duplicates.includes(name)) duplicates.push(name);
    seen.add(name);
  }
  return { people, duplicates, overflow };
}
