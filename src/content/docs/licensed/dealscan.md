---
title: "LPC DealScan: syndicated-loan data (licensed)"
description: >-
  DealScan (LSEG / LPC) is a deal-level database of syndicated and large
  corporate loans: facility pricing, amounts, maturities, covenants, and
  lender shares, reached by most researchers through WRDS. It is licensed: this
  page documents the access path and the gotchas, but the data was not exercised
  here.
sidebar:
  label: DealScan
  order: 8
tags: [credit, syndicated-loans, banking, licensed, deal-data, data:dealscan]
---

:::caution[Licensed: not exercised here]
**DealScan is a licensed commercial dataset** (LSEG / Refinitiv, Loan Pricing
Corporation, reached for most academics through
[WRDS](/wiki/licensed/wrds/)), so it sits in the *Licensed* tier and carries
**no provenance badge**: the access path below was **not** run in this session
(no WRDS/LPC credentials were available). The page documents the access route
and the gotchas; treat it as unverified until someone exercises it through a
licensed account. This is the honest grade under the institute's Verified
discipline.
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

These are the failure modes to expect; they are documented, not verified here.

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
