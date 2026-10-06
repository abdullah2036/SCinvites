import type { CSSProperties } from 'react';

/** Parses a CSS declaration string ("--c1: #fff; background: …") into a React style object. */
export function css(decls: string | undefined | null): CSSProperties {
  const out: Record<string, string> = {};
  if (!decls) return out;
  let depth = 0;
  let cur = '';
  const parts: string[] = [];
  for (const ch of decls) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) {
      parts.push(cur);
      cur = '';
    } else cur += ch;
  }
  parts.push(cur);
  for (const p of parts) {
    const i = p.indexOf(':');
    if (i < 0) continue;
    const prop = p.slice(0, i).trim();
    const val = p.slice(i + 1).trim();
    const key = prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = val;
  }
  return out as CSSProperties;
}

/** Typed identity for generated inline styles that include CSS custom properties. */
export const S = (o: Record<string, unknown>): CSSProperties => o as CSSProperties;
