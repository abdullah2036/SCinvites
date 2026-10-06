import type { Metadata, Viewport } from 'next';
import { thmanyahSans, thmanyahDisplay } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'منصة دعوات نادي العلوم',
  description: 'دعوات نادي العلوم',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#EAF3F0' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" lang="ar" className={`${thmanyahSans.variable} ${thmanyahDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
