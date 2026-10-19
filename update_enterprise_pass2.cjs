const fs = require('fs');
let content = fs.readFileSync('src/pages/enterprise.astro', 'utf8');

// Replace all -space-* variables with numeric values
content = content.replace(/-space-xs/g, '-2');
content = content.replace(/-space-sm/g, '-4');
content = content.replace(/-space-md/g, '-8');
content = content.replace(/-space-lg/g, '-12');
content = content.replace(/-space-xl/g, '-16');

// Metrics blocks typography fixes
content = content.replace(/<div class="font-display-hero text-display-hero text-primary font-bold">/g, '<div class="text-6xl md:text-7xl font-extrabold tracking-tighter text-primary drop-shadow-sm mb-4">');
content = content.replace(/<div class="font-display-hero text-display-hero text-on-surface font-bold">/g, '<div class="text-6xl md:text-7xl font-extrabold tracking-tighter text-on-surface drop-shadow-sm mb-4">');
content = content.replace(/<div class="font-display-hero text-display-hero text-secondary font-bold">/g, '<div class="text-6xl md:text-7xl font-extrabold tracking-tighter text-secondary drop-shadow-sm mb-4">');

// Fix paragraph fonts
content = content.replace(/font-body-sm text-body-sm/g, 'text-base md:text-lg opacity-80 leading-relaxed');
content = content.replace(/font-body-md text-body-md/g, 'text-lg opacity-90 leading-relaxed');
content = content.replace(/font-body-lg text-body-lg/g, 'text-xl leading-relaxed');

// Fix heading fonts that weren't caught
content = content.replace(/font-headline-sm text-headline-sm/g, 'text-xl font-bold');
content = content.replace(/font-headline-md text-headline-md/g, 'text-2xl font-bold');

// Fix label fonts
content = content.replace(/font-label-sm text-label-sm/g, 'text-sm font-semibold tracking-wider');
content = content.replace(/font-label-md text-label-md/g, 'text-base font-semibold');

// Fix code tabular fonts
content = content.replace(/font-code-tabular text-code-tabular/g, 'font-mono tracking-tight');

// Clean up weird class stacking
content = content.replace(/shadow-xl shadow-xl ring-2/g, 'shadow-2xl ring-4');
content = content.replace(/shadow-xl shadow-md/g, 'shadow-lg');

// Add more padding to cards to make them less cramped
content = content.replace(/p-12/g, 'p-8 md:p-12'); // since space-lg became 12

// Remove some border colors that are too bold
content = content.replace(/border-outline-variant\/20/g, 'border-gray-100');

fs.writeFileSync('src/pages/enterprise.astro', content);
