---
title: "War Discourse and the Cross Section: Hirshleifer, Mai & Pukthuanthong (2025)"
description: >-
  Distilled: a war-discourse factor (WarFac) derived from 7 million New York Times
  articles via semisupervised topic modelling predicts the cross section of stock
  returns with a significant, negative return premium across six broad sets of test
  assets. J. Finance 2025, paywalled. Eight core results with source locators,
  datasets used, and the theory tested.
sidebar:
  label: Hirshleifer-Mai-Pukthuanthong 2025
  order: 1
tags: [paper-summary, asset-pricing, anomalies, text-as-data, factors, disaster-risk, return-predictability, panel-regression, portfolio-sort, peer-reviewed, unreplicated, data:nyt-news, data:wrds, data:ken-french, data:open-source-asset-pricing]
paper:
  authors: David Hirshleifer, Dat Mai, Kuntara Pukthuanthong
  year: 2025
  venue: The Journal of Finance 80(6), December 2025, 3589–3637
  venueShort: J. Finance 2025
  doi: 10.1111/jofi.13482
  license: 'Paywalled. © 2025 the American Finance Association (asserted on artifact p. 3589). Crossref DOI metadata returns license content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start 2025-09-01; Wiley standard terms, not an open licence.'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/Crossref vor terms; checked 2026-05-31)'
  redistribution: 'extract-only. © American Finance Association; no CC licence; redistribution not permitted.'
  resultsCount: 8
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 3589–3637 of the print PDF). Eight results extracted from the paywalled PDF. Not human-verified. Not reproduced. Data and code available upon request from the authors (per p. 3603 fn. 16).
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; verdict pass.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13482
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2025-09-01. No CC licence present. Copyright: © 2025 the American Finance Association (artifact p. 3589).'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 49 pages. To replicate or extend
it, consult the [original](https://doi.org/10.1111/jofi.13482) (paywalled)
or request data and code from the authors.

## TL;DR

Using 7,000,000 *New York Times* articles spanning 1871 to 2019, the paper
builds a monthly war-discourse index (*War*) via a semisupervised topic model
(sLDA, one seed word: *war*), then defines the war factor WarFac as the
AR(1) innovation in *War*. Loadings on WarFac significantly and negatively
predict expected returns across six sets of test assets covering up to 4,964
portfolios (138 HXZ long-short anomalies, 1,372 HXZ single-sorted, 904 CZ
single-sorted, 360 ML-based nonlinear, and 128 and 2,190 own-constructed
portfolios), with a monthly return premium ranging from about -0.66% to
-3.32% per month. WarFac is incremental to the Fama-French six-factor model
and to news-based uncertainty indexes (NVIX, GPR). A mimicking portfolio
(WMP) earns an annualised Sharpe ratio of 1.73 and passes the Pukthuanthong
et al. (2019) factor-identification protocol and the Giglio-Xiu three-pass test.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | WarFac commands a **significant negative return premium** on 138 HXZ long-short anomaly portfolios | Table I Panel A, Table II Panel A, p. 3607–3611 | λ = -1.33%/mo (t = -2.87\*\*\*) standalone; remains -0.47%\*\* with all FF6+M4+DHS+Q5 factors; R² = 48% as single factor vs 59–77% for multifactor benchmarks |
| R2 | WarFac return premium is **negative and significant for all six sets** of test assets; consistently ranks in the top three among 11 nontraded factors | Table I (all panels), p. 3607–3610 | λ ranges from -0.66%\*\* (HXZ single-sorted, t = -2.25) to -3.32%\*\*\* (ML portfolios, t = -3.42); no other nontraded factor achieves this across all six sets |
| R3 | WarFac **explains 62% of cross-sectional variance** in ML-based nonlinear portfolio returns as a single factor, outperforming FF6 (41%), M4 (40%), DHS (35%), Q5 (58%) | Table II Panel D, p. 3617–3618 | Single-factor R² = 62%; adding WarFac to FF6 raises R² by 34%; common pricing error falls from 3.3% to near zero |
| R4 | WarFac return premium is **incremental to traded factors** (WMP, MKT, SMB, HML, RMW, CMA, MOM and mispricing factors); CMA and WarFac are the only factors significant across all six test-asset sets | Table III (all panels), p. 3619–3622 | WarFac: -1.33%\*\*\* to -3.32%\*\*\* depending on test assets; CMA also consistently significant; WMP -2.19%\*\* to -3.32%\*\*\* |
| R5 | WarFac is **incremental to NVIX and GPR** uncertainty indexes; NVIX and GPR do not command significant return premia across all test assets | Table IV (all panels), p. 3623–3624 | With all three factors, WarFac: -1.04%\*\* (HXZ long-short), -2.76%\* (ML portfolios); NVIX_War2Fac: insignificant for HXZ and ML; GPRFac: insignificant across all panels |
| R6 | WarFac **prices industry portfolios** with a negative premium, incremental to the CrisisFac (crisis event counts) of Berkman et al. (2011) | Table V, p. 3626 | 30-industry portfolios: λ(WarFac) = -0.24%\* (t = -1.89) alone; -0.32%\*\* (t = -2.39) with CrisisFac and CWarFac jointly; 49-industry: -0.28%\*\* (t = -2.16) in joint specification |
| R7 | WMP (the traded mimicking portfolio for WarFac) has a **Sharpe ratio of 1.73**, the highest among all factors in the sample, and generates significant alphas against all benchmark factor models | §V.A and Internet Appendix Table IA.III, p. 3627–3628 | Monthly average return = -3.32%, monthly SD = 6.64%; annualised Sharpe = 1.73; monthly alpha vs all factors ≈ 3.10%\*\*\* (t-stat in Internet Appendix); WMP passes three-pass test and factor-identification protocol |
| R8 | WarFac **captures a distinct tail risk**: return premium survives after controlling for CAPM beta, bear beta, downside beta, VIX beta, volatility beta, jump beta, coskewness, skewness beta, tail beta, and idiosyncratic volatility | §VII.A and Internet Appendix Table IA.VII, p. 3632 | WarFac premium remains significant with all tail-risk mimicking portfolios included; it is the only nontraded factor with a significant beta return premium on HXZ single-sorted portfolios in this horse race |

**Overall (paper's conclusion, p. 3634).** Loadings on the war-discourse factor
strongly predict the cross section of stock returns with a negative premium,
consistent with rational rare-disaster hedging (good hedges earn low premia)
or with behavioral overweighting of war prospects (war-sensitive stocks are
overpriced). The war premium is incremental to all standard factor models
and to other news-based uncertainty measures, and is driven by factual war
news rather than opinion articles.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| *New York Times* full text, Jan 1871–Oct 2019 (~7M articles) | Source corpus for sLDA topic modelling; constructs the *War* index | no page yet; proprietary/licensed archive |
| CRSP monthly stock returns and characteristics | Returns for all six test-asset sets; underlying portfolio construction data | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| Compustat | Firm fundamentals for anomaly characteristic construction | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| Hou, Xue & Zhang (2020) HXZ anomaly portfolios (138 long-short, 1,372 single-sorted) | Primary test-asset sets; Jul 1972–Dec 2016 | no page yet; available from HXZ replication files |
| Chen & Zimmermann (2022) single-sorted portfolios (904) | Third test-asset set; available from open-source-asset-pricing project | [Open Source Asset Pricing](/wiki/datasets/open-source-asset-pricing/) |
| Bryzgalova, Huang & Julliard (2023) ML-based nonlinear portfolios (360) | Fourth test-asset set; tree-based nonlinear portfolios | no page yet |
| Ken French Data Library (size, B/M, momentum portfolios) | Basis assets for WMP time-series mimicking; Fama-French factor benchmarks | [Ken French Data Library](/wiki/datasets/ken-french/) |
| Berkman, Jacobsen & Lee (2011) crisis event counts | CrisisFac and CWarFac benchmarks for §IV.B industry tests; data from sites.duke.edu/icbdata | no page yet |
| NVIX (Manela & Moreira 2017) | Benchmark news-based uncertainty index; horse-race test in §IV.A | no page yet |
| GPR index (Caldara & Iacoviello 2022) | Benchmark geopolitical risk index; horse-race test in §IV.A | no page yet |

Sample period for asset pricing tests: Jul 1972–Dec 2016 (532 months). *War* index: Jan 1871–Oct 2019.

## Theory tested

Two competing (and observationally equivalent) frameworks are tested and
supported:

1. **Rational rare-disaster risk** (Barro 2006, 2009; Gourio 2008; Gabaix
   2012): investors demand a risk premium for bearing war-related disaster
   risk; assets that pay off when war risk is high (good hedges) command
   lower expected returns. A negative return premium on WarFac is the
   prediction.

2. **Behavioral overweighting** (Daniel, Hirshleifer & Sun 2020; cumulative
   prospect theory): investors overweight the probability of rare disasters
   such as war, overvaluing stocks that perform well under high war risk,
   depressing their subsequent returns. A negative return premium follows
   for the same empirical reasons.

**No original structural model.** The paper is empirical. Identification
strategy: standard two-pass Fama-MacBeth cross-sectional tests (Cochrane
2005, ch. 12) with Shanken (1992) corrected standard errors. First pass:
time-series regressions of individual portfolio excess returns on factors
to estimate factor loadings; window July 1972 to December 2016 (T = 532
for WarFac). Second pass: cross-sectional regression of time-series average
excess returns on loadings to estimate the return premium. Robustness:
Pukthuanthong et al. (2019) factor-identification protocol (Tables IA.XV,
IA.XVI) and Giglio-Xiu (2021) three-pass test (Table IA.XVII).

## When to read the full paper

Use the original at [doi.org/10.1111/jofi.13482](https://doi.org/10.1111/jofi.13482)
(paywalled) if you are: replicating (data and code available from authors on
request per fn. 16); extending the sLDA war-discourse methodology to other
corpora or time periods; doing a literature review where the full robustness
battery (seed-word variants, ARMA(1,1), sLDA vs LDA comparisons, tail-risk
horse races) matters; or auditing a specific coefficient. The locators above
point to the exact table.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 80(6), December 2025,
pp. 3589–3637. © 2025 the American Finance Association. This distillation
was extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The underlying article is paywalled; no verbatim
PDF is hosted here.

> Hirshleifer, David, Dat Mai, and Kuntara Pukthuanthong. "War Discourse and
> the Cross Section of Expected Stock Returns." *The Journal of Finance* 80,
> no. 6 (December 2025): 3589–3637. DOI: 10.1111/jofi.13482.
> © 2025 the American Finance Association. Extract-only; redistribution
> of the original article is subject to Wiley/AFA terms.
