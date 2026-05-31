---
title: "Investor Factors: Betermier, Calvet, Knupfer & Kvaerner (2025)"
description: >-
  Distilled: pricing factors built from individual investor holdings (Norway
  1997-2017); a two-factor model of the market plus a combined age-wealth
  portfolio prices the cross section of Norwegian equities out-of-sample and
  absorbs established firm factors. J. Finance 2025, paywalled. Eight core
  results with source locators, datasets used, and the theory tested.
sidebar:
  label: Betermier et al. 2025
  order: 1
tags: [paper-summary, asset-pricing, factors, household-finance, equities, portfolio-sort, panel-regression, peer-reviewed, unreplicated, data:titlon-ose, data:vps-norway, data:statistics-norway]
paper:
  authors: Sebastien Betermier, Laurent E. Calvet, Samuli Knupfer, Jens Soerlie Kvaerner
  year: 2025
  venue: The Journal of Finance 80(5), October 2025, 2789–2830
  venueShort: J. Finance 2025
  doi: 10.1111/jofi.13474
  license: 'Paywalled; Crossref DOI metadata returns only the Wiley terms-and-conditions VOR licence (content-version vor, URL http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days 0, start 2025-08-07). No Creative Commons licence found. Copyright 2025 the American Finance Association.'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/AFA site; checked via Crossref metadata 2026-05-31)'
  redistribution: extract-only
  resultsCount: 8
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full PDF read (pp. 2789-2830, 42 pages). All results extracted from the PDF with table/figure/page locators. Not human-verified. Not reproduced. Replication code is listed as Supporting Information at the publisher site but has not been run here.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13474
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0].content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2025-08-07. No CC licence present. Copyright: 2025 the American Finance Association.'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough to
know what it found without reading all 42 pages. For replication or extension,
read the full source at the [original](https://doi.org/10.1111/jofi.13474)
(paywall).

## TL;DR

Using complete administrative stockholdings of Norwegian individual investors
(308,000 investors/month, Feb 1997 to Dec 2017, 535 OSE stocks), the paper
derives theoretical conditions under which investor portfolio holdings reveal
pricing factors for the cross section of equity returns. It then constructs
Investor Pricing Factors (IPFs) by sorting investors into 90 groups by age,
wealth, and other characteristics. A two-factor model consisting of the market
(MKT) and a combined age-wealth portfolio (AW) prices both Norwegian equities
and established firm-based factors, while IPFs outperform firm-factor models
out-of-sample. Portfolio tilts toward the age-wealth factor are positively
linked to financial sophistication and negatively linked to debt and
macroeconomic income risk, consistent with joint hedging and sentiment
channels.

## Core results

Magnitudes and significance are as reported; `**`/`***` = 5%/1%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Two PCs explain 80% of cross-sectional variation** in group portfolio holdings; PC1 tracks the market (R2 = 0.62), PC2 tracks the combined age-wealth portfolio (R2 = 0.55) | Table I, p. 2807 | PC1 alone: 72% of variance; PC1+PC2: 80%; market R2=0.62 on PC1, AW R2=0.55 on PC2 |
| R2 | The combined age-wealth factor (AW) earns a **significant CAPM alpha** of 32 bps/month (3.8%/yr) after controlling for the market | Table II col. (2), p. 2810 | alpha = 0.32%, t = 3.16; CAPM beta on AW = -0.12, t = -6.96 |
| R3 | AW **spans firm factors**: its alpha remains 24 bps/month (sig. 5%) even after controlling for all five FF factors (size, value, momentum, profitability, investment) | Table III col. (5), p. 2813 | alpha = 0.24, t = 2.55; adj. R2 rises from 0.16 to 0.29 but AW alpha never insignificant |
| R4 | IPF\* **prices established firm factors**: adding AW to the market renders momentum, profitability, and investment alphas statistically insignificant and reduces them by ~40% | Table IV, p. 2814 | MOM alpha: 0.77% (CAPM) vs. 0.43% (IPF\*); RMW: 0.73% vs. 0.46%; CMA: 0.52% vs. 0.32%; all three IPF\* alphas statistically insignificant (MOM t=1.04, RMW t=1.42, CMA t=0.99) |
| R5 | **Out-of-sample Sharpe ratio** of IPF\* (0.45) exceeds all firm-factor models (0.19-0.40 range) and is 45% above the market (0.31) | Table V, p. 2817 | IPF\* OOS SR = 0.45; 3-factor age+wealth model = 0.51; best firm model (FIRM-6) = 0.40; market = 0.31; OS/IS ratio for IPF\* = 0.67 vs. 0.43 for all-firm model |
| R6 | Factor tilts **increase monotonically with age and wealth**: tilt rises from -0.3 (investors under 30) to +0.1 (70-75), equivalent to ~1.2%/yr average return difference | Figure 2 + p. 2821 | Tilt range [-0.3, +0.1] over life cycle; 0.4 x 3% = 1.2%/yr gap; holds for new entrants mimicking experienced investors within cohort |
| R7 | **Debt and income beta reduce tilts** (hedging channel) while finance occupation, stock market experience, and female gender raise tilts (sophistication/sentiment channel) | Table VII, p. 2823 | Income beta coef = -0.051 (t = -6.40); debt = -0.047 (t = -5.55); finance occup. = 0.627 (t = 34.60); stock mkt. experience = 0.026 (t = 7.58); male dummy = -0.156 (t = -15.00) |
| R8 | Stocks in the **long leg of AW have higher market cap, book-to-market, and profitability** than short-leg stocks; short-leg stocks have higher CAPM beta (1.02 vs. 0.73), volatility (0.18 vs. 0.08), and turnover | Table VIII, p. 2825 | Long-leg median mkt cap 973M NOK vs. 483M NOK; BtM 0.90 vs. 0.66; profitability 0.06 vs. 0.05; CAPM beta 0.73 vs. 1.02; volatility 0.08 vs. 0.18 |

**Overall (paper's conclusion).** Individual investor portfolios contain
recoverable pricing information. The market and the combined age-wealth
portfolio (long mature/wealthy, short young/less-wealthy investors) form a
parsimonious two-factor model that prices the Norwegian cross section, absorbs
firm factors, and outperforms firm-factor models out-of-sample. Hedging and
sentiment jointly drive investor tilts toward the pricing factor.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Titlon (Oslo Stock Exchange database) | Stock prices, returns, shares outstanding for 535 OSE stocks, 1997-2017 | no page yet |
| VPS (Norwegian Central Securities Depository) | Complete individual investor stockholdings at monthly frequency, 300,000+ investors | no page yet |
| Statistics Norway (Statistisk sentralbyra) | Investor demographics, balance sheets, income, wealth from tax records; annual 1997-2017 | no page yet |
| OSE market index (Norwegian market portfolio) | Benchmark factor; market-cap-weighted portfolio of OSE stocks | no page yet |

Sample: 308,000 individual investors per month on average; 535 unique stocks; 251 months (Feb 1997 to Dec 2017).

## Theory tested

**Structural spanning condition (Section I).** The paper derives a sufficient
condition (Assumption 1) under which investor portfolios observed by the
researcher allow recovery of an exact factor model of equity premia: the
tangency portfolio must lie in the span of the market and long-short investor
portfolios. The paper demonstrates this condition is satisfied under two
complementary theoretical frameworks:

1. **ICAPM with heterogeneous investors** (Merton 1973, Breeden 1979): investors
   deviate from the market due to hedging of labor income and investment
   opportunity shocks; age and wealth drive the deviation portfolios.
2. **Sentiment model** (Fedyk, Heyerdahl-Larsen, and Walden 2013;
   Barberis et al. 2015): younger, less wealthy investors hold sentiment-driven
   portfolios biased away from the tangency portfolio.

Both frameworks predict mature and wealthy investors hold portfolios closer to
mean-variance efficiency and thus earn higher CAPM alphas. Identification uses
PCA on 90 group portfolios, spanning regressions (OLS time-series), and
panel regressions with year, age, and wealth fixed effects (Table VII; standard
errors clustered by calendar year x investor level). The paper is empirical
but grounded in explicit theoretical predictions from the ICAPM and sentiment
literature.

## When to read the full paper

Read the full source if you are: constructing IPFs for other markets or asset
classes; extending the spanning-condition theory to institutional holdings;
using the bootstrap out-of-sample Sharpe methodology (Section III.C) for
factor evaluation; auditing specific coefficients in Tables III-VIII; or
reviewing the Internet Appendix robustness tests (alternative age/wealth
cutoffs, institutional portfolio pricing). The locators above point to the
exact tables.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 80(5), October 2025.
Copyright 2025 the American Finance Association. This distillation was
extracted by an LLM on 2026-05-31 and is **not human-verified or independently
reproduced**. The paper is paywalled; only extracts are reproduced here under
fair use for scholarly commentary.

> Betermier, Sebastien, Laurent E. Calvet, Samuli Knupfer, and Jens Soerlie
> Kvaerner. "Investor Factors." *The Journal of Finance* 80, no. 5 (October
> 2025): 2789-2830. DOI: 10.1111/jofi.13474. Copyright 2025 the American
> Finance Association. All rights reserved. This page contains an
> extract-only distillation by the Institute for Automated Research; the
> verbatim article is available at the publisher site.
