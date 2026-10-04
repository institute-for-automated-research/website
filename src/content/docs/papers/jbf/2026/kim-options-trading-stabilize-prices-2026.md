---
title: "Options Trading and Price Stability: Kim (2026)"
description: >-
  Using the SEC Penny Pilot Program as a natural experiment, Kim (2026) provides causal evidence
  that options trading reduces stock price volatility: a one-standard-deviation increase in options
  volume lowers total volatility by 1.21 percentage points via a liquidity buffer channel and a
  mispricing correction channel. Journal of Banking and Finance 185 (2026), paywalled. Fifteen core
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
    - options trading volume
  outcomeClass: [security-returns, information-quality]
  license: "Paywalled; Elsevier TDM and stm-asf licences only (confirmed via Crossref 2026-06-25: no CC licence block; content-version tdm URL elsevier.com/tdm/userlicense/1.0/; stm-asf URLs doi.org/10.15223/policy-017 et al.; start 2026-04-01)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect; checked 2026-06-25)"
  redistribution: extract-only
  resultsCount: 15
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
    - { ref: R1, outcome: total stock price volatility, metric: coefficient, value: "+0.223 (t = 60.55) pooled OLS; positive association potentially affected by reverse causality", direction: positive, vsBenchmark: "IV reverses the sign; the absolute IV coefficient is about twice the OLS coefficient" }
    - { ref: R2, outcome: total stock price volatility, metric: coefficient, value: "-0.435 (t = -4.15) IV second stage; 1-SD increase in options volume -> -1.21 pp TVOL (46% of mean, 67% of SD)", direction: negative, vsBenchmark: "reverses the positive OLS coefficient; effect is 46% of mean TVOL = 2.63 pp" }
    - { ref: R3, outcome: total stock price volatility, metric: pp-effect, value: "-0.205 pp TREAT x POST (t = -2.73); 7.5% of pre-treatment mean", direction: negative }
    - { ref: R4, outcome: idiosyncratic stock volatility, metric: pp-effect, value: "-0.134 pp TREAT x POST on IVOL (t = -2.28); MAXMIN: -0.871 (t = -2.65)", direction: negative }
    - { ref: R5, outcome: excessive stock trade concentration, metric: coefficient, value: "-0.038 TREAT x POST on Ln(MAXVOLM/MEDVOLM) (t = -2.95); MAXRET: -0.427 (t = -2.26)", direction: negative }
    - { ref: R6, outcome: stock mispricing and informed trading intensity, metric: coefficient, value: "-3.180 TREAT x POST on MISP (t = -3.87); ITI_13D: -0.020 (t = -4.71)", direction: negative }
    - { ref: R7, outcome: options trading volume, metric: coefficient, value: "TREAT x POST = 0.492 (t = 11.74) for Ln(OPTVOLM); 0.042 (t = 7.29) for O/S", direction: positive, vsBenchmark: "Penny Pilot inclusion raises options activity in both volume measures" }
    - { ref: R8, outcome: total stock price volatility, metric: coefficient, value: "Instrumented O/S coefficient = -5.028 (t = -3.48) for TVOL; -4.058 (t = -3.32) for IVOL; -19.870 (t = -3.26) for MAXMIN", direction: negative, vsBenchmark: "A 1-SD increase in O/S reduces volatility by 31-35% of an outcome standard deviation" }
    - { ref: R9, outcome: total stock price volatility, metric: coefficient, value: "TREAT x PseudoPOST on TVOL = -0.011 (t = -0.12), 0.014 (t = 0.17), 0.014 (t = 0.19) across columns 3-5; all placebo volatility coefficients are insignificant", direction: none, vsBenchmark: "No pre-treatment effect at pseudo dates six months before actual inclusion" }
    - { ref: R10, outcome: total stock price volatility, metric: coefficient, value: "Dynamic DiD pre-addition coefficients are statistically indistinguishable from zero; post-addition coefficients become significantly negative", direction: negative, vsBenchmark: "Event-time estimates show no pre-trend and a decline after inclusion" }
    - { ref: R11, outcome: total stock price volatility, metric: coefficient, value: "With contemporaneous and lagged volume/attention controls, TVOL TREAT x POST estimates range from -0.172 to -0.132 (Panel A) and -0.161 to -0.147 (Panel B); each is significant at 5%", direction: negative, vsBenchmark: "The effect persists after stock-volume, Google search, and Bloomberg news-attention controls" }
    - { ref: R12, outcome: excessive stock trade concentration, metric: coefficient, value: "TREAT x POST = -16.040 (t = -4.05) for MAXTURN - MEDTURN and -0.389 (t = -2.50) for |MINRET|", direction: negative }
    - { ref: R13, outcome: stock mispricing and informed trading intensity, metric: coefficient, value: "For underpriced stocks, SYY_SCORE rises by 2.000 (t = 2.08) or 1.496 (t = 1.99); for overpriced stocks it falls by -1.834 (t = -1.64) or -0.607 (t = -0.46), both insignificant", direction: positive, vsBenchmark: "Underpricing correction is significant; overpriced-stock estimates are insignificant" }
    - { ref: R14, outcome: stock mispricing and informed trading intensity, metric: coefficient, value: "TREAT x POST: ITI_Impatient -0.021 (t = -5.52); ITI_Patient -0.016 (t = -4.49); ITI_Insider -0.006 (t = -2.20); ITI_Short -0.008 (t = -4.32)", direction: negative, vsBenchmark: "All five ITI measures fall significantly; ITI_13D is reported in R6" }
    - { ref: R15, outcome: total stock price volatility, metric: coefficient, value: "Baseline matched-sample TVOL effect is -0.135 (t = -2.24) in a +/-3-month window and -0.181 (t = -2.84) in a +/-6-month window; nine alternative matching methods and sample periods restricted to 2006-2011 or excluding observations through June 2009 retain the reported pattern", direction: negative, vsBenchmark: "Effects remain negative across matching procedures and sample-period checks" }
  resultType: confirms
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
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added results R7-R15, expanded equations and specifications, and updated findings and row counts. Not human-verified. Not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 15 Core results rows, specifications, classifications, findings, prose, frontmatter, DOI edges, and locatability against the PDF; corrected R5 MAXRET significance to ** (Table 9 p. 14; prior verification said *), R11's TVOL ranges, R15's sample-period description, reverse-causality and mispricing-score descriptions, R13 finding direction, outcomeClass, event-time equation subscripts, and resultType. No unsupported headline results remain. Table-locator pass (2026-10-04): R9, Table 7 p. 10 -> p. 11." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jbankfin.2025.107612", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] contains TDM (elsevier.com/tdm/userlicense/1.0/) and stm-asf entries only; no CC licence block; paywalled; issued 2026-04-01" }
---

**What this is.** A distilled summary of Da-Hea Kim, "Does options trading stabilize stock prices? Evidence from a natural experiment," *Journal of Banking and Finance* 185 (2026) 107612. It covers fifteen main findings with exact source locators, the identification strategy (Penny Pilot Program as a quasi-natural experiment), and the regression specifications. Read the original at [doi.org/10.1016/j.jbankfin.2025.107612](https://doi.org/10.1016/j.jbankfin.2025.107612) to replicate or extend.

## TL;DR

Kim (2026) revisits whether options trading stabilizes or destabilizes underlying stock prices. Pooled OLS regressions find a positive association between options volume and stock price volatility, consistent with reverse causality because high-volatility stocks may attract more options activity. Using the SEC's Penny Pilot Program (PPP), which reduced options tick sizes for roughly 500 underlying securities in a staggered fashion from 2007 to 2020, as an exogenous shock to options trading volume, instrumental variable regressions show that a one-standard-deviation increase in options volume reduces total volatility by 1.21 percentage points (46% of the mean). Difference-in-differences (DiD) regressions using a propensity-score-matched control sample find that pilot-stock total volatility falls by 0.21 percentage points (7.5% of pre-treatment average) relative to never-included controls. Two mechanisms drive the result: (1) the options market absorbs liquidity shocks to the underlying stock, reducing excessive trade concentration and extreme daily returns; and (2) options trading corrects mispricing by anchoring prices to intrinsic values through enhanced price discovery, as evidenced by a decline in MISP and informed trading intensity. SYY_SCORE rises significantly for underpriced stocks, while its estimates for overpriced stocks are insignificant.

## Core results

Significance stars: `\*` 10%, `\*\*` 5%, `\*\*\*` 1%. Locators cite the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Pooled OLS finds a positive (endogenous) association between options volume and total stock volatility | Table 3, col. (1), p. 5 | Ln(OPTVOLM) on TVOL = +0.223\*\*\* (t = 60.55); 1-SD increase associated with +34% SD change in TVOL |
| R2 | IV (PPP as instrument) reverses the sign: increased options trading causally reduces total volatility | Table 4 Panel A, col. (2), p. 7 | Instrumented Ln(OPTVOLM) on TVOL = -0.435\*\*\* (t = -4.15); 1-SD increase in options volume -> -1.21 pp TVOL = 46% of mean = 67% of SD |
| R3 | DiD (matched sample): pilot firms' total volatility declines relative to controls after program inclusion | Table 6, col. (3), p. 9 | TREAT x POST on TVOL = -0.205\*\*\* (t = -2.73); 7.5% of pre-treatment mean; robust to additional controls and lagged TVOL |
| R4 | DiD: idiosyncratic volatility and extreme return range also decline for pilot firms | Table 6, cols. (7) and (9), p. 9 | TREAT x POST on IVOL = -0.134\*\* (t = -2.28); TREAT x POST on MAXMIN = -0.871\*\*\* (t = -2.65) |
| R5 | Liquidity buffer mechanism: options inclusion reduces excessive stock trade concentration and extreme daily price moves | Table 9, cols. (1) and (7), p. 14 | TREAT x POST on Ln(MAXVOLM/MEDVOLM) = -0.038\*\*\* (t = -2.95); TREAT x POST on MAXRET = -0.427\*\* (t = -2.26); 5-11% of pre-treatment mean |
| R6 | Mispricing correction mechanism: options trading reduces stock mispricing and informed trading intensity | Tables 10-11, cols. (1), p. 15 | TREAT x POST on MISP = -3.180\*\*\* (t = -3.87; 11-13% of pre-treatment); TREAT x POST on ITI_13D = -0.020\*\*\* (t = -4.71) |
| R7 | Penny Pilot inclusion increases options trading, supporting the instrument's relevance | Table 4, Panel A col. (1) and Panel B col. (1), p. 7 | TREAT x POST = +0.492\*\*\* (t = 11.74) for Ln(OPTVOLM); +0.042\*\*\* (t = 7.29) for O/S |
| R8 | IV results hold when options trading is measured relative to stock volume | Table 4, Panel B cols. (2)-(4), p. 7 | Instrumented O/S coefficients: TVOL -5.028\*\*\* (t = -3.48), IVOL -4.058\*\*\* (t = -3.32), MAXMIN -19.870\*\*\* (t = -3.26); 1-SD O/S increase reduces volatility 31-35% of outcome SD |
| R9 | Placebo treatment dates before actual inclusion show no pre-treatment volatility effects | Table 7, cols. (3)-(11), p. 11 | TREAT x PseudoPOST on TVOL = -0.011 (t = -0.12), +0.014 (t = 0.17), +0.014 (t = 0.19) across cols. (3)-(5); all volatility coefficients are insignificant |
| R10 | Dynamic event-time estimates support parallel trends and show volatility falling after inclusion | Fig. 3, p. 10 | Pre-addition TREAT x event-time coefficients are not statistically different from zero; post-addition coefficients become significantly negative |
| R11 | The volatility decline remains after controlling for stock trading volume and investor attention | Table 8, Panels A-B, cols. (1)-(9), p. 12 | TVOL TREAT x POST ranges from -0.172 to -0.132 in Panel A and -0.161 to -0.147 in Panel B; all estimates are significant at 5% |
| R12 | Additional liquidity proxies confirm reduced concentrated trading and extreme daily losses | Table 9, cols. (5)-(6) and (9)-(10), p. 14 | TREAT x POST = -16.040\*\*\* (t = -4.05) for MAXTURN - MEDTURN; -0.389\*\* (t = -2.50) for |MINRET| |
| R13 | Mispricing correction is significant for underpriced stocks but not overpriced stocks | Table 10, cols. (3)-(6), p. 15 | Underpriced SYY_SCORE: +2.000\*\* (t = 2.08), +1.496\* (t = 1.99); overpriced SYY_SCORE: -1.834 (t = -1.64), -0.607 (t = -0.46) |
| R14 | Options inclusion lowers all remaining informed-trading intensity measures | Table 11, cols. (3)-(10), p. 15 | TREAT x POST: ITI_Impatient -0.021\*\*\* (t = -5.52), ITI_Patient -0.016\*\*\* (t = -4.49), ITI_Insider -0.006\*\* (t = -2.20), ITI_Short -0.008\*\*\* (t = -4.32) |
| R15 | The volatility reduction persists across alternative matching and sample-window checks | Tables 12-14, pp. 16-19 | Nine alternative matching methods and sample periods restricted to 2006-2011 or excluding observations through June 2009 preserve the baseline pattern; baseline matched TVOL effect is -0.135\*\* (t = -2.24) for +/-3 months and -0.181\*\*\* (t = -2.84) for +/-6 months |

**Overall (paper's conclusion).** The positive OLS correlation between options volume and stock price volatility is consistent with reverse causality, since volatile stocks may attract options trading. Once endogeneity is addressed via the Penny Pilot Program, the estimated causal effect reverses: expanded options trading reduces stock price volatility. The stabilizing effect operates through both a liquidity buffer channel and a mispricing correction channel, and it holds across nine alternative matching methods, a 2006-2011 sample, a sample excluding observations through June 2009, and shorter event windows of plus or minus three or six months. The findings support the beneficial role of options markets in enhancing underlying equity price stability.

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

The paper has no formal structural model. The tested hypotheses and channels are described above. Its identification combines an instrumental-variable design using staggered Penny Pilot inclusion and a propensity-score-matched difference-in-differences design. The Penny Pilot Program lowered options tick sizes, increasing options trading costs less; treatment timing was staggered across securities.

**Pooled OLS specification (Table 3, p. 5).** The paper regresses the monthly volatility proxy on contemporaneous options activity and lagged firm controls:

$$
\text{VolatilityProxy}_{i,t} = \alpha + \beta \text{OptionsTrading}_{i,t} + \gamma^{\prime} \text{Controls}_{i,t-1} + \varepsilon_{i,t} \tag{1}
$$

VolatilityProxy is TVOL, IVOL, or MAXMIN. OptionsTrading is Ln(OPTVOLM) or O/S. The sample contains 380,064 firm-months from 2006-2021. Regressions include firm and month fixed effects, with heteroskedasticity-robust standard errors clustered by firm.

**Instrumental variables (Table 4, p. 7).** The first stage uses the interaction of program inclusion and post-inclusion months to instrument for options volume:

$$
\text{OptionsTrading}_{i,t} = \alpha + \beta \left(\text{TREAT}_{i} \times \text{POST}_{i,t}\right) + \gamma^{\prime} \text{Controls}_{i,t-1} + \varepsilon_{i,t} \tag{2}
$$

The second stage is:

$$
\text{VolatilityProxy}_{i,t} = \delta + \zeta \widehat{\text{OptionsTrading}}_{i,t} + \lambda^{\prime} \text{Controls}_{i,t-1} + \nu_{i,t} \tag{3}
$$

Both stages use the 380,064 firm-month sample from 2006-2021, firm and month fixed effects, and robust standard errors clustered by firm. Table 4 reports Ln(OPTVOLM) and O/S as alternative endogenous activity measures, three volatility proxies, and variants controlling for lagged volatility.

**Matched difference-in-differences (Table 6, p. 9).** A logit propensity score matches 264 pilot firms one-to-one to never-treated controls without replacement, using a 0.2 caliper and pre-inclusion TVOL, STKRET, SIZE, STKVOL, IOR, MOM, BM, and ROA. The baseline estimating specification is:

$$
\text{Outcome}_{i,t} = \alpha + \beta \left(\text{TREAT}_{i} \times \text{POST}_{i,t}\right) + \gamma^{\prime} \text{Controls}_{i,t-1} + \mu_i + \tau_t + \varepsilon_{i,t} \tag{4}
$$

Outcome is options activity or a volatility proxy. The sample is monthly observations in a 25-month event window, up to 13,020 firm-months from 264 matched pairs. All regressions include firm and month fixed effects and firm-clustered robust standard errors.

**Placebo, attention controls, and event time.** Table 7 replaces POST with a pseudo-post indicator dated six months before inclusion in the pre-treatment sample. Table 8 adds contemporaneous or one-month-lagged stock-volume changes, Google Search Volume Index, or Bloomberg News Heat Score. Both tables use firm and month fixed effects and firm-clustered robust standard errors; the Table 8 matched samples range from 8,333 to 12,667 observations (p. 12). Figure 3 estimates event-time interactions over k = -11,...,12 months:

$$
\text{TVOL}_{i,t} = \alpha + \sum_{k=-11}^{12} \beta_{1k} \text{TREAT}_{i,t} \times D_{i,t,k} + \beta_2 \text{TREAT}_{i,t} + \sum_{k=-11}^{12} \beta_{3k}D_{i,t,k} + \gamma^{\prime} \text{Controls}_{i,t-1} + \varepsilon_{i,t} \tag{5}
$$

The pre-addition coefficients are statistically indistinguishable from zero, while post-addition coefficients are significantly negative (Fig. 3, p. 10).

**Mechanism specifications (Tables 9-11, pp. 14-15).** The liquidity and mispricing tests use the same matched DiD design in equation (4), changing the dependent variable to the Table 9 liquidity-shock measures, Table 10 MISP or SYY_SCORE in underpriced and overpriced samples, or Table 11 informed-trading intensity measures. These regressions include firm and month fixed effects and robust standard errors clustered by firm. Table 9 uses up to 13,020 matched firm-month observations; Table 10 and Table 11 use their respective outcome-specific matched samples. The Table 10 MISP sample consists of stocks with previous-month SYY_SCORE below 30 or above 70.


## Empirical specifications

All specifications below use the paper's reported regressors and fixed effects; firm-clustered robust standard errors are used unless stated otherwise.

**Placebo DiD (Table 7, p. 11).** The authors restrict to the pre-treatment window and move the treatment date six months earlier:

$$
\text{Outcome}_{i,t} = \alpha + \beta \left(\text{TREAT}_{i} \times \text{PseudoPOST}_{i,t}\right) + \gamma^{\prime} \text{Controls}_{i,t-1} + \mu_i + \tau_t + \varepsilon_{i,t} \tag{6}
$$

Outcomes are options volume or TVOL, IVOL, and MAXMIN. The sample is the matched firms' 12-month pre-treatment window, with 6,161 or 6,319 firm-months depending on outcome availability. Firm and month fixed effects are included; standard errors are robust and clustered by firm. The reported treatment coefficients for the volatility outcomes are statistically insignificant.

**Attention and liquidity controls (Table 8, p. 12).** The baseline matched DiD specification adds contemporaneous or lagged changes in stock volume and attention measures:

$$
\text{Volatility}_{i,t} = \alpha + \beta \left(\text{TREAT}_{i} \times \text{POST}_{i,t}\right) + \delta \text{Proxy}_{i,t-k} + \gamma^{\prime} \text{Controls}_{i,t-1} + \mu_i + \tau_t + \varepsilon_{i,t} \tag{7}
$$

Proxy is monthly change in stock volume, Google Search Volume Index, or Bloomberg News Heat Score; k is zero in Panel A and one in Panel B. TVOL, IVOL, and MAXMIN are the outcomes. Matched monthly samples range from 8,333 to 12,667 observations because Bloomberg data begin in 2010. Firm and month fixed effects and firm-clustered robust standard errors are used.

**Liquidity and mispricing tests (Tables 9-11, pp. 14-15).** These use equation (4) with the same matched DiD controls, fixed effects, and firm-clustered robust standard errors. Table 9 outcomes are log maximum-to-median daily volume, the maximum-volume deviation, maximum-to-median turnover difference, MAXRET, and |MINRET|; sample sizes are 12,667 or 13,020. Table 10 outcomes are MISP in the pooled mispriced sample and SYY_SCORE separately among stocks with prior-month scores below 30 or above 70; sample sizes range from 1,006 to 2,175. Table 11 outcomes are the five ITI measures for the matched firms over the 12 months before and after inclusion. Robustness Tables 12-14 repeat these matched specifications across nine matching methods, different sample periods, and +/-3- and +/-6-month event windows (pp. 16-19).

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

Source: peer-reviewed, *Journal of Banking and Finance* 185 (2026) 107612. DOI: 10.1016/j.jbankfin.2025.107612. Published by Elsevier B.V. All rights reserved. This distillation was updated by gpt-6-luna on 2026-10-04; it has been machine-verified against the PDF but is **not human-verified or independently reproduced**. The article is paywalled; only textual extracts are permitted here.

> Kim, Da-Hea. "Does options trading stabilize stock prices? Evidence from a natural experiment." *Journal of Banking and Finance* 185 (2026): 107612. DOI: 10.1016/j.jbankfin.2025.107612. Copyright 2025 Elsevier B.V. All rights reserved.
