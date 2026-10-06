export const SOURCES = ['whatsapp', 'instagram', 'x', 'snapchat', 'telegram', 'email', 'qr', 'link', 'direct'] as const;
export type Source = (typeof SOURCES)[number];

export const SOURCE_LABELS: Record<Source, string> = {
  whatsapp: 'واتساب',
  instagram: 'إنستغرام',
  x: 'إكس',
  snapchat: 'سناب شات',
  telegram: 'تيليجرام',
  email: 'البريد',
  qr: 'رمز QR',
  link: 'رابط منسوخ',
  direct: 'مباشر',
};

const UA_RULES: [RegExp, Source][] = [
  [/WhatsApp/i, 'whatsapp'],
  [/Instagram/i, 'instagram'],
  [/Snapchat/i, 'snapchat'],
  [/Telegram/i, 'telegram'],
  [/Twitter|TwitterAndroid/i, 'x'],
];

const REFERER_RULES: [RegExp, Source][] = [
  [/(^|\.)whatsapp\.(com|net)$|^wa\.me$/, 'whatsapp'],
  [/(^|\.)instagram\.com$/, 'instagram'],
  [/^t\.co$|(^|\.)(x|twitter)\.com$/, 'x'],
  [/(^|\.)snapchat\.com$/, 'snapchat'],
  [/^t\.me$|(^|\.)telegram\.(org|me)$/, 'telegram'],
  [/^mail\.|(^|\.)outlook\.(com|live\.com)$|(^|\.)office\.com$/, 'email'],
];

/** Where a guest came from: explicit ?src tag, else in-app browser, else referrer host, else direct. */
export function detectSource(input: { src: string | null | undefined; userAgent: string | null | undefined; referer: string | null | undefined }): Source {
  const tag = input.src?.trim().toLowerCase();
  if (tag && (SOURCES as readonly string[]).includes(tag)) return tag as Source;
  const ua = input.userAgent ?? '';
  for (const [re, s] of UA_RULES) if (re.test(ua)) return s;
  if (input.referer) {
    try {
      const host = new URL(input.referer).hostname.toLowerCase();
      for (const [re, s] of REFERER_RULES) if (re.test(host)) return s;
    } catch {
      /* not a URL */
    }
  }
  return 'direct';
}

export function deviceClass(userAgent: string | null | undefined): 'mobile' | 'desktop' {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent ?? '') ? 'mobile' : 'desktop';
}

/** Appends ?src= to an invitation URL for tagged sharing. */
export function taggedUrl(url: string, source: Source): string {
  if (source === 'direct') return url;
  const u = new URL(url);
  u.searchParams.set('src', source);
  return u.toString();
}
