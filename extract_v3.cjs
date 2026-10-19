const fs = require('fs');

const content = fs.readFileSync('src/pages/index.astro', 'utf8');
const lines = content.split('\n');

const headerLines = lines.slice(8, 84); // lines 9-84
let headerComponent = `---
// HeaderV3.astro
import Logo from '../ui/primitives/Logo.astro';
import navigation from '../../config/navigation.json';
---

` + headerLines.join('\n');

let footerLines = lines.slice(2509, 2573); // lines 2510-2573
if (footerLines[0].includes('</main>')) {
  footerLines[0] = footerLines[0].replace(/.*<\/main>/, '');
}

let footerComponent = `---
// FooterV3.astro
import Logo from '../ui/primitives/Logo.astro';
import navigation from '../../config/navigation.json';
import siteConfig from '../../config/site.config';
---

` + footerLines.join('\n');

fs.writeFileSync('src/components/layout/HeaderV3.astro', headerComponent);
fs.writeFileSync('src/components/layout/FooterV3.astro', footerComponent);

let newIndexContent = lines.slice(0, 8); // lines 1-8

let frontmatterEnd = newIndexContent.findIndex((l, i) => i > 0 && l.trim() === '---');
if (frontmatterEnd !== -1) {
  newIndexContent.splice(frontmatterEnd, 0, 'import HeaderV3 from \'../components/layout/HeaderV3.astro\';', 'import FooterV3 from \'../components/layout/FooterV3.astro\';');
}

let mainPart = lines.slice(84, 2509);
let endPart = lines.slice(2573);

let finalLines = [...newIndexContent, '  <HeaderV3 />', '  <main>', ...mainPart, '  </main>', '  <FooterV3 />', ...endPart];
fs.writeFileSync('src/pages/index.astro', finalLines.join('\n'));
