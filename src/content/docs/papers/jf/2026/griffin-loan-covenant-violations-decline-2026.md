---
title: "Losing Control: Griffin, Nini & Smith (2026)"
description: >-
  Distilled: the annual share of U.S. public firms reporting a financial
  covenant violation fell roughly 70% from 1997 to 2019; a structural
  decomposition shows the drop is driven mainly by fewer false-positive
  violations and a lower corporate distress rate, not a deterioration in
  lender monitoring ability. J. Finance 2026, paywalled. Nine core results
  with source locators, datasets used, and the theory tested.
sidebar:
  label: Griffin-Nini-Smith 2026
  order: 1
tags: [paper-summary, corporate-finance, debt-covenants, credit-markets, lender-control, panel-regression, peer-reviewed, unreplicated, data:wrds, data:edgar, data:dealscan, data:moodys-urd, data:audit-analytics, data:lopucki-brd]
paper:
  authors: Thomas P. Griffin, Greg Nini, David C. Smith
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 371–412
  venueShort: J. Finance 2026
  licenseShort: paywalled
  resultsCount: 9
  doi: 10.1111/jofi.70005
  license: 'Paywalled, copyright 2025 the American Finance Association. Crossref license[]: content-version vor, URL http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days 0, start 2025-12-14; content-version tdm, URL http://doi.wiley.com/10.1002/tdm_license_1.1. No CC licence found.'
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/J. Finance publisher site; DOI checked via Crossref 2026-05-31)'
  redistribution: extract-only
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 371–412). Nine results extracted directly from tables and figures in the PDF. Not human-verified. Not reproduced. Replication code is listed as Supporting Information at the publisher's site but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; one fix applied -- R7 description changed from "nearly quintupled from Period 1 to Period 3" to "nearly doubled then nearly quintupled" to accurately reflect the P1-to-P2 and P2-to-P3 increases (3.10 to 6.06 to 30.29, roughly tenfold overall), consistent with PDF p. 395 and Table III.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70005
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2025-12-14. license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1, delay-in-days=0. No CC licence present. Copyright: 2025 the American Finance Association (per PDF p. 371).'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 42 pages. To replicate or extend
it, read the full source at the
[original](https://doi.org/10.1111/jofi.70005) (paywalled).

## TL;DR

Using hand-collected SEC filings (10-K/10-Q, 1997-2019) merged with
Dealscan and Compustat, the paper documents that the annual share of U.S.
public firms reporting a financial covenant violation fell roughly 70%,
from about 18% at the 2001 peak to around 5% by 2012 and below that
thereafter. A structural model of optimal covenant design, cast as a
medical-diagnostic analogy (true positives, false positives, true
negatives, false negatives), decomposes the trend. The dominant driver is
a collapse in false-positive violations: lenders set looser covenants,
reducing nuisance violations for nondistressed borrowers. The corporate
distress rate also fell. The true-positive rate (distressed firms that
violate) stayed near 75% through 2011 and only declined modestly after the
global financial crisis. Observable loan-market changes (larger borrowers,
more investment-grade firms, universal-bank arrangers, the shift from
balance-sheet to cash-flow covenants) explain about two-thirds of the
overall drop; the remaining third reflects an unexplained shift in lender
preferences post-2012 consistent with heightened investor sentiment.

## Core results

Magnitudes and significance are as reported; `*`/`**`/`***` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Covenant **violation rate fell roughly 70%** from 1997 to 2019 | Figure 1, p. 378 | Peak ~18% in 2001; ~5% by 2012; stable at ~5% through 2019; new-violation rate fell from ~9% to ~2% over same period |
| R2 | Loan **covenants became fewer and looser** over 1997-2019 | Figure 2, p. 380 | Average covenants per package: ~2.75 (late 1990s) to ~1.5 (2016); tightest-covenant slack ~3x larger at end of sample vs. late 1990s; ex ante covenant strictness (Murfin measure) fell roughly half |
| R3 | **More than half of violations are false positives** (waived with no consequential change) | Figure 3, p. 385 | True positives 2.5%; false positives 2.9%; false negatives 1.1%; true negatives 93.6% of firm-year observations |
| R4 | **False negatives cost lenders 7-11 pps in creditor recovery rates** at bankruptcy | Table I, p. 387 | No-Violation coefficient: -11.4\*\*\* (col. 1), -10.1\*\*\* (col. 2), -9.8\*\*\* (col. 3), -6.7\*\* (col. 4, with Bank Debt Share); N = 403 corporate defaults from Moody's URD |
| R5 | **FPR fell from ~6% to under 0.5%** (a 90% drop), explaining 61% of total violation decline | Table II, Figure 5, pp. 389-391 | Period 1 (1997-2003) FPR 5.3%; Period 3 (2012-2019) FPR 0.5%; FPR drop explains 4.6 pps of total 7.6 pp decline |
| R6 | **Distress rate decline explains 25%** and **TPR decline explains 14%** of the total drop | Table II Panel B, p. 390-391 | Distress rate contributes -1.9 pps; TPR decline (from ~72% to ~52%) contributes -1.1 pps over full period |
| R7 | **Preference parameter R nearly doubled then nearly quintupled** across periods in structural estimates (roughly tenfold overall), while covenant technology improved modestly | Table III, p. 393 | R: 3.10 (1997-2003) to 6.06 (2004-2011) to 30.29 (2012-2019); technology parameter mu_D: 2.21 to 2.68 to 2.65 |
| R8 | **Observable loan-market changes** (borrower size, rating, lender type, covenant type) explain ~52% of FPR decline and ~69% of TPR decline | Table V, p. 402; Table VI, p. 404 | Observable characteristics explain 5.1 pp of the 7.6 pp total violation decline (~two-thirds); borrower size and speculative-grade rating are the largest contributors |
| R9 | **Unexplained post-2012 drop in TPR** is consistent with heightened investor sentiment, not deterioration in covenant technology | Table VII, Figure 10, pp. 405-406 | Absent characteristic changes, R rises ~80% (from 3.10 to 5.69) vs. ~880% raw; counterfactual violation rate 4.0% vs. realized 1.4% in Period 3 |

**Overall (paper's conclusion).** The dramatic decline in covenant
violations is best attributed to a compositional shift in the public
borrower population toward larger, rated firms with transactional lenders
who prefer fewer costly renegotiations, with a modest but real residual
reflecting looser lender preferences post-GFC. The decline does not
primarily signal a deterioration in lenders' ability to monitor distressed
borrowers.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Compustat (WRDS) | Firm financials, firm-year sample construction (85,876 firm-years, 9,618 firms, 1997-2019) | [WRDS](/wiki/licensed/wrds/) (licensed) |
| SEC EDGAR (10-K and 10-Q filings) | Hand-collected covenant violation disclosures; loan amendment exhibits | [EDGAR](/wiki/datasets/edgar/) |
| Dealscan (WRDS) | Loan package and covenant data; covenant strictness measure; lender characteristics (17,724 packages, 5,258 firms) | [WRDS](/wiki/licensed/wrds/) (licensed) |
| CRSP (WRDS) | Stock price and shares outstanding for sample filters and controls | [WRDS](/wiki/licensed/wrds/) (licensed) |
| Moody's Ultimate Recovery Database (URD) | Creditor recovery rates for 403 corporate defaults, 1997-2020 | no page yet |
| Audit Analytics | Bankruptcy filings cross-check for false-negative identification | no page yet |
| UCLA-LoPucki Bankruptcy Research Database | Bankruptcy filing dates for false-negative classification | no page yet |

Sample: 85,876 firm-year observations (Compustat-EDGAR); 17,724 loan packages
(Dealscan); 403 bankruptcies with recovery data (Moody's URD).

## Theory tested

The paper develops a **structural model of optimal covenant design**
framed as a statistical classification problem. Covenants are treated as
binary tests for financial distress, with two error types: false positives
(nondistressed borrowers who violate, triggering costly but unnecessary
renegotiations) and false negatives (distressed borrowers who do not
violate, missing early intervention). The optimal covenant threshold
minimizes total expected costs of both error types (equation (1), p. 382).

Two parameters govern the optimal threshold: (i) covenant "technology"
(mu_D, the ability to discriminate distressed from nondistressed firms,
mapped via a ROC-curve framework), and (ii) loan party "preferences" (R,
the relative expected cost of false positives to false negatives). The
model is estimated by fitting normal distributions to the realized TPR and
FPR series.

Identification: the structural parameters are identified from the
time-series of realized TPR and FPR rates (computed from the SEC-filing
violation sample and Dealscan covenant data), using the delta method for
standard errors. The model delivers a Blinder-Oaxaca decomposition
separating observable market changes from unexplained shifts. The paper is
primarily empirical; the structural model is a lens for decomposition, not
a full equilibrium model with explicit microfoundations for lender behavior.

Key theoretical predictions tested: looser covenants follow from either
(a) a higher relative cost of false positives (shift in R), (b) better
discrimination technology (shift in ROC curve), or (c) lower distress
prevalence. All three are found; the dominant channel is (a) plus (c).

## When to read the full paper

Read the [original](https://doi.org/10.1111/jofi.70005) if you are:
replicating the violation-coding procedure (the text-search and manual
inspection process from SEC filings); extending the structural
covenant-design model; analyzing the Blinder-Oaxaca decomposition in
detail; or checking the Internet Appendix robustness results (alternative
distress measures, ratio-manipulation tests, loan amendment trends).
The locators above point to the exact table. For "what did this paper
find," the table above is sufficient.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026,
pp. 371–412. © 2025 the American Finance Association. This
distillation was extracted by an LLM on 2026-05-31 and is **not
human-verified or independently reproduced**. The paper is paywalled;
only the extract (core results, datasets, theory) is reproduced here
under fair-use principles.

> Griffin, Thomas P., Greg Nini, and David C. Smith. "Losing Control?
> The Two-Decade Decline in Loan Covenant Violations." *The Journal of
> Finance* 81, no. 1 (February 2026): 371–412.
> DOI: [10.1111/jofi.70005](https://doi.org/10.1111/jofi.70005).
> Extract-only; no PDF hosted here.
