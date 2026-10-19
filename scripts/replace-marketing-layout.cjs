const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('src/pages', (filePath) => {
    if (filePath.endsWith('.astro')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        if (content.includes('MarketingLayout')) {
            // Replace import
            content = content.replace(/import MarketingLayout from ['"].*?MarketingLayout\.astro['"];/g, 'import BaseLayout from "$&"');
            // Fix the path in the replaced import since regex match $& contains the old path
            // Better to just rewrite the import based on relative path
            const importMatch = content.match(/import BaseLayout from ['"](.*?)MarketingLayout\.astro['"];/);
            if (importMatch) {
                content = content.replace(importMatch[0], `import BaseLayout from "${importMatch[1]}BaseLayout.astro";`);
            } else if (content.includes('import BaseLayout from')) {
                 // Already manually replaced or something
            } else {
                 // Fallback if regex failed
                 content = content.replace(/import MarketingLayout from ['"].*?['"];/g, 'import BaseLayout from "../../layouts/BaseLayout.astro";');
                 content = content.replace('import BaseLayout from "../../layouts/BaseLayout.astro";', 'import BaseLayout from "../layouts/BaseLayout.astro";'); // Just hacky, let's use regex properly
            }
            
            // Re-do the import properly
            content = content.replace(/import\s+MarketingLayout\s+from\s+['"]([^'"]+)MarketingLayout\.astro['"];/g, 'import BaseLayout from "${1}BaseLayout.astro";');

            // Replace tags
            content = content.replace(/<MarketingLayout([^>]*)>/g, '<BaseLayout headerStyle="v1" footerStyle="v1" showAnnouncement={true}$1>');
            content = content.replace(/<\/MarketingLayout>/g, '</BaseLayout>');
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content);
        }
    }
});
