---
title: "Double Robust Bayesian ATE Inference: Breunig, Liu & Yu (2025)"
description: >-
  Proposes a doubly robust Bayesian procedure for ATE estimation under unconfoundedness
  that adjusts the conditional mean prior and corrects the posterior via the semiparametric
  efficient influence function, proving a new Bernstein-von Mises theorem with exact
  frequentist coverage under double robust smoothness. Simulations on Lalonde-Dehejia-Wahba
  data show near-nominal coverage (0.95-0.98) with shorter credible intervals than
  prior-adjusted Bayesian and doubly robust frequentist alternatives. Econometrica 2025,
  CC BY 4.0; LLM-distilled, not human-verified, not reproduced.
sidebar:
  label: Breunig-Liu-Yu 2025
  order: 1
tags: [paper-summary, causal-inference, treatment-effects, bayesian-inference, semiparametric,
       open-access, cc-by, peer-reviewed, unreplicated, data:lalonde-dehejia-wahba]
paper:
  authors: Christoph Breunig, Ruixuan Liu, Zhengfei Yu
  authorList:
    - { family: Breunig, given: Christoph, affiliation: University of Bonn }
    - { family: Liu, given: Ruixuan, orcid: "0000-0001-5897-6557", affiliation: Chinese University of Hong Kong }
    - { family: Yu, given: Zhengfei, orcid: "0000-0002-5987-4875", affiliation: University of Tsukuba }
  year: 2025
  venue: "Econometrica, Vol. 93, No. 2 (March 2025), pp. 539-568"
  venueShort: Econometrica 2025
  doi: 10.3982/ECTA21442
  jel:
    codes: [C11, C14, C21]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ['Statistical Methods and Inference', 'Bayesian Methods and Mixture Models', 'Statistical Methods and Bayesian Inference']
  dataAccess: public
  outcome:
    - average treatment effect on employment
    - credible interval coverage probability
  outcomeClass: [labor-careers-health]
  license: "CC BY 4.0 (confirmed via Crossref: license URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-01-01; artifact p. 539 carries Creative Commons Attribution License notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access CC BY 4.0 (license confirmed via Crossref DOI metadata 2026-06-26; not machine-fetched directly from Wiley)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 6
  citedByCount: 6
  methods:
    role: proposes-method
    contributes: dr-bayesian-ate
    family: reduced-form-causal
    buildsFrom: [lasso]
    identification: selection-on-observables
  contributionType: [new-method, new-theory]
  scope:
    region: US
    period: 1974..1978
    frequency: annual
    dataType: [survey, experimental]
    granularity: [individual]
    n: "185 treated + 2490 control men (PSID); Monte Carlo: 1000 replications from WGAN-generated population"
  findings:
    - { ref: R3, outcome: "credible interval coverage probability", metric: probability, value: "CP=0.983, CIL=0.223 at trimming t=0.10 (avg n=240)", direction: positive, vsBenchmark: "PA Bayes CP=0.981 CIL=0.260; DML CP=0.927 CIL=0.524 (Table I, p. 553)" }
    - { ref: R4, outcome: "credible interval coverage probability", metric: probability, value: "CP=0.970, CIL=0.221 at trimming t=0.05 (avg n=363)", direction: positive, vsBenchmark: "PA Bayes CP=0.949 CIL=0.254; DML CP=0.870 CIL=0.393 (Table I, p. 553)" }
    - { ref: R5, outcome: "credible interval coverage probability", metric: probability, value: "CP=0.952, CIL=0.258 at trimming t=0.01 (avg n=664)", direction: positive, vsBenchmark: "PA Bayes CP=0.897 CIL=0.308; DML CP=0.918 CIL=0.522 (Table I, p. 553)" }
    - { ref: R6, outcome: "average treatment effect on employment", metric: pp-effect, value: "ATE=0.184, 95% CI [0.064, 0.294] at trimming t=0.05", direction: positive, vsBenchmark: "NSW experimental ATE=0.111 [0.026, 0.196] (Table II, p. 554)" }
  resultType: new-finding
  relatesTo:
    - { cite: 'Ray and van der Vaart (2020)', doi: '10.1214/19-aos1919', relation: extends, note: 'generalizes their semiparametric BvM theorem for propensity-score-adjusted priors to the double-robust case with explicit posterior correction via the efficient influence function' }
    - { cite: 'Hahn (1998)', doi: '10.2307/2998560', relation: builds-on, note: 'efficient influence function for ATE and the least favorable direction that motivates both the prior adjustment and posterior correction (eqs. 2.4, 3.4, p. 542, 545)' }
    - { cite: 'Chernozhukov et al. (2017)', relation: tests, note: 'DR Bayes achieves higher simulation coverage (0.95-0.98) than DML (0.87-0.93) and substantially shorter credible intervals at all trimming thresholds (Table I, p. 553)' }
    - { cite: 'Abadie and Imbens (2011)', doi: '10.1198/jbes.2009.07333', relation: tests, note: 'DR Bayes matches or beats bias-corrected matching coverage while delivering shorter credible intervals in the NSW simulation (Table I, p. 553)' }
    - { cite: 'Dehejia and Wahba (1999)', doi: '10.1080/01621459.1999.10473858', relation: cites, note: 'empirical illustration uses the Lalonde-Dehejia-Wahba NSW+PSID observational dataset' }
    - { cite: 'LaLonde (1986)', relation: cites, note: 'NSW experimental data and benchmark ATE estimate used in the empirical illustration' }
  openQuestions:
    - "Extensions to continuous and multinomial outcomes (Sections 6.1-6.2, pp. 554-556) derive the least favorable direction but delegate full BvM primitive conditions to Supplemental Appendices D and F."
    - "Extensions to other causal parameters (average policy effects, average derivatives) are outlined in Section 6.3 (p. 556) with two examples in Supplemental Appendix E, but are not proven in the main text."
    - "Sample splitting (Supplemental Appendix H) yields similar coverage but larger credible intervals due to the halved sample; the full-data implementation (used in the main text) trades a cleaner sample-splitting argument for finite-sample precision (p. 553)."
  replicationCode: { url: "https://doi.org/10.5281/zenodo.14015435", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read PDF in full; all results and equations reference page/table locators from the PDF; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes: removed erroneous \\tag{3.2} from BvM theorem display (PDF eq. 3.2 is the submodel path on p. 544, not the Theorem 3.2 statement); corrected experimental benchmark locator from 'Table II, p. 554' to 'body text, p. 553'. All Table I/II values (R3-R6), Theory equations (2.1-2.5, 3.4), Method equations (2.7-2.8, 3.7, 3.8), double-robust smoothness condition, and GP kernel verified correct." }
  licenceVerification:
    - { source: "Crossref works/10.3982/ECTA21442", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "CC BY 4.0: license URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-01-01; content-version unspecified" }
---

**What this is.** A distilled skeleton of "Double Robust Bayesian Inference on Average Treatment Effects" by Breunig, Liu, and Yu (2025). Read the original at <https://doi.org/10.3982/ECTA21442> to replicate or extend.

## TL;DR

The paper proposes a double robust (DR) Bayesian procedure for estimating the average treatment effect (ATE) under unconfoundedness. The procedure makes two adjustments to standard Bayesian inference: (i) it adjusts the prior distribution of the conditional mean function using a pilot propensity score estimator, in the least favorable direction identified by Hahn (1998); and (ii) it corrects each posterior draw by subtracting a bias term constructed from the semiparametric efficient influence function. The authors prove a new Bernstein-von Mises (BvM) theorem showing the corrected posterior is asymptotically normal with the semiparametric efficient variance under a double robust smoothness condition (Proposition 4.1, p. 550): insufficient smoothness of the conditional mean can be compensated by higher smoothness of the propensity score and vice versa. Monte Carlo simulations using WGAN-generated samples from the Lalonde-Dehejia-Wahba data show DR Bayes achieves near-nominal coverage (95% to 98%) with credible interval lengths shorter than both prior-adjusted Bayesian (PA Bayes, following Ray and van der Vaart (2020)) and doubly robust frequentist alternatives including DML (Chernozhukov et al. (2017)). An empirical illustration on the National Supported Work Demonstration finds employment effects of 12% to 18%, close to the experimental benchmark of 11%.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | BvM theorem: corrected posterior is asymptotically normal with efficient variance V_0 under Assumptions 1-4 | Theorem 3.2, p. 548 | d_BL(posterior of sqrt(n)(tau - tau-hat - b-hat), N(0, V_0)) → 0 in probability; V_0 = semiparametric efficiency bound of Hahn (1998) |
| R2 | Exact frequentist coverage: the Bayesian credible set C_n(alpha) is also a valid (1-alpha) confidence interval | Corollary 3.1, p. 548 | P_0(tau_0 in C_n(alpha)) → 1-alpha; sqrt(n)(tau-bar minus tau_0) => N(0, V_0) |
| R3 | Simulation CP at t=0.10 (avg n=240): near-nominal coverage, shorter than PA Bayes | Table I, p. 553 | DR Bayes CP=0.983, CIL=0.223; PA Bayes CP=0.981, CIL=0.260; DML CP=0.927, CIL=0.524 |
| R4 | Simulation CP at t=0.05 (avg n=363): coverage maintained; PA Bayes begins to slip | Table I, p. 553 | DR Bayes CP=0.970, CIL=0.221; PA Bayes CP=0.949, CIL=0.254; DML CP=0.870, CIL=0.393 |
| R5 | Simulation CP at t=0.01 (avg n=664): DR Bayes stable; PA Bayes degrades sharply | Table I, p. 553 | DR Bayes CP=0.952, CIL=0.258; PA Bayes CP=0.897, CIL=0.308; DML CP=0.918, CIL=0.522 |
| R6 | Empirical ATE: NSW job training increases employment by 12% to 18%, near the experimental benchmark | Table II, p. 554 | DR Bayes ATE=0.178 [0.061, 0.293] at t=0.10; ATE=0.184 [0.064, 0.294] at t=0.05; NSW expt=0.111 [0.026, 0.196] |

**Overall.** The DR Bayesian procedure achieves near-nominal coverage across all trimming thresholds, including near-boundary overlap (t=0.01), where PA Bayes degrades to 89.7% and DML coverage ranges from 87% to 93%. Credible interval lengths are consistently shorter than PA Bayes because the posterior correction removes the bias that PA Bayes carries. In the empirical illustration using the Lalonde-Dehejia-Wahba data, DR Bayes produces employment effect estimates of 12% to 18%, bracketing the experimental benchmark of 11%, while DML (Chernozhukov et al. (2017)) produces a negative estimate at t=0.10 when all other methods are positive (Table II, p. 554).

## Theory / model

The setup (Section 2.1, p. 541) considers binary potential outcomes $$Y_i(0), Y_i(1) \in \{0,1\}$$ and binary treatment $$D_i \in \{0,1\}$$. The observed outcome is $$Y_i = D_i Y_i(1) + (1-D_i)Y_i(0)$$. Covariates $$X_i \in \mathbb{R}^p$$. The joint density of $$Z_i = (Y_i, D_i, X_i^\top)^\top$$ factors as (eq. 2.1, p. 541):

$$p_{\pi,m,f}(z) = \pi(x)^d(1-\pi(x))^{1-d}\, m(d,x)^y(1-m(d,x))^{1-y}\, f(x), \tag{2.1}$$

where $$\pi(x) = P_0(D_i=1 \mid X_i=x)$$ is the propensity score and $$m(d,x) = P_0(Y_i=1 \mid D_i=d, X_i=x)$$ is the conditional mean. The parameter of interest is the ATE $$\tau_0 = \mathbb{E}_0[Y_i(1) - Y_i(0)]$$.

**Assumption 1** (Unconfoundedness and Overlap, p. 541): (i) $$(Y(0), Y(1)) \perp D_i \mid X_i$$, and (ii) there exists $$\bar{\pi} > 0$$ such that $$\bar{\pi} < \pi_0(x) < 1 - \bar{\pi}$$ for all $$x$$ in the support of $$F_0$$.

For Bayesian inference the paper uses the logistic link $$\Psi(t) = 1/(1+e^{-t})$$ and defines the reparametrization (eq. 2.2, p. 542):

$$\eta^\pi = \Psi^{-1}(\pi), \quad \eta^m = \Psi^{-1}(m), \quad \eta^f = \log f. \tag{2.2}$$

The ATE in terms of $$\eta$$ is (eq. 2.3, p. 542):

$$\tau_\eta = \mathbb{E}_\eta[m_\eta(1,X) - m_\eta(0,X)]. \tag{2.3}$$

The efficient influence function for ATE estimation (Hahn (1998); Hirano, Imbens, and Ridder (2003)) is (eq. 2.4, p. 542):

$$\tilde{\varphi}_\eta(z) = m_\eta(1,x) - m_\eta(0,x) + \gamma_\eta(d,x)\bigl(y - m_\eta(d,x)\bigr) - \tau_\eta, \tag{2.4}$$

where the Riesz representer $$\gamma_\eta$$ is (eq. 2.5, p. 542):

$$\gamma_\eta(d,x) = \frac{d}{\pi_\eta(x)} - \frac{1-d}{1-\pi_\eta(x)}. \tag{2.5}$$

Lemma 3.1 (p. 545) shows the least favorable direction for estimating $$\tau_\eta$$ is:

$$\xi_\eta(d,x) = \bigl(0,\; \gamma_\eta(d,x),\; m_\eta(1,x) - m_\eta(0,x) - \tau_\eta\bigr). \tag{3.4}$$

This derivation extends Lemma 2.1 of Ray and van der Vaart (2020) from the one-arm (missing data) to the two-arm (treatment-control) ATE context. The prior adjustment is in the direction of $$\gamma_\eta$$ (the propensity score component of the least favorable direction) and the posterior correction aligns with the efficient influence function $$\tilde{\varphi}_\eta$$.

## Method

The Double Robust Bayesian Procedure is described in Algorithm 1 (p. 543) with implementation details in Section 4.2 (p. 550).

**Prior specification.** Place a centered Gaussian process prior $$W^m$$ with squared exponential covariance $$K((d,x),(d',x')) = \nu^2\exp(-a_{0n}^2(d-d')^2/2 - \sum_{l=1}^p a_{ln}^2(x_l-x_l')^2/2)$$ on $$\eta^m(d,X_i)$$. Adjust the prior by the pilot Riesz representer:

$$\eta^m(d,X_i) = W^m(d,X_i) + \lambda\hat{\gamma}(d,X_i),$$

where $$\hat{\gamma}(d,x) = d/\hat{\pi}(x) - (1-d)/(1-\hat{\pi}(x))$$ (eq. 2.6, p. 542) uses logistic Lasso propensity score estimates $$\hat{\pi}$$ (Friedman, Hastie, and Tibshirani (2010)), and $$\lambda \sim N(0,\sigma_n^2)$$ with $$\sigma_n = (\log n)/(\sqrt{n}\,\Gamma_n)$$.

**Posterior computation and correction.** For each draw $$s = 1,\ldots,S$$: draw Bayesian bootstrap weights $$M^s_i = e^s_i / \sum_j e^s_j$$ with $$e^s_i \stackrel{iid}{\sim} \text{Exp}(1)$$; generate the posterior draw $$\tau^s_\eta$$ and the correction term $$\hat{b}^s_\eta$$; form the corrected draw (eqs. 2.7-2.8, p. 543):

$$\tilde{\tau}^s_\eta = \tau^s_\eta - \hat{b}^s_\eta, \tag{2.7}$$

$$\tau^s_\eta = \sum_{i=1}^n M^s_i\bigl(m^s(1,X_i) - m^s(0,X_i)\bigr), \quad \hat{b}^s_\eta = \frac{1}{n}\sum_{i=1}^n \boldsymbol{\tau}[m^s - \hat{m}](Z_i), \tag{2.8}$$

where $$\boldsymbol{\tau}[m](z) := m(1,x) - m(0,x) + \hat{\gamma}(d,x)(y - m(d,x))$$ is the influence-function correction and $$\hat{m}$$ is the uncorrected Gaussian process posterior mean. The point estimator is $$\bar{\tau}_\eta = S^{-1}\sum_s \tilde{\tau}^s_\eta$$ and the $$100(1-\alpha)\%$$ credible set is $$\mathcal{C}_n(\alpha) = \{\tau : q_n(\alpha/2) \le \tau \le q_n(1-\alpha/2)\}$$.

**Main theoretical results.** Theorem 3.2 (p. 548) establishes, under Assumptions 1-4:

$$d_{\text{BL}}\!\left(\mathcal{L}_\Pi\!\left(\sqrt{n}(\tau_\eta - \hat{\tau} - \hat{b}_\eta) \,\middle|\, Z^{(n)}\right),\, N(0,V_0)\right) \to_{P_0} 0$$

where $$V_0 = \mathbb{E}_0[\tilde{\varphi}_0(Z_i)^2]$$ is the semiparametric efficiency bound of Hahn (1998). Corollary 3.1 (p. 548) gives exact frequentist coverage:

$$\sqrt{n}(\bar{\tau}_\eta - \tau_0) \Rightarrow N(0, V_0) \quad \text{and} \quad P_0(\tau_0 \in \mathcal{C}_n(\alpha)) \to 1 - \alpha. \tag{3.7}$$

**Double robust smoothness** (Proposition 4.1 and Remark 4.1, pp. 549-550): Theorem 3.2 holds under Holder smoothness classes $$m_0(d,\cdot) \in \mathcal{C}^{s_m}([0,1]^p)$$ and propensity scores estimated at rate $$r_n$$ provided:

$$\sqrt{s_\pi s_m} > p/2,$$

where $$s_\pi$$ and $$s_m$$ are the Holder smoothness indices of $$\pi_0$$ and $$m_0$$. Low smoothness of $$m_0$$ can be offset by higher smoothness of $$\pi_0$$ (and vice versa), which is the double robustness of the smoothness condition. When $$s_m > p/2$$ alone (single robustness), the bias term $$b_{0,\eta}$$ vanishes and no posterior correction is needed, recovering the Ray and van der Vaart (2020) case.

The frequentist doubly robust estimator that the Bayesian procedure is asymptotically equivalent to (eq. 3.8, p. 548) is:

$$\hat{\tau} = n^{-1}\!\sum_{i=1}^n \bigl(\hat{m}(1,X_i) - \hat{m}(0,X_i)\bigr) + n^{-1}\!\sum_{i=1}^n \hat{\gamma}(D_i,X_i)\bigl(Y_i - \hat{m}(D_i,X_i)\bigr). \tag{3.8}$$

This is the standard doubly robust or double machine learning (DML) estimator of Chernozhukov et al. (2017). The BvM theorem establishes that the corrected Bayesian posterior yields a Bayesian interpretation of this frequentist estimator.

## Empirical specifications

The paper applies DR Bayes to the Lalonde-Dehejia-Wahba data from the National Supported Work (NSW) Demonstration study (LaLonde (1986), Dehejia and Wahba (1999)). The data (publicly available at Dehejia's NBER website, footnote 4, p. 551) combine:

- **Treated group**: 185 men in the NSW experimental program
- **Control group**: 2490 men from the Panel Study of Income Dynamics (PSID)
- **Outcome $$Y$$**: binary employment indicator for 1978
- **Treatment $$D$$**: participation in the NSW program
- **Covariates (9)** following Abadie and Imbens (2011): age, education, Black, Hispanic, married, earnings 1974, earnings 1975, unemployed 1974, unemployed 1975

**Propensity score**: estimated by logistic Lasso with cross-validated penalty (Friedman, Hastie, and Tibshirani (2010)). Observations with estimated propensity score outside $$[t, 1-t]$$ are trimmed; $$t \in \{0.10, 0.05, 0.01\}$$. The optimal threshold of Crump, Hotz, Imbens, and Mitnik (2009) gives an average threshold of 0.073 for these samples (footnote 7, p. 553).

**Conditional mean $$m$$**: estimated using the uncorrected Gaussian process posterior mean with the squared exponential kernel, with the rescaling parameter $$a_n \sim n^{1/(2s_m+p)}(\log n)^{-(1+p)/(2s_m+p)}$$ (eq. 4.1, p. 549). Posterior computed via Laplace approximation (Section 4.2, p. 550). $$S = 5000$$ posterior draws.

**Simulation study** (Section 5.1, pp. 551-553): samples of $$n = 185$$ treated + 2490 controls drawn from a population generated by WGAN (Athey, Imbens, Metzger, and Munro (2024)) applied to the Lalonde-Dehejia-Wahba data, focusing on the binary employment outcome for 1978. 1000 Monte Carlo replications per trimming threshold. Competitors: unadjusted Bayes, PA Bayes (Ray and van der Vaart (2020)), Match and Match BC (Abadie and Imbens (2011)), DR TMLE (Benkeser et al. (2017)), DML (Chernozhukov et al. (2017)).

**Experimental benchmark** (body text, p. 553): The NSW experimental data (both NSW treatment and NSW control, $$n=445$$) yields ATE = 0.111, 95% CI [0.026, 0.196], which serves as the ground truth for evaluating observational methods.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|--------------|-----------|
| Lalonde-Dehejia-Wahba (NSW + PSID) | Treatment (185 NSW men) and non-experimental controls (2490 PSID men); binary employment outcome 1978; 9 covariates including earnings 1974-1975 | no page yet |

Sample: 185 treated + 2490 PSID controls; cross-sectional, covariates from 1974-1975, outcome from 1978. Publicly available at <http://users.nber.org/~rdehejia/nswdata2.html> (footnote 4, p. 551).

## When to read the full paper

Read this paper when you need a Bayesian credible set for an ATE under unconfoundedness that is also frequentist-valid: Theorem 3.2 and Corollary 3.1 (pp. 547-548) give the formal BvM and coverage results. Read Algorithm 1 (p. 543) and Section 4.2 (pp. 550-551) to implement the procedure with Gaussian process priors and logistic Lasso propensity scores. Read Remark 4.1 (p. 550) for the double robust smoothness condition and how to choose the Gaussian process rescaling parameter. Read Tables I-II (pp. 553-554) for simulation and empirical performance against PA Bayes, DML, and matching. Read Section 6 (pp. 554-556) for extensions to continuous, multinomial, and other causal parameters. Replication code is available at the Zenodo archive (https://doi.org/10.5281/zenodo.14015435).

## Attribution and rights

Christoph Breunig, Ruixuan Liu, and Zhengfei Yu, "Double Robust Bayesian Inference on Average Treatment Effects," *Econometrica*, Vol. 93, No. 2 (March 2025), pp. 539-568. DOI: [10.3982/ECTA21442](https://doi.org/10.3982/ECTA21442).

This article is published under the Creative Commons Attribution 4.0 International License (CC BY 4.0). You are free to share and adapt the material provided you give appropriate credit, provide a link to the license, and indicate if changes were made. License URL: <https://creativecommons.org/licenses/by/4.0/>.

This page is an LLM-distilled summary (claude-sonnet-4-6, 2026-06-26). It has not been human-verified and the results have not been independently reproduced. All magnitudes are extracted from the published article; consult the original for replication.
