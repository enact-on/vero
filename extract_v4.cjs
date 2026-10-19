const fs = require('fs');

const content = fs.readFileSync('stitch_v4.html', 'utf8');

const headerMatch = content.match(/<header[\s\S]*?<\/header>/i);
const mainMatch = content.match(/<main[\s\S]*?<\/main>/i);
const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/i);

if (!headerMatch || !mainMatch || !footerMatch) {
  console.error('Could not find header, main, or footer in stitch_v4.html');
  process.exit(1);
}

// 1. Create HeaderEnterprise.astro
let headerCode = headerMatch[0];
// Use navigation.json
headerCode = headerCode.replace(/<nav[\s\S]*?<\/nav>/i, `<nav
          class="hidden xl:flex items-center gap-space-md"
          data-active-classes="text-primary font-bold"
        >
          {
            navigation.header.map((item) => (
              <a
                class="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors inline-flex items-center gap-0.5"
                data-path={item.path}
                href={item.path}
              >
                {item.label}
                {item.hasDropdown && (
                  <span class="material-symbols-outlined text-[16px]">
                    expand_more
                  </span>
                )}
              </a>
            ))
          }
        </nav>`);

const headerAstro = `---
import { Image } from "astro:assets";
import orbitLogo from "../../assets/images/orbit-logo.png";
import Logo from "../ui/primitives/Logo.astro";
import navigation from "../../config/navigation.json";
---

${headerCode}
`;

fs.writeFileSync('src/components/layout/HeaderEnterprise.astro', headerAstro);

// 2. Create FooterEnterprise.astro
let footerCode = footerMatch[0];

// Replace grid links with config
const footerGridRegex = /<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-lg mb-space-xl">[\s\S]*?<\/div>\s*<div\s*class="pt-space-lg/i;
footerCode = footerCode.replace(footerGridRegex, `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-lg mb-space-xl">
        {
          navigation.footer.map((section) => (
            <div>
              <h4 class="font-label-sm text-label-sm uppercase text-on-surface font-semibold mb-space-md tracking-wider">
                {section.title}
              </h4>
              <ul class="space-y-space-sm">
                {section.links.map((link) => (
                  <li class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface">
                    <a data-path={link.path} href={link.path}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
      </div><div class="pt-space-lg`);

// Replace copyright
footerCode = footerCode.replace(/© 2025 Orbit Technologies Inc\. All rights reserved\./g, '&copy; {new Date().getFullYear()} {siteConfig.name} Inc. All rights reserved.');

const footerAstro = `---
import { Image } from "astro:assets";
import orbitLogo from "../../assets/images/orbit-logo.png";
import Logo from "../ui/primitives/Logo.astro";
import navigation from "../../config/navigation.json";
import siteConfig from "../../config/site.config";
---

${footerCode}
`;

fs.writeFileSync('src/components/layout/FooterEnterprise.astro', footerAstro);

// 3. Create enterprise.astro page
let mainCode = mainMatch[0];

// Add data-animate="fade-up" to all <section> tags in mainCode
mainCode = mainCode.replace(/<section (class="[^"]*")/g, '<section data-animate="fade-up" $1');

const pageAstro = `---
import EnterpriseLayout from "../layouts/EnterpriseLayout.astro";
---

<EnterpriseLayout>
${mainCode}
</EnterpriseLayout>
`;

fs.writeFileSync('src/pages/enterprise.astro', pageAstro);

console.log('Extraction complete.');
