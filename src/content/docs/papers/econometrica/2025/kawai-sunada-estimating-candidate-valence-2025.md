---
title: "Estimating Candidate Valence: Kawai & Sunada (2025)"
description: >-
  Distilled: Kawai and Sunada estimate valence measures for U.S. House candidates by adapting
  the Olley and Pakes (1996) production function control function approach to an election game,
  controlling for endogenous campaign spending and selection from challenger entry. Incumbents
  have about 3.5 percentage-point higher valence than challengers on average, accounting for
  about 21 percent of the incumbency advantage. Econometrica Vol. 93(2), 2025, paywalled.
  Eight core results with source locators, the dynamic game model equations, and the structural
  estimation strategy; LLM-distilled, not human-verified.
sidebar:
  label: Kawai-Sunada 2025
  order: 1
tags: [paper-summary, political-economy, elections, incumbency-advantage, candidate-valence,
       structural-estimation, regression-discontinuity,
       peer-reviewed, unreplicated,
       data:fec, data:cq-press, data:bonica-dime, data:polidata, data:census, data:bls]
paper:
  authors: Kei Kawai, Takeaki Sunada
  authorList:
    - { family: Kawai, given: Kei, affiliation: "University of California, Berkeley and University of Tokyo" }
    - { family: Sunada, given: Takeaki, orcid: "0000-0001-9214-6821", affiliation: "Simon Business School, University of Rochester" }
  year: 2025
  venue: "Econometrica, Vol. 93, No. 2 (March, 2025), 463-501"
  venueShort: Econometrica 2025
  doi: 10.3982/ECTA20496
  jel:
    codes: [D72, C57, C51]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Consumer Market Behavior and Pricing", "Electoral Systems and Political Participation", "Monetary Policy and Economic Impact"]
  dataAccess: licensed-commercial
  outcome:
    - candidate valence measures (vote share units)
    - challenger winning probability
    - incumbency advantage decomposition
  outcomeClass: [electoral-outcomes]
  license: "© 2025 The Econometric Society, all rights reserved"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Wiley/Econometric Society site, checked 2026-06-26)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 4
  methods:
    role: both
    contributes: production-function-valence-estimation
    family: structural
    buildsFrom: [olley-pakes-control-function, gmm, method-of-simulated-moments, regression-discontinuity-design]
    identification: structural
  contributionType: [new-method, new-fact, measurement]
  scope:
    region: US
    period: 1984..2008
    frequency: annual
    dataType: [administrative, survey]
    granularity: [individual]
    n: "3,065 contested elections with incumbents; 787 uncontested; 445 open-seat (1984-2008 U.S. House, biennial)"
  findings:
    - { ref: R1, outcome: "candidate valence gap (incumbents vs. challengers)", metric: pp-effect, value: "~3.5 pp vote share advantage for incumbents; incumbents 0.035 units higher on average", direction: positive }
    - { ref: R2, outcome: "dispersion of valence measures", metric: level, value: "IQR incumbents 3.8 pp; IQR challengers 9.2 pp", direction: positive }
    - { ref: R3, outcome: "challenger winning probability (equal valence, no spending adjustment)", metric: probability, value: "rises from 6.5% to 12.1%", direction: positive }
    - { ref: R4, outcome: "challenger winning probability (equal valence, with spending adjustment)", metric: probability, value: "rises from 6.5% to 11.0%", direction: positive }
    - { ref: R5, outcome: "total incumbency advantage (vote share)", metric: pp-effect, value: "10.2 pp (SE 0.012)", direction: positive }
    - { ref: R6, outcome: "valence component of incumbency advantage", metric: pp-effect, value: "2.1 pp combined (~21% of 10.2 pp total)", direction: positive }
    - { ref: R7, outcome: "spending component of incumbency advantage", metric: pp-effect, value: "4.3 pp (~43% of total)", direction: positive }
    - { ref: R8, outcome: "policy position component of incumbency advantage", metric: pp-effect, value: "1.9 pp (~19% of total)", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Olley and Pakes (1996)", relation: builds-on, note: "adapts the production function control function approach to identify unobservable candidate valence from election and campaign data" }
    - { cite: "Lee (2008)", doi: '10.1016/j.jeconom.2007.05.004', relation: extends, note: "uses Lee's RD design for incumbency advantage and decomposes it into valence, spending, and policy components" }
    - { cite: "Maestas and Rugeley (2008)", doi: '10.1111/j.1540-5907.2008.00327.x', relation: tests, note: "validates estimated valence against their observable seriousness dummies; Spearman rank correlations positive and significant (Table VI, p. 491)" }
  openQuestions:
    - "Relaxing the scalar unobservable assumption (valence as a single additive term, analogous to Hicks neutrality in production function estimation) to allow multidimensional candidate quality (p. 498, Conclusion)."
    - "Relaxing parametric functional form restrictions on the vote share equation (p. 498, Conclusion)."
  replicationCode: { url: "https://doi.org/10.5281/zenodo.14172367", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read full PDF (pp. 463-501); all equations, results, and locators taken directly from the PDF. Not human-verified; not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 8 core result rows confirmed correct (Table VII cols. i-vii, Fig. 4, Fig. 8 p. 493), all equations verified term-by-term (eqs. 1-5, 1-prime, 12-14, 15), Table IV parameter estimates confirmed, functional forms p. 484 confirmed, Propositions 1-2 confirmed; no errors found." }
  licenceVerification:
    - { source: "Crossref works/10.3982/ECTA20496", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata; artifact states '© 2025 The Econometric Society'; standard paywalled journal, no CC license." }
---

**What this is.** This page is a distilled skeleton of Kawai and Sunada (2025). Read the original at https://doi.org/10.3982/ECTA20496 to replicate or extend the results.

## TL;DR

The paper develops a structural method for estimating candidate valence (unobservable quality that affects vote share) from data on vote shares, campaign spending, savings, and strategic entry in U.S. House elections from 1984 to 2008. Adapting the control function approach of Olley and Pakes (1996) from production function estimation, the authors embed vote shares in a dynamic election game and use the injectivity of uncontested incumbents' policy functions to construct a control function for incumbent valence. Challenger valence is identified from the first-order conditions of the candidates' spending and saving decisions, treating them as a GMM moment system. Results show incumbents have roughly 3.5 percentage-point higher valence than challengers on average, with challengers exhibiting wider dispersion (IQR 9.2 pp vs. 3.8 pp for incumbents). Equalizing challenger and incumbent valence increases the average challenger winning probability from 6.5% to 12.1%. A regression discontinuity decomposition following Lee (2008) finds that the total 10.2 pp incumbency advantage in vote share decomposes into about 21% from valence, 43% from spending, and 19% from policy positions. The valence measure is validated against the observable seriousness dummies of Maestas and Rugeley (2008), showing positive and statistically significant Spearman rank correlations (Table VI, p. 491).

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | Average valence of incumbents exceeds challengers | Fig. 4, §5.3, p. 488 | ~3.5 pp vote share advantage; incumbents 0.035 units higher |
| R2 | Dispersion of valence measures | Fig. 4, §5.3, pp. 488-489 | IQR incumbents 3.8 pp; IQR challengers 9.2 pp |
| R3 | Counterfactual challenger winning probability (equal valence, no spending adj.) | §7, Fig. 8, p. 493 | Rises from 6.5% to 12.1% |
| R4 | Counterfactual challenger winning probability (equal valence, with spending adj.) | §7, Fig. 8, p. 493 | 11.0% vs. baseline 6.5% |
| R5 | Total incumbency advantage (RD estimate) | Table VII col. (i), p. 495 | 10.2 pp (SE 0.012) |
| R6 | Valence component of incumbency advantage | Table VII cols. (ii)-(iii), p. 495-496 | 2.1 pp combined (~21% of total) |
| R7 | Spending component of incumbency advantage | Table VII cols. (iv)-(v), p. 496 | 4.3 pp (~43% of total) |
| R8 | Policy position component of incumbency advantage | Table VII cols. (vi)-(vii), p. 497 | 1.9 pp (~19% of total) |

**Overall (paper's conclusion).** Incumbents hold a persistent and quantitatively meaningful valence advantage over challengers that extends beyond spending capacity and more centrist policy positions. The 10.2 pp total incumbency advantage decomposes into roughly 21% from valence, 43% from spending, and 19% from policy positions, implying that spending-focused interventions such as subsidizing challengers' campaigns will be only partially effective. Open-seat candidates' valence distribution resembles that of incumbents in its upper tail, but has a larger mass of low-valence candidates.

## Theory / model

The paper embeds vote shares in a dynamic Markov Perfect Equilibrium model of U.S. House elections (solution concept: Maskin and Tirole (1988)). In each period $$t = 1, 2, \ldots, \infty$$, a stage game is either an election with an incumbent or an open-seat election. State variables for contested elections are $$\mathbf{s} = \{q_I, w_I, \text{ten}_I, p_I, pt, dn \times D_I, ue \times D_I \times D_P, \mathbf{1}\{\text{First Term}\}, \mathbf{1}\{\text{Midterm}\}\}$$.

**Vote share equation.** The incumbent's vote share is (p. 467, eq. 1):

$$
\text{vote}_I = \beta_I \ln d_I + \beta_C \ln d_C + \beta_P(p_I - p^*)^2 - \beta_P(p_C - p^*)^2 + \beta_{\text{ten}} \text{ten}_I + \beta_X X + q_I - q_C + \varepsilon, \tag{1}
$$

where $$d_I, d_C$$ are spending (disbursements) of the incumbent and challenger; $$p_I, p_C$$ are their policy positions; $$p^*$$ is the district's ideal policy position; $$\text{ten}_I$$ is the incumbent's tenure; $$X$$ is a vector of district controls; $$q_I, q_C$$ are the unobservable valence terms (candidate fixed effects in vote share units); and $$\varepsilon \sim \mathcal{N}(0.5, \sigma_\varepsilon^2)$$. The winning probability follows (p. 468, eq. 2):

$$
\Pr(\text{vote}_I > 0.5) = \Phi\!\left(\frac{1}{\sigma_\varepsilon}\!\left(\beta_I \ln d_I + \beta_C \ln d_C + \beta_P(p_I - p^*)^2 - \beta_P(p_C - p^*)^2 + \beta_{\text{ten}} \text{ten}_I + \beta_X X + q_I - q_C\right)\right). \tag{2}
$$

**Incumbent's dynamic program.** Facing a challenger with known valence $$q_C$$ and policy $$p_C$$, the incumbent chooses spending $$d_I$$ and savings $$w'_I$$ to solve (p. 468, eq. 3):

$$
v_I(\mathbf{s}, q_C, p_C) = \max_{d_I \geq 0,\, w'_I \geq 0} u_I + \delta \Pr(\text{vote}_I > 0.5)\, \mathbb{E}_{s'|s}\!\left[(1 - \lambda(s')) V_I(s')\right], \tag{3}
$$

where $$u_I = B \cdot \Pr(\text{vote}_I > 0.5) - C_I(w'_I + d_I - w_I;\, q_I) + H_I(d_I)$$. Here $$B = 1$$ is the normalized utility from winning, $$C_I(\cdot; q_I)$$ is the fund-raising cost (strictly decreasing in $$q_I$$, so higher-valence incumbents face lower marginal cost), $$H_I(\cdot)$$ is the consumption value of spending, $$\delta = 0.9$$, and $$\lambda(s')$$ is the endogenous retirement probability. The ex ante value function before the challenger's entry decision realizes is (p. 470, eq. 4):

$$
V_I(\mathbf{s}) = (1 - P_e(\mathbf{s}))\, \bar{v}_I(\mathbf{s}) + P_e(\mathbf{s}) \int_{q_C, p_C} v_I(\mathbf{s}, q_C, p_C)\, dG_{q_C, p_C}(q_C, p_C \mid \mathbf{s}), \tag{4}
$$

where $$P_e(\mathbf{s})$$ is the equilibrium entry probability and $$G_{q_C, p_C}(\cdot \mid \mathbf{s})$$ is the joint distribution of the entering challenger's valence and policy.

**Challenger's problem.** The general election challenger solves (p. 470, eq. 5):

$$
v_C(\mathbf{s}, q_C, p_C) = \max_{d_C \geq 0,\, w'_C \geq 0} B \cdot \Pr(\text{vote}_I < 0.5) - C_C(w'_C + d_C, q_C) + H_C(d_C) + \delta \Pr(\text{vote}_I < 0.5)\, \mathbb{E}_{s'|s}\!\left[(1-\lambda(s'))V_I(s')\right]. \tag{5}
$$

A potential challenger enters if and only if $$q_C > \bar{q}_C(\mathbf{s}, p_C)$$, where the entry threshold is defined implicitly by $$p(\mathbf{s}, \cdot, p_C)\, v_C(\mathbf{s}, \cdot, p_C) = \kappa$$ (entry cost $$\kappa$$; p. 471). Challengers with higher valence are more likely to enter.

**Two propositions that drive identification.** Proposition 1 (Injectivity, p. 473): If the marginal cost of fund-raising $$\frac{\partial}{\partial x} \tilde{C}_I(x, q_I)$$ is strictly decreasing in $$q_I$$, then the policy functions of uncontested incumbents $$\{d_I(\mathbf{s}), w'_I(\mathbf{s})\}$$ are one-to-one from $$q_I$$ to $$(d_I, w'_I)$$, holding other state variables fixed. This mirrors the invertibility of the investment function in Olley and Pakes (1996) and allows expressing $$q_I = q_I(\bar{\mathbf{s}}_U)$$ as a function of observables. Proposition 2 (Sufficient statistic, p. 473): $$m(\mathbf{s}) \equiv \{P_e(\mathbf{s}),\, F_{p_C}(p_C \mid \mathbf{s},\, \chi = 1)\}$$ is a sufficient statistic for the distribution of the general-election challenger's valence $$G_{q_C}(\cdot \mid \mathbf{s})$$. This parallels the propensity score in Olley and Pakes (1996) and allows conditioning out the challenger selection bias.

## Method

The four-step estimation adapts the control function strategy of Olley and Pakes (1996) to handle two unobservables ($$q_I$$ and $$q_C$$) and a dynamic game structure.

**Step 1: Vote share equation and incumbent valence.** By Proposition 1, substitute $$q_I = q_I(\bar{\mathbf{s}}_U)$$ into the vote share equation. Decompose $$q_C = \mathbb{E}[q_C \mid \mathbf{s}] + (q_C - \mathbb{E}[q_C \mid \mathbf{s}])$$ and use Proposition 2 to write $$\mathbb{E}[q_C \mid \mathbf{s}] = g(m(\mathbf{s}))$$. The endogeneity-corrected vote share equation becomes (p. 476, eq. 1'):

$$
\text{vote}_I = \beta_I \mathbb{E}[\ln d_I \mid \mathbf{s}] + \beta_C \mathbb{E}[\ln d_C \mid \mathbf{s}] + \beta_P(p_I^2 - \mathbb{E}[p_C^2 \mid \mathbf{s}]) - 2\beta_P p^*(p_I - \mathbb{E}[p_C \mid \mathbf{s}]) + \beta_{\text{ten}} \text{ten}_I + \beta_X X + q_I(\bar{\mathbf{s}}_U) - g(m(\mathbf{s})) + \epsilon, \tag{1'}
$$

where $$\epsilon = \text{vote}_I - \mathbb{E}[\text{vote}_I \mid \mathbf{s}]$$ is orthogonal to $$\mathbf{s}$$ by construction, so $$\mathbb{E}[\ln d_I \mid \mathbf{s}]$$ and $$\mathbb{E}[\ln d_C \mid \mathbf{s}]$$ are valid instruments. The coefficients $$\beta_I$$ and $$\beta_C$$ are identified by variation in $$\mathbf{s}$$ holding $$m(\mathbf{s})$$ constant. The sieve minimum distance estimator of Ai and Chen (2003) is applied to the semiparametric equation.

**Step 2: Challenger valence and structural parameters.** The first-order conditions of the contested incumbent's spending and saving decisions jointly identify challenger valence $$q_C$$ and structural parameters $$\theta = (c_1, c_2, \eta_I, \eta_C, \alpha, \gamma)$$. The spending and saving FOCs are (p. 478, eqs. 12-13):

$$
\frac{\partial C_I}{\partial d_I}(w'_I + d_I - w_I,\, q_I;\, \theta) = \frac{\beta_I}{\sigma_\varepsilon d_I}\, \phi(K)\, \bigl(B + \delta\, \mathbb{E}_{s'|s}[V_I(s')]\bigr) + \frac{\partial H_I}{\partial d_I}(d_I;\, \theta), \tag{12}
$$

$$
\frac{\partial C_I}{\partial w'_I}(w'_I + d_I - w_I,\, q_I;\, \theta) = \delta\, \Phi(K)\, \frac{\partial}{\partial w'_I}\, \mathbb{E}_{s'|s}[V_I(s')], \tag{13}
$$

where $$K$$ is the standardized expected vote margin (p. 478, eq. 14):

$$
K = \frac{1}{\sigma_\varepsilon}\bigl(\beta_I \ln d_I + \beta_C \ln d_C + \beta_P(p_I - p^*)^2 - \beta_P(p_C - p^*)^2 + \beta_{\text{ten}} \text{ten}_I + \beta_X X + q_I - q_C\bigr). \tag{14}
$$

GMM treats the FOCs as moment conditions and identifies $$\theta$$ by requiring that the two expressions for $$K$$ obtained from eqs. (12) and (13) coincide at the true parameter values.

**Forward simulation of continuation values.** The continuation value $$\mathbb{E}_{s'|s}[V_I(s')]$$ and its derivative $$\frac{\partial}{\partial w'_I}\mathbb{E}_{s'|s}[V_I(s')]$$ are computed by forward simulation using the methods of Hotz, Miller, Sanders, and Smith (1994) and Bajari, Benkard, and Levin (2007), estimating the distribution of actions and outcomes nonparametrically without solving for an equilibrium at each candidate parameter value.

**Functional form specifications** (p. 484):

$$
\tilde{C}_I(fr_I;\, q_I) = c(q_I)(\ln fr_I)^2, \quad \tilde{H}_I(d_I) = \gamma_U \sqrt{\ln d_I},
$$

$$
C_I(fr_I;\, q_I) = \eta_I \times c(q_I)(\ln fr_I)^\alpha, \quad C_C(fr_C;\, q_C) = \eta_C \times c(q_C)(\ln fr_C)^\alpha, \quad H(d) = \gamma\sqrt{\ln d},
$$

where $$c(q) = c_1 + c_2 \exp(-q)$$ ensures $$c(\cdot)$$ is positive and strictly decreasing in $$q$$.

**Steps 3-4.** Open-seat election parameters (including $$\beta_O$$) are identified by analogous GMM from open-seat candidates' FOCs. Valence for incumbents who never appear in uncontested elections is recovered by solving all four FOCs jointly as a system of equations in $$(q_I, q_C)$$, stacked as GMM moments.

## Empirical specifications

**Vote share specification.** The full parameterization estimated in Section 5 is (p. 483):

$$
\text{vote}_I = \beta_I \ln d_I + \beta_C \ln d_C + \beta_P(p_I - p^*)^2 - \beta_P(p_C - p^*)^2 + \beta_{\text{ten}} \text{ten}_I + D_I(\beta_d + \beta_{dn}\, dn) + \beta_{ue}(ue \times D_I \times D_P) + \text{Election cycle FE} + q_I - q_C + \varepsilon,
$$

where $$p^* = \beta_{\text{ID},0} + \beta_{\text{ID},1}\, pt$$ is estimated as a linear function of the Republican partisanship index $$pt$$; $$dn$$ is log population density (interacted with incumbent party $$D_I$$) to capture differential urban vs. rural electoral strength; $$ue \times D_I \times D_P$$ captures retrospective voting through unemployment interacted with whether the incumbent is of the same party as the President; and election cycle FE include midterm, first-term President, and their interaction. Identification uses elections in which the incumbent has previously been uncontested, and requires that $$m(\mathbf{s})$$ varies across elections holding fixed $$\bar{\mathbf{s}}_U$$ (the control for $$q_I$$).

Key parameter estimates from the control function approach (Table IV, p. 486): $$\hat\beta_I = 0.039$$ (SE 0.020), $$\hat\beta_C = -0.039$$ (SE 0.011), $$\hat\beta_P = -0.031$$ (SE 0.021), $$\hat\sigma_\varepsilon = 0.069$$ (SE 0.003). Standard errors for $$\beta_I$$ and $$\beta_C$$ are from 500 bootstrap samples. A standard deviation increase in incumbent spending raises incumbent vote share by about 2.7 pp; the same for challenger spending decreases it by about 6.9 pp. OLS estimates of $$\beta_I$$ are negative and significant (Table IV, col. 2), reflecting omitted-variable bias from the positive correlation between challenger strength and incumbent spending.

**Counterfactual analysis (Section 7, p. 493, Figure 8).** To assess the role of valence differences, each challenger's $$q_C$$ is replaced by the corresponding percentile of the incumbent valence distribution. The baseline mean challenger winning probability is 6.5%. Equalizing valence without allowing spending to adjust raises this to 12.1%. Allowing candidates to adjust spending to their new equilibrium levels (using the estimated policy functions) yields 11.0%. The moderation comes primarily from increased incumbent spending (log spending increases by about 0.30 points, or roughly $144,600).

**Incumbency advantage decomposition (Section 8, p. 494-497, Table VII).** Following Lee (2008), the incumbency advantage is defined via the regression discontinuity limit (p. 494, eq. 15):

$$
\text{IA} = \lim_{\varepsilon \to +0} \mathbb{E}[\text{vote}_{\text{Dem},\, t+1} \mid \text{vote}_{\text{Dem},\, t} = 0.5 + \varepsilon] - \lim_{\varepsilon \to +0} \mathbb{E}[\text{vote}_{\text{Dem},\, t+1} \mid \text{vote}_{\text{Dem},\, t} = 0.5 - \varepsilon]. \tag{15}
$$

The same RD regression is estimated replacing the outcome (period $$t+1$$ vote share) with candidate valence, log spending, and policy position in turn. Using the bias-corrected RD estimator of Calonico, Cattaneo, and Titiunik (2014), the total incumbency advantage is 10.2 pp (SE 0.012, Table VII col. i, bandwidth 0.092). The valence component (combined Democratic and Republican RD estimates multiplied by the vote share effect) is 2.1 pp. The spending component (Democratic $$+0.526$$ and Republican $$-0.650$$ log spending RD estimates, Table VII cols. iv-v, converted via $$\hat\beta_I$$ and $$\hat\beta_C$$) is 4.3 pp. The policy component (Democratic $$+0.179$$ and Republican $$+0.169$$ policy position RD estimates, Table VII cols. vi-vii) is 1.9 pp. Sample for the RD: all election pairs $$(t, t+1)$$ in which neither period is uncontested (N = 2,320 per column).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|--------------|-----------|
| FEC campaign finance data (2011) | Spending, fund-raising, and savings for all U.S. House candidates, 1984-2008 | no page yet |
| CQ Press electoral database | Electoral outcomes and candidate characteristics | no page yet |
| U.S. Census Bureau (2015) | Congressional district demographics (population density) | [Census](/wiki/datasets/census/) |
| Bureau of Labor Statistics (BLS, 2011) | Local area unemployment statistics (retrospective voting controls) | [BLS](/wiki/datasets/bls/) |
| POLIDATA (2015) | Presidential vote shares by district (source for partisanship index) | no page yet |
| Bonica (2023) DIME database | Incumbent and challenger policy positions (ideology scores from campaign contributions) | no page yet |

Sample scope: 3,065 contested elections with incumbents, 787 uncontested elections, 445 open-seat elections, all from the 1984-2008 U.S. House election cycle (biennial). Dollar values normalized to 1984 dollars and reported in units of $1,000. Dropped observations include elections in Louisiana and Texas 1996 (affected by Supreme Court redistricting rulings), elections involving major scandals, and elections in which candidates' spending or savings are near zero, or a policy position is missing.

## When to read the full paper

Read Kawai and Sunada (2025) to (i) replicate or extend the structural valence estimation procedure, in particular the forward simulation of continuation values and the GMM system from first-order conditions (Supplemental Appendices 10.5-10.6); (ii) examine the model fit in detail (Figures 6-7, p. 491-492), which compares predicted vs. realized vote shares and predicted vs. actual candidate actions; (iii) study the full incumbency advantage decomposition with binned scatter plots of valence, spending, and policy position at the 50% vote share threshold (Figures 10-13, pp. 495-498); or (iv) see the cross-validation against the Maestas and Rugeley (2008) seriousness measure (Table VI, p. 491). The replication code and non-restricted data are available at https://doi.org/10.5281/zenodo.14172367; restricted data (CQ Press, POLIDATA) are subject to an exemption and were shared separately with the journal.

## Attribution and rights

Kawai, Kei, and Takeaki Sunada. "Estimating Candidate Valence." *Econometrica*, Vol. 93, No. 2 (March, 2025), pp. 463-501. DOI: 10.3982/ECTA20496. © 2025 The Econometric Society. All rights reserved; no Creative Commons license; standard copyright. This page is an extract-only distillation: it reproduces a structured summary of the paper's methods, equations, and findings for research reference under fair-use conventions for scholarly excerpts. LLM-distilled, not human-verified; results have not been independently reproduced.
