---
title: "Optimal Monetary Policy According to HANK: Acharya, Challe & Dogra (2023)"
description: >-
  Distilled: In an analytically tractable HANK model with idiosyncratic income
  risk, optimal monetary policy places about 1.76 times as much weight on output
  stabilization relative to inflation as in RANK (calibrated Upsilon = 1.76 vs 1),
  adds the level of output to the target criterion (calibrated delta = 0.6), and
  tolerates inflation to cushion output declines after aggregate shocks. American
  Economic Review 2023, paywalled. Twelve core results with source locators, the
  CARA-normal HANK model, the LQ planning problem, and the HANK target criterion
  equations.
sidebar:
  label: Acharya-Challe-Dogra 2023
  order: 1
tags: [paper-summary, macro, monetary-policy, inequality, hank, new-keynesian, peer-reviewed, unreplicated]
paper:
  authors: Sushant Acharya, Edouard Challe, Keshav Dogra
  authorList:
    - { family: Acharya, given: Sushant, orcid: "0000-0002-8011-3835", affiliation: "Bank of Canada and CEPR" }
    - { family: Challe, given: Edouard, affiliation: "European University Institute" }
    - { family: Dogra, given: Keshav, orcid: "0009-0008-1176-4483", affiliation: "Federal Reserve Bank of New York" }
  year: 2023
  venue: "American Economic Review 113(7), July 2023, 1741-1782"
  venueShort: AER 2023
  doi: 10.1257/aer.20200239
  jel:
    codes: [E52, E32, E12]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - "Monetary policy"
    - "Macroeconomics"
    - "Income inequality"
  dataAccess: public
  outcome:
    - optimal nominal interest rate path
    - output gap and output level
    - inflation
    - consumption inequality
  outcomeClass: [macro-aggregates, social-welfare]
  license: >-
    No CC license. Paywalled AEA article; no open-access license block present in
    Crossref DOI record. All rights reserved by the American Economic Association.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA site, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 12
  citedByCount: 3
  methods:
    role: theory
    contributes: hank-target-criterion
    family: theory
    buildsFrom: [overlapping-generations, cara-normal-hank]
  contributionType: [new-theory]
  mechanisms: [risk-sharing, self-insurance, unhedged-interest-rate-exposure]
  scope:
    region: US
    assetClass: "theoretical (calibrated to US macro parameters)"
  findings:
    - { ref: R1, outcome: "output gap and output level", metric: coefficient, value: "Upsilon(Omega) = 1.76 in baseline calibration (vs 1 in RANK); relative weight on price stability epsilon/(kappa * Upsilon) is roughly 57% of its RANK value", direction: positive, vsBenchmark: "vs RANK: Upsilon = delta = 1 and price-stability weight epsilon/kappa" }
    - { ref: R2, outcome: "output gap and output level", metric: coefficient, value: "delta(Omega) = 0.6 in calibration (vs 1 in RANK); target criterion puts weight 1-delta = 0.4 on output level and delta = 0.6 on output gap", direction: negative, vsBenchmark: "vs RANK: delta = 1 (pure output gap + price level targeting)" }
    - { ref: R3, outcome: "output gap and output level", metric: pp-effect, value: "HANK: positive output gap (yhat_0 > yhat^e_0 > 0) and positive inflation (pi_0 > 0) at impact; approx. +0.2 pp output gap and +0.025 pp inflation at date 0 (Figure 4, Proposition 5)", direction: positive, vsBenchmark: "vs RANK divine coincidence: yhat_t = yhat^e_t and pi_t = 0 for all t" }
    - { ref: R4, outcome: "output gap and output level", metric: pp-effect, value: "Following a positive markup shock, impact output falls about 0.29 pp in HANK versus 0.36 pp in RANK, while inflation rises about 0.045 pp versus 0.032 pp (Figure 5, p. 1771)", direction: mixed, vsBenchmark: "vs RANK: HANK has a smaller output decline and a larger inflation increase on impact" }
    - { ref: R5, outcome: "output gap and output level", metric: coefficient, value: "Omega = 0 implies Upsilon = delta = 1; HANK and RANK target criteria and optimal output and inflation paths coincide", direction: none, vsBenchmark: "HANK and RANK coincide at Omega = 0" }
    - { ref: R6, outcome: "output gap and output level", metric: pp-effect, value: "approx. +0.1 pp output raised relative to equally-distributed-dividend baseline when eta^d = 0.1 (10 percent stockholders, Figure 6, p. 1775)", direction: positive, vsBenchmark: "vs equal dividend distribution baseline (eta^d = 1): HANK planner raises output by ~0.1 pp in markup shock response" }
    - { ref: R7, outcome: "output gap and output level", metric: pp-effect, value: "At date 0 the nonutilitarian planner's output decline is slightly smaller than the utilitarian baseline; the paper characterizes the difference as small under its calibration (Figure 7, p. 1779)", direction: positive, vsBenchmark: "vs utilitarian baseline; the date-0 decline is slightly smaller" }
    - { ref: R11, outcome: "consumption inequality", metric: pp-effect, value: "Following a 100 basis point impact rate cut with subsequent real-rate deviations decaying at (0.5)^t, total log inequality deviation falls to about -0.1 percent by period 10; Figure 2 separates the asset-market self-insurance effect and the total effect including wages and income risk", direction: negative, vsBenchmark: "total effect versus the self-insurance-only and acyclical-income-risk paths" }
    - { ref: R12, outcome: "consumption inequality", metric: coefficient, value: "The sign threshold is Omega >= 0 for phi <= gamma and Omega < 0 for phi > gamma; increasing sigma or gamma changes the absolute value of Omega, not its sign (Figure 1, p. 1759)", direction: mixed, vsBenchmark: "parameter comparative statics across sigma, gamma, and phi" }
  resultType: new-finding
  relatesTo:
    - { cite: "Galí (2015)", relation: extends, note: "HANK generalizes the RANK target criterion; RANK (delta=Upsilon=1) is the special case with acyclical income risk Omega=0" }
    - { cite: "Woodford (2003)", relation: extends, note: "HANK extends RANK optimal policy characterization to a model with idiosyncratic income risk and consumption inequality" }
    - { cite: "Acharya and Dogra (2020)", doi: '10.3982/ecta16409', relation: builds-on, note: "CARA-normal HANK analytical framework enabling linear aggregation of household decisions independent of the wealth distribution" }
    - { cite: "Benigno and Woodford (2005)", doi: '10.1162/154247605775012914', relation: builds-on, note: "second-order approximation method used to obtain first-order-accurate LQ welfare approximation at an inefficient steady state" }
    - { cite: "McKay and Wolf (2022)", relation: contradicts, note: "McKay-Wolf also use an LQ approach in HANK but their planner objective is not Pareto optimal since it does not respect individual preferences (p. 1745)" }
    - { cite: "Auclert (2019)", doi: '10.1257/aer.20160137', relation: builds-on, note: "URE channel: unhedged interest rate exposure redistributes between savers and borrowers, incorporated in the non-utilitarian planner extension" }
  openQuestions:
    - "Whether the quantitative importance of the self-insurance channel (passthrough mu_t) relative to the income-risk channel differs substantially in quantitative HANK models with CRRA utility and binding borrowing constraints, which deliver higher average MPCs (p. 1780)."
    - "The cyclicality of log income risk in CRRA models: the CARA-normal framework measures cyclicality of level income risk; in CRRA models (Werning 2015, Bilbiie 2021) the relevant measure is cyclicality of log income risk, which determines how much HANK optimal policy departs from RANK (p. 1780)."
    - "Extension to an open economy where monetary policy cannot affect real interest rates and output, removing the key output-inflation trade-off on which the HANK-RANK differences rest (p. 1745)."
  replicationCode:
    url: https://doi.org/10.3886/E184261V1
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-24, role: extracted, note: "Full PDF read (pp. 1741-1782); six core results extracted with locators from propositions, figures, and calibrated parameter values. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-24, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; two fixes applied: (1) Omega formula corrected to add (1-Lambda) denominator on second term per eq. 29 p. 1758; (2) R4/preamble locator for Figure 5 corrected from p. 1770 to p. 1771." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added six distinct main-text findings, the missing R5, R7, R11 and R12 findings entries, formal model and policy equations (2)-(14), (19)-(20), (22), (25), (28)-(29), (35), (37), (39)-(46), and mechanism vocabulary proposals. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 12 result rows, displayed equations, specifications, classifications, and page claims against the PDF; corrected R4's impact comparison, equation (45)'s exponent sign, and stale figure-page metadata. No unsupported headline result found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20200239", checked: 2026-06-24, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block present in Crossref metadata. AEA article treated as paywalled; all-rights-reserved." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the CARA-normal HANK model, the welfare-based LQ planning problem, and the HANK target criterion with its defining equations: enough to understand what it found and how, without reading all 42 pages. To replicate or extend the analysis, read the full source at [doi.org/10.1257/aer.20200239](https://doi.org/10.1257/aer.20200239).

## TL;DR

The paper derives optimal monetary policy analytically in a heterogeneous-agent New Keynesian (HANK) model where households face uninsurable idiosyncratic income risk. CARA preferences and normally distributed idiosyncratic shocks (from Acharya and Dogra (2020)) make the model analytically tractable: the economy aggregates linearly, and the planner's welfare can be expressed as a function of aggregate output and a scalar measure of consumption inequality. The key finding is that the HANK planner's loss function differs from the representative-agent (RANK) loss function of Galí (2015) and Woodford (2003) in two ways. First, the planner puts more weight on stabilizing economic activity relative to inflation (calibrated Upsilon = 1.76 vs 1 in RANK). Second, the planner also cares about stabilizing the *level* of output (not just the output gap), because output stabilization reduces consumption risk when income risk is acyclical or countercyclical (calibrated delta = 0.6 < 1). Following productivity or markup shocks, the HANK planner therefore cushions output declines by accepting positive inflation on impact. Under productivity shocks, RANK achieves divine coincidence (zero inflation and zero output gap); under markup shocks, RANK also trades off output and inflation. The analysis builds on the second-order LQ approximation approach of Benigno and Woodford (2005) to handle the inefficient HANK steady state. McKay and Wolf (2022) use a related LQ approach but their planner is not Pareto optimal.

## Core results

Magnitudes are as reported; \* = 5%, \*\* = 1%. Locators point into the source PDF. R3 and R4 magnitudes are approximate figure readings (Figures 4-5, pp. 1768, 1771). R5 is a qualitative irrelevance result.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **HANK loss function puts weight Upsilon(Omega) > 1 on output activity**, scaling up the weight on output relative to inflation compared to RANK | Proposition 3, eq. (33), Figure 3, p. 1763-1765 | In calibration: Upsilon = 1.76; relative weight on price stability roughly halved relative to RANK (epsilon/(kappa \* Upsilon) vs epsilon/kappa) |
| R2 | **HANK target criterion introduces output level**, weighted (1-delta) against the output gap (weighted delta), reducing weight on the price level relative to RANK | Proposition 4, eq. (36), p. 1766 | In calibration: delta = 0.6 (vs 1 in RANK); roughly equal weight on output level stabilization and output gap stabilization |
| R3 | **Following a fall in productivity, HANK planner prevents output from falling to the flexible-price level**, accepting positive inflation on impact; RANK achieves divine coincidence (zero inflation, zero output gap) | Proposition 5, Figure 4, pp. 1767-1768 | HANK: output gap approx. +0.2 pp and inflation approx. +0.025 pp at date 0; both reverse after period T. RANK: output gap = 0, pi = 0 for all t |
| R4 | **Following a positive markup shock, HANK allows a larger inflation increase and a smaller output decline than RANK**, because a large output decline increases consumption inequality | Proposition 6, Figure 5, p. 1771 | HANK: output approx. -0.29 pp vs RANK -0.36 pp at impact; inflation approx. +0.045 pp vs RANK +0.032 pp at impact |
| R5 | **Acyclical income risk (Omega = 0): HANK optimal policy = RANK optimal policy**, even though inequality exists, because its evolution does not depend on output | Lemma 2, p. 1766 | When Omega = 0: Upsilon = delta = 1; identical target criteria and optimal {yhat, pi} paths in HANK and RANK |
| R6 | **Unequally distributed profits add dividend stabilization to HANK loss function**; when only 10% of households hold dividends (stockholder fraction eta^d = 0.1), the planner raises output approx. 0.1 pp in response to a positive markup shock | Proposition 7, Figure 6, pp. 1773-1775 | K(eta^d) is increasing in profit concentration; eta^d = 0.1: output raised approx. +0.1 pp above equal-distribution baseline |
| R7 | **With persistent initial wealth inequality, a nonutilitarian planner stabilizes date-0 output more strongly through the URE channel**; the subsequent-date policy criterion is unchanged | Proposition 9, Figure 7, pp. 1778-1779 | At date 0, the output decline is slightly smaller than under the utilitarian baseline and the nominal rate is lower; the paper describes the quantitative differences as small under its calibration |
| R8 | **Hand-to-mouth households magnify the HANK-RANK policy difference** because they cannot self-insure in bond markets | §VI, text p. 1778 | Adding high-MPC hand-to-mouth households quantitatively magnifies the sensitivity of consumption risk to monetary policy and increases output stabilization |
| R9 | **Persistent idiosyncratic risk also magnifies the policy response difference** | §VI, text pp. 1778-1779 | Persistence leaves the qualitative result unchanged but quantitatively increases the sensitivity of consumption risk to policy and output stabilization |
| R10 | **Demand shocks break divine coincidence in HANK**: price stability and productive efficiency remain feasible but are not generally optimal | §VI, text p. 1779 | Unlike RANK, the HANK planner allows price and productive-efficiency deviations to reduce demand-shock-induced inequality fluctuations |
| R11 | **A rate cut lowers consumption inequality through both self-insurance and income-risk channels** | Figure 2, p. 1761 | After a 100 basis point impact real-rate cut followed by a decay path of $$(0.5)^t$$, total log inequality deviation falls to about -0.1% by period 10; Figure 2 separates the asset-market-only self-insurance contribution from the total effect including wage and income-risk responses |
| R12 | **Only income-risk cyclicality changes the sign of the consumption-risk/output relation** | Figure 1, p. 1759; text p. 1759 | $$\Omega \geq 0$$ when $$\phi \leq \gamma$$ and $$\Omega < 0$$ when $$\phi > \gamma$$; higher $$\sigma$$ or $$\gamma$$ changes $$|\Omega|$$ but not its sign |

**Overall (paper's conclusion).** HANK differs from RANK because monetary policy can stabilize consumption inequality. When income risk is acyclical or countercyclical (the empirically relevant case), the HANK planner puts some weight on stabilizing the level of output in addition to the output gap, tolerates higher inflation after adverse shocks, and raises interest rates less aggressively than in RANK. Extensions to unequal profit distribution and initial wealth inequality (URE channel via Auclert (2019)) reinforce the same qualitative conclusion: both motives lead optimal monetary policy to put more weight on output stabilization relative to RANK.

## Theory / model

The model is a Bewley-Huggett economy with a New Keynesian production side. Households follow a perpetual-youth (Blanchard-Yaari) life-cycle with constant per-period survival probability $$\vartheta$$. Population is normalized to 1. The date $$s$$ problem of household $$i$$ born at date $$s$$ is (p. 1746, eq. 1):

$$
\max_{\{c_t^s(i),\, l_t^s(i),\, a_{t+1}^s(i)\}} E_s \sum_{t=s}^\infty (\beta\vartheta)^{t-s}\, u\!\left(c_t^s(i),\, l_t^s(i);\, \xi_t^s(i)\right) \tag{1}
$$

subject to a budget constraint (simplified, eq. 5, p. 1748):

$$
c_t(i) + w_t l_t(i) + q_t a_{t+1}(i) = w_t \xi_t^s(i) + (1-\tau_t^a) a_t(i) + D_t - T_t, \tag{5}
$$

where $$w_t$$ is the posttax real wage, $$q_t = \vartheta/R_t$$ is the bond price, $$a_t(i)$$ is real actuarial bond holdings, $$D_t$$ are dividends, and $$T_t$$ are lump-sum taxes. Each household faces i.i.d. idiosyncratic disutility-of-labor shocks $$\xi_t^s(i) \sim N(\bar{\xi},\sigma_t^2)$$. Agents have CARA preferences (p. 1747, eq. 4):

$$
u(c, l; \xi) = -\frac{1}{\gamma} e^{-\gamma c} - \rho\, e^{\frac{1}{\rho}(l - \xi)}, \tag{4}
$$

with coefficient of absolute risk aversion $$\gamma$$ and Frisch labor supply parameter $$1/\rho$$. CARA utility with normal shocks enables linear aggregation: equilibrium individual consumption and labor supply are linear in demeaned cash-on-hand (Proposition 1, eqs. 15-16, p. 1750):

$$
c_t^s(i) = \mathcal{C}_t + \mu_t\, x_t^s(i). \tag{15}
$$

$$
l_t^s(i) = \rho\ln w_t - \gamma\rho\, c_t^s(i) + \xi_t^s(i). \tag{16}
$$

where $$x_t^s(i) = (1-\tau_t^a)a_t^s(i) + w_t[\xi_t^s(i)-\bar{\xi}]$$ is demeaned cash-on-hand and $$\mu_t$$ is the marginal propensity to consume (MPC) out of cash-on-hand. Aggregate consumption $$\mathcal{C}_t$$ evolves as (eq. 17):

$$
\mathcal{C}_t = -\frac{1}{\gamma}\ln\beta R_t + \mathcal{C}_{t+1} - \frac{\gamma\mu_{t+1}^2 w_{t+1}^2 \sigma_{t+1}^2}{2}, \tag{17}
$$

where the last term is a precautionary savings motive absent in RANK. The MPC satisfies (eq. 18):

$$
\mu_t^{-1} = 1 + \gamma\rho w_t + \frac{\vartheta}{R_t}\,\mu_{t+1}^{-1}. \tag{18}
$$

Lower real interest rates reduce $$\mu_t$$, facilitating self-insurance (the self-insurance channel). Intermediate goods producers face Rotemberg quadratic price adjustment costs; the goods market clears at $$y_t = c_t$$. The nonlinear IS equation is (eq. 21, p. 1751):

$$
y_t = y_{t+1} - \frac{1}{\gamma}\ln\beta\!\left(\frac{1+i_t}{\Pi_{t+1}}\right) - \frac{\gamma}{2}\,\mu_{t+1}^2 w_{t+1}^2 \sigma_{t+1}^2. \tag{21}
$$

The Phillips curve is standard (linearized, eq. 30, p. 1760):

$$
\pi_t = \beta\pi_{t+1} + \kappa(\hat{y}_t - \hat{y}_t^e) + \frac{\varepsilon}{\Psi}\,\hat{\varepsilon}_t, \tag{30}
$$

where $$\kappa = \frac{\varepsilon}{\Psi}\frac{1+\gamma\rho}{\rho/y}$$ and $$\hat{y}_t^e = \frac{1+\rho/y}{1+\gamma\rho}\hat{z}_t$$ is the flexible-price (productively efficient) level of output.

**Welfare decomposition.** The social welfare function is the sum of average household lifetime utilities. By Proposition 2 (eq. 26, p. 1754), the period $$t$$ felicity can be written as:

$$
U_t = u(c_t, n_t;\bar{\xi})\,\Sigma_t,\qquad
\Sigma_t=(1-\vartheta)\sum_{s=-\infty}^{t}\vartheta^{t-s}\exp\!\left(\frac{\gamma^2}{2}\sigma_c^2(s,t)\right). \tag{26}
$$

where $$\Sigma_t \geq 1$$ is the welfare cost of consumption inequality: it equals 1 under complete markets and exceeds 1 whenever consumption dispersion is positive (higher $$\Sigma_t$$ reduces welfare since $$u(\cdot) < 0$$). The dynamics of $$\Sigma_t$$ are (eq. 27, p. 1755):

$$
\ln\Sigma_t = \frac{\gamma^2}{2}\mu_t^2 w_t^2 \sigma_t^2 + \ln(1-\vartheta + \vartheta\Sigma_{t-1}). \tag{27}
$$

Consumption inequality is driven by within-period consumption risk $$\mu_t^2 w_t^2 \sigma_t^2$$ (idiosyncratic variance passed through the MPC) plus the accumulated effect of preexisting wealth inequality inherited from $$\Sigma_{t-1}$$.

**How monetary policy affects inequality.** Linearizing eq. 27 and using assumptions on the cyclicality of $$\sigma_t$$, the two channels by which monetary policy affects consumption risk become explicit (eq. 31, p. 1760):

$$
\hat{\Sigma}_t = \Lambda\hat{\mu}_t - \gamma y(\Theta-1)\hat{y}_t + \beta^{-1}\tilde{\beta}\,\hat{\Sigma}_{t-1}. \tag{31}
$$

where $$\Lambda = \gamma^2\mu^2 w^2\sigma^2 > 0$$ and $$\Theta = 1 - \Lambda\varphi/\gamma$$ with $$\varphi = \partial\ln\sigma_t^2/\partial y_t$$ measuring income-risk cyclicality. The first term captures the self-insurance channel (lower $$\mu_t$$ reduces consumption risk); the second captures the income-risk channel (when risk is countercyclical, $$\Theta > 1$$, higher output lowers $$\Sigma_t$$). Lemma 1 (eq. 32, p. 1762) combines both channels into a single sufficient statistic $$\Omega$$, the cyclicality of consumption risk:

$$
\hat{\Sigma}_t = -\gamma y\,\Omega\!\left[\hat{y}_t - \varkappa(\Omega)\hat{y}_t^e\right] + \beta^{-1}\tilde{\beta}\,\hat{\Sigma}_{t-1}, \tag{32}
$$

where $$\Omega = \frac{\Lambda}{1-\Lambda} + \frac{\Theta-1}{1-\Lambda} \geq \Omega^c = \frac{\Lambda}{1-\Lambda} > 0$$ when risk is acyclical or countercyclical. When $$\Omega = 0$$ (acyclical risk and no self-insurance), monetary policy cannot affect consumption risk, and HANK optimal policy coincides with RANK (Lemma 2).

**The HANK planner's LQ problem.** The planning problem is to minimize the second-order approximation to social welfare losses over sequences $$\{\hat{y}_t, \pi_t\}_{t=0}^\infty$$, subject to the linearized Phillips curve (30). Proposition 3 (eq. 33, p. 1763) states:

$$
\min_{\{\hat{y}_t,\,\pi_t\}_{t=0}^\infty} \frac{1}{2}\sum_{t=0}^\infty \beta^t \left\{\Upsilon(\Omega)\left[\hat{y}_t - \delta(\Omega)\hat{y}_t^e\right]^2 + \frac{\varepsilon}{\kappa}\,\pi_t^2\right\}, \tag{33}
$$

where $$\Upsilon(\Omega) > 1$$ and $$\delta(\Omega) \in (0,1)$$ when $$\Omega \geq \Omega^c > 0$$ (acyclical or countercyclical income risk). In RANK ($$\sigma = 0 \Rightarrow \Omega = 0$$), $$\Upsilon = \delta = 1$$ and eq. (33) reduces to the standard RANK problem (eq. 34):

$$
\min_{\{\hat{y}_t,\,\pi_t\}_{t=0}^\infty} \frac{1}{2}\sum_{t=0}^\infty \beta^t \left\{(\hat{y}_t - \hat{y}_t^e)^2 + \frac{\varepsilon}{\kappa}\,\pi_t^2\right\}. \tag{34}
$$

The HANK loss function has two differences from RANK. First, the weight on economic activity is scaled by $$\Upsilon(\Omega) > 1$$, implying a lower relative weight on price stability. Second, the planner targets $$\hat{y}_t - \delta(\Omega)\hat{y}_t^e$$ rather than the output gap $$\hat{y}_t - \hat{y}_t^e$$: since $$\delta(\Omega) < 1$$, the planner aims to close the gap between $$\hat{y}_t$$ and $$\delta(\Omega)\hat{y}_t^e < \hat{y}_t^e$$, placing positive weight on stabilizing the *level* of output as well as the output gap.

**The HANK target criterion** (Proposition 4, eq. 36, p. 1766) for all $$t \geq 0$$:

$$
\left[1 - \delta(\Omega)\right]\hat{y}_t + \delta(\Omega)\!\left(\hat{y}_t - \hat{y}_t^e\right) + \frac{\varepsilon}{\Upsilon(\Omega)}\,\hat{p}_t = 0, \tag{36}
$$

where $$\hat{p}_t$$ is the log price level. In RANK the target criterion is $$(\hat{y}_t - \hat{y}_t^e) + \varepsilon\hat{p}_t = 0$$ (eq. 37), i.e., flexible price level targeting. The HANK criterion places weight $$(1-\delta)$$ on the output level $$\hat{y}_t$$, weight $$\delta$$ on the output gap, and a *lower* weight $$\varepsilon/\Upsilon < \varepsilon$$ on the price level.

The additional numbered baseline equilibrium equations spell out the decentralized environment. The household budget and initial asset condition are (2)-(3), p. 1746:

$$
c_t^s(i)+q_t a_{t+1}^s(i)=(1-\tau^w)\tilde{w}_t\ell_t^s(i)+(1-\tau_t^a)a_t^s(i)+D_t^s(i)-T_t. \tag{2}
$$

$$
a_s^s(i)=0. \tag{3}
$$

Financial intermediaries' zero-profit portfolio problem is (6), p. 1747; it implies $$q_t=\vartheta/R_t$$ and $$\vartheta a_{t+1}=B_{t+1}/P_{t+1}$$:

$$
\max_{a_{t+1},B_{t+1}}\left\{-\vartheta a_{t+1}+\frac{B_{t+1}}{P_{t+1}}\right\}\quad\text{subject to}\quad -P_tq_ta_{t+1}+\frac{B_{t+1}}{1+i_t}\leq 0. \tag{6}
$$

Final-good demand, the intermediate firm's production relation, and its price-setting objective are (7)-(9), p. 1748:

$$
y_t(j)=\left[\frac{P_t(j)}{P_t}\right]^{-\varepsilon_t}y_t. \tag{7}
$$

$$
y_t(j)=z_t n_t(j)-\frac{\Psi}{2}\left[\frac{P_t(j)}{P_{t-1}(j)}-1\right]^2y_t. \tag{8}
$$

$$
\max_{\{P_t(j),n_t(j),y_t(j)\}_{t=0}^{\infty}}\sum_{t=0}^{\infty}\beta^t\left\{\frac{P_t(j)}{P_t}y_t(j)-(1-\tau^*)\tilde{w}_t n_t(j)\right\},\quad\text{subject to (7)-(8).} \tag{9}
$$

The nonlinear Phillips curve is (10), p. 1748:

$$
(\Pi_t-1)\Pi_t=\frac{\varepsilon_t}{\Psi}\left[1-\frac{(\varepsilon_t-1)z_t}{\varepsilon_t(1-\tau^*)\tilde{w}_t}\right]+\beta\left(\frac{z_t y_{t+1}\tilde{w}_{t+1}}{z_{t+1}y_t\tilde{w}_t}\right)(\Pi_{t+1}-1)\Pi_{t+1}. \tag{10}
$$

The government budget constraint is (11), p. 1748; the paper assumes $$B_t=0$$ thereafter. Final-good, labor, and asset-market clearing are (12)-(14), p. 1749:

$$
\frac{1}{R_t}\frac{B_{t+1}}{P_{t+1}}+T_t+(1-\vartheta)\sum_{s=-\infty}^{t}\vartheta^{t-s}\int_i[\tau^w\tilde{w}_t\ell_t^s(i)+\tau_t^a a_t^s(i)]\,di=\tau^*w_t\int_0^1 n_t(j)\,dj+\frac{B_t}{P_t}. \tag{11}
$$

$$
y_t=c_t=(1-\vartheta)\sum_{s=-\infty}^{t}\vartheta^{t-s}\int_i c_t^s(i)\,di. \tag{12}
$$

$$
\int_0^1n_t(j)\,dj=(1-\vartheta)\sum_{s=-\infty}^{t}\vartheta^{t-s}\int_i\ell_t^s(i)\,di. \tag{13}
$$

$$
0=(1-\vartheta)\sum_{s=-\infty}^{t}\vartheta^{t-s}\int_i a_{t+1}^s(i)\,di. \tag{14}
$$

The aggregate labor and output relations are (19)-(20), p. 1751, and the stationary cash-on-hand distribution is (22), p. 1752:

$$
n_t=\rho\ln w_t-\gamma\rho y_t+\bar{\xi}. \tag{19}
$$

$$
y_t=z_t\frac{\rho\ln w_t+\bar{\xi}}{1+\gamma\rho z_t+\frac{\Psi}{2}(\Pi_t-1)^2}. \tag{20}
$$

$$
F(x)=(1-\vartheta)\sum_{s=0}^{\infty}\vartheta^s\Phi\!\left(\frac{x}{\sqrt{s+1}\,w\sigma}\right). \tag{22}
$$

The linearized Phillips curve before rewriting it in terms of the welfare-relevant output gap is (25), p. 1753:

$$
\pi_t=\beta\pi_{t+1}+\kappa(\hat{y}_t-\hat{y}_t^n),\qquad
\hat{y}_t^n=\frac{(1+\rho/y)\hat{z}_t-(\rho/y)\hat{\varepsilon}_t}{1+\gamma\rho},\quad
\kappa=\frac{\varepsilon}{\Psi}\frac{1+\gamma\rho}{\rho/y}. \tag{25}
$$

The initial inequality condition, including the steady-state cost of preexisting wealth dispersion, is (28), p. 1755:

$$
\ln\Sigma_0=\frac{\gamma^2}{2}\mu_0^2w_0^2\sigma_0^2+\ln\left[\frac{1-\vartheta}{1-\vartheta e^{-\frac{\Lambda}{2}(1-\tau_0^a)^2(\mu_0/\mu)^2}}\right]. \tag{28}
$$

The steady-state tax condition equates the benefit from lower consumption risk to the productive-efficiency cost, equation (29), p. 1758:

$$
\Omega\equiv\frac{\Lambda}{1-\Lambda}+\frac{\Theta-1}{1-\Lambda}=\frac{1-\tilde{\beta}}{1+\gamma\rho w}(w-1). \tag{29}
$$

Equation (35), p. 1764, decomposes the HANK output-loss term into consumption-risk stabilization and productive-efficiency stabilization:

$$
\Upsilon(\Omega)[\hat{y}_t-\delta(\Omega)\hat{y}_t^e]^2=\Upsilon(\Omega)\left\{[1-\varpi(\Omega)][\hat{y}_t-\varkappa(\Omega)\hat{y}_t^e]+\varpi(\Omega)[\hat{y}_t-\hat{y}_t^e]\right\}^2. \tag{35}
$$

For reference, the RANK target criterion is equation (37), p. 1766:

$$
(\hat{y}_t-\hat{y}_t^e)+\varepsilon\hat{p}_t=0. \tag{37}
$$

For unequal dividends, stockholder and nonstockholder consumption intercepts and the present value of dividends obey (39)-(40), p. 1772:

$$
\mathcal{C}_t^d=y_t+\left(\frac{1-\eta^d}{\eta^d}\right)\mu_t\mathcal{V}_t,\qquad
\mathcal{C}_t^{nd}=y_t-\mu_t\mathcal{V}_t,\qquad
\mathcal{V}_t=(D_t-D)+\frac{\vartheta}{R_t}\mathcal{V}_{t+1}. \tag{39}
$$

$$
\tilde{\mathcal{V}}_t=\mathcal{D}_y\hat{y}_t+\mathcal{D}_z\hat{z}_t+\tilde{\beta}\tilde{\mathcal{V}}_{t+1},\quad
\mathcal{D}_y=\frac{1}{\varepsilon}-\frac{\varepsilon-1}{\varepsilon}\left(\frac{1+\gamma\rho}{\rho/y}\right),\quad
\mathcal{D}_z=\frac{1+\rho/y}{\rho/y}\frac{\varepsilon-1}{\varepsilon}. \tag{40}
$$

The inequality recursion with between-group dividend exposure is (41), p. 1773:

$$
\ln\Sigma_t=\frac{\gamma^2}{2}\mu_t^2w_t^2\sigma_t^2+\ln[(1-\vartheta)B_t+\vartheta\Sigma_{t-1}],\quad
B_t=\eta^d e^{-\gamma(\mathcal{C}_t^d-y_t)}+(1-\eta^d)e^{-\gamma(\mathcal{C}_t^{nd}-y_t)}. \tag{41}
$$

For the nonutilitarian planner, the date-0 inequality term is (45), p. 1777:

$$
\ln\Sigma_0=\frac{1}{2}\gamma^2\mu_0^2w_0^2\sigma_0^2+\ln\left[\frac{1-\vartheta}{1-\vartheta e^{-\frac{\Lambda}{2}\left(\frac{\alpha-(1-\tau_0^a)\mu_0}{\mu}\right)^2}}\right]. \tag{45}
$$

## Method

The planner's problem is solved via the linear-quadratic (LQ) approach, following Benigno and Woodford (2005). A naive LQ approach (maximizing a quadratic approximation to welfare subject to linear constraints) does not yield first-order accurate approximations at an inefficient steady state, as is natural in HANK models with uninsurable income risk. To address this, the paper uses a second-order approximation of the constraints to eliminate first-order terms from the welfare approximation, yielding the LQ problem (33) that is first-order accurate. This mirrors Benigno and Woodford (2005)'s approach in RANK, generalized here to an economy where the steady state features consumption inequality ($$\Sigma > 1$$).

The linearized model consists of three main equations (p. 1753): the IS equation (23), MPC recursion (24), and the Phillips curve (25). Log-linearizing around the zero-inflation steady state and using eq. (20) to eliminate wages:

$$
\hat{y}_t = \Theta\hat{y}_{t+1} - \frac{1}{\gamma y}\!\left(\hat{i}_t - \pi_{t+1}\right) - \frac{\Lambda}{\gamma y}\,\hat{\mu}_{t+1}, \tag{23}
$$

$$
\hat{\mu}_t = -\gamma\mu wy\!\left[(1+\gamma\rho)\hat{y}_t - \hat{z}_t\right] + \tilde{\beta}\!\left(\hat{\mu}_{t+1} + \hat{i}_t - \pi_{t+1}\right), \tag{24}
$$

where $$\hat{i}_t = \ln(1+i_t) - \ln R$$, $$\Theta = 1 - \Lambda\varphi/\gamma$$, $$\Lambda = \gamma^2\mu^2 w^2\sigma^2$$, and $$\tilde{\beta} = \vartheta/R$$. These reduce to the standard RANK IS curve when $$\Lambda = 0$$ (no idiosyncratic risk). The Ramsey plan that solves problem (33) can be implemented by the following interest rate rule (eq. 38, p. 1770):

$$
i_t = i_t^\star + \phi\pi_t + \phi_{\text{gap}}(\Delta y_t - \Delta\hat{y}_t^e) + \phi_y\,\Delta y_t, \tag{38}
$$

where $$\phi_{\text{gap}} = \phi\frac{\Upsilon(\Omega)}{\varepsilon}\delta(\Omega)$$ and $$\phi_y = \phi\frac{\Upsilon(\Omega)}{\varepsilon}[1-\delta(\Omega)]$$. The HANK rule reacts more strongly to changes in output growth and the output gap (relative to $$\pi_t$$) than the RANK rule where $$\Upsilon = 1, \delta = 0$$.

For unequally distributed dividends, the planner adds discounted dividend value to its LQ objective (42), p. 1773, with date-0 and later target criteria (43)-(44), pp. 1773-1774. Here $$x_t=\hat{y}_t-\delta(\Omega)\hat{y}_t^e$$:

$$
\min_{\{\hat{y}_t,\pi_t,\tilde{\mathcal{V}}_t\}_{t=0}^{\infty}}\frac{1}{2}\sum_{t=0}^{\infty}\beta^t\left\{\Upsilon(\Omega)[\hat{y}_t-\delta(\Omega)\hat{y}_t^e]^2+\frac{\varepsilon}{\kappa}\pi_t^2\right\}+\frac{K(\eta^d)}{2}\left\{\tilde{\mathcal{V}}_0^2+(1-\beta^{-1}\tilde{\beta})\sum_{t=1}^{\infty}\beta^t\tilde{\mathcal{V}}_t^2\right\}. \tag{42}
$$

$$
\Upsilon(\Omega)x_0+\varepsilon\hat{p}_0+K(\eta^d)\mathcal{D}_y\hat{\mathcal{V}}_0=0, \tag{43}
$$

$$
\Upsilon(\Omega)(x_t-\beta^{-1}\tilde{\beta}x_{t-1})+\varepsilon(\hat{p}_t-\beta^{-1}\tilde{\beta}\hat{p}_{t-1})+K(\eta^d)\mathcal{D}_y(1-\beta^{-1}\tilde{\beta})\hat{\mathcal{V}}_t=0,\quad t>0. \tag{44}
$$

The nonutilitarian planner has a distinct date-0 loss term but the same loss function at later dates (Proposition 9, p. 1777). Its date-0 target criterion is equation (46), p. 1777:

$$
[1-\delta_0(\Omega)]\hat{y}_0+\delta_0(\Omega)(\hat{y}_0-\hat{y}_0^e)+\frac{\varepsilon}{\Upsilon_0(\Omega)}\hat{p}_0=0. \tag{46}
$$

## Empirical specifications

The paper's main results are analytical (propositions and closed-form expressions for $$\Upsilon$$ and $$\delta$$); calibration and impulse response functions (IRFs) are illustrative. There is no regression or sample-based estimating specification. The structural equilibrium restrictions are equations (10)-(14), (18)-(21), and (25) above. The planner solves the LQ problems (33), (34), (42), and Proposition 9, with no estimated coefficients, fixed effects, standard errors, or empirical sample. Parameters are set to match US annual aggregate and micro targets:

- Annual frequency, real interest rate $$r = 4\%$$, steady-state output $$y = 1$$.
- Survival probability $$\vartheta = 0.85$$ (following Nistico 2016 and Farhi-Werning 2019).
- Standard deviation of income in steady state $$w\sigma(1-\gamma\rho\mu w) = 0.5$$, in line with Guvenen, Ozkan, and Song (2014).
- Cyclicality of income risk $$\varphi = -5.76$$, consistent with Storesletten, Telmer, and Yaron (2004) who find the standard deviation of (log) income rises from 0.12 in expansions to 0.21 in recessions.
- Phillips curve slope $$\kappa = 0.1$$, elasticity of substitution $$\varepsilon = 10$$ (10% steady-state markup).
- Coefficient of relative risk aversion $$\gamma c = \gamma$$ and Frisch elasticity $$\rho/y$$ calibrated so that median household CRA = 2 and Frisch = 1/3 in steady state.
- Persistence of shocks: $$\varrho_z = 0.95^4$$ (productivity) and $$\varrho_\varepsilon = 0.9^4$$ (markup), from Bayer, Born, and Luetticke (2020).
- Shock standard deviations: $$\sigma_z = 0.012$$ and $$\sigma_\varepsilon = 0.034$$ (Bayer, Born, and Luetticke 2020).

With these parameters, the baseline calibration yields $$\Omega = \Omega^c + (\Theta-1) > 0$$ (countercyclical consumption risk) and the welfare parameters $$\Upsilon = 1.76$$ and $$\delta = 0.6$$. IRFs are constructed as the one-standard-deviation impulse response to a date-0 productivity or markup shock, holding the initial wealth distribution at its Ramsey steady state. Figures 4 and 5 (pp. 1768 and 1771) compare HANK optimal policy (blue) to RANK optimal policy (red dashed) and to the non-optimal policy that sets $$\hat{y}_t = \hat{y}_t^e$$ and $$\pi_t = 0$$ (black dotted). Section V calibrates the unequal dividends extension with $$\mathcal{D}_y < 0$$ (negative output elasticity of dividends in the baseline) and stockholder fractions $$\eta^d \in \{0.1, 0.5, 1\}$$ (Figure 6, p. 1775).

## Datasets used

The paper is theoretical with calibrated parameters; no primary dataset is used directly. The calibration matches moments from the following published studies:

| Dataset / Source | Role in paper | Wiki page |
|---|---|---|
| Guvenen, Ozkan, and Song (2014), SIPP administrative records | Target for steady-state standard deviation of income (set to 0.5) | No page yet |
| Storesletten, Telmer, and Yaron (2004), PSID earnings data | Calibration target for cyclicality of income risk (phi = -5.76) | No page yet |
| Bayer, Born, and Luetticke (2020) HANK calibration | Shock persistence and standard deviation parameters | No page yet |

Replication code and data are available at [doi.org/10.3886/E184261V1](https://doi.org/10.3886/E184261V1).

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20200239) if you are: deriving the formal welfare approximation and the exact expressions for $$\Upsilon(\Omega)$$ and $$\delta(\Omega)$$ (online Appendices E.2-E.3); studying extensions to hand-to-mouth households (Appendix H), persistent idiosyncratic risk (Appendix I), or demand shocks (Appendix J); checking the proof of divine coincidence breakdown (Proposition 5, Appendix F); or comparing the URE channel under the non-utilitarian planner to the baseline (Propositions 8-9, Appendix D.4). The locators above point to the key propositions and figures.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(7), July 2023. This distillation was extracted by an LLM on 2026-10-04 and is **not human-verified or independently reproduced**. The article is paywalled; this page contains extracted summaries only (extract-only redistribution).

> Acharya, Sushant, Edouard Challe, and Keshav Dogra.
> "Optimal Monetary Policy According to HANK."
> *American Economic Review* 113, no. 7 (July 2023): 1741-1782.
> DOI: 10.1257/aer.20200239.
> Replication data: doi.org/10.3886/E184261V1.
> All rights reserved, American Economic Association.
> This page is a distillation by the Institute for Automated Research (LLM-extracted, not human-verified, not reproduced).
