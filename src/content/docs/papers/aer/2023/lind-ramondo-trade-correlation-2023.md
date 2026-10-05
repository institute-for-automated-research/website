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
  paywalled. Fifteen core results with source locators, the complete numbered model and
  estimation equations, and datasets used.
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
  resultsCount: 15
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
    buildsFrom: [nonneg-matrix-factorization]
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
    - { ref: R1, outcome: bilateral trade expenditure shares, metric: p-value, value: "LR test of K=7 vs K=8: p-value = 1.0; K=8 adds no significant fit", direction: none }
    - { ref: R2, outcome: bilateral trade expenditure shares, metric: r-squared, value: "0.937 overall; 0.334 within origin-destination", direction: positive }
    - { ref: R3, outcome: expenditure substitution elasticities, metric: elasticity, value: "sigma_k in [0.375, 5.175]; rho_k in [0.0, 0.927] across 7 factors", direction: mixed }
    - { ref: R4, outcome: expenditure substitution elasticities, metric: elasticity, value: "LFM expenditure-weighted averages: 1.5 (India) to almost 3 (Turkey); SGM: about 2.7 (Spain, Italy, Turkey) to 3.2 (Hungary)", direction: mixed }
    - { ref: R5, outcome: gains from trade (real wage relative to autarky), metric: level, value: "LFM gains for Canada ~90% higher than Germany despite similar self-trade share", direction: positive }
    - { ref: R6, outcome: gains from trade (real wage relative to autarky), metric: level, value: "SD of log gains controlling for self-trade: 2.6 (LFM) vs 0.07 (SGM)", direction: positive, vsBenchmark: "LFM SD ~37x SGM SD (order-of-magnitude difference)" }
    - { ref: R7, outcome: gains from trade (real wage relative to autarky), metric: level, value: "US welfare cost of 50% tariff on China roughly doubles in LFM vs SGM", direction: negative }
    - { ref: R8, outcome: expenditure substitution elasticities, metric: probability, value: "F4 and F5 account for 0.333 + 0.258 = 0.591 of factor-level expenditure; their self-trade shares are 0.900 and 0.962", direction: mixed }
    - { ref: R9, outcome: bilateral trade expenditure shares, metric: probability, value: "About 75% of four-digit SITC sectors use at least 6 of 7 factors; fewer than 15% use fewer than 4", direction: positive }
    - { ref: R10, outcome: bilateral trade expenditure shares, metric: probability, value: "Top two-digit SITC weights: F1 apparel 0.231; F2 road vehicles 0.422; F3 pharmaceuticals 0.142; F6 office machines 0.283; F7 petroleum 0.291", direction: mixed }
    - { ref: R11, outcome: expenditure substitution elasticities, metric: elasticity, value: "Aggregate cross-price elasticities are positive for different origins; SGM imposes zero cross-sector elasticities, unlike LFM", direction: positive }
    - { ref: R12, outcome: expenditure substitution elasticities, metric: elasticity, value: "US-China own-price elasticity: -2.9 (LFM) vs -1.3 (SGM); China is a close substitute for Turkey, Bulgaria, and Greece, but a poor substitute for Ireland, Netherlands, Russia, and the US", direction: mixed }
    - { ref: R13, outcome: gains from trade (real wage relative to autarky), metric: level, value: "Conditional SD across-country gains rises from 0.07 (SGM) to 0.26 (SGM plus input-output linkages), versus 2 (LFM; p. 343 reports 2.6)", direction: positive, vsBenchmark: "Adding IO linkages does not reproduce LFM gains dispersion" }

  resultType: mixed
  relatesTo:
    - { cite: "Eaton and Kortum (2002)", doi: '10.1111/1468-0262.00352', relation: extends, note: "extends their Ricardian EK framework to allow correlated productivity via max-stable Frechet distributions; EK is the independence special case" }
    - { cite: "Arkolakis, Costinot, and Rodriguez-Clare (2012)", doi: '10.1257/aer.102.1.94', relation: extends, note: "extends their sufficient-statistic gains-from-trade formula: under correlation, self-trade share alone is insufficient; correlation parameters also required" }
    - { cite: "Adao, Costinot, and Donaldson (2017)", doi: '10.1257/aer.20150956', relation: builds-on, note: "their GEV nonparametric framework provides conditions for identification of invertible import demand systems used as a benchmark here" }
  openQuestions:
    - "The paper does not estimate an LFM with input-output linkages. It finds that correlation and IO linkages are distinct mechanisms that can produce similar predictions, while the LFM gains remain more heterogeneous in its comparison (pp. 320, 344)."
    - "Whether the latent factor structure is stable out of sample and across longer time horizons is untested; the estimation covers only 1999-2007 and uses time-invariant factor weights (p. 333)."
  replicationCode: { url: "https://doi.org/10.3886/E173601V1", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Read full PDF (pages 1-37); all locators and magnitudes drawn from the source. Not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed R2 overall R² from 0.936 to 0.937 (Table 1, K=7 column) and eq. 32 direct-tariff-effect term from pi_{o'd}/1 to pi_{o'd}; all other rows, equations, and frontmatter fields confirmed." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the 37-page PDF; augmented Core results through R15, completed findings for all quantitative rows, and added remaining numbered main-text equations and empirical-specification details. These additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators and reported magnitudes re-checked against the source PDF; corrected equations 17, 20, 25-26, 31-32, R13/R15 page locators, and R11 classification; checked all rows, remaining equations, axes, and body claims. Review pass (2026-10-04): corrected Eq. (17) and noted the p. 343 LFM figure in R13; left Eq. (20) unchanged. Post-verification review (2026-10-04) removed the spurious star from pi_sod in Eq. (20), as printed on p. 331." }
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
| R8 | Factor-level expenditure is concentrated in mostly domestic factors | Table 2, p. 336 | F4 and F5 account for 0.333 and 0.258 of factor-level expenditure; their self-trade shares are 0.900 and 0.962 |
| R9 | Sectors commonly share latent factors, while factors load on sectors differently | Figure 1, p. 337 | About 75% of sectors use at least 6 of 7 factors; fewer than 15% use fewer than 4 |
| R10 | Latent factors map to distinct observed goods categories | Table 3, p. 338 | Largest two-digit SITC weights include apparel 0.231 (F1), road vehicles 0.422 (F2), pharmaceuticals 0.142 (F3), office machines 0.283 (F6), and petroleum 0.291 (F7) |
| R11 | LFM allows aggregate cross-origin substitution and cross-sector elasticities absent under SGM | Figure 3, p. 340; text p. 340 | Aggregate cross-origin effects are positive; SGM imposes zero cross-sector elasticities by construction |
| R12 | Substitutability for US consumers differs by exporter under LFM | Figure 4, p. 341; text p. 341 | US-China own-price elasticity: -2.9 (LFM) vs -1.3 (SGM); China is a close substitute for Turkey, Bulgaria, and Greece, but a poor substitute for Ireland, Netherlands, Russia, and the US |
| R13 | Input-output linkages raise SGM gains but do not match LFM heterogeneity | Figure 5, p. 342; text p. 344 | Conditional SD of gains: 0.07 (SGM), 0.26 (SGM with IO), and 2 (LFM; p. 343 reports 2.6) |
| R14 | Alternative two-step estimate of the shape parameter does not differ statistically from baseline | Text p. 335 | Two-step estimate of theta is reported as not statistically different from the baseline upper-bound estimate; no coefficient or test statistic is reported in the article |
| R15 | A sector-restricted LFM is statistically distinguishable from the unrestricted seven-factor model | Text p. 335, note 22 | The constrained model is reported as statistically different and has less explanatory power; no test statistic is reported in the article |

**Overall.** The model shows that correlation in productivity matters quantitatively for gains-from-trade calculations and for counterfactual tariff analysis. Standard models assuming independence (EK/ACR/SGM) understate the heterogeneity in gains across countries and mischaracterize the structure of import demand. The gains decomposition attributes a larger portion of LFM's difference from ACR and SGM to heterogeneity in within-factor self-trade expenditure shares than to heterogeneity in correlation coefficients (p. 343). The LFM estimate of 7 technology factors that are broadly shared across sectors implies nonzero cross-sector substitution elasticities absent from gravity models.

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

$$\frac{W_d/P_d}{W_d^A/P_d^A} = \pi_{dd}^{-1/\theta}\left[\sum_{k=1}^{K}\!(\pi_{kdd}^W)^{1-\rho_k}\,\frac{\pi_{kd}^B}{\pi_{dd}}\right]^{-1/\theta}, \tag{17}$$

where $$\pi_{kdd}^W$$ is the within-factor self-trade share and $$\pi_{kd}^B$$ is the between-factor share. Higher $$\rho_k$$ (more correlation in factor k) reduces gains from trade for given within-factor expenditure; the ACR formula is the special case $$\rho_k = 0$$ for all k.

## Method

The LFM estimation procedure builds on Adao, Costinot, and Donaldson (2017) by compressing disaggregate sectoral trade data into K latent technology classes. In the multisector version (Section III, p. 330), goods are assigned to S observable sectors, but each sector can use multiple latent factors, relaxing the assumption that technology classes equal observed sectors.

Under the separability condition on factor-level scale parameters (eq. 21, p. 331),

$$T_{ksod}^* = (B_{sk} A_{kod})^{\theta}, \tag{21}$$

sectoral expenditure shares decompose into a sum over latent factors (eq. 22, p. 332):

$$\pi_{sod} = \sum_{k=1}^{K}\!\left(\frac{t_{sod}}{t_{kod}^*}\right)^{\!\!-\sigma_k} \lambda_{sk}\, \pi_{kod}^*, \tag{22}$$

where $$\sigma_k \equiv \theta/(1-\rho_k)$$ is the within-factor elasticity of substitution, $$\lambda_{sk} \equiv B_{sk}^{\sigma_k}/\sum_{s'} B_{s'k}^{\sigma_k}$$ are sector-factor weights (time-invariant), and $$t_{kod}^* \equiv (\sum_s t_{sod}^{-\sigma_k}\lambda_{sk})^{-1/\sigma_k}$$ is a factor-level tariff index. The cross-price elasticity between any two sector-origin pairs so and s'o' (eq. 20, p. 331) is:

$$\varepsilon_{sos'o'd} = \theta\sum_{k=1}^{K}\frac{\rho_k}{1-\rho_k}\,\pi_{ksod}^W\,\pi_{ks'o'd}^W\,\frac{\pi_{kd}^B}{\pi_{sod}} \geq 0. \tag{20}$$

This is zero when all $$\rho_k = 0$$ or sectors share no latent factors (the sectoral gravity model, SGM). Nonzero values arise when two sector-origin pairs rely on factors with high within-factor correlation and similar within-factor expenditure shares.

The LFM is estimated by minimizing the pseudo-Poisson deviance via non-negative matrix factorization (Lee and Seung 1999, 2000; Fu et al. 2019). For a given K, the joint estimation problem (eq. 29, p. 334) is:

$$\hat{\Sigma},\,\hat{\Lambda},\,\hat{\Phi}^* = \arg\min_{\Sigma \geq 0,\,\Lambda \geq 0,\,\Phi^* \geq 0}\;\sum_{s,o,d,t}\ell\!\left(\pi_{sodt},\;\sum_{k=1}^{K} t_{sodt}^{-\sigma_k}\lambda_{sk}\phi_{kodt}^*\right), \tag{29}$$

where $$\ell(x, \hat{x}) = 2[x\ln(x/\hat{x}) - (x - \hat{x})]$$ is the Poisson deviance. Non-negativity of $$\Lambda$$ and $$\Phi^*$$ ensures uniqueness of the factorization (up to permutation and scale) under general conditions (Fu et al. 2019). The number of factors K is chosen via likelihood ratio tests comparing specifications; K = 7 is selected because K = 8 yields p-value = 1.0 (Table 1, p. 335).

The shape parameter $$\theta$$ is estimated as $$\theta = \min_{k}\hat{\sigma}_k = 0.375$$, the conservative upper bound consistent with all $$\rho_k \geq 0$$ (p. 335). Factor correlation coefficients are then $$\rho_k = 1 - \theta/\sigma_k$$.

### Remaining numbered main-text equations

The following numbered relations complete the paper's main-text equation sequence; locators refer to the printed article pages.

Equations (2)-(5) state the independence and symmetric-correlation benchmarks (pp. 322-323):

$$
\Pr[Z_{1d}(v)\le z_1,\ldots,Z_{Nd}(v)\le z_N]
=\prod_{o=1}^{N}\Pr[Z_{od}(v)\le z_o]
=\exp\left(-\sum_{o=1}^{N}T_{od}z_o^{-\theta}\right). \tag{2}
$$

$$
G^d(x_1,\ldots,x_N)=\sum_{o=1}^{N}x_o. \tag{3}
$$

$$
\Pr[Z_{1d}(v)\le z_1,\ldots,Z_{Nd}(v)\le z_N]
=\exp\left[-\left(\sum_{o=1}^{N}(T_{od}z_o^{-\theta})^{1/(1-\rho)}\right)^{1-\rho}\right]. \tag{4}
$$

$$
G^d(x_1,\ldots,x_N)=\left(\sum_{o=1}^{N}x_o^{1/(1-\rho)}\right)^{1-\rho}. \tag{5}
$$

The delivered-good price and the independent-productivity CES benchmark are equations (7) and (10) (pp. 325-326):

$$
P_d(v)=\min_{o=1,\ldots,N}\frac{W_o}{Z_{od}(v)}. \tag{7}
$$

$$
\pi_{od}=\frac{P_{od}^{-\theta}}{\sum_{o'=1}^{N}P_{o'd}^{-\theta}}. \tag{10}
$$

Equation (11) defines the cross-price elasticity under a general correlation function (p. 326):

$$
\varepsilon_{oo'd}\equiv\frac{\partial\ln\pi_{od}}{\partial\ln(P_{o'd}/P_d)}
=-\theta\frac{P_{o'd}^{-\theta}G^d_{oo'}(P_{1d}^{-\theta},\ldots,P_{Nd}^{-\theta})}{G^d_o(P_{1d}^{-\theta},\ldots,P_{Nd}^{-\theta})}\geq 0,\quad o'\ne o. \tag{11}
$$

For CNCES, the nest shares in equation (12) sum to total origin expenditure, and equation (13) gives their cross-price elasticity (p. 327):

$$
\pi_{od}=\sum_{k=1}^{K}\pi^*_{kod},\qquad
\pi^*_{kod}=\pi^W_{kod}\pi^B_{kd}. \tag{12}
$$

$$
\varepsilon_{oo'd}=\theta\sum_{k=1}^{K}\frac{\rho_k}{1-\rho_k}
\pi^W_{kod}\pi^W_{ko'd}\frac{\pi^B_{kd}}{\pi_{od}},\quad o'\ne o. \tag{13}
$$

Equations (14)-(15) express real wages and changes in real wages using the correlation-adjusted self-trade share (p. 328):

$$
\frac{W_d}{P_d}=\gamma^{-1}T_{dd}^{1/\theta}(\widetilde{\pi}_{dd})^{-1/\theta},
\qquad \widetilde{\pi}_{dd}\equiv\frac{\pi_{dd}}{G^d_d(P_{1d}^{-\theta},\ldots,P_{Nd}^{-\theta})}. \tag{14}
$$

$$
\frac{W'_d/P'_d}{W_d/P_d}=\left(\frac{\widetilde{\pi}'_{dd}}{\widetilde{\pi}_{dd}}\right)^{-1/\theta}. \tag{15}
$$

For the multisector model, equation (18) is the joint productivity distribution and equation (19) is the sector-origin expenditure share formed by aggregating factor-level shares (pp. 330-331):

$$
\Pr[Z_{sod}(v)\le z_{so},\ \forall s,o]
=\exp\left[-\sum_{k=1}^{K}\left(\sum_{s=1}^{S}\sum_{o=1}^{N}
(T^{*k}_{sod}z_{so}^{-\theta})^{1/(1-\rho_k)}\right)^{1-\rho_k}\right]. \tag{18}
$$

$$
\pi_{sod}=\sum_{k=1}^{K}\pi^{*k}_{sod}. \tag{19}
$$

The parameter definitions, rank bound, and sector-restricted benchmarks are equations (23)-(28) (pp. 332-333):

$$
\sigma_k\equiv\frac{\theta}{1-\rho_k},\qquad
\lambda_{sk}\equiv\frac{B_{sk}^{\sigma_k}}{\sum_{s'=1}^{S}B_{s'k}^{\sigma_k}},\qquad
 t^*_{kod}\equiv\left(\sum_{s'=1}^{S}t_{s'od}^{-\sigma_k}\lambda_{s'k}\right)^{-1/\sigma_k}. \tag{23}
$$

$$
K\leq\frac{S N^2}{S+N^2}. \tag{24}
$$

$$
\pi^*_{kod}=\pi^W_{kod}\pi^B_{kd},\qquad
\pi^W_{kod}=\frac{(t^*_{kod}W_o/A_{kod})^{-\sigma_k}}{\sum_{o'=1}^{N}(t^*_{ko'd}W_{o'}/A_{ko'd})^{-\sigma_k}},\qquad
\pi^B_{kd}=\frac{\left[\sum_{o'=1}^{N}(t^*_{ko'd}W_{o'}/A_{ko'd})^{-\sigma_k}\right]^{\theta/\sigma_k}}{\sum_{k'=1}^{K}\left[\sum_{o'=1}^{N}(t^*_{k'o'd}W_{o'}/A_{k'o'd})^{-\sigma_{k'}}\right]^{\theta/\sigma_{k'}}}. \tag{25}
$$

$$
\pi_{sod}=\frac{(t_{sod}W_o/A_{sod})^{-\sigma_s}}{\sum_{o'=1}^{N}(t_{so'd}W_{o'}/A_{so'd})^{-\sigma_s}}\,\frac{\left[\sum_{o'=1}^{N}(t_{so'd}W_{o'}/A_{so'd})^{-\sigma_s}\right]^{\theta/\sigma_s}}{\sum_{s'=1}^{S}\left[\sum_{o'=1}^{N}(t_{s'o'd}W_{o'}/A_{s'o'd})^{-\sigma_{s'}}\right]^{\theta/\sigma_{s'}}}. \tag{26}
$$

$$
\varepsilon_{sos'o'd}=(\sigma_s-\theta)\pi^W_{so'd}\mathbf{1}\{s=s'\},\qquad s o\ne s'o'. \tag{27}
$$

$$
\pi_{sodt}=\sum_{k=1}^{K}t_{sodt}^{-\sigma_k}\lambda_{sk}\phi^{*}_{kodt}. \tag{28}
$$

Equation (30) aggregates sectoral elasticities into the origin-level elasticity (p. 340):

$$
\varepsilon_{oo'd}=\sum_{s=1}^{S}\sum_{s'=1}^{S}\frac{\pi_{sod}}{\pi_{od}}\varepsilon_{sos'o'd}. \tag{30}
$$

With input-output linkages, equation (31) gives gains from trade using the Leontief inverse (p. 344):

$$
\frac{W_d/P_d}{W_d^A/P_d^A}
=\left\{\sum_{s=1}^{S}\left[\prod_{s'=1}^{S}(\pi^W_{s'dd})^{-a_{ss'd}/\sigma_{s'}}\right]^{-\theta}\pi^B_{sd}\right\}^{-1/\theta},\qquad a_{ss'd}=[(I-A_d)^{-1}]_{ss'}. \tag{31}
$$

These are model and structural-estimation relations, not reduced-form regressions. The primary empirical specification is the pseudo-Poisson minimization in equation (29), with nonnegative factor weights, expenditures, and elasticities. The sample is 5,528,764 sector-origin-destination-year observations from 1999-2007. The article reports standard errors for estimated factor elasticities in Table 2 (p. 336); it does not specify a regression fixed-effect set or a clustering rule for those standard errors. The robustness estimate of θ uses between-factor variation in the factor-level gravity equation (25), with details in online Appendix O.8.

## Empirical specifications

The baseline estimation uses four-digit SITC bilateral trade flow and tariff data from Comtrade combined with WIOD aggregate sectoral expenditure data, covering 31 countries and S = 787 sectors over 1999-2007 (5,528,764 sector-origin-destination-year observations; p. 333 and online Appendix O.9). Factor weights $$\lambda_{sk}$$ and within-factor elasticities $$\sigma_k$$ are assumed time-invariant across the sample period; factor-level expenditures $$\phi_{kodt}^*$$ can vary over time.

The **sectoral gravity model** (SGM) restricts each latent factor to one sector ($$B_{sk} = 0$$ for $$s \neq k$$, so $$\lambda_{sk} = \mathbf{1}\{k = s\}$$), yielding the sector-level gravity specification (eq. 26, p. 332) used as a benchmark. SGM implies $$\varepsilon_{sos'o'd} = 0$$ for $$s \neq s'$$ (no cross-sector substitution) and $$\varepsilon_{soo'd} = (\sigma_s - \theta)\pi_{sod}^W$$ for within-sector pairs. The CES model further restricts all $$\rho_k = 0$$, recovering the ACR sufficient-statistic result.

Counterfactuals use hat-algebra applied to the CNCES gains-from-trade formula (17). For the US protectionism exercise, the total effect on US real wages of a tariff increase on China by $$\Delta t$$ is decomposed (eq. 32, p. 344) into:

$$\frac{d\ln(W_d/P_d)}{d\ln t_{o'd}} = \underbrace{(1 - \pi_{dd})\frac{d\ln(W_d/W_{o'})}{d\ln t_{o'd}}}_{\text{domestic wage effect}} - \underbrace{\sum_{o \neq d,\,o \neq o'}\pi_{od}\frac{d\ln(W_o/W_{o'})}{d\ln t_{o'd}}}_{\text{third-party effect}} - \underbrace{\pi_{o'd}}_{\text{direct tariff effect}}. \tag{32}$$

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
