---
title: "Paying Too Much: Bhutta, Fuster & Hizmo (2026)"
description: >-
  Distilled: many U.S. mortgage borrowers significantly overpay relative
  to rates available in their market on the same day; overpayment is
  largest for FHA and low-FICO borrowers and rises when market interest
  rates are low; borrower sophistication (shopping and knowledge) strongly
  predicts lower rates and competition benefits sophisticated borrowers
  most. J. Finance 2026, paywalled. Eight core results with source
  locators, datasets used, and the theory tested.
sidebar:
  label: Bhutta-Fuster-Hizmo 2026
  order: 1
tags: [paper-summary, mortgage-markets, consumer-finance, price-dispersion, borrower-sophistication, household-finance, panel-regression, peer-reviewed, unreplicated, data:optimal-blue, data:nsmo, data:mcr-nmls, data:hmda]
paper:
  authors: Neil Bhutta, Andreas Fuster, Aurel Hizmo
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 49–90
  venueShort: J. Finance 2026
  licenseShort: paywalled
  resultsCount: 8
  doi: 10.1111/jofi.70001
  license: 'Paywalled (© 2025 the American Finance Association; Crossref license[] returns content-version=vor URL=http://onlinelibrary.wiley.com/termsAndConditions#vor and content-version=tdm URL=http://doi.wiley.com/10.1002/tdm_license_1.1, both delay-in-days=0, start=2025-12-09; no CC licence found)'
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/Journal of Finance publisher site; checked 2026-05-31)'
  redistribution: extract-only
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 49–90); eight results extracted from the PDF. Not human-verified. Not reproduced. Replication code available as Supporting Information at the publisher site but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; R7 lender and application-process satisfaction figures corrected from -23/-19 pp to -2.3/-1.9 pp (decimal-point errors); all other locators and magnitudes confirmed correct.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70001
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2025-12-09; license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1, delay-in-days=0, start=2025-12-09; no CC licence entry present'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 42 pages. To replicate or extend
it, access the full source at the
[original](https://doi.org/10.1111/jofi.70001) (paywalled).

## TL;DR

Using a proprietary platform dataset of 3.6 million rate-lock agreements
(Optimal Blue, Jan 2015 to Dec 2019) linked to real-time lender offer
distributions, the paper constructs an *Expected Gain from Additional
Search (EGain)* metric: the rate reduction a borrower could expect by
obtaining one more quote from a randomly drawn lender. FHA borrowers
average 28 bp of EGain; jumbo borrowers average 4 bp. Overpayment rises
when market interest rates are low, consistent with behavioral factors
reducing shopping effort. Substantial rate dispersion persists even within
the same lender, branch, and loan officer on the same day. Expensive
lenders earn higher profits: a 1 pp rate premium translates to $4.05 more
gross income per $100 originated, with no evidence of better service
quality. NSMO survey data show that a composite borrower sophistication
index (shopping and knowledge) predicts rates 23 bp lower for the most
vs. least sophisticated, and the benefit of lower market concentration
accrues primarily to sophisticated borrowers.

## Core results

Magnitudes and significance are as reported; `*`/`**`/`***` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **FHA borrowers have the largest expected gain from additional search** | Table II, p. 66; Figure 2, p. 65 | Mean EGain = 28 bp for FHA vs. 17 bp conforming, 10 bp super-conforming, 4 bp jumbo; 25% of FHA borrowers have EGain above 40 bp |
| R2 | **Low-FICO and high-LTV borrowers overpay more, conditional on loan amount** | Table III, p. 67 | FICO>=740 vs. [640,660]: coef -0.097\*\*\* (col 1); adding lender-branch FEs reduces but does not eliminate the FICO gap |
| R3 | **EGain falls when market interest rates are higher** | Table IV, p. 70; Figure 3, p. 69 | A 1 pp rise in the 10-yr Treasury yield reduces average EGain by about 5 bp (coef -0.051\*\*\*, col 1); effect persists after lender-branch FEs (coef -0.026\*\*, col 3); stronger for unconstrained borrowers (DTI <= 36: interaction +0.012\*\*\*) |
| R4 | **Substantial residual rate dispersion remains after controlling for all observable characteristics, lender, branch, and LO** | Table V, p. 73; Table VI, p. 75 | 90-10 percentile gap: 55 bp raw (col 3); 26 bp after full lender, branch, and LO FEs (col 10); FHA 90-10 gap = 31 bp, jumbo = 24 bp in most restrictive spec; gap for same-branch same-day identical borrowers = 31 bp (col 8) |
| R5 | **Larger lenders and those with high FHA share are more expensive and more profitable** | Table VII, p. 79; Table VIII, p. 81 | Size quartile 4 lender FE: +0.127\*\*\* pp (col 1); FHA share coef: +0.385\*\*\* (col 2); 1 pp higher rate associated with $4.05\*\*\* more gross income per $100 originated (Table VIII) |
| R6 | **Expensive lenders have higher costs but higher net income; higher costs mostly reflect personnel, not service quality** | Table VIII, p. 81 | Gross expenses rise $3.50\*\*\* per $100 per 1 pp rate; net income rises $0.45\*\* (residential) and $0.24\*\* (all lines); technology and occupancy effects are small |
| R7 | **More expensive mortgages are not associated with better service; borrowers paying more are less satisfied** | Table IX, p. 84 | A 100 bp more expensive mortgage: satisfied with interest rate -13\*\*\* pp, satisfied with lender -2.3\*\*\* pp, application process -1.9\*\* pp; overall satisfaction coefficient -0.035\*\*\* |
| R8 | **Borrower sophistication (shopping and knowledge) strongly predicts lower mortgage rates; competition benefits sophisticated borrowers most** | Table X, p. 86 | Sophistication Index coef: -0.226\*\*\* (col 2); applied to 2+ lenders for better terms: -0.075\*\*\*; knows their interest rate: -0.060\*\*\*; interaction Sophistication x County HHI: +0.050\*\* (col 3), meaning lower concentration helps sophisticated borrowers more |

**Overall (paper's conclusion).** A large fraction of U.S. borrowers,
especially FHA and low-FICO borrowers targeted by government homeownership
programs, overpay for mortgages. Limited borrower sophistication provides
lenders with market power even in low-concentration markets. Overpayment
also impedes pass-through of monetary policy easing to mortgage rates.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Optimal Blue rate-lock and pricing-insight data (Jan 2015 to Dec 2019; ~3.6M locks; 20 MSAs for offer data) | Primary dataset: locked mortgage rates, lender offer distributions, loan/borrower characteristics; basis for EGain construction | No page yet |
| Mortgage Call Reports (MCR/NMLS), 2015:Q1 to 2019:Q4; 162 unique lenders | Nonbank lender income, expenses, and profitability; merged with Optimal Blue to study lender market power | No page yet |
| National Survey of Mortgage Originations (NSMO), waves 1-26, 2013-2019; 22,567 mortgages | Borrower sophistication, shopping behavior, knowledge, satisfaction; merged with administrative credit/servicing data | No page yet |
| HMDA (Home Mortgage Disclosure Act) | Lender classification (bank vs. nonbank); market concentration (HHI) | No page yet |

Sample sizes: lock data 3.6M (full) / 67,537 (matched to offer data for EGain); dispersion analysis 2,996,149; MCR-Optimal Blue merge 162 lenders, 1,897 lender-quarters; NSMO 22,567 mortgages.

## Theory tested

**No original structural model.** The paper is empirical. It tests
predictions from search-theoretic models of price dispersion and consumer
search (Carlson and McAfee (1983), Baye et al. (2006)) and from the
literature on limited financial sophistication in consumer finance
(Hastings et al. (2013), Woodward and Hall (2012), Agarwal et al.
(2015, 2017)). The main hypotheses tested: (i) borrowers with lower
financial sophistication obtain worse mortgage terms; (ii) overpayment
varies systematically with borrower and loan characteristics; (iii)
market concentration interacts with borrower sophistication in
determining rates. Identification relies on comparing locked rates to the
contemporaneous distribution of lender offers for identical loans
(same day, same MSA, same FICO/LTV/program), within-market OLS with rich
fixed effects (lender, branch, loan officer, MSA-by-month), and NSMO OLS
regressions with administrative loan/borrower controls.

## When to read the full paper

Access the [original](https://doi.org/10.1111/jofi.70001) if you are:
replicating (code available in the journal's Supporting Information);
studying the EGain measure construction in detail (Section III and Internet
Appendix Sections IV-V); reviewing robustness across loan programs and
lender types; or tracing the monetary policy transmission implications
(Section VI). The locators above point to the exact tables and figures.
For "what did this paper find," the table above is sufficient.

## Attribution & rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026,
pp. 49–90. © 2025 the American Finance Association. This distillation
was extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The paper is paywalled; redistribution is
extract-only. Cite as:

> Bhutta, Neil, Andreas Fuster, and Aurel Hizmo. "Paying Too Much?
> Borrower Sophistication and Overpayment in the U.S. Mortgage Market."
> *The Journal of Finance* 81, no. 1 (February 2026): 49–90.
> DOI: 10.1111/jofi.70001.
