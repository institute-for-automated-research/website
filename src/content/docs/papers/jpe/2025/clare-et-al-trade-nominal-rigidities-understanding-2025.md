---
title: "Trade with Nominal Rigidities: Rodriguez-Clare, Ulate & Vasquez (2025)"
description: >-
  Distilled: A dynamic quantitative trade and migration model with downward
  nominal wage rigidity shows that the China shock generates temporary
  unemployment reducing U.S. aggregate welfare gains by roughly two-thirds
  (from 31 to 12 basis points) and turning 18 additional states from net
  gainers into net losers. Journal of Political Economy 2025, CC BY 4.0
  (accepted version). Eight core results with source locators, model
  equations, and calibration method.
sidebar:
  label: Rodriguez-Clare-Ulate-Vasquez 2025
  order: 1
tags: [paper-summary, international-trade, labor-markets, nominal-rigidities,
       china-shock, structural, open-access, cc-by, peer-reviewed, unreplicated,
       data:acs, data:bls, data:census, data:bea-io]
paper:
  authors: Andrés Rodríguez-Clare, Mauricio Ulate, Jose P. Vasquez
  authorList:
    - { family: "Rodríguez-Clare", given: Andrés, affiliation: "UC Berkeley and NBER" }
    - { family: Ulate, given: Mauricio, affiliation: "Federal Reserve Bank of San Francisco" }
    - { family: Vasquez, given: "Jose P.", orcid: "0009-0003-7880-8747", affiliation: "LSE and CEPR" }
  year: 2025
  venue: "Journal of Political Economy 134(2), February 2026, 626-664"
  venueShort: J. Polit. Econ. 2025
  doi: 10.1086/738344
  jel:
    codes: [F16, E24, F17]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Global trade and economics", "Labor market dynamics and wage inequality", "Fiscal Policy and Economic Growth"]
  dataAccess: public
  outcome:
    - aggregate U.S. welfare change from the China shock (basis points of real income)
    - unemployment-to-population ratio across U.S. states and commuting zones
    - NILF-to-population ratio across U.S. states and commuting zones
  outcomeClass: [macro-aggregates, social-welfare]
  license: "Accepted version CC BY 4.0 (LSE Research Online eprint 127629, cover page read this session); VOR paywalled (Journal of Political Economy)"
  licenseShort: CC BY 4.0 (AAM)
  access: open
  machineAccess: "open-access AAM at https://researchonline.lse.ac.uk/id/eprint/127629/ (confirmed 2026-06-26); VOR paywalled (JPE publisher site)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)
  resultsCount: 8
  citedByCount: 2
  methods:
    role: both
    contributes: dnwr-spatial-trade-model
    family: structural
    buildsFrom: [dynamic-general-equilibrium, instrumental-variables, method-of-simulated-moments]
    identification: structural
  contributionType: [new-theory, new-fact]
  mechanisms: [downward-nominal-wage-rigidity]
  scope:
    region: US
    period: 2000..2007
    frequency: annual
    dataType: [administrative, accounting]
    granularity: [aggregate, industry]
    n: "87 regions (50 U.S. states, 36 countries, rest of world), 15 sectors, annual 2000-2007"
  findings:
    - { ref: R1, outcome: "aggregate U.S. welfare change from the China shock", metric: basis-points, value: "12 bp with DNWR vs. 31 bp without DNWR (Table 1 col. 2, p. 26)", direction: negative, vsBenchmark: "flexible-wage counterfactual 31 bp; DNWR erases roughly 2/3 of the gain" }
    - { ref: R2, outcome: "aggregate U.S. unemployment rate", metric: pp-effect, value: "peaks at 1.25% in 2007, declines to near 0 by 2016 (Figure 3, p. 27)", direction: positive }
    - { ref: R3, outcome: "welfare change vs. China exposure across states", metric: basis-points, value: "-9.1 bp per $1,000/worker increase in China exposure (Table 1 row Welfare vs exposure, p. 26)", direction: negative }
    - { ref: R4, outcome: "number of U.S. states experiencing welfare losses", metric: level, value: "20 states lose with DNWR vs. 2 without DNWR; 30 gain vs. 48 without DNWR (p. 29, Figure 4)", direction: negative, vsBenchmark: "flexible-wage model: only 2 states lose" }
    - { ref: R5, outcome: "unemployment-to-population ratio differential by DNWR intensity", metric: pp-effect, value: "0.17 pp additional increase for high-DNWR CZs per $1,000 exposure in 2007 (Figure 2 panel a, p. 11)", direction: positive }
    - { ref: R6, outcome: "persistence of unemployment and NILF effects", metric: coefficient, value: "unemployment effect non-significant by 2011; NILF effect remains about half the 2007 level by 2020 (Figure 1 panels b-c, pp. 9-10)", direction: mixed }
    - { ref: R7, outcome: "aggregate U.S. welfare change (shock lasting to 2011)", metric: basis-points, value: "1.1 bp with longer shock vs. 12.6 bp baseline (Table 1 col. 3, p. 26)", direction: negative, vsBenchmark: "baseline 2001-2007 shock: 12.6 bp; gains nearly eliminated" }
    - { ref: R8, outcome: "sacrifice ratio (unemployment-inflation tradeoff)", metric: coefficient, value: "1.63 year-points of inflation per year-point of unemployment reduction around baseline (Figure 8, p. 37; §8.2, p. 36)", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Autor, Dorn, and Hanson (2013)", doi: '10.1257/aer.103.6.2121', relation: tests, note: "calibrates the model to match ADH cross-sectional regression coefficients on unemployment (+0.22 pp), NILF (+0.55 pp), and population (-0.05 pp) per $1,000 exposure" }
    - { cite: "Caliendo, Dvorkin, and Parro (2019)", doi: '10.3982/ecta13758', relation: extends, note: "extends CDP dynamic trade-migration model with DNWR and a nested-Gumbel labor supply with separate regional and sectoral mobility elasticities" }
    - { cite: "Schmitt-Grohe and Uribe (2016)", relation: builds-on, note: "adopts their downward nominal wage rigidity formulation; calibrated delta of 0.99 is close to their estimate" }
    - { cite: "Galle, Rodriguez-Clare, and Yi (2023)", relation: cites, note: "baseline welfare gain without DNWR (31 bp) is comparable to CDP and Galle et al. (2023); DNWR is the source of divergence" }
    - { cite: "Autor, Dorn, and Hanson (2021)", doi: '10.3386/w29401', relation: cites, note: "provides the extended dynamic regression evidence used to motivate and validate the model's persistence properties" }
  openQuestions:
    - "The model implies workers' employment status is independent across periods, inconsistent with search-and-matching evidence; introducing search frictions into a quantitative trade model with many regions and DNWR is flagged as a future direction (p. 38)."
    - "All workers in a given sector-region earn the same wage; incorporating skill heterogeneity to capture lower-wage workers' worse earnings trajectories (as in Autor et al. 2014 and Chetverikov et al. 2016) is noted as an extension (p. 38)."
    - "The model does not incorporate human capital depreciation, hysteresis, or agglomeration forces that could amplify persistent employment losses in heavily exposed regions (p. 38)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-26", role: extracted, note: "Full accepted-version PDF read (pp. 1-42 main text and online appendix cover, LSE Research Online eprint 127629). Eight results extracted with Table/Figure locators. Model equations (eqs. 3-19) transcribed from pp. 12-19. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: Figure 8 locator corrected from p. 36 to p. 37 (figure is on p. 37; 1.63 text is on p. 36), and colorful adjective 'stark' removed from TL;DR. All eight Core results rows confirmed against Table 1, Figures 1-4, and §8.2." }
  licenceVerification:
    - { source: "LSE Research Online eprint 127629 cover page (PDF read this session)", checked: "2026-06-26", by: "paper-distiller (claude-sonnet-4-6)", found: "Version: Accepted Version, Licence: Creative Commons: Attribution 4.0" }
    - { source: "Crossref REST API works/10.1086/738344", checked: "2026-06-26", by: "paper-distiller (claude-sonnet-4-6)", found: "published 2026-02-01, Journal of Political Economy vol 134 issue 2 pp. 626-664; no license block present in Crossref metadata for VOR" }
---

**What this is.** The paper's core results, the dynamic trade model with downward nominal wage rigidity, and the key equations for the production structure, labor supply, DNWR constraint, and welfare calculation: enough to know what it found and how, without reading all 42 pages. To replicate or extend it, read the full source at [doi:10.1086/738344](https://doi.org/10.1086/738344) or the [open-access accepted version](https://researchonline.lse.ac.uk/id/eprint/127629/).

## TL;DR

Rodríguez-Clare, Ulate, and Vasquez build a dynamic quantitative trade and migration model with downward nominal wage rigidity (DNWR) and use it to evaluate the China shock. DNWR prevents nominal wages from falling more than roughly 1% per year, generating temporary unemployment when a negative productivity shock demands a larger wage cut. Calibrated to match Autor, Dorn, and Hanson (2013) cross-sectional regressions, the model generates aggregate U.S. unemployment peaking at 1.25% in 2007, which then fades to near zero by 2016. DNWR reduces aggregate U.S. welfare gains from the China shock by roughly two-thirds (from 31 to 12 basis points). In the longer-shock variant (shock lasting until 2011), the welfare gains nearly disappear entirely.

## Core results

Magnitudes are as reported; locators point into the accepted-version PDF. Column (2) of Table 1 refers to the baseline specification.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | DNWR reduces aggregate U.S. welfare gain from the China shock by roughly **two-thirds** | Table 1 col. 2, p. 26; §6.3, p. 29 | 12 bp with DNWR vs. 31 bp without (flexible-wage delta=0 counterfactual) |
| R2 | Aggregate U.S. **unemployment peaks at 1.25%** in 2007 due to the China shock and declines to near zero by 2016 | Figure 3, p. 27 | Cumulative 6 year-points of unemployment over 2001-2010 (§8.2, p. 36) |
| R3 | More-exposed states face **lower welfare gains**: -9.1 bp per $1,000/worker China exposure | Table 1 row "Welfare vs exposure" col. 2, p. 26; §6.3, p. 28 | Coefficient on exposure = -0.091 pp |
| R4 | With DNWR: **20 states lose welfare**; without DNWR: only 2 states lose | Figure 4, p. 29; §6.3 | 30 states gain and 20 lose with DNWR; 48 gain and 2 lose without DNWR |
| R5 | CZs in **high-DNWR states experience 0.17 pp larger unemployment increase** per $1,000 exposure in 2007 | Figure 2 panel a, p. 11; §2.3, p. 11 | Coefficient beta\_{3h} at h=2007; large relative to ADH average of 0.22 pp |
| R6 | **Unemployment effect is transitory** (non-significant by 2011); NILF effect persists to 2020 | Figure 1 panels b-c, pp. 9-10; §2.2 | NILF effect in 2020 still about half the 2007 magnitude |
| R7 | **Longer shock (to 2011) nearly eliminates welfare gains**: 1.1 bp vs. 12.6 bp baseline | Table 1 col. 3 "Longer", p. 26; §7.1, pp. 30-32 | Mean welfare change 0.011 (col. 3) vs. 0.126 (col. 2) |
| R8 | **Sacrifice ratio** near baseline: 1.63 year-points of inflation per year-point of unemployment reduction | Figure 8, p. 37; §8.2, p. 36 | Ratio rises sharply (toward infinity) as unemployment is pushed 6 year-points below baseline |

**Overall (paper's conclusion).** The China shock is a positive terms-of-trade shock for the U.S. as a whole, but DNWR converts a large fraction of that gain into temporary unemployment, sharply reducing aggregate welfare. The baseline welfare gain without DNWR (31 bp) is quantitatively similar to models by Caliendo, Dvorkin, and Parro (2019) and Galle, Rodriguez-Clare, and Yi (2023); DNWR is the source of the large divergence between this paper's welfare estimates and those benchmarks. Under the baseline calibration the U.S. still gains on net; under the longer-shock calibration (which better matches the dynamic pattern of cross-sectional evidence) the gains nearly vanish. The results imply that nominal frictions and aggregate demand management are first-order considerations in evaluating trade shocks, not a side issue.

## Theory / model

The model is a dynamic, multi-sector, multi-region quantitative trade and migration model building on Caliendo, Dvorkin, and Parro (2019) (CDP), extended with two features: DNWR and a nested-Gumbel labor supply that allows different elasticities of sectoral versus regional mobility.

**Production and trade.** There are $$I$$ regions and $$S+1$$ sectors (S productive market sectors plus a home-production sector indexed 0). Each region $$j$$ produces in each sector $$s$$ using labor and intermediates under a Cobb-Douglas production function. With perfect competition and iceberg trade costs $$\tau_{ij,s,t} \geq 1$$, the price of region $$i$$'s good $$s$$ in region $$j$$ at time $$t$$ is (eq. 3, p. 13):

$$
p_{ij,s,t} = \tau_{ij,s,t} A_{i,s,t}^{-1} W_{i,s,t}^{\phi_{i,s}} \prod_k P_{i,k,t}^{\phi_{i,sk}} \tag{3}
$$

where $$A_{i,s,t}$$ is TFP, $$W_{i,s,t}$$ the wage, $$\phi_{i,s}$$ the labor share, $$\phi_{i,sk}$$ the intermediate-input share from sector $$k$$, and $$P_{i,k,t}$$ the sector-$$k$$ price index. The CES price index satisfies (eq. 4):

$$
P_{j,s,t}^{1-\sigma_s} = \sum_{i=1}^{I} p_{ij,s,t}^{1-\sigma_s} \tag{4}
$$

with elasticity of substitution $$\sigma_s > 1$$. Trade shares are (eq. 6):

$$
\lambda_{ij,s,t} = \frac{p_{ij,s,t}^{1-\sigma_s}}{\sum_{r=1}^{I} p_{rj,s,t}^{1-\sigma_s}} \tag{6}
$$

Labor demand equates wage bill to revenue share (eq. 7): $$W_{i,s,t} L_{i,s,t} = \phi_{i,s} R_{i,s,t}$$.

**Labor supply and migration.** Workers are forward-looking with discount factor $$\beta$$. An agent in region $$j$$, sector $$s$$ at time $$t$$ chooses a destination $$(i,k)$$ by solving (eq. in §3.2, p. 14):

$$
V_{j,s,t} = U_{j,s,t} + \max_{\{i,k\}} \left\{ \beta \mathbb{E}(V_{i,k,t+1}) - \varphi_{ji,sk} + \epsilon_{i,k,t} \right\}
$$

Idiosyncratic shocks $$\epsilon$$ follow a nested Gumbel distribution with nesting parameter $$\kappa > \nu > 0$$, allowing the elasticity of inter-regional mobility (governed by $$1/\kappa$$) to differ from the elasticity of inter-sectoral mobility (governed by $$1/\nu$$). This yields closed-form migration shares (eqs. 9-10, p. 14). The expected lifetime utility and labor-supply evolution satisfy eqs. (8) and (11) in the paper.

**DNWR.** Following Schmitt-Grohe and Uribe (2016), the key departure from CDP is that employment $$L_{i,k,t}$$ can fall below labor supply $$\ell_{i,k,t}$$:

$$
L_{i,k,t} \leq \ell_{i,k,t} \tag{16}
$$

Nominal wages in local currency units cannot fall by more than a factor $$\delta_k$$:

$$
W_{i,k,t} \geq \delta_{i,k} W_{i,k,t-1}, \qquad \delta_{i,k} \geq 0 \tag{17}
$$

Both constraints hold with complementary slackness (eq. 18, p. 16). In the baseline calibration, $$\delta_{i,k} = \delta \approx 0.99$$ for all U.S. manufacturing sectors, and $$\delta_{i,k} = 0$$ (flexible wages) elsewhere.

**Nominal anchor.** To close the nominal model the paper assumes world nominal GDP grows at a constant gross rate $$\gamma$$ (eq. 19, p. 17):

$$
\sum_{i=1}^{I} \sum_{s=1}^{S} W_{i,s,t} L_{i,s,t} = \gamma \sum_{i=1}^{I} \sum_{s=1}^{S} W_{i,s,t-1} L_{i,s,t-1} \tag{19}
$$

This anchor is set so that the ratio $$\delta/\gamma$$ determines the bite of DNWR; in the baseline $$\gamma = 1$$ so the full burden of adjustment falls on $$\delta$$.

**Welfare.** In the dynamic hat-algebra (ratio-form) representation, the welfare change for sector-region $$(j,s)$$ due to the China shock is (§3.6, p. 19):

$$
\mathcal{V}_{j,s} = \sum_{t=1}^{\infty} \beta^t \ln \left( \frac{\hat{\Delta}_{j,s,t} \hat{\omega}_{j,s,t}}{(\hat{\mu}_{jj,ss|j,t})^{\nu} (\hat{\mu}_{jj,s\#,t})^{\kappa}} \right)
$$

where hats denote counterfactual-to-baseline ratios, $$\hat{\Delta}_{j,s,t}$$ is the risk-adjustment factor, $$\hat{\omega}_{j,s,t}$$ is the real wage ratio, and $$\hat{\mu}$$ terms capture mobility gains. This is a permanent equivalent variation in real income.

## Method

**Dynamic hat algebra.** Following Dekle et al. (2007) and CDP, the model is solved in ratio form so that counterfactual exercises require only initial-period observables (revenues, trade shares, labor supply, migration matrices) and parameters $$(\delta, \nu, \kappa, \sigma_s, \alpha_{j,s}, \phi_{j,s}, \phi_{j,sk})$$, without data on TFP levels or wages per efficiency unit. This is the `dynamic-general-equilibrium` and `dynamic-hat-algebra` technique. The contraction-mapping algorithm adapted from Alvarez and Lucas (2007) handles the complementary-slackness conditions (eqs. 16-18) in Appendix B.4-B.7.

**Calibration.** Parameters $$(\delta, \nu, \kappa)$$ are calibrated by `method-of-simulated-moments`-style matching: the model is simulated at each candidate parameter vector and OLS regressions on simulated data are compared to three ADH-style targets (pp. 23-24):
- Unemployment-to-population effect: +0.22 pp per $1,000 exposure
- NILF-to-population effect: +0.55 pp per $1,000 exposure
- Population effect: -0.05 pp per $1,000 exposure

This yields $$\delta \approx 0.99$$, $$\nu = 0.54$$, $$\kappa = 6.55$$ (Table 1, p. 26). The China productivity shocks $$\{\hat{A}_{\text{China},s,t}\}$$ are calibrated to match U.S. import growth from China in each sector using a gravity regression and the other-high-income-country import instrument from ADH (§5, pp. 21-23).

**Welfare counterfactual.** For any set of parameters and shocks the equilibrium is solved forward from 2001 using dynamic hat algebra, and the welfare expression above is evaluated at discount rate $$\beta = 0.95$$. The counterfactual (with China shock) is compared to the baseline (no shock). For the no-DNWR comparison, $$\delta$$ is set to zero without recalibrating $$\nu$$ and $$\kappa$$.

## Empirical specifications

Two empirical exercises motivate and validate the model.

**ADH-style dynamic regressions (Section 2).** The paper estimates the following specification in the spirit of Autor, Dorn, and Hanson (2021), stacking the 1990-2000 and 2000+h changes for $$h = 6, \ldots, 20$$ (eq. 1, p. 8):

$$
\Delta Y_{i,t+h} = \alpha_t + \beta_{1h} \Delta IP^{cu}_{i,\tau} + X'_{i,t} \beta_2 + \varepsilon_{i,t+h} \tag{1}
$$

where $$\Delta Y_{i,t+h}$$ is the ten-year-equivalent change in outcome $$Y$$ for commuting zone $$i$$, $$\Delta IP^{cu}_{i,\tau}$$ is the growth in Chinese import competition in interval $$\tau$$, and $$X_{i,t}$$ are controls. The endogenous import exposure is instrumented with $$\Delta IP^{cu}_{0i,\tau}$$, the analogous import growth in other high-income countries (ADH's instrument). Standard errors are not clustered (OLS/2SLS on stacked CZ data with year fixed effects). Data source: ACS employment data and ADH replication files (§2.2, p. 8).

**DNWR heterogeneity regressions (Section 2.3).** To link DNWR intensity to the unemployment response, the paper augments eq. (1) with a state-level DNWR proxy and its interaction with exposure (eq. 2, p. 10):

$$
\Delta U_{i,t+h} = \gamma_t + \beta_{1h} \Delta IP^{cu}_{i,\tau} + \beta_{2h} \text{Rig}_{s(i),\tau} + \beta_{3h} \text{Rig}_{s(i),\tau} \times \Delta IP^{cu}_{i,\tau} + X'_{i,t} \beta_4 + \varepsilon_{i,t+h} \tag{2}
$$

where $$\text{Rig}_{s(i),\tau}$$ is a state-level dummy for high DNWR (below-median share of workers with negative wage changes, drawn from CPS data following Jo and Zubairy 2023). The interaction $$\text{Rig} \times \Delta IP^{cu}$$ is instrumented with $$\text{Rig} \times \Delta IP^{cu}_{0i,\tau}$$. Results: $$\hat{\beta}_{3h}$$ at $$h = 2007$$ equals 0.17 pp (Figure 2 panel a, p. 11), statistically significant and large relative to the average ADH effect.

**Model validation.** The calibrated model is used to generate simulated state-level changes in employment, NILF, unemployment, wages, and population. OLS regressions of simulated changes on the ADH exposure measure are then compared to the empirical estimates in column (1) of Table 1 (p. 25-26). The model matches the targeted moments by construction but also closely replicates the non-targeted manufacturing and non-manufacturing employment effects (-0.605 vs. ADH's -0.596 and -0.169 vs. ADH's -0.178, respectively).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| American Community Survey (ACS) | Employment (manufacturing and non-manufacturing), NILF, and unemployment data for commuting zones and states, 2000-2020 | [ACS](/wiki/datasets/acs/) |
| Bureau of Labor Statistics (BLS) sector-state employment | Initial labor-supply distribution and migration matrix construction for U.S. sector-state pairs | [BLS](/wiki/datasets/bls/) |
| U.S. Bureau of Economic Analysis regional accounts | Share of labor in production and value-added in gross output for U.S. states; scaling of state relative importance in U.S. total | [BEA I-O Accounts](/wiki/datasets/bea-io/) |
| U.S. Census Bureau trade statistics | Import and Export Merchandise Trade Statistics for state-country bilateral flows in manufacturing and agriculture | [Census public data](/wiki/datasets/census/) |
| World Input-Output Database (WIOD, 2013 release) | Bilateral trade flows, I-O coefficients, and production data for 36 countries; labor and intermediate input shares | no page yet |
| Commodity Flow Survey (CFS) | Intra-U.S. bilateral manufacturing trade flows between states | no page yet |
| IRS Statistics of Income (SOI) Tax Stats | State-to-state migration flows used to construct the initial migration matrix | no page yet |
| Current Population Survey (CPS) | State-level DNWR proxies (share of workers with negative year-over-year wage changes); intra-state migration and labor-flow data | no page yet |
| ADH replication files (Autor, Dorn, and Hanson 2013) | Controls $$X_{i,t}$$ for the cross-sectional regressions; CZ-level import exposure definition | no page yet |

Sample: 87 regions (50 U.S. states, 36 countries, rest of world), 15 sectors (12 manufacturing, services, agriculture, home production), annual, 2000-2007 baseline.

## When to read the full paper

Read the [original source](https://doi.org/10.1086/738344) if you are: (i) building or extending a quantitative trade model with DNWR or nominal frictions; (ii) studying welfare distributional effects of the China shock across U.S. states (Figure 4 and Appendix A.9 are the key outputs); (iii) calibrating mobility elasticities in a spatial labor market model (the nested-Gumbel structure in eqs. 8-11 with $$\nu \neq \kappa$$ is the key methodological contribution to labor supply); (iv) interested in the sacrifice ratio between unemployment and inflation in a trade context (Figure 8); or (v) replicating the ADH dynamic evidence (Figure 1 updates ADH to 2020). The model code and calibration details are in online Appendices B-C.

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 134(2), February 2026. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The accepted version is CC BY 4.0; the version of record is paywalled. Extract-only; PDF not hosted in this batch.

> **Attribution (CC BY 4.0, accepted version).** Rodríguez-Clare, Andrés, Mauricio Ulate, and Jose P. Vasquez.
> "Trade with Nominal Rigidities: Understanding the Unemployment and Welfare Effects of the China Shock."
> *Journal of Political Economy* 134, no. 2 (February 2026): 626-664.
> DOI: 10.1086/738344.
> Accepted version: LSE Research Online, eprint 127629, CC BY 4.0.
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
