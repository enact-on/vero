const fs = require('fs');
const lines = fs.readFileSync('src/pages/home-v4.astro', 'utf8').split('\n');

const importReplacement = [
    'import { Image } from "astro:assets";',
    'import heroImage from "../assets/images/astr-theme-hero.png";'
];
lines.splice(4, 0, ...importReplacement);

const startIndex = lines.findIndex(l => l.includes('<!-- Interactive Live Hero Visual Frame -->'));
const endIndex = lines.findIndex(l => l.includes('<!-- 2. SOCIAL PROOF / LOGO MARQUEE -->'));

if (startIndex !== -1 && endIndex !== -1) {
    const before = lines.slice(0, startIndex);
    const after = lines.slice(endIndex - 1); // keep the </section> from before

    const replacement = [
        '<!-- Hero Visual Image -->',
        '<div class="w-full max-w-5xl mx-auto rounded-2xl bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.07)] overflow-hidden text-left transition-all relative">',
        '  <Image src={heroImage} alt="Orbit Dashboard" class="w-full h-auto block" />',
        '</div>'
    ];

    const result = [...before, ...replacement, ...after].join('\n');
    fs.writeFileSync('src/pages/home-v4.astro', result);
}
