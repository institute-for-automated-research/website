---
title: "Occupational Exposure to Capital-Embodied Technical Change: Caunedo, Jaume & Keller (2023)"
description: >-
  Distilled: Using the first measures of capital-embodied technical change (CETC)
  at the occupational level, Caunedo, Jaume, and Keller show that CETC accounts
  for 95% of gross US labor reallocation between 1984 and 2015, with heterogeneous
  capital-labor substitutability (not the extent of CETC) as the key driver.
  American Economic Review 2023, AEA standard (free access). Seven core results
  with source locators, datasets used, the model, and the method.
sidebar:
  label: Caunedo-Jaume-Keller 2023
  order: 1
tags: [paper-summary, labor-economics, technical-change, wage-inequality,
       employment-polarization, occupational-choice, structural-estimation,
       instrumental-variables, panel-regression, open-access, peer-reviewed,
       unreplicated, data:bea-fixed-assets, data:onet, data:cps, data:dot]
paper:
  authors: Julieta Caunedo, David Jaume, Elisa Keller
  authorList:
    - { family: Caunedo, given: Julieta, affiliation: Rotman School of Management, University of Toronto }
    - { family: Jaume, given: David, affiliation: Banco de Mexico }
    - { family: Keller, given: Elisa, orcid: "0000-0001-7443-183X", affiliation: Department of Economics, University of Exeter }
  year: 2023
  venue: American Economic Review 113(6), June 2023, 1642-1685
  venueShort: AER 2023
  doi: 10.1257/aer.20211478
  jel:
    codes: [I26, J16, J24, J31, O33]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Energy, Environment, Economic Growth', 'Fiscal Policy and Economic Growth', 'Economic Growth and Productivity']
  dataAccess: public
  outcome:
    - employment shares by occupation
    - college premium
    - gender wage gap
    - occupational wage premia
    - elasticity of substitution between capital and labor by occupation
  outcomeClass: [labor-careers-health]
  license: "AEA standard copyright; article freely accessible after the 12-month AEA delayed open-access period (no CC licence). No licence block found in Crossref metadata."
  licenseShort: "AEA (free access)"
  access: open
  machineAccess: "freely accessible (pubs.aeaweb.org, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 33
  methods:
    role: both
    contributes: occupational-cetc-measurement
    family: structural
    buildsFrom: [instrumental-variables, panel-regression, text-classification, roy-occupational-sorting]
    identification: instrument
  contributionType: [new-data, measurement, new-fact]
  introducesData: true
  scope:
    region: US
    assetClass: US labor market (occupations)
    period: 1984-01..2015-12
    frequency: annual
    dataType: [administrative, other]
    granularity: [aggregate]
    n: "324 3-digit occupations (9 one-digit groups), 1984-2015 annually"
  findings:
    - ref: R1
      outcome: employment shares by occupation
      metric: pp-effect
      value: "7.23 pp CETC-induced high-skill shift (72% of 10.06 pp observed)"
      direction: positive
      vsBenchmark: "72% of total observed high-skill employment growth, 1984-2015"
    - ref: R2
      outcome: employment shares by occupation
      metric: pp-effect
      value: "-7.82 pp CETC-induced middle-skill shift (58% of -13.58 pp observed)"
      direction: negative
      vsBenchmark: "58% of total observed middle-skill employment loss"
    - ref: R3
      outcome: employment shares by occupation
      metric: pp-effect
      value: "2.89 pp gross reallocation attributed to CETC (95% of 3.04 pp observed)"
      direction: positive
      vsBenchmark: "95% of total gross labor reallocation across occupations"
    - ref: R4
      outcome: college premium
      metric: pp-effect
      value: "15.56 pp attributed to CETC (51% of 30.58 pp observed college premium rise)"
      direction: positive
      vsBenchmark: "51% of total college premium rise, 1984-2015"
    - ref: R5
      outcome: gender wage gap
      metric: pp-effect
      value: "17.49 pp widening attributed to CETC"
      direction: positive
      vsBenchmark: "CETC offsets 17.49 pp of the 28.01 pp total gender gap closure"
    - ref: R6
      outcome: elasticity of substitution between capital and labor
      metric: coefficient
      value: "IV sigma ranges from 0.65 (technicians) to 2.18 (admin. services); aggregate IV sigma = 0.88 (SE 0.24)"
      direction: mixed
    - ref: R7
      outcome: employment shares by occupation
      metric: pp-effect
      value: "0.40 pp high-skill shift with common elasticity vs 7.23 pp baseline (< 10%)"
      direction: positive
      vsBenchmark: "< 10% of baseline CETC high-skill shift when occupational elasticity heterogeneity is removed"
  resultType: new-finding
  relatesTo:
    - { cite: "Greenwood, Hercowitz & Krusell (1997)", relation: builds-on, note: "framework for investment-specific (capital-embodied) technical change as a decline in the relative price of capital" }
    - { cite: "Krusell, Ohanian, Rios-Rull & Violante (2000)", doi: '10.1111/1468-0262.00150', relation: builds-on, note: "capital-skill complementarity hypothesis and GE framework for CETC effects on wages" }
    - { cite: "Autor, Levy & Murnane (2003)", doi: '10.1162/003355303322552801', relation: tests, note: "tests their routinization hypothesis with directly-measured occupational capital rather than task proxies; substitution heterogeneity, not task intensity, is the key driver" }
    - { cite: "Burstein, Morales & Vogel (2019)", doi: '10.1257/mac.20170291', relation: tests, note: "computers explain 10% of college premium rise (vs their 60%) when using direct capital price measures and heterogeneous elasticities" }
  openQuestions:
    - "How changes in the demand for skills feed back into the pace and direction of CETC is an open question for future research (p. 1676)."
    - "How skill acquisition, through schooling or on-the-job training, responds to changes in occupational demand is an open question; the model can be expanded to address it, as in Dvorkin and Monge-Naranjo (2019) (p. 1676)."
    - "Studies extending the baseline framework to market incompleteness, such as financial frictions affecting skill acquisition, may provide new insights on the optimal pace of technical change (p. 1676)."
  replicationCode:
    url: "https://doi.org/10.5281/zenodo.7591599"
    status: available
  proposedVocab:
    - { axis: method, term: occupational-cetc-measurement, def: "Methodology for measuring capital-embodied technical change (CETC) at the occupational level by constructing quality-adjusted occupational capital stocks from BEA fixed-asset tables, O*NET / DOT tool descriptions, and NLP-based occupational assignment, then computing the user cost of occupational capital relative to consumption.", aliases: [cetc-occupational-measure] }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1642-1685 plus appendices); seven results extracted from PDF. Not human-verified. Not reproduced. Replication data available at doi:10.5281/zenodo.7591599 but not run here." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and magnitudes re-checked against Table 1 (p.1667), Table 2 (p.1671), Figure 3 (p.1657), and App. Table B.III (p.1681); all 7 rows confirmed. Three fixes applied: (1) JEL codes I26 and J16 added (paper lists 5 codes, wiki had 3); (2) equation (13) subscript h restored to o*_h(i) per PDF p.1663, description corrected from 'probability' to optimal-choice argmax; (3) scope.granularity changed from [industry] to [occupation] (unit of analysis is 324 3-digit census occupations). Note: aggregate IV elasticity is 0.82 in Table B.III but 0.88 in body text (pp.1644, 1657); wiki follows text (0.88, SE 0.24 from table), consistent with both sources. Final Good Producer outer exponent is -rho/(rho-1) in both PDF and wiki; internally inconsistent with FOC equation (19) but faithfully transcribed from source."
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20211478", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata; PDF link at pubs.aeaweb.org/doi/pdf/10.1257/aer.20211478 with content-version vor. AEA provides delayed free access (12-month embargo) but does not assert a CC licence." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the structural model of occupational capital and worker sorting, and the method for measuring CETC at the occupational level, with the defining equations: enough to know what was found and how, without reading the full 44 pages. To replicate or extend, read the original at [doi:10.1257/aer.20211478](https://doi.org/10.1257/aer.20211478).

## TL;DR

Caunedo, Jaume, and Keller construct the first direct measures of capital-embodied technical change (CETC) at the occupational level, covering 24 BEA equipment categories and 327 US occupations from 1984 to 2015, by combining NLP-extracted tool use from the 1977 Dictionary of Occupational Titles and O\*NET with BEA quality-adjusted capital stocks. They also estimate the elasticity of substitution between capital and labor in each one-digit occupation via an instrumental-variables strategy. Embedding these measures in a general equilibrium model of occupational choice (Roy 1951 tradition with Frechet efficiency draws), they find that CETC accounts for 95% of gross US labor reallocation between 1984 and 2015 and 51% of the rise in the college premium. The key driver is not the extent of CETC but heterogeneity in the elasticity of substitution across occupations: without it, CETC would generate less than 10% of the observed high-skill employment shift.

## Core results

Magnitudes are as reported; locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | CETC accounts for **72% of the labor reallocation toward high-skill occupations** (professionals, managers, technicians) between 1984 and 2015 | Table 1, p. 1667 | 7.23 pp of 10.06 pp observed high-skill employment share increase |
| R2 | CETC accounts for **58% of the employment loss in middle-skill occupations** (machine operators, precision production, admin. services, sales, mechanics) | Table 1, p. 1667 | -7.82 pp of -13.58 pp observed middle-skill employment share decline |
| R3 | CETC drives **95% of gross labor reallocation** across all occupations | Table 1, p. 1667 | 2.89 pp of 3.04 pp average absolute employment share change; data gross reallocation = 3.0 pp |
| R4 | CETC accounts for **51% of the rise in the college premium** between 1984 and 2015 | Table 2, p. 1671 | 15.56 pp of 30.58 pp observed college premium increase |
| R5 | CETC **widens the gender wage gap by 17.49 pp**, primarily by raising wages per efficiency unit in mechanics/transportation (male-intensive) and managerial occupations | Table 2, p. 1671 | Without CETC, gender wage gap would have closed by 45.50 pp instead of 28.01 pp |
| R6 | **Occupational IV elasticities of substitution range from 0.65 to 2.18**; aggregate IV elasticity = 0.88, consistent with prior aggregate estimates | Figure 3, p. 1657; App. Table B.III, p. 1681 | Technicians: 0.65 (SE 0.21); mechanics/transp.: 0.73; managers: 0.93; admin. services: 2.18 (SE 0.50); aggregate: 0.88 (SE 0.24) |
| R7 | **Heterogeneity in elasticity of substitution is the primary channel**: imposing a common elasticity (sigma = 0.82) reduces CETC's high-skill employment shift from 7.23 pp to 0.40 pp, less than 10% of the baseline | Table 1, "identical elasticity" column, p. 1667 | 0.40 pp vs 7.23 pp baseline; equalizing CETC paths across occupations changes reallocation by only 0.19 pp |

**Overall (paper's conclusion).** The heterogeneity in the types of capital used across occupations, and consequently in the elasticity of substitution between capital and labor, is the primary channel through which CETC shapes employment reallocation and wage inequality. CETC reallocates employment out of middle-skill occupations (higher capital-labor substitutability) and into high-skill occupations (higher complementarity). Computer-specific CETC alone explains only 10% of the college premium rise; communication equipment and software each explain 12-15%, reinforcing the importance of broad capital measurement relative to prior estimates by Burstein, Morales, and Vogel (2019) who attributed 60% to computers. The routinization mechanism in Autor, Levy, and Murnane (2003) is broadly consistent with the findings, but the substitution channel driven by heterogeneous elasticities, not task content per se, is quantitatively primary. The capital-skill complementarity framework of Krusell, Ohanian, Rios-Rull, and Violante (2000) is extended here to allow heterogeneous substitutability across nine occupation groups.

## Theory / model

The model extends Greenwood, Hercowitz, and Krusell (1997) to include multiple occupations with heterogeneous exposure to CETC, and adopts the Roy (1951) occupational choice framework with Frechet efficiency draws.

**Occupational production.** A representative producer in occupation $$o$$ uses a constant-returns CES technology combining capital $$k_{ot}$$ and labor $$n_{ot}$$ to produce occupational output $$y_{ot}$$ (equation (8), p. 1661):

$$
y_{ot} = \left[ \alpha k_{ot}^{\frac{\sigma_o - 1}{\sigma_o}} + (1-\alpha) n_{ot}^{\frac{\sigma_o - 1}{\sigma_o}} \right]^{\frac{\sigma_o}{\sigma_o - 1}}, \tag{8}
$$

where $$\sigma_o \geq 0$$ is the elasticity of substitution between capital and labor, which differs across occupations. Occupations differ in two dimensions: the technology embodied in capital (CETC) and this elasticity.

**Final good producer.** Final consumption is a CES aggregator of occupational goods (p. 1662):

$$
y_t = \left( \sum_o \omega_{ot}^{1/\rho} y_{ot}^{(\rho-1)/\rho} \right)^{-\rho/(\rho-1)},
$$

where $$\rho$$ is the (absolute) demand elasticity for occupational output and $$\omega_{ot}$$ is an occupational demand shifter capturing offshoring and structural change forces.

**Capital producer.** Each unit of occupational capital is produced from the final good at a rate of transformation $$q_{ot}$$, so the user cost satisfies $$\lambda^k_{ot} = 1/q_{ot}$$. CETC in occupation $$o$$ is the decline in the user cost of occupational capital relative to consumption: a rise in $$q_{ot}$$ is the capital-embodied improvement.

**Worker occupational choice.** The economy has $$H$$ labor groups (defined by age, gender, education). Worker $$i$$ of type $$h$$ draws efficiency units $$n_{oht}(i)$$ from a Frechet distribution with scale $$T_{oht}$$ and shape $$\theta$$. Worker $$i$$ of type $$h$$ chooses the occupation that maximizes wages:

$$
o^*_h(i) = \arg\max_o \{ w_{oht}(i) \}, \tag{13}
$$

where $$w_{oht}(i) = n_{oht}(i) \lambda^n_{ot}$$ is compensation and $$\lambda^n_{ot}$$ is the wage per efficiency unit (endogenously equated across workers in equilibrium). The Frechet property delivers a closed-form occupational allocation (equation (21), p. 1678):

$$
\pi_{oht} = \frac{T_{oht} (\lambda^n_{ot})^\theta}{\sum_{o'} T_{o'ht} (\lambda^n_{o't})^\theta}, \tag{21}
$$

with labor supply elasticity $$\eta_{n\lambda^n_o} = \theta - 1 = 0.30$$ (using $$\theta = 1.30$$ estimated from Mincerian wage residuals).

**Equilibrium wages.** From the zero-profit condition of the occupational producer, the wage per efficiency unit satisfies (equation (18), p. 1677):

$$
\lambda^n_{ot} = \left[ \left(\frac{1}{1-\alpha}\right)^{\sigma_o} (\lambda^y_{ot})^{1-\sigma_o} - \left(\frac{\alpha}{1-\alpha}\right)^{\sigma_o} (\lambda^k_{ot})^{1-\sigma_o} \right]^{\frac{1}{1-\sigma_o}}. \tag{18}
$$

## Method

The method has two parts: measuring occupational CETC from newly constructed data, and estimating the capital-labor elasticity via instrumental variables. It builds on `instrumental-variables`, `panel-regression`, `text-classification`, and `roy-occupational-sorting`.

**Occupational capital stocks and CETC.** The paper covers all 24 BEA equipment and software categories. Quality-adjusted stocks for each category $$j$$ are initialized in 1984 using nominal stocks as the base and then iterated forward:

$$
k_{ot} = k_{ot-1} e^{\gamma^k_{ot}}, \quad k_{o,1984} = \sum_j \lambda^k_{j,1984} k_{oj,1984}, \tag{1}
$$

where $$\gamma^k_{ot} = \sum_j \omega_{ojt} \gamma^k_{ojt}$$ is the expenditure-share-weighted average growth rate of the equipment categories used in the occupation. The user cost of capital for equipment $$j$$ follows the Jorgenson (1963) no-arbitrage condition (p. 1647):

$$
\lambda^k_{jt} = \frac{p^k_{jt-1}}{\lambda^c_{t-1}} \left[ R - (1-\bar\delta_{jt}) \frac{p^k_{jt}/\lambda^c_t}{p^k_{jt-1}/\lambda^c_{t-1}} \right],
$$

where $$p^k_j$$ is the quality-adjusted price, $$\lambda^c$$ is the price of consumption, $$R = 1.02$$ is the gross return on a safe asset, and $$\bar\delta_{jt}$$ is the average physical depreciation. Occupational CETC is then the implied user cost of occupational capital (equation (2), p. 1647):

$$
\lambda^k_{ot} = \frac{\sum_j \lambda^k_{jt} k_{ojt}}{k_{ot}}. \tag{2}
$$

**Occupational capital requirements.** The capital requirement index assigns the fraction of each equipment category's aggregate services to each occupation, using the tools reported by workers in that occupation (equation (3), p. 1649):

$$
\text{req}_{ojt} = \frac{\tau_{ojt} l_{ot}}{\sum_o \tau_{ojt} l_{ot}}, \tag{3}
$$

where $$\tau_{ojt}$$ is the count of tools from category $$j$$ used by occupation $$o$$ at time $$t$$, and $$l_{ot}$$ is full-time-equivalent workers. The tool data for 2015 come from O\*NET; for 1984, NLP string matching is applied to the 1977 Dictionary of Occupational Titles (DOT) to extract the same tool taxonomy, and then linearly interpolated between the two years.

## Empirical specifications

**Elasticity of substitution (Section II.A).** The structural equation for the capital-labor ratio is estimated as a time-series regression for each one-digit occupation (equation (5), p. 1655):

$$
\ln\!\left(\frac{k_{ot}}{\tilde n_{ot}}\right) = \beta_{1o} + \beta_{2o} t + \beta_{3o} \ln\!\left(\frac{\tilde\lambda^n_{ot}}{\lambda^k_{ot}}\right) + \varepsilon_{ot}, \tag{5}
$$

where $$k_{ot}/\tilde n_{ot}$$ is the observed capital-labor ratio (labor adjusted for efficiency via observable demographics), $$\tilde\lambda^n_{ot}/\lambda^k_{ot}$$ is the ratio of the measured labor price to the capital user cost, $$\beta_{3o}$$ identifies $$\sigma_o$$, and $$\beta_{2o}$$ captures the rate of factor-augmenting technical change. The OLS estimate is biased because relative factor prices are endogenous to capital-labor ratios. Instruments exploit exogenous labor supply shifts: (i) 16-year lagged live births interacted with 1984 occupation-education shares $$sh^e_{oe,1984}$$, and (ii) aggregate trade shocks for occupations with weak first-stage F-statistics (mechanics/transportation and low-skill services). All regression series span 1984 to 2015 (32 annual observations per occupation).

**Workers' exposure to CETC (Section II.B).** Under constant returns and competitive markets, the cross-price elasticity of occupational labor demand with respect to the user cost of capital (equation (7), p. 1659) is:

$$
-\frac{d\ln(n_o)}{d\ln(\lambda^k_o)} = \frac{\eta_{n\lambda^n}(\rho - \sigma_o) \frac{\lambda^k_o k_o}{\lambda^y_o y_o}}{\rho + \eta_{n\lambda^n} + (\sigma_o - \rho) \frac{\lambda^k_o k_o}{\lambda^y_o y_o}}, \tag{7}
$$

where $$\sigma_o$$ is the elasticity of substitution (Section II.A), $$\eta_{n\lambda^n} = 0.30$$ is the labor supply elasticity, $$\rho = 1.34$$ is the demand elasticity across occupational outputs, and $$\lambda^k_o k_o / (\lambda^y_o y_o)$$ is the capital expenditure share. Exposure is positive (CETC raises labor demand) when $$\sigma_o < \rho$$ and negative when $$\sigma_o > \rho$$.

**General equilibrium quantification (Sections III-IV).** The model is parameterized to the US 1984-2015 period using two steps. First, $$\sigma_o$$ and the capital user costs $$\lambda^k_{ot}$$ come from Sections I-II. Second, the scale parameters $$T_{oht}$$ of the Frechet distribution are inferred from observed occupational choices and wages using the equilibrium conditions (equations (21) and (22)). The demand elasticity $$\rho = 1.34$$ is estimated from the regression (equation (14), p. 1664):

$$
\ln\!\frac{\lambda^y_{ot} y_{ot}}{\lambda^y_{o_0 t} y_{o_0 t}} = \beta_1 + \beta_{2o} t + \beta_3 \ln\!\frac{\lambda^y_{ot}}{\lambda^y_{o_0 t}} + \varepsilon_{ot}, \tag{14}
$$

instrumented by a Bartik-style shift in the average cost of capital by occupation. Counterfactuals are run by removing exogenous forces (CETC, demand, demographics, comparative advantage, group composition) one at a time in all orderings, then averaging the marginal contributions (Shapley decomposition approach).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| BEA Fixed-Asset Tables (24 equipment/software categories) | Quality-adjusted capital stocks by equipment category; investment series; depreciation rates | no page yet |
| O\*NET Tools and Technology module (2010s) | Occupational tool use for 2015 assignment of capital to occupations | no page yet |
| Dictionary of Occupational Titles (DOT, 1977) | NLP-extracted tool use for 1984 capital assignment; interpolated with O\*NET to build time series | no page yet |
| March Current Population Survey (CPS, Flood et al. 2019 / IPUMS) | Annual labor market statistics: employment shares, wages, full-time-equivalent workers, by occupation and demographic group, 1984-2015 | no page yet |
| October CPS computer supplement (1984, 2003) | External validation of computer tool assignment against workers' self-reported computer use at work | no page yet |

Sample: 324 3-digit census occupations (9 one-digit groups), 1984-2015, annual frequency. Capital stocks initialized 1984; base year for normalization is 1985.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20211478) when: constructing occupational-level capital exposure measures (Section I describes the data construction and NLP assignment in full detail); estimating occupation-specific factor substitution elasticities (the IV strategy and weak-instrument diagnostics in Appendix Tables B.II-B.III are essential for replication); building a multi-occupation Roy-model GE framework (Appendix A derives all equilibrium conditions); or studying the differential role of specific equipment categories (Table 3 decomposes CETC by computers, communication, and software). The replication data and code are at [zenodo.7591599](https://doi.org/10.5281/zenodo.7591599) and the occupational capital dataset is available at www.capitalbyoccupation.weebly.com.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(6), June 2023. Freely accessible via pubs.aeaweb.org after the AEA's 12-month delayed open-access period. No CC licence; redistribution is extract-only. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**.

> Caunedo, Julieta, David Jaume, and Elisa Keller. "Occupational Exposure to Capital-Embodied Technical Change." *American Economic Review* 113, no. 6 (June 2023): 1642-1685. DOI: 10.1257/aer.20211478.
