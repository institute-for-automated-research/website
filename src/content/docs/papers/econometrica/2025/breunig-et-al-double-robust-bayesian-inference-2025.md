---
title: "Double Robust Bayesian ATE Inference: Breunig, Liu & Yu (2025)"
description: >-
  Proposes a doubly robust Bayesian procedure for ATE estimation under unconfoundedness
  that adjusts the conditional mean prior and corrects the posterior via the semiparametric
  efficient influence function, proving a new Bernstein-von Mises theorem with asymptotically exact
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
    assignedBy: gpt-6-luna
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
  resultsCount: 16
  citedByCount: 6
  methods:
    role: proposes-method
    contributes: dr-bayesian-ate
    family: reduced-form-causal
    buildsFrom: [gaussian-process-regression, doubly-robust-estimation]
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
    - { ref: R1, outcome: "average treatment effect on employment", metric: normal-approximation, value: "Theorem 3.2: bounded-Lipschitz distance from the centered corrected posterior to N(0,V0) converges to 0 in P0-probability", direction: positive }
    - { ref: R2, outcome: "average treatment effect on employment", metric: probability, value: "P0(tau0 in Cn(alpha)) -> 1-alpha; sqrt(n)(posterior mean - tau0) converges in distribution to N(0,V0)", direction: positive }
    - { ref: R3, outcome: "credible interval coverage probability", metric: probability, value: "CP=0.983, CIL=0.223 at trimming t=0.10 (avg n=240)", direction: positive, vsBenchmark: "PA Bayes CP=0.981 CIL=0.260; DML CP=0.927 CIL=0.524 (Table I, p. 553)" }
    - { ref: R4, outcome: "credible interval coverage probability", metric: probability, value: "CP=0.970, CIL=0.221 at trimming t=0.05 (avg n=363)", direction: positive, vsBenchmark: "PA Bayes CP=0.949 CIL=0.254; DML CP=0.870 CIL=0.393 (Table I, p. 553)" }
    - { ref: R5, outcome: "credible interval coverage probability", metric: probability, value: "CP=0.952, CIL=0.258 at trimming t=0.01 (avg n=664)", direction: positive, vsBenchmark: "PA Bayes CP=0.897 CIL=0.308; DML CP=0.918 CIL=0.522 (Table I, p. 553)" }
    - { ref: R6, outcome: "average treatment effect on employment", metric: pp-effect, value: "ATE=0.184, 95% CI [0.064, 0.294] at trimming t=0.05", direction: positive, vsBenchmark: "NSW experimental ATE=0.111 [0.026, 0.196] (benchmark text, p. 553)" }
    - { ref: R7, outcome: "credible interval coverage probability", metric: probability, value: "Without trimming (t=0), all double robust methods substantially undercover and/or inflate interval length; unadjusted Bayes also undercovers (footnote 6, text p. 553)", direction: negative }
    - { ref: R8, outcome: "average treatment effect on employment", metric: pp-effect, value: "DR Bayes ATE=0.121, 95% CI [-0.031, 0.250], CIL=0.281 at trimming t=0.01", direction: none, vsBenchmark: "Experimental NSW ATE=0.111, 95% CI [0.026, 0.196] (benchmark text, p. 553)" }
    - { ref: R9, outcome: "average treatment effect on employment", metric: pp-effect, value: "DR TMLE ATE=-0.023, 95% CI [-0.171, 0.125] at trimming t=0.10; interval includes zero", direction: none, vsBenchmark: "Other reported point estimates at t=0.10 are positive (Table II, p. 554)" }
    - { ref: R10, outcome: "average treatment effect on employment", metric: pp-effect, value: "DML ATE=0.258, 95% CI [-0.183, 0.699], CIL=0.882 at trimming t=0.01", direction: none, vsBenchmark: "DR Bayes CIL=0.281 and estimate=0.121 at the same threshold (Table II, p. 554)" }
    - { ref: R11, outcome: "credible interval coverage probability", metric: probability, value: "Unadjusted Bayes CP=0.683 at t=0.10, 0.841 at t=0.05, and 0.911 at t=0.01", direction: negative, vsBenchmark: "Nominal 95% coverage (Table I, p. 553)" }
    - { ref: R12, outcome: "average treatment effect on employment", metric: pp-effect, value: "DR Bayes ATE=0.178, 95% CI [0.061, 0.293], CIL=0.231 at trimming t=0.10", direction: positive, vsBenchmark: "Experimental NSW ATE=0.111, 95% CI [0.026, 0.196] (benchmark text, p. 553)" }
    - { ref: R13, outcome: "credible interval coverage probability", metric: probability, value: "DR Bayes CP=0.983/0.970/0.952 at t=0.10/0.05/0.01; Match BC=0.880/0.816/0.804; DR TMLE=0.832/0.746/0.668; DML=0.927/0.870/0.918", direction: positive, vsBenchmark: "Nominal 95% coverage; compared methods in Table I, p. 553" }
    - { ref: R14, outcome: "average treatment effect on employment", metric: interval-length, value: "DR Bayes CIL=0.223/0.221/0.258 versus Match CIL=0.334/0.323/0.323 at t=0.10/0.05/0.01", direction: positive, vsBenchmark: "Similar coverage for Match, with longer intervals (Table I, p. 553)" }
    - { ref: R15, outcome: "average treatment effect on employment", metric: pp-effect, value: "PA Bayes ATE=0.158 at t=0.10, 0.170 at t=0.05, and 0.090 at t=0.01; respective 95% CIs [0.019, 0.288], [0.045, 0.281], [-0.078, 0.233]", direction: mixed, vsBenchmark: "DR Bayes estimates 0.178, 0.184, and 0.121; experimental NSW estimate=0.111 (Table II, p. 554; benchmark text, p. 553)" }
    - { ref: R16, outcome: "average treatment effect on employment", metric: pp-effect, value: "Unadjusted Bayes ATE=0.213 at t=0.10, 0.214 at t=0.05, and 0.198 at t=0.01; respective 95% CIs [0.120, 0.301], [0.132, 0.292], [0.140, 0.251]", direction: positive, vsBenchmark: "Adjusted Bayes estimates are lower and closer to experimental NSW ATE=0.111 (Table II, p. 554; benchmark text, p. 553)" }
  resultType: confirms
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
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read PDF; appended ten Core results rows, completed findings for R1-R16, and added missing numbered equations and extension specifications. Additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Full audit against source PDF: corrected smoothness threshold, benchmark locators, significance coding for nonsignificant estimates, duplicate finding key, method/result classification, and unsupported prose attribution; all 16 existing result rows and listed equations checked. Simulation bias column is a headline omission for later re-distillation." }
  licenceVerification:
    - { source: "Crossref works/10.3982/ECTA21442", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "CC BY 4.0: license URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-01-01; content-version unspecified" }
---

**What this is.** A distilled skeleton of "Double Robust Bayesian Inference on Average Treatment Effects" by Breunig, Liu, and Yu (2025). Read the original at <https://doi.org/10.3982/ECTA21442> to replicate or extend.

## TL;DR

The paper proposes a double robust (DR) Bayesian procedure for estimating the average treatment effect (ATE) under unconfoundedness. The procedure makes two adjustments to standard Bayesian inference: (i) it adjusts the prior distribution of the conditional mean function using a pilot propensity score estimator, in the least favorable direction identified by Hahn (1998); and (ii) it corrects each posterior draw by subtracting a bias term constructed from the semiparametric efficient influence function. The authors prove a new Bernstein-von Mises (BvM) theorem showing the corrected posterior is asymptotically normal with the semiparametric efficient variance under a double robust smoothness condition (Proposition 4.1, p. 550): insufficient smoothness of the conditional mean can be compensated by higher smoothness of the propensity score and vice versa. Monte Carlo simulations using WGAN-generated samples from the Lalonde-Dehejia-Wahba data show DR Bayes achieves near-nominal coverage (95% to 98%) with credible interval lengths shorter than both prior-adjusted Bayesian (PA Bayes, following Ray and van der Vaart (2020)) and doubly robust frequentist alternatives including DML (Chernozhukov et al. (2017)). An empirical illustration on the National Supported Work Demonstration finds positive employment effect estimates of 12% to 18%, close to the experimental benchmark of 11%; the tight-trimming estimate's interval includes zero.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | BvM theorem: corrected posterior is asymptotically normal with efficient variance V_0 under Assumptions 1-4 | Theorem 3.2, p. 548 | d_BL(posterior of sqrt(n)(tau - tau-hat - b-hat), N(0, V_0)) → 0 in probability; V_0 = semiparametric efficiency bound of Hahn (1998) |
| R2 | Asymptotically exact frequentist coverage: the Bayesian credible set C_n(alpha) is also a valid (1-alpha) confidence interval | Corollary 3.1, p. 548 | P_0(tau_0 in C_n(alpha)) → 1-alpha; sqrt(n)(tau-bar minus tau_0) => N(0, V_0) |
| R3 | Simulation CP at t=0.10 (avg n=240): near-nominal coverage, shorter than PA Bayes | Table I, p. 553 | DR Bayes CP=0.983, CIL=0.223; PA Bayes CP=0.981, CIL=0.260; DML CP=0.927, CIL=0.524 |
| R4 | Simulation CP at t=0.05 (avg n=363): coverage maintained; PA Bayes begins to slip | Table I, p. 553 | DR Bayes CP=0.970, CIL=0.221; PA Bayes CP=0.949, CIL=0.254; DML CP=0.870, CIL=0.393 |
| R5 | Simulation CP at t=0.01 (avg n=664): DR Bayes stable; PA Bayes degrades sharply | Table I, p. 553 | DR Bayes CP=0.952, CIL=0.258; PA Bayes CP=0.897, CIL=0.308; DML CP=0.918, CIL=0.522 |
| R6 | Empirical ATE: NSW job training increases employment by 12% to 18%, near the experimental benchmark | Table II, p. 554; benchmark text, p. 553 | DR Bayes ATE=0.178 [0.061, 0.293] at t=0.10; ATE=0.184 [0.064, 0.294] at t=0.05; NSW expt=0.111 [0.026, 0.196] |
| R7 | No trimming is unreliable: DR estimators under-cover and/or produce longer intervals | footnote 6, text p. 553 | At t=0, all double robust methods substantially undercover and/or inflate interval lengths; unadjusted Bayes also undercovers |
| R8 | DR Bayes empirical estimate under tight trimming | Table II, p. 554; benchmark text, p. 553 | At t=0.01 (n̄=740), ATE=0.121, 95% CI [-0.031, 0.250], CIL=0.281; NSW experimental benchmark=0.111 [0.026, 0.196] |
| R9 | DR TMLE gives a negative point estimate at t=0.10, but the interval includes zero | Table II, p. 554 | ATE=-0.023, 95% CI [-0.171, 0.125], CIL=0.296; all other listed point estimates are positive |
| R10 | DML becomes imprecise under tight trimming | Table II, p. 554 | At t=0.01, ATE=0.258, 95% CI [-0.183, 0.699], CIL=0.882 |
| R11 | Unadjusted Bayes under-covers across all reported trimming thresholds | Table I, p. 553 | CP=0.683 at t=0.10, 0.841 at t=0.05, and 0.911 at t=0.01, below nominal 0.95 |
| R12 | DR Bayes empirical estimate under t=0.10 | Table II, p. 554; benchmark text, p. 553 | At t=0.10 (n̄=245), ATE=0.178, 95% CI [0.061, 0.293], CIL=0.231; NSW experimental benchmark=0.111 [0.026, 0.196] |
| R13 | DR Bayes coverage exceeds Match BC, DR TMLE, and DML at each trimming threshold | Table I, p. 553 | CP at t=0.10/0.05/0.01: DR Bayes=0.983/0.970/0.952; Match BC=0.880/0.816/0.804; DR TMLE=0.832/0.746/0.668; DML=0.927/0.870/0.918 |
| R14 | DR Bayes intervals are shorter than uncorrected matching intervals, with similar coverage | Table I, p. 553 | CIL at t=0.10/0.05/0.01: DR Bayes=0.223/0.221/0.258; Match=0.334/0.323/0.323 |
| R15 | PA Bayes employment estimates span 9.0% to 17.0%, with its tight-trimming interval including zero | Table II, p. 554 | ATE=0.158, 95% CI [0.019, 0.288] at t=0.10; 0.170 [0.045, 0.281] at t=0.05; 0.090 [-0.078, 0.233] at t=0.01 |
| R16 | Unadjusted Bayes yields larger employment effects than adjusted methods | Table II, p. 554 | ATE=0.213 [0.120, 0.301] at t=0.10; 0.214 [0.132, 0.292] at t=0.05; 0.198 [0.140, 0.251] at t=0.01 |

**Overall.** The DR Bayesian procedure achieves near-nominal coverage across all trimming thresholds, including near-boundary overlap (t=0.01), where PA Bayes coverage falls to 89.7% and DML coverage is 91.8%. Credible interval lengths are consistently shorter than PA Bayes. The paper attributes this to a reduction in bias and/or more accurate uncertainty quantification from the posterior correction. In the empirical illustration using the Lalonde-Dehejia-Wahba data, DR Bayes produces employment effect estimates of 12% to 18%, bracketing the experimental benchmark of 11% (benchmark text, p. 553; Table II, p. 554). DR TMLE produces a negative point estimate at t=0.10, but its confidence interval includes zero; the other point estimates are positive (Table II, p. 554).

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

The paper defines the least-favorable submodel path (eq. 3.2, p. 544) for a direction $$(p,m,f)$$ satisfying $$\int f(x)f_\eta(x)\,dx=0$$:

$$
\pi_t(\cdot)=\Psi(\eta^\pi+t p)(\cdot),\quad m_t(\cdot)=\Psi(\eta^m+t m)(\cdot),\quad f_t(\cdot)=\frac{f_\eta(\cdot)e^{t f(\cdot)}}{\int e^{t f(x)}f_\eta(x)\,dx}. \tag{3.2}
$$

The score operator (eq. 3.3, p. 545) is the sum of its propensity, outcome, and covariate-density components:

$$
B_\eta(p,m,f)(z)=B_{\eta^\pi}p(z)+B_{\eta^m}m(z)+B_{\eta^f}f(z),\quad B_{\eta^\pi}p=(d-\pi_\eta(x))p(x),\quad B_{\eta^m}m=(y-m_\eta(d,x))m(d,x),\quad B_{\eta^f}f=f(x). \tag{3.3}
$$

The product-class regularity condition (eq. 3.5, p. 546) used for the double-robust argument is:

$$
\sup_{\eta\in H_n}\left|G_n\left[(\widehat{\gamma}-\gamma_0)(m_\eta-m_0)\right]\right|=o_{P_0}(1). \tag{3.5}
$$

The bounded-Lipschitz distance defining the posterior approximation (eq. 3.6, p. 547) is:

$$
d_{\mathrm{BL}}(P,Q)=\sup_{f\in\mathrm{BL}(1)}\left|\int f\,d(P-Q)\right|. \tag{3.6}
$$

Here $$\mathrm{BL}(1)$$ is defined by $$\sup_z|f(z)|+\sup_{z\ne z'}|f(z)-f(z')|/\|z-z'\|_2\leq1$$ (eq. 3.6, p. 547).

For the continuous and count outcomes extension, the conditional outcome density and joint density are (eqs. 6.1-6.2, pp. 554-555):

$$
f_{Y\mid D,X}(y\mid d,x)=c(y)\exp\left(q(m(d,x))a y-A(m(d,x))\right),\quad A(m)=\log\int c(y)e^{q(m)a y}\,dy. \tag{6.1}
$$

$$
p_{\pi,m,f}(y,d,x)=\pi(x)^d(1-\pi(x))^{1-d}c(y)\exp\left(q(m(d,x))a y-A(m(d,x))\right)f(x). \tag{6.2}
$$

The least favorable direction for this family (eq. 6.3, p. 555) is:

$$
\xi_\eta(d,x)=\left(0,\frac{1}{a}\gamma_\eta(d,x),m_\eta(1,x)-m_\eta(0,x)-\tau_\eta\right). \tag{6.3}
$$

## Method

The Double Robust Bayesian Procedure is described in Algorithm 1 (p. 543) with implementation details in Section 4.2 (p. 550).

**Prior specification.** Place a centered Gaussian process prior $$W^m$$ with squared exponential covariance $$K((d,x),(d',x')) = \nu^2\exp(-a_{0n}^2(d-d')^2/2 - \sum_{l=1}^p a_{ln}^2(x_l-x_l')^2/2)$$ on $$\eta^m(d,X_i)$$. Adjust the prior by the pilot Riesz representer:

$$\eta^m(d,X_i) = W^m(d,X_i) + \lambda\hat{\gamma}(d,X_i),$$

where $$\hat{\gamma}(d,x) = d/\hat{\pi}(x) - (1-d)/(1-\hat{\pi}(x))$$ (eq. 2.6, p. 542) uses logistic Lasso propensity score estimates $$\hat{\pi}$$ (Friedman, Hastie, and Tibshirani (2010)), and $$\lambda \sim N(0,\sigma_n^2)$$ with $$\sigma_n = (\log n)/(\sqrt{n}\,\bar{\gamma}_n)$$, where $$\bar{\gamma}_n=n^{-1}\sum_{i=1}^n|\widehat{\gamma}(D_i,X_i)|$$ (Algorithm 1, p. 543; implementation details, p. 551).

**Pilot Riesz representer.** The plug-in estimator (eq. 2.6, p. 542) based on pilot propensity estimate $$\widehat{\pi}$$ is:

$$
\widehat{\gamma}(d,x)=\frac{d}{\widehat{\pi}(x)}-\frac{1-d}{1-\widehat{\pi}(x)}. \tag{2.6}
$$

**Posterior computation and correction.** For each draw $$s = 1,\ldots,S$$: draw Bayesian bootstrap weights $$M^s_i = e^s_i / \sum_j e^s_j$$ with $$e^s_i \stackrel{iid}{\sim} \text{Exp}(1)$$; generate the posterior draw $$\tau^s_\eta$$ and the correction term $$\hat{b}^s_\eta$$; form the corrected draw (eqs. 2.7-2.8, p. 543):

$$\tilde{\tau}^s_\eta = \tau^s_\eta - \hat{b}^s_\eta, \tag{2.7}$$

$$\tau^s_\eta = \sum_{i=1}^n M^s_i\bigl(m^s(1,X_i) - m^s(0,X_i)\bigr), \quad \hat{b}^s_\eta = \frac{1}{n}\sum_{i=1}^n \boldsymbol{\tau}[m^s - \hat{m}](Z_i), \tag{2.8}$$

where $$\boldsymbol{\tau}[m](z) := m(1,x) - m(0,x) + \hat{\gamma}(d,x)(y - m(d,x))$$ is the influence-function correction and $$\hat{m}$$ is the uncorrected Gaussian process posterior mean. The point estimator is $$\bar{\tau}_\eta = S^{-1}\sum_s \tilde{\tau}^s_\eta$$ and the $$100(1-\alpha)\%$$ credible set is $$\mathcal{C}_n(\alpha) = \{\tau : q_n(\alpha/2) \le \tau \le q_n(1-\alpha/2)\}$$.

The centering estimator in the BvM argument is any asymptotically efficient estimator with the linear representation (eq. 3.1, p. 544):

$$
\widehat{\tau}=\tau_0+\frac{1}{n}\sum_{i=1}^n\widetilde{\varphi}_{\tau_0}(Z_i)+o_{P_0}(n^{-1/2}). \tag{3.1}
$$

**Main theoretical results.** Theorem 3.2 (p. 548) establishes, under Assumptions 1-4:

$$d_{\text{BL}}\!\left(\mathcal{L}_\Pi\!\left(\sqrt{n}(\tau_\eta - \hat{\tau} - \hat{b}_\eta) \,\middle|\, Z^{(n)}\right),\, N(0,V_0)\right) \to_{P_0} 0$$

where $$V_0 = \mathbb{E}_0[\tilde{\varphi}_0(Z_i)^2]$$ is the semiparametric efficiency bound of Hahn (1998). Corollary 3.1 (p. 548) gives exact frequentist coverage:

$$\sqrt{n}(\bar{\tau}_\eta - \tau_0) \Rightarrow N(0, V_0) \quad \text{and} \quad P_0(\tau_0 \in \mathcal{C}_n(\alpha)) \to 1 - \alpha. \tag{3.7}$$

**Double robust smoothness** (Proposition 4.1 and Remark 4.1, pp. 549-550): Theorem 3.2 holds under Holder smoothness classes $$m_0(d,\cdot) \in \mathcal{C}^{s_m}([0,1]^p)$$ and propensity scores estimated at rate $$r_n$$ provided:

$$s_\pi s_m > p/2,$$

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

**Conditional mean $$m$$**: estimated using the uncorrected Gaussian process posterior mean with the squared exponential kernel. For Holder smoothness $$s_m$$ and covariate dimension $$p$$, the rescaling rate (eq. 4.1, p. 550) is:

$$
a_n\sim n^{1/(2s_m+p)}(\log n)^{-(1+p)/(2s_m+p)}. \tag{4.1}
$$

The kernel is $$K((d,x),(d',x'))=\nu^2\exp(-a_{0n}^2(d-d')^2/2-\sum_{l=1}^p a_{ln}^2(x_l-x'_l)^2/2)$$; posterior computation uses a Laplace approximation (Section 4.2, p. 551), with $$S=5000$$ posterior draws. The authors report no regression fixed effects or regression standard errors: simulation coverage and credible interval lengths come from the posterior procedure and 1000 Monte Carlo replications, while Table II reports credible/confidence intervals for the estimators.

**Simulation study** (Section 5.1, pp. 551-553): samples of $$n = 185$$ treated + 2490 controls drawn from a population generated by WGAN (Athey, Imbens, Metzger, and Munro (2024)) applied to the Lalonde-Dehejia-Wahba data, focusing on the binary employment outcome for 1978. 1000 Monte Carlo replications per trimming threshold. Competitors: unadjusted Bayes, PA Bayes (Ray and van der Vaart (2020)), Match and Match BC (Abadie and Imbens (2011)), DR TMLE (Benkeser et al. (2017)), DML (Chernozhukov et al. (2017)).

**Experimental benchmark** (body text, p. 553): The NSW experimental data (both NSW treatment and NSW control, $$n=445$$) yields ATE = 0.111, 95% CI [0.026, 0.196], which serves as the ground truth for evaluating observational methods.

The multinomial extension defines the ATE over category probabilities and uses a multinomial-logit link (Section 6.2, pp. 555-556):

$$
\tau_\eta=\sum_{j=0}^{J}j E_\eta[m_{\eta,j}(1,X)-m_{\eta,j}(0,X)],\quad m_{\eta,0}=1-\sum_{j=1}^{J}m_{\eta,j}.
$$

For $$j=1,\ldots,J$$, $$m_{\eta,j}(d,x)=\frac{\exp(\eta^m_j(d,x))}{1+\sum_{l=1}^{J}\exp(\eta^m_l(d,x))}$$ and the prior adjustment is $$\eta^m_j(d,x)=W^m_j(d,x)+\lambda_j\widehat{\gamma}(d,x)$$ (Section 6.2, p. 556). For general linear causal parameters, the corrected posterior draw replaces the ATE functional by $$\tau^s_\eta=\sum_i M_i^s\psi(Z_i,m^s_\eta)-n^{-1}\sum_i\tau[m^s_\eta-\widehat{m}](Z_i)$$ (Section 6.3, p. 556). These are extensions, not additional empirical specifications in this paper.

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

This page's latest distillation and verification are by gpt-6-luna (2026-10-04). It has not been human-verified and the results have not been independently reproduced. All magnitudes are extracted from the published article; consult the original for replication.
