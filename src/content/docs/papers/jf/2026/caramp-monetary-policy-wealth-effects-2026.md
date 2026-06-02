---
title: "Monetary Policy and Wealth Effects: Caramp & Silva (2026)"
description: >-
  Distilled: In a heterogeneous-agent New Keynesian model with rare disasters
  and heterogeneous beliefs (D-HANK), monetary contractions raise risk premia
  and redistribute wealth from optimists to pessimists; the resulting
  time-varying precautionary motive accounts for roughly 60% of the aggregate
  consumption response, the wealth effect for 30%, and the standard
  intertemporal-substitution channel for less than 10%. J. Finance 2026, CC BY
  4.0. Eight core results with source locators, datasets used, the model, and
  the method with its defining equations.
sidebar:
  label: Caramp-Silva 2026
  order: 1
tags: [paper-summary, monetary-policy, asset-pricing, macro, heterogeneous-agents,
       new-keynesian, rare-disasters, wealth-effects, risk-premia, open-access,
       cc-by, peer-reviewed, unreplicated, data:fred]
paper:
  authors: Nicolas Caramp, Dejanir H. Silva
  authorList:
    - { family: Caramp, given: Nicolas, affiliation: "University of California, Davis" }
    - { family: Silva, given: Dejanir H., affiliation: "Purdue University, Daniels School of Business" }
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 1011-1052
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.70021
  topics: ["Monetary Policy and Economic Impact", "Banking stability, regulation, efficiency"]
  dataAccess: public
  outcome:
    - aggregate consumption response to monetary shocks
    - term premium on long-term government bonds
    - corporate credit spread response to monetary shocks
    - equity price response to monetary shocks
  license: >-
    CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL
    http://creativecommons.org/licenses/by/4.0/, delay-in-days 0,
    start 2026-01-27; corroborated by artifact p. 1011 Creative Commons
    Attribution notice)
  licenseShort: CC BY 4.0
  access: open
  machineAccess: >-
    blocked-paywall (Wiley site wrapper; CC-BY VOR licence confirmed in
    Crossref DOI metadata 2026-06-01)
  redistribution: >-
    extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 8
  citedByCount: 0

  methods:
    role: both
    contributes: d-hank-model
    family: structural
    buildsFrom: [life-cycle-model, epstein-zin-weil, overlapping-generations,
                 value-function-iteration, gmm]

  scope:
    region: US
    assetClass: US equities, government bonds, corporate bonds
    period: 1962-01..2007-09
    frequency: quarterly

  relatesTo:
    - { cite: "Kaplan, Moll & Violante (2018)", doi: "10.1257/aer.20160042", relation: extends,
        note: "Adds aggregate disaster risk and heterogeneous beliefs to the HANK setting; Kaplan et al. find only a minor role for the standard ISE" }
    - { cite: "Caballero & Simsek (2020)", doi: "10.1093/qje/qjz029", relation: builds-on,
        note: "Risk-centric model of demand recessions; the D-HANK aggregation uses their heterogeneous-beliefs framework" }
    - { cite: "Kekre & Lenel (2022)", doi: "10.3982/ecta18672", relation: extends,
        note: "Paper extends the redistribution-via-risk-premia channel of Kekre and Lenel into a full New Keynesian model with analytical aggregation" }
    - { cite: "Bernanke & Kuttner (2005)", doi: "10.1111/j.1540-6261.2005.00760.x", relation: tests,
        note: "Model generates a 4.0% drop in stocks to a 100 bps shock, consistent with their empirical estimate" }
    - { cite: "Gertler & Karadi (2015)", doi: "10.1257/mac.20130329", relation: tests,
        note: "Model-implied corporate spread response (11 bps) matches their VAR-based estimate (6.5 bps, SE 3.1)" }
    - { cite: "Hanson & Stein (2015)", doi: "10.1016/j.jfineco.2014.11.001", relation: tests,
        note: "Forward-curve response to monetary shocks used as a calibration target; model matches long-horizon forward rates that standard models cannot" }
    - { cite: "Caramp & Silva (2023)", doi: "10.1016/j.red.2022.08.002", relation: builds-on,
        note: "Prior paper by the same authors decomposes output into ISE and wealth effect; the D-HANK adds aggregate risk and heterogeneity to that framework" }

  openQuestions:
    - >-
      The model lacks rich MPC heterogeneity present in state-of-the-art
      quantitative HANK models (e.g., hand-to-mouth agents with idiosyncratic
      income risk). The authors flag this as a limitation and note the methods
      can be extended to a full quantitative HANK with idiosyncratic risk
      (p. 1045, Conclusion).
    - >-
      The capital structure is stylized: introducing a richer model of firms
      with capital and investment could extend the pass-through analysis to
      nonfinancial corporations (p. 1045, Conclusion).

  replicationCode:
    status: available

  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-01, role: extracted,
        note: "Full text read (pp. 1011-1052, all figures, appendix and references); eight results extracted from the CC-BY PDF. Not human-verified. Not reproduced. Replication code is referenced in the paper but has not been run here." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; all eight result rows confirmed correct. One fix applied: NKPC equation locator corrected from 'eqs. 5-6, pp. 1020-1021' to 'eq. 11, p. 1023; eq. 6, p. 1020' (eq. 5 is the nonlinear NKPC; the linearized form shown is eq. 11). All model equations (eqs. 1-4, 6, 10, 17-19, 26, 29) verified term-by-term against the PDF; all match."

  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70021
      checked: 2026-06-01
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        license[0].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/,
        delay-in-days=0, start=2026-01-27; license[1] is Wiley TDM.

  rightsSignalConflict: false
---

**What this is.** The paper's core results, the D-HANK model, and the analytical
method (aggregation via a market-implied disaster probability) with the defining
equations: enough to understand what was found and how, without reading all
42 pages. To replicate or extend, read the full source at the
[original](https://doi.org/10.1111/jofi.70021).

## TL;DR

Caramp and Silva build D-HANK: an analytical heterogeneous-agent New Keynesian
model that adds rare aggregate disasters and heterogeneous beliefs about disaster
risk to the HANK setting of Kaplan, Moll, and Violante (2018), who find only a
minor role for the standard ISE. A contractionary monetary shock redistributes wealth from
optimistic to pessimistic savers, raising the market-implied disaster
probability and risk premia on stocks and bonds. This time-varying precautionary
motive accounts for roughly 60% of the aggregate consumption response on impact;
the aggregate wealth effect (via government bond revaluation) accounts for 30%;
and the standard intertemporal-substitution effect (ISE) accounts for less than
10%. The model also matches the forward-curve dynamics documented by Hanson and
Stein (2015), the equity premium, and the response of corporate spreads, all
without requiring a high elasticity of intertemporal substitution. The paper
derives conditions (Proposition 4) under which risk premia have no real effects
("risk-premium neutrality"), and shows that belief heterogeneity is necessary to
break this neutrality.

## Core results

Magnitudes and significance are as reported. Locators point into the source PDF
(pages are printed page numbers, beginning at 1011).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Time-varying precautionary motive (TVP) accounts for roughly 60% of the initial output response to a 100 bps monetary shock (estimated fiscal backing solution) | Figure 5, Panel A, p. 1039 | Output drops 1.15% on impact; TVP component accounts for ~60%; aggregate wealth effect (GE factor) accounts for ~30%; ISE accounts for less than 10% |
| R2 | Heterogeneous beliefs amplify the consumption response by more than 3x relative to the homogeneous-beliefs economy with disaster risk | Figure 6, Panel B, p. 1040 | Homogeneous-beliefs output drop: ~0.35%; heterogeneous-beliefs output drop: ~1.15% (more than three times larger) |
| R3 | Model generates a 100 bps monetary shock that raises the five-year yield by 32 bps and matches the full forward curve estimated by Hanson and Stein (2015) | Figure 3, Panel B, p. 1037 | Calibrated psi_lambda = 0.57 (half-life ~4 months); eps_lambda = 315 (33 bps change in disaster probability per 25 bps shock) |
| R4 | Model produces a 4.0% drop in equity prices in response to a 100 bps increase in interest rates, driven primarily by the risk premium rather than the discount-rate channel | Figure 4, Panel C, p. 1038 | Stock price decline: 4.0%; consistent with Bernanke and Kuttner (2005) point estimate |
| R5 | Corporate spread rises by 11 bps in response to a 100 bps shock; VAR estimate is 6.5 bps (SE 3.1) | Figure 4, Panel B, p. 1038 | Model spread response: 11 bps; excess bond premium (EBP) from VAR: 6.5 bps, SE 3.1 |
| R6 | Introducing long-term risky household debt raises the output drop by 48 bps (from ~1.15% to ~1.6%) relative to D-HANK without household debt; the TVP channel accounts for roughly half, the wealth effect for ~40% | Figure 7, Panels A-B, p. 1043 | Output drop with HH debt (estimated fiscal): ~1.6%; baseline without HH debt: ~1.15%; additional drop: ~48 bps |
| R7 | Standard RANK model with high EIS (sigma=1) generates a 1.1% output drop via wealth effect amplified by GE, but requires counterfactually large implied fiscal backing (more than 20x the empirical estimate) | Figure 8, Panels A-B, p. 1044 | RANK MSV sigma=1: output drops 1.1%; RANK MSV sigma=4: output drops 0.1% (about 11x smaller); D-HANK with estimated fiscal: ~1.15% at sigma=4 |
| R8 | Risk-premium neutrality (Proposition 4) holds exactly when fiscal backing is independent of risk premia; heterogeneous beliefs break this condition since belief differences create differential wealth effects even at the same real interest rate | Proposition 4, p. 1027; Figure 1, p. 1028 | Two economies with lambda_o < lambda_p: identical [y_t, pi_t, i_t] paths despite larger asset-price drop in the heterogeneous-beliefs economy; output difference = 0 by construction |

**Overall (paper's conclusion).** In the D-HANK model, the standard
intertemporal-substitution channel of textbook New Keynesian models plays only a
minor role. Aggregate risk combined with heterogeneous beliefs generates large
time-varying precautionary motives that dominate the transmission of monetary
shocks. The model can simultaneously match the equity premium, the term premium,
the forward-curve dynamics, and the real effects of monetary shocks at a low EIS,
a combination that RANK and standard HANK models cannot achieve.

## Theory / model

The D-HANK model is a continuous-time heterogeneous-agent New Keynesian model.
The economy is populated by three types: workers $$w$$, optimistic savers $$o$$,
and pessimistic savers $$p$$, with masses $$\mu_w$$, $$\mu_o$$, $$\mu_p$$ summing to 1.
Savers invest in short-term bonds, long-term government bonds, and corporate
equity. They have heterogeneous subjective beliefs $$\lambda_j$$ ($$j \in \{o,p\}$$)
about the Poisson arrival rate of aggregate disasters, with $$\lambda_o \leq \lambda_p$$.
The aggregation uses the heterogeneous-beliefs framework of the risk-centric model
of demand recessions in Caballero and Simsek (2020).

**Savers' problem.** Each saver $$j$$ maximizes (p. 1017):

$$
V_{j,t}(B_{j,t}) = \max E_j \!\left[ \int_t^{t^*} e^{-\int_t^z \rho_{j,u}\,du}
                    \frac{C_{j,z}^{1-\sigma}}{1-\sigma}\, dz
                    + e^{-\int_t^{t^*} \rho_{j,u}\,du} V^*_{j,t^*}(B^*_{j,t^*}) \right]
$$

subject to the flow budget constraint:

$$
dB_{j,t} = \left[(i_t - \pi_t)B_{j,t} + r_{L,t}B^L_{j,t} + r_{E,t}B^E_{j,t}
             + T_{j,t} - C_{j,t}\right]dt + \left[B^*_{j,t} - B_{j,t}\right]dN_t
$$

where $$i_t$$ is the nominal rate, $$\pi_t$$ is inflation, $$r_{L,t}$$ and $$r_{E,t}$$
are excess returns on long-term bonds and equities conditional on no disaster,
$$T_{j,t}$$ are transfers, and $$N_t$$ is the Poisson disaster process with
arrival rate $$\bar{\lambda}$$.

**Euler equations.** The Euler equation for short-term bonds (eq. 1, p. 1018):

$$
\dot{C}_{j,t} / C_{j,t} = \sigma^{-1}(i_t - \pi_t - \rho_{j,t})
                          + (\lambda_j / \sigma) \left[(C_{j,t}/C^*_{j,t})^{\sigma} - 1\right]
$$

The first term is the standard ISE; the second captures the precautionary
savings motive from disaster risk. The Euler equations for long-term bonds
and equities (eqs. 2-3, p. 1018):

$$
r_{L,t} = \lambda_j (C_{j,t}/C^*_{j,t})^{\sigma} \cdot (Q_{L,t} - Q^*_{L,t})/Q_{L,t}
$$

$$
r_{E,t} = \lambda_j (C_{j,t}/C^*_{j,t})^{\sigma} \cdot (Q_{E,t} - Q^*_{E,t})/Q_{E,t}
$$

where the risk premium equals the price of disaster risk times the quantity of
risk (the relative loss in asset value in the disaster state).

**Market-implied disaster probability (Proposition 1, p. 1019).** With
heterogeneous beliefs, the economy aggregates as if a representative saver holds
a CES-weighted belief:

$$
\lambda_t = \left[ \frac{\mu_o C_{o,t}}{\mu_o C_{o,t} + \mu_p C_{p,t}} \lambda_o^{1/\sigma}
           + \frac{\mu_p C_{p,t}}{\mu_o C_{o,t} + \mu_p C_{p,t}} \lambda_p^{1/\sigma} \right]^{\sigma}
$$

and $$\eta_t = e^{-\int_0^t \rho_{s,z}\,dz} C_{s,t}^{-\sigma}$$ is a valid SDF. This
aggregation result is the key: the heterogeneous economy behaves as a
representative-agent model with an endogenous, time-varying disaster probability
that responds to monetary shocks via wealth redistribution. This extends the
redistribution-via-risk-premia channel of Kekre and Lenel (2022) into a full New
Keynesian model with analytical aggregation.

**New Keynesian Phillips Curve and interest rate rule (eq. 11, p. 1023; eq. 6, p. 1020):**

$$
\dot{\pi}_t = (\rho_s + \lambda) \pi_t - \kappa y_t, \qquad \kappa = \phi^{-1}(\varepsilon-1)\phi Y
$$

$$
i_t = r_n + \phi_{\pi} \pi_t + u_t
$$

**Aggregate Euler equation (Proposition 2, eq. 10, p. 1023):**

$$
\dot{y}_t = -\bar{\sigma}^{-1}(i_t - \pi_t - r_n) + \chi_{p_d} p_{d,t}
$$

$$
\bar{\sigma}^{-1} = \frac{1 - \mu_w}{1 - \mu_w \chi_y} \sigma^{-1}
$$

$$
\chi_{p_d} = (\lambda/\bar{\sigma}) (C_s/C^*_s)^{\sigma}
$$

$$
p_{d,t} = \sigma(c_{s,t} - c^*_{s,t}) + \hat{\lambda}_t \qquad \text{(price of disaster risk)}
$$

The aggregate EIS is amplified by the cyclicality of income inequality $$\chi_y$$.
The extra term $$\chi_{p_d} p_{d,t}$$ connects aggregate risk and asset prices
to real output.

**Wealth effect decomposition (Proposition 6, eq. 26, p. 1033).** The prior paper
by the same authors, Caramp and Silva (2023), decomposes output into the ISE and
the wealth effect; the D-HANK adds aggregate risk and heterogeneity to that
framework. Output decomposes into three components:

$$
y_t = \bar{\sigma}^{-1} \hat{y}_{m,t}                                 \quad \text{(ISE)}
    + \chi_{\lambda} \hat{y}_{\lambda,t}                               \quad \text{(time-varying precautionary motive)}
    + (\rho - \omega) e^{\omega t} \Omega_0                            \quad \text{(GE factor} \times \text{aggregate wealth effect)}
$$

where $$\Omega_0$$ is the aggregate wealth effect at impact, $$\chi_{\lambda} =
\chi_{p_d} \varepsilon_{\lambda}$$, and the GE factor $$(\rho - \omega)$$ ensures that $$\int_0^{\infty}
e^{-\rho t}(\rho-\omega)e^{\omega t}\,dt = 1$$, so the wealth effect shifts output in
all periods by $$\rho \Omega_0$$, amplified in general equilibrium.

## Method

The paper contributes two methodological innovations that allow analytical
aggregation in a setting with heterogeneous portfolios.

**Approximate block-recursivity (Proposition 3, p. 1025).** The market-implied
disaster probability $$\hat{\lambda}_t$$ and relative net worth $$b_{p,t} - b_{o,t}$$
can be solved independently of output and inflation if the effect of savers'
aggregate consumption $$c_{s,t}$$ on risk premia is second-order (the term
$$r_k \sigma c_{s,t}$$ is $$O(\|i_t - r_n\|^2)$$). Under this approximation:

$$
\hat{\lambda}_t = e^{-\psi_{\lambda} t} \hat{\lambda}_0
$$

$$
\hat{\lambda}_0 = \varepsilon_{\lambda} (i_0 - r_n)
$$

where $$\varepsilon_{\lambda} \geq 0$$ and is strictly positive if and only if $$\lambda_p > \lambda_o$$.
The persistence parameter $$\psi_{\lambda} = \xi$$ (the speed of reversion in Uzawa
preferences). The initial price of risk depends linearly on the initial monetary
shock, with coefficient $$\varepsilon_{\lambda}$$ that captures the pass-through of nominal
rates to the disaster probability via wealth redistribution.

**Four-equation system.** Combining the aggregate Euler equation (10), the
NKPC (11), the Taylor rule (6), and the price of risk equation (19):

$$
p_{d,t} = \bar{\sigma} y_t + e^{-\psi_{\lambda} t} \hat{\lambda}_0
$$

the system has the same structure as the textbook three-equation NK model but
with an additional term connecting asset prices to aggregate dynamics. The
system is solved analogously to `buildsFrom: value-function-iteration` (matrix
eigendecomposition of the $$2 \times 2$$ system in $$[y_t, \pi_t]$$), with the unstable root
solved forward and the stable root backward.

**Wealth effect formula (eq. 29, p. 1035).** The aggregate wealth effect can
be written entirely in terms of policy variables:

$$
\Omega_0 = \frac{\rho - \omega}{(\rho - \omega)\chi_{\tau} + \bar{d}_G \kappa}
           \left[ \int_0^{\infty} e^{-\rho t} \Delta B^L_t (i_t - r_n + r_L \hat{\lambda}_t)\,dt
               - \bar{d}_G \int_0^{\infty} e^{-\rho t} \hat{\pi}_t\, dt
               - \int_0^{\infty} e^{-\rho t} \tau_t\, dt \right]
$$

where $$\Delta B^L_t = (1 - e^{-\psi_L t})\bar{d}_G$$ is the portfolio exposure to
long-term bonds, and $$\tau_t$$ is the fiscal backing (taxes on savers). This
expression shows that equity revaluations do not affect $$\Omega_0$$ (the term
$$r_E$$ drops out), only government bond revaluations do.

**Calibration method.** Parameters are disciplined by four moments: (i) natural
interest rate $$r_n = 1\%$$; (ii) equity premium of 7.0% in stationary equilibrium
(implies $$\sigma = 4$$); (iii) initial five-year yield response of 32 bps per 100
bps monetary shock (from a four-lag VAR on 1962-2007 US data); (iv) the entire
forward curve estimated by Hanson and Stein (2015), used to pin $$\varepsilon_{\lambda}$$ and
$$\psi_{\lambda}$$. The fiscal backing $$\tau_t$$ is estimated from the VAR impulse
responses for government revenues and expenditures.

## Empirical specifications

The paper is primarily a structural theory paper; the empirical content consists
of VAR-based calibration moments and model-vs-data comparisons, not standalone
reduced-form regressions.

**VAR for fiscal and interest-rate dynamics (Section III.A, p. 1036).** A
four-lag VAR is estimated on quarterly US data 1962:Q1 to 2007:Q3. Variables
(in order): real GDP per capita, CPI inflation, real consumption per capita,
real investment per capita, capacity utilization, hours worked per capita, real
wages, tax revenues/GDP, government expenditures/GDP, federal funds rate,
five-year constant maturity rate, real value of government debt/GDP. The
recursiveness assumption identifies the monetary shock: the federal funds rate
is ordered third to last, five-year rate and government debt last. Bootstrapped
68% confidence bands are reported (Figure 2). The VAR is used to estimate the
fiscal backing $$\tau_t$$ and the interest-rate impulse response that the model
then matches.

**Forward-curve calibration (Figures 3-4, pp. 1037-1038).** The response of
forward rates to a 25 bps change in the two-year yield around FOMC meetings is
taken from Hanson and Stein (2015). The model forward curve is derived by
solving the partial differential equation (PDE) for bond prices (Appendix S1,
Internet Appendix Section III) and compared to the data-based forward rates.
The model matches the long-horizon forward-rate response that standard models
cannot explain.

**Model-vs-data checks (Figures 4-7, pp. 1038-1043):**

- Corporate spread: model predicts 11 bps rise per 100 bps shock, matching the
  VAR-based estimate of Gertler and Karadi (2015) of 6.5 bps (SE 3.1 bps) for the
  excess bond premium. Untargeted.
- Equity price: model predicts 4.0% drop; point estimate from Bernanke and
  Kuttner (2005) is the comparison benchmark. Untargeted.
- Output decomposition: model output drop (~1.15%, estimated fiscal) is
  compared against Miranda-Agrippino and Ricco (2021) estimate of ~1.15%.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| US macroeconomic VAR data (FRED/BEA/BLS) | Calibration of fiscal backing and interest-rate dynamics via VAR; variables include real GDP, CPI, consumption, investment, capacity utilization, hours, wages, tax revenues, govt expenditures, federal funds rate, five-year CMT rate, real govt debt (1962:Q1-2007:Q3) | [FRED](/wiki/datasets/fred/) |
| Hanson & Stein (2015) forward-rate estimates | Calibration targets for the forward curve and persistence of risk premia | No page yet |
| Bernanke & Kuttner (2005) equity-price estimates | Untargeted model comparison for equity price response | No page yet |
| Gilchrist & Zakrajsek (2012) excess bond premium | Untargeted model comparison for corporate spread response | No page yet |

Sample for VAR: quarterly, 1962:Q1 to 2007:Q3. Model calibration uses
stationary equilibrium moments (equity premium 7.0%, credit spread 200 bps,
debt-to-income ratio 10%, duration 5 years).

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.70021) if you are:
building or extending HANK models with aggregate risk; studying the
transmission mechanism of monetary policy through asset prices; seeking the
proofs of the eight propositions and lemma (Appendix, pp. 1045-1049);
calibrating the term premium or credit spread to monetary shocks; or extending
the model to richer capital structures or full quantitative HANK settings.
The Internet Appendix contains the forward-curve PDE, additional robustness
(sticky wages, investment, wealthy hand-to-mouth households), and the mapping
between $$\varepsilon_{\lambda}$$ and underlying belief parameters.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2), April 2026.
This distillation was extracted by an LLM on 2026-06-01 and is **not
human-verified or independently reproduced**. The CC BY 4.0 licence permits
mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Caramp, Nicolas, and Dejanir H. Silva.
> "Monetary Policy and Wealth Effects: The Role of Risk and Heterogeneity."
> *The Journal of Finance* 81, no. 2 (April 2026): 1011-1052.
> DOI: 10.1111/jofi.70021. (c) 2026 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
