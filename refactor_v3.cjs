const fs = require('fs');

let content = fs.readFileSync('src/pages/home-v3.astro', 'utf-8');

// 1. Add Image imports
const importsToAdd = `
import imgFeature1 from "../assets/images/figma/feature-1.png";
import imgDiscover from "../assets/images/figma/image-4.png";
import imgUnderstand from "../assets/images/figma/feature-2.png";
import imgAct from "../assets/images/figma/feature-3.png";
import imgIntegrations from "../assets/images/figma/integrations.png";
import imgBannerPipeline from "../assets/images/figma/banner-pipeline.png";
`;
content = content.replace('import heroImage from "../assets/images/astr-theme-hero.png";', 'import heroImage from "../assets/images/astr-theme-hero.png";\n' + importsToAdd);

// 2. Add fade-up animations to everything
content = content.replace(/class="font-display/g, 'data-animate="fade-up"\n          class="font-display');
content = content.replace(/class="text-xs font-bold/g, 'data-animate="fade-up"\n          class="text-xs font-bold');

// 3. Update Typography H2
content = content.replace(/class="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-950/g, 'class="text-h2 text-gray-950');
content = content.replace(/class="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white/g, 'class="text-h2 text-white');
content = content.replace(/class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950/g, 'class="text-h2 text-gray-950');
content = content.replace(/class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-950/g, 'class="text-h2 text-gray-950');
content = content.replace(/class="text-xs font-bold uppercase tracking-wider text-indigo-600/g, 'class="text-eyebrow text-indigo-600');
content = content.replace(/class="text-xs font-bold uppercase tracking-wider text-indigo-400/g, 'class="text-eyebrow text-indigo-400');

// 4. Replace Realistic SaaS Card (Call Analysis) with imgFeature1
const rightSaaSStart = content.indexOf('      <!-- Right Side: Realistic SaaS Card (Call Analysis & Buying Committee Agent from Gumloop) -->');
if (rightSaaSStart !== -1) {
    const nextSection = content.indexOf('  <!-- 4. COMPLETE CONTEXT ON YOUR COMPANY', rightSaaSStart);
    const endSaaS = content.lastIndexOf('    </div>\n  </section>', nextSection);
    
    if(endSaaS !== -1) {
        const replaceString = `      <!-- Right Side: Realistic SaaS Card (Call Analysis & Buying Committee Agent from Gumloop) -->
      <div class="lg:col-span-7" data-animate="fade-up">
        <Image src={imgFeature1} alt="Feature" class="w-full h-auto drop-shadow-2xl rounded-2xl border border-gray-200/50" />
      </div>\n`;
        content = content.substring(0, rightSaaSStart) + replaceString + content.substring(endSaaS);
    }
}

// 5. Replace inside Knowledge Graph cards with Images
content = content.replace(/<div\n\s*class="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between text-xs text-gray-500"\n\s*>\n\s*<span class="flex items-center gap-1.5".*?<\/span>\n\s*<\/div>/s, '<Image src={imgDiscover} alt="Graph" class="w-full h-auto mt-4 rounded-lg shadow-sm border border-gray-200/50" />');
content = content.replace(/<div\n\s*class="space-y-1.5 text-\[11px\] font-code bg-white p-2.5 rounded-lg border border-gray-200"\n\s*>\n.*?<\/div>/s, '<Image src={imgUnderstand} alt="Activity" class="w-full h-auto mt-4 rounded-lg shadow-sm border border-gray-200/50" />');
content = content.replace(/<div\n\s*class="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between text-xs text-gray-500"\n\s*>\n\s*<span class="text-gray-900 font-medium".*?<\/span>\n\s*<\/div>/s, '<Image src={imgAct} alt="Skills" class="w-full h-auto mt-4 rounded-lg shadow-sm border border-gray-200/50" />');

// 6. Replace Slack & Gmail mock UI
const slackStart = content.indexOf('      <!-- Left: Realistic Slack & Gmail Mock UI -->');
if (slackStart !== -1) {
    const endSlack = content.indexOf('      <!-- Right Side: Content -->', slackStart);
    if(endSlack !== -1) {
        const replaceString = `      <!-- Left: Realistic Slack & Gmail Mock UI -->
      <div class="lg:col-span-7" data-animate="fade-up">
        <Image src={imgIntegrations} alt="Integrations" class="w-full h-auto drop-shadow-2xl rounded-2xl border border-gray-200/50" />
      </div>\n`;
        content = content.substring(0, slackStart) + replaceString + content.substring(endSlack);
    }
}

// 7. Replace Enterprise Controls Mock UI
const entStart = content.indexOf('      <!-- 2-column Dark Container Layout (Inspired directly by Gumloop Enterprise block) -->');
if (entStart !== -1) {
    const nextSection = content.indexOf('  <!-- 6. HIGH IMPACT ROI (Gumloop metrics layout) -->', entStart);
    const endEnt = content.lastIndexOf('    </div>\n  </section>', nextSection);
    
    if(endEnt !== -1) {
        const replaceString = `      <!-- Single Column Image -->
      <div class="w-full" data-animate="fade-up">
        <Image src={imgBannerPipeline} alt="Pipeline Analytics" class="w-full h-auto drop-shadow-2xl rounded-2xl border border-white/10" />
      </div>\n`;
        content = content.substring(0, entStart) + replaceString + content.substring(endEnt);
    }
}

fs.writeFileSync('src/pages/home-v3.astro', content, 'utf-8');
console.log('Done refactoring home-v3.astro');
