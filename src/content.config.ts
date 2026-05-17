import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      // Provenance: when the access recipe on this page was last actually
      // run, and against what. Rendered under the title and surfaced in
      // llms-full.txt — this is what makes the wiki a *verified* knowledge
      // base rather than rehosted documentation.
      extend: z.object({
        // Controlled-vocab tags for the /wiki/tags browse page + per-page
        // chips. Four axes, kebab-case: topic (asset-pricing, factors,
        // anomalies, macro, equities, fundamentals, filings, pensions),
        // access (free, no-api-key, licensed), shape (panel-data,
        // time-series, cross-section, event-data), source (federal-reserve,
        // sec, dol, academic, wrds). Inline-flow YAML in frontmatter so the
        // naive postbuild parser captures it too.
        tags: z.array(z.string()).optional(),
        verified: z
          .object({
            // Accept quoted strings and YAML-native dates alike; normalize
            // to YYYY-MM-DD so authors/agents can't trip on quoting.
            date: z
              .union([z.string(), z.date()])
              .transform((d) =>
                (d instanceof Date ? d.toISOString() : d).slice(0, 10)
              ),
            with: z.string().optional(), // e.g. "test_fred.py"
            url: z.string().url().optional(), // link to the test/script
            // 'free' (default) → "Verified" (green): runnable at no cost.
            // 'licensed' → "Access confirmed (licensed)" (amber): the path
            // was exercised, but the source is paywalled — not free.
            access: z.enum(['free', 'licensed']).default('free'),
          })
          .optional(),
      }),
    }),
  }),
};
