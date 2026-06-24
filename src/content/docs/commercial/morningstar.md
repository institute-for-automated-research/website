---
title: "Morningstar fund and sustainability data (licensed)"
description: >-
  Morningstar mutual-fund and ETF data: returns, holdings, categories, star
  ratings, and the Sustainability Rating (globes) and carbon metrics, reached
  through Morningstar Direct or a data licence. It is licensed: this page
  documents the access path and the gotchas, but the data was not exercised here.
sidebar:
  label: Morningstar
tags: [funds, esg, holdings, licensed, data:morningstar]
---

:::caution[Licensed: not exercised here]
**Morningstar data is a paid licensed product**, so it carries **no provenance badge**: the access path below was **not** run
in this session (no Morningstar Direct or data-licence credentials were
available). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**Morningstar** is the standard commercial source for mutual-fund and ETF data:
monthly and daily returns, portfolio holdings, the Morningstar Category
classification, the star rating, fund flows, and fee/share-class detail. For
sustainability research it also publishes the **Morningstar Sustainability
Rating** (the "globes"), portfolio ESG and carbon-risk scores (built on
Sustainalytics inputs), and fund-level sustainable-investing flags. A paper we
distill uses it:
[Parise & Rubin](/wiki/papers/jf/2025/parise-green-window-dressing-2025/) on
green window dressing.

- **Cost:** licensed, subscription. No free tier for the research data (the
  consumer Morningstar.com site is a separate, limited product).
- **Vendor:** Morningstar, Inc. (sustainability inputs from Morningstar
  Sustainalytics).
- **Coverage:** open-end funds, ETFs, and other vehicles across many domiciles,
  with long return histories; sustainability ratings begin in the mid-2010s.

## Access (when licensed)

- **Morningstar Direct or a data feed.** Most academic users query through the
  **Morningstar Direct** desktop/web platform (interactive screening and export)
  or receive a bulk **data feed / Direct Web Services API** under a licence.
  Check which your institution provides.
- **Keyed by SecId and FundId.** Morningstar uses its own identifiers
  (`SecId` for a share class / security, `FundId` for the fund) as the join keys;
  CUSIP and ticker are available but are share-class level and change over time.
- Credentials are required; keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Share class versus fund.** Morningstar data is organized by share class, but
  most analysis wants the fund. Returns, fees, and flows differ across share
  classes of the same fund; aggregate to the fund (value-weight by share-class
  assets) deliberately rather than picking one class or double-counting.
- **Survivorship and the dead-fund question.** The default screen in Direct can
  return only surviving funds; a sample built that way is survivorship-biased.
  Explicitly include obsolete/merged/liquidated funds and use the full universe
  when computing performance.
- **Category reclassification.** The Morningstar Category is reassigned over time
  as a fund's holdings drift, so a fund's category is not constant. Pin the
  category as of the date you need rather than using the current category
  retroactively.
- **The Sustainability Rating is rank-based, recent, and revised.** The globe
  rating is a percentile rank within category, exists only from the mid-2010s
  forward, and its methodology was revised (the 2019 shift to the Sustainalytics
  ESG Risk Rating framework for the underlying portfolio score). Do not treat
  early-vintage and post-revision globes as the same measure, and do not extend
  the series before it existed.
- **Carbon and ESG scores need portfolio coverage.** Portfolio-level
  sustainability metrics are computed only over the rated portion of holdings;
  a fund with low coverage gets a metric off a thin base. Check the coverage
  percentage before conditioning on the score.
- **Backfill and incubation bias.** Funds can enter the database with backfilled
  history, and incubated funds appear only after a successful track record;
  both bias performance upward. Use the date a fund was added when it matters.
- **Identifiers are not stable through corporate actions.** Share-class mergers,
  ticker reuse, and CUSIP changes mean a ticker is not a panel key; join on
  `SecId`/`FundId` and verify links across mergers.

## Reference: common Morningstar data items

| Item | Level | Notes |
|---|---|---|
| Monthly/daily total return | share class | load-adjusted and unadjusted variants exist |
| Net assets / TNA | share class | aggregate to fund for fund-level totals |
| Morningstar Category | fund | reassigned over time |
| Star rating | share class | risk-adjusted, category-relative, trailing |
| Sustainability Rating (globes) | fund | percentile rank within category, mid-2010s on |
| Portfolio ESG / carbon-risk score | fund | depends on holdings coverage |
| Estimated net flow | share class | derived from assets and returns |

## Citation

Cite Morningstar as the source, e.g.: *Morningstar Direct, Morningstar, Inc.,
accessed YYYY-MM-DD* (note Sustainalytics as the sustainability-data source where
relevant). State the access route (Direct or data feed), the identifier used
(`SecId`/`FundId`), and the share-class-versus-fund aggregation so the sample is
reproducible.
