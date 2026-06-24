---
title: "Spain CIR: Central de Informacion de Riesgos credit register (restricted access)"
description: >-
  The CIR is the Banco de Espana's confidential loan-level credit register
  covering corporate loans by Spanish banks, with bank supervisory data matched
  to it. It is confidential supervisory data. This page documents what it is and
  the gotchas, but it was not exercised here.
sidebar:
  label: Spain CIR
tags: [credit-register, banks, credit, spain, central-bank, data:spain-cir]
---

:::caution[Confidential supervisory data: not exercised here]
**The CIR is confidential supervisory data** held by the Banco de Espana. It is
**not for sale and not publicly downloadable**: it carries **no provenance badge**
because there is no access path we can run here. Researchers reach it only through
a Banco de Espana affiliation or an approved restricted-data arrangement, inside
a secure environment, with output subject to disclosure review. The page documents
what the collection is and the gotchas; treat it as unverified. This is the honest
grade under the institute's Verified discipline.
:::

**The CIR** (Central de Informacion de Riesgos) is the Banco de Espana's credit
register: a near-complete loan-level record of corporate lending by Spanish banks,
with credit volumes, maturities, and default/non-performance status, matched to
**bank-level supervisory data** (balance sheet, capital, liquidity, ROA, NPL
ratios). It is one of the longest-running credit registers and a workhorse for
Spanish credit-supply and monetary-transmission research. A paper we distill uses
it:
[Jimenez, Kuvshinov, Peydro & Richter](/wiki/papers/jf/2026/jimenez-monetary-policy-inflation-crises-2026/)
use the CIR for loan-level monthly data on all corporate loans by Spanish banks,
1984 to 2008Q3 (a 10% random sample), with credit volumes, maturities, and
defaults, matched to Banco de Espana bank supervisory characteristics.

- **Cost:** not for sale. Restricted-access confidential supervisory data.
- **Collector:** Banco de Espana (the CIR; matched supervisory reports).
- **Coverage:** corporate loans by Spanish banks above the reporting threshold,
  monthly, with a long history; the threshold and scope have changed over time.

## Access (restricted)

- **No public download.** The microdata is confidential and is not posted.
- **Through a Banco de Espana affiliation or approved program.** Access is limited
  to researchers at the Banco de Espana or others granted entry to the restricted
  data, worked inside a secure environment with output subject to disclosure
  review.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The reporting threshold censors small loans.** Only loans above the threshold
  are reported, and it has changed over the register's life; a borrower can enter
  or leave for reporting reasons. Do not read a missing loan as no lending.
- **A random sample is sometimes used, not the full register.** Some projects (and
  the distilled paper) draw a random sample (for example 10%) for tractability;
  sampling changes the standard errors and the multi-bank-firm structure. Be
  explicit about whether you use the full register or a sample.
- **Drawn versus committed and default timing.** Credit drawn, credit committed,
  and the date a loan is flagged non-performing are distinct; using the wrong one
  mismeasures supply or risk. Match the concept and the default definition to your
  question.
- **Identifier joins and bank mergers.** Firms and banks are linked across the CIR,
  the supervisory data, and firm-financials sources (the Mercantile Register);
  Spain's heavy bank consolidation breaks bank identifiers over time. Verify the
  crosswalk and track mergers.
- **Multi-bank firms drive the identification.** The register's value is the
  within-firm cross-bank variation; single-bank firms cannot be used for
  borrower-fixed-effect designs. Keep the multi-bank structure in mind.
- **Output is disclosure-reviewed and cannot be redistributed.** Results leave the
  secure environment only after review, and the microdata itself cannot be shared.

## Citation

Cite the source, e.g.: *Central de Informacion de Riesgos (Banco de Espana),
confidential supervisory data; accessed under restricted-data arrangement,
YYYY-MM-DD.* State the sample window, whether the full register or a random sample
was used, and the default/non-performance definition.
