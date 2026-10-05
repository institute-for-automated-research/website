---
title: "The Reversal Interest Rate: Abadi, Brunnermeier & Koby (2023)"
description: >-
  Distilled: This paper theoretically characterizes the reversal interest rate,
  the policy rate below which further monetary easing becomes contractionary for
  bank lending. In a calibrated New Keynesian model with imperfectly competitive
  banks and net-worth constraints, the reversal rate is approximately -0.9 percent
  for aggregate investment and -1.4 percent for bank lending, calibrated to the
  euro area. American Economic Review 2023, paywalled. Sixteen core results with
  source locators, the model equations, and the calibration method.
sidebar:
  label: Abadi-Brunnermeier-Koby 2023
  order: 1
tags: [paper-summary, macro, monetary-policy, banking, interest-rates, new-keynesian,
       structural, peer-reviewed, unreplicated]
paper:
  authors: Joseph Abadi, Markus Brunnermeier, and Yann Koby
  authorList:
    - { family: Abadi, given: Joseph, affiliation: Federal Reserve Bank of Philadelphia }
    - { family: Brunnermeier, given: Markus, affiliation: Princeton University }
    - { family: Koby, given: Yann, affiliation: Brown University }
  year: 2023
  venue: American Economic Review 113(8), August 2023, 2084-2120
  venueShort: AER 2023
  doi: 10.1257/aer.20190150
  jel:
    codes: [E12, E32, E43, E44, E52, G21, L25]
    assignedBy: authors
    date: 2026-10-04
  topics: ["Economic Theory and Policy", "Economic theories and models", "Banking stability, regulation, efficiency"]
  dataAccess: public
  outcome:
    - bank credit supply response to monetary easing
    - aggregate investment response to monetary easing
    - reversal interest rate level
    - aggregate output response to monetary easing
    - bank net interest income and return on equity
    - bank-dependent and non-bank-dependent investment response to monetary easing
    - one-year real loan rate and leverage cost response to monetary easing
    - reversal rate sensitivity to the bank-dependent share of output
  outcomeClass: [credit-supply, macro-aggregates, bank-funding]
  license: "paywalled (no CC license[] block in Crossref DOI metadata; AEA standard publishing model, not open access)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA publisher site pubs.aeaweb.org, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 16
  citedByCount: 105
  methods:
    role: both
    contributes: reversal-interest-rate-model
    family: structural
    buildsFrom: [dynamic-general-equilibrium]
    identification: structural
  contributionType: [new-theory]
  mechanisms: [intermediary-constraint, market-power, liquidity]
  scope:
    region: euro area
    assetClass: bank loans, government bonds
    period: 2000..2014 (deposit-to-GDP calibration target)
    frequency: quarterly
    dataType: [other]
    granularity: [aggregate]
    n: "No estimation sample; calibrated structural model"
  findings:
    - ref: R1
      outcome: bank credit supply response to monetary easing
      metric: level
      value: "-1.4 percent (policy rate threshold on impact below which a 10bp cut reduces bank lending)"
      direction: negative
      vsBenchmark: "above -1.4% a rate cut expands bank lending; below it, further cuts contract lending (Figure 2 left, p. 2107)"
    - ref: R2
      outcome: aggregate investment response to monetary easing
      metric: level
      value: "-0.9 percent (policy rate threshold on impact below which a 10bp cut reduces aggregate investment)"
      direction: negative
      vsBenchmark: "above -0.9% a rate cut expands investment; below it, further cuts contract investment (Figure 2 right, p. 2107)"
    - ref: R3
      outcome: bank net interest income response to interest rate cut
      metric: basis-points
      value: "-6bp NII decline (as fraction of assets) per 10bp cut near the reversal rate; -1bp near the steady state"
      direction: negative
      vsBenchmark: "NII effect approximately 6x larger at the reversal rate than near the steady state (Figure 7 left, p. 2112)"
    - ref: R4
      outcome: bank credit supply response to monetary easing
      metric: pp-effect
      value: "More deposit-dependent banks' total loans grow roughly 2pp less than less deposit-dependent banks after a 30bp ECB rate cut in negative territory"
      direction: negative
      vsBenchmark: "within one standard deviation of Heider, Saidi, and Schepens (2019); their 13pp new-syndicated-lending growth difference over about a year implies roughly 2.6pp lower total-loan growth (Figure 7 right, p. 2112; text p. 2114)"
    - ref: R5
      outcome: aggregate investment and output response to forward guidance
      metric: level
      value: "Peak investment and output responses roughly half as large as in a frictionless model without bank net-worth constraints (8 quarters at -1%)"
      direction: negative
      vsBenchmark: "frictionless model generates approximately 2x the investment and output peaks; investment reverses by the 8th quarter in the benchmark (Figure 6, p. 2111)"
    - ref: R6
      outcome: reversal interest rate level
      metric: level
      value: "Reversal rate for aggregate investment ranges from approximately -1.8% to -0.5% across the sensitivity analysis"
      direction: negative
      vsBenchmark: "benchmark estimate of -0.9% lies near center of range; reversal always exists for a reasonable parameter range (Figure 8, p. 2115)"
    - { ref: R7, outcome: aggregate output response to monetary easing, metric: level, value: "Output's reversal threshold is lower than the bank-lending threshold; at an initial policy rate of -1%, its response to a further 10bp cut reverses after four quarters", direction: negative, vsBenchmark: "Output reverses later than bank lending and investment because non-bank-dependent funding costs and intertemporal substitution remain active (Figure 3, p. 2107; text pp. 2086, 2107-2108)" }
    - { ref: R8, outcome: bank net interest income and return on equity, metric: basis-points, value: "One-year ROE falls by 50bp near the reversal rate and rises by 5bp near the steady state", direction: mixed, vsBenchmark: "Same monetary shock has opposite profitability effects depending on initial rates (text p. 2112; Figure C.2, Online Appendix C.1)" }
    - { ref: R9, outcome: bank-dependent and non-bank-dependent investment response to monetary easing, metric: level, value: "Near the reversal rate, the marginal response is negative for bank-dependent investment and positive for non-bank-dependent investment; the latter response is larger than near steady state", direction: mixed, vsBenchmark: "Sectoral reallocation does not prevent aggregate investment from reversing (Figure 5, p. 2109)" }
    - { ref: R10, outcome: reversal interest rate level, metric: level, value: "With a discount-factor shock as the initial rate-lowering shock, the investment reversal rate is -0.6%", direction: negative, vsBenchmark: "Benchmark Taylor-rule initial shock estimate is -0.9% (text p. 2117)" }
    - { ref: R11, outcome: reversal interest rate level, metric: level, value: "With a firm-productivity shock as the initial rate-lowering shock, the investment reversal rate is -1.1%", direction: negative, vsBenchmark: "Benchmark Taylor-rule initial shock estimate is -0.9% (text p. 2117)" }
    - { ref: R14, outcome: bank credit supply response to monetary easing, metric: coefficient, value: "Before 2014, deposit-to-asset ratios were not associated with differences in bank lending growth", direction: none, vsBenchmark: "Placebo period before the ECB introduced negative rates (text p. 2113)" }
    - { ref: R15, outcome: one-year real loan rate and leverage cost response to monetary easing, metric: basis-points, value: "Near the reversal rate a further 10bp cut raises the one-year real loan rate and leverage costs; near steady state it lowers real loan rates and leverage costs are negligible", direction: mixed, vsBenchmark: "Figure 4 compares responses near the reversal rate with those near steady state (p. 2108)" }
    - { ref: R16, outcome: reversal rate sensitivity to the bank-dependent share of output, metric: level, value: "Across bank-dependent output shares from 0.45 to 0.65, the investment reversal rate rises with the bank-dependent share", direction: positive, vsBenchmark: "Reversal is lower where investment is less bank dependent (Figure 8 right, p. 2115)" }
  resultType: confirms
  relatesTo:
    - { cite: "Eggertsson and Woodford (2003)", doi: '10.3386/w9968', relation: builds-on, note: "forward guidance in liquidity traps; the reversal rate mechanism in this paper dampens the forward guidance puzzle that Eggertsson and Woodford (2003) highlight" }
    - { cite: "Eggertsson et al. (2019)", doi: '10.3386/w25416', relation: cites, note: "contemporaneous model with weakened monetary stimulus from deposit rate floor; mechanism differs (deposit floor vs. capital-constraint NII channel here)" }
    - { cite: "Ulate (2021)", relation: cites, note: "contemporaneous GE model finds reversal at approximately -2.2% via deposit unprofitability; this paper emphasizes the dynamic capital-constraint channel" }
    - { cite: "Brunnermeier and Sannikov (2014)", doi: '10.1257/aer.104.2.379', relation: builds-on, note: "theoretical foundation for intermediary profitability being key for credit supply and economic function" }
    - { cite: "Heider, Saidi, and Schepens (2019)", doi: '10.1093/rfs/hhz016', relation: tests, note: "DiD evidence that deposit-dependent banks cut lending more under negative ECB rates; model is calibrated and validated against this cross-bank pattern" }
    - { cite: "Klein (1971)", doi: '10.2307/1991279', relation: builds-on, note: "banking firm theory with market power in deposit and loan markets; the micro-foundation for the bank optimization block" }
  openQuestions:
    - "Long-term refinancing operations such as the ECB LTRO could alleviate some low-rate effects on bank margins; their quantitative importance for the reversal rate is left for future work (p. 2118)."
    - "Explicit modeling of risk and nonperforming loans, with the associated response in provisions, is omitted; noted as an important quantitative refinement (p. 2118)."
    - "Whether banks will permanently adjust to a lower interest rate environment by increasing maturity mismatch, and whether the competitive landscape or depositor behavior will shift, remain open (p. 2118)."
  replicationCode:
    url: "https://doi.org/10.3886/E188611V1"
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full text read (pp. 2084-2120); six results extracted from the PDF. Not human-verified. Not reproduced. Replication code is available at https://doi.org/10.3886/E188611V1 but has not been run here."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; all six core result rows and locators confirmed (R1 -1.4% p.2107, R2 -0.9% p.2107, R3 -6bp/-1bp p.2112, R4 -2pp p.2113-2114, R5 ~half frictionless p.2111, R6 -1.8% to -0.5% p.2115); all equations verified term-by-term (eqs 1,4,5,6,8,11,13,14,15,17,19); JEL codes corrected from [E52,G21,E43] to the full author-assigned set [E12,E32,E43,E44,E52,G21,L25] and assignedBy changed from claude-sonnet-4-6 to authors."
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full 37-page PDF; appended ten Core results rows (R7-R16), completed findings[] and scope, and added the missing numbered equations and structural specification from the PDF. These additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] All 16 Core results, equations and specifications, classification axes, findings, prose, and frontmatter checked against the PDF; corrected the marginal-cut sign, R4 comparison, R7 threshold description, R15 real-rate label, and metadata; locators resolved and cited DOIs verified." }
  licenceVerification:
    - source: Crossref REST API works/10.1257/aer.20190150
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "No license[] block present in Crossref metadata; single link entry (content-version: vor, URL: https://pubs.aeaweb.org/doi/pdf/10.1257/aer.20190150). AEA publishes AER under standard paywalled model with no CC license."
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the model it builds on (an infinite-horizon New Keynesian economy with imperfectly competitive banks and net-worth-constrained lending), and the key equations behind the reversal interest rate mechanism: enough to know what it found and how, without reading all 37 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1257/aer.20190150).

## TL;DR

The paper introduces and characterizes the reversal interest rate: the rate below which further monetary easing becomes contractionary for bank lending. The mechanism runs through two competing channels. An interest rate cut initially raises banks' capital gains on long-term bond holdings (the **capital gains channel**), boosting net worth and expanding lending. Simultaneously, lower rates compress banks' net interest income (the **NII channel**), reducing net worth over time. When banks face a binding capital constraint on lending, the NII effect eventually dominates, causing further cuts to shrink, rather than expand, credit supply. With persistent monetary shocks, the negative effects on bank lending become more pronounced one to two years ahead as the initial capital gains fade. In a New Keynesian model calibrated to the euro area, the reversal rate is approximately -0.9 percent for aggregate investment and -1.4 percent for bank lending on impact. The output reversal threshold is lower than the bank-lending threshold: at an initial rate of -1 percent, output's marginal response to a further cut turns negative after four quarters, while non-bank-dependent funding costs and intertemporal substitution remain active. Extending rate cuts for prolonged periods ("low-for-long" policies) makes the NII losses cumulate, so policies that initially stimulate lending can eventually turn contractionary. The model also dampens the forward guidance puzzle: in the calibrated economy, an 8-quarter promise to hold rates at -1 percent generates investment and output peaks roughly half as large as in a standard New Keynesian model without bank capital constraints, because agents anticipate the long-run decline in lending. Contemporaneous models by Eggertsson et al. (2019) and Ulate (2021) study related rate-reversal mechanisms through deposit rate floors and bank profitability, but differ in channel and quantitative implications. The role of intermediary net worth in credit supply builds on Brunnermeier and Sannikov (2014); the bank optimization block follows the monopolistic banking firm of Klein (1971).

## Core results

Magnitudes are as reported; `\*` is not applicable (no hypothesis tests in this calibration paper). Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Bank lending reversal rate on impact is approximately **-1.4 percent** in the euro area calibration | Figure 2 left, p. 2107; §III.C, p. 2106 | Below -1.4%, a further 10bp Taylor rule cut reduces bank lending at t=0; above -1.4%, the same cut expands lending |
| R2 | Aggregate investment reversal rate on impact is approximately **-0.9 percent**; higher than for bank lending because investment is forward-looking | Figure 2 right, p. 2107; §III.C, pp. 2106-2107 | Below -0.9%, a further 10bp cut reduces aggregate investment on impact; the investment reversal rate lies above the bank-lending reversal rate |
| R3 | A 10bp cut near the reversal rate reduces NII by approximately **6bp** (as a fraction of assets); near the steady state the same cut reduces NII by only about **1bp** | Figure 7 left, p. 2112; §IV.A, p. 2112 | NII effect is approximately 6x stronger at the reversal rate than near the steady state; consistent with Borio, Gambacorta, and Hoffmann (2017) |
| R4 | More deposit-dependent banks' total loans grow roughly **2pp less** than less deposit-dependent banks after a 30bp ECB rate cut in negative territory | Figure 7 right, p. 2112; §IV.A, pp. 2112-2114 | Model prediction lies within 1 SD of Heider, Saidi, and Schepens (2019); their 13pp new-syndicated-lending growth difference over about a year implies roughly 2.6pp lower total-loan growth for banks with a 15pp higher deposit-to-asset ratio |
| R5 | **Forward guidance** (8 quarters at -1%) generates investment and output peaks roughly **half as large** as in a frictionless model without bank net-worth constraints | Figure 6, p. 2111; §III.E, pp. 2110-2111 | Frictionless economy reaches investment peak of about 0.87 log points; benchmark model reaches about 0.5 log points; investment reverses by the 8th quarter in the benchmark |
| R6 | The reversal rate for aggregate investment ranges from approximately **-1.8 to -0.5 percent** across the parameter sensitivity analysis, always exists within the calibrated range | Figure 8, p. 2115; §IV.B, pp. 2114-2116 | -1.8% when capital constraints are tight (3.5bp loan rate sensitivity to 25bp capitalization rise); -0.5% when constraints are loose (10.5bp sensitivity); benchmark -0.9% is near center |
| R7 | Output's reversal threshold is lower than the bank-lending threshold; at an initial rate of -1%, output reverses after the initial stimulus with a four-quarter delay | Figure 3, p. 2107; text pp. 2086, 2107-2108 | The marginal output response to a further 10bp cut changes from positive to negative after four quarters; non-bank-dependent firms' funding costs and intertemporal substitution remain active |
| R8 | Bank returns on net worth move in opposite directions depending on the initial rate level | Text p. 2112; Figure C.2, Online Appendix C.1 | One-year ROE falls by 50bp near the reversal rate, but rises by 5bp near the steady state |
| R9 | The investment reversal is concentrated in bank-dependent firms, while non-bank-dependent investment remains stimulated | Figure 5, p. 2109; text pp. 2109-2110 | Near the reversal rate, marginal bank-dependent investment falls and non-bank-dependent investment rises more than near the steady state; aggregate investment still falls |
| R10 | A discount-factor shock as the initial rate-lowering shock gives a similar investment reversal threshold | Text p. 2117; §IV.D | Reversal rate is -0.6%, compared with -0.9% under the benchmark Taylor-rule shock |
| R11 | A firm-productivity shock as the initial rate-lowering shock also gives a similar threshold | Text p. 2117; §IV.D | Reversal rate is -1.1%, compared with -0.9% under the benchmark Taylor-rule shock |
| R12 | Prolonging a rate cut eventually pushes lending below its steady-state level when bank NII is insufficient to sustain lending | §II.E, pp. 2099-2100 | If condition (18) holds, there is a threshold duration after which lending remains below steady state over the interval specified in Proposition 5 |
| R13 | Treating a realistic share of bank bonds as held-to-maturity leaves the main reversal estimates similar | §IV.E, p. 2118 | Capital gains fall while coupon income rises, approximately offsetting each other; the paper reports similar reversal estimates |
| R14 | The deposit-dependence placebo is null before negative rates were introduced | Text p. 2113 | Before 2014, deposit-to-asset ratios were not associated with differences in bank lending growth |
| R15 | Near the reversal rate, a marginal policy cut raises banks' one-year real loan rate and leverage costs | Figure 4, p. 2108; text p. 2108 | Near the reversal rate the one-year real loan rate rises; near steady state it falls and leverage costs are negligible |
| R16 | The investment reversal rate rises as the bank-dependent share of output increases | Figure 8 right, p. 2115; §IV.B | Over bank-dependent output shares of 0.45-0.65, the reversal rate increases; it is lower when the economy relies less on bank-dependent investment |

**Overall (paper's conclusion).** The reversal interest rate exists under empirically grounded conditions on bank loan and deposit demand: net interest income falls when rates are sufficiently low, and bank lending is constrained by net worth. In the calibrated New Keynesian model for the euro area, the reversal rate lies close to -1 percent for aggregate investment. Its level depends primarily on the tightness of banks' capital constraints and the economy's reliance on bank credit. "Low-for-long" rate environments can initially appear stimulative while eventually becoming contractionary, and this dynamic dampens the power of forward guidance relative to standard New Keynesian models.

## Theory / model

The model is an infinite-horizon New Keynesian economy in discrete time, $$t \in \{0,1,2,\ldots\}$$. The main agents are: households; bank-dependent intermediate goods firms (fraction $$\xi = 0.998$$); non-bank-dependent intermediate goods firms (fraction $$1-\xi$$); a continuum of banks $$j \in [0,1]$$; capital goods producers; monopolistic retailers; and a central bank (Section I, pp. 2087-2092). Two key frictions distinguish the model from standard New Keynesian frameworks: banks have market power in setting deposit and loan rates, and bank lending is constrained by net worth.

**Households.** A household's lifetime utility is (equation 1, p. 2088):

$$
\sum_{t=0}^{\infty} \beta^t \left[ u(C_t, C_{t-1}, H_t) + \zeta \Phi(\mathcal{L}_t) \right] \tag{1}
$$

where $$C_t$$ is consumption, $$H_t$$ hours worked, $$\beta \in (0,1)$$ the discount factor, $$\mathcal{L}_t = \mathcal{L}(D_t, M_t)$$ aggregates real deposits $$D_t$$ and cash $$M_t$$, and $$\Phi$$ is utility from liquid savings with a satiation point $$\mathcal{L}^*$$. The parameter $$\zeta > 0$$ scales liquid-asset demand. The flow utility uses habit formation:

$$
u(C_t, C_{t-1}, H_t) = \frac{(C_t - hC_{t-1})^{1-\sigma}}{1-\sigma} - \chi \frac{H_t^{1+\varphi}}{1+\varphi}
$$

with $$h = 0.62$$, $$\sigma = 1$$ (IES), and $$\varphi = 2$$ (inverse Frisch elasticity; Table 1, p. 2102). Cash earns zero net return, so the presence of cash as a substitute for deposits implies that deposit demand becomes unresponsive to the policy rate when rates are sufficiently low (Lemma 1, p. 2096). This floors the bank's ability to pass rate cuts through to depositors, compressing margins.

**Bank balance sheet and net worth.** Banks extend loans $$L_t$$ and hold long-term government bonds $$B_t^L$$ at price $$Q_t^B$$, financed by deposits $$D_t$$ and net worth $$N_t$$. The balance sheet is (equation 4, p. 2089):

$$
L_t + Q_t^B B_t^L = D_t + N_t \tag{4}
$$

Long-term bonds mature with probability $$1/\tau$$ each period (expected maturity $$\tau$$; calibrated to 13.6 quarters to match average euro area bank bond holdings, p. 2104). The real bond price satisfies (equation 11, p. 2092):

$$
Q_t^B = \frac{1}{\tau} \sum_{s=0}^{\infty} \left(\prod_{r=0}^{s} \frac{1}{1+i_{t+r}}\right) \left(1 - \frac{1}{\tau}\right)^s, \qquad Q^{B*} = \frac{1}{1 + \tau i^*} \tag{11}
$$

Banks pay a fixed fraction $$\gamma$$ of net worth as dividends each period, so net worth accumulates according to (equation 5, p. 2090):

$$
N_{t+1} = (1-\gamma)\left[\frac{1+i_t}{1+\pi_{t+1}}Q_t^B B_t^L + \frac{1+i_t^L}{1+\pi_{t+1}}L_t(i_t^L) - \frac{1+i_t^D}{1+\pi_{t+1}}D_t(i_t^D, i_t) - \Psi^L(N_t, L_t) - \Psi^D(Q_t^B B_t^L, D_t)\right] \tag{5}
$$

where $$\Psi^L(N_t, L_t)$$ is the lending cost (homogeneous of degree one, decreasing in $$N_t$$, increasing in $$L_t$$) and $$\Psi^D$$ is the liquidity cost of deposit issuance. Lending is subject to a capital constraint $$L_t \leq \psi^L N_t$$: when this binds, credit supply is fully determined by net worth.

**Additional numbered model equations.** The household budget constraint and the bank-dependent firm's problem are (equations 2-3, pp. 2088-2089):

$$
C_t + D_t + M_t + B_t \leq \frac{W_t}{P_t}H_t + \frac{1+i_{t-1}}{1+\pi_t}B_{t-1} + \frac{1+i^D_{t-1}}{1+\pi_t}D_{t-1} + \frac{M_{t-1}}{1+\pi_t} + \Pi_t + T_t \tag{2}
$$

$$
\max_{K_t,H_t}\; \frac{P_t^I}{P_t} A^b(K_t^\alpha H_t^{1-\alpha})^\nu + (1-\delta)Q_t^{K,b}K_t - \frac{1+i^L_{t-1}}{1+\pi_t}Q_{t-1}^{K,b}K_t - \frac{W_t}{P_t}H_t \tag{3}
$$

The model revalues bank net worth at the initial shock using the marked-to-market value of long bonds (equation 7, p. 2091):

$$
N_0 = N^* + (1-\gamma)\left[\frac{(1-\frac{1}{\tau})Q_0^B + \frac{1}{1+\pi_0}\frac{1}{\tau}}{Q^{B*}} - \frac{1+i^*}{1+\pi^*}\right]Q^{B*}B^{L*} \tag{7}
$$

Monetary policy in the general model is given by equation 9 (p. 2092). In the partial-equilibrium analysis, the policy rate is held at the cut level until horizon $$T$$ and then returns to its natural rate (equation 10, p. 2092):

$$
i_t = i(Y_t,\pi_t,i_{t-1},\epsilon_t^{mp}) \tag{9}
$$

$$
i_t = \begin{cases} i, & 0 \leq t \leq T, \\ i^*, & t > T. \end{cases} \tag{10}
$$

The household portfolio problem used to derive steady-state deposit demand and the net-interest-income sensitivity to the policy rate are equations 12 and 16 (pp. 2093, 2096):

$$
\begin{aligned}
&\max_{B_t,D_t,M_t}\; \zeta\Phi(\mathcal{L}(D_t,M_t)) + \beta\Lambda^*[(1+i_t)B_t+(1+i_t^D)D_t+M_t] \\
&\text{subject to } B_t+D_t+M_t\leq S^*, \quad B_t,D_t,M_t\geq 0.
\end{aligned} \tag{12}
$$

$$
\frac{\partial \text{NII}(N_t,i_t)}{\partial i_t} = Q_t^B B_t^L + (i_t-i_t^D)\frac{\partial D^*(i_t^D,i_t)}{\partial i_t} \tag{16}
$$

The low-for-long condition is equation 18 (p. 2099):

$$
\text{NII}(N,i) \leq \frac{\gamma}{(1-\gamma)\psi^L}L^*, \quad \forall N \leq N^* \tag{18}
$$

**Capital gains and NII channels.** An interest rate cut at $$t=0$$ affects bank net worth through two channels. Define $$N_t(N_0, i)$$ as net worth at time $$t$$ when the initial net worth is $$N_0$$ and the policy rate is cut to $$i$$. The total effect decomposes as (equation 17, p. 2097):

$$
\frac{dN_t}{di} = \underbrace{\frac{\partial N_t}{\partial N_0}\frac{dN_0}{di}}_{\text{Capital gains channel}} + \underbrace{\frac{\partial N_t}{\partial i}}_{\text{NII channel}} \tag{17}
$$

The capital gains channel captures the revaluation of existing bond holdings ($$dN_0/di < 0$$: a cut raises $$Q_0^B$$, boosting initial net worth). Lemma 3 (p. 2097) establishes that this channel weakens as the horizon $$t \to \infty$$ or as initial bond holdings $$B^{L*} \to 0$$: once long-term bonds mature, the initial capital gain no longer propagates. The NII channel captures the persistent compression of profit margins. Lemma 2 (p. 2097) shows that for $$i_t \leq \underline{i}$$, a further cut unambiguously reduces NII since deposit demand is unresponsive to the policy rate (cash dominates bonds as outside option). Lemma 4 (p. 2097) shows the NII channel lowers net worth for sufficiently low rates and horizons $$t < T$$.

**Characterization of the reversal rate.** The reversal interest rate is defined formally in Definition 1 (p. 2093): the *time-t reversal rate* $$i_t^{RR}$$ is the highest interest rate such that bank lending $$L_t(i)$$ is increasing in $$i$$ for all $$i < i_t^{RR}$$. Proposition 1 (p. 2095) characterizes it: $$i$$ is $$i_t^{RR}$$ if (i) the capital constraint binds at all $$i' \leq i$$ and (ii) bank net worth is increasing in the interest rate, $$dN_t(i)/di > 0$$, for all $$i' < i$$. Proposition 2 (p. 2098) guarantees existence when initial bond holdings are small enough; Proposition 3 (p. 2098) guarantees existence when the horizon $$t$$ is long enough. Proposition 4 (p. 2098) establishes that $$i_{t+1}^{RR} \geq i_t^{RR}$$: the reversal rate is weakly increasing in the horizon, so an initially stimulative cut can become contractionary at longer horizons. Proposition 5 (p. 2099) formalizes the low-for-long result: for rates held below $$i^*$$ for long enough ($$T > \bar{T}$$), bank lending eventually falls below its steady-state level $$L^*$$.

## Method

**Solution method.** The quantitative model is solved using Dynare's full nonlinear algorithm rather than perturbation methods, since the model's binding capital constraints create large nonlinearities and non-monotonicities near the reversal rate (§III.A, p. 2101). The economy begins at its steady state; an unanticipated monetary policy shock is announced at $$t=0$$, and the economy evolves deterministically thereafter under perfect foresight.

**Bank's problem.** Banks maximize discounted dividends (equation 6, p. 2090):

$$
\max_{B_t^L,\, i_t^L,\, i_t^D} \sum_{t=0}^{\infty} \beta^t \Lambda_t \gamma N_t \quad \text{subject to (4) and (5)} \tag{6}
$$

where $$\Lambda_t$$ is the household's marginal utility of consumption. In the analytical section (Section II), holding loan and deposit demand curves at their steady-state values, the bank's problem reduces to maximizing net interest income period by period (equation 13, p. 2094):

$$
\text{NII}(N_t, i_t) = \max_{B_t^L,\, i_t^L,\, i_t^D}\; i_t Q_t^B B_t^L + i_t^L L^*(i_t^L) - i_t^D D^*(i_t^D, i_t) \tag{13}
$$

subject to the balance-sheet constraint (4), the capital constraint $$L_t \leq \psi^L N_t$$, and the liquidity constraint $$Q_t^B B_t^L \geq \psi^D D^*(i_t^D, i_t)$$.

**Optimal loan and deposit rates.** First-order conditions give (equations 14-15, p. 2094):

$$
i_t^L = i_t + \frac{1}{\varepsilon_t^L} + \lambda_t + \mu_t \tag{14}
$$

$$
i_t^D = i_t - \frac{1}{\varepsilon_t^D} + (1-\psi^D)\mu_t \tag{15}
$$

where $$\varepsilon_t^L > 0$$ and $$\varepsilon_t^D < 0$$ are the semielasticities of loan and deposit demand, $$\lambda_t \geq 0$$ is the Lagrange multiplier on the capital constraint, and $$\mu_t \geq 0$$ is the multiplier on the liquidity constraint. When constraints are slack, rates are set at the standard monopolistic markup/markdown over the policy rate. When the capital constraint binds, the loan spread widens, raising borrowing costs for bank-dependent firms and reducing their capital demand.

**Calibration.** The model is calibrated to the euro area; one period equals one quarter. Conventional DSGE parameters (Table 1, p. 2102) are set to standard values: Rotemberg price adjustment cost $$\theta = 70.7$$, capital share $$\alpha = 0.36$$, Taylor rule persistence $$\rho^{mp} = 0.93$$, and inflation coefficient $$\phi^\pi = 2.74$$ (from Coenen et al. 2019). Banking-sector parameters (Table 2, p. 2114) are calibrated to match euro area bank balance sheet moments: fraction of bank-dependent firms $$\xi = 0.998$$ (SME fraction in Eurostat); relative productivity $$A^b/A^{nb} = 0.43$$ (matching a 55.8% SME output share); loan elasticity $$\varepsilon^L = 200$$ (targeting a 2% loan spread from Freriks and Kakes 2021); deposit elasticity $$\varepsilon^D = -275$$ (targeting a 1% deposit spread from ECB MIR data); leverage cost $$\kappa^L = 0.017$$ (targeting 7bp loan rate increase per 25bp capitalization rise, from Macroeconomic Assessment Group 2010); bond maturity $$\tau = 13.6$$ quarters (matching average bank bond holding maturity from Hoffmann et al. 2019); and steady-state net worth-to-loan ratio $$N^*/L^* = 0.155$$ (from Altavilla, Boucinha, and Peydro 2018).

The monetary policy rule in the quantitative model is a Taylor rule with inertia (equation 19, p. 2105):

$$
\frac{1+i_t}{1+i^*} = \left(\frac{1+i_{t-1}}{1+i^*}\right)^{\rho^{mp}} \left(\frac{1+\pi_t}{1+\pi^*}\right)^{\phi^\pi(1-\rho^{mp})} \exp(\epsilon_t^{mp}) \tag{19}
$$

The benchmark results consider a single monetary shock $$\epsilon_0^{mp}$$ at $$t=0$$.

**Capital goods producers.** Capital goods producers solve (equation 8, p. 2091):

$$
\max_{I_{t+1}^z} \sum_{t=0}^{\infty} \beta^t \Lambda_t \left\{ Q_t^{K,z} I_t^z \left[1 - \Xi\!\left(\frac{I_{t+1}^z}{I_t^z}\right)\right] - I_{t+1}^z \right\} \tag{8}
$$

where $$\Xi(\cdot)$$ is a convex adjustment cost function (quadratic, $$\kappa^I = 5$$, implying an investment elasticity of 0.2 with respect to $$Q_t^{K,z}$$). This forward-looking structure explains why the reversal rate for aggregate investment (-0.9%) lies above the reversal rate for bank lending (-1.4%): investment internalizes the future deterioration of bank profits and declines before lending actually reverses.

## Empirical specifications

The quantitative analysis does not use panel regressions. Instead the paper compares **full nonlinear impulse response functions (IRFs)** across initial interest rate levels, using the Dynare solution (§III.A, p. 2101).

There are no regression fixed effects, standard errors, or econometric estimation sample in the paper's own quantitative exercise. The main specification solves the calibrated euro-area New Keynesian model under perfect foresight, with one-quarter periods and a single unanticipated Taylor-rule innovation; comparative IRFs vary the initial policy rate and add a further 10bp cut (§III.A-C, pp. 2101, 2106-2107). For bank-dependent capital demand, the authors write the asset-pricing condition (equation 20, p. 2109):

$$
Q_t^{K,b} = \frac{1}{R_t^L}[MPK_{t+1}+(1-\delta)Q_{t+1}^{K,b}] = \sum_{s=0}^{\infty}\frac{(1-\delta)^s}{\prod_{r=0}^{s}R_{t+r}^L}MPK_{t+s+1}, \qquad R_t^L \equiv \frac{1+i_t^L}{1+\pi_{t+1}} \tag{20}
$$

The main marginal-response construction can be written out from §III.C (pp. 2106-2107). An additional Taylor rule shock cuts the rate by 10 basis points:

$$
\Delta X_t^{marg}(i) = IRF_t(X\mid i-10\text{bp}) - IRF_t(X\mid i),
$$

where each IRF is the full nonlinear deterministic solution under perfect foresight, and $$i-10\text{bp}$$ denotes the lower initial policy rate after the additional cut. The plotted difference is evaluated for lending, investment, and other aggregates; the exercise does not estimate a regression coefficient or attach sampling errors.

**Main results construction (R1, R2).** For each initial policy rate $$i \in \{-1.5\%, -1\%, 0\%, 1\%, 2\%\}$$, the model first computes the economy's response to a Taylor rule shock that reduces the time-0 rate to $$i$$, then adds a marginal 10bp Taylor rule cut and computes a second IRF. The marginal IRF plotted in Figure 2 (p. 2107) is the difference between the response to the larger cut and the response to the initial cut. The reversal rate is where this difference changes sign: at approximately $$i = -1.4\%$$ for bank lending and $$i = -0.9\%$$ for aggregate investment.

**NII validation (R3).** The left panel of Figure 7 (p. 2112) plots the model's marginal NII response (as a fraction of steady-state assets) to a 10bp cut as a function of the initial policy rate, overlaid on the empirical estimate from Borio, Gambacorta, and Hoffmann (2017). The model predicts approximately -1bp near the steady state and approximately -6bp near the reversal rate, consistent in sign and order of magnitude with that study.

**DiD comparison (R4).** To compare model predictions with micro evidence, the paper introduces hypothetical banks calibrated to a deposit-to-asset ratio 15 percentage points below the benchmark. These banks coexist in equilibrium but do not affect aggregate dynamics. Their marginal loan rates and lending quantities are computed for a -30bp Taylor rule shock. The right panel of Figure 7 (p. 2112) plots the log difference in lending at impact as a function of the initial policy rate, comparing the model with the DiD estimate from Heider, Saidi, and Schepens (2019), who use euro area syndicated loan data over June 2014 to December 2015. Near the reversal rate, the model predicts roughly 2pp less total-loan growth for more deposit-dependent banks, within one standard deviation of the prior estimate. In their data, a 15 percentage point higher deposit-to-asset ratio was associated with 13 percentage points lower growth in new syndicated lending over about a year, equivalent to roughly 2.6pp lower growth in total loans given the sample's five-year average loan maturity (text p. 2114).

**Forward guidance (R5).** The central bank commits to holding the policy rate at -1 percent for $$T = 8$$ quarters, then reverts to the Taylor rule. The impulse responses are compared across the benchmark model and a frictionless version in which banks face no leverage costs ($$\kappa^L = 0$$). The frictionless economy mimics the dynamics of standard New Keynesian models: investment and output peaks are approximately twice those in the benchmark. In the benchmark, the anticipation of future bank-profit deterioration dampens the initial stimulus, and investment reverses by quarter 8 (Figure 6, p. 2111). Eggertsson and Woodford (2003) derive the standard forward guidance channel; the reversal rate mechanism here attenuates it.

**Sensitivity analysis (R6).** Figure 8 (p. 2115) varies $$\kappa^L$$ (the leverage cost parameter, reported as the response of loan rates to a 25bp capitalization target increase) between 3.5bp and 10.5bp and the bank-dependent output share $$A^b/A^{nb}$$ between 0.45 and 0.65. Across this range, the on-impact reversal rate for aggregate investment lies between -1.8 and -0.5 percent, remaining within a narrow band around the benchmark estimate of -0.9 percent.

**Delayed output reversal and sector split (R7, R9).** The introduction reports that output's reversal threshold is lower than the bank-lending threshold because non-bank-dependent firms' funding costs and intertemporal substitution remain active (p. 2086). Figure 3 (p. 2107) compares the marginal output response at steady state with the response when the initial rate is -1%; in the latter case output first rises and then reverses after a four-quarter lag (text p. 2108). Figure 5 (p. 2109) splits investment by firm funding type. Near the reversal rate, bank-dependent investment contracts, while non-bank-dependent investment continues to respond positively and more strongly than at steady state; the bank-dependent contraction dominates in aggregate.

**Returns on equity (R8).** One-year bank ROE is defined as the sum of dividends paid over the next four quarters plus ending net worth, divided by initial net worth (text p. 2112):

$$
ROE_{t,t+4}=\frac{Div_{t+1}+Div_{t+2}+Div_{t+3}+Div_{t+4}+N_{t+4}}{N_t}
$$

The model predicts a 50bp decrease in this return near the reversal rate but a 5bp increase near steady state (text p. 2112; Figure C.2, Online Appendix C.1).

**Alternative initial shocks (R10, R11).** The authors repeat the reversal exercise after a shock that increases household patience and after a firm-productivity shock. The investment reversal rate is -0.6% in the first case and -1.1% in the second, compared with -0.9% under the benchmark Taylor-rule shock (text p. 2117; §IV.D). These tests change the shock that moves the economy to low rates, then apply the same marginal additional-cut comparison.

**Held-to-maturity robustness (R13).** The extension assigns a realistic share of bonds to held-to-maturity accounting. It removes their mark-to-market gains from book equity while preserving higher coupon payments; the two changes approximately offset, leaving reversal estimates quite similar (text p. 2118; §IV.E; supporting calculation in Online Appendix C.4).

**Placebo and duration evidence (R12, R14).** Heider, Saidi, and Schepens (2019) find no association between deposit-to-asset ratios and bank lending-growth differences before 2014, then find lower lending growth for deposit-dependent banks during June 2014-December 2015 (text p. 2113). This pre-period null is the placebo evidence in R14. The paper's own low-for-long proposition uses inequality (18): when NII cannot sustain steady-state lending, extending the low-rate period eventually leaves bank lending below its steady-state level (Proposition 5, §II.E, pp. 2099-2100).

**Loan rates and leverage costs (R15).** Figure 4 (p. 2108) compares marginal responses to a 10bp Taylor-rule cut from steady state and from an initial rate of -1%. Near steady state, one-year loan rates fall and leverage costs change negligibly. Near the reversal rate, leverage costs increase and the one-year real loan rate rises, compressing bank-dependent firms' capital demand.

**Bank dependence and reversal rates (R16).** The right panel of Figure 8 (p. 2115) varies the bank-dependent share of output from 0.45 to 0.65. The aggregate-investment reversal rate rises with this share because a larger bank-dependent sector makes a given contraction in bank lending more consequential for total investment; the paper notes that the reversal is lower where investment is less bank dependent (§IV.B, pp. 2115-2116).

## Datasets used

This is a theoretical and calibration paper. The quantitative results come from a Dynare solution of the calibrated structural model rather than direct econometric estimation. Calibration targets are drawn from published statistics and the literature:

| Source | Role in paper | Wiki page |
|---|---|---|
| ECB MFI statistical data | Deposit-to-GDP ratio target for $$\mathcal{L}^*$$ (satiation point); equity issuance-to-asset ratio target for $$\hat{N}$$ | No page yet |
| Eurostat (Structural Business Statistics) | Fraction of SMEs in the firm universe ($$\xi = 0.998$$) and SME share of output (55.8%) | No page yet |
| Altavilla, Boucinha, and Peydro (2018) | Tier-1 capitalization ratio target: 15.5% (steady-state $$N^*/L^*$$) | No page yet |
| Hoffmann et al. (2019) | Average bank bond holding maturity: 3.4 years ($$\tau$$) and loan-to-bond ratio ($$L^*/B^{L*}$$) | No page yet |
| ECB MIR database (Freriks and Kakes 2021) | Loan spread of 2% and deposit spread of 1% in steady state | No page yet |

Sample: euro area, calibrated to the period surrounding the ECB's introduction of negative interest rates in 2014. Model period: one quarter.

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20190150) if you are: characterizing the effective lower bound on monetary policy when banking frictions are present; building or extending New Keynesian DSGE models with imperfectly competitive banks and balance-sheet constraints; studying the transmission of negative interest rate policy to bank lending and firm investment; evaluating the "low-for-long" forward guidance puzzle with financial intermediaries; or running the Dynare replication (code at [https://doi.org/10.3886/E188611V1](https://doi.org/10.3886/E188611V1)). The key tables and figures are: Figure 2 (reversal rates by initial rate level), Figure 6 (forward guidance dampening), Figure 7 (NII and DiD validation), and Figure 8 (sensitivity analysis).

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(8), 2023. Paywalled; no CC license. This distillation includes model-generated extraction dated 2026-10-04 and is **not human-verified or independently reproduced**.

> Abadi, Joseph, Markus Brunnermeier, and Yann Koby. "The Reversal Interest Rate." *American Economic Review* 113, no. 8 (August 2023): 2084-2120. DOI: 10.1257/aer.20190150. Extract-only; all rights reserved by the American Economic Association.
