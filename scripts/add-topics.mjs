// One-off: populate `paper.topics` on each distilled JF page from OpenAlex
// (JF prints no JEL, so OpenAlex topics are our subject classification). For
// each page: read its DOI, query the openalex skill's CLI, insert a
// `  topics: [...]` line after `  resultsCount:`. Idempotent: skips a page
// that already has a topics line.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const dirs = [
  'src/content/docs/papers/jf/2025',
  'src/content/docs/papers/jf/2026',
];
const yq = (s) => `'${String(s).replace(/'/g, "''")}'`;

let done = 0, skipped = 0;
for (const d of dirs) {
  for (const fn of fs.readdirSync(d)) {
    if (!fn.endsWith('.md')) continue;
    const f = `${d}/${fn}`;
    let t = fs.readFileSync(f, 'utf8');
    if (/^  topics:/m.test(t)) { skipped++; continue; }
    const doi = (t.match(/^  doi:\s*(\S+)/m) || [])[1];
    if (!doi) { console.log('NO DOI', fn); continue; }
    let topics = [];
    try {
      const out = execFileSync('python3', ['scripts/openalex/openalex.py', 'work', `doi:${doi}`, '--json'], { encoding: 'utf8' });
      topics = (JSON.parse(out).topics || []).filter(Boolean);
    } catch (e) { console.log('OPENALEX FAIL', fn, String(e).split('\n')[0]); continue; }
    if (!topics.length) { console.log('NO TOPICS', fn); continue; }
    const line = `  topics: [${topics.map(yq).join(', ')}]`;
    t = t.replace(/^(  resultsCount:.*)$/m, `$1\n${line}`);
    fs.writeFileSync(f, t);
    console.log(fn.replace('.md', ''), '->', topics.join(' | '));
    done++;
  }
}
console.log(`\ntopics added to ${done} pages, ${skipped} already had it`);
