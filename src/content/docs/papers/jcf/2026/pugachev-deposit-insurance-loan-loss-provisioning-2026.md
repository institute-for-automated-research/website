---
title: "Deposit Insurance and LLP Discretion: Pugachev, Robin, Wang & Yang (2026)"
description: >-
  Distilled: The 2008 EESA expansion of US deposit insurance from $100,000 to
  $250,000 caused affected banks to provision more conservatively, increasing
  discretionary loan loss provision by approximately 3.4 basis points of lagged
  loans (38% of the mean LLP level), with effects concentrated at banks that
  increased risk most and faced the most regulatory scrutiny. Journal of Corporate
  Finance vol. 99, 2026, paywalled. Seven core results with source locators, the
  LLP prediction model, and the DiD specifications. LLM-distilled; not
  human-verified.
sidebar:
  label: Pugachev-Robin-Wang-Yang 2026
  order: 1
tags: [paper-summary, banking, deposit-insurance, accounting-conservatism,
       loan-loss-provision, panel-regression, difference-in-differences,
       peer-reviewed, unreplicated, data:fdic-sdi, data:census, data:fhfa-hpi]
paper:
  authors: Leo Pugachev, Ashok Robin, Dilin Wang, Rong Yang
  authorList:
    - { family: Pugachev, given: Leo, affiliation: "University of Missouri-St. Louis" }
    - { family: Robin, given: Ashok, affiliation: "Rochester Institute of Technology" }
    - { family: Wang, given: Dilin, orcid: "0000-0003-0395-0768", affiliation: "Grand Valley State University" }
    - { family: Yang, given: Rong, orcid: "0000-0002-1394-3644", affiliation: "Rochester Institute of Technology" }
  year: 2026
  venue: Journal of Corporate Finance 99, 2026, article 102995
  venueShort: J. Corp. Finance 2026
  tier: field
  doi: 10.1016/j.jcorpfin.2026.102995
  jel:
    codes: [G18, G21, G38, M43]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Banking stability, regulation, efficiency", "Credit Risk and Financial Regulations", "Economic theories and models"]
  dataAccess: public
  outcome:
    - discretionary loan loss provision (LLP conservatism)
    - conservative vs. opportunistic LLP provisioning behavior
  outcomeClass: [bank-accounting-conservatism]
  license: "© 2026 Elsevier B.V. All rights reserved, including text and data mining, AI training, and similar technologies (confirmed via Crossref: content-version tdm, URL https://www.elsevier.com/tdm/userlicense/1.0/, start 2026-06-01; no CC license present)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect; paywalled licence confirmed via Crossref DOI metadata 2026-06-26)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression, matching]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [moral-hazard, information-asymmetry, regulatory-discipline]
  scope:
    region: US
    assetClass: US commercial bank loans
    period: 2005-Q4..2011-Q4
    frequency: quarterly
    dataType: [accounting, administrative]
    granularity: [firm]
    n: "9,568 bank-quarters (314 treated, 74 control banks, PSM sample); broad panel 123,310 bank-quarters"
  findings:
    - { ref: R1, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "INSDEP = 1.880*** (t = 7.857); 123,310 obs., 75-quarter broad panel 1999-2018 (Table 4, Col. 1, p. 10)", direction: positive }
    - { ref: R2, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "TREATPOST = 0.336*** (t = 2.769); ~3.4 bps of lagged loans; 38% of mean LLP of 8.88 bps (Table 5, Col. 1, p. 11)", direction: positive }
    - { ref: R3, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Q5NIDEPPOST = 0.577** (t = 2.323); highest newly-insured-deposit-share quintile (Table 7, Col. 1, p. 13)", direction: positive, vsBenchmark: "monotone across DI-exposure quintiles (Fig. 4, p. 13)" }
    - { ref: R4, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Q5NPLPOST = 2.442*** (t = 6.878); highest NPL-increase quintile (Table 7, Col. 3, p. 13)", direction: positive, vsBenchmark: "risk channel via NPL; ~7x the full-sample TREATPOST coefficient" }
    - { ref: R5, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Q1ZSCOREPOST = 1.232*** (t = 4.400); largest z-score decline quintile (Table 7, Col. 2, p. 13)", direction: positive, vsBenchmark: "risk channel via z-score; ~4x the full-sample TREATPOST coefficient" }
    - { ref: R6, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "Q1T1CAPITALPOST = 0.635** (t = 2.028); least-capitalized quintile (Table 7, Col. 4, p. 13)", direction: positive, vsBenchmark: "regulatory scrutiny channel via Tier 1 capital" }
    - { ref: R7, outcome: "discretionary loan loss provision (LLP conservatism)", metric: coefficient, value: "TREATPOSTDLLP<0 = 0.440*** (t = 2.728) for opportunistic pre-EESA banks; POSTHPRE_DLLP = -0.545** (t = -2.413) for most-conservative pre-EESA banks (Table 6, Cols. 1 and 4, p. 12)", direction: positive, vsBenchmark: "only opportunistic pre-EESA banks shift toward conservatism; already-conservative banks do not" }
  resultType: new-finding
  relatesTo:
    - { cite: "Diamond and Dybvig (1983)", doi: '10.1086/261155', relation: builds-on, note: "foundational DI theory: deposit insurance prevents bank runs by converting deposits to a risk-free asset, shifting monitoring from depositors to the insurer" }
    - { cite: "Calomiris and Jaremski (2019)", doi: '10.1111/jofi.12753', relation: extends, note: "DI incentivizes bank risk-taking and removes market discipline; this paper adds accounting conservatism as a behavioral response not previously documented" }
    - { cite: "Nicoletti (2018)", doi: '10.1016/j.jacceco.2018.05.003', relation: builds-on, note: "LLP prediction model adapted with bank fixed effects to construct the DLLP discretion measure (Eq. 1, p. 4)" }
    - { cite: "Beatty and Liao (2014)", doi: '10.1016/j.jacceco.2014.08.009', relation: builds-on, note: "LLP discretion framework and regression specification underlying the DLLP construction" }
    - { cite: "Lambert et al. (2017)", relation: builds-on, note: "method for estimating newly insured deposits from the EESA ceiling increase; used to construct the NIDEP intensive-margin exposure variable" }
    - { cite: "Huang (2021)", doi: '10.1016/j.jaccpubpol.2021.106876', relation: tests, note: "deregulation led public banks to accept less conservative accounting from borrowers; this paper finds the converse (re-regulation via DI increases conservatism)" }
    - { cite: "Huizinga and Laeven (2012)", doi: '10.1016/j.jfineco.2012.06.008', relation: tests, note: "LLP discretion rises during the financial crisis; the paper uses matched control banks to disentangle DI effects from the crisis" }
  openQuestions:
    - "Whether DI effects on LLP conservatism generalize to international DI regimes and non-FDIC settings (p. 20, conclusion)"
    - "Whether DI affects other dimensions of bank accounting discretion beyond LLP provisioning, such as asset impairments, fair-value elections, or disclosure timeliness (p. 20)"
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (pp. 1-24 incl. appendices and references); seven core results extracted from Tables 4-7; equations transcribed from pp. 4 and 8. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 7 Core results rows confirmed correct (Tables 4-7); Eqs. 1-3 verified term-by-term; fixed: JEL code G38 added (was missing from [G18, G21, M43]; PDF title page shows G18, G21, G38, M43)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jcorpfin.2026.102995", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=tdm, URL=https://www.elsevier.com/tdm/userlicense/1.0/, delay-in-days=0, start=2026-06-01; no open-access or CC license block; paywalled" }
---

**What this is.** The paper's core results, the hypotheses it tests, the LLP prediction model used to measure accounting discretion, and the difference-in-differences specifications: enough to know what it found and how, without reading all 24 pages. To replicate or extend it, read the full source at [doi.org/10.1016/j.jcorpfin.2026.102995](https://doi.org/10.1016/j.jcorpfin.2026.102995).

## TL;DR

The paper studies whether the Emergency Economic Stabilization Act (EESA) of 2008, which increased the FDIC deposit insurance ceiling from $100,000 to $250,000, changed bank accounting behavior. It uses a difference-in-differences design, exploiting the fact that 126 Massachusetts state-chartered savings banks and cooperatives were already fully insured by private state deposit insurance (DIF/SIF) and thus experienced no change in coverage. Relative to these controls, banks exposed to the EESA shock shift toward more conservative (income- and capital-reducing) discretionary loan loss provisioning. The effect is approximately 3.4 basis points of lagged loans (38% of the mean LLP level). Effects are strongest for banks that increased risk most and for those subject to the greatest regulatory scrutiny, consistent with two channels: DI-induced risk-taking prompting demand for conservative reporting, and heightened regulator incentives once the insurer's exposure rises.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. All regressions include bank and quarter fixed effects with standard errors clustered by bank. DLLP is the discretionary component of LLP scaled to units where each unit = 10 basis points of lagged loan portfolio (LLP multiplied by 1,000).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | DI coverage fraction (INSDEP) positively predicts conservative LLP in broad 75-quarter panel | Table 4, Col. 1, p. 10 | INSDEP = 1.880\*\*\* (t = 7.857); n = 123,310 bank-quarters; result holds excluding crisis years and in post-EESA subsample |
| R2 | Treated banks shift to more conservative DLLP relative to controls after EESA (main DiD result) | Table 5, Col. 1, p. 11 | TREATPOST = 0.336\*\*\* (t = 2.769); equivalent to ~3.4 bps of lagged loans; 38% of the mean LLP level of 8.88 bps |
| R3 | Banks with highest fraction of newly insured deposits shift most toward conservatism (intensive margin) | Table 7, Col. 1, p. 13; Fig. 4, p. 13 | Q5NIDEPPOST = 0.577\*\* (t = 2.323); DLLP change is monotone across DI-exposure quintiles |
| R4 | Banks that increase nonperforming loans most post-EESA shift most toward conservatism (risk channel) | Table 7, Col. 3, p. 13 | Q5NPLPOST = 2.442\*\*\* (t = 6.878); approximately seven times the full-sample baseline coefficient |
| R5 | Banks whose z-score falls most post-EESA shift most toward conservatism (risk channel) | Table 7, Col. 2, p. 13 | Q1ZSCOREPOST = 1.232\*\*\* (t = 4.400); approximately four times the full-sample baseline coefficient |
| R6 | Least-capitalized banks shift most toward conservatism (regulatory scrutiny channel) | Table 7, Col. 4, p. 13 | Q1T1CAPITALPOST = 0.635\*\* (t = 2.028); consistent with regulators focusing on banks closest to the default boundary |
| R7 | Among treated banks, only those provisioning opportunistically pre-EESA shift toward conservatism; pre-conservative banks do not shift or shift back | Table 6, Cols. 1 and 4, p. 12 | TREATPOSTDLLP<0 = 0.440\*\*\* (t = 2.728); POSTHPRE\_DLLP = -0.545\*\* (t = -2.413); consistent with strategic constraints on banks already at or past their conservatism target |

**Overall (paper's conclusion).** DI expansion increases conservative LLP discretion through two non-mutually exclusive channels: the risk-taking channel (DI-induced moral hazard leads banks to take more risk, prompting creditors and regulators to demand conservative accounting) and the regulatory scrutiny channel (the insurer's larger exposure heightens diligence). The finding contrasts with Huang (2021), who shows that deregulation reduced accounting conservatism among public bank borrowers; here the regulatory tightening from expanded DI moves bank provisioning in the opposite direction. From a policy perspective, this suggests US bank regulators provide sufficient monitoring to limit the moral hazard problem associated with DI, because the risk-taking behavior induced by DI is mitigated through the accounting channel.

## Theory / model

The paper has no formal structural model. It develops two hypotheses and an identification strategy.

**H1** (p. 4): Banks that experience greater DI coverage adopt more conservative LLP discretion relative to other banks. The prediction follows from two mechanisms that DI activates simultaneously:

1. *Risk channel*: DI reduces depositor monitoring incentives, allowing banks to take more risk, as Calomiris and Jaremski (2019) document across US banking history. Riskier banks face greater demand from creditors and equity-holders for conservative accounting (loss recognition that lowers reported income and erodes capital), as established by Beatty and Liao (2014), Kim et al. (2013), and Balakhrishnan et al. (2016).

2. *Regulatory scrutiny channel*: DI shifts the monitoring role from depositors to bank regulators (the FDIC). Regulators are known to prefer conservative accounting (Qiang (2007), Lobo and Zhou (2006)), and DI expansion increases their incentive to enforce conservative practices as their exposure grows.

**Identification strategy.** The paper exploits the EESA of 2008, which increased the FDIC deposit insurance ceiling from $100,000 to $250,000 per account. Diamond and Dybvig (1983) established that DI stabilizes banking systems by converting deposits to a risk-free asset; the EESA shock re-prices the coverage for roughly all US banks. The key identification assumption is that Massachusetts state-chartered savings banks and cooperatives are unaffected by EESA: their deposits were already fully insured by private state schemes (DIF/SIF) initiated in the 1930s. Assignment to treated vs. control status is thus pre-determined by a decision to incorporate in Massachusetts as a state-chartered savings or cooperative institution, typically 200 years before EESA (p. 2), satisfying the exogeneity requirement for DiD.

To improve comparability, the paper applies propensity score matching (PSM) on 22 pre-shock bank characteristics, selecting treated banks that resemble controls on observable traits. Pre-shock parallel trends in DLLP are documented in Figure 1 (p. 8), supporting DiD validity. A battery of placebo tests and three alternative control samples (non-Massachusetts state-chartered savings banks; Massachusetts federally chartered savings banks; Massachusetts state-chartered commercial banks) confirm robustness.

## Method

The method has two steps: constructing the discretionary LLP measure, then running the DiD.

**Step 1: LLP discretion (Eq. 1, p. 4).** Following Nicoletti (2018) with bank fixed effects added, the paper estimates a predicted LLP for each bank-quarter from its loan portfolio fundamentals:

$$
\text{LLP}_{b,t} = \alpha_1 \text{DNPL}_{b,t+1} + \alpha_2 \text{DNPL}_{b,t} + \alpha_3 \text{DNPL}_{b,t-1} + \alpha_4 \text{DNPL}_{b,t-2} + \alpha_5 \text{EBLLP}_{b,t}
$$

$$
+ \alpha_6 \text{TIER1}_{b,t-1} + \alpha_7 \text{LSIZE}_{b,t-1} + \alpha_8 \text{DLOAN}_{b,t} + \mu_b + \tau_t + \varepsilon_{b,t} \tag{1}
$$

where LLP is scaled to 1,000 bps of lagged loans; subscripts $$b$$ and $$t$$ index bank and quarter; $$\text{DNPL}$$ captures changes in nonperforming loans; $$\text{EBLLP}$$ is earnings before LLP and taxes; $$\text{TIER1}$$ is the Tier 1 capital ratio; $$\text{LSIZE}$$ is log assets; $$\text{DLOAN}$$ is loan growth; $$\mu_b$$ are bank fixed effects; $$\tau_t$$ are quarter fixed effects. Appendix B (p. 22) reports coefficient estimates. The residuals from Eq. (1), denoted $$\text{DLLP}_{b,t}$$, measure discretionary LLP: positive (negative) values indicate more conservative (opportunistic) provisioning than fundamentals predict.

**Step 2: Broad-sample panel regression (Eq. 2, p. 8).** To establish the motivating association before the DiD, the paper estimates:

$$
\text{DLLP}_{b,t} = \beta_1 \text{INSDEP}_{b,t} + \gamma' \text{Controls} + \mu_b + \tau_t + \varepsilon_{b,t} \tag{2}
$$

where $$\text{INSDEP}_{b,t}$$ is the fraction of bank $$b$$'s deposits below the FDIC insurance limit. $$\beta_1$$ measures the contemporaneous relationship between DI coverage and LLP conservatism over the full 75-quarter broad panel (n = 123,310 bank-quarters). Because $$\text{DLLP}$$ is a residual used as a dependent variable, the paper follows Chen et al. (2018) and includes all first-stage controls in the second-stage regression to mitigate bias from using residuals as dependent variables.

## Empirical specifications

**Main DiD specification.** In Eq. (2), $$\text{INSDEP}$$ is replaced by the treatment indicator:

$$
\text{DLLP}_{b,t} = \beta_1 \text{TREATPOST}_{b,t} + \gamma' \text{Controls} + \mu_b + \tau_t + \varepsilon_{b,t} \tag{3}
$$

where $$\text{TREATPOST}_{b,t} = 1$$ for all banks in the PSM-matched treated sample in every quarter after 3Q2008 (the EESA passage date). Controls include past, present, and future changes in nonperforming loans ($$\text{DNPL}$$), earnings before LLP ($$\text{EBLLP}$$), Tier 1 capital ($$\text{TIER1}$$), log assets ($$\text{LSIZE}$$), and loan growth ($$\text{DLOAN}$$). All continuous variables are winsorized at 1% tails. Standard errors are clustered by bank. Bank and quarter fixed effects are included in all specifications.

Sample period: 4Q2005-4Q2011 (12 quarters before and 12 quarters after EESA). Final PSM sample: 9,568 bank-quarters (314 treated, 74 control banks). Observations require both periods to exist (no survivorship-biased exits), total assets above $25 million, no quarterly asset growth above 10% (to exclude acquisition-driven changes), and at most 25% missing values.

**Intensive-margin specification.** To test whether effects scale with DI exposure, $$\text{TREATPOST}$$ is replaced by $$\text{Q5NIDEPPOST}$$, an indicator for banks in the highest quintile of the fraction of 3Q2008 deposits in the $100K-$250K range (the newly insured band). Following Lambert et al. (2017), the paper estimates newly insured deposits as the value of 3Q2009 deposits above the $250K ceiling minus the value of 3Q2008 deposits above the $100K ceiling, scaled by 3Q2008 total deposits. Table 7 Column 1 (p. 13) reports results from the treated-bank sample only; control banks are replaced by lower-exposure treated banks.

**Channel specifications.** To decompose mechanisms, $$\text{TREATPOST}$$ is interacted with quintile indicators for four cross-sectional variables measured pre-to-post EESA: change in z-score ($$\text{Q1ZSCOREPOST}$$), change in NPL ($$\text{Q5NPLPOST}$$), Tier 1 capital pre-EESA ($$\text{Q1T1CAPITALPOST}$$), and bank size pre-EESA ($$\text{Q5SIZEPOST}$$). These indicators equal one for banks in the highest risk-change or regulatory-scrutiny quintile. Table 7 Columns 1-5 (p. 13) report each interaction separately; Column 6 includes all interactions simultaneously.

**Pre-shock heterogeneity.** Table 6 (p. 12) adds $$\text{TREATPOSTDLLP<0}$$, which interacts $$\text{TREATPOST}$$ with an indicator for banks with negative average pre-EESA DLLP (opportunistic provisioners). This tests whether the shift toward conservatism is concentrated in banks that had room to become more conservative.

**Robustness.** Three alternative DLLP constructions (Kanagaretnam et al. 2010; Bushman and Williams 2012; Basu et al. 2020) and three alternative control samples yield similar $$\beta_1$$ estimates (Table 8, p. 15-16). Placebo tests using randomly assigned treatment or placebo event windows yield insignificant coefficients. The crisis period (2007-2010) is also excluded in one robustness column to address the concern raised by Huizinga and Laeven (2012) that LLP discretion systematically rises during financial crises; the TREATPOST coefficient remains similar in the non-crisis subsample.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| FDIC Statistics on Depository Institutions (SDI) | Main bank financial data: LLP, nonperforming loans, earnings, Tier 1 capital, total assets, loan balances, deposit composition (core, large, demand deposits), securities, write-offs; also TAG participation | no page yet |
| Census Bureau | County-level unemployment rate (UNEMP) for bank's main office county; matching covariate | no page yet |
| Federal Housing Finance Agency (FHFA) | County-level housing price index (LHPI) for bank's main office county; matching covariate | [FHFA House Price Index](/wiki/datasets/fhfa-hpi/) |
| U.S. Treasury | TARP Capital Purchase Program participation indicator; matching covariate | no page yet |

Sample: 4Q2005-4Q2011 (PSM baseline). Broad panel for motivating regressions: 1999-2018 (75 quarters, 123,310 observations). Data availability statement: "Data are available from the public sources cited in the text" (p. 22).

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jcorpfin.2026.102995) if you are: studying how banking regulation affects accounting discretion; designing DiD studies using EESA as a natural experiment for DI-related hypotheses; comparing the Nicoletti (2018) and Beatty and Liao (2014) LLP discretion constructions; or investigating whether regulatory intervention can attenuate moral hazard from deposit insurance. The exact PSM procedure (22 matching variables, Table 2, p. 7) and the placebo designs (Table 8, p. 15-16) are important for replication.

## Attribution and rights

Source: peer-reviewed, *Journal of Corporate Finance* 99, 2026, article 102995. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The paper is paywalled (© 2026 Elsevier B.V. All rights reserved); only textual extract is provided here.

> Pugachev, Leo, Ashok Robin, Dilin Wang, and Rong Yang. "Deposit insurance and
> discretion in loan loss provisioning." *Journal of Corporate Finance* 99 (2026): 102995.
> DOI: [10.1016/j.jcorpfin.2026.102995](https://doi.org/10.1016/j.jcorpfin.2026.102995).
> © 2026 Elsevier B.V. All rights reserved. Extract-only; not reproduced.
