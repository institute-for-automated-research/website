---
title: "Bargaining and Inequality in the Labor Market: Caldwell, Haegele & Heining (2026)"
description: >-
  Distilled: A novel matched firm-worker survey linked to German administrative data
  documents that individual wage bargaining is pervasive (78% of workers exposed),
  that labor market factors predict firms' bargaining strategies better than firm
  productivity, that workers with better outside options negotiate more successfully,
  and that gender wage gaps are 3-5 percentage points larger at bargaining firms.
  The Quarterly Journal of Economics (2026), paywalled. Twenty-three core results with
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
  topics: ["Labor market dynamics and wage inequality"]
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
  resultsCount: 23
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
    period: 2010..2024
    frequency: mixed
    dataType: [administrative, survey]
    granularity: [individual, firm]
    n: "772 firms; 9,756 workers (main analysis); 416,821 full-time employees at matched firms; IEB administrative data 2010-2020; AKM effects estimated on 2010-2017 population data"
  findings:
    - { ref: R1, outcome: share of workers exposed to individual bargaining, metric: probability, value: "78% of workers at surveyed firms are in groups where individual bargaining is possible; firm shares are 95% for managers, 85% for experienced non-managers, and 55% for recent entrants in the introduction (Figure I shows about 50% for new-hire entrants); 57% of firms would raise incumbent recent entrants' wages after an outside offer", direction: positive }
    - { ref: R2, outcome: expected initial-offer gap across workers with identical qualifications, metric: level, value: "3% for recent labor market entrants, 5% for experienced non-managers, 10% for managers (conditional on nonzero gap: 6%, 10%, 12%)", direction: positive }
    - { ref: R3, outcome: explained variation in firm bargaining strategies, metric: r-squared, value: "employee-group dummies alone: R² = 0.33, adj. R² = 0.33; firm FE alone: R² = 0.40, adj. R² = 0.19; adding firm size/productivity/norms without industry dummies (cols 4-7) keeps adj. R² ≤ 0.35; with 4-digit industry dummies (cols 8-9) adj. R² reaches 0.44 (Table III, Panel A)", direction: positive, vsBenchmark: group effects explain as much as 500+ firm FE; productivity adds nothing }
    - { ref: R4, outcome: share of outside offers rejected; on-the-job renegotiation rate, metric: probability, value: "91% of workers who received outside offers remained at incumbent; 33% attempted renegotiation with incumbent; 46% of renegotiation attempts succeeded (Table IV)", direction: positive }
    - { ref: R5, outcome: asking for and receiving wage increases (start of employment spell), metric: pp-effect, value: "outside options (binary): +8.7 pp*** asked firm to increase offer, +6.7 pp* negotiated base wage upward; level: +0.056*** ask, +0.487*** pp negotiated upward (Table V, Panel A)", direction: positive }
    - { ref: R6, outcome: gender gap in bargaining behavior and success, metric: pp-effect, value: "at spell start, female coefficients are -7.5 pp for asking (s.e. 5.1 pp) and -6.8 pp for negotiating successfully (s.e. 4.8 pp), neither significant; intensive-margin successful negotiation is -0.614 pp* (s.e. 0.325 pp). During the prior six months, women are -5.8 pp*** less likely to ask (s.e. 1.8 pp) and -6.4 pp*** less likely to ask for and receive a raise (s.e. 1.4 pp) (Table V, Panels A-B)", direction: mixed }
    - { ref: R7, outcome: gender wage gap at individual-bargaining vs posting firms, metric: pp-effect, value: "among surveyed workers with occupation-establishment FE, female coefficient is -0.053** (s.e. 0.023) at bargaining firms and 0.008 (s.e. 0.032) at posting firms, a 6.1 pp difference (equality-test p = .063, marginal at 10% but not significant at 5%); the paper's decomposition attributes 44% of the residual gender gap at surveyed firms to bargaining (Table VI Panel A, col. 2 vs 5; text p. 360; Online Appendix Table A13)", direction: negative }
    - { ref: R8, outcome: current log daily pay predicted by prior-firm AKM wage premium, by current-employer bargaining exposure, metric: coefficient, value: "at current employers with bargaining: prior-firm effect = 0.049*** (s.e. 0.010); without bargaining: 0.006 (s.e. 0.018); p-value of equality = 0.016 (Table VII, Panel A, all workers)", direction: positive, vsBenchmark: prior-firm pay premium is zero and insignificant at posting firms }
    - { ref: R9, outcome: firm bargaining strategy by firm productivity, metric: p-value, value: "total and fixed assets per employee differences between posting and bargaining firms have p-values .21, .25, .69, .66, .89, and .86 across employee groups (Table II, p. 339)", direction: none }
    - { ref: R10, outcome: explained variation in firm wage-setting strategy, metric: r-squared, value: "incidence-question Panel B: adjusted R² = .25 for group effects, .26 for firm effects, .59 for group plus firm effects, and .38 in cols 8-9; incumbent renegotiation Panel C: adjusted R² = .19, .33, .58, and .32, respectively (Table III, pp. 343-344)", direction: positive, vsBenchmark: combined group and firm effects reach adjusted R² of .59 and .58, compared with group-only .25 and .19 }
    - { ref: R11, outcome: worker-firm bargaining event stages, metric: probability, value: "57% of rejected-offer events and 74% of accepted-offer events begin with worker expectations; after an initial offer, 31% and 39% counter, respectively; firms raise offers in 42% and 45% of counter cases and match 21% and 28% (Table IV, p. 346)", direction: positive }
    - { ref: R12, outcome: asking for and receiving raises by worker risk tolerance, metric: pp-effect, value: "during the prior six months, binary risk tolerance is associated with +7.9 pp*** asking and +8.5 pp*** asking and receiving; level of risk tolerance is associated with +0.022*** and +0.023*** (Table V, Panel B, p. 351)", direction: positive }
    - { ref: R13, outcome: bargaining behavior by AKM worker effect, metric: coefficient, value: "a higher AKM worker effect predicts +0.187** successful negotiation at spell start and +1.555** percentage points on the intensive margin; in the hypothetical range, it predicts +0.039** expectations at/above midpoint and +0.050*** above range (Table V, pp. 351-352)", direction: positive }
    - { ref: R14, outcome: gender differences in stated expectations under a common salary range, metric: pp-effect, value: "women are 4.3 pp*** less likely to state expectations at or above the range midpoint and 5.7 pp*** less likely to state expectations above the range; they are also 2.2 pp*** less likely to provide expectations (Table V, Panel C, p. 352)", direction: negative }
    - { ref: R15, outcome: gender wage gap at bargaining and posting firms across pay measures, metric: pp-effect, value: "with hours controlled, female coefficients are 0.020 at posting firms and -0.045** at bargaining firms; for daily base pay they are 0.008 and -0.049** (Table VI, Panels B-C, p. 359)", direction: negative, vsBenchmark: wage gap remains at bargaining firms after hours controls and when excluding special pay }
    - { ref: R16, outcome: starting log daily pay predicted by prior-firm AKM wage premium, by current-employer bargaining exposure, metric: coefficient, value: "all workers: prior-firm effect is 0.094*** without current-employer bargaining and 0.234*** with it, p-value of equality = .010; surveyed workers: 0.182 without current-employer bargaining and 0.377*** with it, p-value = .237 (Table VII, Panel B, p. 363)", direction: positive, vsBenchmark: the prior-firm premium predicts starting pay in both groups among all workers, with a larger coefficient under bargaining }
    - { ref: R17, outcome: raising wages versus negotiating nonwage amenities, metric: probability, value: "27% of workers report negotiating vacation days and 18% training opportunities; the paper reports no evidence that workers with worse outside options, lower risk tolerance, lower AKM person effects, or women negotiate more on nonwage dimensions (text p. 356; Online Appendix Table A9)", direction: none }
    - { ref: R18, outcome: asking for and receiving raises during employment by outside options, metric: pp-effect, value: "better outside options are associated with +9.0 pp*** asking for a raise and +7.7 pp*** asking for and receiving a raise using the binary measure; the level measure gives +0.062*** and +0.054*** (Table V, Panel B, p. 351)", direction: positive }
    - { ref: R19, outcome: starting negotiations and stated expectations by worker risk tolerance, metric: pp-effect, value: "at spell start, binary risk tolerance predicts +7.5 pp* successful negotiation and level risk tolerance +0.024**; in the hypothetical range, binary risk tolerance predicts +2.7 pp** at/above midpoint and +2.5 pp* above range (Table V, pp. 351-352)", direction: positive }
    - { ref: R20, outcome: gender differences in bargaining conditional on correlated worker characteristics, metric: coefficient, value: "including outside options, risk tolerance, and gender together reduces the female coefficient by at most 15%; each dimension remains individually significant for outcomes measured in the prior six months (text p. 356; Online Appendix Table G4 and Figure A2)", direction: negative }
    - { ref: R23, outcome: firm bargaining strategy by workplace norms, metric: p-value, value: "CBA coverage, bargaining vs posting firms: .35 vs .50 for recent entrants (p = .00) and .39 vs .56 for experienced non-managers (p = .00); East Germany HQ shares: .10 vs .15 for entrants (p = .02), .11 vs .22 for experienced non-managers (p = .00), and .11 vs .32 for managers (p = .00) (Table II, pp. 339-340)", direction: negative }
  resultType: confirms
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
    - "Whether firms' responses depend on the reason for a worker's request (for example, commuting time or personal circumstances); the paper leaves this for future work (p. 366)."
    - "How much of the variance in AKM worker effects reflects bargaining behavior rather than worker productivity; the paper cannot quantify this split (p. 365)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/KUNV4K", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Read full PDF pp. 315-371; eight results extracted with source locators. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; fixed R3 adj-R² ceiling (0.38/0.35 → 0.44 for cols 8-9 Panel A), R6 Panel-B gender-gap values (asked/received swapped, -6.4/-5.7 → -5.8/-6.4 pp***), and R7 posting-firm coefficient (0.020 → 0.008, Table VI Panel A col 2); equations (1)-(3) verified term-by-term." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-28, role: verified, note: "R5 re-checked against Table V Panel A col (2) p. 351: binary 'negotiated base wage upward' is 0.067* (+6.7 pp*), not 0.513** (that is the intensive-margin pp row); 'asked' is 0.087*** not **; corrected both value and stars in findings[] and Core results table." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and augmented the Core results with R9-R23, matching findings, and fuller estimating specifications. Additions are not human-verified and were not independently reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 23 Core results, specifications and equations, classifications, findings, prose, frontmatter, and citation edges against the PDF; corrected the start-of-spell gender results and significance, offer-context wording, gender-gap comparison and p-value, prior-firm equation subscript and current-employer comparison, causal-language qualification, and open questions. Locator guards checked. Review pass (2026-10-04): labeled the Table III decomposition as a reconstruction and changed R6 direction to mixed." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf049", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license[0].content-version=vor, URL=https://academic.oup.com/journals/pages/open_access/funder_policies/chorus/standard_publication_model, delay-in-days=0, start=2025-10-30; OUP CHORUS standard publication model, all rights reserved, no CC licence" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the empirical framework, and the estimating equations: enough to understand what it found and how, without reading all 57 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1093/qje/qjaf049).

## TL;DR

The paper introduces and validates a survey measure of wage-bargaining strategies for 772 German firms, linked to German Social Security records and a worker survey of nearly 10,000 full-time workers. Most workers (78%) are in positions where firms report that individual bargaining is possible. Firm productivity proxies do not systematically predict bargaining; employee group and the difficulty of filling a position are more informative, while the evidence on market tightness is suggestive. Most outside offers are rejected; among rejected-offer events, about one-third of workers try to renegotiate with the incumbent firm. Better outside options predict more asking and successful raises, while risk tolerance is also associated with bargaining success. Women are significantly less likely to ask for and receive raises during the prior six months; estimates for asking and succeeding at the start of a job spell are negative but imprecise. Among surveyed workers, the residual gender pay gap is about 6 percentage points larger at bargaining firms than posting firms; the paper reports a 3 percentage point difference in its conclusion and attributes 44% of the residual gap at surveyed firms to bargaining. The prior-firm pay premium predicts current pay only when the worker's current employer allows bargaining, in both the all-worker and surveyed-worker samples.

## Core results

Magnitudes and significance as reported; `*`/`**`/`***` = 10%/5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Individual bargaining is pervasive**: 78% of workers at surveyed firms are in positions where the firm can differentiate pay by individual bargaining | Figure I (Panels A-B), p. 334; text pp. 318, 333, 336 | 95% of firms can differentiate pay for managers; 85% for experienced non-managers; the introduction reports 55% for recent entrants, while Figure I shows about 50% for new hires; 57% of firms would adjust incumbent recent entrants' wages after an outside offer |
| R2 | **Firms expect substantial initial-offer variation**: typical expected spread between highest and lowest initial offers to identically qualified candidates is 3%-10% depending on group | Figure II, p. 335; Figure III, p. 336 | 3% for recent entrants, 5% for experienced non-managers, 10% for managers (conditional on nonzero: 6%, 10%, 12%); final-offer gap is similar |
| R3 | **Labor market factors beat firm characteristics** in explaining bargaining strategies; employee-group dummies explain as much as 500+ firm fixed effects | Table III, p. 343 | Group dummies alone: R² = 0.33, adj. R² = 0.33; all firm FE: R² = 0.40, adj. R² = 0.19; firm controls without industry dummies (cols 4-7) keep adj. R² ≤ 0.35; 4-digit industry dummies (cols 8-9) reach adj. R² = 0.44 |
| R4 | **Most outside offers are rejected; some workers use them to renegotiate** at the incumbent firm | Table IV, p. 346 | 91% of workers who received outside offers stayed; 33% of workers in rejected-offer events attempted renegotiation with incumbent; 46% of renegotiation attempts succeeded |
| R5 | **Outside options drive bargaining success**: workers with better outside options are 9 pp more likely to ask for a wage increase at the start of an employment spell | Table V Panel A, p. 351 | Outside options (binary): +8.7 pp`\*\*\*` asked, +6.7 pp`\*` successfully negotiated upward; level: +0.056 ask, +0.487 pp negotiated; consistent effects in previous 6 months |
| R6 | **Women ask for and receive less during employment**; start-of-spell differences are negative but imprecise | Table V, Panels A-B, pp. 351-352 | Start of spell: -7.5 pp asked (s.e. 5.1 pp) and -6.8 pp succeeded (s.e. 4.8 pp) are both unstarred; successful negotiation’s intensive margin is -0.614 pp* (s.e. 0.325 pp). In previous 6 months: -5.8 pp*** asked (s.e. 1.8 pp), -6.4 pp*** asked for and received a raise (s.e. 1.4 pp) |
| R7 | **Among surveyed workers, the gender pay gap is about 6 pp larger at bargaining firms** after occupation-establishment fixed effects; the paper's conclusion reports a 3 pp difference overall | Table VI Panel A, p. 359; text p. 360; Online Appendix Table A13; Figure V, p. 361 | Female coefficient at bargaining firms: -0.053`\*\*` (s.e. 0.023, occ-est FE, col. 5); at posting firms: 0.008 (s.e. 0.032, col. 2); difference is 6.1 pp (equality-test p = .063, marginal at 10% but not significant at 5%). The text reports that 44% of the residual gender gap at surveyed firms is attributed to bargaining |
| R8 | **Prior-firm pay premium predicts current pay only when the current employer bargains**: 10 pp higher prior-firm AKM effect is associated with 0.5% higher current pay at bargaining employers | Table VII Panel A, p. 363 | Bargaining firms: prior-firm effect = 0.049`\*\*\*` (s.e. 0.010); posting firms: 0.006 (s.e. 0.018); p-value of equality = 0.016 |
| R9 | **Firm productivity proxies do not predict bargaining** | Table II, p. 339 | Total and fixed assets per employee differences have p-values .21, .25, .69, .66, .89, and .86 across employee groups |
| R10 | **Combined group and firm effects explain incidence and incumbent measures** | Table III, pp. 343-344 | Incidence question, Panel B: adjusted R² = .25 group, .26 firm, .59 group plus firm, .38 cols 8-9; incumbent renegotiation, Panel C: .19, .33, .58, .32, respectively |
| R11 | **Bargaining often starts before an initial offer and continues through counters** | Table IV, p. 346 | Salary expectations provided in 57% of rejected-offer events and 74% of accepted-offer events; worker counters in 31% and 39%; firms raise offers in 42% and 45% of counter cases, matching 21% and 28% |
| R12 | **Risk-tolerant workers ask for and receive raises more often** | Table V, Panel B, p. 351 | Binary risk tolerance: +0.079`\*\*\*` for asking and +0.085`\*\*\*` for asking and receiving; risk-tolerance level: +0.022`\*\*\*` and +0.023`\*\*\*`, respectively |
| R13 | **Higher AKM worker premia predict more bargaining and higher stated expectations** | Table V, pp. 351-352 | AKM worker effect: +0.187`\*\*` successful negotiation and +1.555`\*\*` percentage points on the intensive margin at spell start; in the hypothetical scenario +0.039`\*\*` for expectations at/above range midpoint and +0.050`\*\*\*` above range |
| R14 | **Gender gaps in salary expectations persist under a common stated salary range** | Table V, Panel C, p. 352 | Women are 2.2 pp`\*\*\*` less likely to provide expectations, 4.3 pp`\*\*\*` less likely to state expectations at/above range midpoint, and 5.7 pp`\*\*\*` less likely to state expectations above range |
| R15 | **The bargaining-firm gender gap persists with hours controls and base pay** | Table VI, Panels B-C, p. 359 | Female coefficient: posting vs bargaining firms is 0.020 vs -0.045`\*\*` with hours controls, and 0.008 vs -0.049`\*\*` for daily base pay |
| R16 | **Prior-firm pay premia predict starting pay, especially under current-employer bargaining** | Table VII, Panel B, p. 363 | All workers: 0.094`\*\*\*` without bargaining vs 0.234`\*\*\*` with bargaining, equality p = .010; surveyed workers: 0.182 vs 0.377`\*\*\*`, equality p = .237 |
| R17 | **Bargaining differences do not shift toward nonwage amenities or special pay** | Text p. 356; Online Appendix Table A9 | 27% report negotiating vacation days and 18% training opportunities; there is no evidence that groups that bargain less over base wages bargain more over nonwage dimensions; apart from gender, differences in special-pay bargaining are not meaningful |
| R18 | **Better outside options also predict raises during employment** | Table V, Panel B, p. 351 | Binary measure: +9.0 pp`\*\*\*` asking for a raise and +7.7 pp`\*\*\*` asking for and receiving one; level measure: +0.062`\*\*\*` and +0.054`\*\*\*` |
| R19 | **Risk tolerance predicts starting negotiations and higher salary expectations** | Table V, pp. 351-352 | At spell start, binary risk tolerance predicts +7.5 pp`\*` successful negotiation and level risk tolerance +0.024`\*\*`; in the hypothetical range, binary risk tolerance predicts +2.7 pp`\*\*` at/above midpoint and +2.5 pp`\*` above range |
| R20 | **Gender bargaining differences remain after jointly controlling worker traits** | Text p. 356; Online Appendix Table G4 and Figure A2 | Including outside options, risk tolerance, and gender together reduces the female coefficient by at most 15%; each dimension remains individually significant for prior-six-month outcomes |
| R21 | **Independent responses within firms support the stability of the survey measure** | Text p. 332; Online Appendix Table A2 | Responses from 37 firms significantly overlap across independent respondents; the main text reports no correlation coefficient |
| R22 | **Worker reports correlate with the firm survey measure** | Text p. 332; Online Appendix Table A5 | Worker-reported bargaining strategies are positively and significantly correlated with the corresponding firm reports; the main text reports no coefficient |
| R23 | **CBA coverage and East Germany headquarters correlate negatively with bargaining** | Table II, pp. 339-340 | Bargaining vs posting firms: CBA coverage .35 vs .50 for recent entrants and .39 vs .56 for experienced non-managers (p = .00 for both); East Germany HQ shares .10 vs .15, .11 vs .22, and .11 vs .32 across groups (p = .02, .00, .00) |

**Overall (paper's conclusion).** Individual wage bargaining is empirically pervasive in Germany and contributes to wage dispersion. Labor-market factors, especially employee group and difficulty filling positions, are associated with bargaining strategies, while firm productivity proxies are not systematically predictive. Providing workers with pay information (a common policy proposal) would not suffice to close gender gaps in bargaining behavior; residual differences persist even in hypothetical scenarios with equalized information. The prior-firm pay persistence result shows that a worker's previous-employer pay premium predicts starting pay more strongly when the new employer allows individual bargaining.

## Theory / model

The paper has no formal model of its own. It situates itself within the theoretical literature on imperfect competition in the labor market (Manning (2011)): when workers face search frictions and firms earn monopsonistic rents, wages can be set by individual bargaining rather than wage posting, and the distribution of rents varies with outside options and bargaining power.

The paper tests two classes of theoretical predictions from models of firm wage-setting strategy:

1. **Productivity-based theories** (Postel-Vinay and Robin (2004); Doniger (2015); Flinn and Mullins (2021)): more productive firms will be more likely to bargain with workers to capture a larger share of the surplus. The paper finds these predictions are **rejected**: firm age, size, and assets per employee do not predict whether a firm bargains.

2. **Labor market factor theories** (Ellingsen and Rosén (2003); Michelacci and Suarez (2006)): firms bargain when it is difficult to replace workers or when vacancy tightness is high. The paper finds these predictions are **confirmed**: market tightness (bottleneck occupations) and employee replaceability (experienced workers, managers) predict bargaining strategies, and employee-group dummies explain as much variation as all firm fixed effects combined.

For the inequality analysis, the identification logic is:
- **Gender pay gap (Section VI.A)**: the paper extends Biasi and Sarsons (2022) to a broader multi-sector German sample, comparing conditional gender gaps within occupation-establishment cells across firms with and without bargaining.
- **Prior-firm pay persistence (Section VI.B)**: the paper compares the relation between a worker's prior-firm AKM wage premium (Abowd, Kramarz, and Margolis (1999); estimated from 2010-2017 population data by Bellmann et al. (2020)) and current pay at bargaining vs. posting firms. Card, Heining, and Kline (2013) documented the rise of firm heterogeneity in these AKM effects in Germany; the present paper identifies individual bargaining as a contributing mechanism.

Both exercises are descriptive comparisons conditional on observed controls; the paper does not claim causal identification.

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
\log w_i = \beta \, \psi_{i,j^{\text{prev}(i)}} + \delta \, \text{age}_i + \alpha \exp_i + \gamma \exp_i^2 + \zeta_{\text{educ}(i)} + \lambda_{o(i),\text{est}(i)} + \epsilon_i \tag{3}
$$

where $$\psi_{i,j^{\text{prev}(i)}}$$ is the AKM wage premium of individual $$i$$'s previous employer (from population regressions using log daily pay 2010-2017; Bellmann et al. (2020)). Estimated separately by bargaining exposure.

## Empirical specifications

**Table II (Section IV.B): firm characteristics.** The paper compares means for posting and bargaining firms separately by employee group and reports p-values from equality tests; no regression equation or standard-error treatment is reported for this table. It compares firm assets per employee, size, age, CBA coverage, East Germany headquarters, and legal form. The posting/bargaining firm counts are 341/399 for recent entrants, 112/627 for experienced non-managers, and 39/691 for managers. Total and fixed assets per employee differences are not statistically significant (Table II, pp. 339-340). CBA coverage and East Germany HQ correlate with the strategy reported for several employee groups.

**Table III (Section IV.B): variance decomposition of firm bargaining strategies.** The dependent variable is the continuous firm-group measure: the midpoint of the firm's protocol response for new hires (Panel A), expected variation in final offers (Panel B), or amount of possible incumbent adjustment (Panel C). The authors compare explanatory sets as follows (Table III, pp. 343-344). The following is an unnumbered reconstruction of the decomposition reported in Table III; it is not an equation printed in the paper:

$$
b_{ig} = \alpha_g + \varepsilon_{ig}, \qquad
b_{ig} = \eta_i + \varepsilon_{ig}, \qquad
b_{ig} = \alpha_g + \eta_i + \varepsilon_{ig},
$$

where $$b_{ig}$$ is the bargaining measure for firm $$i$$ and employee group $$g$$, $$\alpha_g$$ are group effects, and $$\eta_i$$ are firm effects. Other columns add firm size, total assets (productivity), norms including CBA coverage, East Germany HQ and legal form, industry dummies, and group interactions. The table reports R-squared and adjusted R-squared, not coefficient estimates or standard errors. Up to four observations per firm enter the regression. Group effects alone produce adjusted R² of .33 in Panel A, .25 in Panel B, and .19 in Panel C; firm effects alone produce .19, .26, and .33, respectively. The combined specification's adjusted R² is .63, .59, and .58. In columns 8-9, which include four-digit industry effects, adjusted R² is .44, .38, and .32. The authors do not state a standard-error treatment for this fit decomposition.

**Table V (Section V): worker bargaining behavior.** Equation (1), shown in Method, is estimated by OLS for the four worker heterogeneity measures: outside options, risk tolerance, gender, and AKM person effects. Outcomes are bargaining actions at the start of a job spell, during the prior six months, and responses to a hypothetical pay-range question. Specifications include age, experience and its square, education dummies, and three-digit occupation-establishment fixed effects; standard errors are clustered by firm. Panel A uses workers who started their job in the previous three years; Panel B uses workers with a bargaining event in the prior six months; Panel C uses workers answering the hypothetical scenario. Table V reports row-specific observation counts (pp. 351-352).

**Table VI and Figure V (Section VI.A): gender wage gaps.** Equation (2), shown in Method, is estimated separately for workers exposed and not exposed to bargaining. The covariates are female, age, experience and its square, education dummies, and the fixed effects listed below; standard errors are clustered by firm. Table VI columns 1/4 have no fixed effects, columns 2/5 include occupation-establishment fixed effects, and columns 3/6 include finer level-occupation-establishment fixed effects. Panel A uses daily pay, Panel B adds log hours, and Panel C uses daily base pay. In the occupation-establishment FE columns, the sample is 1,226 posting-firm workers and 3,381 bargaining-firm workers for daily pay; it is 1,225 and 3,376 for daily base pay (Table VI, p. 359). Figure V estimates the fully interacted form below, with demographic covariates and fixed effects interacted with firm bargaining exposure; its outcome variants include daily pay, daily base pay, and hourly wages, and its samples include surveyed workers and all workers at surveyed firms. Standard errors are clustered by firm (Figure V, p. 361):

$$
\log w_i = \beta_0 + \beta_1 \text{Female}_i + \beta_2 B_i + \beta_3 (\text{Female}_i \times B_i) + X_i'\delta + B_i X_i'\theta + \lambda_{o(i),est(i)} + B_i\lambda_{o(i),est(i)} + \epsilon_i.
$$

The target coefficient in Figure V is $$\beta_3$$, and $$B_i$$ indicates that pay is set via individual bargaining. The main surveyed-worker sample is drawn from workers in firms with survey responses; the table reports the sample size for each specification.

**Table VII (Section VI.B): prior-firm pay persistence.** The prior-firm specification displayed as equation (3) in Method is estimated separately for workers with and without bargaining exposure and for the full set of workers at surveyed firms (columns 1-2) and surveyed workers (columns 3-4). Panel A uses current log daily pay; Panel B uses starting log daily pay. Regressors include the prior-firm AKM effect, age, experience and its square, education dummies, and occupation-establishment fixed effects. Standard errors are clustered by firm. Each panel has 36,117 and 118,233 observations in the no-bargaining and bargaining columns for all workers, and 1,030 and 2,879 for surveyed workers. Bargaining exposure refers to the worker's current employer. The paper reports p-values for equality of prior-firm coefficients between bargaining regimes; for current pay among all workers this p-value is .016, and for starting pay it is .010 (Table VII, p. 363).

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
- Using AKM firm effects to interpret wage dispersion (the prior employer's AKM premium predicts current pay under current-employer bargaining, with implications for how firm effects should be interpreted);
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
