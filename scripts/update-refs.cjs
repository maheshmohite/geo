const fs = require('fs');

const files = [
  'src/data/industries.js',
  'src/data/services.js',
];

const names = [
  'card-sub-3d-rendering',
  'card-sub-arch-drafting',
  'card-sub-electrical',
  'card-sub-facility-mgmt',
  'card-sub-fire-protection',
  'card-sub-hvac',
  'card-sub-land-development',
  'card-sub-mep-drafting',
  'card-sub-plumbing',
  'card-sub-road-network',
  'card-sub-stormwater',
  'card-sub-utility-layout',
  'hero-bim-services',
  'hero-building-services',
  'hero-civil-engineering',
  'industry-architecture',
  'industry-civil-engineering',
  'industry-infrastructure',
  'industry-land-surveying',
  'industry-mep',
  'industry-real-estate',
];

// revert: .webp → .png
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let count = 0;
  names.forEach(name => {
    const from = name + '.webp';
    const to = name + '.png';
    while (content.includes(from)) {
      content = content.replace(from, to);
      count++;
    }
  });
  fs.writeFileSync(f, content, 'utf8');
  console.log(f + ': ' + count + ' references reverted to .png');
});
