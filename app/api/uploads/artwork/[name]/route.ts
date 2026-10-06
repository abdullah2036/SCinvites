import { readLocalArtwork } from '@/lib/server/storage';

/** Serves artwork in local development (production uses the Supabase Storage public URL). */
export async function GET(_req: Request, { params }: { params: Promise<{ name: string }> }) {
  const file = await readLocalArtwork((await params).name);
  if (!file) return new Response('Not found', { status: 404 });
  return new Response(Buffer.from(file.bytes), {
    headers: { 'content-type': file.type, 'cache-control': 'public, max-age=31536000, immutable', 'x-content-type-options': 'nosniff' },
  });
}
