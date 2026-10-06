export type ParsedPerson = { name: string; org: string | null; title: string | null };

const SEP = /\s*[—–|\t,،]\s*/;
const clean = (s: string | undefined) => (s ?? '').replace(/\s+/g, ' ').trim();

/**
 * One person per non-empty line: "name — org — title" (also comma, Arabic comma, | or tab).
 * Duplicated names are reported, never silently dropped.
 */
export function parseNames(text: string): { people: ParsedPerson[]; duplicates: string[] } {
  const people: ParsedPerson[] = [];
  const seen = new Set<string>();
  const duplicates: string[] = [];
  for (const line of text.split(/\r?\n/)) {
    const parts = line.split(SEP).map(clean).filter(Boolean);
    if (!parts.length) continue;
    const [name, org, title] = parts;
    people.push({ name, org: org ?? null, title: title ?? null });
    if (seen.has(name) && !duplicates.includes(name)) duplicates.push(name);
    seen.add(name);
  }
  return { people, duplicates };
}
