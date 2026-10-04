---
title: "Competition and the Value of Innovation: Hu & Ma (2026)"
description: >-
  Distilled: Using a stock-market-based patent value measure, Hu and Ma (2026)
  document a negative relationship between product-market competition intensity
  and the economic value of newly granted patents among US public firms
  1986-2020; a quasi-experimental design exploiting horizontal M&A events
  confirms causality, with non-merging peers' patents gaining an average 2.8%
  in value after such deals. Journal of Corporate Finance vol. 96 (2026) 102909,
  CC BY 4.0. Twenty-two core results with source locators, datasets used, the
  hypotheses, and the estimating equations.
sidebar:
  label: Hu & Ma 2026
  order: 1
tags: [paper-summary, innovation, competition, patents, mergers-acquisitions,
       panel-regression, open-access, cc-by, peer-reviewed, unreplicated,
       data:wrds, data:sdc-platinum, data:uspto, data:tnic,
       data:census-bds, data:marx-fuegi]
paper:
  authors: Muhan Hu, Linxiang Ma
  authorList:
    - { family: Hu, given: Muhan, orcid: 0000-0003-4571-4405, affiliation: University of Strathclyde }
    - { family: Ma, given: Linxiang, orcid: 0000-0003-2153-4565, affiliation: University of Strathclyde }
  year: 2026
  venue: "Journal of Corporate Finance 96 (2026) 102909"
  venueShort: J. Corp. Finance 2026
  doi: 10.1016/j.jcorpfin.2025.102909
  tier: field
  jel:
    codes: [O31, G32, G34, D40]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Firm Innovation and Growth", "Innovation and Knowledge Management", "Corporate Finance and Governance"]
  dataAccess: licensed-commercial
  outcome:
    - patent economic value (KPSS market-based measure)
    - firm markup after horizontal M&A
    - firm patenting activity
    - firm innovation outcomes
    - peer-firm 3-day abnormal returns around M&A announcements
  outcomeClass: [firm-real-outcomes, security-returns]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, start 2025-10-27; corroborated by artifact p.1 CC BY 4.0 license notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open access, CC BY 4.0 (Elsevier ScienceDirect via doi redirect, 2026-06-26)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 22
  citedByCount: 1
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, difference-in-differences]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [market-power, innovation-rent-erosion]
  scope:
    region: US
    assetClass: US equities
    period: 1986-01..2020-12
    frequency: annual
    dataType: [market, accounting, administrative]
    granularity: [firm, security]
    n: "161,258 single-patent grants to US public firms (1,203,854 total patents); 26,534 firm-year observations; 1986-2020"
  findings:
    - { ref: R1, outcome: "patent economic value", metric: coefficient, value: "-0.717 (SE 0.199, p<0.01)", direction: negative, vsBenchmark: "1% higher competition -> 0.72% lower patent value; log-log OLS with all three FEs" }
    - { ref: R2, outcome: "patent economic value", metric: coefficient, value: "0.028 (SE 0.010, p<0.01)", direction: positive, vsBenchmark: "post-merger window [+8,+35] vs pre-merger window [-35,-8] for non-merging peers after horizontal M&A" }
    - { ref: R3, outcome: "patent economic value", metric: coefficient, value: "0.137 (SE 0.075, p<0.10)", direction: positive, vsBenchmark: "stealth mergers near upper antitrust HSR threshold; about 4x larger than baseline horizontal M&A effect" }
    - { ref: R4, outcome: "patent economic value", metric: coefficient, value: "0.009 (SE 0.019, insig)", direction: none, vsBenchmark: "non-horizontal M&A placebo: no effect on patent value of non-merging peers in acquirer industry" }
    - { ref: R5, outcome: "patent economic value", metric: coefficient, value: "-0.864 (SE 0.131, p<0.01) interaction High Value x Competition", direction: negative, vsBenchmark: "below-median-value slope = -0.439; adding the interaction gives about -1.3 for high-value patents, roughly triple the negative impact (Table 8, Col 5; §5.1, p.15)" }
    - { ref: R6, outcome: "patent economic value", metric: coefficient, value: "-1.839 (SE 0.431, p<0.01) interaction Pioneer x Competition", direction: negative, vsBenchmark: "non-pioneer slope = -0.679; the paper describes the competition impact on pioneer patents as approximately three times that on follow-up patents (Table 8, Col 7; §5.1, p.15)" }
    - { ref: R7, outcome: "patent economic value", metric: coefficient, value: "Table 3 balance checks: pre-post differences in adjusted backward citations 0.023 (SE 0.014), adjusted forward citations 0.018 (SE 0.014), and examination time 0.002 (SE 0.008); firm characteristics also indistinguishable", direction: none, vsBenchmark: "no systematic pre/post differences in patent and firm characteristics; Table 3 Panels A-B" }
    - { ref: R8, outcome: "patent economic value", metric: coefficient, value: "0.026 (SE 0.013, p<0.10), TNIC above-zero similarity, single-patent sample", direction: positive, vsBenchmark: "post-merger patents of overlapping-product-market peers; Table 4 Panel B Col 1" }
    - { ref: R9, outcome: "patent economic value", metric: coefficient, value: "0.056 (SE 0.033, p<0.10), stealth mergers near lower HSR threshold, single-patent sample", direction: positive, vsBenchmark: "about twice the baseline horizontal M&A effect; Table 5 Panel A Col 1" }
    - { ref: R10, outcome: "patent economic value", metric: coefficient, value: "Lower-threshold non-stealth: 0.047 (SE 0.078); upper-threshold non-stealth: 0.050 (SE 0.076), both insignificant in single-patent samples", direction: none, vsBenchmark: "mergers just above antitrust scrutiny thresholds; Table 5 Panel B Cols 1 and 3" }
    - { ref: R11, outcome: "patent economic value", metric: coefficient, value: "Post-merger x High IPS = 0.149 (SE 0.018, p<0.01) in concentrated industries; concentrated-industry differential = 0.190 (SE 0.059, p<0.01)", direction: positive, vsBenchmark: "greater post-merger increase for high product similarity in concentrated versus non-concentrated industries; Table 6 Panels A-C" }
    - { ref: R12, outcome: "firm markup after horizontal M&A", metric: coefficient, value: "Treated x Post x likely-anticompetitive deal: 0.067 (SE 0.017, p<0.01) lower-threshold stealth; 0.024 (SE 0.010, p<0.05) upper-threshold stealth; 0.024 (SE 0.007, p<0.01) concentrated/high-IPS deals", direction: positive, vsBenchmark: "matched rival firms; benchmark M&A effects are insignificant; Table 7 top panel" }
    - { ref: R13, outcome: "firm patenting activity", metric: coefficient, value: "Treated x Post x likely-anticompetitive deal: 0.381 (SE 0.219, p<0.05) lower-threshold stealth; 0.295 (SE 0.159, p<0.10) upper-threshold stealth; 0.673 (SE 0.203, p<0.01) concentrated/continuous IPS; 0.413 (SE 0.146, p<0.01) concentrated/high IPS", direction: positive, vsBenchmark: "peer firms increase patent filings relative to matched controls around more anti-competitive deals; Table 7 bottom panel" }
    - { ref: R14, outcome: "patent economic value", metric: coefficient, value: "Leader x log(Competition) = -0.887 (SE 0.290, p<0.01) in low-gap industries; 0.405 (SE 0.278, insignificant) in high-gap industries", direction: negative, vsBenchmark: "technology leaders have the more negative competition slope in low-gap industries; Table 8 Cols 1-2" }
    - { ref: R15, outcome: "patent economic value", metric: coefficient, value: "High Citation x log(Competition) = -0.067 (SE 0.036, p<0.10)", direction: negative, vsBenchmark: "competition has a more negative association for patents with above-median adjusted forward citations; Table 8 Col 6" }
    - { ref: R16, outcome: "patent economic value", metric: coefficient, value: "Science-based x log(Competition) = 0.158 (SE 0.073, p<0.05); Science-based level coefficient = 0.026 (SE 0.010, p<0.05)", direction: positive, vsBenchmark: "competition slope is less negative for science-based patents; Table 8 Col 8" }
    - { ref: R17, outcome: "patent economic value", metric: coefficient, value: "Competition coefficients for adjusted forward citations 0.032 (SE 0.075), adjusted self-citations -0.102 (SE 0.120), and adjusted non-self citations 0.077 (SE 0.061), all insignificant", direction: none, vsBenchmark: "citation-based measures do not reproduce the negative competition-patent economic value relationship; Table 9 Panel A" }
    - { ref: R18, outcome: "firm innovation outcomes", metric: coefficient, value: "log(Competition) coefficients: R&D intensity -0.033 (SE 0.017, p<0.10); next-year aggregate patent economic value -0.686 (SE 0.402, p<0.10); aggregate patent scientific value 0.127 (SE 0.331, insignificant)", direction: mixed, vsBenchmark: "firm-level outcomes with firm and year fixed effects; Table 9 Panel B" }
    - { ref: R19, outcome: "patent economic value", metric: coefficient, value: "Competition at filing date = -0.136 (SE 0.177, insignificant), controlling for grant-date competition", direction: none, vsBenchmark: "grant-date competition remains negative and significant with additional controls; Table 9 Panel C Col 3" }
    - { ref: R20, outcome: "patent economic value", metric: coefficient, value: "High Markup level = 0.166 (SE 0.026, p<0.01); Competition interactions: High Markup 0.100 (SE 0.278), High Share -0.139 (SE 0.186), both insignificant", direction: mixed, vsBenchmark: "high-markup firms' patents have higher levels, but firm markup and market share do not significantly moderate the competition slope; Table 8 Cols 3-4" }
    - { ref: R21, outcome: "patent economic value", metric: coefficient, value: "TNIC above-median similarity = 0.063 (SE 0.022, p<0.01), all-patent sample", direction: positive, vsBenchmark: "alternative stricter TNIC peer definition; Table 4 Panel B Col 4" }
    - { ref: R22, outcome: "peer-firm 3-day abnormal returns around M&A announcements", metric: car, value: "Pre-announcement mean = 0.085%; post-announcement mean = -0.011%; pre-post difference = 0.097 percentage points (SE 0.003)", direction: positive, vsBenchmark: "the lower post-event peer CAR would attenuate the estimated positive effect on patent value; Table 3 Panel C" }
  resultType: new-finding
  relatesTo:
    - { cite: "Aghion et al. (2005)", relation: tests, note: "tests the inverted-U competition-innovation hypothesis at the patent level; finds a monotone negative relationship, not an inverted-U" }
    - { cite: "Kogan et al. (2017)", doi: '10.1093/qje/qjw040', relation: builds-on, note: "uses the KPSS stock-market-based patent value measure (3-day CAR around patent grant date, adjusted for noise and scaled by market cap)" }
    - { cite: "Nickell (1996)", doi: '10.1086/262040', relation: builds-on, note: "adopts the markup-based competition index as the primary proxy for product-market competition intensity" }
    - { cite: "Kepler et al. (2021)", relation: builds-on, note: "uses the stealth merger design (deal values just below HSR antitrust thresholds) to identify likely-anti-competitive M&A events" }
    - { cite: "Fathollahi et al. (2022)", doi: '10.1016/j.jfineco.2021.06.017', relation: builds-on, note: "adopts the IPS text-based industry product similarity measure and concentrated-industry classification for heterogeneity analysis" }
    - { cite: "Hoberg and Phillips (2016)", doi: '10.1086/688176', relation: builds-on, note: "uses TNIC text-based network industry classification as an alternative industry definition for the competition measure and horizontal merger identification" }
  openQuestions:
    - "Results may not extend to other forms of innovation, such as trade secrets, which the patent-value framework cannot capture (footnote 4, p.4)."
    - "The small stealth merger sample precludes cluster-robust or wild-bootstrap standard errors, leaving open whether inference is fully robust in that sub-analysis (p.12)."
  replicationCode: { status: none }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read full PDF (22 pages); equations from Eqs. (1)-(4); numerical results from Tables 1-10; CC BY 4.0 open-access article; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 6 core result rows confirmed (Table 2/4/5/8 locators and coefficients match); Eqs (1)-(4) verified term-by-term; fixed: added missing JEL code G32 (PDF cover lists D40, G32, G34, O31; page had only 3 codes)." }
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full 22-page PDF and added missing core findings, the competition-erosion mechanism vocabulary, and completed the main-text equations/specifications; these additions are not human-verified and have not been reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 22 Core results, equations, specifications, classification axes, findings, frontmatter, and prose against the 22-page PDF; clarified the high-value and pioneer subgroup comparisons. No headline results omitted. Table-locator pass (2026-10-04): R1 Table 2 p.6 -> p.8; R7 Table 3 p.9 -> p.10; R19 Table 9 p.18 -> p.17; R22 Table 3 p.9 -> p.10." }
  licenceVerification:
    - { source: "Crossref works/10.1016/j.jcorpfin.2025.102909", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[2] content-version=vor URL=http://creativecommons.org/licenses/by/4.0/ start=2025-10-27; artifact p.1 confirms CC BY license notice; Crossref authenticated-orcid=false for both authors" }
---

**What this is.** This is a distilled skeleton of the published article. Read the original at [https://doi.org/10.1016/j.jcorpfin.2025.102909](https://doi.org/10.1016/j.jcorpfin.2025.102909) to replicate or extend. All results below carry exact table/figure/page locators from the PDF.

## TL;DR

Hu and Ma (2026) ask how product-market competition shapes the economic returns firms capture from successful innovations. Using the Kogan et al. (2017) (KPSS) stock-market-based patent value measure for all patents granted to US public firms from 1986 to 2020, they document a negative association between a markup-based competition index and the economic value of newly granted patents: a 1% higher competition intensity is associated with 0.3 to 1.9% lower patent value depending on the specification. To address endogeneity, they exploit horizontal M&A announcements as quasi-natural experiments that plausibly reduce competition for non-merging industry peers. Patents issued to those peers just after such announcements are worth on average 2.8% more than patents issued just before, consistent with lower competition raising the expected monopoly rents from a new patent. Effects are larger for stealth mergers (likely-anti-competitive deals just below HSR antitrust thresholds) and for deals in concentrated industries with high product similarity, while non-horizontal M&A announcements produce no effect. Cross-sectional analysis further shows the negative competition-patent value relationship is especially pronounced for technology leaders in low-gap industries, economically valuable patents, and pioneering patents.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Baseline OLS: higher competition (SIC) associated with lower patent value | Table 2, Panel A, Col 4, p.8 | log(Competition) = -0.717\*\*\* (SE 0.199) |
| R2 | Quasi-experiment: horizontal M&A (4-digit SIC) raises patent value for non-merging peers | Table 4, Panel A, Col 1, pp.10-11 | Post-merger = +0.028\*\*\* (SE 0.010), approx 2.8% |
| R3 | Stealth mergers near upper HSR antitrust threshold: larger patent value gain | Table 5, Panel A, Col 3, p.12 | Post-merger = +0.137\* (SE 0.075), approx 13.7% |
| R4 | Non-horizontal M&A placebo: no patent value change for non-merging peers | Table 4, Panel C, Col 1, p.11 | Post-merger = 0.009 (SE 0.019), insig |
| R5 | High-value patents: amplified negative competition effect | Table 8, Col 5, p.16 | High Value x Competition = -0.864\*\*\* (SE 0.131) |
| R6 | Pioneer patents: amplified negative competition effect | Table 8, Col 7, p.16 | Pioneer x Competition = -1.839\*\*\* (SE 0.431) |

| R7 | Identification balance check: pre- and post-announcement patent and firm characteristics are similar | Table 3, Panels A-B, p.10 | Adjusted backward citations pre-post difference = 0.023 (SE 0.014); adjusted forward citations = 0.018 (SE 0.014); examination time = 0.002 (SE 0.008); firm characteristics are described as statistically indistinguishable |
| R8 | Alternative TNIC definition confirms higher peer patent value after horizontal M&A | Table 4, Panel B, Col 1, pp.10-11 | Post-merger = +0.026\* (SE 0.013), above-zero similarity, single-patent sample |
| R9 | Stealth mergers near the lower HSR threshold raise peer patent value | Table 5, Panel A, Col 1, p.12 | Post-merger = +0.056\* (SE 0.033), single-patent sample |
| R10 | Mergers just above the HSR thresholds show no significant patent-value effect | Table 5, Panel B, Cols 1 and 3, p.12 | Lower threshold = +0.047 (SE 0.078); upper threshold = +0.050 (SE 0.076); both insignificant, single-patent samples |
| R11 | Product similarity amplifies the post-merger patent-value increase in concentrated industries | Table 6, Panels A-C, p.13 | Post-merger x High IPS = +0.149\*\*\* (SE 0.018) in concentrated industries; concentrated-industry differential = +0.190\*\*\* (SE 0.059) |
| R12 | Likely-anti-competitive mergers increase peer markups relative to matched peers | Table 7, top panel, pp.14-15 | Treated x Post x deal type = +0.067\*\*\* (SE 0.017) lower-threshold stealth; +0.024\*\* (SE 0.010) upper-threshold stealth; +0.024\*\*\* (SE 0.007) concentrated/high-IPS |
| R13 | Peers increase patent filings after likely-anti-competitive mergers | Table 7, bottom panel, pp.14-15 | Treated x Post x deal type = +0.381\*\* (SE 0.219) lower-threshold stealth; +0.295\* (SE 0.159) upper-threshold stealth; +0.673\*\*\* (SE 0.203) concentrated/continuous IPS; +0.413\*\*\* (SE 0.146) concentrated/high-IPS |
| R14 | Technology leaders have a more negative competition slope in low-gap industries | Table 8, Cols 1-2, p.16 | Leader x log(Competition) = -0.887\*\*\* (SE 0.290) in low-gap industries; +0.405 (SE 0.278, insignificant) in high-gap industries |
| R15 | Competition is more negatively associated with high-citation patents | Table 8, Col 6, p.16 | High Citation x log(Competition) = -0.067\* (SE 0.036) |
| R16 | Science-based patents are less sensitive to competition | Table 8, Col 8, p.16 | Science-based x log(Competition) = +0.158\*\* (SE 0.073); Science-based level effect = +0.026\*\* (SE 0.010) |
| R17 | Competition is unrelated to citation-based patent value measures | Table 9, Panel A, p.17 | Coefficients: adjusted forward citations = +0.032 (SE 0.075); adjusted self-citations = -0.102 (SE 0.120); adjusted non-self citations = +0.077 (SE 0.061); all insignificant |
| R18 | Firm-level innovation outcomes are lower with competition, while scientific patent value is unchanged | Table 9, Panel B, p.17 | log(Competition): R&D intensity = -0.033\* (SE 0.017); next-year aggregate patent economic value = -0.686\* (SE 0.402); aggregate patent scientific value = +0.127 (SE 0.331, insignificant) |
| R19 | Filing-date competition is not significant conditional on grant-date competition | Table 9, Panel C, Col 3, p.17 | log(Competition at filing date) = -0.136 (SE 0.177, insignificant); grant-date competition = -0.510\* (SE 0.271) |
| R20 | Firm market power and share do not significantly moderate the competition slope | Table 8, Cols 3-4, p.16 | High Markup level = +0.166\*\*\* (SE 0.026); High Markup x log(Competition) = +0.100 (SE 0.278); High Share x log(Competition) = -0.139 (SE 0.186), latter interactions insignificant |
| R21 | Stricter TNIC similarity threshold also yields a positive post-merger patent-value result | Table 4, Panel B, Col 4, pp.10-11 | Post-merger = +0.063\*\*\* (SE 0.022), above-median similarity, all-patent sample |
| R22 | Peer abnormal returns differ across the M&A event windows in a way that biases the patent-value estimate downward | Table 3, Panel C, p.10 | 3-day CAR mean = 0.085% before and -0.011% after; pre-post difference = +0.097 percentage points (SE 0.003) |

**Overall (paper's conclusion).** The evidence consistently supports the hypothesis that higher competition reduces the economic value of patents. Because firms base R&D investment decisions on the expected economic gains from innovations, lower patent value under intense competition implies weaker incentives to innovate. Effects are heterogeneous: technology leaders in low-gap industries, economically and scientifically important patents, and pioneering patents all face a more negative competition-patent value relationship. Science-based patents are relatively insulated. The paper also documents that firms operating in industries affected by likely-anti-competitive M&A subsequently increase their patent filings, consistent with higher post-merger innovation rents raising the reward to patenting (Table 7, p.14-15).

## Theory / model

The paper has no formal economic model. It develops two competing sets of hypotheses from the theoretical literature (Section 2, pp.3-4):

**Escape-competition channel** (Arrow 1962; Aghion et al. (2005)): In highly competitive markets, firms operate with thinner pre-innovation profit margins and face stronger survival pressure. A patent that grants a temporary monopoly or strong product differentiation allows the patentholder to escape competition and capture a large leap in profitability. The marginal gain from a patent is therefore larger when pre-innovation profits are lower, predicting a positive competition-patent value relationship:

> **Hypothesis 1a:** If the benefits of competition outweigh its negative effects, higher competition intensity will be associated with greater patent value.

**Competitive erosion channels** (Suetens 2005; Engel and Kleine 2015; Igami 2017; Teece 1986): Intense competition accelerates imitation of innovations, encourages rapid follow-up innovations by rivals, and shortens the period of exclusive benefits from a patent, all of which reduce the long-run value of the monopoly rents the patent secures. This predicts a negative relationship:

> **Hypothesis 1b:** If the negative effects of competition outweigh its benefits, higher competition intensity will be associated with lower patent value.

To identify the causal direction, the paper proposes a quasi-experimental design and translates the above into testable hypotheses about the direction of patent value change following an exogenous reduction in competition:

> **Hypothesis 2a:** All else equal, an increase in competition intensity leads to an increase in the value of a patent.
> **Hypothesis 2b:** All else equal, an increase in competition intensity leads to a decrease in the value of a patent.

The paper's results favor Hypothesis 1b and 2b. It finds no evidence of a non-monotonic (inverted-U) relationship at the patent level, in contrast to the firm/industry-level inverted-U documented by Aghion et al. (2005).

## Method

**Competition measure (p.5).** Industry-level competition intensity is measured as one minus the sales-weighted average markup among firms in the industry:

$$\text{Competition}_{st} = 1 - \sum_{i \in s} \frac{\text{Sales}_{it}}{\text{Sales}_{st}} \text{Markup}_{it} \tag{defn}$$

Markup is estimated following Aghion et al. (2005) and Nickell (1996):

$$\text{Markup}_{it} = \frac{\text{Operating Profit}_{it} - \text{Financial Cost}_{it}}{\text{Sales}_{it}}$$

where Operating Profit = Sales - COGS - SG&A - Depreciation, and Financial Cost is the product of a capital cost of 0.085 and the capital stock measured by the perpetual inventory method. A value of Competition close to one indicates near-perfect competition (zero markups), while lower values indicate greater monopoly power. Negative markups are truncated at zero. The primary measure uses the 4-digit SIC industry (Compustat full sample); an alternative uses the TNIC-based industry (Hoberg and Phillips (2016)).

**Patent value measure (p.4; following Kogan et al. (2017)).** Patent value is the KPSS stock-market-based measure: the present value of future cash flows associated with a newly granted patent, estimated as the 3-day cumulative abnormal return (CAR) around the patent grant date, adjusted for estimation noise and scaled by the firm's market capitalization. For firm-days with multiple patents, each patent's value is the total estimated dollar amount divided by the number of patents granted that day. Values are expressed in millions of 1996 US dollars and are winsorized at the 1st and 99th percentiles.

**Identification design (pp.7-9; Figure 2).** The quasi-experiment compares patents granted to non-merging, same-industry peers within a narrow window around horizontal M&A announcements. The three-step sample construction is: (1) retain all patents in the event industry issued within the [-35, +35] day window around the announcement; (2) exclude patents granted to the acquirer or target; (3) apply a [-7, +7] day exclusion window to minimize stock-return contamination. Pre-event patents are those in [-35, -8] and post-event patents are those in [+8, +35]. The identifying assumption is that USPTO patent grant dates are randomly distributed across the two windows (plausible because grant timing follows a 2-3 year examination process driven by examiners, not by firms). Balance tests (Table 3) confirm no systematic differences in patent or firm characteristics between the two groups.

## Empirical specifications

**Baseline OLS regression (Eq. 1, p.6).** The primary estimating equation for the competition-patent value relationship:

$$\log(\text{Patent Value}_{ijst}) = \alpha_i + \beta \log(\text{Competition}_{st}) + \gamma X_{ijst} + \delta_{jt} + \kappa_{tm} + \varepsilon_{ijst} \tag{1}$$

Indices: $$i$$ = firm, $$j$$ = 3-digit CPC patent class, $$s$$ = 4-digit SIC industry, $$t$$ = patent-granting year, $$m$$ = patent-granting month. Fixed effects: firm ($$\alpha_i$$), patent class x year ($$\delta_{jt}$$), year-month ($$\kappa_{tm}$$). Controls $$X_{ijst}$$: log total assets, leverage, ROA, market-to-book, R&D intensity, institutional ownership, patent examination time, quadratics of adjusted citations (backward and forward), quadratics of same-day patent count, annual change in industry firm count, annual change in industry employment, firm aggregate patent economic value and scientific value in the prior year. Standard errors are clustered at industry and year levels. The preferred specification (Table 2, Panel A, Col 4) includes all three sets of fixed effects and yields $$\hat{\beta} = -0.717$$ (SE 0.199, p < 0.01) for single-patent grants.

**Quasi-experimental regression (Eq. 2, pp.8-9).** To identify the causal impact of competition on patent value using horizontal M&A events:

$$\log(\text{Patent Value}_{ijst}) = \alpha_i + \beta \text{Post-merger}_{jst} + \gamma X_{ijst} + \delta_{jt} + \varepsilon_{ijst} \tag{2}$$

$$\text{Post-merger}_{jst} = 1$$ if patent $$j$$ is granted to a non-merging peer during the [+8, +35] event window, $$= 0$$ if granted in the [-35, -8] pre-event window. Fixed effects: firm ($$\alpha_i$$), patent class x year ($$\delta_{jt}$$). Same control vector $$X$$ as Eq. (1). Standard errors clustered at industry and year levels. The baseline result (Table 4, Panel A, Col 1) for horizontal M&A defined by 4-digit SIC industry: $$\hat{\beta} = 0.028$$ (SE 0.010, p < 0.01), approximately 2.8% higher patent value post-merger.

**Heterogeneity regression (Eq. 4, p.14).** Cross-sectional variation in the competition-patent value relationship:

$$\text{Patent Value}_{ijst} = \alpha_i + \beta_1 \text{Competition}_{st} + \beta_2 \text{Characteristic}_{ijt} + \beta_3(\text{Competition}_{st} \times \text{Characteristic}_{ijt}) + \gamma X_{ijst} + \delta_{jt} + \kappa_{tm} + \varepsilon_{ijst} \tag{4}$$

where Characteristic is a firm-level variable (e.g., indicator for technology leader, above-median markup, above-median sales share) or patent-level variable (e.g., indicator for high economic value, high scientific citation count, pioneer patent, science-based patent). The interaction $$\beta_3$$ captures differential competition sensitivity. Eq. (4) uses patent value in levels, as printed, and includes firm, patent-class-by-year, and year-month fixed effects; standard errors are clustered at industry and year levels. The reported sample is the single-patent sample (Table 8, p.16). Key results (Table 8, p.16): technology leaders in low-gap industries face a significantly more negative competition effect ($$\beta_3 = -0.887$$, SE 0.290); high-value patents have $$\beta_3 = -0.864$$ (SE 0.131); pioneer patents have $$\beta_3 = -1.839$$ (SE 0.431).

**Stealth merger and concentrated-industry sub-samples (pp.11-13; Tables 5-6).** To sharpen identification, the paper examines two subsets of horizontal mergers that are more likely to be anti-competitive. Following Kepler et al. (2021), stealth mergers are deals with values just below the HSR antitrust notification thresholds, defined as falling within 5% below the lower or upper threshold. Consistent with the market-power explanation, stealth mergers produce significantly larger increases in peer patent values than non-stealth mergers, while non-stealth mergers produce no significant effect (Table 5). For industry concentration and product similarity, the paper adopts the IPS text-based product-similarity measure developed by Fathollahi et al. (2022), which ranges from zero to one; deals in concentrated industries with high IPS scores show significantly larger patent value increases than deals in non-concentrated or low-IPS industries (Table 6).

**DiD markup analysis (Eq. 3, p.14).** To confirm that likely-anti-competitive M&A raises rivals' market power:

$$\text{Markup}_{ist} = \delta \text{post}_t + \gamma_1(\text{treated}_i \times \text{post}_t) + \gamma_2(\text{treated}_i \times \text{post}_t) \times H_{it} + \Gamma X_{ist} + \alpha_i + \sigma_{jt} + \varepsilon_{ist} \tag{3}$$

where $$H_{it}$$ is an indicator for stealth mergers or mergers in concentrated high-IPS industries, $$\text{treated}_i$$ indicates propensity-score-matched non-merging peers of merging firms, $$\alpha_i$$ are firm FEs, and $$\sigma_{jt}$$ are sector-year FEs. The regressions use one-to-one nearest-neighbor matching within industry, year, and 2-digit SIC sector, without replacement. Firm and sector-year fixed effects are included, with standard errors clustered by sector-year. Table 7 reports 476 to 5,714 matched firm observations for markup outcomes and 476 to 5,733 for patent filing outcomes. The triple interaction estimates the incremental effect of likely-anti-competitive deals relative to benchmark horizontal M&A (Table 7, pp.14-15).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP | Daily stock returns for KPSS patent value estimation (3-day CAR); firm market cap, beta, idiosyncratic volatility as controls | [WRDS](/wiki/commercial/wrds/) |
| Compustat | Firm financials: assets, leverage, ROA, market-to-book, R&D intensity, markup (operating profit, SG&A, depreciation, capital stock); 4-digit SIC segment data | [WRDS](/wiki/commercial/wrds/) |
| USPTO patent grants | Filing dates, grant dates, 3-digit CPC patent classes, citation counts (backward/forward); firm match via KPSS procedure | no page yet |
| SDC Platinum | M&A deal data: deal type, deal value, acquirer/target industries (SIC), combined market share | [SDC Platinum](/wiki/commercial/sdc-platinum/) |
| Hoberg-Phillips TNIC | Text-based Network Industry Classification (10-K product descriptions); IPS industry product similarity scores; alternative industry proxy | [TNIC](/wiki/datasets/tnic/) |
| Thomson/Refinitiv 13F Holdings | Institutional ownership (quarterly 13F filings) | [WRDS](/wiki/commercial/wrds/) |
| ISS / Execucomp | Independent board indicator; CEO ownership (governance controls in robustness, Table 9) | [WRDS](/wiki/commercial/wrds/) |
| US Census BDS | Annual changes in firm count and employees by industry; proxies for industry business cycle dynamics | no page yet |
| Marx and Fuegi (2020, 2022) | Science-based patent identification: patents in top-3 quartiles of non-patent literature citations within their class-year | no page yet |

Sample: Patents granted 1986-2020 to US public firms with Compustat financials and CRSP returns. Excludes financial (SIC 6000-6999), utility (SIC 4900-4999), and miscellaneous industries (SIC codes ending in 9). All continuous variables winsorized at 1st and 99th percentiles annually. Dollar amounts deflated to 1996 USD.

## When to read the full paper

Read the original if you are working on:

- **Innovation incentives**: studying how product-market competition shapes firms' economic returns from R&D and patenting, or calibrating innovation models that require a competition-returns elasticity.
- **M&A natural experiments**: using horizontal acquisitions as plausibly-anti-competitive shocks to market structure; the three-step event window construction (Figure 2, p.8) is directly reusable.
- **Patent valuation**: applying or extending the Kogan et al. (2017) KPSS measure; Table 1 (p.6) reports the measure's summary statistics and the paper discusses its relationship to citation-based scientific value measures.
- **Capital budgeting in R&D-intensive firms**: understanding how competition intensity affects the expected economic value of innovations as an input to investment and licensing decisions (managerial implications, p.19).
- **Cross-sectional heterogeneity in innovation**: examining which types of patents or firms are more sensitive to competitive pressure (Table 8, p.16 covers technology leaders, markup quintiles, market-share quintiles, economic vs. scientific value, pioneer vs. follow-up, and science-based patents).

## Attribution and rights

Hu, M., & Ma, L. (2026). Competition and the value of innovation. *Journal of Corporate Finance*, 96, 102909. https://doi.org/10.1016/j.jcorpfin.2025.102909

© 2025 The Authors. Published by Elsevier B.V. This is an open access article under the CC BY license (http://creativecommons.org/licenses/by/4.0/).

This page is an LLM-distilled summary produced by claude-sonnet-4-6. It has not been human-verified and the results have not been reproduced. Refer to the original article for all citations, proofs, and full robustness checks.
