import { readFileSync, writeFileSync, unlinkSync } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

function rsvgConvert(svgPath, pngPath, size) {
  execSync(`rsvg-convert -w ${size} -h ${size} "${svgPath}" -o "${pngPath}"`);
}

function pngToIco(pngPath, icoPath) {
  const png = readFileSync(pngPath);
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);
  entry.writeUInt8(32, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);

  writeFileSync(icoPath, Buffer.concat([header, entry, png]));
}

const logoSvg = join(publicDir, 'logo.svg');
const faviconSvg = join(publicDir, 'favicon.svg');

rsvgConvert(logoSvg, join(publicDir, 'logo192.png'), 192);
rsvgConvert(logoSvg, join(publicDir, 'logo512.png'), 512);

const favicon32 = join(publicDir, 'favicon-32.png');
rsvgConvert(faviconSvg, favicon32, 32);
pngToIco(favicon32, join(publicDir, 'favicon.ico'));

unlinkSync(favicon32);

console.log('Generated logo192.png, logo512.png, favicon.ico');
