import { describe, it, expect } from 'vitest';
import { detectSource, deviceClass } from '@/lib/shared/source';

const WA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 WhatsApp/2.24.1';
const IG = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Instagram 300.0.0';
const CHROME = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
const ANDROID = 'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36';

describe('detectSource', () => {
  it('prefers a valid src tag', () => {
    expect(detectSource({ src: 'whatsapp', userAgent: IG, referer: null })).toBe('whatsapp');
    expect(detectSource({ src: 'QR', userAgent: CHROME, referer: null })).toBe('qr');
  });
  it('falls back to the in-app browser', () => {
    expect(detectSource({ src: null, userAgent: WA, referer: null })).toBe('whatsapp');
    expect(detectSource({ src: null, userAgent: IG, referer: null })).toBe('instagram');
    expect(detectSource({ src: null, userAgent: 'Mozilla/5.0 Telegram-Android', referer: null })).toBe('telegram');
  });
  it('falls back to the referrer host', () => {
    expect(detectSource({ src: null, userAgent: CHROME, referer: 'https://t.co/abc' })).toBe('x');
    expect(detectSource({ src: null, userAgent: CHROME, referer: 'https://l.instagram.com/?u=x' })).toBe('instagram');
    expect(detectSource({ src: null, userAgent: CHROME, referer: 'https://mail.google.com/' })).toBe('email');
  });
  it('ignores unknown tags and defaults to direct', () => {
    expect(detectSource({ src: 'evil<script>', userAgent: CHROME, referer: null })).toBe('direct');
    expect(detectSource({ src: null, userAgent: null, referer: 'not a url' })).toBe('direct');
  });
});

describe('deviceClass', () => {
  it('classifies phones and desktops', () => {
    expect(deviceClass(WA)).toBe('mobile');
    expect(deviceClass(ANDROID)).toBe('mobile');
    expect(deviceClass(CHROME)).toBe('desktop');
    expect(deviceClass(null)).toBe('desktop');
  });
});
