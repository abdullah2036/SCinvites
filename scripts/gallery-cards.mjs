// One-off: turns the Templates board's fifteen mock cards into one data-driven card using LiveCover.
import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'components/boards/TemplatesView.tsx';
let src = readFileSync(FILE, 'utf8');

function balancedDiv(s, start) {
  const re = /<div\b[^>]*?(\/?)>|<\/div>/g;
  re.lastIndex = start;
  let depth = 0;
  for (let m; (m = re.exec(s)); ) {
    if (m[0].startsWith('</div')) depth--;
    else if (m[1] !== '/') depth++;
    if (depth === 0) return [start, re.lastIndex];
  }
  throw new Error('unbalanced');
}
const blockOf = (i) => {
  const open = `{v.tp${i} ? (`;
  const a = src.indexOf(open);
  if (a < 0) return null;
  const indent = src.slice(src.lastIndexOf('\n', a) + 1, a);
  const end = src.indexOf(`\n${indent}) : null}`, a) + `\n${indent}) : null}`.length;
  return [a, end];
};

const [a1, e1] = blockOf(1);
let card = src.slice(a1, e1);
card = card.slice(card.indexOf('<a href='), card.lastIndexOf('</a>') + 4);
{
  const sceneStart = card.indexOf('<div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>');
  const [s0, s1] = balancedDiv(card, sceneStart);
  card = card.slice(0, s0) + '<LiveCover track={c.track} artworkUrl={c.artworkUrl} />' + card.slice(s1);
}
card = card.replace(/(<div style=\{S\(\{ position: "relative", height: "250px",[^]*?justifyContent: "flex-end"), [^]*?\}\)\}>/, '$1, ...css(c.vars) })}>');
const swap = (from, to) => {
  if (!card.includes(`\n${from}\n`)) throw new Error('card text missing: ' + from);
  card = card.replace(`\n${from}\n`, `\n${to}\n`);
};
swap('لقاء أعضاء نادي العلوم', '{c.subtitle}');
swap('لقاء الأعضاء', '{c.title}');
swap('النادي · VIP', '{c.line}');
swap('بترولي', '{c.colors}');
card = card.replace('<a href={`${v.base}/templates/new`}', '<a key={c.id} href={c.href}');

let last = 0;
for (let i = 0; blockOf(i); i++) last = i;
const first = blockOf(0)[0];
const end = blockOf(last)[1];
src = src.slice(0, first) + `{(v.cards ?? []).map((c: any) => (\n          ${card}\n        ))}\n        {v.empty}` + src.slice(end);
src = src.replace("import { css, S } from '@/components/boards/css';", "import { css, S } from '@/components/boards/css';\nimport LiveCover from '@/components/invitation/LiveCover';");
writeFileSync(FILE, src);
console.log('gallery now data-driven');
