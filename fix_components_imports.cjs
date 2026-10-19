const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /['"]\.\.\/common\/Container\.astro['"]/g, to: "'../ui/layout/Container.astro'" },
  { from: /['"]\.\.\/common\/Logo\.astro['"]/g, to: "'../ui/primitives/Logo.astro'" },
  { from: /['"]\.\.\/common\/Button\.astro['"]/g, to: "'../ui/primitives/Button.astro'" },
  { from: /['"]\.\.\/common\/Badge\.astro['"]/g, to: "'../ui/primitives/Badge.astro'" },
  { from: /['"]\.\.\/common\/SectionHeading\.astro['"]/g, to: "'../ui/marketing/SectionHeading.astro'" },
  { from: /['"]\.\.\/common\/SEO\.astro['"]/g, to: "'../seo/SEO.astro'" },
  { from: /['"]\.\.\/navigation\/AnnouncementBar\.astro['"]/g, to: "'../layout/AnnouncementBar.astro'" },
  { from: /['"]\.\.\/navigation\/Footer\.astro['"]/g, to: "'../layout/Footer.astro'" },
  { from: /['"]\.\.\/navigation\/Navbar\.astro['"]/g, to: "'../layout/Navbar.astro'" }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const rule of replacements) {
        if (content.match(rule.from)) {
          content = content.replace(rule.from, rule.to);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated imports in', fullPath);
      }
    }
  }
}

processDirectory('src/components');
console.log('Done mapping components imports.');
