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
            
            // Fix double imports
            if (c.includes('import BaseLayout from "import MarketingLayout from')) {
                // Example: import BaseLayout from "import MarketingLayout from '../../layouts/BaseLayout.astro";"
                c = c.replace(/import BaseLayout from "import MarketingLayout from (['"])(.*?)(['"]);"/g, 'import BaseLayout from $1$2$3;');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(p, c);
            }
        }
    });
}
walk('src/pages');
