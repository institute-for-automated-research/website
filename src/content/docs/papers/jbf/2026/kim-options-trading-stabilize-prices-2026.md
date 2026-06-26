---
title: "Options Trading and Price Stability: Kim (2026)"
description: >-
  Using the SEC Penny Pilot Program as a natural experiment, Kim (2026) provides causal evidence
  that options trading reduces stock price volatility: a one-standard-deviation increase in options
  volume lowers total volatility by 1.21 percentage points via a liquidity buffer channel and a
  mispricing correction channel. Journal of Banking and Finance 185 (2026), paywalled. Six core
  results with source locators, datasets used, the identification strategy, and the regression
  specifications. LLM-distilled, not human-verified.
sidebar:
  label: Kim 2026
  order: 1
tags: [paper-summary, options, volatility, equities, market-microstructure, price-stability,
       panel-regression, difference-in-differences, instrumental-variables, peer-reviewed,
       unreplicated, data:wrds, data:optionmetrics]
paper:
  authors: Da-Hea Kim
  authorList:
    - { family: Kim, given: Da-Hea, affiliation: Sungkyunkwan University Business School }
  year: 2026
  venue: Journal of Banking and Finance 185 (2026) 107612
  venueShort: J. Banking Finance 2026
  tier: field
  doi: 10.1016/j.jbankfin.2025.107612
  jel:
    codes: [G12, G13, G14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Financial Markets and Investment Strategies', 'Financial Risk and Volatility Modeling', 'Risk Management in Financial Firms']
  dataAccess: licensed-commercial
  outcome:
    - total stock price volatility
    - idiosyncratic stock volatility
    - extreme daily return range
  outcomeClass: [security-returns]
  license: "Paywalled; Elsevier TDM and stm-asf licences only (confirmed via Crossref 2026-06-25: no CC licence block; content-version tdm URL elsevier.com/tdm/userlicense/1.0/; stm-asf URLs doi.org/10.15223/policy-017 et al.; start 2026-04-01)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect; checked 2026-06-25)"
  redistribution: extract-only
  resultsCount: 6
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [instrumental-variables, difference-in-differences, panel-regression, matching]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [liquidity, information-asymmetry]
  scope:
    region: US
    assetClass: US equities
    period: 2006-01..2021-12
    frequency: monthly
    dataType: [market, accounting]
    granularity: [security]
    n: "380,219 firm-months; 1,980 unique firms; 192 months (Jan 2006-Dec 2021)"
  findings:
    - { ref: R1, outcome: total stock price volatility, metric: coefficient, value: "+0.223 (t = 60.55) pooled OLS; endogenous positive association driven by reverse causality", direction: positive, vsBenchmark: "IV corrects sign to -0.435; OLS overstates by roughly two-fold in same direction" }
    - { ref: R2, outcome: total stock price volatility, metric: coefficient, value: "-0.435 (t = -4.15) IV second stage; 1-SD increase in options volume -> -1.21 pp TVOL (46% of mean, 67% of SD)", direction: negative, vsBenchmark: "reverses the positive OLS coefficient; effect is 46% of mean TVOL = 2.63 pp" }
    - { ref: R3, outcome: total stock price volatility, metric: pp-effect, value: "-0.205 pp TREAT x POST (t = -2.73); 7.5% of pre-treatment mean", direction: negative }
    - { ref: R4, outcome: idiosyncratic stock volatility, metric: pp-effect, value: "-0.134 pp TREAT x POST on IVOL (t = -2.28); MAXMIN: -0.871 (t = -2.65)", direction: negative }
    - { ref: R5, outcome: excessive stock trade concentration, metric: coefficient, value: "-0.038 TREAT x POST on Ln(MAXVOLM/MEDVOLM) (t = -2.95); MAXRET: -0.427 (t = -2.26)", direction: negative }
    - { ref: R6, outcome: stock mispricing and informed trading intensity, metric: coefficient, value: "-3.180 TREAT x POST on MISP (t = -3.87); ITI_13D: -0.020 (t = -4.71)", direction: negative }
  resultType: new-finding
  relatesTo:
    - { cite: "Cao et al. (2024)", relation: extends, note: "uses same Penny Pilot Program instrument; this paper extends from price informativeness to the volatility-reduction effect" }
    - { cite: "Grossman (1988)", doi: '10.1086/296433', relation: builds-on, note: "theoretical basis for options market providing a liquidity buffer for the underlying stock" }
    - { cite: "Stambaugh, Yu, and Yuan (2015)", doi: '10.1111/jofi.12286', relation: builds-on, note: "mispricing score SYY_SCORE used to measure the mispricing correction channel" }
    - { cite: "Hao and Li (2022)", doi: '10.1016/j.jcorpfin.2022.102290', relation: cites, note: "also uses the Penny Pilot Program as an instrument for options trading volume" }
    - { cite: "Bogousslavsky and Muravyev (2024)", relation: builds-on, note: "informed trading intensity (ITI) measures used to trace the mispricing correction channel" }
  openQuestions:
    - "The identification strategy relies on the Penny Pilot Program, which ended in June 2020; the effects of options trading under the current market regime with surging retail participation and zero-day-to-expiration options cannot be assessed with this natural experiment (p. 20)."
    - "Potential heterogeneity in the stabilizing effect by investor composition (institutional vs. retail) cannot be assessed because the sample predates the recent surge in retail options trading (p. 20)."
  replicationCode:
    status: upon-request
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (22 pp.); six results extracted. Not human-verified. Not reproduced. Data available upon request per p. 22." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; five corrections applied: R5 MAXRET significance ** → * (Table 9 col 7 shows one star), R6 locator pp. 14-15 → p. 15 (both tables on p. 15), OLS baseline N 380,219 → 380,064 (Table 3 header), DiD baseline N 12,667 → up to 13,020 (col 3 main TVOL), eq. 4 subscript D_tk → D_ik (matches Fig. 3 caption)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107612", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] contains TDM (elsevier.com/tdm/userlicense/1.0/) and stm-asf entries only; no CC licence block; paywalled; issued 2026-04-01" }
---

**What this is.** A distilled summary of Da-Hea Kim, "Does options trading stabilize stock prices? Evidence from a natural experiment," *Journal of Banking and Finance* 185 (2026) 107612. It covers the six headline results with exact source locators, the identification strategy (Penny Pilot Program as a quasi-natural experiment), and the regression specifications. Read the original at [doi.org/10.1016/j.jbankfin.2025.107612](https://doi.org/10.1016/j.jbankfin.2025.107612) to replicate or extend.

## TL;DR

Kim (2026) revisits whether options trading stabilizes or destabilizes underlying stock prices. Pooled OLS regressions find a positive association between options volume and stock price volatility, but this reflects reverse causality: high-volatility stocks attract more options activity. Using the SEC's Penny Pilot Program (PPP), which reduced options tick sizes for roughly 500 underlying securities in a staggered fashion from 2007 to 2020, as an exogenous shock to options trading volume, instrumental variable regressions show that a one-standard-deviation increase in options volume reduces total volatility by 1.21 percentage points (46% of the mean). Difference-in-differences (DiD) regressions using a propensity-score-matched control sample confirm that pilot-stock total volatility falls by 0.21 percentage points (7.5% of pre-treatment average) relative to never-included controls. Two mechanisms drive the result: (1) the options market absorbs liquidity shocks to the underlying stock, reducing excessive trade concentration and extreme daily returns; and (2) options trading corrects mispricing by anchoring prices to intrinsic values through enhanced price discovery, as evidenced by declines in the Stambaugh, Yu, and Yuan (2015) mispricing score and in the Bogousslavsky and Muravyev (2024) informed trading intensity measures.

## Core results

Significance stars: `\*` 10%, `\*\*` 5%, `\*\*\*` 1%. Locators cite the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Pooled OLS finds a positive (endogenous) association between options volume and total stock volatility | Table 3, col. (1), p. 5 | Ln(OPTVOLM) on TVOL = +0.223\*\*\* (t = 60.55); 1-SD increase associated with +34% SD change in TVOL |
| R2 | IV (PPP as instrument) reverses the sign: increased options trading causally reduces total volatility | Table 4 Panel A, col. (2), p. 7 | Instrumented Ln(OPTVOLM) on TVOL = -0.435\*\*\* (t = -4.15); 1-SD increase in options volume -> -1.21 pp TVOL = 46% of mean = 67% of SD |
| R3 | DiD (matched sample): pilot firms' total volatility declines relative to controls after program inclusion | Table 6, col. (3), p. 9 | TREAT x POST on TVOL = -0.205\*\*\* (t = -2.73); 7.5% of pre-treatment mean; robust to additional controls and lagged TVOL |
| R4 | DiD: idiosyncratic volatility and extreme return range also decline for pilot firms | Table 6, cols. (7) and (9), p. 9 | TREAT x POST on IVOL = -0.134\*\* (t = -2.28); TREAT x POST on MAXMIN = -0.871\*\*\* (t = -2.65) |
| R5 | Liquidity buffer mechanism: options inclusion reduces excessive stock trade concentration and extreme daily price moves | Table 9, cols. (1) and (7), p. 14 | TREAT x POST on Ln(MAXVOLM/MEDVOLM) = -0.038\*\*\* (t = -2.95); TREAT x POST on MAXRET = -0.427\* (t = -2.26); 5-11% of pre-treatment mean |
| R6 | Mispricing correction mechanism: options trading reduces stock mispricing and informed trading intensity | Tables 10-11, cols. (1), p. 15 | TREAT x POST on MISP = -3.180\*\*\* (t = -3.87; 11-13% of pre-treatment); TREAT x POST on ITI_13D = -0.020\*\*\* (t = -4.71) |

**Overall (paper's conclusion).** The positive OLS correlation between options volume and stock price volatility reflects reverse causality. Once endogeneity is addressed via the Penny Pilot Program, the causal effect reverses: expanded options trading reduces stock price volatility. The stabilizing effect operates through both a liquidity buffer channel and a mispricing correction channel, and it holds across nine alternative matching methods, alternative sample periods (including the pre-2011 concentrated-addition period and the post-2009 cohort), and shorter event windows of plus or minus three or six months. The findings support the beneficial role of options markets in enhancing underlying equity price stability.

## Theory / model

The paper proposes no formal structural model. It tests two competing hypotheses drawn from the prior theoretical literature and identifies two empirical channels for its main result.

**Stabilization hypothesis.** Options markets facilitate information transmission, provide hedging opportunities, and offer an alternative avenue for liquidity demand, all of which may reduce volatility in the underlying stock (Grossman (1988); Figlewski and Webb (1993); Cao (1999)). On this view, options absorb excess supply or demand that would otherwise move stock prices, and their informational role anchors prices to fundamental values.

**Destabilization hypothesis.** Options attract noise traders and speculators, undermine stock market liquidity by diverting it toward derivatives, and enable new sources of volatility through leveraged positions (Stein (1987); Gorton and Pennacchi (1993)).

Prior empirical work gives mixed results; the central identification challenge is endogeneity (higher-volatility stocks endogenously attract more options trading). Cao et al. (2024) use the same PPP to show that expanded options trading improves price informativeness, but leave open whether the net effect on stock return volatility is positive or negative. This paper addresses that question directly.

**Two operative channels:**

1. **Liquidity buffer.** By providing hedging alternatives and an additional venue for investor liquidity demand, the options market can absorb excess supply or demand in the underlying stock, mitigating extreme price movements. Empirically tested via concentrated-trading metrics: Ln(MAXVOLM/MEDVOLM) (max-to-median daily volume within a month), the maximum daily turnover deviation MAXTURN - MEDTURN, and extreme return measures MAXRET and |MINRET| (Table 9).

2. **Mispricing correction.** Options trading enhances price discovery by incorporating diverse information into asset prices and enabling arbitrage between options and the underlying. As prices adjust more quickly to fundamental values, the scope for profitable informed trading diminishes and mispricing is reduced. Empirically tested via the Stambaugh, Yu, and Yuan (2015) composite mispricing score SYY_SCORE (based on 11 anomaly variables) and the Bogousslavsky and Muravyev (2024) informed trading intensity measures (Table 10, Table 11).

**Identification logic.** From January 2007 to June 2020 the SEC's Penny Pilot Program reduced minimum options tick sizes for selected securities (from nickel-and-dime to penny-and-nickel increments), lowering options trading costs and increasing volume. The selection of securities was designed to represent diverse trading characteristics rather than target volatility levels, supporting the exclusion restriction that inclusion affects stock volatility only through the channel of options trading volume. The program's staggered, phased implementation (securities added at eight distinct dates over 13 years) helps disentangle the effect of options trading from contemporaneous trends. Hao and Li (2022) and Anagnostopoulou et al. (2023) use the same program in related settings.

## Method

Two complementary strategies identify the causal effect of options trading on stock price volatility.

**Strategy 1: Instrumental variable (IV).** The PPP inclusion status (TREAT, time-invariant) interacted with post-inclusion months (POST) instruments for options trading volume. The first-stage regression (Table 4, Panel A, col. (1)) is:

$$
\text{OptionsTrading}_{it} = \alpha + \beta \bigl(\text{TREAT}_i \times \text{POST}_{it}\bigr) + \gamma \, \text{Controls}_{i,t-1} + \varepsilon_{it} \tag{1}
$$

where TREAT equals 1 if firm $$i$$'s options are included in the PPP (0 otherwise) and POST equals 1 for months after inclusion. The first-stage coefficient $$\hat{\beta}$$ on TREAT $$\times$$ POST is 0.492 (t = 11.74), confirming a strong instrument. The second-stage regression (Table 4, Panel A, cols. (2)-(4)) is:

$$
\text{VolatilityProxy}_{it} = \delta + \zeta \, \widehat{\text{OptionsTrading}}_{it} + \lambda \, \text{Controls}_{i,t-1} + \varepsilon_{it} \tag{2}
$$

Two interchangeable options activity measures are used: the natural logarithm of total monthly options contracts traded, Ln(OPTVOLM), and the option-to-stock volume ratio O/S = OPTVOLM / (STKVOL x 100). Both panels of Table 4 yield consistently negative second-stage coefficients. All regressions include firm and month fixed effects; standard errors are clustered by firm.

**Strategy 2: Difference-in-differences (DiD) with propensity-score-matched controls.** Treated firms (pilot options included in the PPP) are matched 1:1 to never-treated controls using nearest-neighbor logit propensity-score matching without replacement (caliper 0.2), yielding 264 matched pairs. Matching covariates are TVOL, STKRET, SIZE, STKVOL, IOR, MOM, BM, and ROA measured in the month before inclusion. The baseline DiD regression (Table 6) uses a 25-month event window (12 months before and after inclusion):

$$
\text{Volatility}_{it} = \alpha + \beta \bigl(\text{TREAT}_i \times \text{POST}_{it}\bigr) + \gamma \, \text{Controls}_{i,t-1} + \varepsilon_{it} \tag{3}
$$

The coefficient $$\beta$$ on TREAT $$\times$$ POST identifies the within-matched-pair change in volatility attributable to program inclusion. Placebo tests (Table 7) assign pseudo-treatment dates six months before actual inclusion and confirm that TREAT $$\times$$ PseudoPOST coefficients are statistically indistinguishable from zero for all volatility outcomes, supporting the parallel-trends assumption. The dynamic DiD specification (Fig. 3) replaces POST with event-window dummies $$D_{ik}$$ ($$k = -11, \ldots, 12$$):

$$
\text{TVOL}_{it} = \alpha + \sum_{k=-11}^{12} \beta_{1k} \,\text{TREAT}_i \times D_{ik} + \beta_2 \,\text{TREAT}_i + \sum_{k=-11}^{12} \beta_{3k} D_{ik} + \gamma \,\text{Controls}_{i,t-1} + \varepsilon_{it} \tag{4}
$$

Pre-addition $$\beta_{1k}$$ estimates are flat and statistically insignificant; post-addition estimates turn significantly negative, tracing the onset of the stabilization effect.

## Empirical specifications

**Pooled OLS baseline (Table 3).** Sample: 380,064 firm-month observations, 2006-2021. Dependent variables are TVOL (cols. 1-4), IVOL (cols. 5-8), MAXMIN (cols. 9-12). Options activity is Ln(OPTVOLM) or O/S. Controls (lagged one month): STKRET, Ln(SIZE), Ln(STKVOL), IOR, MOM, BM, ROA. Columns (2), (4), (6), (8), (10), (12) also include the lagged dependent variable. Firm and month fixed effects; standard errors clustered by firm. Result R1 comes from col. (1).

**IV specifications (Table 4).** Same sample and controls. Panel A uses Ln(OPTVOLM) as the endogenous variable, Panel B uses O/S. Second-stage dependent variables: TVOL (col. 2 or 6), IVOL (col. 3 or 7), MAXMIN (col. 4 or 8). Columns (5)-(8) in each panel add the lagged volatility as an additional control. Result R2 comes from Panel A, col. (2). The standard deviation of Ln(OPTVOLM) is 2.78 (footnote 12), so the 1-SD partial effect is $$-0.435 \times 2.78 = -1.21$$ pp TVOL.

**DiD baseline (Table 6).** Sample: up to 13,020 firm-month observations from 264 matched pairs; 25-month event window (12,667 where additional controls require options trading data). Cols. (1)-(2) use options trading as the dependent variable (confirming the first-stage effect of PPP inclusion). Cols. (3)-(5) use TVOL with progressively richer controls (col. 5 adds lagged TVOL). Cols. (6)-(8) use IVOL; cols. (9)-(11) use MAXMIN. Results R3 and R4 come from cols. (3) and (7)/(9), respectively.

**Liquidity buffer channel (Table 9).** Same matched sample and DiD specification. Dependent variables: Ln(MAXVOLM/MEDVOLM) (log max-to-median daily volume ratio, cols. 1-2), (MAXVOLM - MEDVOLM)/MEDVOLM (percentage deviation, cols. 3-4), MAXTURN - MEDTURN (daily turnover range, cols. 5-6), MAXRET (maximum daily return, cols. 7-8), |MINRET| (absolute minimum daily return, cols. 9-10). Result R5 comes from cols. (1) and (7).

**Mispricing correction channel (Table 10).** Sample of mispriced stocks (SYY_SCORE > 70 or < 30). Dependent variables: MISP = |SYY_SCORE - 50| (cols. 1-2), SYY_SCORE for underpriced stocks (cols. 3-4), SYY_SCORE for overpriced stocks (cols. 5-6). Additional robustness in Table 11 uses five Bogousslavsky and Muravyev (2024) ITI measures (ITI_13D, ITI_Impatient, ITI_Patient, ITI_Insider, ITI_Short) as dependent variables. Result R6 comes from Table 10, col. (1) and Table 11, col. (1).

**Robustness (Tables 12-14).** Nine alternative matching methods (Mahalanobis distance and eight covariate-cell-based procedures following Cao et al. (2024)), alternative sample periods (2006-2011 only and excluding the Global Financial Crisis through June 2009), and shorter event windows of plus or minus three and six months around the inclusion month. Results are consistent in sign and significance across all specifications.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Ivy OptionMetrics | Options trading volume, open interest, implied volatility, bid-ask quotes for all exchange-listed options (2006-2021) | [OptionMetrics](/wiki/commercial/optionmetrics/) |
| CRSP | Stock returns, share prices, trading volume, shares outstanding for underlying stocks | [WRDS / CRSP](/wiki/commercial/wrds/) (licensed) |
| Compustat | General accounting data: book-to-market ratio, return on assets | [WRDS / Compustat](/wiki/commercial/wrds/) (licensed) |
| Thomson Reuters 13F | Institutional ownership ratio (IOR) for matching and controls | [WRDS / 13F](/wiki/commercial/wrds/) (licensed) |
| Stambaugh, Yu, and Yuan (2015) SYY_SCORE | Composite mispricing score (percentile rank on 11 anomalies); downloaded from R. F. Stambaugh's website | No page yet |
| Bogousslavsky, Fos, and Muravyev (2024) ITI | Informed Trading Intensity measures (ITI_13D, ITI_Impatient, ITI_Patient, ITI_Insider, ITI_Short); downloaded from D. Muravyev's website | No page yet |
| CBOE SEC filings (hand-collected) | Penny Pilot Program inclusion schedule: 460 securities, 8 addition events, 2007-2020 | No page yet |

Sample: January 2006 to December 2021 (192 months). The main matched-sample analysis covers a 25-month window around each inclusion event; the IV analysis uses the full 380,219 firm-month panel. Options and stock data are merged at the underlying-security level; accounting data are lagged one year.

## When to read the full paper

Read the source at [doi.org/10.1016/j.jbankfin.2025.107612](https://doi.org/10.1016/j.jbankfin.2025.107612) if you are:
- assessing whether options markets stabilize or destabilize underlying equity prices (the causal IV and DiD evidence is in Tables 4 and 6);
- studying the liquidity buffer or mispricing correction channels of derivatives markets (Tables 9-11);
- using the Penny Pilot Program as a quasi-natural experiment for options trading (compare with Cao et al. (2024) for price informativeness; Hao and Li (2022) for earnings management implications);
- evaluating the robustness methodology for staggered DiD with many alternative matching procedures (Table 12) or shorter event windows (Table 14);
- benchmarking results against the recent retail and zero-day-to-expiration options literature.

## Attribution and rights

Source: peer-reviewed, *Journal of Banking and Finance* 185 (2026) 107612. DOI: 10.1016/j.jbankfin.2025.107612. Published by Elsevier B.V. All rights reserved. This distillation was extracted by an LLM (claude-sonnet-4-6) on 2026-06-25 and is **not human-verified or independently reproduced**. The article is paywalled; only textual extracts are permitted here.

> Kim, Da-Hea. "Does options trading stabilize stock prices? Evidence from a natural experiment." *Journal of Banking and Finance* 185 (2026): 107612. DOI: 10.1016/j.jbankfin.2025.107612. Copyright 2025 Elsevier B.V. All rights reserved.
