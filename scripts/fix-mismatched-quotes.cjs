const fs = require('fs');
const path = require('path');

function walk(dir) {
    fs.readdirSync(dir).forEach(f => {
        let p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            walk(p);
        } else if (p.endsWith('.astro')) {
            let c = fs.readFileSync(p, 'utf8');
            let modified = false;
            
            // Fix mismatched quotes for ANY depth of ../
            if (c.includes(`BaseLayout.astro";`)) {
                c = c.replace(/from '((?:\.\.\/)+)layouts\/BaseLayout\.astro";/g, `from '$1layouts/BaseLayout.astro';`);
                c = c.replace(/from "((?:\.\.\/)+)layouts\/BaseLayout\.astro';/g, `from "$1layouts/BaseLayout.astro";`);
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(p, c);
            }
        }
    });
}
walk('src/pages');
