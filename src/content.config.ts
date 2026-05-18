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
        // Distilled third-party paper. Bibliographic identity + the four
        // provenance facts grounded on the Kwan-Liu-Matthies specimen:
        // license/access/machineAccess are independent and each
        // empirically recorded (the Verified discipline, applied to
        // rights). `pdf` is set only when redistribution is permitted and
        // the verbatim mirror is hosted under /library.
        paper: z
          .object({
            authors: z.string(),
            year: z.number(),
            venue: z.string(),
            doi: z.string().optional(),
            // e.g. "CC BY 4.0 (asserted — artifact p.791, version
            // unspecified; recorded as publisher/AFA OA standard)"
            license: z.string(),
            access: z.enum(['open', 'paywalled', 'preprint']),
            // What an automated fetch of the canonical source returns,
            // with date — e.g. "blocked-402 (Wiley, 2026-05-17)".
            machineAccess: z.string(),
            // Descriptive (like license/machineAccess), not an enum:
            // starts with the disposition (hosted / extract-only) and may
            // carry the licence rationale. Kept structured in frontmatter
            // so the rationale stays out of page prose.
            redistribution: z.string(),
            // Hosted verbatim mirror, site-root path (omit if extract-only).
            pdf: z.string().optional(),
            // Distillation provenance as a *list* of attestations, not a
            // sentence: each is (who/what, when, role). Attestations stack
            // — a later model or named human re-checking the distillation
            // appends an entry; nothing is overwritten. role: `extracted`
            // (the original distillation), `verified` (re-checked against
            // the source), `reproduced` (replication code actually run).
            extraction: z
              .array(
                z.object({
                  by: z.string(), // model id or human name
                  date: z
                    .union([z.string(), z.date()])
                    .transform((d) =>
                      (d instanceof Date ? d.toISOString() : d).slice(0, 10)
                    ),
                  role: z.enum(['extracted', 'verified', 'reproduced']),
                  note: z.string().optional(),
                })
              )
              .min(1),
            // Licence-verification trail: where the licence was confirmed
            // against an authoritative source (not the artifact alone),
            // when, by what, and the raw finding. Structured so the "how
            // we proved it" lives in metadata, not page prose.
            licenceVerification: z
              .array(
                z.object({
                  source: z.string(), // e.g. "Crossref REST works/<doi>"
                  checked: z
                    .union([z.string(), z.date()])
                    .transform((d) =>
                      (d instanceof Date ? d.toISOString() : d).slice(0, 10)
                    ),
                  by: z.string(),
                  found: z.string(),
                })
              )
              .optional(),
            rightsSignalConflict: z.boolean().default(false),
          })
          .optional(),
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
