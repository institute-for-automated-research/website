---
title: "Fannie Mae & Freddie Mac single-family loan-level data"
description: >-
  How the GSE single-family loan-level acquisition and performance datasets are
  structured and accessed, why a pipeline cannot pull them no-key (both are free
  but registration-gated behind a click-through), the acquisition vs performance
  split, the pipe-delimited vs CSV format difference, and the quarterly vintages.
sidebar:
  label: Fannie / Freddie loan-level
  order: 61
tags: [mortgages, housing, credit, loan-level, panel-data, free, academic, data:fannie-freddie]
---

:::note[Free, but registration-gated and not exercised here]
The GSE single-family loan-level datasets are **free** (no fee, including for
academic use), but bulk download from both Fannie Mae and Freddie Mac requires a
**no-cost account and a click-through terms acceptance**. The public landing
portals are reachable (HTTP 200), but the data files sit behind the login wall,
so the end-to-end pull was **not** exercised from this session. The page
therefore carries **no provenance badge**: it documents the datasets and the
access path. A researcher registers once (free) and downloads directly.
:::

**The Fannie Mae and Freddie Mac single-family loan-level datasets** are the two
government-sponsored enterprises' public releases of acquisition and monthly
performance records for the single-family mortgages they bought. Each loan has
origination characteristics (FICO, LTV, DTI, rate, term, purpose, geography) and
a monthly performance history (delinquency status, prepayment, default, losses).
They are the standard free microdata for US mortgage credit-risk and
performance research. Used in, for example,
[Rehbein & Rother (2025)](/wiki/papers/rfs/2025/rehbein-social-connectedness-bank-lending-2025/),
where 1.27 million GSE 30-year fixed-rate mortgages (2000 to 2008 originations,
observed to 2018) supply loan-level LTV, rate, delinquency, and default.

- **Cost:** free (no fee; free account and terms acceptance required to download).
- **API key:** none (bulk file download behind a registration portal).
- **Coverage:** Freddie covers roughly 55 million mortgages originated from 1999
  through the latest quarterly cutoff; Fannie's window is comparable. Both append
  new origination quarters over time.
- **Granularity:** one acquisition/origination row per loan, plus monthly
  performance rows per loan.
- **Portals (browser):** Fannie Data Dynamics
  <https://capitalmarkets.fanniemae.com/tools-applications/data-dynamics> ·
  Freddie via Clarity Data Intelligence
  <https://www.freddiemac.com/research/datasets/sf-loanlevel-dataset>

## Access

Both GSEs publish the data through a free registration portal. There is no
anonymous direct link to the bulk files.

- **Fannie Mae** distributes the Single-Family Loan Performance Data through
  Data Dynamics. After a free account and terms acceptance, the portal offers a
  one-click download of the full Acquisition file and the full Performance file,
  in CSV.
- **Freddie Mac** distributes the Single Family Loan-Level Dataset through
  Clarity Data Intelligence. After a free sign-in (the data is free for
  non-commercial and academic use), the download page offers the full dataset,
  the Standard dataset by year, the Non-Standard dataset, sample files, and an
  RPL mapping file. Files are pipe-delimited.

The public documentation (user guides, file-layout and data-dictionary PDFs,
FAQs) is generally readable without an account; the loan-level files and even
the sample files are behind the login.

## Gotchas (the ones that bite pipelines)

- **Two file types per GSE, joined on the loan id.** Acquisition (one static row
  per loan, captured at origination) and Performance (one row per loan per
  month). Do not expect a single combined table; the performance file is the
  large one.
- **Format differs between the two GSEs.** Freddie's files are pipe-delimited
  (`|`), no header, with a fixed column order set by the layout document. Fannie's
  Data Dynamics export is CSV. Column order, field set, and missing-value
  conventions differ, so do not reuse one schema for the other.
- **Click-through terms, so no anonymous fetch.** An automated pull must carry a
  session cookie obtained after accepting the terms; there is no static URL to the
  zips. Plan for a one-time human registration.
- **Quarterly vintages that grow.** Acquisition files are partitioned by
  origination quarter and new quarters are appended over time, so any hardcoded
  "latest quarter" logic rots. Record the vintage you pulled.
- **Freddie Standard vs Non-Standard.** The Non-Standard dataset adds loans
  excluded from Standard (for example certain modified, ARM, or balloon loans);
  the RPL mapping file tracks reperforming loans. Choose deliberately rather than
  mixing them.
- **Scale.** Tens of millions of loans and a monthly panel on top; the
  performance files are tens of gigabytes uncompressed. Stream or chunk; do not
  load whole.
- **Host bot-blocking on top of the login.** The Fannie capitalmarkets host
  returns HTTP 403 to automated requests even before the login, so scripted
  navigation needs a real browser session, not just an authenticated cookie.

## Reference

| Field | Value |
|-------|-------|
| Fannie portal | Data Dynamics (`capitalmarkets.fanniemae.com/tools-applications/data-dynamics`) |
| Freddie portal | Clarity Data Intelligence (`freddiemac.com/research/datasets/sf-loanlevel-dataset`) |
| File types | Acquisition (per loan) + Performance (per loan per month) |
| Fannie format | CSV |
| Freddie format | Pipe-delimited, no header |
| Freddie coverage | ~55M loans, 1999 to latest quarterly cutoff |
| Key required | No key, but free registration + terms acceptance |

## Citation

Cite each GSE dataset separately: Fannie Mae, "Single-Family Loan Performance
Data," and Freddie Mac, "Single Family Loan-Level Dataset," each with the vintage
(origination-quarter range and performance cutoff) and retrieval date. Note in a
methods appendix that access required free registration, since the files are not
anonymously downloadable.
