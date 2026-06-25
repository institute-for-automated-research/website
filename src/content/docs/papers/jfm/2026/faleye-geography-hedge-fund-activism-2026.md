---
title: "Geography and Hedge Fund Activism: Faleye (2026)"
description: >-
  Distilled: Activist hedge funds disproportionately target firms located closer
  to their headquarters, yet activism returns are lower for nearer targets by
  1.2 percentage points per one-standard-deviation decrease in distance. Economic
  explanations (activism costs, target selection, employee wealth transfers) are
  ruled out; results are consistent with familiarity bias in targeting decisions.
  Journal of Financial Markets 2026, CC BY-NC-ND 4.0. Eight core results with
  source locators, datasets used, the tested hypotheses, and the estimation
  specifications.
sidebar:
  label: Faleye 2026
  order: 1
tags: [paper-summary, equities, institutional-investors, hedge-fund-activism,
       behavioral-finance, corporate-governance, economic-geography,
       panel-regression, event-study, open-access, peer-reviewed, unreplicated,
       data:wrds, data:edgar, data:dol]
paper:
  authors: Olubunmi Faleye
  authorList:
    - { family: Faleye, given: Olubunmi, orcid: "0000-0001-5893-5202", affiliation: "Northeastern University" }
  year: 2026
  venue: Journal of Financial Markets 77 (2026) 101005
  venueShort: J. Fin. Markets 2026
  tier: lower
  doi: 10.1016/j.finmar.2025.101005
  jel:
    codes: [G11, G23, G41]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Private Equity and Venture Capital", "Corporate Finance and Governance", "Political Influence and Corporate Strategies"]
  dataAccess: licensed-commercial
  outcome:
    - likelihood of being targeted by hedge fund activism
    - cumulative abnormal return around activism announcement
  outcomeClass: [security-returns, fund-behavior]
  license: "CC BY-NC-ND 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by-nc-nd/4.0/, delay-in-days 0, start 2025-07-24; corroborated by artifact p. 1 license notice)"
  licenseShort: CC BY-NC-ND 4.0
  access: open
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect wrapper; CC BY-NC-ND VOR licence confirmed in Crossref DOI metadata 2026-06-25)"
  redistribution: "extract-only (CC BY-NC-ND 4.0 permits reuse for non-commercial purposes with no derivatives; PDF not hosted in this batch)"
  resultsCount: 8
  citedByCount: 1
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, probit-regression, event-study, matching, difference-in-differences]
    identification: selection-on-observables
  contributionType: [new-fact]
  mechanisms: [behavioral-bias]
  scope:
    region: US
    assetClass: US equities
    period: 2000-01..2014-12
    frequency: mixed
    dataType: [market, accounting, administrative]
    granularity: [firm, security]
    n: "2,106 activism events, 693 U.S. hedge funds, 2000-2014"
  findings:
    - { ref: R1, outcome: likelihood of being targeted by hedge fund activism, metric: coefficient, value: "Distance = -0.0225*** (SE 0.009; Table 1 col 1); 1-SD decrease raises targeting probability by 7.4% relative to unconditional mean", direction: negative }
    - { ref: R2, outcome: likelihood of being targeted by hedge fund activism, metric: pp-effect, value: "Local firm (<=100 km) = 0.1977*** (SE 0.035; Table 1 col 3); targets 19.8% more likely to be within 100 km of the hedge fund", direction: positive }
    - { ref: R3, outcome: cumulative abnormal return around activism announcement, metric: return-spread, value: "Mean CAR[-10,+10]: 3.84% (below-median distance) vs 6.89% (above-median; Table 2 Panel B); within 100 km: 4.36% vs beyond 100 km: 5.53%", direction: negative, vsBenchmark: "distant targets (above-median distance or beyond 100 km)" }
    - { ref: R4, outcome: cumulative abnormal return around activism announcement, metric: coefficient, value: "Nearer firm = -0.0307*** (SE 0.009; Table 3 Panel A col 3); local firm = -0.0291** (SE 0.014; col 4); 1-SD decrease in distance = 1.2 pp decline in CAR (21.9% relative to mean)", direction: negative }
    - { ref: R5, outcome: employment level at target firm, metric: coefficient, value: "Target x post-activism = -0.9816*** (SE 0.189; Table 6 Panel A); Chow test nearer vs farther: p=0.951 (Panel B); no differential reduction by proximity", direction: negative, vsBenchmark: "effect equal for closer and distant targets (Chow p=0.951)" }
    - { ref: R6, outcome: likelihood of being targeted by hedge fund activism, metric: pp-effect, value: "Small firms: local firm = 0.2517*** (Table 9 Panel C), 28.9% more likely; large firms: 0.1240**, 7.7% more likely; Chow test p=0.046", direction: positive, vsBenchmark: "large firms; proximity effect significantly stronger for small targets" }
    - { ref: R7, outcome: likelihood of being targeted by hedge fund activism, metric: coefficient, value: "Hostile campaigns: Distance = -0.0402** (SE 0.019) vs non-hostile: -0.0172* (SE 0.009; Table 11 Panel A); proximity effect larger for hostile", direction: negative, vsBenchmark: "non-hostile campaigns; stronger proximity bias for openly hostile events" }
    - { ref: R8, outcome: cumulative abnormal return around activism announcement, metric: pp-effect, value: "13G passive investments: Local investee (<=100 km) coefficient = -0.0334*** (SE 0.012; Table 14 col 3); announcement CAR lower by 3.3 pp for local firms", direction: negative, vsBenchmark: "non-local 13G investees" }
  resultType: new-finding
  relatesTo:
    - { cite: "Brav et al. (2008)", relation: builds-on, note: "paper documenting hedge fund activism returns and target-selection determinants; this paper adds geography as a new dimension" }
    - { cite: "Boyson and Pichler (2019)", relation: builds-on, note: "provides the base sample of 2,206 activism campaigns used throughout the empirical analysis" }
    - { cite: "Teo (2009)", relation: extends, note: "studies hedge fund geography at the portfolio level; this paper extends to activist targeting at the individual firm level" }
    - { cite: "Huberman (2001)", relation: builds-on, note: "familiarity bias framework (mere exposure effect) that motivates the behavioral hypothesis tested here" }
    - { cite: "Agrawal and Lim (2022)", relation: cites, note: "employee wealth transfer evidence tested and ruled out as the driver of lower activism returns for closer targets" }
  openQuestions:
    - "Whether familiarity bias in activism targeting persists across subsequent campaigns for the same fund: the evidence on this is weaker for second- and third-event positions, and the sample sizes for these regressions are small (p. 19-20, Section 5.5)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-23); eight core results extracted with table/page locators. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; R5 locator corrected from p. 11 to p. 12 (Table 6 falls on PDF p. 12) and panel reference expanded to Panels A-B; colorful adjective 'foundational' removed from Brav et al. (2008) relatesTo note; all eight result magnitudes confirmed against Tables 1-3, 6, 9, 11, 13-14." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.finmar.2025.101005", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by-nc-nd/4.0/, delay-in-days=0, start=2025-07-24" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the competing hypotheses it tests (information vs. familiarity), and the regression specifications with their key findings: enough to understand what the paper found and how, without reading all 23 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.finmar.2025.101005).

## TL;DR

The paper asks whether geographical proximity between a hedge fund and a potential target affects activism targeting and returns. Using 2,106 activism events involving 693 U.S. hedge funds from 2000 to 2014, Faleye finds that activist funds disproportionately target firms located closer to their headquarters: targets are 43.1% more likely than matched controls to be within 100 km of the fund. Despite this proximity preference, activism returns are lower for nearer targets: mean CAR[-10,+10] is 3.84% for below-median-distance targets versus 6.89% for those farther away. After ruling out lower activism costs, target selection effects, and reduced employee wealth transfers as explanations, the results align with familiarity bias in hedge fund targeting decisions. Additional tests show the proximity effect is stronger among small targets, openly hostile campaigns, and significant passive investments (Schedule 13G filings), all of which reinforce the behavioral explanation.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Activist hedge funds prefer geographically closer targets: distance is negative and significant in probit predicting targeting likelihood | Table 1, col (1), p. 5 | Distance coeff = -0.0225`\*\*\*` (SE 0.009); 1-SD decrease in distance raises targeting probability by 7.4% relative to unconditional mean |
| R2 | Firms within 100 km are significantly more likely to be activism targets | Table 1, col (3), p. 5 | Local firm (<=100 km) coeff = 0.1977`\*\*\*` (SE 0.035); targets 19.8% more likely to be local to the hedge fund |
| R3 | Activism returns are lower for closer targets in univariate comparisons | Table 2, Panel B, p. 6 | Mean CAR[-10,+10]: 3.84% (below-median distance) vs 6.89% (above-median); within 100 km: 4.36% vs beyond 100 km: 5.53% |
| R4 | Lower returns for closer targets hold in multivariate OLS controlling for target characteristics | Table 3, Panel A, cols (3)-(4), p. 7 | Nearer firm = -0.0307`\*\*\*` (SE 0.009); local firm = -0.0291`\*\*` (SE 0.014); continuous distance: 1-SD decrease = 1.2 pp decline in CAR (21.9% relative to full-sample mean) |
| R5 | Employment reductions post-activism are similar for proximate and distant targets: wealth-transfer explanation ruled out | Table 6, Panels A-B, p. 12 | Target x post-activism = -0.9816`\*\*\*` for full sample; Chow test nearer vs farther: p=0.951; no statistically significant difference by proximity |
| R6 | Proximity preference is significantly stronger among small targets than large ones, consistent with the mere-exposure channel being stronger for locally covered small firms | Table 9, Panel C, p. 16 | Small firms: local firm = 0.2517`\*\*\*`, 28.9% more likely to be local target; large: 0.1240`\*\*`, only 7.7%; Chow test p=0.046 |
| R7 | Proximity increases the likelihood of an openly hostile campaign more than a non-hostile one | Table 11, Panel A, p. 18 | Distance coeff for hostile = -0.0402`\*\*` (SE 0.019) vs non-hostile = -0.0172`\*` (SE 0.009) |
| R8 | Passive 13G investments also show a proximity preference and lower announcement returns for local investees | Tables 13-14, pp. 19-21 | Local firm (<=100 km) = 0.0945`\*\*` (SE 0.039) in 13G likelihood probit; local investee CAR coefficient = -0.0334`\*\*\*` (SE 0.012), 3.3 pp lower return |

**Overall (paper's conclusion).** Economic factors including activism costs, target selection effects, and reduced employee wealth transfers at nearby firms do not explain why hedge funds earn lower returns on geographically closer targets. Results are consistent with familiarity bias: hedge funds disproportionately target closer firms while realizing suboptimally lower returns from such activism, suggesting that even sophisticated investors are not immune to distortions created by a bias toward the familiar. This extends the hedge fund geography literature, where Teo (2009) documents that funds with regional investment focus outperform funds without a physical presence in the region, but at the portfolio level rather than the activist-targeting level.

## Theory / model

The paper has no formal economic model. It evaluates two competing hypotheses for why geographical proximity matters in hedge fund activism:

**Information hypothesis.** Proximity reduces the cost of obtaining localized "soft" information about potential targets, including local media coverage, interactions with employees and managers, relationships with suppliers and clients, and the ability to directly observe target facilities. If proximity provides an information advantage, activism returns should be higher (not lower) for closer targets. Brav et al. (2008) establish that most activism events are ones where the hedge fund believes the target is undervalued and that better monitoring, advising, and communication can unlock value; these actions are easier and less costly for closer entities, which is the kernel of the information hypothesis.

**Familiarity hypothesis.** Proximity reflects the familiarity bias, a cognitive bias arising from the "mere exposure" effect first identified by Zajonc (1968). Repeated exposure to a stimulus creates affective preference for it even without substantive informational content. Huberman (2001) shows this bias is pervasive among investors, including the tendency of individuals to hold shares in their regional Bell Operating Company. A related bias is the "illusion of control" (Langer, 1975): hedge fund managers may overestimate their ability to influence outcomes at nearby firms because they perceive them as more familiar and hence easier to control. This predicts a proximity preference in targeting but lower (suboptimal) returns for closer targets because target selection is, by definition, biased. To distinguish the two hypotheses from rational wealth-transfer explanations, the paper tests whether wealth transfers from employees explain the return gap. Agrawal and Lim (2022) document significant post-activism pension underfunding; the paper tests and rules out this as the driver of lower proximity returns, finding that such wealth transfers are equally present for proximate and distant targets.

The two hypotheses have opposite predictions for activism returns: the information hypothesis predicts higher returns for closer targets; the familiarity hypothesis predicts lower returns. The empirical analysis is organized around distinguishing these predictions and ruling out rational economic alternatives.

## Method

The paper applies standard empirical methods from the corporate governance and behavioral finance literatures; it proposes no new estimator. The headline empirical exercises are:

**Targeting propensity model.** For each activism event, five control firms are selected by propensity score matching on firm size (log market cap), Tobin's q, three-year average sales growth, institutional ownership, and industry, within the same two-digit SIC code industry and within 0.2 standard deviations of the target's score. Matching is with replacement. This builds on `matching` to construct a counterfactual set of potential targets.

**Probit regressions.** Targeting likelihood is estimated via probit (`probit-regression`) over the 1,794-target matched sample with 3,679 unique control firms. The model includes year and two-digit SIC code industry fixed effects; standard errors are clustered at the firm level.

**Activism return OLS.** For the 2,060-event return subsample, CAR[-10,+10] is regressed on proximity measures and controls via OLS (`panel-regression`) with year and industry or hedge-fund fixed effects; standard errors are clustered at the firm level.

**Difference-in-differences (employment/pensions).** For the wealth-transfer tests in Section 5.3, a DiD estimator (`difference-in-differences`) is applied. Each target is matched (propensity score, no replacement) to a control firm in the same two-digit SIC industry. Treated and control firms are compared over the [-5, +5] year window around the activism event.

## Empirical specifications

**Targeting probit (Table 1).** The dependent variable is an indicator equal to 1 for the target in the targeting fiscal year and 0 for matched controls in all years. The proximity variable in column (1) is distance in thousands of kilometers; columns (2)-(3) use indicator variables for below-median and within-100-km distance, respectively. Equation estimated:

$$
\text{Pr}(\text{Target}_{it} = 1) = \Phi\!\left(\alpha + \beta_1 \text{Proximity}_{it} + \beta_2' X_{it} + \gamma_t + \delta_j\right)
$$

where $$\Phi$$ is the standard normal CDF, $$\text{Proximity}_{it}$$ is one of three distance measures, $$X_{it}$$ is a vector of firm controls (size, Tobin's q, excess return, ROA, capital expenditures, cash holdings, institutional ownership, R&D, total debt, sales growth, SG&A, dividends, dividend yield), $$\gamma_t$$ are year fixed effects, and $$\delta_j$$ are industry fixed effects. Sample: 87,134 observations (1,794 targets + 3,679 control firms x multiple years).

**Activism return OLS (Table 3).** CAR[-10,+10] is the dependent variable (p. 7). The key coefficients are on the proximity measures:

$$
\text{CAR}_{i}[-10,+10] = \alpha + \beta_1 \text{Proximity}_{i} + \beta_2' X_i + \gamma_t + \delta_j + \varepsilon_i
$$

Controls $$X_i$$ include market cap, Tobin's q, cash holdings, total debt, dividend yield, ROA, dissident ownership, board representation, and a wolf-pack indicator. Standard errors clustered at the firm level. Panel A uses year and industry FE (N=2,056); Panel B uses hedge-fund FE (N=652, serial activists only). The continuous distance coefficient in column (1) is 0.0082`\*\*\*` (SE 0.003); the nearer-firm indicator in column (3) is -0.0307`\*\*\*`.

**DiD employment regression (equation 1, p. 10).** The paper's only numbered equation. The dependent variable $$Y_{it}$$ is employment in thousands. The estimation window is [-5, +5] years relative to the activism fiscal year:

$$
Y_{it} = \beta_0 + \beta_1 \text{Post}_{it} + \beta_2 \left(\text{Target}_i \times \text{Post}_{it}\right) + \gamma \text{Controls}_{it} + \varphi \text{Year}_t + \delta \text{Firm}_i + \varepsilon_{it} \tag{1}
$$

where $$\text{Post}_{it}$$ equals 1 for post-activism fiscal years, $$\text{Target}_i$$ equals 1 for target firms (0 for matched controls), and $$\delta \text{Firm}_i$$ are firm fixed effects. The coefficient of interest is $$\beta_2$$, capturing the differential change in employment for target firms relative to controls after activism. $$\beta_2 = -0.9816$$`\*\*\*` (SE 0.189) in the full sample (Table 6 Panel A), implying a 982-employee reduction (14.6% of mean). Panels B and C split the sample by proximity; Chow tests find no statistically significant difference (p-values 0.951 and 0.916).

**Hostile and non-hostile campaign probits (Table 11).** The probit specification mirrors Table 1, estimated separately for 402 hostile and 1,704 non-hostile campaigns. Coefficients on the continuous distance variable: hostile = -0.0402`\*\*` vs non-hostile = -0.0172`\*`.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Boyson and Pichler (2019) activism sample | Base sample of 2,206 hedge fund activism events (2000-2014), from which 2,106 events in the 48 contiguous US states are retained | No page yet |
| SEC EDGAR (Schedule 13D/13G filings) | Identify hedge fund and target ZIP codes; define passive 13G investments; locate fund headquarters over time | [SEC EDGAR](/wiki/datasets/edgar/) |
| CRSP (via WRDS) | Market model for CAR/BHAR estimation; stock returns; value-weighted market portfolio (estimation window [-301, -46]) | [WRDS / CRSP](/wiki/commercial/wrds/) (licensed) |
| Compustat (via WRDS) | Firm characteristics: market cap, Tobin's q, ROA, sales growth, capital expenditures, cash holdings, R&D, total debt, SG&A, dividends; DB pension data (Compustat Pension files) | [WRDS / Compustat](/wiki/commercial/wrds/) (licensed) |
| DOL Private Pension Plan Research Files (Form 5500) | Employer contributions to defined contribution (DC) pension plans, matched to Compustat via EIN; 1,001 events for 769 unique targets | No page yet |

Sample scope: 2,106 activism events, 693 U.S. hedge funds, 2000-2014; return tests use 2,060 events; 13G tests use 5,568 filings.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.finmar.2025.101005) if you are: studying behavioral biases in institutional investors with a focus on hedge fund targeting; evaluating whether geographical proximity is an economic or behavioral factor in activism; replicating the DiD employment or pension tests (the paper matches each event to one control firm without replacement, so the exact match set matters for robustness); or extending the analysis to other dimensions of familiarity (language, industry familiarity, social networks). Locators above point directly to the tables.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Markets* 77 (2026) 101005. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The CC BY-NC-ND 4.0 licence permits reuse for non-commercial purposes with attribution and no derivatives; the verbatim PDF is not hosted in this batch.

> Faleye, Olubunmi. "Does Familiarity Breed Activism? Geography and Hedge Fund Activism."
> *Journal of Financial Markets* 77 (2026): 101005.
> DOI: [10.1016/j.finmar.2025.101005](https://doi.org/10.1016/j.finmar.2025.101005).
> © 2025 The Author. Published by Elsevier B.V. under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
> This page is a distillation by the Institute for Automated Research: core results summarized and re-expressed; **not a substitute for the original**.
