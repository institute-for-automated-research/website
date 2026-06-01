// One-off: populate `paper.citedByCount` on each distilled page from OpenAlex
// (a static influence snapshot). Inserts after `  resultsCount:`. Idempotent.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const dirs = ['src/content/docs/papers/jf/2025', 'src/content/docs/papers/jf/2026'];
let done = 0, skipped = 0;
for (const d of dirs) {
  for (const fn of fs.readdirSync(d)) {
    if (!fn.endsWith('.md')) continue;
    const f = `${d}/${fn}`;
    let t = fs.readFileSync(f, 'utf8');
    if (/^  citedByCount:/m.test(t)) { skipped++; continue; }
    const doi = (t.match(/^  doi:\s*(\S+)/m) || [])[1];
    if (!doi) { console.log('NO DOI', fn); continue; }
    let n = null;
    try {
      const out = execFileSync('python3', ['scripts/openalex/openalex.py', 'work', `doi:${doi}`, '--json'], { encoding: 'utf8' });
      n = JSON.parse(out).cited_by_count;
    } catch (e) { console.log('OPENALEX FAIL', fn); continue; }
    if (n == null) { console.log('NO COUNT', fn); continue; }
    t = t.replace(/^(  resultsCount:.*)$/m, `$1\n  citedByCount: ${n}`);
    fs.writeFileSync(f, t);
    console.log(fn.replace('.md', ''), '->', n);
    done++;
  }
}
console.log(`\ncitedByCount added to ${done} pages, ${skipped} skipped`);
