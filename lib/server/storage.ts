import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';
import { randomToken } from './crypto';
import { AppError } from '@/lib/shared/types';

const BUCKET = 'artwork';
const MAX_BYTES = 5 * 1024 * 1024;
const LOCAL_DIR = path.join(process.cwd(), '.uploads', BUCKET);
const memory = new Map<string, { bytes: Uint8Array; type: string }>();

const TYPES = {
  png: { mime: 'image/png', magic: [0x89, 0x50, 0x4e, 0x47] },
  jpg: { mime: 'image/jpeg', magic: [0xff, 0xd8, 0xff] },
  webp: { mime: 'image/webp', magic: [0x52, 0x49, 0x46, 0x46] }, // "RIFF" … "WEBP" checked below
} as const;
type Ext = keyof typeof TYPES;

function sniff(bytes: Uint8Array): Ext | null {
  for (const [ext, t] of Object.entries(TYPES) as [Ext, (typeof TYPES)[Ext]][]) {
    if (t.magic.every((b, i) => bytes[i] === b)) {
      if (ext === 'webp' && String.fromCharCode(...bytes.slice(8, 12)) !== 'WEBP') continue;
      return ext;
    }
  }
  return null;
}

type Mode = 'memory' | 'local' | 'supabase';
function mode(): Mode {
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SECRET_KEY) return 'supabase';
  return process.env.VITEST ? 'memory' : 'local';
}

function supabase() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!, { auth: { persistSession: false } });
}

export function artworkUrl(p: string | null): string | null {
  if (!p) return null;
  if (mode() === 'supabase') return supabase().storage.from(BUCKET).getPublicUrl(p).data.publicUrl;
  return `/api/uploads/artwork/${p}`;
}

/** Validates by content (not just extension) and stores under a random name. */
export async function uploadArtwork(file: File): Promise<{ path: string; url: string }> {
  if (file.size > MAX_BYTES) throw new AppError('file_too_large', 413, 'حجم الصورة أكبر من ٥ ميغابايت');
  const bytes = new Uint8Array(await file.arrayBuffer());
  const ext = sniff(bytes);
  if (!ext) throw new AppError('bad_file', 400, 'الصيغ المسموحة: PNG أو JPG أو WEBP');
  const name = `${randomToken(12)}.${ext}`;
  const type = TYPES[ext].mime;
  const m = mode();
  if (m === 'supabase') {
    const { error } = await supabase().storage.from(BUCKET).upload(name, bytes, { contentType: type, upsert: false });
    if (error) throw new Error(`artwork upload failed: ${error.message}`);
  } else if (m === 'local') {
    await mkdir(LOCAL_DIR, { recursive: true });
    await writeFile(path.join(LOCAL_DIR, name), bytes);
  } else {
    memory.set(name, { bytes, type });
  }
  return { path: name, url: artworkUrl(name)! };
}

/** Local/memory adapters only: serves an uploaded file. */
export async function readLocalArtwork(name: string): Promise<{ bytes: Uint8Array; type: string } | null> {
  if (!/^[A-Za-z0-9_-]{16}\.(png|jpg|webp)$/.test(name)) return null;
  if (mode() === 'memory') return memory.get(name) ?? null;
  try {
    const bytes = new Uint8Array(await readFile(path.join(LOCAL_DIR, name)));
    const ext = name.split('.').pop() as Ext;
    return { bytes, type: TYPES[ext].mime };
  } catch {
    return null;
  }
}
