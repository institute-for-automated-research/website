---
title: "Pay Restrictions and Labor Investment: Cao, Hasan, Huang & Zhao (2026)"
description: >-
  Distilled: Exploiting China's 2014 SOE executive compensation reform as a
  quasi-natural experiment, this paper shows pay restrictions reduce abnormal
  labor investment in state-owned enterprises by 3.91 to 4.82 percent, operating
  through strengthened internal governance and reduced social comparison between
  executives and rank-and-file employees. Journal of Corporate Finance 2026,
  paywalled. Thirty-six core results with source locators, datasets used, and the
  empirical specifications.
sidebar:
  label: Cao-Hasan-Huang-Zhao 2026
  order: 1
tags: [paper-summary, corporate-governance, executive-compensation, labor-investment,
       state-owned-enterprises, difference-in-differences, panel-regression, china,
       peer-reviewed, unreplicated, data:csmar, data:cnrds, data:procuratorial-yearbook, data:china-statistical-yearbook]
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
    - executive compensation in SOEs
    - pay-for-performance sensitivity of executive compensation
    - executive perks and excess compensation in SOEs
    - executive misconduct likelihood and case counts
    - CEO-to-rank-and-file pay disparity in SOEs
    - top-three-executive-to-rank-and-file pay disparity in SOEs
    - all-top-executive-to-rank-and-file pay disparity in SOEs
    - rank-and-file employee compensation
    - internal governance effectiveness in SOEs
    - over-hiring in SOEs
    - executive misconduct likelihood
    - executive misconduct case count
    - executive perks in SOEs
    - excess executive compensation in SOEs
    - specific types of labor investment inefficiency in SOEs
  outcomeClass: [firm-real-outcomes, labor-careers-health]
  license: "Elsevier proprietary; 0929-1199/copyright 2026 Elsevier B.V. All rights are reserved, including those for text and data mining, AI training, and similar technologies (printed on PDF p. 1)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect; license confirmed all-rights-reserved from Crossref, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 36
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
    - { ref: R1, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "-0.046***, -0.048***, -0.062***, and -0.039*** across Table 4 cols 1-4; paper reports a 3.91% to 4.82% reduction", direction: negative, vsBenchmark: "SOEs relative to non-SOEs after the reform; Table 4 cols 1-4" }
    - { ref: R2, outcome: over-investment in labor (SOE), metric: coefficient, value: "-0.075*** (SOE x Restriction; 7.52% reduction in over-investment)", direction: negative, vsBenchmark: "over-investment subsample vs under-investment subsample; Table 4 cols 5-6" }
    - { ref: R3, outcome: executive compensation in SOEs, metric: coefficient, value: "-0.096*** (SOE x Restriction; 10.08% reduction, approximately 49,000 CNY/year)", direction: negative, vsBenchmark: "relative to non-SOEs pre- and post-reform; Table 3 Panel A col 1" }
    - { ref: R4, outcome: internal governance effectiveness in SOEs, metric: coefficient, value: "0.141** (SOE x Restriction; 14.05% increase in internal governance score)", direction: positive, vsBenchmark: "relative to non-SOEs; Table 5 col 1" }
    - { ref: R5, outcome: abnormal labor investment (high internal governance SOEs), metric: coefficient, value: "-0.056** (SOE x Restriction; 5.57% reduction in ALI for high-IG firms)", direction: negative, vsBenchmark: "high-IG vs low-IG subsamples; F-test p = 0.076; Table 5 cols 2-3" }
    - { ref: R6, outcome: CEO-to-rank-and-file pay disparity in SOEs, metric: coefficient, value: "-1.180*** (SE 0.374; SOE x Restriction on Dis. CEO and Rank-and-File)", direction: negative, vsBenchmark: "relative to non-SOEs; Table 6 Panel A col 1" }
    - { ref: R7, outcome: over-hiring in SOEs, metric: coefficient, value: "-0.087*** (SOE x Restriction; 8.73% reduction in over-hiring)", direction: negative, vsBenchmark: "reform reduces over-hiring specifically; under-hiring and over-/under-firing not significant; Table 8 col 1" }
    - { ref: R8, outcome: employee well-being and labor quality in SOEs, metric: pp-effect, value: "Labor quality +1.33% (Table 9 Panel A); stock ownership +7.63%, work safety +6.22%, vocational training +3.41%, director communication +3.73% (Table 9 Panel B)", direction: positive, vsBenchmark: "low-ALI firms (Table 9 Panel A); full sample (Table 9 Panel B)" }
    - { ref: R9, outcome: executive compensation in SOEs, metric: coefficient, value: "-0.124*** in high-corruption regions; -0.036 n.s. in low-corruption regions; F-test p = 0.008; high-corruption reduction 13.20% (about CNY 64,000/year)", direction: negative, vsBenchmark: "high- versus low-political-corruption subsamples; Table 3 Panel A cols 2-3 use 2011-2017 data" }
    - { ref: R10, outcome: pay-for-performance sensitivity of executive compensation, metric: coefficient, value: "SOE x Restriction x ROA = -1.135***; SOE x Restriction = -0.049**; F-test p = 0.000", direction: negative, vsBenchmark: "pay-for-performance sensitivity before versus after reform; Table 3 Panel A col 4" }
    - { ref: R11, outcome: executive perks in SOEs, metric: coefficient, value: "Perks coefficient = -0.114***; reported 12.08% reduction", direction: negative, vsBenchmark: "SOEs relative to non-SOEs before and after reform; Table 3 Panel A col 5" }
    - { ref: R12, outcome: excess executive compensation in SOEs, metric: coefficient, value: "Excess-compensation coefficient = -0.119***; reported 12.64% reduction", direction: negative, vsBenchmark: "SOEs relative to non-SOEs before and after reform; Table 3 Panel A col 6" }
    - { ref: R13, outcome: executive misconduct likelihood, metric: coefficient, value: "Misconduct-likelihood coefficient = -0.031*** (SE 0.010); reported reduction = 3.10%", direction: negative, vsBenchmark: "SOEs relative to non-SOEs; Table 3 Panel B col 1" }
    - { ref: R14, outcome: executive misconduct case count, metric: coefficient, value: "Misconduct-case-count coefficient = -0.161*** (SE 0.043); reported reduction = 16.09%", direction: negative, vsBenchmark: "SOEs relative to non-SOEs; Table 3 Panel B col 3" }
    - { ref: R15, outcome: executive misconduct likelihood, metric: coefficient, value: "High compensation interaction -0.041*** (SE 0.011); low compensation -0.014 n.s.; F-test p = 0.026; high-compensation reduction 4.14%", direction: negative, vsBenchmark: "high- versus low-compensation executives; Table 3 Panel B col 2" }
    - { ref: R16, outcome: executive misconduct case count, metric: coefficient, value: "High compensation interaction -0.213*** (SE 0.045); low compensation -0.074 n.s.; F-test p = 0.012; high-compensation case-count reduction 21.32%", direction: negative, vsBenchmark: "high- versus low-compensation executives; Table 3 Panel B col 4" }
    - { ref: R17, outcome: top-three-executive-to-rank-and-file pay disparity in SOEs, metric: coefficient, value: "-1.004*** (SE 0.334)", direction: negative, vsBenchmark: "relative to non-SOEs; Table 6 Panel B col 1" }
    - { ref: R18, outcome: all-top-executive-to-rank-and-file pay disparity in SOEs, metric: coefficient, value: "-0.335*** (SE 0.078)", direction: negative, vsBenchmark: "relative to non-SOEs; Table 6 Panel C col 1" }
    - { ref: R19, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "-0.020 n.s. in high-disparity firms; -0.057*** in low-disparity firms; F-test p = 0.042; reported low-disparity reduction 5.72%", direction: negative, vsBenchmark: "high- versus low-pay-disparity subsamples; Table 6 Panel B cols 2-3" }
    - { ref: R20, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "0.003 n.s. in high-disparity firms; -0.062*** in low-disparity firms; F-test p = 0.011; reported low-disparity reduction 6.24%", direction: negative, vsBenchmark: "high- versus low-pay-disparity subsamples; Table 6 Panel C cols 2-3" }
    - { ref: R21, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "Full-sample pre coefficients = -0.006, 0.017, -0.018, -0.022, 0.008; over-investment = -0.021, 0.024, -0.048, -0.073, -0.051; under-investment = -0.008, 0.018, -0.030, -0.021, 0.017; joint pre-period F-test p = 0.828, 0.400, 0.820, respectively; individual coefficients n.s.", direction: none, vsBenchmark: "pre-reform treatment-control trend equality; Table 7 Panel A" }
    - { ref: R22, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "Full-sample post coefficients -0.015, -0.043**, -0.047**, -0.081***, -0.037**; over-investment -0.077*, -0.104**, -0.118***, -0.197***, -0.102***; under-investment post coefficients n.s.", direction: negative, vsBenchmark: "dynamic post-reform estimates relative to the omitted event period; Table 7 Panel A" }
    - { ref: R23, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "Entropy-balanced full-sample estimates -0.043**, -0.051***, -0.040**, -0.034*; over-investment -0.092***; under-investment 0.022 n.s.", direction: negative, vsBenchmark: "unweighted baseline specifications versus entropy-balanced samples; Table 7 Panel B" }
    - { ref: R24, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "Alternative measure 2 coefficients -0.042***, -0.054***, -0.033** (N = 12,741 each)", direction: negative, vsBenchmark: "alternative industry-fixed-effect prediction measure; Table 7 Panel C cols 1-3" }
    - { ref: R25, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "Alternative measure 3 coefficients -0.023***, -0.024**, -0.017* (N = 11,558 each)", direction: negative, vsBenchmark: "alternative industry- and year-fixed-effect prediction measure; Table 7 Panel C cols 4-6" }
    - { ref: R26, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "-0.053***, -0.045***, -0.049***, -0.030**, -0.068** (over-investment), 0.012 n.s. (under-investment)", direction: negative, vsBenchmark: "additional industry, province, firm, industry-year, and province-year fixed effects; Table 7 Panel D" }
    - { ref: R27, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "Full sample beta* = -0.044, delta = 3.432; over-investment beta* = -0.086, delta = 3.156; both beta* estimates lie within the reported 95% intervals and both delta values exceed 1", direction: negative, vsBenchmark: "Oster omitted-variable-bias bounds; Table 7 Panel E" }
    - { ref: R28, outcome: rank-and-file employee compensation, metric: coefficient, value: "Current compensation -0.034 (SE 0.043); next-year compensation -0.055 (SE 0.046); both n.s.", direction: none, vsBenchmark: "rank-and-file compensation as a placebo for the social-comparison channel; Appendix E" }
    - { ref: R29, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "1,000 randomized-treatment draws; true ALI coefficient = -0.039 and true over-investment coefficient = -0.075, both in the left tail of placebo distributions", direction: negative, vsBenchmark: "randomized placebo-treatment coefficients centered near zero; Figure 2" }
    - { ref: R30, outcome: specific types of labor investment inefficiency in SOEs, metric: coefficient, value: "Under-firing = -0.011, under-hiring = 0.002, over-firing = 0.004; all n.s.", direction: none, vsBenchmark: "separate labor-investment categories; Table 8 cols 2-4" }
    - { ref: R31, outcome: abnormal labor investment in state-owned enterprises, metric: coefficient, value: "High-disparity coefficient = -0.015 n.s.; low-disparity coefficient = -0.047***; F-test p = 0.048; reported low-disparity reduction = 4.68%", direction: negative, vsBenchmark: "high- versus low-CEO-pay-disparity firms; Table 6 Panel A cols 2-3" }
    - { ref: R32, outcome: employee well-being and labor quality in SOEs, metric: coefficient, value: "Low-ALI SOE x Restriction = 0.013** (SE 0.007); high-ALI = -0.005 n.s. (SE 0.009); F-test p = 0.018", direction: positive, vsBenchmark: "low- versus high-ALI subsamples; Table 9 Panel A" }
    - { ref: R33, outcome: employee well-being and labor quality in SOEs, metric: coefficient, value: "SOE x Restriction = 0.076*** (SE 0.016); reported increase = 7.63%", direction: positive, vsBenchmark: "SOEs relative to non-SOEs; Table 9 Panel B col 1" }
    - { ref: R34, outcome: employee well-being and labor quality in SOEs, metric: coefficient, value: "SOE x Restriction = 0.062*** (SE 0.016); reported increase = 6.22%", direction: positive, vsBenchmark: "SOEs relative to non-SOEs; Table 9 Panel B col 2" }
    - { ref: R35, outcome: employee well-being and labor quality in SOEs, metric: coefficient, value: "SOE x Restriction = 0.034** (SE 0.015); reported increase = 3.41%", direction: positive, vsBenchmark: "SOEs relative to non-SOEs; Table 9 Panel B col 3" }
    - { ref: R36, outcome: employee well-being and labor quality in SOEs, metric: coefficient, value: "SOE x Restriction = 0.037** (SE 0.016); reported increase = 3.73%", direction: positive, vsBenchmark: "SOEs relative to non-SOEs; Table 9 Panel B col 4" }
  resultType: confirms
  relatesTo:
    - { cite: "Jung, Lee & Weber (2014)", relation: builds-on, note: "abnormal labor investment model (eq. 1) and over/under-investment decomposition method" }
    - { cite: "Cao and Rees (2020)", relation: extends, note: "extends the link between employee-friendly treatment and labor investment to executive pay restrictions" }
    - { cite: "Khedmati, Sualihu & Yawson (2020)", relation: extends, note: "extends the CEO-director tie determinant of labor investment to executive compensation as a governance lever" }
    - { cite: "Bebchuk and Fried (2003)", relation: tests, note: "tests the power-theory prediction that pay restrictions reduce managerial self-dealing (over-hiring) in SOEs" }
    - { cite: "Cheng, Lee & Shevlin (2016)", relation: builds-on, note: "adopts their measure of internal governance effectiveness (subordinate horizon + ability)" }
  openQuestions:
    - "Whether the effect generalizes beyond China's SOEs to private firms in other weak-institutional environments; the reform shock is specific to state ownership in China (p. 24)."
    - "Whether longer-run pay restrictions affect managerial effort or executive turnover, concerns raised in the paper but not measured in its 2009-2019 sample (pp. 2, 24)."
  replicationCode: { status: upon-request }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read PDF in full (28 pages, JCF vol 99 2026 102990); all locators confirmed against tables/figures in the PDF; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: (1) R1 Core results lower-bound corrected from -0.046 to -0.039 (Table 4 col 4 is the minimum across specs; paper text 3.91%-4.82% range aligns with -0.039 and -0.048, not -0.046); (2) eq. 5 spurious standalone Restriction term removed (PDF eq. 5 has only SOE×Restriction and SOE, unlike eqs. 7 and 9 which do include it separately)." }
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and augmented the Core results to 36 rows, added matching findings, and completed the mechanisms and numbered equations/specifications (1-15). These additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 36 Core results, equations 1-15, specifications, classification axes, findings, frontmatter, and surrounding prose against the source PDF. Corrected R1 coefficient/economic-effect presentation and R6's misplaced low-disparity ALI result; qualified mechanism summary, added sample window and locatable related-work mentions, and aligned resultType. All page cites are locatable. Table-locator pass (2026-10-04): none." }
  licenceVerification:
    - { source: "Crossref works/10.1016/j.jcorpfin.2026.102990", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] entries: content-version tdm with Elsevier TDM and tdmrep-license URLs, plus stm-asf policy URLs; no CC license entry; paywalled all-rights-reserved" }
---

**What this is.** A distilled skeleton of Cao, Hasan, Huang & Zhao (2026), "Pay restrictions and labor investment," *Journal of Corporate Finance* 99, 102990. Read [the original](https://doi.org/10.1016/j.jcorpfin.2026.102990) to replicate or extend. This summary is LLM-distilled, not human-verified, and not reproduced.

## TL;DR

Using China's 2014 SOE executive compensation reform as a quasi-natural experiment, the paper estimates a 3.91% to 4.82% post-reform reduction in abnormal labor investment (ALI) in SOEs relative to non-SOEs. The reduction is concentrated in over-investment rather than under-investment. Results are consistent with internal governance and reduced social comparison as channels: the reform narrows executive pay gaps, and ALI declines more in firms with higher internal governance (subsample difference p = 0.076) and lower executive-to-worker pay disparity. The reform also reduces over-hiring, improves labor quality among firms with lower ALI, and increases employee well-being (employee shares, work safety, vocational training, and director communication channels).

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Pay restrictions reduce SOE abnormal labor investment | Table 4 cols 1-4, p. 15 | SOE x Restriction = -0.046\*\*\*, -0.048\*\*\*, -0.062\*\*\*, and -0.039\*\*\*; paper reports a 3.91% to 4.82% reduction in ALI |
| R2 | Reduction concentrated in over-investment, not under-investment | Table 4 cols 5-6, p. 15 | SOE x Restriction = -0.075\*\*\* (over-invest); 0.003 n.s. (under-invest); F-test p < 0.001 |
| R3 | Reform cuts average SOE executive compensation | Table 3 Panel A col 1, p. 14 | SOE x Restriction = -0.096\*\*\*; 10.08% reduction (~49,000 CNY/year) |
| R4 | Reform increases internal governance effectiveness by 14.05% | Table 5 col 1, p. 16 | SOE x Restriction = 0.141\*\* on internal governance score |
| R5 | Higher internal governance firms see 5.57% reduction in ALI | Table 5 cols 2-3, p. 16 | SOE x Restriction = -0.056\*\* (high IG), -0.032 n.s. (low IG); F-test p = 0.076 |
| R6 | Reform reduces CEO-to-rank pay disparity in SOEs | Table 6 Panel A col 1, p. 17 | SOE x Restriction = -1.180\*\*\* (SE 0.374) |
| R7 | Reform reduces over-hiring by 8.73% | Table 8 col 1, p. 23 | SOE x Restriction = -0.087\*\*\*; under-hiring, over-firing, under-firing insignificant |
| R8 | Reform improves labor quality and employee well-being | Table 9, p. 23 | Labor quality +1.33% (col 1); stock ownership +7.63%, work safety +6.22%, training +3.41%, communication +3.73% |
| R9 | Compensation falls more in SOEs in high-corruption regions | Table 3 Panel A cols 2-3, p. 14 | SOE x Restriction = -0.124*** in high-corruption regions, -0.036 n.s. in low-corruption regions; F-test p = 0.008; reported pay reduction 13.20% (about CNY 64,000/year) in high-corruption regions; subsample covers 2011-2017 |
| R10 | The reform reduces the pay-for-performance sensitivity of SOE executives | Table 3 Panel A col 4, p. 14 | SOE x Restriction x ROA = -1.135***; SOE x Restriction = -0.049**; F-test p = 0.000 |
| R11 | The reform reduces SOE executive perks | Table 3 Panel A col 5, p. 14 | SOE x Restriction = -0.114***; reported reduction = 12.08% |
| R12 | The reform reduces excess SOE executive compensation | Table 3 Panel A col 6, p. 14 | SOE x Restriction = -0.119***; reported reduction = 12.64% |
| R13 | The reform reduces the likelihood of executive misconduct | Table 3 Panel B col 1, p. 14 | SOE x Restriction = -0.031*** (SE 0.010); reported reduction = 3.10% |
| R14 | The reform reduces the number of executive misconduct cases | Table 3 Panel B col 3, p. 14 | SOE x Restriction = -0.161*** (SE 0.043); reported reduction = 16.09% |
| R15 | Misconduct likelihood falls more for high-compensation executives | Table 3 Panel B cols 2, p. 14 | High-compensation interaction = -0.041*** (SE 0.011); low-compensation interaction = -0.014 n.s.; F-test p = 0.026; reported high-compensation reduction = 4.14% |
| R16 | Misconduct case counts fall more for high-compensation executives | Table 3 Panel B col 4, p. 14 | High-compensation interaction = -0.213*** (SE 0.045); low-compensation interaction = -0.074 n.s.; F-test p = 0.012; reported high-compensation reduction = 21.32% |
| R17 | The reform narrows top-three-executive to rank-and-file pay disparity | Table 6 Panel B col 1, p. 17 | SOE x Restriction = -1.004*** (SE 0.334) |
| R18 | The reform narrows all-top-executive to rank-and-file pay disparity | Table 6 Panel C col 1, p. 17 | SOE x Restriction = -0.335*** (SE 0.078) |
| R19 | ALI falls in low-disparity firms for the top-three-executive pay comparison | Table 6 Panel B cols 2-3, p. 17 | High-disparity coefficient = -0.020 n.s.; low-disparity coefficient = -0.057***; F-test p = 0.042; reported ALI reduction = 5.72% |
| R20 | ALI falls in low-disparity firms for the all-executive pay comparison | Table 6 Panel C cols 2-3, p. 17 | High-disparity coefficient = 0.003 n.s.; low-disparity coefficient = -0.062***; F-test p = 0.011; reported ALI reduction = 6.24% |
| R21 | Pre-reform event-study coefficients do not reject parallel trends | Table 7 Panel A, p. 19 | Joint pre-coefficient F-test p = 0.828 (full sample), 0.400 (over-investment), and 0.820 (under-investment); individual pre coefficients are insignificant |
| R22 | Event-study estimates turn negative after reform for ALI and over-investment | Table 7 Panel A, p. 19; Figure 1, p. 20 | Full-sample SOE x Post_1..Post_5 = -0.015, -0.043**, -0.047**, -0.081***, -0.037**; over-investment = -0.077*, -0.104**, -0.118***, -0.197***, -0.102***; under-investment post estimates are insignificant |
| R23 | The baseline ALI effect persists in entropy-balanced samples | Table 7 Panel B, p. 19 | Full-sample SOE x Restriction estimates = -0.043**, -0.051***, -0.040**, -0.034* across four weighted specifications; over-investment = -0.092***; under-investment = 0.022 n.s.; F-test p < 0.001 |
| R24 | The result persists under the first alternative ALI measure | Table 7 Panel C cols 1-3, p. 19 | Abnormal Labor Investment2 SOE x Restriction = -0.042***, -0.054***, -0.033** (N = 12,741 in each specification) |
| R25 | The result persists under the second alternative ALI measure | Table 7 Panel C cols 4-6, p. 19 | Abnormal Labor Investment3 SOE x Restriction = -0.023***, -0.024**, -0.017* (N = 11,558 in each specification) |
| R26 | The ALI effect is robust to alternative fixed-effect structures | Table 7 Panel D, pp. 19-20 | SOE x Restriction = -0.053***, -0.045***, -0.049***, -0.030**, -0.068** (over-investment), and 0.012 n.s. (under-investment) across the reported specifications |
| R27 | Oster bounds indicate the baseline estimate is unlikely to be driven by omitted variables | Table 7 Panel E, p. 20 | Full sample: beta* = -0.044 within [-0.063, -0.015], delta = 3.432; over-investment: beta* = -0.086 within [-0.121, -0.029], delta = 3.156; both classified “Unlikely” to reflect omitted-variable bias |
| R28 | The reform does not significantly change rank-and-file employee compensation | §4.5 footnote 23, p. 16; Appendix E, p. 30 | SOE x Restriction = -0.034 (SE 0.043) for current compensation and -0.055 (SE 0.046) for next-year compensation; both n.s. |
| R29 | Randomized-treatment placebo estimates center near zero, unlike the actual estimates | Figure 2, p. 22 | Across 1,000 placebo draws, the true ALI coefficient is -0.039 and the true over-investment coefficient is -0.075; both appear in the left tail of their placebo distributions |
| R30 | The reform has no significant effect on the other three labor-investment types | Table 8 cols 2-4, p. 23 | SOE x Restriction = -0.011 for under-firing, 0.002 for under-hiring, and 0.004 for over-firing; all n.s. |
| R31 | The CEO pay-disparity split shows a larger ALI reduction in low-disparity firms | Table 6 Panel A cols 2-3, p. 17 | High-disparity coefficient = -0.015 n.s.; low-disparity coefficient = -0.047***; F-test p = 0.048; reported low-disparity ALI reduction = 4.68% |
| R32 | Labor quality rises in low-ALI firms, with no significant increase in high-ALI firms | Table 9 Panel A, p. 23 | SOE x Restriction = 0.013** (SE 0.007) in low-ALI firms and -0.005 n.s. (SE 0.009) in high-ALI firms; F-test p = 0.018 |
| R33 | The reform increases employee stock ownership | Table 9 Panel B col 1, p. 23 | SOE x Restriction = 0.076*** (SE 0.016); reported increase = 7.63% |
| R34 | The reform increases work-safety management systems | Table 9 Panel B col 2, p. 23 | SOE x Restriction = 0.062*** (SE 0.016); reported increase = 6.22% |
| R35 | The reform increases vocational training for employees | Table 9 Panel B col 3, p. 23 | SOE x Restriction = 0.034** (SE 0.015); reported increase = 3.41% |
| R36 | The reform increases employee-director communication channels | Table 9 Panel B col 4, p. 23 | SOE x Restriction = 0.037** (SE 0.016); reported increase = 3.73% |

**Overall.** China's 2014 SOE executive compensation reform is associated with lower abnormal labor investment, primarily over-investment. The mechanism tests are consistent with stronger internal governance and reduced social comparison: the reform narrows executive pay gaps, and ALI declines more in higher-governance and lower executive-to-worker disparity subsamples. These patterns are not equally strong: the governance subsample difference has p = 0.076, while the three social-comparison splits have p-values from 0.011 to 0.048. Additional results show that the reform cuts over-hiring specifically, improves labor quality in lower-ALI firms, and increases employee well-being (employee shares, work safety, vocational training, and director communication channels).

## Theory / model

The paper has no formal theoretical model. It tests two competing predictions: pay caps may worsen labor-investment efficiency if they weaken managerial effort and retention, or improve it by limiting managerial rent extraction and strengthening oversight. The proposed channels are (i) internal governance, where closer compensation and horizon alignment lets subordinate executives monitor CEOs, and (ii) social comparison, where smaller executive-to-worker pay gaps improve fairness and employee cooperation. The 2014 central-government SOE pay reform is the quasi-natural shock: the treatment is SOE status interacted with the post-reform period, with 2014 excluded from the sample. The authors argue that firms cannot influence the Political Bureau directive (PDF §3.2.2, p. 8).

## Method

The design is a firm-panel difference-in-differences study. Abnormal labor investment is the absolute residual from an industry-by-year model of expected net hiring. Net Hire is the percentage change in employees. The paper's full prediction model (equation 1, PDF §3.2.1, p. 7) is:

$$
\begin{aligned}
\text{Net Hire}_{it} ={}& \alpha + \beta_1 \text{Sales Growth}_{i,t-1} + \beta_2 \text{Sales Growth}_{it} + \beta_3 \Delta\text{ROA}_{i,t-1} + \beta_4 \Delta\text{ROA}_{it} + \beta_5 \text{ROA}_{it} + \beta_6 \text{Size Rank}_{i,t-1} \\
&+ \beta_7 \Delta\text{Quick Ratio}_{i,t-1} + \beta_8 \Delta\text{Quick Ratio}_{it} + \beta_9 \text{Quick Ratio}_{i,t-1} + \beta_{10} \text{Leverage}_{i,t-1} + \beta_{11} \text{LossBin}_{1,i,t-1} + \beta_{12} \text{LossBin}_{2,i,t-1} + \beta_{13} \text{LossBin}_{3,i,t-1} + \beta_{14} \text{LossBin}_{4,i,t-1} + \beta_{15} \text{LossBin}_{5,i,t-1} + \varepsilon_{it} \tag{1}
\end{aligned}
$$

The residual's absolute value is Abnormal Labor Investment (ALI); a positive residual is over-investment and a negative residual is under-investment. Internal governance combines standardized subordinate-executive horizon and ability measures (equations 2-3, PDF §3.2.3, p. 8):

$$
\text{Executive Horizon}_{it} = 65 - \text{Average Age of Key Subordinate Executives}_{it} \tag{2}
$$

$$
\text{Executive Ability}_{it} = \frac{\text{Average Annual Compensation of Key Subordinate Executives}_{it}}{\text{Annual Compensation of CEO}_{it}} \tag{3}
$$

The excess-compensation residual comes from the following firm-level model with industry and year fixed effects (equation 4, PDF §3.2.5, p. 9):

$$
\begin{aligned}
\text{Executive Compensation}_{it} ={}& \alpha + \beta_1 \text{Firm Size}_{it} + \beta_2 \text{Leverage}_{it} + \beta_3 \text{ROA}_{it} + \beta_4 \text{ROA}_{i,t-1} + \beta_5 \text{Sales Growth}_{it} \\
&+ \beta_6 \text{Dual}_{it} + \beta_7 \text{SOE}_{it} + \beta_8 \text{Independent}_{it} + \text{Industry FE} + \text{Year FE} + \varepsilon_{it} \tag{4}
\end{aligned}
$$

The mechanism measures are the subordinate executives' monitoring horizon and compensation influence, and three executive-to-rank-and-file compensation ratios (CEO, top three paid executives, and all top executives; PDF §§3.2.3-3.2.4, pp. 8-9). The abnormal labor investment measure follows Jung, Lee & Weber (2014); the paper extends the employee-friendly treatment and labor-investment link in Cao and Rees (2020), and the CEO-director tie work in Khedmati, Sualihu & Yawson (2020). Its over-hiring prediction tests the power theory of Bebchuk and Fried (2003), and its internal-governance measure adopts Cheng, Lee & Shevlin (2016). The panel regressions use firm and year effects and firm-clustered standard errors unless a robustness table states a different fixed-effect structure. Continuous variables are winsorized at the 1st and 99th percentiles. The main sample contains 14,988 firm-year observations for 2,889 firms, 2009-2019 excluding 2014 (PDF §3.1, p. 7; Table 1, p. 8).

## Empirical specifications

The policy-effect regressions first test compensation outcomes (equation 5), then whether the reform changes pay-for-performance sensitivity (equation 6). The misconduct specifications are equations 7-8 (PDF §3.2.7, pp. 10-11):

$$
\text{Compensation Variables}_{it} = \alpha + \beta_1(\text{SOE}\times\text{Restriction})_{it} + \beta_2\text{SOE}_{it} + \gamma\text{Control Variables}_{i,t-1} + \text{Fixed Effects} + \varepsilon_{it} \tag{5}
$$

$$
\begin{aligned}
\text{Executive Compensation}_{it} ={}& \alpha + \beta_1(\text{SOE}\times\text{Restriction}\times\text{ROA})_{it} + \beta_2(\text{SOE}\times\text{Restriction})_{it} + \beta_3(\text{Restriction}\times\text{ROA})_{it} \\
&+ \beta_4(\text{SOE}\times\text{ROA})_{it} + \beta_5\text{SOE}_{it} + \beta_6\text{ROA}_{it} + \gamma\text{Control Variables}_{i,t-1} + \text{Fixed Effects} + \varepsilon_{it} \tag{6}
\end{aligned}
$$

$$
\text{Executive Misconduct}_{it} = \alpha + \beta_1(\text{SOE}\times\text{Restriction})_{it} + \beta_2\text{SOE}_{it} + \beta_3\text{Restriction}_{it} + \gamma\text{Control Variables}_{it} + \text{Fixed Effects} + \varepsilon_{it} \tag{7}
$$

$$
\begin{aligned}
\text{Executive Misconduct}_{it} ={}& \alpha + \beta_2(\text{SOE}\times\text{Restriction}\times\text{High Compensation})_{it} + \beta_3(\text{SOE}\times\text{Restriction}\times\text{Low Compensation})_{it} \\
&+ \beta_4\text{Executive Compensation}_{it} + \beta_5\text{SOE}_{it} + \gamma\text{Control Variables}_{it} + \text{Fixed Effects} + \varepsilon_{it} \tag{8}
\end{aligned}
$$

In equations 5-8, the outcomes are executive compensation, perks, excess compensation, pay-for-performance, or misconduct (dummy or case count), as applicable. Models use firm and year fixed effects and firm-clustered robust standard errors. Equation 5 and equation 6 use lagged controls; equations 7-8 use contemporaneous controls. The compensation/misconduct sample sizes vary by outcome and table: Table 3 reports 9,701-14,939 observations (PDF Table 3, p. 14).

The baseline ALI difference-in-differences specification is equation 9 (PDF §3.2.7, p. 11):

$$
\text{Abnormal Labor Investment}_{it} = \alpha + \beta_1(\text{SOE}\times\text{Restriction})_{it} + \beta_2\text{SOE}_{it} + \beta_3\text{Restriction}_{it} + \gamma\text{Control Variables}_{it} + \text{Fixed Effects} + \varepsilon_{it} \tag{9}
$$

Equation 9 includes firm, industry, and year fixed effects in the main specification; standard errors are robust and clustered by firm. Controls include leverage, book-to-market, ROA, quick ratio, firm age and size, fixed assets, Herfindahl index, institutional share, SA index, and CEO gender, age, and education. The main sample is 14,988 firm-years (Table 4, p. 15); the reported columns vary fixed effects and sample splits.

Equations 10-12 estimate the governance channel, with equation 10 using internal governance as the outcome and equations 11-12 estimating ALI separately above and below the median governance score (PDF §3.2.7, p. 11):

$$
\text{Internal Governance}_{it} = \alpha + \beta_1(\text{SOE}\times\text{Restriction})_{it} + \beta_2\text{SOE}_{it} + \beta_3\text{Restriction}_{it} + \gamma\text{Control Variables}_{it} + \text{Fixed Effects} + \varepsilon_{it} \tag{10}
$$

$$
\begin{aligned}
\text{ALI}_{(i,t)_{\text{High I.G.}}} ={}& \alpha + \beta_1(\text{SOE}\times\text{Restriction})_{(i,t)_{\text{High I.G.}}} + \beta_2\text{SOE}_{(i,t)_{\text{High I.G.}}} \\
&+ \gamma\text{Controls}_{(i,t)_{\text{High I.G.}}} + \text{Fixed Effects} + \varepsilon_{(i,t)_{\text{High I.G.}}} \tag{11}
\end{aligned}
$$

$$
\begin{aligned}
\text{ALI}_{(i,t)_{\text{Low I.G.}}} ={}& \alpha + \beta_1(\text{SOE}\times\text{Restriction})_{(i,t)_{\text{Low I.G.}}} + \beta_2\text{SOE}_{(i,t)_{\text{Low I.G.}}} \\
&+ \gamma\text{Controls}_{(i,t)_{\text{Low I.G.}}} + \text{Fixed Effects} + \varepsilon_{(i,t)_{\text{Low I.G.}}} \tag{12}
\end{aligned}
$$

Equations 10-12 include firm and year fixed effects and firm-clustered robust standard errors. The governance outcome sample is 13,088 firm-years; each median-split ALI sample has 6,544 observations (Table 5, p. 16).

Equations 13-15 test social comparison, where equation 13 uses each executive-to-worker disparity measure and equations 14-15 estimate ALI in high- and low-disparity subsamples (PDF §3.2.7, p. 11):

$$
\text{Social Comparison Variables}_{it} = \alpha + \beta_1(\text{SOE}\times\text{Restriction})_{it} + \beta_2\text{SOE}_{it} + \beta_3\text{Restriction}_{it} + \gamma\text{Control Variables}_{it} + \text{Fixed Effects} + \varepsilon_{it} \tag{13}
$$

$$
\begin{aligned}
\text{ALI}_{(i,t)_{\text{High S.C.}}} ={}& \alpha + \beta_1(\text{SOE}\times\text{Restriction})_{(i,t)_{\text{High S.C.}}} + \beta_2\text{SOE}_{(i,t)_{\text{High S.C.}}} \\
&+ \gamma\text{Controls}_{(i,t)_{\text{High S.C.}}} + \text{Fixed Effects} + \varepsilon_{(i,t)_{\text{High S.C.}}} \tag{14}
\end{aligned}
$$

$$
\begin{aligned}
\text{ALI}_{(i,t)_{\text{Low S.C.}}} ={}& \alpha + \beta_1(\text{SOE}\times\text{Restriction})_{(i,t)_{\text{Low S.C.}}} + \beta_2\text{SOE}_{(i,t)_{\text{Low S.C.}}} \\
&+ \gamma\text{Controls}_{(i,t)_{\text{Low S.C.}}} + \text{Fixed Effects} + \varepsilon_{(i,t)_{\text{Low S.C.}}} \tag{15}
\end{aligned}
$$

Equations 13-15 also use firm and year fixed effects and firm-clustered robust standard errors. Equation 13 has 14,316 observations for each of the three disparity measures; each high- and low-disparity subsample has 7,158 observations (Table 6, p. 17). The high/low splits test whether the predicted social-comparison channel is concentrated among firms with initially smaller pay gaps.

The robustness checks include a dynamic event study, entropy balancing, alternative ALI residual constructions, additional fixed-effect structures, and Oster bounds (Table 7, pp. 19-20). The parallel-trend event-study estimates show insignificant pre-period coefficients; the placebo exercise randomizes treatment events 1,000 times (Figure 2, p. 22). The paper also reports that using 2015 rather than 2014 as the event year leaves the main results consistent (PDF §3.2.2, p. 8).

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

Copyright 2026 Elsevier B.V. All rights reserved. This page reproduces no substantial text from the article; results, magnitudes, and table references are extracted for scientific commentary under fair-use principles (extract-only). The article is paywalled; access requires a subscription to the Journal of Corporate Finance or institutional Elsevier access. This summary is LLM-distilled by paper-distiller (gpt-6-luna) and has not been human-verified or independently reproduced.
