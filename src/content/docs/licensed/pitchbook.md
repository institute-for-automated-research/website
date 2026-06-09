---
title: "PitchBook: private-capital and deal data (licensed)"
description: >-
  PitchBook (Morningstar) is a deal-level database of venture capital, private
  equity, and M&A: startups and their funding rounds, investors, valuations, and
  exits. It is licensed: this page documents the access path and the gotchas,
  but the data was not exercised here.
sidebar:
  label: PitchBook
  order: 9
tags: [private-equity, venture-capital, licensed, deal-data, data:pitchbook]
---

:::caution[Licensed: not exercised here]
**PitchBook is a licensed commercial dataset** (Morningstar), so it sits in the
*Licensed* tier and carries **no provenance badge**: the access path below was
**not** run in this session (no PitchBook credentials were available). The page
documents the access route and the gotchas; treat it as unverified until someone
exercises it through a licensed account. This is the honest grade under the
institute's Verified discipline.
:::

**PitchBook** is a **deal-level private-capital** database. It tracks startups
and private companies with their founding year, industry, and location; venture
and private-equity **funding rounds** (date, amount, investors, post-money
valuation); funds and their limited partners; and **exits** through IPO and M&A.
It is used in, for example
[Chen & Ewens](/wiki/papers/jf/2025/chen-venture-capital-startup-agglomeration-2025/)
for VC fund and startup data and LP commitment information,
[Hu & Ma](/wiki/papers/jf/2025/hu-persuading-investors-video-based-2025/) for
startup characteristics and funding rounds (alongside Crunchbase), and
[Barkai & Panageas](/wiki/papers/jf/2025/barkai-value-employment-2025/) for IPO
and M&A exit valuations by founding-year cohort.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** PitchBook Data (a Morningstar company).
- **Coverage:** private companies, deals, funds, and investors globally, with
  the deepest coverage in venture capital and private equity.

## Access (when licensed)

- **Direct from PitchBook.** Through the PitchBook platform, data exports, the
  Excel plug-in, or an API, keyed on PitchBook company, deal, and fund
  identifiers.
- **Possibly via a library or vendor feed.** Some institutions reach PitchBook
  through bundled products; availability is not confirmed here, so check with
  your library before assuming a given path.
- Credentials are required either way. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Deal coverage is built from public sources plus voluntary input, so it skews
  to visible deals.** Larger, announced, and venture-backed deals are covered
  better than small or undisclosed private transactions; absence of a deal is
  not absence of activity.
- **Valuations and round terms are often estimated or missing.** Post-money
  valuations and deal amounts can be modeled or undisclosed; treat them as
  noisy, and check whether a figure is reported or estimated before using it as
  an outcome.
- **History gets restated.** Deals, companies, and valuations are added and
  revised retroactively as information surfaces, so a current pull is not what
  was knowable at an earlier date. Pin the data vintage and re-pull deliberately
  for point-in-time designs.
- **It overlaps imperfectly with Crunchbase and Preqin.** The same company or
  fund can carry different rounds, amounts, or valuations across vendors. Pick a
  source of truth per field and document discrepancies; papers that use both
  (for example Hu & Ma with Crunchbase) reconcile explicitly.
- **Industry, location, and founding-year fields carry classification noise.**
  These are PitchBook's own tags; state how you bucket them so the categories
  are reproducible.
- **Entity mapping is its own step.** Join on PitchBook company, deal, and fund
  identifiers and confirm the parent/subsidiary and ticker mapping before merging
  with public-market data.

## Citation

Cite the product and vendor, e.g.: *PitchBook private-capital data, PitchBook
Data (Morningstar); data licensed and accessed YYYY-MM-DD.* State the data
vintage, the module (company, deal, fund, or exit), and whether valuations are
reported or estimated.
