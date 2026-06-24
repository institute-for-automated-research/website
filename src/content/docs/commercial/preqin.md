---
title: "Preqin: private-capital and hedge-fund data (licensed)"
description: >-
  Preqin is a fund-level database of private capital (private equity, venture,
  private debt, real assets) and hedge funds: fund sizes, vintages, returns,
  cash flows, and limited-partner commitments. It is licensed: this page
  documents the access path and the gotchas, but the data was not exercised
  here.
sidebar:
  label: Preqin
  order: 10
tags: [private-equity, venture-capital, hedge-funds, licensed, panel-data, data:preqin]
---

:::caution[Licensed: not exercised here]
**Preqin is a licensed commercial dataset** (Preqin, now part of BlackRock), so
it sits in the *Licensed* tier and carries **no provenance badge**: the access
path below was **not** run in this session (no Preqin credentials were
available). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**Preqin** is a **private-capital and hedge-fund** database. It covers private
equity, venture capital, private debt, real estate, and infrastructure funds,
plus hedge funds, with fund sizes, vintages, strategies, net returns and cash
flows (for performance and PME work), and **limited-partner (LP) commitment**
records that map institutions to the funds they back. It is used in, for example
[Siriwardane, Sunderam & Wallen](/wiki/papers/jf/2025/siriwardane-segmented-arbitrage-2025/)
for hedge-fund returns and a fixed-income-arbitrage strategy flag,
[Chen & Ewens](/wiki/papers/jf/2025/chen-venture-capital-startup-agglomeration-2025/)
for LP commitment data in a home-bias robustness test, and
[Johnston-Ross, Ma & Puri](/wiki/papers/jf/2025/johnston-ross-private-equity-financial-stability-2025/)
for PE fund size, vintage, and first-time-fund indicators.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Preqin (acquired by BlackRock).
- **Coverage:** private-capital and hedge funds globally, with fund, performance,
  LP, and deal modules; depth varies by strategy and region.

## Access (when licensed)

- **Direct from Preqin.** Through the Preqin Pro platform, data exports, or an
  API, keyed on Preqin fund and firm identifiers.
- **Possibly via a library or vendor feed.** Some institutions reach Preqin
  through bundled products; availability is not confirmed here, so check with
  your library before assuming a given path.
- Credentials are required either way. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Reporting is voluntary and partly FOIA-sourced, so selection bias is
  structural.** Fund performance comes from manager submissions and from
  freedom-of-information disclosures by public pension LPs. Funds that report,
  and the LPs subject to disclosure, are not a random sample; survivorship and
  backfill bias both apply, especially to hedge-fund returns.
- **The fund universe is incomplete and overlaps imperfectly with peers.**
  Coverage differs from PitchBook, Burgiss, and Cambridge Associates; the same
  fund can carry different sizes or returns across vendors. Decide on one source
  of truth per field and document discrepancies.
- **LP commitment data is partial.** Commitment records are strongest where
  public LPs must disclose; private LP commitments are thinly covered. Do not
  treat the LP map as the full investor base of a fund.
- **Net versus gross, and PME conventions, must be stated.** Returns are usually
  net of fees, but fee treatment and the public-market-equivalent benchmark
  choice drive the numbers. State the return basis and PME convention explicitly.
- **History gets restated.** Funds and performance are added and revised
  retroactively as managers report; a current pull is not what was known at an
  earlier date. Pin the data vintage and re-pull deliberately.
- **Entity mapping is its own step.** Join on Preqin fund and firm identifiers
  and confirm the manager, fund-family, and portfolio-company mapping before
  merging with other sources.

## Citation

Cite the product and vendor, e.g.: *Preqin private-capital data, Preqin; data
licensed and accessed YYYY-MM-DD.* State the data vintage, the module (fund,
performance, LP, or deal), the return basis, and any PME convention used.
