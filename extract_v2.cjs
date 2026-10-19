const fs = require('fs');

const content = fs.readFileSync('src/layouts/V2Layout.astro', 'utf8');
const lines = content.split('\n');

const headerLines = lines.slice(115, 166);
let headerComponent = `---
// HeaderV2.astro
import Logo from '../ui/primitives/Logo.astro';
import navigation from '../../config/navigation.json';
---

` + headerLines.join('\n');

const footerLines = lines.slice(169, 221);
let footerComponent = `---
// FooterV2.astro
import Logo from '../ui/primitives/Logo.astro';
import navigation from '../../config/navigation.json';
import siteConfig from '../../config/site.config';
---

` + footerLines.join('\n');

// Update copyright to use dynamic year and siteConfig.name if there is a hardcoded string
footerComponent = footerComponent.replace(
  /Orbit Inc\. All rights reserved\./g,
  '{siteConfig.name} Inc. All rights reserved.'
).replace(/&copy; 2024/g, '&copy; {new Date().getFullYear()}');

fs.writeFileSync('src/components/layout/HeaderV2.astro', headerComponent);
fs.writeFileSync('src/components/layout/FooterV2.astro', footerComponent);

let frontmatterEnd = lines.findIndex((l, i) => i > 0 && l.trim() === '---');
let newLines = [...lines];

if (frontmatterEnd !== -1) {
  newLines.splice(frontmatterEnd, 0, 'import HeaderV2 from \'../components/layout/HeaderV2.astro\';', 'import FooterV2 from \'../components/layout/FooterV2.astro\';');
}

// Recalculate positions after splice
const newHeaderStart = newLines.findIndex(l => l.includes('<header'));
let newHeaderEnd = -1;
let openHeaders = 0;
for (let i = newHeaderStart; i < newLines.length; i++) {
  if (newLines[i].includes('<header')) openHeaders++;
  if (newLines[i].includes('</header>')) {
    openHeaders--;
    if (openHeaders === 0) {
      newHeaderEnd = i;
      break;
    }
  }
}
newLines.splice(newHeaderStart, newHeaderEnd - newHeaderStart + 1, '    <HeaderV2 />');

const newFooterStart = newLines.findIndex(l => l.includes('<footer'));
let newFooterEnd = -1;
let openFooters = 0;
for (let i = newFooterStart; i < newLines.length; i++) {
  if (newLines[i].includes('<footer')) openFooters++;
  if (newLines[i].includes('</footer>')) {
    openFooters--;
    if (openFooters === 0) {
      newFooterEnd = i;
      break;
    }
  }
}
newLines.splice(newFooterStart, newFooterEnd - newFooterStart + 1, '    <FooterV2 />');

fs.writeFileSync('src/layouts/V2Layout.astro', newLines.join('\n'));
