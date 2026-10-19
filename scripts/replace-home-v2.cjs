const fs = require('fs');
const lines = fs.readFileSync('src/pages/home-v2.astro', 'utf8').split('\n');

const startIndex = lines.findIndex(l => l.includes('<!-- Ultra-Realistic Product Interface Canvas -->'));
const endIndex = lines.findIndex(l => l.includes('<!-- 2. TRUSTED COMPANIES (LOGO CLOUD) -->'));

if (startIndex !== -1 && endIndex !== -1) {
    const before = lines.slice(0, startIndex);
    const after = lines.slice(endIndex - 2); // keep the </section> from before

    const replacement = [
        '          <!-- Hero Visual Image -->',
        '          <div class="w-full max-w-6xl rounded-2xl shadow-xl overflow-hidden border border-outline-variant/30 mt-8">',
        '            <Image src={heroImage} alt="Orbit Dashboard" class="w-full h-auto block" />',
        '          </div>',
    ];

    const result = [...before, ...replacement, ...after].join('\n');
    fs.writeFileSync('src/pages/home-v2.astro', result);
}
