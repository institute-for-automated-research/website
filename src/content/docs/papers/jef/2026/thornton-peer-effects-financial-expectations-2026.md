---
title: "Peer Effects in Financial Expectations: Thornton (2026)"
description: >-
  Distilled: Using the British Household Panel Survey and an instrumental
  variables strategy, Thornton (2026) provides causal evidence that neighborhood
  financial expectations positively influence individual financial expectations,
  with a one-standard-deviation peer effect equal to roughly 31% of the family
  effect in financial beliefs. Journal of Empirical Finance 2026, paywalled.
  Seven core results with source locators, datasets used, the identification
  strategy, and the empirical specifications.
sidebar:
  label: Thornton 2026
  order: 1
tags: [paper-summary, household-finance, expectations, beliefs, peer-effects, social-finance, panel-regression, panel-data, peer-reviewed, unreplicated, data:bhps]
paper:
  authors: Joshua Thornton
  authorList:
    - { family: Thornton, given: Joshua, orcid: "0000-0001-7033-2367", affiliation: "Baylor University, Hankamer School of Business" }
  year: 2026
  venue: "Journal of Empirical Finance 87 (2026) 101712"
  venueShort: "J. Empir. Finance 2026"
  tier: lower
  doi: 10.1016/j.jempfin.2026.101712
  jel:
    codes: [G41, D84, D83]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: []
  dataAccess: licensed-commercial
  outcome:
    - individual financial expectations (FINEX)
    - savings behavior
  outcomeClass: [expectations, household-finance]
  license: "Paywalled; Elsevier TDM license only (no CC). © 2026 Elsevier B.V. All rights reserved."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, instrumental-variables]
    identification: instrument
  contributionType: [new-fact]
  mechanisms: [social-transmission]
  scope:
    region: UK
    period: 1991..2008
    frequency: annual
    dataType: [survey]
    granularity: [individual]
    n: "207,362-218,149 person-wave observations (BHPS waves 1-18, 1991-2008)"
  findings:
    - { ref: R1, outcome: "individual financial expectations (FINEX)", metric: coefficient, value: "0.555*** (t=30.01); OLS, no controls", direction: positive }
    - { ref: R2, outcome: "individual financial expectations (FINEX)", metric: coefficient, value: "0.272*** (t=16.88); individual FE, year FE, time-varying controls; 1-SD in FINEXn = 2.6% increase in FINEX", direction: positive, vsBenchmark: "roughly 28% as large as family effect (1-SD family = 9.2%)" }
    - { ref: R3, outcome: "individual financial expectations (FINEX)", metric: coefficient, value: "Table 6: 0.612*** (t=3.33, col 1); 0.505*** (t=2.60, col 2); different-region family: 0.394*** (t=4.38, col 3), 0.380*** (t=4.07, col 4)", direction: positive, vsBenchmark: "col 1 is the paper's main IV estimate; 1-SD = 2.81% increase (0.046 * 0.612), about 31% of family effect. Col 2's conventional star does not meet the paper's 3.02 first-stage-adjusted 5% t-ratio threshold." }
    - { ref: R4, outcome: "individual financial expectations (FINEX)", metric: coefficient, value: "previous-neighborhood FE coef: 0.0484 (t=1.33), not significant", direction: none }
    - { ref: R5, outcome: "individual financial expectations (FINEX)", metric: coefficient, value: "0 years in neighborhood: 0.105 (insig); 3+ years: 0.264 (t=14.3); income and voting similarity show no convergence (Figs. 2-3)", direction: positive, vsBenchmark: "growing pattern consistent with social interaction; inconsistent with homophily" }
    - { ref: R6, outcome: savings behavior (Save dummy), metric: coefficient, value: "-0.0165*** (t=-7.37); individual FE, year FE, time-varying controls", direction: negative }
    - { ref: R7, outcome: "individual financial expectations (FINEX)", metric: coefficient, value: "daily-talker subsample: 1.01 (t=2.10); less-frequent interactors: insig", direction: mixed, vsBenchmark: "positive only for most socially connected individuals; consistent across four sociability proxies" }
  resultType: new-finding
  relatesTo:
    - { cite: "Manski (1993)", doi: '10.2307/2298123', relation: builds-on, note: "reflection problem framework motivating the IV identification strategy" }
    - { cite: "Brown et al. (2008)", doi: '10.1111/j.1540-6261.2008.01364.x', relation: extends, note: "extends their nonlocal-family IV from stock-market participation to underlying financial beliefs" }
    - { cite: "Hong et al. (2004)", doi: '10.1111/j.1540-6261.2004.00629.x', relation: cites, note: "establishes peer effects in stock-market participation; motivates studying beliefs separately from behavior" }
    - { cite: "Burnside et al. (2016)", doi: '10.1086/686732', relation: tests, note: "paper provides empirical evidence consistent with their social-transmission model of housing-market beliefs" }
    - { cite: "Han et al. (2020)", relation: tests, note: "paper provides evidence consistent with their social transmission bias model for investor behavior" }
  openQuestions:
    - "The same neighborhood peer-effects analysis cannot be extended past 2008 because Understanding Society lacks the interview-area variable needed to construct neighborhoods; the paper offers descriptive comparisons with newer survey waves instead (pp. 3, 20)."
    - "Whether online peer effects differ from in-person effects remains open. The paper notes a slight decline in neighbor interaction and suggests online interaction may replace some of it, but calls for further study (p. 21)."
    - "The exclusion restriction for the nonlocal-family instrument cannot be tested directly. The previous-neighborhood test (Table 7) and the different-region instrument results (Table 6, cols. 3-4) are presented as evidence that alleviates concerns, not as a formal test (pp. 11-13)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (22 pp., all tables and figures); seven results extracted from Tables 2, 6, 7, 8 and Figs. 1, 4. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; five fixes applied: R3 star count corrected (0.505** → 0.505*** per Table 6 col 2); Empirical-specs 0.612** → 0.612*** (t=3.33); λ_{it} → λ_i in both equations (matching PDF Eq. 1 and surrounding text); R5 locator Figs. 2-3 corrected to p. 10 (not pp. 9-11). All other magnitudes, locators, and specifications confirmed." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Adversarially re-checked all seven Core rows, equations, specifications, classification, findings, prose, and frontmatter against the PDF; corrected the R3 main IV reporting and adjusted-inference caveat, R7 specification, OLS causal wording, unrelated topics, and open questions. Reported omitted headline accuracy results for later re-distillation." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jempfin.2026.101712", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] entries: content-version=tdm URL=https://www.elsevier.com/tdm/userlicense/1.0/ delay-in-days=0 start=2026-06-01; content-version=stm-asf only; no CC license present; paywalled" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the identification strategy, and the empirical specifications: enough to know what was found and how, without reading all 22 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.jempfin.2026.101712).

## TL;DR

Using 18 waves of the British Household Panel Survey (BHPS, 1991-2008) and an instrumental variables strategy adapted from Brown et al. (2008), Thornton (2026) provides evidence of a causal effect of neighborhood financial expectations on individual expectations. The instrument is the average financial expectations of neighbors' nonlocal family members; the exclusion restriction assumes it affects the focal individual only indirectly through neighbors. A one-standard-deviation increase in neighborhood financial expectations leads to a 2.8% increase in individual financial expectations (the paper's main IV estimate), equal to roughly 31% of the corresponding family effect. Peer effects are larger for socially connected individuals, grow with time spent in a neighborhood (consistent with social interaction rather than sorting), and are informative only in neighborhoods with diversity in financial expectations and uniformity in income and voting behavior. These findings support the social transmission frameworks of Burnside et al. (2016) and Han et al. (2020). Individuals also act on their expectations: those expecting financial improvement are less likely to save.

## Core results

Magnitudes and significance as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Baseline OLS: neighborhood financial expectations are positively correlated with individual expectations | Table 2, col 1, p. 7 | FINEXn coef = 0.555\*\*\* (t=30.01) |
| R2 | With individual FE, year FE, and time-varying controls: large, significant peer effect remains | Table 2, col 2, p. 7 | FINEXn coef = 0.272\*\*\* (t=16.88); 1-SD in FINEXn = 2.6% increase in FINEX; roughly 28% as large as the family effect (9.2%) |
| R3 | IV estimates using neighbors' nonlocal-family expectations as instrument | Table 6, cols. 1-4, p. 12 | FINEXn coef = 0.612\*\*\* (t=3.33, col 1; paper's main spec); full-controls 0.505\*\*\* (t=2.60, col 2); different-region family: 0.394\*\*\* (t=4.38, col 3) and 0.380\*\*\* (t=4.07, col 4). The paper's first-stage-adjusted 5% threshold is 3.02, so col. 2's t-ratio falls short. |
| R4 | Reverse causality test: previous-neighborhood expectations do not predict current expectations | Table 7, col 2, p. 13 | FINEXprev coef = 0.0484 (t=1.33), not significant |
| R5 | Peer effects grow with time in neighborhood; income and voting similarity do not converge | Fig. 1, p. 9; Figs. 2-3, p. 10 | Coef rises from 0.105 (insig) for 0 years to 0.264 (t=14.3) for 3+ years in neighborhood; income and voting coefficients flat or decreasing |
| R6 | Expecting financial improvement is associated with a lower probability of saving | Table 8, col 2, p. 16 | FINEX coef on Save = -0.0165\*\*\* (t=-7.37) |
| R7 | Peer effects are larger for socially connected individuals | Fig. 4, p. 14; Figs. 5-7, pp. 15-16 | Daily-talker subsample: coef = 1.01 (t=2.10); not significant for less-frequent interactors; same pattern for neighborhood-likers (Fig. 5) and organization members (Fig. 6) |

**Overall (paper's conclusion).** Financial expectations are causally transmitted among neighbors, with the main IV estimate equal to roughly 31% of the family effect. The evidence is consistent across panel FE, IV, and IV robustness specifications; inconsistent with homophily as the primary explanation (peer effects grow while income and political similarity do not converge); and supported by sociability heterogeneity (socially connected individuals show stronger transmission). The paper interprets the sociability patterns as evidence for social transmission, while noting its IV strategy cannot distinguish social transmission from a common-information channel. Individuals also act on these expectations: optimists save less.

## Theory / model

The paper does not propose a formal model. The central hypothesis is that an individual's financial expectations (FINEX: whether the individual expects to be better off, about the same, or worse off financially in the coming year) are influenced by the financial expectations of her neighbors through social interaction.

The identification challenge is the reflection problem of Manski (1993): when neighbors have similar expectations, this correlation could arise from (1) endogenous social effects (social interaction), (2) contextual effects (shared local environment), or (3) correlated effects (similar individual characteristics). The paper tests three hypotheses:

- **H1 (social interaction):** Individuals take neighborhood expectations into account when forming their own; $$\beta_1$$ in equation (1) measures the conditional association, while the paper's IV design is used to estimate a causal peer effect.
- **H2 (homophily):** Individuals sort into neighborhoods with like-minded residents; any observed correlation reflects selection rather than transmission.
- **H3 (contextual / correlated):** A shared local environment (e.g. the local labor market) drives correlated expectations; there is no individual-level transmission.

H2 is tested via the time-in-neighborhood design (Section 4.2): if sorting drives the result, peer effects should be strongest when individuals first move (closest to their selection decision) and weaken thereafter as neighbors diverge from the mover's baseline. The opposite pattern is found. H3 is addressed by the IV strategy and by the fact that income and political-preference similarity within neighborhoods do not grow over time (Figs. 2-3 on p. 10).

The paper also tests a joint hypothesis (Section 4.8): that survey expectations reflect actual beliefs and that individuals act on them. If this joint hypothesis holds, individuals expecting improvement should save less. This is confirmed in Table 8.

## Method

The paper applies two estimators: panel OLS with individual and year fixed effects, and two-stage least squares (2SLS) with the nonlocal-family instrument.

**Panel fixed effects.** The main estimating equation (p. 6, Eq. 1) is:

$$
\text{FINEX}_{it} = \gamma_i + \gamma_t + \beta_1 \, \text{FINEXn}_{it} + \lambda_i + \varepsilon_{it} \tag{1}
$$

where $$\gamma_i$$ are individual fixed effects absorbing time-invariant characteristics (race, religion, baseline sociability), $$\gamma_t$$ are year fixed effects absorbing sample-wide trends, $$\text{FINEXn}_{it}$$ is the average financial expectation of individual $$i$$'s neighbors in year $$t$$ (excluding $$i$$), $$\lambda_i$$ is a vector of time-varying controls (income, education, marital status, vote intention, job industry), and $$\varepsilon_{it}$$ is clustered at the interview-area (neighborhood) level throughout.

**IV strategy.** The instrument for $$\text{FINEXn}_{it}$$ is the average financial expectation of neighbors' nonlocal family members, denoted $$f\!amFINEXn_{it}$$. This instrument builds on the Brown et al. (2008) design: nonlocal family members are likely to influence their relative's expectations through family interaction, but are not subject to the same local environment as the focal individual. The first-stage regression is:

$$
\text{FINEXn}_{it} = \gamma_i + \gamma_t + \delta \cdot f\!amFINEXn_{it} + \lambda_i + \nu_{it}
$$

The instrument is constructed in two ways: (a) nonlocal family = family members living outside the focal neighborhood; (b) nonlocal family = family members living in a different UK region (19 regions), the more demanding robustness specification. The first-stage $$t$$-statistic in the full-controls specification is 3.61 (Table 4, col 2, p. 10), exceeding the Lee et al. (2022) tF critical value of 3.02 at the 5% level ($$F$$-statistic = 13.03).

**Sociability subsamples.** To provide additional evidence for social interaction as the mechanism, the Table 6, col. 1 IV specification (wealth, individual FE, and year FE) is re-run on subsamples split by four sociability proxies: frequency of talking with neighbors (FRNA), opinion of neighborhood (Lknbr), local organization membership (Org), and desire to move (Lkmove). This approach, similar to Hong et al. (2004), uses sociability variation to test whether more connected individuals exhibit larger peer effects.

## Empirical specifications

**Main panel OLS (R1, R2).** Table 2 reports the baseline regression without additional controls or fixed effects (col 1, $$N$$ = 218,149) and the specification with individual FE, year FE, and time-varying controls (col 2, $$N$$ = 207,362), following the estimating setup in Eq. (1). Standard errors are clustered at the neighborhood level throughout. FINEX is coded 1 (better off), 0 (same), -1 (worse off). The focal individual is excluded from the neighborhood average.

**IV 2SLS (R3).** Table 6 (p. 12) reports four 2SLS specifications. Columns (1)-(2) define nonlocal family as living outside the focal neighborhood; columns (3)-(4) restrict to a different UK region. Columns (1) and (3) include only wealth as a time-varying control; columns (2) and (4) add the full set of controls plus individual and year FE. The 2SLS coefficient is stable across specifications: from 0.612\*\*\* (col 1) to 0.380\*\*\* (col 4, most demanding).

**Reverse causality test (R4).** Table 7 (p. 13) regresses individual FINEX on average financial expectations in the individual's *previous* neighborhood (FINEXprev), using the same controls as Table 2, col 2. A significant coefficient would indicate that the IV result is capturing ties to the previous neighborhood rather than the current one. The coefficient is 0.0484 (t = 1.33), not significant.

**Time-in-neighborhood trend (R5).** Using the specification from Table 2, col 2, four subsample regressions are run on individuals grouped by years-in-neighborhood (0, 1, 2, 3+). The peer-effect coefficient grows monotonically (Fig. 1, p. 9). The same subsampling is applied with income and vote intention as outcomes (Figs. 2-3, p. 10); those coefficients show no convergence, ruling out general assimilation to the local environment as the driver.

**Savings regression (R6).** Table 8 (p. 16) regresses a binary savings variable (Save = 1 if the individual saved over the past year) on individual FINEX, with individual FE, year FE, and time-varying controls. Standard errors clustered at the neighborhood level.

**Sociability subsamples (R7).** The Table 6, col. 1 IV specification (wealth, individual FE, and year FE) is re-run separately for each level of each sociability proxy (Figs. 4-7, pp. 14-16). Peer effects are statistically significant only for the most socially connected subgroup in each proxy (daily talkers: coef = 1.01, t = 2.10; neighborhood-likers: coef = 0.583, t = 2.86; organization members: coef = 1.10, t = 2.38; non-movers: coef = 0.72, t = 2.79).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| British Household Panel Survey (BHPS), waves 1-18, 1991-2008; UK Data Service SN 5151-2 | All financial expectation measures (FINEX, FINEXn, famFINEXn), sociability proxies (FRNA, Lknbr, Org, Lkmove), savings dummy (Save), neighborhood identifiers (interview area, IVIA), and demographic controls | no page yet |

Sample: 18 annual waves, approximately 10,000 initial participants (later adding subsamples in 1997 and 1999), 250 interview areas averaging 41 residents each. Main panel-OLS samples: 207,362 (full controls, Table 2 col 2) to 218,149 (baseline, Table 2 col 1) person-year observations.

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jempfin.2026.101712) if you are: studying how beliefs (rather than behavior) spread through social networks; replicating or extending the nonlocal-family IV strategy of Brown et al. (2008); analyzing how sociability moderates peer effects (Figs. 4-7); testing whether peer learning is informative only in specific neighborhood types (Figs. 9-11 on expectation, voter, and income polarization); or connecting financial expectations to household saving behavior.

## Attribution and rights

Source: peer-reviewed, *Journal of Empirical Finance* 87 (2026) 101712. Paywalled; all rights reserved, © 2026 Elsevier B.V. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. Extract-only; the verbatim PDF is not hosted.

> Thornton, Joshua. "Peer effects in financial expectations." *Journal of Empirical Finance* 87 (2026) 101712. DOI: 10.1016/j.jempfin.2026.101712.
