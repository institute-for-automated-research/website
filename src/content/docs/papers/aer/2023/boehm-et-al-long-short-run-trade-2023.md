---
title: "Long and Short Run of Trade Elasticities: Boehm, Levchenko & Pandalai-Nayar (2023)"
description: >-
  Distilled: using MFN tariff variation and local projections, this paper estimates
  the trade elasticity at every time horizon, finding -0.76 in the short run and
  approximately -2 in the long run, converging over 7-10 years. Long-run estimates
  are substantially smaller in absolute value than conventional wisdom, implying
  welfare gains from trade five to six times larger than standard estimates. AER
  2023, paywalled. Six core results with source locators, datasets, the dynamic
  model, and the MFN instrumental variable.
sidebar:
  label: Boehm-Levchenko-Pandalai-Nayar 2023
  order: 1
tags: [paper-summary, international-trade, trade-elasticity, gravity, local-projections,
       instrumental-variables, panel-regression, peer-reviewed, unreplicated,
       data:baci, data:trains-unctad]
paper:
  authors: Christoph E. Boehm, Andrei A. Levchenko, and Nitya Pandalai-Nayar
  authorList:
    - { family: Boehm, given: Christoph E., orcid: "0000-0001-7358-6709", affiliation: University of Texas at Austin }
    - { family: Levchenko, given: Andrei A., orcid: "0000-0001-9087-7911", affiliation: University of Michigan }
    - { family: Pandalai-Nayar, given: Nitya, affiliation: University of Texas at Austin }
  year: 2023
  venue: "American Economic Review 113(4): 861-905"
  venueShort: AER 2023
  doi: 10.1257/aer.20210225
  jel:
    codes: [C51, F13, F14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Global trade and economics
    - Fiscal Policy and Economic Growth
    - Economic Growth and Productivity
  dataAccess: public
  outcome:
    - tariff-exclusive bilateral trade flows
    - welfare gains from trade
  outcomeClass: [macro-aggregates, trade-flows]
  license: "Paywalled; no CC license block found in Crossref works/10.1257/aer.20210225 (checked 2026-06-24); AEA standard paywalled article"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA site, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 132
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables, local-projections]
    identification: instrument
  contributionType: [new-fact, new-method, measurement]
  mechanisms: [participation-frictions]
  scope:
    region: global
    assetClass: goods trade (HS6 product-country pairs)
    period: 1995-01..2018-12
    frequency: annual
    dataType: [market, administrative]
    granularity: [aggregate]
    n: "183 economies, 5,000+ HS6 product categories, 1995-2018; ~26 million observations at h=1"
  findings:
    - ref: R1
      outcome: tariff-exclusive bilateral trade flows
      metric: elasticity
      value: "-0.76 (se=0.11)"
      direction: negative
      vsBenchmark: "h=1 preferred baseline IV; conventional log-levels OLS yields -3.7 to -7.0"
    - ref: R2
      outcome: tariff-exclusive bilateral trade flows
      metric: elasticity
      value: "-2.12 (se=0.32)"
      direction: negative
      vsBenchmark: "h=10 long-run baseline IV; estimate stabilizes at years 7-10"
    - ref: R3
      outcome: tariff-exclusive bilateral trade flows
      metric: elasticity
      value: "-3.70 (se=0.02) no bilateral FE; -6.96 (se=0.05) with multilateral resistance FE only"
      direction: negative
      vsBenchmark: "biased 3x-7x larger in absolute value than baseline IV by omitted bilateral unobservables"
    - ref: R4
      outcome: tariff-exclusive bilateral trade flows
      metric: elasticity
      value: "-1.04 (se=0.02) log-levels with importer-exporter-HS4 bilateral product FE"
      direction: negative
      vsBenchmark: "controlling bilateral unobservables alone brings OLS estimate near preferred IV"
    - ref: R5
      outcome: welfare gains from trade
      metric: pp-effect
      value: "5.27% for US; 22.9% world median across 64 countries (welfare-relevant theta=-1)"
      direction: positive
      vsBenchmark: "vs. 1.0% (US) and 4.2% (world median) under conventional theta=-5 (ACR formula)"
    - ref: R6
      outcome: tariff-exclusive bilateral trade flows
      metric: elasticity
      value: "range -0.75 to -5 across 11 HS sections (median long-run, years 7-10)"
      direction: mixed
  resultType: overturns
  relatesTo:
    - { cite: "Anderson and van Wincoop (2003)", doi: '10.1257/0022051042177649', relation: builds-on, note: "multilateral resistance terms; the baseline importer-product-time and exporter-product-time FE capture their dynamic analogues" }
    - { cite: "Jordà (2005)", doi: '10.1257/0002828053828518', relation: builds-on, note: "local projections as the framework for estimating horizon-h elasticities without imposing dynamic-model parameterization" }
    - { cite: "Arkolakis, Costinot, and Rodriguez-Clare (2012)", doi: '10.1257/aer.102.1.94', relation: extends, note: "applies their gains-from-trade formula with the new lower long-run elasticity; gains are five to six times larger than standard estimates" }
    - { cite: "Head and Ries (2001)", doi: '10.1257/aer.91.4.858', relation: contradicts, note: "their log-levels gravity estimates of -3.7 to -7.0 are biased by omitted bilateral unobservables; bilateral FE cuts estimates three to seven times" }
    - { cite: "Melitz (2003)", relation: builds-on, note: "nests the dynamic Melitz model in the theoretical framework for sluggish export-mass adjustment" }
  openQuestions:
    - "The CES-monopolistic competition model cannot match the short-run elasticity of -0.76 because CES requires sigma > 1; whether flexible markups or variable distribution margins can resolve this is open (pp. 897, fn. 27)."
    - "The ACR welfare formula is not known to apply in explicitly dynamic models; connecting the static gains formula to the transition path of elasticities remains open (p. 900)."
    - "The mapping from the estimated bilateral product-level partial elasticity to the macro elasticity entering welfare formulas may not be one-to-one across levels of disaggregation (p. 901)."
  replicationCode:
    url: "https://doi.org/10.3886/E182781V1"
    status: available
  extraction:
    - by: "paper-distiller (claude-sonnet-4-6)"
      date: 2026-06-24
      role: extracted
      note: "Read PDF in full; results from Figure 2 (p. 876), Table 1 (p. 880), Table 2 (p. 882), Table 3 (p. 885), Figure 3 (pp. 877-878), Figure 7 (pp. 900-901). Not human-verified; not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against source PDF; two fixes applied: (1) R3 se for -3.70 corrected from 0.05 to 0.02 (Table 1 col 1, p. 880); (2) Proposition 3 equation reference corrected from eq. (4) to eq. (2) (p. 895). All other locators, magnitudes, and equations verified correct."
  licenceVerification:
    - source: "Crossref REST works/10.1257/aer.20210225"
      checked: 2026-06-24
      by: "paper-distiller (claude-sonnet-4-6)"
      found: "No license block present; container-title American Economic Review; published 2023-04-01; vol 113 issue 4 pp 861-905. Paywalled AEA article."
---

**What this is.** This is a machine-distilled skeleton of the paper. Read the original at [doi.org/10.1257/aer.20210225](https://doi.org/10.1257/aer.20210225) to replicate or extend.

## TL;DR

Boehm, Levchenko, and Pandalai-Nayar estimate the trade elasticity at every time horizon from 0 to 10 years. Using variation in MFN (most-favored-nation) tariffs across minor trading partners as a plausibly exogenous instrument, and local projections (Jordà 2005) to trace the full time path, they find an elasticity of -0.76 one year after a tariff shock, converging to approximately -2 after 7-10 years. Conventional log-levels OLS gravity estimates (-3.7 to -7.0) are biased by omitted bilateral taste and trade-cost shocks correlated with tariffs; controlling for bilateral unobservables sharply reduces the estimates. The lower long-run elasticity implies that the welfare-relevant trade elasticity is about -1, and applying the Arkolakis, Costinot, and Rodriguez-Clare (2012) gains-from-trade formula shows welfare gains five to six times larger than under the conventional value of -5.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Short-run (h=1) trade elasticity, preferred baseline IV | Figure 2, p. 876; Table 3 col 1, p. 885 | -0.76 (se=0.11) |
| R2 | Long-run (h=10) trade elasticity, preferred baseline IV | Figure 2, p. 876; Table 3 col 1, p. 885 | -2.12 (se=0.32) |
| R3 | Log-levels OLS with multilateral resistance FE only | Table 1 cols 1-2, p. 880 | -3.70 (se=0.02) to -6.96 (se=0.05) |
| R4 | Log-levels OLS with bilateral product FE (importer-exporter-HS4) | Table 1 col 3, p. 880; Table 2 col 6, p. 882 | -1.04 (se=0.02) |
| R5 | Welfare gains from trade, ACR formula, welfare-relevant theta=-1 | Figure 7, pp. 900-901 | US: 5.27%; world median (64 countries): 22.9% |
| R6 | Sectoral long-run elasticity range, 11 HS sections | Figure 3, pp. 877-878 | -0.75 to -5 (median years 7-10) |

**Overall.** The preferred IV estimates of the trade elasticity are -0.76 in the short run, falling to about -2 in the long run. It takes 7-10 years for estimates to stabilize. The welfare-relevant elasticity (adding 1 to the tariff-exclusive estimate to account for tariff-inclusive spending) is about -1, implying gains from trade five to six times larger than under the conventional elasticity of -5. Controlling for bilateral unobservables is the single most important factor distinguishing the paper's estimates from conventional ones.

## Theory / model

The paper develops a partial equilibrium (PE) dynamic model of sluggish adjustment to trade cost shocks (§V.A, pp. 890-897), nesting dynamic versions of the Krugman (1980), Melitz (2003), and Arkolakis (2010) models. Trade in period t is:

$$X_t = p_t^* q_t n_t,$$

where $$p_t^*$$ is the exporters' price exclusive of tariffs, $$q_t$$ is quantity per unit mass, and $$n_t$$ is the mass of active exporters. Crucially, $$p_t^*$$ and $$q_t$$ adjust instantaneously to tariff changes, while $$n_t$$ is predetermined by one period: it captures the entry and investment decisions made last period.

The value of exporting $$v_t$$ and the mass dynamics are governed by (eqs. 8-9, p. 891):

$$v_t = \frac{1}{1+r}\,E_t\bigl[\pi_{t+1} + (1-\delta)v_{t+1}\bigr], \tag{8}$$

$$n_t = n_{t-1}(1-\delta) + G(v_{t-1}), \tag{9}$$

where $$\delta$$ is the exogenous exit rate and $$G(\cdot)$$ is an increasing function mapping the value of exporting to new entrants. Solving (8) forward and (9) backward yields analytical expressions for $$v_t$$ and $$n_t$$ in terms of the tariff path.

Define four elasticities (eq. 7, p. 891): $$\eta_{q,p} := \partial\ln q/\partial\ln p^*$$, $$\eta_{q,\tau} := \partial\ln q/\partial\ln\tau$$, $$\eta_{p,\tau} := \partial\ln p^*/\partial\ln\tau$$, $$\eta_{\pi,\tau} := \partial\ln\pi/\partial\ln\tau$$. The short-run trade elasticity, where $$n_t$$ is fixed (eq. 12, p. 892), is:

$$\varepsilon^0 := (1 + \eta_{q,p})\eta_{p,\tau} + \eta_{q,\tau}. \tag{12}$$

The long-run elasticity adds the endogenous adjustment of $$n$$ to its steady-state value (eq. 13, p. 892):

$$\varepsilon := \varepsilon^0 + \chi\eta_{\pi,\tau}, \tag{13}$$

where $$\chi := g(v)v/G(v) > 0$$ captures the elasticity of the mass of exporters with respect to the value of exporting. Because $$\eta_{\pi,\tau} < 0$$ and $$\chi > 0$$, the long-run elasticity is strictly larger in absolute value than the short-run elasticity. In the CES-monopolistic competition version, $$\varepsilon^0 = -\sigma$$ and $$\varepsilon = -\sigma(1 + \chi)$$.

**Proposition 2** (p. 894) establishes that $$\lim_{h\to\infty}\varepsilon^h = \varepsilon$$ as long as the tariff shock is not fully mean-reverting, validating the horizon-10 estimates as long-run estimates.

**Proposition 3** (p. 895) shows that the model delivers the local-projections estimating equation (2) up to first order. The importer-product-time and exporter-product-time fixed effects absorb weighted averages of past, present, and expected future demand and supply shifters: dynamic analogues of the Anderson and van Wincoop (2003) multilateral resistance terms.

The model is calibrated with $$\sigma = 1.1$$, $$\chi = 0.82$$, $$\delta = 0.25$$, $$r = 0.03$$ to match the empirical time path of elasticities (Figure 5, p. 897). Convergence to the long run is geometric at rate $$\delta$$, taking approximately a decade.

## Method

The horizon-h trade elasticity $$\varepsilon^h$$ is estimated by combining **local projections** (Jordà 2005, builds-on) with a **WTO MFN instrumental variable**. The key innovation relative to conventional gravity estimation is that a separate regression is run at each horizon $$h = 0, 1, \ldots, 10$$, tracing the full impulse-response function of trade to tariff shocks without imposing a parametric dynamic model.

The horizon-h trade elasticity is defined (eq. 1, p. 865) as:

$$\varepsilon^h := \frac{\Delta_h \ln X_{i,j,p,t}}{\Delta_h \ln \tau_{i,j,p,t}}, \tag{1}$$

where $$i$$ indexes the importing country, $$j$$ the exporting country, $$p$$ the product, $$t$$ time, and $$\Delta_h x_t := x_{t+h} - x_{t-1}$$ is the h-period change. The long-run elasticity is $$\varepsilon = \lim_{h\to\infty}\varepsilon^h$$.

**Instrument.** To address the endogeneity of tariffs, the paper exploits the WTO's MFN principle: when an importing country changes its applied MFN tariff on a product, all WTO partners trading on MFN terms experience that change. Minor trading partners (not among the top-10 exporters of product p to importer i) are unlikely to have driven the tariff change. The baseline instrument (eq. 5, p. 870) is:

$$\Delta_0\ln\tau^{\text{instr}}_{i,j,p,t} = \mathbf{1}\!\left\{\tau_{i,j,p,t} = \tau^{\text{appliedMFN}}_{i,j,p,t}\right\} \times \mathbf{1}\!\left\{\tau_{i,j,p,t-1} = \tau^{\text{appliedMFN}}_{i,j,p,t-1}\right\} \times \left(\ln\tau^{\text{appliedMFN}}_{i,j,p,t} - \ln\tau^{\text{appliedMFN}}_{i,j,p,t-1}\right), \tag{5}$$

retaining only observations where exporter j is not a top-10 trading partner of importer i (in total trade or in product p). Countries in preferential trade agreements (PTAs) with the importer serve as the control group: their applied tariffs differ from MFN rates so they do not experience the MFN tariff change. The instrument is equivalent to an instrumented difference-in-differences comparing minor MFN partners (treated) to PTA partners (control).

Standard errors are clustered at the country-pair-product level throughout; first-stage F-statistics exceed 10 at all horizons (Online Appendix Table B2).

## Empirical specifications

The combined specification estimated at each horizon h is (eq. 4, p. 867):

$$\Delta_h \ln X_{i,j,p,t} = \beta^h \Delta_h \ln\tau_{i,j,p,t} + \delta^{d,h}_{i,p,t} + \delta^{s,h}_{j,p,t} + \delta^{b,h}_{i,j,p} + u^h_{i,j,p,t}, \tag{4}$$

where $$\delta^{d,h}_{i,p,t}$$ is an importer-HS4-year fixed effect, $$\delta^{s,h}_{j,p,t}$$ is an exporter-HS4-year fixed effect, and $$\delta^{b,h}_{i,j,p}$$ is a source-destination-product fixed effect (absorbing bilateral trends in trade). All specifications include one lag of log changes in tariffs and trade as pretrend controls. When $$\Delta_0\ln\tau^{\text{instr}}_{i,j,p,t}$$ instruments for $$\Delta_h\ln\tau_{i,j,p,t}$$, the IV estimator $$\hat{\beta}^h$$ identifies $$\varepsilon^h$$.

To account for tariff autocorrelation, the paper also runs a complementary local projection of the tariff change (eq. 3, p. 867):

$$\Delta_h \ln\tau_{i,j,p,t} = \beta^h_\tau \Delta_0\ln\tau_{i,j,p,t} + \delta^{d,\tau,h}_{i,p,t} + \delta^{s,\tau,h}_{j,p,t} + \delta^{b,\tau,h}_{i,j,p} + u^{\tau,h}_{i,j,p,t}, \tag{3}$$

with the trade elasticity recovered as $$\varepsilon^h = \hat{\beta}^h_X / \hat{\beta}^h_\tau$$. This is important because tariff changes are autocorrelated in the data: about 80% of the initial shock survives at 5 years and 75% at 10 years (Figure 1 panel A, p. 875). Failing to account for this autocorrelation would cause h-period differences to conflate elasticities across horizons.

**Bias diagnostics (Table 1, p. 880).** A log-levels OLS specification assuming all tariff variation is exogenous, similar to Head and Ries (2001), yields coefficients of -3.70 to -6.96. Conventional static gravity in log-levels without bilateral effects:

$$\ln X_{i,j,p,t} = \beta\ln\tau_{i,j,p,t} + \delta^d_{i,p,t} + \delta^s_{j,p,t} + u_{i,j,p,t}$$

yields $$\hat{\beta} = -6.96$$ (col 2) or $$-3.70$$ (col 1 without multilateral resistance). Adding bilateral product fixed effects $$\delta^b_{i,j,p}$$ in log-levels (Table 2, p. 882) yields $$-1.04$$, demonstrating that controlling for bilateral unobservables is the dominant force pushing estimates toward the paper's preferred IV values.

The 5-year IV baseline is $$-1.24$$ (Table 3 col 1, p. 885) and the 10-year baseline is $$-2.12$$, consistent across a wide range of robustness checks: alternative pretrend lags (Table 3 cols 2-3), alternative clustering (col 5), constant sample (col 6), and extensive margin specifications (cols 7-8).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| BACI (CEPII version of UN COMTRADE) | Trade values and quantities at HS6 level, 183 economies, 1995-2018; main outcome variable | no page yet |
| UN TRAINS (UNCTAD, 1995-2018) | Applied and MFN tariff rates at HS6 level; source of the instrument and the tariff regressor | no page yet |

Sample: 183 economies, 5,000+ HS6 product categories, 1995-2018 (annual). Baseline estimation sample at h=1: approximately 26 million country-pair-product-year observations. Additional gravity covariates (distance, common border, common language, colonial relationship) from the CEPII GeoDist database are used in robustness exercises.

## When to read the full paper

Read the original when you need: (i) first-stage F-statistics and the full robustness matrix across all horizons (Online Appendix Tables B1-B8); (ii) the multicountry multisector general equilibrium extension and GE impulse responses of US imports to tariff shocks (Figure 6, pp. 898-899); (iii) sectoral heterogeneity results broken down by 11 HS sections and benchmarked to Ossa (2015) (Figure 3, pp. 877-878); (iv) proofs of Propositions 1-3 on the impulse-response of firm mass and the micro-foundation of the estimating equation (Online Appendix C); or (v) country-level gains-from-trade quantification at alternative elasticity values (Online Appendix Table B9).

## Attribution and rights

Boehm, Christoph E., Andrei A. Levchenko, and Nitya Pandalai-Nayar. 2023. "The Long and Short (Run) of Trade Elasticities." *American Economic Review* 113(4): 861-905. doi:10.1257/aer.20210225.

Replication code: Boehm, Levchenko, and Pandalai-Nayar (2023). "Replication Data for: The Long and Short (Run) of Trade Elasticities." American Economic Association / ICPSR openICPSR. doi:10.3886/E182781V1.

This page is an LLM-distilled extract (not human-verified, not reproduced). Results are drawn from Figures 1-7 and Tables 1-4 of the published paper. Extract-only redistribution; the original is paywalled via the AEA.
