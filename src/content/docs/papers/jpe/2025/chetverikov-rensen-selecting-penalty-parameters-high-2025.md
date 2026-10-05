---
title: "Selecting Penalty Parameters: Chetverikov & Sørensen (2025)"
description: >-
  Distilled: Chetverikov and Sørensen (2025) propose bootstrapping after cross-validation
  (BCV), a method for selecting the penalty parameter of l1-penalized M-estimators in
  high dimensions that yields valid l1 and l2 error bounds; post-BCV is the only tested
  procedure whose studentized estimates approach N(0,1) in simulations, and an empirical
  illustration confirms Fryer Jr (2019) findings on racial differences in police use of
  force are robust to model choice and expanded controls. J. Polit. Econ. 2025, paywalled.
  Thirteen core results with source locators, the M-estimation framework, and the BCV
  algorithm with its defining equations.
sidebar:
  label: Chetverikov-Sørensen 2025
  order: 1
tags: [paper-summary, machine-learning, lasso, penalized-regression, inference, peer-reviewed, unreplicated, data:ppcs]
paper:
  authors: Denis Chetverikov, Jesper Riis-Vestergaard Sørensen
  authorList:
    - { family: Chetverikov, given: Denis, affiliation: University of California, Los Angeles }
    - { family: Sørensen, given: Jesper Riis-Vestergaard, orcid: 0000-0002-0838-7479, affiliation: University of Copenhagen }
  year: 2025
  venue: Journal of Political Economy 133(10), October 2025, 3208–3248
  venueShort: J. Polit. Econ. 2025
  doi: 10.1086/736770
  jel:
    codes: [C13, C14, C12]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ['Statistical Methods and Inference']
  dataAccess: public
  outcome:
    - l1 and l2 estimation error of l1-penalized M-estimators
    - size control of debiased confidence intervals
    - probability of police use of force conditional on civilian-officer encounter
  outcomeClass: [statistical-method-performance, judicial-behavior]
  license: paywalled (no CC license block found in Crossref metadata)
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (University of Chicago Press / JPE, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 13
  citedByCount: 2
  methods:
    role: proposes-method
    contributes: bcv-penalty-selection
    family: ml
    buildsFrom: [lasso, k-fold-cross-validation, gaussian-multiplier-bootstrap]
    identification: descriptive
  contributionType: [new-method, new-fact]
  scope:
    region: "US (empirical illustration); theoretical (simulations)"
    period: 2002..2011
    dataType: [survey]
    granularity: [individual]
    n: "9,930 civilian-police encounters (PPCS 2002/2011); simulations at n = p = 100, 200, 400"
  findings:
    - { ref: R1, outcome: l1 and l2 estimation error of l1-penalized M-estimators, metric: convergence-rate, value: "l2: sqrt(s_q eta_n^(2-q)); l1: s_q eta_n^(1-q); exact sparsity q=0 gives sqrt(s0 ln(pn)/n) and s0 sqrt(ln(pn)/n)", direction: positive }
    - { ref: R3, outcome: existence of post-penalized refitted estimator, metric: probability, value: "post-CV non-existence ~15% of cases (up to 47%); post-BCV ~0.01% (74 of 540,000 draws)", direction: negative, vsBenchmark: "post-BCV failure rate roughly 1,500x lower than post-CV" }
    - { ref: R5, outcome: "significance of Black-white difference in police use of force, basic controls", metric: t-stat, value: "post-BCV logit t = 10.5, probit t = 9.6; unpenalized ML logit t = 8.8, probit t = 8.7", direction: positive, vsBenchmark: "unpenalized ML with same 30 controls" }
    - { ref: R6, outcome: "significance of Black-white difference in police use of force, basic controls plus interactions", metric: t-stat, value: "post-BCV logit t = 20.7, probit t = 18.9; unpenalized ML does not exist", direction: positive, vsBenchmark: "unpenalized ML infeasible (complete separation at p = 327)" }
    - { ref: R7, outcome: average partial effect of Black race on probability of police use of force, metric: pp-effect, value: "post-BCV logit 3.2 pp, probit 2.8 pp (with interactions); basic controls only: 1.1-1.4 pp", direction: positive, vsBenchmark: "reference group is white civilians; unconditional force rate for white civilians is 0.7 percent" }
    - { ref: R8, outcome: l2 estimation error of penalized M-estimators, metric: level, value: "Figure 6.1 reports mean l2 error curves; curves cross across methods; all shift down as n = p increases from 100 to 400; at n = p = 400 post-BCV is below CV at low-to-medium correlation and CV is below BCV", direction: mixed }
    - { ref: R9, outcome: l2 estimation error of BCV M-estimators, metric: level, value: "Figure 6.2 reports little change across c0 = 1, 1.05, and 1.1, with slight worsening as c0 moves away from one; no exact plotted coordinates reported", direction: positive }
    - { ref: R10, outcome: l2 estimation error of post-BCV M-estimators, metric: level, value: "Figure 6.3 reports little to no effect of c0 = 1, 1.05, and 1.1 at n = p = 400, including approximate sparsity; no exact plotted coordinates reported", direction: none }
    - { ref: R11, outcome: studentized post-BCV estimate normal approximation across correlation levels, metric: level, value: "With n = p = 400 and the approximately sparse pattern, post-BCV gives a relatively accurate normal approximation at rho = 0.2, 0.4, 0.6, and 0.8; CV is not visually better at any tested rho", direction: positive, vsBenchmark: CV }
    - { ref: R12, outcome: estimation routine runtime, metric: level, value: "basic controls: unpenalized logit/probit 1.5/1.5 seconds, post-BCV logit/probit 21/40 seconds; with interactions: unpenalized logit/probit do not exist (reported as infinity), post-BCV logit/probit 210/199 seconds", direction: mixed, vsBenchmark: unpenalized maximum likelihood }
    - { ref: R13, outcome: l1 and l2 estimation error of post-l1-penalized M-estimators, metric: convergence-rate, value: "l2: sqrt(s_q eta_n^(2-q) ln(pn)); l1: s_q eta_n^(1-q) ln(pn)", direction: positive }
  resultType: confirms
  relatesTo:
    - { cite: "Belloni and Chernozhukov (2011a)", relation: extends, note: "extends their penalty bound for l1-quantile regression to general convex l1-penalized M-estimation and adds l1 error bounds" }
    - { cite: "Fryer Jr (2019)", relation: replicates, note: "empirical illustration confirms racial differences in police use of force are robust to probit loss and expanded regressor sets" }
    - { cite: "Negahban et al. (2012)", relation: builds-on, note: "error bounds in Theorem 3.1 relate to their unified framework for M-estimators with decomposable regularizers; rates coincide in their special case" }
    - { cite: "Chernozhukov et al. (2018)", relation: builds-on, note: "three-step debiasing procedure follows their double/debiased machine learning framework for inference on individual low-dimensional parameters" }
  openQuestions:
    - "Extending valid inference to non-smooth losses such as trimmed LAD, which violates the piecewise three-times-differentiability required by Assumption 5.3 (p. 23)."
    - "Theoretical resolution of why estimation error is empirically insensitive to c0 near 1 even though the theory requires c0 > 1 and bounds worsen as c0 approaches 1, a standing LASSO puzzle (§6.3.2, p. 31)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text read (pp. 1–41 main body plus references); results extracted from Theorems 3.1, 4.1, 4.2, 5.1, Figures 6.1–6.5, Tables 1–3. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: (1) eq. (4.14) ℓ₁ bound was missing its sup subscript (matched PDF p. 18); (2) resultType corrected from new-finding to confirms, consistent with the replicates edge for Fryer Jr (2019) whose finding holds." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-read the full PDF; appended six core findings and corresponding quantitative finding records, completed numbered main-text equations and empirical specifications, and staged vocabulary. Additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 13 Core rows, equations/specifications, classifications, findings, frontmatter and prose against the PDF; scoped minimax and inference claims, corrected equation (7.2), fixed the c0 open-question locator and R9 direction, removed two mismatched citation DOIs, restored the Negahban body mention, and corrected off-registry finding metrics. Table-locator and relatesTo-locatable checks pass. Findings pass (2026-10-04): added the R11 finding." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/736770", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] block in Crossref metadata; article is paywalled (University of Chicago Press)" }
---

**What this is.** The paper's core results, the M-estimation framework it builds on, and the bootstrap-after-cross-validation (BCV) algorithm with its defining equations: enough to understand what is proposed and what is shown, without reading all 41 pages. To replicate or extend, read the original at [doi.org/10.1086/736770](https://doi.org/10.1086/736770).

## TL;DR

Chetverikov and Sørensen (2025) develop bootstrapping after cross-validation (BCV): a method for choosing the penalty parameter λ of ℓ₁-penalized M-estimators when p >> n. BCV yields ℓ₁ and ℓ₂ estimation error bounds; under exact sparsity, its ℓ₂ rate matches the minimax-optimal LASSO rate known for sparse linear mean regression. The method applies to a broad class of convex losses, including non-Lipschitz probit loss. It uses K-fold CV to obtain out-of-fold residual estimates, then a Gaussian multiplier bootstrap on those residuals to estimate the score-process quantile and set λ. Post-BCV (refitting non-zero coefficients without penalty after BCV) gives the best normal approximation among the tested procedures in the simulations, though accuracy declines as sparsity weakens. An empirical illustration revisits Fryer Jr (2019) on racial differences in police use of force, confirming his logit findings under probit loss and with 327 interaction controls (versus 30 in the original); the debiased t-statistics for the Black dummy exceed 18 in all four specifications.

## Core results

Magnitudes as reported; simulation results average over 2,000 draws; η_n = √(ln(pn)/n).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **BCV yields high-dimensional M-estimation error bounds; the exact-sparsity ℓ₂ rate matches the LASSO rate** | Theorem 4.1, eq. (4.14), p. 18 | ‖θ̂ − θ₀‖₂ ≲_P √(s_q η_n^{2-q}), ‖θ̂ − θ₀‖₁ ≲_P s_q η_n^{1-q}; exact sparsity (q = 0): ℓ₂ rate √(s₀ ln(pn)/n), ℓ₁ rate s₀ √(ln(pn)/n). The paper identifies minimax optimality for sparse linear mean regression and expects it to extend to the general setting |
| R2 | **Post-BCV debiased estimator is asymptotically normal** for any scalar component β₀ under stated regularity conditions | Theorem 5.1, eq. (5.6), p. 24 | √n(β̂ − β₀)/σ₀ →d N(0,1); asymptotic variance σ₀² is consistently estimable via a plug-in formula |
| R3 | **Post-CV refitting fails to converge in ~15% of cases; post-BCV fails in ~0.01%** across all simulation designs | §6.3.1, p. 29 | Post-CV non-existence rate ~15% (up to 47% in some DGPs); post-BCV non-existence rate ~0.01% (74 of 540,000 draws); post-CV estimators are therefore dropped from further comparison |
| R4 | **Post-BCV gives the closest studentized normal approximation; accuracy declines as sparsity weakens** | Figure 6.4, pp. 33–34 | For exact sparsity, post-BCV density essentially collapses to N(0,1) at n = p = 200 and 400. For intermediate and approximate sparsity, it remains an imperfect but decent approximation; only post-BCV densities appear to approach standard normal as n grows. BCV and CV retain leftward bias |
| R5 | **Basic controls: Fryer Jr (2019) confirmed; post-BCV t-statistics similar to unpenalized ML** | Table 1, p. 36 | Post-BCV logit t = 10.5, probit t = 9.6; unpenalized ML logit t = 8.8, probit t = 8.7 (n = 9,930; p = 30) |
| R6 | **Full control set (327 regressors): post-BCV t-stats 20.7 (logit) and 18.9 (probit); unpenalized ML does not exist** | Table 1, p. 36 | Post-BCV logit t = 20.7, probit t = 18.9 (n = 9,930; p = 327); unpenalized ML infeasible due to complete separation in the data |
| R7 | **Average partial effect of Black race roughly doubles when interactions are added** | Table 2, p. 37 | Post-BCV logit APE = 3.2 pp, probit APE = 2.8 pp (with interactions); basic controls only: 1.1–1.4 pp (both unpenalized ML and post-BCV); unconditional force rate for white civilians: 0.7 percent |
| R8 | **Mean estimation errors are not uniformly ranked across BCV, post-BCV, and CV** | Figure 6.1, p. 30 | Error curves cross; as n = p rises from 100 to 400, mean l2 error shifts down across methods, patterns, and correlation levels; at n = p = 400 post-BCV is below CV at low-to-medium correlation, while CV is below BCV |
| R9 | **BCV estimation error is little changed by score markup near one** | Figure 6.2, p. 30 | For c0 = 1, 1.05, and 1.1, mean l2 error changes little; the paper reports slight worsening as c0 moves away from one |
| R10 | **Post-BCV estimation error is insensitive to score markup in the largest designs** | Figure 6.3, p. 31 | At n = p = 400, mean l2 error has little to no dependence on c0 in {1, 1.05, 1.1}, including the approximately sparse pattern |
| R11 | **Post-BCV normal approximation remains better across the tested correlation levels** | Figure 6.5, p. 34 | With n = p = 400 and the approximately sparse pattern, post-BCV is relatively close to standard normal for rho = 0.2, 0.4, 0.6, and 0.8; CV is not visually better at any displayed rho |
| R12 | **Post-BCV runtime rises with interactions, while unpenalized estimation fails under separation** | Table 3, p. 38 | Basic controls: ML logit/probit 1.5/1.5 seconds, post-BCV logit/probit 21/40 seconds; with interactions: ML logit/probit infinity, post-BCV logit/probit 210/199 seconds |
| R13 | **Post-BCV refitting also has high-dimensional l1 and l2 error bounds** | Theorem 4.2, eq. (4.18), p. 19 | l2 error is bounded by sqrt(s_q eta_n^(2-q) ln(pn)); l1 error is bounded by s_q eta_n^(1-q) ln(pn) |

**Overall (paper's conclusion).** BCV gives ℓ₁ and ℓ₂ error bounds for high-dimensional M-estimators and supports valid debiased inference via Neyman orthogonality. In the simulations, the post-BCV studentized estimator has the best normal approximation among the tested methods, with accuracy worsening as sparsity weakens; BCV adds essentially no computational burden over CV. The empirical illustration shows that Fryer Jr (2019)'s conclusion about racial differences in police use of force is robust to switching from logit to probit and adding interaction controls.

## Theory / model

The paper considers any model in which the true parameter θ₀ ∈ Θ ⊆ ℝ^p solves a population optimization problem (eq. 1.1, p. 2):

$$
\boldsymbol{\theta}_0 = \operatorname*{argmin}_{\boldsymbol{\theta} \in \Theta} \mathbb{E}\!\left[m\!\left(\boldsymbol{X}^\top \boldsymbol{\theta},\, \boldsymbol{Y}\right)\right] \tag{1.1}
$$

where $$m : \mathbb{R} \times \mathcal{Y} \to \mathbb{R}$$ is a known (potentially non-smooth) loss function convex in its first argument, $$\boldsymbol{X} = (X_1,\ldots,X_p)^\top \in \mathbb{R}^p$$ is the regressor vector, and $$\boldsymbol{Y} \in \mathcal{Y}$$ is the outcome. Examples covered (§2, pp. 7–9): the logit loss $$m(t,y) = \ln(1 + e^t) - yt$$, the probit loss $$m(t,y) = -y \ln \Phi(t) - (1-y)\ln(1-\Phi(t))$$, the ordered response loss, the expectile (asymmetric least squares) loss, and the trimmed LAD/LS loss for censored panel models. The framework deliberately includes non-Lipschitz losses (e.g., probit), ruling out the self-normalized moderate deviation (SNMD) method of Belloni et al. (2012) and Belloni et al. (2016).

The true parameter is assumed to lie in an ℓ_q-ball of radius $$s_q^{1/q}$$ for some $$q \in [0,1]$$ (Assumption 3.6, p. 11): $$\sum_{j=1}^p |\theta_{0,j}|^q \leq s_q$$. The case $$q = 0$$ is exact sparsity with at most $$s_0$$ non-zeros; $$q > 0$$ allows approximately sparse coefficients.

The key theoretical object motivating the penalty choice is the score at the truth (eq. 3.3, p. 11):

$$
\boldsymbol{S}_n := \mathbb{E}_n\!\left[m'_1\!\left(\boldsymbol{X}_i^\top \boldsymbol{\theta}_0,\, Y_i\right) \boldsymbol{X}_i\right] \tag{3.3}
$$

Theorem 3.1 (p. 12) shows that for the ℓ₁-penalized M-estimator (ℓ₁-ME) to achieve good ℓ₁ and ℓ₂ estimation error, λ must dominate $$c_0 \|\boldsymbol{S}_n\|_\infty$$ with high probability; this requires estimating the $$(1-\alpha)$$-quantile $$q_n(1-\alpha)$$ of $$\|\boldsymbol{S}_n\|_\infty$$. The bound itself builds on and extends the penalty bound derived for ℓ₁-quantile regression in Belloni and Chernozhukov (2011a) to the general M-estimation setting of equation (1.2).

Theorem 3.1's error bounds relate to the unified framework for M-estimators with decomposable regularizers in Negahban et al. (2012); the rates coincide in their special case.

The paper has no formal economic model: the framework is a statistical model for estimation and inference. The identification logic is that θ₀ is identified by the population FOC $$\nabla \mathcal{E}(\boldsymbol{\theta}_0) = \boldsymbol{0}$$ under a quadratic margin condition (Assumption 3.4), ensuring $$\mathcal{E}(\boldsymbol{\theta}) \geq c_M \|\boldsymbol{\theta} - \boldsymbol{\theta}_0\|_2^2$$ near the truth.

The penalty must dominate the maximum absolute empirical score (eq. 1.3, p. 3):

$$
\lambda \geq c_0\max_{1\leq j\leq p}\left|\frac{1}{n}\sum_{i=1}^n m'_1(\boldsymbol{X}_i^\top\boldsymbol{\theta}_0,Y_i)X_{i,j}\right| \tag{1.3}
$$

The corresponding target is the (1-α)-quantile of that score maximum (eq. 1.4, p. 3):

$$
q_n(1-\alpha)=\text{(1-}\alpha\text{)-quantile of }\max_{1\leq j\leq p}\left|\frac{1}{n}\sum_{i=1}^n m'_1(\boldsymbol{X}_i^\top\boldsymbol{\theta}_0,Y_i)X_{i,j}\right| \tag{1.4}
$$

## Method

BCV combines K-fold cross-validation to estimate score residuals with a Gaussian multiplier bootstrap to estimate their quantile, and then applies debiasing for inference. It builds on `lasso` (ℓ₁ penalization), `k-fold-cross-validation`, and `gaussian-multiplier-bootstrap`.

**ℓ₁-ME (eq. 1.2, p. 3).** The penalized estimator is:

$$
\widehat{\boldsymbol{\theta}}(\lambda) \in \widehat{\Theta}(\lambda) := \operatorname*{argmin}_{\boldsymbol{\theta} \in \Theta} \left\{ \frac{1}{n}\sum_{i=1}^n m\!\left(\boldsymbol{X}_i^\top \boldsymbol{\theta},\, Y_i\right) + \lambda \|\boldsymbol{\theta}\|_1 \right\} \tag{1.2}
$$

The penalty parameter λ must be chosen; it governs the bias-variance tradeoff and size control.

**Step 1: cross-validating residuals.** The CV procedure partitions observations into K folds $$\{I_k\}_{k=1}^K$$, selects a preliminary penalty level $$\widehat{\lambda}^{\text{cv}}$$ by minimizing out-of-fold prediction loss (eq. 4.9, p. 16):

$$
\widehat{\lambda}^{\text{cv}} \in \operatorname*{argmin}_{\lambda \in \Lambda_n} \sum_{k=1}^K \sum_{i \in I_k} m\!\left(\boldsymbol{X}_i^\top \widehat{\boldsymbol{\theta}}_{I_k^c}(\lambda),\, Y_i\right) \tag{4.9}
$$

and extracts out-of-fold residuals (eq. 4.10, p. 16):

$$
\widehat{U}_i^{\text{cv}} := m'_1\!\left(\boldsymbol{X}_i^\top \widehat{\boldsymbol{\theta}}_{I_k^c}\!\left(\widehat{\lambda}^{\text{cv}}\right),\, Y_i\right), \quad i \in I_k,\; k \in [K] \tag{4.10}
$$

Because observation $$i$$ is held out from fold $$I_k$$, the derivative exists almost surely for kinked losses.

**Step 2: bootstrap penalty (BCV).** Given the residual estimates, the bootstrap quantile estimate and the BCV penalty level are (eqs. 4.11–4.12, p. 17):

$$
\widehat{q}^{\text{bcv}}(1-\alpha) := (1-\alpha)\text{-quantile of } \max_{1 \leq j \leq p} \left| \mathbb{E}_n\!\left[e_i \widehat{U}_i^{\text{cv}} X_{i,j}\right] \right| \text{ given } \{(\boldsymbol{X}_i, Y_i)\}_{i=1}^n, \tag{4.11}
$$

$$
\widehat{\lambda}_\alpha^{\text{bcv}} := c_0 \,\widehat{q}^{\text{bcv}}(1-\alpha) \tag{4.12}
$$

where $$e_1,\ldots,e_n \overset{\text{iid}}{\sim} \mathrm{N}(0,1)$$ are independent of the data. This Gaussian multiplier bootstrap approximates the distribution of $$\|\boldsymbol{S}_n\|_\infty$$ by replacing unobservable true residuals $$U_i = m'_1(\boldsymbol{X}_i^\top \boldsymbol{\theta}_0, Y_i)$$ with $$\widehat{U}_i^{\text{cv}}$$. The approximation is justified by the Chernozhukov et al. (2013, 2017) Gaussian approximation and multiplier bootstrap theorems for maxima of sums of high-dimensional random vectors (eqs. 4.1–4.2, p. 14). Adding BCV to CV carries essentially zero additional computational cost because glmnet already stores the out-of-fold linear forms.

**Theorem 4.1 (BCV convergence rates, p. 17–18).** Under Assumptions 3.1–3.6 and 4.1–4.3, the ℓ₁-ME with BCV penalty $$\widehat{\lambda}_\alpha^{\text{bcv}}$$ achieves (eq. 4.14):

$$
\sup_{\widehat{\boldsymbol{\theta}} \in \widehat{\Theta}(\widehat{\lambda}_\alpha^{\text{bcv}})} \|\widehat{\boldsymbol{\theta}} - \boldsymbol{\theta}_0\|_2 \lesssim_{\mathrm{P}} \sqrt{s_q \eta_n^{2-q}} \quad \text{and} \quad \sup_{\widehat{\boldsymbol{\theta}} \in \widehat{\Theta}(\widehat{\lambda}_\alpha^{\text{bcv}})} \|\widehat{\boldsymbol{\theta}} - \boldsymbol{\theta}_0\|_1 \lesssim_{\mathrm{P}} s_q \eta_n^{1-q} \tag{4.14}
$$

where $$\eta_n = \sqrt{\ln(pn)/n}$$. Under exact sparsity $$q = 0$$, the ℓ₂ rate is $$\sqrt{s_0 \ln(pn)/n}$$, which coincides with the LASSO rate. The paper notes that this rate is known to be minimax optimal for sparse linear mean regression and expects it to remain optimal in the general M-estimation framework. Crucially, both the ℓ₁ and ℓ₂ rates are established; cross-validation as analyzed in the existing literature yields only the ℓ₂ rate.

**Debiased inference (Algorithm 5.1, p. 21–22).** For inference on a scalar component $$\beta_0$$, three-step debiasing (building on Chernozhukov et al. (2018)) proceeds:
- Step 1: compute the ℓ₁-ME $$\widetilde{\boldsymbol{\theta}} = (\widetilde{\beta}, \widetilde{\boldsymbol{\gamma}}^\top)^\top$$ of $$\boldsymbol{\theta}_0 = (\beta_0, \boldsymbol{\gamma}_0^\top)^\top$$ using BCV penalty $$\lambda_1$$ (with optional refitting).
- Step 2: compute the debiasing coefficient estimate $$\widetilde{\boldsymbol{\mu}}$$ of $$\boldsymbol{\mu}_0$$ by solving a weighted ℓ₁-penalized regression (eq. 5.3, p. 22) using BCV penalty $$\lambda_2$$.
- Step 3: form the debiased estimate by a one-step update (eq. 5.5, p. 22):

$$
\widehat{\beta} := \widetilde{\beta} - \frac{\mathbb{E}_n\!\left[m'_1\!\left(\boldsymbol{X}_i^\top \widetilde{\boldsymbol{\theta}},\, Y_i\right)(D_i - \boldsymbol{W}_i^\top \widetilde{\boldsymbol{\mu}})\right]}{\mathbb{E}_n\!\left[m''_{11}\!\left(\boldsymbol{X}_i^\top \widetilde{\boldsymbol{\theta}},\, Y_i\right)(D_i - \boldsymbol{W}_i^\top \widetilde{\boldsymbol{\mu}}) D_i\right]} \tag{5.5}
$$

Theorem 5.1 (p. 24) establishes $$\sqrt{n}(\widehat{\beta} - \beta_0)/\sigma_0 \xrightarrow{d} \mathrm{N}(0,1)$$ where:

$$
\sigma_0^2 := \frac{\mathbb{E}\!\left[\!\left(m'_1\!\left(\boldsymbol{X}^\top \boldsymbol{\theta}_0, Y\right)(D - \boldsymbol{W}^\top \boldsymbol{\mu}_0)\right)^2\right]}{\left(\mathbb{E}\!\left[m''_{11}\!\left(\boldsymbol{X}^\top \boldsymbol{\theta}_0, Y\right)(D - \boldsymbol{W}^\top \boldsymbol{\mu}_0) D\right]\right)^2} \tag{5.6}
$$

and $$\sigma_0^2$$ is consistently estimated by a plug-in formula (eq. 5.7 or 5.8, p. 24). Neyman orthogonality ensures $$\widehat{\beta}$$ is first-order insensitive to estimation error in $$\boldsymbol{\gamma}_0$$ and $$\boldsymbol{\mu}_0$$, enabling $$\sqrt{n}$$-consistent inference despite high-dimensional nuisance.

## Empirical specifications

**Simulation DGP (§6.1, p. 25).** The study uses a binary probit model (Example 1, §2) with:

$$
Y_i = \mathbf{1}\!\left(\beta_0 D_i + \sum_{j=1}^{p-1} \gamma_{0j} W_{i,j} + \varepsilon_i > 0\right), \quad \varepsilon_i \mid D_i, \boldsymbol{W}_i \sim \mathrm{N}(0,1), \quad i \in [n],
$$

and jointly centered Gaussian regressors $$\boldsymbol{X} = (D, \boldsymbol{W}^\top)^\top \sim \mathrm{N}(\boldsymbol{0}, \boldsymbol{\Sigma}(\rho))$$ with Toeplitz covariance $$\Sigma_{j,k}(\rho) = \rho^{|j-k|}$$, $$\rho \in \{0, 0.2, 0.4, 0.6, 0.8\}$$. Three coefficient patterns: exactly sparse ($$\boldsymbol{\theta}_0 = (1,1,0,\ldots,0)^\top$$, $$s_0 = 2$$), intermediate ($$\theta_{0,j} = (1/\sqrt{2})^{j-1}\mathbf{1}(j \leq 5)$$), and approximately sparse ($$\theta_{0,j} = (1/\sqrt{2})^{j-1}$$ for all $$j$$). Sample sizes $$n = p \in \{100, 200, 400\}$$ fix the problem in the high-dimensional regime. All runs use $$K = 3$$ folds, 2,000 simulation draws, and 1,000 Gaussian bootstrap draws per draw per estimation step. Four estimators are compared: BCV, post-BCV, and CV (post-CV is dropped after failing in ~15% of cases; see R3). The score markup is $$c_0 = 1.1$$ and tolerance is $$\alpha_n = 0.1/\ln(p \vee n)$$, following Belloni et al. (2012). Implemented in R 4.2.2 using `glmnet::cv.glmnet` (CV and BCV) and `stats::glm` (refitting).

**Empirical application (§7, p. 35).** Chetverikov and Sørensen (2025) re-examine Fryer Jr (2019)'s analysis of racial differences in police use of force using the Police-Public Contact Survey (PPCS). The estimating model is (eq. 7.1, p. 35):

$$
\mathrm{P}(\text{Force} = 1 \mid \textbf{Race},\, \boldsymbol{W}) = F\!\left(\textbf{Race}^\top \boldsymbol{\alpha}_0 + \boldsymbol{W}^\top \boldsymbol{\gamma}_0\right) \tag{7.1}
$$

where Force is an indicator for any police use of force conditional on a civilian-officer encounter, $$\textbf{Race} = (\text{Black}, \text{Hisp}, \text{Other})^\top$$ are race dummies (white is reference), $$\boldsymbol{W}$$ is the control vector, and $$F$$ is either the logistic CDF (logit) or the standard normal CDF (probit). Two regressor sets: Basic Controls (p = 30, matching Fryer's largest set, with categorical variables expanded to dummies) and Basic Controls + Interactions (p = 327, adding all first-order pairwise interactions among the original non-race controls). Complete separation occurs at p = 327, so unpenalized ML does not exist; ℓ₁-penalization via post-BCV with K = 10 folds is required.

Three-step post-BCV debiasing (Algorithm 5.1) is applied, testing $$\beta_{\text{Black}} = 0$$ and defining the average partial effect (APE) as (eq. 7.2, p. 37):

$$
\text{APE}_{\text{Black}} := \mathbb{E}\!\left[\mathrm{P}(\text{Force}=1 \mid \text{Black}=1,\text{Hisp}=0,\text{Other}=0,\boldsymbol{W}) - \mathrm{P}(\text{Force}=1 \mid \text{Black}=0,\text{Hisp}=0,\text{Other}=0,\boldsymbol{W})\right] = \mathbb{E}\!\left[F\!\left(\beta_{\text{Black}} + \boldsymbol{W}^\top \boldsymbol{\gamma}_0\right) - F\!\left(\boldsymbol{W}^\top \boldsymbol{\gamma}_0\right)\right] \tag{7.2}
$$

Fryer Jr (2019) Table 2.B (logit) is replicated to all reported digits using data from his supplementary files, confirming dataset identity (n = 9,930 complete cases for 2002 and 2011 surveys out of 59,668 total encounters).

For Table 2, the authors estimate this APE by a sample average: using the ML estimates for unpenalized models, and the debiased third-step estimate of $$\beta_{\text{Black}}$$ with the biased first-step nuisance estimate for post-BCV. They report the APEs in percentage points and do not estimate their standard errors.


### Remaining numbered main-text equations

The following numbered equations complete the model, penalty-selection, rate, and inference specifications above. Locators refer to the printed page numbers in the PDF.

**Loss functions and sparsity assumptions (Section 2, pp. 7–9; Section 3, pp. 10–11).** The binary-response loss, logit and probit special cases, ordered-response loss, expectile loss, and panel-censored loss are:

$$
m(t,y)=-y\ln F(t)-(1-y)\ln(1-F(t)) \tag{2.1}
$$

$$
m_{\text{logit}}(t,y)=\ln(1+e^t)-yt \tag{2.2}
$$

$$
m_{\text{probit}}(t,y)=-y\ln\Phi(t)-(1-y)\ln(1-\Phi(t)) \tag{2.3}
$$

$$
m(t,y)=-\sum_{v=0}^{V}\mathbf{1}(y=v)\ln\!\left[F(\alpha_{v+1}-t)-F(\alpha_v-t)\right] \tag{2.4}
$$

$$
m(t,y)=\rho_\tau(y-t),\qquad \rho_\tau(u)=|\tau-\mathbf{1}(u<0)|u^2 \tag{2.5}
$$

$$
m(t,y)=\begin{cases}\Xi(y_1)-(y_2+t)\xi(y_1),&t\leq-y_2,\\\Xi(y_1-y_2-t),&-y_2<t<y_1,\\\Xi(-y_2)-(t-y_1)\xi(-y_2),&t\geq y_1.\end{cases} \tag{2.6}
$$

The local-loss conditions bound loss increments and their second moments (eqs. 3.1–3.2, p. 10):

$$
|m(\boldsymbol{x}^{\top}\boldsymbol{\theta}_0+t_1,y)-m(\boldsymbol{x}^{\top}\boldsymbol{\theta}_0+t_2,y)|\leq L(\boldsymbol{x},y)|t_1-t_2|,\quad \max_j\mathbb{E}|L(X,Y)X_j|^2\leq C_L^2,\quad \mathbb{E}|L(X,Y)\|X\|_\infty|^r\leq B_n^r \tag{3.1}
$$

$$
\mathbb{E}\{m(X^{\top}\theta,Y)-m(X^{\top}\theta_0,Y)\}^2\leq C_L^2\|\theta-\theta_0\|_2^2,\quad \mathbb{E}\{m'_1(X^{\top}\theta,Y)-m'_1(X^{\top}\theta_0,Y)\}^2\leq C_L^2\|\theta-\theta_0\|_2^2 \tag{3.2}
$$

Approximate sparsity is stated as $$\sum_{j=1}^p|\theta_{0,j}|^q\leq s_q$$ (Assumption 3.6, p. 11); the existing equation (3.3) gives the associated score.

**Generic bootstrap bounds and cross-validation steps (Section 4, pp. 14–16).** For centered vectors $$Z_i$$, the Gaussian approximation and conditional multiplier approximation are bounded by (eqs. 4.1–4.2, p. 14):

$$
\sup_{A\in\mathcal{A}_p}\left|\Pr\!\left(n^{-1/2}\sum_{i=1}^n Z_i\in A\right)-\Pr(N_n\in A)\right|\leq C_b\left(\frac{\widetilde B_n^4\ln^7(pn)}{n}\right)^{1/6} \tag{4.1}
$$

$$
\sup_{A\in\mathcal{A}_p}\left|\Pr\!\left(n^{-1/2}\sum_{i=1}^n e_iZ_i\in A\mid\{Z_i\}_{i=1}^n\right)-\Pr(N_n\in A)\right|\leq C_b\left(\frac{\widetilde B_n^4\ln^7(pn)}{n}\right)^{1/6} \tag{4.2}
$$

For available residual estimates $$\widehat U_i$$, the generic bootstrap quantile and penalty are (eqs. 4.3–4.4, p. 15):

$$
\widehat q^{\mathrm{bm}}(1-\alpha)=\text{conditional }(1-\alpha)\text{-quantile of }\max_{1\leq j\leq p}|\mathbb{E}_n[e_i\widehat U_iX_{i,j}]| \tag{4.3}
$$

$$
\widehat\lambda^{\mathrm{bm}}_\alpha=c_0\widehat q^{\mathrm{bm}}(1-\alpha) \tag{4.4}
$$

The residual-estimation and regularity conditions in Lemma 4.1 are (eqs. 4.5–4.6, p. 15):

$$
\Pr\!\left(\mathbb{E}_n[(\widehat U_i-U_i)^2]>\delta_n^2/\ln^2(pn)\right)\to0 \tag{4.5}
$$

$$
n^{1/r}B_n(\delta_n+s_q\eta_n^{1-q})\to0,\qquad \frac{B_n^4\ln^2(pn)}{n}\to0,\qquad \frac{\widetilde B_n^4\ln^7(pn)}{n}\to0 \tag{4.6}
$$

The K-fold partition and training-sample estimator are (eqs. 4.7–4.8, p. 16):

$$
I_k=\{(k-1)n/K+1,\ldots,kn/K\},\quad k\in[K] \tag{4.7}
$$

$$
\widehat\theta_{I_k^c}(\lambda)\in\arg\min_{\theta\in\Theta}\left\{\mathbb{E}_{I_k^c}[m(X_i^{\top}\theta,Y_i)]+\lambda\|\theta\|_1\right\} \tag{4.8}
$$

**BCV and post-BCV rate conditions (Section 4, pp. 17–19).** The side conditions for Theorem 4.1 are (eq. 4.13, p. 17):

$$
n^{1/r}B_ns_q\eta_n^{1-q}\to0,\quad \frac{B_n^4s_q(\ln(pn))^{5-q/2}(\ln n)^2}{n^{1-q/2-4/r}}\to0,\quad \frac{\widetilde B_n^4\ln^7(pn)}{n}\to0 \tag{4.13}
$$

For post-selection refitting, the restricted minimizer and union of refitted solution sets are (eqs. 4.15–4.16, p. 18):

$$
\widetilde\Theta(\operatorname{supp}(\widehat\theta))=\arg\min_{\theta\in\Theta:\,\operatorname{supp}(\theta)\subseteq\operatorname{supp}(\widehat\theta)}\mathbb{E}_n[m(X_i^{\top}\theta,Y_i)] \tag{4.15}
$$

$$
\widetilde\Theta(\lambda)=\bigcup_{\widehat\theta\in\widehat\Theta(\lambda)}\widetilde\Theta(\operatorname{supp}(\widehat\theta)) \tag{4.16}
$$

Theorem 4.2's post-BCV side conditions and rates are (eqs. 4.17–4.18, p. 19):

$$
n^{1/r}B_ns_q\eta_n^{1-q}\ln(pn)\to0,\quad \frac{B_n^4s_q(\ln(pn))^{5-q/2}(\ln n)^2}{n^{1-q/2-4/r}}\to0,\quad \frac{\widetilde B_n^4\ln^7(pn)}{n}\to0 \tag{4.17}
$$

$$
\sup_{\widetilde\theta\in\widetilde\Theta(\widehat\lambda^{\mathrm{bcv}}_\alpha)}\|\widetilde\theta-\theta_0\|_2\lesssim_P\sqrt{s_q\eta_n^{2-q}\ln(pn)},\quad \sup_{\widetilde\theta\in\widetilde\Theta(\widehat\lambda^{\mathrm{bcv}}_\alpha)}\|\widetilde\theta-\theta_0\|_1\lesssim_P s_q\eta_n^{1-q}\ln(pn) \tag{4.18}
$$

**Orthogonalization, first- and second-step estimators, and variance estimators (Section 5, pp. 20–24).** The orthogonalizing vector and moment condition (eqs. 5.1–5.2, p. 21) satisfy:

$$
\mathbb{E}[m''_{11}(X^{\top}\theta_0,Y)(D-W^{\top}\mu_0)W]=0_{p-1} \tag{5.1}
$$

$$
\mathbb{E}[m'_1(D\beta_0+W^{\top}\gamma_0,Y)(D-W^{\top}\mu_0)]=0 \tag{5.2}
$$

The three-step procedure's penalized orthogonalization and optional restricted refit are (eqs. 5.3–5.4, p. 22):

$$
\widetilde\mu\in\arg\min_{\mu\in\mathbb{R}^{p-1}}\left\{\mathbb{E}_n[m''_{11}(X_i^{\top}\widetilde\theta,Y_i)(D_i-W_i^{\top}\mu)^2]+\lambda_2\|\mu\|_1\right\} \tag{5.3}
$$

$$
\widetilde\mu\in\arg\min_{\mu:\,\operatorname{supp}(\mu)\subseteq\widetilde T_2}\mathbb{E}_n[m''_{11}(X_i^{\top}\widetilde\theta,Y_i)(D_i-W_i^{\top}\mu)^2],\quad \widetilde T_2=\operatorname{supp}(\widetilde\mu) \tag{5.4}
$$

The two reported plug-in variance estimators (eqs. 5.7–5.8, p. 24) and the simulation signal equation (6.1, p. 26) are:

$$
\widehat\sigma^2=\frac{\mathbb{E}_n[(m'_1(D_i\widetilde\beta+W_i^{\top}\widetilde\gamma,Y_i)(D_i-W_i^{\top}\widetilde\mu))^2]}{\{\mathbb{E}_n[m''_{11}(D_i\widetilde\beta+W_i^{\top}\widetilde\gamma,Y_i)(D_i-W_i^{\top}\widetilde\mu)D_i]\}^2} \tag{5.7}
$$

$$
\widehat\sigma^2=\frac{\mathbb{E}_n[(m'_1(D_i\widehat\beta+W_i^{\top}\widetilde\gamma,Y_i)(D_i-W_i^{\top}\widetilde\mu))^2]}{\{\mathbb{E}_n[m''_{11}(D_i\widehat\beta+W_i^{\top}\widetilde\gamma,Y_i)(D_i-W_i^{\top}\widetilde\mu)D_i]\}^2} \tag{5.8}
$$

$$
\mathrm{SNR}=\frac{\operatorname{var}(X^{\top}\theta_0)}{\operatorname{var}(\varepsilon)}=\theta_0^{\top}\Sigma(\rho)\theta_0,\qquad \operatorname{var}(X^{\top}\theta_0)=2(1+\rho)\in\{2,2.4,2.8,3.2,3.8\}\ \text{for Pattern 1} \tag{6.1}
$$

For the PPCS application (Section 7, pp. 35–38), the binary-response model in (7.1) is estimated with logit and probit likelihoods using the three-step post-BCV debiasing procedure, with 10-fold cross-validation in Steps 1 and 2. The two samples use 9,930 complete cases from the 2002 and 2011 surveys; Basic Controls has 30 non-constant regressors and Basic Controls plus interactions has 327. Table 1 tests $$\beta_{\mathrm{Black}}=0$$ using debiased t-values; no fixed effects are specified, and the paper reports the t-values without standard errors in the table. Table 2 reports average partial effects in percentage points without standard errors, and the authors explicitly state that assigning standard errors to the APE is outside scope (text p. 37). Table 3 gives single implementation runtimes, not an inferential estimate; it uses an Intel Core i7-8700 3.20GHz CPU (table note, p. 38). The empirical estimating equations (7.1) and (7.2) are displayed above. The first-step penalized estimate and optional support-restricted refit in Algorithm 5.1 (p. 21) are:

$$
\widetilde{\boldsymbol{\theta}}\in\operatorname*{argmin}_{\boldsymbol{\theta}\in\Theta}\{\mathbb{E}_n[m(\boldsymbol{X}_i^\top\boldsymbol{\theta},Y_i)]+\lambda_1\|\boldsymbol{\theta}\|_1\}
$$

$$
\widetilde{\boldsymbol{\theta}}\in\operatorname*{argmin}_{\boldsymbol{\theta}:\,\operatorname{supp}(\boldsymbol{\theta})\subseteq\widetilde T_1}\mathbb{E}_n[m(\boldsymbol{X}_i^\top\boldsymbol{\theta},Y_i)],\quad\widetilde T_1=\operatorname{supp}(\widetilde{\boldsymbol{\theta}})
$$

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Police-Public Contact Survey (PPCS), BJS | Empirical illustration: n = 9,930 civilian-police encounters from 2002 and 2011 PPCS surveys; binary outcome (force used); 30 basic controls and 327 controls + interactions | no page yet |
| Synthetic simulation data | Binary probit DGP with Toeplitz covariance, n = p = 100, 200, 400, three sparsity patterns; 2,000 draws per design | n/a (simulated) |

## When to read the full paper

Read the source at [doi.org/10.1086/736770](https://doi.org/10.1086/736770) if you are: implementing ℓ₁-penalized M-estimators with a non-Lipschitz loss (probit, ordered response, expectile) and need a penalty selection method with valid ℓ₁ and ℓ₂ error bounds; performing debiased inference on individual components in a high-dimensional M-estimation setting; evaluating the finite-sample size properties of cross-validation versus BCV penalty selection; or extending the Fryer Jr (2019) analysis with richer control sets or alternative loss functions. Online Appendices A–H contain all proofs, verification of assumptions for each example class, and additional simulation results.

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 133(10), October 2025, pp. 3208–3248. DOI: 10.1086/736770. Publisher: University of Chicago Press. Article is paywalled; no CC license found in Crossref metadata. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. Extract-only: reproduction of the publisher's text is not permitted.

> Chetverikov, Denis, and Jesper Riis-Vestergaard Sørensen. "Selecting Penalty Parameters of High-Dimensional M-Estimators Using Bootstrapping after Cross Validation." *Journal of Political Economy* 133, no. 10 (October 2025): 3208–3248. DOI: 10.1086/736770.
