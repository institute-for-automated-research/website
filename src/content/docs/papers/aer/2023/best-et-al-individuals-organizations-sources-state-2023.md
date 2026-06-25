---
title: "Individuals and Organizations as Sources of State Effectiveness: Best, Hjort & Szakonyi (2023)"
description: >-
  Distilled: Using 16 million Russian public procurement transactions (2011-2016),
  the paper measures that individual bureaucrats and organizations jointly explain
  39 percent of the variation in quality-adjusted government procurement prices,
  with bureaucrats and organizations each accounting for roughly half. Bid
  preferences favoring domestic suppliers reduce prices when implemented by less
  effective bureaucrats but raise them when implemented by more effective ones.
  American Economic Review 2023, paywalled. Seven core results with source
  locators, datasets, the procurement model, and the variance decomposition
  method with defining equations.
sidebar:
  label: Best-Hjort-Szakonyi 2023
  order: 1
tags: [paper-summary, public-economics, bureaucracy, procurement, industrial-policy,
       natural-experiment, difference-in-differences, panel-regression, peer-reviewed,
       unreplicated, data:zakupki, data:ruslana, data:rosstat, data:clearspending]
paper:
  authors: Michael Carlos Best, Jonas Hjort, David Szakonyi
  authorList:
    - { family: Best, given: Michael Carlos, affiliation: Columbia University }
    - { family: Hjort, given: Jonas, orcid: "0009-0005-9466-3925", affiliation: University College London }
    - { family: Szakonyi, given: David, orcid: "0000-0002-3796-0297", affiliation: George Washington University }
  year: 2023
  venue: "American Economic Review 113(8), August 2023, pp. 2121-2167"
  venueShort: AER 2023
  doi: 10.1257/aer.20191598
  jel:
    codes: [D73, H57, H83, L14, P26]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Corruption and Economic Development", "Fiscal Policy and Economic Growth", "Corporate Finance and Governance"]
  dataAccess: licensed-commercial
  outcome:
    - quality-adjusted prices paid in government procurement
    - spending-quality index (contract renegotiations, delays, cost overruns)
    - probability of domestic supplier winning under bid preferences
  outcomeClass: [political-development]
  license: "No open license found in Crossref REST API works/10.1257/aer.20191598 (no license block returned). Paywalled, American Economic Association."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA publisher site, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 75
  methods:
    role: both
    contributes: akm-covariance-shrinkage
    family: reduced-form-causal
    buildsFrom: [panel-regression, difference-in-differences, event-study, lasso, akm-variance-decomposition]
    identification: natural-experiment
  contributionType: [new-fact, measurement, new-method]
  mechanisms: [agency, participation-frictions]
  scope:
    region: Russia
    assetClass: government off-the-shelf goods procurement
    period: 2011-01..2016-12
    frequency: mixed
    dataType: [administrative]
    granularity: [individual, firm, transaction]
    n: "16 million purchases, 37,722 bureaucrats, 44,560 organizations, 2011-2016"
  findings:
    - ref: R1
      outcome: quality-adjusted prices paid in government procurement
      metric: r-squared
      value: "combined bur+org SD within connected sets = 0.489 log points; total price SD | good, month = 1.280 log points; ratio = 38.2% (~39%; covariance shrinkage col 6, Table 2, p. 2143)"
      direction: positive
    - ref: R2
      outcome: quality-adjusted prices paid in government procurement
      metric: r-squared
      value: "bureaucrats: covariance-shrunk SD = 0.263 log points (~21% of price SD); organizations: SD = 0.338 log points (~26%); bur-org correlation = 0.311 (covariance shrinkage col 6, Table 2, p. 2143)"
      direction: positive
    - ref: R3
      outcome: quality-adjusted prices paid in government procurement
      metric: pp-effect
      value: "raising Q1 to Q75 bureaucrats: 4.6% cost savings; raising all bur+org below Q25 to Q75: 13.9% savings (~US$10 billion/year, ~0.7% of nonresource GDP; §IVC, pp. 2143-2144)"
      direction: negative
    - ref: R4
      outcome: spending-quality index (contract renegotiations, delays, cost overruns)
      metric: correlation
      value: "0.43 between bureaucrats' price and spending-quality effects; 0.48 for organizations (Figure 3, p. 2148)"
      direction: positive
    - ref: R5
      outcome: quality-adjusted prices paid in government procurement
      metric: coefficient
      value: "-0.004 (SE 0.010), not significant; domestic winner probability: +0.042 (SE 0.005) in pharmaceuticals (Table 5, p. 2155)"
      direction: none
      vsBenchmark: "zero average price effect; +4.2 pp domestic-supplier share (14% relative increase) at near-zero cost"
    - ref: R6
      outcome: quality-adjusted prices paid in government procurement
      metric: coefficient
      value: "coeff on Bureaucrat FE x Preferred x PolicyActive: -0.090 (SE 0.018) full sample, -0.466 (SE 0.090) pharmaceuticals; least effective quartile ~12% price decrease; most effective quartile: price increases (Table 6 cols 1 and 4, Figure 7, pp. 2156-2158)"
      direction: mixed
      vsBenchmark: "opposite sign for bottom vs top quartile of bureaucrat effectiveness"
    - ref: R7
      outcome: quality-adjusted prices paid in government procurement
      metric: coefficient
      value: "equivalent bid penalty achieving the same overall price effect: ~10% for least effective bureaucracy subgroups, ~23% for most effective subgroups (Figure 9, pp. 2162-2163)"
      direction: mixed
      vsBenchmark: "against the uniform 15% bid preference penalty in place"
  resultType: new-finding
  relatesTo:
    - { cite: 'Abowd, Kramarz & Margolis (1999)', relation: builds-on, note: 'AKM two-dimensional variance decomposition, adapted from wages to procurement prices and extended with covariance shrinkage to correct for limited-mobility bias' }
    - { cite: 'Chetty, Friedman & Rockoff (2014)', doi: '10.1257/aer.104.9.2593', relation: builds-on, note: 'teacher value-added shrinkage estimator generalized here to two-dimensional bureaucrat-organization shrinkage with explicit estimation-error covariance correction' }
    - { cite: 'Marion (2007)', doi: '10.1016/j.jpubeco.2006.12.005', relation: tests, note: 'US bid preferences raise procurement prices and reduce participation; Best et al. find near-zero average price effect in Russia but heterogeneous effects by bureaucrat effectiveness' }
    - { cite: 'Bandiera, Prat & Valletti (2009)', doi: '10.1257/aer.99.4.1278', relation: cites, note: 'active vs passive waste in government procurement; cited as related evidence on procurement inefficiency and the role of bureaucratic discretion' }
  openQuestions:
    - "How results would change if outcomes beyond prices and spending quality (e.g. product variety or innovation) were incorporated; the paper focuses on off-the-shelf goods where the primary mandate is paying the lowest price (p. 2131, footnote 25)."
    - "Whether findings generalize to countries with different civil-service structures, institutional environments, or levels of state capacity (conclusion, pp. 2163-2164)."
    - "What the underlying sources of bureaucratic effectiveness differences are (ability, training, corruption, or organizational factors) and what direct interventions could raise effectiveness rather than only tailoring policy around it (conclusion, pp. 2163-2164)."
  replicationCode:
    url: "https://doi.org/10.3886/E184107V1"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 2121-2167); seven results extracted from the source PDF. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-24, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: JEL codes expanded to include L14 and P26 (per abstract); R5 vsBenchmark corrected from '+14 pp' to '+4.2 pp' (0.042 coefficient = 4.2 pp; 14% is a relative figure); em-dash removed from Method section." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20191598", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license block returned; paper is paywalled under American Economic Association standard subscription terms." }
---

**What this is.** The core results, model, and method of this paper, condensed to know what it found and how, without reading all 47 pages. To replicate or extend, read the full source at [doi.org/10.1257/aer.20191598](https://doi.org/10.1257/aer.20191598) and the replication package at [doi.org/10.3886/E184107V1](https://doi.org/10.3886/E184107V1).

## TL;DR

The paper quantifies how much of the Russian government's procurement performance is attributable to the individuals and organizations who run it. Using administrative data on 16 million off-the-shelf purchases (2011-2016), it estimates that individual bureaucrats and public-sector organizations together explain 39 percent of the variation in quality-adjusted prices paid. The identification strategy exploits the fact that many bureaucrats work with multiple organizations and vice versa, providing thousands of quasi-experiments from bureaucrat-organization switches. The paper is related to the evidence on active vs passive waste in public contracts by Bandiera, Prat and Valletti (2009), which it extends by separately identifying individual and organizational sources of inefficiency. Effective bureaucrats (those who pay lower prices) also achieve better spending quality (fewer delays, renegotiations, and cost overruns), so the multitasking problem is mild. In a second part, the paper introduces bid preferences that give a 15 percent price advantage to domestic suppliers. On average, these preferences achieve their goal of increasing domestic sourcing at near-zero cost, but this average masks large heterogeneity: prices fall substantially for ineffective bureaucrats and rise for effective ones, consistent with a model where participation costs are the key friction.

## Core results

Magnitudes and significance are as reported. `\*` = 5%; `\*\*\*` = 1%.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Bureaucrats and organizations jointly explain **39 percent of the variation** in quality-adjusted procurement prices | Table 2 col 6, p. 2143 | Combined bur+org SD within connected sets = 0.489 log points; SD of log price \| good, month = 1.280; ratio = 38.2% (covariance shrinkage method) |
| R2 | **Bureaucrats account for ~21 percent and organizations for ~26 percent** of price variation separately | Table 2 col 6, p. 2143 | Covariance-shrunk SD: bureaucrats = 0.263 log points, organizations = 0.338; bur-org correlation = 0.311 (positive assortative matching) |
| R3 | **Moving lowest-quartile bureaucrats to the 75th percentile** would reduce procurement costs by 4.6 percent; moving both below Q25 to Q75 saves 13.9 percent | §IVC, pp. 2143-2144 | 4.6% savings from bureaucrats only (Q1 to Q75); 13.9% combined (~US\$10 billion/year, ~0.7% of nonresource GDP) |
| R4 | **Price effectiveness and spending-quality effectiveness are positively correlated** across bureaucrats and organizations | Figure 3, p. 2148 | Correlation = 0.43 for bureaucrats; 0.48 for organizations; low-price buyers also deliver fewer delays and renegotiations |
| R5 | **Bid preferences achieve domestic sourcing at near-zero average cost**: prices are unaffected on average but the probability of a domestic supplier winning rises 14 percent | Table 5, p. 2155 | Price effect: -0.004 (SE 0.010), not significant; domestic winner probability: +0.042 (SE 0.005) in pharmaceuticals |
| R6 | **Bid preferences reduce prices by up to 12 percent for the least effective bureaucrats** but raise prices for the most effective | Table 6 cols 1 and 4, Figure 7, pp. 2156-2158 | Coefficient on Bureaucrat FE x Preferred x PolicyActive: -0.090\*\*\* (SE 0.018) full sample; -0.466\*\*\* (SE 0.090) pharmaceuticals |
| R7 | **Optimal bid penalty varies across bureaucracy types**, from 23 percent for the most effective to 10 percent for the least effective subgroup | Figure 9, pp. 2162-2163 | Equivalent penalty for same price outcome as the 15% rule achieves overall, across ten effectiveness deciles |

**Overall (paper's conclusion).** State effectiveness is embedded in individuals and organizations: bureaucrats and their employers account for a large fraction of procurement price variation, and effectiveness is embodied in individual characteristics (experience, network, auction design quality) rather than in corruption measures. Because raising bureaucratic effectiveness directly is often difficult, a feasible alternative is to tailor policy design to the capacity of the implementing bureaucracy. A "buy local" bid preference regime that is counterproductive for high-state-capacity contexts works well for low-state-capacity contexts.

## Theory / model

Section III presents a stylized model of public procurement in which state effectiveness is modeled as costs imposed on potential suppliers wishing to participate. A pair consisting of a procurement bureaucrat and an end-user organization (jointly, the bureaucracy) purchases an off-the-shelf good through a descending open-outcry auction, approximated as a second-price sealed-bid auction (p. 2133, following Milgrom 2004).

There are two potential suppliers: a foreign firm $$F$$ with higher expected productivity (Pareto parameter $$\delta_F$$) and a local firm $$L$$ (parameter $$\delta_L < \delta_F$$). Both face a common fulfillment cost component $$\log(\bar{\theta}) = \mathbf{X}'\boldsymbol{\beta} + \alpha_\theta + \psi_\theta$$, where $$\mathbf{X}$$ are observable item attributes and $$\alpha_\theta$$ and $$\psi_\theta$$ are bureaucrat and organization fulfillment-cost shifters. The bureaucracy also imposes participation cost $$c_i$$ on each supplier, determined by specification parameters $$\alpha_c$$ and $$\psi_c$$:

$$
c_i = \frac{\bar{\theta}}{1 + \delta_i} - \frac{\bar{\theta}}{1 + \delta_L}\sqrt{1 - \alpha_c - \psi_c}
$$

Suppliers independently decide whether to pay $$c_i$$ and learn their type $$\theta_i$$. In the Nash equilibrium (Proposition 1, p. 2134), entry probabilities satisfy $$q_i = \sqrt{\kappa(1 - \alpha_c - \psi_c)}$$ where $$\kappa = \min\!\left\{\left[\frac{1 + \delta_F + \delta_L}{1 + \delta_F}\right]^2, \frac{1}{1 - \alpha_c - \psi_c}\right\}$$. Expected log prices are (equation 1, p. 2134):

$$
E[\log(p)] = \log(\bar{\theta}) - \frac{q_F q_L}{\delta_F + \delta_L} = \mathbf{X}'\boldsymbol{\beta} - \frac{\kappa}{\delta_F + \delta_L} + \bar{\alpha} + \bar{\psi}, \tag{1}
$$

where $$\bar{\alpha} = \alpha_\theta + \frac{\kappa}{\delta_F + \delta_L}\alpha_c$$ and $$\bar{\psi} = \psi_\theta + \frac{\kappa}{\delta_F + \delta_L}\psi_c$$. Equation (1) delivers two predictions: (i) bureaucracies that impose higher fulfillment costs $$(\alpha_\theta, \psi_\theta)$$ pay higher prices for otherwise identical goods; (ii) bureaucracies that impose higher participation costs $$(\alpha_c, \psi_c)$$ pay higher prices and also attract fewer bidders. Both channels reduce price performance and are captured by the combined effects $$\bar{\alpha}$$ and $$\bar{\psi}$$.

**Bid preferences with heterogeneous effectiveness (Section IIIB, Proposition 2, p. 2135).** A 15 percent bid preference gives local bidder $$L$$ a price advantage: a foreign winner receives only $$\gamma = 0.85$$ times her bid as the contract price. The model predicts three regimes of bureaucratic effectiveness: (i) for very effective bureaucracies with low participation costs $$(\alpha_c + \psi_c \leq \underline{c})$$, both firms still enter, the preference primarily shifts bidding, and prices rise; (ii) for intermediate effectiveness $$(\underline{c} < \alpha_c + \psi_c \leq \bar{c})$$, the foreign firm drops out and the local winner receives the maximum price, raising prices further; (iii) for ineffective bureaucracies $$(\bar{c} < \alpha_c + \psi_c)$$ with the highest participation costs, the local firm's increased willingness to enter outweighs the bidding effect, participation rises and prices fall. The model thus predicts that preferences compress cross-bureaucracy variation in performance: they help the least effective the most and harm the most effective.

## Method

The paper extends the variance decomposition method pioneered by Abowd, Kramarz, and Margolis (1999) from the private sector to public procurement, treating bureaucrats as workers and organizations as firms. The reduced-form model for log unit price of purchase $$i$$ procured by organization $$j$$ through bureaucrat $$b(i,j)$$ is (equation 2, p. 2138):

$$
p_i = \mathbf{X}_i\boldsymbol{\beta} + \tilde{\alpha}_{b(i,j)} + \tilde{\psi}_j + \varepsilon_i, \tag{2}
$$

where $$\mathbf{X}_i$$ includes log quantity, good fixed effects, month fixed effects, and interactions of two-digit HS product categories with years, regions, and lot size. The parameters $$\tilde{\alpha}_b$$ and $$\tilde{\psi}_j$$ are overall effects including connected-set intercepts (equation 3, p. 2139):

$$
p_i = \mathbf{X}_i\boldsymbol{\beta} + \alpha_{b(i,j)} + \psi_j + \gamma_{s(b,j)} + \varepsilon_i, \tag{3}
$$

where $$\gamma_{s(b,j)}$$ is a connected-set fixed effect normalizing $$\alpha$$ and $$\psi$$ to mean zero within each connected set. Identification of bureaucrat and organization effects separately requires observation of bureaucrats working with multiple organizations and organizations working with multiple bureaucrats (the switchers). The data contain 616 connected sets with an average density of 5.2 organizations per bureaucrat and 4.8 bureaucrats per organization.

The variance decomposition (equation 4, p. 2140) attributes total price variation to its sources:

$$
\text{var}(p_i) = \text{var}(\alpha_{b(i,j)}) + \text{var}(\psi_j) + 2\,\text{cov}(\alpha_{b(i,j)}, \psi_j) + 2\,\text{cov}(\alpha_{b(i,j)} + \psi_j,\, \gamma_{s(b,j)} + \mathbf{X}_i\boldsymbol{\beta}) + \text{var}(\gamma_{s(b,j)} + \mathbf{X}_i\boldsymbol{\beta}) + \text{var}(\varepsilon_i). \tag{4}
$$

The paper addresses two finite-sample estimation problems. First, **limited mobility bias**: because the bureaucrat-organization network has only 616 connected sets with bounded within-set mobility, the naive OLS estimates of $$\hat{\alpha}_b$$ and $$\hat{\psi}_j$$ contain large sampling errors that inflate the apparent variance of each component and create a spurious negative covariance. The paper applies two bias corrections: (a) a **split-sample estimator** (following Finkelstein, Gentzkow, and Williams 2016 and Silver 2016) that randomly splits the sample and estimates the two fixed effects on each half, then forms variance components as cross-half covariances; (b) a **covariance-shrinkage estimator** that forms minimum-MSE predictions of the full vector $$(\hat{\alpha}_b, \hat{\psi}_j)$$ by weighting via a matrix $$\Lambda^*$$ accounting for both own-variance shrinkage and cross-component covariance (analogous to the shrinkage in Chetty, Friedman, and Rockoff (2014) but generalized to two dimensions). The covariance-shrinkage method is the preferred specification because it yields a plausible positive bur-org correlation of 0.311, unlike the split-sample or OLS methods which give negative estimates (Table 2, column 6, p. 2143).

Effective bureaucrats also display distinguishable process behaviors (Sections IVD-IVE). A LASSO procedure selecting 30 process predictors from 85 potential variables shows that effective bureaucrats set lower reservation prices, attract larger and more diverse supplier pools, specialize in narrower product ranges, and avoid fiscal-year-end spending rushes, all consistent with the participation-cost channel in the model.

## Empirical specifications

**Event study for causal identification (Section IVA, Figure 1, p. 2137).** To support the causal interpretation of bureaucrat and organization effects, the paper exploits 65,000 events in which organizations switch the bureaucrat they work with. Prices change sharply and in the expected direction when a new bureaucrat takes over, with an 18 percent price decrease when switching from a worst-quartile to a best-quartile bureaucrat. There is no systematic pre-trend, and price changes are symmetric for switches in both directions, consistent with the identifying assumption that drift in effectiveness and switches are uncorrelated.

**Average effect of bid preferences (equation 5, p. 2153; Table 5, p. 2155).** The paper uses a generalized difference-in-differences design, exploiting year-to-year variation in which goods appear on the domestic-preference list:

$$
y_{igt} = \mathbf{X}_{igt}\boldsymbol{\beta} + \mu_g + \lambda_t + \delta\,(\text{Preferenced}_{gt} \times \text{PolicyActive}_t) + \varepsilon_{igt}, \tag{5}
$$

where $$\text{Preferenced}_{gt}$$ indicates that good $$g$$ is on the preference list in year $$t$$ and $$\text{PolicyActive}_t$$ indicates the policy is in effect. Standard errors are clustered by month and good. Because a minimum of one local and one foreign bidder must be present for preferences to apply, $$\hat{\delta}$$ is an intent-to-treat effect. An event-study analog (equation 6, p. 2153) stacks all list-publication events in a window of -3 to +4 months:

$$
p_{igt} = \mathbf{X}_{igt}\boldsymbol{\beta} + \mu_g + \lambda_t + \sum_{s=-3}^{4}\delta_s\,\text{Preferenced}_{gt} \times \mathbf{1}\!\left\{t - \text{ListMonth}_t = s\right\} + \varepsilon_{igt} \tag{6}
$$

Pre-trend coefficients $$\hat{\delta}_s$$ for $$s = -3, -2, -1$$ are indistinguishable from zero (Figure 6, p. 2154), validating parallel trends. The preferred estimate of $$\hat{\delta}$$ is -0.004 (SE 0.010) for log prices, not significantly different from zero (Table 5, column 1), while the probability that an auction is won by a domestic supplier rises by 4.2 percentage points in pharmaceuticals. This near-zero average price effect differs from the positive price effects of domestic bid preferences found by Marion (2007) in US highway procurement, where preferences reduced competition and raised prices by 3.8 percent; the difference is consistent with the lower baseline state capacity in the Russian context reducing the scope for anti-competitive effects.

**Heterogeneous effects by bureaucratic effectiveness (equation 7, p. 2156; Table 6, p. 2157).** To test the model's prediction that the policy effect varies by state effectiveness, the paper interacts the DiD design with the covariance-shrunk bureaucrat and organization effects:

$$
y_{igt} = \mathbf{X}_{igt}\boldsymbol{\beta} + \mu_g + \lambda_t + \theta_b\hat{\alpha}_b + \theta_j\hat{\psi}_j + \delta\,(\text{Preferenced}_{gt} \times \text{PolicyActive}_t)
$$

$$
+ \rho_b\,\text{Preferenced}_{gt}\hat{\alpha}_b + \rho_j\,\text{Preferenced}_{gt}\hat{\psi}_j + \eta_b\,\text{PolicyActive}_t\hat{\alpha}_b + \eta_j\,\text{PolicyActive}_t\hat{\psi}_j
$$

$$
+ \pi_b\,(\text{Preferenced}_{gt} \times \text{PolicyActive}_t)\hat{\alpha}_b + \pi_j\,(\text{Preferenced}_{gt} \times \text{PolicyActive}_t)\hat{\psi}_j + \varepsilon_{igt}, \tag{7}
$$

where $$\hat{\alpha}_b$$ and $$\hat{\psi}_j$$ are the covariance-shrunk estimates from equation (3). The key parameter is $$\hat{\pi}_b$$: a negative estimate means that bureaucrats with higher baseline prices (higher $$\hat{\alpha}_b$$, i.e., less effective) experience larger price declines under preferences. Table 6 reports $$\hat{\pi}_b = -0.090$$ (SE 0.018) in the full sample and $$-0.466$$ (SE 0.090) in the pharmaceuticals subsample, both significant at 1 percent. An analogous decile-level regression (equation 8, p. 2157) shows that the estimated price effect is monotonically decreasing from about -20 percent for the bottom decile of bureaucratic effectiveness to slightly positive for the top decile (Figure 7, p. 2158). Heterogeneity by organization effectiveness $$\hat{\psi}_j$$ is small and imprecisely estimated, consistent with the model's prediction that it is participation costs (driven by bureaucrats) rather than fulfillment costs (shared by both) that generate the heterogeneous policy effects.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Russian federal procurement register (zakupki.gov.ru / EIS) | 16 million auction requests, protocols, and contracts for off-the-shelf goods, 2011-2016; main data for all price and spending-quality outcomes | No page yet |
| LVEMD pharmaceutical list (MinZrav 2016) | Barcode-level classification of drugs for the pharmaceuticals subsample; matches procurement items to active ingredient and manufacturer | No page yet |
| ClearSpending.ru anomalies database | Six spending-quality proxies (delays, cost overruns, contract renegotiations, end-user complaints, cancellations, quality bans) from a civil-society monitoring platform | No page yet |
| Rosstat firm databases | Financial characteristics of winning suppliers (balance sheets, employment) for the process-measurement analysis | No page yet |
| Ruslana (Bureau Van Dijk) | Additional firm financials and company identifiers for matching procurement winners to financial data | No page yet |

Sample period: January 1, 2011 through December 31, 2016. All prices converted at an exchange rate of 43 rubles per US dollar. The analysis sample (connected sets) contains 11,339,187 observations. The pharmaceuticals subsample contains 181,963 observations.

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20191598) for:

- **Replication**: the online appendices (Appendices A-H) contain the text classification algorithm, full variance-decomposition derivations, event-study robustness checks, all organization-side correlates, and sensitivity to alternative shrinkage procedures.
- **AKM extension**: Section IVB and Appendix C give the formal derivation of the covariance-shrinkage estimator and proofs that it yields lower-bound estimates of the true bureaucrat and organization variances.
- **Policy design**: Section VD and Figure 9 work out how to calibrate a bid-preference rate to a bureaucracy's effectiveness distribution, the starting point for any government adapting the framework to its own context.
- **Corruption robustness**: Section IIC and online Appendix D show why the quality-adjusted price measure is informative even in the presence of corruption, and provide direct tests that corruption is unlikely to explain the main findings.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(8), August 2023, pp. 2121-2167. DOI: [10.1257/aer.20191598](https://doi.org/10.1257/aer.20191598). Replication data: [doi.org/10.3886/E184107V1](https://doi.org/10.3886/E184107V1).

This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. No open license was found via Crossref; the paper is paywalled. This page contains extracted results and equations only (extract-only redistribution).

> Best, Michael Carlos, Jonas Hjort, and David Szakonyi. "Individuals and Organizations as Sources of State Effectiveness." *American Economic Review* 113, no. 8 (August 2023): 2121-2167. DOI: 10.1257/aer.20191598.
