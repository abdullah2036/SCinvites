import { handler, json } from '@/lib/server/http';
import { getGuestView } from '@/lib/server/guest';
import { AppError } from '@/lib/shared/types';

export const GET = handler<{ params: Promise<{ slug: string }> }>(async (_req, { params }) => {
  const view = await getGuestView((await params).slug);
  if (!view) throw new AppError('not_found', 404, 'الدعوة غير موجودة');
  return json(view, { headers: { 'cache-control': 'no-store' } });
});
