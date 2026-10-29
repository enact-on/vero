/**
 * Compare built pages against a baseline build, ignoring formatting-only
 * differences (whitespace, comments, attribute/class order, asset hashes).
 *
 * Usage: node scripts/compare-html.cjs <baselineDist> <newDist> [route ...]
 * Example: node scripts/compare-html.cjs ../baseline/dist dist / /home-v2
 * Git Bash on Windows rewrites "/route" arguments into paths; prefix the
 * command with MSYS_NO_PATHCONV=1.
 */
const fs = require('fs');
const path = require('path');

const [baseDir, newDir, ...routes] = process.argv.slice(2);
module.exports = { normalize: (...a) => normalize(...a) };
if (require.main !== module) return;
if (!baseDir || !newDir) {
  console.error('Usage: node scripts/compare-html.cjs <baselineDist> <newDist> [route ...]');
  process.exit(2);
}

function decode(s) {
  return s
    .replace(/&#39;|&#x27;|&apos;/g, "'")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&nbsp;/g, '\u00a0')
    .replace(/&rarr;/g, '→')
    .replace(/&larr;/g, '←')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&middot;/g, '·')
    .replace(/&copy;/g, '©')
    .replace(/&times;/g, '×')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');
}

function normalizeTag(tag) {
  const m = tag.match(/^<([\w-]+)([\s\S]*?)(\/?)>$/);
  if (!m) return tag;
  const [, name, rest] = m;
  const attrs = [];
  const re = /([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let a;
  while ((a = re.exec(rest))) {
    let [, key, v1, v2, v3] = a;
    if (key === '/') continue;
    if (/^data-astro-cid-/.test(key) || key === 'data-astro-source-file' || key === 'data-astro-source-loc') continue;
    let value = decode(v1 ?? v2 ?? v3 ?? '');
    if (key === 'class') value = value.split(/\s+/).filter(Boolean).sort().join(' ');
    if (key === 'style') value = value.replace(/\s+/g, '').replace(/;$/, '');
    value = value.replace(/\/_astro\/([\w.-]+?)\.[\w-]{8}(_[\w-]+)?\.(\w+)/g, '/_astro/$1.HASH.$3');
    if (value === '' && ['class', 'style'].includes(key)) continue;
    attrs.push(value === '' && v1 === undefined && v2 === undefined && v3 === undefined ? key : `${key}="${value}"`);
  }
  attrs.sort();
  return `<${name}${attrs.length ? ' ' + attrs.join(' ') : ''}>`;
}

function normalize(html) {
  html = html
    .replace(/<!--[\s\S]*?-->/g, '')
    // bundled scripts and styles differ per build; markup is what we compare
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<link[^>]*rel="stylesheet"[^>]*href="\/_astro\/[^"]*"[^>]*>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '');
  const out = [];
  const re = /<[^>]+>|[^<]+/g;
  let m;
  while ((m = re.exec(html))) {
    const t = m[0];
    if (t.startsWith('<')) {
      if (t.startsWith('</')) out.push(t.replace(/\s+/g, ''));
      else out.push(normalizeTag(t.replace(/\s+/g, ' ').replace(/ ?(\/?)>$/, '$1>')));
    } else {
      const text = decode(t).replace(/\s+/g, ' ').trim();
      if (text) out.push(text);
    }
  }
  return out;
}

function file(dir, route) {
  const clean = route.replace(/^\/|\/$/g, '');
  return path.join(dir, clean, 'index.html');
}

const list = routes.length ? routes : ['/', '/home-v2', '/home-v3', '/home-v4'];
let failed = false;
for (const route of list) {
  const a = normalize(fs.readFileSync(file(baseDir, route), 'utf8'));
  const b = normalize(fs.readFileSync(file(newDir, route), 'utf8'));
  // LCS-free simple diff: report first divergence with context
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  if (i === a.length && i === b.length) {
    console.log(`✓ ${route} identical (${a.length} nodes)`);
    continue;
  }
  failed = true;
  console.log(`✗ ${route} differs at node ${i} (baseline ${a.length}, new ${b.length})`);
  console.log('  context:', a.slice(Math.max(0, i - 3), i).join(' ').slice(-300));
  console.log('  baseline:', a.slice(i, i + 4).join(' ').slice(0, 400));
  console.log('  new     :', b.slice(i, i + 4).join(' ').slice(0, 400));
}
process.exit(failed ? 1 : 0);
