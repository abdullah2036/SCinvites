// Converts a Claude Design board (design-reference/*.dc.html) into a React view component.
// Usage: node scripts/dc2tsx.mjs <Board> [OutName]
//   → components/boards/<OutName ?? Board>View.tsx  (template only; the board's logic class is ported by hand)
// Every inline style, SVG path and animation class is carried over verbatim so the result matches the design.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { parseDocument } from 'htmlparser2';

const BLOBS = {
  '3116591475c08f5af7797bb71147350b': '/brand/logo-128.png',
};

const ATTR_MAP = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength',
  autocomplete: 'autoComplete', spellcheck: 'spellCheck', colspan: 'colSpan', rowspan: 'rowSpan',
  'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', 'xmlns:xlink': 'xmlnsXlink', onInput: 'onChange', oninput: 'onChange',
  onclick: 'onClick', inputmode: 'inputMode', enterkeyhint: 'enterKeyHint', crossorigin: 'crossOrigin',
};
const DROP = (n) => n.startsWith('hint-') || n === 'data-dc-id';
const VOID = new Set(['img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'area', 'col', 'wbr']);
const EXPR = /\{\{\s*([A-Za-z_$][\w$.]*)\s*\}\}/g;

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function attrName(n) {
  if (ATTR_MAP[n]) return ATTR_MAP[n];
  if (n.startsWith('aria-') || n.startsWith('data-')) return n;
  return n.includes('-') || n.includes(':') ? camel(n.replace(':', '-')) : n;
}

function makeScope(scope) {
  return (p) => {
    const root = p.split('.')[0];
    return scope.includes(root) ? p : `v.${p}`;
  };
}

/** A string that may contain {{ path }} → JS expression source. */
function valueExpr(raw, ref) {
  const only = raw.match(/^\s*\{\{\s*([A-Za-z_$][\w$.]*)\s*\}\}\s*$/);
  if (only) return ref(only[1]);
  if (!EXPR.test(raw)) return JSON.stringify(raw);
  EXPR.lastIndex = 0;
  return '`' + raw.replace(/[`\\]/g, '\\$&').replace(/\$\{/g, '\\${').replace(EXPR, (_, p) => '${' + ref(p) + '}') + '`';
}

/** Split CSS declarations on top-level semicolons (respecting parens and quotes). */
function splitDecls(css) {
  const out = [];
  let depth = 0, quote = null, cur = '';
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (quote) { cur += ch; if (ch === quote) quote = null; continue; }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if (ch === '{' && css[i + 1] === '{') { const end = css.indexOf('}}', i); cur += css.slice(i, end + 2); i = end + 1; continue; }
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out.map((d) => d.trim()).filter(Boolean);
}

function styleExpr(css, ref) {
  const parts = [];
  for (const decl of splitDecls(css)) {
    const i = decl.indexOf(':');
    const bare = decl.match(/^\{\{\s*([A-Za-z_$][\w$.]*)\s*\}\}$/);
    if (bare) { parts.push(`...css(${ref(bare[1])})`); continue; }
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    const key = prop.startsWith('--') ? JSON.stringify(prop) : prop.startsWith('-webkit-') ? 'Webkit' + camel(prop.slice(8)).replace(/^./, (c) => c.toUpperCase()) : camel(prop);
    parts.push(`${key}: ${valueExpr(val, ref)}`);
  }
  return `{S({ ${parts.join(', ')} })}`;
}

function text(t, ref) {
  if (!t.trim()) return t.includes('\n') ? '' : t;
  let out = '';
  let last = 0;
  t.replace(EXPR, (m, p, idx) => {
    out += escText(t.slice(last, idx)) + `{${ref(p)}}`;
    last = idx + m.length;
    return m;
  });
  return out + escText(t.slice(last));
}
const escText = (s) => s.replace(/[{}<>]/g, (c) => `{${JSON.stringify(c)}}`);

function emit(node, scope, ind) {
  const ref = makeScope(scope);
  const pad = '  '.repeat(ind);
  if (node.type === 'text') return text(node.data, ref);
  if (node.type === 'comment') return `${pad}{/* ${node.data.trim().replace(/\*\//g, '* /')} */}`;
  if (node.type !== 'tag' && node.type !== 'script' && node.type !== 'style') return '';
  const name = node.name;
  const kids = (sc) => node.children.map((c) => emit(c, sc, ind + 1)).filter((s) => s !== '').join('\n');

  if (name === 'sc-if') {
    return `${pad}{${valueExpr(node.attribs.value, ref)} ? (\n${pad}  <>\n${kids(scope)}\n${pad}  </>\n${pad}) : null}`;
  }
  if (name === 'sc-for') {
    const as = node.attribs.as || 'item';
    return `${pad}{(${valueExpr(node.attribs.list, ref)} ?? []).map((${as}: any, ${as}Index: number) => (\n${pad}  <Fragment key={${as}Index}>\n${kids([...scope, as, `${as}Index`])}\n${pad}  </Fragment>\n${pad}))}`;
  }
  if (name === 'dc-import') return `${pad}{/* dc-import ${node.attribs.name} */}`;
  if (name === 'helmet' || name === 'script' || name === 'style') return '';

  const attrs = [];
  for (const [rawName, rawVal] of Object.entries(node.attribs)) {
    if (DROP(rawName)) continue;
    const n = attrName(rawName);
    if (rawName === 'style') { attrs.push(`style=${styleExpr(rawVal, ref)}`); continue; }
    let val = rawVal;
    if (rawName === 'src') {
      const blob = val.match(/\/_blob\/([0-9a-f]{32})/);
      if (blob) val = BLOBS[blob[1]] ?? '{{ artworkUrl }}';
    }
    if (val === '' && (rawName === 'class' || rawName === 'style')) continue;
    if (val === '' && !['value', 'alt', 'placeholder'].includes(rawName)) { attrs.push(n); continue; }
    const expr = valueExpr(val, ref);
    attrs.push(expr.startsWith('"') ? `${n}=${expr}` : `${n}={${expr}}`);
  }
  const open = `<${name}${attrs.length ? ' ' + attrs.join(' ') : ''}`;
  if (VOID.has(name) || node.children.length === 0) return `${pad}${open} />`;
  return `${pad}${open}>\n${kids(scope)}\n${pad}</${name}>`;
}

const board = process.argv[2];
const outName = process.argv[3] ?? board;
const src = readFileSync(path.join('design-reference', `${board}.dc.html`), 'utf8');
const start = src.indexOf('</helmet>') >= 0 ? src.indexOf('</helmet>') + 9 : src.indexOf('<x-dc>') + 6;
const end = src.indexOf('</x-dc>');
const doc = parseDocument(src.slice(start, end), { lowerCaseTags: false, lowerCaseAttributeNames: false, recognizeSelfClosing: true, decodeEntities: true });
const roots = doc.children.filter((c) => !(c.type === 'text' && !c.data.trim()));
const body = roots.map((r) => emit(r, [], 2)).filter(Boolean).join('\n');

const out = `/* eslint-disable */
// Generated from design-reference/${board}.dc.html by scripts/dc2tsx.mjs, then wired to real data by hand.
import { Fragment } from 'react';
import { css, S } from '@/components/boards/css';

export default function ${outName}View({ v }: { v: any }) {
  return (
    <>
${body}
    </>
  );
}
`;
mkdirSync('components/boards', { recursive: true });
writeFileSync(path.join('components/boards', `${outName}View.tsx`), out);
console.log(`components/boards/${outName}View.tsx (${out.length} bytes)`);
