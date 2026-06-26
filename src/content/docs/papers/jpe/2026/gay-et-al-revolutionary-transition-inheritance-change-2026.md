---
title: "Revolutionary Transition: Gay, Gobbi & Goñi (2026)"
description: >-
  Distilled: The 1793 French inheritance reforms, which abolished impartible
  inheritance and imposed equal asset partition among all children, reduced
  completed fertility by 0.60-0.70 children per woman in affected areas,
  providing the first empirical support for Le Play's (1875) hypothesis that
  inheritance law drove France's early demographic transition. Journal of
  Political Economy 2026, paywalled. Eight core results with source locators,
  datasets used, the theoretical model with equations, and the estimating
  specifications.
sidebar:
  label: Gay-Gobbi-Goni 2026
  order: 1
tags: [paper-summary, demographic-transition, fertility, french-revolution,
       inheritance, historical-economics, difference-in-differences, rdd,
       peer-reviewed, unreplicated, data:henry-enquete, data:geni]
paper:
  authors: Victor Gay, Paula E. Gobbi, Marc Goñi
  authorList:
    - { family: Gay, given: Victor, orcid: "0000-0001-9912-3841", affiliation: "Toulouse School of Economics, University of Toulouse Capitole" }
    - { family: Gobbi, given: Paula E., orcid: "0000-0002-6647-2030", affiliation: "Université Libre de Bruxelles (ECARES) and CEPR" }
    - { family: Goñi, given: Marc, orcid: "0000-0002-6862-0973", affiliation: "University of Bergen and CEPR" }
  year: 2026
  venue: "Journal of Political Economy 134(6), June 2026, 1666-1713"
  venueShort: J. Political Economy 2026
  doi: 10.1086/739821
  jel:
    codes: [J13, K11, N33]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Demographic Trends and Gender Preferences"]
  dataAccess: public
  outcome:
    - completed fertility (net children surviving to age 6)
    - childlessness rate
    - age at first marriage
  outcomeClass: [demographic-outcomes]
  license: "paywalled (Journal of Political Economy, University of Chicago Press; no open license in Crossref metadata); preprint freely available under CC BY 4.0 at https://hal.science/hal-04285818v1/document"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (UChicago Press, 2026-06-26); preprint at https://hal.science/hal-04285818v1/document (CC BY 4.0, HAL)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 8
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, regression-discontinuity-design, panel-regression]
    identification: natural-experiment
  contributionType: [new-data, new-theory, new-fact]
  mechanisms: [land-fragmentation-fertility]
  introducesData: true
  scope:
    region: France
    period: "1700-01..1810-12"
    frequency: annual
    dataType: [administrative, other]
    granularity: [individual]
    n: "20,332 women (Henry dataset, 1700-1803); 11,649 women (Geni, 1700-1810)"
  findings:
    - { ref: R1, outcome: "completed fertility (net children surviving to age 6)", metric: coefficient, value: "-0.024 to -0.028 children per additional fertile year post-reform (p<0.001); cumulative over 25-year cycle: -0.60 to -0.70 children", direction: negative, vsBenchmark: "~24% reduction relative to pre-reform mean of 2.92 children in treated areas" }
    - { ref: R2, outcome: "completed fertility (net children surviving to age 6)", metric: coefficient, value: "0.682 to 0.748 more children in impartible areas before reform (p<0.001)", direction: positive }
    - { ref: R3, outcome: "completed fertility of mothers (conditional on having children)", metric: coefficient, value: "-0.020 to -0.022 children per fertile year (p<0.01); cumulative: -0.50 to -0.55 children", direction: negative }
    - { ref: R4, outcome: childlessness rate, metric: pp-effect, value: "+0.003 per fertile year post-reform (p<0.001)", direction: positive, vsBenchmark: "+7.5 pp over full 25-year cycle" }
    - { ref: R5, outcome: "completed fertility (net children surviving to age 6)", metric: coefficient, value: "-0.026 to -0.031 per fertile year (p<0.001); cumulative: -0.65 to -0.78 children", direction: negative, vsBenchmark: "flexible-trend DiD controlling for local economic, religious, political trends; Table 3 cols (1)-(4)" }
    - { ref: R6, outcome: age at first marriage, metric: coefficient, value: "+0.073 years per fertile year of exposure (p<0.01); +1.8 years over full cycle", direction: positive }
    - { ref: R7, outcome: "completed fertility of mothers (Geni data, RD-DD)", metric: coefficient, value: "-0.032 to -0.054 children per fertile year (p<0.01); cumulative: -0.75 to -1.25 children", direction: negative, vsBenchmark: "RD-DD at spatial inheritance border; larger than DD estimates due to attenuation bias in nationwide DiD" }
    - { ref: R8, outcome: "completed fertility of mothers (Geni data, pre-reform RD)", metric: coefficient, value: "0.78 (se 0.21, p<0.001): impartible areas had ~0.78 more children per mother before the reforms", direction: positive }
  resultType: confirms
  relatesTo:
    - { cite: "Le Play (1875)", relation: tests, note: "first empirical test of Le Play's hypothesis that impartible inheritance sustained high fertility via land indivisibility" }
    - { cite: "Becker and Lewis (1973)", relation: builds-on, note: "the quantity-quality tradeoff framework whose predictions for France the paper complements with an inheritance-law channel" }
    - { cite: "de la Croix and Doepke (2003)", relation: builds-on, note: "warm-glow altruism utility specification used in the paper's model of endogenous fertility" }
  openQuestions:
    - "Whether egalitarian inheritance reforms reduce fertility where landownership is concentrated in large estates (e.g., England, Prussia), where the model predicts the indivisibility constraint would not bind for most heirs (pp. 48-49)."
    - "Whether Napoleonic invasions spreading the 1793 inheritance reforms to neighboring countries contributed to those countries' subsequent demographic transitions, as most European countries adopted egalitarian inheritance laws by the 1850s (p. 49)."
    - "Whether inheritance reforms toward equality can accelerate fertility transitions in developing countries, especially those experiencing stalls, where legal institutions on inheritance remain an overlooked determinant (p. 49)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read HAL preprint PDF (hal-04285818v4, DOI 10.1086/739821); all results and equations verified against PDF; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 8 Core results rows confirmed; R6 significance corrected from p<0.05 to p<0.01 (Table 3 col 7 shows ** per footnote *p<.05; **p<.01; ***p<.001); all equations 1-14 verified term-by-term; no other errors found." }
  licenceVerification:
    - { source: "Crossref works/10.1086/739821", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license block in Crossref metadata; published in Journal of Political Economy vol 134(6) June 2026 pp. 1666-1713 by University of Chicago Press; HAL preprint (hal-04285818) carries CC BY 4.0 from HAL open science platform." }
  rightsSignalConflict: false
---

**What this is.** A distilled skeleton of Gay, Gobbi, and Goñi (2026), "Revolutionary Transition: Inheritance Change and Fertility Decline," Journal of Political Economy 134(6): 1666-1713. Read the [original paper](https://doi.org/10.1086/739821) to replicate or extend; a freely available preprint is at <https://hal.science/hal-04285818v1/document>. Extracted by LLM; not human-verified; not reproduced.

## TL;DR

The 1793 French inheritance reforms unexpectedly abolished impartible inheritance (primogeniture and unigeniture) and imposed equal partition of assets among all children, including women. Gay, Gobbi, and Goñi (2026) test Le Play's (1875) 150-year-old hypothesis that these reforms drove France's early fertility transition. They build the first complete atlas of pre-Revolutionary inheritance customs at the judicial-district level (141 customs, 435 districts), link it to individual fertility data from two independent sources (the Enquête Louis Henry and Geni.com genealogies), and use difference-in-differences (DD) and regression-discontinuity difference-in-differences (RD-DD) designs. The DD results show that each additional fertile year of exposure to the 1793 reforms reduced completed fertility by roughly 1 percent (0.024-0.028 children per year), with a cumulative effect of 0.60-0.70 children over a full fertile cycle. This effect is almost identical to the pre-reform fertility gap between impartible and partible inheritance areas (0.68-0.75 children), confirming that the reforms brought high-fertility impartible regions to the same low-fertility equilibrium as partible regions, and thereby sharply accelerating France's demographic transition.

## Core results

| \# | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | DD: completed fertility response to 1793 reforms per fertile year of exposure | Table 2, Panel A, p. 33 | -0.024 to -0.028 (p<0.001); over 25-year cycle: -0.60 to -0.70 children |
| R2 | Pre-reform fertility gap: impartible vs partible areas | Table 2, Panel A, p. 33 | +0.682 to +0.748 more children in impartible areas (p<0.001) |
| R3 | DD: completed fertility of mothers (intensive margin) | Table 2, Panel B, p. 33 | -0.020 to -0.022 per fertile year (p<0.01); cumulative: -0.50 to -0.55 children |
| R4 | DD: childlessness rate (extensive margin) | Table 2, Panel C, p. 33 | +0.003 per fertile year (p<0.001); +7.5 pp over full cycle |
| R5 | Flexible-trend DD: completed fertility (controls for economic, religious, political, geography trends) | Table 3, cols (1)-(4), p. 35 | -0.026 to -0.031 per fertile year (p<0.001); cumulative: -0.65 to -0.78 children |
| R6 | Flexible-trend DD: age at first marriage | Table 3, col (7), p. 35 | +0.073 years per fertile year (p<0.01); +1.8 years over full cycle |
| R7 | RD-DD (Geni data): completed fertility of mothers at spatial inheritance border | Table 4, p. 47 | -0.032 to -0.054 per fertile year (p<0.01); cumulative: -0.75 to -1.25 children |
| R8 | RD pre-reform gap (Geni data): fertility discontinuity at inheritance border | Figure 9, Panel A, p. 46 | b = 0.78 (se 0.21, p<0.001): ~0.78 more children in impartible areas before reform |

**Overall (paper's conclusion).** The 1793 inheritance reforms contributed to France's early fertility decline by eliminating the economic incentives for high fertility in formerly impartible inheritance areas. The reform effect is robust across two independent datasets (Henry family-reconstitution and Geni crowdsourced genealogies), two identification strategies (nationwide DD and spatial RD-DD), and extensive controls for economic conditions, religiosity, political factors, and geography. The convergence in fertility across regions was large: the reforms brought roughly half of France to the low-fertility regime that already prevailed under partible inheritance.

## Theory / model

The paper develops a parsimonious model of endogenous fertility under different inheritance rules, formalizing Le Play's (1875) hypothesis. The model features households that care about own consumption and total child endowments, following de la Croix and Doepke (2003) warm-glow altruism (Section 3, p. 12). Unlike Becker and Lewis (1973) quantity-quality tradeoff models where human capital is the key margin, this model focuses on the land indivisibility constraint as the mechanism linking inheritance rules to fertility.

**Utility function** (Eq. 1, p. 12):

$$u(c_i, n_i) = \ln c_i + \beta \ln(n_i y'_i) \tag{1}$$

where $$n \geq 1$$ is the number of children, $$y'$$ is each child's income, and $$\beta > 0$$ weights utility from the next generation's endowment.

**Budget constraint** (Eq. 2, p. 12):

$$c_i = (1 - \phi n_i) y_i \tag{2}$$

where $$\phi \in (0,1)$$ is the fixed cost of raising each child as a share of household income.

**Production function** (Eq. 3, p. 13): Household income is determined by land $$L$$ and labor $$N$$ via a Stone-Geary function with a minimum land threshold $$\bar{L}$$:

$$f(L, N_i) = \begin{cases} 0 & \text{for } L \leq \bar{L} \\ (L - \bar{L})^{1-\alpha} N_i^{\alpha} & \text{otherwise} \end{cases} \tag{3}$$

The threshold $$\bar{L} > 0$$ captures land indivisibility: below it, production is zero. The parameter $$\alpha \in (0,1)$$ is the relative importance of labor.

**Inheritance rules** (Eq. 4, p. 14): Under partible inheritance ($$i = P$$), land is divided equally among $$n_P$$ children, each forming their own household. Under impartible inheritance ($$i = I$$), land is kept whole and the extended family (heir plus $$n_I$$ siblings) works it together:

$$L'_P = \frac{L}{n_p}, \quad N_P = 1, \quad y'_P = f\!\left(\frac{L}{n_p}, 1\right), \quad L'_I = L, \quad N'_I = n_I, \quad y'_I = \frac{f(L, n_I)}{n_I} \tag{4}$$

**Assumption 1** (Eq. 5, p. 14) ensures pre-industrial fertility above replacement:

$$\phi < \frac{\alpha\beta}{\alpha\beta + 1} \tag{5}$$

**Equilibrium fertility** (Eqs. 6-8, p. 14): Optimal fertility differs by inheritance regime when land is in the intermediate range $$\bar{L} < L < \tilde{L}$$, where indivisibility binds under partible but not impartible inheritance. Let $$\tilde{L} \equiv \frac{((1+\beta)\phi - \beta)\bar{L}}{\phi - \alpha\beta(1-\phi)}$$ and $$\Delta \equiv (\beta\bar{L} + (1+\alpha\beta)\phi L)^2 - 4\alpha\beta(1+\beta)\phi\bar{L}L$$:

$$\text{If } L \leq \bar{L}: \quad n^*_I = n^*_P = 1 \tag{6}$$

$$\text{If } \bar{L} < L < \tilde{L}: \quad n^*_I = \frac{\alpha\beta}{(1+\alpha\beta)\phi} \text{ and } n^*_P = 1 \tag{7}$$

$$\text{If } L \geq \tilde{L}: \quad n^*_I = \frac{\alpha\beta}{(1+\alpha\beta)\phi} \text{ and } n^*_P = \frac{\beta\bar{L} + (1+\alpha\beta)\phi L - \sqrt{\Delta}}{2(1+\beta)\phi\bar{L}} \tag{8}$$

**Proposition 1** (p. 15): Fertility is strictly higher under impartible inheritance than under partible inheritance (for $$L > \bar{L}$$).

The intuition: under partible inheritance, dividing a plot of productive land among many heirs can push per-heir land below $$\bar{L}$$, making production zero. Parents internalize this and limit family size. Under impartible inheritance, land is kept whole, remaining productive regardless of family size. The reform abolishing impartible inheritance in 1793 sets $$\theta = 0$$ (the share of households under impartible rules), moving the economy to the low-fertility partible equilibrium.

The model also rationalizes why similar reforms did not reduce fertility in England or Prussia, where large concentrated landholdings meant the indivisibility constraint would not bind for most heirs.

## Method

The empirical strategy combines two complementary identification designs:

**1. Difference-in-differences (Section 5, pp. 24-28).** The primary design exploits regional variation in pre-reform inheritance systems (treated: formerly impartible areas where the 1793 reforms changed the system; control: already-partible areas where the reforms were immaterial) interacted with cohort exposure to the reforms. Exposure is continuous: $$F_c$$ is the remaining number of fertile years after 1793 for a woman in cohort $$c$$, rising linearly from 0 for women aged 40+ in 1793 (who completed their fertile cycle before the reforms) to 25 for women aged 15 in 1793 (whose entire fertile cycle lay after the reforms). This "treatment intensity" design, building on difference-in-differences, avoids the binary classification of exposure and tests whether effects grow proportionally with reform exposure.

**2. Regression-discontinuity difference-in-differences (Section 7, pp. 41-47).** The supplementary design (using Geni data) restricts to women born near borders between judicial districts that had different pre-reform inheritance systems. It compares the fertility gap at the border for cohorts fertile before the reforms versus after, following Avdic and Karimi (2018). MSE-optimal bandwidths and triangular kernel functions are used; robustness checks span bandwidths of 15-30 km and both linear and quadratic polynomial fits.

**Standard errors** are clustered at the municipality level throughout (39 clusters for Henry; hundreds to over 1,000 clusters for Geni). The religiosity index $$R_m$$ (Eq. 9, p. 23) used as a control variable is constructed from lent and advent marriages after 1792:

$$R_m = \frac{\text{Lent and advent marriages}}{\text{All marriages}} \times \frac{365.25}{46 + \text{days advent}} \tag{9}$$

## Empirical specifications

**Baseline DD** (Eq. 10, p. 24): individual-level regression on completed fertility with cohort fixed effects:

$$Y_{icm} = \alpha + \beta \, I_m \times F_c + \gamma \, I_m + \mu_c + \mathbf{X}'_i \theta + \varepsilon_{icm} \tag{10}$$

where $$Y_{icm}$$ is completed net fertility of woman $$i$$ in municipality $$m$$ born in cohort $$c$$; $$I_m$$ is an indicator for municipalities that had impartible inheritance before 1793 (the treatment group); $$F_c$$ is the number of fertile years remaining after 1793 for cohort $$c$$; $$\mu_c$$ are birth-cohort fixed effects; and $$\mathbf{X}_i$$ includes individual controls (literacy indicators, accuracy of Henry form, parents-in-law alive at marriage). The coefficient of interest is $$\beta$$, capturing the effect of exposure to the 1793 reforms. Standard errors are clustered by municipality (39 clusters). Results shown in Table 2 (p. 33).

**Extended DD with flexible trends** (Eq. 11, p. 27): adds municipality-level wheat prices by decade ($$p_{mc}$$) and allows fertility trends to differ across municipalities by religious, political, and economic-geography characteristics ($$\mathbf{Z}_m$$ interacted with cohort dummies):

$$Y_{icm} = \alpha + \beta \, I_m \times F_c + \gamma \, I_m + \mu_c + p_{mc} + \mathbf{X}'_i \theta + \sum_t \mathbf{1}[c=t] \times \mathbf{Z}'_m \delta_t + \varepsilon_{icm} \tag{11}$$

$$\mathbf{Z}_m$$ includes distance to religious centers, political societies, rebellions 1779-89, legal centers, fiscal centers, territorial administrative centers, paved roads, and horse posts. Results shown in Table 3 (p. 35).

**RD design** (Eq. 13, p. 42): restricts the Geni sample to mothers born within an MSE-optimal bandwidth of the partible-impartible inheritance border; $$d_m$$ is signed distance to the border (positive in impartible areas); $$\phi_b$$ are border-segment fixed effects:

$$Y_{icm} = \alpha + \beta \mathbf{1}[d_m \geq 0] + \phi_b + \mu_c + \mathbf{1}[d_m \geq 0] \times f_I(d_m, B_I) + \mathbf{1}[d_m < 0] \times f_P(-d_m, B_P) + \varepsilon_{icm} \tag{13}$$

**Combined RD-DD** (Eq. 14, p. 44): interacts the spatial RD with treatment intensity $$F_c$$ and allows polynomial fits to differ across pre- and post-reform sub-samples ($$S_c = 1$$ for cohorts completing the fertile cycle before 1793; $$S_c = 2$$ for those fertile after):

$$Y_{icm} = \alpha + \beta \mathbf{1}[d_m \geq 0] \times F_c + \gamma \mathbf{1}[d_m \geq 0] + \phi_b + \mu_c + \mathbf{Z}'_{mc} \delta_c + \sum_{s=1}^{2} \mathbf{1}[S_c=s] \times \!\left\{ \mathbf{1}[d_m \geq 0] \times f_I(d_m, B_{Is}) + \mathbf{1}[d_m < 0] \times f_P(-d_m, B_{Ps}) \right\} + \varepsilon_{icm} \tag{14}$$

Identification relies on: (1) regional variation in pre-reform inheritance systems (rooted in Germanic legal traditions, historically unrelated to economic conditions); (2) rapid take-up of the 1793 reforms enforced by family tribunals; and (3) exogeneity of the reforms to fertility concerns (inheritance was not among the grievances in the 1789 Estates General and fertility was not an objective of the reformers). Parallel trends are confirmed in Figure 6 (p. 26) for the Henry data and Appendix Figure B11 for the Geni data.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Enquête Louis Henry (Henry database) | Primary fertility data: 20,332 women born 1700-1803 in 39 rural French municipalities; baseline for DiD estimates | no page yet |
| Geni.com (crowdsourced genealogies) | Supplementary fertility data: 11,649 women born 1700-1810, 2,966 locations across France; used for the RD-DD design covering broader territory | no page yet |
| Atlas of inheritance customs in Ancien Regime France (hand-collected by authors) | Treatment variable: complete map of 141 inheritance customs across 435 judicial districts at the eve of the Revolution, coded partible/impartible and whether women were included; available on Harvard Dataverse (Gay, Gobbi, and Goni 2023b, 2023d) | no page yet |

The Henry data cover 39 rural municipalities with 100-2,000 individual observations each. The sample average of net completed fertility is 2.35 children. The Geni data use the horizontal restriction of Blanc (2023a) to correct for genealogy over-representation of single-child families. Both datasets record net fertility (children surviving to age 6). Wheat prices from Ridolfi (2019) provide municipality-decade proxies for local economic conditions.

## When to read the full paper

Read Gay, Gobbi, and Goni (2026) if you are studying the causes of the demographic transition, especially for France or Europe's early fertility decline. The paper is essential for researchers interested in: legal institutions as drivers of household behavior; inheritance law and its economic consequences (Table 1 balance tests, Table 2-3 DD estimates, Table 4 RD-DD); the quantity-quality tradeoff as a framework contrasted with institutional explanations; and historical demography using the Henry database or Geni genealogies. The inheritance atlas (Harvard Dataverse) is independently useful for studying economic legacies of Ancien Regime France.

## Attribution and rights

Gay, Victor, Paula E. Gobbi, and Marc Goñi. 2026. "Revolutionary Transition: Inheritance Change and Fertility Decline." *Journal of Political Economy* 134(6): 1666-1713. <https://doi.org/10.1086/739821>

Published by University of Chicago Press. The journal article is paywalled; no open license in Crossref metadata. A preprint is freely available under CC BY 4.0 at <https://hal.science/hal-04285818v1/document> (HAL open science, hal-04285818v4). The inheritance atlas data are available on Harvard Dataverse under open licenses (Gay, Gobbi, and Goni 2023b, 2023d).

This page is an LLM-distilled summary (extract-only); it is not human-verified and the results have not been reproduced. Read the original paper before relying on specific numbers.
