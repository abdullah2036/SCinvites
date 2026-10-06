import localFont from 'next/font/local';

export const thmanyahSans = localFont({
  src: [
    { path: './fonts/thmanyahsans-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/thmanyahsans-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/thmanyahsans-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const thmanyahDisplay = localFont({
  src: [{ path: './fonts/thmanyahserifdisplay-Bold.woff2', weight: '700', style: 'normal' }],
  variable: '--font-display',
  display: 'swap',
});
