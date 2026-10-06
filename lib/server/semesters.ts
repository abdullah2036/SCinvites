import { sql } from './db';
import { AppError } from '@/lib/shared/types';

export type Semester = { id: string; name: string; startsOn: string; endsOn: string };

const toDay = (d: Date | string) => (typeof d === 'string' ? d : d.toISOString().slice(0, 10));

export async function listSemesters(): Promise<Semester[]> {
  const rows = await sql<{ id: string; name: string; starts_on: Date; ends_on: Date }[]>`select id, name, starts_on, ends_on from semesters order by starts_on desc`;
  return rows.map((r) => ({ id: r.id, name: r.name, startsOn: toDay(r.starts_on), endsOn: toDay(r.ends_on) }));
}

export async function upsertSemester(input: { id?: string; name: string; startsOn: string; endsOn: string }): Promise<Semester> {
  if (input.endsOn < input.startsOn) throw new AppError('invalid_input', 400, 'تاريخ النهاية قبل البداية');
  const [overlap] = await sql`
    select 1 from semesters where daterange(starts_on, ends_on, '[]') && daterange(${input.startsOn}::date, ${input.endsOn}::date, '[]')
      ${input.id ? sql`and id <> ${input.id}` : sql``} limit 1`;
  if (overlap) throw new AppError('semester_overlap', 409, 'هذا الفصل يتداخل مع فصل آخر');
  const [row] = input.id
    ? await sql<{ id: string }[]>`update semesters set name = ${input.name}, starts_on = ${input.startsOn}, ends_on = ${input.endsOn} where id = ${input.id} returning id`
    : await sql<{ id: string }[]>`insert into semesters (name, starts_on, ends_on) values (${input.name}, ${input.startsOn}, ${input.endsOn}) returning id`;
  if (!row) throw new AppError('not_found', 404, 'الفصل غير موجود');
  return { id: row.id, name: input.name, startsOn: input.startsOn, endsOn: input.endsOn };
}

export async function deleteSemester(id: string): Promise<void> {
  await sql`delete from semesters where id = ${id}`;
}
