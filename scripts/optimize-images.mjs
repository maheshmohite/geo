import sharp from 'sharp';
import { stat, rename } from 'fs/promises';
import { join } from 'path';

const IMAGE_DIR = 'public/images';

// Width caps per image category
const WIDTHS = {
  'card-sub': 900,   // card images — displayed at ~400-600px, 900px for retina
  'hero':     1920,  // hero banners — full width
  'industry': 1280,  // industry cards — displayed at ~600-800px
};

const TARGET_PNGS = [
  'card-sub-3d-rendering.png',
  'card-sub-arch-drafting.png',
  'card-sub-electrical.png',
  'card-sub-facility-mgmt.png',
  'card-sub-fire-protection.png',
  'card-sub-hvac.png',
  'card-sub-land-development.png',
  'card-sub-mep-drafting.png',
  'card-sub-plumbing.png',
  'card-sub-road-network.png',
  'card-sub-stormwater.png',
  'card-sub-utility-layout.png',
  'hero-bim-services.png',
  'hero-building-services.png',
  'hero-civil-engineering.png',
  'industry-architecture.png',
  'industry-civil-engineering.png',
  'industry-infrastructure.png',
  'industry-land-surveying.png',
  'industry-mep.png',
  'industry-real-estate.png',
];

function getWidth(filename) {
  for (const [prefix, w] of Object.entries(WIDTHS)) {
    if (filename.startsWith(prefix)) return w;
  }
  return 1280;
}

async function compressPng(filename) {
  const inputPath  = join(IMAGE_DIR, filename);
  const tmpPath    = join(IMAGE_DIR, filename + '.tmp');

  try {
    const before = (await stat(inputPath)).size;

    await sharp(inputPath)
      .resize({ width: getWidth(filename), withoutEnlargement: true })
      .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
      .toFile(tmpPath);

    const after = (await stat(tmpPath)).size;
    await rename(tmpPath, inputPath);   // overwrite original

    const savingPct = (((before - after) / before) * 100).toFixed(0);
    const beforeKB  = (before / 1024).toFixed(0);
    const afterKB   = (after  / 1024).toFixed(0);
    console.log(`✓ ${filename}`);
    console.log(`  ${beforeKB} KB → ${afterKB} KB  (${savingPct}% smaller)`);
    return true;
  } catch (err) {
    console.error(`✗ Failed: ${filename} — ${err.message}`);
    return false;
  }
}

async function main() {
  console.log('Compressing PNGs in place...\n');
  let success = 0;
  for (const file of TARGET_PNGS) {
    const ok = await compressPng(file);
    if (ok) success++;
  }
  console.log(`\nDone: ${success}/${TARGET_PNGS.length} images compressed.`);
}

main();
