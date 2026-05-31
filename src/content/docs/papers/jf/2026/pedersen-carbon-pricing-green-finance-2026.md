---
title: "Carbon Pricing versus Green Finance: Pedersen (2026)"
description: >-
  Distilled: a unified model shows when carbon taxes and green finance
  (ESG investing, sustainable finance regulation) can substitute for each
  other and when green finance fails; the sustainable discount rate equals
  the normal rate plus a firm's carbon burden rate. J. Finance 2026,
  CC BY 4.0. Eight core results with source locators, datasets used, and
  the theory tested.
sidebar:
  label: Pedersen 2026
  order: 1
tags: [paper-summary, climate-finance, esg, carbon-pricing, asset-pricing, sustainable-finance, factors, panel-regression, open-access, cc-by, peer-reviewed, unreplicated, data:trucost, data:wrds, data:eia-electricity]
paper:
  authors: Lasse Heje Pedersen
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 561–602
  venueShort: J. Finance 2026
  licenseShort: CC BY 4.0
  resultsCount: 8
  doi: 10.1111/jofi.70022
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2026-02-08; corroborated by artifact p.561 Creative Commons Attribution License notice)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; VOR licence in Crossref DOI metadata overrides the wrapper; not machine-fetchable as of 2026-05-31)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70022
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2026-02-08'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 561–602); eight results extracted from the CC-BY PDF. Not human-verified. Not reproduced. Replication code is published as Supporting Information but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; verdict pass.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 42 pages. To replicate or extend
it, read the full source: the
[original](https://doi.org/10.1111/jofi.70022) (CC BY 4.0; open access).

## TL;DR

In a dynamic general-equilibrium model with green and brown firms, carbon
taxes, and ESG investors, Pedersen shows: (i) when the carbon price is
at the social cost, green finance should not be used; (ii) when carbon
prices are too low, green finance can restore the social optimum if each
firm's cost of capital is set to its *sustainable discount rate*, which
equals the normal rate plus the ratio of untaxed carbon externality to
firm value. Calibration with Trucost emissions and CRSP/Compustat values
shows the market-value-weighted average sustainable discount rate
adjustment for U.S. firms is only 0.19 pp at a 43 $/tCO2 social cost,
while the brown electricity sector requires a 3.2 pp (average) to 8 pp
(alternative calibration) increase. Empirical evidence from Eskildsen
et al. (2024) suggests current green finance has an effect equivalent to
only ~4 $/tCO2, far below what a green transition requires.

## Core results

Magnitudes and significance are as reported. Locators point into the
source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Carbon tax at the social cost is sufficient; green finance should not be used** when carbon is efficiently priced | Proposition 1, p. 576 | Social optimum implemented by scope-1 taxes at τ = S; discount rates stay at r for all firms; green finance distorts the equilibrium if applied on top |
| R2 | **Sustainable discount rate implements the social optimum** when carbon tax is too low, if firms can commit to future emissions | Proposition 4, pp. 578–579, eq. (17) | r\*\_it = r + (S\_{t+1} - τ\_{it+1}) X\_{it+1} / v\_{it}; equals normal rate plus firm's carbon burden rate (untaxed externality scaled by firm value) |
| R3 | **Scope 1+2 sustainable discount rates can handle stranded assets** where scope-1-only rates fail | Proposition 5, pp. 579–580, eq. (18) | Discount rate adds both direct (scope 1) and indirect (scope 2) carbon burden; brown electricity firms collapse as in the social optimum; stranded-asset problem resolved |
| R4 | **Green electricity firms can receive subsidized discount rates** as compensation for implicit over-taxation via scope-2 rules | Proposition 6, pp. 580, eqs. (19)–(20) | Green electricity discount rate r\_gt = r - (S\_{t+1} - τ\_{t+1})(F\_b - F\_g) G\_{t+1} / v\_{gt}; lower than normal rate r; mirrors Proposition 3 green-subsidy result |
| R5 | **Market-value-weighted average sustainable discount rate adjustment is 0.19 pp** for U.S. firms at S = 43 $/tCO2 (scope 1) | Figure 1 / Figure 3, pp. 564, 584; §VI.A | Median scope-1 burden rate 0.01%; market-weighted average 0.19%; scope 1+2 weighted average 0.23% (median 0.04%); most firms near baseline, a minority account for bulk of economy-wide emissions |
| R6 | **Brown electricity sector requires a 3.2 pp average increase** in cost of capital (scope 1); alternative calibration gives 8 pp | Figure 1, p. 564; §VI.C, p. 587, eq. (27) | Brown electricity average 8.2% (3.2 pp above 5% baseline) at S = 43$/tCO2; alternative calibration (zero-profit, F\_b = 820×10\*\*−6 tCO2/kWh, 40% profit margin): r\_bt = 5% + 8.0% = 13% |
| R7 | **Empirical green finance implies an effective carbon tax of only ~4 $/tCO2**, far below the social cost | Figure 1, p. 564–565; Eskildsen et al. (2024) | Slope of 4 on emission-to-value ratio from regressing firms' implied cost of capital; corresponds to implicit S - τ = 4$/tCO2; at least an order of magnitude below what a green transition requires |
| R8 | **Carbon offset markets exhibit low and variable prices**, predicted by the model as a sign of greenwashing | Appendix D, pp. 599–600 | In equilibrium, offset prices must be proportional to quality (φ\_q = φ̄q); any price dispersion implies poor-quality offsets; firms buying low-quality offsets face an effective carbon tax reduced to ~10% of intended level |

**Overall (paper's conclusion).** Green finance is a second-best response
when carbon pricing is inadequate, but implementation challenges (commitment
problems, stranded assets, heterogeneous investors, greenwashing) make it
difficult to deliver the required cost-of-capital adjustments. Regions able
to impose a carbon tax have a clearer path to a green transition.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Trucost (scope 1 and scope 2 emissions, fiscal year 2021) | Firm-level carbon emission data for calibrating sustainable discount rates; scope 1 emissions in tCO2 per fiscal year; scope 2 electricity-based emissions | No page yet |
| CRSP and Compustat (2021) | Market value of equity and book value of debt for constructing firm value v\_{it} used in calibration; also used to identify GICS industry sectors | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| Eskildsen et al. (2024) working paper data | Cross-sectional regression of firms' implied cost of capital on emission-to-asset ratio; slope estimate of 4 used as empirical calibration of effective implicit carbon tax | No page yet |
| U.S. Energy Information Administration (electricity price data, 2021) | Average electricity price 0.11 $/kWh used in alternative calibration (§VI.C) | No page yet |

Sample: U.S. publicly listed firms with Trucost emission data, fiscal year 2021; ~3,000+ firms ranked by scope-1 externality rate (Figure 3).

## Theory tested

**Structural model, theoretically driven.** The paper builds a dynamic
general-equilibrium model with N goods-producing firms (scope 1 and 2
emissions), green and brown electricity producers, and a representative
household with pollution disutility. The social planner's problem
(maximizing household utility subject to resource constraints) defines the
first-best allocation (the star-equilibrium). The model then characterizes
six propositions (and lemmas) on which carbon-pricing and green-finance
instruments implement this social optimum as a competitive equilibrium.

**Identification strategy.** The model is not estimated; propositions are
proved analytically and the appendix provides formal proofs. Calibration
uses external data (Trucost, CRSP/Compustat, EIA) to quantify the
magnitudes implied by the theoretical formulas. The key empirical test is
an indirect one: Eskildsen et al. (2024) regress firms' cost of capital on
emission-to-value ratios to estimate the real-world magnitude of green
finance's effect.

**Key conditions.** Green finance can implement the social optimum only if:
(i) firms can commit to future emissions (ex ante, not ex post); (ii) all
investors fully internalize carbon externalities (or emission-based capital
taxes substitute); and (iii) there are no stranded assets with zero or
negative social value (or the scope-2 / subsidized-discount-rate
implementations are used).

## When to read the full paper

Use the [original article](https://doi.org/10.1111/jofi.70022) if you are:
extending the model to heterogeneous investors or multiple externalities
(see Pedersen 2026, *J. Finance: Insights and Perspectives*); calibrating
sustainable discount rates for a specific sector or carbon-tax scenario;
auditing a specific proposition or appendix proof; or doing a literature
review on the carbon-pricing versus ESG debate. The locators above point
to the exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2). This distillation
was extracted by an LLM on 2026-05-31 and is **not human-verified or
independently reproduced**. The article is open access under CC BY 4.0;
this page is an adaptation (core results extracted and re-expressed;
changes were made).

> **Attribution (CC BY 4.0).** Pedersen, Lasse Heje.
> "Carbon Pricing versus Green Finance." *The Journal of Finance* 81, no. 2
> (April 2026): 561–602. DOI: 10.1111/jofi.70022. © 2026 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
