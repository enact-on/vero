const fs = require('fs');
let content = fs.readFileSync('src/pages/enterprise.astro', 'utf8');

// 1. Hero Typography & Spacing
content = content.replace(/font-display-hero text-display-hero text-on-surface tracking-tight/g, 'text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-surface tracking-tighter leading-tight');
content = content.replace(/max-w-4xl mx-auto mb-space-md/g, 'max-w-5xl mx-auto mb-8');
content = content.replace(/font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-space-xl leading-relaxed/g, 'text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed opacity-90');
content = content.replace(/pt-space-xl pb-space-lg/g, 'pt-32 pb-20');
content = content.replace(/py-space-lg/g, 'py-20');
content = content.replace(/py-space-xl/g, 'py-32');
content = content.replace(/mb-space-xl/g, 'mb-24');
content = content.replace(/mb-space-lg/g, 'mb-12');
content = content.replace(/mb-space-md/g, 'mb-8');
content = content.replace(/mb-space-sm/g, 'mb-4');
content = content.replace(/mb-space-xs/g, 'mb-2');
content = content.replace(/p-space-md/g, 'p-8');
content = content.replace(/gap-space-md/g, 'gap-8');
content = content.replace(/gap-space-lg/g, 'gap-12');

// 2. Headings inside the page
content = content.replace(/font-headline-xl text-headline-xl/g, 'text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4');
content = content.replace(/font-headline-md text-headline-md/g, 'text-2xl md:text-3xl font-bold tracking-tight');
content = content.replace(/font-headline-sm text-headline-sm/g, 'text-xl md:text-2xl font-bold tracking-tight');

// 3. Improve the form field sizing (it looked cramped)
content = content.replace(/w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none py-2/g, 'w-full bg-transparent text-lg text-on-surface placeholder:text-outline/70 focus:outline-none py-3 px-3');
content = content.replace(/w-full sm:w-auto px-space-lg py-3 bg-primary text-on-primary font-label-md text-label-md rounded-full shadow hover:bg-secondary transition-all flex items-center justify-center gap-space-xs shrink-0 cursor-pointer/g, 'w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-secondary transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer hover:-translate-y-0.5');

// 4. Improve the boxy agent simulator cards (add softer shadows, border, and gaps)
content = content.replace(/bg-surface-container-low flex flex-col/g, 'bg-white border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col hover:-translate-y-1 rounded-2xl');
content = content.replace(/rounded-xl bg-surface-container-lowest/g, 'rounded-2xl bg-white border border-outline-variant/20 shadow-xl');
content = content.replace(/rounded-xl bg-surface/g, 'rounded-2xl bg-surface');

// 5. The metrics blocks
content = content.replace(/text-display-lg font-bold text-primary mb-2/g, 'text-6xl md:text-7xl font-extrabold text-primary mb-4 tracking-tighter drop-shadow-sm');
content = content.replace(/font-headline-sm text-headline-sm text-on-surface mb-2/g, 'text-2xl font-bold text-on-surface mb-3');
content = content.replace(/font-body-md text-body-md text-on-surface-variant/g, 'text-base md:text-lg text-on-surface-variant leading-relaxed');

// 6. Testimonial/Quote row in Hero
content = content.replace(/<p class="font-body-sm text-body-sm text-on-surface-variant italic">/g, '<p class="text-sm md:text-base text-on-surface-variant italic max-w-sm">');

// 7. General fixes
content = content.replace(/shadow-sm/g, 'shadow-md'); // slightly stronger shadows everywhere

fs.writeFileSync('src/pages/enterprise.astro', content);
