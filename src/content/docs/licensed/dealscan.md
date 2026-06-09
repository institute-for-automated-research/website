---
title: "LPC DealScan: syndicated-loan data (licensed)"
description: >-
  DealScan (LSEG / LPC) is a deal-level database of syndicated and large
  corporate loans: facility pricing, amounts, maturities, covenants, and
  lender shares, reached by most researchers through WRDS. It is licensed: this
  page documents the access path and the gotchas; the access path was exercised
  through a licensed WRDS session.
sidebar:
  label: DealScan
  order: 8
tags: [credit, syndicated-loans, banking, licensed, deal-data, data:dealscan]
verified:
  date: 2026-06-09
  with: live DealScan query (dealscan.currfacpricing) through a licensed WRDS session
  access: licensed
---

:::note[Access confirmed via a licensed WRDS session]
The keystone query `SELECT * FROM dealscan.currfacpricing LIMIT 1` was run
against the live dataset through a licensed WRDS session on 2026-06-09,
so this page carries the amber "Access confirmed (licensed)" badge. Reproducing
the access path still requires the reader's own WRDS account and the
institution's DealScan entitlement (licensed, not open).
:::

**DealScan** is a **syndicated-loan** database, built by the Loan Pricing
Corporation (now part of LSEG / Refinitiv). It records corporate loan
**deals** (packages) and the **facilities** (tranches) within them: amount,
all-in spread and pricing, maturity, loan type and purpose, covenants, and the
lender syndicate with each lender's share. It is a common source in
bank-lending and loan-pricing research: used in, for example
[Flanagan](/wiki/papers/jf/2025/flanagan-value-bank-lending-2025/) for the value
of bank lending,
[Anderson, Du & Schlusche](/wiki/papers/jf/2025/anderson-arbitrage-capital-global-banks-2025/)
for global-bank loan exposures, and
[Griffin, Nini & Smith](/wiki/papers/jf/2026/griffin-loan-covenant-violations-decline-2026/)
for loan covenant structure.

- **Cost:** licensed, subscription. No free tier. Most academics reach it
  through [WRDS](/wiki/licensed/wrds/).
- **Vendor:** LSEG / Refinitiv (Loan Pricing Corporation).
- **Coverage:** syndicated and large bilateral corporate loans globally, with
  the deepest coverage of the US syndicated market; history back to the late
  1980s, thinner early on.

## Access (when licensed)

- **Through WRDS.** The common academic path is the WRDS DealScan tables; see
  [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) for the connection recipe.
- **Direct from LSEG.** Through LSEG's loan-data products and the LoanConnector
  lineage, keyed on DealScan facility and package identifiers.
- Credentials are required either way. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented.

- **It is an origination snapshot, not loan performance.** DealScan records the
  deal as arranged; it does not track drawn balances, repayments, or defaults
  over the life of the loan. Do not read it as a performance panel.
- **The DealScan-to-Compustat link is a separate, imperfect step.** Matching
  borrowers to public-firm identifiers uses the legacy Chava-Roberts link, now
  the WRDS DealScan-Compustat linking table, which has coverage gaps and
  vintage breaks. Re-merge deliberately and report match rates.
- **Coverage skews to large syndicated deals.** Small and bilateral loans are
  under-covered, and early-1990s coverage is thin; absence of a loan is not
  absence of borrowing.
- **Amendments create multiple records.** A single facility can appear several
  times as it is amended; decide whether you want origination terms or the
  amended terms and deduplicate accordingly.
- **Package versus facility level.** Many fields live at the facility (tranche)
  level and others at the package (deal) level; mixing the two double-counts or
  mis-weights. State the level of analysis.
- **Pricing-field definitions matter.** The headline "all-in-drawn spread"
  bundles fees in a specific way and is missing for many facilities; state the
  pricing field and how you handle missing spreads.
- **Identifier migration.** Legacy LoanConnector identifiers and the newer LSEG
  identifiers coexist across vintages; pin which identifier scheme your pull
  uses before linking across files.

## Citation

Cite the product and vendor, e.g.: *LPC DealScan syndicated-loan data, LSEG /
Refinitiv, accessed via WRDS; data licensed and accessed YYYY-MM-DD.* State the
data vintage, the level of analysis (package or facility), the pricing field,
and the borrower-link table used.
