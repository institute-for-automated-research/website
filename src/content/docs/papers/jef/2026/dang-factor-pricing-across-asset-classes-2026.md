---
title: "Factor Pricing Across Asset Classes: Dang, Hollstein & Prokopczuk (2026)"
description: >-
  Distilled: Factor models specialized for one asset class have limited pricing
  power across others; markets are significantly but imperfectly integrated.
  An optimal eight-factor integrated model spanning five asset classes achieves
  a full-sample Sharpe ratio of 1.053, far exceeding the AMP global benchmark
  (0.171) and all single-class models. Journal of Empirical Finance 2026,
  CC BY-NC 4.0. Six core results with source locators, datasets used, the
  method, and the empirical specifications.
sidebar:
  label: Dang-Hollstein-Prokopczuk 2026
  order: 1
tags: [paper-summary, asset-pricing, factors, factor-models, market-integration,
       cross-section, portfolio-sort, panel-regression, open-access,
       peer-reviewed, unreplicated,
       data:ken-french, data:open-source-asset-pricing, data:datastream]
paper:
  authors: Thuy Duong Dang, Fabian Hollstein, Marcel Prokopczuk
  authorList:
    - { family: Dang, given: Thuy Duong, orcid: 0000-0002-1345-2642, affiliation: Leibniz University Hannover }
    - { family: Hollstein, given: Fabian, orcid: 0000-0002-0838-1544, affiliation: Saarland University }
    - { family: Prokopczuk, given: Marcel, orcid: 0000-0003-4886-2729, affiliation: "Leibniz University Hannover; University of Reading (ICMA Centre)" }
  year: 2026
  venue: Journal of Empirical Finance 87 (2026) 101688
  venueShort: J. Empir. Finance 2026
  doi: 10.1016/j.jempfin.2026.101688
  tier: lower
  jel:
    codes: [G12, C11, C52]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Financial Markets and Investment Strategies", "Auction Theory and Applications", "Consumer Market Behavior and Pricing"]
  dataAccess: licensed-commercial
  outcome:
    - cross-asset-class factor pricing power and spanning
    - Sharpe ratio of integrated multi-asset factor model
    - mutual fund alpha under multi-asset benchmark
  outcomeClass: [security-returns]
  license: 'CC BY-NC 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by-nc/4.0/, delay-in-days 0, start 2026-01-21; corroborated by artifact p. 1 CC BY-NC notice)'
  licenseShort: CC BY-NC 4.0
  access: open
  machineAccess: 'open-access (ScienceDirect, CC BY-NC 4.0; checked 2026-06-25)'
  redistribution: extract-only (CC BY-NC 4.0 permits non-commercial reproduction with attribution; PDF not hosted in this batch)
  resultsCount: 6
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, portfolio-sort, bs-czz-model-selection]
    identification: descriptive
  contributionType: [new-fact, measurement]
  scope:
    region: global
    assetClass: "US equities, international equities, corporate bonds, commodities, currencies, equity indices, government bonds"
    period: 2006-08..2019-12
    frequency: monthly
    dataType: [market, accounting]
    granularity: [aggregate, security]
    n: "77 factor candidates across 7 asset classes; 162 months (Aug 2006-Dec 2019)"
  findings:
    - { ref: R1, outcome: "cross-asset-class factor pricing power and spanning", metric: r-squared, value: "US market factor: int. equities R²=71.2%, equity indices R²=78.6%, corporate bonds R²=24.1%, govt bonds R²=8.01%; GRS=3.72** rejects jointly zero alphas (Table 3, Panel A)", direction: mixed }
    - { ref: R2, outcome: "Sharpe ratio of integrated multi-asset factor model", metric: sharpe-ratio, value: "winner1_across full-sample SR=1.053 (Table 8)", direction: positive, vsBenchmark: "vs AMP global SR=0.171; vs best single-class models SR range 0.060-0.756" }
    - { ref: R3, outcome: "Sharpe ratio of integrated multi-asset factor model", metric: sharpe-ratio, value: "squared SR diff vs winner_useq=0.832**; vs IRP (corp bonds)=0.501**; all 16 pairwise diffs positive and significant at 1% (Table 7)", direction: positive, vsBenchmark: "dominates all single-class and existing integrated models at 1% significance" }
    - { ref: R4, outcome: "Sharpe ratio of integrated multi-asset factor model", metric: sharpe-ratio, value: "T/2 PERFw=0.817; 2T/3 PERFw=0.750 (Table 8)", direction: positive, vsBenchmark: "at least 48% higher OOS SR than any single-class model; vs AMP PERFw=0.132" }
    - { ref: R5, outcome: "cross-asset factor alpha under integrated model", metric: probability, value: "12 of 77 factors (15.6%) have significant alpha with t>=1.96 vs integrated model; GRS cannot reject jointly zero alphas for 4 of 7 asset classes: U.S. equities, commodities, equity indices, government bonds (Table 9, Section 5.3)", direction: mixed }
    - { ref: R6, outcome: "mutual fund alpha under multi-asset benchmark", metric: alpha, value: "average absolute alpha 0.16%/month; 111 of 15,968 funds significantly positive (Table 10)", direction: negative, vsBenchmark: "vs FF5_inteq: avg 0.23%/month, 2,903 sig. positive; vs winner_useq: 0.23%/month, 235 sig. positive" }
  resultType: new-finding
  relatesTo:
    - { cite: "Pukthuanthong, Roll & Subrahmanyam (2019)", doi: '10.1093/rfs/hhy093', relation: builds-on, note: "factor identification protocol (PRS) used to screen viable risk factors via canonical correlations with PC-spanned return space" }
    - { cite: "Barillas & Shanken (2018)", doi: '10.1111/jofi.12607', relation: builds-on, note: "Bayesian model comparison via Sharpe ratio maximization underpins the BS-CZZ model selection step" }
    - { cite: "Chib, Zeng & Zhao (2020)", doi: '10.1111/jofi.12854', relation: builds-on, note: "BS-CZZ Bayesian model scan algorithm for posterior model probability ranking across factor subsets" }
    - { cite: "Asness, Frazzini & Pedersen (2013)", relation: tests, note: "48 VME portfolios used as main cross-asset test assets; AMP global three-factor model serves as integrated model benchmark" }
    - { cite: "Cooper, Mitrache & Priestley (2022)", relation: tests, note: "five-macro AMP model benchmarked; integrated model dominates on full-sample and OOS Sharpe ratios" }
    - { cite: "Fama & French (1993)", doi: '10.1016/0304-405x(93)90023-5', relation: tests, note: "equity factors benchmarked across asset classes; winner_useq SR=0.418 vs integrated SR=1.053" }
    - { cite: "Cochrane (2009)", relation: builds-on, note: "theoretical motivation: single SDF should price all assets under law of one price" }
  openQuestions:
    - "After-cost performance of the integrated model factors has not been examined; transaction costs may erode part of the Sharpe ratio advantage (p. 18)."
    - "How closely investors can replicate the theoretical Sharpe ratios in practice, given that the integrated model requires long-short factor portfolios, is not resolved (p. 18)."
    - "Performance of the integrated factor model for more exotic asset classes (hedge funds, options) is not studied (p. 18)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (pp. 1-19 + references); six results extracted from Tables 3, 7, 8, 9, and 10. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; four fixes applied: (1) Eq. 4 exponent corrected from -T/2 to +T/2 (negative exponent contradicted Eq. 5 arg max); (2) R3 comparison corrected from 'FF5_useq winner +0.845**' to 'winner_useq +0.832**' (0.845 is HXZ5_useq row 1, winner_useq row 2 is 0.832, Table 7); (3) R5 non-significant GRS classes corrected from 'commodities, FX, equity indices, govt bonds' to 'U.S. equities, commodities, equity indices, govt bonds' (FX GRS=2.65* is significant, Table 9); (4) R6 winner_useq sig-positive count corrected from 2,182 to 235 (2182 is AQR_cm, winner_useq is 235, Table 10)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jempfin.2026.101688", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by-nc/4.0/, delay-in-days=0, start=2026-01-21" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the conceptual framework (degrees of market integration, SDF theory), the two-step factor selection method (PRS protocol and BS-CZZ model scan), and the empirical specifications: enough to know what was found and how, without reading all 19 pages. To replicate or extend the work, read the full source at the [original](https://doi.org/10.1016/j.jempfin.2026.101688).

## TL;DR

Dang, Hollstein, and Prokopczuk study whether the factors that price one asset class can also price others. Across 77 factor candidates drawn from seven major asset classes (U.S. equities, international equities, corporate bonds, commodities, currencies, equity indices, and government bonds), covering August 2006 to December 2019, they find that markets are significantly but imperfectly integrated: asset class-specific models fail to explain most factors from other classes, yet some notable cross-market linkages exist. Using the PRS factor-identification protocol of Pukthuanthong, Roll, and Subrahmanyam (2019) and the BS-CZZ Bayesian model selection of Barillas and Shanken (2018) and Chib, Zeng, and Zhao (2020), they identify an optimal integrated eight-factor model drawing on five asset classes. This model achieves a full-sample Sharpe ratio of 1.053 and out-of-sample Sharpe ratios at least 48% higher than any single-class model, and leaves only 111 of 15,968 mutual funds with a statistically significant positive alpha, making it a substantially stronger benchmark for fund evaluation.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **U.S. market factor explains some but not all asset classes.** R² is high for international equities and equity indices but near zero for government bonds; GRS rejects jointly zero alphas | Table 3, Panel A, p. 6 | Int. equities R²=71.2%, equity indices R²=78.6%, corporate bonds R²=24.1%, FX R²=36.1%, govt bonds R²=8.01%; GRS=3.72\*\* |
| R2 | **Optimal integrated model (winner1\_across) achieves full-sample SR=1.053**, far above AMP global model (SR=0.171) and all single-class models | Table 8, p. 13 | winner1\_across SR=1.053; winner2\_across SR=1.095; AMP\_across SR=0.171; best single-class model is winner\_cb SR=0.756 |
| R3 | **Integrated model significantly dominates all single-class models in pairwise squared SR tests**; all 16 pairwise differences are positive and statistically significant | Table 7, p. 12 | vs winner\_useq (best US equity model): +0.832\*\*; vs IRP (corp bonds): +0.501\*\*; vs AMP\_across: +0.980\*\* |
| R4 | **Out-of-sample Sharpe ratio of integrated model remains high**; at least 48% higher OOS SR than any single-class model | Table 8, p. 13 | T/2 PERF=1.059, PERFw=0.817; 2T/3 PERF=1.219, PERFw=0.750; vs AMP\_across PERFw=0.132 |
| R5 | **Integrated model explains most factors across all classes**; only 12 of 77 viable factors have a significant alpha; GRS fails to reject jointly zero alphas for 4 of 7 asset classes | Table 9, Section 5.3, pp. 12-17 | 12/77 (15.6%) factors with \|t\|≥1.96 vs integrated model; GRS p-values non-significant for U.S. equities, commodities, equity indices, government bonds |
| R6 | **Integrated model reduces spurious positive fund alphas**; average absolute fund alpha falls and the count of significantly positive alphas drops from thousands to 111 | Table 10, pp. 17-18 | Avg absolute alpha=0.16%/month; 111 sig. positive funds; vs FF5\_inteq: 0.23%/month avg, 2,903 sig. positive; vs winner\_useq: 0.23%/month avg, 235 sig. positive |

**Overall (paper's conclusion).** Factor models that specialize in one asset class typically fail to price factors from other classes. There is strong evidence of multiple underlying systematic risk drivers across markets, but also of interdependencies: markets are significantly but imperfectly integrated. The Fama and French (1993) equity size and value factors, for example, have limited reach across corporate bond and government bond classes. The AMP global three-factor model of Cooper, Mitrache, and Priestley (2022) achieves a full-sample Sharpe ratio of only 0.171 in this setting. The 48 value-and-momentum portfolios of Asness, Frazzini, and Pedersen (2013) are used as the main cross-asset test assets throughout. A unified eight-factor model (MKT\_useq, SMB\_inteq, MGMT\_inteq, QMJ\_inteq, Carry\_cb, MOMeq\_cb, MOM\_fxaqr, Carry\_eqi) drawn from five asset classes spans the majority of all prominent factors across the seven classes and provides a substantially better benchmark for multi-asset fund managers than any single-asset-class model.

## Theory / model

The paper has no new formal model. Its theoretical motivation draws on two classical results.

**SDF theory (Cochrane 2009).** Under no-arbitrage, a single stochastic discount factor $$M_t$$ prices all assets simultaneously. For any excess return $$R^e_{i,t+1}$$ (p. 1 of the paper):

$$
E_t\!\left[M_{t+1}\, R^e_{i,t+1}\right] = 0, \quad i = 1, \ldots, N \tag{1}
$$

This implies that, in principle, one set of risk factors should suffice to price all asset classes. A purely class-specific factor model is consistent with this only if there are no cross-market risk drivers, that is, if markets are completely disintegrated.

**Mean-variance efficiency and Sharpe ratios.** The Markowitz (1952) tangency portfolio of a candidate factor set $$\mathbf{F}$$ achieves the maximum Sharpe ratio attainable from that set:

$$
\text{SR}^2(\mathbf{F}) = \boldsymbol{\mu}_F'\, \boldsymbol{\Sigma}_F^{-1}\, \boldsymbol{\mu}_F \tag{2}
$$

where $$\boldsymbol{\mu}_F$$ and $$\boldsymbol{\Sigma}_F$$ are the mean vector and covariance matrix of factor excess returns. Barillas and Shanken (2018) show that comparing two candidate factor sets reduces to comparing their tangency Sharpe ratios: if $$\text{SR}^2(\mathbf{F}_j) > \text{SR}^2(\mathbf{F}_k)$$, model $$j$$ is preferred. This makes the Sharpe ratio the natural model-selection criterion.

**Three hypotheses tested.** The paper tests three mutually exclusive hypotheses (p. 2):

- *Perfect integration*: a common set of global factors prices all asset classes; no class-specific factors are needed.
- *Partial integration*: some factors are common across classes; others are class-specific; both are needed for full explanation.
- *Complete disintegration*: each asset class has its own independent set of risk factors; cross-class pricing power is zero.

The results reject both perfect integration (GRS=3.72\*\* in Table 3, and many significant cross-class alphas in Table 5) and complete disintegration (many significant cross-market factor loadings and an integrated model that prices most remaining factors).

## Method

The empirical strategy has two steps, applied first within each asset class and then across all classes jointly.

**Step 1: PRS factor identification (Pukthuanthong, Roll, and Subrahmanyam 2019, pp. 7-8).** For each asset class, extract the first $$K$$ principal components $$\mathbf{p}_{1:K,t}$$ from the full universe of test portfolios using the Connor-Korajczyk (1988) method. For each candidate factor $$f_{k,t}$$, compute canonical correlations between $$f_{k,t}$$ and $$\mathbf{p}_{1:K,t}$$ in two equal sub-periods. Factor $$f_k$$ is a viable risk factor if and only if:

$$
\overline{|\hat{t}_j|} > 1.96 \quad \text{and} \quad \overline{\hat{s}_j} > 0.25 \tag{3}
$$

where $$\overline{|\hat{t}_j|}$$ is the average absolute t-statistic of significant canonical correlations over both sub-periods and $$\overline{\hat{s}_j}$$ is the average fraction of significant canonical correlations out of $$K$$. Factors failing this test are discarded as non-viable.

**Step 2: BS-CZZ Bayesian model selection (Barillas and Shanken 2018; Chib, Zeng, and Zhao 2020, pp. 7-8 and Online Appendix OA4).** Among factors that pass Step 1, perform an exhaustive Bayesian model scan over all factor subsets. Each candidate model $$\mathcal{M}_j$$ receives a posterior model probability proportional to (via the Barillas-Shanken marginal likelihood):

$$
P(\mathcal{M}_j \mid \text{data}) \propto \left(1 + \hat{\text{SR}}^2(\mathbf{F}_j)\right)^{T/2} \cdot p(\mathcal{M}_j) \tag{4}
$$

where $$\hat{\text{SR}}^2(\mathbf{F}_j) = \hat{\boldsymbol{\mu}}_j' \hat{\boldsymbol{\Sigma}}_j^{-1} \hat{\boldsymbol{\mu}}_j$$ is the sample squared tangency Sharpe ratio of the factor set $$\mathbf{F}_j$$ over $$T$$ observations, and $$p(\mathcal{M}_j)$$ is the prior probability. The optimal model is

$$
\mathcal{M}^* = \operatorname*{arg\,max}_j\; P(\mathcal{M}_j \mid \text{data}) \tag{5}
$$

This is the `bs-czz-model-selection` procedure: it builds on `panel-regression` (spanning regressions to estimate means and covariances) and `portfolio-sort` (factor and test portfolio construction) to rank all candidate factor sets by their posterior model probability. High-collinearity factor pairs (pairwise correlation exceeding 0.8) are excluded before the scan.

## Empirical specifications

**Time-series spanning regression (Tables 3, 5, 6, 9).** For each factor or test-portfolio return $$r_{a,t}$$ from asset class $$A$$, regress on the candidate factor set $$\mathbf{F}_t$$ (from another class or the integrated model), pp. 5-6:

$$
r_{a,t} = \alpha_a + \boldsymbol{\beta}_a' \mathbf{F}_t + \varepsilon_{a,t}, \quad t = 1, \ldots, T \tag{6}
$$

The intercept $$\alpha_a$$ measures the portion of $$r_{a,t}$$ not spanned by $$\mathbf{F}_t$$. Standard errors use Newey and West (1987) with four lags. This specification ties to R1 (Table 3, market factor spanning) and R5 (Table 9, full-model spanning for all 77 viable factors).

**GRS test (Gibbons, Ross, and Shanken 1989).** To test whether all $$N$$ intercepts are jointly zero (Table 3 GRS statistic; Table 9 panel-level GRS):

$$
\text{GRS} = \frac{T - N - K}{N}\left(1 + \hat{\boldsymbol{\mu}}_F' \hat{\boldsymbol{\Sigma}}_F^{-1} \hat{\boldsymbol{\mu}}_F\right)^{-1} \hat{\boldsymbol{\alpha}}' \hat{\boldsymbol{\Sigma}}_\varepsilon^{-1} \hat{\boldsymbol{\alpha}} \;\sim\; F(N,\, T - N - K) \tag{7}
$$

where $$\hat{\boldsymbol{\alpha}}$$ is the vector of estimated intercepts and $$\hat{\boldsymbol{\Sigma}}_\varepsilon$$ is the residual covariance matrix. This specification ties to R1 (GRS=3.72\*\* for market factors, Table 3) and R5 (GRS fails to reject for 4 of 7 asset classes, Table 9).

**Pairwise equality of squared Sharpe ratios (Barillas, Kan, Robotti, and Shanken 2020, Table 7, p. 12).** For each pair of candidate factor models $$j$$ and $$k$$:

$$
H_0:\; \text{SR}_j^2 = \text{SR}_k^2 \quad \text{vs} \quad H_a:\; \text{SR}_j^2 \neq \text{SR}_k^2 \tag{8}
$$

The bias-adjusted test statistic uses the asymptotic distribution of the sample squared Sharpe ratio difference, correcting for estimation error in the factor means and covariances. All 16 pairwise tests of the integrated model against single-class models and existing integrated benchmarks are reported in Table 7; all differences favor the integrated model at the 1% level (R3).

**Mutual fund performance evaluation (Section 5.5, Table 10).** For each of 15,968 mixed-asset mutual funds with at least 100 monthly return observations in LSEG Datastream (U.S. dollars, euros, British pounds, or Japanese yen):

$$
R^f_{i,t} = \alpha_i + \boldsymbol{\beta}_i' \mathbf{F}_t + \varepsilon_{i,t} \tag{9}
$$

where $$R^f_{i,t}$$ is the excess fund return and $$\mathbf{F}_t$$ is the integrated factor model. Standard errors use Newey-West (1987) with four lags. The headline comparison is the number of significantly positive $$\hat{\alpha}_i$$ (t-stat $$\geq 1.96$$) under each benchmark model (R6, Table 10).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Kenneth French Data Library | U.S. equity factor candidates (MKT, SMB, HML, RMW, CMA, UMD, BAB, QMJ); international equity factors; characteristic-sorted test portfolios for U.S. and international equities | [Ken French library](/wiki/datasets/ken-french/) |
| Open Source Asset Pricing (Chen and Zimmermann 2022) | Supplementary U.S. equity factor candidates (IA, ROE, ME, etc.) | [Open Source Asset Pricing](/wiki/datasets/open-source-asset-pricing/) |
| Refinitiv Datastream | Equity index returns for 43 countries (Aug 2006-Dec 2019); government bond index returns for 22 countries; also global equity index factors | [Datastream](/wiki/commercial/datastream/) (commercial) |
| Commodity Research Bureau (CRB) | Nearest-to-maturity futures prices for 21 commodity contracts; rolled 2 months before expiration; basis for commodity factor construction | no page yet |
| AQR factor library (Asness-Frazzini, Frazzini-Pedersen, Asness et al., Ilmanen et al.) | U.S. equity BAB, QMJ; corporate bond factors; currency factors; time-series momentum factors | no page yet |
| Stambaugh and Yuan (2017); Daniel et al. (2020) | U.S. mispricing (MGMT, PERF, PEAD, FIN) and DHS behavioral factors; authors extend the series to the full sample | no page yet |
| Hanauer (2020); Jensen et al. (2023) | Global equity factor candidates including size, momentum, ROE, and international BAB/QMJ | no page yet |
| Kelly and Pruitt (2022); Lustig et al. (2011); Verdelhan (2018) | Corporate bond term-structure factors; currency carry and dollar factors | no page yet |

Sample: August 2006 to December 2019 (162 months). The common sample is determined by the availability of all 77 candidate factors. An extended sample (July 1990 to June 2022) is used for robustness in the Online Appendix.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jempfin.2026.101688) if you are: building a multi-asset-class factor model and need the factor-selection algorithm (PRS + BS-CZZ) and the precise list of the eight integrated factors (Table 6); evaluating asset managers against a cross-asset benchmark and need the exact benchmark specification (Table 10 columns); comparing the explanatory reach of single-class factor models across markets (Tables 5 and 9 heat maps); or examining whether a candidate factor is priced globally (spanning regressions in Table 9, one panel per class). The Online Appendix contains full robustness results and an extended sample running to June 2022.

## Attribution and rights

Source: peer-reviewed, *Journal of Empirical Finance* 87 (2026) 101688. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. CC BY-NC 4.0: non-commercial reproduction with attribution is permitted; commercial use requires permission from Elsevier.

> Dang, Thuy Duong, Fabian Hollstein, and Marcel Prokopczuk.
> "Factor pricing across asset classes."
> *Journal of Empirical Finance* 87 (2026) 101688.
> DOI: 10.1016/j.jempfin.2026.101688. © 2026 The Author(s).
> Licensed under [CC BY-NC 4.0](http://creativecommons.org/licenses/by-nc/4.0/).
> This page is an extract by the Institute for Automated Research; **changes were made**.
