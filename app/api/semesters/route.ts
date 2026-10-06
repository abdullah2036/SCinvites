import { z } from 'zod';
import { handler, json, readJson } from '@/lib/server/http';
import { requireOwner } from '@/lib/server/sessions';
import { listSemesters, upsertSemester } from '@/lib/server/semesters';

const Day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const Body = z.object({ id: z.uuid().optional(), name: z.string().trim().min(2).max(60), startsOn: Day, endsOn: Day });

export const GET = handler(async (req) => {
  await requireOwner(req);
  return json(await listSemesters());
});

export const POST = handler(async (req) => {
  await requireOwner(req);
  return json(await upsertSemester(Body.parse(await readJson(req))), { status: 201 });
});
