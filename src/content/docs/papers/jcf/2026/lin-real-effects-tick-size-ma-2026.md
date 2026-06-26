---
title: "Real Effects of Tick-Size Adjustments: Lin, Yao & Zou (2026)"
description: >-
  Distilled: Using the SEC's 2016 Tick Size Pilot as an exogenous shock to stock
  liquidity, this paper shows that pilot firms required to quote and trade at a
  larger minimum price increment significantly reduce M&A investment intensity,
  shift toward smaller private targets, cut stock payment, and retain only deals
  with better announcement returns during the two-year pilot; the effect reverses
  partially after the pilot ends. Journal of Corporate Finance 96 (2026), paywalled
  (Elsevier). Nine core results with source locators, the DID specification, and
  channel evidence on information asymmetry and valuation. LLM-distilled, not
  human-verified.
sidebar:
  label: Lin-Yao-Zou 2026
  order: 1
tags: [paper-summary, mergers-acquisitions, stock-liquidity, tick-size, information-asymmetry, panel-regression, natural-experiment, peer-reviewed, unreplicated, data:wrds, data:sdc-platinum]
paper:
  authors: Chen Lin, Wentao Yao, Hong Zou
  authorList:
    - { family: Lin, given: Chen, orcid: 0009-0005-2432-117X, affiliation: University of Hong Kong }
    - { family: Yao, given: Wentao, orcid: 0000-0002-4117-941X, affiliation: Xiamen University }
    - { family: Zou, given: Hong, affiliation: University of Hong Kong }
  year: 2026
  tier: field
  venue: Journal of Corporate Finance 96 (2026) 102890
  venueShort: J. Corp. Finance 2026
  doi: 10.1016/j.jcorpfin.2025.102890
  jel:
    codes: [G18, G34]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: [Corporate Finance and Governance]
  dataAccess: licensed-commercial
  outcome:
    - M&A investment intensity
    - percentage of M&A deal value paid by stock
    - deal completion rate
    - deal announcement returns CAR(-2,2)
  outcomeClass: [firm-real-outcomes, firm-financing, security-returns]
  license: "Elsevier standard journal article licence; no CC licence; content-version tdm (Elsevier TDM 1.0) and stm-asf (policy-017, policy-037); start 2026-01-01 per Crossref"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 9
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression, event-study]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [information-asymmetry, liquidity, financial-constraint]
  scope:
    region: US
    assetClass: US equities (small and mid-cap; 2016 SEC Tick Size Pilot stocks)
    period: 2015Q1..2018Q3
    frequency: quarterly
    dataType: [market, accounting, administrative]
    granularity: [firm, security]
    n: "211 unique firms; 2929 firm-quarter observations; 451 M&A deals"
  findings:
    - { ref: R1, outcome: "M&A investment intensity", metric: coefficient, value: "-0.020** (t = -2.72)", direction: negative, vsBenchmark: "~10.9% decline relative to SD of 0.183; TG1 coefficient insignificant (0.001, t = 0.16)" }
    - { ref: R2, outcome: "M&A investment intensity (non-stock-financed deals)", metric: coefficient, value: "-0.015* (t = -2.10)", direction: negative }
    - { ref: R3, outcome: "M&A investment intensity", metric: coefficient, value: "-0.028** (t = -2.54) triple-DID b1; combined b1+b2 = -0.026 (p = 0.02)", direction: negative, vsBenchmark: "Low-asymmetry (high analyst coverage) firms show a larger reduction than high-asymmetry firms" }
    - { ref: R4, outcome: "M&A investment intensity", metric: coefficient, value: "-0.033** (t = -2.85) triple-DID b1; combined b1+b2 = -0.034 (p = 0.00)", direction: negative, vsBenchmark: "High ex-ante stock valuation or large actual price drop amplifies the reduction" }
    - { ref: R5, outcome: "percentage of M&A deal value paid by stock", metric: pp-effect, value: "-13.7 pp (t = -3.11)", direction: negative }
    - { ref: R6, outcome: "deal completion rate", metric: coefficient, value: "+0.265** (t = 2.27)", direction: positive, vsBenchmark: "Public target down -0.074* (t = -2.01); deal size down -0.273*** (t = -3.09); all Table 5" }
    - { ref: R7, outcome: "deal type (horizontal and diversifying vs vertical)", metric: coefficient, value: "Diversifying -1.887** (t = -2.08); Horizontal -1.482* (t = -1.71) multinomial logit", direction: negative }
    - { ref: R8, outcome: "deal announcement returns CAR(-2,2)", metric: car, value: "+0.023* (t = 2.04)", direction: positive, vsBenchmark: "Pre-pilot TG2&3 coefficient -0.015** (t = -2.45); retained deals generate better announcement returns" }
    - { ref: R9, outcome: "M&A investment intensity (post-pilot reversal)", metric: coefficient, value: "+0.012*** (t = 3.62)", direction: positive, vsBenchmark: "~28% of M&A intensity SD; partial recovery only; TG1 insignificant (0.011, t = 1.51)" }
  resultType: new-finding
  relatesTo:
    - { cite: "Albuquerque et al. (2020)", doi: '10.1016/j.jfineco.2020.07.002', relation: builds-on, note: "Evidence that the 2016 tick size increase lowers stock prices for small-spread stocks via higher information asymmetry and required returns" }
    - { cite: "Huang et al. (2024)", doi: '10.1016/j.jcorpfin.2024.102562', relation: tests, note: "Trading cost-based hypothesis that liquid acquirer stock attracts lower target prices; this paper finds the IA&V channel extends to non-stock-financed deals, so trading cost alone cannot explain the results" }
    - { cite: "Massa and Xu (2013)", doi: '10.1017/s0022109013000604', relation: extends, note: "Value of acquirer stock liquidity for M&A; extended here from cross-sectional acquirer returns to M&A intensity, deal structure, and deal quality" }
    - { cite: "Edmans et al. (2012)", doi: '10.1146/annurev-financial-110311-101826', relation: builds-on, note: "Framework for real effects of financial markets on corporate investment decisions, motivating study of M&A through the lens of stock liquidity" }
    - { cite: "Ye et al. (2023)", relation: cites, note: "Related SEC tick size pilot study on managerial learning from stock prices; this paper focuses on M&A investment rather than internal capital expenditure" }
  openQuestions:
    - "The post-pilot sample is truncated at 2019Q4 to avoid COVID-19 effects, so whether M&A activity fully recovers to pre-pilot levels in the long run is not established (Table 8 note, p. 16)."
    - "The sample covers only firms that conducted at least one M&A in the seven pre-pilot quarters; whether the tick-size shock also affects the entry decision of otherwise inactive acquirers is not examined (p. 7)."
  replicationCode:
    status: upon-request
  extraction:
    - { by: paper-distiller (claude-sonnet-4-6), date: 2026-06-26, role: extracted, note: "Full PDF read (20 pp.); nine core results extracted from Tables 2-8; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all nine Core-results rows confirmed correct against Tables 2-8; two frontmatter errors fixed: G14 removed from JEL codes (PDF lists only G18, G34) and 'Corporate Social Responsibility Reporting' removed from topics (unrelated to paper content); equations and specifications verified term-by-term; no em-dashes or colorful adjectives found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jcorpfin.2025.102890", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[]: content-version tdm (Elsevier TDM 1.0, start 2026-01-01) and content-version stm-asf (policy-017/policy-037, start 2026-01-01); no CC licence present; article is paywalled" }
---

**What this is.** The core results and the estimating specification of the paper: enough to know what it found, how, and which datasets it requires. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.jcorpfin.2025.102890).

## TL;DR

Using the SEC's 2016 Tick Size Pilot as an exogenous shock to stock liquidity, this paper shows that firms whose stocks are assigned to larger minimum price increments (test groups 2 and 3, required to quote and trade at the $0.05 increment) significantly reduce the intensity of their M&A activity relative to control firms during the two-year pilot period. Firms in test groups 2 and 3 also cut stock payments in M&A deals, avoid large and public-target acquisitions, exhibit higher deal completion rates, and concentrate the reduction in horizontal and diversifying (rather than vertical) mergers. The retained deals earn better announcement returns. The evidence points to information asymmetry and valuation costs of lower stock liquidity as the dominant driver, not just the higher trading costs hypothesized by Huang et al. (2024): the reduction in M&A intensity persists even after excluding stock-financed deals, ruling out the trading-cost-only explanation. A partial reversal after the pilot ends corroborates the causal interpretation. Edmans et al. (2012) provide the motivating framework for studying real effects of stock markets on corporate investment.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Firms in test groups 2&3 significantly reduce M&A intensity during the pilot | Table 2, col (2), p. 9 | TestGroup2&3\*Post = -0.020\*\* (t = -2.72); ~10.9% decline relative to SD of 0.183; TG1 insignificant (0.001, t = 0.16) |
| R2 | Reduction persists for non-stock-financed deals, supporting information asymmetry over pure trading-cost explanation | Table 2, col (6), p. 9 | -0.015\* (t = -2.10) after excluding all stock-financed deals from the sample |
| R3 | Channel (information asymmetry): lower ex-ante information asymmetry amplifies the reduction | Table 3, Panel A, col (1), p. 12 | Triple-DID b1 = -0.028\*\* (t = -2.54) with high-analyst-coverage proxy; combined b1+b2 = -0.026 (p = 0.02) |
| R4 | Channel (valuation): higher pre-pilot stock valuation or larger price drop amplifies the reduction | Table 3, Panel B, col (1), p. 12 | Triple-DID b1 = -0.033\*\* (t = -2.85) for high ex-ante stock valuation; combined b1+b2 = -0.034 (p = 0.00) |
| R5 | Pilot firms reduce the share of M&A deal value paid by stock | Table 4, col (1), p. 13 | -13.7 pp\*\*\* (t = -3.11); TG1 insignificant (-3.3 pp, t = -0.64) |
| R6 | Conditional on undertaking M&A, pilot firms avoid public targets and large deals, and complete more deals | Table 5, cols (2), (3), (5), p. 14 | Public target: -0.074\* (t = -2.01); deal size: -0.273\*\*\* (t = -3.09); completed deal: +0.265\*\* (t = 2.27) |
| R7 | The decline in M&A is concentrated in horizontal and diversifying mergers, not vertical | Table 6, cols (1)-(2), p. 16 | Multinomial logit relative to vertical: Diversifying = -1.887\*\* (t = -2.08); Horizontal = -1.482\* (t = -1.71) |
| R8 | Deal announcement returns improve for retained M&A deals of pilot firms | Table 7, col (1), p. 17 | CAR(-2,2): +0.023\* (t = 2.04); pre-pilot TG2&3 coefficient -0.015\*\* (t = -2.45), consistent with retained deals being higher quality |
| R9 | M&A intensity partially recovers after the pilot ends | Table 8, p. 18 | TestGroup2&3\*Post2 = +0.012\*\*\* (t = 3.62); ~28% of SD of M&A intensity; TG1 insignificant (0.011, t = 1.51) |

**Overall (paper's conclusion).** The tick-size increase causes firms to reduce M&A investment by cutting lower-quality acquisitions (horizontal, diversifying) and structuring retained deals more carefully (smaller size, private targets, less stock payment). The disciplinary effect of reduced stock liquidity raises deal announcement returns for pilot firms. M&A activity shows a partial reversal after the pilot ends, consistent with a causal liquidity shock rather than a pre-existing trend.

## Theory / model

The paper has no formal economic model. It tests the *information asymmetry and valuation* hypothesis: a mandatory increase in the minimum price increment reduces stock liquidity (wider bid-ask spreads, lower trading activity), which harms M&A activity through two channels.

**Channel 1 (information asymmetry).** Lower liquidity increases adverse selection by informed traders and raises uncertainty about acquirer value. Target shareholders find it harder to assess the value of acquirer stock offered as deal consideration, raising the effective cost of stock-financed acquisitions. More broadly, lower liquidity increases the cost of equity financing via higher required returns (Albuquerque et al. (2020)), and can raise debt financing costs by reducing stock price informativeness and weakening monitoring (Brogaard et al. (2017), Brogaard et al. (2021)). These forces make the acquirer a less attractive counterparty, particularly for public targets that scrutinize valuation carefully.

**Channel 2 (valuation).** Pilot stocks experience actual price declines due to higher required returns (Albuquerque et al. (2020)). Firms with a higher pre-pilot stock valuation (high Tobin's Q) or those that actually experience a large price drop face a more severe collateral-and-financing shock. The paper predicts these firms cut M&A activity more, which is confirmed by R3-R4.

The competing *trading cost-based hypothesis* (Huang et al. (2024)) predicts that lower acquirer stock liquidity primarily discourages stock-financed deals by making post-merger cash-out trading costly for target shareholders. This hypothesis predicts no reduction in the intensity of non-stock-financed deals, which is the main discriminating prediction tested in R2 (Table 2, col 6).

**Identification.** The SEC's 2016 Tick Size Pilot randomly assigned 1199 control stocks and 400 stocks per test group from among FINRA-listed small and mid-cap common stocks (market cap at most $3 billion, closing price at least $2, average daily volume at most one million shares) via a stratified random sampling process disclosed publicly. The randomization is confirmed by Table 1, Panel C: no statistically significant pre-pilot differences in M&A intensity or acquirer characteristics between test and control groups (t-tests and Kolmogorov-Smirnov tests, p. 9). Test group 1 stocks are required to quote at $0.05 but can continue to trade at the pre-pilot $0.01 increment; test groups 2 and 3 are required to both quote and trade at $0.05 (with test group 3 additionally subject to a trade-at rule). The paper pools test groups 2 and 3 because they face the same effective tick size in trading, while test group 1 is used as an additional control.

## Method

The main estimating equation (Eq. 1 in the paper, p. 7) is a firm-by-year-quarter OLS panel regression estimated on a symmetric window of seven pre-pilot quarters and seven post-pilot quarters, with the event quarter (2016Q4) excluded:

$$
\text{M\&A intensity}_{it} = \eta_i + \psi_{jt} + \beta_1 \, \text{TG1}_i \times \text{Post}_t + \beta_2 \, \text{TG2\&3}_i \times \text{Post}_t + \beta_4 X_{it} + \varepsilon_{it} \tag{1}
$$

where $$\eta_i$$ are firm fixed effects, $$\psi_{jt}$$ are industry (2-digit SIC)-by-year-quarter fixed effects, $$\text{TG1}_i$$ is a dummy for assignment to test group 1, $$\text{TG2\&3}_i$$ is a dummy for assignment to test groups 2 or 3, $$\text{Post}_t$$ equals one for the seven pilot quarters (2017Q1-2018Q3) and zero for the seven pre-pilot quarters (2015Q1-2016Q3), and $$X_{it}$$ is a vector of controls (log total assets, market-to-book ratio, leverage, cash flow, institutional ownership). The coefficient $$\beta_2$$ is the average treatment effect of the tick-size increase on M&A intensity for firms in test groups 2 and 3 relative to the control group. Standard errors are clustered at both the firm and year-quarter level throughout.

This specification builds on `difference-in-differences` identification and `panel-regression` with two-way fixed effects.

**Channel analysis (triple-DID).** To identify the information asymmetry channel, the specification adds a third interaction layer (Section 4.4, p. 11):

$$
\text{M\&A intensity}_{it} = \eta_i + \psi_{jt} + b_1 \, \text{TG2\&3}_i \times \text{Post}_t \times \text{LowAsymm}_i + b_2 \, \text{TG2\&3}_i \times \text{Post}_t + \cdots + \beta_4 X_{it} + \varepsilon_{it}
$$

Three proxies for low ex-ante information asymmetry (*LowAsymm*) are used: high analyst coverage (top tercile of coverage over the seven pre-pilot quarters), low earnings forecast dispersion (bottom tercile of EPS forecast standard deviation over absolute mean EPS), and small bid-ask spread (average daily quoted spread at most 3 cents in the pre-pilot period, following Albuquerque et al. (2020) and Ran and Ye (2024)). The prediction is $$b_1 < 0$$ and the combined $$b_1 + b_2 < 0$$ with $$|b_1 + b_2| > |b_2|$$: firms that were more transparent pre-pilot experience a larger decline in M&A intensity when the tick size increases, because the cost of the information asymmetry shock is proportionally larger for them. An analogous triple-DID tests the valuation channel, replacing *LowAsymm* with *HighValuation* (pre-pilot Tobin's Q in top tercile) or *LargePriceDrop* (actual stock price decline from pre-pilot to pilot period in top tercile).

**Deal-level outcomes and deal type.** For deal-level binary outcomes (public target, completed deal) and the continuous stock payment fraction and deal size, the estimator is OLS DID at the deal level with industry (2-digit SIC) and time fixed effects only (insufficient within-firm variation for firm FE given the infrequent deal sample). For deal-type classification (diversifying, horizontal, or vertical), the paper uses a multinomial logit DID with the same treatment structure and vertical mergers as the reference category. Announcement returns (CAR) use the `event-study` approach: abnormal return on day $$d$$ is actual return minus the normal return predicted by a value-weighted CRSP index market model estimated over (-210, -11), with at least 120 non-missing daily returns required. The five-day window (-2, +2) around the announcement date is then summed to form CAR(-2,2).

## Empirical specifications

**Main DID (Tables 2, 4, 5, 7, 8; results R1, R2, R5, R6, R8, R9).** Eq. (1) above, estimated with firm FE + industry-time FE at the firm-quarter level, or with industry (SIC2) FE + time FE at the deal level. The seven-quarter pre-period is 2015Q1-2016Q3 and the seven-quarter pilot period is 2017Q1-2018Q3 (2016Q4 excluded as the event quarter). For the post-pilot reversal test (Table 8), the window shifts to compare the five pilot quarters 2017Q3-2018Q3 against the five post-pilot quarters 2018Q4-2019Q4, stopping at 2019Q4 to avoid COVID-19 contamination. Controls ($$X_{it}$$): log total assets (Firm size), leverage (sum of long-term and short-term debt over total assets), market-to-book (M/B), cash flow from operations over total assets, institutional ownership fraction. All continuous variables winsorized at the 1st and 99th percentiles.

**Parallel trends check (Table 2, col 5; Fig. 1, p. 10).** A dynamic lead-lag DID defines two-quarter indicator dummies in the pre-pilot period backward from the reference quarter (-1 = 2016Q3) and one- or two-quarter indicators in the pilot period. No significant pre-trend divergence between test groups 2-3 and the control group is found in M&A intensity before the pilot (Fig. 1); the statistically significant drop emerges in periods +3 and +4 after pilot initiation.

**Triple-DID channel tests (Table 3, p. 12; R3 and R4).** Same two-way fixed effects structure as Eq. (1), adding $$\text{TG2\&3}_i \times \text{Post}_t \times \text{Channel}_i$$ as the key coefficient (b1). Observations are restricted to test groups 2-3 and the control group; test group 1 interactions enter as separate controls. Both the asymmetry proxies (Panel A: three proxies) and the valuation proxies (Panel B: two proxies) yield significant b1 at the 5% level, with the combined b1+b2 significant at the 5% level or better and negative, supporting both channels of the information asymmetry and valuation hypothesis.

**Stock payment DID (Table 4, p. 13; R5).** Dependent variable is the percentage of deal value paid by acquirer stock. For deals with missing stock payment percentage but inferrable zero values (remaining payment components sum to 100%), the stock fraction is set to zero. Only industry and time fixed effects used at the deal level. Massa and Xu (2013) provides the benchmark for interpreting these results.

**Deal characteristics DID (Table 5, p. 14; R6).** Three separate OLS DIDs with Public target, Deal size (deal value over acquirer total assets), and Completed deal as dependent variables, each including industry FE and time FE. The increase in deal completion (+0.265**, t = 2.27, col 5) implies that conditional on undertaking M&A, pilot firms in test groups 2-3 are approximately 27 percentage points more likely to complete a deal than control firms.

**Multinomial logit deal types (Table 6, p. 16; R7).** Vertical merger (vertical relatedness coefficient between acquirer and target SIC-4 industries exceeding 1%, from the 2012 US BEA Input-Output tables) is the reference category. Coefficients on $$\text{TG2\&3}_i \times \text{Post}_t$$ are negative and significant for both diversifying (-1.887**, t = -2.08 in col 1; -2.014**, t = -2.17 with controls in col 3) and horizontal (-1.482*, t = -1.71 in col 2; -1.605*, t = -1.80 with controls in col 4) relative to vertical.

**Announcement return DID (Table 7, p. 17; R8).** The five-day CAR(-2,2) is regressed on the same DID structure as Eq. (1) at the deal level, controlling for deal size, all-cash indicator, diversifying deal indicator, and public target. The key coefficient $$\text{TG2\&3}_i \times \text{Post}_t = +0.023$$ (t = 2.04) represents a 2.3-percentage-point improvement in announcement returns for retained deals; this holds for non-stock-financed deals too (col 2, +0.030*, t = 2.04), consistent with the information asymmetry and valuation hypothesis rather than the trading cost-based hypothesis.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP (via WRDS) | Daily stock returns, prices, market capitalization, bid-ask spreads; pilot stock identification and market model estimation | [WRDS / CRSP](/wiki/commercial/wrds/) |
| Compustat (via WRDS) | Total assets, leverage, market-to-book, cash flow, book equity; acquirer financial characteristics | [WRDS / Compustat](/wiki/commercial/wrds/) |
| Thomson Reuters Institutional Holdings (via WRDS) | Institutional ownership fraction (13F-based) | [WRDS](/wiki/commercial/wrds/) |
| I/B/E/S (via WRDS) | Analyst coverage count; earnings forecast dispersion (proxies for ex-ante information asymmetry in channel tests) | [WRDS](/wiki/commercial/wrds/) |
| SDC Platinum Mergers and Acquisitions Database | M&A deal identification, announcement dates, deal size, payment method (stock fraction), target type (public/private), deal completion status, deal type | no page yet |
| FINRA tick size pilot stock list | Assignment of CRSP stocks to control group and test groups 1, 2, 3 via stratified random sampling | no page yet |
| BEA 2012 US Input-Output Table | Vertical relatedness coefficients between any two 4-digit SIC industries; used to classify acquisitions as vertical, horizontal, or diversifying | no page yet |

Sample: seven pre-pilot quarters (2015Q1-2016Q3) and seven post-pilot quarters (2017Q1-2018Q3); 211 unique acquirer firms with at least one M&A deal in the pre-pilot period (39 in test group 1, 34 in test group 2, 36 in test group 3, 102 in control); 2929 firm-quarter observations and 451 M&A deals (deal-level sample).

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jcorpfin.2025.102890) if you are: examining the three information asymmetry proxies and two valuation proxies in the triple-DID channel tests (Table 3); studying the full set of deal structure and type shifts (Tables 5-6); or tracing the parallel trends plots quarter by quarter (Fig. 1). Table 8 documents the partial post-pilot reversal and is useful for understanding recovery dynamics after a liquidity shock.

Unlike Ye et al. (2023), who study how the same 2016 pilot affected the sensitivity of internal investment (Tobin's Q) to stock prices through managerial learning, this paper focuses on external M&A investment; the authors note that, taken together with Ye et al. (2023), the evidence speaks to a potential bright side of a larger tick size.

## Attribution and rights

Source: peer-reviewed, *Journal of Corporate Finance* 96 (2026), article 102890. Published by Elsevier B.V. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The article is paywalled; no CC licence is present. Extract-only redistribution.

> Lin, Chen, Wentao Yao, and Hong Zou. "The real effects of tick-size adjustments: Evidence from the 2016 tick-size pilot." *Journal of Corporate Finance* 96 (2026): 102890. DOI: 10.1016/j.jcorpfin.2025.102890. Published by Elsevier B.V. All rights reserved.
