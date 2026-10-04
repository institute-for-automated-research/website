---
title: "Bank Consolidation and Uniform Pricing: Granja & Paixão (2026)"
description: >-
  Distilled: After bank mergers, deposit and loan rates at acquired branches
  converge toward the acquirer's network-wide rate because banks price uniformly
  across their branch networks; pre-merger rate differences between acquirer and
  acquired predict post-merger rate changes far better than local HHI changes;
  and forced branch divestitures reduce consumer welfare by about 7% in markets
  where the acquirer offered better deposit rates. J. Fin. Econ. 2026, paywalled.
  Twelve core results with source locators, datasets used, the structural
  demand-and-supply model, and the empirical specifications.
sidebar:
  label: Granja-Paixao 2026
  order: 1
tags: [paper-summary, banking, bank-mergers, deposit-markets, uniform-pricing,
       market-concentration, antitrust, structural, panel-regression,
       instrumental-variables, peer-reviewed, unreplicated,
       data:ratewatch, data:fdic-summary-of-deposits, data:call-reports]
paper:
  authors: "João Granja, Nuno Paixão"
  authorList:
    - { family: Granja, given: "João", affiliation: "University of Chicago Booth School of Business" }
    - { family: "Paixão", given: Nuno, affiliation: "Bank of Canada" }
  year: 2026
  venue: Journal of Financial Economics 176 (2026) 104204
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104204
  jel:
    codes: [D4, G20, G21, G28, G34, L11]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics: ["Banking stability, regulation, efficiency", "Merger and Competition Analysis", "Corporate Finance and Governance"]
  dataAccess: licensed-commercial
  outcome:
    - deposit rates at acquired bank branches
    - loan rates at acquired bank branches
    - branch deposit volumes
    - consumer welfare from deposit rate changes
    - dispersion of branch deposit and loan rates
  outcomeClass: [bank-funding, household-finance]
  license: >-
    All rights reserved (Elsevier B.V. 2025). Artifact footer: 0304-405X/
    © 2025 Published by Elsevier B.V. Crossref license block contains only
    TDM entries (content-version=tdm, URL=https://www.elsevier.com/tdm/userlicense/1.0/,
    delay-in-days=0, start=2026-02-01) and STM-ASF policy entries; no CC or
    open-access licence found.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 12
  citedByCount: 4

  methods:
    role: both
    family: structural
    buildsFrom: [blp-demand, panel-regression, instrumental-variables, difference-in-differences]
    identification: instrument

  contributionType: [new-fact]

  mechanisms: [market-power, uniform-pricing-conduct]

  scope:
    region: US
    assetClass: retail banking (deposits and consumer loans)
    period: 2004-01..2019-12
    frequency: monthly
    dataType: [market, accounting, administrative]
    granularity: [firm]
    n: "2,006 acquired banks; 9,370 acquired branches; panel of ~100K branches, monthly 2006-2019 (Table 1, p. 5; fn. 7)"

  findings:
    - { ref: R1, outcome: deposit rates at acquired bank branches, metric: basis-points, value: "-11 bps absolute CD rate difference post-merger (SE=0.009, Table 3 col. 1, p. 11)", direction: negative, vsBenchmark: "pre-merger avg absolute CD difference 25.7 bps; decline is 40-70%" }
    - { ref: R2, outcome: deposit rates at acquired bank branches, metric: basis-points, value: "SAV100K -3.7 bps (SE=0.003); HELOC -43 bps (SE=0.047); personal loan -139 bps (SE=0.142) (Table 3 cols. 2-4)", direction: negative }
    - { ref: R3, outcome: deposit rates at acquired bank branches, metric: basis-points, value: "CD: higher-rate acquired branches decline 12.2 bps; lower-rate acquired branches rise 9.5 bps (Table 5, p. 14)", direction: mixed, vsBenchmark: "adjustments are mostly at acquired branches; acquirer median changes only 3.3 bps and -2.9 bps in respective subsamples" }
    - { ref: R4, outcome: branch deposit volumes, metric: coefficient, value: "-0.109 (SE=0.012) on ln(total deposits), 12MCD10K; -0.069 (SE=0.014) for SAV100K (Table 6 cols. 1-2, p. 15)", direction: negative, vsBenchmark: "acquired branches lose 7-11% deposit volume; 1-SD higher pre-merger rate difference adds 2.5% (CD) and 3.8% (SAV) further decline" }
    - { ref: R5, outcome: deposit rates at acquired bank branches, metric: basis-points, value: "CD bottom quintile (lowest pre-diff) rises 24.2 bps (SE=0.031); top quintile falls 28.5 bps (SE=0.026) (Table 7 Panel A col. 5, p. 16)", direction: mixed, vsBenchmark: "pre-rate quintiles explain 27.6% of unexplained variation in base spec; HHI bins explain near-zero (adj. R2 from 0.783 to 0.784 vs 0.843)" }
    - { ref: R6, outcome: deposit rates at acquired bank branches, metric: coefficient, value: "Uniform pricing model slope beta=0.0818 (SE=0.0296, sig.) vs local pricing beta=0.0144 (SE=0.0365, insig.) on observed rate changes (Fig. 11 Panel A, p. 25)", direction: positive, vsBenchmark: "non-overlapping acquirer branches: uniform beta=0.0766 (sig.), local beta=0.000 (insig.); uniform model uniquely predicts rate changes in non-competing markets" }
    - { ref: R7, outcome: consumer welfare from deposit rate changes, metric: level, value: "Forced divestitures reduce welfare by 7.209% when acquirer had lower deposit rates; no-divestiture welfare gain 0.769% in those markets (Table 9, p. 26)", direction: negative, vsBenchmark: "in markets where acquirer had higher rates, forced divestitures add 2.167% welfare (5 markets vs 39 markets with welfare loss)" }
    - { ref: R8, outcome: dispersion of branch deposit and loan rates, metric: r-squared, value: "Within-bank rate variation was about 20-30% of total variation in 2004-2007 and below 5% since 2008; bank fixed effects explain over 95% of rate variation since 2008 (text p. 2; Fig. 2, p. 6)", direction: negative }
    - { ref: R9, outcome: deposit rates at acquired bank branches, metric: coefficient, value: "Post-Acquisition effects on absolute percent rate difference for low- vs high-dispersion acquirers: CD -0.490*** (SE=0.059) vs -0.135*** (0.046); SAV -0.452*** (0.069) vs -0.339* (0.180); HELOC -0.108*** (0.015) vs -0.043** (0.021); Personal -0.207*** (0.025) vs 0.008 (0.027, n.s.) (Table 4 Panel A, p. 13)", direction: negative, vsBenchmark: "convergence is generally larger for acquirers with below-median network rate dispersion" }
    - { ref: R10, outcome: deposit rates at acquired bank branches, metric: coefficient, value: "Post-Acquisition absolute percent rate-difference effects, larger vs smaller acquirer: CD -0.361*** (SE=0.038) vs -0.252*** (0.046); SAV -0.490*** (0.091) vs -0.774** (0.298); HELOC -0.077*** (0.012) vs -0.173*** (0.036); Personal -0.107*** (0.018) vs -0.304*** (0.088) (Table 4 Panel B, p. 13)", direction: negative, vsBenchmark: "all eight subgroup estimates are negative and statistically significant; convergence also occurs for smaller acquirers" }
    - { ref: R11, outcome: deposit rates at acquired bank branches, metric: coefficient, value: "Post-Acquisition absolute percent rate-difference effects, overlap vs no overlap: CD -0.479*** (SE=0.065) vs -0.230*** (0.025); SAV -0.634*** (0.106) vs -0.382*** (0.078); HELOC -0.124*** (0.015) vs -0.055*** (0.013); Personal -0.193*** (0.031) vs -0.090*** (0.020) (Table 4 Panel C, p. 13)", direction: negative, vsBenchmark: "convergence occurs without market overlap, but is larger with overlap" }
    - { ref: R12, outcome: deposit rates at acquired bank branches, metric: coefficient, value: "For ΔHHI≥200 in the full sample, coefficients are CD -0.113*** (SE=0.043), SAV 0.012 (0.021, n.s.), HELOC -0.584*** (0.177), and Personal -0.258 (0.528, n.s.); for predicted post-merger HHI 1,300-1,800, they are CD -0.112* (0.058), SAV -0.032 (0.045, n.s.), HELOC -0.299** (0.115), and Personal 0.990 (0.634, n.s.) (Tables 7-8, pp. 16, 18)", direction: mixed, vsBenchmark: "concentration effects vary by product and threshold subsample; pre-merger rate differences remain predictive in both samples" }

  resultType: confirms

  relatesTo:
    - { cite: 'Dellavigna and Gentzkow (2019)', doi: '10.1093/qje/qjz019', relation: extends, note: 'uniform-pricing framework for retail chains extended to banking with broader data and structural welfare counterfactuals' }
    - { cite: 'Egan et al. (2017)', doi: '10.1257/aer.20150342', relation: builds-on, note: 'demand model follows their market-specific deposit-rate semi-elasticity approach estimated via same-bank IV using RateWatch' }
    - { cite: 'Abrams (2019)', relation: builds-on, note: 'demand estimation and market-power assessment for U.S. retail banking deposits' }
    - { cite: 'Liebersohn (2020)', relation: cites, note: 'strategy of using mergers just below the 1,800 HHI threshold to address selection concern from antitrust intervention' }
    - { cite: 'Radecki (1998)', relation: builds-on, note: 'foundational evidence on U.S. banks setting uniform rates across branch networks; extended here with broader sample and more products' }
    - { cite: 'Park and Pennacchi (2009)', doi: '10.1093/rfs/hhn051', relation: builds-on, note: 'prior evidence on disparate merger impacts on depositors versus borrowers via multi-market bank pricing strategies' }

  openQuestions:
    - 'Drivers of uniform pricing practices are beyond the paper scope: bank size, deposit reliance, and capital ratios correlate with uniformity but causal mechanisms are not established (pp. 7-8, Internet Appendix B).'
    - 'Welfare estimates from the divestiture counterfactual rely on a limited set of markets where authorities mandated divestitures and results should be interpreted with caution (p. 25).'
    - 'Whether the dominance of pre-merger rate differences over HHI in predicting post-merger rate changes holds at longer horizons beyond three years (p. 19, fn. 25, Internet Appendix F).'

  replicationCode:
    status: available

  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full text read (pp. 1-27, all tables and figures); seven results extracted from the PDF. Not human-verified. Not reproduced. Replication package available via Mendeley Data per article data-availability statement."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against source PDF; fixed 4 errors: Table 9 page locator p.25→p.26 in R7 (table row and findings value), Eq.(1) Post-Acquisition subscript i,t→i,t,s per PDF p.9-10, and JEL codes expanded from [G21,G34,L11] to [D4,G20,G21,G28,G34,L11] per paper title page; R4 CD/SAV 1-SD deposit effects of -2.5% and -3.8% confirmed against the paper's own prose on p.15 ('a one standard deviation increase in pre-merger rate differences for 1-Year CDs and savings deposits is associated with a 2.5% and 3.8%' further decline), so the wiki values are the paper's reported magnitudes; all core-result magnitudes and signs verified against Tables 3,5,6,7,9 and Fig.11."
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the source PDF and added five results rows covering the uniform-pricing trend, heterogeneity splits, and HHI tests, plus equation and specification coverage. These additions are not human-verified and have not been reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Checked all 12 Core rows, equations, specifications, classifications, findings, prose, and frontmatter against the source PDF; corrected Table 4 locators to PDF p. 13, the Eq. (1) Post-Acquisition subscript to i,s, welfare units to percent, the Figure 11 fit claim, and classification fields. Flagged omitted Table 7 below-200 HHI comparison for re-distillation. Table-locator and relatesTo-locatable checks pass. Post-verification review (2026-10-04) restored scope.granularity to [firm]: branch is not a schema value." }

  licenceVerification:
    - source: Crossref REST API works/10.1016/j.jfineco.2025.104204
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[] contains TDM entries (content-version=tdm, URL=https://www.elsevier.com/tdm/userlicense/1.0/, delay-in-days=0, start=2026-02-01) and multiple STM-ASF policy entries; no CC or open-access licence found; paper is paywalled'

  rightsSignalConflict: false
---

**What this is.** The paper's core results, the structural model of deposit demand and bank pricing, and the identifying empirical specifications: enough to know what it found and how, without reading all 27 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.jfineco.2025.104204).

## TL;DR

Granja and Paixão document that U.S. banks set deposit and loan rates with a high degree of uniformity across their branch networks, and show that this practice fundamentally shapes the evolution of interest rates at acquired branches following a merger. Building on the earlier documentation of Radecki (1998) and Park and Pennacchi (2009) that U.S. banks price uniformly, they use a broader dataset and more products to confirm the pattern and trace its consequences for mergers and antitrust policy. Using branch-level RateWatch data on roughly 100,000 branches and 2,006 acquired banks over 2006-2019, they find that the absolute rate difference between acquired and acquirer branches falls by 40-70% within twelve months of a deal, regardless of changes in local market concentration. Pre-merger rate differences between the acquirer and acquired branches explain far more of the cross-sectional variation in post-merger rate changes than HHI-based concentration indicators. A structural model of monopolistic competition in banking that features uniform pricing has a stronger, statistically significant association with observed rate changes than a local-pricing model, including for acquirer branches in markets where the two banks never competed. Counterfactual welfare analysis shows that forced branch divestitures, which antitrust authorities commonly require, reduce consumer welfare by about 7% on average in markets where the acquirer offered better deposit rates than the acquired bank, raising questions about the adequacy of concentration-only merger review.

## Core results

Magnitudes are as reported; \*\*\*/\*\* = 1%/5%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | After a bank merger, the absolute difference in 12-month CD rates between acquired and acquirer branches falls by ~11 bps on average | Table 3, col. 1, p. 11 | Post-Acquisition coeff = -0.108\*\*\* (SE=0.009); pre-merger average absolute difference 25.7 bps |
| R2 | Rate convergence holds across all four products: savings deposits, HELOCs, and personal loans show declines of 3.7 bps, 43 bps, and 139 bps in absolute rate differences | Table 3, cols. 2-4, p. 11 | Post-Acquisition coefficients: SAV100K -0.037\*\*\* (SE=0.003), HELOC -0.429\*\*\* (SE=0.047), Personal -1.385\*\*\* (SE=0.142) |
| R3 | Rate adjustments are driven primarily by the acquired branches, not the acquirer; both higher-rate and lower-rate acquired branches converge toward the acquirer's median | Table 5, p. 14 | CD: higher-rate acquired branches fall 12.2 bps\*\*\*; acquirer median rises 3.3 bps\*\*\*. Lower-rate acquired branches rise 9.5 bps\*\*\*; acquirer median falls 2.9 bps\*\*\* |
| R4 | Acquired branches lose 7-11% of their deposit volume after a merger; deposit losses are larger when the acquired branch had higher rates than the acquirer | Table 6, cols. 1-2, p. 15 | Post-Acquisition on ln(total deposits): 12MCD10K -0.109\*\*\* (SE=0.012), SAV100K -0.069\*\*\* (SE=0.014); 1-SD higher pre-merger rate diff adds -2.5% (CD) and -3.8% (SAV) |
| R5 | Pre-merger rate differences between acquired and acquirer branches explain 27.6% of residual variation in post-merger deposit rates; HHI changes explain near-zero additional variation | Table 7, Panel A, p. 16 | CD rate top quintile (highest pre-diff) falls 28.5 bps\*\*\* (SE=0.026); bottom quintile rises 24.2 bps\*\*\* (SE=0.031); adj. R2 rises from 0.783 to 0.843 vs 0.784 for HHI bins |
| R6 | The uniform-pricing model has a stronger, statistically significant association with observed post-merger rate changes than the local-pricing model, including for acquirer branches that never competed with the acquired bank | Fig. 11, Panels A-C, p. 25 | Uniform pricing slope beta=0.0818 (SE=0.0296); local pricing beta=0.0144 (SE=0.0365) for all branches; beta=0.0766 vs 0.000 for non-overlapping acquirer branches; text reports significant relationship only for uniform pricing |
| R7 | Forced branch divestitures reduce consumer welfare by 7.209% on average in markets where the acquirer offered higher deposit rates | Table 9, p. 26 | Welfare change from divestitures = -7.209% in markets with Pre-Merger Rate Dif<0 (39 markets); no-divestiture welfare gain = 0.769%; in 5 markets with higher acquired-branch rates, divestitures add +2.167% |
| R8 | Uniform pricing became more prevalent across U.S. banks: within-bank rate variation fell to less than 5% of total rate variation | Text p. 2; Fig. 2, p. 6 | Within-bank variation was about 20-30% in 2004-2007 and below 5% since 2008; bank fixed effects explain over 95% of rate variation since 2008 |
| R9 | Rate convergence is strongest when the acquirer already priced uniformly across its network | Table 4, Panel A, p. 13 | Post-Acquisition effects on absolute percent rate difference for low- vs high-dispersion acquirers: CD -0.490\*\*\* (SE=0.059) vs -0.135\*\*\* (0.046); SAV -0.452\*\*\* (0.069) vs -0.339\* (0.180); HELOC -0.108\*\*\* (0.015) vs -0.043\*\* (0.021); Personal -0.207\*\*\* (0.025) vs 0.008 (0.027, n.s.) |
| R10 | Rate convergence also occurs for smaller acquirers, not only when a large bank absorbs a small bank | Table 4, Panel B, p. 13 | Post-Acquisition effects for larger vs smaller acquirers: CD -0.361\*\*\* (SE=0.038) vs -0.252\*\*\* (0.046); SAV -0.490\*\*\* (0.091) vs -0.774\*\* (0.298); HELOC -0.077\*\*\* (0.012) vs -0.173\*\*\* (0.036); Personal -0.107\*\*\* (0.018) vs -0.304\*\*\* (0.088) |
| R11 | Rates converge even without pre-merger market overlap, though convergence is larger where the banks overlapped | Table 4, Panel C, p. 13 | Post-Acquisition effects for overlap vs no overlap: CD -0.479\*\*\* (SE=0.065) vs -0.230\*\*\* (0.025); SAV -0.634\*\*\* (0.106) vs -0.382\*\*\* (0.078); HELOC -0.124\*\*\* (0.015) vs -0.055\*\*\* (0.013); Personal -0.193\*\*\* (0.031) vs -0.090\*\*\* (0.020) |
| R12 | Predicted local concentration changes have uneven rate effects across products, while rate differences remain predictive below the antitrust review threshold | Tables 7-8, pp. 16, 18 | For ΔHHI ≥ 200 in the full sample, coefficients are CD -0.113\*\*\* (SE=0.043), SAV 0.012 (0.021, n.s.), HELOC -0.584\*\*\* (0.177), Personal -0.258 (0.528, n.s.); among mergers with predicted post-merger HHI 1,300-1,800 they are CD -0.112\* (0.058), SAV -0.032 (0.045, n.s.), HELOC -0.299\*\* (0.115), Personal 0.990 (0.634, n.s.) |

**Overall (paper's conclusion).** Standard merger review based on local market concentration (HHI) fails to capture the most consequential channel through which bank mergers affect deposit rates: the convergence of rates at acquired branches toward the acquirer's uniform network rate. This uniform pricing practice means that pre-merger rate differences between banks are far stronger predictors of post-merger deposit rate changes than local concentration indices. Antitrust regulators who require branch divestitures without accounting for uniform pricing risk imposing welfare losses on depositors in markets where the merger would have been beneficial.

## Theory / model

The paper models demand and supply in the retail deposit market. On the demand side, consumers in each local banking market choose among available bank branches to maximize utility. On the supply side, the bank chooses deposit rates under one of two pricing regimes.

**Consumer preferences.** Each consumer $$i$$ in zip code $$z$$, banking market $$m$$, derives utility from depositing with branch $$j$$ of bank $$b$$. Individual utility adds an i.i.d. Type-I extreme-value shock to common indirect utility (p. 21):

$$
u_{i,j,z,m,b,t} = V_{j,z,m,b,t} + \epsilon_{i,j,t}
$$

The common indirect utility is (p. 21, Eq. 3):

$$
V_{j,z,m,b,t} = \alpha_m r_{j,t} + \beta_0 X_{j,t} + \beta_1 H_{b,m,t} + \beta_2 W_{b,t} + \xi_b + \gamma_z \tag{3}
$$

where $$\alpha_m$$ is the market-specific deposit-rate semi-elasticity (the rate coefficient allowed to vary by market to capture heterogeneous depositor clienteles), $$r_{j,t}$$ is the branch deposit rate, $$X_{j,t}$$ is the branch age (capturing local relationship capital), $$H_{b,m,t}$$ is a vector of bank characteristics in market $$m$$ (branch network density, years of experience), $$W_{b,t}$$ captures time-varying bank-wide attributes (size, ROA, NPL ratio, Tier 1 capital), $$\xi_b$$ is a bank fixed effect (capturing unobserved service quality and brand), and $$\gamma_z$$ is a zip code fixed effect.

**Market shares.** Following the standard discrete-choice procedure of Berry et al. (1995), with Type-I extreme-value utility shocks, the aggregate share of branch $$j$$ in market $$m$$ is (p. 21, Eq. 4):

$$
s_{j,z,m,b,t} = \frac{\exp(V_{j,z,m,b,t})}{\sum_{k \in \Gamma^m} \exp(V_{k,z,m,b,t}) + \exp(V_{O,m,t})} \tag{4}
$$

where $$\Gamma^m$$ is the set of branches available in market $$m$$ and $$V_{O,m,t}$$ is the outside option value (normalized so $$\xi_O = 0$$).

**Bank profit and pricing regimes.** A multi-market bank $$b$$ owns branches $$j$$ across markets $$m \in \Omega_b$$, paying marginal cost $$c_b$$ per unit of deposits and fixed cost $$C_{jbm}$$ per branch. Let $$R_{bm} = \tilde{R}_{bm} - c_b$$ denote bank-market returns net of marginal costs. Bank profits are (p. 22, Eq. 6):

$$
\Pi_b = \sum_{m \in \Omega_b} \sum_{j \in m} \left[ (R_{bm} - r_{jbm}) \, s_{jbm} \, D_m - C_{jbm} \right] \tag{6}
$$

Under **local pricing**, each branch rate $$r_{jbm}$$ is chosen independently. The first-order condition sets the deposit spread equal to the inverse of the local demand semi-elasticity (p. 23, Eq. 7):

$$
R_{bm} - r_{bm} = \frac{1}{\alpha_m \bigl(1 - s_{bm}(r_{bm},\, \mathbf{r}_{b'/m})\bigr)} \tag{7}
$$

Under **uniform pricing**, the bank sets a single rate $$r_b$$ across all branches and markets. The optimal uniform rate satisfies (p. 23, Eq. 8):

$$
R_b - r_b = \left[\sum_{m \in \Omega_b} \frac{1}{\alpha_m\bigl(1 - s_{bm}(r_b,\, \mathbf{r}_{b'/m})\bigr)}\, \xi_{b,m}\right]^{-1} \tag{8}
$$

where $$\xi_{b,m} = s_{bm} D_m \big/ \sum_{m' \in \Omega_b} s_{bm'} D_{m'}$$ is the share of bank $$b$$'s total deposits held in market $$m$$. The uniform rate thus sets the spread to the inverse of the deposit-weighted sum of local markups. This has the key implication that any merger can change $$r_b$$ for all markets where bank $$b$$ operates, including markets that have no overlap with the acquired bank. In contrast, the local pricing model predicts no adjustment in non-overlapping markets.

**Consumer welfare.** Following Small and Rosen (1981), the change in consumer welfare in market $$m$$ induced by a policy intervention is (p. 24):

$$
\Delta W_m = \ln\!\left(\sum_{j \in \Gamma_m^{post}} \exp V_j^{post}\right) - \ln\!\left(\sum_{j \in \Gamma_m^{pre}} \exp V_j^{pre}\right)
$$

where $$V_j^{pre}$$ and $$V_j^{post}$$ are pre- and post-policy indirect utilities. This formula is applied to evaluate two counterfactuals: (i) merger approved without divestitures, and (ii) merger with the divestitures antitrust authorities actually required.

## Method

**Demand estimation.** The market-specific rate semi-elasticities $$\alpha_m$$ in Eq. (3) are estimated by taking logarithms of market shares relative to the outside option and writing the logit share equation in a linear specification (p. 22, Eq. 5):

$$
\ln s_{j,z,m,b,t} = \sum_m (\alpha_m \, r_{j,t} \times I_m) + \beta_0 X_{j,t} + \beta_1 H_{b,m,t} + \xi_b + \gamma_z + \chi_{m,t} \tag{5}
$$

where $$I_m$$ are market indicator variables, $$\chi_{m,t}$$ are year-market fixed effects absorbing the unobservable outside-option characteristics, $$\xi_b$$ are bank fixed effects, and $$\gamma_z$$ are zip-code fixed effects. The IV sample covers 580 banking markets with at least 200 observations each, using branches reporting rates to RateWatch and annual rates averaged over the first six months. The paper does not state a clustered standard-error rule for this specification in the main text.

The key endogeneity concern is that deposit rates $$r_{j,t}$$ are chosen by banks in response to local demand conditions, creating a simultaneity bias. Following the Hausman (1996) instrument approach used by Dellavigna and Gentzkow (2019) and Egan et al. (2017), the paper instruments the deposit rate offered at a branch with the average rate offered by other branches of the same bank in other markets. This instrument is strong because branches of the same bank share an equilibrium uniform rate, but it is excludable because the rate differences across markets are driven by the bank-wide uniform rate, not local demand.

Estimated market-specific semi-elasticities average 0.134 (standard deviation 0.111) and are Winsorized and empirical-Bayes-shrunk to reduce sampling noise in thin markets (Fig. 10, p. 23). This average semi-elasticity is lower than estimates from Abrams (2019) (approximately 0.3) and Egan et al. (2017) (0.16-0.60), partly reflecting different sample selection and the use of a finer market-level identification.

**Counterfactual simulation.** The structural model is used to simulate all mergers in the sample and compute post-merger equilibrium deposit rates under both pricing regimes. The procedure: (i) recover bank-market net returns $$R_{bm}$$ from the pre-merger first-order conditions; (ii) reassign acquired branches to the acquirer; (iii) solve the fixed-point system of first-order conditions (Eq. 7 or 8) for all banks under the new ownership structure. In both counterfactuals, acquired branches adopt the non-price characteristics of the acquirer, so quality convergence is held constant and the equilibrium rate differences reflect only pricing conduct.

## Empirical specifications

**Rate convergence around mergers (Tables 3-5, pp. 11-14, R1-R3, R9-R11).** The main reduced-form specification is OLS on acquired-branch monthly observations in the 12 months before and after a merger (p. 9, Eq. 1):

$$
Y_{i,t,s} = \gamma_{s,t} + \theta_i + \beta \cdot \text{Post-Acquisition}_{i,s} + \varepsilon_{i,t,s} \tag{1}
$$

where $$Y_{i,t,s}$$ is the absolute rate or absolute percent difference between the acquired branch and acquirer's median rate, $$\gamma_{s,t}$$ are state-by-month fixed effects, $$\theta_i$$ are branch fixed effects, and $$s$$ indexes months relative to acquisition. Standard errors are clustered at the merger level. Table 3 uses 246,206 CD, 65,363 savings, 195,564 HELOC, and 149,664 personal-loan observations for rate levels. Table 4 re-estimates this design by acquirer dispersion, relative bank size, and market overlap; Table 5 splits on the sign of the pre-merger rate difference and uses the branch and acquirer rates as dependent variables.

**Deposit volume around mergers (Table 6, p. 15, R4).** To assess how uniform pricing affects branch deposits over a five-year window, Eq. (2) interacts the post-merger indicator with the pre-merger percent rate difference (p. 14, Eq. 2):

$$
Y_{i,t,s} = \gamma_{s,t} + \theta_i + \beta_0 \cdot \text{Post-Acq}_s + \beta_1 \cdot \text{Post-Acq}_s \times \left(\frac{\text{Acquired Branch Rate} - \text{Acquirer Rate}}{\text{Acquirer Rate}}\right)^{\!\text{Pre}} + \varepsilon_{i,t,s} \tag{2}
$$

where $$Y_{i,t,s}$$ is log total deposits at acquired branch $$i$$ in year $$t$$, $$s$$ years from the merger. Table 6 includes branch and state-by-month fixed effects and merger-clustered standard errors; the samples contain 81,277 CD-branch years and 22,315 savings-branch years in the baseline columns. In the alternative columns, the post-merger indicator is interacted with the change in average rate difference from pre- to post-merger; coefficients are 0.022 (SE=0.010) for CD and 0.017 (0.007) for savings. Figure 7 uses state-by-year fixed effects for its dynamic event-time specification, shown below.

**Rate convergence decomposition by HHI and pre-merger rate quintile (Tables 7-8, pp. 16, 18, R5, R12).** Table 7 estimates separate versions of the following branch-level panel specifications (p. 16):

$$
Y_{i,t,s} = \gamma_{s,t} + \theta_i + \sum_{k=1}^{3} \beta_k \text{Post-Acq}_{i,s} \times \mathbf{1}[\Delta HHI_i \in B_k] + \varepsilon_{i,t,s}
$$

$$
Y_{i,t,s} = \gamma_{s,t} + \theta_i + \sum_{q=1}^{5} \beta_q \text{Post-Acq}_{i,s} \times \mathbf{1}[\text{Pre-Diff Rate}_i \in Q_q] + \varepsilon_{i,t,s}
$$

$$
Y_{i,t,s} = \gamma_{s,t} + \theta_i + \beta_0\text{Post-Acq}_{i,s} + \beta_1\text{Post-Acq}_{i,s}\times\Delta HHI_i + \beta_2\text{Post-Acq}_{i,s}\times\text{Pre-Diff Rate}^{Pre}_i + \varepsilon_{i,t,s}
$$

Here $$B_k$$ denotes no predicted HHI change, a change between 0 and 200 points, or a change of at least 200 points; $$Q_q$$ denotes quintiles of pre-merger relative branch-to-acquirer rate differences. Tables 7-8 use acquired-branch rate outcomes, branch and state-by-month fixed effects, and standard errors clustered by merger. The estimation sample is the merger event window; Table 8 restricts to deals with predicted post-merger HHI from 1,300 to 1,800. The incremental adjusted $$R^2$$ from adding rate-quintile interactions is 0.060 (0.783 to 0.843), explaining 27.6% of the unexplained variation from the base specification; HHI-bin interactions add only 0.001.

For the five-year branch-deposit event study in Figure 7 (p. 15), the paper estimates:

$$
Y_{i,t,s} = \gamma_{s,t} + \theta_i + \sum_{s=-5}^{5}\beta_s\delta_s + \sum_{s=-5}^{5}\lambda_s\delta_s\times\text{Pre-Diff Rate}_i^{Pre} + \varepsilon_{i,t,s}
$$

where $$Y_{i,t,s}$$ is log branch deposits, $$\gamma_{s,t}$$ are state-by-year fixed effects, $$\theta_i$$ are branch fixed effects, and event-time indicators $$\delta_s$$ index years around the merger. The figure plots implied effects for branches two standard deviations below and above the mean pre-merger rate difference. The event-study standard errors are clustered by merger. Following Liebersohn (2020), the same HHI and rate-difference specifications are estimated on mergers with predicted post-merger HHI from 1,300 to 1,800 (Table 8).

Robustness includes: large vs. small acquirer partitions (Table 4 Panel B), market overlap vs. non-overlap partitions (Panel C), matched-control difference-in-differences using branches not involved in mergers (Internet Appendix E), and extending the analysis to two and three years post-merger (Internet Appendix F).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| RateWatch (S&P Global Market Intelligence) | Branch-level weekly posted rates for CDs, savings, HELOC, personal loans (4 products); primary source for all interest-rate analysis | [RateWatch](/wiki/commercial/ratewatch/) |
| FDIC Summary of Deposits (SOD) | Annual branch-level deposit balances; used to compute market shares, deposit volumes, and bank market shares for the structural model | [FDIC Summary of Deposits](/wiki/datasets/fdic-summary-of-deposits/) |
| FFIEC Call Reports | Quarterly bank balance-sheet data (total assets, deposits, ROA, NPL, Tier 1 capital); used as bank-level characteristics in demand estimation | [Call Reports](/wiki/datasets/call-reports/) |
| Federal Reserve NIC (public structure data) | Panel of all bank M&A events with dates and FDIC branch identifiers; used to identify ownership transfers and the sample of mergers; only the public BHC ownership and merger-history layer was used, not confidential CAMELS ratings | No page yet (public NIC structure data) |

Sample: January 2006 to December 2019 (merger analysis); 2,177 M&A deals for 12MCD10K, 9,370 acquired branches across 49 states. Uniform pricing documentation (Section 3) uses 2004-2019.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jfineco.2025.104204) if you are: designing antitrust review procedures that account for uniform pricing (Section 7.5, Table 9); calibrating a structural model of retail deposit demand and estimating market-specific semi-elasticities (Section 7.1-7.2); assessing the empirical prevalence of uniform pricing in banking (Section 3 and Fig. 2-4); or extending the event-study convergence analysis to other banking products or jurisdictions. The Internet Appendices contain robustness tests on alternative product definitions, sample restrictions, alternative estimation approaches (Appendix G), and the role of HHI at longer horizons (Appendix F).

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 176 (2026) 104204. DOI: 10.1016/j.jfineco.2025.104204. This distillation was extracted from the source PDF and machine-verified against it on 2026-10-04; it has not been independently reproduced. The article is paywalled (Elsevier B.V., 2025); this page reproduces only short extracts for academic commentary under fair use. No verbatim PDF is hosted here.

> Granja, João, and Nuno Paixão. "Bank consolidation and uniform pricing."
> *Journal of Financial Economics* 176 (2026) 104204.
> DOI: 10.1016/j.jfineco.2025.104204.
> © 2025 Published by Elsevier B.V. All rights reserved.
> Extract-only. This page is an LLM-distilled summary by the Institute for Automated Research.
