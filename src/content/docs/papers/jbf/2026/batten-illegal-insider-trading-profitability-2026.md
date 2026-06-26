---
title: "Illegal Insider Trading Profitability and the Legal Environment: Batten, Liu & Sha (2026)"
description: >-
  Distilled: Using 521 hand-collected adjudicated insider-trading cases from
  China (2006-2018), this paper finds that stronger provincial legal environments
  are associated with significantly higher per-trade abnormal returns, consistent
  with a risk-compensation mechanism in which stricter enforcement screens out
  low-return trades and leaves only high-return ones. Journal of Banking and
  Finance 185 (2026) 107609, CC BY 4.0. Six core results with source locators,
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
  outcomeClass: [security-returns]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-12-11; corroborated by artifact p. 1 open-access notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access CC BY 4.0 (Elsevier; machine fetch not attempted, 2026-06-25)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 6
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, probit-regression]
    identification: selection-on-observables
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
    - { ref: R6, outcome: "illegal insider trading BHAR", metric: coefficient, value: "LAW^Institution coeff 0.011*** (SE 0.003) after Heckman selection correction (Table 7, Panel A, col 1)", direction: positive, vsBenchmark: "same sign and significance as OLS baseline; selection bias does not explain the effect" }
  resultType: new-finding
  relatesTo:
    - { cite: "La Porta et al. (1998)", doi: '10.1086/250042', relation: builds-on, note: "law and finance framework connecting legal institutions to investor protection and financial development" }
    - { cite: "Kacperczyk and Pagnotta (2024)", doi: '10.1111/jofi.13299', relation: extends, note: "extends their analysis of legal risk pricing in insider trading to Chinese provincial variation" }
    - { cite: "Kim and Skinner (2012)", doi: '10.1016/j.jacceco.2011.09.005', relation: builds-on, note: "methodology for constructing firm-level ex ante litigation risk via probit model of regulatory sanctions" }
    - { cite: "Becker (1968)", relation: builds-on, note: "rational-crime framework: trade occurs when expected gain exceeds expected penalty; the paper tests this trade-off empirically" }
    - { cite: "Ahern (2020)", relation: cites, note: "evidence on information networks and the determinants of illegal insider trading profitability" }
    - { cite: "Sha et al. (2020)", relation: extends, note: "extends the 'puzzle of low returns of illegal insider trading' in China to show that legal risk explains cross-sectional variation" }
  openQuestions:
    - "Whether the extent of undetected high-profit insider trades materially biases the observed profitability distribution; more robust detection methods and comprehensive data are needed to address this (p. 9)."
    - "Whether market timing ability rather than legal risk drives higher excess returns in high-enforcement provinces, since the two are correlated and difficult to separate in observational data (p. 10)."
    - "Whether the risk-return trade-off generalizes beyond China to other emerging markets with heterogeneous regional enforcement capacity (pp. 13-14)."
  replicationCode:
    status: upon-request
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 1-17 plus appendix tables A1-A4); six core results extracted from Tables 3, 4, 6, 7. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all six core result rows confirmed correct. Fixed eq. 13 Heckman coefficient from ρα to ρσ (PDF p. 9 clearly shows ρσ); fixed dataAccess from hand-collected to licensed-commercial (data:csmar tag is licensed-commercial, the most restrictive tier)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107609", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[]: content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-12-11; plus two tdm-only licenses (Elsevier TDM userlicense 1.0 and tdmrep, both start 2026-04-01)" }
---

**What this is.** The paper's core results, the hypotheses it tests (risk-compensation vs. deterrence), the regression specifications, and the datasets used: enough to know what it found and how, without reading all 17 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1016/j.jbankfin.2025.107609).

## TL;DR

This paper asks whether legal risk is priced in illegal insider trading in China. Using 521 adjudicated insider-trading cases hand-collected from court judgments and China Securities Regulatory Commission (CSRC) sanction documents (2006-2018), the authors measure each insider's buy-and-hold abnormal return (BHAR) and regress it on three proxies for provincial legal environment quality, combined with firm-level ex ante litigation risk. Across all specifications, stronger legal environments are associated with significantly higher per-trade profitability, consistent with a risk-compensation mechanism: stricter enforcement screens out low-return trades, leaving only those with sufficiently high expected gains to justify elevated detection risk. This counterintuitive pattern rules out the simple deterrence story (stricter enforcement reduces profits) in favor of a selective-deterrence story in which observed returns rise because low-return opportunities are filtered away. Firm-level litigation exposure (lnRISK), constructed following Kim and Skinner (2012), further raises BHAR, suggesting insiders incorporate both provincial and firm-specific legal risk into their trading decisions. The findings also rule out M&A rumors, financial literacy, political connections, and corporate governance quality as alternative channels (Sections 5.2-5.5), and survive selection-correction and a range of robustness tests. Kacperczyk and Pagnotta (2024) show a related legal-risk channel for legal insider trading in the US; this paper extends that logic to illegal trading in an emerging-market setting with rich within-country legal variation. The evidence aligns with the rational-crime model of Becker (1968): insiders behave as rational agents weighing expected gains against expected penalties. It also extends work by Ahern (2020) on the determinants of illegal insider trading profitability and by Sha et al. (2020) on the puzzle of low average returns in China's insider-trading cases.

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

**Overall (paper's conclusion).** Provincial legal quality plays a decisive role in shaping insider-trading outcomes. Insiders weigh expected gains against enforcement risk and trade only when the anticipated return exceeds the expected penalty, consistent with the rational-crime framework of Becker (1968) and extending the law and finance literature of La Porta et al. (1998) to the enforcement of securities law. Stricter legal environments produce higher conditional profitability because only high-return trades survive deterrence. Firm-level litigation exposure reinforces this relationship. Results are robust to selection-correction procedures, alternative return measures, dummy-variable legal proxies, and geographic heterogeneity tests. Political connections, M&A rumors, and financial literacy of the insider do not explain the premium. Insiders who are closer to the CSRC in Beijing face the strongest legal environment effects (Table 10), consistent with tighter central oversight raising the required risk premium.

## Theory / model

The paper has no formal structural model; the theoretical frame is organized around two competing hypotheses derived from the rational-crime model of Becker (1968) and extended by the law-and-finance literature of La Porta et al. (1998).

**Deterrence hypothesis (H1a):** Stronger legal environments raise expected penalties, reducing the profitability of illegal insider trades by making even high-information trades unattractive.

**Risk-compensation hypothesis (H1b):** Stronger legal environments deter low-return trades altogether. The trades that still occur are a selective right-tail subset with unusually high expected gains. The conditional average observed return rises even as the unconditional volume falls. The selection effect dominates the deterrence effect.

**Firm-level litigation hypothesis (H2):** Firm-level ex ante litigation risk (probability of regulatory sanction, conditional on trading at a particular company) increases BHAR because insiders at high-litigation-risk firms require higher compensation for elevated firm-specific enforcement exposure. This is incremental to the provincial-level effect.

The hypotheses predict opposite signs on the legal environment coefficient in the BHAR regression: H1a predicts a negative coefficient (deterrence reduces profits), H1b predicts a positive coefficient (risk compensation raises the conditional mean). The data strongly support H1b and H2.

The intuition for H1b follows from the rational-crime trade-off. Define the insider's decision as: trade if and only if expected gain exceeds expected penalty:

$$\mathbb{E}[\text{gain}] > p(\text{detection}) \times \text{penalty}$$

In a stronger legal environment, $$p(\text{detection})$$ rises, so the threshold gain required to justify trading also rises. The observed (adjudicated) trades are draws from the right tail of the gain distribution. As the threshold rises with legal quality, the observed conditional mean rises even if the full distribution of potential gains is unchanged. The paper's data capture only adjudicated cases, so the composition of observed returns shifts upward in high-enforcement provinces.

## Method

The paper applies `panel-regression` as the primary estimator and `probit-regression` as a first-stage tool for constructing the ex ante litigation-risk mediator following the methodology of Kim and Skinner (2012).

**Baseline OLS with fixed effects (Models 3-4, pp. 5-6, Table 4).** BHAR is regressed on the provincial legal environment proxy, optionally with firm characteristics, and with industry and year fixed effects. Standard errors are clustered at both the firm and year levels. Three legal environment proxies are used in separate columns: LAW^Institution (the "market intermediaries and legal environment" sub-index of the Wang et al. (2017) Marketization Index), LAW^Environment (the overall legal environment sub-index), and LAW^Resources (the provincial judicial resources index of Gao et al. (2016)).

**Mediation analysis (Models 5-6, pp. 7-8, Table 6).** To assess whether ex ante litigation risk is the channel through which the legal environment affects BHAR, a two-equation mediation system is estimated. First, litigation risk (lnRISK) is regressed on the legal environment proxies and firm characteristics (eq. 5, p. 8):

$$\text{Med} = \beta_0 + \beta_1 \text{Law} + \beta_2 \text{Firm Characteristics} + \text{Ind} + \text{Year} + \varepsilon \tag{5}$$

Second, BHAR is regressed on both the mediator and the legal environment proxies (eq. 6, p. 8):

$$\text{BHAR} = \gamma_0 + \gamma_1 \text{Med} + \gamma_2 \text{Law} + \gamma_3 \text{Firm Characteristics} + \text{Ind} + \text{Year} + \varepsilon \tag{6}$$

If $$\gamma_1$$ is significant and $$\gamma_2$$ remains significant, the litigation risk channel is a partial (not complete) mediator of the legal environment effect. Results in Table 6 confirm both coefficients are significant at the 5% level across all three legal environment proxies.

**Heckman selection correction (Models 7-13, pp. 8-10, Table 7).** Since only detected insider-trading cases are observable, the observed BHAR may be a biased estimate of the full population BHAR. The paper addresses this via Heckman's two-step procedure. Two probit first-stage models identify the probability of appearing in the sample: (i) detection likelihood based on company characteristics (eq. 11), and (ii) top-30% profitability rank within the sample (eq. 12):

$$\text{Prob}(S_{\text{litigation}} = 1) = a + b_1 \text{Firm Characteristics} + \eta \tag{11}$$

$$\text{Prob}(S_{\text{profit}} = 1) = a + b_1 \ln\text{ME} + b_2 \ln\text{BE/ME} + b_3 \text{MOM} + b_4 \text{TURNOVER} \tag{12}$$

The Inverse Mills Ratio (IMR) from each first stage is included as an additional control in the BHAR regression (eq. 13):

$$\text{BHAR}_{i,j,t} = \alpha_0 + \alpha_1 \text{LAW}_{j,t} + \alpha_2 \text{Firm Characteristics}_{i,j,t} + \rho\sigma\, \text{IMR}_{i,j,t} + \text{Ind}_{j,t} + \text{Year}_t + \varepsilon_{i,j,t} \tag{13}$$

The legal environment coefficient remains positive and significant at the 1% level after the IMR correction in both panels of Table 7, ruling out selection bias as the driver of the main result.

## Empirical specifications

**Dependent variable construction (eqs. 1-2, p. 4, Table 1).** For each adjudicated insider-trading case $$i$$, the raw holding-period return is computed from the legal documents:

$$\text{ret}_{\text{Raw}_i} = \frac{\text{Amount of illegal income}_i}{\text{Trading volume}_i \times \text{Closing price}_{i,\text{PurchaseDay}}} \tag{1}$$

The market-adjusted benchmark return for the same holding period is:

$$\text{ret}_{\text{benchmark}_i} = \frac{\text{Closing price}_{i,\text{SellDay}} - \text{Closing price}_{i,\text{PurchaseDay}}}{\text{Closing price}_{i,\text{PurchaseDay}}} \tag{2}$$

BHAR equals the difference between the raw insider trading return and the benchmark return. For cases where trading occurs over multiple days, the average daily closing price during the trading dates is used. The amount of illegal income, trading volumes, and dates are read directly from the court judgment or CSRC sanction document for each case.

**Baseline regression specifications (eqs. 3-4, p. 5, Table 4).** The two baseline models are:

$$\text{BHAR}_{i,j,t} = \alpha_0 + \alpha_1 \text{LAW}_{j,t} + \text{Ind}_{j,t} + \text{Year}_t + \varepsilon_{i,j,t} \tag{3}$$

$$\text{BHAR}_{i,j,t} = \alpha_0 + \alpha_1 \text{LAW}_{j,t} + \alpha_2 \text{Firm Characteristics}_{j,t} + \text{Ind}_{j,t} + \text{Year}_t + \varepsilon_{i,j,t} \tag{4}$$

where $$i$$ indexes the insider-trading case, $$j$$ the company, and $$t$$ the year. $$\text{LAW}_{j,t}$$ is one of the three provincial legal environment proxies for the province where company $$j$$ is registered. Firm characteristics (lagged two months to align with public availability) include: size (lnME), book-to-market ratio (lnBE/ME), momentum (MOM), turnover ratio, leverage (DEBT/ASSET), return on equity (ROE), cash/assets ratio, firm age, institutional ownership (FUND), and state-ownership dummy (DSOE). Industry and year fixed effects are included in all specifications; standard errors are clustered at both the firm and year levels.

Table 4 columns 1-3 report model (3) for the three legal environment proxies; columns 4-6 report model (4). All six coefficients on the legal environment measures are positive and significant (1% for LAW^Institution and LAW^Environment; 1% and 5% for LAW^Resources). The adjusted R² ranges from 0.139 to 0.207.

**Robustness.** Alternative dependent variable: BHAR_High, computed using the highest stock price during the holding period (Table 8). Alternative legal proxies: binary dummies based on the national median of each index (Table 9). Selection correction: Heckman two-step with two alternative first stages (Table 7, Panels A and B). Geographic heterogeneity: subsamples of cases near the CSRC (Beijing-Tianjin-Hebei region) vs. far provinces (Table 10). Market conditions: bear vs. bull market subsamples (Table 11). Corporate governance: ESG score, managerial ownership, CEO duality, and G-index added to model (4) (Table 12); legal environment coefficients remain positive and significant.

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

Source: peer-reviewed, *Journal of Banking and Finance* 185 (2026) 107609. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Batten, Jonathan A., Lanlan Liu, and Yezhou Sha.
> "Illegal insider trading profitability and the legal environment."
> *Journal of Banking and Finance* 185 (2026): 107609.
> DOI: 10.1016/j.jbankfin.2025.107609. © 2025 The Author(s). Published by Elsevier B.V.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
