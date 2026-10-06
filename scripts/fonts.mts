// Thmanyah font files are licensed for use, not redistribution, so they are NOT in git.
// They live in a PRIVATE Supabase Storage bucket "fonts" and are copied into public/fonts/ at build time.
//   npm run fonts:upload   — one-time, from a machine that has the files in public/fonts/
//   npm run fonts:fetch    — runs automatically before `npm run build` (Vercel); skips if files are present
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';

export const FONT_FILES = ['thmanyahsans-Regular.woff2', 'thmanyahsans-Medium.woff2', 'thmanyahsans-Bold.woff2', 'thmanyahserifdisplay-Bold.woff2'];
const DIR = path.join(process.cwd(), 'public', 'fonts');
const BUCKET = 'fonts';

function client() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SECRET_KEY) return null;
  return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, { auth: { persistSession: false } });
}

async function fetchFonts() {
  const missing = FONT_FILES.filter((f) => !existsSync(path.join(DIR, f)));
  if (!missing.length) return console.log('fonts: present');
  const sb = client();
  if (!sb) {
    console.warn(`fonts: ${missing.length} file(s) missing and no SUPABASE_URL/SUPABASE_SECRET_KEY — building with fallback system fonts`);
    return;
  }
  mkdirSync(DIR, { recursive: true });
  for (const f of missing) {
    const { data, error } = await sb.storage.from(BUCKET).download(f);
    if (error || !data) {
      console.warn(`fonts: could not download ${f} (${error?.message ?? 'no data'}) — run npm run fonts:upload once`);
      continue;
    }
    writeFileSync(path.join(DIR, f), Buffer.from(await data.arrayBuffer()));
    console.log(`fonts: fetched ${f}`);
  }
}

async function uploadFonts() {
  const sb = client();
  if (!sb) throw new Error('Set SUPABASE_URL and SUPABASE_SECRET_KEY (e.g. in .env.local) first');
  const { error: bucketError } = await sb.storage.createBucket(BUCKET, { public: false });
  if (bucketError && !/exists/i.test(bucketError.message)) throw new Error(bucketError.message);
  for (const f of FONT_FILES) {
    const file = path.join(DIR, f);
    if (!existsSync(file)) throw new Error(`Missing ${file}`);
    const { error } = await sb.storage.from(BUCKET).upload(f, readFileSync(file), { contentType: 'font/woff2', upsert: true });
    if (error) throw new Error(`${f}: ${error.message}`);
    console.log(`fonts: uploaded ${f} to the private "${BUCKET}" bucket`);
  }
}

if (process.argv[2] === 'upload') await uploadFonts();
else await fetchFonts();
