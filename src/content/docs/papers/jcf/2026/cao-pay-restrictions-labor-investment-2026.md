---
title: "Pay Restrictions and Labor Investment: Cao, Hasan, Huang & Zhao (2026)"
description: >-
  Distilled: Exploiting China's 2014 SOE executive compensation reform as a
  quasi-natural experiment, this paper shows pay restrictions reduce abnormal
  labor investment in state-owned enterprises by 3.91 to 4.82 percent, operating
  through strengthened internal governance and reduced social comparison between
  executives and rank-and-file employees. Journal of Corporate Finance 2026,
  paywalled. Eight core results with source locators, datasets used, and the
  empirical specifications.
sidebar:
  label: Cao-Hasan-Huang-Zhao 2026
  order: 1
tags: [paper-summary, corporate-governance, executive-compensation, labor-investment,
       state-owned-enterprises, difference-in-differences, panel-regression, china,
       peer-reviewed, unreplicated, data:csmar, data:cnrds]
paper:
  authors: June Cao, Iftekhar Hasan, Zijie Huang, Jingyuan Zhao
  authorList:
    - { family: Cao, given: June, affiliation: University of Southampton }
    - { family: Hasan, given: Iftekhar, affiliation: "Fordham University; Bank of Finland; University of Sydney" }
    - { family: Huang, given: Zijie, orcid: "0009-0001-0394-4440", affiliation: Curtin University }
    - { family: Zhao, given: Jingyuan, affiliation: Shanghai University }
  year: 2026
  venue: Journal of Corporate Finance 99 (2026) 102990
  venueShort: J. Corp. Finance 2026
  tier: field
  doi: 10.1016/j.jcorpfin.2026.102990
  jel:
    codes: [G34, G38, J33]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Labor market dynamics and wage inequality", "Gender, Labor, and Family Dynamics", "Fiscal Policy and Economic Growth"]
  dataAccess: licensed-commercial
  outcome:
    - abnormal labor investment in state-owned enterprises
    - over-investment and under-investment in labor (SOE)
    - employee well-being and labor quality in SOEs
  outcomeClass: [firm-real-outcomes, labor-careers-health]
  license: "Elsevier proprietary; 0929-1199/copyright 2026 Elsevier B.V. All rights are reserved, including those for text and data mining, AI training, and similar technologies (printed on PDF p. 1)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect; license confirmed all-rights-reserved from Crossref, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [agency, moral-hazard, pay-disparity-social-comparison]
  scope:
    region: China
    assetClass: Chinese A-share listed firms (SOEs and non-SOEs)
    period: 2009-01..2019-12
    frequency: annual
    dataType: [accounting, market, administrative]
    granularity: [firm]
    n: "14,988 firm-year observations, 2,889 unique firms, 71 industries, 2009-2019"
  findings:
    - { ref: R1, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "-0.039*** to -0.062*** (SOE x Restriction; 3.91% to 4.82% reduction)", direction: negative, vsBenchmark: "relative to non-SOEs post-reform; Table 4 cols 1-4" }
    - { ref: R2, outcome: over-investment in labor (SOE), metric: coefficient, value: "-0.075*** (SOE x Restriction; 7.52% reduction in over-investment)", direction: negative, vsBenchmark: "over-investment subsample vs under-investment subsample; Table 4 cols 5-6" }
    - { ref: R3, outcome: executive compensation in SOEs, metric: coefficient, value: "-0.096*** (SOE x Restriction; 10.08% reduction, approximately 49,000 CNY/year)", direction: negative, vsBenchmark: "relative to non-SOEs pre- and post-reform; Table 3 Panel A col 1" }
    - { ref: R4, outcome: internal governance effectiveness in SOEs, metric: coefficient, value: "0.141** (SOE x Restriction; 14.05% increase in internal governance score)", direction: positive, vsBenchmark: "relative to non-SOEs; Table 5 col 1" }
    - { ref: R5, outcome: abnormal labor investment (high internal governance SOEs), metric: coefficient, value: "-0.056** (SOE x Restriction; 5.57% reduction in ALI for high-IG firms)", direction: negative, vsBenchmark: "high-IG vs low-IG subsamples; F-test p = 0.076; Table 5 cols 2-3" }
    - { ref: R6, outcome: CEO-to-rank-and-file pay disparity in SOEs, metric: coefficient, value: "-1.180*** (SOE x Restriction on Dis.CEO and Rank-and-File disparity measure)", direction: negative, vsBenchmark: "relative to non-SOEs; Table 6 Panel A col 1" }
    - { ref: R7, outcome: over-hiring in SOEs, metric: coefficient, value: "-0.087*** (SOE x Restriction; 8.73% reduction in over-hiring)", direction: negative, vsBenchmark: "reform reduces over-hiring specifically; under-hiring and over-/under-firing not significant; Table 8 col 1" }
    - { ref: R8, outcome: employee well-being and labor quality in SOEs, metric: pp-effect, value: "Labor quality +1.33% (Table 9 Panel A); stock ownership +7.63%, work safety +6.22%, vocational training +3.41%, director communication +3.73% (Table 9 Panel B)", direction: positive, vsBenchmark: "low-ALI firms (Table 9 Panel A); full sample (Table 9 Panel B)" }
  resultType: new-finding
  relatesTo:
    - { cite: "Jung, Lee & Weber (2014)", relation: builds-on, note: "abnormal labor investment model (eq. 1) and over/under-investment decomposition method" }
    - { cite: "Cao and Rees (2020)", relation: extends, note: "extends the link between employee-friendly treatment and labor investment to executive pay restrictions" }
    - { cite: "Khedmati, Sualihu & Yawson (2020)", relation: extends, note: "extends the CEO-director tie determinant of labor investment to executive compensation as a governance lever" }
    - { cite: "Bebchuk and Fried (2003)", relation: tests, note: "tests the power-theory prediction that pay restrictions reduce managerial self-dealing (over-hiring) in SOEs" }
    - { cite: "Cheng, Lee & Shevlin (2016)", relation: builds-on, note: "adopts their measure of internal governance effectiveness (subordinate horizon + ability)" }
  openQuestions:
    - "Whether the effect generalizes beyond China's SOEs to private firms in other weak-institutional environments; the reform shock is specific to state ownership in China (p. 24)."
    - "Whether long-term pay restrictions create unintended side-effects on managerial talent retention or firm innovation beyond the 2009-2019 window studied (p. 24)."
  replicationCode: { status: upon-request }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read PDF in full (28 pages, JCF vol 99 2026 102990); all locators confirmed against tables/figures in the PDF; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: (1) R1 Core results lower-bound corrected from -0.046 to -0.039 (Table 4 col 4 is the minimum across specs; paper text 3.91%-4.82% range aligns with -0.039 and -0.048, not -0.046); (2) eq. 5 spurious standalone Restriction term removed (PDF eq. 5 has only SOE×Restriction and SOE, unlike eqs. 7 and 9 which do include it separately)." }
  licenceVerification:
    - { source: "Crossref works/10.1016/j.jcorpfin.2026.102990", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] entries: content-version tdm with Elsevier TDM and tdmrep-license URLs, plus stm-asf policy URLs; no CC license entry; paywalled all-rights-reserved" }
---

**What this is.** A distilled skeleton of Cao, Hasan, Huang & Zhao (2026), "Pay restrictions and labor investment," *Journal of Corporate Finance* 99, 102990. Read [the original](https://doi.org/10.1016/j.jcorpfin.2026.102990) to replicate or extend. This summary is LLM-distilled, not human-verified, and not reproduced.

## TL;DR

Exploiting China's 2014 SOE executive compensation reform as a quasi-natural experiment, this paper shows that pay restrictions causally reduce abnormal labor investment (ALI) in state-owned enterprises by 3.91 to 4.82 percent relative to non-SOEs, with the reduction driven by over-investment (not under-investment). The reform strengthens internal governance (narrowing the pay gap between CEOs and subordinate executives) and reduces social comparison (narrowing the pay gap between executives and rank-and-file employees), both of which in turn reduce ALI. Additional results show that the reform cuts over-hiring specifically, improves labor quality, and increases employee well-being (stock grants, work safety, vocational training, director communication channels).

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Pay restrictions reduce SOE abnormal labor investment | Table 4 cols 1-4, p. 15 | SOE x Restriction = -0.039\*\*\* to -0.062\*\*\*; 3.91% to 4.82% reduction in ALI |
| R2 | Reduction concentrated in over-investment, not under-investment | Table 4 cols 5-6, p. 15 | SOE x Restriction = -0.075\*\*\* (over-invest); 0.003 n.s. (under-invest); F-test p < 0.001 |
| R3 | Reform cuts average SOE executive compensation | Table 3 Panel A col 1, p. 14 | SOE x Restriction = -0.096\*\*\*; 10.08% reduction (~49,000 CNY/year) |
| R4 | Reform increases internal governance effectiveness by 14.05% | Table 5 col 1, p. 16 | SOE x Restriction = 0.141\*\* on internal governance score |
| R5 | Higher internal governance firms see 5.57% reduction in ALI | Table 5 cols 2-3, p. 16 | SOE x Restriction = -0.056\*\* (high IG), -0.032 n.s. (low IG); F-test p = 0.076 |
| R6 | Reform reduces CEO-to-rank pay disparity in SOEs | Table 6 Panel A col 1, p. 17 | SOE x Restriction = -1.180\*\*\*; 4.68% ALI reduction for low-disparity firms |
| R7 | Reform reduces over-hiring by 8.73% | Table 8 col 1, p. 23 | SOE x Restriction = -0.087\*\*\*; under-hiring, over-firing, under-firing insignificant |
| R8 | Reform improves labor quality and employee well-being | Table 9, p. 23 | Labor quality +1.33% (col 1); stock ownership +7.63%, work safety +6.22%, training +3.41%, communication +3.73% |

**Overall.** China's 2014 SOE executive compensation reform significantly reduces abnormal labor investment, primarily over-investment (over-hiring), through two channels: enhanced internal governance (aligning interests between CEOs and subordinate executives) and reduced social comparison (narrowing pay disparities between executives and rank-and-file employees). Additional effects include improved labor quality and employee well-being, suggesting pay restrictions promote more efficient labor resource allocation in weak institutional environments.

## Theory / model

The paper has no formal mathematical model. Instead, it develops two competing hypotheses grounded in agency theory and institutional economics, then adjudicates between them empirically:

**H1a (agency / governance hypothesis):** Executive pay restrictions are associated with lower SOE abnormal labor investment. Excessive executive pay misaligns managerial incentives (Bebchuk and Fried (2003)), enabling executives to over-hire for political or status reasons beyond shareholder value. Prior work documents that CEO-director ties exacerbate labor investment inefficiency (Khedmati, Sualihu & Yawson (2020)); this paper examines whether pay restrictions address the underlying agency problem. Pay restrictions curb this self-serving over-investment.

**H1b (efficiency-wage / shirking hypothesis):** Pay restrictions are associated with higher SOE abnormal labor investment. Caps on compensation weaken incentives, reduce executive effort (Holmstrom (1979)), and may lead to greater labor investment inefficiency through reduced monitoring and risk-averse decision-making.

**Mechanism H2 (internal governance channel):** Pay restrictions enhance internal governance by narrowing the compensation gap between CEOs and key subordinate executives, improving monitoring incentives and the effectiveness of bottom-up oversight, which reduces ALI (Cheng, Lee & Shevlin (2016)).

**Mechanism H3 (social comparison channel):** Pay restrictions narrow pay disparity between executives and rank-and-file employees, reducing perceptions of inequity, increasing employee loyalty and organizational commitment, and thereby reducing ALI (Qian et al. (2024); Cao and Rees (2020)).

The identification argument relies on the 2014 reform being issued as a strict directive by the Political Bureau of the Central Committee, exogenous to individual firm decisions. Chinese firms cannot influence decisions of the Political Bureau, making the reform timing plausibly exogenous to firm-level ALI.

## Method

**Abnormal labor investment measure.** Following Jung, Lee & Weber (2014) and Cao and Rees (2020), the paper first estimates expected (normal) net hiring by running a cross-sectional regression each year within each industry (equation 1, p. 7):

$$\begin{aligned}
\text{Net Hire}_{it} &= \alpha + \beta_1 \text{SalesGrowth}_{i,t-1} + \beta_2 \text{SalesGrowth}_{it} + \beta_3 \Delta\text{ROA}_{it} + \beta_4 \text{ROA}_{it} + \beta_5 \text{ROA}_{i,t-1} + \beta_6 \text{SizeRank}_{i,t-1} \\
&\quad + \beta_7 \Delta\text{QR}_{i,t-1} + \beta_8 \Delta\text{QR}_{it} + \beta_9 \text{QR}_{i,t-1} + \beta_{10} \text{Leverage}_{i,t-1} + \textstyle\sum_{X=1}^{5} \beta_{10+X} \text{LossBin}X_{i,t-1} + \varepsilon_{it}
\end{aligned} \tag{1}$$

where Net Hire is the percentage change in employees, Sales Growth is the percentage change in sales revenue, ROA is net profit to total assets, Size Rank is the percentile rank of log market value, Quick Ratio is (cash + short-term investments + receivables) / current liabilities, and LossBinX (X = 1, ..., 5) are loss-bin dummies for intervals of ROA profitability 0.005 wide from -0.025 to 0. Abnormal Labor Investment (ALI) is the absolute value of the residuals $$|\varepsilon_{it}|$$; a positive residual indicates over-investment, a negative residual indicates under-investment.

**Internal governance measures** (equations 2 and 3, p. 9):

$$\text{Executive Horizon}_{it} = 65 - \text{Average Age of Key Subordinate Executives}_{it} \tag{2}$$

$$\text{Executive Ability}_{it} = \frac{\text{Average Annual Compensation of Key Subordinate Executives}_{it}}{\text{Annual Compensation of CEO}_{it}} \tag{3}$$

Both variables are standardized and summed to construct a composite Internal Governance score.

**Excess executive compensation model** (equation 4, p. 9):

$$\text{Executive Compensation}_{it} = \alpha + \beta_1 \text{FirmSize}_{it} + \beta_2 \text{Leverage}_{it} + \beta_3 \text{ROA}_{it} + \beta_4 \text{ROA}_{i,t-1} + \beta_5 \text{SalesGrowth}_{it} + \beta_6 \text{Dual}_{it} + \beta_7 \text{SOE}_{it} + \beta_8 \text{Independent}_{it} + \text{Industry FE} + \text{Year FE} + \varepsilon_{it} \tag{4}$$

Residuals from equation (4) are Excess Compensation, used in robustness tests.

The technique builds on `difference-in-differences` applied via `panel-regression` with firm and year fixed effects, building from Jung et al. (2014) and Cao and Rees (2020) on the ALI measure, Cheng et al. (2016) on internal governance, and Kuang et al. (2024) and Qian et al. (2024) on pay-disparity measurement.

## Empirical specifications

**Baseline DiD for abnormal labor investment** (equation 9, p. 11): the main identifying specification. The key variable of interest is the interaction $$\text{SOE} \times \text{Restriction}_{it}$$, which equals one for SOE firm-year observations in the post-reform period (2015-2019) and zero otherwise:

$$\text{Abnormal Labor Investment}_{it} = \alpha + \beta_1 (\text{SOE} \times \text{Restriction})_{it} + \beta_2 \text{SOE}_{it} + \beta_3 \text{Restriction}_{it} + \gamma \text{Controls}_{it} + \text{Fixed Effects} + \varepsilon_{it} \tag{9}$$

Controls: Leverage, Book-to-Market, ROA, Quick Ratio, Firm Age, Firm Size, Fixed Assets, Herfindahl Index, Institution Share, SA Index, CEO Gender, CEO Age, CEO Education. Firm and year fixed effects (columns 3-4 of Table 4). Standard errors clustered at the firm level. The DiD coefficient $$\beta_1$$ ranges from -0.039*** to -0.062*** across specifications (Table 4, p. 15), representing a 3.91% to 4.82% reduction in ALI.

**Internal governance channel** (equations 10-12, p. 11): tests H2. Equation (10) uses Internal Governance as the dependent variable to show the reform strengthens governance ($$\beta_1 = 0.141^{**}$$, Table 5 col 1). Equations (11) and (12) re-run the baseline DiD separately for above-median (high) and below-median (low) internal governance effectiveness subsamples. The reduction in ALI is 5.57% for high-IG firms ($$\beta_1 = -0.056^{**}$$) vs. insignificant for low-IG firms, with an F-test across subsamples significant at p = 0.076 (Table 5 cols 2-3).

**Social comparison channel** (equations 13-15, p. 11): tests H3. Equation (13) uses three pay-disparity measures as the dependent variable (CEO-to-rank ratio, Top-3-to-rank ratio, All-executives-to-rank ratio). All three are significantly reduced post-reform (SOE x Restriction = -1.180\*\*\*, -1.004\*\*\*, -0.335\*\*\* respectively; Table 6 col 1 of Panels A, B, C). Equations (14) and (15) split the sample at the sample median of pay disparity: the reduction in ALI is significant only for low-disparity firms (4.68-6.24% reduction), with F-tests across subsamples significant (p = 0.048, 0.042, 0.011 across the three disparity measures).

**Executive compensation and misconduct** (equations 5-8, p. 10):

$$\text{Compensation Variables}_{it} = \alpha + \beta_1 (\text{SOE} \times \text{Restriction})_{it} + \beta_2 \text{SOE}_{it} + \gamma \text{Controls}_{i,t-1} + \text{Fixed Effects} + \varepsilon_{it} \tag{5}$$

$$\text{Executive Misconduct}_{it} = \alpha + \beta_1 (\text{SOE} \times \text{Restriction})_{it} + \beta_2 \text{SOE}_{it} + \beta_3 \text{Restriction}_{it} + \gamma \text{Controls}_{it} + \text{Fixed Effects} + \varepsilon_{it} \tag{7}$$

Column (1) of Table 3 Panel A shows a 10.08% reduction in executive compensation ($$\beta_1 = -0.096^{***}$$, p. 14). The reform also reduces perks by 12.08% ($$\beta_1 = -0.049^{**}$$, col 5) and cuts the probability of executive misconduct by 3.10% ($$\beta_1 = -0.031^{***}$$, Panel B col 1).

**Robustness:** parallel trend tests (pre-reform coefficients jointly insignificant, post-reform coefficients jointly negative and significant; Figure 1, p. 21); entropy-balanced sample replication (Table 7 Panel B); 1,000-iteration placebo tests with randomly assigned treatment events (Figure 2, p. 22); alternative ALI measures (industry FE and industry+year FE predictions in Table 7 Panel C); Oster (2019) bound-estimate approach for omitted-variable bias (Panel E: $$\delta = 3.432$$ for the full sample, above the threshold of 1, indicating results unlikely to be driven by omitted variables).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CSMAR (China Stock Market & Accounting Research) | Financial variables, stock market data, firm characteristics, executive compensation, abnormal labor investment construction, executive misconduct data | [/wiki/commercial/csmar/](/wiki/commercial/csmar/) |
| CNRDS (Chinese Research Data Services) | Firm ownership data, CEO characteristics, employee well-being data (stock grants, work safety, training, communication channels), labor quality | no page yet |
| Procuratorial Yearbook of China | Provincial-level embezzlement and bribery cases (political corruption measure) | no page yet |
| China Statistical Yearbook | Provincial-level civil servant counts (denominator for political corruption measure) | no page yet |

Sample: 14,988 firm-year observations representing 2,889 unique A-share listed firms in China across 71 CSRC 2012 industries, spanning 2009-2019 (event year 2014 excluded; financial firms and ST-designated firms removed). The main sample is annual.

## When to read the full paper

Read Cao et al. (2026) if you are studying: (1) the labor investment consequences of executive compensation regulation in emerging markets; (2) the corporate governance of state-owned enterprises, particularly how internal pay structures affect investment efficiency; (3) causal identification of executive compensation effects using quasi-natural experiments; or (4) the mechanisms through which pay inequality between executives and workers affects organizational outcomes. Key tables are Table 4 (main DiD), Table 5 (internal governance channel), Table 6 (social comparison channel), Table 8 (over/under-hiring decomposition), and Table 9 (labor quality and employee well-being).

## Attribution and rights

Cao, J., Hasan, I., Huang, Z., & Zhao, J. (2026). Pay restrictions and labor investment. *Journal of Corporate Finance*, 99, 102990. https://doi.org/10.1016/j.jcorpfin.2026.102990

Copyright 2026 Elsevier B.V. All rights reserved. This page reproduces no substantial text from the article; results, magnitudes, and table references are extracted for scientific commentary under fair-use principles (extract-only). The article is paywalled; access requires a subscription to the Journal of Corporate Finance or institutional Elsevier access. This summary is LLM-distilled by paper-distiller (claude-sonnet-4-6) and has not been human-verified or independently reproduced.
