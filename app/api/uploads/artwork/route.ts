import { handler, json } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { uploadArtwork } from '@/lib/server/storage';
import { AppError } from '@/lib/shared/types';

export const POST = handler(async (req) => {
  await requireOwner(req);
  const form = await req.formData().catch(() => null);
  const file = form?.get('file');
  if (!(file instanceof File)) throw new AppError('bad_file', 400, 'اختاري صورة لرفعها');
  return json(await uploadArtwork(file), { status: 201 });
});
