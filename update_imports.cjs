const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/common\/Badge\.astro['"]/g, to: "'$1components/ui/primitives/Badge.astro'" },
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/common\/Button\.astro['"]/g, to: "'$1components/ui/primitives/Button.astro'" },
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/common\/Logo\.astro['"]/g, to: "'$1components/ui/primitives/Logo.astro'" },
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/common\/Container\.astro['"]/g, to: "'$1components/ui/layout/Container.astro'" },
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/common\/SectionHeading\.astro['"]/g, to: "'$1components/ui/marketing/SectionHeading.astro'" },
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/common\/SEO\.astro['"]/g, to: "'$1components/seo/SEO.astro'" },
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/navigation\/AnnouncementBar\.astro['"]/g, to: "'$1components/layout/AnnouncementBar.astro'" },
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/navigation\/Footer\.astro['"]/g, to: "'$1components/layout/Footer.astro'" },
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/navigation\/Navbar\.astro['"]/g, to: "'$1components/layout/Navbar.astro'" },
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/hero\/Hero\.astro['"]/g, to: "'$1components/sections/Hero.astro'" },
  { from: /['"]\/?([a-zA-Z0-9_\-\.\/]+)?components\/product\/([a-zA-Z0-9_]+)\.astro['"]/g, to: "'$1components/sections/$2.astro'" }
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

processDirectory('src');
console.log('Done mapping imports.');
