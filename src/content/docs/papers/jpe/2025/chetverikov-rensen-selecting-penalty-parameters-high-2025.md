---
title: "Selecting Penalty Parameters: Chetverikov & Sørensen (2025)"
description: >-
  Distilled: Chetverikov and Sørensen (2025) propose bootstrapping after cross-validation
  (BCV), a method for selecting the penalty parameter of l1-penalized M-estimators in
  high dimensions that yields valid l1 and l2 error bounds; post-BCV is the only method
  in simulations whose studentized estimates converge to N(0,1), and an empirical
  illustration confirms Fryer Jr (2019) findings on racial differences in police use of
  force are robust to model choice and expanded controls. J. Polit. Econ. 2025, paywalled.
  Seven core results with source locators, the M-estimation framework, and the BCV
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
  topics: ['Statistical Methods and Inference', 'Statistical Methods and Bayesian Inference', 'Bayesian Methods and Mixture Models']
  dataAccess: public
  outcome:
    - l1 and l2 estimation error of l1-penalized M-estimators
    - size control of debiased confidence intervals
    - probability of police use of force conditional on civilian-officer encounter
  outcomeClass: [statistical-method-performance]
  license: paywalled (no CC license block found in Crossref metadata)
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (University of Chicago Press / JPE, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 7
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
    - { ref: R3, outcome: "existence of post-penalized refitted estimator", metric: probability, value: "post-CV non-existence ~15% of cases (up to 47%); post-BCV ~0.01% (74 of 540,000 draws)", direction: positive, vsBenchmark: "post-BCV failure rate roughly 1,500x lower than post-CV" }
    - { ref: R5, outcome: "significance of Black-white difference in police use of force, basic controls", metric: t-stat, value: "post-BCV logit t = 10.5, probit t = 9.6; unpenalized ML logit t = 8.8, probit t = 8.7", direction: positive, vsBenchmark: "unpenalized ML with same 30 controls" }
    - { ref: R6, outcome: "significance of Black-white difference in police use of force, basic controls plus interactions", metric: t-stat, value: "post-BCV logit t = 20.7, probit t = 18.9; unpenalized ML does not exist", direction: positive, vsBenchmark: "unpenalized ML infeasible (complete separation at p = 327)" }
    - { ref: R7, outcome: "average partial effect of Black race on probability of police use of force", metric: pp-effect, value: "post-BCV logit 3.2 pp, probit 2.8 pp (with interactions); basic controls only 1.1-1.4 pp", direction: positive, vsBenchmark: "reference group is white civilians; unconditional force rate for white civilians is 0.7 percent" }
  resultType: confirms
  relatesTo:
    - { cite: "Belloni and Chernozhukov (2011a)", doi: '10.1007/978-3-642-19989-9_3', relation: extends, note: "extends their penalty bound for l1-quantile regression to general convex l1-penalized M-estimation and adds l1 error bounds" }
    - { cite: "Fryer Jr (2019)", relation: replicates, note: "empirical illustration confirms racial differences in police use of force are robust to probit loss and expanded regressor sets" }
    - { cite: "Negahban et al. (2012)", relation: builds-on, note: "error bounds in Theorem 3.1 relate to their unified framework for M-estimators with decomposable regularizers; rates coincide in their special case" }
    - { cite: "Chernozhukov et al. (2018)", doi: '10.1214/17-aos1671', relation: builds-on, note: "three-step debiasing procedure follows their double/debiased machine learning framework for inference on individual low-dimensional parameters" }
  openQuestions:
    - "Extending valid inference to non-smooth losses such as trimmed LAD, which violates the piecewise three-times-differentiability required by Assumption 5.3 (p. 23)."
    - "Theoretical resolution of why BCV estimation error is empirically insensitive to c0 near 1 even though theoretical bounds deteriorate there, a standing LASSO puzzle (Remark 4.4, p. 19)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text read (pp. 1–41 main body plus references); results extracted from Theorems 3.1, 4.1, 4.2, 5.1, Figures 6.1–6.5, Tables 1–3. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: (1) eq. (4.14) ℓ₁ bound was missing its sup subscript (matched PDF p. 18); (2) resultType corrected from new-finding to confirms, consistent with the replicates edge for Fryer Jr (2019) whose finding holds." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/736770", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] block in Crossref metadata; article is paywalled (University of Chicago Press)" }
---

**What this is.** The paper's core results, the M-estimation framework it builds on, and the bootstrap-after-cross-validation (BCV) algorithm with its defining equations: enough to understand what is proposed and what is shown, without reading all 41 pages. To replicate or extend, read the original at [doi.org/10.1086/736770](https://doi.org/10.1086/736770).

## TL;DR

Chetverikov and Sørensen (2025) develop bootstrapping after cross-validation (BCV): a practical, broadly applicable method for choosing the penalty parameter λ of ℓ₁-penalized M-estimators when p >> n. Unlike cross-validation (CV), BCV yields both ℓ₁ and ℓ₂ estimation error bounds at minimax-optimal rates, works for any convex loss including the probit (non-Lipschitz), and in simulations is the only approach whose three-step debiased estimator consistently approximates N(0,1). The key idea: run K-fold CV to obtain out-of-fold residual estimates, then apply a Gaussian multiplier bootstrap on those residuals to estimate the quantile of the score process and set λ accordingly. Post-BCV (refitting non-zero coefficients without penalty after BCV) performs best for inference. An empirical illustration revisits Fryer Jr (2019) on racial differences in police use of force, confirming his logit findings under probit loss and with 327 interaction controls (versus 30 in the original); the debiased t-statistics for the Black dummy exceed 18 in all four specifications.

## Core results

Magnitudes as reported; simulation results average over 2,000 draws; η_n = √(ln(pn)/n).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **BCV convergence rates match the minimax-optimal LASSO rate** in the high-dimensional M-estimation setting | Theorem 4.1, eq. (4.14), p. 18 | ‖θ̂ − θ₀‖₂ ≲_P √(s_q η_n^{2-q}), ‖θ̂ − θ₀‖₁ ≲_P s_q η_n^{1-q}; exact sparsity (q = 0): ℓ₂ rate √(s₀ ln(pn)/n), ℓ₁ rate s₀ √(ln(pn)/n) |
| R2 | **Post-BCV debiased estimator is asymptotically normal** for any scalar component β₀ under stated regularity conditions | Theorem 5.1, eq. (5.6), p. 24 | √n(β̂ − β₀)/σ₀ →d N(0,1); asymptotic variance σ₀² is consistently estimable via a plug-in formula |
| R3 | **Post-CV refitting fails to converge in ~15% of cases; post-BCV fails in ~0.01%** across all simulation designs | §6.3.1, p. 29 | Post-CV non-existence rate ~15% (up to 47% in some DGPs); post-BCV non-existence rate ~0.01% (74 of 540,000 draws); post-CV estimators are therefore dropped from further comparison |
| R4 | **Post-BCV studentized densities converge to N(0,1) as n grows; BCV and CV densities do not** across all sparsity patterns | Figure 6.4, pp. 33–34 | Post-BCV densities collapse toward N(0,1) at n = p = 200, 400 for exactly sparse, intermediate, and approximately sparse patterns; BCV and CV show persistent leftward shrinkage bias that does not vanish as n increases |
| R5 | **Basic controls: Fryer Jr (2019) confirmed; post-BCV t-statistics similar to unpenalized ML** | Table 1, p. 36 | Post-BCV logit t = 10.5, probit t = 9.6; unpenalized ML logit t = 8.8, probit t = 8.7 (n = 9,930; p = 30) |
| R6 | **Full control set (327 regressors): post-BCV t-stats 20.7 (logit) and 18.9 (probit); unpenalized ML does not exist** | Table 1, p. 36 | Post-BCV logit t = 20.7, probit t = 18.9 (n = 9,930; p = 327); unpenalized ML infeasible due to complete separation in the data |
| R7 | **Average partial effect of Black race roughly doubles when interactions are added** | Table 2, p. 37 | Post-BCV logit APE = 3.2 pp, probit APE = 2.8 pp (with interactions); basic controls only: 1.1–1.4 pp (both unpenalized ML and post-BCV); unconditional force rate for white civilians: 0.7 percent |

**Overall (paper's conclusion).** BCV yields minimax-optimal ℓ₁ and ℓ₂ estimation rates for high-dimensional M-estimators and supports valid debiased inference via Neyman orthogonality. Post-BCV dominates plain BCV and CV in inference quality (substantially better size control) across all simulation designs, at near-zero additional computational cost versus plain cross-validation. The empirical illustration shows that Fryer Jr (2019)'s conclusion about racial differences in police use of force is robust to switching from logit to probit, adding interaction controls, and applying ℓ₁-penalization.

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

The paper has no formal economic model: the framework is a statistical model for estimation and inference. The identification logic is that θ₀ is identified by the population FOC $$\nabla \mathcal{E}(\boldsymbol{\theta}_0) = \boldsymbol{0}$$ under a quadratic margin condition (Assumption 3.4), ensuring $$\mathcal{E}(\boldsymbol{\theta}) \geq c_M \|\boldsymbol{\theta} - \boldsymbol{\theta}_0\|_2^2$$ near the truth.

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

where $$\eta_n = \sqrt{\ln(pn)/n}$$. Under exact sparsity $$q = 0$$, the ℓ₂ rate is $$\sqrt{s_0 \ln(pn)/n}$$, matching the minimax-optimal LASSO rate in Negahban et al. (2012). Crucially, both the ℓ₁ and ℓ₂ rates are established; cross-validation as analyzed in the existing literature yields only the ℓ₂ rate.

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

Three-step post-BCV debiasing (Algorithm 5.1) is applied, testing $$\beta_{\text{Black}} = 0$$ and computing the average partial effect (APE):

$$
\widehat{\text{APE}}_{\text{Black}} := \mathbb{E}_n\!\left[F\!\left(\widehat{\beta}_{\text{Black}} + \boldsymbol{W}_i^\top \widehat{\boldsymbol{\gamma}}\right) - F\!\left(\boldsymbol{W}_i^\top \widehat{\boldsymbol{\gamma}}\right)\right] \tag{7.2}
$$

Fryer Jr (2019) Table 2.B (logit) is replicated to all reported digits using data from his supplementary files, confirming dataset identity (n = 9,930 complete cases for 2002 and 2011 surveys out of 59,668 total encounters).

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
