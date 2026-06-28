---
title: "Bargaining and Inequality in the Labor Market: Caldwell, Haegele & Heining (2026)"
description: >-
  Distilled: A novel matched firm-worker survey linked to German administrative data
  documents that individual wage bargaining is pervasive (78% of workers exposed),
  that labor market factors predict firms' bargaining strategies better than firm
  productivity, that workers with better outside options negotiate more successfully,
  and that gender wage gaps are 3-5 percentage points larger at bargaining firms.
  The Quarterly Journal of Economics (2026), paywalled. Eight core results with
  source locators, datasets used, the empirical framework, and the estimating
  equations.
sidebar:
  label: Caldwell-Haegele-Heining 2026
  order: 1
tags: [paper-summary, labor-economics, wage-inequality, bargaining, gender-gap,
       panel-regression, peer-reviewed, unreplicated, data:ieb-germany, data:orbis-bvd]
paper:
  authors: Sydnee Caldwell, Ingrid Haegele, Jörg Heining
  authorList:
    - { family: Caldwell, given: Sydnee, affiliation: "University of California, Berkeley and National Bureau of Economic Research" }
    - { family: Haegele, given: Ingrid, affiliation: "Ludwig Maximilian University of Munich and Institute for Employment Research (IAB)" }
    - { family: Heining, given: Jörg, affiliation: "Institute for Employment Research (IAB)" }
  year: 2026
  venue: The Quarterly Journal of Economics 141, 2026, pp. 315-371
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf049
  jel:
    codes: [J30, J31, J42]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Labor market dynamics and wage inequality", "Game Theory and Voting Systems", "Politics, Economics, and Education Policy"]
  dataAccess: proprietary-confidential
  outcome:
    - within-firm wage inequality
    - gender wage gap
    - individual wage bargaining behavior
    - firm wage-setting strategy
  outcomeClass: [labor-careers-health]
  license: "© The Author(s) 2025. Published by Oxford University Press on behalf of President and Fellows of Harvard College. All rights reserved. Crossref license entry: OUP CHORUS standard publication model (content-version vor, URL https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days 0, start 2025-10-30); no CC licence."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (OUP/QJE site, checked 2026-06-28)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 3
  introducesData: true
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, akm-variance-decomposition]
    identification: descriptive
  contributionType: [new-data, new-fact, measurement]
  mechanisms: [search-frictions, market-power, information-asymmetry]
  scope:
    region: Germany
    period: 2010..2022
    frequency: mixed
    dataType: [administrative, survey]
    granularity: [individual, firm]
    n: "772 firms; 9,756 workers (main analysis); 416,821 full-time employees at matched firms; IEB administrative data 2010-2020; AKM effects estimated on 2010-2017 population data"
  findings:
    - { ref: R1, outcome: share of workers exposed to individual bargaining, metric: probability, value: "78% of workers at surveyed firms in groups where individual bargaining is possible; 95% (managers), 85% (experienced non-managers), 55% (recent labor market entrants)", direction: positive }
    - { ref: R2, outcome: expected initial-offer gap across workers with identical qualifications, metric: pp-effect, value: "3% for recent labor market entrants, 5% for experienced non-managers, 10% for managers (conditional on nonzero gap: 6%, 10%, 12%)", direction: positive }
    - { ref: R3, outcome: explained variation in firm bargaining strategies, metric: r-squared, value: "employee-group dummies alone: R² = 0.33, adj. R² = 0.33; firm FE alone: R² = 0.40, adj. R² = 0.19; adding firm size/productivity/norms without industry dummies (cols 4-7) keeps adj. R² ≤ 0.35; with 4-digit industry dummies (cols 8-9) adj. R² reaches 0.44 (Table III, Panel A)", direction: positive, vsBenchmark: group effects explain as much as 500+ firm FE; productivity adds nothing }
    - { ref: R4, outcome: share of outside offers rejected; on-the-job renegotiation rate, metric: probability, value: "91% of workers who received outside offers remained at incumbent; 33% attempted renegotiation with incumbent; 46% of renegotiation attempts succeeded (Table IV)", direction: positive }
    - { ref: R5, outcome: asking for and receiving wage increases (start of employment spell), metric: pp-effect, value: "outside options (binary): +8.7 pp*** asked firm to increase offer, +6.7 pp* negotiated base wage upward; level: +0.056*** ask, +0.487*** pp negotiated upward (Table V, Panel A)", direction: positive }
    - { ref: R6, outcome: gender gap in bargaining behavior and success, metric: pp-effect, value: "women: -5.8 pp asked at start of spell, -6.4 pp** successfully negotiated at start; -5.8 pp*** asked for raise (prior 6 months), -6.4 pp*** successfully negotiated (Table V, Panels A-B)", direction: negative }
    - { ref: R7, outcome: gender wage gap at individual-bargaining vs posting firms, metric: pp-effect, value: "female coefficient at bargaining firms: -0.053** (s.e. 0.023, occ-est FE); at posting firms: 0.008 (s.e. 0.032); ~6 pp difference; 44% of residual gender gap at surveyed firms attributed to bargaining (Table VI, Panel A col 2 vs 5)", direction: negative, vsBenchmark: gender gap roughly 3x larger at bargaining vs posting firms }
    - { ref: R8, outcome: current log daily pay predicted by prior-firm AKM wage premium, metric: coefficient, value: "bargaining firms: prior-firm effect = 0.049*** (s.e. 0.010); posting firms: 0.006 (s.e. 0.018); p-value of equality = 0.016 (Table VII, Panel A, all workers)", direction: positive, vsBenchmark: prior-firm pay premium is zero and insignificant at posting firms }
  resultType: new-finding
  relatesTo:
    - { cite: "Abowd, Kramarz, and Margolis (1999)", relation: builds-on, note: "AKM two-way fixed-effects variance decomposition framework; the paper constructs firm wage premia and worker person effects using Bellmann et al. (2020) for German data" }
    - { cite: "Manning (2011)", relation: builds-on, note: "monopsonistic competition in labor markets provides the theoretical backdrop for why individual bargaining generates firm-specific rents" }
    - { cite: "Biasi and Sarsons (2022)", doi: '10.1093/qje/qjab026', relation: extends, note: "extends their evidence on flexible wages and the gender gap to a broader German multi-sector sample with linked firm-worker surveys" }
    - { cite: "Hall and Krueger (2012)", doi: '10.1257/mac.4.4.56', relation: extends, note: "extends their survey-based evidence on wage posting vs. bargaining with a novel matched firm-worker dataset that also captures the dynamics of individual bargaining events" }
    - { cite: "Bloom and Van Reenen (2007)", doi: '10.1162/qjec.2007.122.4.1351', relation: builds-on, note: "follows their methodology for surveying firms about management practices; validation approach (stability across respondents within the same firm) mirrors theirs" }
    - { cite: "Backus et al. (2020a)", relation: extends, note: "analogous to their sequential bargaining evidence from eBay; this paper provides the first large-scale matched firm-worker counterpart in the labor market" }
    - { cite: "Card, Heining, and Kline (2013)", doi: '10.1093/qje/qjt006', relation: builds-on, note: "documents the rise of West German wage inequality via growing firm heterogeneity in AKM effects; this paper provides evidence on individual bargaining as a mechanism contributing to that dispersion" }
  openQuestions:
    - "Whether individual bargaining has become more prevalent over time and whether firms' policies vary over the lifecycle; the cross-sectional design cannot address this (p. 365)."
    - "Whether bargaining outcomes are efficient (split-the-difference as in the product market); the paper did not collect salaries at each negotiation stage, so efficiency cannot be assessed (p. 365)."
    - "Why firms do or do not accommodate workers' requests based on the reason behind the request (e.g., commuting distance changes vs. genuine outside options); this remains an avenue for future work (p. 366)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/KUNV4K", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Read full PDF pp. 315-371; eight results extracted with source locators. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; fixed R3 adj-R² ceiling (0.38/0.35 → 0.44 for cols 8-9 Panel A), R6 Panel-B gender-gap values (asked/received swapped, -6.4/-5.7 → -5.8/-6.4 pp***), and R7 posting-firm coefficient (0.020 → 0.008, Table VI Panel A col 2); equations (1)-(3) verified term-by-term." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-28, role: verified, note: "R5 re-checked against Table V Panel A col (2) p. 351: binary 'negotiated base wage upward' is 0.067* (+6.7 pp*), not 0.513** (that is the intensive-margin pp row); 'asked' is 0.087*** not **; corrected both value and stars in findings[] and Core results table." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf049", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license[0].content-version=vor, URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days=0, start=2025-10-30; OUP CHORUS standard publication model, all rights reserved, no CC licence" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the empirical framework, and the estimating equations: enough to understand what it found and how, without reading all 57 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1093/qje/qjaf049).

## TL;DR

The paper introduces and validates a novel survey measure of firm wage-bargaining strategies for 772 German firms (fielded through the ifo Institute), linked to German Social Security records (IEB) and a complementary worker survey of nearly 10,000 full-time workers. Most workers (78%) are employed in positions where the firm reports that individual bargaining is possible, and the typical firm is willing to differentiate pay by 6%-12% depending on employee group. Firm productivity does not predict which firms bargain; labor market factors such as job tightness and employee group replaceability do. Worker-firm bargaining events typically begin with workers providing salary expectations; most outside offers are ultimately rejected and used to renegotiate at the incumbent firm. Workers with better outside options and higher risk tolerance ask for more and receive more, while women are systematically less likely to ask and to succeed. At firms that bargain, residual gender wage gaps are 3-5 percentage points larger than at posting firms, and a worker's prior-firm pay premium (AKM firm effect) predicts current pay only under individual bargaining.

## Core results

Magnitudes and significance as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Individual bargaining is pervasive**: 78% of workers at surveyed firms are in positions where the firm can differentiate pay by individual bargaining | Figure I (Panels A-B), p. 333-334 | 95% of firms can differentiate pay for managers; 85% for experienced non-managers; 57% for recent entrants with outside offers; 50% for new labor market entrants |
| R2 | **Firms expect substantial initial-offer variation**: typical expected spread between highest and lowest initial offers to identically qualified candidates is 3%-10% depending on group | Figure II, p. 335; Figure III, p. 336 | 3% for recent entrants, 5% for experienced non-managers, 10% for managers (conditional on nonzero: 6%, 10%, 12%); final-offer gap is similar |
| R3 | **Labor market factors beat firm characteristics** in explaining bargaining strategies; employee-group dummies explain as much as 500+ firm fixed effects | Table III, p. 343 | Group dummies alone: R² = 0.33, adj. R² = 0.33; all firm FE: R² = 0.40, adj. R² = 0.19; firm controls without industry dummies (cols 4-7) keep adj. R² ≤ 0.35; 4-digit industry dummies (cols 8-9) reach adj. R² = 0.44 |
| R4 | **Most outside offers are rejected**; workers use them to renegotiate at the incumbent firm | Table IV, p. 346 | 91% of workers who received outside offers stayed; 33% attempted renegotiation with incumbent; 46% of renegotiation attempts succeeded |
| R5 | **Outside options drive bargaining success**: workers with better outside options are 9 pp more likely to ask for a wage increase at the start of an employment spell | Table V Panel A, p. 351 | Outside options (binary): +8.7 pp`\*\*\*` asked, +6.7 pp`\*` successfully negotiated upward; level: +0.056 ask, +0.487 pp negotiated; consistent effects in previous 6 months |
| R6 | **Women ask for and receive less**: women are 6 pp less likely to successfully negotiate pay up at the start of a spell and during employment; gap cannot be fully explained by worse outside options | Table V Panels A-B, pp. 351-352 | Start of spell: -5.8 pp ask, -6.4 pp`\*\*` succeeded; in previous 6 months: -5.8 pp`\*\*\*` asked, -6.4 pp`\*\*\*` received raise |
| R7 | **Gender pay gaps are 3-5 pp larger at bargaining firms** after controlling for occupation-establishment fixed effects; 44% of residual gender gap at surveyed firms attributed to bargaining | Table VI Panel A, p. 359; Figure V, p. 361 | Female coeff. at bargaining firms: -0.053`\*\*` (s.e. 0.023, occ-est FE, col 5); at posting firms: 0.008 (s.e. 0.032, col 2); ~6 pp difference robust to controlling for hours and excluding special pay |
| R8 | **Prior-firm pay premium predicts current pay only under bargaining**: 10 pp higher prior-firm AKM effect associated with 0.5% higher current pay, but only at bargaining firms | Table VII Panel A, p. 363 | Bargaining firms: prior-firm effect = 0.049`\*\*\*` (s.e. 0.010); posting firms: 0.006 (s.e. 0.018); p-value of equality = 0.016 |

**Overall (paper's conclusion).** Individual wage bargaining is empirically pervasive in Germany, is driven by labor market factors rather than firm productivity, and generates meaningful wage dispersion. Providing workers with pay information (a common policy proposal) would not suffice to close gender gaps in bargaining behavior; residual differences persist even in hypothetical scenarios with equalized information. The prior-firm pay persistence result implies that when workers move jobs, their starting wage partly reflects the bargaining regime at their previous employer, not just their productivity.

## Theory / model

The paper has no formal model of its own. It situates itself within the theoretical literature on imperfect competition in the labor market (Manning (2011)): when workers face search frictions and firms earn monopsonistic rents, wages can be set by individual bargaining rather than wage posting, and the distribution of rents varies with outside options and bargaining power.

The paper tests two classes of theoretical predictions from models of firm wage-setting strategy:

1. **Productivity-based theories** (Postel-Vinay and Robin (2004); Doniger (2015); Flinn and Mullins (2021)): more productive firms will be more likely to bargain with workers to capture a larger share of the surplus. The paper finds these predictions are **rejected**: firm age, size, and assets per employee do not predict whether a firm bargains.

2. **Labor market factor theories** (Ellingsen and Rosén (2003); Michelacci and Suarez (2006)): firms bargain when it is difficult to replace workers or when vacancy tightness is high. The paper finds these predictions are **confirmed**: market tightness (bottleneck occupations) and employee replaceability (experienced workers, managers) predict bargaining strategies, and employee-group dummies explain as much variation as all firm fixed effects combined.

For the inequality analysis, the identification logic is:
- **Gender pay gap (Section VI.A)**: the paper extends Biasi and Sarsons (2022) to a broader multi-sector German sample, comparing conditional gender gaps within occupation-establishment cells across firms with and without bargaining.
- **Prior-firm pay persistence (Section VI.B)**: the paper compares the relation between a worker's prior-firm AKM wage premium (Abowd, Kramarz, and Margolis (1999); estimated from 2010-2017 population data by Bellmann et al. (2020)) and current pay at bargaining vs. posting firms. Card, Heining, and Kline (2013) documented the rise of firm heterogeneity in these AKM effects in Germany; the present paper identifies individual bargaining as a contributing mechanism.

Both exercises are descriptive/comparative; neither makes a causal identification claim beyond selection-on-observables within occupation-establishment cells.

## Method

The key methodological contribution is the design and validation of a survey instrument to measure firm wage-bargaining strategies, following the management-practices survey approach of Bloom and Van Reenen (2007).

**Protocol question (main measure of firm bargaining strategy).** Firms were asked separately for four employee groups:

> How much more could a person maximally receive compared to the fixed compensation you would have offered based on the person's qualification/fit for the position alone?

Response options: 0% (no adjustment), 1%-10%, 11%-20%, 21%-30%, 31%-40%, more than 40%. A firm is classified as having a bargaining strategy if it reported any nonzero adjustment. For incumbent workers facing outside offers:

> Suppose an employee at your company receives an external offer from another company and requests a salary increase. What is the maximum percentage by which your firm could possibly increase the fixed compensation (without changing the person's tasks) in order to retain the person?

**Incidence question (intensive margin).** Firms were asked to imagine 10 candidates with identical qualifications but differing salary expectations and outside offers, and report the expected spread between the highest and lowest initial and final offers (p. 330).

**Validation.** The paper conducts three validation exercises:
1. *Stability across respondents within the same firm* (following Bloom and Van Reenen (2007)): independent responses from 37 multi-respondent firms show significant overlap, confirming firm-level determination (Online Appendix Table A2).
2. *External validity with published data*: answers on observable firm practices (e.g., CBA coverage) align with publicly available sources (Online Appendix C.3).
3. *Correlation with worker survey*: elicited firm strategies are positively and significantly correlated with worker reports at those firms (Online Appendix Table A5).

The survey-based approach builds on Hall and Krueger (2012), who provided early evidence on the incidence of wage posting vs. bargaining using worker surveys. This paper adds the firm side and links both to administrative records. The results on back-and-forth negotiation dynamics are analogous to Backus et al. (2020a), who documented sequential bargaining in eBay product markets; this paper provides the labor-market counterpart.

**Worker bargaining outcomes regression (p. 350, equation 1).**

$$
y_i = \beta X_i + \delta \text{age}_i + \alpha \exp_i + \gamma \exp_i^2 + \zeta_{\text{educ}(i)} + \lambda_{o(i),\text{est}(i)} + \epsilon_i \tag{1}
$$

where $$y_i$$ is a bargaining outcome (probability of asking for a raise, successfully negotiating, etc.); $$X_i$$ is the heterogeneity dimension of interest (outside options, risk tolerance, gender, or AKM person effect); $$\lambda_{o(i),\text{est}(i)}$$ are three-digit occupation-establishment fixed effects. Standard errors are clustered at the firm level.

**Gender pay gap regression (p. 358, equation 2).**

$$
\log w_i = \beta \, \text{Female}_i + \delta \, \text{age}_i + \alpha \exp_i + \gamma \exp_i^2 + \zeta_{\text{educ}(i)} + \lambda_{o(i),\text{est}(i)} + \epsilon_i \tag{2}
$$

where $$\log w_i$$ is log daily pay. Estimated separately for workers exposed to individual bargaining and those whose wages are set by posting (based on the firm's reported strategy for the worker's group). Standard errors are clustered at the firm level.

**Prior-firm pay persistence regression (p. 362).**

$$
\log w_i = \beta \, \psi_{i,j^{\text{prev}}(i)} + \delta \, \text{age}_i + \alpha \exp_i + \gamma \exp_i^2 + \zeta_{\text{educ}(i)} + \lambda_{o(i),\text{est}(i)} + \epsilon_i \tag{3}
$$

where $$\psi_{i,j^{\text{prev}}(i)}$$ is the AKM wage premium of individual $$i$$'s previous employer (from population regressions using log daily pay 2010-2017; Bellmann et al. (2020)). Estimated separately by bargaining exposure.

## Empirical specifications

**Table II (Section IV.B): predicting firm bargaining strategies.** Equality-of-means tests comparing posting vs. bargaining firms on financial characteristics (total assets per employee, fixed assets per employee), firm size, firm age, other characteristics (CBA coverage, East Germany HQ, stock corporation). Tests run separately for three employee groups and two bargaining measures. Key finding: productivity proxies have p-values uniformly above 0.10; CBA coverage and East Germany HQ are significantly correlated with bargaining.

**Table III (Section IV.B): variance decomposition of bargaining strategies.** OLS of the firm-group indicator $$b_{ig}$$ (firm $$i$$ bargains with group $$g$$) on sets of covariates. The four employee-group dummies (column 1) explain R² = 0.33, comparable to all firm fixed effects (column 2, R² = 0.40, adjusted R² = 0.19). Columns (4)-(7) add firm size, productivity, norms, or 1-digit industry dummies; adjusted R² stays in the 0.34-0.35 range, barely above the group-only 0.33. Columns (8)-(9) add 4-digit industry dummies, reaching adj. R² = 0.44 (Panel A). This is shown for new hires (Panel A), incumbents (Panel B), and on the intensive margin (Panel C).

**Tables V-VI (Sections V, VI): bargaining behavior and the gender gap.** Main regression is equation (1) for bargaining outcomes and equation (2) for log wages, with three-digit occupation-establishment fixed effects and firm-level clustering. For the gender gap, Table VI runs columns (1)/(4) without FE, columns (2)/(5) with occ-est FE, and columns (3)/(6) with level-occ-est FE, separately for posting and bargaining firms. The main estimate is columns (2) vs. (5): the gender gap narrows to near zero at posting firms but remains at -5 pp at bargaining firms (Panel A). Figure V shows robustness across pay measures (daily pay, daily base pay, hourly wages), samples (surveyed workers, all workers), and FE specifications.

**Table VII (Section VI.B): prior-firm pay persistence.** Regression (3) estimated for all workers at surveyed firms (columns 1-2) and surveyed workers only (columns 3-4), separately by bargaining exposure. Panel A uses current daily pay; Panel B uses starting daily pay at current firm. The p-value of equality of prior-firm effect across bargaining and posting regimes is 0.016 (Panel A, all workers).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| IAB Integrated Employment Biographies (IEB) | Administrative employer-employee records; daily pay, demographics, occupation codes, employer IDs; linked to firm survey (553/772 firms consented); 416,821 full-time employees at matched firms in 2020; AKM firm and worker effects from 2010-2017 population data | [IEB Germany](/wiki/confidential/ieb-germany/) (confidential) |
| ifo HR Survey Panel (firm survey) | Novel survey of 772 German private-sector firms on wage-bargaining strategies; elicited for four employee groups and two bargaining contexts (new hires, incumbents with outside offers); fielded 2021-2022 | No page yet (new data, introduced by this paper) |
| IAB Worker Survey (HOPP, worker survey) | Novel survey of 9,756 full-time German workers on bargaining behavior, outside options, and risk tolerance; linked to IEB; fielded 2022-2024 to a sample drawn from Social Security records | No page yet (new data, introduced by this paper) |
| Orbis (Bureau van Dijk) | Balance sheet characteristics for surveyed firms (firm age, total assets, fixed assets, stock corporation status); matched to 99% of surveyed firms | [Orbis BvD](/wiki/commercial/orbis-bvd/) (licensed) |

Sample: 772 firms, workers ages 25-50 employed in 2020, IEB data from 1975 onward (main analysis uses 2010-2020), AKM effects estimated on 2010-2017 population.

## When to read the full paper

Read the [original](https://doi.org/10.1093/qje/qjaf049) if you are:
- Building or calibrating a model of individual wage bargaining in the labor market (the survey statistics on firm willingness to differentiate pay and the share of workers exposed to bargaining are key inputs);
- Studying the sources of the gender wage gap (the paper provides unusually direct evidence that bargaining, not productivity, drives residual gaps);
- Using AKM firm effects to interpret wage dispersion (the result that prior-firm AKM effects carry over to current pay only under bargaining has implications for how firm effects should be interpreted);
- Interested in survey-based measurement of firm practices (the validation exercises in the Online Appendix provide a detailed template).

The locators above point to the exact tables and figures in the source.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* (2026), pp. 315-371. Published by Oxford University Press on behalf of Harvard University. All rights reserved; no CC licence. This distillation was extracted by an LLM on 2026-06-28 and is **not human-verified or independently reproduced**.

> Caldwell, Sydnee, Ingrid Haegele, and Jörg Heining.
> "Bargaining and Inequality in the Labor Market."
> *The Quarterly Journal of Economics* (2026): 315-371.
> DOI: [10.1093/qje/qjaf049](https://doi.org/10.1093/qje/qjaf049).
> © The Author(s) 2025. Published by Oxford University Press on behalf of President and Fellows of Harvard College. All rights reserved.
> Extracted under fair-use / extract-only policy; no verbatim reproduction of substantial portions.
