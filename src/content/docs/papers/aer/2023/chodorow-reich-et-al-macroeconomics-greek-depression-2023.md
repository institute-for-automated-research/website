---
title: "Macroeconomics of the Greek Depression: Chodorow-Reich, Karabarbounis & Kekre (2023)"
description: >-
  Distilled: An estimated structural dynamic general equilibrium model
  decomposes Greece's 1998-2017 boom-bust cycle. Tax policy accounts for the
  largest fraction of the production bust (-18 of -34 model log-point decline),
  while uninsurable idiosyncratic income risk drives the bust in consumption and
  wages. Spending-based fiscal consolidation would have reduced the output bust
  by roughly 7 log points. American Economic Review 2023, paywalled. Eight core
  results with source locators, the model equations, and the Bayesian estimation
  approach. LLM-distilled, not human-verified.
sidebar:
  label: Chodorow-Reich-Karabarbounis-Kekre 2023
  order: 1
tags: [paper-summary, macro, fiscal-policy, business-cycles, open-economy-macro,
       structural-estimation, peer-reviewed, unreplicated,
       data:eurostat-esa]
paper:
  authors: Gabriel Chodorow-Reich, Loukas Karabarbounis, Rohan Kekre
  authorList:
    - { family: Chodorow-Reich, given: Gabriel, affiliation: Harvard University }
    - { family: Karabarbounis, given: Loukas, affiliation: "University of Minnesota, Federal Reserve Bank of Minneapolis" }
    - { family: Kekre, given: Rohan, affiliation: "University of Chicago, Booth School of Business" }
  year: 2023
  venue: American Economic Review 113(9), September 2023, 2411-2457
  venueShort: AER 2023
  doi: 10.1257/aer.20210864
  jel:
    codes: [E32, E62, F41]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Monetary Policy and Economic Impact", "Economic Theory and Policy", "Global Financial Crisis and Policies"]
  dataAccess: public
  outcome:
    - aggregate output (log deviation from trend)
    - aggregate consumption (log deviation from trend)
    - aggregate wages and prices (log deviation from trend)
  outcomeClass: [macro-aggregates]
  license: paywalled (American Economic Association; no CC license found in Crossref metadata; similarity-checking URL only)
  licenseShort: paywalled
  access: paywalled
  machineAccess: blocked-paywall (AEA / pubs.aeaweb.org, 2026-06-25)
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 31
  methods:
    role: applies-method
    family: structural
    buildsFrom: [dynamic-general-equilibrium, epstein-zin-weil, bayesian-dsge-estimation]
    identification: structural
  contributionType: [new-fact, new-theory, measurement]
  mechanisms: [risk-sharing, financial-constraint, intermediary-constraint, taxes]
  scope:
    region: Greece
    assetClass: Greek macroeconomy
    period: 1998..2017
    frequency: annual
    dataType: [accounting, administrative, market]
    granularity: [aggregate, firm]
    n: "annual data 1998-2017 (20 years)"
  findings:
    - { ref: R1, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "external demand 0.04 + total government spending 0.04 log pts (of which g_N^c +0.02), accounting for ~89% of the 0.09 log-pt model production boom 1998-2007 (data 0.14)", direction: positive, vsBenchmark: "tax policy and financial conditions contribute near zero to boom in production" }
    - { ref: R2, outcome: "aggregate consumption (log deviation from trend)", metric: pp-effect, value: "realized EU structural transfers T^s contribute 0.02 + anticipated transfers T^l 0.01 + external demand 0.05 log pts to the consumption boom 1998-2007 (data 0.15)", direction: positive, vsBenchmark: "fiscal and transfer factors together drive the majority of the consumption boom" }
    - { ref: R3, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "tax policy contributes -0.18 log pts out of -0.34 total model output bust 2007-2017 (data -0.40); prepayment fraction k_tau -0.07, capital tax nontraded -0.05, labor tax -0.03", direction: negative, vsBenchmark: "tax policy accounts for 53% of the model output bust; data bust = -0.40 log pts" }
    - { ref: R4, outcome: "aggregate consumption (log deviation from trend)", metric: pp-effect, value: "idiosyncratic risk contributes -0.14 log pts out of -0.28 model consumption bust 2007-2017 (data -0.38); accounts for 10 pp of price decline and 18 pp of wage decline", direction: negative, vsBenchmark: "data consumption bust = -0.38 log pts; idiosyncratic risk is 50% of the model decline" }
    - { ref: R5, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "+7 log points higher output by 2017 if all fiscal adjustment shifted from taxes entirely to spending cuts, holding tax rates at 2009 values; roughly half from TFP gains", direction: positive, vsBenchmark: "actual tax-heavy fiscal consolidation as implemented 2010-2017" }
    - { ref: R6, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "+16 log points output and +12 log points consumption by 2017 from removing debt-financed transfers in boom and using freed fiscal space for capital tax cuts in bust", direction: positive, vsBenchmark: "actual policy path with rising household transfers in boom and rising capital taxes in bust" }
    - { ref: R7, outcome: aggregate output, metric: fiscal-multiplier, value: "government non-traded consumption g_N multiplier = 0.56 at 7-yr horizon; aggregate spending-weighted multiplier = 0.56; aggregate revenue-based tax multiplier = 1.34; capital-tax cost-based multiplier = 4.46", direction: positive, vsBenchmark: "government traded-goods spending multiplier = 0.14; transfer multiplier = 0.26 at same horizon" }
    - { ref: R8, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "EAP prevented ~20 pp additional output shortfall at crisis onset; bank equity injections raised output ~4 pp by 2017 vs counterfactual without bank bailout; without EAP borrowing cost would have risen ~30 pp in 2012", direction: positive, vsBenchmark: "counterfactual without Economic Adjustment Programme external assistance" }
  resultType: mixed
  relatesTo:
    - { cite: "Gourinchas, Philippon & Vayanos (2016)", doi: '10.1086/690239', relation: extends, note: "confirms their central finding that fiscal consolidation drove about half the bust in output; extends with a more detailed model adding idiosyncratic risk, variable utilization, and endogenous TFP movements" }
    - { cite: "Martin & Philippon (2017)", doi: '10.1257/aer.20150630', relation: extends, note: "similar joint analysis of European boom-bust episodes; model here adds endogenous TFP, capital accumulation, banking sector, and idiosyncratic risk, reaching different conclusions on driving forces" }
    - { cite: "Schmitt-Grohé & Uribe (2016)", relation: tests, note: "tests their emphasis on downward nominal wage rigidity; finds only moderate role for nominal rigidities in accounting for bust; wages did fall substantially during the Greek crisis" }
    - { cite: "Gertler & Kiyotaki (2011)", doi: '10.1016/b978-0-444-53238-1.00011-9', relation: builds-on, note: "banking sector specification follows their financial intermediation and credit policy framework; limited enforcement constraint generates endogenous lending spread" }
    - { cite: "Bocola (2016)", doi: '10.1086/686734', relation: builds-on, note: "pass-through of sovereign risk to domestic borrowing cost follows Bocola (2016); bank losses on sovereign debt affect equilibrium lending rate" }
  openQuestions:
    - "Whether the structural mechanisms identified for Greece generalize to other large depressions in currency unions, which the paper notes as an open question for future work (conclusion, p. 2455)."
    - "Whether more generous social insurance against long-term unemployment (idiosyncratic risk channel) would have meaningfully stabilized the bust and what the welfare cost of the missing insurance would be (footnote 32, p. 2446, referencing Kekre 2022)."
  replicationCode:
    url: https://doi.org/10.3886/E188843V1
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 2411-2457 plus figures and tables); eight results extracted with page locators from the source PDF. Crossref and OpenAlex metadata checked. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; five fixes applied: (1) R7 Core results table g_T^x = 1.24 corrected to g_N^x = 1.24 (nontraded investment, per Table 6 p. 2450); (2) R7 description: g_N^x = 1.24 exceeds 1 so 'spending multipliers below 1' was inaccurate, updated accordingly; (3) Empirical specs: 'nine instruments / four tax rates' corrected to ten / five (Table 6 has 5 tax rows: tau_c, tau_x, tau_l, tau_Hk, tau_Nk); (4) R1 findings[] 'government non-traded consumption 0.04' corrected to 'total government spending 0.04' (Table 3: g_N^c = 0.02, gov spending total = 0.04); (5) resultType new-finding -> mixed (paper confirms Gourinchas et al. 2016 per TL;DR and relatesTo note). All other locators and magnitudes (Tables 3, 4, Figures 5-8, equations 1, 4, 9, 12, 17, 18, 21, 23, 25) confirmed against PDF." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210864", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No CC license in license[] array; only similarity-checking URL at pubs.aeaweb.org; confirmed paywalled AEA publication with no open-access licence" }
---

**What this is.** The paper's core results, the structural model it builds, and
the Bayesian estimation approach with key equations: enough to know what Greece's
boom-bust cycle was driven by and how the model identifies those forces, without
reading all 47 pages. To replicate or extend it, read the full source at the
[original](https://doi.org/10.1257/aer.20210864).

## TL;DR

The paper develops and estimates a dynamic general equilibrium model of a
small open economy in a currency union to decompose the sources of Greece's
boom (1998-2007) and subsequent depression (2007-2017). It quantitatively
confirms the central finding of Gourinchas, Philippon and Vayanos (2016) that
fiscal consolidation drove about half of the bust in output, while substantially
extending it with endogenous TFP via variable utilization, banking sector
frictions, idiosyncratic income risk, and a more detailed tax structure. On the
production side, external demand and government non-traded consumption account
for essentially the entire boom; tax policy, amplified by a working capital
constraint on firms and variable factor utilization, accounts for the largest
fraction of the bust. On the consumption side, realized and anticipated EU
transfers fuel the boom; the rise in uninsurable idiosyncratic income risk,
tracked by the long-term unemployment rate, accounts for the largest fraction
of the decline in consumption, prices, and wages.

Unlike the standard boom-bust narrative emphasizing downward nominal wage
rigidity in a currency peg (Schmitt-Grohé and Uribe 2016), nominal rigidities
play only a moderate role: wages and prices fell substantially during the Greek
crisis, which this model attributes primarily to the rise of idiosyncratic risk
as a negative demand and positive labor-supply shock. The model also extends
the joint European boom-bust analysis of Martin and Philippon (2017) by adding
endogenous TFP movements, capital accumulation, a banking sector, time-varying
idiosyncratic risk, and multi-rate tax measurement.

Counterfactual experiments show that a more spending-based fiscal consolidation
would have reduced the output bust by roughly 7 log points, and that avoiding
the debt-financed boom in household transfers would have created fiscal space to
lower distortionary capital taxes in the crisis. External and bank bailouts
mitigated the depression; without the Economic Adjustment Programme, borrowing
costs would have spiked roughly 30 percentage points in 2012.

## Core results

Magnitudes and contributions are as reported in the source tables and figures.
All log deviations are expressed as differences from the 1998 baseline after
detrending at 1.6 percent per year (quantities) and 1 percent per year (prices
and wages). Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | External demand and government non-traded spending account for essentially all of the production boom | Table 3, p. 2443 | External demand $$\bar{a}_T$$ +0.04 log pts, government consumption $$g_N^c$$ +0.02 log pts out of 0.09 total model log-output boom; data boom = 0.14 |
| R2 | Realized EU structural transfers and anticipated transfers drive the consumption boom | Table 3, p. 2443 | $$T^s$$ +0.02 log pts, $$T^l$$ +0.01 log pts, external +0.05 log pts to log consumption out of 0.08 model boom; data consumption boom = 0.15 |
| R3 | Tax policy is the dominant driver of the bust in production | Table 4, p. 2445 | Tax policy contributes -0.18 log pts out of -0.34 model (data -0.40) in log output 2007-2017; $$\kappa_\tau$$ -0.07, $$\tau_N^k$$ -0.05, $$\tau^\ell$$ -0.03 |
| R4 | Uninsurable idiosyncratic risk is the dominant driver of the bust in consumption and wages | Table 4, p. 2445; text p. 2444 | Idiosyncratic risk $$\pi^\theta$$ contributes -0.14 out of -0.28 model log-consumption bust; accounts for 10 pp of price decline and 18 pp of wage decline |
| R5 | Spending-based consolidation would have reduced the output bust by 7 log points | Figure 5, p. 2448 | Shifting all fiscal adjustment from taxes to spending cuts raises log output by +7 log pts by 2017 vs baseline; roughly half via TFP gains from lower taxes |
| R6 | Fiscal discipline in the boom and capital tax cuts in the bust raise output by 16 pp by 2017 | Figure 6, p. 2452 | Removing debt-financed transfers in boom and using freed resources to cut capital taxes: output +16 log pts, consumption +12 log pts by 2017; labor tax path adds only +2-4 log pts |
| R7 | Fiscal multipliers: most spending multipliers below 1 (nontraded investment $$g_N^x$$ = 1.24 exceeds 1); capital-tax multipliers are large | Table 6, p. 2450; text p. 2451 | $$g_N^c$$ output multiplier = 0.56; $$g_N^x$$ = 1.24 (nontraded investment); aggregate revenue-based tax multiplier = 1.34; capital tax cost-based multiplier $$\tau_H^k$$ = 4.46 |
| R8 | External bailout (EAP) prevented a 20 pp additional output shortfall; bank equity injections raised output 4 pp | Figures 7-8, pp. 2453-2454; text pp. 2414-2415 | Without EAP, borrowing cost rises ~30 pp in 2012; government bailout raised output ~20 pp and consumption 20-40 log pts in 2013 by preventing further spending cuts or tax hikes; bank bailout raised output ~4 pp by 2017 |

**Overall (paper's conclusion).** Greece's depression differs profoundly from
standard small-open-economy boom-bust narratives. The production bust was not
driven by nominal rigidities preventing wage adjustment, since wages and prices
fell substantially. Instead, tax increases, amplified through variable
utilization and a working capital constraint, drove most of the output decline.
The consumption decline, unusual in its persistence, reflected rising
idiosyncratic income risk. The composition of fiscal adjustment and the timing
of transfers in the boom period were as consequential as the aggregate size of
the consolidation.

## Theory / model

The model is a small open economy operating in a currency union, populated by
heterogeneous households, traded and nontraded goods firms, a banking sector,
and a government. Trend productivity grows at rate $$(1-\alpha)\mu$$, and all
variables are expressed in detrended stationary form (p. 2417).

**Households.** Workers $$\iota \in [0,1]$$ belong to two types: a fraction
$$\zeta$$ belongs to the rule-of-thumb household $$r$$ (more impatient, borrows at
capacity, does not hold firm shares) and a fraction $$1-\zeta$$ belongs to the
optimizing household $$o$$. Workers in the optimizing household face idiosyncratic
income risk. Worker $$\iota$$ in household $$h = \{r,o\}$$ values consumption and
labor via recursive preferences (equation (1), p. 2417):

$$
V_{it}^h = \left\{(c_{it}^h)^{1-\frac{1}{\rho}} \left[1 + \left(\frac{1}{\rho}-1\right) \frac{\chi(\ell_{it}^h)^{1+\frac{1}{\varepsilon}}}{1+\frac{1}{\varepsilon}}\right] + \beta^h e^{(1-\frac{1}{\rho})\mu}\left[E_{it}(V_{it+1}^h)^{1-\sigma}\right]^{\frac{1-\frac{1}{\rho}}{1-\sigma}}\right\}^{\frac{1}{1-\frac{1}{\rho}}} \tag{1}
$$

where $$\sigma > 0$$ governs risk aversion, $$\rho > 0$$ the intertemporal elasticity of
substitution (estimated: $$\hat{\rho} = 0.97$$), and $$\varepsilon > 0$$ the Frisch
elasticity (estimated: $$\hat{\varepsilon} = 1.16$$). Combining Epstein and Zin (1989)
preferences with constant Frisch elasticity separates risk aversion from
intertemporal substitution, which matters for the role of idiosyncratic
risk in the bust.

Idiosyncratic income shocks for the optimizing household follow a random walk
in logs (equation (4), p. 2418):

$$
\log \theta_{it+1}^o = \log \theta_{it}^o + \nu_{it+1}^\theta \tag{4}
$$

where innovations wash out at the household level, $$\int \exp(\nu_{it}^\theta) d\iota = 1$$.
A permanent income loss $$-\varphi^\theta$$ occurs with probability $$\pi_t^\theta$$,
measured by the long-term unemployment rate (rising from ~5% before the crisis
to ~20% during it, Figure 3 panel I). This uninsurable risk is central to the
model's transmission of the bust into consumption, prices, and wages.

**Firms.** Intermediate goods firms produce traded goods $$y_H$$ and nontraded
goods $$y_N$$ using Cobb-Douglas technology with variable utilization (equation
(9), p. 2420):

$$
y_{H,t} = z_{H,t} u_{H,t} (e^{-\mu} k_{H,t})^\alpha (\ell_{H,t})^{1-\alpha}, \quad y_{N,t} = z_{N,t} u_{N,t} (e^{-\mu} k_{N,t})^\alpha (\ell_{N,t})^{1-\alpha} \tag{9}
$$

where $$z_{H,t}$$, $$z_{N,t}$$ are exogenous productivity in each sector,
$$u_{H,t}$$, $$u_{N,t}$$ are endogenous utilization rates chosen by firms, and $$k$$
is capital (variable utilization raises depreciation, calibrated using firm
surveys). The endogenous utilization mechanism is central: without it ($$\xi_H = \xi_N = \infty$$),
the model would generate a bust in output and TFP more than 10 log points smaller
(Table 5, p. 2447).

Firms face a working capital constraint that links production decisions to the
endogenous borrowing cost $$i_t$$ (equation (12), p. 2421):

$$
B_{t+1}^f + \kappa_y(P_{H,t} y_{H,t} + P_{N,t} y_{N,t}) = \kappa_x(1+\tau_t^x) P_{x,t} x_t + \kappa_\ell W_t \ell_t + \kappa_{\tau,t} T_t^f + (1+i_t) e^{-\mu} B_t^f \tag{12}
$$

where $$\kappa_x$$, $$\kappa_\ell$$, $$\kappa_{\tau,t}$$ are the fractions of investment,
labor, and tax payments requiring working capital financing. The fraction
$$\kappa_{\tau,t}$$ rises from 50 to 100 percent during the crisis as firms are
required to prepay income taxes before revenues realize. This constraint amplifies
the production bust: without it, both the production boom and bust would have been
smaller.

**Banking sector.** Banks follow Gertler and Kiyotaki (2011) and Bocola (2016).
Incumbent banker net worth evolves as (equation (17), p. 2424):

$$
N_{t+1}^c = (1+\bar{i}_{t+1}) e^{-\mu} N_t + (i_{t+1} - \bar{i}_{t+1})(B_{t+1}^f + \zeta B_{t+1}^r) \tag{17}
$$

where $$\bar{i}$$ is the cost of funds from the rest of the world and $$i$$ is the
domestic lending rate. An incentive compatibility constraint (equation (18),
p. 2424) limits the lending spread via the threat of diversion:

$$
\kappa_b(B_{t+1}^f + \zeta B_{t+1}^r) \leq J_t^b \tag{18}
$$

where $$J_t^b$$ is bankers' continuation value proportional to net worth $$N_t$$.
Losses on sovereign debt (captured in $$T_{Gd,t}^b$$) erode bank net worth during
the crisis, raise the lending spread $$i_t - \bar{i}_t$$, and reduce firms' factor
demand through the working capital constraint.

**Driving forces.** The model organizes exogenous shocks into six categories
(p. 2425): (i) traded and nontraded productivity $$z_H$$, $$z_N$$; (ii) external demand
$$\bar{a}_T$$ and import prices; (iii) financial conditions (sovereign borrowing
limit, bank net worth shocks $$T_W^b$$, $$T_{Gd}^b$$, $$T_{Ge}^b$$); (iv) government
spending ($$g_T^c$$, $$g_N^c$$, $$g_T^x$$, $$g_N^x$$, transfers $$T^r$$); (v) tax policy
($$\tau^c$$, $$\tau^x$$, $$\tau^\ell$$, $$\tau_H^k$$, $$\tau_N^k$$, prepayment fraction
$$\kappa_{\tau}$$); and (vi) disaster risk (idiosyncratic $$\pi^\theta$$ and aggregate
$$\pi^a$$). All processes follow a VAR(1) (equation (21), p. 2426):

$$
\mathbf{z}_{t+1} = \bar{\mathbf{z}} + \mathbb{R}\, \mathbf{z}_t + \Sigma\, \nu_{t+1}, \quad \nu_{t+1} \sim \mathcal{N}(0, \mathbf{I}) \tag{21}
$$

## Method

The model is solved by a first-order perturbation around its steady state. It
is estimated by Bayesian techniques following the `bayesian-dsge-estimation`
approach (related to Smets and Wouters 2007). The key methodological
discipline is that the time series of exogenous processes $$\mathbf{z}$$ are fed
directly as observables without adding any measurement error; only the outcome
variables receive measurement errors. This restricts the shocks to account for
the data without slack from measurement noise, testing the model's fit more
stringently.

The estimation uses 16 observable outcome variables (equation (23), p. 2437):

$$
\mathbf{y} = \left(\log \ell_H,\; \log \ell_N,\; \log \text{TFP}_H,\; \log \text{TFP}_N,\; \log u_H,\; \log u_N,\; s,\; \log c,\right.
$$

$$
\left.\log(P_N c_N),\; \log x_T,\; \log x_N,\; \log P_H,\; \log P_N,\; \log W,\; \Pi^f/(P_y y),\; \log N\right) \tag{23}
$$

covering sectoral labor and TFP, utilization, capital share, aggregate and
sectoral consumption, investment, prices, wages, firm profits, and bank net worth.
The model achieves correlations with data above 0.9 for most variables (online
Appendix Table C.10, p. 2437 footnote).

Parameters are divided into three groups: (a) parameters set without solving the
model (Table 1, p. 2436: $$\sigma=3$$, trade elasticity $$\eta=1.65$$ estimated from
a regression of relative expenditure on relative prices, $$\varphi^a=0.24$$ from
Barro and Liao (2021)); (b) parameters calibrated from steady-state targets
(Table 2 Panel A: discount factors, capital share $$\alpha=0.44$$, banking
parameters); (c) parameters estimated by Bayesian MCMC from the time series
(Table 2 Panel B: $$\hat{\rho}=0.97$$, $$\hat{\phi}=3.17$$, $$\hat{\varepsilon}=1.16$$,
$$\hat{\zeta}=0.34$$, utilization elasticities $$\hat{\xi}_H=3.12$$, $$\hat{\xi}_N=3.75$$,
price and wage adjustment costs $$\hat{\psi}_{H,p}=79.3$$, $$\hat{\psi}_w=78.4$$).

Source decompositions (Tables 3-4) are computed by shutting off the time
evolution of each group of driving forces in turn, holding them constant at
their steady-state values. Positive entries in a row indicate the group
contributed to an increase in a variable; negative entries indicate it
contributed to a decrease. By construction, contributions sum to the model
total up to rounding.

## Empirical specifications

The paper's three main empirical exercises are source decompositions, structural
element comparisons, and policy counterfactuals.

**Source decompositions.** The model is run once for the full sample with all
shocks; then each group $$g$$ of driving forces is held at its steady-state mean
while all others are fed in. Changes in endogenous variables across these runs
identify the contribution of each group. Tables 3 and 4 (pp. 2443, 2445)
report changes in log output, log labor, log capital, log TFP, log consumption,
log traded and nontraded prices, log wage, and net-exports-to-GDP for the boom
(1998-2007) and bust (2007-2017) periods respectively.

**Structural element analysis.** Table 5 (p. 2447) re-runs the model with
alternative parameter values (e.g. $$\xi_H = \xi_N = \infty$$, $$\psi_p = \psi_w = 0$$,
$$\varphi^\theta = 0$$, no working capital) to identify which model features
account for the boom-bust dynamics. Variable utilization and idiosyncratic risk
are identified as the two structural elements that account for most of the boom-bust dynamics.

**Fiscal multipliers.** Fiscal multipliers are defined as the present-discounted
ratio of the output response to the present-discounted change in the fiscal
instrument, at a 7-year horizon (equation (25), p. 2448), discounted at the
steady-state private interest rate $$\bar{i} = 0.04$$:

$$
M_f^y(h) = \frac{\sum_{t=1}^h (1+\bar{i})^{1-t} \Delta y_t}{\sum_{t=1}^h (1+\bar{i})^{1-t} \Delta f_t} \tag{25}
$$

where the impulse is a 1-percentage-point change in the fiscal instrument $$f$$
initiated from its autoregressive process. Revenue-cost multipliers divide
$$M_f^y(h)$$ by the revenue counterpart $$M_f^r(h)$$ (defined symmetrically). Table 6
(p. 2450) reports output effects, revenue costs, and output-per-dollar-of-revenue
for ten instruments: four spending categories, transfers, and five tax rates.
The government nontraded investment multiplier $$g_N^x = 1.24$$ is the largest
individual spending multiplier (investment > consumption, nontraded > traded, per
the paper p. 2449); the nontraded consumption multiplier $$g_N^c = 0.56$$ equals
the aggregate spending-weighted multiplier because $$g_N^c$$ is the largest
spending category by expenditure share.
Capital tax multipliers are the largest tax multipliers, consistent with the
economy operating near the peak of the Laffer curve for capital income taxation
(capital income tax cut approximately revenue-neutral at the margin, p. 2450).

**Policy counterfactuals.** Figures 5-8 (pp. 2448, 2452, 2453, 2454) evaluate
three alternative scenarios: (i) shifting fiscal adjustment entirely from taxes
to spending cuts, holding tax rates at 2009 values while expanding government
spending innovations to balance the budget; (ii) eliminating debt-financed
transfers $$T^r$$ in the boom and using the freed fiscal space to reduce
distortionary taxes in the bust; (iii) removing the external bailout (EAP)
resources and instead forcing Greece to balance the budget via additional
spending cuts or tax hikes. All counterfactuals condition on the estimated
sequence of shocks and compare the model-generated paths to the baseline path
under observed fiscal policies.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Eurostat European System of Accounts (ESA) | Output, prices, consumption, investment, labor, TFP for Greece 1998-2017 (baseline observables for estimation) | No page yet |
| EU Joint Harmonised Commission Surveys (JCS) | Firm-level capacity utilization (manufacturing sector) and services survey (services sector) for $$u_H$$ and $$u_N$$ | No page yet |
| Bank of Greece Flow of Funds | Firm dividends $$\Pi^f$$ and bank net worth $$N$$; financial accounts | No page yet |
| Maastricht Treaty / OECD Economic Outlook | Government debt misreporting (anticipated transfers $$T^l$$ series from stated vs. revised deficits) | No page yet |
| Barro-Liao (2021) options-based disaster probability | Far-out-of-the-money put option prices on the Greek stock market for aggregate disaster probability $$\pi^a$$ | No page yet |

Sample: annual, 1998-2017 (20 years, Greece). Quantities detrended at 1.6%
per year, TFP at 0.7%, prices and wages at 1% (euro inflation average).

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20210864) if you are:
studying the structural mechanisms that generate large depressions in currency
unions; replicating the source decompositions in Tables 3-4 (the replication
package is at the ICPSR repository linked in `replicationCode`); extending the
model to other periphery euro-area economies; or evaluating the design of fiscal
consolidation programs. The online appendix contains alternative specifications,
robustness checks, and a full set of parameter estimates and model validation.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(9), September 2023.
Published by the American Economic Association, paywalled. This distillation
was extracted by an LLM on 2026-06-25 and is **not human-verified or
independently reproduced**. Redistribution is extract-only; no verbatim PDF
is hosted here.

> Chodorow-Reich, Gabriel, Loukas Karabarbounis, and Rohan Kekre.
> "The Macroeconomics of the Greek Depression."
> *American Economic Review* 113, no. 9 (September 2023): 2411-2457.
> DOI: 10.1257/aer.20210864.
