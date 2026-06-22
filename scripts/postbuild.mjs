// Post-build assembly.
//
// 1. Lay the hand-authored marketing site + working-paper series (site/) at
//    the deploy root, beside the generated wiki (dist/wiki/, see
//    astro.config.mjs outDir). Final dist/:
//      dist/index.html        homepage        (verbatim from site/)
//      dist/about.html        about           (verbatim from site/)
//      dist/papers/...         working papers  (verbatim from site/)
//      dist/wiki/...           Starlight wiki  (generated)
//
// 2. LLM-scrapability:
//      - Raw Markdown twin of every wiki page, at the same path + ".md"
//        (filesystem-mirrored under dist/wiki/).
//      - /llms.txt       — site overview + link index (https://llmstxt.org/)
//      - /llms-full.txt  — entire wiki corpus concatenated, one request.

import { cp, mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const site = join(root, 'site');
const dist = join(root, 'dist');
const docs = join(root, 'src', 'content', 'docs');
const SITE = 'https://instituteforautomatedresearch.org';

if (!existsSync(join(dist, 'wiki'))) {
  console.error('[postbuild] dist/wiki missing — did `astro build` run?');
  process.exit(1);
}

// 1. Marketing site → deploy root.
await cp(site, dist, { recursive: true });
console.log('[postbuild] copied site/ → dist/ (homepage + papers at root)');

// 1b. Starlight base-prefixes its `favicon` option, so /wiki/* pages link
//     /wiki/favicon.svg. The asset's real home is the deploy root (copied
//     above from site/); mirror it under dist/wiki/ so that link resolves
//     0-hop instead of 404ing. Single source stays site/favicon.svg.
await cp(join(site, 'favicon.svg'), join(dist, 'wiki', 'favicon.svg'));
console.log('[postbuild] mirrored favicon.svg → dist/wiki/ (Starlight base)');

// 1c. Vercel Web Analytics. The hand-authored site/ pages are plain HTML with
//     their own <head>, so inject the analytics script into each (the wiki
//     pages get it from src/components/Head.astro). Vercel serves
//     /_vercel/insights/script.js once Web Analytics is enabled for the
//     project; until then it 404s harmlessly. Idempotent.
const ANALYTICS_TAG = '<script defer src="/_vercel/insights/script.js"></script>';
async function injectAnalytics(srcDir) {
  let n = 0;
  for (const e of await readdir(srcDir, { withFileTypes: true })) {
    const p = join(srcDir, e.name);
    if (e.isDirectory()) {
      n += await injectAnalytics(p);
      continue;
    }
    if (!e.name.endsWith('.html')) continue;
    const target = join(dist, relative(site, p));
    const html = await readFile(target, 'utf8');
    if (html.includes('/_vercel/insights/script.js') || !/<\/head>/i.test(html)) {
      continue;
    }
    await writeFile(target, html.replace(/<\/head>/i, `    ${ANALYTICS_TAG}\n  </head>`), 'utf8');
    n++;
  }
  return n;
}
const injected = await injectAnalytics(site);
console.log(`[postbuild] injected Vercel Analytics into ${injected} static page(s)`);

// Walk src/content/docs for *.md.
async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.md') || e.name.endsWith('.mdx')) out.push(p);
  }
  return out;
}

function parseFrontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: src };
  const data = {};
  const lines = m[1].split('\n');
  for (let i = 0; i < lines.length; i++) {
    const kv = lines[i].match(/^([\w][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let [, key, val] = kv;
    // YAML block scalars: > | (with optional - / + chomping). Gather the
    // following more-indented lines; fold (>) joins with spaces.
    if (/^[|>][+-]?$/.test(val.trim())) {
      const folded = val.trim().startsWith('>');
      const block = [];
      while (i + 1 < lines.length && /^\s+\S/.test(lines[i + 1])) {
        block.push(lines[++i].trim());
      }
      val = folded ? block.join(' ') : block.join('\n');
    }
    data[key] = val.replace(/^["']|["']$/g, '').trim();
  }
  return { data, body: m[2].trim() };
}

// URL path for a docs file: index.md → dir/, foo.md → dir/foo/
function pageUrl(relPath) {
  const noExt = relPath.replace(/\.mdx?$/, '');
  const clean = noExt === 'index' ? '' : noExt.replace(/\/index$/, '');
  // Trailing slash — matches Starlight directory-format canonical URLs.
  return `${SITE}/wiki${clean ? '/' + clean : ''}/`;
}

// Order: shallower paths first; section index.md before its siblings.
const rank = (p) => {
  const r = relative(docs, p).replaceAll('\\', '/');
  return [r.split('/').length, r.endsWith('index.md') ? 0 : 1, r];
};
const files = (await walk(docs)).sort((a, b) => {
  const [ad, ai, ar] = rank(a);
  const [bd, bi, br] = rank(b);
  return ad - bd || ai - bi || ar.localeCompare(br);
});
const pages = [];

for (const abs of files) {
  const rel = relative(docs, abs).replaceAll('\\', '/');
  const raw = await readFile(abs, 'utf8');
  const { data, body } = parseFrontmatter(raw);

  // Provenance: extract the nested `verified:` block (the naive flat
  // frontmatter parser doesn't descend into objects).
  const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const vb = fm.match(/^verified:\n((?:[ \t]+.*\n?)+)/m)?.[1] ?? '';
  const vget = (k) => vb.match(new RegExp(`^\\s+${k}:\\s*(.+)$`, 'm'))?.[1]?.trim();
  const vdate = vget('date');
  const licensed = vget('access') === 'licensed';
  const verified = vdate
    ? `${licensed ? 'Access confirmed (licensed)' : 'Verified'} ${vdate}` +
      (vget('with') ? `${licensed ? ' · via ' : ' · tested with '}${vget('with')}` : '')
    : null;

  // Tags: inline-flow YAML array "[a, b, c]" — the flat parser keeps it as
  // a string; split it back out so the taxonomy is machine-readable in the
  // concatenated corpus too.
  const tags = (data.tags || '')
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  // 2a. Raw Markdown twin, filesystem-mirrored under dist/wiki/.
  const twin = join(dist, 'wiki', rel.replace(/\.mdx$/, '.md'));
  await mkdir(dirname(twin), { recursive: true });
  await writeFile(twin, raw, 'utf8');

  pages.push({
    title: data.title || rel,
    description: data.description || '',
    url: pageUrl(rel),
    mdUrl: `${SITE}/wiki/${rel.replace(/\.mdx$/, '.md')}`,
    verified,
    tags,
    body,
  });
}
console.log(`[postbuild] wrote ${pages.length} raw .md twins under dist/wiki/`);

// 2b. /llms.txt — overview + link index.
const llms = `# Institute for Automated Research — Wiki

> Open, machine-readable knowledge base on autonomous research methodology:
> the datasets, tools, and evaluation protocols behind autonomous,
> adversarially-verified research. Maintained by the Institute for Automated
> Research (${SITE}).

Every page below is also available as raw Markdown at the listed .md URL, and
the entire corpus is concatenated at ${SITE}/llms-full.txt. This content is
explicitly open to AI crawlers and reuse with attribution.

## Pages

${pages
  .map(
    (p) =>
      `- [${p.title}](${p.mdUrl})${p.description ? `: ${p.description.replace(/\s+/g, ' ')}` : ''}`
  )
  .join('\n')}
`;
await writeFile(join(dist, 'llms.txt'), llms, 'utf8');

// 2c. /llms-full.txt — entire corpus, one request.
const full = `# Institute for Automated Research — Wiki (full corpus)
# Source: ${SITE}/wiki  ·  Generated at build.
# License: open for reuse with attribution to the Institute for Automated Research.

${pages
  .map(
    (p) =>
      `\n\n${'='.repeat(78)}\n# ${p.title}\n# ${p.url}\n${p.description ? `# ${p.description.replace(/\s+/g, ' ')}\n` : ''}${p.verified ? `# ${p.verified}\n` : ''}${p.tags.length ? `# Tags: ${p.tags.join(', ')}\n` : ''}${'='.repeat(78)}\n\n${p.body}`
  )
  .join('\n')}
`;
await writeFile(join(dist, 'llms-full.txt'), full, 'utf8');
console.log('[postbuild] wrote /llms.txt and /llms-full.txt');
