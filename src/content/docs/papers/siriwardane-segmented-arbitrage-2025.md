---
title: "Segmented Arbitrage: Siriwardane, Sunderam & Wallen (2025)"
description: >-
  Distilled: across 32 arbitrage spreads in equity, fixed income, and foreign
  exchange markets (2010-2020), the average pairwise correlation is only 22%,
  far below what canonical intermediary asset pricing models predict. The paper
  attributes this to two distinct forms of segmentation: funding segmentation
  (certain trades rely on specific unsecured vs. secured funding sources) and
  balance-sheet segmentation (intermediaries specialize in certain trades, so
  idiosyncratic balance-sheet shocks move specific spreads). J. Finance 2025,
  paywalled. Nine core results with source locators, datasets used, and the
  theory tested.
sidebar:
  label: Siriwardane-Sunderam-Wallen 2025
  order: 1
tags: [paper-summary, asset-pricing, arbitrage, limits-to-arbitrage, intermediary-asset-pricing, fixed-income, foreign-exchange, equities, panel-regression, event-study, svar, peer-reviewed, unreplicated, data:bloomberg, data:cftc-cot, data:markit-cds, data:crane-mmf, data:preqin, data:gsw-yields, data:cboe-options, data:wrds]
paper:
  authors: Emil N. Siriwardane, Adi Sunderam, Jonathan Wallen
  year: 2025
  venue: The Journal of Finance 80(5), October 2025, 2543–2590
  venueShort: J. Finance 2025
  licenseShort: paywalled
  resultsCount: 9
  doi: 10.1111/jofi.13469
  license: 'Wiley VOR terms (confirmed via Crossref DOI metadata: content-version vor, URL http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days 0, start 2025-08-04); artifact p.2543 states © 2025 the American Finance Association; no Creative Commons licence found'
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/Journal of Finance site; checked 2026-05-31)'
  redistribution: 'extract-only; paywalled Wiley VOR licence does not permit mirroring'
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13469
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0].content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=0, start=2025-08-04; no CC licence present'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 2543–2590 of the PDF on disk); all results extracted from the PDF with table/figure/page locators. Not human-verified. Not reproduced. Replication code is published as Supporting Information but has not been run here.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough to
know what it found without reading all 48 pages. To replicate or extend it,
obtain the full source via the
[DOI](https://doi.org/10.1111/jofi.13469) (paywalled).

## TL;DR

Using daily data on 32 no-arbitrage spreads across equity, fixed income, and
foreign exchange markets over January 2010 to February 2020, the paper
documents that the average pairwise correlation of arbitrage spreads is only
0.22, far below what integrated-intermediary models predict. The paper argues
this reflects two types of segmentation: (i) funding segmentation, where
certain trades (equity spot-futures, equity options box, CIP) rely on
unsecured funding while others rely on secured (repo) funding, so that shocks
to unsecured funding markets raise unsecured spreads but not secured ones; and
(ii) balance-sheet segmentation, where intermediaries specialize in certain
trades, so idiosyncratic balance-sheet shocks (JPMorgan London Whale 2012,
Deutsche Bank CDS exit 2014) move specific arbitrage spreads but not others.
A sign-restricted SVAR shows the high-dimensional factor structure of spreads
is driven largely by weakly correlated supply shocks on the arbitrageur side.

## Core results

Magnitudes and significance are as reported; `*`/`**` = 10%/5%. Locators
point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Average pairwise correlation of arbitrage spreads is 22%**, far below the single-factor benchmark | Table II Panel A, p. 2560 | Mean ρ = 0.22, SD = 0.30; 75th pctile = 0.42; 90% of pairs reject H₀: ρ > 0.67 (p = 0.00); N = 496 pairs |
| R2 | **Low correlations persist even within same-tenor trades**, ruling out measurement error and noise-trader risk | Table II Panels B–D, pp. 2560–2561; Figure 3, p. 2562 | Short-tenor mean ρ = 0.19; after 1-month moving average, 10 PCs needed to explain 90% of variation; overnight IOER–GCF pair ρ = 23% |
| R3 | **Supply shocks from sign-restricted SVAR are weakly correlated** (avg 16% pairwise), not demand shocks | Figure 4, p. 2567 | Average ρ of supply shocks across all futures-based trades = 16%; average ρ of demand shocks also 16%; supply shocks within equity SF cluster higher at 62%; 1% upper bound on quarterly supply-shock correlations = 37% |
| R4 | **Unsecured arbitrages load strongly on TED spread; secured arbitrages do not** | Table III, p. 2569 | Unsecured β(TED) = 0.49\*\* (t = 4.58); secured β(TED) = 0.07 (t = 1.33, insignificant); unsecured spreads approximately 7× more sensitive to TED than secured |
| R5 | **2016 MMF reform raised unsecured arbitrage spreads by ~12 bps; secured spreads unaffected** | Table IV col. (1), p. 2573; Figure 5, p. 2571 | β = 11.77\*\* (t = 2.47); dynamic estimates show initial spike of 18.03\*\* at reform month, elevated for 3+ months; pass-through ≈ 0.59, matching OLS TED coefficient |
| R6 | **Fidelity IPrime MMF outflows specifically move equity spot-futures spreads but not other unsecured or secured spreads** | Table V, p. 2575 | OLS: Fidelity flows coef = −0.55\*\* (t = −3.86) for equity SF; IV estimate = −1.09\*\* (t = −2.25); CIP/Box coef = −0.14\* (t = −1.84, significant at 10% only); secured coef = 0.01 (insignificant) |
| R7 | **JPMorgan London Whale balance-sheet shock raised equity spot-futures spreads relative to other unsecured spreads** | Figure 7C, p. 2582 | Equity SF spreads significantly higher vs. other unsecured arbitrages following March 1, 2012 and June 13, 2012; widening persisted for several months; JPM CP rates unchanged, ruling out funding channel |
| R8 | **Deutsche Bank's 2014 CDS market exit raised CDS-bond arbitrage spreads relative to other secured spreads** | Figure 8B, p. 2584 | Effect significant at 5%; relative widening persisted over 5 months; other secured and unsecured arbitrage spreads unaffected |
| R9 | **Fixed-income hedge fund losses predict future increases in secured (not unsecured) arbitrage spreads** | Table VII, p. 2586 | Secured β(FI Arb HF Return\_{t-1}) = −0.66\*\* (t = −3.04); unsecured β = 0.00 (t = 0.01); driven by Treasury-swap and CDS-bond sub-strategies |

**Overall (paper's conclusion).** Riskless arbitrage is segmented. Both
funding segmentation (unsecured vs. secured funding markets) and balance-sheet
segmentation (intermediary specialization) drive low correlations across
arbitrage spreads. The evidence implies that intermediary asset pricing models
most naturally describe individual market segments rather than capital markets
as a whole.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Bloomberg (spot rates, FX forwards, OIS rates, futures prices, Treasury yields, inflation swaps, CDS via Markit) | Construction of all 32 arbitrage spreads; FX CIP, equity spot-futures, Treasury spot-futures, Treasury-swap, TIPS-Treasury series | No page yet |
| van Binsbergen, Diamond & Grotteria (2019) box rates extended by authors using CBOE SPX options data | Equity options (box arbitrage) spreads at 6-, 12-, 18-month tenors | No page yet |
| Markit (cash bond and CDS pricing) | CDS-bond basis construction for IG and HY bonds | No page yet |
| CFTC Commitments of Traders (Traders in Financial Futures, weekly) | Quantities data on positions by dealer, hedge fund, and asset-manager type for futures-based trades | No page yet |
| Crane data / SEC Form N-MFP | MMF total net assets and holdings, for MMF reform analysis | No page yet |
| Preqin Pro Hedge Fund Database | Hedge fund returns data; fixed-income arbitrage strategy flag | No page yet |
| Federal Reserve yield curve models (Gurkaynak, Sack, Wright 2007/2010) | Zero-coupon constant-maturity Treasury and TIPS yields for TIPS-Treasury arbitrage | No page yet |
| CRSP / Compustat (via WRDS) | Supporting equity holdings data (Y-9C bank trading book filings cited; CRSP implied for stock characteristics) | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| Coalition Greenwich / S&P (qualitative) | JPMorgan equity derivatives market share since 2015 (cited contextual fact) | No page yet |

Sample: 32 arbitrage spreads, daily, January 1, 2010 to February 29, 2020
(post-GFC, pre-Covid). CDS-bond and Treasury-swap series start Sep 2011 for
some maturities. CFTC quantity data weekly from July 2010.

## Theory tested

**Stylized model (Section I).** The paper presents a reduced-form model of
competitive, atomistic arbitrageurs facing K balance-sheet constraints and L
funding sources. The key theoretical benchmarks are: (i) a single
balance-sheet constraint with funding integration implies all spreads move
with a single factor and are perfectly correlated; (ii) a single frictional
funding factor with balance-sheet integration implies the same; (iii) either
balance-sheet or funding segmentation breaks perfect correlation and generates
a high-dimensional factor structure. The model is not estimated structurally;
it organizes the empirical tests.

**Hypothesis tested:** Are cross-market arbitrage spread correlations
consistent with a representative intermediary facing balance-sheet and
funding integration, as assumed in the He-Krishnamurthy (2013) and
Garleanu-Pedersen (2011) class of models?

**Identification:** (a) OLS panel regressions of arbitrage-implied riskless
rates on TED spreads (funding proxy), with standard errors clustered by
strategy-month. (b) Quasi-natural-experiment event study of the 2016 SEC
Rule 2a-7 MMF reform (a plausibly exogenous shock to unsecured bank funding)
using a differences-in-differences design. (c) Instrumental variables
(passive Fidelity MMF flows) for equity-repo funding shocks. (d) Dynamic
DiD event studies of the 2012 JPMorgan London Whale and 2014 Deutsche Bank
CDS exit as balance-sheet shocks. (e) Sign-restricted Bayesian SVAR (Uhlig
2005; Arias, Rubio-Ramirez, Waggoner 2018) on weekly spread and quantity data
to separate supply from demand shocks.

## When to read the full paper

Obtain the article via [DOI 10.1111/jofi.13469](https://doi.org/10.1111/jofi.13469)
if you are: evaluating the cross-market structure of limits to arbitrage;
testing intermediary asset pricing models across market segments; studying
the 2016 MMF reform's effects on derivatives markets; replicating the SVAR
decomposition or the event studies; or checking specific coefficient estimates
in the Internet Appendix. The locators above point to the exact tables and
figures. For "what did this paper find," the table above is the intended
default.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 80(5), October 2025,
pp. 2543–2590. DOI: 10.1111/jofi.13469. © 2025 the American Finance
Association. Published by Wiley under the Wiley VOR terms; paywalled.

This distillation was extracted by an LLM on 2026-05-31 and is **not
human-verified or independently reproduced**. Extraction is extract-only:
core results and locators reproduced for research commentary; no verbatim
reproduction of substantial portions. Contact the publisher for reuse rights.

> Siriwardane, Emil N., Adi Sunderam, and Jonathan Wallen. "Segmented
> Arbitrage." *The Journal of Finance* 80, no. 5 (October 2025): 2543–2590.
> DOI: 10.1111/jofi.13469.
