// One-off: pulls the per-track card cover scenes out of the Events board view into
// components/invitation/covers/<track>.tsx, and turns the board's seven mock cards into one data-driven card.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const TRACKS = ['club', 'space', 'chem', 'phys', 'bio', 'math', 'sport'];
const FILE = 'components/boards/EventsView.tsx';
let src = readFileSync(FILE, 'utf8');

/** Returns [start, end) of the balanced <div …>…</div> starting at `start`. */
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
  const open = `{v.ev${i} ? (`;
  const a = src.indexOf(open);
  const indent = src.slice(src.lastIndexOf('\n', a) + 1, a);
  const end = src.indexOf(`\n${indent}) : null}`, a) + `\n${indent}) : null}`.length;
  return [a, end, indent];
};

mkdirSync('components/invitation/covers', { recursive: true });
TRACKS.forEach((t, i) => {
  const [a, end] = blockOf(i);
  const block = src.slice(a, end);
  const sceneStart = block.indexOf('<div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>');
  const [s0, s1] = balancedDiv(block, sceneStart);
  const scene = block.slice(s0, s1);
  writeFileSync(
    `components/invitation/covers/${t}.tsx`,
    `// ${t} card cover — moved verbatim from the Events board (design-reference/Events.dc.html).\nimport { S } from '@/components/boards/css';\n\nexport default function Cover() {\n  return (\n    ${scene}\n  );\n}\n`,
  );
});

// Card template from the first card, then replace all seven mock cards with one mapped card.
const [a0, e0] = blockOf(0);
let card = src.slice(a0, e0);
card = card.slice(card.indexOf('<article'), card.lastIndexOf('</article>') + '</article>'.length);
{
  const sceneStart = card.indexOf('<div aria-hidden="true" style={S({ position: "absolute", inset: "0" })}>');
  const [s0, s1] = balancedDiv(card, sceneStart);
  card = card.slice(0, s0) + '<LiveCover track={e.track} />' + card.slice(s1);
}
// cover container: palette vars come from the event's colour
card = card.replace(/(<div style=\{S\(\{ position: "relative", height: "200px",[^]*?justifyContent: "space-between"), [^]*?\}\)\}>/, '$1, ...css(e.vars) })}>');
const swap = (from, to) => {
  if (!card.includes(`\n${from}\n`)) throw new Error('card text missing: ' + from);
  card = card.replace(`\n${from}\n`, `\n${to}\n`);
};
swap('قادم', '{e.status}');
swap('لقاء أعضاء نادي العلوم', '{e.subtitle}');
swap('لقاء الأعضاء', '{e.title}');
swap('النادي', '{e.trackName}');
swap('٢٠ أكتوبر · 12 دعوة', '{e.meta}');
swap('دعوة', '{e.cta}');
card = card.replace('<article className="lift glass"', '<article key={e.id} className="lift glass"').replace('href={`${v.base}/create`}', 'href={e.href}');
const [first] = blockOf(0);
const [, last] = blockOf(TRACKS.length - 1);
src = src.slice(0, first) + `{(v.events ?? []).map((e: any) => (\n          ${card}\n        ))}\n        {v.empty}` + src.slice(last);
src = src.replace("import { css, S } from '@/components/boards/css';", "import { css, S } from '@/components/boards/css';\nimport LiveCover from '@/components/invitation/LiveCover';");
writeFileSync(FILE, src);
console.log('covers extracted; events view now data-driven');
