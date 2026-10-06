// One-off: white-background logo → transparent PNGs (512 and 128 px). Soft alpha keeps edges smooth.
import sharp from 'sharp';

const src = 'design-reference/assets/logo-orientation-week.png';
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  const whiteness = Math.min(r, g, b); // 255 = pure white background
  const alpha = whiteness >= 248 ? 0 : whiteness <= 200 ? 255 : Math.round(((248 - whiteness) / 48) * 255);
  data[i + 3] = Math.min(data[i + 3], alpha);
}
const img = sharp(data, { raw: info }).trim({ threshold: 1 });
await img.clone().resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('public/brand/logo.png');
await img.clone().resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('public/brand/logo-128.png');
await img.clone().resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('app/icon.png');
console.log('logo written');
