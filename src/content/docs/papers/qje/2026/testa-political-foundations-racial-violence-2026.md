---
title: "Political Foundations of Racial Violence: Testa & Williams (2026)"
description: >-
  Distilled: Using a regression discontinuity design on close presidential
  elections in the post-Reconstruction South (1880-1900), Testa and Williams
  show that a narrow Democratic county loss raised Black lynching probability
  by roughly 10 percentage points, while Democratic-aligned newspapers
  amplified anti-Black crime narratives after those losses, foreshadowing the
  vote-suppression machinery of Jim Crow. The Quarterly Journal of Economics
  2026, paywalled. Eight core results with source locators, datasets used, the
  identification strategy, and estimating equations.
sidebar:
  label: Testa-Williams 2026
  order: 1
tags: [paper-summary, political-economy, economic-history, elections,
       panel-regression, peer-reviewed, unreplicated,
       data:project-hal, data:census, data:newspapers-com, data:seguin-rigby-lynching]
paper:
  authors: "Patrick A. Testa, Jhacova Williams"
  authorList:
    - { family: Testa, given: "Patrick A.", orcid: "0000-0002-1355-6417", affiliation: "Tulane University and National Bureau of Economic Research" }
    - { family: Williams, given: Jhacova, orcid: "0009-0009-6566-5373", affiliation: "American University" }
  year: 2026
  venue: "The Quarterly Journal of Economics (2026), 733-794"
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf045
  jel:
    codes: [N31, D72, J15]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Electoral Systems and Political Participation", "Race, History, and American Society", "Social and Cultural Dynamics"]
  dataAccess: licensed-commercial
  outcome:
    - probability of Black lynching in four-year post-election window
    - probability of white lynching in four-year post-election window (placebo)
    - anti-Black crime accusations in local newspapers
    - Democratic electoral victory 1904-1912
  outcomeClass: [ethnic-collective-violence, electoral-outcomes]
  license: "© The Author(s) 2025. Published by Oxford University Press on behalf of President and Fellows of Harvard College. All rights reserved."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Oxford University Press; no machine access without institutional subscription; checked 2026-06-28)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [regression-discontinuity-design, panel-regression]
    identification: rdd
  contributionType: [new-fact]
  mechanisms: [media-framing, power-threat-backlash]
  scope:
    region: US South (11 former Confederate states)
    period: 1880..1912
    frequency: mixed
    dataType: [administrative, text]
    granularity: [aggregate]
    n: "~6,000 county-election observations (full sample); core RD sample ~1,481 at MSE-optimal bandwidth (Table II); newspaper panel ~3,234 newspaper-years (Table V)"
  findings:
    - { ref: R1, outcome: "probability of Black lynching in four-year post-election window", metric: pp-effect, value: "10.4 pp (SE 0.041), ~80% above control mean of 0.13", direction: positive }
    - { ref: R2, outcome: "probability of white lynching in four-year post-election window (placebo)", metric: pp-effect, value: "-0.009 (SE 0.013), indistinguishable from zero", direction: none, vsBenchmark: "contrasts sharply with 10.4 pp for Black lynchings; no general violence effect" }
    - { ref: R3, outcome: "probability of Black lynching in four-year post-election window", metric: pp-effect, value: "18.8 pp (SE 0.072) in previously uncompetitive counties (703 obs)", direction: positive, vsBenchmark: "nearly double the 10.4 pp full-sample baseline (Table II Panel B)" }
    - { ref: R4, outcome: "anti-Black crime accusations in local newspapers", metric: coefficient, value: "0.126-0.168 (SE 0.073-0.089); 29-88% increase over control mean of 0.19-0.20", direction: positive }
    - { ref: R5, outcome: "probability of newspaper reporting on county election outcomes", metric: pp-effect, value: "0.043*** (SE 0.016), 39% increase overall; Democratic-affiliated papers show 99% increase", direction: positive }
    - { ref: R6, outcome: "probability of Black lynching in four-year post-election window", metric: coefficient, value: "0.127*** (SE 0.044) in all-Democrat/white-elite counties with large Black population; near zero otherwise", direction: positive, vsBenchmark: "effect driven entirely by counties matching the Blalock power-threat profile (Table VII)" }
    - { ref: R7, outcome: "Democratic electoral victory 1904-1912", metric: probability, value: "0.021*** (SE 0.006) on probability of Democrat winning county in 1904-1912 presidential elections", direction: positive }
    - { ref: R8, outcome: "Democratic electoral victory 1904-1912 (indirect via Black lynching)", metric: coefficient, value: "indirect mediation effect 0.004* (SE 0.002) through Black lynching channel", direction: positive, vsBenchmark: "~25% of total electoral reversal effect mediated via lynching (Online Appendix Table E.2)" }
  resultType: new-finding
  relatesTo:
    - { cite: "Blalock (1967)", relation: builds-on, note: "power threat hypothesis: dominant group increases violence against minority when minority political power grows" }
    - { cite: "Jones, Troesken, and Walsh (2017)", doi: '10.1016/j.jdeveco.2017.08.001', relation: extends, note: "prior evidence on lynching and Black political participation; this paper adds a causal RD design focused on the narrow win-lose threshold" }
    - { cite: "Glaeser (2005)", doi: '10.1162/0033553053327434', relation: builds-on, note: "political economy of hatred: elite incentives to supply racial hatred to divide the electorate and suppress minority coalitions" }
    - { cite: "Anagol and Fujiwara (2016)", relation: builds-on, note: "informational role of election ranks as coordination signals; a loss, even narrow, credibly signals opposition strength" }
    - { cite: "Ottinger and Posch (2024)", relation: cites, note: "newspaper use by Southern elites for white political mobilization against the populist threat; this paper focuses on anti-Black violence suppression" }
  openQuestions:
    - "Incomplete historical record of lynching events: estimates reflect only recorded incidents; the paper uses the HAL Project and Seguin-Rigby data and acknowledges potential under-reporting (p. 757)."
    - "Effects are attenuated for congressional elections, which the paper attributes to weaker informational salience of CD-level vote shares; the precise boundary between informational and officeholding effects is not fully resolved (Section IV.A, p. 768)."
    - "Generalizability to other periods or contexts of minority political empowerment and racial backlash is not examined; the paper focuses on the 1880-1900 presidential election window in the former Confederacy before Jim Crow (p. 761)."
  replicationCode:
    url: "https://doi.org/10.7910/DVN/08YUBP"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-28", role: extracted, note: "Full PDF read (pp. 733-794); eight core results extracted from Tables II-IX with exact locators. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: "2026-06-28", role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; one fix: R3 magnitude removed erroneous split-sample p-value < 0.01 claim; Table II Panel B has no such row and Table IV col 5 vs col 7 yields p = .11 for that subsample. All other Core results rows, Eq. 1 and Eq. 2 terms, and frontmatter facts confirmed against PDF." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf045", checked: "2026-06-28", by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days=0, start=2025-09-05; paywalled, all rights reserved OUP on behalf of Harvard" }
---

**What this is.** The paper's core results, the conceptual framework it tests, the identification strategy, and the estimating equations: enough to know what it found and how, without reading all 62 pages. To replicate or extend, read the original at [doi.org/10.1093/qje/qjaf045](https://doi.org/10.1093/qje/qjaf045).

## TL;DR

Testa and Williams use a regression discontinuity design on county-level popular-vote shares in presidential elections across the post-Reconstruction South (1880-1900) to show that a narrow Democratic Party loss in a county raised the probability of a Black lynching in the following four years by about 10 percentage points, equivalent to an 80% increase over the control mean. No comparable effect exists for white lynchings, ruling out a general violence response. Southern newspapers aligned with the Democratic Party amplified anti-Black crime narratives in the aftermath of Democratic losses, providing the coordination mechanism through which elite-fomented racial antagonism translated into mob violence. These effects are concentrated in counties with all-white, all-Democratic local elites facing a large Black electorate, consistent with Blalock (1967)'s power threat hypothesis. The paper further shows that Black lynchings had a positive mediating effect on Democratic electoral success in the early twentieth century, echoing Jones, Troesken, and Walsh (2017) on lynching and Black political participation. Racial violence helped consolidate the Solid South by suppressing Black political participation and foreshadowing the de jure vote-suppression of Jim Crow.

## Core results

Magnitudes and significance are as reported; \*/\*\*/\*\*\* = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Democratic county loss raises Black lynching probability by ~10 pp** (80% over control mean); robust across polynomials, bandwidths, and spatial controls | Table II Panel A col 3, p. 755 | beta = 0.104\*\* (SE 0.041); control mean = 0.13; optimal bandwidth ~15 pp |
| R2 | **No comparable effect on white lynchings** (placebo); coefficients small and insignificant across all specifications | Table II Panel A cols 5-8, p. 755 | beta = -0.009 (SE 0.013) in col 7; indistinguishable from zero |
| R3 | **Effect nearly doubles in previously uncompetitive counties** (the election constitutes new information about local political strengths): beta = 18.8 pp | Table II Panel B col 3, p. 756 | beta = 0.188\*\*\* (SE 0.072); 703 obs |
| R4 | **Anti-Black crime accusations in Democratic newspapers rose 29-88%** after Democratic county losses; effect driven by Democrat-affiliated outlets | Table V cols 1-5 and 7-8, p. 772 | beta = 0.126\*-0.168\*\* (SE 0.073-0.089); control mean 0.19-0.20 pages per 100 |
| R5 | **Democratic newspapers actively reported county presidential losses** (39% increase); Democratic papers show 99% increase vs. near-zero for non-Democratic papers | Table VI cols 1, 3-4, p. 776 | beta = 0.043\*\*\* (SE 0.016) for any coverage; beta = 0.119\*\*\* (SE 0.020) for Democratic papers |
| R6 | **Effects concentrated in counties with all-white/Democrat elite and large Black constituency** -- consistent with the Blalock power-threat profile; near zero elsewhere | Table VII Panel A col 1 and col 5, p. 779 | beta = 0.127\*\*\* (SE 0.044) in Democrat/white-elite sample; beta = 0.117\*\*\* (SE 0.065) for large-Black-population subsample |
| R7 | **Black lynchings in 1880-1900 predict Democratic electoral victory in 1904-1912**, even conditioning on prior Democratic performance; correlation is suggestive of electoral reversal | Table IX cols 1-2, p. 784 | beta = 0.021\*\*\* (SE 0.006) on any Democratic win 1904-1912 |
| R8 | **Causal mediation confirms Black lynchings as a positive channel** for the Democratic electoral reversal; indirect effect is positive and significant; ~25% of total effect mediated via lynching | Table IX col 5, p. 784; Online Appendix Table E.2 | Indirect effect = 0.004\* (SE 0.002); direct effect = -0.013 (SE 0.018) |

**Overall (paper's conclusion).** The post-Reconstruction Democratic Party used racial violence, amplified through partisan newspapers, as a strategic tool to suppress Black political participation when legal disenfranchisement was unavailable. Close presidential election losses served as focal signals that credibly threatened Democratic hegemony; the ensuing lynching surge helped reverse Democratic electoral fortunes and prefigured the formal vote-suppression mechanisms of Jim Crow. These findings qualify the prevailing economic explanation of lynching, which emphasizes Black-white labor competition, by showing that political factors were primary.

## Theory / model

The paper proposes no formal structural model. Its conceptual framework (Section II.B, p. 743) draws on Blalock (1967)'s power threat hypothesis, which posits that a dominant group increases its use of social control measures against a minority as the minority's political power grows. In the post-Reconstruction South, lynching of Black people was plausibly an instrument for maintaining white Democratic hegemony after emancipation removed formal slavery and before Jim Crow provided legal disfranchisement tools.

The framework posits two specific mechanisms through which a Democratic electoral loss could galvanize racial violence:

**Informational channel (Section II.B, p. 745).** Local political actors use recent vote shares to assess the relative strengths of competing groups. When actors lack complete information, even a close Democratic loss can serve as a focal point for coordination among members of the pro-Black opposition (following Anagol and Fujiwara (2016) and Granzier, Pons, and Tricaud (2023)). Anticipating such mobilization, local Democratic elites have an incentive to mount a violent preemptive backlash. This mechanism predicts that effects should be stronger where the loss constitutes more novel information, that is, in counties where Democrats had previously won by comfortable margins.

**Elite strategy channel (Section II.B, p. 746 and Section IV.B, p. 768).** Democratic newspapers, which dominated the Southern press and reported on county-level presidential results, could operationalize racial hatred by publishing anti-Black crime accusations (rape, murder, robbery). Such accusations served as narrative pretexts that lowered the coordination costs of lynch mobs. Glaeser (2005) models the supply side of this process: elites supply hatred to mobilize voters, dividing poor-white and Black coalitions. Ottinger and Posch (2024) document a related dynamic in which Southern elites used newspapers to mobilize white voters against populist political threats. In this paper, newspapers are the supply chain for manufactured racial antagonism directed specifically at suppressing Black political participation.

The framework is tested empirically; no equilibrium condition or Euler equation is derived. The two channels generate testable predictions: larger effects in previously uncompetitive counties (informational channel), and positive newspaper-violence correlation driven by Democratic-affiliated press (elite strategy channel). Both are confirmed in the data.

## Method

The primary identification strategy is a sharp regression discontinuity design (RDD) exploiting the county-level popular-vote threshold for a Democratic loss (or win) in presidential elections. The method builds on `regression-discontinuity-design` for causal identification and `panel-regression` for the newspaper analysis.

**Main RD estimator.** Equation (1), p. 748:

$$
\text{Any Lynching}_{c(s)\tau} = \beta \cdot \text{Democratic Loss}_{c\tau} + f(\text{Loss Margin}_{c\tau}) + \phi_\tau + \theta_s + \mathbf{X}'_{c\tau} \boldsymbol{\Gamma} + \varepsilon_{c\tau}
$$

where $$\text{Any Lynching}_{c(s)\tau}$$ is a binary indicator for at least one Black (or white) lynching in county $$c$$ of state $$s$$ in the four-year window after presidential election $$\tau \in \{1880, 1884, 1888, 1892, 1896, 1900\}$$. $$\text{Democratic Loss}_{c\tau}$$ is a binary indicator for whether the Democratic presidential candidate lost the county popular vote. $$f(\text{Loss Margin}_{c\tau})$$ is a flexible running polynomial (linear in the main specification) in the Democratic vote-share loss margin. $$\phi_\tau$$ is an election-period fixed effect, $$\theta_s$$ is a state fixed effect, and $$\mathbf{X}_{c\tau}$$ is a vector of spatial controls including quadratic polynomials in county longitude and latitude.

The local average treatment effect (LATE) is identified under the assumption that counties where Democrats barely lost are comparable in all pretreatment characteristics to those where they barely won -- a condition supported by balance tests (Table I, pp. 752-753) and a McCrary (2008) density test (p-value 0.4; p. 750).

**Bandwidth selection.** MSE-optimal bandwidths are computed following Calonico, Cattaneo, and Titiunik (2014), restricting estimation to county-elections close to the Loss Margin = 0 threshold. The core Black-lynching result (Table II col 3) uses an optimal bandwidth of approximately 15 percentage points, yielding about 1,481 observations.

**Newspaper RD estimator.** Equation (2), p. 769:

$$
\% \text{Accusations}_{n(c)t(\tau)} = \beta \cdot \text{Democratic Loss}_{c\tau} + f(\text{Loss Margin}_{c\tau}) + \phi_\tau + \Upsilon_{t(\tau)} + \alpha_{\sigma(c)} + \varepsilon_{nt}
$$

where $$\% \text{Accusations}_{nt}$$ is the share of newspaper pages (per 100) in newspaper $$n$$ in year $$t$$ (within the four-year period following election $$\tau$$) that contain anti-Black crime accusation phrases ("negro rape," "negro murder," "negro robbery" and variants). $$\Upsilon_{t(\tau)}$$ is a year-within-election-cycle fixed effect, and $$\alpha_{\sigma(c)}$$ is a newspaper-city fixed effect.

**Causal mediation.** Table IX column 5 combines the RD variation with a structural mediation analysis to decompose the effect of Democratic losses on downstream Democratic electoral success (1904-1912) into a direct effect and an indirect effect through the Black lynching channel, following a local average structural equation approach.

## Empirical specifications

All specifications focus on the 11 former Confederate states (the "Solid South") over the 1880-1900 presidential election cycle period, covering elections in November of each election year.

**Main RD (R1, R2).** Equation (1) with linear running polynomial, election-period and state fixed effects, and spatial covariates. Outcome: indicator for any Black (or white) lynching in the four years after election $$\tau$$. Estimated at MSE-optimal bandwidth. Standard errors clustered at the county level (counties reclassified if boundaries changed between elections; see p. 751). Reported in Table II Panel A, p. 755.

**Uncompetitive-counties subsample (R3).** Equation (1) restricted to county-elections where $$|\text{Loss Margin}_{c,\tau-1}| > 16.2$$ (the median vote margin among sample Democratic losses), so the loss in $$\tau$$ is relatively novel information. Reported in Table II Panel B, p. 756. Split-sample p-value tests the null of equal coefficients across subsamples.

**Robustness suite (Table III, pp. 760-761):** alternative clusterings (county, county-decade, state-election-period); specifications omitting covariates, spatial controls, or lat/lon polynomials; county fixed effects; county-pair fixed effects based on geographic proximity; quadratic controls for 1880 Black population shares; bandwidth multipliers of 0.5x and 1.5x; quadratic, cubic, and quartic running polynomials. All yield Black-lynching estimates of 0.073-0.160, all significant at $$p < 0.10$$.

**Newspaper RD (R4, R5).** Equation (2) estimated on a balanced panel of Southern city newspapers from newspapers.com (as of June 2023), linked to their contemporaneous county. Outcomes: % pages with anti-Black crime accusations (Table V), and probability of any county election reporting (Table VI). Election-cycle year fixed effects and newspaper-city fixed effects absorb within-newspaper trends. Subsampled by newspaper partisan affiliation from Gentzkow et al. (2014) and Gentzkow, Shapiro, and Sinkinson (2014).

**Elite composition and power-threat subsamples (R6).** Equation (1) interacted with whether a county had a Democrat-only elite, a white-only elite, and an above-median Black population share (Table VII). The split-sample p-values test whether the Black-lynching effect differs significantly between the Blalock profile counties and the remainder.

**Jim Crow moderation (Table VIII).** Equation (1) and Equation (2) estimated separately for county-elections before and after a state enacted any Jim Crow ballot requirement or poll tax (timing from Jones, Troesken, and Walsh (2012)). The lynching effect is significant pre-Jim Crow (beta = 0.160\*\*\*) and near zero post-Jim Crow (beta = 0.010), consistent with racial violence substituting for legal disenfranchisement.

**Downstream electoral analysis (R7, R8).** OLS regressions of Democratic presidential victory in 1904, 1908, or 1912 on a binary indicator for any Black lynching in the county during 1880-1900 election periods (Table IX cols 1-2). Causal mediation in col 5 adapts the baseline RD by fixing the Democratic loss margin at zero, then separately estimating the direct and indirect (through lynching) paths to later Democratic victory.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Historic American Lynching (HAL) Project (Hines and Steelwater 2023) | County-level Black and white lynching indicator outcomes for all states except Texas and Virginia | [Project HAL](/wiki/datasets/project-hal/) |
| Seguin and Rigby (2019) lynching data | County-level lynching outcomes for Texas and Virginia to supplement HAL | no page yet |
| U.S. Decennial Census (1870, 1880, 1900, 1910) | County demographics (population density, Black population share), slaveholder shares, Confederate veteran shares | [Census](/wiki/datasets/census/) |
| Clubb, Flanigan, and Zingale (2006) ICPSR presidential and congressional election returns | County-level vote tabulations for presidential elections 1880-1900 and congressional elections; main explanatory variable | no page yet |
| newspapers.com full-text archive (as of June 10, 2023) | Anti-Black crime accusation rates (% pages) and county election-reporting rates in Southern city newspapers | no page yet |
| Gentzkow et al. (2014) and Gentzkow, Shapiro, and Sinkinson (2014) newspaper political affiliations | Partisan affiliation coding for Southern newspapers during the sample period | no page yet |
| Kestenbaum (2023) Political Graveyard | Partisan composition of local officeholders (mayors, postmasters) matched to counties | no page yet |
| Logan (2020) racial composition data | County racial composition of elected officials | no page yet |

Sample: 11 former Confederate states; presidential elections 1880-1900 (6 elections); lynching window through approximately 1904; newspaper panel annually 1880-1900; downstream electoral analysis through 1912.

## When to read the full paper

Read the [original](https://doi.org/10.1093/qje/qjaf045) if you are:
studying the political economy of racial violence, ethnic conflict, or elite-fomented social antagonism; working on the causal effects of electoral outcomes on social behavior beyond officeholding; extending the close-elections RD design to new social outcomes; or examining the historical origins of Jim Crow and Black disenfranchisement. The online appendix contains the McCrary density test, robustness tables (B1-E5), causal mediation details, and congressional-election extensions. Replication data are at [doi.org/10.7910/DVN/08YUBP](https://doi.org/10.7910/DVN/08YUBP).

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* (2026), 733-794. This distillation was extracted by an LLM on 2026-06-28 and is **not human-verified or independently reproduced**. The paper is paywalled; the verbatim PDF is not hosted here.

> Testa, Patrick A., and Jhacova Williams. "Political Foundations of Racial Violence in the Post-Reconstruction South." *The Quarterly Journal of Economics* (2026), 733-794. DOI: 10.1093/qje/qjaf045. © The Author(s) 2025. Published by Oxford University Press on behalf of President and Fellows of Harvard College. All rights reserved. Reproduced here as a brief extract for research purposes only.
