import QRCode from 'qrcode';

/** Inline SVG QR for a place/meeting URL (not an entry pass). Colors come from the invitation via currentColor. */
export async function qrSvg(url: string): Promise<string> {
  const svg = await QRCode.toString(url, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#000000', light: '#0000' } });
  return svg.replace(/fill="#000000"/g, 'fill="currentColor"').replace(/stroke="#000000"/g, 'stroke="currentColor"');
}
