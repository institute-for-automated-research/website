---
title: "M&As and Innovation: Farida, Fidrmuc & Zhang (2026)"
description: >-
  Distilled: Acquiring private rather than public targets is associated with higher acquirer patent
  quantity, quality, and economic value by 8 to 15 percent more, with larger
  innovation synergies and inventor-network growth, in a matched US sample
  1990-2020. Journal of Corporate Finance 96 (2026) 102905, CC BY 4.0. Eighteen
  core results with source locators, datasets used, the hypothesis framework,
  and the PPML difference-in-differences specification.
sidebar:
  label: Farida-Fidrmuc-Zhang 2026
  order: 1
tags: [paper-summary, mergers-acquisitions, innovation, patents, private-firms,
       difference-in-differences, panel-regression, open-access, cc-by,
       peer-reviewed, unreplicated,
       data:wrds, data:sdc-platinum, data:kpss, data:kpst, data:patentsview]
paper:
  authors: Siti Farida, Jana P. Fidrmuc, Chendi Zhang
  authorList:
    - { family: Farida, given: Siti, orcid: 0009-0005-2858-5156, affiliation: University of Birmingham }
    - { family: Fidrmuc, given: Jana P., orcid: 0000-0002-7163-5690, affiliation: University of Warwick }
    - { family: Zhang, given: Chendi, orcid: 0000-0002-1170-7058, affiliation: University of Exeter }
  year: 2026
  venue: Journal of Corporate Finance 96 (2026) 102905
  venueShort: JCF 2026
  tier: field
  doi: 10.1016/j.jcorpfin.2025.102905
  jel:
    codes: [G34, O31, O32, O34]
    assignedBy: gpt-6-luna
    date: 2026-10-04
  topics: ['Intellectual Property and Patents', 'Corporate Finance and Governance', 'Innovation Policy and R&D']
  dataAccess: licensed-commercial
  outcome:
    - post-acquisition patent count at acquirer
    - post-acquisition forward citation quality at acquirer
    - post-acquisition patent economic value at acquirer
    - combined (acquirer + target) patent count and forward citations
    - total inventor count at acquirer
    - new inventor collaborations at acquirer
    - acquirer 5-day cumulative abnormal return around M&A announcement
  outcomeClass: [firm-real-outcomes, security-returns]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-10-10; corroborated by artifact first-page CC BY notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access CC BY (Elsevier ScienceDirect; PDF accessible via DOI redirect; not programmatically tested 2026-06-26)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 18
  citedByCount: 1
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, matching, panel-regression, event-study]
    identification: selection-on-observables
  contributionType: [new-fact]
  mechanisms: [information-asymmetry, complementary-innovation-capabilities]
  scope:
    region: US
    assetClass: US public-firm acquirers of US private or public targets
    period: 1990-01..2020-12
    frequency: annual
    dataType: [accounting, market, administrative, other]
    granularity: [firm, transaction]
    n: "23,219 firm-event-year observations (1,153 private-target and 1,153 public-target matched pairs, 5 years pre/post each deal; 10,942 deals in the full unmatched sample)"
  findings:
    - { ref: R1, outcome: post-acquisition patent count at acquirer, metric: coefficient, value: "β = 0.142*** (s.e. 0.049; IRR 15.3% higher than public-target acquisitions)", direction: positive }
    - { ref: R2, outcome: post-acquisition forward citation quality at acquirer, metric: coefficient, value: "β = 0.080** (s.e. 0.038; IRR 8.3% higher forward citations)", direction: positive }
    - { ref: R3, outcome: post-acquisition patent economic value at acquirer, metric: coefficient, value: "β = 0.121*** (s.e. 0.034; IRR 12.9% higher patent economic value)", direction: positive }
    - { ref: R4, outcome: combined (acquirer + target) patent count, metric: coefficient, value: "β = 0.225*** (s.e. 0.054; IRR 25.2% higher combined entity patents)", direction: positive }
    - { ref: R5, outcome: total inventor count at acquirer, metric: coefficient, value: "β = 0.137*** (s.e. 0.043; IRR 14.7% more total inventors post-acquisition)", direction: positive }
    - { ref: R6, outcome: new inventor collaborations at acquirer, metric: coefficient, value: "β = 0.183*** (s.e. 0.051; IRR 20.1% more new inventors collaborating with incumbents)", direction: positive }
    - { ref: R7, outcome: acquirer 5-day cumulative abnormal return around M&A announcement, metric: car, value: "0.012*** (s.e. 0.004; 1.2 pp higher CAR for private-target acquirers; Private x DeltaInn Q2 and Q3 interactions add 2.1-4.0 pp)", direction: positive, vsBenchmark: "vs public-target acquirers (Table 10, Col. 1 baseline and Cols. 2-8 interactions)" }
    - { ref: R8, outcome: combined (acquirer + target) patent count and forward citations, metric: coefficient, value: "Combined forward cites: β = 0.175*** (s.e. 0.040; IRR 19.1% higher), Table 4 Panel A col. 5", direction: positive }
    - { ref: R9, outcome: post-acquisition innovation outcomes at acquirer and combined entity, metric: coefficient, value: "Table 4 Panel B deal-FE Private × Post coefficients, in order: patent count 0.091** (0.040), forward cites 0.059* (0.035), patent value 0.101*** (0.029), combined patent count 0.180*** (0.047), combined forward cites 0.147*** (0.037), all inventors 0.110*** (0.032), new inventors collaborating 0.154*** (0.045)", direction: positive, vsBenchmark: "Matched-pair FE estimates in Table 4 Panel A" }
    - { ref: R10, outcome: post-acquisition innovation outcomes at acquirer and combined entity, metric: coefficient, value: "Table 5 unmatched-sample Private × Post coefficients, in order: patent count 0.117*** (0.033), forward cites 0.070*** (0.026), patent value 0.055* (0.033), combined patent count 0.216*** (0.044), combined forward cites 0.143*** (0.028), all inventors 0.119*** (0.026), new inventors collaborating 0.190*** (0.034)", direction: positive, vsBenchmark: "Full unmatched sample, with deal and calendar-year fixed effects" }
    - { ref: R11, outcome: post-acquisition innovation outcomes at acquirer and combined entity, metric: coefficient, value: "Successful versus withdrawn private-target deals, Table 6 Panel A: forward cites β = 0.557* (s.e. 0.291) and combined forward cites β = 0.548* (s.e. 0.294); other five outcomes are not statistically significant", direction: mixed }
    - { ref: R12, outcome: post-acquisition innovation outcomes at acquirer and combined entity, metric: coefficient, value: "Table 6 Panel B after trimming the top 1%: patent count 0.455*** (0.158), forward cites 0.485* (0.260), patent value 0.040 (0.187), combined patent count 0.443*** (0.156), combined forward cites 0.460* (0.259), all inventors 0.397*** (0.129), new inventors collaborating 0.192 (0.195)", direction: positive }
    - { ref: R13, outcome: post-acquisition innovation outcomes at acquirer and combined entity, metric: coefficient, value: "Public-target successful versus withdrawn deals, Table 6 Panels C-D: untrimmed coefficients in outcome order -0.179* (0.095), -0.161 (0.150), -0.020 (0.132), -0.227** (0.095), -0.255* (0.150), -0.078 (0.101), -0.119 (0.092); after trimming, -0.192** (0.078), -0.115 (0.122), 0.120 (0.078), -0.252*** (0.077), -0.271** (0.122), -0.112* (0.065), -0.040 (0.082)", direction: mixed }
    - { ref: R14, outcome: post-acquisition innovation outcomes at acquirer and combined entity, metric: coefficient, value: "Table 7 Panel A experienced-acquirer Private × Post × AE coefficients in outcome order: 0.167*** (0.051), 0.111*** (0.039), 0.099*** (0.034), 0.247*** (0.056), 0.196*** (0.042), 0.153*** (0.044), 0.199*** (0.053); AE minus NAE differences are 0.368**, 0.358**, -0.123, 0.324**, 0.236, 0.252**, 0.239**", direction: positive, vsBenchmark: "Acquirers without prior private-target acquisition experience (NAE)" }
    - { ref: R15, outcome: post-acquisition innovation outcomes at acquirer and combined entity, metric: coefficient, value: "Table 7 Panel B two-or-more-advisor coefficients in outcome order: 0.418*** (0.145), 0.787*** (0.124), 0.287** (0.145), 0.675*** (0.180), 1.052*** (0.139), 0.428*** (0.111), 0.262* (0.150); differences versus 0-1 advisor coefficients are 0.300**, 0.726***, 0.169, 0.497***, 0.917***, 0.315***, 0.096", direction: positive, vsBenchmark: "Deals with zero or one financial advisor" }
    - { ref: R16, outcome: post-acquisition innovation outcomes at acquirer and combined entity, metric: coefficient, value: "Table 8 breakthrough-sector coefficients in outcome order: 0.154*** (0.059), 0.112** (0.046), 0.114** (0.053), 0.208*** (0.064), 0.182*** (0.056), 0.185*** (0.047), 0.286*** (0.061); traditional-sector coefficients are 0.141 (0.097), 0.088 (0.047), 0.112** (0.052), 0.222** (0.103), 0.187*** (0.070), 0.110 (0.077), 0.109 (0.096)", direction: positive, vsBenchmark: "Breakthrough versus traditional sectors; coefficient differences are 0.012, 0.024, 0.002, -0.014, -0.005, 0.075, 0.177 and are not marked significant" }
    - { ref: R17, outcome: post-acquisition innovation outcomes at acquirer and combined entity, metric: coefficient, value: "Table 9 WP target coefficients in outcome order: 0.176*** (0.060), -0.003 (0.052), 0.037 (0.044), 0.308*** (0.068), 0.137** (0.057), 0.149*** (0.053), 0.196*** (0.070); WoP coefficients: 0.093 (0.073), 0.130** (0.056), 0.189*** (0.050), 0.090 (0.075), 0.133** (0.056), 0.107* (0.064), 0.146* (0.077)", direction: mixed, vsBenchmark: "Targets with at least one granted patent (WP) versus no granted patents (WoP) at acquisition; WP minus WoP differences are 0.083, -0.133*, -0.152**, 0.218**, 0.004, 0.043, 0.051" }
    - { ref: R18, outcome: post-acquisition patenting, innovation synergies, and inventor collaboration, metric: coefficient, value: "Table 3 Panel B unadjusted OLS difference-in-differences (private change minus public change), in outcome order: patent count 1.420***, forward cites 0.345 (not significant), patent value 0.014***, combined patent count 2.011***, combined forward cites 1.008***, all inventors 43.69**, new inventors collaborating 6.022***", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Bena and Li (2014)", doi: '10.1111/jofi.12059', relation: builds-on, note: "matched private vs public target design and KPSS patent-based innovation measures adapted from their approach" }
    - { cite: "Sevilir and Tian (2012)", relation: builds-on, note: "establishes M&A is positively associated with innovation; this paper adds the private vs public target distinction" }
    - { cite: "Faccio et al. (2006)", doi: '10.1017/s0022109000002477', relation: tests, note: "tests whether post-acquisition innovation improvements explain the acquirer announcement return premium documented for private targets" }
    - { cite: "Phillips and Zhdanov (2013)", doi: '10.1093/rfs/hhs109', relation: extends, note: "they examine M&A and innovation incentives by firm size; this paper extends to private vs public target status with post-acquisition patent outcomes" }
    - { cite: "Kogan et al. (2017)", doi: '10.1093/qje/qjw040', relation: builds-on, note: "uses their KPSS patent database for patent count, forward citations, and patent economic value measures" }
    - { cite: "Kelly et al. (2021)", relation: builds-on, note: "uses their KPST patent data for technology classification and breakthrough-sector identification" }
  openQuestions:
    - "Withdrawn private-target deals show weaker innovation effects (Table 6, Panel B) than successful ones for most outcomes; whether any residual selection on acquirer innovation momentum remains is unresolved."
    - "Only 27 percent of private targets hold granted patents at acquisition (p. 13); measuring the post-acquisition codification of non-patented tacit know-how remains an open empirical challenge."
    - "The private-public innovation gap is documented for US acquisitions only; generalizability to non-US markets with different private-firm characteristics and M&A incentives is unstated."
  replicationCode:
    status: upon-request
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text read (pp. 1-20 including appendices); seven core results extracted from Tables 4 and 10. CC BY 4.0 VOR confirmed via Crossref. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; R1-R6 coefficients and IRRs exact against Table 4 Panel A; R7 baseline 0.012*** exact against Table 10 Col. 1; fixed three errors: O34 added to JEL codes (present on PDF p. 1, omitted); author name corrected Facco→Faccio in relatesTo cite and body text (PDF ref: Faccio et al. 2006); findings R7 quartile corrected from Q3/Q4 to Q2 and Q3 with upper bound 4.0 pp (0.040*** Table 10 Col. 5 Q2, not a Q3/Q4 value). Equations 1 and 2 and CAR regression verified term-by-term. No em-dashes; no colorful adjectives." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and appended Core-results rows R8-R18, matching findings, and additional estimating-specification coverage. These additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] All 18 Core results rows, findings, formal equations, specifications, classifications, frontmatter, and surrounding prose checked against the PDF. Corrected the matching model from probit to logit, sample windows, R7 CAR summary, breakthrough-sector emphasis, and overstrong causal phrasing. Identified omitted robustness checks for later distillation; all reported coefficients and specifications are supported. Table-locator pass (2026-10-04): R1-R6, R8-R9 Table 4 pp. 5-7 -> p. 8; R10 Table 5 p. 8 -> p. 10; R14-R15 Table 7 p. 12 -> p. 13; R16 Table 8 pp. 12-13 -> p. 14; R17 Table 9 p. 13 -> p. 14; R18 Table 3 pp. 4-5 -> p. 7." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jcorpfin.2025.102905", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-10-10; separate tdm entries for Elsevier TDM and TDMRep licenses" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the hypothesis it tests, and the PPML difference-in-differences specification it uses: enough to understand what it found and how, without reading all 20 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.jcorpfin.2025.102905).

## TL;DR

Using a 1:1 propensity-score-matched sample of US private versus public target acquisitions by publicly listed US firms (1990-2020) and a PPML difference-in-differences design, the paper documents that patent quantity, forward citation quality, and patent economic value all increase significantly more at acquirers after private-target deals than after public-target deals. The magnitudes are 8 to 15 percent across the three headline patent outcomes and about 19 to 25 percent for combined-entity synergy measures and 20 percent for new inventor collaborations. The gap is strongest when acquirers have prior private-target M&A experience or employ complementary financial advisors. Effects occur in breakthrough-technology sectors, with weak evidence they exceed those in traditional sectors, and positive effects appear among targets both with and without granted patents, with patterns varying by outcome. Announcement abnormal returns (CAR) are 1.2 pp higher for private-target acquirers in the baseline specification; the premium is accounted for in specifications that include innovation-change quartiles and their interactions.

## Core results

Magnitudes and significance as reported; `\*\*` = 5%, `\*\*\*` = 1%. All Panel A results are from matched-pair PPML with matched-pair and calendar-year fixed effects (23,219 firm-event-year observations). IRR = exp(β) - 1 conversion as stated in the paper (p.6).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Private-target acquisitions are associated with **higher post-acquisition patent count** at the acquirer | Table 4, Panel A, col. 1, p. 8 | β = 0.142\*\*\* (s.e. 0.049); IRR 15.3% higher than public-target acquisitions |
| R2 | Private-target acquisitions are associated with **higher patent quality** (forward citations) | Table 4, Panel A, col. 2, p. 8 | β = 0.080\*\* (s.e. 0.038); IRR 8.3% more forward citations |
| R3 | Private-target acquisitions are associated with **higher patent economic value** | Table 4, Panel A, col. 3, p. 8 | β = 0.121\*\*\* (s.e. 0.034); IRR 12.9% higher patent value |
| R4 | **Combined entity patents rise more** for private-target deals, consistent with greater innovation synergies | Table 4, Panel A, col. 4, p. 8 | β = 0.225\*\*\* (s.e. 0.054); IRR 25.2% higher combined patent count |
| R5 | **Inventor network grows more** after private-target acquisitions | Table 4, Panel A, col. 6, p. 8 | β = 0.137\*\*\* (s.e. 0.043); IRR 14.7% more total inventors |
| R6 | **New cross-firm inventor collaborations** are significantly larger for private targets | Table 4, Panel A, col. 7, p. 8 | β = 0.183\*\*\* (s.e. 0.051); IRR 20.1% more new inventors collaborating with acquirer incumbents |
| R7 | **Acquirer 5-day CAR is higher in the baseline** for private-target deals; CAR differences are associated with subsequent innovation changes | Table 10, col. 1 (baseline) and Cols. 2-8 (innovation quartile interactions), p. 16 | Baseline Private coefficient: 0.012\*\*\* (s.e. 0.004); Private × ΔInn interactions are mostly positive and often significant (0.011 to 0.040; maximum 0.040\*\*\*); standalone Private coefficient becomes insignificant or negative after adding quartiles and interactions |
| R8 | Combined-entity forward citations increase more after private-target deals | Table 4, Panel A, col. 5, p. 8 | β = 0.175\*\*\* (s.e. 0.040); IRR 19.1% higher |
| R9 | The main innovation effects remain positive with deal fixed effects | Table 4, Panel B, cols. 1-7, p. 8 | Private × post coefficients: 0.091\*\* (0.040), 0.059\* (0.035), 0.101\*\*\* (0.029), 0.180\*\*\* (0.047), 0.147\*\*\* (0.037), 0.110\*\*\* (0.032), 0.154\*\*\* (0.045), in outcome order |
| R10 | The main effects persist in the full unmatched sample | Table 5, cols. 1-7, p. 10 | Private × post coefficients: 0.117\*\*\* (0.033), 0.070\*\*\* (0.026), 0.055\* (0.033), 0.216\*\*\* (0.044), 0.143\*\*\* (0.028), 0.119\*\*\* (0.026), 0.190\*\*\* (0.034), in outcome order |
| R11 | Successful private-target deals differ from matched withdrawn deals only for forward-citation outcomes before trimming | Table 6, Panel A, cols. 1-7, pp. 10-11 | Forward cites β = 0.557\* (0.291); combined forward cites β = 0.548\* (0.294); other five coefficients are not significant |
| R12 | After trimming the top 1% of outcomes, the withdrawn-deal check is positive for five outcomes | Table 6, Panel B, cols. 1-7, p. 11 | Coefficients: 0.455\*\*\* (0.158), 0.485\* (0.260), 0.040 (0.187), 0.443\*\*\* (0.156), 0.460\* (0.259), 0.397\*\*\* (0.129), 0.192 (0.195), in outcome order |
| R13 | Public-target successful-versus-withdrawn comparisons do not show the private-target pattern | Table 6, Panels C-D, cols. 1-7, p. 11 | Untrimmed coefficients: -0.179\* (0.095), -0.161 (0.150), -0.020 (0.132), -0.227\*\* (0.095), -0.255\* (0.150), -0.078 (0.101), -0.119 (0.092); trimmed: -0.192\*\* (0.078), -0.115 (0.122), 0.120 (0.078), -0.252\*\*\* (0.077), -0.271\*\* (0.122), -0.112\* (0.065), -0.040 (0.082) |
| R14 | Acquirers with prior private-target experience have positive effects across all seven innovation outcomes | Table 7, Panel A, cols. 1-7, p. 13 | Private × post × AE coefficients: 0.167\*\*\* (0.051), 0.111\*\*\* (0.039), 0.099\*\*\* (0.034), 0.247\*\*\* (0.056), 0.196\*\*\* (0.042), 0.153\*\*\* (0.044), 0.199\*\*\* (0.053) |
| R15 | Two-or-more-advisor deals show larger effects than deals with zero or one advisor on five of seven outcomes | Table 7, Panel B, cols. 1-7, p. 13 | 2FA coefficients: 0.418\*\*\* (0.145), 0.787\*\*\* (0.124), 0.287\*\* (0.145), 0.675\*\*\* (0.180), 1.052\*\*\* (0.139), 0.428\*\*\* (0.111), 0.262\* (0.150); 2FA minus 0-1FA differences: 0.300\*\*, 0.726\*\*\*, 0.169, 0.497\*\*\*, 0.917\*\*\*, 0.315\*\*\*, 0.096 |
| R16 | Private-target innovation effects are present in breakthrough sectors, with weak evidence of larger effects than in traditional sectors | Table 8, cols. 1-7, p. 14 | Breakthrough-sector coefficients: 0.154\*\*\* (0.059), 0.112\*\* (0.046), 0.114\*\* (0.053), 0.208\*\*\* (0.064), 0.182\*\*\* (0.056), 0.185\*\*\* (0.047), 0.286\*\*\* (0.061); breakthrough-minus-traditional differences: 0.012, 0.024, 0.002, -0.014, -0.005, 0.075, 0.177 (none marked significant) |
| R17 | Innovation gains do not require granted patents at the target | Table 9, cols. 1-7, p. 14 | WP coefficients: 0.176\*\*\* (0.060), -0.003 (0.052), 0.037 (0.044), 0.308\*\*\* (0.068), 0.137\*\* (0.057), 0.149\*\*\* (0.053), 0.196\*\*\* (0.070); WoP coefficients: 0.093 (0.073), 0.130\*\* (0.056), 0.189\*\*\* (0.050), 0.090 (0.075), 0.133\*\* (0.056), 0.107\* (0.064), 0.146\* (0.077), in outcome order |
| R18 | Unadjusted means show positive private-minus-public changes for six of seven outcomes | Table 3, Panel B, col. 9, p. 7 | Difference-in-differences: patent count 1.420\*\*\*, forward cites 0.345 (n.s.), patent value 0.014\*\*\*, combined patent count 2.011\*\*\*, combined forward cites 1.008\*\*\*, all inventors 43.69\*\*, new inventors collaborating 6.022\*\*\* |

**Overall (paper's conclusion).** The results support the hypothesis that acquisitions of private targets by public acquirers are associated with larger post-acquisition innovation gains than acquisitions of public targets. The mechanism runs through complementary capabilities: private targets embed tacit, exploratory knowledge that combines with the acquirer's commercialization assets in ways that are harder to replicate at arm's length. The private-public innovation gap predicts acquirer announcement returns, linking innovation complementarities to value creation and underscoring M&A as a boundary-of-the-firm mechanism through which public companies access and scale early-stage innovation from private firms.

## Theory / model

The paper has no formal model. It develops and tests the following hypothesis (p. 3):

> Acquisitions of private targets by public acquirers are associated with a larger post-acquisition change in innovation quantity, quality, value, and innovation synergies than acquisitions of public targets by public acquirers.

The economic rationale follows Teece (1986): private targets hold tacit, exploratory, earlier-stage knowledge that is less codified and more complementary to a public acquirer's downstream commercialization assets (manufacturing, distribution, regulatory expertise, and access to capital markets). In contrast, public targets operate under incentive structures and capital-market pressures closer to the acquirer's own, limiting marginal complementarities (Holmstrom 1989; Ferreira et al. 2014). Prior work by Sevilir and Tian (2012) established that M&A is positively associated with innovation outcomes, while Phillips and Zhdanov (2013) examine how acquisition prospects affect innovation incentives across large and small firms; this paper extends the analysis to the private-versus-public target dimension with post-acquisition patent outcomes.

The identification strategy exploits propensity-score-matched comparison of acquirers of private versus public targets, conditioning on acquirer year, FF30 industry, size, and book-to-market to control for observed firm-level differences. The DiD design holds the acquisition event fixed and lets target status (private vs public) be the only remaining systematic difference. Three mechanism channels are tested empirically:

1. **Acquirer expertise** (AE): acquirers with prior experience acquiring private targets, and those using two financial advisors (full-service bank plus boutique), show larger private-public gaps (Table 7), consistent with information-friction reduction around private firms' tacit intangibles.
2. **Breakthrough-technology sectors**: the innovation effects are concentrated in industries where breakthrough patents account for a larger share of activity (Table 8), where the advantages of private-firm exploration (tolerance for failure, long horizons) matter most.
3. **Target patent status**: both targets with granted patents (WP) and those without (WoP) contribute to the post-acquisition innovation gains (Table 9), consistent with value residing in unpatented know-how (Teece 1986).

## Method

The core estimator is Poisson pseudo-maximum likelihood (PPML), applied as a conditional-mean DiD. PPML imposes no restriction on the domain of the outcome beyond non-negativity, and Cohn et al. (2022) show it is valid for continuous non-negative outcomes as well as count data. The estimating equation (equation 1, p. 5) is:

$$
\mathbb{E}[\text{Inn}_{i,t} \mid X_{i,t}] = \exp\!\left(\alpha_1 \text{Private}_i + \alpha_2 \text{Post}_t + \beta(\text{Private}_i \times \text{Post}_t) + \lambda' \mathbf{X}_{i,t-1} + \delta_j + \theta_y\right) \tag{1}
$$

where $$i$$ indexes deals (private-target and matched public-target), $$j$$ indexes matched pairs, $$t \in \{-5,\ldots,5\}$$ is event time, and $$\text{Inn}_{i,t}$$ is one of seven innovation outcomes measured at the acquiring firm in year $$t$$. $$\text{Private}_i = 1$$ for private-target deals and 0 for matched public-target deals. $$\text{Post}_t = 1$$ for $$t \in \{0,\ldots,5\}$$ and 0 otherwise. The key DiD parameter is $$\beta$$; since the conditional-mean is exponential, the incidence-rate ratio is $$\exp(\beta)$$ and the percentage change is $$\exp(\beta) - 1$$. $$\delta_j$$ are matched-pair fixed effects and $$\theta_y$$ are calendar-year fixed effects. The control vector $$\mathbf{X}_{i,t-1}$$ (lagged one year) contains total sales, R&D, leverage, net income, and industry concentration. Standard errors are clustered by matched pair.

The mechanism test for acquirer expertise (equation 2, p. 12) triples the interaction:

$$
\mathbb{E}[\text{Inn}_{i,t} \mid X_{i,t}] = \exp\!\Bigl(\alpha_0 \text{AE}_i + \alpha_1^{\text{AE}} \text{Private}_i \times \text{AE}_i + \alpha_1^{\text{NAE}} \text{Private}_i \times \text{NAE}_i + \alpha_2^{\text{AE}} \text{Post}_t \times \text{AE}_i + \alpha_2^{\text{NAE}} \text{Post}_t \times \text{NAE}_i
$$

$$
+ \gamma^{\text{AE}} \text{Private}_i \times \text{Post}_t \times \text{AE}_i + \gamma^{\text{NAE}} \text{Private}_i \times \text{Post}_t \times \text{NAE}_i + \lambda' \mathbf{X}_{i,t-1} + \delta_j + \theta_y\Bigr) \tag{2}
$$

where $$\text{AE}_i = 1$$ for acquirers with prior private-target M&A experience and $$\text{NAE}_i = 1 - \text{AE}_i$$. The triple-interaction coefficients $$\gamma^{\text{AE}}$$ and $$\gamma^{\text{NAE}}$$ measure the DiD effect for experienced versus inexperienced acquirers. Analogous triples test breakthrough-technology sectors (Table 8) and target patent status (Table 9).

The announcement return test (Table 10, p. 16) extends the prior finding by Faccio et al. (2006) that private-target acquirers earn higher CARs, testing whether the expected post-acquisition innovation improvement drives this premium. The regression uses OLS:

$$
\text{CAR}(-2,2)_i = \beta_0 + \beta_1 \text{Private}_i + \sum_{k=2}^{4} \beta_k \Delta\text{Inn}_{Q_k,i} + \sum_{k=2}^{4} \gamma_k (\text{Private}_i \times \Delta\text{Inn}_{Q_k,i}) + \lambda' \text{Controls}_i + \delta_{\text{FF30}} + \theta_y + \varepsilon_i
$$

where $$\text{CAR}(-2,2)$$ is the acquirer 5-day abnormal return adjusted by the value-weighted market index, $$\Delta\text{Inn}_{Q_k}$$ are dummy variables for quartiles 2-4 of the change in each innovation outcome from pre- to post-acquisition (the lowest quartile $$Q_1$$ is the reference), and the interaction terms $$\gamma_k$$ capture the innovation-innovation return link separately for private versus public targets.

## Empirical specifications

**Sample construction (pp. 3-4).** The baseline sample covers publicly listed US acquirers of US stand-alone private or publicly listed targets in acquisition years 1995-2015, drawn from SDC Platinum. Acquisitions must be completed equity deals and cannot be leveraged buyouts, spinoffs, recapitalizations, exchange offers, self-tenders, repurchase acquisitions, or privatizations. Financial data require Compustat coverage, which begins the data span in 1990; KPSS patent data extend through 2020. The 1995-2015 acquisition window allows five years of patent data before and after each deal. "Both-type deals" (the same acquirer completes both a private and a public acquisition in the same calendar year) are excluded, yielding 13,448 deals with 2,161 public-target and 11,287 private-target observations.

**Matching (Table 1, Panel A, pp. 3-4).** The logit propensity-score model predicts public-target acquisition using lagged total assets, book-to-market, and FF30 industry fixed effects. Each public-target acquirer is matched 1:1 (without replacement) to the closest private-target acquirer in the same announcement year and industry. After matching, 1,153 public-target and 1,153 private-target matched pairs are retained, with 23,219 firm-event-year observations spanning 5 years before and after each acquisition announcement. The matched sample satisfies balance on the matching covariates (Table 1, Panel B).

**Baseline results (Table 4, Panel A, R1-R6).** Equation (1) is estimated separately for seven outcome variables: patent count, forward cites, patent value (KPSS acquirer-level), combined patent count, combined forward cites (acquirer + target composite), number of all inventors, and number of new collaborating inventors (PatentsView). Matched-pair fixed effects ($$\delta_j$$) absorb any time-invariant deal-level heterogeneity; deal fixed effects are used in Panel B as a robustness check. Fig. 1 plots year-by-year incidence-rate ratios and shows flat pre-acquisition trends (supporting the parallel-trends assumption) and gradual post-acquisition build-up, peaking at $$t = +3$$.

**Full sample robustness (Table 5).** Equation (1) is re-estimated on the full unmatched sample of 10,942 deals with deal and calendar-year fixed effects; $$\beta$$ coefficients remain positive and significant across all outcomes. Their magnitudes are generally similar to or larger than Panel B of Table 4, except that the patent-value estimate is smaller and the combined-forward-cites estimate is slightly smaller.

**Mechanism tests (Sections 5.1-5.3).** Equation (2) is applied in three variants:
- **Acquirer expertise (Table 7)**: $$\gamma^{\text{AE}} - \gamma^{\text{NAE}}$$ is positive and significant for patent count (0.368\*\*) and forward cites (0.358\*\*), confirming that experienced acquirers drive the effect. The two-advisor coefficient ($$\gamma^{2\text{FA}}$$) exceeds the one-advisor coefficient across most outcomes.
- **Breakthrough sectors (Table 8)**: $$\gamma^B$$ is positive and significant for all seven outcomes; $$\gamma^T$$ (traditional sectors) is significant only for patent value and combined outcomes. The estimated differences are not significant, consistent with only weak evidence of breakthrough-sector dominance.
- **Target patent status (Table 9)**: both WP (with patent) and WoP (without patent) coefficients are positive, with WP stronger for patent count and WoP stronger for patent value and forward cites; the difference is significant only for patent value, combined patent count, and combined forward cites.

**Withdrawn deals (Table 6).** Successful private-target acquirers are compared to matched withdrawn private-target acquirers (following Seru 2014 and Bena and Li 2014). After trimming the top 1% of outcomes, forward cites, combined patent count, combined forward cites, and number of inventors show significant positive $$\beta$$ coefficients (Panel B), consistent with the gains being linked to completed acquisitions rather than only to acquirer innovation momentum. The pattern is reversed for public targets (Panels C-D), where most $$\beta$$ coefficients are not significant.

**Additional estimating specifications.** The matching model (Table 1, Panel A, p. 4) is a logit for public-target acquisition; the reported covariates are lagged acquirer assets and book-to-market, with FF30 industry effects. Nearest-propensity-score matches are restricted to the same announcement year and industry, 1:1 without replacement:

$$
\Pr(\text{PublicDeal}_{i}=1 \mid X_i) = \Lambda\!\left(\alpha + \beta_1 \text{Assets}_{i,-1} + \beta_2 \text{BM}_{i,-1} + \sum_s \delta_s \text{FF30}_{s,i}\right)
$$

The dynamic specification behind Figure 1 (p. 7) replaces the single post interaction in Regression (1) with deal-by-event-time interactions and event-time indicators. It uses the matched 1,153-pair panel, matched-pair and calendar-year fixed effects, lagged controls, and standard errors clustered by matched pair. The plotted series is centered on the frequency-weighted pre-period mean:

$$
\mathbb{E}[\text{Inn}_{i,t} \mid X_{i,t}] = \exp\!\left(\sum_{\tau=-5}^{5} \beta_{\tau} \text{Private}_{i} \times \mathbf{1}\{t=\tau\} + \sum_{\tau=-5}^{5} \pi_{\tau} \mathbf{1}\{t=\tau\} + \lambda' \mathbf{X}_{i,t-1} + \delta_j + \theta_y\right)
$$

$$
\bar{\beta}_{pre} = \frac{\sum_{k\leq -1} w_k \beta_k}{\sum_{k\leq -1} w_k}, \qquad \widetilde{\beta}_{\tau} = \beta_{\tau} - \bar{\beta}_{pre}, \qquad \text{IRR}_{\tau}=\exp(\widetilde{\beta}_{\tau})
$$

The withdrawn-deal counterfactual (Table 6, pp. 10-11) applies the baseline PPML form separately to private-target and public-target attempts, replacing target status with an indicator for a successfully completed deal. Successful and withdrawn deals are matched within announcement year, industry, size, and book-to-market; the regressions include matched-pair and calendar-year fixed effects, lagged controls, and matched-pair-clustered standard errors. Panels B and D exclude outcome observations above the 99th percentile.

$$
\mathbb{E}[\text{Inn}_{i,t} \mid X_{i,t}] = \exp\!\left(\alpha_1 \text{Success}_i + \alpha_2 \text{Post}_t + \beta(\text{Success}_i \times \text{Post}_t) + \lambda' \mathbf{X}_{i,t-1} + \delta_j + \theta_y\right)
$$

The subgroup specifications in Tables 7-9 (pp. 13-14) use the two-category version of Regression (2): $$Z_i$$ denotes prior private-target acquisition experience (AE/NAE), advisor count (2FA/0-1FA), sector (breakthrough/traditional), or target patent status (WP/WoP). These PPML regressions include all group-specific lower-order terms, matched-pair and calendar-year fixed effects, the baseline lagged controls, and standard errors clustered by matched pair. Their sample sizes are reported below the relevant tables and range from 18,840 to 23,219 deal-event-year observations. Table 5 (p. 10) uses Regression (1) with deal and calendar-year effects for the 10,942-deal unmatched sample; Table 4 Panel B replaces matched-pair effects with deal effects. Both report standard errors clustered by matched pair.

The grouped PPML specification can be written with the two subgroup indicators $$Z_i$$ and $$1-Z_i$$ (the paper's equation (2) displays the AE/NAE version; Tables 7-9 replace the subgroup indicators for advisors, sector, and target patents):

$$
\mathbb{E}[\text{Inn}_{i,t} \mid X_{i,t}] = \exp\!\Bigl(\alpha_0 Z_i + \alpha_0^{0}(1-Z_i) + \alpha_1^{1}(\text{Private}_i \times Z_i) + \alpha_1^{0}(\text{Private}_i \times (1-Z_i)) + \alpha_2^{1}(\text{Post}_t \times Z_i) + \alpha_2^{0}(\text{Post}_t \times (1-Z_i)) + \gamma^{1}(\text{Private}_i \times \text{Post}_t \times Z_i) + \gamma^{0}(\text{Private}_i \times \text{Post}_t \times (1-Z_i)) + \lambda' \mathbf{X}_{i,t-1} + \delta_j + \theta_y\Bigr)
$$

For the CAR regressions in Table 10 (p. 16), the outcome is the acquirer’s five-day abnormal return adjusted by the value-weighted market index. The matched sample has 1,999 observations in each specification; controls include cash-only, hostile and horizontal deal indicators, size, leverage, net income, and industry concentration. All specifications include FF30 and calendar-year fixed effects, with standard errors clustered by firm. The patent-change quartile indicators use Q1 as the omitted category.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| KPSS patent database (Kogan et al. 2017) | Patent count, forward citations, patent economic value for acquirers and combined entities; sourced from GitHub | No page yet |
| KPST patent database (Kelly et al. 2021) | Technology classification; breakthrough patent identification; sourced from dimitris-papanikolaou.github.io | No page yet |
| SDC Platinum | M&A deal identification, deal type, transaction value, announcement and completion dates | [SDC Platinum](/wiki/commercial/sdc-platinum/) |
| Compustat (via WRDS) | Acquirer financial variables: total assets, R&D expenditure, leverage, net income, industry concentration | [WRDS](/wiki/commercial/wrds/) |
| CRSP (via WRDS) | Stock returns for acquirer 5-day CAR calculation around announcement | [WRDS](/wiki/commercial/wrds/) |
| PatentsView | Inventor tracking and new cross-firm collaboration links; matched to CRSP via KPSS patent numbers | No page yet |

Sample: acquisitions announced 1995-2015 (with 5-year patent windows yielding a data span of 1990-2020). 1,153 private-target and 1,153 public-target matched pairs; 23,219 firm-event-year observations. Innovation variables are measured annually at the acquirer level (patent count, forward cites, patent value, inventor counts) or at the combined acquirer-target level (combined patent count and forward cites). Announcement returns use a 5-day window centered on the deal announcement date.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jcorpfin.2025.102905) if you are:
- replicating the matching procedure (Appendix A-D give the exact propensity-score model, patent matching, inventor assignment, and variable definitions);
- extending the analysis to non-US markets or longer post-acquisition horizons;
- studying mechanism channels in detail (Tables 7-9 cover acquirer expertise, breakthrough sectors, and target patent status, with full coefficient tables);
- examining the small-scale private-target case studies (Appendix E, 21 acquisitions with no granted patents) to understand how tacit innovation is identified qualitatively.

The locators above point to the exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *Journal of Corporate Finance* 96 (2026) 102905. This distillation was updated on 2026-10-04 and model-verified against the source PDF; findings are not independently reproduced. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Farida, Siti, Jana P. Fidrmuc, and Chendi Zhang.
> "M&As and Innovation: Evidence from Acquiring Private Firms."
> *Journal of Corporate Finance* 96 (2026): 102905.
> DOI: 10.1016/j.jcorpfin.2025.102905. © 2025 The Authors.
> Published by Elsevier B.V. under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
