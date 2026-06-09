---
title: "Thomson Reuters institutional (13F) holdings: the s34 database (licensed)"
description: >-
  The Thomson Reuters / Refinitiv (now LSEG) Institutional (13F) Holdings
  database, known by its WRDS table family "s34", is a manager-by-quarter panel
  of US institutional equity holdings built from SEC Form 13F filings. It is
  licensed: this page documents the access path and the gotchas, but the data
  was not exercised here.
sidebar:
  label: Thomson 13F (s34)
  order: 14
tags: [equities, institutional-investors, licensed, panel-data, wrds, data:thomson-13f]
---

:::caution[Licensed: not exercised here]
**The Thomson Reuters / Refinitiv Institutional (13F) Holdings database is a
licensed commercial dataset** (LSEG / Refinitiv, reached for most academics
through [WRDS](/wiki/licensed/wrds/)), so it sits in the *Licensed* tier and
carries **no provenance badge**: the access path below was **not** run in this
session (no WRDS credentials were available). The page documents the access
route and the gotchas; treat it as unverified until someone exercises it
through a licensed account. This is the honest grade under the institute's
Verified discipline.
:::

**The Thomson Reuters / Refinitiv Institutional (13F) Holdings database**
(WRDS table family: `s34`) is a **manager-by-quarter panel** of US
institutional equity holdings, built from mandatory SEC Form 13F disclosures.
Each record captures a reporting manager's long US equity positions (shares
held and market value) as of each quarter-end, along with a manager-type
classification. It is a common source in institutional-ownership and
corporate-finance research: used in, for example
[Falato & Scharfstein](/wiki/papers/jf/2025/falato-stock-market-bank-risk-2025/)
for the stock-market and bank-risk analysis (institutional ownership channel),
and
[Guernsey, Guo, Liu & Serfling](/wiki/papers/jf/2025/guernsey-thirty-years-change-evolution-2025/)
for the evolution of institutional ownership over thirty years.

- **Cost:** licensed (via WRDS). No free cleaned tier.
- **Vendor:** Thomson Reuters / Refinitiv (LSEG).
- **Coverage:** 13F-reporting institutions (managers above the 13F AUM
  threshold) quarterly from 1980; US long equity positions only.

## Access (when licensed)

- **Through WRDS.** The common academic path uses the `s34` table family
  on WRDS; see [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) for the
  connection recipe.
- **Raw from SEC EDGAR.** The underlying Form 13F filings are freely available
  from EDGAR, but they are un-cleaned, delivered in raw XML or text with
  uncleaned CUSIPs, and are not a drop-in substitute for the Thomson/Refinitiv
  tables.
- Credentials are required for the Thomson/Refinitiv tables on WRDS. Keep
  them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Coverage gaps and stale holdings, worse in the later sample.** A
  data-quality literature (Ben-David, Franzoni, Moussawi, and others) documents
  that the Thomson/Refinitiv 13F series has coverage gaps and stale or
  carried-forward holdings, and that its coverage of filings degraded relative
  to the raw SEC 13F filings in the later part of the sample (Ben-David,
  Franzoni, Moussawi, and Sedunov, 2021, date a sharp increase in stale and
  dropped holdings to around 2013, with roughly 10% underreporting by 2015).
  Holdings can be carried forward
  across quarters, and the report date (rdate) versus file date (fdate) labels
  can be misaligned. Validate against the raw SEC EDGAR 13F filings, especially
  for recent years, before relying on the series.
- **13F covers only long US equity above the threshold.** Short positions,
  positions below the per-security reporting threshold, non-equity holdings,
  and managers below the $100 million AUM threshold are all absent. The
  database does not represent total ownership; aggregate holdings from it will
  fall short of float.
- **The manager-type (typecode) classification is unreliable and frozen.**
  The typecode field (bank, insurance, mutual fund, etc.) is known to be
  inaccurate for many managers and was not updated as institutions changed
  structure. Do not use typecode splits without re-classifying from an
  independent source.
- **The manager identifier (mgrno) is not stable across mergers.**
  When institutions merge or rename, mgrno assignments can break continuity.
  The mgrno is also separate from security identifiers; linking to CRSP
  requires the s34-to-CRSP link table and careful CUSIP handling (including
  CUSIP changes over time).
- **Confidential-treatment filings and amendments create gaps.**
  Managers may receive confidential treatment on individual positions, delaying
  or omitting those holdings from the public (and therefore the database)
  record. Amendments also mean the same quarter can have multiple filing
  vintages.
- **Raw EDGAR 13F filings differ structurally from the WRDS tables.**
  Raw filings use uncleaned CUSIPs, inconsistent formatting, and lack the
  manager-type and numeric identifiers the Thomson tables supply. They are a
  source for independent verification, not a cleaned substitute.

## Citation

Cite the Thomson Reuters / Refinitiv Institutional (13F) Holdings database
(s34), accessed via WRDS, stating the data vintage, the date of access, how
coverage gaps and stale holdings were handled (exclusion, supplementation with
the raw SEC EDGAR 13F filings, or restriction to a period less affected), and
how the typecode classification was treated
(whether typecodes were used as-is or re-classified from an independent
source).
