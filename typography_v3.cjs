const fs = require('fs');

let content = fs.readFileSync('src/pages/home-v3.astro', 'utf-8');

// Hero H1
content = content.replace(/class="font-display text-5xl sm:text-6xl lg:text-\[76px\] font-bold tracking-tight text-gray-950 max-w-5xl leading-\[1.05\] mb-8"/g, 'class="text-h1 text-gray-950 font-[650] tracking-[-0.05em] leading-[1.05] max-w-5xl mb-8"');

// Changelog H2
content = content.replace(/class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-950"/g, 'class="text-h2 text-gray-950 font-[400] tracking-[-0.04em]"');

// CTA H2
content = content.replace(/class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 mb-4"/g, 'class="text-h2 text-gray-950 font-[400] tracking-[-0.04em] mb-4"');

// Clean up remaining font-display instances to use standard text-h3 or base fonts
content = content.replace(/class="font-display font-bold text-gray-900 text-sm/g, 'class="font-[600] text-gray-900 text-[18px]');
content = content.replace(/class="font-display font-bold text-gray-900 text-base mb-2"/g, 'class="font-[600] text-gray-900 text-[20px] mb-2"');
content = content.replace(/font-display /g, '');

// Clean up logo texts
content = content.replace(/font-extrabold text-lg tracking-tighter/g, 'font-[600] text-lg tracking-tight');
content = content.replace(/font-black text-lg tracking-wider/g, 'font-[600] text-lg tracking-wide');
content = content.replace(/font-medium text-base tracking-wide/g, 'font-[500] text-base tracking-wide');

fs.writeFileSync('src/pages/home-v3.astro', content, 'utf-8');
console.log('Done typography cleanup');
