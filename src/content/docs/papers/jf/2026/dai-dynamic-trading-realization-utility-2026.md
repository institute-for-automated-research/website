---
title: "Dynamic Trading with Realization Utility: Dai, Qin & Wang (2026)"
description: >-
  Distilled: a jump-diffusion model with two-layered mental accounts shows
  that investors can optimally sell stocks at deep losses when savings are
  sufficient, and sell losing stocks after a price rebound when savings are
  low; leverage strengthens the disposition effect while leverage constraints
  mitigate it. J. Finance 2026, paywalled. Seven core results with source
  locators, the structural model described, and datasets (none: theory paper).
sidebar:
  label: Dai-Qin-Wang 2026
  order: 1
tags: [paper-summary, asset-pricing, disposition-effect, behavioral-finance, realization-utility, prospect-theory, portfolio-choice, structural-model, peer-reviewed, unreplicated]
paper:
  authors: Min Dai, Cong Qin, Neng Wang
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 189–238
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.13472
  license: 'Paywalled; VOR licence URL in Crossref is http://onlinelibrary.wiley.com/termsAndConditions#vor (Wiley standard terms, not CC); TDM licence URL is http://doi.wiley.com/10.1002/tdm_license_1.1. No open-access or CC licence found.'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/J. Finance site; confirmed via Crossref metadata 2026-05-31)'
  redistribution: extract-only
  resultsCount: 7
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 189–238, all sections and appendices); seven results extracted from the PDF. Not human-verified. Not reproduced. No empirical data are used; this is a purely theoretical paper.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; all seven rows confirmed correct; figures, thresholds, and quantitative values match the PDF exactly, no fixes required.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13472
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=17, start=2026-02-18; license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1, delay-in-days=0, start=2026-02-01. No CC licence present.'
  rightsSignalConflict: false
---

**What this is.** The paper's core theoretical results, model structure, and
predictions: enough to know what it found without reading all 50 pages. To
replicate or extend it, read the full source at the
[canonical DOI](https://doi.org/10.1111/jofi.13472) (paywalled).

## TL;DR

Dai, Qin, and Wang build a continuous-time jump-diffusion model in which an
investor receives utility bursts from realizing stock gains and losses at the
individual stock level, while also managing a dynamic mental trading budget
shared across all investment episodes. The key departure from prior
realization-utility models (Barberis-Xiong 2012, Ingersoll-Jin 2013,
He-Yang 2019) is that the investor is not forced to invest his entire budget
in a single stock: he can save a fraction in the risk-free asset or use
leverage. This intensive margin, combined with downward jumps in stock prices,
generates two new predictions: (i) an investor with sufficient savings
voluntarily sells a stock at an arbitrarily deep loss to reset his reference
level, and (ii) an investor with low savings will not sell a deep loser but
will sell it after its price rebounds just enough. Leverage amplifies the
disposition effect; leverage constraints dampen it.

## Core results

Magnitudes and thresholds are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | With sufficient savings (w\* > 0), the investor optimally saves 63.5% of his budget and allocates only 36.1% to the stock each trade | §III.A, Figure 2, p. 205–206 | Baseline: w\* = 1.76; stock share = 1/(1 + θ_p + w\*) = 36.1%; value of saving option = 21% of mental trading budget (Δ(w\*) = 21%, Figure 2 Panel B) |
| R2 | Savings cause the investor to realize losses sooner than in IJ (2013), reducing the disposition effect | Figure 3, p. 207 | Loss-realization boundary x\* = 0.69 in baseline model vs 0.55 in IJ (2013); downside loss in dollars is one-third of the IJ (2013) model because savings absorb the hit at the trading-account level |
| R3 | Leverage (w\* < 0) strengthens the disposition effect: loss-realization threshold falls and gain-realization threshold rises | Figure 4, p. 208 | At σ = 20%: w\* = −0.36; x\* falls from 0.6 (IJ 2013) to 0.47; x-bar rises from 1.03 to 1.04; the option to use leverage is worth 31% of the investor's trading budget |
| R4 | Binding leverage constraints mitigate the disposition effect by forcing earlier loss realization | Figure 5, p. 209 | Tightening κ from 0.79 to 0.59 raises loss-realization threshold x\* from 0.47 to 0.52; gain-realization threshold x-bar unchanged at 1.04 |
| R5 | Investors prefer stocks with high or low volatility, not intermediate volatility; leverage users prefer low-volatility stocks, savers prefer high-volatility stocks | Figure 6, p. 210 | Scaled value v-hat is U-shaped in σ with minimum at σ = 25%; investors use leverage when σ < 25% and save when σ > 25%; v-hat at σ = 25% equals 7.95 (same as IJ 2013, where no saving/leverage is available) |
| R6 | With downward jumps and sufficient savings (Case A, σ = 30%), the investor voluntarily realizes deep losses for all x in (0, 0.38); saving w\* = 0.24 means 19.2% of budget is in the risk-free asset, making deep-loss realization optimal | Figure 7, §IV.A, p. 213–214 | Three-region solution: gain-realization at x ≥ 1.03; holding for x in (0.38, 1.03); voluntary loss realization for all x in (0, 0.38) including x near 0; payoff function f(w\*, 0) = 2.3 > 0 |
| R7 | With low savings (Case B, σ = 24%), the investor holds a deep-loss stock (deep-loss holding region x in (0, 0.04)) but sells after the price rebounds just enough to exit the deep-loss region | Figure 8, §IV.B, p. 214–215 | Four-region solution: deep-loss holding for x in (0, 0.04); loss-realization for x in (0.04, 0.34); normal holding for x in (0.34, 1.03); gain-realization for x ≥ 1.03; w\* = 0.02 (only 1.9% in savings) |

**Overall (paper's conclusion).** The two-layered mental account generates
qualitatively new loss-realization predictions that diffusion-only models
cannot produce. The sell-at-deep-loss (Case A) and sell-after-rebound
(Case B) predictions arise from the interaction between the dynamic trading
budget and downward jumps. Both predictions are consistent with observed
retail investor behavior. Quantitatively, the option to save in the risk-free
asset is worth over 20% of the investor's total trading budget in calibrated
diffusion models.

## Datasets used

This paper is purely theoretical. No empirical dataset is used; all results
are derived analytically or via numerical solution of the model. No data tags
apply.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| None | Theory and calibration only; parameter values (λ, μ, σ, r, etc.) are taken from prior literature (Andersen et al. 2022, standard equity-premium estimates) | N/A |

## Theory tested

**Structural realization-utility model (original).** The paper builds on and
extends:
- Barberis and Xiong (2012): piecewise-linear realization utility, no saving or leverage.
- Ingersoll and Jin (2013): S-shaped (CPT) realization utility, no saving or leverage.
- He and Yang (2019): S-shaped utility with terminal expected utility and adaptive reference point, no saving or leverage.

**New features:**
1. Two-layered mental accounts: a stock-level account for each utility burst
   and a dynamic trading-account budget (Π_t) that evolves across episodes.
2. The investor can save a fraction of his budget in the risk-free asset
   (intensive margin: w\* > 0) or use leverage (w\* < 0).
3. Stock prices follow a jump-diffusion process (downward jumps with Poisson
   arrival rate ρ = 0.73/year, expected drop 14%).

**Identification / solution method:** Hamilton-Jacobi-Bellman (HJB) equation
and variational inequality (impulse-control / optimal-stopping problem).
Homogeneity of the value function in the reference level B reduces the state
space to two scaled variables (x = X/B, w = W/B). Closed-form solutions exist
for the diffusion model without liquidity shocks; the jump-diffusion model is
solved numerically via a penalty-method iteration.

**Predictions tested against:** The model's predictions are compared
qualitatively with empirical findings in Barber et al. (2019), Heimer and Imas
(2022), An et al. (2024), and Hartzmark (2015). The paper is not an empirical
study; it does not run regressions or portfolio sorts.

## When to read the full paper

Read the [original](https://doi.org/10.1111/jofi.13472) if you are: extending
the realization-utility framework to allow saving or leverage; studying the
disposition effect under jump risk; looking for the closed-form solution
procedure (Appendix B) or the variational-inequality proofs (Appendix A);
or evaluating the model's quantitative calibration against empirical
disposition-effect magnitudes. The locators above point to the exact figures.
For "what did this paper find," the table above is sufficient.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026,
pp. 189–238. DOI: 10.1111/jofi.13472. © 2026 the American Finance
Association. This distillation was extracted by an LLM on 2026-05-31 and is
**not human-verified or independently reproduced**. The article is paywalled;
no open-access or CC licence was found in Crossref metadata. This page
contains only extracted findings (extract-only).

> Dai, Min, Cong Qin, and Neng Wang. "Dynamic Trading with Realization
> Utility." *The Journal of Finance* 81, no. 1 (February 2026): 189–238.
> DOI: 10.1111/jofi.13472.
