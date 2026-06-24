---
title: "Lipper eMAXX fixed-income holdings (licensed)"
description: >-
  Lipper eMAXX (LSEG / Refinitiv) is the standard CUSIP-level database of
  fixed-income holdings for insurers, mutual funds, ETFs, and annuities. It is
  licensed: this page documents the access path and the gotchas, but the data
  was not exercised here.
sidebar:
  label: Lipper eMAXX
tags: [fixed-income, bond-holdings, institutional-ownership, corporate-bonds, licensed, data:emaxx]
---

:::caution[Licensed: not exercised here]
**Lipper eMAXX is a paid licensed product** (LSEG / Refinitiv, Lipper), so it carries **no provenance badge**: the access path
below was **not** run in this session (no eMAXX credentials were available). The
page documents the access route and the gotchas; treat it as unverified until
someone exercises it through a licensed account. This is the honest grade under
the institute's Verified discipline.
:::

**Lipper eMAXX** is a quarterly, CUSIP-level database of fixed-income holdings:
who holds which corporate bond, by par amount, across insurance companies,
mutual funds, ETFs, pension funds, and annuities. It is the standard source for
**bond-level investor composition** (the demand side of the corporate bond
market), built from regulatory filings and fund disclosures and keyed to the
bond's CUSIP. A paper we distill uses it:
[Li & Yu](/wiki/papers/jf/2026/li-investor-composition-corporate-bond-liquidity-2026/)
use Lipper eMAXX quarterly holdings to build a bond-level investor-composition
measure (each holder weighted by how actively it trades) when showing that the
growing presence of short-term investors such as mutual funds and ETFs drives the
rising liquidity component of credit spreads.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** LSEG / Refinitiv (Lipper); lineage through Thomson Reuters.
- **Coverage:** corporate (and other) bond holdings at the CUSIP level for
  insurers, mutual funds, ETFs, pensions, and annuities, quarterly. The citing
  paper reports eMAXX captures roughly 40 to 50 percent of corporate bonds
  outstanding by par.

## Access (when licensed)

- **Through an LSEG / Refinitiv (Lipper) entitlement.** The holdings extracts are
  reached via a Lipper / eMAXX subscription; some institutions license it through
  [WRDS](/wiki/commercial/wrds/). Check which route your institution provides.
- **Keyed by CUSIP and quarter.** An extract is holder identity and par holding
  by bond CUSIP over a date range; aggregate to bond-by-quarter to get
  investor-type shares.
- Terminal or API credentials are required. Keep any credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Partial coverage, not the full holder base.** eMAXX captures roughly half of
  corporate bonds outstanding, not all holders; the unobserved tail (households,
  some foreign and private holders) is missing. A bond with low eMAXX coverage has
  a noisily measured investor composition. The citing paper restricts its
  cross-section to bonds with eMAXX coverage above 20 percent for this reason.
- **Holder-type classification drives the result.** Whether a holder is "short
  term" (mutual fund, ETF) versus "long term" (insurer, pension) is the analysis
  variable; the eMAXX entity classification has edge cases (separately managed
  accounts, fund-of-funds, insurer general versus separate accounts). Audit the
  classification before trusting composition shares.
- **Quarterly snapshots miss intra-quarter trading.** Holdings are point-in-time
  at quarter end; turnover and rebalancing inside the quarter are invisible. Do
  not read a quarter-end snapshot as a flow.
- **CUSIP linking and reorganizations.** Bonds must be linked to Mergent FISD /
  CRSP / Compustat identifiers; the join has known mismatches across calls,
  exchanges, and issuer reorganizations. Verify the link.
- **Benchmark coverage against an aggregate.** Because coverage is partial, check
  eMAXX totals against an external aggregate (for example the Federal Reserve
  Flow of Funds corporate-bond holdings by sector) before treating shares as the
  full market.

## Citation

Cite the vendor and product, e.g.: *Lipper eMAXX / LSEG (Refinitiv), accessed
YYYY-MM-DD.* State the holder universe, the coverage threshold applied, and the
quarter range.
