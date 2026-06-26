---
title: "Rookie Directors and Board Efficacy: Al Dah, Dah & Stathopoulos (2026)"
description: >-
  Distilled: Rookie board refreshment (not merely rookie presence) enhances CEO
  turnover-performance sensitivity, improves managerial incentives, and reduces
  discretionary accruals; seasoned refreshment improves investment efficiency and
  acquisition outcomes without hindering monitoring. Journal of Corporate Finance
  96 (2026), CC BY 4.0. Eight core results with source locators, datasets used,
  the tested hypotheses, and estimating equations.
sidebar:
  label: Al Dah-Dah-Stathopoulos 2026
  order: 1
tags: [paper-summary, corporate-governance, board-composition, dei, monitoring,
       executive-compensation, panel-regression, event-study, open-access, cc-by,
       peer-reviewed, unreplicated, data:wrds, data:boardex, data:sdc-platinum,
       data:ibes, data:thomson-13f, data:msci-esg, data:iss]
paper:
  authors: Bilal Al Dah, Mustafa A. Dah, Konstantinos Stathopoulos
  authorList:
    - { family: Al Dah, given: Bilal, orcid: "0000-0002-2889-3926", affiliation: Kean University }
    - { family: Dah, given: Mustafa A., orcid: "0000-0003-3193-508X", affiliation: Lebanese American University }
    - { family: Stathopoulos, given: Konstantinos, orcid: "0000-0001-6599-0445", affiliation: University of Manchester }
  year: 2026
  venue: Journal of Corporate Finance 96, January 2026, article 102910
  venueShort: J. Corp. Finance 2026
  doi: 10.1016/j.jcorpfin.2025.102910
  tier: field
  jel:
    codes: [G34, J33, G31, M41]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ['Corporate Finance and Governance', 'Auditing, Earnings Management, Governance', 'Gender Diversity and Inequality']
  dataAccess: licensed-commercial
  outcome:
    - CEO turnover-performance sensitivity
    - CEO delta and vega (managerial incentives)
    - discretionary accruals
    - investment efficiency (overinvestment propensity)
    - acquisition count and likelihood
    - acquisition announcement cumulative abnormal return
    - post-acquisition buy-and-hold abnormal returns
  outcomeClass: [firm-real-outcomes, labor-careers-health, security-returns]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-10-20; corroborated by artifact p.1 open-access notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF/HTML available via DOI at Elsevier/ScienceDirect (2026-06-26); CC BY 4.0 VOR confirmed in Crossref DOI metadata"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 8
  citedByCount: 1
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, probit-regression, instrumental-variables, event-study]
    identification: selection-on-observables
  contributionType: [new-fact]
  mechanisms: [agency, information-asymmetry]
  scope:
    region: US
    assetClass: US equities (S&P 1500)
    period: 2007-01..2022-12
    frequency: annual
    dataType: [market, accounting]
    granularity: [firm]
    n: "17,463 firm-year observations (base sample, S&P 1500, 2007-2022)"
  findings:
    - { ref: R1, outcome: CEO turnover-performance sensitivity, metric: coefficient, value: "Rookie BRI x ROA interaction: -0.360** (t=-2.667, Table 2 col 2); Rookie BRI x BHAR interaction: -0.149*** (t=-3.358, Table 2 col 5); marginal effects approx. 22.5% (ROA) and 13.2% (BHAR) increase in forced CEO replacement per unit rise in rookie BRI", direction: positive, vsBenchmark: "no significant interaction for mere rookie presence (RookieP) or seasoned refreshment" }
    - { ref: R2, outcome: "CEO delta (managerial incentives)", metric: coefficient, value: "Rookie BRI: 0.024*** (t=3.374, Table 3 col 2); 1-SD increase -> +4.42% (+$37,992) relative to mean delta", direction: positive, vsBenchmark: "rookie presence and seasoned BRI both insignificant" }
    - { ref: R3, outcome: "CEO vega (risk incentives)", metric: coefficient, value: "Rookie BRI: 0.005*** (t=4.384, Table 3 col 5); 1-SD increase -> +5.46% (+$7,915) relative to mean vega", direction: positive, vsBenchmark: "rookie presence and seasoned BRI both insignificant" }
    - { ref: R4, outcome: discretionary accruals, metric: coefficient, value: "Rookie BRI: -0.139*** (t=-4.217, Table 4 col 2, modified Jones); -0.181*** (t=-2.942, Table 4 col 5, ROA-adjusted Jones); 1-SD increase -> -3.74% SD in modified Jones model accruals", direction: negative, vsBenchmark: "no significant effect for rookie presence or seasoned BRI" }
    - { ref: R5, outcome: investment efficiency, metric: coefficient, value: "Seasoned BRI: 0.134** (t=2.702, Table 5 col 3, cash-leverage) / 0.110*** (t=3.863, Table 5 col 6, residuals); for most underinvesting firms: +4.05% and +3.32% in investment per 1-SD increase; for most overinvesting firms: -2.75% and -2.96%", direction: positive, vsBenchmark: "insignificant for rookie presence and rookie BRI" }
    - { ref: R6, outcome: acquisition count and likelihood, metric: coefficient, value: "Seasoned BRI: count -0.008** (t=-2.035, Table 6 col 3) / likelihood -0.006** (t=-1.972, Table 6 col 6); 1-SD increase -> -2.57% in count, -0.74% in acquisition probability", direction: negative, vsBenchmark: "no significant effect for rookie presence or rookie BRI on acquisition activity" }
    - { ref: R7, outcome: acquisition announcement cumulative abnormal return, metric: coefficient, value: "Seasoned BRI: 0.001** (t=2.042, Table 7 col 6, Heckman step 2); 1-SD increase -> +5.25% SD in announcement-period CAR", direction: positive, vsBenchmark: "no significant effect for rookie presence or rookie BRI" }
    - { ref: R8, outcome: post-acquisition buy-and-hold abnormal returns, metric: coefficient, value: "Seasoned BRI: 0.009*** (t=2.946, Table 8 col 3, 504-day) / 0.010** (t=2.539, Table 8 col 6, 756-day); 1-SD increase -> +5.2% SD (504-day) and +4.3% SD (756-day) BHAR", direction: positive, vsBenchmark: "no significant effect for rookie presence or rookie BRI on post-acquisition performance" }
  resultType: new-finding
  relatesTo:
    - { cite: "Chen and Keefe (2020)", doi: '10.1016/j.jcorpfin.2019.101511', relation: extends, note: "distinguishes rookie refreshment from mere rookie presence; shows refreshment rather than bare rookie share drives monitoring improvements" }
    - { cite: "Dah et al. (2024)", doi: '10.1111/1467-8551.12718', relation: builds-on, note: "adopts the Board Refreshment Index (BRI) methodology and seven director characteristics" }
    - { cite: "Kang et al. (2016)", relation: tests, note: "expands limited U.S. evidence on rookie directors to a broader set of governance outcomes" }
    - { cite: "Fama and Jensen (1983)", doi: '10.1086/467037', relation: builds-on, note: "draws on the reputational career-concern rationale for rookie diligence as independent monitors" }
  openQuestions:
    - "Internal mechanisms through which refreshment affects monitoring and advising (meeting frequency, information flows, committee activity, dissent levels) are not examined (p. 21)."
    - "Whether rookie refreshment leads to more frequent audit or compensation committee meetings, and whether such changes translate into better reporting quality or CEO incentive alignment, remains unexplored (p. 21)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read full PDF; core results, equations, and locators extracted from Tables 2-8 and pp. 9-21; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 8 Core results rows confirmed against Tables 2-8; three fixes applied: JEL code M41 added (present on PDF p.1 but omitted); investment-efficiency method description corrected (PDF states sum β₁+β₃ is negative for overinvesting firms, not positive); equation 8-9 section header page corrected from p.16 to p.17." }
  licenceVerification:
    - { source: "Crossref works/10.1016/j.jcorpfin.2025.102910", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "CC BY 4.0 (content-version: vor, URL: http://creativecommons.org/licenses/by/4.0/, delay-in-days: 0, start: 2025-10-20); also Elsevier TDM userlicense (tdm, start: 2026-01-01). Artifact p.1 confirms open access CC BY." }
---

**What this is.** This is a distilled skeleton of Al Dah, Dah, and Stathopoulos (2026), "Rookie directors and board efficacy," Journal of Corporate Finance 96, article 102910. Read the [original paper](https://doi.org/10.1016/j.jcorpfin.2025.102910) to replicate or extend. Extraction is LLM-generated; it is not human-verified and has not been reproduced.

## TL;DR

Diversity, equity, and inclusion (DEI) pressures have increased the appointment of first-time ("rookie") directors on U.S. corporate boards. Critics argue that inexperienced directors harm governance by producing inefficient firm-director matches. The authors challenge this critique by separating two distinct concepts: the mere presence of rookie directors and rookie board refreshment, defined as the appointment of a rookie who brings new characteristics to the board relative to the director they replace. Using a Board Refreshment Index (BRI) across seven director characteristics for S&P 1500 firms from 2007 to 2022, they find that rookie refreshment (not mere presence) strengthens monitoring: it raises CEO turnover-performance sensitivity (R1), improves CEO pay-performance and pay-risk incentives (R2-R3), and reduces discretionary accruals (R4). Seasoned refreshment, by contrast, advances advising: it reduces overinvestment and underinvestment (R5), lowers acquisition frequency while improving deal quality (R6-R8). Neither refreshment type hinders the other's function. The results support H1 and H2 (rookie refreshment beats mere presence on monitoring and outperforms seasoned refreshment on monitoring) but only partly confirm H3 (seasoned refreshment does not dominate rookie refreshment on advising to a statistically significant degree for most outcomes).

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | Rookie BRI raises CEO turnover-performance sensitivity | Table 2, p. 11 | Rookie BRI x ROA: -0.360\*\* (t=-2.667); Rookie BRI x BHAR: -0.149\*\*\* (t=-3.358); marginal effect approx. 22.5% (ROA) and 13.2% (BHAR) increase in forced CEO replacement probability per unit rise in rookie BRI |
| R2 | Rookie BRI improves CEO delta | Table 3 col 2, p. 12 | Rookie BRI: 0.024\*\*\* (t=3.374); 1-SD increase in rookie BRI -> +4.42% (+$37,992) relative to mean delta |
| R3 | Rookie BRI improves CEO vega | Table 3 col 5, p. 12 | Rookie BRI: 0.005\*\*\* (t=4.384); 1-SD increase -> +5.46% (+$7,915) relative to mean vega |
| R4 | Rookie BRI reduces discretionary accruals | Table 4 cols 2 and 5, p. 12-13 | Rookie BRI (modified Jones): -0.139\*\*\* (t=-4.217); ROA-adjusted Jones: -0.181\*\*\* (t=-2.942); 1-SD increase -> -3.74% SD in modified Jones model accruals |
| R5 | Seasoned BRI improves investment efficiency | Table 5 cols 3 and 6, pp. 13-15 | Seasoned BRI: 0.134\*\* (t=2.702, cash-leverage) / 0.110\*\*\* (t=3.863, residuals); 1-SD increase -> +4.05% and +3.32% investment for most underinvesting firms; -2.75% and -2.96% for most overinvesting firms |
| R6 | Seasoned BRI reduces acquisition count and likelihood | Table 6 cols 3 and 6, p. 15-16 | Seasoned BRI: count -0.008\*\* (t=-2.035) / likelihood -0.006\*\* (t=-1.972); 1-SD increase -> -2.57% acquisition count, -0.74% acquisition probability |
| R7 | Seasoned BRI raises announcement-period CAR | Table 7 col 6, p. 16-17 | Seasoned BRI: 0.001\*\* (t=2.042); 1-SD increase -> +5.25% SD in announcement-period CAR |
| R8 | Seasoned BRI raises post-acquisition BHAR | Table 8 cols 3 and 6, pp. 17-18 | Seasoned BRI: 0.009\*\*\* (t=2.946, 504-day) / 0.010\*\* (t=2.539, 756-day); 1-SD increase -> +5.2% SD (504-day) and +4.3% SD (756-day) daily BHAR |

**Overall (paper's conclusion).** Rookie refreshment enhances board monitoring without impairing advising; seasoned refreshment advances advising. The two refreshment types are complementary governance strategies. Neither the mere presence of rookies nor seasoned refreshment significantly affects monitoring, and neither rookies nor rookie refreshment significantly affects advising outcomes. Results survive entropy-balanced matching, firm fixed effects, 2SLS with two instruments (airport proximity and director supply from same-city firms), and multiple robustness tests including exclusion of gender from the BRI and restriction to pre-SB-826 periods (pp. 19-20).

## Theory / model

The paper has no formal mathematical model. Its theoretical framework draws on two bodies of prior work.

**Upper Echelons Theory (UET).** Hambrick (2007) argues that directors' observable traits significantly shape corporate outcomes. Applied here following Terbeck et al. (2022) and Dah et al. (2024): a rookie director's temporary "reputational window" during the first three years of service creates heightened career concerns (Fama and Jensen (1983); Jiang et al. (2016)) and cognitive independence from entrenched board coalitions (Hambrick and Fukutomi (1991)), motivating more diligent monitoring behavior. This career-concern effect fades as the director transitions to seasoned status, joining existing coalitions and socialization structures (Kang et al. (2016)).

**Agency and Resource Dependence Theory.** Agency theory predicts that stronger internal monitoring (CEO turnover-performance sensitivity, incentive alignment, accruals management) reduces managerial slack. Resource Dependence Theory (Pfeffer and Salancik 1978) predicts that experienced directors supply strategic advice by leveraging their established networks, long-horizon industry knowledge, and prior board experience (Kim et al. (2014); Adams et al. (2010)).

**Key distinction.** The paper argues that board refreshment and rookie status are distinct concepts. Rookie status is a temporary behavioral state driven by reputational incentives; refreshment records whether the incoming director changes the composition of the board along observable characteristics. A rookie non-refreshment (a rookie who replicates existing board characteristics) leaves dynamics unchanged; a rookie refreshment disrupts established norms. This motivates separating the Rookie Presence share (RookieP) from the Board Refreshment Index (BRI) in all empirical tests.

**Hypotheses** (p. 5-6):

- **H1**: Rookie refreshment has a more pronounced effect on board functionality than the mere presence of rookie directors.
- **H2**: Rookie refreshment provides more effective monitoring compared to seasoned refreshment.
- **H3**: Seasoned refreshment provides more effective advising compared to rookie refreshment.

## Method

The central measurement object is the **Board Refreshment Index (BRI)**, developed following Dah et al. (2024). The BRI is an additive index computed annually for each firm across seven director characteristics: gender, nationality, age, classification (insider/outsider), interlocks, education, and financial expertise (p. 6-7). For each characteristic, a refreshment score of +1 is assigned when the quality of the added director refreshes that dimension (e.g., a female added to a male-dominated board), and -1 when it de-refreshes. Net refreshment per characteristic is the difference between total refreshment and total de-refreshment. The BRI sums net refreshments across all seven characteristics. A **Rookie BRI** (or Seasoned BRI) is identified only when the board change involves a rookie (or seasoned) director.

The **OverInvest** measure (for the investment-efficiency test) is constructed as the average of two decile ranks of the firm's likelihood of overinvestment, following Biddle et al. (2009). Cash-leverage rank is based on cash level and leverage (multiplied by minus one); residuals rank uses the residual from eq. (3) (see below), estimated within each industry-year group. Each rank is rescaled to [0, 1] and averaged.

All regressions include industry dummies (Fama-French 48-industry) and year dummies. Standard errors are clustered at the firm level. CEO turnover specifications are probit; delta/vega and discretionary-accruals specifications are OLS; investment-efficiency specifications are OLS with interaction terms; acquisition count uses a zero-inflated Poisson (ZIP) regression; acquisition likelihood uses a probit; acquisition performance uses a Heckman two-stage estimator.

To address endogeneity of refreshment, Section 5.3 runs 2SLS using two instruments: (i) RDist, the reciprocal distance from the firm's headquarters to the nearest airport hub (proxying commute ease for directors, which facilitates board turnover without directly affecting governance outcomes); (ii) DirSupply, the average percentage of other companies headquartered in the same city (OCHSC) that refresh with rookies (or seasoned directors, matched by characteristic) from a category different from the board's dominant majority in the prior year. The Hansen J-test does not reject overidentification restrictions, and first-stage F-statistics exceed 10 in all specifications (p. 20).

## Empirical specifications

### Investment benchmark (equation 3, p. 8)

The residuals-based OverInvest measure requires first estimating the industry-year average investment level:

$$\text{Investment}_{j,t} = \beta_0 + \beta_1 \text{SalesGrowth}_{j,t-1} + \varepsilon_{j,t} \tag{3}$$

where $$j = 1, \ldots, 48$$ denotes Fama-French 48 industries. Investment is R&D + capex + acquisition expenditure minus cash from property/plant/equipment sales, all scaled by lagged total assets and multiplied by 100. Residuals are ranked into deciles within each industry-year group to form the residuals-based OverInvest.

### Discretionary accruals (equations 1-2, p. 7-8)

Two variants of the modified Jones model are used as monitoring proxies (Dechow et al. (1995); Kothari et al. (2005)):

$$\text{Accruals}_{i,t} = \beta_0 \!\left(\frac{1}{\text{ASSETS}_{i,t-1}}\right) + \beta_1 \frac{\Delta\text{REV}_{i,t} - \Delta\text{REC}_{i,t}}{\text{ASSETS}_{i,t-1}} + \beta_2 \!\left(\frac{\text{PPE}_{i,t}}{\text{ASSETS}_{i,t-1}}\right) + \varepsilon_{i,t} \tag{1}$$

$$\text{Accruals}_{i,t} = \beta_0 \!\left(\frac{1}{\text{ASSETS}_{i,t-1}}\right) + \beta_1 \!\left[\frac{\Delta\text{REV}_{i,t} - \Delta\text{REC}_{i,t}}{\text{ASSETS}_{i,t-1}}\right] + \beta_2 \!\left(\frac{\text{PPE}_{i,t}}{\text{ASSETS}_{i,t-1}}\right) + \beta_3 \text{ROA}_{i,t} + \varepsilon_{i,t} \tag{2}$$

Discretionary accruals are the residuals from these cross-sectional regressions run within each two-digit SIC code and year group. A decrease (increase) in discretionary accruals signals improvement (deterioration) in financial reporting oversight.

### CEO turnover-performance sensitivity (equation 4, p. 9; Table 2)

$$\text{Turnover}_{i,t+1} = \beta_0 + \beta_1 \frac{\text{RookieP}_{i,t}}{\text{BRI}_{i,t}} + \beta_2 \text{Performance}_{i,t} + \beta_3 \frac{\text{RookieP}_{i,t}}{\text{BRI}_{i,t}} \cdot \text{Performance}_{i,t} + \beta_4 \text{Controls}_{i,t} + \text{Year} + \text{Industry} + \varepsilon_{i,t} \tag{4}$$

Probit on forced CEO turnover. Performance is the industry-adjusted 3-year average ROA (columns 1-3) or the industry-adjusted 3-year average daily BHAR (columns 4-6). The variable of interest is $$\beta_3$$, the interaction of BRI with firm performance: a negative $$\beta_3$$ means higher BRI amplifies the negative impact of poor performance on CEO retention, i.e., the board replaces underperforming CEOs more aggressively. Controls include leverage, CAPX/Assets, Sales/Assets, Slack, ESG, Percent Outside, Percent Female, Board Size, E-Index, CEO Tenure, CEO Ownership, CEO Age, Duality, and CEO Gender. N = 17,463.

### CEO incentives (equation 5, p. 10; Table 3)

$$\frac{\text{Delta}_{i,t}}{\text{Vega}_{i,t}} = \beta_0 + \beta_1 \frac{\text{RookieP}_{i,t}}{\text{BRI}_{i,t}} + \beta_2 \text{Controls}_{i,t} + \text{Year} + \text{Industry} + \varepsilon_{i,t} \tag{5}$$

OLS on lagged delta (dollar change in CEO pay per 1% change in stock price) and vega (dollar change in CEO pay per 1% change in stock volatility). A higher delta aligns managerial pay with firm performance; a higher vega encourages value-enhancing risk-taking. Following Core and Guay (2002) and Coles et al. (2006). N = 14,045.

### Discretionary accruals (equation 6, p. 11; Table 4)

$$\text{DiscretionaryAccruals}_{i,t+1} = \beta_0 + \beta_1 \frac{\text{RookieP}_{i,t}}{\text{BRI}_{i,t}} + \beta_2 \text{Controls}_{i,t} + \text{Year} + \text{Industry} + \varepsilon_{i,t} \tag{6}$$

OLS on the next-period discretionary accruals residuals from eqs. (1) and (2). Following Faleye et al. (2011) and Kim et al. (2014). N = 13,170.

### Investment efficiency (equation 7, pp. 13-15; Table 5)

$$\text{Investment}_{i,t+1} = \beta_0 + \beta_1 \frac{\text{RookieP}_{i,t}}{\text{BRI}_{i,t}} + \beta_2 \text{OverInvest}_{i,t+1} + \beta_3 \frac{\text{RookieP}_{i,t}}{\text{BRI}_{i,t}} \cdot \text{OverInvest}_{i,t+1} + \beta_4 \text{GOV}_{i,t} + \beta_5 \text{GOV}_{i,t} \cdot \text{OverInvest}_{i,t+1} + \beta_6 \text{Controls}_{i,t+1} + \text{Industry} + \varepsilon_{i,t} \tag{7}$$

OLS on total investment (R&D + capex + acquisitions minus divestitures, scaled by lagged assets). GOV includes the entrenchment index, institutional ownership, and analyst following, as in Biddle et al. (2009). The key estimates are $$\beta_1$$ (the effect of BRI for underinvesting firms, where OverInvest ≈ 0; a positive $$\beta_1$$ means BRI increases investment, reducing underinvestment) and $$\beta_1 + \beta_3$$ (the combined effect for overinvesting firms; the PDF reports this sum is negative and significant, meaning BRI decreases investment and thereby reduces overinvestment propensity). N = 14,405.

### Acquisition count and likelihood (equations 8-9, p. 17; Table 6)

$$\text{AcquisitionCount}_{i,t+1/t+2} = \beta_0 + \beta_1 \frac{\text{RookieP}_{i,t}}{\text{BRI}_{i,t}} + \beta_2 \text{Controls}_{i,t} + \text{Year} + \text{Industry} + \varepsilon_{i,t} \tag{8}$$

$$\text{AcquisitionLikelihood}_{i,t+1/t+2} = \beta_0 + \beta_1 \frac{\text{RookieP}_{i,t}}{\text{BRI}_{i,t}} + \beta_2 \text{Controls}_{i,t} + \text{Year} + \text{Industry} + \varepsilon_{i,t} \tag{9}$$

Eq. (8) is a zero-inflated Poisson (ZIP) regression for acquisition count (number of completed deals in years t+1 and t+2, restricted to deal value >= $1 million and acquirer owns < 50% pre-deal). Eq. (9) is a probit for acquisition likelihood (binary, 1 if count > 0). Sample: U.S. acquirers from SDC Platinum, excluding simultaneous-announcement deals. N = 15,966. Following Faleye et al. (2011) and Kim et al. (2014).

### Acquisition performance (equation 10, pp. 17-18; Tables 7-8)

$$\text{AcquisitionPerformance} = \beta_0 + \beta_1 \frac{\text{RookieP}_{i,t}}{\text{BRI}_{i,t}} + \beta_2 \text{InverseMillsRatio} + \beta_3 \text{Controls}_{i,t} + \text{Year} + \text{Industry} + \varepsilon_{i,t} \tag{10}$$

Heckman second stage, where the first stage is the acquisition likelihood probit (eq. 9). Acquisition performance is either: (a) announcement-period CAR in the (-3, +3) window using the market model estimated on the 255 days before a 45-day gap period (Table 7, N = 4,070); or (b) long-run buy-and-hold daily abnormal returns over 504 days and 756 days post-acquisition effective date (Table 8, N = 3,302 and 3,276 respectively).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|--------------|-----------|
| Compustat (via WRDS) | Firm financial data: assets, leverage, ROA, investment, accruals, sales, capex, R&D (2007-2022) | [WRDS](/wiki/commercial/wrds/) |
| CRSP (via WRDS) | Daily stock returns for BHAR and industry-adjusted returns | [WRDS](/wiki/commercial/wrds/) |
| BoardEx | Director characteristics for all seven BRI dimensions: gender, nationality, age, classification, interlocks, education, financial expertise | no page yet |
| ExecuComp (via WRDS) | CEO compensation (cash, equity), tenure, ownership; delta and vega computations | [WRDS](/wiki/commercial/wrds/) |
| ISS (Institutional Shareholder Services) | Six anti-takeover provisions for the Bebchuk E-Index | no page yet |
| SDC Platinum | Acquisition transactions: deal value, completion date, target ownership share | [SDC Platinum](/wiki/commercial/sdc-platinum/) |
| I/B/E/S (via WRDS) | Analyst following count | [I/B/E/S](/wiki/commercial/ibes/) |
| Thomson Reuters 13F (via WRDS) | Institutional ownership (percentage held by institutions) | [Thomson 13F](/wiki/commercial/thomson-13f/) |
| MSCI | ESG disclosure scores | [KLD / MSCI ESG](/wiki/commercial/kld/) |

Sample scope: S&P 1500 firms, 2007-2022 (starting 2007 to account for FASB and SEC disclosure-standard shifts). Base sample 20,129 firm-years before attrition on missing variables; regression samples range from 13,170 (accruals models) to 17,463 (turnover models) and 15,966 (acquisition models). All continuous variables winsorized at 1%. Industries follow the Fama-French 48-industry classification.

## When to read the full paper

Read the full paper (doi:10.1016/j.jcorpfin.2025.102910) if you:

- Study DEI board mandates and need evidence that distinguishes refreshment effects from the mere addition of inexperienced directors (the BRI construct in Section 3.1 and Appendix A is the most portable contribution).
- Need baseline OLS/probit results on CEO turnover-performance sensitivity as a function of board composition (Table 2, p. 11).
- Are replicating the Faleye et al. (2011) or Kim et al. (2014) board-advising framework and want updated estimates for the 2007-2022 period using a finer board-change measure (Tables 5-8).
- Need the full robustness battery: entropy-balanced matching, firm fixed effects, 2SLS with airport-proximity and director-supply instruments, alternative monitoring proxies, board diversity mandate exclusions (Section 5 and Online Appendices S1-S5).
- Are modeling how Chen and Keefe (2020) or Kang et al. (2016) results generalize to U.S. S&P 1500 boards and need comparisons across rookie-presence vs. rookie-refreshment specifications side-by-side (all main tables).

## Attribution and rights

This article is published open access under the Creative Commons Attribution 4.0 International License (CC BY 4.0).

> Bilal Al Dah, Mustafa A. Dah, Konstantinos Stathopoulos, "Rookie directors and board efficacy," *Journal of Corporate Finance* 96 (2026) 102910. https://doi.org/10.1016/j.jcorpfin.2025.102910. Copyright 2025 The Authors. Published by Elsevier B.V. under CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/).

This page is an LLM-distilled extract (paper-distiller, claude-sonnet-4-6, 2026-06-26). It is not human-verified and does not reproduce figures, tables, or extended text beyond brief excerpts needed for locators. The full article is freely accessible via the DOI above.
