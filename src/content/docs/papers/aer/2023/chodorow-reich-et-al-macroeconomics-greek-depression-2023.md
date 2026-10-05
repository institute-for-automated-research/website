---
title: "Macroeconomics of the Greek Depression: Chodorow-Reich, Karabarbounis & Kekre (2023)"
description: >-
  Distilled: An estimated structural dynamic general equilibrium model
  decomposes Greece's 1998-2017 boom-bust cycle. Tax policy accounts for the
  largest fraction of the production bust (-18 of -34 model log-point decline),
  while uninsurable idiosyncratic income risk drives the bust in consumption and
  wages. Spending-based fiscal consolidation would have reduced the output bust
  by roughly 7 log points. American Economic Review 2023, paywalled. Fifteen core
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
  resultsCount: 15
  citedByCount: 31
  methods:
    role: both
    family: structural
    buildsFrom: [dynamic-general-equilibrium, epstein-zin-weil, bayesian-dsge-estimation]
    identification: structural
  contributionType: [new-fact, new-theory, measurement]
  mechanisms: [risk-sharing, financial-constraint, intermediary-constraint, taxes, downward-nominal-wage-rigidity]
  scope:
    region: Greece
    assetClass: Greek macroeconomy
    period: 1998..2017
    frequency: annual
    dataType: [accounting, market, survey]
    granularity: [aggregate, firm]
    n: "annual data 1998-2017 (20 years)"
  findings:
    - { ref: R1, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "external demand 0.04 + total government spending 0.04 log pts (of which g_N^c +0.02), accounting for ~89% of the 0.09 log-pt model production boom 1998-2007 (data 0.14)", direction: positive, vsBenchmark: "tax policy and financial conditions contribute near zero to boom in production" }
    - { ref: R2, outcome: "aggregate consumption (log deviation from trend)", metric: pp-effect, value: "Table 3 components: realized EU structural-fund transfers T^g +0.02, anticipated transfers T^l +0.01, rule-of-thumb household transfers T^r +0.03, and external demand a_T +0.01 log pts; the external category total is +0.05 and includes T^g and T^l (model boom +0.08; data +0.15)", direction: positive, vsBenchmark: "realized and anticipated transfers, household transfers, and external demand contribute to the consumption boom" }
    - { ref: R3, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "tax policy contributes -0.18 log pts out of -0.34 total model output bust 2007-2017 (data -0.40); prepayment fraction k_tau -0.07, capital tax nontraded -0.05, labor tax -0.03", direction: negative, vsBenchmark: "tax policy accounts for 53% of the model output bust; data bust = -0.40 log pts" }
    - { ref: R4, outcome: "aggregate consumption (log deviation from trend)", metric: pp-effect, value: "idiosyncratic risk contributes -0.14 log pts out of -0.28 model consumption bust 2007-2017 (data -0.38); accounts for 10 pp of price decline and 18 pp of wage decline", direction: negative, vsBenchmark: "data consumption bust = -0.38 log pts; idiosyncratic risk is 50% of the model decline" }
    - { ref: R5, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "+7 log points higher output by 2017 if all fiscal adjustment shifted from taxes entirely to spending cuts, holding tax rates at 2009 values; roughly half from TFP gains", direction: positive, vsBenchmark: "actual tax-heavy fiscal consolidation as implemented 2010-2017" }
    - { ref: R6, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "+16 log points output and +12 log points consumption by 2017 from removing debt-financed transfers in boom and using freed fiscal space for capital tax cuts in bust", direction: positive, vsBenchmark: "actual policy path with rising household transfers in boom and rising capital taxes in bust" }
    - { ref: R7, outcome: aggregate output, metric: fiscal-multiplier, value: "government non-traded consumption g_N multiplier = 0.56 at 7-yr horizon; aggregate spending-weighted multiplier = 0.56; aggregate revenue-based tax multiplier = 1.34; capital-tax cost-based multiplier = 4.46", direction: positive, vsBenchmark: "government traded-goods spending multiplier = 0.14; transfer multiplier = 0.26 at same horizon" }
    - { ref: R8, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "EAP prevented ~20 pp additional output shortfall at crisis onset; bank equity injections raised output ~4 pp by 2017 vs counterfactual without bank bailout; without EAP borrowing cost would have risen ~30 pp in 2012", direction: positive, vsBenchmark: "counterfactual without Economic Adjustment Programme external assistance" }
    - { ref: R9, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "Greek output per capita was 18% below its 2007 peak over 2008-2017", direction: negative, vsBenchmark: "largest and most persistent decline among the plotted modern middle- and high-income episodes" }
    - { ref: R10, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "Without variable utilization, model output fell -0.24 rather than -0.34 log points and TFP fell -0.02 rather than -0.14; at ξH = ξN = 2.5, they fell -0.44 and -0.23 in 2007-2017", direction: negative, vsBenchmark: "baseline model with endogenous utilization; high responsiveness produces a counterfactual price increase" }
    - { ref: R11, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "Without the working capital constraint, the output bust was -0.18 rather than -0.34 log points in 2007-2017", direction: negative, vsBenchmark: "baseline model output change -0.34 log points" }
    - { ref: R12, outcome: "aggregate consumption (log deviation from trend)", metric: pp-effect, value: "With idiosyncratic disaster size φθ = 0, consumption fell -0.14 rather than -0.28 log points; with φθ = 0.3 it fell -0.72 in 2007-2017", direction: negative, vsBenchmark: "baseline model consumption change -0.28; at φθ = 0.3, labor falls only -0.01 versus -0.16 in the baseline, while traded and nontraded prices change +0.04 and +0.10 at φθ = 0" }
    - { ref: R13, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "Setting price and wage adjustment costs ψp = ψw = 0 leaves the output bust at -0.34 log points; extreme costs of 1,000 produce -0.42", direction: mixed, vsBenchmark: "baseline output bust -0.34; paper concludes nominal rigidities have a moderate role, mainly in the boom" }
    - { ref: R14, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "Bank equity injections raised output by roughly 4 log points by 2017 relative to using the funds for tax cuts", direction: positive, vsBenchmark: "counterfactual using bank equity resources to decrease tax rates" }
    - { ref: R15, outcome: "aggregate output (log deviation from trend)", metric: pp-effect, value: "With banker exit rate δb = 0.3, output falls -0.29 and consumption -0.25; with δb = 0.9, output falls -0.38 and consumption -0.29 in 2007-2017", direction: mixed, vsBenchmark: "baseline output and consumption changes are -0.34 and -0.28; higher banker exit rates increase quantity movements and lower exit rates are associated with larger price declines" }
  resultType: mixed
  relatesTo:
    - { cite: "Gourinchas, Philippon & Vayanos (2016)", doi: '10.1086/690239', relation: extends, note: "confirms their central finding that fiscal consolidation drove about half the bust in output; extends with a more detailed model adding idiosyncratic risk, variable utilization, and endogenous TFP movements" }
    - { cite: "Martin & Philippon (2017)", doi: '10.1257/aer.20150630', relation: extends, note: "similar joint analysis of European boom-bust episodes; model here adds endogenous TFP, capital accumulation, banking sector, and idiosyncratic risk, reaching different conclusions on driving forces" }
    - { cite: "Schmitt-Grohé & Uribe (2016)", relation: tests, note: "tests their emphasis on downward nominal wage rigidity; finds only moderate role for nominal rigidities in accounting for bust; wages did fall substantially during the Greek crisis" }
    - { cite: "Gertler & Kiyotaki (2011)", doi: '10.1016/b978-0-444-53238-1.00011-9', relation: builds-on, note: "banking sector specification follows their financial intermediation and credit policy framework; limited enforcement constraint generates endogenous lending spread" }
    - { cite: "Bocola (2016)", doi: '10.1086/686734', relation: builds-on, note: "pass-through of sovereign risk to domestic borrowing cost follows Bocola (2016); bank losses on sovereign debt affect equilibrium lending rate" }
  openQuestions:
    - "Whether the mechanisms identified for Greece generalize to other large depressions in currency unions; the paper studies Greece alone, so this remains untested here."
    - "How social insurance against long-term unemployment would change the estimated idiosyncratic-disaster size and stabilize consumption; footnote 32 says the model's comparative statics are consistent with unemployment insurance stabilization effects (p. 2446)."
  replicationCode:
    url: https://doi.org/10.3886/E188843V1
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 2411-2457 plus figures and tables); eight results extracted with page locators from the source PDF. Crossref and OpenAlex metadata checked. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; five fixes applied: (1) R7 Core results table g_T^x = 1.24 corrected to g_N^x = 1.24 (nontraded investment, per Table 6 p. 2450); (2) R7 description: g_N^x = 1.24 exceeds 1 so 'spending multipliers below 1' was inaccurate, updated accordingly; (3) Empirical specs: 'nine instruments / four tax rates' corrected to ten / five (Table 6 has 5 tax rows: tau_c, tau_x, tau_l, tau_Hk, tau_Nk); (4) R1 findings[] 'government non-traded consumption 0.04' corrected to 'total government spending 0.04' (Table 3: g_N^c = 0.02, gov spending total = 0.04); (5) resultType new-finding -> mixed (paper confirms Gourinchas et al. 2016 per TL;DR and relatesTo note). All other locators and magnitudes (Tables 3, 4, Figures 5-8, equations 1, 4, 9, 12, 17, 18, 21, 23, 25) confirmed against PDF." }
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the source PDF and augmented the Core results table with seven distinct descriptive and structural findings, completed findings[] for R9-R15, added mechanisms, and transcribed all numbered main-text equations/specifications not present in the page; additions are not human-verified or reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 15 Core results, equations and specifications, classifications, findings, prose, relations, and frontmatter against the source PDF. Corrected R1's government-spending magnitude, R2's double-counted transfer contributions, Figure 1's description, open questions, and data/method classifications. Table-locator checker reported no incorrect pages. Flagged omitted headlines: EAP output effect narrows to about 5 pp by 2017; idiosyncratic risk contributes to the sudden stop in capital flows. Review pass (2026-10-04): Eq. (26) notation corrected to the paper's printed M_f^r(h)." }
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
production side, external demand and government spending, mostly on nontraded
consumption, account for essentially the entire boom; tax policy, amplified by a working capital
constraint on firms and variable factor utilization, accounts for the largest
fraction of the bust. On the consumption side, transfers to households and from
EU structural funds, along with external demand, fuel the boom; the rise in uninsurable idiosyncratic income risk,
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
| R1 | External demand and government spending account for essentially all of the production boom | Table 3, p. 2443 | External demand $$\bar{a}_T$$ +0.04 log pts and total government spending +0.04 (including nontraded consumption $$g_N^c$$ +0.02) out of 0.09 total model log-output boom; data boom = 0.14 |
| R2 | Transfers and external demand contribute to the consumption boom | Table 3, p. 2443 | Realized EU structural-fund transfers $$T^g$$ +0.02, anticipated transfers $$T^l$$ +0.01, rule-of-thumb household transfers $$T^r$$ +0.03, and external demand $$\bar{a}_T$$ +0.01 log pts; the external category total is +0.05 and includes $$T^g$$ and $$T^l$$ (model boom = 0.08; data = 0.15) |
| R3 | Tax policy is the dominant driver of the bust in production | Table 4, p. 2445 | Tax policy contributes -0.18 log pts out of -0.34 model (data -0.40) in log output 2007-2017; $$\kappa_\tau$$ -0.07, $$\tau_N^k$$ -0.05, $$\tau^\ell$$ -0.03 |
| R4 | Uninsurable idiosyncratic risk is the dominant driver of the bust in consumption and wages | Table 4, p. 2445; text p. 2444 | Idiosyncratic risk $$\pi^\theta$$ contributes -0.14 out of -0.28 model log-consumption bust; accounts for 10 pp of price decline and 18 pp of wage decline |
| R5 | Spending-based consolidation would have reduced the output bust by 7 log points | Figure 5, p. 2448 | Shifting all fiscal adjustment from taxes to spending cuts raises log output by +7 log pts by 2017 vs baseline; roughly half via TFP gains from lower taxes |
| R6 | Fiscal discipline in the boom and capital tax cuts in the bust raise output by 16 pp by 2017 | Figure 6, p. 2452 | Removing debt-financed transfers in boom and using freed resources to cut capital taxes: output +16 log pts, consumption +12 log pts by 2017; labor tax path adds only +2-4 log pts |
| R7 | Fiscal multipliers: most spending multipliers below 1 (nontraded investment $$g_N^x$$ = 1.24 exceeds 1); capital-tax multipliers are large | Table 6, p. 2450; text p. 2451 | $$g_N^c$$ output multiplier = 0.56; $$g_N^x$$ = 1.24 (nontraded investment); aggregate revenue-based tax multiplier = 1.34; capital tax cost-based multiplier $$\tau_H^k$$ = 4.46 |
| R8 | External bailout (EAP) prevented a 20 pp additional output shortfall; bank equity injections raised output 4 pp | Figures 7-8, pp. 2453-2454; text pp. 2414-2415 | Without EAP, borrowing cost rises ~30 pp in 2012; government bailout raised output ~20 pp and consumption 20-40 log pts in 2013 by preventing further spending cuts or tax hikes; bank bailout raised output ~4 pp by 2017 |
| R9 | Greece's output decline was unusually large and persistent relative to other modern high- and middle-income economies | Figure 1, p. 2412 | Mean real output per capita was 18% below its 2007 peak over 2008-2017 |
| R10 | Variable utilization is needed to match the observed production and TFP bust | Table 5, p. 2447 | Without variable utilization, model log output declines -0.24 rather than -0.34 and TFP declines -0.02 rather than -0.14; with ξH = ξN = 2.5, output and TFP declines are -0.44 and -0.23 |
| R11 | The working capital constraint amplifies production contractions | Table 5, p. 2447 | Without working capital, output declines -0.18 rather than -0.34 log points in 2007-2017 |
| R12 | Idiosyncratic disaster risk is a mechanism for the consumption and price bust | Table 5, p. 2447 | Setting φθ = 0 changes log consumption decline from -0.28 to -0.14; traded and nontraded prices change from -0.04 and 0.00 to +0.04 and +0.10 |
| R13 | Nominal price and wage rigidities have a moderate role over the full episode | Table 5, p. 2447; text p. 2414 | With ψp = ψw = 0, output's bust remains -0.34 log points; at ψp = ψw = 1,000 it is -0.42, while the authors report the main rigidity role is in the boom |
| R14 | Bank equity injections mitigated the persistence of the depression | Figure 8, p. 2454; text p. 2415 | Bank bailout raised output by roughly 4 log points by 2017 relative to use of the funds for tax cuts |
| R15 | Bankers' exit rate changes the amplification of real shocks through borrowing costs | Table 5, p. 2447 | With δb = 0.3, output and consumption fall -0.29 and -0.25; with δb = 0.9, they fall -0.38 and -0.29, versus baseline changes of -0.34 and -0.28 |

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

The remaining numbered model equations are transcribed below so the formal model is complete. Locators refer to printed AER pages.

Equation (2), p. 2418, gives the consumption aggregator and traded-goods nest:

$$
c_t=\left[\omega_c^{1/\phi}c_{T,t}^{(\phi-1)/\phi}+(1-\omega_c)^{1/\phi}c_{N,t}^{(\phi-1)/\phi}\right]^{\phi/(\phi-1)},\quad c_{T,t}=\left[\gamma^{1/\eta}c_{H,t}^{(\eta-1)/\eta}+(1-\gamma)^{1/\eta}c_{F,t}^{(\eta-1)/\eta}\right]^{\eta/(\eta-1)} \tag{2}
$$

Equation (3), p. 2418, aggregates sectoral varieties:

$$
c_{H,t}=\left[\int_0^1c_{H,t}(j)^{(\epsilon_p-1)/\epsilon_p}\,dj\right]^{\epsilon_p/(\epsilon_p-1)},\quad c_{N,t}=\left[\int_0^1c_{N,t}(j)^{(\epsilon_p-1)/\epsilon_p}\,dj\right]^{\epsilon_p/(\epsilon_p-1)} \tag{3}
$$

The labor agency objective and bundle are equation (5), p. 2419; its labor demand condition is equation (6), p. 2419:

$$
\max_{\{\ell_t^{h\iota}\}}W_t(\ell_t^r+\ell_t^o)-\int W_t^{r\iota}\ell_t^{r\iota}d\iota-\int W_t^{o\iota}\ell_t^{o\iota}d\iota,\quad \ell_t^h=\left[\int(\ell_t^{h\iota})^{(\epsilon_w-1)/\epsilon_w}d\iota\right]^{\epsilon_w/(\epsilon_w-1)} \tag{5}
$$

$$
\ell_t^{h\iota}=\left(\frac{W_t^{h\iota}}{W_t}\right)^{-\epsilon_w}\ell_t^h \tag{6}
$$

Household asset restrictions and the budget constraint are equations (7)-(8), pp. 2419-2420:

$$
\varsigma_{t+1}^{h\iota}\geq0,\quad B_{t+1}^{h\iota}\leq\bar{B}_{t+1}^h \tag{7}
$$

$$
(1+\tau_t^c)P_{c,t}c_t^{h\iota}+[1+i(B_t^{h\iota})]e^{-\mu}B_t^{h\iota}-B_{t+1}^{h\iota}+Q_t^\varsigma\varsigma_{t+1}^{h\iota}=\theta_t^{h\iota}\left[(1-\tau_t^\ell)\int W_t^{h\iota}\ell_t^{h\iota}d\iota-\int AC_{w,\iota t}^h d\iota+T_t^h+\frac{\mathbb{I}(h=o)(\Pi_t^b+T_t^l)}{1-\zeta}\right]+(Q_t^\varsigma+\Pi_t^f)\varsigma_t^{h\iota} \tag{8}
$$

Utilization-dependent depreciation and capital accumulation are equations (10)-(11), p. 2421:

$$
\delta_{H,t}=\bar{\delta}_H+\frac{\bar{\xi}_H}{\xi_H}(u_{H,t}^{\xi_H}-1),\quad\delta_{N,t}=\bar{\delta}_N+\frac{\bar{\xi}_N}{\xi_N}(u_{N,t}^{\xi_N}-1) \tag{10}
$$

$$
k_{t+1}=\{1-[s_t\delta_{H,t}+(1-s_t)\delta_{N,t}]\}e^{-\mu}k_t+x_t+g_t^x \tag{11}
$$

Equation (13), p. 2422, defines after-tax firm profits:

$$
\begin{aligned}
\Pi_t^f={}&(1-\tau_{H,t}^k)(P_{H,t}^fy_{H,t}-W_t\ell_{H,t}+\Pi_{H,t}^f)+(1-\tau_{N,t}^k)(P_{N,t}^fy_{N,t}-W_t\ell_{N,t}+\Pi_{N,t}^f)-AC_t^f+B_{t+1}^f-(1+\tau_t^x)P_{x,t}x_t\\
&-e^{-\mu}[(1+i_t)B_t^f-s_t\tau_{H,t}^k(\bar{\delta}_HQ_t^kk_t+i_tB_t^f)-(1-s_t)\tau_{N,t}^k(\bar{\delta}_NQ_t^kk_t+i_tB_t^f)]
\end{aligned} \tag{13}
$$

Retail demand equations (14)-(15), p. 2423, are:

$$
y_{H,t}(j)=\left(\frac{P_{H,t}(j)}{P_{H,t}}\right)^{-\epsilon_p}\left[\gamma\left(\frac{P_{T,t}}{P_{H,t}}\right)^{-\eta}(c_{T,t}+x_{T,t}+g_{T,t}^c+g_{T,t}^x)+(1-\gamma)\left(\frac{P_{F,t}}{P_{H,t}}\right)^{-\eta}\bar{a}_{T,t}\right] \tag{14}
$$

$$
y_{N,t}(j)=\left(\frac{P_{N,t}(j)}{P_{N,t}}\right)^{-\epsilon_p}(c_{N,t}+x_{N,t}+g_{N,t}^c+g_{N,t}^x) \tag{15}
$$

Bank net worth identities are equations (16) and (19), pp. 2424-2425:

$$
N_t=e^{\mu}(B_{t+1}^f+\zeta B_{t+1}^r-B_{t+1}^b) \tag{16}
$$

$$
N_{t+1}=(1-\delta_b)N_{t+1}^c+N_{t+1}^e+T_{W,t}^b+e^{\mu}T_{G,t}^b \tag{19}
$$

The government budget constraint is equation (20), p. 2425:

$$
\begin{aligned}
\bar{B}_{t+1}^g+T_t^g+\tau_t^cP_{c,t}[\zeta c_t^r+(1-\zeta)c_t^o]+\tau_t^xP_{x,t}x_t+\tau_t^\ell W_t[\zeta\ell_t^r+(1-\zeta)\ell_t^o]\\
+\sum_{i=H,N}\tau_{i,t}^k[P_{i,t}^fy_{i,t}-W_t\ell_{i,t}+\Pi_{i,t}^f-e^{-\mu}s_{i,t}(\bar{\delta}_iQ_t^kk_t+i_tB_t^f)]\\
=(1+\bar{r}_t)e^{-\mu}\bar{B}_t^g+T_{G,t}^b+P_{T,t}(g_{T,t}^c+g_{T,t}^x)+P_{N,t}(g_{N,t}^c+g_{N,t}^x)+\zeta T_t^r+(1-\zeta)T_t^o
\end{aligned} \tag{20}
$$

The external-demand measurement identity is equation (22), p. 2430:

$$
P_{H,t}y_{H,t}=\gamma\left(\frac{P_{T,t}}{P_{H,t}}\right)^{\eta-1}P_{T,t}(c_{T,t}+x_{T,t}+g_{T,t}^c+g_{T,t}^x)+(1-\gamma)\left(\frac{P_{F,t}}{P_{H,t}}\right)^{\eta-1}P_{F,t}\bar{a}_{T,t} \tag{22}
$$

Equation (24), p. 2444, defines the effective discount factor used to interpret idiosyncratic risk:

$$
\widetilde{\beta}_t^o=\beta^o e^{(1-1/\rho)\mu}\left(1-\pi_t^a+\pi_t^a e^{(\sigma-1)\phi^a}\right)^{(1/\rho-1)/(\sigma-1)}\left[(1-\pi_t^\theta)e^{-\sigma\log\left(\frac{1-\pi_t^\theta e^{-\phi^\theta}}{1-\pi_t^\theta}\right)}+\pi_t^\theta e^{\sigma\phi^\theta}\right] \tag{24}
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

**Bayesian structural estimation specification.** The annual sample is Greece,
1998-2017. The authors estimate 16 structural parameters using the 16-element
observable vector in equation (23), together with the measured exogenous process
vector in equation (21). They use Bayesian MCMC with measurement error on the
outcome observables only; measured shock paths enter without measurement error.
The reported uncertainty is posterior uncertainty, including 90% credible bands
in Figure 4 (p. 2441). This nonlinear structural system has no panel fixed effects
or conventional regression standard errors. Written out from the Bayesian estimation description on pp. 2437-2438, the
posterior target is proportional to the prior times the likelihood of the joint
outcome and measured-shock series conditional on structural parameters; the
measurement-error terms apply to the outcome vector only. The estimation sample
has 20 annual observations. The model uses a first-order approximation around
the steady state. The authors estimate the trade elasticity separately from the
traded-goods CES first-order conditions. Written out from p. 2435, the annual
first-difference regression is:

$$
\Delta\log\left(\frac{P_{H,t}a_{H,t}}{P_{F,t}a_{F,t}}\right)=\beta\,\Delta\log\left(\frac{P_{H,t}}{P_{F,t}}\right)+\varepsilon_t
$$

Here $$a_{H,t}$$ and $$a_{F,t}$$ are Greek expenditures on domestic and foreign
traded goods. The reported elasticity is eta = 1.65 with standard error 0.25,
estimated from annual Greek data over 1998-2017. It is a differenced time-series
specification, with no fixed effects; the paper reports the standard error but
does not describe a separate robust or clustered correction in the main text.

**Source decompositions.** The model is run once for the full sample with all
shocks; then each group $$g$$ of driving forces is held at its steady-state mean
while all others are fed in. Changes in endogenous variables across these runs
identify the contribution of each group. Tables 3 and 4 (pp. 2443, 2445)
report changes in log output, log labor, log capital, log TFP, log consumption,
log traded and nontraded prices, log wage, and net-exports-to-GDP for the boom
(1998-2007) and bust (2007-2017) periods respectively.

Written out from the shutdown procedure on pp. 2443-2445, for driving-force
group $$g$$ the baseline and shutdown paths satisfy:

$$
y_t^{\text{base}}=F(\theta,z_{1:T}),\quad y_t^{(-g)}=F(\theta,z_{1:T}^{(-g)}),\quad z_{g,t}^{(-g)}=\bar z_g,\quad \text{contribution}_{g,t}=y_t^{\text{base}}-y_t^{(-g)}
$$

**Structural-element checks.** Table 5 (p. 2447) holds the estimated shock
sequence fixed and changes one model feature at a time. Written out from the
paper's procedure, the comparison is $$y_t^{(m)}=F(\theta^{(m)},z_{1:T})$$,
where $$m$$ identifies baseline or an alternative utilization elasticity,
adjustment-cost parameter, idiosyncratic-risk parameter, banker exit rate, or
the model without the working-capital constraint. The sample and shocked paths
are the same as the baseline; there are no fixed effects or conventional
standard errors because the outcomes are generated by the structural model.

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

The associated revenue-cost multiplier is equation (26), p. 2449:

$$
M_f^r(h)=-\frac{\sum_{t=1}^{h}(1+\bar{i})^{1-t}\Delta[(1-\zeta)T_t^o]}{\sum_{t=1}^{h}(1+\bar{i})^{1-t}\Delta f_t} \tag{26}
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

Written out from Section V, each policy experiment compares
$$y_t^{(q)}=F(\hat\theta,z_{1:T},q)$$ with the baseline
$$y_t^{(0)}=F(\hat\theta,z_{1:T},q_0)$$, where fiscal instruments or bailout
flows are changed under scenario $$q$$ and the stated alternative budget
balancing instrument adjusts. These are annual structural counterfactuals over
the Greece 1998-2017 model path, not panel regressions, so there are no fixed
effects or regression standard errors.

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
