---
title: "Competition and the Value of Innovation: Hu & Ma (2026)"
description: >-
  Distilled: Using a stock-market-based patent value measure, Hu and Ma (2026)
  document a negative relationship between product-market competition intensity
  and the economic value of newly granted patents among US public firms
  1986-2020; a quasi-experimental design exploiting horizontal M&A events
  confirms causality, with non-merging peers' patents gaining an average 2.8%
  in value after such deals. Journal of Corporate Finance vol. 96 (2026) 102909,
  CC BY 4.0. Six core results with source locators, datasets used, the
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
  outcomeClass: [firm-real-outcomes]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, start 2025-10-27; corroborated by artifact p.1 CC BY 4.0 license notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open access, CC BY 4.0 (Elsevier ScienceDirect via doi redirect, 2026-06-26)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 6
  citedByCount: 1
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, difference-in-differences]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [market-power]
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
    - { ref: R5, outcome: "patent economic value", metric: coefficient, value: "-0.864 (SE 0.131, p<0.01) interaction High Value x Competition", direction: negative, vsBenchmark: "base competition effect -0.439 for below-median-value patents; high-value coefficient about 2x larger" }
    - { ref: R6, outcome: "patent economic value", metric: coefficient, value: "-1.839 (SE 0.431, p<0.01) interaction Pioneer x Competition", direction: negative, vsBenchmark: "base competition effect -0.679 for non-pioneer patents; pioneer coefficient about 3x larger" }
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
  licenceVerification:
    - { source: "Crossref works/10.1016/j.jcorpfin.2025.102909", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[2] content-version=vor URL=http://creativecommons.org/licenses/by/4.0/ start=2025-10-27; artifact p.1 confirms CC BY license notice; Crossref authenticated-orcid=false for both authors" }
---

**What this is.** This is a distilled skeleton of the published article. Read the original at [https://doi.org/10.1016/j.jcorpfin.2025.102909](https://doi.org/10.1016/j.jcorpfin.2025.102909) to replicate or extend. All results below carry exact table/figure/page locators from the PDF.

## TL;DR

Hu and Ma (2026) ask how product-market competition shapes the economic returns firms capture from successful innovations. Using the Kogan et al. (2017) (KPSS) stock-market-based patent value measure for all patents granted to US public firms from 1986 to 2020, they document a negative association between a markup-based competition index and the economic value of newly granted patents: a 1% higher competition intensity is associated with 0.3 to 1.9% lower patent value depending on the specification. To address endogeneity, they exploit horizontal M&A announcements as quasi-natural experiments that plausibly reduce competition for non-merging industry peers. Patents issued to those peers just after such announcements are worth on average 2.8% more than patents issued just before, consistent with lower competition raising the expected monopoly rents from a new patent. Effects are larger for stealth mergers (likely-anti-competitive deals just below HSR antitrust thresholds) and for deals in concentrated industries with high product similarity, while non-horizontal M&A announcements produce no effect. Cross-sectional analysis further shows the negative competition-patent value relationship is especially pronounced for technology leaders in low-gap industries, economically valuable patents, and pioneering patents.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Baseline OLS: higher competition (SIC) associated with lower patent value | Table 2, Panel A, Col 4, p.6 | log(Competition) = -0.717\*\*\* (SE 0.199) |
| R2 | Quasi-experiment: horizontal M&A (4-digit SIC) raises patent value for non-merging peers | Table 4, Panel A, Col 1, pp.10-11 | Post-merger = +0.028\*\*\* (SE 0.010), approx 2.8% |
| R3 | Stealth mergers near upper HSR antitrust threshold: larger patent value gain | Table 5, Panel A, Col 3, p.12 | Post-merger = +0.137\* (SE 0.075), approx 13.7% |
| R4 | Non-horizontal M&A placebo: no patent value change for non-merging peers | Table 4, Panel C, Col 1, p.11 | Post-merger = 0.009 (SE 0.019), insig |
| R5 | High-value patents: amplified negative competition effect | Table 8, Col 5, p.16 | High Value x Competition = -0.864\*\*\* (SE 0.131) |
| R6 | Pioneer patents: amplified negative competition effect | Table 8, Col 7, p.16 | Pioneer x Competition = -1.839\*\*\* (SE 0.431) |

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

$$\log(\text{Patent Value}_{ijst}) = \alpha_i + \beta \log(\text{Competition}_{st}) + \gamma X_{ijst} + \delta_{jt} + \kappa_m + \varepsilon_{ijst} \tag{1}$$

Indices: $$i$$ = firm, $$j$$ = 3-digit CPC patent class, $$s$$ = 4-digit SIC industry, $$t$$ = patent-granting year, $$m$$ = patent-granting month. Fixed effects: firm ($$\alpha_i$$), patent class x year ($$\delta_{jt}$$), year x month ($$\kappa_m$$). Controls $$X_{ijst}$$: log total assets, leverage, ROA, market-to-book, R&D intensity, institutional ownership, patent examination time, quadratics of adjusted citations (backward and forward), quadratics of same-day patent count, annual change in industry firm count, annual change in industry employment, firm aggregate patent economic value and scientific value in the prior year. Standard errors are clustered at industry and year levels. The preferred specification (Table 2, Panel A, Col 4) includes all three sets of fixed effects and yields $$\hat{\beta} = -0.717$$ (SE 0.199, p < 0.01) for single-patent grants.

**Quasi-experimental regression (Eq. 2, pp.8-9).** To identify the causal impact of competition on patent value using horizontal M&A events:

$$\log(\text{Patent Value}_{ijst}) = \alpha_i + \beta \text{Post-merger}_{jst} + \gamma X_{ijst} + \delta_{jt} + \varepsilon_{ijst} \tag{2}$$

$$\text{Post-merger}_{jst} = 1$$ if patent $$j$$ is granted to a non-merging peer during the [+8, +35] event window, $$= 0$$ if granted in the [-35, -8] pre-event window. Fixed effects: firm ($$\alpha_i$$), patent class x year ($$\delta_{jt}$$). Same control vector $$X$$ as Eq. (1). Standard errors clustered at industry and year levels. The baseline result (Table 4, Panel A, Col 1) for horizontal M&A defined by 4-digit SIC industry: $$\hat{\beta} = 0.028$$ (SE 0.010, p < 0.01), approximately 2.8% higher patent value post-merger.

**Heterogeneity regression (Eq. 4, p.14).** Cross-sectional variation in the competition-patent value relationship:

$$\log(\text{Patent Value}_{ijst}) = \alpha_i + \beta_1 \text{Competition}_{st} + \beta_2 \text{Characteristic}_{ijt} + \beta_3 \text{Competition}_{st} \times \text{Characteristic}_{ijt} + \gamma X_{ijst} + \delta_{jt} + \kappa_m + \varepsilon_{ijst} \tag{4}$$

where Characteristic is a firm-level variable (e.g., indicator for technology leader, above-median markup, above-median sales share) or patent-level variable (e.g., indicator for high economic value, high scientific citation count, pioneer patent, science-based patent). The interaction $$\beta_3$$ captures differential competition sensitivity. Key results (Table 8, p.16): technology leaders in low-gap industries face a significantly more negative competition effect ($$\beta_3 = -0.887$$, SE 0.290); high-value patents have $$\beta_3 = -0.864$$ (SE 0.131); pioneer patents have $$\beta_3 = -1.839$$ (SE 0.431).

**Stealth merger and concentrated-industry sub-samples (pp.11-13; Tables 5-6).** To sharpen identification, the paper examines two subsets of horizontal mergers that are more likely to be anti-competitive. Following Kepler et al. (2021), stealth mergers are deals with values just below the HSR antitrust notification thresholds, defined as falling within 5% below the lower or upper threshold. Consistent with the market-power explanation, stealth mergers produce significantly larger increases in peer patent values than non-stealth mergers, while non-stealth mergers produce no significant effect (Table 5). For industry concentration and product similarity, the paper adopts the IPS text-based product-similarity measure developed by Fathollahi et al. (2022), which ranges from zero to one; deals in concentrated industries with high IPS scores show significantly larger patent value increases than deals in non-concentrated or low-IPS industries (Table 6).

**DiD markup analysis (Eq. 3, p.14).** To confirm that likely-anti-competitive M&A raises rivals' market power:

$$\text{Markup}_{ist} = \delta \text{post}_{it} + \gamma_1(\text{treated}_i \times \text{post}_{it}) + \gamma_2(\text{treated}_i \times \text{post}_{it}) \times H_{it} + \Gamma X_{ist} + \alpha_i + \sigma_{jt} + \varepsilon_{ist} \tag{3}$$

where $$H_{it}$$ is an indicator for stealth mergers or mergers in concentrated high-IPS industries, $$\text{treated}_i$$ indicates propensity-score-matched non-merging peers of merging firms, $$\alpha_i$$ are firm FEs, and $$\sigma_{jt}$$ are sector-year FEs. Using 1-to-1 nearest-neighbor matching by same-industry year and sector (2-digit SIC), stealth mergers near the upper HSR threshold produce 2.4% larger peer markup increases than matched control firms (Table 7, p.14-15), consistent with the anti-competitive mechanism driving the patent value results.

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
