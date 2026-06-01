---
title: "Asset Pricing and Risk-Sharing under DB vs DC Pensions: Coimbra, Gomes, Michaelides & Shen (2026)"
description: >-
  Distilled: a general equilibrium model with an explicit defined-benefit
  pension fund matches the historical equity premium and riskless rate better
  than a standard PPG model; a shift to defined-contribution plans raises
  the riskless rate, lowers the Sharpe ratio, increases retiree consumption
  volatility and decreases worker consumption volatility. J. Finance 2026,
  CC BY 4.0. Eight core results with source locators, datasets used, and
  the theory tested.
sidebar:
  label: Coimbra-Gomes-Michaelides-Shen 2026
  order: 1
tags: [paper-summary, asset-pricing, pensions, risk-sharing, equity-premium, portfolio-sort, panel-regression, open-access, cc-by, peer-reviewed, unreplicated, data:wrds, data:fred, data:flow-of-funds, data:nipa, data:scf, data:nber-cycles]
paper:
  authors: Nuno Coimbra, Francisco Gomes, Alexander Michaelides, Jialu Shen
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 143–188
  venueShort: J. Finance 2026
  licenseShort: CC BY 4.0
  resultsCount: 8
  doi: 10.1111/jofi.13507
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-10-07; corroborated by artifact p.143 Creative Commons Attribution License notice)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; DOI landing page tested 2026-05-31; VOR CC-BY licence in publisher DOI metadata overrides the wrapper)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13507
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-10-07'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 143–188 of the PDF on disk); all eight results extracted from figures and tables in the CC-BY PDF. Not human-verified. Not reproduced. Replication code not run.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; 7 of 8 rows confirmed exact, R4 corrected (rPPG1 ages 20-35 was 9.9%, Table IV reads 10.0%).
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 46 pages. To replicate or extend
it, read the full source at the [original](https://doi.org/10.1111/jofi.13507).

## TL;DR

The paper builds a general equilibrium incomplete-markets model with an
explicit defined-benefit (DB) pension fund. Calibrated to U.S. data, the
model matches the historical equity premium (7.46% vs. 7.55% in data), the
riskless rate (1.16% vs. 0.86%), and the Sharpe ratio (0.39 vs. 0.36)
better than a standard pass-through model that ignores the fund's endowment
and asset demands. The DB fund's relatively conservative portfolio lowers the
riskless rate and raises the equity premium; stochastic contribution rates
create a new risk channel that raises consumption volatility for workers
and firms. A shift to a DC-only economy produces a higher riskless rate
(3.34% vs. 1.16%), a lower equity premium (4.96% vs. 7.46%), a lower Sharpe
ratio (0.27 vs. 0.39), higher consumption volatility for retirees, and lower
consumption volatility for workers.

## Core results

Magnitudes and significance are as reported. Locators point into the source
PDF (page numbers match the journal pagination printed on each page).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Baseline DB model closely matches key asset pricing moments | Table II, p. 164 | Equity premium 7.46% (data 7.55%); riskless rate 1.16% (data 0.86%); Sharpe ratio 0.39 (data 0.36); stock market participation 59.1% (data 51.1%) |
| R2 | DB model dominates pure-pass-through (PPG) model at same calibration: much higher equity premium and Sharpe ratio | Table III, p. 167 | Baseline: equity premium 7.46%, Sharpe 0.39 vs. PPG: 5.53%, 0.31; PPG riskless rate 4.04% vs. baseline 1.16% |
| R3 | DB pension fund's conservative bond demand is the first pricing channel: raising equity premium and lowering riskless rate | Table V, p. 171 | Varying risky share from 42% to 72% moves equity premium from 10.60% to 5.48% and Sharpe ratio from 0.55 to 0.28 |
| R4 | Stochastic DB contribution rates create a new risk channel: higher cross-sectional consumption volatility for workers | Table IV, p. 170 | SD consumption growth ages 20-35: 10.7% (baseline) vs. 10.0% (rPPG1); ages 36-65: 8.4% vs. 7.6%; retirees (66+): 2.2% vs. 2.6% |
| R5 | Asset pricing results are robust across alternative DB fund portfolio allocation rules | Table II cols (1)-(3), p. 164 | Fixed vs. elastic vs. reaching-for-yield: equity premium 7.46%, 7.58%, 7.39%; Sharpe ratio 0.39, 0.39, 0.38 |
| R6 | DC-only economy (DB phased out) has a substantially higher riskless rate and lower equity premium | Table IX col (2), p. 182 | Riskless rate 3.34% vs. 1.16%; equity premium 4.96% vs. 7.46%; Sharpe ratio 0.27 vs. 0.39 |
| R7 | In the DC-only economy, retiree consumption volatility increases while worker consumption volatility decreases | Table IX col (2), p. 182 | SD cons. growth ages 20-35: 10.1% vs. 10.7%; ages 36-65: 7.4% vs. 8.4%; retirees (66+): 2.8% vs. 2.2% |
| R8 | Lower stock market participation costs in DC economy raise participation but have modest aggregate price effects | Table IX col (3), p. 182 | Participation rises to 79.7% (vs. 57.2% at baseline DC costs); equity premium 4.60% and riskless rate 3.44%, both close to base DC scenario |

**Overall (paper's conclusion).** The endowment and asset demands of DB
pension funds matter for asset pricing and risk sharing in ways that purely
PPG models miss. The shift toward DC plans is characterized by a higher
riskless rate, a lower equity premium and Sharpe ratio, and a redistribution
of consumption risk from retirees to workers.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP (Center for Research in Security Prices) | Asset pricing moments: equity return mean and SD, riskless rate (via Croce et al. 2012 for real rate) | [WRDS / CRSP](/wiki/licensed/wrds/) (licensed) |
| NIPA tables (BEA / Federal Reserve Bank of St. Louis) | Real consumption growth mean and SD; capital-output ratio (tables 1.1.3 and 1.1.5, 1929–2023) | [FRED](/wiki/datasets/fred/), free |
| Flow of Funds (Federal Reserve) | DB pension fund total financial assets and endowment-to-GDP ratio (1970–2023) | [FRED](/wiki/datasets/fred/), free |
| Survey of Consumer Finances (SCF, Federal Reserve) | Historical stock market participation rate (used as calibration target) | no page yet |
| NBER business cycle dates | Calibration of productivity shock Markov chain (recession/expansion probabilities) | no page yet |
| Public Plans Data / Social Security Administration data | Decomposition of DB replacement ratio vs. social security replacement ratio | no page yet |

Sample: U.S. aggregate, 1929–2023 for returns and consumption; 1970–2023 for pension fund data.

## Theory tested

**Structural general equilibrium model.** The paper contributes a new model;
it is not a test of a pre-existing third-party theory. The model is an
overlapping-generations incomplete-markets production economy with:

- Two types of households with heterogeneous preferences (Epstein-Zin-Weil),
  uninsurable idiosyncratic labor income risk (Guvenen, Ozkan, Song 2014),
  borrowing constraints, and limited/endogenous stock market participation.
- A Cobb-Douglas production economy with stochastic depreciation.
- A DB pension fund with an endowment that adjusts contribution rates
  (workers and firms) in response to return shocks.
- A pure-pass-through (PPG) model as the baseline alternative (the standard
  assumption in prior OLG asset pricing work).

**Identification strategy.** The paper uses quantitative calibration to U.S.
data (no reduced-form estimation). The model is solved numerically using the
Krusell-Smith (1998) aggregate forecasting approach. Results are
steady-state comparisons across calibrated economies; there are no
regression-based estimates or t-statistics in the main tables.

**Mechanisms identified.** (i) DB pension funds hold a more conservative
portfolio than households, raising the equity premium and lowering the
riskless rate through the asset demand channel. (ii) Stochastic contribution
rates create indirect equity exposure for non-stockholding workers and firms,
raising cross-sectional consumption volatility and thereby the equity
premium (in the spirit of Constantinides and Duffie 1996). (iii) These effects
require that the pension fund forces some households to save more than their
private optimum; if agents are patient enough to offset the fund's demands,
the pricing differences shrink substantially.

## When to read the full paper

Use the [original article](https://doi.org/10.1111/jofi.13507) if you are:
replicating or extending the quantitative model; examining Internet Appendix
robustness checks (bequest motives, alternative bond supply, transition
dynamics); doing a literature review of intermediary asset pricing or pension
finance; or auditing a specific parameter value from the calibration (Table I,
p. 160). The locators in the table above point to the exact figures and tables.
For "what did this paper find," the table above is the intended default.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026.
This distillation was extracted by an LLM on 2026-05-31 and is **not
human-verified or independently reproduced**.

> **Attribution (CC BY 4.0).** Coimbra, Nuno, Francisco Gomes, Alexander
> Michaelides, and Jialu Shen. "Asset Pricing and Risk-Sharing Implications
> of Alternative Pension Plan Systems." *The Journal of Finance* 81, no. 1
> (February 2026): 143–188. DOI: 10.1111/jofi.13507. © 2025 The Author(s).
> Published by Wiley Periodicals LLC on behalf of the American Finance
> Association. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**. CC BY 4.0
> permits mirroring; the PDF is not hosted in this batch.
