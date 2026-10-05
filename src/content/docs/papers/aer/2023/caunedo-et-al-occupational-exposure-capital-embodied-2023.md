---
title: "Occupational Exposure to Capital-Embodied Technical Change: Caunedo, Jaume & Keller (2023)"
description: >-
  Distilled: Using the first measures of capital-embodied technical change (CETC)
  at the occupational level, Caunedo, Jaume, and Keller show that CETC accounts
  for 95% of gross US labor reallocation between 1984 and 2015, with heterogeneous
  capital-labor substitutability (not the extent of CETC) as the key driver.
  American Economic Review 2023, AEA standard (free access). Twenty-five core results
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
    assignedBy: gpt-6-luna
    date: 2026-06-25
  topics: ['Energy, Environment, Economic Growth', 'Fiscal Policy and Economic Growth', 'Economic Growth and Productivity']
  dataAccess: public
  outcome:
    - employment shares by occupation
    - occupational capital per worker and capital-embodied technical change
    - occupational capital measure validation
    - college premium
    - gender wage gap
    - occupational wage premia
    - age wage premia
    - elasticity of substitution between capital and labor by occupation
    - elasticity of substitution across occupational output
    - elasticity of substitution across capital goods
  outcomeClass: [labor-careers-health]
  license: "AEA standard copyright; article freely accessible after the 12-month AEA delayed open-access period (no CC licence). No licence block found in Crossref metadata."
  licenseShort: "AEA (free access)"
  access: open
  machineAccess: "freely accessible (pubs.aeaweb.org, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 25
  citedByCount: 33
  methods:
    role: both
    contributes: occupational-cetc-measurement
    family: structural
    buildsFrom: [instrumental-variables, panel-regression, text-classification, roy-occupational-sorting]
    identification: instrument
  contributionType: [new-data, measurement, new-fact]
  mechanisms: [capital-labor-substitution]
  introducesData: true
  scope:
    region: US
    assetClass: US labor market (occupations)
    period: 1984-01..2015-12
    frequency: annual
    dataType: [survey, other]
    granularity: [aggregate]
    n: "324 3-digit occupations (9 one-digit groups), 1984-2015 annually"
  findings:
    - { ref: R1, outcome: employment shares by occupation, metric: pp-effect, value: "7.23 pp CETC-induced high-skill shift (72% of 10.06 pp observed)", direction: positive, vsBenchmark: "72% of total observed high-skill employment growth, 1984-2015" }
    - { ref: R2, outcome: employment shares by occupation, metric: pp-effect, value: "-7.82 pp CETC-induced middle-skill shift (58% of -13.58 pp observed)", direction: negative, vsBenchmark: "58% of total observed middle-skill employment loss" }
    - { ref: R3, outcome: employment shares by occupation, metric: pp-effect, value: "2.89 pp gross reallocation attributed to CETC (95% of 3.04 pp observed)", direction: positive, vsBenchmark: "95% of total gross labor reallocation across occupations" }
    - { ref: R4, outcome: college premium, metric: pp-effect, value: "15.56 pp attributed to CETC (51% of 30.58 pp observed college premium rise)", direction: positive, vsBenchmark: "51% of total college premium rise, 1984-2015" }
    - { ref: R5, outcome: gender wage gap, metric: pp-effect, value: "17.49 pp widening attributed to CETC", direction: positive, vsBenchmark: "CETC offsets 17.49 pp of the 28.01 pp total gender gap closure" }
    - { ref: R6, outcome: elasticity of substitution between capital and labor by occupation, metric: coefficient, value: "IV sigma ranges from 0.65 (technicians) to 2.18 (admin. services); aggregate IV sigma = 0.88 in the text (p. 1657) but 0.82 in App. Table B.III (SE 0.24)", direction: mixed }
    - { ref: R7, outcome: employment shares by occupation, metric: pp-effect, value: "0.40 pp high-skill shift with common elasticity vs 7.23 pp baseline (< 10%)", direction: positive, vsBenchmark: "< 10% of baseline CETC high-skill shift when occupational elasticity heterogeneity is removed" }
    - { ref: R8, outcome: employment shares by occupation, metric: pp-effect, value: "0.59 pp CETC-induced low-skill shift vs 3.52 pp observed", direction: positive, vsBenchmark: "17% of observed low-skill employment-share increase" }
    - { ref: R9, outcome: employment shares by occupation, metric: pp-effect, value: "With common sigma = 0.82, CETC generates 0.50 pp gross movement vs 2.89 pp baseline; high-skill 0.40 pp, middle-skill 0.17 pp, low-skill -0.57 pp", direction: mixed, vsBenchmark: "Common-elasticity counterfactual yields 17% of baseline gross reallocation" }
    - { ref: R10, outcome: employment shares by occupation, metric: pp-effect, value: "CETC-induced absolute average movement: non-college 3.46, college 1.97; ages 16-29 3.04, 30-49 2.71, 50-65 3.08; females 4.10, males 2.47 (table entries are percent)", direction: mixed }
    - { ref: R11, outcome: elasticity of substitution between capital and labor by occupation, metric: p-value, value: "Pairwise Wald tests reject equality for managers vs administrative services (p=0.02), professionals vs sales (p=0.03) and administrative services (p=0.01), and technicians vs sales (p=0.01), administrative services (p=0.00, rounded), and precision production (p=0.03)", direction: mixed }
    - { ref: R12, outcome: elasticity of substitution between capital and labor by occupation, metric: identification-test-statistic, value: "Kleibergen-Paap F ranges from 6.66 to 43.24 across occupations (8.29 aggregate); Dickey-Fuller rejects an error-term unit root for all occupations and the aggregate, at 10% for managers and 5% for the others", direction: mixed }
    - { ref: R13, outcome: employment shares by occupation, metric: level, value: "General-equilibrium employment response is more than five times the Hicks-exposure response; directions agree", direction: positive, vsBenchmark: "Hicks exposure is informative for direction but understates magnitude by more than 5x" }
    - { ref: R14, outcome: age wage premia, metric: pp-effect, value: "CETC contributes 5.90 pp to the 7.95 pp increase for ages 30-49 and 3.80 pp to the 13.83 pp increase for ages 50-65", direction: positive }
    - { ref: R15, outcome: occupational wage premia, metric: pp-effect, value: "CETC contributes 7.80 pp to the 16.25 pp high-skill premium increase and 7.90 pp to the 4.50 pp middle-skill premium increase", direction: positive }
    - { ref: R16, outcome: employment shares by occupation, metric: pp-effect, value: "Demand shifts contribute 2.92 pp to the 3.52 pp low-skill employment-share increase; demand also contributes 24.27 pp to the 30.58 pp college-premium increase and -22.21 pp to the -28.01 pp gender-gap change", direction: mixed }
    - { ref: R17, outcome: employment shares by occupation, metric: pp-effect, value: "Using 1995-2005 CETC trends, the 2005 model predicts 3.8 pp of the 5.0 pp high-skill share increase in 2005-2015, 64% of middle-skill outflow, and a 0.35 pp low-skill outflow vs a 0.34 pp observed inflow", direction: mixed }
    - { ref: R18, outcome: college premium, metric: pp-effect, value: "CETC in computers contributes 3.06 pp, communication equipment 3.56 pp, and software 4.64 pp to the 30.58 pp college-premium increase", direction: positive, vsBenchmark: "10%, 12%, and 15% of the rise, respectively" }
    - { ref: R19, outcome: occupational capital per worker and capital-embodied technical change, metric: annualized-growth-rate, value: "Capital per worker grew 1.1% annually in administrative services and professionals and 1.4% in sales, while annual CETC exceeded 8% in managers, sales, and administrative services and was 2.9% in mechanics and 3.4% in precision production", direction: mixed }
    - { ref: R20, outcome: elasticity of substitution across occupational output, metric: coefficient, value: "IV rho = 1.34 (SE 0.061); OLS rho = 1.11 (SE 0.008)", direction: positive }
    - { ref: R21, outcome: elasticity of substitution across capital goods, metric: coefficient, value: "phi = 1.13 (SE 0.017); with a time trend phi = 1.42 (SE 0.030), and with occupation-by-capital-good trends phi = 1.00 (SE 0.014)", direction: positive }
    - { ref: R22, outcome: college premium, metric: pp-effect, value: "CETC trends imply a 10 pp decrease in the college premium during 2005-2015 (the premium fell 4.17 pp in the data); they predict a rising gender gap while the data gap continued to fall", direction: mixed }
    - { ref: R23, outcome: occupational capital measure validation, metric: correlation, value: "Occupational tool shares correlate 0.90 with CPS computer-use hours in 1984, 0.96 in 2003, and 0.96 for changes from 1984 to 2003", direction: positive }
    - { ref: R24, outcome: occupational capital measure validation, metric: correlation, value: "Cross-industry correlations of allocated vs BEA equipment stocks are 0.60 to 0.55 for communication (1984 to 2016), 0.99 in both years for medical equipment, 0.98 to 0.81 for aircraft, and 0.72 to 0.30 for computers", direction: mixed }
    - { ref: R25, outcome: employment shares by occupation, metric: pp-effect, value: "Low-skill services and precision production show opposite employment-share changes despite similar CETC; machine operators and administrative services have similar employment declines with capital-expense-ratio growth of 2.5 vs 0.25 percentage points per year", direction: mixed }
  resultType: mixed
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
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and added R8-R25, the missing main-text equations and estimating specifications, measurement-validation results, and the capital-labor-substitution mechanism. Additions are not human-verified and were not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Audited all 25 Core rows and source equations; corrected equation transcriptions, clarified aggregate elasticity and diagnostic levels, disambiguated the identical-CETC counterfactual, and corrected data-type/sample wording. Directly checked all cited source locators; no headline result is missing. Post-verification review (2026-10-04) restored scope.granularity to [aggregate]: occupation is not a schema value." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20211478", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata; PDF link at pubs.aeaweb.org/doi/pdf/10.1257/aer.20211478 with content-version vor. AEA provides delayed free access (12-month embargo) but does not assert a CC licence." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the structural model of occupational capital and worker sorting, and the method for measuring CETC at the occupational level, with the defining equations: enough to know what was found and how, without reading the full 44 pages. To replicate or extend, read the original at [doi:10.1257/aer.20211478](https://doi.org/10.1257/aer.20211478).

## TL;DR

Caunedo, Jaume, and Keller construct the first direct measures of capital-embodied technical change (CETC) at the occupational level, covering 24 BEA equipment categories and 327 census occupations; the matched tool series covers 324 observed three-digit occupations from 1984 to 2015. They combine NLP-extracted tool use from the 1977 Dictionary of Occupational Titles and O\*NET with BEA quality-adjusted capital stocks. They also estimate the elasticity of substitution between capital and labor in each one-digit occupation via an instrumental-variables strategy. Embedding these measures in a general equilibrium model of occupational choice (Roy 1951 tradition with Frechet efficiency draws), they find that CETC accounts for 95% of gross US labor reallocation between 1984 and 2015 and 51% of the rise in the college premium. The key driver is heterogeneity in the elasticity of substitution across occupations: without it, CETC would generate less than 10% of the observed high-skill employment shift.

## Core results

Magnitudes are as reported; locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | CETC accounts for **72% of the labor reallocation toward high-skill occupations** (professionals, managers, technicians) between 1984 and 2015 | Table 1, p. 1667 | 7.23 pp of 10.06 pp observed high-skill employment share increase |
| R2 | CETC accounts for **58% of the employment loss in middle-skill occupations** (machine operators, precision production, admin. services, sales, mechanics) | Table 1, p. 1667 | -7.82 pp of -13.58 pp observed middle-skill employment share decline |
| R3 | CETC drives **95% of gross labor reallocation** across all occupations | Table 1, p. 1667 | 2.89 pp of 3.04 pp average absolute employment share change; data gross reallocation = 3.0 pp |
| R4 | CETC accounts for **51% of the rise in the college premium** between 1984 and 2015 | Table 2, p. 1671 | 15.56 pp of 30.58 pp observed college premium increase |
| R5 | CETC **widens the gender wage gap by 17.49 pp**, primarily by raising wages per efficiency unit in mechanics/transportation (male-intensive) and managerial occupations | Table 2, p. 1671 | Without CETC, gender wage gap would have closed by 45.50 pp instead of 28.01 pp |
| R6 | **Occupational IV elasticities of substitution range from 0.65 to 2.18**; the paper reports different aggregate estimates in the text and appendix table | Figure 3, p. 1657; App. Table B.III, p. 1681 | Technicians: 0.65 (SE 0.21); mechanics/transp.: 0.73; managers: 0.93; admin. services: 2.18 (SE 0.50); aggregate: 0.88 in text (p. 1657) and 0.82 in App. Table B.III (SE 0.24) |
| R7 | **Heterogeneity in elasticity of substitution is the primary channel**: imposing a common elasticity (sigma = 0.82) reduces CETC's high-skill employment shift from 7.23 pp to 0.40 pp, less than 10% of the baseline | Table 1, "identical elasticity" column, p. 1667 | 0.40 pp vs 7.23 pp baseline; equalizing CETC paths changes the high-skill CETC contribution from 7.23 to 7.42 pp (+0.19 pp) |
| R8 | CETC accounts for part of the employment increase in low-skill services | Table 1, p. 1667 | 0.59 pp of 3.52 pp observed increase (17%) |
| R9 | Removing occupational elasticity differences reduces total and skill-group employment effects | Table 1, p. 1667 | With common sigma = 0.82, gross movement is 0.50 pp vs 2.89 pp baseline; high-skill 0.40 pp, middle-skill 0.17 pp, low-skill -0.57 pp |
| R10 | CETC-induced employment reallocation differs across worker groups | Table 1, p. 1667 | Absolute average movement: non-college 3.46 vs college 1.97; ages 16-29 3.04, 30-49 2.71, 50-65 3.08; females 4.10 vs males 2.47 (table entries are percent) |
| R11 | Pairwise Wald tests support occupational heterogeneity in capital-labor substitution | Table B.II, p. 1681; discussed p. 1657 | Reject equality for managers vs administrative services (p=0.02), professionals vs sales (p=0.03) and administrative services (p=0.01), technicians vs sales (p=0.01), administrative services (p=0.00, rounded), and precision production (p=0.03) |
| R12 | Instrument-strength and time-series diagnostics vary across occupations | Table B.III, p. 1681; discussed p. 1658 | Kleibergen-Paap F-statistics range from 6.66 to 43.24 across occupations (8.29 aggregate); Dickey-Fuller tests reject an error-term unit root for every occupation and the aggregate, at 10% for managers and 5% for the others |
| R13 | Hicks exposure predicts the direction of reallocation but understates the general-equilibrium magnitude | Figure 5, p. 1668 | General-equilibrium response is more than five times the Hicks-exposure response |
| R14 | CETC contributes to age-premium increases, more for workers aged 30-49 | Table 2, p. 1671 | 5.90 pp of 7.95 pp for ages 30-49; 3.80 pp of 13.83 pp for ages 50-65 |
| R15 | CETC raises both high- and middle-skill occupation premia relative to low-skill occupations | Table 2, p. 1671 | 7.80 pp of 16.25 pp for high-skill; 7.90 pp versus the 4.50 pp observed middle-skill premium increase |
| R16 | Occupational demand shifts are a major force outside CETC, particularly for low-skill employment and wage premia | Table B.V, p. 1681; discussed pp. 1668-1672 | Demand contributes 2.92 pp to low-skill share growth, 24.27 pp to the 30.58 pp college-premium increase, and -22.21 pp to the -28.01 pp gender-gap change |
| R17 | CETC trends predict much of 2005-2015 high- and middle-skill employment changes | Figure 7, pp. 1672-1673 | 3.8 pp of 5.0 pp high-skill growth and 64% of middle-skill outflow; predicted low-skill outflow 0.35 pp vs observed inflow 0.34 pp |
| R18 | Software and communication equipment CETC matter more than computer CETC for the college premium | Table 3, p. 1676 | Contributions are 3.06 pp for computers, 3.56 pp for communication equipment, and 4.64 pp for software, or 10%, 12%, and 15% of the 30.58 pp rise |
| R19 | Capital deepening and CETC vary substantially across occupational groups | Figure 1, p. 1651; text p. 1651 | Capital per worker grows 1.1% annually in administrative services and professionals and 1.4% in sales; annual CETC exceeds 8% in managers, sales, and administrative services vs 2.9% in mechanics and 3.4% in precision production |
| R20 | Estimated demand elasticity across occupational output exceeds one | Equation (14), p. 1664; text p. 1665 | IV rho = 1.34 (SE 0.061); OLS rho = 1.11 (SE 0.008) |
| R21 | Estimated elasticity across capital goods is above one and robust to trend controls | Equation (17), p. 1675; footnote 32, p. 1675 | phi = 1.13 (SE 0.017); with a time trend 1.42 (SE 0.030); with occupation-by-capital-good trends 1.00 (SE 0.014) |
| R22 | The 2005 CETC trends forecast the subsequent college-premium slowdown but miss the gender-gap direction | Figure 7, pp. 1672-1674; text pp. 1673-1674 | Predicted college premium falls 10 pp in 2005-2015 versus a 4.17 pp data decline; predicted gender gap rises while the data gap continues to decline |
| R23 | Occupational capital tool shares closely match CPS computer-use hours | Appendix Figure B.II, p. 1679; text p. 1654 | Correlations are 0.90 in 1984, 0.96 in 2003, and 0.96 for the 1984-2003 change |
| R24 | Allocated occupational capital aggregates align with BEA industry allocations for most equipment categories | Text p. 1654 | Communication correlation 0.60 in 1984 and 0.55 in 2016; medical equipment 0.99 both years; aircraft 0.98 and 0.81; computers 0.72 and 0.30 |
| R25 | Similar CETC or capital-intensity patterns can accompany opposite employment changes across occupations | Figure 2, p. 1652; text pp. 1651-1652 | Low-skill services and precision production have similar CETC but opposite employment-share changes; machine operators and administrative services have employment declines of similar size despite capital-expense-ratio growth of 2.5 vs 0.25 percentage points per year |

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
y_t = \left( \sum_o \omega_{ot}^{1/\rho} y_{ot}^{(\rho-1)/\rho} \right)^{\rho/(\rho-1)},
$$

where $$\rho$$ is the (absolute) demand elasticity for occupational output and $$\omega_{ot}$$ is an occupational demand shifter capturing offshoring and structural change forces.

**Capital producer.** Each unit of occupational capital is produced from the final good at a rate of transformation $$q_{ot}$$, so the user cost satisfies $$\lambda^k_{ot} = 1/q_{ot}$$. CETC in occupation $$o$$ is the decline in the user cost of occupational capital relative to consumption: a rise in $$q_{ot}$$ is the capital-embodied improvement.

**Worker occupational choice.** The economy has $$H$$ labor groups (defined by age, gender, education). Worker $$i$$ of type $$h$$ draws efficiency units $$n_{oht}(i)$$ from a Frechet distribution with scale $$T_{oht}$$ and shape $$\theta$$. Worker $$i$$ of type $$h$$ chooses the occupation that maximizes wages:

$$
o^*_{ht}(i) = \arg\max_o \{ w_{oht}(i) \}, \tag{13}
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

**Producer and worker conditions.** Occupational producers choose capital and labor to maximize profit, the final-good producer chooses occupational outputs, and the capital producer chooses investment goods. These are equations (9)-(11), p. 1662:

$$
\max_{\{k_{ot},n_{ot}\}} \lambda^y_{ot} y_{ot} - \lambda^k_{ot} k_{ot} - \lambda^n_{ot} n_{ot}. \tag{9}
$$

$$
\max_{\{y_{ot}\}} \lambda^y_t y_t - \sum_o \lambda^y_{ot} y_{ot}. \tag{10}
$$

$$
\max_{\{x_{ot}\}} \lambda^k_{ot} q_{ot} x_{ot} - \lambda^y_t x_{ot}. \tag{11}
$$

The comparative advantage of labor type h over type h' in occupation o relative to occupation o' is equation (12), p. 1663:

$$
\left(\frac{T_{oht}/T_{o'ht}}{T_{oh't}/T_{o'h't}}\right)^{1/\theta}. \tag{12}
$$

The model-implied average wage for labor group h, used to match wage outcomes in the calibration, is equation (15), p. 1670:

$$
w_{ht} = \left(\sum_o T_{oht}(\lambda^n_{ot})^\theta\right)^{1/\theta}\Gamma\left(1-\frac{1}{\theta}\right). \tag{15}
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

**Multiple capital goods.** In the extension with equipment categories as distinct capital goods, the CES capital aggregator's optimal input mix and occupational capital price are equation (16), p. 1674:

$$
\frac{\xi_{ojt}}{\xi_{oj't}} = \frac{k_{ojt}}{k_{oj't}}\left(\frac{\lambda^k_{jt}}{\lambda^k_{j't}}\right)^\phi, \qquad \lambda^k_{ot} = \left(\sum_{j\in\Omega^k_{ot}} \xi_{ojt}(\lambda^k_{jt})^{1-\phi}\right)^{\frac{1}{1-\phi}}. \tag{16}
$$

The elasticity across capital goods is estimated by OLS from equation (17), p. 1675, using 24 goods, nine occupations, and 32 annual observations from 1984-2015:

$$
\ln\left(\frac{\lambda^k_{jt}k_{ojt}}{\lambda^k_{j't}k_{oj't}}\right) = \beta_1 \ln\left(\frac{\lambda^k_{jt}}{\lambda^k_{j't}}\right) + \epsilon_{jt}. \tag{17}
$$

The paper reports the coefficient and standard error (phi = 1.13, SE = 0.017); this specification has no fixed effects, and the text does not state a standard-error correction.

## Empirical specifications

**Elasticity of substitution (Section II.A).** The structural equation for the capital-labor ratio is estimated as a time-series regression for each one-digit occupation (equation (5), p. 1655):

The target elasticity is defined in equation (4), p. 1655, as the response of the capital-labor ratio in efficiency units to the relative input price:

$$
\sigma_o = \frac{d\ln(k_{ot}/n_{ot})}{d\ln(\lambda^n_{ot}/\lambda^k_{ot})} = \frac{d\ln(k_{ot}/\tilde n_{ot})}{d\ln(\tilde\lambda^n_{ot}\exp(\gamma_{ot})/\lambda^k_{ot})}. \tag{4}
$$

$$
\ln\!\left(\frac{k_{ot}}{\tilde n_{ot}}\right) = \beta_{1o} + \beta_{2o} t + \beta_{3o} \ln\!\left(\frac{\tilde\lambda^n_{ot}}{\lambda^k_{ot}}\right) + \varepsilon_{ot}, \tag{5}
$$

where $$k_{ot}/\tilde n_{ot}$$ is the observed capital-labor ratio (labor adjusted for efficiency via observable demographics), $$\tilde\lambda^n_{ot}/\lambda^k_{ot}$$ is the ratio of the measured labor price to the capital user cost, $$\beta_{3o}$$ identifies $$\sigma_o$$, and $$\beta_{2o}$$ captures the rate of factor-augmenting technical change. The inverse regression representation, equation (6), p. 1658, is:

$$
\ln\left(\frac{\lambda^k_{ot}}{\tilde\lambda^n_{ot}}\right) = \bar\beta_{1o} + \bar\beta_{2o}t + \bar\beta_{3o}\ln\left(\frac{k_{ot}}{\tilde n_{ot}}\right) + \bar\varepsilon_{ot}. \tag{6}
$$

Each occupation is estimated on its 1984-2015 annual time series (32 observations), with an occupation-specific intercept and linear time trend, no pooled fixed effects, and the occupation-specific labor-supply instrument described above; trade-shift instruments are used for low-skill services and mechanics and transportation. Figure 3 reports 95% confidence intervals and Appendix Table B.III reports standard errors; the article does not state a standard-error correction in the main text. The specification allows a 2000 trend break as an online-appendix robustness check.

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

Equation (14) uses nine occupations over 1984-2015 (288 occupation-years), an intercept and occupation-specific linear time trends, and the average-capital-cost Bartik instrument. The reported estimates are OLS rho = 1.11 (SE 0.008) and IV rho = 1.34 (SE 0.061); the paper does not specify a standard-error correction.

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
