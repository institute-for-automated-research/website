---
title: "Political Foundations of Racial Violence: Testa & Williams (2026)"
description: >-
  Distilled: Using a regression discontinuity design on close presidential
  elections in the post-Reconstruction South (1880-1900), Testa and Williams
  show that a narrow Democratic county loss raised Black lynching probability
  by roughly 10 percentage points, while Democratic-aligned newspapers
  amplified anti-Black crime narratives after those losses, foreshadowing the
  vote-suppression machinery of Jim Crow. The Quarterly Journal of Economics
  2026, paywalled. Twenty-four core results with source locators, datasets used, the
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
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ["Electoral Systems and Political Participation", "Race, History, and American Society", "Social and Cultural Dynamics"]
  dataAccess: licensed-commercial
  outcome:
    - probability of Black lynching in four-year post-election window
    - probability of white lynching in four-year post-election window (placebo)
    - anti-Black crime accusations in local newspapers
    - Democratic electoral victory 1904-1912
    - pretreatment county characteristics at the Democratic loss threshold
  outcomeClass: [ethnic-collective-violence, electoral-outcomes]
  license: "© The Author(s) 2025. Published by Oxford University Press on behalf of President and Fellows of Harvard College. All rights reserved."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Oxford University Press; no machine access without institutional subscription; checked 2026-06-28)"
  redistribution: extract-only
  resultsCount: 24
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
    - { ref: R4, outcome: "anti-Black crime accusations in local newspapers", metric: coefficient, value: "Table V all-paper estimates 0.126*, 0.139**, 0.168***, 0.136**, and 0.055** (SE 0.024-0.073); Democratic-paper estimates 0.104** and 0.168*** (SE 0.042 and 0.060); 29-88% increases over control means of 0.19-0.20", direction: positive }
    - { ref: R5, outcome: "probability of newspaper reporting on county election outcomes", metric: pp-effect, value: "0.043*** (SE 0.016), 39% increase overall; Democratic-affiliated papers show 99% increase", direction: positive }
    - { ref: R6, outcome: "probability of Black lynching in four-year post-election window", metric: coefficient, value: "0.127*** (SE 0.044) with Democrat-only elites; 0.110*** (SE 0.042) with white-only elites; 0.177*** (SE 0.065) with above-median Black population share; comparison p-values .11, .08, and .00, respectively", direction: positive, vsBenchmark: "separate Table VII Panel A subgroup comparisons; the joint intersection is not reported" }
    - { ref: R7, outcome: "Democratic electoral victory 1904-1912", metric: probability, value: "0.021*** (SE 0.006) on probability of Democrat winning county in 1904-1912 presidential elections", direction: positive }
    - { ref: R8, outcome: "Democratic electoral victory 1904-1912 (indirect via Black lynching)", metric: coefficient, value: "indirect mediation effect 0.004* (SE 0.002) through Black lynching channel", direction: positive }
    - { ref: R9, outcome: "probability of Black lynching in four-year post-election window", metric: coefficient, value: "Robustness estimates include 0.055*** (SE 0.022) with county fixed effects, 0.160** (SE 0.068) at half the optimal bandwidth, and 0.127** (SE 0.057) with a cubic running polynomial; baseline estimate remains 0.104** under county-decade and state-election-period clustering", direction: positive, vsBenchmark: "Table III alternative controls, bandwidths, polynomial orders, and inference choices retain a positive Black-lynching effect" }
    - { ref: R10, outcome: "probability of Black lynching in four-year post-election window", metric: coefficient, value: "0.160** (SE 0.063) when Democrats won the preceding election versus 0.050 (SE 0.066) when they lost; among previously uncompetitive counties with a prior Democratic win, 0.392*** (SE 0.130) versus 0.046 (SE 0.042) otherwise", direction: positive, vsBenchmark: "Table IV split-sample p = .00 for the joint uncompetitive and prior-Democratic-win split" }
    - { ref: R11, outcome: "probability of Black lynching in four-year post-election window", metric: pp-effect, value: "50.4-54.2 pp increase after losses to the populist coalition, a 319%-360% increase over the control mean; four to five times the estimates for residual nonpopulist opposition", direction: positive, vsBenchmark: "Text p. 767; Online Appendix Table C.4" }
    - { ref: R12, outcome: "probability of Black lynching in four-year post-election window", metric: coefficient, value: "Placebo loss thresholds away from zero and placebo effect windows outside the treated election period are statistically indistinguishable from zero; effects are concentrated in the two years after the election", direction: none, vsBenchmark: "Figure VI, p. 763; text pp. 762-764" }
    - { ref: R13, outcome: "anti-Black crime accusations in local newspapers", metric: coefficient, value: "Non-Democratic newspapers: -0.368 (SE 0.230) and -0.312 (SE 0.210), both statistically insignificant; N = 206", direction: none, vsBenchmark: "Democratic newspaper estimates in Table V columns 7-8 are 0.104** (SE 0.042) and 0.168*** (SE 0.060)" }
    - { ref: R14, outcome: "anti-Black crime accusations in local newspapers", metric: coefficient, value: "0.245*** (SE 0.056) with Democrat-only elite versus 0.038** (SE 0.016) without; 0.229*** (SE 0.049) in counties with a large Black constituency versus -0.019 (SE 0.055) without", direction: positive, vsBenchmark: "Table VII Panel B split-sample p = .08 for elite partisanship and .06 for Black constituency" }
    - { ref: R15, outcome: "probability of Black lynching in four-year post-election window", metric: coefficient, value: "0.160*** (SE 0.056) before state Jim Crow voting laws versus 0.010 (SE 0.050) after; split-sample p = .03", direction: positive, vsBenchmark: "Table VIII, p. 782" }
    - { ref: R16, outcome: "anti-Black crime accusations in local newspapers", metric: coefficient, value: "All newspapers: 0.265*** (SE 0.044) before Jim Crow versus -0.283*** (SE 0.060) after; Democratic newspapers: 0.291*** (SE 0.048) versus -0.014 (SE 0.074)", direction: mixed, vsBenchmark: "Table VIII, p. 782; split-sample p = .06 for all papers and .45 for Democratic papers" }
    - { ref: R17, outcome: "Democratic electoral victory 1904-1912", metric: coefficient, value: "Black lynching coefficient 0.051*** (SE 0.013) in full sample and 0.047*** (SE 0.011) within optimal bandwidth; lynching-by-prior-loss-margin interaction 0.001*** (SE 0.000) and 0.003*** (SE 0.001), respectively", direction: positive, vsBenchmark: "Table IX columns 3-4; prior loss-margin main effects are -0.001*** (SE 0.000) and -0.003*** (SE 0.001)" }
    - { ref: R18, outcome: "probability of Black lynching in four-year post-election window", metric: pp-effect, value: "Alternative outcome definitions imply a 30.0%-97.8% increase after Democratic losses; effects are large and significant only in the first two post-election years", direction: positive, vsBenchmark: "Text p. 762; Online Appendix Table C.2 and Figure C.2" }
    - { ref: R19, outcome: "probability of Black lynching in four-year post-election window", metric: coefficient, value: "Congressional-district RD estimates are imprecise and small, corresponding to a 4% increase over the control mean versus 80% for the presidential-election baseline", direction: none, vsBenchmark: "Text p. 768; Online Appendix Table C.5" }
    - { ref: R20, outcome: "pretreatment county characteristics around the Democratic loss threshold", metric: p-value, value: "McCrary density test p = .4; pretreatment-factor discontinuities are statistically insignificant across Table I outcomes", direction: none, vsBenchmark: "Text pp. 750-751; Table I pp. 752-753" }
    - { ref: R21, outcome: "probability of newspaper reporting on county election outcomes", metric: coefficient, value: "Non-Democratic papers: -0.051 (SE 0.095) and 0.007 (SE 0.140), both insignificant", direction: none, vsBenchmark: "Table VI cols 5-6, p. 776" }
    - { ref: R22, outcome: "probability of Black lynching in four-year post-election window", metric: coefficient, value: "0.110*** (SE 0.042) with a white-only elite versus -0.092 (SE 0.120) without", direction: positive, vsBenchmark: "Table VII Panel A split-sample p = .08" }
    - { ref: R23, outcome: "probability of Black lynching in four-year post-election window", metric: coefficient, value: "0.177*** (SE 0.065) in counties with an above-median Black population share versus -0.031 (SE 0.038) below median", direction: positive, vsBenchmark: "Table VII Panel A split-sample p = .00" }
    - { ref: R24, outcome: "probability of white lynching in four-year post-election window (placebo)", metric: coefficient, value: "0.016 (SE 0.023) in previously uncompetitive counties, statistically insignificant", direction: none, vsBenchmark: "Table II Panel B col 7, p. 756" }
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
    - "Generalizability to other periods or contexts of minority political empowerment and racial backlash is not examined; the paper focuses on presidential elections in the former Confederacy from 1880 to 1900 and separately examines periods before and after state Jim Crow voting laws (pp. 761, 782)."
  replicationCode:
    url: "https://doi.org/10.7910/DVN/08YUBP"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-28", role: extracted, note: "Full PDF read (pp. 733-794); eight core results extracted from Tables II-IX with exact locators. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: "2026-06-28", role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; one fix: R3 magnitude removed erroneous split-sample p-value < 0.01 claim; Table II Panel B has no such row and Table IV col 5 vs col 7 yields p = .11 for that subsample. All other Core results rows, Eq. 1 and Eq. 2 terms, and frontmatter facts confirmed against PDF." }
    - { by: "paper-distiller (gpt-6-luna)", date: "2026-10-04", role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and appended sixteen main-text findings covering identification checks, robustness, heterogeneity, placebo/null evidence, newspaper mechanisms, Jim Crow moderation, outcome timing, and downstream electoral interactions. Added corresponding findings metadata and estimating specifications. These additions are not human-verified and not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: "2026-10-04", role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 24 Core results, equations, specifications, classifications, findings, frontmatter, and prose against the source PDF; corrected R4 magnitudes and R6 subgroup interpretation, removed an appendix claim not verifiable in this PDF, and qualified causal language. Locator checks passed; the short-run local-officeholding result remains omitted from Core results." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf045", checked: "2026-06-28", by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days=0, start=2025-09-05; paywalled, all rights reserved OUP on behalf of Harvard" }
---

**What this is.** The paper's core results, the conceptual framework it tests, the identification strategy, and the estimating equations: enough to know what it found and how, without reading all 62 pages. To replicate or extend, read the original at [doi.org/10.1093/qje/qjaf045](https://doi.org/10.1093/qje/qjaf045).

## TL;DR

Testa and Williams use a regression discontinuity design on county-level popular-vote shares in presidential elections across the post-Reconstruction South (1880-1900) to show that a narrow Democratic Party loss in a county raised the probability of a Black lynching in the following four years by about 10 percentage points, equivalent to an 80% increase over the control mean. No comparable effect exists for white lynchings, ruling out a general violence response. Southern newspapers aligned with the Democratic Party increased anti-Black crime accusations after Democratic losses, consistent with an elite strategy channel linking racial antagonism to mob violence. Separate subgroup analyses find positive estimates with Democrat-only and white-only elites, and significantly larger effects in counties with above-median Black population shares; differences for the elite subgroups are marginal or statistically insignificant. These patterns are consistent with Blalock (1967)'s power threat hypothesis. The paper reports a positive, marginally significant mediating effect of Black lynchings on Democratic electoral success in the early twentieth century, echoing Jones, Troesken, and Walsh (2017) on lynching and Black political participation. The findings suggest that racial violence helped consolidate the Solid South and suppress Black political participation, foreshadowing the de jure vote-suppression of Jim Crow.

## Core results

Magnitudes and significance are as reported; \*/\*\*/\*\*\* = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Democratic county loss raises Black lynching probability by ~10 pp** (80% over control mean); robust across polynomials, bandwidths, and spatial controls | Table II Panel A col 3, p. 755 | beta = 0.104\*\* (SE 0.041); control mean = 0.13; optimal bandwidth ~15 pp |
| R2 | **No comparable effect on white lynchings** (placebo); coefficients small and insignificant across all specifications | Table II Panel A cols 5-8, p. 755 | beta = -0.009 (SE 0.013) in col 7; indistinguishable from zero |
| R3 | **Effect nearly doubles in previously uncompetitive counties** (the election constitutes new information about local political strengths): beta = 18.8 pp | Table II Panel B col 3, p. 756 | beta = 0.188\*\*\* (SE 0.072); 703 obs |
| R4 | **Anti-Black crime accusations rose after Democratic county losses, including in Democratic newspapers** | Table V cols 1-5 and 7-8, p. 772 | All-paper estimates: beta = 0.126\*, 0.139\*\*, 0.168\*\*\*, 0.136\*\*, and 0.055\*\* (SE 0.024-0.073); Democratic-paper estimates: 0.104\*\* (SE 0.042) and 0.168\*\*\* (SE 0.060); control means = 0.19-0.20 |
| R5 | **Democratic newspapers actively reported county presidential losses** (39% increase); Democratic papers show 99% increase vs. near-zero for non-Democratic papers | Table VI cols 1, 3-4, p. 776 | beta = 0.043\*\*\* (SE 0.016) for any coverage; beta = 0.119\*\*\* (SE 0.020) for Democratic papers |
| R6 | **Positive estimates appear with Democrat-only and white-only elites; the effect is significantly larger with above-median Black population share** | Table VII Panel A cols 1, 3, 5, p. 779 | beta = 0.127\*\*\* (SE 0.044), 0.110\*\*\* (SE 0.042), and 0.177\*\*\* (SE 0.065), respectively; subgroup difference p-values = .11, .08, and .00 |
| R7 | **Black lynchings in 1880-1900 predict Democratic electoral victory in 1904-1912**, even conditioning on prior Democratic performance; correlation is suggestive of electoral reversal | Table IX cols 1-2, p. 784 | beta = 0.021\*\*\* (SE 0.006) on any Democratic win 1904-1912 |
| R8 | **Causal mediation analysis reports a positive, marginally significant indirect effect through Black lynchings** | Table IX col 5, p. 784 | Indirect effect = 0.004\* (SE 0.002); direct effect = -0.013 (SE 0.018) |
| R9 | **The core lynching result survives alternative controls, inference, bandwidths, and polynomial orders** | Table III Panels A-C, pp. 760-761 | County FE: 0.055\*\*\* (SE 0.022); half-bandwidth: 0.160\*\* (SE 0.068); cubic polynomial: 0.127\*\* (SE 0.057); baseline 0.104\*\* under alternate clustering |
| R10 | **Backlash is strongest when a loss is informative after prior Democratic strength** | Table IV, p. 765 | 0.160\*\* (SE 0.063) after prior Democratic win vs 0.050 (SE 0.066) after prior loss; joint uncompetitive/prior-win split: 0.392\*\*\* (SE 0.130) vs 0.046 (SE 0.042), split p = .00 |
| R11 | **Losses to populist opposition produce especially large lynching increases** | Text p. 767; Online Appendix Table C.4 | 50.4-54.2 pp, a 319%-360% increase over control mean and four to five times the residual nonpopulist estimates |
| R12 | **Placebo thresholds and windows do not reproduce the lynching effect** | Figure VI, p. 763; text pp. 762-764 | Off-threshold and out-of-period estimates are statistically indistinguishable from zero; effects are significant only in the first two post-election years |
| R13 | **Non-Democratic newspapers show no statistically significant positive accusation response** | Table V cols 9-10, p. 772 | -0.368 (SE 0.230) and -0.312 (SE 0.210), both insignificant; N = 206 |
| R14 | **Newspaper accusation increases concentrate in Democrat-led and high-Black-population counties** | Table VII Panel B, p. 780 | Democrat-only elite: 0.245\*\*\* (SE 0.056) vs 0.038\*\* (SE 0.016); large Black constituency: 0.229\*\*\* (SE 0.049) vs -0.019 (SE 0.055) |
| R15 | **The lynching response falls to near zero after state Jim Crow voting laws take effect** | Table VIII cols 1-2, p. 782 | Pre-law: 0.160\*\*\* (SE 0.056); post-law: 0.010 (SE 0.050); split p = .03 |
| R16 | **Newspaper accusation effects change across Jim Crow periods** | Table VIII cols 3-6, p. 782 | All papers: 0.265\*\*\* (SE 0.044) pre-law vs -0.283\*\*\* (SE 0.060) post-law; Democratic papers: 0.291\*\*\* (SE 0.048) vs -0.014 (SE 0.074) |
| R17 | **Lynchings are associated with later Democratic wins and moderate the prior vote-margin relationship** | Table IX cols 3-4, p. 784 | Lynching coefficient: 0.051\*\*\* (SE 0.013) full sample and 0.047\*\*\* (SE 0.011) within bandwidth; interaction: 0.001\*\*\* (SE 0.000) and 0.003\*\*\* (SE 0.001) |
| R18 | **Alternative outcome windows support a short-lived post-election response** | Text p. 762; Online Appendix Table C.2 and Figure C.2 | Alternative outcomes imply 30.0%-97.8% increases; effects are large and significant only during the first two post-election years |
| R19 | **Congressional-district election estimates are small and imprecise** | Text p. 768; Online Appendix Table C.5 | Approximately 4% increase over control mean, compared with 80% for presidential-election baseline |
| R20 | **The close-election design passes density and pretreatment balance checks** | Text pp. 750-751; Table I, pp. 752-753 | McCrary density test p = .4; pretreatment discontinuities are statistically insignificant across the characteristics in Table I |
| R21 | **Non-Democratic papers do not increase county-election reporting after a Democratic loss** | Table VI cols 5-6, p. 776 | -0.051 (SE 0.095) and 0.007 (SE 0.140), both insignificant |
| R22 | **The lynching estimate is positive with a white-only elite and null otherwise; the subgroup difference is marginal** | Table VII Panel A, p. 779 | 0.110\*\*\* (SE 0.042) with white-only elite vs -0.092 (SE 0.120) without; split p = .08 |
| R23 | **The lynching effect is larger where the Black population share is above median** | Table VII Panel A, p. 779 | 0.177\*\*\* (SE 0.065) above median vs -0.031 (SE 0.038) below; split p = .00 |
| R24 | **The placebo white-lynching estimate remains null in previously uncompetitive counties** | Table II Panel B col 7, p. 756 | 0.016 (SE 0.023), statistically insignificant |

**Overall (paper's conclusion).** The post-Reconstruction Democratic Party used racial violence, amplified through partisan newspapers, as a strategic tool to suppress Black political participation when legal disenfranchisement was unavailable. Close presidential election losses served as focal signals that credibly threatened Democratic hegemony; the ensuing lynching surge helped reverse Democratic electoral fortunes and prefigured the formal vote-suppression mechanisms of Jim Crow. These findings qualify the prevailing economic explanation of lynching, which emphasizes Black-white labor competition, by showing that political factors were primary.

## Theory / model

The paper proposes no formal structural model. Its conceptual framework (Section II.B, p. 743) draws on Blalock (1967)'s power threat hypothesis, which posits that a dominant group increases its use of social control measures against a minority as the minority's political power grows. In the post-Reconstruction South, lynching of Black people was plausibly an instrument for maintaining white Democratic hegemony after emancipation removed formal slavery and before Jim Crow provided legal disfranchisement tools.

The framework posits two specific mechanisms through which a Democratic electoral loss could galvanize racial violence:

**Informational channel (Section II.B, p. 745).** Local political actors use recent vote shares to assess the relative strengths of competing groups. When actors lack complete information, even a close Democratic loss can serve as a focal point for coordination among members of the pro-Black opposition (following Anagol and Fujiwara (2016) and Granzier, Pons, and Tricaud (2023)). Anticipating such mobilization, local Democratic elites have an incentive to mount a violent preemptive backlash. This mechanism predicts that effects should be stronger where the loss constitutes more novel information, that is, in counties where Democrats had previously won by comfortable margins.

**Elite strategy channel (Section II.B, p. 746 and Section IV.B, p. 768).** Democratic newspapers, which dominated the Southern press and reported on county-level presidential results, could operationalize racial hatred by publishing anti-Black crime accusations (rape, murder, robbery). The paper notes that lynch mobs frequently invoked such accusations; its newspaper RD shows accusations rose after close Democratic losses but does not estimate whether newspaper reports caused lynchings. Glaeser (2005) models the supply side of this process: elites supply hatred to mobilize voters, dividing poor-white and Black coalitions. Ottinger and Posch (2024) document a related dynamic in which Southern elites used newspapers to mobilize white voters against populist political threats. The paper interprets this press response as evidence consistent with strategic efforts to suppress Black political participation.

The framework is tested empirically; no equilibrium condition or Euler equation is derived. The two channels generate testable predictions: larger effects in previously uncompetitive counties (informational channel), and increased anti-Black accusations in Democratic-affiliated newspapers after close losses (elite strategy channel). The results are consistent with both predictions, though the newspaper analysis does not by itself establish a causal link from accusations to lynchings.

## Method

The primary identification strategy is a sharp regression discontinuity design (RDD) exploiting the county-level popular-vote threshold for a Democratic loss (or win) in presidential elections. The method builds on `regression-discontinuity-design` for causal identification and `panel-regression` for the newspaper analysis.

**Main RD estimator.** Equation (1), p. 748:

$$
\text{Any Lynching}_{c(s)\tau} = \beta \cdot \text{Democratic Loss}_{c\tau} + f(\text{Loss Margin}_{c\tau}) + \phi_\tau + \theta_s + \mathbf{X}'_{c\tau} \boldsymbol{\Gamma} + \varepsilon_{c\tau}
\tag{1}
$$

where $$\text{Any Lynching}_{c(s)\tau}$$ is a binary indicator for at least one Black (or white) lynching in county $$c$$ of state $$s$$ in the four-year window after presidential election $$\tau \in \{1880, 1884, 1888, 1892, 1896, 1900\}$$. $$\text{Democratic Loss}_{c\tau}$$ is a binary indicator for whether the Democratic presidential candidate lost the county popular vote. $$f(\text{Loss Margin}_{c\tau})$$ is a flexible running polynomial (linear in the main specification) in the Democratic vote-share loss margin. $$\phi_\tau$$ is an election-period fixed effect, $$\theta_s$$ is a state fixed effect, and $$\mathbf{X}_{c\tau}$$ is a vector of spatial controls including quadratic polynomials in county longitude and latitude.

The local average treatment effect (LATE) is identified under the assumption that counties where Democrats barely lost are comparable in all pretreatment characteristics to those where they barely won -- a condition supported by balance tests (Table I, pp. 752-753) and a McCrary (2008) density test (p-value 0.4; p. 750).

**Bandwidth selection.** MSE-optimal bandwidths are computed following Calonico, Cattaneo, and Titiunik (2014), restricting estimation to county-elections close to the Loss Margin = 0 threshold. The core Black-lynching result (Table II col 3) uses an optimal bandwidth of approximately 15 percentage points, yielding about 1,481 observations.

**Newspaper RD estimator.** Equation (2), p. 769:

$$
\% \text{Accusations}_{n(c)t(\tau)} = \beta \cdot \text{Democratic Loss}_{c\tau} + f(\text{Loss Margin}_{c\tau}) + \phi_\tau + \Upsilon_{t(\tau)} + \alpha_{\sigma(c)} + \varepsilon_{nt}
\tag{2}
$$

where $$\% \text{Accusations}_{nt}$$ is the share of newspaper pages (per 100) in newspaper $$n$$ in year $$t$$ (within the four-year period following election $$\tau$$) that contain anti-Black crime accusation phrases ("negro rape," "negro murder," "negro robbery" and variants). $$\Upsilon_{t(\tau)}$$ is a year-within-election-cycle fixed effect, and $$\alpha_{\sigma(c)}$$ is a newspaper-city fixed effect.

**Causal mediation.** Table IX column 5 combines the RD variation with a structural mediation analysis to decompose the effect of Democratic losses on downstream Democratic electoral success (1904-1912) into a direct effect and an indirect effect through the Black lynching channel, following a local average structural equation approach.

## Empirical specifications

All specifications focus on the 11 former Confederate states (the "Solid South") over the 1880-1900 presidential election cycle period, covering elections in November of each election year.

**Main RD (R1, R2).** Equation (1) with linear running polynomial, election-period and state fixed effects, and spatial covariates. Outcome: indicator for any Black (or white) lynching in the four years after election $$\tau$$. Estimated at MSE-optimal bandwidth. Standard errors clustered at the county level (counties reclassified if boundaries changed between elections; see p. 751). Reported in Table II Panel A, p. 755.

**Uncompetitive-counties subsample (R3).** Equation (1) restricted to county-elections where $$|\text{Loss Margin}_{c,\tau-1}| > 16.2$$ (the median vote margin among sample Democratic losses), so the loss in $$\tau$$ is relatively novel information. Reported in Table II Panel B, p. 756. Split-sample p-value tests the null of equal coefficients across subsamples.

**Robustness suite (Table III, pp. 760-761):** alternative clusterings (county, county-decade, state-election-period); specifications omitting covariates, spatial controls, or lat/lon polynomials; county fixed effects; county-pair fixed effects based on geographic proximity; quadratic controls for 1880 Black population shares; bandwidth multipliers of 0.5x and 1.5x; quadratic, cubic, and quartic running polynomials. The reported Black-lynching estimates range from 0.055 to 0.160 and are significant at least at the 10% level.

**Newspaper RD (R4, R5, R13, R21).** Equation (2) is estimated on the newspaper-year panel from newspapers.com, linked to contemporaneous counties. The Table V accusation-rate samples range from 206 to 3,524 observations across pooled and partisan subsamples; election-period and election-cycle-year effects are included with state, city, or newspaper fixed effects by column. Table VI replaces the rate with an indicator for any county-election reporting and uses 240 to 2,499 observations across pooled and partisan splits, with election-period, election-cycle-year, and city fixed effects. Standard errors are clustered by county except for non-Democratic newspaper columns in Tables V and VI, where they are heteroskedasticity robust. Partisan affiliation follows Gentzkow et al. (2014) and Gentzkow, Shapiro, and Sinkinson (2014). Locators: Tables V-VI, pp. 772 and 776.

**Elite composition and power-threat subsamples (R6, R14, R22, R23).** Equation (1) is estimated separately by whether a county had a Democrat-only elite, a white-only elite, and an above-median Black population share (Table VII Panel A). Equation (2) is likewise estimated across these splits for newspaper accusation frequency (Panel B). The county specifications include election-period and state fixed effects plus quadratic spatial controls; the newspaper specifications include election-period and election-cycle-year effects plus city fixed effects. Standard errors are clustered by county. The split-sample p-values test differences across the subgroups. Table VII, pp. 779-780.

**Jim Crow moderation (R15, R16).** Equations (1) and (2) are estimated separately before and after a state enacted a Jim Crow voting law, including poll taxes, literacy tests, multi-box laws, and secret-ballot laws (timing from Jones, Troesken, and Walsh (2012)). County lynching regressions include election-period and state effects and spatial controls; newspaper accusation regressions include election-period, election-cycle-year, and city effects. Standard errors are clustered by county. The lynching effect is significant before Jim Crow (0.160***, SE 0.056) and near zero afterward (0.010, SE 0.050). Table VIII, p. 782.

**Downstream electoral analysis (R7, R8).** OLS regressions of Democratic presidential victory in 1904, 1908, or 1912 on a binary indicator for any Black lynching in the county during 1880-1900 election periods (Table IX cols 1-2). Causal mediation in col 5 adapts the baseline RD by fixing the Democratic loss margin at zero, then separately estimating the direct and indirect (through lynching) paths to later Democratic victory.

The mediated effect is decomposed into direct and lynching-mediated paths:

$$
\text{Total Effect} = \text{Direct Effect} + \text{Indirect Effect}_{\text{Black Lynching}}
$$

Table IX column (5) reports direct and indirect effect estimates from the Stata `mediate` package, with county-level controls and the baseline RD bandwidth; the paper reports county-clustered standard errors (Table IX notes, p. 784).

The downstream electoral regressions in Table IX columns 1-4 can be written as:

$$
\text{Democratic Win}_{c,1904-1912} = \alpha + \beta \text{Black Lynching}_{c\tau} + \delta \text{Loss Margin}_{c\tau} + \eta (\text{Black Lynching}_{c\tau} \times \text{Loss Margin}_{c\tau}) + \phi_\tau + \theta_s + \mathbf{X}'_{c\tau}\boldsymbol{\Gamma} + u_{c\tau}
$$

Columns (1)-(2) omit the loss-margin terms; columns (3)-(4) include both terms. The outcome indicates a Democratic county win in the 1904, 1908, or 1912 presidential election. Columns (1) and (3) use the full sample, while (2) and (4) restrict observations to the baseline MSE-optimal bandwidth. All include election-period and state fixed effects and quadratic county longitude and latitude controls, with standard errors clustered by county. The table reports 5,914 and 1,481 observations for the full and bandwidth samples, respectively (Table IX, p. 784).

For newspaper reporting, the paper substitutes an indicator for any newspaper-year coverage of county election results for the accusation-rate outcome in Equation (2). It retains election-period, election-cycle-year, and newspaper-city fixed effects; standard errors are clustered by county except in the non-Democratic-paper subsample, where they are heteroskedasticity robust. The newspaper-year sample counts and estimates are in Table VI, p. 776.

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

Sample: 11 former Confederate states; presidential elections 1880-1900 (6 elections); lynching windows through approximately 1904; newspaper years cover four-year post-election windows through 1904; downstream electoral analysis through 1912.

## When to read the full paper

Read the [original](https://doi.org/10.1093/qje/qjaf045) if you are:
studying the political economy of racial violence, ethnic conflict, or elite-fomented social antagonism; working on the causal effects of electoral outcomes on social behavior beyond officeholding; extending the close-elections RD design to new social outcomes; or examining the historical origins of Jim Crow and Black disenfranchisement. The online appendix contains the McCrary density test, robustness tables (B1-E5), causal mediation details, and congressional-election extensions. Replication data are at [doi.org/10.7910/DVN/08YUBP](https://doi.org/10.7910/DVN/08YUBP).

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* (2026), 733-794. This distillation was extracted by an LLM on 2026-06-28 and is **not human-verified or independently reproduced**. The paper is paywalled; the verbatim PDF is not hosted here.

> Testa, Patrick A., and Jhacova Williams. "Political Foundations of Racial Violence in the Post-Reconstruction South." *The Quarterly Journal of Economics* (2026), 733-794. DOI: 10.1093/qje/qjaf045. © The Author(s) 2025. Published by Oxford University Press on behalf of President and Fellows of Harvard College. All rights reserved. Reproduced here as a brief extract for research purposes only.
