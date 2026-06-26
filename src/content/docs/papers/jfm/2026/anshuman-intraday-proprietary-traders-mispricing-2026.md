---
title: "Intraday Proprietary Traders and Short-Term Mispricing: Anshuman et al. (2026)"
description: >-
  Distilled: Using trader-level BSE transaction data and hand-collected Indian TV analyst recommendations,
  the paper shows only intraday proprietary traders trade contrarian against short-term recommendation-induced
  mispricing, earning informed-trading profits while bearing liquidity costs; overnight proprietary traders
  provide liquidity but do not exploit the mispricing. Journal of Financial Markets 2026, paywalled. Six core
  results with source locators, datasets used, and the empirical specifications.
sidebar:
  label: Anshuman et al. 2026
  order: 1
tags: [paper-summary, market-microstructure, equities, price-discovery, emerging-markets, panel-regression,
       peer-reviewed, unreplicated, data:bse-intraday, data:cmie-prowess]
paper:
  authors: V. Ravi Anshuman, Prachi Deuskar, Krishnamurthy V. Subramanian, Ramabhadran S. Thirumalai
  authorList:
    - { family: Anshuman, given: "V. Ravi", affiliation: Indian Institute of Management Bangalore }
    - { family: Deuskar, given: Prachi, orcid: "0000-0001-6431-8833", affiliation: Indian School of Business }
    - { family: Subramanian, given: "Krishnamurthy V.", orcid: "0000-0001-7874-9749", affiliation: Indian School of Business }
    - { family: Thirumalai, given: "Ramabhadran S.", orcid: "0000-0001-9251-6829", affiliation: Indian School of Business }
  year: 2026
  venue: Journal of Financial Markets 78 (2026) 101028
  venueShort: J. Fin. Markets 2026
  tier: lower
  doi: 10.1016/j.finmar.2025.101028
  jel:
    codes: [G14, G15]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Financial Markets and Investment Strategies"]
  dataAccess: proprietary-confidential
  outcome:
    - contrarian net total buying by trader type around TV analyst recommendations
    - informed trading returns vs liquidity provision returns by trader type
    - contemporaneous price correction contribution by intraday proprietary traders
  outcomeClass: [security-returns, market-microstructure]
  license: "Elsevier proprietary; 1386-4181/copyright 2025 Elsevier B.V. All rights reserved, including those for text and data mining, AI training, and similar technologies (printed on PDF p. 1)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect; license confirmed all-rights-reserved from Crossref, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, conditional-logit, matching, event-study]
    identification: selection-on-observables
  contributionType: [new-fact]
  mechanisms: [information-asymmetry, limits-to-arbitrage]
  introducesData: true
  scope:
    region: India
    assetClass: Indian equities (BSE-listed stocks)
    period: 2009-07..2016-03
    frequency: daily
    dataType: [market, administrative, other]
    granularity: [security, transaction]
    n: "26,827 recommendations on 1,230 unique BSE-listed stocks; matched sample of 24,657 stock-days"
  findings:
    - { ref: R1, outcome: intraday stock price deviation from TV analyst recommendation, metric: return-spread, value: "buy recs: DGTW-adj Day 0 return vs control = +0.80 bps (t=27.77***); sell recs: -0.41 bps (t=-10.06***); full reversal within ~10 days (Table 2, Fig. 1)", direction: mixed }
    - { ref: R2, outcome: contrarian net total buying by intraday proprietary traders, metric: coefficient, value: "NTB significantly negative (selling) in first half hour for buy recs; significantly positive (buying) for sell recs; near-zero for overnight prop traders across all half hours (Fig. 5, p. 13)", direction: mixed }
    - { ref: R3, outcome: informed trading returns for intraday proprietary traders, metric: coefficient, value: "buy recs: ARet_2Cl_Inf = 23.1 bps (t=3.64***); sell recs: 24.5 bps (t=2.55**) (Table 6, p. 17)", direction: positive }
    - { ref: R4, outcome: liquidity provision returns by trader type, metric: coefficient, value: "intraday prop: Liq = -7.22 bps (t=-12.1***) buy recs, -11.9 bps (t=-10.1***) sell recs; overnight prop: Liq = +3.81 bps (t=3.82***) buy, +9.38 bps (t=3.65***) sell; informed trading insignificant for overnight (Table 6, p. 17)", direction: mixed }
    - { ref: R5, outcome: contemporaneous price correction contribution by intraday proprietary traders, metric: basis-points, value: "buy recs: -1.94 bps (t=-7.45***), 12-13% of first-half-hour return; sell recs: +3.37 bps (t=7.69***), 17-22% of first-half-hour return (Table 8, p. 22)", direction: mixed }
    - { ref: R6, outcome: contrarian net total buying by intraday proprietary traders beyond recommendation day, metric: coefficient, value: "intraday NTB remains significantly contrarian in first half hour on Days 1-5; first-half-hour returns continue reversing; overnight NTB insignificant throughout (Fig. 9, p. 25)", direction: mixed }
  resultType: new-finding
  relatesTo:
    - { cite: "Engelberg, Sasseville & Williams (2012)", doi: '10.1287/mnsc.1100.1290', relation: extends, note: "extends their US TV-recommendation mispricing finding to India with trader-level data distinguishing intraday from overnight proprietary traders" }
    - { cite: "Kaniel et al. (2012)", doi: '10.1111/j.1540-6261.2012.01727.x', relation: builds-on, note: "applies their return decomposition into liquidity provision and informed trading components to classify intraday vs overnight prop trader returns" }
    - { cite: "Biais et al. (2016)", relation: tests, note: "tests who supplies liquidity among proprietary traders; finds intraday traders are arbitrageurs while overnight traders are liquidity providers, extending their evidence" }
  replicationCode:
    status: none
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (28 pp. + references); six results extracted from Tables 2, 5, 6, 8 and Figs. 1, 5, 9. Not human-verified. Not reproduced. Authors state the data cannot be shared (Data availability, p. 27)." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; all six Core-results rows confirmed (Table 2, Table 6, Table 8, Figs. 5/6/9). Fixed: JEL G12 removed (PDF lists only G14/G15); topics corrected (removed 'Consumer Market Behavior and Pricing' and 'Sports Analytics and Performance'); sell treatment count corrected from 4,814 to 6,414 in Datasets section (PDF p. 6 and Table 2); ARet_2CI_Inf corrected to ARet_2Cl_Inf in findings R3. Equations (1)-(4), (8), (11)-(13) verified term-by-term; no equation errors found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.finmar.2025.101028", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[]: content-version tdm URL https://www.elsevier.com/tdm/userlicense/1.0/; content-version stm-asf (multiple Elsevier policy DOIs); no CC license present; Elsevier all-rights-reserved confirmed" }
---

**What this is.** The paper's core results, the empirical design, and the main regression specifications: enough to know what it found and how, without reading all 28 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.finmar.2025.101028).

## TL;DR

Using a hand-collected dataset of Indian TV analyst recommendations (CNBC Awaaz Stock 20/20, July 2009 to March 2016) matched with BSE trader-level intraday order and trade data, the paper documents that TV analyst recommendations create temporary mispricing that fully reverts within about two weeks, extending the US evidence of Engelberg et al. (2012) to an emerging-market setting with trader-level data. Among the investor categories studied (individuals, institutions, intraday proprietary traders, overnight proprietary traders), only intraday proprietary traders trade contrarian in the first half hour, selling buy-recommended stocks and buying sell-recommended stocks. Their trades earn positive returns from informed trading and negative returns from liquidity provision (they pay a small liquidity cost), consistent with the interpretation that they are informed arbitrageurs rather than liquidity providers. Overnight proprietary traders do the opposite: they provide liquidity and earn positive returns from it but earn no significant returns from informed trading. Intraday proprietary traders account for 12 to 22 percent of the contemporaneous price correction in the first half hour, and they continue their contrarian activity over the following five trading days.

## Core results

Magnitudes and significance are as reported; `\*\*` / `\*\*\*` = 5% / 1%; ns = not significant. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | TV recommendations create temporary mispricing; prices fully revert to pre-recommendation levels within ~10 days | Table 2, Fig. 1, p. 7 | Buy recs: DGTW-adj Day 0 return vs matched control = +0.80 bps\*\*\* (t=27.77); sell recs: -0.41 bps\*\*\* (t=-10.06); complete reversal by day ~10 |
| R2 | Only intraday (not overnight) prop traders trade contrarian in the first half hour; institutions are not contrarian | Fig. 5, pp. 12-13; Fig. 6, p. 14 | Intraday NTB significantly negative (selling) for buy recs, positive (buying) for sell recs in first half hour; overnight NTB near zero; result robust to matched-set, trader, and stock-by-date fixed effects |
| R3 | Intraday prop traders earn significant informed-trading profits even after bearing a negative liquidity cost | Table 6, p. 17 | Buy recs: informed trading returns = +23.1 bps\*\*\* (t=3.64), liquidity provision = -7.22 bps\*\*\* (t=-12.1); sell recs: informed = +24.5 bps\*\* (t=2.55), liquidity = -11.9 bps\*\*\* (t=-10.1) |
| R4 | Overnight prop traders earn positive returns from liquidity provision and no significant informed-trading returns | Table 6, p. 17 | Buy recs: liquidity = +3.81 bps\*\*\* (t=3.82), informed = -8.4 bps (t=-0.88, ns); sell recs: liquidity = +9.38 bps\*\*\* (t=3.65), informed = -19.0 bps (t=-1.04, ns) |
| R5 | Intraday prop traders account for 12-22% of first-half-hour price correction | Table 8, p. 22 | Buy recs: contribution = -1.94 bps\*\*\* (t=-7.45), 12-13% of first-half-hour return; sell recs: +3.37 bps\*\*\* (t=7.69), 17-22% of first-half-hour return |
| R6 | Intraday prop traders continue contrarian activity on Days 1-5 after recommendation; overnight traders remain inactive | Fig. 9, pp. 24-25 | Intraday NTB remains significantly contrarian in first half hour on Days 1-5; first-half-hour returns continue reversing in tandem; overnight NTB insignificant throughout |

**Overall (paper's conclusion).** Intraday proprietary traders are the only category that actively exploits short-term mispricing caused by TV analyst recommendations. They act as informed arbitrageurs, earning positive informed-trading returns despite paying a small liquidity cost. Overnight proprietary traders provide liquidity and earn compensation for it but do not exploit the mispricing, consistent with the evidence in Biais et al. (2016) that some proprietary traders specialize in liquidity supply. Policies designed to curtail short-term trading must account for the beneficial role of intraday proprietary traders in price efficiency.

## Theory / model

The paper tests no formal model of its own. It draws on theoretical models of short-term speculation positing that short-term investors specialize in information about the behavior of other market participants rather than fundamental value (Tirole (1982), De Long et al. (1990), Froot et al. (1992)). The central empirical question is which investor category corrects temporary mispricing and how they profit from doing so.

**Identification.** TV analyst recommendations on CNBC Awaaz Stock 20/20 are treated as an exogenous shock to stock prices. The program targets individual retail investors whose trading creates price pressure in the first half hour. Selection of stocks into the program is addressed using propensity score matching via a conditional logit model (Table A.1, Internet Appendix), matching each recommended stock to a control stock with similar lagged return, volume, market capitalization, book-to-market ratio, analyst coverage, index membership, and individual investor ownership fraction (p. 6). Results are robust to three increasingly stringent fixed-effect structures that absorb unobservable time-invariant and time-varying confounders at the matched-set, trader, and stock levels.

**Hypotheses tested.**

1. TV recommendations create temporary mispricing: prices deviate on Day 0 and revert over the following days.
2. Among sophisticated investors, only intraday proprietary traders trade contrarian in the first half hour against the recommendation direction.
3. Intraday prop traders earn returns from informed trading (private information about other participants' behavior) rather than from liquidity provision.
4. Overnight prop traders earn returns from liquidity provision rather than from informed trading.

## Method

The paper applies panel regression, propensity-score `matching` via `conditional-logit`, and an `event-study` design. It builds on `panel-regression` for the NTB and return-decomposition specifications.

**Trader classification (eq. 2, p. 8).** Proprietary traders (BSE client code "OWN") are split into intraday vs overnight groups using a trader-specific inventory measure: for trader $$k$$, stock $$i$$, day $$d$$,

$$
\text{Inventory}_{k,i,d} = \frac{\bigl|\text{No.\,shares bought}_{k,i,d} - \text{No.\,shares sold}_{k,i,d}\bigr|}{\text{Total no.\,shares traded}_{k,i,d}} \tag{2}
$$

The trader-specific inventory is the median of $$\text{Inventory}_{k,i,d}$$ across all stock-days on which trader $$k$$ was active. Traders below (at or above) the cross-trader median are intraday (overnight) proprietary traders.

**Net total buying (NTB) regression (eq. 1, p. 10).** For each investor category, NTB in half hour $$h$$ is the rupee value of buyer-initiated minus seller-initiated trades as a percentage of total volume. The baseline specification:

$$
\text{NTB}_{i,d,h} = \sum_{h=1}^{13} \beta_h I_h + \sum_{h=1}^{13} \gamma_h I_h \cdot \text{Treated}_{i,d} + \varepsilon_{i,d,h} \tag{1}
$$

where $$I_h$$ is a half-hour indicator and $$\text{Treated}_{i,d} = 1$$ if stock $$i$$ received a recommendation on day $$d$$. The $$\gamma_h$$ coefficients capture the difference in NTB between recommended and control stocks in half hour $$h$$. Three fixed-effect extensions absorb unobservables:

$$
\text{NTB}_{k,i,j,d,h} = \sum_{h=1}^{13} \beta_h I_h + \sum_{h=1}^{13} \gamma_h I_h \cdot \text{Treated}_{i,d} + \delta_{j,d,h} + \varepsilon_{k,i,j,d,h} \tag{3, D-MS-HH}
$$

$$
\text{NTB}_{k,i,j,d,h} = \sum_{h=1}^{13} \beta_h I_h + \sum_{h=1}^{13} \gamma_h I_h \cdot \text{Treated}_{i,d} + \delta_{k,d,h} + \varepsilon_{k,i,j,d,h} \tag{4, D-Tr-HH}
$$

where $$\delta_{j,d,h}$$ = matched-set-by-date-by-half-hour FE and $$\delta_{k,d,h}$$ = trader-by-date-by-half-hour FE.

**Return decomposition (eq. 8, p. 16).** Following Kaniel et al. (2012), the return from the end of the first half hour to the day's close ($$\text{Ret\_2Cl}$$) is regressed on the net total buying of both proprietary trader groups, using only control stocks:

$$
\text{Ret\_2Cl}_{c,d} = \alpha + \beta_1 \text{SNTB}_{c,d,1,\text{ID}} + \beta_2 \text{SNTB}_{c,d,1,\text{ON}} + \theta \text{Ret}_{c,d,1} + \varepsilon_{c,d} \tag{8, Model B}
$$

where $$\text{SNTB}$$ is net total buying scaled by mean volume, subscripts ID and ON denote intraday and overnight prop traders, and $$\text{Ret}_{c,d,1}$$ controls for first-half-hour return (reversal). Fitted values give the estimated return to normal liquidity provision; the residual (actual return minus fitted) is the informed-trading return (eqs. 9-10, p. 17).

**Price impact (eq. 11, p. 18).** Per-unit price impact for each trader category is estimated by regressing half-hour returns on net aggressive buying (RNAB, market orders):

$$
\text{Ret}_{i,d,h} = \alpha + \sum_{\text{cat}} \beta_{\text{cat},h} \cdot \text{RNAB}_{i,d,\text{cat},h} + \theta_h \text{Ret\_ClOp}_{i,d} + \varepsilon_{i,d,h} \tag{11, Model O}
$$

estimated separately for recommended and control stocks. Trader category contributions to price correction are the product of estimated $$\hat{\beta}_{\text{cat},h}$$ and actual $$\text{RNAB}_{i,d,\text{cat},h}$$ (eq. 12, p. 20), then regressed on a Treated indicator with matched-set-by-date FE (eq. 13) to get the treatment-minus-control difference.

## Empirical specifications

All headline results use a propensity-score-matched sample from July 2009 to March 2016 (excluding the program hiatus July 2010 to September 2011). Standard errors are clustered at the date level throughout.

**R1 (temporary mispricing, Table 2).** Calendar-time portfolio approach: long in recommended stocks, short in matched control stocks, held for $$n$$ days. The DGTW characteristic-adjusted return (Daniel et al. (1997)) is the outcome measure. Day $$-1$$ close to Day 0 open captures the announcement effect; Day 0 open to close captures the intraday reversal; the combination gives the full Day 0 return. Long-run return to 252 trading days is reported as further evidence of no permanent price effect.

**R2 (contrarian trading, Figs. 4-6).** Equation (1) without FE followed by equations (3) and (4) and a stock-by-date FE variant (D-Stk). Results are multiplied by the average number of traders per group to obtain total category-level NTB.

**R3-R4 (return decomposition, Table 6).** Stocks are sorted daily into terciles of abnormal net total buying (ANTB) in the first half hour. Tercile 3 (most intensive buying/selling) minus Tercile 1 difference is reported separately for each return component. Returns are winsorized at 1%. Decomposition from Models B, R, and RI (eq. 8) is estimated on control stocks and applied to treatment minus control differences.

**R5 (price correction, Table 8).** Price impact estimated from equation (11) separately for buy and sell recommendations. Contribution computed via equation (12) and then equation (13) with matched-set-by-date FE. Reported as basis points and as a fraction of the total first-half-hour treatment-minus-control return.

**R6 (multi-day contrarian activity, Fig. 9).** Equation (1) applied to the first half hour on Days 1-5 post-recommendation. First-half-hour returns (difference treatment vs control) are plotted alongside intraday NTB to document joint behavior.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CNBC Awaaz Stock 20/20 TV recommendations (hand-collected) | Exogenous mispricing shock; buy/sell treatment assignment for 1,230 unique stocks over 968 days | No page yet |
| BSE intraday order and trade data | Trader-level NTB, inventory classification, price impact estimation; all BSE orders and trades July 2009 to March 2016 | No page yet |
| CMIE Prowess database | Daily stock prices, financial statement data (market cap, book-to-market, volume) for propensity score matching | No page yet |

Sample: 26,827 recommendations (20,345 buy, 6,482 sell) on 1,230 unique BSE-listed stocks, July 2009 to March 2016. After propensity score matching: 26,341 matched treatment stock-days (19,927 buy, 6,414 sell) paired with 24,657 control stock-days (18,776 buy, 5,881 sell). Intraday data at the half-hour level; daily stock characteristics from Prowess. The authors explicitly state the data cannot be shared (Data availability, p. 27).

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.finmar.2025.101028) if you are: studying who corrects short-term mispricing in equity markets; working on intraday trading behavior, proprietary traders, or market microstructure in emerging markets; applying the Kaniel et al. (2012) return decomposition to a new setting; examining the policy trade-off between curbing short-term trading and maintaining price efficiency; or studying the role of media (TV/social-media) recommendations in creating temporary price deviations.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Markets* 78 (2026) 101028. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The paper is paywalled (copyright 2025 Elsevier B.V., all rights reserved); no Creative Commons license was found. Extract-only.

> Anshuman, V. Ravi, Prachi Deuskar, Krishnamurthy V. Subramanian, and Ramabhadran S. Thirumalai.
> "Intraday Proprietary Traders and Short-Term Mispricing."
> *Journal of Financial Markets* 78 (2026) 101028.
> DOI: 10.1016/j.finmar.2025.101028. copyright 2025 Elsevier B.V.
