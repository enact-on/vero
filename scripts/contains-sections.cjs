/**
 * Check that each <section> rendered in a page appears unchanged (after
 * normalisation) somewhere in a baseline page. Useful while converting a page.
 *
 * Usage: node scripts/contains-sections.cjs <baseline.html> <candidate.html>
 */
const fs = require('fs');
const { normalize } = require('./compare-html.cjs');

const [basePath, candPath] = process.argv.slice(2);
const base = normalize(fs.readFileSync(basePath, 'utf8'));
const cand = normalize(fs.readFileSync(candPath, 'utf8'));

function sections(nodes) {
  const out = [];
  for (let i = 0; i < nodes.length; i++) {
    if (!nodes[i].startsWith('<section')) continue;
    let depth = 0, j = i;
    for (; j < nodes.length; j++) {
      if (nodes[j].startsWith('<section')) depth++;
      else if (nodes[j] === '</section>' && --depth === 0) break;
    }
    out.push(nodes.slice(i, j + 1));
    i = j;
  }
  return out;
}

const joinedBase = '\n' + base.join('\n') + '\n';
let ok = true;
for (const sec of sections(cand)) {
  const label = sec[0].slice(0, 90);
  if (joinedBase.includes('\n' + sec.join('\n') + '\n')) {
    console.log(`✓ ${label}`);
    continue;
  }
  ok = false;
  // find best matching start in baseline and report first divergence
  let best = { at: -1, len: -1 };
  base.forEach((n, i) => {
    if (n !== sec[0]) return;
    let k = 0;
    while (k < sec.length && base[i + k] === sec[k]) k++;
    if (k > best.len) best = { at: i, len: k };
  });
  console.log(`✗ ${label}`);
  if (best.at === -1) console.log('   opening tag not found in baseline');
  else {
    console.log('   baseline:', base.slice(best.at + best.len, best.at + best.len + 3).join(' ').slice(0, 300));
    console.log('   new     :', sec.slice(best.len, best.len + 3).join(' ').slice(0, 300));
  }
}
process.exit(ok ? 0 : 1);
