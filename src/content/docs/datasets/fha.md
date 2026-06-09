---
title: "FHA single-family mortgage data"
description: >-
  HUD publishes public aggregate data on FHA-insured single-family mortgages,
  but the loan-level origination-and-performance microdata used in default
  research is restricted administrative data. This page documents both and the
  gotchas; the restricted file was not exercised here.
sidebar:
  label: FHA
  order: 31
tags: [mortgage, housing, microdata, data:fha]
---

:::caution[Restricted loan-level data: not exercised here]
The FHA **loan-level** origination-and-performance microdata used in academic
default research is **restricted administrative data**, often matched to
confidential HMDA, reached through HUD or a supervisory arrangement; it carries
**no provenance badge** because there is no access path we can run here. HUD
does publish **public aggregate** FHA products (described below), which are
free, but they are not the loan-level file. The
[Frame, Huang, Jiang, Lee, Liu, Mayer & Sunderam](/wiki/papers/jf/2025/frame-impact-minority-representation-mortgage-2025/)
paper states its underlying FHA microdata is proprietary and was not accessed.
This is the honest grade under the institute's Verified discipline.
:::

**FHA single-family data** describes mortgages insured by the Federal Housing
Administration (part of HUD). Two distinct things travel under this name:

- **Public aggregates (free).** HUD publishes the FHA Single Family Portfolio
  Snapshot (monthly endorsement and portfolio counts), the FHA Single Family
  Loan Performance Trends report, the Annual Report to Congress on the Mutual
  Mortgage Insurance Fund, and Neighborhood Watch (lender-level early-default
  and early-claim rates).
- **Loan-level microdata (restricted).** The population of FHA single-family
  originations with borrower, loan-term, and delinquency-outcome fields is
  administrative data. It is used in, for example
  [Frame, Huang, Jiang, Lee, Liu, Mayer & Sunderam](/wiki/papers/jf/2025/frame-impact-minority-representation-mortgage-2025/)
  for the population of FHA originations and a default analysis (90+ days
  delinquent), reached as confidential data and matched to confidential HMDA.

- **Cost:** public aggregates are free; the loan-level microdata is restricted,
  not for sale.
- **Source:** HUD / Federal Housing Administration.
- **Coverage:** FHA-insured single-family mortgages (a selected, higher-LTV,
  more first-time-buyer population), not the whole mortgage market.

## Access

- **Public aggregates.** Reach the FHA single-family data products from HUD's
  FHA data pages and Neighborhood Watch (`neighborhoodwatch.hud.gov`). These
  are aggregate or lender-level, downloadable without an account.
- **Restricted loan-level.** The loan-level origination-and-performance file is
  obtained through HUD or a supervisory arrangement, frequently matched to the
  confidential HMDA microdata at the Federal Reserve, inside a controlled
  environment with disclosure review. There is no public download.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; the restricted file was not run here.

- **Public aggregates are not the loan-level file.** The portfolio snapshot is
  monthly counts and the performance trends are aggregates; neither substitutes
  for loan-level outcomes. Do not infer borrower-level results from the public
  products.
- **FHA is a selected population.** FHA insures lower-down-payment, higher-LTV,
  more first-time-buyer loans, so FHA default rates do not generalise to the
  conventional or jumbo market. State the population.
- **"Default" is defined several ways.** Ninety-plus days delinquent, insurance
  claim, and foreclosure are different events; pick one and state it. Cure and
  reinstatement create spells, so a static default flag misses the dynamics.
- **Servicing transfers fragment loan histories.** A loan can change servicers
  over its life, so assembling a clean performance panel requires tracking the
  loan, not the servicer.
- **The research file is disclosure-controlled.** Loan-level FHA work matched
  to confidential HMDA leaves the secure environment only after review and
  cannot be redistributed, so results are not reproducible from public files.

## Citation

Cite the specific FHA product used (a named public aggregate, or the restricted
loan-level administrative data), with the vintage, the population, and the
default definition. For restricted loan-level work, state the access route and
that output was disclosure-reviewed.
