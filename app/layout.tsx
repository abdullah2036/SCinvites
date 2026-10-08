import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import CalmMotion from '@/components/shell/CalmMotion';

export const metadata: Metadata = {
  title: 'منصة دعوات نادي العلوم',
  description: 'دعوات نادي العلوم',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#EAF3F0' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions add attributes to <html> before React loads (this element only).
    <html dir="rtl" lang="ar" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/thmanyahsans-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/thmanyahserifdisplay-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <CalmMotion />
        <Analytics />
      </body>
    </html>
  );
}
