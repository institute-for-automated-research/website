---
title: "Mutual Fund Stars: Hounyo & Lin (2026)"
description: >-
  Distilled: Hounyo and Lin identify a "duplicate observations" flaw in the Fama-French (2010)
  bootstrap for mutual fund performance tests and propose a wild bootstrap fix (CSDWB).
  Applied to U.S. equity mutual funds (1984-2019), CSDWB finds a measurable fraction
  outperform the market, concentrated before 2003. Journal of Empirical Finance 2026,
  paywalled. Six core results with source locators, datasets used, the regression framework,
  and the wild bootstrap method with its defining equations.
sidebar:
  label: Hounyo-Lin 2026
  order: 1
tags: [paper-summary, mutual-funds, asset-pricing, performance-evaluation, bootstrap,
       factor-models, peer-reviewed, unreplicated, data:wrds, data:ken-french]
paper:
  authors: Ulrich Hounyo, Jiahao Lin
  authorList:
    - { family: Hounyo, given: Ulrich, orcid: "0000-0003-2305-9745", affiliation: "University at Albany, State University of New York" }
    - { family: Lin, given: Jiahao, orcid: "0000-0002-6730-2818", affiliation: "Fuyao University of Science and Technology" }
  year: 2026
  venue: Journal of Empirical Finance 85 (2026) 101673
  venueShort: J. Empir. Finance 2026
  tier: lower
  doi: 10.1016/j.jempfin.2025.101673
  jel:
    codes: [C33, G11, G12, G14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Financial Markets and Investment Strategies", "Complex Systems and Time Series Analysis"]
  dataAccess: licensed-commercial
  outcome:
    - mutual fund alpha (abnormal return vs Carhart four-factor model)
    - fraction of funds outperforming the market
    - test size and power of bootstrap procedures for mutual fund skill
  outcomeClass: [fund-behavior, security-returns]
  license: "paywalled; copyright 2025 Elsevier B.V. All rights reserved, including for text and data mining, AI training, and similar technologies"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 0
  methods:
    role: both
    contributes: csdwb-wild-bootstrap
    family: descriptive
    buildsFrom: [panel-regression, wild-bootstrap]
    identification: descriptive
  contributionType: [new-method, new-fact]
  mechanisms: []
  scope:
    region: US
    assetClass: US equity mutual funds
    period: 1984-01..2019-05
    frequency: monthly
    dataType: [market]
    granularity: [individual]
    n: "3,630 funds, 425 months (Jan 1984-May 2019)"
  findings:
    - { ref: R1, outcome: "test size of bootstrap procedures", metric: probability, value: "FF joint-resampling generates far more extreme t-statistics than Fixed bootstrap at both T=13 and T=60; duplicate effect persists at large T (Fig. 1, p. 4)", direction: negative, vsBenchmark: "Fixed & Complete (no duplicates) vs Joint & Complete (FF-like); FF failure persists even at T=60" }
    - { ref: R2, outcome: "test size of bootstrap procedures", metric: probability, value: "CSDWB_I size approx. 10% at all percentiles (max, 99.5, 99th, 95th, 90th) under all three cross-sectional dependence scenarios (Figs. 7-9, pp. 11-12)", direction: positive, vsBenchmark: "CSDWB_I and CSDWB_II near-optimal; FF oversized at max percentile; HL methods undersized or threshold-sensitive" }
    - { ref: R3, outcome: "fraction of funds outperforming the market", metric: probability, value: "CSDWB_I likelihoods: max 0.915, 2nd 0.989*, 5th 0.992*, 99.9 0.988*, 99.5 0.972*, 99th 0.920; FF: max 0.154, 5th 0.568, 99.9 0.492 (Table 2, p. 15)", direction: positive, vsBenchmark: "FF detects no outperformers at any of top 10 percentiles; CSDWB_I and CSDWB_II identify outperformers at 2nd-99th percentiles" }
    - { ref: R4, outcome: "fraction of funds outperforming the market", metric: probability, value: "Strong evidence of outperformance before 2003; no evidence after 2003 (Table E.3; subperiod split at 2003, §4.1, p. 13-14)", direction: mixed, vsBenchmark: "pre-2003 subperiod: outperformance confirmed; post-2003: null result; breakpoint confirmed by KTWW criteria" }
    - { ref: R5, outcome: "mutual fund alpha (abnormal return vs Carhart four-factor model)", metric: return-spread, value: "Best-funds portfolio (238 funds selected via Algorithm 1): cumulative excess returns 8.91% above market at 4-year horizon, 15.12% at 9-year horizon; significant at 10% level for first 4 years (§4.2, Fig. 11, p. 16)", direction: positive, vsBenchmark: "vs equal-weighted broad mutual fund market portfolio, Jan 1984-Dec 2002" }
    - { ref: R6, outcome: "mutual fund alpha (abnormal return vs Carhart four-factor model)", metric: alpha, value: "Time-varying (nonparametric) alpha at 99.5th percentile fund remains stable pre-2005 near upper 90% bootstrap confidence bound; post-2005 volatility rises and alpha approaches lower bound (§4.3, Fig. 12, p. 17)", direction: mixed, vsBenchmark: "vs zero-alpha null; CSDWB_I 10-90% bootstrap confidence interval" }
  resultType: overturns
  relatesTo:
    - { cite: "Fama and French (2010)", relation: contradicts, note: "FF bootstrap is severely undersized due to duplicate observations; their finding of no outperformers is overturned by CSDWB" }
    - { cite: "Kosowski et al. (2006)", relation: extends, note: "CSDWB extends KTWW bootstrap to cross-sectionally dependent, unbalanced panels; confirms their evidence that skilled funds exist" }
    - { cite: "Harvey and Liu (2022)", relation: extends, note: "HL attribute FF undersizing to undersampling; paper shows the dominant cause is duplicate observations rather than undersampling" }
    - { cite: "Huang et al. (2023)", relation: extends, note: "improves on their bootstrap analysis of mutual fund performance by eliminating the duplicate observations problem" }
    - { cite: "Hansen et al. (2011)", relation: builds-on, note: "fund-selection Algorithm 1 builds on the Model Confidence Set method" }
  openQuestions:
    - "Whether CSDWB methods extend naturally to hedge fund performance evaluation and other alternative asset classes (§5, p. 17)"
    - "Whether a uniform optimal threshold for HL_II can be determined across sample sizes; HL_II fails to maintain 10% size for small T because no uniform optimal threshold exists (§3.2.1, p. 10)"
  replicationCode:
    status: none
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-18, all figures and tables); six results extracted from the paywalled PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed missing JEL code G11, corrected Fig. 11 page locator from p. 15 to p. 16 (in Core results table and findings entry for R5); all equations (2.1, 2.2, 2.3, CSDWB_I, 4.1), Table 2 values, and six result rows verified correct." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jempfin.2025.101673", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] contains only Elsevier TDM user license, TDM representation license, and STM author self-archiving framework policies (017, 037, 012, 029, 004); no CC license; copyright notice 2025 Elsevier B.V. all rights reserved including for text and data mining and AI training" }
---

**What this is.** The paper's core results, the statistical model of fund performance, and the
cross-sectional dependent wild bootstrap (CSDWB) method with its defining equations: enough to
understand what was found and why existing bootstrap tests fail, without reading all 18 pages.
To replicate or extend, read the full source at
[DOI 10.1016/j.jempfin.2025.101673](https://doi.org/10.1016/j.jempfin.2025.101673).

## TL;DR

The Fama-French (2010) bootstrap test for mutual fund skill is severely undersized, primarily
because it jointly resamples factors and residuals, producing duplicate observation pairs in the
bootstrap sample. This distortion far exceeds the undersampling effect identified by Harvey and Liu
(2022) and persists even at large sample sizes. Hounyo and Lin propose the cross-sectional
dependent wild bootstrap (CSDWB), which multiplies cross-sectional residuals by random Rademacher
weights at each time point, preserving unbalanced panel structure and cross-sectional dependence
while eliminating duplicate observations. Simulations confirm CSDWB achieves near-optimal test
size under a range of cross-sectional dependence scenarios. Applied to 3,630 U.S. equity mutual
funds from January 1984 to May 2019, CSDWB finds that a measurable fraction of funds outperform
the market on the four-factor Carhart (1997) model, with outperformance concentrated before 2003
and absent afterwards.

## Core results

Magnitudes are as reported; `\*` = significant at the 5% level (likelihood exceeds 0.95).
Locators point to tables, figures, and sections of the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | FF joint resampling generates far more extreme bootstrap t-statistics than Fixed (no-duplicate) resampling, even at T=60, confirming duplicate observations (not undersampling) as the dominant distortion | Fig. 1, p. 4 | Joint & Complete bootstrap right-tail density is visibly larger than Fixed & Complete at both T=13 and T=60; the gap persists as T increases, showing duplicate-observation inflation does not vanish with sample size |
| R2 | CSDWB_I and CSDWB_II have near-optimal test size (~10%) at all percentiles across three cross-sectional dependence scenarios; FF is oversized at the max percentile and HL methods are unreliable for small T | Figs. 7-9, pp. 11-12 | CSDWB_I and CSDWB_II size ≈10% at max, 99.5, 99, 95, 90th percentiles under no, weak, and strong cross-sectional dependence; HL_II size diverges from 10% at small T |
| R3 | CSDWB detects genuine mutual fund outperformers across the performance distribution; the FF method misses them entirely | Table 2, p. 15 | CSDWB_I: max 0.915, 2nd 0.989\*, 5th 0.992\*, 99.9 0.988\*, 99.5 0.972\*, 99th 0.920; FF: max 0.154, 2nd 0.330, 5th 0.568; KTWW: max 0.424, 2nd 0.806, 5th 0.982\* |
| R4 | Outperformance is concentrated entirely in the pre-2003 period; no evidence of outperformance after 2003 | §4.1, p. 13-14; Table E.3 | Pre-2003 subperiod: strong evidence of outperformance using CSDWB; post-2003: no evidence; pattern consistent across bootstrap methods |
| R5 | Best-performing funds portfolio (238 funds, selected via MCS-based Algorithm 1 using 1984-1993 data) earns cumulative excess returns of 8.91% above the market over 4 years and 15.12% over 9 years | §4.2, p. 15; Fig. 11, p. 16 | Superior performance significant at 10% level for first 4 years; advantage fades over longer horizons; most notable in 1998, when the portfolio briefly underperforms the market |
| R6 | Time-varying (nonparametric) alpha for top-percentile funds is stable pre-2005 near the upper bootstrap confidence bound; post-2005 alpha becomes volatile and approaches the lower bound | §4.3, p. 16; Fig. 12, p. 17 | 99.5th percentile fund alpha ≈ 0.05-0.25% per month pre-2005; post-2005 widening confidence interval and alpha near lower bound suggest reduced and uncertain skill |

**Overall (paper's conclusion).** Duplicate observations in the Fama-French (2010) bootstrap
are the dominant source of its severe undersizing, not the undersampling problem previously
emphasized by Harvey and Liu (2022). The proposed CSDWB methods correct this flaw and confirm
that a small but measurable fraction of U.S. equity mutual funds outperform the market, with
outperformance concentrated in the pre-2003 period. Outperforming funds tend to have lower
expense ratios, higher total net assets, and higher turnover, consistent with active management
in a competitive environment before low-cost ETFs and product proliferation compressed alpha
opportunities post-2003.

## Theory / model

The paper has no structural economic model. The statistical framework is a four-factor panel
regression for fund excess returns with the null hypothesis of zero true alpha.

Huang et al. (2023) analyzed mutual fund performance using a bootstrap approach but used the FF method to generate simulated data, embedding the same duplicate-observations distortion into the DGP. The current paper shows that a valid bootstrap method applied to FF-generated data will detect excess extreme t-statistics, suggesting the presence of outperformers even under the null, and proposes CSDWB as the correct alternative.

The benchmark regression (equation 2.1, p. 2) for fund $$i$$ at time $$t$$ is:

$$
r_{it} = a_i + \sum_{k=1}^{K} \beta_{ik} F_{kt} + \varepsilon_{it}, \tag{2.1}
$$

where $$r_{it}$$ is fund $$i$$'s excess return over the risk-free rate, $$a_i$$ is fund $$i$$'s
true abnormal return (alpha), $$\beta_{ik}$$ is the factor loading on factor $$k$$, $$F_{kt}$$
is the return on factor $$k$$ at time $$t$$, and $$\varepsilon_{it}$$ is the residual. The
factors $$F_{kt}$$ include the market excess return ($$RMRF_t$$), the size factor ($$SMB_t$$)
and value-growth factor ($$HML_t$$) from Fama and French (1993), and the momentum factor
($$MOM_t$$) from Carhart (1997).

The null hypothesis of no skill is:

$$
H_0 : a_i = 0, \quad \text{for } i = 1, \ldots, N. \tag{2.2}
$$

A positive $$a_i$$ indicates fund $$i$$ outperforms the market after adjusting for factor
exposures. The paper tests this null by comparing the distribution of estimated
$$\hat{t}_{(i)}$$ statistics (ranked order statistics) against a bootstrap-approximated
distribution under $$H_0$$, focusing on extreme-right-tail percentiles (99th, 99.5th, max)
following Kosowski et al. (2006) and Fama and French (2010).

The key insight is that the Fama-French (2010) implementation distorts the bootstrap
null distribution by jointly resampling factor returns and fund residuals, so the same
$$(r_{it}^{*}, F_t^{*})$$ pair may appear multiple times in a bootstrap sample, inflating
extreme t-statistics and reducing the likelihood of rejection.

## Method

The paper proposes two variants of a cross-sectional dependent wild bootstrap (CSDWB).
Both variants build on `panel-regression` (the Carhart regression framework, equation 2.1)
and the `wild-bootstrap` primitive (Wu 1986, Liu 1988, Mammen 1993).

**Bootstrap pseudo-returns under the null** (equation 2.3, p. 3): factor returns and residuals
are combined to produce bootstrap pseudo-returns with zero true alpha:

$$
r_{it}^{*b} = \sum_{k=1}^{K} \hat{\beta}_{ik} F_{kt}^{*b} + \varepsilon_{it}^{*b}, \tag{2.3}
$$

where $$\hat{\beta}_{ik}$$ is the estimated factor loading, and $$F_{kt}^{*b}$$ and
$$\varepsilon_{it}^{*b}$$ are bootstrap factor returns and residuals. The CSDWB methods
differ from Kosowski et al. (2006) and Fama and French (2010) in how these quantities
are generated.

**CSDWB_I** (the preferred variant, p. 8): Let $$T_i$$ denote fund $$i$$'s observed period
and $$o_{it} = 1$$ if $$t \in T_i$$, 0 otherwise. Let $$\eta_t^{*b}$$ be a random weight
with mean 0 and variance 1, drawn independently at each period $$t$$ (Rademacher weights:
$$\eta_t^{*b} = \pm 1$$ with probability 0.5 each, following Cameron et al. 2008 and
Davidson and Flachaire 2008). The CSDWB_I bootstrap residuals and factor returns are:

$$
o_{it} \varepsilon_{it}^{*b} = o_{it} \hat{\varepsilon}_{it} \cdot \eta_t^{*b}, \quad
F_t^{*b} = F_t \cdot \eta_t^{*b}.
$$

The same scalar weight $$\eta_t^{*b}$$ is applied to the entire cross-section of residuals
$$(\hat{\varepsilon}_{1t}, \ldots, \hat{\varepsilon}_{N_t t})$$ at each period $$t$$, preserving
cross-sectional dependence. Missing observations remain intact. Because each observation uses
a different realization of $$\eta_t^{*b}$$, no exact duplicate $$(\varepsilon_{it}^{*b}, F_t^{*b})$$
pairs are generated, eliminating the FF duplicate-observations distortion.

**CSDWB_II** differs from CSDWB_I solely in that factor returns are not perturbed: $$F_t^{*b} = F_t$$.
This makes CSDWB_II closely related to both the KTWW and CSDB methods and is useful for
elucidating differences across approaches.

**Fund selection algorithm** (Algorithm 1, p. 9): A Model Confidence Set (Hansen et al. 2011)
sequential procedure identifies the best funds. At each iteration, CSDWB is used to derive
a 90% confidence level for the performance of the current best fund relative to all other
funds in the active set $$\mathcal{M}_0$$. The worst performer is eliminated if the null of
equal performance is rejected. The procedure iterates until no further rejection occurs,
yielding a final set $$\hat{\mathcal{M}}^*_{1-\lambda}$$ of best-performing funds.

## Empirical specifications

**Data sample**: CRSP Survivor-Bias-Free U.S. Mutual Fund Database, 3,630 open-end U.S.
domestic equity funds, January 1984 to May 2019, 425 months. Factor returns from the Kenneth
French Data Library (four-factor model: RMRF, SMB, HML, MOM). The final dataset is an
unbalanced panel with missing observations reflecting fund entry and exit.

**Bootstrap implementation**: For each fund $$i$$, OLS estimates of model (2.1) yield
$$(\hat{a}_i, \hat{\beta}_{ik})$$ and residuals $$\hat{\varepsilon}_{it}$$. Bootstrap
pseudo-returns are generated by subtracting $$\hat{a}_i$$ and applying CSDWB weights.
Each bootstrap iteration produces a ranking of the $$N$$ fund t-statistics; the procedure
is repeated $$B = 999$$ times to build the empirical null distribution. The test focuses
on extreme right-tail percentiles (max, 2nd, 5th, 99.9th, 99.5th, 99th, 98th, 97th, 95th, 90th)
following Kosowski et al. (2006).

**Performance likelihood** (Table 2, p. 15): For each percentile, the reported likelihood is
the proportion of 10,000 bootstrap replications in which the simulated t-statistics at that
percentile fall below the observed t-statistic. A likelihood exceeding 0.95 (marked with `\*`)
provides strong evidence of genuine outperformance at that percentile.

**Simulation design** (Section 3, pp. 9-12): Three parametric scenarios (no, weak, strong
cross-sectional dependence; $$\xi_i = 0, 0.1, 0.4$$) with $$N = 3630$$ funds over $$T = 425$$
periods, 5% of funds having positive alpha, $$\alpha^+ = 30\%$$. An enhanced empirical
simulation uses CSDWB_I to generate data under the null (Section 3.2.2), avoiding the FF
duplicate-observations distortion in the simulated DGP.

**Subperiod analysis** (Section 4.1, §4.2): Pre/post-2003 split to test persistence.
Fund selection period: January 1984 to December 1993 (10 years of training data, 238 funds
selected via Algorithm 1). Out-of-sample evaluation: January 1984 to December 2002.

**Time-varying alpha** (Section 4.3, equation 4.1, p. 16): A local least-squares estimator
estimates the time-varying alpha $$a_{it}$$ in:

$$
r_{it} = a_{it} + \sum_{k=1}^{K} \beta_{ikt} F_{kt} + \varepsilon_{it}, \tag{4.1}
$$

using a rolling-window approach following Cai (2007) and Cai et al. (2018). Bootstrap
confidence intervals are constructed with CSDWB_I fixing $$\hat{a}_i = 0$$.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP Survivor-Bias-Free U.S. Mutual Fund Database | Monthly excess returns for 3,630 open-end U.S. domestic equity mutual funds, 1984-2019 | [WRDS / CRSP](/wiki/commercial/wrds/) (licensed) |
| Kenneth French Data Library | Four-factor model returns (RMRF, SMB, HML, MOM) used as benchmark factors in regression (2.1) | [Ken French library](/wiki/datasets/ken-french/) |

Sample: January 1984 to May 2019, N = 3,630 funds, T = 425 months (unbalanced panel). Data access
provided via the University at Albany Center for Institutional Investment Management (CIIM).

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jempfin.2025.101673) if you are: implementing a
bootstrap procedure for mutual fund or hedge fund performance in an unbalanced panel (the CSDWB
algorithm is fully described in Section 2.3 and Internet Appendices); diagnosing why the
Fama-French (2010) method undersizes (Sections 2.1-2.2 with the dominant-effect analysis);
comparing CSDWB against HL, KTWW, CSDB, and FF across simulation designs (Section 3);
or applying the MCS-based fund-selection Algorithm 1 to build a best-funds portfolio.

## Attribution and rights

Source: peer-reviewed, *Journal of Empirical Finance* 85 (2026) 101673. Paywalled; no
open-access or CC licence. This distillation was extracted by an LLM on 2026-06-25 and is
**not human-verified or independently reproduced**. Quotation of results is for scholarly
reference only (extract-only).

> Hounyo, Ulrich, and Jiahao Lin. "Can mutual fund 'stars' really pick stocks? New evidence
> from a wild bootstrap analysis." *Journal of Empirical Finance* 85 (2026): 101673.
> DOI: 10.1016/j.jempfin.2025.101673. © 2025 Elsevier B.V. All rights reserved.
