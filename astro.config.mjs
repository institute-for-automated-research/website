import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readdirSync } from 'node:fs';
import { journalName } from './src/journals.js';

// Distilled literature is organised papers/<journal>/<year>/<slug>.md. Build one
// sidebar group per journal subdirectory (Starlight autogenerate then nests the
// year subfolders inside it). Filesystem-driven, so a new journal/year folder
// appears in the nav with no edit here.
const papersDir = './src/content/docs/papers';
const journalGroups = readdirSync(papersDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => ({
    label: journalName(e.name),
    autogenerate: { directory: `papers/${e.name}` },
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

// The hand-authored marketing site + working-paper series live verbatim in
// public/ (served at /, /about, /papers/...). Starlight owns /wiki/* only.
export default defineConfig({
  site: 'https://instituteforautomatedresearch.org',
  base: '/wiki',
  // Starlight builds physically into dist/wiki/ so it sits beside the
  // hand-authored marketing site (copied to dist/ root by scripts/postbuild.mjs
  // from site/). base:'/wiki' keeps all generated links/assets correct.
  outDir: './dist/wiki',
  // Starlight default directory format; vercel.json no longer force-strips
  // trailing slashes, so these links resolve in one shot (zero redirects).
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: 'IAR Wiki',
      description:
        'Open knowledge base on autonomous research methodology and the data, tools, and protocols behind it.',
      tagline: 'A public knowledge base for autonomous research.',
      // Brand favicon (lives at the deploy root; postbuild copies site/ →
      // dist/, so /favicon.svg resolves for /wiki/* too). The SVG is
      // colour-scheme adaptive on its own; the rest are explicit fallbacks.
      favicon: '/favicon.svg',
      head: [
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon-32.png',
          sizes: '32x32', type: 'image/png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#fafaf7',
          media: '(prefers-color-scheme: light)' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#1a1a1a',
          media: '(prefers-color-scheme: dark)' } },
        { tag: 'meta', attrs: { property: 'og:image',
          content: 'https://instituteforautomatedresearch.org/og.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width',
          content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height',
          content: '630' } },
        { tag: 'meta', attrs: { name: 'twitter:card',
          content: 'summary_large_image' } },
      ],
      customCss: ['./src/styles/theme.css'],
      components: {
        Head: './src/components/Head.astro',
        Footer: './src/components/Footer.astro',
        PageTitle: './src/components/PageTitle.astro',
      },
      editLink: {
        baseUrl:
          'https://github.com/institute-for-automated-research/website/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/institute-for-automated-research/website',
        },
      ],
      pagination: false,
      lastUpdated: true,
      sidebar: [
        {
          // Absolute URL: Starlight base-prefixes internal links to /wiki,
          // so this is the only way to point back out to the site root.
          label: '← Institute for Automated Research',
          link: 'https://instituteforautomatedresearch.org/',
          attrs: { 'aria-label': 'Back to the Institute homepage' },
        },
        { label: 'Wiki overview', link: '/' },
        { label: 'Browse by tag', link: '/tags' },
        {
          label: 'Distilled literature',
          items: [{ label: 'Overview', link: '/papers/' }, ...journalGroups],
        },
        {
          label: 'Free & verified datasets',
          autogenerate: { directory: 'datasets' },
        },
        {
          label: 'Licensed academic access',
          autogenerate: { directory: 'licensed' },
        },
      ],
    }),
  ],
});
