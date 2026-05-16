import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
        { label: 'Overview', link: '/' },
        {
          label: 'Free datasets',
          autogenerate: { directory: 'datasets' },
        },
      ],
    }),
  ],
});
