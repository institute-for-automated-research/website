---
title: "Trade with Correlation: Lind & Ramondo (2023)"
description: >-
  Distilled: A Ricardian trade model where productivity across countries follows a
  max-stable multivariate Frechet distribution with a general correlation function,
  spanning the full class of GEV import demand systems. A latent factor model (LFM)
  estimated on four-digit SITC trade and tariff data finds 7 technology factors and
  wide heterogeneity in correlation: countries with more dissimilar technology
  gain up to 90% more from trade; LFM gains dispersion is an order of magnitude
  larger than sectoral gravity (SD 2.6 vs 0.07). American Economic Review 2023,
  paywalled. Seven core results with source locators, the CNCES/GEV model equations,
  the LFM estimator, and datasets used.
sidebar:
  label: Lind-Ramondo 2023
  order: 1
tags: [paper-summary, international-trade, trade-policy, factor-models, structural, peer-reviewed, unreplicated, data:comtrade, data:wiod]
paper:
  authors: Nelson Lind, Natalia Ramondo
  authorList:
    - { family: Lind, given: Nelson, affiliation: Emory University }
    - { family: Ramondo, given: Natalia, affiliation: Boston University and NBER }
  year: 2023
  venue: American Economic Review 113(2), February 2023, 317-353
  venueShort: AER 2023
  licenseShort: paywalled
  resultsCount: 7
  citedByCount: 0
  jel:
    codes: [F11, F14, C38]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Economic theories and models", "Global trade and economics", "Economics of Agriculture and Food Markets"]
  dataAccess: public
  outcome:
    - bilateral trade expenditure shares
    - gains from trade (real wage relative to autarky)
    - expenditure substitution elasticities
  outcomeClass: [trade-flows, macro-aggregates]
  doi: 10.1257/aer.20190781
  license: paywalled (no license[] entries in Crossref DOI metadata as of 2026-06-25; AEA/AER standard subscription access)
  access: paywalled
  machineAccess: "blocked-paywall (AEA website, 2026-06-25)"
  redistribution: extract-only
  methods:
    role: both
    contributes: cnces-lfm
    family: structural
    buildsFrom: [factor-analysis-pca, nonneg-matrix-factorization]
    identification: structural
  contributionType: [new-theory, new-method, new-fact]
  mechanisms: [comparative-advantage-correlation]
  scope:
    region: global
    assetClass: "traded goods (SITC sectors 0-8, 31-country sample)"
    period: 1999..2007
    frequency: annual
    dataType: [administrative, accounting]
    granularity: [aggregate, industry]
    n: "787 SITC four-digit sectors, 31 countries, 1999-2007; 5,528,764 observations"
  findings:
    - { ref: R2, outcome: "bilateral trade expenditure shares", metric: r-squared, value: "0.937 overall; 0.334 within origin-destination", direction: positive }
    - { ref: R3, outcome: "expenditure substitution elasticities", metric: elasticity, value: "sigma_k in [0.375, 5.175]; rho_k in [0.0, 0.927] across 7 factors", direction: mixed }
    - { ref: R5, outcome: "gains from trade (real wage relative to autarky)", metric: level, value: "LFM gains for Canada ~90% higher than Germany despite similar self-trade share", direction: positive }
    - { ref: R6, outcome: "gains from trade (real wage relative to autarky)", metric: level, value: "SD of log gains controlling for self-trade: 2.6 (LFM) vs 0.07 (SGM)", direction: positive, vsBenchmark: "LFM SD ~37x SGM SD (order-of-magnitude difference)" }
    - { ref: R7, outcome: "gains from trade (real wage relative to autarky)", metric: level, value: "US welfare cost of 50% tariff on China roughly doubles in LFM vs SGM", direction: negative }
  resultType: new-finding
  relatesTo:
    - { cite: "Eaton and Kortum (2002)", doi: '10.1111/1468-0262.00352', relation: extends, note: "extends their Ricardian EK framework to allow correlated productivity via max-stable Frechet distributions; EK is the independence special case" }
    - { cite: "Arkolakis, Costinot, and Rodriguez-Clare (2012)", doi: '10.1257/aer.102.1.94', relation: extends, note: "extends their sufficient-statistic gains-from-trade formula: under correlation, self-trade share alone is insufficient; correlation parameters also required" }
    - { cite: "Adao, Costinot, and Donaldson (2017)", doi: '10.1257/aer.20150956', relation: builds-on, note: "their GEV nonparametric framework provides conditions for identification of invertible import demand systems used as a benchmark here" }
  openQuestions:
    - "The model does not incorporate an input-output structure; correlation in productivity is a distinct mechanism from IO linkages but could produce similar quantitative predictions (pp. 320, 344); extending LFM to accommodate IO is left for future work."
    - "Whether the latent factor structure is stable out of sample and across longer time horizons is untested; the estimation covers only 1999-2007 and uses time-invariant factor weights (p. 333)."
  replicationCode: { url: "https://doi.org/10.3886/E173601V1", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Read full PDF (pages 1-37); all locators and magnitudes drawn from the source. Not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed R2 overall R² from 0.936 to 0.937 (Table 1, K=7 column) and eq. 32 direct-tariff-effect term from pi_{o'd}/1 to pi_{o'd}; all other rows, equations, and frontmatter fields confirmed." }
  licenceVerification:
    - { source: "Crossref works/10.1257/aer.20190781", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] entries returned. Title confirmed as 'Trade with Correlation'; authors Nelson Lind and Natalia Ramondo; container-title American Economic Review; published 2023-02-01; vol 113 no 2 pp 317-353." }
---

**What this is.** This is the LLM-distilled skeleton of Lind and Ramondo (2023). Read the [original paper](https://doi.org/10.1257/aer.20190781) to replicate or extend; this page records the model equations, estimator, and quantitative results with PDF locators.

## TL;DR

Lind and Ramondo develop a Ricardian model of trade where the joint distribution of productivity across countries is a max-stable multivariate Frechet distribution with a general correlation function $$G^d$$. This spans the full class of generalized extreme value (GEV) import demand systems and nests Eaton and Kortum (2002) as the independence special case. A cross-nested CES (CNCES) correlation function that can approximate any correlation function enables tractable counterfactuals and a flexible estimation procedure.

For estimation they propose a latent factor model (LFM) that compresses four-digit SITC bilateral trade flow and tariff data for 31 countries and 787 sectors into 7 latent technology classes via non-negative matrix factorization with a pseudo-Poisson criterion. The LFM finds wide heterogeneity in correlation: Factor 1 (apparel and textiles) has $$\rho_1 = 0.927$$; Factor 7 (energy and minerals) has $$\rho_7 = 0.0$$. Countries with relatively dissimilar technology (low correlation) gain much more from trade: Canada gains about 90% more than Germany despite similar self-trade shares. Controlling for self-trade, LFM gains dispersion is an order of magnitude larger than the sectoral gravity model (standard deviation 2.6 vs 0.07).

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Optimal number of latent factors: LR test selects K = 7 | Table 1, p. 335 | p-value for K = 7 vs K = 8 equals 1.0; K = 8 adds no significant fit |
| R2 | LFM with 7 factors explains bilateral trade flow variation | Table 1, p. 335 | R\^2 = 0.937 overall; 0.334 within origin-destination |
| R3 | Factor elasticities and correlation coefficients are highly heterogeneous | Table 2, p. 336 | sigma_k in [0.375 (F7), 5.175 (F1)]; rho_k in [0.0, 0.927]; theta = 0.375 |
| R4 | Expenditure-weighted avg. elasticities differ sharply between LFM and SGM | Figure 2, p. 339 | LFM: 1.5 (India) to ~3 (Turkey); SGM: near-uniform 2.7-3.2 across countries |
| R5 | Canada gains ~90% more from trade than Germany despite equal self-trade | Figure 5, p. 342 | LFM: Canada ~90% higher gains; SGM: near-identical gains for the two countries |
| R6 | LFM gains from trade are an order of magnitude more dispersed than SGM | p. 343 | SD of log gains (controlling self-trade): 2.6 LFM vs 0.07 SGM |
| R7 | US welfare cost of China tariffs is roughly 2x larger in LFM than SGM | Figure 6, p. 345 | Total log real wage at 50pp tariff: ~-0.017 (LFM) vs ~-0.008 (SGM) |

**Overall.** The model shows that correlation in productivity matters quantitatively for gains-from-trade calculations and for counterfactual tariff analysis. Standard models assuming independence (EK/ACR/SGM) understate the heterogeneity in gains across countries and mischaracterize the structure of import demand. The LFM estimate of 7 technology factors that are broadly shared across sectors implies nonzero cross-sector substitution elasticities absent from gravity models.

## Theory / model

The model is a global economy of N countries trading a continuum of goods $$v \in [0,1]$$. Consumers have CES preferences with elasticity $$\eta > 1$$. Each good is produced with one-factor (labor) constant-returns technology

$$Y_{od}(v) = Z_{od}(v)\, L_{od}(v), \tag{tech}$$

where $$Z_{od}(v)$$ is productivity for origin o delivering to destination d, absorbing both efficiency and delivery costs. The key departure from Eaton and Kortum (2002): the joint distribution of productivity across origins is **max-stable multivariate Frechet** with a general correlation function $$G^d$$. The joint CDF is (eq. 1, p. 321):

$$\Pr\!\left[Z_{1d}(v) \leq z_1, \ldots, Z_{Nd}(v) \leq z_N\right] = \exp\!\left[-G^d\!\left(T_{1d} z_1^{-\theta}, \ldots, T_{Nd} z_N^{-\theta}\right)\right], \tag{1}$$

where $$T_{od} > 0$$ is the scale parameter (absolute advantage) and $$\theta > 0$$ controls productivity dispersion. The function $$G^d: \mathbb{R}_+^N \to \mathbb{R}_+$$ is the **correlation function** (a max-stable copula generator). When $$G^d = \sum_o x_o$$ (additive, the independence case), the model reduces exactly to EK with CES import shares. Nonlinear $$G^d$$ introduces correlation and departures from IIA.

**CNCES correlation function.** The cross-nested CES (CNCES) form (eq. 6, p. 323) is the foundation for estimation:

$$G^d(x_1, \ldots, x_N) = \sum_{k=1}^{K}\left[\sum_{o=1}^{N}\!\left(\omega_{kod}\, x_o\right)^{\!\frac{1}{1-\rho_k}}\right]^{\!1-\rho_k}, \tag{6}$$

where $$\rho_k \in [0,1)$$ is the within-nest correlation and $$\omega_{kod} > 0$$ are nest weights. Proposition 1 (p. 323) shows any correlation function can be uniformly approximated by a CNCES on compact sets, so the CNCES is without loss of generality.

**Expenditure shares and prices.** Under max-stability, Proposition 2 (p. 325) gives the closed-form expenditure share of destination d on goods from origin o and the price index (eqs. 8-9, pp. 325-326):

$$\pi_{od} \equiv \frac{X_{od}}{X_d} = \frac{P_{od}^{-\theta}\, G_o^d(P_{1d}^{-\theta}, \ldots, P_{Nd}^{-\theta})}{G^d(P_{1d}^{-\theta}, \ldots, P_{Nd}^{-\theta})}, \quad P_d = G^d\!\left(P_{1d}^{-\theta}, \ldots, P_{Nd}^{-\theta}\right)^{-1/\theta}, \tag{8,9}$$

where $$P_{od} \equiv \gamma T_{od}^{-1/\theta} W_o$$ and $$G_o^d \equiv \partial G^d/\partial x_o$$. The cross-price elasticity $$\varepsilon_{oo'd} = -\theta\, P_{o'd}^{-\theta} G_{oo'}^d / G_o^d \geq 0$$ is nonnegative (gross substitutes), and is zero when $$G^d$$ is additive (the CES/IIA case).

**Gains from trade.** The real wage of country d relative to autarky is (eq. 16, p. 328):

$$\frac{W_d/P_d}{W_d^A/P_d^A} = \left(\tilde{\pi}_{dd}\right)^{-1/\theta}, \tag{16}$$

where $$\tilde{\pi}_{dd} \equiv \pi_{dd}/G_d^d(P_{1d}^{-\theta}, \ldots, P_{Nd}^{-\theta})$$ is the **correlation-adjusted self-trade share**. Under independence $$\tilde{\pi}_{dd} = \pi_{dd}$$ and (16) collapses to the Arkolakis, Costinot, and Rodriguez-Clare (2012) formula. With correlation, two countries sharing the same self-trade share can have different gains depending on how similar their technology is to trading partners.

The CNCES closed-form gains from trade (eq. 17, p. 328) are:

$$\frac{W_d/P_d}{W_d^A/P_d^A} = \pi_{dd}^{-1/\theta}\left[\sum_{k=1}^{K}\!\left(\pi_{kdd}^W\right)^{\!1-\rho_k}\!\pi_{kd}^B\right]^{-1/\theta}, \tag{17}$$

where $$\pi_{kdd}^W$$ is the within-factor self-trade share and $$\pi_{kd}^B$$ is the between-factor share. Higher $$\rho_k$$ (more correlation in factor k) reduces gains from trade for given within-factor expenditure; the ACR formula is the special case $$\rho_k = 0$$ for all k.

## Method

The LFM estimation procedure builds on Adao, Costinot, and Donaldson (2017) by compressing disaggregate sectoral trade data into K latent technology classes. In the multisector version (Section III, p. 330), goods are assigned to S observable sectors, but each sector can use multiple latent factors, relaxing the assumption that technology classes equal observed sectors.

Under the separability condition on factor-level scale parameters (eq. 21, p. 331),

$$T_{ksod}^* = (B_{sk} A_{kod})^{\theta}, \tag{21}$$

sectoral expenditure shares decompose into a sum over latent factors (eq. 22, p. 332):

$$\pi_{sod} = \sum_{k=1}^{K}\!\left(\frac{t_{sod}}{t_{kod}^*}\right)^{\!\!-\sigma_k} \lambda_{sk}\, \pi_{kod}^*, \tag{22}$$

where $$\sigma_k \equiv \theta/(1-\rho_k)$$ is the within-factor elasticity of substitution, $$\lambda_{sk} \equiv B_{sk}^{\sigma_k}/\sum_{s'} B_{s'k}^{\sigma_k}$$ are sector-factor weights (time-invariant), and $$t_{kod}^* \equiv (\sum_s t_{sod}^{-\sigma_k}\lambda_{sk})^{-1/\sigma_k}$$ is a factor-level tariff index. The cross-price elasticity between any two sector-origin pairs so and s'o' (eq. 20, p. 331) is:

$$\varepsilon_{sos'o'd} = \theta\sum_{k=1}^{K}\frac{\rho_k}{1-\rho_k}\,\pi_{ksod}^W\,\pi_{ks'o'd}^W\,\pi_{kd}^B \geq 0. \tag{20}$$

This is zero when all $$\rho_k = 0$$ or sectors share no latent factors (the sectoral gravity model, SGM). Nonzero values arise when two sector-origin pairs rely on factors with high within-factor correlation and similar within-factor expenditure shares.

The LFM is estimated by minimizing the pseudo-Poisson deviance via non-negative matrix factorization (Lee and Seung 1999, 2000; Fu et al. 2019). For a given K, the joint estimation problem (eq. 29, p. 334) is:

$$\hat{\Sigma},\,\hat{\Lambda},\,\hat{\Phi}^* = \arg\min_{\Sigma \geq 0,\,\Lambda \geq 0,\,\Phi^* \geq 0}\;\sum_{s,o,d,t}\ell\!\left(\pi_{sodt},\;\sum_k t_{sodt}^{-\sigma_k}\lambda_{sk}\phi_{kodt}^*\right), \tag{29}$$

where $$\ell(x, \hat{x}) = 2[x\ln(x/\hat{x}) - (x - \hat{x})]$$ is the Poisson deviance. Non-negativity of $$\Lambda$$ and $$\Phi^*$$ ensures uniqueness of the factorization (up to permutation and scale) under general conditions (Fu et al. 2019). The number of factors K is chosen via likelihood ratio tests comparing specifications; K = 7 is selected because K = 8 yields p-value = 1.0 (Table 1, p. 335).

The shape parameter $$\theta$$ is estimated as $$\theta = \min_{k}\hat{\sigma}_k = 0.375$$, the conservative upper bound consistent with all $$\rho_k \geq 0$$ (p. 335). Factor correlation coefficients are then $$\rho_k = 1 - \theta/\sigma_k$$.

## Empirical specifications

The baseline estimation uses four-digit SITC bilateral trade flow and tariff data from Comtrade combined with WIOD aggregate sectoral expenditure data, covering 31 countries and S = 787 sectors over 1999-2007 (5,528,764 sector-origin-destination-year observations; p. 333 and online Appendix O.9). Factor weights $$\lambda_{sk}$$ and within-factor elasticities $$\sigma_k$$ are assumed time-invariant across the sample period; factor-level expenditures $$\phi_{kodt}^*$$ can vary over time.

The **sectoral gravity model** (SGM) restricts each latent factor to one sector ($$B_{sk} = 0$$ for $$s \neq k$$, so $$\lambda_{sk} = \mathbf{1}\{k = s\}$$), yielding the sector-level gravity specification (eq. 26, p. 332) used as a benchmark. SGM implies $$\varepsilon_{sos'o'd} = 0$$ for $$s \neq s'$$ (no cross-sector substitution) and $$\varepsilon_{soo'd} = (\sigma_s - \theta)\pi_{sod}^W$$ for within-sector pairs. The CES model further restricts all $$\rho_k = 0$$, recovering the ACR sufficient-statistic result.

Counterfactuals use hat-algebra applied to the CNCES gains-from-trade formula (17). For the US protectionism exercise, the total effect on US real wages of a tariff increase on China by $$\Delta t$$ is decomposed (eq. 32, p. 344) into:

$$\frac{d\ln(W_d/P_d)}{d\ln t_{o'd}} = \underbrace{(1 - \pi_{dd})\frac{d\ln(W_d/W_{o'})}{d\ln t_{o'd}}}_{\text{domestic wage effect}} + \underbrace{\sum_{o \neq d,\,o \neq o'}\pi_{od}\frac{d\ln(W_o/W_{o'})}{d\ln t_{o'd}}}_{\text{third-party effect}} + \underbrace{\pi_{o'd}}_{\text{direct tariff effect}}. \tag{32}$$

The US welfare cost of a 50pp China tariff is roughly 2x larger under LFM than SGM (Figure 6, p. 345), because LFM implies US consumers substitute less toward domestic goods and more toward third-party suppliers when China is taxed (smaller domestic wage effect, larger third-party effect; the direct effect is larger in LFM as it is proportional to expenditure shares that shrink more slowly in LFM).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| UN Comtrade (4-digit SITC bilateral trade flows) | Sectoral expenditure shares $$\pi_{sodt}$$ for LFM estimation; 787 sectors, 31 countries, 1999-2007 | no page yet |
| UN Comtrade / UNCTAD-TRAINS (tariff schedules) | Tariff rates $$t_{sodt}$$ used to identify within-factor elasticities $$\sigma_k$$ from within-sector variation | no page yet |
| World Input-Output Database (WIOD) | Aggregate sectoral expenditure data to scale factor-level shares (online Appendix O.9) | no page yet |

Sample: 31 countries, 787 four-digit SITC sectors, annual 1999-2007, 5,528,764 bilateral-sector-year observations (p. 333). Rank condition (eq. 24, p. 332) requires $$K \leq S \times N^2/(S + N^2) < S$$; with S = 787 and N = 31 up to 432 factors could be fit.

## When to read the full paper

Read Lind and Ramondo (2023) if you need: (a) the proofs for Propositions 1-2 and the gains-from-trade derivation (Appendices A-C, pp. 346-351), including the connection to max-stable processes and GEV discrete choice; (b) the full NMF algorithm with missing-data extensions and identification conditions (online Appendix O.10); (c) country-by-country gains-from-trade estimates and factor-level export patterns (Figure 5, Table 2, online Appendix O.11); (d) reduced-form evidence on departures from IIA within and across sectors (online Appendix O.6); (e) robustness to the alternative two-step $$\theta$$ estimation using between-factor gravity variation (online Appendix O.8); or (f) the three-country analytical example showing how correlation affects gains (pp. 329-330).

## Attribution and rights

Nelson Lind and Natalia Ramondo, "Trade with Correlation," *American Economic Review* 113, no. 2 (February 2023): 317-353. DOI: [10.1257/aer.20190781](https://doi.org/10.1257/aer.20190781). Replication data deposited at ICPSR: [https://doi.org/10.3886/E173601V1](https://doi.org/10.3886/E173601V1).

This page is an LLM-distilled extract prepared by claude-sonnet-4-6 on 2026-06-25. Not human-verified; not reproduced. Rights held by the American Economic Association; extract-only under fair use.
