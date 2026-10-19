const fs = require('fs');
let content = fs.readFileSync('src/pages/index.astro', 'utf8');

// Strip the entire <style> block
content = content.replace(/<style>[\s\S]*?<\/style>/g, '');

// Map Bento Grid
content = content.replace(/class="bento-grid/g, 'class="grid grid-cols-1 lg:grid-cols-5 gap-8');
content = content.replace(/class="bento-item/g, 'class="bg-white rounded-xl border border-border shadow-md overflow-hidden flex flex-col');
content = content.replace(/class="bento-content/g, 'class="p-8 flex flex-col h-full');

// Map Metrics Grid
content = content.replace(/class="metrics-grid/g, 'class="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-[1000px] mx-auto');
content = content.replace(/class="metric-card"/g, 'class="flex flex-col gap-2 p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"');
content = content.replace(/class="metric-value"/g, 'class="text-5xl font-bold text-white tracking-tight"');
content = content.replace(/class="metric-label"/g, 'class="text-sm font-medium text-gray-300 uppercase tracking-wider"');

// Map FAQ
content = content.replace(/class="faq-container/g, 'class="flex flex-col gap-4');
content = content.replace(/class="faq-item"/g, 'class="bg-white rounded-xl border border-border shadow-sm overflow-hidden group [&[open]_svg]:rotate-180"');
content = content.replace(/class="faq-question"/g, 'class="flex justify-between items-center w-full p-6 text-left cursor-pointer font-semibold text-text-primary focus:outline-none list-none [&::-webkit-details-marker]:hidden"');
content = content.replace(/class="faq-answer"/g, 'class="p-6 pt-0 text-text-secondary leading-relaxed"');
content = content.replace(/class="faq-icon"/g, 'class="text-text-muted transition-transform duration-200"');

// Minor dark section fixes
content = content.replace(/dark-section/g, 'text-white [&_.title]:text-white [&_.description]:text-gray-400 [&_.text-eyebrow]:text-indigo-400');

fs.writeFileSync('src/pages/index.astro', content);
console.log('Migration complete');
