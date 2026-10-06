import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'منصة دعوات نادي العلوم',
  description: 'دعوات نادي العلوم',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#EAF3F0' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" lang="ar">
      <head>
        <link rel="preload" href="/fonts/thmanyahsans-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/thmanyahserifdisplay-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
