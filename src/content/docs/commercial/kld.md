---
title: "KLD / MSCI ESG ratings (licensed)"
description: >-
  Firm-level environmental, social, and governance ratings: the historical KLD
  STATS strength/concern indicators and the successor MSCI ESG (KLD STATS and
  IVA) ratings, commonly reached through WRDS. It is licensed: this page
  documents the access path and the gotchas, but the data was not exercised here.
sidebar:
  label: KLD / MSCI ESG
tags: [esg, ratings, firm-level, licensed, data:kld, data:msci-esg]
---

:::caution[Licensed: not exercised here]
**KLD / MSCI ESG data is a paid licensed product**, often reached through
[WRDS](/wiki/commercial/wrds/), so it carries
**no provenance badge**: the access path below was **not** run in this session
(no MSCI / WRDS credentials were available). The page documents the access route
and the gotchas; treat it as unverified until someone exercises it through a
licensed account. This is the honest grade under the institute's Verified
discipline.
:::

This page covers one dataset lineage under two slugs (`data:kld` and
`data:msci-esg`). **KLD STATS** is the original firm-level ESG ratings dataset
built by KLD Research & Analytics: for each firm-year it records binary
**strength** and **concern** indicators across categories (environment,
community, human rights, employee relations, diversity, product, governance) plus
"controversial business" involvement screens. KLD was acquired and the product
became **MSCI ESG** (MSCI ESG KLD STATS, and the forward-looking MSCI ESG IVA
ratings). It is the most widely used ESG dataset in the asset-pricing and
corporate-finance literature. Papers we distill use it:
[Duchin et al.](/wiki/papers/jf/2025/duchin-sustainability-greenwashing-evidence-asset-2025/)
on sustainability versus greenwashing, and
[Starks et al.](/wiki/papers/jf/2026/starks-esg-profiles-investor-horizons-2026/)
on corporate ESG profiles and investor horizons.

- **Cost:** licensed; commonly accessed through [WRDS](/wiki/commercial/wrds/)
  where the institution subscribes, or directly from MSCI. No free tier.
- **Vendor:** MSCI ESG Research (formerly KLD Research & Analytics).
- **Coverage:** U.S. public firms; KLD STATS begins in 1991 with a small
  universe that expands over time (to roughly the largest 1,000 U.S. firms in
  2001 and the largest 3,000 in 2003), continuing under MSCI.

## Access (when licensed)

- **Through WRDS or MSCI.** Most academic users pull KLD STATS from the WRDS
  MSCI/KLD library; the forward-looking IVA ratings and the current MSCI ESG
  feed are licensed directly from MSCI. Check which your institution provides.
- **Annual firm-year panel of indicators.** A KLD STATS extract is one row per
  firm per year with the strength and concern indicator columns; you join it to
  returns and fundamentals on a firm identifier (CUSIP/ticker in the file).
- Credentials are required; keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The universe expands over time, so an unbalanced panel is mostly coverage,
  not change.** KLD covers a few hundred firms in the early 1990s and expands in
  steps (notably 2001 and 2003). A firm "becoming rated" is usually the universe
  growing, not a new ESG event. Control for the coverage expansion or restrict to
  a consistently covered set.
- **Indicators are added and dropped across years.** The set of strength and
  concern indicators changes over time (categories are introduced, split, or
  retired), so the raw count of strengths or concerns is not comparable across
  years without rescaling. Normalize by the number of indicators available that
  year before summing or netting.
- **Do not net strengths against concerns naively.** A common net score
  (strengths minus concerns) mixes two distinct constructs and is sensitive to
  the indicator-count changes above; the literature documents that this measure
  is fragile. Be explicit about how you aggregate and test robustness to the
  aggregation choice.
- **The KLD-to-MSCI-IVA methodology break is real.** After the 2010 MSCI
  acquisition the legacy KLD STATS strength/concern format continued for a time
  (through roughly 2013-2014), but the flagship MSCI ESG product moved to the IVA
  industry-relative, letter-graded
  (AAA to CCC) methodology, which is not the same measure and is not directly
  comparable to the old binary indicators. Do not splice KLD STATS and IVA into
  one continuous series.
- **Ratings get revised and restated.** Vintages differ; a rating for a past year
  can change in a later release. Pin the data vintage you used and avoid
  look-ahead from a restated rating.
- **Identifier linking.** Files carry CUSIP and ticker, which are not stable panel
  keys; link to a permanent identifier (e.g. PERMNO via the CRSP/Compustat link)
  and verify the match rather than joining on ticker.

## Reference: KLD STATS category structure

| Category | Indicator type |
|---|---|
| Environment | strengths and concerns |
| Community | strengths and concerns |
| Human rights | strengths and concerns |
| Employee relations | strengths and concerns |
| Diversity | strengths and concerns |
| Product | strengths and concerns |
| Corporate governance | strengths and concerns |
| Controversial business involvement (alcohol, tobacco, gambling, firearms, military, nuclear) | exclusionary screens |

Each indicator is binary (0/1) per firm-year; the count of available indicators
in a category changes across years.

## Citation

Cite the data owner and product explicitly, distinguishing the legacy from the
successor, e.g.: *MSCI ESG KLD STATS (formerly KLD Research & Analytics),
accessed via WRDS YYYY-MM-DD* or *MSCI ESG Ratings (IVA), accessed YYYY-MM-DD.*
State which product and vintage, the years, and the firm identifier used so the
sample is reproducible.
