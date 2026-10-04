---
title: "Illegal Insider Trading Profitability and the Legal Environment: Batten, Liu & Sha (2026)"
description: >-
  Distilled: Using 521 hand-collected adjudicated insider-trading cases from
  China (2006-2018), this paper finds that stronger provincial legal environments
  are associated with significantly higher per-trade abnormal returns, consistent
  with a risk-compensation mechanism in which stricter enforcement screens out
  low-return trades and leaves only high-return ones. Journal of Banking and
  Finance 185 (2026) 107609, CC BY 4.0. Eighteen core results with source locators,
  datasets, and regression specifications. LLM-distilled, not human-verified.
sidebar:
  label: Batten-Liu-Sha 2026
  order: 1
tags: [paper-summary, insider-trading, legal-environment, china, market-regulation,
       panel-regression, open-access, cc-by, peer-reviewed, unreplicated,
       data:csmar, data:china-marketization-index]
paper:
  authors: Jonathan A. Batten, Lanlan Liu, Yezhou Sha
  authorList:
    - { family: Batten, given: "Jonathan A.", orcid: "0000-0002-3871-7360", affiliation: "RMIT University; Corvinus University of Budapest" }
    - { family: Liu, given: Lanlan, orcid: "0000-0003-0129-9588", affiliation: "Xi'an Jiaotong-Liverpool University" }
    - { family: Sha, given: Yezhou, orcid: "0000-0002-2966-5781", affiliation: "Capital University of Economics and Business" }
  year: 2026
  venue: Journal of Banking and Finance 185 (2026), Article 107609
  venueShort: J. Banking Finance 2026
  doi: 10.1016/j.jbankfin.2025.107609
  tier: field
  jel:
    codes: [G14, G28, K42]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Financial Markets and Investment Strategies', 'Auditing, Earnings Management, Governance', 'Corporate Finance and Governance']
  dataAccess: licensed-commercial
  outcome:
    - illegal insider trading buy-and-hold abnormal return (BHAR)
    - firm-level ex ante litigation risk
  outcomeClass: [security-returns]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-11; corroborated by artifact p. 1 open-access notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access CC BY 4.0 (Elsevier; machine fetch not attempted, 2026-06-25)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 18
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [probit-regression]
    identification: descriptive
  contributionType: [new-fact, new-data]
  mechanisms: [information-asymmetry, enforcement-risk-compensation]
  introducesData: true
  scope:
    region: China
    assetClass: Chinese equities
    period: 2006-01..2018-12
    frequency: mixed
    dataType: [market, accounting, administrative]
    granularity: [firm, security, transaction]
    n: "521 insider-trading cases, 312 companies, 2006-2018"
  findings:
    - { ref: R1, outcome: "illegal insider trading BHAR", metric: coefficient, value: "LAW^Institution coeff 0.011*** (SE 0.002); adj. R2 = 0.155 (Table 4, col 1)", direction: positive }
    - { ref: R2, outcome: "illegal insider trading BHAR", metric: coefficient, value: "LAW^Environment coeff 0.013*** (SE 0.002); adj. R2 = 0.162 (Table 4, col 2)", direction: positive }
    - { ref: R3, outcome: "illegal insider trading BHAR", metric: pp-effect, value: "2.77-5.78 pp increase per 1-SD improvement in legal environment quality (Table 4, text p. 7)", direction: positive }
    - { ref: R4, outcome: "illegal insider trading BHAR", metric: coefficient, value: "lnRISK coeff 0.181*** (SE 0.049); 18.1 bp per 1-pp increase in litigation risk (Table 6, col 1)", direction: positive }
    - { ref: R5, outcome: "illegal insider trading BHAR", metric: return-spread, value: "mean BHAR 0.085*** higher in high-LAW^Institution vs. low-LAW provinces; median diff 0.044*** (Table 3, Panel A)", direction: positive }
    - { ref: R6, outcome: "illegal insider trading BHAR", metric: coefficient, value: "LAW^Institution coeff 0.011*** (SE 0.003) after Heckman selection correction (Table 7, Panel A, col 1)", direction: positive, vsBenchmark: "association remains positive and significant after the selection correction" }
    - { ref: R7, outcome: "illegal insider trading BHAR", metric: coefficient, value: "LAW^Resources coeff 0.009*** (SE 0.003), no firm controls; coeff 0.008** (SE 0.003), with controls (Table 4, cols. 3 and 6)", direction: positive }
    - { ref: R8, outcome: "firm-level ex ante litigation risk", metric: coefficient, value: "LAW^Institution 0.005** (SE 0.002), LAW^Environment 0.005* (SE 0.002), LAW^Resources 0.007* (SE 0.004) predicting lnRISK (Table 5, cols. 1-3); 1-SD legal-environment increase predicts 1.99%-2.66% higher investigation likelihood (text p. 8)", direction: positive }
    - { ref: R9, outcome: "illegal insider trading BHAR", metric: coefficient, value: "Table 6: lnRISK 0.181*** (SE 0.049), 0.180*** (SE 0.049), and 0.172*** (SE 0.041); LAW^Institution 0.013*** (SE 0.002), LAW^Environment 0.014*** (SE 0.002), LAW^Resources 0.008** (SE 0.003) (cols. 1-3)", direction: positive }
    - { ref: R10, outcome: "illegal insider trading BHAR", metric: coefficient, value: "Profit-selection Heckman estimates: LAW^Institution 0.011*** (SE 0.003), LAW^Environment 0.012*** (SE 0.003), LAW^Resources 0.004 (SE 0.004), Table 7, Panel B", direction: positive, vsBenchmark: "Institution and Environment remain significant; Resources is not significant in this panel" }
    - { ref: R11, outcome: "illegal insider trading BHAR", metric: coefficient, value: "BHAR_high coefficients: LAW^Institution 0.013*** (SE 0.003), LAW^Environment 0.015*** (SE 0.003), LAW^Resources 0.010*** (SE 0.003), Table 8, cols. 1-3", direction: positive }
    - { ref: R12, outcome: "illegal insider trading BHAR", metric: coefficient, value: "Above-national-average legal-index dummies: D_LAW^Institution 0.078*** (SE 0.022), D_LAW^Environment 0.107*** (SE 0.022), D_LAW^Resources 0.064*** (SE 0.024), Table 9, cols. 1-3", direction: positive }
    - { ref: R13, outcome: "illegal insider trading BHAR", metric: coefficient, value: "Near CSRC vs. far coefficients: LAW^Institution 0.483*** vs. 0.011***; LAW^Environment 0.483*** vs. 0.012***; LAW^Resources 0.047*** vs. 0.004 (Table 10, cols. 1-6)", direction: mixed, vsBenchmark: "The legal-environment association is much larger near Beijing; the far-sample LAW^Resources estimate is not significant" }
    - { ref: R14, outcome: "illegal insider trading BHAR", metric: coefficient, value: "Bear vs. bull estimates: LAW^Institution 0.0252*** vs. 0.00609 (ns); LAW^Environment 0.0245*** vs. 0.00698*; LAW^Resources 0.00607 (ns) vs. 0.0160*** (Table 11, cols. 1-6)", direction: mixed }
    - { ref: R15, outcome: "illegal insider trading BHAR", metric: return-spread, value: "Median-split groups: LAW^Environment mean difference 0.088*** and median difference 0.033***; LAW^Resources mean difference 0.032 (ns) and median difference 0.021* (Table 3, Panels B-C)", direction: positive }
    - { ref: R16, outcome: "illegal insider trading BHAR", metric: coefficient, value: "Alternative-channel estimates are statistically insignificant: DRINFO coefficients 0.022, 0.045, 0.046, 0.037; DFINANCE coefficients -0.039, -0.032, -0.030, -0.046 (Appendix Table A3, Panels A-B, p. 16)", direction: none }
    - { ref: R17, outcome: "illegal insider trading BHAR", metric: coefficient, value: "Political-connection coefficients: PC dummy 0.020, -0.016, 0.033 and PC level 0.001, -0.008, 0.010; all nonsignificant (Appendix Table A4, cols. 1-6, p. 16)", direction: none }
    - { ref: R18, outcome: "illegal insider trading BHAR", metric: coefficient, value: "With governance controls, legal-environment coefficients are LAW^Institution 0.011***, 0.012***, 0.008**, 0.087***; LAW^Environment 0.012***, 0.012***, 0.008**, 0.080***; LAW^Resources 0.007**, 0.007*, 0.010***, 0.005 (ns) (Table 12, pp. 13-14)", direction: positive }
  resultType: confirms
  relatesTo:
    - { cite: "La Porta et al. (1998)", doi: '10.1086/250042', relation: builds-on, note: "law and finance framework connecting legal institutions to investor protection and financial development" }
    - { cite: "Kacperczyk and Pagnotta (2024)", doi: '10.1111/jofi.13299', relation: extends, note: "extends their analysis of legal risk pricing in insider trading to Chinese provincial variation" }
    - { cite: "Kim and Skinner (2012)", doi: '10.1016/j.jacceco.2011.09.005', relation: builds-on, note: "methodology for constructing firm-level ex ante litigation risk via probit model of regulatory sanctions" }
    - { cite: "Becker (1968)", relation: builds-on, note: "rational-crime framework: trade occurs when expected gain exceeds expected penalty; the paper tests this trade-off empirically" }
    - { cite: "Ahern (2020)", relation: cites, note: "evidence on information networks and the determinants of illegal insider trading profitability" }
    - { cite: "Sha et al. (2020)", relation: extends, note: "extends the 'puzzle of low returns of illegal insider trading' in China to show that legal risk explains cross-sectional variation" }
  openQuestions:
    - "Whether the extent of undetected high-profit insider trades materially biases the observed profitability distribution; more robust detection methods and comprehensive data are needed to address this (p. 9)."
    - "Whether market-timing ability also contributes to higher excess returns; the authors use returns based on highest trading-period prices to address this alternative (p. 10)."
    - "Whether the risk-return trade-off generalizes beyond China to other emerging markets with heterogeneous regional enforcement capacity (pp. 13-14)."
  replicationCode:
    status: upon-request
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-17 plus appendix tables A1-A4); six core results extracted from Tables 3, 4, 6, 7. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all six core result rows confirmed correct. Fixed eq. 13 Heckman coefficient from ρα to ρσ (PDF p. 9 clearly shows ρσ); fixed dataAccess from hand-collected to licensed-commercial (data:csmar tag is licensed-commercial, the most restrictive tier)." }
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the complete 17-page PDF; appended 12 additional result rows, completed findings, corrected governed mechanism vocabulary, and expanded all numbered equations and estimating specifications. Not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 18 Core results, equations and specifications against the PDF; added Table 6 LAW^Institution coefficient to R9/findings, qualified heterogeneity and governance prose, corrected the market-timing question and Kacperczyk-Pagnotta description, set resultType to confirms, and removed off-registry outcomeClass. Frontmatter and DOI citations checked; relatesTo locatability guard passed." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107609", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[]: content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-11; plus two tdm-only licenses (Elsevier TDM userlicense 1.0 and tdmrep, both start 2026-04-01)" }
---

**What this is.** The paper's core results, the hypotheses it tests (risk-compensation vs. deterrence), the regression specifications, and the datasets used: enough to know what it found and how, without reading all 17 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.jbankfin.2025.107609).

## TL;DR

This paper asks whether legal risk is priced in illegal insider trading in China. Using 521 adjudicated insider-trading cases hand-collected from court judgments and China Securities Regulatory Commission (CSRC) sanction documents (2006-2018), the authors measure each insider's buy-and-hold abnormal return (BHAR) and regress it on three proxies for provincial legal environment quality, combined with firm-level ex ante litigation risk. In the baseline and most robustness specifications, stronger legal environments are associated with higher per-trade profitability, consistent with a risk-compensation mechanism: stricter enforcement screens out low-return trades, leaving only those with sufficiently high expected gains to justify elevated detection risk. The pattern is inconsistent with a simple deterrence prediction that stricter enforcement lowers the returns of observed trades; the authors interpret it as selective deterrence, in which observed returns rise because low-return opportunities are filtered away. Firm-level litigation exposure (lnRISK), constructed following Kim and Skinner (2012), is also positively associated with BHAR, suggesting insiders incorporate both provincial and firm-specific legal risk into their trading decisions. The tests find no evidence that M&A rumors, financial literacy, or political connections explain BHAR (Sections 5.2-5.4). The legal-environment associations generally persist when corporate-governance controls are included, though some estimates are not significant (Section 5.5). Kacperczyk and Pagnotta (2024) show a related legal-risk channel for illegal insider trading in the US; this paper extends that logic to an emerging-market setting with substantial within-country legal variation. The evidence aligns with the rational-crime model of Becker (1968): insiders behave as rational agents weighing expected gains against expected penalties. It also extends work by Ahern (2020) on the determinants of illegal insider trading profitability and by Sha et al. (2020) on the puzzle of low average returns in China's insider-trading cases.

## Core results

Magnitudes and significance are as reported; `\*\*\*`/`\*\*`/`\*` = 1%/5%/10%. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Provincial market development index (LAW^Institution) positively and significantly predicts BHAR from illegal insider trading; industry and year fixed effects included | Table 4, col 1, p. 7 | coeff 0.011\*\*\* (SE 0.002); adj. R² = 0.155; N = 478 |
| R2 | Provincial legal environment index (LAW^Environment) positively and significantly predicts BHAR, confirming the pattern across a second legal quality proxy | Table 4, col 2, p. 7 | coeff 0.013\*\*\* (SE 0.002); adj. R² = 0.162; N = 478 |
| R3 | Economic magnitude: 1-SD improvement in legal environment quality predicts 2.77-5.78 percentage-point increase in insider-trading abnormal returns (all three proxies) | Table 4, p. 7 | 2.77 pp (LAW^Institution) to 5.78 pp (LAW^Environment) per 1-SD increase |
| R4 | Ex ante litigation risk (lnRISK) positively predicts BHAR, incremental to provincial legal environment: both firm-level and provincial risk are priced in illegal insider trades | Table 6, col 1, p. 8 | lnRISK coeff 0.181\*\*\* (SE 0.049); a 1-pp increase in lnRISK → 18.1 bp higher BHAR |
| R5 | Univariate test: high-legal-environment provinces yield significantly higher insider-trading BHAR than low-legal-environment provinces | Table 3, Panel A, p. 6 | mean BHAR difference 0.085\*\*\* (high vs. low LAW^Institution); median difference 0.044\*\*\* |
| R6 | Heckman selection correction confirms the legal environment effect persists after accounting for potential selection bias from undetected cases | Table 7, Panel A, col 1, p. 10 | LAW^Institution coeff 0.011\*\*\* (SE 0.003) in Heckman model; same sign and significance as OLS baseline |
| R7 | The third provincial proxy, judicial resources (LAW^Resources), also predicts BHAR positively in the baseline specifications | Table 4, cols. 3 and 6, p. 7 | coeff 0.009\*\*\* (SE 0.003) without firm controls; 0.008\*\* (SE 0.003) with controls; N = 491 |
| R8 | Stronger provincial legal indices predict greater firm-level ex ante litigation risk, a first link in the proposed channel | Table 5, cols. 1-3, p. 8 | lnRISK coefficients: LAW^Institution 0.005\*\* (SE 0.002), LAW^Environment 0.005\* (SE 0.002), LAW^Resources 0.007\* (SE 0.004); text reports a 1-SD increase predicts 1.99%-2.66% higher investigation likelihood |
| R9 | Firm litigation risk and each provincial legal-environment proxy retain positive associations in the mediation specifications | Table 6, cols. 1-3, p. 8 | lnRISK coefficients 0.181\*\*\* (SE 0.049), 0.180\*\*\* (SE 0.049), 0.172\*\*\* (SE 0.041); LAW^Institution 0.013\*\*\* (SE 0.002), LAW^Environment 0.014\*\*\* (SE 0.002), LAW^Resources 0.008\*\* (SE 0.003) |
| R10 | A second Heckman correction based on the top-profitability selection equation leaves two of the three legal-environment effects significant | Table 7, Panel B, p. 10 | LAW^Institution 0.011\*\*\* (SE 0.003), LAW^Environment 0.012\*\*\* (SE 0.003), LAW^Resources 0.004 (SE 0.004, nonsignificant) |
| R11 | The legal-environment association holds when BHAR is recalculated using the highest stock prices during the trading period | Table 8, cols. 1-3, p. 10 | BHAR_high coefficients: LAW^Institution 0.013\*\*\* (SE 0.003), LAW^Environment 0.015\*\*\* (SE 0.003), LAW^Resources 0.010\*\*\* (SE 0.003) |
| R12 | Replacing continuous legal indices with above-national-average dummies yields positive coefficients for all three proxies | Table 9, cols. 1-3, p. 11 | D_LAW^Institution 0.078\*\*\* (SE 0.022), D_LAW^Environment 0.107\*\*\* (SE 0.022), D_LAW^Resources 0.064\*\*\* (SE 0.024) |
| R13 | Legal-environment slopes are larger in the Beijing-Tianjin-Hebei subsample near the CSRC than in other provinces | Table 10, cols. 1-6, p. 11 | Near vs. far: LAW^Institution 0.483\*\*\* vs. 0.011\*\*\*; LAW^Environment 0.483\*\*\* vs. 0.012\*\*\*; LAW^Resources 0.047\*\*\* vs. 0.004 (nonsignificant); near-sample N = 26 or 31 |
| R14 | The provincial legal-environment association differs across bear and bull markets, with a resource-index exception | Table 11, cols. 1-6, p. 12 | Bear vs. bull: LAW^Institution 0.0252\*\*\* vs. 0.00609 (ns); LAW^Environment 0.0245\*\*\* vs. 0.00698\*; LAW^Resources 0.00607 (ns) vs. 0.0160\*\*\* |
| R15 | Median-split univariate differences also support higher returns for Environment and, less consistently, Resources | Table 3, Panels B-C, p. 6 | LAW^Environment mean difference 0.088\*\*\* and median difference 0.033\*\*\*; LAW^Resources mean difference 0.032 (ns) and median difference 0.021\* |
| R16 | The tested M&A-information and financial-literacy alternatives do not explain BHAR in the appendix regressions | Appendix Table A3, Panels A-B, p. 16 | DRINFO coefficients 0.022, 0.045, 0.046, 0.037 (all ns); DFINANCE coefficients -0.039, -0.032, -0.030, -0.046 (all ns) |
| R17 | Political-connection indicators do not predict BHAR in the alternative-channel specifications | Appendix Table A4, cols. 1-6, p. 16 | PC dummy coefficients 0.020, -0.016, 0.033; PC-level coefficients 0.001, -0.008, 0.010; all nonsignificant |
| R18 | Adding governance controls leaves legal-environment coefficients significant in most specifications | Table 12, pp. 13-14 | 11 of 12 legal-environment coefficients are significant, ranging from 0.007\* to 0.087\*\*\*; LAW^Resources with G-index is 0.005 (ns) |

**Overall (paper's conclusion).** Provincial legal quality plays a central role in shaping insider-trading outcomes. Insiders weigh expected gains against enforcement risk and trade only when the anticipated return exceeds the expected penalty, consistent with the rational-crime framework of Becker (1968) and extending the law and finance literature of La Porta et al. (1998) to the enforcement of securities law. Stricter legal environments produce higher conditional profitability because only high-return trades survive deterrence. Firm-level litigation exposure reinforces this relationship. The findings remain largely consistent across selection-correction procedures, alternative return measures, and dummy-variable legal proxies; subgroup tests show exceptions for some legal proxies. Political connections, M&A rumors, and financial literacy of the insider do not explain the premium. The estimated legal-environment associations are larger in the small subsample closer to the CSRC in Beijing (Table 10), which the authors interpret as consistent with tighter central oversight raising the required risk premium.

## Theory / model

The paper has no formal structural model. Its testable hypotheses come from Becker's (1968) rational-crime trade-off, and contrast deterrence with risk compensation (pp. 2-3). H1a predicts that provincial legal risk lowers illegal-trading profitability because expected penalties rise. H1b predicts a positive relationship among trades that remain: higher enforcement deters low-return opportunities, so the observed sample is selected toward high-information, high-return cases. H2 predicts that firm-level ex ante litigation risk is positively associated with BHAR after provincial legal risk is controlled.

The decision rule implied by the text is that an insider trades when expected gains exceed expected enforcement costs. This is a verbal theoretical implication, not a numbered equation in the paper:

$$
\mathbb{E}[\text{gain}] > p(\text{detection}) \times \text{penalty}
$$

The paper's empirical outcomes are conditional on adjudicated cases, so a positive association with returns does not imply greater overall illegal activity. The authors interpret it as a composition effect among the observed trades (pp. 2-3, 7).

## Method

The design is observational cross-sectional regression of case-level illegal-trading returns, with provincial legal-index variation and firm-level controls. The main OLS specifications include industry and year fixed effects, cluster standard errors at firm and year, and use a two-month lag for fundamentals. Table 4 has 478 cases for LAW^Institution and LAW^Environment and 491 for LAW^Resources. Models with firm characteristics have the same sample counts (pp. 5-7).

The mediation equations test whether provincial legal indices predict firm litigation risk and whether that risk adds explanatory power for BHAR (eqs. 5-6, p. 8). The source prints β_1 for both terms in equation (5). Tables 5 and 6 include industry and year fixed effects and firm/year clustered standard errors. Their samples are N = 455, 455, and 464 across the three legal proxies (p. 8):

$$
\text{Med}_{i,j,t} = \beta_0 + \beta_1 \text{Law}_{j,t} + \beta_1 \text{Firm Characteristics}_{i,j,t} + \text{Ind}_{i,t} + \text{Year}_t + \varepsilon_{i,j,t} \tag{5}
$$

$$
\text{BHAR}_{i,j,t} = \gamma_0 + \gamma_1 \text{Med}_{i,j,t} + \gamma_2 \text{Law}_{j,t} + \gamma_3 \text{Firm Characteristics}_{i,j,t} + \text{Ind}_{i,t} + \text{Year}_t + \varepsilon_{i,j,t} \tag{6}
$$

For selection, the paper first states a population outcome equation and its observed-case version, then models selection into observation (eqs. 7-9, pp. 8-9):

$$
y = \alpha + \beta_1 x + \beta X + \varepsilon \tag{7}
$$

$$
S y = S \alpha + \beta_1 S x + \beta S X + S \varepsilon \tag{8}
$$

$$
S = F(X', \varepsilon') + \eta \tag{9}
$$

The inverse Mills ratio is defined piecewise in equation (10), using the standard normal density \(\phi\) and cumulative distribution \(\Phi\) (p. 9):

$$
\text{IMR} = \mathbb{E}(\varepsilon \mid D) = f(x) = \begin{cases}
\frac{\phi(F(X',\varepsilon'))}{\Phi(F(X',\varepsilon'))}, & S=1 \\
-\frac{\phi(F(X',\varepsilon'))}{1-\Phi(F(X',\varepsilon'))}, & S=0
\end{cases} \tag{10}
$$

The two first-stage selection equations are described as probit models (eqs. 11-12, p. 9). Equation (11) predicts observed litigation/detection cases from firm characteristics; equation (12) predicts whether illegal income ranks in the top 30% using size, book-to-market, momentum, and turnover. The paper does not report first-stage sample counts, fixed effects, or standard-error adjustments for these probits:

$$
\Pr(S_{\text{litigation}}=1) = a + b_1 \text{Firm Characteristics} + \eta \tag{11}
$$

$$
\Pr(S_{\text{profit}}=1) = a + b_1 \ln ME + b_2 \ln(BE/ME) + b_3 MOM + b_4 TURNOVER \tag{12}
$$

Their IMRs enter the second-stage BHAR model in equation (13). The Heckman regressions use industry and year fixed effects, cluster standard errors by firm and year, and have N = 478 for LAW^Institution and LAW^Environment and N = 491 for LAW^Resources (Table 7, pp. 9-10). The paper states that its exclusion restriction assumes the first-stage variables have no direct effect on BHAR; it tests low correlations with ROA but this is not a causal design.

$$
\text{BHAR}_{i,j,t} = \alpha_0 + \alpha_1 \text{LAW}_{i,j,t} + \alpha_2 \text{Firm Characteristics}_{i,j,t} + \rho\sigma \text{IMR}_{i,j,t} + \text{Ind}_{i,j,t} + \text{Year}_t + \varepsilon_{i,j,t} \tag{13}
$$

## Empirical specifications

The dependent variable is reconstructed from legal records. Equation (1) defines the raw return as illegal income divided by trading volume times the closing price on purchase day. Equation (2) defines the market return over the same holding period (p. 4):

$$
\text{retRaw}_i = \frac{\text{Amount of illegal income}_i}{\text{Trading volume}_i \times \text{Closing price}_{i,\text{PurchaseDay}}} \tag{1}
$$

$$
\text{retBenchmark}_i = \frac{\text{Closing price}_{i,\text{SellDay}} - \text{Closing price}_{i,\text{PurchaseDay}}}{\text{Closing price}_{i,\text{PurchaseDay}}} \tag{2}
$$

BHAR is the difference between the raw insider return and the benchmark return. For trades spanning multiple dates the authors use average daily closing prices. The two baseline estimating specifications are equations (3) and (4) (p. 5):

$$
\text{BHAR}_{i,j,t} = \alpha_0 + \alpha_1 \text{LAW}_{i,j,t} + \text{Ind}_{i,t} + \text{Year}_t + \varepsilon_{i,j,t} \tag{3}
$$

$$
\text{BHAR}_{i,j,t} = \alpha_0 + \alpha_1 \text{LAW}_{i,j,t} + \alpha_2 \text{Firm Characteristics}_{i,j,t} + \text{Ind}_{i,t} + \text{Year}_t + \varepsilon_{i,j,t} \tag{4}
$$

LAW is entered in separate specifications as LAW^Institution, LAW^Environment, or LAW^Resources for the firm's province and year. Equation (3) has industry and year fixed effects; equation (4) adds lagged firm controls: institutional and state ownership, size, book-to-market, momentum, turnover, leverage, ROE, cash/assets, and firm age. Continuous independent variables are winsorized at the 1st and 99th percentiles. The estimation sample consists of adjudicated common-stock purchase cases from 2006-2018; firm fundamentals are lagged two months. Standard errors are clustered by firm and year. No additional estimating equation is numbered for the robustness and heterogeneity tables; those specifications re-estimate equation (4), replacing the outcome, legal-index measure, or sample split as described at the relevant result locators.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Hand-collected court judgments and CSRC sanction documents (PKU-LAW, Lawyee databases) | Primary dataset: 521 insider-trading cases with trading dates, volumes, execution prices, illicit gains, and case characteristics; 312 unique companies, 2006-2018 | No page yet |
| China Stock Market and Accounting Research (CSMAR) | Firm-level control variables: market capitalization, book-to-market ratio, past returns, turnover, leverage, return on equity, cash/assets, institutional ownership, state ownership, firm age | [CSMAR](/wiki/commercial/csmar/) (licensed) |
| Wang, Fan and Yu (2017) Marketization Index of China's Provinces (NERI) | Two provincial legal environment proxies: LAW^Institution (market intermediaries and legal sub-index) and LAW^Environment (overall provincial legal environment sub-index); updated biannually | No page yet |
| Gao et al. (2016) provincial judicial resources index | LAW^Resources proxy: provincial count of lawyers and legal service offices; measures availability of non-public judicial resources | No page yet |
| Bloomberg (appendix only) | M&A event verification for alternative-channel tests in Section 5.2 (dummy DRINFO) | No page yet |

Sample: 521 insider-trading cases involving 312 companies, 2006-2018. Regression sample N = 478 for most specifications (limited by legal environment data coverage); N = 491 for specifications using LAW^Resources. All continuous independent variables winsorized at the 1st and 99th percentiles. A two-month lag is applied between firm fundamentals and the insider-trading date.

## When to read the full paper

Read the full [original](https://doi.org/10.1016/j.jbankfin.2025.107609) if you are: studying the determinants of illegal insider trading profitability in emerging markets; modeling risk-return trade-offs in illicit market activity; extending the rational-crime or law-and-finance framework to securities law enforcement; working on empirical cross-regional legal variation using the Chinese provincial institutional setting; or building on the hand-collected dataset of 521 Chinese insider-trading cases (data available upon request per the paper's data-availability statement). Table 10 is particularly useful for understanding how geographic proximity to the central regulator moderates the legal environment effect.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* 185 (2026) 107609. This distillation was extracted by an LLM on 2026-10-04 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Batten, Jonathan A., Lanlan Liu, and Yezhou Sha.
> "Illegal insider trading profitability and the legal environment."
> *Journal of Banking and Finance* 185 (2026): 107609.
> DOI: 10.1016/j.jbankfin.2025.107609. © 2025 The Author(s). Published by Elsevier B.V.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
