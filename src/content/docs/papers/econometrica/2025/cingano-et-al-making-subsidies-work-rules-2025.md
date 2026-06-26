---
title: "Making Subsidies Work: Cingano, Palomba, Pinotti & Rettore (2025)"
description: >-
  Distilled: Using a regression discontinuity design around Italy's L488/92
  investment subsidy program (1996-2007), this paper finds that subsidies raised
  firm investment by 43% and employment by 17% over six years, at a cost per
  new job 3.5 times higher in Southern than Northern Italy. Eliminating
  political discretion from allocation would reduce cost per job by 11%, while
  relying solely on discretion would raise it by 42%. Econometrica 2025,
  CC BY 4.0. Eight core results with source locators, datasets used, the
  identification strategy, and the empirical specifications.
sidebar:
  label: Cingano et al. 2025
  order: 1
tags: [paper-summary, public-economics, place-based-policy, industrial-policy,
       political-economy, regression-discontinuity, panel-regression,
       open-access, cc-by, peer-reviewed, unreplicated,
       data:l488-italy, data:inps-italy, data:cerved]
paper:
  authors: Federico Cingano, Filippo Palomba, Paolo Pinotti, Enrico Rettore
  authorList:
    - { family: Cingano, given: Federico, affiliation: "Directorate General for Economics, Statistics, and Research, Bank of Italy" }
    - { family: Palomba, given: Filippo, orcid: "0000-0002-6400-3142", affiliation: "Department of Economics, Princeton University" }
    - { family: Pinotti, given: Paolo, affiliation: "Social and Political Science Department, Bocconi University and BAFFI Center, CEPR" }
    - { family: Rettore, given: Enrico, orcid: "0000-0002-1322-106X", affiliation: "Department of Economics and Management, University of Padua and FBK-IRVAPP, IZA" }
  year: 2025
  venue: "Econometrica, Vol. 93, No. 3 (May, 2025), 747-778"
  venueShort: Econometrica 2025
  doi: 10.3982/ECTA21319
  jel:
    codes: [H25, J23, D73]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Fiscal Policy and Economic Growth", "Regional Development and Policy", "Innovation Policy and R&D"]
  dataAccess: proprietary-confidential
  outcome:
    - firm employment growth (log-change, cumulative)
    - firm investment (log-cumulated over 3 years)
    - cost per new job created
    - firm survival probability
  outcomeClass: [firm-real-outcomes, social-welfare]
  license: >-
    CC BY 4.0 (confirmed via Crossref DOI metadata: content-version unspecified,
    URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0,
    start 2025-01-01; corroborated by artifact p. 748 CC Attribution License notice)
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access (Econometrica/Wiley; CC BY 4.0; DOI 10.3982/ECTA21319 confirmed live 2026-06-26)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 8
  citedByCount: 9
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [regression-discontinuity-design, lasso]
    identification: rdd
  contributionType: [new-fact, measurement]
  mechanisms: [agency, financial-constraint]
  introducesData: true
  scope:
    region: Italy
    period: 1996..2007
    frequency: annual
    dataType: [administrative, accounting]
    granularity: [firm]
    n: "40,366 projects from 27,084 firms (L488/92 applications, 26 calls, 1996-2007)"
  findings:
    - { ref: R1, outcome: "firm investment (log-cumulated)", metric: coefficient, value: "0.360 [SE 0.055], approximately +43% over 3 years", direction: positive }
    - { ref: R2, outcome: "firm employment growth (log-change, cumulative)", metric: coefficient, value: "0.104 [SE 0.020] over 3 years", direction: positive }
    - { ref: R3, outcome: "firm employment growth (log-change, cumulative)", metric: coefficient, value: "0.153 [SE 0.024] over 6 years", direction: positive }
    - { ref: R4, outcome: "firm survival probability", metric: pp-effect, value: "+3 pp over 6 years (baseline 87%)", direction: positive }
    - { ref: R5, outcome: "cost per new job created", metric: level, value: "EUR 178,000 (all regions); EUR 241,000 (South); EUR 68,000 (North-Center)", direction: positive }
    - { ref: R6, outcome: "cost per new job created", metric: pp-effect, value: "-11.1% [CI -14.8; -8.0] under no-discretion counterfactual", direction: negative, vsBenchmark: "actual policy EUR 179,000 per new job" }
    - { ref: R7, outcome: "cost per new job created", metric: pp-effect, value: "+41.7% [CI 17.7; 64.3] under only-discretion counterfactual", direction: positive, vsBenchmark: "actual policy EUR 179,000 per new job" }
    - { ref: R8, outcome: "firm employment growth (log-change, cumulative)", metric: coefficient, value: "range 0.10-0.19 log-change across SR-SD quintile cells (6-year horizon)", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Angrist and Rokkanen (2015)", doi: '10.1080/01621459.2015.1012259', relation: builds-on, note: "provides the CIA-based framework for extrapolating RDD estimates beyond the cutoff to inframarginal firms" }
    - { cite: "Cerqua and Pellegrini (2014)", doi: '10.1016/j.jpubeco.2013.11.005', relation: extends, note: "prior RDD evaluation of L488/92 limited to six Southern regions; extended here to all 26 calls with full heterogeneity analysis" }
    - { cite: "Bronzini and de Blasio (2006)", doi: '10.1016/j.jue.2006.03.005', relation: contradicts, note: "DiD evaluation of L488/92 found no net investment increase; this paper finds significant positive investment and employment effects" }
    - { cite: "Bartik (2020)", doi: '10.1257/jep.34.3.99', relation: cites, note: "place-based jobs policy review; used as cost-per-job benchmark for cross-study comparison" }
  openQuestions:
    - "Full welfare assessment including changes in housing values and rents (as in the Empowerment Zones analysis) requires data not available here; left for future research (p. 775)."
    - "External validity of the rules-versus-discretion trade-off to other industrial policy programs and countries beyond Italy's L488/92 (pp. 749, 775)."
  replicationCode:
    url: https://doi.org/10.5281/zenodo.14868109
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (pp. 747-778, Figures 1-8, Tables I-VI); eight core results extracted with locators. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; R1 page locator corrected from p. 763 to p. 764 (Table III is on p. 764; p. 763 carries Figure 3); all other magnitudes, CIs, equations (1-11) and regression specifications verified correct; no em-dashes found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.3982/ECTA21319", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=unspecified, URL=https://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-01-01" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, identification strategy, and estimating equations: enough to know what it found and how, without reading all 32 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.3982/ECTA21319).

## TL;DR

This paper evaluates Italy's Law 488/92 (L488/92), the country's largest public investment subsidy program, which financed 77,000 investment projects at a total cost of nearly EUR 26 billion between 1996 and 2007. Projects were ranked within each call-region-category cell by a composite score combining objective quality indicators ("rules," sub-score SR) and regional politicians' priorities ("discretion," sub-score SD), creating a sharp eligibility cutoff exploited here as a regression discontinuity design. Firms scoring just above the cutoff increased investment by 43% and employment by 11% over three years; employment gains persist and grow to 17% by year six, with no evidence of spillovers to non-subsidized competitors. Extending the analysis to the full distribution of inframarginal firms via Angrist and Rokkanen (2015), the paper documents that firms preferred by political discretion generate similar percent employment gains as firms ranked high on objective criteria, but at 3.5 times higher cost per job in Southern regions. Counterfactual simulations show that removing political discretion would reduce the cost per new job by 11%, while relying exclusively on discretion would raise it by 42%. Cerqua and Pellegrini (2014) evaluated L488/92 in six Southern regions and found positive employment effects; this paper extends that to all 26 calls and quantifies the cost of the rules-vs.-discretion trade-off. Bartik (2020) places these cost estimates in the context of US place-based policy evidence.

## Core results

Magnitudes and significance are as reported; heteroscedasticity-robust standard errors clustered by cell (call-region-category) are in brackets. All monetary amounts at constant 2010 prices.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Subsidy raises **cumulative investment by 43%** over the three-year subsidy period | Table III, Panel A, col 2, p. 764 | +0.360 log points [SE 0.055]; linear RDD with cell FE; Adj. R² = 0.229; n = 17,425 |
| R2 | Subsidy raises **employment by 11%** over three years | Table III, Panel B, col 2, p. 764 | +0.104 log-change [SE 0.020]; stable across all 8 specifications (linear/quadratic, uniform/triangular, with/without cell FE); n = 31,681 |
| R3 | **Employment effect persists** and grows to 17% over six years | Table III, Panel C, col 2, p. 764 | +0.153 log-change [SE 0.024]; effect continues after subsidy disbursement ends; n = 28,759 |
| R4 | **Firm survival probability rises by 3 pp** (+6% above baseline) over six years | Figure 5, last panel, p. 765 | +3 pp on a baseline survival rate of 87%; from the dynamic event-study specification with linear RDD and cell FE |
| R5 | **Cost per new job is EUR 178,000** (all regions), with a 3.5x North-South gap | Table IV, col 1, p. 768 | EUR 178,000 [133; 299] overall; EUR 241,000 [195; 332] South; EUR 68,000 [41; 211] North-Center; per worker-year EUR 54,000 overall |
| R6 | **No-discretion counterfactual reduces cost per job by 11%** | Table VI, Panel A, col 2, p. 773 | -11.1 pp [CI -14.8; -8.0] overall; -12.1 pp in South; -8.7 pp in North-Center |
| R7 | **Only-discretion counterfactual raises cost per job by 42%** | Table VI, Panel A, col 3, p. 773 | +41.7% [17.7; 64.3] overall; +37.8% in South; cost per EUR 1 of investment rises by 22% |
| R8 | **Treatment effects range from 10% to 19%** across SR-SD quintile cells, with cost per job varying by a factor of five | Figure 8, Panels A-B, p. 771 | 6-year employment growth log-change 0.10 (low SR, low SD) to 0.19 (high SR and SD); cost per job highest (~5x lower-bound) for high-SD, low-SR cells |

**Overall (paper's conclusion).** Both firms selected by objective criteria and those preferred by local politicians generate employment and investment growth, but politically favored firms do so at higher cost per job because they are smaller and demand larger subsidies per worker. The same percent employment increase corresponds to fewer absolute new jobs in small firms. Eliminating political discretion from allocation improves cost-effectiveness, particularly in Southern regions that received the largest share of L488/92 funds. An optimal allocation based on estimated treatment effects would reduce the cost per new job by more than half (Table VI, col 4: -54% [-60.2; -52.4]).

## Theory / model

The paper has no formal equilibrium model. The empirical strategy tests two hypotheses about the allocation and impact of public investment subsidies.

**Hypothesis 1 (treatment effect).** Subsidized firms near the eligibility cutoff invest and hire more than similar non-subsidized firms. This tests whether L488/92 generated genuine real effects or merely crowded out private investment (as Bronzini and de Blasio (2006) found using a DiD approach on earlier data).

**Hypothesis 2 (rules vs. discretion).** The cost-effectiveness of subsidies depends on which firms receive them: those scoring high on objective criteria (SR) versus those preferred by politicians (SD). The rules-versus-discretion dilemma (Persson and Tabellini (2002); Laffont (1996)) has empirical content if political priorities are systematically misaligned with cost-efficiency objectives.

The institutional setting provides the identification lever. L488/92 ranked applicant firms within each call-region-category cell by a composite score S. During 1996-1997, the score combined three objective indicators (I1: investment-to-subsidy ratio "skin in the game"; I2: planned job creation; I3: no-waste ratio). Starting in 1998, regional governments gained discretionary authority to assign points to municipalities and project types, creating the sub-score SD (I4). The aggregate of standardized I1-I3 is denoted SR (objective sub-score) and the standardized I4 is SD (discretionary sub-score). The composite score is their standardized sum (eq. 1, p. 753):

$$
S_{ir} = \sum_{j=1}^{3} \frac{I^j_{ir} - \mu^j_r}{\sigma^j_r} \tag{1}
$$

where $$I^j_{ir}$$ is the value of indicator $$j$$ for project $$i$$ in call-region $$r$$, $$\mu^j_r$$ is the within-cell mean, and $$\sigma^j_r$$ is the within-cell standard deviation. Projects were funded in descending order of S until the call-region budget was exhausted, yielding a rationing cutoff that varies by cell.

The key identifying assumption is that applicants just above and below the cutoff are otherwise identical. Balancing tests on pre-application characteristics (Figure A7 in Cingano et al. (2025a)) show no discontinuity at the cutoff. The density test of McCrary (2008) also does not reject continuity (p-value 0.2; Figure A6 in Cingano et al. (2025a)), ruling out strategic sorting. One-sided non-compliance (about 20% of above-cutoff firms are not funded for exogenous reasons) means $$\tau$$ identifies an ITT effect; the LATE is approximately $$\tau / 0.8$$.

## Method

The analysis has two parts: a parametric RDD for firms near the cutoff, and the Angrist and Rokkanen (2015) conditional independence approach to characterize treatment effects across the full distribution of inframarginal firms.

**Characterizing the sub-scores with LASSO.** To understand which firm characteristics drive objective versus political allocation, the paper regresses SR and SD on a rich covariate vector $$Z_i$$ using the LASSO estimator (eq. 2, p. 757):

$$
\hat{\theta}^{\text{LASSO}} := \arg\min_{\theta \in \mathbb{R}^k} \left\{ \sum_{i=1}^{n} \left(Y_i - Z_i'\theta\right)^2 + \lambda \sum_{j=1}^{k} |\theta_j| \right\} \tag{2}
$$

where $$Y_i$$ is SR or SD, and $$\lambda \geq 0$$ is selected by the one-standard-deviation rule (James, Witten, Hastie, and Tibshirani (2013)). Key findings (Figure 1, p. 758): firm size is the strongest predictor of SR (positive) and SD (negative); the same is true for the subsidy amount requested (negatively for SR, positively for SD). Political discretion therefore systematically favors smaller firms demanding larger per-worker subsidies, which is the root cause of its lower cost-effectiveness.

**Angrist-Rokkanen extrapolation.** Following Angrist and Rokkanen (2015), the conditional independence assumption (CIA) states that potential outcomes are mean-independent of the running variable S conditional on a vector of pre-treatment firm characteristics $$X$$ (eq. 4, p. 760):

$$
\mathbb{E}[Y(d) \mid S, X] = \mathbb{E}[Y(d) \mid X], \quad d \in \{0, 1\} \tag{4}
$$

Combined with common support (eq. 5, p. 761):

$$
0 < \mathbb{P}(D = 1 \mid X) < 1 \quad \text{a.s.} \tag{5}
$$

the CIA permits identification of the ATE at any score value $$s'$$ (eq. 6, p. 761):

$$
\mathbb{E}[Y(1) - Y(0) \mid S = s'] = \mathbb{E}\!\left[\mathbb{E}[Y \mid X, D=1] - \mathbb{E}[Y \mid X, D=0] \,\Big|\, S = s'\right] \tag{6}
$$

The CIA is partially testable: if X absorbs all confounding, then conditional on X, outcomes should be mean-independent of S within treated and control groups. Table V (p. 770) confirms this for the chosen covariate vector $$X^\star$$: once $$X^\star$$ is included, coefficients on SR and SD in the conditional mean regression become insignificant (columns with $$X^\star$$). Panel B of Figure 6 (p. 767) confirms substantial common support in the estimated propensity score distribution.

## Empirical specifications

**Baseline RDD estimating equation.** Firm outcomes are regressed on the treatment dummy D (scoring above the cutoff = 1), a polynomial in the centered score S, its interaction with D, and cell fixed effects $$FE_c$$ (eq. 3, p. 760):

$$
Y = \tau D + \sum_{\ell=1}^{p} \gamma_\ell S^\ell + \sum_{\ell=1}^{p} \delta_\ell D \cdot S^\ell + FE_c + \varepsilon \tag{3}
$$

The coefficient $$\tau$$ identifies the ITT effect for firms near the cutoff (bandwidth $$S \in [-5, 5]$$, covering 82% of the sample). Specifications use $$p = 1$$ (linear) and $$p = 2$$ (quadratic) polynomials, uniform and triangular kernels, with and without cell fixed effects. Outcomes cover: log-cumulated investment over 3 years (Panel A of Table III); log-change in employment over 3 years (Panel B) and 6 years (Panel C); log-revenues and log-value-added (Figure 5); and survival probability (Figure 5, last panel). Standard errors are clustered by cell; results are stable across all eight specifications.

**Linear reweighting estimator for inframarginal effects.** The conditional mean is parametrized following Kline (2011) (eq. 7, p. 761):

$$
\mathbb{E}[Y \mid S, X, D = d] = \sum_{\ell=0}^{q} \alpha_{d,\ell} S^\ell + X'\beta_d, \quad d \in \{0, 1\} \tag{7}
$$

Restricting $$\alpha_{0,\ell} = \alpha_{1,\ell} = 0$$ for all $$\ell$$ is the testable implication of the CIA (Table V). Under the CIA, the ATE at any score value reduces to eq. 8 (p. 761):

$$
\mathbb{E}[Y(1) - Y(0) \mid S = s'] = (\beta_1 - \beta_0)' \mathbb{E}[X \mid S = s'] \tag{8}
$$

The covariate vector $$X^\star$$ includes: firm age (inversely related to growth per Evans (1987)); lagged employment growth of similar firms in the same local labor market (LLM) and 3-digit sector; average wage of white-collar workers; dummies for managers or apprentices in payroll; and investment project size relative to initial employment interacted with cell fixed effects.

**Conditional treatment effects by sub-score quintile.** Extending the CIA to both sub-scores (eq. 9, p. 761):

$$
\mathbb{E}[Y(d) \mid SR, SD, X] = \mathbb{E}[Y(d) \mid X], \quad d \in \{0, 1\} \tag{9}
$$

yields conditional ATEs for any point in the SR-SD distribution (eq. 10, p. 761):

$$
\mathbb{E}[Y(1) - Y(0) \mid SR = r, SD = d] = (\beta_1 - \beta_0)' \mathbb{E}[X \mid SR = r, SD = d] \tag{10}
$$

These are estimated for the 25 cells defined by the 5-by-5 quintiles of SR and SD (Figure 8, p. 771). Cost per new job in each cell is computed by scaling the subsidy by the treatment effect times average firm size in the cell.

**Counterfactual allocation rules.** Three counterfactual policies are simulated (Table VI, p. 773): (1) no-discretion (SD = 0 for all applicants, re-ranked by SR only); (2) only-discretion (rank by SD only); (3) cost-minimizing (rank by estimated treatment effects). The policy invariance assumption (eq. 11, p. 762) holds that applicant characteristics and project quality do not respond to the selection rule. This is validated by comparing applicant characteristics and objective sub-scores in regions that adopted versus did not adopt discretion, before and after the 1998 reform (Table A4 in Cingano et al. (2025a): means are not significantly different).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| L488/92 administrative data (Ministero dello Sviluppo Economico) | Project applications, numerical scores (I1-I5 and SR/SD sub-scores), subsidy amounts, and funding outcomes for 75,584 projects across 26 calls, 1996-2007 | No page yet |
| INPS Italian social security archives | Monthly employment records for all Italian firms with at least one employee (~1.6 million firms annually); firm start and closure dates; basis for employment outcome variables | No page yet |
| Cerved Group balance sheet database | Investment, revenues, value-added, and total assets for approximately 17,226 L488/92 applicant firms (all Italian limited liability companies, 1993-2015) | [Cerved](/wiki/commercial/cerved/) (licensed) |
| ISTAT census and administrative statistics | Municipality-level socioeconomic characteristics (labor force participation, NEET rates, employment composition, population); price deflators (IPCA) | No page yet |
| Gazzetta Ufficiale della Repubblica Italiana | Official gazette entries used to identify competition "cells" (call-region-category) for each applicant | No page yet |

Sample: 40,366 projects from 27,084 firms for the employment outcome regressions (n = 31,681 for 3-year and n = 28,759 for 6-year employment). Balance sheet outcomes are available for 17,226 companies. Period: 26 L488/92 calls, 1996-2007 (5 calls missing for data reasons). About 45% of applicants scored at or above the cutoff; roughly 80% of those received the subsidy (complier share approximately 0.8, Table II, p. 757).

## When to read the full paper

Read the [original](https://doi.org/10.3982/ECTA21319) if you are: evaluating the cost-effectiveness of firm subsidy programs and comparing rules-based versus discretionary allocation criteria (Tables IV and VI); applying the Angrist and Rokkanen (2015) CIA extrapolation to characterize treatment effects across the full running-variable distribution, not just around the cutoff (Section 4, eqs. 4-10); studying treatment effect heterogeneity by firm type under a place-based policy (Section 6.3, Figure 8); or interested in Italian regional economic disparities and the North-South productivity divide (Sections 2 and 6.2). The companion supplement (Cingano et al. (2025b)) covers extensive robustness checks, including non-parametric bandwidth variation, alternative propensity-score restrictions, and a fully flexible relationship between SD and SR.

## Attribution and rights

Source: peer-reviewed, *Econometrica*, Vol. 93, No. 3 (May, 2025). This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Cingano, Federico, Filippo Palomba, Paolo Pinotti, and Enrico Rettore.
> "Making Subsidies Work: Rules versus Discretion."
> *Econometrica* 93, no. 3 (May 2025): 747-778.
> DOI: 10.3982/ECTA21319. © 2025 The Authors.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
