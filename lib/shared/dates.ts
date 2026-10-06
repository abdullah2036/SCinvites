const LOCALE = 'ar-SA-u-ca-gregory-nu-arab';
const TZ = 'Asia/Riyadh';

const dateFmt = new Intl.DateTimeFormat(LOCALE, { timeZone: TZ, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
const shortFmt = new Intl.DateTimeFormat(LOCALE, { timeZone: TZ, weekday: 'long', day: 'numeric', month: 'long' });
const timeFmt = new Intl.DateTimeFormat(LOCALE, { timeZone: TZ, hour: 'numeric', minute: '2-digit', hour12: true });

// Intl inserts a comma after the weekday in Arabic ("الأحد، ١٢ أكتوبر"); the design shows none.
const clean = (s: string) => s.replace(/،\s*/g, ' ').replace(/\s+/g, ' ').trim();

/** «الأحد ١٢ أكتوبر ٢٠٢٦» in Riyadh time, Gregorian calendar */
export function formatDate(iso: string | Date): string {
  return clean(dateFmt.format(new Date(iso)));
}

/** «الأحد ١٢ أكتوبر» */
export function formatDateShort(iso: string | Date): string {
  return clean(shortFmt.format(new Date(iso)));
}

/** «٦:٠٠ م» */
export function formatTime(iso: string | Date): string {
  return clean(timeFmt.format(new Date(iso)));
}

export function toArabicDigits(n: number | string): string {
  return String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]);
}

const dayFmt = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' });

/** "YYYY-MM-DD" of the Riyadh calendar day (for <input type="date">). */
export function riyadhDay(iso: string | Date | null): string {
  return iso ? dayFmt.format(new Date(iso)) : '';
}
