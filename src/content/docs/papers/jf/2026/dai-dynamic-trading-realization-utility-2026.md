---
title: "Dynamic Trading with Realization Utility: Dai, Qin & Wang (2026)"
description: >-
  Distilled: a jump-diffusion model with two-layered mental accounts shows
  that investors can optimally sell stocks at deep losses when savings are
  sufficient, and sell losing stocks after a price rebound when savings are
  low; leverage strengthens the disposition effect while leverage constraints
  mitigate it. J. Finance 2026, paywalled. Seven core results with source
  locators, the structural model with its equations, and the solution method.
sidebar:
  label: Dai-Qin-Wang 2026
  order: 1
tags: [paper-summary, asset-pricing, disposition-effect, behavioral-finance, realization-utility, prospect-theory, portfolio-choice, structural-model, peer-reviewed, unreplicated]
paper:
  authors: Min Dai, Cong Qin, Neng Wang
  authorList:
    - { family: Dai, given: Min, affiliation: "School of Accounting and Finance (Faculty of Business) and Department of Applied Mathematics (Faculty of Computer and Mathematical Sciences), The Hong Kong Polytechnic University" }
    - { family: Qin, given: Cong, affiliation: "School of Finance, Shanghai University of Finance and Economics" }
    - { family: Wang, given: Neng, affiliation: "Cheung Kong Graduate School of Business" }
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 189–238
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.13472
  license: 'Paywalled; VOR licence URL in Crossref is http://onlinelibrary.wiley.com/termsAndConditions#vor (Wiley standard terms, not CC); TDM licence URL is http://doi.wiley.com/10.1002/tdm_license_1.1. No open-access or CC licence found.'
  licenseShort: paywalled
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/J. Finance site; confirmed via Crossref metadata 2026-05-31)'
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 0
  topics: ['Financial Markets and Investment Strategies', 'Decision-Making and Behavioral Economics']
  dataAccess: public
  outcome:
    - optimal loss-realization timing under saving and leverage
    - disposition effect strength
    - stock allocation (saving vs. leverage fraction)
  methods:
    role: theory
    contributes: realization-utility-saving-leverage
    family: structural
    buildsFrom: [hjb-optimal-stopping, impulse-control, realization-utility]
  scope:
    region: theoretical (calibrated to US equity parameters)
    assetClass: individual equities (single stock plus risk-free asset)
  relatesTo:
    - { cite: 'Barberis and Xiong (2012)', doi: '10.1016/j.jfineco.2011.10.005', relation: extends, note: 'adds saving/leverage intensive margin and jump risk to the piecewise-linear realization-utility framework; no-voluntary-loss result of BX (2012) continues to hold in the extended model (Prop. 1, p. 216)' }
    - { cite: 'Ingersoll and Jin (2013)', doi: '10.1093/rfs/hhs116', relation: extends, note: 'adds intensive margin (w != 0) and downward jumps to the S-shaped CPT realization-utility framework; baseline diffusion parameters match IJ (2013) for comparison (Table II, p. 205)' }
    - { cite: 'He and Yang (2019)', doi: '10.1111/mafi.12182', relation: builds-on, note: 'builds on their four-region characterization of S-shaped realization-utility models; shows the deep-loss holding region is unreachable in diffusion models but reachable with jumps (p. 195, Table I)' }
    - { cite: 'An et al. (2024)', doi: '10.1111/jofi.13378', relation: tests, note: "model's deep-loss realization prediction is broadly consistent with the portfolio-driven disposition effect they document (pp. 193, 213, 218)" }
    - { cite: 'Heimer and Imas (2022)', doi: '10.1093/rfs/hhab073', relation: tests, note: "leverage-strengthens-disposition-effect and leverage-constraints-mitigate-it predictions are consistent with their empirical findings (pp. 192, 209-210)" }
  openQuestions:
    - 'The investor holds or trades a single stock each period; extending to multiple risky assets requires solving a multidimensional stochastic control problem (noted as technically challenging future research, p. 218).'
    - 'Probability weighting (another key feature of CPT beyond the utility specification) is omitted from the realization-utility formulation; its quantitative importance is acknowledged in fn. 15, p. 200.'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 189–238, all sections and appendices); seven results extracted from the PDF. Not human-verified. Not reproduced. No empirical data are used; this is a purely theoretical paper.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; all seven rows confirmed correct; figures, thresholds, and quantitative values match the PDF exactly, no fixes required.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Augment pass. Added methods, scope, relatesTo, openQuestions, and
        proposedVocab frontmatter blocks, and replaced the old ## Theory tested
        section with three formal body sections (Theory / model, Method,
        Empirical specifications) with equations transcribed from the source
        PDF read this session (eqs. 1-31, pp. 198-212, Appendix A eqs. A.1-A.5,
        Appendix B eqs. B.1-B.9). Core results table and provenance are
        unchanged from the verified version above. The new formal sections are
        extracted, not yet re-verified.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: 'All seven Core result rows re-checked against the PDF and confirmed correct. All equations (eqs. 1-31, A.1-A.5, B.1-B.10) verified term-by-term; one locator fix applied: the scaled variational inequality in the Method section was mislabelled (A.1) but is eq. (A.4) in the PDF; corrected in place. No other errors found.'
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13472
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0]: content-version=vor, URL=http://onlinelibrary.wiley.com/termsAndConditions#vor, delay-in-days=17, start=2026-02-18; license[1]: content-version=tdm, URL=http://doi.wiley.com/10.1002/tdm_license_1.1, delay-in-days=0, start=2026-02-01. No CC licence present.'
  rightsSignalConflict: false
---

**What this is.** The paper's core theoretical results, model structure, and
predictions: enough to know what it found without reading all 50 pages. To
replicate or extend it, read the full source at the
[canonical DOI](https://doi.org/10.1111/jofi.13472) (paywalled).

## TL;DR

Dai, Qin, and Wang build a continuous-time jump-diffusion model in which an
investor receives utility bursts from realizing stock gains and losses at the
individual stock level, while also managing a dynamic mental trading budget
shared across all investment episodes. The key departure from prior
realization-utility models (Barberis-Xiong 2012, Ingersoll-Jin 2013,
He-Yang 2019) is that the investor is not forced to invest his entire budget
in a single stock: he can save a fraction in the risk-free asset or use
leverage. This intensive margin, combined with downward jumps in stock prices,
generates two new predictions: (i) an investor with sufficient savings
voluntarily sells a stock at an arbitrarily deep loss to reset his reference
level, and (ii) an investor with low savings will not sell a deep loser but
will sell it after its price rebounds just enough. Leverage amplifies the
disposition effect; leverage constraints dampen it.

## Core results

Magnitudes and thresholds are as reported. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | With sufficient savings ($$w^* > 0$$), the investor optimally saves 63.5% of his budget and allocates only 36.1% to the stock each trade | §III.A, Figure 2, p. 205-206 | Baseline: $$w^* = 1.76$$; stock share $$= 1/(1 + \theta_p + w^*) = 36.1\%$$; value of saving option = 21% of mental trading budget ($$\Delta(w^*) = 21\%$$, Figure 2 Panel B) |
| R2 | Savings cause the investor to realize losses sooner than in IJ (2013), reducing the disposition effect | Figure 3, p. 207 | Loss-realization boundary $$x^* = 0.69$$ in baseline model vs 0.55 in IJ (2013); downside loss in dollars is one-third of the IJ (2013) model because savings absorb the hit at the trading-account level |
| R3 | Leverage ($$w^* < 0$$) strengthens the disposition effect: loss-realization threshold falls and gain-realization threshold rises | Figure 4, p. 208 | At $$\sigma = 20\%$$: $$w^* = -0.36$$; $$x^*$$ falls from 0.6 (IJ 2013) to 0.47; $$\bar{x}$$ rises from 1.03 to 1.04; the option to use leverage is worth 31% of the investor's trading budget |
| R4 | Binding leverage constraints mitigate the disposition effect by forcing earlier loss realization | Figure 5, p. 209 | Tightening $$\kappa$$ from 0.79 to 0.59 raises loss-realization threshold $$x^*$$ from 0.47 to 0.52; gain-realization threshold $$\bar{x}$$ unchanged at 1.04 |
| R5 | Investors prefer stocks with high or low volatility, not intermediate volatility; leverage users prefer low-volatility stocks, savers prefer high-volatility stocks | Figure 6, p. 210 | Scaled value $$\hat{v}$$ is U-shaped in $$\sigma$$ with minimum at $$\sigma = 25\%$$; investors use leverage when $$\sigma < 25\%$$ and save when $$\sigma > 25\%$$; $$\hat{v}$$ at $$\sigma = 25\%$$ equals 7.95 (same as IJ 2013, where no saving/leverage is available) |
| R6 | With downward jumps and sufficient savings (Case A, $$\sigma = 30\%$$), the investor voluntarily realizes deep losses for all $$x \in (0, 0.38)$$; saving $$w^* = 0.24$$ means 19.2% of budget is in the risk-free asset, making deep-loss realization optimal | Figure 7, §IV.A, p. 213-214 | Three-region solution: gain-realization at $$x \geq 1.03$$; holding for $$x \in (0.38, 1.03)$$; voluntary loss realization for all $$x \in (0, 0.38)$$ including $$x$$ near 0; payoff function $$f(w^*, 0) = 2.3 > 0$$ |
| R7 | With low savings (Case B, $$\sigma = 24\%$$), the investor holds a deep-loss stock (deep-loss holding region $$x \in (0, 0.04)$$) but sells after the price rebounds just enough to exit the deep-loss region | Figure 8, §IV.B, p. 214-215 | Four-region solution: deep-loss holding for $$x \in (0, 0.04)$$; loss-realization for $$x \in (0.04, 0.34)$$; normal holding for $$x \in (0.34, 1.03)$$; gain-realization for $$x \geq 1.03$$; $$w^* = 0.02$$ (only 1.9% in savings) |

**Overall (paper's conclusion).** The two-layered mental account generates
qualitatively new loss-realization predictions that diffusion-only models
cannot produce. The sell-at-deep-loss (Case A) and sell-after-rebound
(Case B) predictions arise from the interaction between the dynamic trading
budget and downward jumps. Both predictions are consistent with observed
retail investor behavior. Quantitatively, the option to save in the risk-free
asset is worth over 20% of the investor's total trading budget in calibrated
diffusion models.

## Theory / model

**Two-layered mental accounts.** The investor has a trading account with budget
$$\Pi_t > 0$$ at time $$t$$, used solely for realization-utility optimization.
At each trade he allocates a fraction to a risky stock and saves the rest in
the risk-free asset (the intensive margin $$w$$). Prior models (BX 2012, IJ 2013,
HY 2019) force $$w = 0$$ at all times; here $$w$$ is a choice variable.

**State variables and dynamics.** Three state variables: risk-free wealth
$$W_t$$, risky wealth $$X_t$$, and reference level $$B_t$$ (eq. 1, p. 198):

$$
\frac{dP_{n,t}}{P_{n,t}} = \mu \, dt + \sigma \, dZ_{n,t}, \qquad t > 0 \tag{1}
$$

Between two consecutive trading times $$(\tau_i, \tau_{i+1})$$, risky wealth
follows the same GBM (eq. 2, p. 198):

$$
dX_t = \mu X_t \, dt + \sigma X_t \, dZ_{n,t}, \qquad t \in (\tau_i, \tau_{i+1}) \tag{2}
$$

$$
dW_t = r W_t \, dt, \qquad t \in (\tau_i, \tau_{i+1}) \tag{3}
$$

The mental budget at $$t$$ is (eq. 4, p. 198):

$$
\Pi_t = W_t + (1 - \theta_s) X_t \tag{4}
$$

where $$\theta_s$$ is the proportional sale cost. Post-purchase wealth satisfies
(eq. 5, p. 199):

$$
W_{\tau_i^+} = \Pi_{\tau_i} - (1 + \theta_p) X_{\tau_i^+} \tag{5}
$$

The leverage constraint (eq. 6, p. 199):

$$
X_t \geq -W_t / \kappa, \qquad \text{where } 0 < \kappa < 1 - \theta_s \tag{6}
$$

**Reference level and realization utility.** The reference level grows at the
risk-free rate (eq. 7-8, p. 199):

$$
dB_t = r B_t \, dt \qquad \text{for } t \in (\tau_i, \tau_{i+1}) \tag{7}
$$

$$
B_{\tau_i^+} = X_{\tau_i^+} \tag{8}
$$

Realized gain (loss) at $$\tau_i$$ is (eq. 9-10, p. 199-200):

$$
G_{\tau_i} = (1 - \theta_s) X_{\tau_i} - B_{\tau_i} \tag{9}
$$

$$
g_{\tau_i} = G_{\tau_i} / B_{\tau_i} \tag{10}
$$

Utility burst (eq. 11, p. 200):

$$
U(G, B) = B^{\beta} u(G/B) = B^{\beta} u(g) \tag{11}
$$

The scaled utility function is S-shaped CPT (eq. 12, p. 200):

$$
u(g) = \begin{cases} g^{\alpha_+} & \text{if } g \geq 0 \\ -\lambda (-g)^{\alpha_-} & \text{if } g < 0 \end{cases} \tag{12}
$$

with $$\lambda \geq 1$$ (loss aversion), $$\alpha_+, \alpha_- \in (0, 1]$$
(diminishing sensitivity), and $$\beta \leq \min\{\alpha_+, \alpha_-\}$$ (eq. 13,
p. 200) to ensure $$|U(G,B)|$$ decreases in $$B$$ for fixed $$G$$.

**Optimization problem.** The investor chooses trading times
$$\{\tau_i \geq t\}$$ and stock allocations $$X_{\tau_i^+}$$ to maximize
(eq. 14, p. 201):

$$
\max \; \mathbb{E}_t \!\left[ \sum_{i=1}^{\infty} e^{-\delta(\tau_i - t)} U(G_{\tau_i}, B_{\tau_i}) \mathbf{1}_{\tau_i < \tau_L} + e^{-\delta(\tau_L - t)} U(G_{\tau_L}, B_{\tau_L}) \right] \tag{14}
$$

subject to the leverage constraint (6) and dynamics (2), (3), (5), (7), (8),
where $$\delta > 0$$ is the subjective discount rate and $$\tau_L$$ is the
liquidity-shock arrival time (exogenous Poisson with rate $$\xi$$).

**Baseline calibration** (Table II, p. 205): $$\alpha_+ = \alpha_- = 0.5$$,
$$\lambda = 1.5$$, $$\beta = 0.3$$, $$r = 3\%$$, $$\delta = 5\%$$, $$\mu = 9\%$$,
$$\sigma = 30\%$$, $$\theta_s = \theta_p = 1\%$$, $$\kappa = 0.79$$, $$\xi = 0$$.

**Jump-diffusion extension** (Section IV, p. 211-216): stock prices follow
(eq. 29, p. 212):

$$
\frac{dP_{n,t}}{P_{n,t^-}} = \mu \, dt + \sigma \, dZ_{n,t} - (1 - Y) \, dJ_{n,t}, \qquad P_0 > 0 \tag{29}
$$

where $$J_n$$ is a Poisson process with arrival rate $$\rho = 0.73/\text{year}$$ and
jump size $$Y \in [0,1]$$ drawn from cdf $$\Omega(Y) = Y^{\psi}$$ with $$\psi = 6.3$$,
implying expected price drop $$\mathbb{E}[1-Y] = 1/(\psi+1) = 14\%$$ per jump. In
scaled variables (eq. 30, p. 212):

$$
\frac{dx_t}{x_{t^-}} = (\mu - r) \, dt + \sigma \, dZ_{n,t} - (1 - Y) \, dJ_{n,t} \tag{30}
$$

## Method

**Homogeneity reduction.** Using the homogeneity of the value function
$$V(W,X,B) = B^{\beta} v(w,x)$$ and payoff function $$F(W,X,B) = B^{\beta} f(w,x)$$
(p. 202), the three-state problem reduces to a two-state scaled problem
with scaled variables (eq. 19, p. 203):

$$
w_t = W_t / B_t \qquad \text{and} \qquad x_t = X_t / B_t \tag{19}
$$

Since $$w_t$$ is constant between trades ($$dw_t = 0$$, eq. 21, p. 203), the
investor optimally picks a constant target ratio $$w^*$$ at each trade. The
scaled value with budget one is (eq. 24-25, p. 203):

$$
\hat{v} = \max_{w \geq -\kappa} m(w) \tag{24}
$$

$$
m(w) = \left(\frac{1}{w + 1 + \theta_p}\right)^{\!\beta} v(w, 1) \tag{25}
$$

The simplified scaled optimization problem is (eq. 22, p. 203):

$$
v(w_t, x_t) = \max_{\tau} \; \mathbb{E}_t \!\left[ e^{-\delta_e(\tau - t)} f(w_{\tau}, x_{\tau}) \mathbf{1}_{\tau < \tau_L} + e^{-\delta_e(\tau_L - t)} u\!\left((1-\theta_s)x_{\tau_L} - 1\right) \right] \tag{22}
$$

where $$\delta_e = \delta - \beta r$$ is the effective discount rate and
$$f(w, x) = u((1-\theta_s)x - 1) + [(1-\theta_s)x + w]^{\beta} \hat{v}$$ (eq. 23,
p. 203).

**HJB / variational inequality.** In the holding domain the scaled value
satisfies (eq. 26, p. 204 for the diffusion model; eq. 31, p. 212 for
jump-diffusion):

$$
\delta_e v(w,x) = \tfrac{1}{2} \sigma^2 x^2 v_{xx} + (\mu - r) x v_x + \xi \!\left[u\!\left((1-\theta_s)x - 1\right) - v(w,x)\right] \tag{26}
$$

$$
\delta_e v(w,x) = \frac{\sigma^2 x^2}{2} v_{xx} + (\mu - r) x v_x + \rho \!\left(\mathbb{E}[v(w, Yx)] - v(w,x)\right) \tag{31}
$$

The full variational inequality (Appendix A, pp. 218-219). The unscaled form is (A.1); after applying the homogeneity reduction the scaled variational inequality is (A.4):

$$
\max \!\left\{ \mathcal{L} v(w,x),\; f(w,x) - v(w,x) \right\} = 0 \tag{A.4}
$$

$$
\mathcal{L} v = \tfrac{1}{2} \sigma^2 x^2 v_{xx} + (\mu - r) x v_x - \delta_e v + \xi \!\left[u\!\left((1-\theta_s)x - 1\right) - v\right] \tag{A.5}
$$

When the leverage constraint (6) binds ($$w = -\kappa x$$):
$$v(w,x) = f(w,x)$$ (eq. A.3, p. 219).

**Closed-form solution (diffusion, no liquidity shocks).** In the holding
region, the value function has the form (Appendix B, eq. B.1, p. 222):

$$
v(w,x) = C_1(w)\, x^{\eta_1} + C_2(w)\, x^{\eta_2} \tag{B.1}
$$

where $$\eta_1 > 0$$ and $$\eta_2 < 0$$ are the two roots of the fundamental
quadratic (eq. B.2, p. 222):

$$
h(\eta) = \frac{\sigma^2}{2} \eta(\eta - 1) + (\mu - r)\eta - \delta_e = 0 \tag{B.2}
$$

The optimal $$w^*$$ is found by (eq. B.4, p. 222):

$$
w^* = \operatorname*{argmax}_{w \geq -\kappa} \frac{C_1(w) + C_2(w)}{[w + (1 + \theta_p)]^{\beta}} \tag{B.4}
$$

Value-matching and smooth-pasting conditions at the two boundaries
$$\bar{x}(w)$$ (gain) and $$x^*(w)$$ (loss) give a system of four equations
(B.5)-(B.8) jointly with the FOC (B.9), p. 223.

For the **jump-diffusion model**, the variational inequality (B.10, p. 225):

$$
\max \!\left\{ \mathcal{L}^J v(w,x),\; f(w,x) - v(w,x) \right\} = 0 \qquad \text{for } x \geq 0,\; w \geq 0 \tag{B.10}
$$

is solved numerically via a penalty method (Appendix B.3).

## Empirical specifications

This is a purely theoretical paper. There are no regression equations,
no portfolio sorts, and no empirical datasets used. All quantitative results
derive from numerical solution of the variational inequality or its
closed-form analogue under the baseline and jump-diffusion calibrations.

**Calibration targets** (Table II, p. 205 and §IV parameter choices,
p. 213):

- $$\alpha_+ = \alpha_- = 0.5$$, $$\lambda = 1.5$$, $$\beta = 0.3$$ match the CPT
  parameter values in IJ (2013), enabling direct comparison.
- $$\mu = 9\%$$, $$r = 3\%$$ target a 6% risk premium consistent with U.S. equity
  estimates (Hansen and Singleton 1982; Mehra and Prescott 1985).
- $$\kappa = 0.79$$ targets an 80% maximum loan-to-value ratio.
- Jump parameters $$\rho = 0.73/\text{year}$$, $$\psi = 6.3$$ (implying 14% expected
  price drop per jump) follow Barro and Jin (2011) and the rare-disaster
  literature.

**Comparative statics** are conducted by varying one parameter at a time
(Figures 2-9, pp. 205-217): $$\sigma$$ from 10% to 50% (Fig. 6); $$\kappa$$ from
0.79 to 0.59 (Fig. 5); $$\sigma$$ from 30% (Case A) to 24% (Case B) in the
jump-diffusion extension (Figs. 7-8).

Model predictions are discussed qualitatively against empirical findings in
Barber et al. (2019), Heimer and Imas (2022), An et al. (2024), and
Hartzmark (2015) but the paper does not run statistical tests against data.

## Datasets used

This paper is purely theoretical. No empirical dataset is used; all results
are derived analytically or via numerical solution of the model. No data tags
apply.

| Dataset | Role in paper | Wiki page |
|---|---|---|
| None | Theory and calibration only; parameter values ($$\lambda$$, $$\mu$$, $$\sigma$$, $$r$$, etc.) are taken from prior literature (Andersen et al. 2022, standard equity-premium estimates) | N/A |

## When to read the full paper

Read the [original](https://doi.org/10.1111/jofi.13472) if you are: extending
the realization-utility framework to allow saving or leverage; studying the
disposition effect under jump risk; looking for the closed-form solution
procedure (Appendix B) or the variational-inequality proofs (Appendix A);
or evaluating the model's quantitative calibration against empirical
disposition-effect magnitudes. The locators above point to the exact figures.
For "what did this paper find," the table above is sufficient.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026,
pp. 189–238. DOI: 10.1111/jofi.13472. © 2026 the American Finance
Association. This distillation was extracted by an LLM on 2026-05-31 and is
**not human-verified or independently reproduced**. The article is paywalled;
no open-access or CC licence was found in Crossref metadata. This page
contains only extracted findings (extract-only).

> Dai, Min, Cong Qin, and Neng Wang. "Dynamic Trading with Realization
> Utility." *The Journal of Finance* 81, no. 1 (February 2026): 189–238.
> DOI: 10.1111/jofi.13472.
