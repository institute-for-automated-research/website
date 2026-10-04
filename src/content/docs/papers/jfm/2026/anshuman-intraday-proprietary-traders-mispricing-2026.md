---
title: "Intraday Proprietary Traders and Short-Term Mispricing: Anshuman et al. (2026)"
description: >-
  Distilled: Using trader-level BSE transaction data and hand-collected Indian TV analyst recommendations,
  the paper shows only intraday proprietary traders trade contrarian against short-term recommendation-induced
  mispricing, earning informed-trading profits while bearing liquidity costs; overnight proprietary traders
  provide liquidity but do not exploit the mispricing. Journal of Financial Markets 2026, paywalled. Fourteen core
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
    - realized trading profits by investor category
    - returns following first-half-hour proprietary trading
  outcomeClass: [security-returns, market-microstructure]
  license: "Elsevier proprietary; 1386-4181/copyright 2025 Elsevier B.V. All rights reserved, including those for text and data mining, AI training, and similar technologies (printed on PDF p. 1)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect; license confirmed all-rights-reserved from Crossref, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 14
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, conditional-logit, matching, event-study]
    identification: selection-on-observables
  contributionType: [new-fact]
  mechanisms: [information-asymmetry, limits-to-arbitrage, liquidity]
  introducesData: true
  scope:
    region: India
    assetClass: Indian equities (BSE-listed stocks)
    period: 2009-07..2016-03
    frequency: mixed
    dataType: [market, administrative, other]
    granularity: [security, transaction]
    n: "26,827 recommendations on 1,230 unique BSE-listed stocks; matched sample of 26,341 treatment and 24,657 control stock-days"
  findings:
    - { ref: R1, outcome: intraday stock price deviation from TV analyst recommendation, metric: return-spread, value: "buy recs: DGTW-adj Day 0 return vs control = +0.80% (t=27.77***); sell recs: -0.41% (t=-10.06***); full reversal within ~10 days (Table 2, Fig. 1)", direction: mixed }
    - { ref: R2, outcome: contrarian net total buying by intraday proprietary traders, metric: coefficient, value: "NTB significantly negative (selling) in first half hour for buy recs; significantly positive (buying) for sell recs; near-zero for overnight prop traders across all half hours (Fig. 5, p. 13)", direction: mixed }
    - { ref: R3, outcome: informed trading returns for intraday proprietary traders, metric: basis-points, value: "buy recs: ARet_2Cl_Inf = 23.1 bps (t=3.64***); sell recs: 24.5 bps (t=2.55**) (Table 6, p. 17)", direction: positive }
    - { ref: R4, outcome: liquidity provision returns by trader type, metric: basis-points, value: "intraday prop: Liq = -7.22 bps (t=-12.1***) buy recs, -11.9 bps (t=-10.1***) sell recs; overnight prop: Liq = +3.81 bps (t=3.82***) buy, +9.38 bps (t=3.65***) sell; informed trading insignificant for overnight (Table 6, p. 17)", direction: mixed }
    - { ref: R5, outcome: contemporaneous price correction contribution by intraday proprietary traders, metric: basis-points, value: "buy recs: -1.94 bps (t=-7.45***), 12-13% of first-half-hour return; sell recs: +3.37 bps (t=7.69***), 17-22% of first-half-hour return (Table 8, p. 22)", direction: mixed }
    - { ref: R6, outcome: contrarian net total buying by intraday proprietary traders beyond recommendation day, metric: coefficient, value: "After buy recommendations, intraday NTB remains significantly negative (selling) in the first half hour on Days 1-5, with negative returns moving in tandem; after sell recommendations, NTB is insignificant and returns show no clear correction pattern. Overnight NTB is insignificant on Days 1-5 (Fig. 9, p. 25)", direction: mixed }
    - { ref: R7, outcome: intraday stock price deviation from TV analyst recommendation, metric: basis-points, value: "First-half-hour treatment-control return: +15 bps for buy recommendations and -15 bps for sell recommendations; subsequent half-hour returns are non-positive for buys and non-negative for sells (Fig. 2, p. 8)", direction: mixed }
    - { ref: R8, outcome: contrarian net total buying by individual investors around TV analyst recommendations, metric: coefficient, value: "First-half-hour treatment-control NTB: +4% of volume after buy recommendations and -8% after sell recommendations, both statistically significant (Fig. 3, p. 11)", direction: mixed }
    - { ref: R9, outcome: realized trading profits by investor category, metric: basis-points, value: "Individual investors: treatment-control profit/volume = -3.71 bps*** for buy recommendations and -1.17 bps*** for sells; total profit differences = -INR 39,354*** and -INR 47,175*** (Table 5, p. 15)", direction: negative }
    - { ref: R10, outcome: realized trading profits by investor category, metric: basis-points, value: "Intraday proprietary traders: treatment-control profit/volume = +3.78 bps for buys and +0.15 bps for sells (neither significant); total profit differences = +INR 8,754** for buys and +INR 11,309 (not significant) for sells (Table 5, p. 15)", direction: mixed }
    - { ref: R11, outcome: contrarian net total buying by intraday proprietary traders across stock characteristics, metric: coefficient, value: "Figure plots coefficients with 95% confidence intervals on scales from -5% to +5% or -10% to +5% of volume; buy-side response is weaker for smaller and less-liquid stocks and stronger with higher institutional ownership; volatility and individual-ownership splits are not statistically different, and sell-side differences are largely insignificant (Fig. 8, pp. 22-23)", direction: mixed }
    - { ref: R12, outcome: contrarian net total buying by trader type using market orders, metric: coefficient, value: "Net aggressive buying robustness preserves the main directions: individuals follow recommendations, intraday proprietary traders trade against them, and institutional and overnight proprietary traders remain relatively inactive; main-text numerical estimates not tabulated (Sec. 8.1, p. 26; Figs. A.2-A.4)", direction: mixed }
    - { ref: R13, outcome: intraday stock price deviation from TV analyst recommendation, metric: return-spread, value: "Overnight close-to-open DGTW-adjusted treatment-control return = +1.09% (t=68.65) for buy recommendations and -0.57% (t=-28.87) for sells; Day 0 open-to-close differences = -0.25% (t=-8.50) and +0.13% (t=2.98), respectively, about 23% reversal (Table 2, p. 7)", direction: mixed }
    - { ref: R14, outcome: returns following first-half-hour proprietary trading, metric: basis-points, value: "Intraday-prop Tercile 3 minus Tercile 1 total return: +15.406 bps** (t=2.457) for buy recommendations and +13.492 bps (t=1.398, not significant) for sells; overnight-prop differences are -4.322 bps (t=-0.458) and -10.721 bps (t=-0.600) (Table 6, p. 17)", direction: mixed }
  resultType: confirms
  relatesTo:
    - { cite: "Engelberg, Sasseville & Williams (2012)", doi: '10.1287/mnsc.1100.1290', relation: extends, note: "extends their US TV-recommendation mispricing finding to India with trader-level data distinguishing intraday from overnight proprietary traders" }
    - { cite: "Kaniel et al. (2012)", doi: '10.1111/j.1540-6261.2012.01727.x', relation: builds-on, note: "applies their return decomposition into liquidity provision and informed trading components to classify intraday vs overnight prop trader returns" }
    - { cite: "Biais et al. (2016)", relation: tests, note: "tests who supplies liquidity among proprietary traders; finds intraday traders are arbitrageurs while overnight traders are liquidity providers, extending their evidence" }
  replicationCode:
    status: none
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (28 pp. + references); six results extracted from Tables 2, 5, 6, 8 and Figs. 1, 5, 9. Not human-verified. Not reproduced. Authors state the data cannot be shared (Data availability, p. 27)." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; all six Core-results rows confirmed (Table 2, Table 6, Table 8, Figs. 5/6/9). Fixed: JEL G12 removed (PDF lists only G14/G15); topics corrected (removed 'Consumer Market Behavior and Pricing' and 'Sports Analytics and Performance'); sell treatment count corrected from 4,814 to 6,414 in Datasets section (PDF p. 6 and Table 2); ARet_2CI_Inf corrected to ARet_2Cl_Inf in findings R3. Equations (1)-(4), (8), (11)-(13) verified term-by-term; no equation errors found." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added Core-results rows R7-R14, matching findings entries, the liquidity mechanism, and missing main-text equations (5)-(7), (9)-(10), plus expanded specifications. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 14 Core results, equations and specifications, classifications, findings, frontmatter, and summary claims against the source PDF. Corrected R1's return units from bps to percent and R6's post-recommendation pattern to reflect the buy/sell asymmetry; corrected scope frequency and matched-sample counts. Other checked claims confirmed. Table-locator pass (2026-10-04): R9-R10, Table 5 p. 14 -> p. 15." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.finmar.2025.101028", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[]: content-version tdm URL https://www.elsevier.com/tdm/userlicense/1.0/; content-version stm-asf (multiple Elsevier policy DOIs); no CC license present; Elsevier all-rights-reserved confirmed" }
---

**What this is.** The paper's core results, the empirical design, and the main regression specifications: enough to know what it found and how, without reading all 28 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1016/j.finmar.2025.101028).

## TL;DR

Using a hand-collected dataset of Indian TV analyst recommendations (CNBC Awaaz Stock 20/20, July 2009 to March 2016) matched with BSE trader-level intraday order and trade data, the paper documents that TV analyst recommendations create temporary mispricing that fully reverts within about 10 days, extending the US evidence of Engelberg et al. (2012) to an emerging-market setting with trader-level data. Among the investor categories studied (individuals, institutions, intraday proprietary traders, overnight proprietary traders), only intraday proprietary traders trade contrarian in the first half hour, selling buy-recommended stocks and buying sell-recommended stocks. Their trades earn positive returns from informed trading and negative returns from liquidity provision (they pay a small liquidity cost), consistent with the interpretation that they are informed arbitrageurs rather than liquidity providers. Overnight proprietary traders provide liquidity and earn positive returns from it but earn no significant returns from informed trading. Intraday proprietary traders account for 12 to 22 percent of the contemporaneous price correction in the first half hour. They continue contrarian selling after buy recommendations through Days 1-5; sell recommendations show no clear intraday correction pattern over those days.

## Core results

Magnitudes and significance are as reported; `\*\*` / `\*\*\*` = 5% / 1%; ns = not significant. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | TV recommendations create temporary mispricing; prices fully revert to pre-recommendation levels within ~10 days | Table 2, Fig. 1, p. 7 | Buy recs: DGTW-adj Day 0 return vs matched control = +0.80%\*\*\* (t=27.77); sell recs: -0.41%\*\*\* (t=-10.06); complete reversal by day ~10 |
| R2 | Only intraday (not overnight) prop traders trade contrarian in the first half hour; institutions are not contrarian | Fig. 5, pp. 12-13; Fig. 6, p. 14 | Intraday NTB significantly negative (selling) for buy recs, positive (buying) for sell recs in first half hour; overnight NTB near zero; result robust to matched-set, trader, and stock-by-date fixed effects |
| R3 | Intraday prop traders earn significant informed-trading profits even after bearing a negative liquidity cost | Table 6, p. 17 | Buy recs: informed trading returns = +23.1 bps\*\*\* (t=3.64), liquidity provision = -7.22 bps\*\*\* (t=-12.1); sell recs: informed = +24.5 bps\*\* (t=2.55), liquidity = -11.9 bps\*\*\* (t=-10.1) |
| R4 | Overnight prop traders earn positive returns from liquidity provision and no significant informed-trading returns | Table 6, p. 17 | Buy recs: liquidity = +3.81 bps\*\*\* (t=3.82), informed = -8.4 bps (t=-0.88, ns); sell recs: liquidity = +9.38 bps\*\*\* (t=3.65), informed = -19.0 bps (t=-1.04, ns) |
| R5 | Intraday prop traders account for 12-22% of first-half-hour price correction | Table 8, p. 22 | Buy recs: contribution = -1.94 bps\*\*\* (t=-7.45), 12-13% of first-half-hour return; sell recs: +3.37 bps\*\*\* (t=7.69), 17-22% of first-half-hour return |
| R6 | Intraday prop traders continue contrarian selling after buy recommendations on Days 1-5; sell-side activity shows no clear pattern | Fig. 9, pp. 24-25 | After buys, intraday NTB remains significantly negative in the first half hour on Days 1-5, with negative returns moving in tandem; after sells, NTB is insignificant and returns show no clear correction pattern. Overnight NTB is insignificant on Days 1-5 |
| R7 | Intraday prices first move with the recommendation and then begin reversing | Fig. 2, p. 8 | First-half-hour treatment-control return = +15 bps for buy recommendations and -15 bps for sells; subsequent half-hour returns are non-positive for buys and non-negative for sells |
| R8 | Individual investors trade in the recommendation direction during the first half hour | Fig. 3, p. 11 | Treatment-control NTB = +4% of volume for buy recommendations and -8% for sell recommendations; both are statistically significant |
| R9 | Individual investors lose more in recommended stocks than in matched controls | Table 5, p. 15 | Buy recommendations: profit difference = -INR 39,354\*\*\* and profit/volume = -3.71 bps\*\*\*; sells: -INR 47,175\*\*\* and -1.17 bps\*\*\* |
| R10 | Intraday proprietary traders earn higher profits in recommended stocks, with only the buy-side total-profit difference significant | Table 5, p. 15 | Buy recommendations: total profit difference = +INR 8,754\*\*; profit/volume difference = +3.78 bps (not significant); sell recommendations: +INR 11,309 and +0.15 bps (both not significant) |
| R11 | The intraday prop-trader response varies with arbitrage difficulty in buy-recommended stocks | Fig. 8, pp. 22-23 | Figure plots coefficients with 95% confidence intervals on scales from -5% to +5% or -10% to +5% of volume; response is weaker for smaller and less-liquid stocks and stronger with higher institutional ownership; no significant volatility or individual-ownership split. Sell-side differences are largely insignificant |
| R12 | Market-order-only robustness preserves the main trader-response pattern | Sec. 8.1, p. 26; Figs. A.2-A.4 | Individuals follow recommendations, intraday proprietary traders trade against them, and institutional and overnight proprietary traders remain relatively inactive; main-text numerical estimates not tabulated |
| R13 | Recommendations create a large overnight jump that begins reversing during Day 0 | Table 2, p. 7 | Close-to-open DGTW-adjusted treatment-control return = +1.09% (t=68.65) for buys and -0.57% (t=-28.87) for sells; open-to-close differences = -0.25% (t=-8.50) and +0.13% (t=2.98), about 23% reversal |
| R14 | First-half-hour intraday-prop buying is associated with higher subsequent returns for buy recommendations; the sell-side estimate is not significant | Table 6, p. 17 | Intraday-prop Tercile 3 minus Tercile 1 total return = +15.406 bps\*\* (t=2.457) for buy recommendations and +13.492 bps (t=1.398, not significant) for sells; overnight-prop differences = -4.322 bps (t=-0.458) and -10.721 bps (t=-0.600) |

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
\text{NTB}_{k,i,j,d,h} = \sum_{h=1}^{13} \beta_h I_h + \sum_{h=1}^{13} \gamma_h I_h \cdot \text{Treated}_{i,d} + \delta_{j,d,h} + \varepsilon_{k,i,j,d,h} \tag{3}
$$

$$
\text{NTB}_{k,i,j,d,h} = \sum_{h=1}^{13} \beta_h I_h + \sum_{h=1}^{13} \gamma_h I_h \cdot \text{Treated}_{i,d} + \delta_{k,d,h} + \varepsilon_{k,i,j,d,h} \tag{4}
$$

where $$\delta_{j,d,h}$$ = matched-set-by-date-by-half-hour FE and $$\delta_{k,d,h}$$ = trader-by-date-by-half-hour FE.

The third specification, D-Stk, replaces the trader-by-date-by-half-hour fixed effects with stock-by-date fixed effects (Sec. 4.4, p. 11):

$$
\text{NTB}_{k,i,j,d,h} = \sum_{h=1}^{13} \beta_h I_h + \sum_{h=1}^{13} \gamma_h I_h \cdot \text{Treated}_{i,d} + \delta_{i,d} + \varepsilon_{k,i,j,d,h}
$$

**Recommendation-day profits (eq. 5, p. 13).** For a trader, profit is the value of sales minus purchases plus the mark-to-market value of end-of-day inventory. The category-level profit-to-volume outcome is:

$$
\left(\frac{\text{Profit}}{\text{Volume}}\right)_{\text{cat},t} = \frac{\text{Total Profit}_{\text{cat},t}}{\text{Volume}_{\text{cat},t}} \tag{5}
$$

where $$t$$ denotes recommended stocks and $$\text{cat}$$ denotes the investor group; the control-sample measure is formed analogously.

**Scaled abnormal net buying and return (eqs. 6-7, pp. 15-16).** For each matched set $$j$$, day $$d$$, and half hour $$h$$, net total buying is scaled by the stock's mean volume over days $$d-14$$ to $$d-7$$, then treatment-minus-control differences define abnormal net total buying:

$$
\text{SNTB}_{t,j,d,h} = \frac{\text{RNTB}_{t,j,d,h}}{\text{MeanVolume}_{t,j,d-14\text{ to }d-7,h}}, \qquad
\text{SNTB}_{c,j,d,h} = \frac{\text{RNTB}_{c,j,d,h}}{\text{MeanVolume}_{c,j,d-14\text{ to }d-7,h}}, \qquad
\text{ANTB}_{j,d,h} = \text{SNTB}_{t,j,d,h} - \text{SNTB}_{c,j,d,h} \tag{6}
$$

The matched treatment-control return from the first half hour to the close is:

$$
\text{ARet\_2Cl}_{j,d} = \text{Ret\_2Cl}_{t,j,d} - \text{Ret\_2Cl}_{c,j,d} \tag{7}
$$

**Return decomposition (eq. 8, p. 16).** Following Kaniel et al. (2012), the return from the end of the first half hour to the day's close ($$\text{Ret\_2Cl}$$) is regressed on first-half-hour scaled net buying by intraday and overnight proprietary traders, using only control stocks. Model B omits risk terms; Model R adds volatility; the numbered Model RI additionally interacts volatility with each group's buying:

$$
\begin{aligned}
\text{Model B: }\text{Ret\_2Cl}_{c,d} ={}& \alpha + \beta_1 \text{SNTB}_{c,d,1,\text{ID}} + \beta_2 \text{SNTB}_{c,d,1,\text{ON}} + \theta \text{Ret}_{c,d,1} + \varepsilon_{c,d} \\
\text{Model R: }\text{Ret\_2Cl}_{c,d} ={}& \alpha + \beta_1 \text{SNTB}_{c,d,1,\text{ID}} + \beta_2 \text{SNTB}_{c,d,1,\text{ON}} + \theta \text{Ret}_{c,d,1} + \delta \text{Vol}_{c,d} + \varepsilon_{c,d} \\
\text{Model RI: }\text{Ret\_2Cl}_{c,d} ={}& \alpha + \beta_1 \text{SNTB}_{c,d,1,\text{ID}} + \beta_2 \text{SNTB}_{c,d,1,\text{ON}} + \theta \text{Ret}_{c,d,1} + \delta \text{Vol}_{c,d} \\
& + \upsilon_1 \text{SNTB}_{c,d,1,\text{ID}}\text{Vol}_{c,d} + \upsilon_2 \text{SNTB}_{c,d,1,\text{ON}}\text{Vol}_{c,d} + \varepsilon_{c,d} \tag{8}
\end{aligned}
$$

Here $$\text{SNTB}$$ is net total buying scaled by mean volume, ID and ON denote intraday and overnight proprietary traders, $$\text{Ret}_{c,d,1}$$ controls for first-half-hour return, and $$\text{Vol}_{c,d}$$ is prior realized volatility. Fitted values give the estimated return to normal liquidity provision; residual return is the informed-trading component. Treatment-minus-control abnormal components are:

$$
\text{ARet\_2Cl\_Liq}_{j,d} = \text{ARet\_2Cl\_Liq}_{t,j,d} - \text{ARet\_2Cl\_Liq}_{c,j,d} \tag{9}
$$

$$
\text{ARet\_2Cl\_Inf}_{j,d} = \text{ARet\_2Cl\_Inf}_{t,j,d} - \text{ARet\_2Cl\_Inf}_{c,j,d} \tag{10}
$$

**Price impact (eq. 11, p. 18).** Per-unit price impact for each trader category is estimated by regressing half-hour returns on net aggressive buying (RNAB, market orders):

$$
\begin{aligned}
\text{Model O: }\text{Ret}_{i,d,h} ={}& \alpha + \sum_{\text{cat}} \beta_{\text{cat},h}\text{RNAB}_{i,d,\text{cat},h} + \theta_h\text{Ret\_ClOp}_{i,d} + \varepsilon_{i,d,h} \\
\text{Model OI: }\text{Ret}_{i,d,h} ={}& \alpha + \sum_{\text{cat}} (\beta_{\text{cat},h} + \upsilon_{\text{cat},h}\text{Illiq}_{i,d})\text{RNAB}_{i,d,\text{cat},h} + \theta_h\text{Ret\_ClOp}_{i,d} + \varepsilon_{i,d,h} \\
\text{Model OV: }\text{Ret}_{i,d,h} ={}& \alpha + \sum_{\text{cat}} (\beta_{\text{cat},h} + \upsilon_{\text{cat},h}\text{Vol}_{i,d})\text{RNAB}_{i,d,\text{cat},h} + \theta_h\text{Ret\_ClOp}_{i,d} + \varepsilon_{i,d,h} \tag{11}
\end{aligned}
$$

These models are estimated separately for each half hour and separately for treatment and control stocks. The per-unit impact estimates generate trader-category price correction contributions as follows (eq. 12, p. 20):

$$
\begin{aligned}
\text{Model O: }\text{PC}_{i,j,\text{cat},d,h} ={}& \hat{\beta}_{\text{cat},h}\text{RNAB}_{i,j,\text{cat},d,h} \\
\text{Model OI: }\text{PC}_{i,j,\text{cat},d,h} ={}& (\hat{\beta}_{\text{cat},h} + \hat{\upsilon}_{\text{cat},h}\text{Illiq}_{i,j,d})\text{RNAB}_{i,j,\text{cat},d,h} \\
\text{Model OV: }\text{PC}_{i,j,\text{cat},d,h} ={}& (\hat{\beta}_{\text{cat},h} + \hat{\upsilon}_{\text{cat},h}\text{Vol}_{i,j,d})\text{RNAB}_{i,j,\text{cat},d,h} \tag{12}
\end{aligned}
$$

The treatment-control contribution regression for each proprietary-trader group is (eq. 13, p. 20):

$$
\text{PC}_{i,j,\text{cat},d,h} = \gamma_{h,\text{cat}}\text{Treated}_{i,d} + \delta_{j,\text{cat},d} + \varepsilon_{i,j,\text{cat},d,h} \tag{13}
$$

where $$\delta_{j,\text{cat},d}$$ is matched-set-by-date fixed effects and $$\gamma_{h,\text{cat}}$$ is the differential contribution in recommended stocks.

## Empirical specifications

Headline matched-sample analyses cover July 2009 to March 2016, excluding the program hiatus July 2010 to September 2011. The Table 6 return-comparison t-statistics use date-clustered standard errors; Table 8 reports robust t-statistics and fixed effects for matched set by date. For other tables, the paper reports t-statistics, significance stars, or confidence intervals as shown in each locator.

**R1 (temporary mispricing, Table 2).** Calendar-time portfolio approach: long in recommended stocks, short in matched control stocks, held for $$n$$ days. The DGTW characteristic-adjusted return (Daniel et al. (1997)) is the outcome measure. Day $$-1$$ close to Day 0 open captures the announcement effect; Day 0 open to close captures the intraday reversal; the combination gives the full Day 0 return. Long-run return to 252 trading days is reported as further evidence of no permanent price effect.

**R2 (contrarian trading, Figs. 4-6).** Equation (1) without FE followed by equations (3) and (4) and a stock-by-date FE variant (D-Stk). Results are multiplied by the average number of traders per group to obtain total category-level NTB.

**R3-R4 and R14 (returns and decomposition, Table 6).** Stocks are sorted daily into terciles of abnormal net total buying (ANTB) in the first half hour. Tercile 3 (most buying/least selling) minus Tercile 1 (least buying/most selling) is reported for total returns and for liquidity-provision and informed-trading components. Returns are winsorized at 1%. Models B, R, and RI in equation (8) are estimated on control stocks and applied to treatment-minus-control differences. Standard errors are clustered by date, as specified in the table note.

**R5 (price correction, Table 8).** Price impact estimated from equation (11) separately for buy and sell recommendations. Contribution computed via equation (12) and then equation (13) with matched-set-by-date FE. Reported as basis points and as a fraction of the total first-half-hour treatment-minus-control return.

**R6 (multi-day contrarian activity, Fig. 9).** Equation (1) applied to the first half hour on Days 1-5 post-recommendation. First-half-hour returns (difference treatment vs control) are plotted alongside intraday NTB to document joint behavior.

**R7 (intraday price path, Fig. 2).** For each half hour on Day 0, the plotted outcome is the difference in return between each recommended stock and its propensity-score-matched control. Figure 2 reports the estimates with 95% confidence intervals; the paper describes the first-half-hour +15/-15 bps return differences as statistically significant and shows the later intraday return path reversing.

**R8 (individual-investor trading, Fig. 3).** Equation (1) is estimated for individual-investor NTB with no fixed effects; each $$\gamma_h$$ is the treatment-control difference for half hour $$h$$. The first-half-hour coefficients are +4% and -8% of total volume for buy and sell recommendations.

**R9-R10 (realized profits, Table 5).** Equation (5) measures category profit per unit of traded volume; total profit and profit/volume are compared between matched treatment and control stocks separately for buy and sell recommendations. The underlying sample is stock-day level. Table 5 reports mean differences and significance stars but does not specify a standard-error clustering treatment in its note.

**R11 (cross-sectional heterogeneity, Fig. 8).** Recommended stocks are split each day at the median of prior close-to-open return, market capitalization, Amihud illiquidity, volatility, institutional ownership, or individual ownership; each matched control is assigned to its treated stock's group. Treatment-control NTB differences for intraday proprietary traders are compared across each split, separately for buy and sell recommendations. The text reports significant differences for buy recommendations by size, illiquidity, and institutional ownership, but does not state numerical coefficient values.

**R12 (net aggressive buying robustness, Sec. 8.1).** The trading analyses in Figs. 4-6 are repeated using market orders only (net aggressive buying), with the same matched sample and trader categories. The authors report that the conclusions are unchanged; the main text does not tabulate numerical estimates for Figs. A.2-A.4.

**R13 (announcement and intraday reversal, Table 2).** Treatment-control DGTW-adjusted returns compare matched recommendations with control stocks for the prior-close-to-open announcement window and Day 0 open-to-close reversal. The table reports t-statistics and significance stars for buy and sell recommendation samples.

**R14 (return predictability by proprietary-trader type, Table 6).** The Table 6 tercile comparison uses first-half-hour abnormal net total buying by each proprietary-trader group and compares subsequent returns through the close. The table reports date-clustered standard errors; returns are winsorized at 1%.

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

Source: peer-reviewed, *Journal of Financial Markets* 78 (2026) 101028. This distillation was model-verified against the source PDF on 2026-10-04; it has not been independently reproduced. The paper is paywalled (copyright 2025 Elsevier B.V., all rights reserved); no Creative Commons license was found. Extract-only.

> Anshuman, V. Ravi, Prachi Deuskar, Krishnamurthy V. Subramanian, and Ramabhadran S. Thirumalai.
> "Intraday Proprietary Traders and Short-Term Mispricing."
> *Journal of Financial Markets* 78 (2026) 101028.
> DOI: 10.1016/j.finmar.2025.101028. copyright 2025 Elsevier B.V.
