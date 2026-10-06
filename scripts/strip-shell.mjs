// Keeps only the board's <main className="mn" …> element in a generated studio view; the sidebar,
// bottom bar and page background come from components/shell/StudioShell.tsx instead.
// Usage: node scripts/strip-shell.mjs DashboardView
import { readFileSync, writeFileSync } from 'node:fs';

const file = `components/boards/${process.argv[2]}.tsx`;
const src = readFileSync(file, 'utf8');
const start = src.search(/^ *<main className="mn"/m);
if (start < 0) throw new Error('no <main className="mn"> in ' + file);
const indent = src.slice(start).match(/^ */)[0];
const end = src.indexOf(`\n${indent}</main>`, start) + `\n${indent}</main>`.length;
const main = src
  .slice(start, end)
  .split('\n')
  .map((l) => l.replace(new RegExp(`^${indent}`), '    '))
  .join('\n');
const head = src.slice(0, src.indexOf('  return (') + '  return ('.length);
writeFileSync(file, `${head}\n${main}\n  );\n}\n`);
console.log(`${file}: kept <main> (${main.length} chars)`);
