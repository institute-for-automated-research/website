---
title: "Trade with Nominal Rigidities: Rodriguez-Clare, Ulate & Vasquez (2025)"
description: >-
  Distilled: A dynamic quantitative trade and migration model with downward
  nominal wage rigidity shows that the China shock generates temporary
  unemployment reducing U.S. aggregate welfare gains by roughly two-thirds
  (from 31 to 12 basis points) and turning 18 additional states from net
  gainers into net losers. Journal of Political Economy 2025, CC BY 4.0
  (accepted version). Fifteen core results with source locators, model
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
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Global trade and economics", "Labor market dynamics and wage inequality", "Fiscal Policy and Economic Growth"]
  dataAccess: public
  outcome:
    - aggregate U.S. welfare change from the China shock (basis points of real income)
    - unemployment-to-population ratio across U.S. states and commuting zones
    - NILF-to-population ratio across U.S. states and commuting zones
    - aggregate U.S. labor force participation
    - U.S. state manufacturing and non-manufacturing employment-to-population changes
    - U.S. state manufacturing and non-manufacturing wage changes
    - cross-state dispersion in employment and income-per-capita changes
    - aggregate U.S. unemployment under the longer China-shock specification
    - mean U.S. welfare change with interstate migration shut down
    - U.S. population response under equal sectoral and regional mobility elasticities
  outcomeClass: [macro-aggregates, labor-careers-health, social-welfare]
  license: "Accepted version CC BY 4.0 (LSE Research Online eprint 127629, cover page read this session); VOR paywalled (Journal of Political Economy)"
  licenseShort: CC BY 4.0 (AAM)
  access: open
  machineAccess: "open-access AAM at https://researchonline.lse.ac.uk/id/eprint/127629/ (confirmed 2026-06-26); VOR paywalled (JPE publisher site)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)
  resultsCount: 15
  citedByCount: 2
  methods:
    role: both
    contributes: dnwr-spatial-trade-model
    family: structural
    buildsFrom: [dynamic-general-equilibrium, instrumental-variables, method-of-simulated-moments]
    identification: instrument
  contributionType: [new-theory, new-fact]
  mechanisms: [downward-nominal-wage-rigidity]
  scope:
    region: US
    period: 2000..2007
    frequency: annual
    dataType: [market, accounting, administrative, survey]
    granularity: [aggregate, industry, individual]
    n: "87 regions (50 U.S. states, 36 countries, rest of world), 15 sectors, annual 2000-2007"
  findings:
    - { ref: R1, outcome: "aggregate U.S. welfare change from the China shock", metric: basis-points, value: "12 bp with DNWR vs. 31 bp without DNWR (Table 1 col. 2, p. 28)", direction: negative, vsBenchmark: "flexible-wage counterfactual 31 bp; DNWR erases roughly 2/3 of the gain" }
    - { ref: R2, outcome: "aggregate U.S. unemployment rate", metric: level, value: "peaks at 1.25% in 2007, declines to near 0 by 2016 (Figure 3, p. 29)", direction: positive }
    - { ref: R3, outcome: "welfare change vs. China exposure across states", metric: basis-points, value: "-9.1 bp per $1,000/worker increase in China exposure (Table 1 row Welfare vs exposure, p. 28)", direction: negative }
    - { ref: R4, outcome: "number of U.S. states experiencing welfare losses", metric: level, value: "20 states lose with DNWR vs. 2 without DNWR; 30 gain vs. 48 without DNWR (§6.3 text, p. 31)", direction: negative, vsBenchmark: "flexible-wage model: only 2 states lose" }
    - { ref: R5, outcome: "unemployment-to-population ratio differential by DNWR intensity", metric: pp-effect, value: "0.17 pp additional increase for high-DNWR CZs per $1,000 exposure in 2007 (Figure 2 panel a, p. 13)", direction: positive }
    - { ref: R6, outcome: "persistence of unemployment and NILF effects", metric: coefficient, value: "unemployment effect non-significant by 2011; NILF effect remains about half the 2007 level by 2020 (Figure 1 panels b-c, pp. 11-12)", direction: mixed }
    - { ref: R7, outcome: "aggregate U.S. welfare change (shock lasting to 2011)", metric: basis-points, value: "1.1 bp with longer shock vs. 12.6 bp baseline (Table 1 col. 3, p. 28)", direction: negative, vsBenchmark: "baseline 2001-2007 shock: 12.6 bp; gains nearly eliminated" }
    - { ref: R8, outcome: "sacrifice ratio (unemployment-inflation tradeoff)", metric: level, value: "1.63 year-points of inflation per year-point of unemployment reduction around baseline (Figure 8, p. 39; §8.2, p. 38)", direction: positive }
    - { ref: R9, outcome: "aggregate U.S. labor force participation", metric: level, value: "falls by up to 1.2% in 2007 and rises to roughly 1% above its initial level by 2015 (text p. 30)", direction: mixed }
    - { ref: R10, outcome: "U.S. state manufacturing and non-manufacturing employment-to-population changes", metric: coefficient, value: "-0.605 pp manufacturing and -0.169 pp non-manufacturing per $1,000 exposure, versus ADH -0.596 and -0.178 (Table 1 cols. 1-2, p. 28)", direction: negative, vsBenchmark: "Model coefficients are close to the ADH estimates despite not being targeted in calibration" }
    - { ref: R11, outcome: "U.S. state manufacturing and non-manufacturing wage changes", metric: coefficient, value: "+0.023% manufacturing and -1.177% non-manufacturing per $1,000 exposure (Table 1 col. 2, p. 28)", direction: mixed, vsBenchmark: "ADH non-manufacturing wage coefficient is -0.761%; model manufacturing wage is nearly unchanged" }
    - { ref: R12, outcome: "cross-state dispersion in employment and income-per-capita changes", metric: level, value: "standard deviation 1.11 for employment-to-population change vs. 1.18 in data; 2.1 for income per capita vs. 1.9 in data (text pp. 28-29)", direction: mixed }
    - { ref: R13, outcome: "aggregate U.S. unemployment under the longer China-shock specification", metric: level, value: "peaks at 1.75%, versus 1.25% in the baseline (Figure 7, p. 35; text p. 34)", direction: positive, vsBenchmark: "baseline shock ending 2007 peaks at 1.25%" }
    - { ref: R14, outcome: "mean U.S. welfare change with migration across states shut down", metric: basis-points, value: "13.8 bp with no interstate migration, versus 12.6 bp in the baseline (Table 1 cols. 4 and 2, p. 28; text p. 36)", direction: positive, vsBenchmark: "baseline mean welfare change is 12.6 bp" }
    - { ref: R15, outcome: "U.S. population response under equal sectoral and regional mobility elasticities", metric: coefficient, value: "-0.211% per $1,000 exposure when nu=kappa, versus -0.050% in baseline and ADH (Table 1 col. 5, p. 28; text p. 36)", direction: negative, vsBenchmark: "restricted model population response is more than four times the baseline and ADH response" }
  resultType: confirms
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
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full 84-page accepted-version PDF. Added seven findings and equation/specification coverage from the main text; these additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Full audit against the accepted-version PDF; corrected Table 1 PDF page locators, figure/text locators, and classification/result coding. All 15 Core results rows and formal specifications checked." }
  licenceVerification:
    - { source: "LSE Research Online eprint 127629 cover page (PDF read this session)", checked: "2026-06-26", by: "paper-distiller (claude-sonnet-4-6)", found: "Version: Accepted Version, Licence: Creative Commons: Attribution 4.0" }
    - { source: "Crossref REST API works/10.1086/738344", checked: "2026-06-26", by: "paper-distiller (claude-sonnet-4-6)", found: "published 2026-02-01, Journal of Political Economy vol 134 issue 2 pp. 626-664; no license block present in Crossref metadata for VOR" }
---

**What this is.** The paper's core results, the dynamic trade model with downward nominal wage rigidity, and the key equations for the production structure, labor supply, DNWR constraint, and welfare calculation: enough to know what it found and how, without reading all 42 pages. To replicate or extend it, read the full source at [doi:10.1086/738344](https://doi.org/10.1086/738344) or the [open-access accepted version](https://researchonline.lse.ac.uk/id/eprint/127629/).

## TL;DR

Rodríguez-Clare, Ulate, and Vasquez build a dynamic quantitative trade and migration model with downward nominal wage rigidity (DNWR) and use it to evaluate the China shock. In U.S. manufacturing, DNWR prevents nominal wages from falling more than roughly 1% per year, generating temporary unemployment when the productivity gain in China requires a larger relative wage adjustment than the model permits. Calibrated to match Autor, Dorn, and Hanson (2013) cross-sectional regressions, the model generates aggregate U.S. unemployment peaking at 1.25% in 2007, which then fades to near zero by 2016. DNWR reduces aggregate U.S. welfare gains from the China shock by roughly two-thirds (from 31 to 12 basis points). In the longer-shock variant (shock lasting until 2011), the welfare gains nearly disappear entirely.

## Core results

Magnitudes are as reported; core-results table and figure locators use PDF page numbers, including repository cover pages. Formal-section locators use article pagination. Column (2) of Table 1 refers to the baseline specification.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | DNWR reduces aggregate U.S. welfare gain from the China shock by roughly **two-thirds** | Table 1 col. 2, p. 28; §6.3, p. 31 | 12 bp with DNWR vs. 31 bp without (flexible-wage delta=0 counterfactual) |
| R2 | Aggregate U.S. **unemployment peaks at 1.25%** in 2007 due to the China shock and declines to near zero by 2016 | Figure 3, p. 29 | Cumulative 6 year-points of unemployment over 2001-2010 (§8.2, p. 38) |
| R3 | More-exposed states face **lower welfare gains**: -9.1 bp per $1,000/worker China exposure | Table 1 row "Welfare vs exposure" col. 2, p. 28; §6.3, p. 30 | Coefficient on exposure = -0.091 pp |
| R4 | With DNWR: **20 states lose welfare**; without DNWR: only 2 states lose | §6.3 text, p. 31; Figure 4, p. 31 | 30 states gain and 20 lose with DNWR; 48 gain and 2 lose without DNWR |
| R5 | CZs in **high-DNWR states experience 0.17 pp larger unemployment increase** per $1,000 exposure in 2007 | Figure 2 panel a, p. 13; §2.3, p. 13 | Coefficient beta\_{3h} at h=2007; large relative to ADH average of 0.22 pp |
| R6 | **Unemployment effect is transitory** (non-significant by 2011); NILF effect persists to 2020 | Figure 1 panels b-c, pp. 11-12; §2.2, p. 12 | NILF effect in 2020 still about half the 2007 magnitude |
| R7 | **Longer shock (to 2011) nearly eliminates welfare gains**: 1.1 bp vs. 12.6 bp baseline | Table 1 col. 3 "Longer", p. 28; §7.1, pp. 32-34 | Mean welfare change 0.011 (col. 3) vs. 0.126 (col. 2) |
| R8 | **Sacrifice ratio** near baseline: 1.63 year-points of inflation per year-point of unemployment reduction | Figure 8, p. 39; §8.2, p. 38 | Ratio rises (toward infinity) as unemployment is pushed 6 year-points below baseline |
| R9 | Aggregate labor force participation falls during adjustment, then reverses | text p. 30 | Falls by up to 1.2% in 2007; by 2015 it is roughly 1% above its pre-shock level |
| R10 | Model reproduces the untargeted employment response by exposure | Table 1 cols. 1-2, p. 28; §6.1, pp. 27-28 | Manufacturing: -0.605 pp vs. ADH -0.596; non-manufacturing: -0.169 pp vs. -0.178 |
| R11 | Model wage effects differ by sector | Table 1 cols. 1-2, p. 28; §6.1, pp. 27-28 | Manufacturing wages +0.023%; non-manufacturing wages -1.177% per $1,000 exposure (ADH non-manufacturing: -0.761%) |
| R12 | Model matches cross-state dispersion in employment and income changes | text pp. 28-29 | Employment-change s.d. 1.11 vs. 1.18 in data; income-per-capita-change s.d. 2.1 vs. 1.9 |
| R13 | Longer shock produces a higher aggregate unemployment peak | Figure 7, p. 35; text p. 34 | 1.75% under shock through 2011 vs. 1.25% in baseline |
| R14 | Welfare gains remain similar when interstate migration is shut down | Table 1 cols. 2 and 4, p. 28; §7.2, p. 36 | Mean welfare change 13.8 bp without interstate migration vs. 12.6 bp baseline |
| R15 | Equal mobility elasticities produce a much larger population response | Table 1 cols. 2 and 5, p. 28; §7.2, p. 36 | Population coefficient -0.211% vs. -0.050% in baseline and ADH, over four times larger |

**Overall (paper's conclusion).** The China shock is a positive terms-of-trade shock for the U.S. as a whole, but DNWR converts a large fraction of that gain into temporary unemployment, reducing aggregate welfare. The baseline welfare gain without DNWR (31 bp) is quantitatively similar to models by Caliendo, Dvorkin, and Parro (2019) and Galle, Rodriguez-Clare, and Yi (2023); DNWR is the source of the large divergence between this paper's welfare estimates and those benchmarks. Under the baseline calibration the U.S. still gains on net; under the longer-shock calibration, which better matches the dynamic pattern of cross-sectional evidence, the gains nearly vanish. The paper argues that nominal frictions materially affect trade-shock welfare estimates, while noting that its simplified nominal anchor limits policy conclusions.

## Theory / model

The model is a dynamic, multi-sector, multi-region quantitative trade and migration model building on Caliendo, Dvorkin, and Parro (2019) (CDP), extended with two features: DNWR and a nested-Gumbel labor supply that allows different elasticities of sectoral versus regional mobility.

**Complete numbered model system.** The main-text model's numbered equations cover production and trade, labor supply, wage rigidity, and the China exposure measure. Equations (3), (4), (6), and (7) appear below in the production discussion; the remaining equations are given here. Locators refer to the accepted-version article pagination.

The market-clearing condition for sector s and region i is Eq. (5), p. 13:

$$
R_{i,s,t}=\sum_{j=1}^{I}\lambda_{ij,s,t}\left[\alpha_{j,s}\left(\sum_{k=1}^{S}W_{j,k,t}L_{j,k,t}+D_{j,t}\right)+\sum_{k=1}^{S}\phi_{j,sk}R_{j,k,t}\right] \tag{5}
$$

The forward-looking worker's expected value is Eq. (8), p. 14:

$$
V_{j,s,t}=U_{j,s,t}+\kappa\ln\left(\sum_{i=1}^{I}\left[\sum_{k=0}^{S}\exp\left(\frac{\beta V_{i,k,t+1}-\varphi_{ji,sk}}{\nu}\right)\right]^{\nu/\kappa}\right)+\gamma\kappa \tag{8}
$$

The conditional sector choice and region choice shares are Eqs. (9)-(10), p. 14:

$$
\mu_{ji,sk|i,t}=\frac{\exp\left((\beta V_{i,k,t+1}-\varphi_{ji,sk})/\nu\right)}{\sum_{h=0}^{S}\exp\left((\beta V_{i,h,t+1}-\varphi_{ji,sh})/\nu\right)} \tag{9}
$$

$$
\mu_{ji,s\#,t}=\frac{\left[\sum_{h=0}^{S}\exp\left((\beta V_{i,h,t+1}-\varphi_{ji,sh})/\nu\right)\right]^{\nu/\kappa}}{\sum_{m=1}^{I}\left[\sum_{h=0}^{S}\exp\left((\beta V_{m,h,t+1}-\varphi_{jm,sh})/\nu\right)\right]^{\nu/\kappa}} \tag{10}
$$

The combined transition share and labor-supply evolution (Eq. (11), p. 14), and aggregate price index (Eq. (12), p. 15), are:

$$
\mu_{ji,sk,t}=\mu_{ji,sk|i,t}\mu_{ji,s\#,t},\qquad \ell_{i,k,t+1}=\sum_{j=1}^{I}\sum_{s=0}^{S}\mu_{ji,sk,t}\ell_{j,s,t} \tag{11}
$$

$$
P_{i,t}=\prod_{s=1}^{S}P_{i,s,t}^{\alpha_{i,s}} \tag{12}
$$

With unemployment risk, flow utility, expected real income, and the risk adjustment factor are Eqs. (13)-(15), p. 15:

$$
U_{i,s,t}=\ln(\Delta_{i,s,t}\omega_{i,s,t}) \tag{13}
$$

$$
\omega_{i,s,t}=\pi_{i,s,t}\frac{W_{i,s,t}}{P_{i,t}} \tag{14}
$$

$$
\Delta_{i,s,t}=z^{1-\pi_{i,s,t}}\left(\frac{1-z(1-\pi_{i,s,t})}{\pi_{i,s,t}}\right)^{\pi_{i,s,t}} \tag{15}
$$

The labor-demand shortfall, downward wage constraint, complementary slackness, nominal anchor, and exposure measure are Eqs. (16)-(20). Eq. (16) is on p. 16, Eqs. (17)-(18) on p. 17, Eq. (19) on p. 17, and Eq. (20) on p. 23:

$$
L_{i,k,t}\leq\ell_{i,k,t} \tag{16}
$$

$$
W_{i,k,t}\geq\delta_{i,k}W_{i,k,t-1},\qquad\delta_{i,k}\geq0 \tag{17}
$$

$$
(\ell_{i,k,t}-L_{i,k,t})(W_{i,k,t}-\delta_{i,k}W_{i,k,t-1})=0 \tag{18}
$$

$$
\sum_{i=1}^{I}\sum_{s=1}^{S}W_{i,s,t}L_{i,s,t}=\gamma\sum_{i=1}^{I}\sum_{s=1}^{S}W_{i,s,t-1}L_{i,s,t-1} \tag{19}
$$

$$
\text{Exposure}_{i}=\sum_{s=1}^{S}\frac{L_{i,s,2000}}{L_{i,2000}}\frac{\widehat{\Delta X}_{C,US,s}^{2007-2000}}{R_{US,s,2000}} \tag{20}
$$

**Production and trade.** There are $$I$$ regions and $$S+1$$ sectors (S productive market sectors plus a home-production sector indexed 0). Each region $$j$$ produces in each sector $$s$$ using labor and intermediates under a Cobb-Douglas production function. With perfect competition and iceberg trade costs $$\tau_{ij,s,t} \geq 1$$, the price of region $$i$$'s good $$s$$ in region $$j$$ at time $$t$$ is (eq. 3, p. 13):

$$
p_{ij,s,t} = \tau_{ij,s,t} A_{i,s,t}^{-1} W_{i,s,t}^{\phi_{i,s}} \prod_k P_{i,k,t}^{\phi_{i,sk}} \tag{3}
$$

where $$A_{i,s,t}$$ is TFP, $$W_{i,s,t}$$ the wage, $$\phi_{i,s}$$ the labor share, $$\phi_{i,sk}$$ the intermediate-input share from sector $$k$$, and $$P_{i,k,t}$$ the sector-$$k$$ price index. The CES price index satisfies Eq. (4), p. 13:

$$
P_{j,s,t}^{1-\sigma_s} = \sum_{i=1}^{I} p_{ij,s,t}^{1-\sigma_s} \tag{4}
$$

with elasticity of substitution $$\sigma_s > 1$$. Trade shares are given by Eq. (6), p. 13:

$$
\lambda_{ij,s,t} = \frac{p_{ij,s,t}^{1-\sigma_s}}{\sum_{r=1}^{I} p_{rj,s,t}^{1-\sigma_s}} \tag{6}
$$

Labor demand equates the wage bill to the revenue share (Eq. (7), p. 13):

$$
W_{i,s,t}L_{i,s,t}=\phi_{i,s}R_{i,s,t} \tag{7}
$$

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

Both constraints hold with complementary slackness (Eq. 18, p. 17). In the baseline calibration, $$\delta_{i,k} = \delta \approx 0.99$$ for all U.S. manufacturing sectors, and $$\delta_{i,k} = 0$$ (flexible wages) elsewhere.

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

This yields $$\delta \approx 0.99$$, $$\nu = 0.54$$, $$\kappa = 6.55$$ (Table 1, p. 28). The China productivity shocks $$\{\hat{A}_{\text{China},s,t}\}$$ are calibrated to match U.S. import growth from China in each sector using a gravity regression and the other-high-income-country import instrument from ADH (§5, pp. 21-23).

**Welfare counterfactual.** For any set of parameters and shocks the equilibrium is solved forward from 2001 using dynamic hat algebra, and the welfare expression above is evaluated at discount rate $$\beta = 0.95$$. The counterfactual (with China shock) is compared to the baseline (no shock). For the no-DNWR comparison, $$\delta$$ is set to zero without recalibrating $$\nu$$ and $$\kappa$$.

## Empirical specifications

Two empirical exercises motivate and validate the model.

**ADH-style dynamic regressions (Section 2).** The paper estimates the following specification in the spirit of Autor, Dorn, and Hanson (2021), stacking the 1990-2000 and 2000+h changes for $$h = 6, \ldots, 20$$ (eq. 1, p. 8):

$$
\Delta Y_{i,t+h}=\alpha_t+\beta_{1h}\Delta IP^{cu}_{i,\tau}+X^0_{i,t}\beta_2+\varepsilon_{i,t+h} \tag{1}
$$

where $$\Delta Y_{i,t+h}$$ stacks the 1990-2000 change with the 2000-to-2000+h change for commuting zone $$i$$, $$\alpha_t$$ are period fixed effects, and $$X^0_{i,t}$$ are the ADH controls. The endogenous exposure is instrumented with the corresponding imports-from-China growth in other high-income countries, $$\Delta IP^{cu}_{0i,\tau}$$. The authors estimate separate 2SLS regressions by horizon, $$h=6,\ldots,20$$, report 95% confidence intervals, and do not specify a standard-error clustering rule in the main text. ACS data use pooled three-year averages; CZ geography limits the first post-2000 outcome to 2006-2008. Inputs include the ADH replication files (§2.2, p. 12, pp. 8-9; Figure 1 note, p. 9).

**DNWR heterogeneity regressions (Section 2.3).** To link DNWR intensity to the unemployment response, the paper augments eq. (1) with a state-level DNWR proxy and its interaction with exposure (eq. 2, p. 10):

$$
\Delta U_{i,t+h}=\gamma_t+\beta_{1,h}\Delta IP^{cu}_{i,\tau}+\beta_{2,h}\text{Rig}_{s(i),\tau}+\beta_{3,h}\text{Rig}_{s(i),\tau}\times\Delta IP^{cu}_{i,\tau}+X^0_{i,t}\beta_4+\varepsilon_{i,t+h} \tag{2}
$$

Here $$\text{Rig}_{s(i),\tau}$$ is a state proxy equal to one when the state's share of negative wage changes is below the mean, indicating stronger DNWR. The exposure and its interaction with rigidity are instrumented by the analogous other-high-income-country import measure and its interaction. The specification uses period fixed effects and ADH controls; the paper reports 95% confidence intervals in Figure 2 but does not specify clustering in the main text. The data are commuting zones (and, in a parallel specification, states), with CPS rigidity measures based on 1987-1990 and 1997-2000 observations (§2.3, pp. 10-11). The 2007 interaction estimate is 0.17 pp (Figure 2 panel a, p. 13).

**Calibration regressions for the China productivity shock (Section 5, pp. 21-23).** Annual aggregate China-to-U.S. import changes are regressed on changes in imports from China into other high-income countries; the second regression matches cumulative changes across 12 manufacturing sectors, without an intercept:

$$
\Delta X_{C,US,t}=a+b_1\Delta X_{C,OC,t}+\varepsilon_t
$$

$$
\Delta X_{C,US,s}^{end-2000}=b_2\Delta X_{C,OC,s}^{end-2000}+\varepsilon_s
$$

These are OLS calibration regressions, not causal outcome regressions. The first uses annual observations in the shock interval (baseline 2001-2007; alternative through 2011); the second uses 12 manufacturing-sector observations. The paper does not report fixed effects or a standard-error procedure for these calibration regressions. The model's parameters are then chosen so simulated OLS exposure slopes match the ADH 2007 unemployment, NILF, and population targets. The cross-sectional validation uses 50 U.S. states, with no fixed effects; the article does not specify an inferential standard-error treatment for these simulated-data regressions.

**Model validation and cross-sectional outcome regression (Section 6.1, pp. 25-26).** For the 50 U.S. states, the authors run OLS regressions of model-implied changes on the ADH exposure measure in Eq. (20):

$$
\Delta Y_i=c+\beta\,\text{Exposure}_i+\varepsilon_i
$$

The dependent variables include employment shares, wages, population, and welfare. There are no fixed effects in this cross-section, and the paper does not state an inferential standard-error treatment for these simulated-data regressions. The model matches unemployment, NILF, and population targets by construction and also gives untargeted manufacturing and non-manufacturing employment coefficients of -0.605 and -0.169, close to ADH's -0.596 and -0.178 (Table 1, p. 28).

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

Source: peer-reviewed, *Journal of Political Economy* 134(2), February 2026. This distillation was updated by an LLM on 2026-10-04 and is **not human-verified or independently reproduced**. The accepted version is CC BY 4.0; the version of record is paywalled. Extract-only; PDF not hosted in this batch.

> **Attribution (CC BY 4.0, accepted version).** Rodríguez-Clare, Andrés, Mauricio Ulate, and Jose P. Vasquez.
> "Trade with Nominal Rigidities: Understanding the Unemployment and Welfare Effects of the China Shock."
> *Journal of Political Economy* 134, no. 2 (February 2026): 626-664.
> DOI: 10.1086/738344.
> Accepted version: LSE Research Online, eprint 127629, CC BY 4.0.
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
