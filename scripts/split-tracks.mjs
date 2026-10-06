// One-off: moves each track's scene and loader out of components/boards/InviteView.tsx into
// components/invitation/motion/tracks/<track>.tsx so a guest downloads only their track.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const FILE = 'components/boards/InviteView.tsx';
const TRACKS = ['club', 'space', 'chem', 'phys', 'bio', 'math', 'sport'];
let src = readFileSync(FILE, 'utf8');

function extract(track, nth) {
  const re = new RegExp(`^( *)\\{v\\.is_${track} \\? \\($`, 'gm');
  let m;
  for (let i = 0; i <= nth; i++) m = re.exec(src);
  if (!m) throw new Error(`block ${track}#${nth} not found`);
  const indent = m[1];
  const start = m.index;
  const endMarker = `\n${indent}) : null}`;
  const end = src.indexOf(endMarker, start) + endMarker.length;
  const block = src.slice(start, end);
  // inner = between "<>" and "</>"
  const inner = block.slice(block.indexOf('<>') + 2, block.lastIndexOf('</>'));
  return { start, end, inner };
}

mkdirSync('components/invitation/motion/tracks', { recursive: true });
const scenes = {};
const loaders = {};
for (const t of TRACKS) {
  const s = extract(t, 0);
  scenes[t] = s.inner;
  const l = extract(t, 1);
  loaders[t] = l.inner;
}
// Replace the first block of each group with TrackMotion and drop the rest (iterate from the end).
const spans = [];
for (const t of TRACKS) for (const n of [0, 1]) spans.push({ t, n, ...extract(t, n) });
spans.sort((a, b) => b.start - a.start);
for (const sp of spans) {
  const indent = src.slice(src.lastIndexOf('\n', sp.start) + 1, sp.start);
  const replacement = sp.t === 'club' ? `<TrackMotion track={v.track} kind="${sp.n === 0 ? 'scene' : 'loader'}" />` : '';
  src = src.slice(0, sp.start) + replacement + src.slice(sp.end);
  if (!replacement) src = src.replace(new RegExp(`\n${indent}\n`), '\n');
}
src = src.replace("import { css, S } from '@/components/boards/css';", "import { css, S } from '@/components/boards/css';\nimport TrackMotion from '@/components/invitation/motion/TrackMotion';");
writeFileSync(FILE, src);

for (const t of TRACKS) {
  const body = (s) => s.replace(/\bv\./g, 'v.');
  const out = `/* eslint-disable */
// ${t} track — scene and loader, moved verbatim from the Invite board (design-reference/Invite.dc.html).
import { S } from '@/components/boards/css';

export function Scene() {
  return (
    <>
${body(scenes[t])}
    </>
  );
}

export function Loader() {
  return (
    <>
${body(loaders[t])}
    </>
  );
}
`;
  if (/\bv\.[a-zA-Z]/.test(out)) console.warn(`${t}: still references v.*`);
  writeFileSync(`components/invitation/motion/tracks/${t}.tsx`, out);
}
console.log('split', TRACKS.length, 'tracks');
