/** Arabic phase label for an event card: draft / archived / upcoming / live / ended (6h default length). */
export function eventPhase(e: { status: 'draft' | 'active' | 'archived'; startsAt: string; endsAt: string | null }, now = Date.now()): string {
  if (e.status === 'draft') return 'مسودة';
  if (e.status === 'archived') return 'مؤرشفة';
  const start = new Date(e.startsAt).getTime();
  const end = e.endsAt ? new Date(e.endsAt).getTime() : start + 6 * 3600_000;
  return now > end ? 'منتهي' : now >= start ? 'فعّال' : 'قادم';
}
