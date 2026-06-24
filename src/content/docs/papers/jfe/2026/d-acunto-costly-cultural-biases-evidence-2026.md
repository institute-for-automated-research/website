---
title: "How Costly Are Cultural Biases: D'Acunto, Ghosh & Rossi (2026)"
description: >-
  Distilled: Using a P2P lending platform in India paired with a robo-advising
  tool, D'Acunto, Ghosh, and Rossi show that unassisted lenders discriminate
  against out-group (Muslim) and lower-caste (Shudra) borrowers, facing 8%
  higher defaults and up to 7.3 pp lower returns as a result. Robo-advising
  reduces both biases and improves lender-level returns by 4.5 to 7.3 pp,
  with biased beliefs as the dominant mechanism over taste-based discrimination.
  Journal of Financial Economics 2026, CC BY 4.0. Eight core results with
  source locators, datasets used, and the estimating equations.
sidebar:
  label: "D'Acunto-Ghosh-Rossi 2026"
  order: 1
tags: [paper-summary, cultural-finance, discrimination, fintech, robo-advising,
       peer-to-peer-lending, behavioral-finance, social-capital, panel-regression,
       open-access, cc-by, peer-reviewed, unreplicated, data:faircent]
paper:
  authors: Francesco D'Acunto, Pulak Ghosh, Alberto G. Rossi
  authorList:
    - { family: D'Acunto, given: Francesco, orcid: "0000-0001-8543-3873", affiliation: Georgetown University }
    - { family: Ghosh, given: Pulak, orcid: "0000-0003-4775-4179", affiliation: Indian Institute of Management Bangalore }
    - { family: Rossi, given: Alberto G., orcid: "0000-0002-4100-0870", affiliation: Georgetown University }
  year: 2026
  venue: Journal of Financial Economics 175 (2026) 104202
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104202
  jel:
    codes: [G21, G41, J71]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics: ['Culture, Economy, and Development Studies', 'Experimental Behavioral Economics Studies', 'Language and cultural evolution']
  dataAccess: proprietary-confidential
  outcome:
    - probability of lending to out-group (Muslim) borrowers
    - loan default rate
    - lender-level loan returns
  outcomeClass: [credit-supply, credit-risk]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-11-08; corroborated by artifact p.1 CC BY notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF (Elsevier ScienceDirect, CC BY 4.0; doi.org/10.1016/j.jfineco.2025.104202; 2026-06-24)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 8
  citedByCount: 2
  introducesData: true
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression]
    identification: selection-on-observables
  contributionType: [new-fact, measurement]
  mechanisms: [behavioral-bias, disparate-treatment]
  scope:
    region: India
    assetClass: P2P consumer loans
    period: 2018-01..2020-03
    frequency: monthly
    dataType: [administrative, other]
    granularity: [individual, transaction]
    n: "113,283 lender-borrower-loan triads (2,818 unique lenders); 62,831 in caste sub-sample"
  findings:
    - ref: R1
      outcome: probability of lending to out-group (Muslim) borrowers
      metric: pp-effect
      value: "-5.8 pp (Hindu Lender coefficient = -0.058***, t=-3.52, Table 2 col 1, p.11)"
      direction: negative
      vsBenchmark: "vs. Muslim lenders' 18% baseline share of Muslim borrowers"
    - ref: R2
      outcome: probability of lending to out-group (Muslim) borrowers
      metric: pp-effect
      value: "+4.5 pp for Hindu lenders after Auto Invest (Hindu Lender x Auto Invest = 0.045**, t=2.51, Table 2 col 1, p.11)"
      direction: positive
      vsBenchmark: "relative to unassisted Hindu lenders; post-adoption shares equalize across lender religions"
    - ref: R3
      outcome: loan default rate
      metric: pp-effect
      value: "Muslim borrowers in Hindu lender portfolios 2.4 pp less likely to default (Muslim Borrower = -0.024**, t=-2.02, Table 3 col 1, p.17)"
      direction: negative
      vsBenchmark: "vs. in-group (Hindu) borrowers; confirms in-group bias selects worse borrowers"
    - ref: R4
      outcome: loan default rate
      metric: pp-effect
      value: "Hindu Borrower x Auto Invest = -0.112***, t=-5.21; Muslim Borrower x Auto Invest = -0.073**, t=-2.49 (Table 3 col 2, p.17)"
      direction: negative
      vsBenchmark: "relative to unassisted choices; in-group default drops 11.2 pp vs. 7.3 pp for out-group"
    - ref: R5
      outcome: lender-level loan returns
      metric: coefficient
      value: "Muslim Borrower = 0.282***, t=6.25 (standardized returns, Table 5 col 1, p.21)"
      direction: positive
      vsBenchmark: "Muslim borrowers outperform Hindu borrowers in Hindu lenders' portfolios before Auto Invest"
    - ref: R6
      outcome: lender-level loan returns
      metric: coefficient
      value: "Hindu Borrower x Auto Invest = 0.222***, t=3.07; Muslim Borrower x Auto Invest = -0.012, t=-0.18 (Table 5 col 2, p.21)"
      direction: positive
      vsBenchmark: "return improvement after Auto Invest concentrated entirely among in-group (Hindu) borrowers"
    - ref: R7
      outcome: lender-level total return on investment
      metric: pp-effect
      value: "+4.5 pp (in-group vs. out-group discrimination sample); +7.3 pp (stereotypical discrimination sample) (Fig. 11, p.23)"
      direction: positive
      vsBenchmark: "relative to pre-Auto Invest lender-level total returns"
    - ref: R8
      outcome: loan default rate
      metric: pp-effect
      value: "Shudra Borrower = -3.8 pp (t=-3.03, Table 3 col 4, p.17)"
      direction: negative
      vsBenchmark: "Shudra borrowers less likely to default than non-Shudra before Auto Invest; stereotypical discrimination is costly"
  resultType: new-finding
  relatesTo:
    - { cite: "Fisman et al. (2017)", doi: '10.1257/aer.20120942', relation: tests, note: "tests their cultural-proximity-and-lending framework in a FinTech setting where social monitoring is absent by construction" }
    - { cite: "Fisman et al. (2020)", doi: '10.1086/708856', relation: tests, note: "tests their communal-conflict-and-lending result using a platform where lenders never interact with borrowers" }
    - { cite: "D'Acunto and Rossi (2020)", relation: builds-on, note: "builds on their robo-advising-as-debiasing-tool argument" }
    - { cite: "Hjort (2014)", doi: '10.1093/qje/qju028', relation: contradicts, note: "contrasts their finding of strong taste-based discrimination; inaccurate statistical discrimination fits the FinTech evidence better" }
    - { cite: "Becker (1957)", relation: tests, note: "tests and largely rejects taste-based discrimination as the dominant mechanism in this high-stakes lending setting" }
  openQuestions:
    - "Whether exposure to robo-advising suggestions lets lenders learn optimal rules of thumb that persist when the tool is unavailable (p.24)."
    - "How human and machine-based decision-making interact and complement or substitute each other as automation becomes ubiquitous in daily economic decisions (p.24)."
  licenceVerification:
    - source: "Crossref REST API works/10.1016/j.jfineco.2025.104202"
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[0]: content-version=tdm, URL=https://www.elsevier.com/tdm/userlicense/1.0/, start=2026-01-01; license[2]: content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-11-08"
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full text read (pp.1-26); eight results extracted from the CC-BY PDF. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; four locator corrections applied: Table 2 page p.10→p.11 (R1, R2 frontmatter and body table), Eq. 1 heading simplified to p.10 (body text, not Table 2 caption), Eq. 6 page p.22→p.23; all eight coefficient values and t-stats confirmed exact."
---

**What this is.** The paper's core results, the competing hypotheses it tests, and the regression specifications with their defining equations: enough to know what it found and how, without reading all 26 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.jfineco.2025.104202).

## TL;DR

Using lender-level panel data from Faircent, a peer-to-peer lending platform in India, D'Acunto, Ghosh, and Rossi compare the choices the same lenders make when unassisted and after observing suggestions from an automated robo-advising tool (Auto Invest). Unassisted Hindu lenders are 5.8 percentage points less likely to fund Muslim borrowers than Muslim lenders are, and lenders of all castes systematically under-lend to Shudra (lower-caste) borrowers relative to the platform population. These biases are costly: the disfavored borrowers default less and earn higher standardized returns on average. After adopting Auto Invest, both biases shrink substantially and lender-level total returns improve by 4.5 pp to 7.3 pp. Lenders rarely override robo-advised suggestions to previously-disfavored groups, which supports inaccurate statistical discrimination (biased beliefs) rather than taste-based discrimination, as in Becker (1957), as the dominant mechanism.

## Core results

Magnitudes and significance are as reported; `\*\*`/`\*\*\*` = 5%/1%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Hindu lenders are **5.8 pp less likely to fund Muslim borrowers** than Muslim lenders before robo-advising | Table 2, col 1, p.11 | Hindu Lender = -0.058\*\*\*, t=-3.52; baseline Muslim-borrower share is 18% for Muslim lenders and 12% for Hindu lenders |
| R2 | **Auto Invest reduces Hindu lenders' out-group bias by 4.5 pp** | Table 2, col 1, p.11 | Hindu Lender x Auto Invest = 0.045\*\*, t=2.51; after adoption, Hindu and Muslim lenders fund Muslim borrowers at the same rate as the platform population |
| R3 | **Discrimination is costly**: Muslim borrowers in Hindu lender portfolios default 2.4 pp less than Hindu borrowers | Table 3, col 1, p.17 | Muslim Borrower = -0.024\*\*, t=-2.02; in-group bias selects worse borrowers from the preferred group |
| R4 | After Auto Invest, **Hindu (in-group) borrowers' default drops 11.2 pp**; Muslim (out-group) drops 7.3 pp; overall improvement driven by eliminating low-quality in-group loans | Table 3, col 2, p.17 | Hindu Borrower x Auto Invest = -0.112\*\*\*, t=-5.21; Muslim Borrower x Auto Invest = -0.073\*\*, t=-2.49 |
| R5 | Before robo-advising, **Muslim borrowers deliver higher standardized returns** for Hindu lenders | Table 5, col 1, p.21 | Muslim Borrower = 0.282\*\*\*, t=6.25 (standardized return); confirms the financial cost of out-group bias |
| R6 | After Auto Invest, **return improvement concentrated entirely in Hindu (in-group) borrowers**: +0.222 SD; Muslim borrowers unchanged | Table 5, col 2, p.21 | Hindu Borrower x Auto Invest = 0.222\*\*\*, t=3.07; Muslim Borrower x Auto Invest = -0.012, t=-0.18 |
| R7 | **Lender-level total returns improve by 4.5 pp (in-group vs. out-group) and 7.3 pp (stereotypical discrimination)** after Auto Invest | Fig. 11, p.23 | Average lender-level return increase, value-weighted across all loans before and after Auto Invest adoption |
| R8 | **Shudra borrowers default 3.8 pp less** than other borrowers before Auto Invest, confirming stereotypical discrimination is costly | Table 3, col 4, p.17 | Shudra Borrower = -0.038\*\*\*, t=-3.03; all-lender sample; lending to Shudra borrowers increases with robo-advice adoption |

**Overall (paper's conclusion).** Cultural biases lead lenders to select borrowers from preferred social groups who systematically underperform. The evidence is most consistent with inaccurate statistical discrimination: biased ex-ante beliefs about borrower quality correlated with ethnicity and caste, not a conscious taste for discrimination. Robo-advising reduces both types of bias and generates returns improvements of approximately 6% to 12% of the average capital invested, concentrated in loans to previously-favored in-group borrowers who were over-selected relative to their quality.

## Theory / model

The paper has no formal economic model. It tests three competing hypotheses about the nature of the discrimination it documents, each with distinct predictions for lenders' behavior when assisted vs. unassisted:

**Hypothesis 1 (taste-based discrimination, Becker (1957)):** lenders are willing to pay a utility cost to avoid transacting with disfavored groups. Prediction: lenders should frequently override robo-advised matches to disfavored-group borrowers, even when their economic incentives are aligned with the tool.

**Hypothesis 2 (accurate statistical discrimination):** disfavored groups are truly riskier on average, so the favored-group lending pattern reflects correct Bayesian updating on observable signals. Prediction: in-group borrowers should outperform (lower default, higher returns) relative to out-group borrowers matched by the platform's unbiased screening.

**Hypothesis 3 (inaccurate statistical discrimination, biased beliefs):** lenders hold systematically incorrect ex-ante beliefs about out-group borrower quality, even when identical objective risk information is available. Predictions: (a) disfavored borrowers should outperform when lenders are unassisted; (b) performance should converge after robo-advising; (c) lenders should not override robo-advice, because their financial incentives do not justify doing so.

The platform design eliminates channels that could rationalize statistical discrimination: interest rates are set by the platform algorithm, borrower risk profiles are directly observable, lenders and borrowers never interact, and Faircent's screening ensures no unbanked borrowers enter the pool. Heterogeneity tests rule out monitoring advantages, social collateral, and peer effects as alternative explanations (Fisman et al. (2017), Fisman et al. (2020)). By contrast, Hjort (2014) detects strong taste-based discrimination in a setting that removes scope for inaccurate statistical discrimination; the paper argues that Faircent's FinTech context is closer in spirit to that ideal but that inaccurate beliefs nonetheless dominate. The evidence consistently supports Hypothesis 3: disfavored borrowers outperform before robo-advising, performance converges after, and lenders rarely override robo-advised matches. The paper further shows that biases are stronger for lenders in areas with higher Hindu-Muslim inter-ethnic conflict, consistent with culturally shaped priors rather than rational updating.

## Method

The primary estimator is OLS on a lender-borrower-loan triad panel with lender fixed effects and year fixed effects, clustering standard errors at the lender level throughout (Table 2 caption, p.10). The within-lender before-after variation in tool adoption identifies the de-biasing effect; the approach builds on D'Acunto and Rossi (2020) who study robo-advising effects in a savings context.

For loan returns the paper additionally estimates quantile regressions (Eq. 5, p.22) to identify which part of the return distribution drives the improvement:

$$
Q_\tau(\text{Returns}_{i,j}) = a(\tau) + \beta(\tau)\,\text{Auto Invest}_j + \mathbf{X}'_{i,j}\,\zeta(\tau) + \varepsilon_{i,j} \tag{5}
$$

where $$Q_\tau$$ is the $$\tau$$-th quantile of standardized loan returns for loan $$i$$ of lender $$j$$, and $$\mathbf{X}_{i,j}$$ are loan risk controls. Coefficient $$\hat{\beta}(\tau)$$ measures how the $$\tau$$-th quantile shifts after the lender adopts Auto Invest.

The lender-level total return is computed as a value-weighted average across loans originated before and after Auto Invest adoption (Eq. 6, p.23):

$$
\text{Lender Tot Ret}_{i,t} = 100 \times \frac{\sum_j \text{Amount Disbursed}_{i,j,t} \times \text{Loan Return}_{j,t}}{\sum_j \text{Amount Disbursed}_{i,j,t}} \tag{6}
$$

and the lender-level change is POST minus PRE (Eq. 7, p.23). A purged measure (Eq. 8, p.23-24) removes compositional effects by holding the pre-period disbursed amounts fixed and applying post-period returns, isolating the cultural-debiasing channel from other effects of Auto Invest on portfolio composition.

## Empirical specifications

**Primary specification for in-group vs. out-group discrimination (Eq. 1, p.10):**

$$
\text{Muslim Borrower}_{i,j,t} = \alpha + \beta\,\text{Auto Invest}_{j,t} + \gamma\,\text{Hindu Lender}_j + \delta\,(\text{Hindu Lender}_j \times \text{Auto Invest}_{j,t}) + \zeta\,\mathbf{x}_{i,t} + \eta_j + \eta_t + \varepsilon_{i,j,t} \tag{1}
$$

where $$\text{Muslim Borrower}_{i,j,t} = 1$$ if borrower $$i$$ funded by lender $$j$$ in year $$t$$ is Muslim; $$\text{Auto Invest}_{j,t} = 1$$ if the lender has adopted the tool by year $$t$$; $$\text{Hindu Lender}_j = 1$$ if lender $$j$$ is Hindu; $$\mathbf{x}_{i,t}$$ are loan characteristics assigned by the platform (maturity, amount, interest rate); $$\eta_j$$ are lender fixed effects; $$\eta_t$$ are year fixed effects. Coefficient $$\hat{\gamma}$$ (R1) measures the in-group bias before adoption; $$\hat{\delta}$$ (R2) measures the de-biasing effect of robo-advising.

**Stereotypical discrimination specification (Eq. 2, p.14):**

$$
\text{Shudra Borrower}_{i,j,t} = \alpha + \beta\,\text{Auto Invest}_{j,t} + \zeta\,\mathbf{x}_{i,t} + \eta_j + \eta_t + \varepsilon_{i,j,t} \tag{2}
$$

This drops the Hindu Lender interaction because all castes, including Shudra lenders, discriminate against Shudra borrowers (stereotypical discrimination is not in-group favoritism but group-wide negative stereotyping). Caste recognizability (continuous probability from the Bhagavatula et al. (2017, 2018) matrimonial-registry algorithm) is used to test whether the $$\hat{\beta}$$ coefficient grows with how easily a borrower is identifiable as Shudra (Fig. 5-6, pp.14-15).

**Performance specifications (Eqs. 3-4, p.16 and p.19):**

$$
\text{Delinquent Loan}_{i,j,t} = \alpha + \gamma\,\text{Muslim Borrower}_j + \delta\,(\text{Muslim Borrower}_j \times \text{Auto Invest}_{j,t}) + \theta\,(\text{Hindu Borrower}_{i,j} \times \text{Auto Invest}_{j,t}) + \zeta\,\mathbf{x}_{i,t} + \eta_j + \eta_t + \varepsilon_{i,j,t} \tag{3}
$$

$$
\text{Loan Return}_{i,j,t} = \alpha + \gamma\,\text{Muslim Borrower}_j + \delta\,(\text{Muslim Borrower}_j \times \text{Auto Invest}_{j,t}) + \theta\,(\text{Hindu Borrower}_{i,j} \times \text{Auto Invest}_{j,t}) + \zeta\,\mathbf{x}_{i,t} + \eta_j + \eta_t + \varepsilon_{i,j,t} \tag{4}
$$

where $$\text{Delinquent Loan}_{i,j,t} = 1$$ if the loan is closed delinquent (more than 90 days past due at closure) and $$\text{Loan Return}_{i,j,t}$$ is the standardized return. Coefficient $$\hat{\gamma}$$ tests whether disfavored borrowers outperformed before the tool was adopted (the cost of bias, R3 and R5); $$\hat{\delta}$$ and $$\hat{\theta}$$ capture the differential change in performance across borrower groups after adoption (R4 and R6). The falsification column (col 3 and col 6 in Table 3, p.17) adds loan risk controls to show that default changes are not driven by compositional shifts in borrower riskiness.

**Heterogeneity tests** use cross-sectional proxies for the salience of cultural stereotypes: state-level Hindu-Muslim riots (Ticku (2015)), BJP vote shares (Bhavnani (2014)), and birth-cohort exposure to the rise of Hindu-Muslim conflict (Fig. 4, p.13). The bias is about twice as large for lenders residing in high-riot states (6.4 pp vs. small and insignificant elsewhere), and the de-biasing effect is correspondingly stronger in these states.

**Sample:** lender-borrower-loan triads from the Faircent platform, January 2018 to March 2020. Main sample: 113,283 triads involving 2,818 unique Hindu and Muslim lenders and borrowers. Caste sub-sample: 62,831 triads for which Hindu varna (caste category) of the borrower can be inferred from the matrimonial registry. Loan maturity averages 22 months; median maturity 24 months; average loan amount is approximately Rs.130,000 (~$1,770); average annual interest rate is 24%. Standard errors are clustered at the lender level.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Faircent P2P lending platform | Main panel: lender-borrower-loan triads; loan amounts, interest rates, maturity, delinquency; Auto Invest adoption and fund-allocation share; lender and borrower demographic characteristics (name, state, date of birth, occupation) | No page yet |
| Marriage registry (Bhagavatula et al. 2017, 2018) | Religion and caste inference for lenders and borrowers; 2.5 million individuals from online matrimonial agencies; used to assign religion and varna probabilities from surname, date of birth, and location | No page yet |
| Ticku (2015) Hindu-Muslim riots data | State-level count of large-scale riots between Hindus and Muslims (1980-2000); proxy for inter-ethnic conflict salience in heterogeneity tests | No page yet |
| Bhavnani (2014) BJP election data | Average BJP candidate vote shares across national and state elections (1977-2015) per Indian state; proxy for ideological salience of Hindu nationalism | No page yet |
| National Crime Records Bureau (NCRB 2019) | Crimes against Scheduled Castes per 100,000 inhabitants per Indian state (2018); proxy for salience of caste discrimination in stereotypical bias heterogeneity tests | No page yet |

Sample: January 2018 to March 2020. Roughly 60% of loans issued in 2019 and 19% in the first three months of 2020. Median lender disburses funds to borrowers across 13 different Indian states; 90% of lenders serve borrowers in at least 5 different states.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jfineco.2025.104202) if you are: studying the mechanism of discrimination (taste-based vs. inaccurate statistical) in financial markets; examining how robo-advising corrects culturally biased lending choices; studying in-group vs. out-group or stereotypical discrimination in a high-stakes economic setting; or extending the Faircent platform setting to other FinTech platforms or demographic groups. Table 2 (p.10) gives the main lending-bias results; Table 3 (p.17) the default-performance results; Tables 5-6 (pp.21-22) the return results; and Figs. 4, 6, and 8 the heterogeneity and mechanism tests.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 175 (2026), article 104202. This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** D'Acunto, Francesco, Pulak Ghosh, and Alberto G. Rossi.
> "How costly are cultural biases? Evidence from FinTech."
> *Journal of Financial Economics* 175 (2026) 104202.
> DOI: 10.1016/j.jfineco.2025.104202. © 2025 The Authors. Published by Elsevier B.V.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
