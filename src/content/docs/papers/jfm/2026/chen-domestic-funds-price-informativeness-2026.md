---
title: "Domestic Funds and Price Informativeness: Chen, Wu, Yang & Zhong (2026)"
description: >-
  Distilled: Using Chinese listed companies (2005-2019), domestic fund ownership
  alone has no significant effect on stock price informativeness, but
  incentive-weighted domestic fund ownership significantly improves it through
  two channels: information processing and information provision. J. Financial
  Markets 2026, paywalled. Seven core results with source locators, datasets,
  the empirical design, and the firm-level price informativeness decomposition.
sidebar:
  label: Chen-Wu-Yang-Zhong 2026
  order: 1
tags: [paper-summary, asset-pricing, equities, price-informativeness, fund-behavior,
       emerging-markets, institutional-investors, china, panel-regression, panel-data,
       peer-reviewed, unreplicated, data:csmar, data:resset]
paper:
  authors: Shaoling Chen, Xi Wu, Haisheng Yang, Jiaying Zhong
  authorList:
    - { family: Chen, given: Shaoling, affiliation: Jinan University }
    - { family: Wu, given: Xi, affiliation: Capital University of Economics and Business }
    - { family: Yang, given: Haisheng, affiliation: Sun Yat-sen University }
    - { family: Zhong, given: Jiaying, affiliation: Sun Yat-sen University }
  year: 2026
  venue: Journal of Financial Markets 78 (2026) 101027
  venueShort: J. Fin. Markets 2026
  tier: lower
  doi: 10.1016/j.finmar.2025.101027
  jel:
    codes: [G11, G14, G32, G34]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ['Financial Markets and Investment Strategies', 'Corporate Finance and Governance', 'Monetary Policy and Economic Impact']
  dataAccess: licensed-commercial
  outcome:
    - stock price informativeness (earnings forecastability of stock prices)
    - price synchronicity
    - probability of informed trading (PIN)
    - fund site visit quantity and quality
  outcomeClass: [security-returns, fund-behavior]
  license: "All rights reserved (1386-4181/© 2025 Elsevier B.V.; TDM licenses only in Crossref; no CC licence)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 0

  methods:
    role: both
    contributes: mo-ols-fpe-measure
    family: descriptive
    buildsFrom: [panel-regression, mo-ols, fund-pi-decomposition]
    identification: selection-on-observables
  contributionType: [new-fact, measurement]
  mechanisms: [information-asymmetry, agency]
  scope:
    region: China
    assetClass: Chinese A-share equities
    period: 2005-01..2019-12
    frequency: mixed
    dataType: [market, accounting, administrative]
    granularity: [firm, security]
    n: "21,242 firm-level observations; 3,400+ funds (Resset)"

  findings:
    - { ref: R1, outcome: stock price informativeness, metric: coefficient, value: "Dom x log(M/A) = -0.014 (0.034), not sig [h=1]; Dom x log(M/A) = -0.013 (0.025), not sig [h=3]", direction: none }
    - { ref: R2, outcome: stock price informativeness, metric: coefficient, value: "Dom_Inc x log(M/A) = 0.038** (0.015) [h=1]; 0.032** (0.016) [h=3]", direction: positive, vsBenchmark: "vs null result for plain Dom ownership (R1)" }
    - { ref: R3, outcome: price synchronicity, metric: coefficient, value: "Dom_Inc on SYNCH = -0.149*** (0.032)", direction: negative, vsBenchmark: "lower SYNCH = more informative; Dom (no incentive) insig at -0.042 (0.029)" }
    - { ref: R4, outcome: probability of informed trading (PIN), metric: coefficient, value: "Dom_Inc on PIN = 0.053*** (0.004)", direction: positive, vsBenchmark: "vs Dom on PIN = 0.020*** (0.005)" }
    - { ref: R5, outcome: future stock return predictability, metric: coefficient, value: "delta Dom_Inc on Ret_{t+1} = 0.023** (0.010); on Ret_{t+4} = 0.144** (0.062)", direction: positive, vsBenchmark: "delta Dom on Ret_{t+1} = -0.088*** (0.021), negative [low information content]" }
    - { ref: R6, outcome: number of firm site visits, metric: coefficient, value: "Dom_Inc on VisitNum = 4.532*** (0.696); Dom on VisitNum = 2.131*** (0.191)", direction: positive }
    - { ref: R7, outcome: share of price informativeness from fund manager, metric: probability, value: "43.74% (h=1), 43.49% (h=3) of FPE_Inc attributable to fund manager; year FE ~30-35%; matching ~22-25%", direction: positive }

  resultType: new-finding

  relatesTo:
    - { cite: "Kacperczyk, Sundaresan & Wang (2021)", doi: '10.1093/rfs/hhaa076', relation: extends, note: "extends their finding that domestic ownership has no significant positive effect on price informativeness by showing incentives change that result" }
    - { cite: "Bai, Philippon & Savoy (2016)", doi: '10.1016/j.jfineco.2016.08.005', relation: builds-on, note: "adopts their framework measuring price informativeness as stock price efficiency in forecasting future earnings" }
    - { cite: "Carpenter, Lu & Whitelaw (2021)", doi: '10.1016/j.jfineco.2020.08.012', relation: builds-on, note: "follows their approach measuring the predictive power of stock prices for future earnings in the Chinese market" }
    - { cite: "Abdulkadiroglu, Pathak & Schellenberg (2020)", doi: '10.1257/aer.20172040', relation: builds-on, note: "adapts their decomposition method to attribute fund-level price informativeness contributions to year FE, fund manager, and matching components" }
    - { cite: "Keane & Neal (2020)", doi: '10.3982/qe1319', relation: builds-on, note: "uses their MO-OLS (mean-observation OLS) varying-coefficient framework to construct the firm-level FPE measure" }
    - { cite: "Fang, Kempf & Trapp (2014)", doi: '10.1016/j.jfineco.2013.11.003', relation: extends, note: "extends their finding that fund managers play a predominant role in funds' price discovery to the Chinese incentive context" }

  openQuestions:
    - "Site visit data from the Shenzhen Stock Exchange (SZSE) is available only for 2011-2019; the information provision channel analysis covers a shorter subsample than the baseline (p. 11, fn. 8)."
    - "The generalizability of the incentive mechanism to other emerging markets with different fund fee structures, governance regimes, and market microstructures is not tested (p. 15)."

  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (16 pp.); seven results extracted from Tables 2-6 and Fig. 1. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "All 7 core result locators and magnitudes confirmed against PDF; equations 1-23 verified term-by-term; JEL codes corrected from [G14, G23, G11] to [G11, G14, G32, G34] per PDF p. 1 (G32 and G34 were missing, G23 was spurious); no other errors found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.finmar.2025.101027", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] contains TDM and STM-ASF entries only (Elsevier TDM 1.0, tdmrep, policy-017/037/012/029/004); no CC licence; all rights reserved as stated on artifact p. 1" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the empirical design, and the two proposed mechanisms (information processing and information provision) with their estimating equations: enough to know what it found and why, without reading the full article. To replicate or extend it, read the original at [https://doi.org/10.1016/j.finmar.2025.101027](https://doi.org/10.1016/j.finmar.2025.101027).

## TL;DR

Using a panel of Chinese A-share listed companies from 2005 to 2019 (21,242 firm-level observations), the paper shows that plain domestic institutional fund ownership has no significant effect on stock price informativeness, consistent with prior literature (Kacperczyk, Sundaresan and Wang (2021)). However, once incentives are accounted for, incentive-weighted domestic fund ownership significantly improves price informativeness: a greater incentive-weighted shareholding ratio is associated with higher future earnings forecastability of stock prices. Price informativeness is measured following Carpenter, Lu and Whitelaw (2021) as the sensitivity of future earnings to current stock prices. Two mechanisms drive this: (1) incentivized funds process information better (their shareholding changes predict future stock returns more accurately), and (2) they provide more and higher-quality information to firms (more frequent and more positively toned site visits). A novel MO-OLS-based firm-level decomposition traces approximately 43-44% of the improvement attributable to the fund manager, consistent with Fang, Kempf and Trapp (2014) who find fund managers play a predominant role in funds' price discovery; year fixed effects and fund-stock matching account for the remainder.

## Core results

Magnitudes and significance as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Domestic fund ownership (Dom) has **no significant effect** on price informativeness at either horizon | Table 2, cols 2 and 7, p. 6 | Dom x log(M/A) = -0.014 (0.034) [h=1]; -0.013 (0.025) [h=3]; neither significant |
| R2 | Incentive-weighted domestic ownership (Dom\_Inc) significantly **raises** price informativeness | Table 2, cols 4 and 9, p. 6 | Dom\_Inc x log(M/A) = 0.038\*\* (0.015) [h=1]; 0.032\*\* (0.016) [h=3] |
| R3 | Synchronicity robustness: Dom\_Inc **reduces price synchronicity** (more idiosyncratic, more informative) | Table 3, Panel A, col 2, p. 8 | Dom\_Inc on SYNCH = -0.149\*\*\* (0.032); Dom insig at -0.042 (0.029) |
| R4 | PIN robustness: Dom\_Inc **raises probability of informed trading** | Table 3, Panel B, col 8, p. 8 | Dom\_Inc on PIN = 0.053\*\*\* (0.004) |
| R5 | Information processing channel: changes in Dom\_Inc **predict future returns** (funds buy/sell before price moves) | Table 5, cols 2 and 4, p. 11 | delta Dom\_Inc on Ret_{t+1} = 0.023\*\* (0.010); on Ret_{t+4} = 0.144\*\* (0.062); delta Dom is negative (-0.088\*\*\*, col 1) |
| R6 | Information provision: Dom\_Inc **raises site visit quantity and quality** | Table 6, cols 2 and 8, p. 12 | VisitNum coeff = 4.532\*\*\* (0.696); VisitTone coeff = 0.320\*\*\* (0.122) |
| R7 | Decomposition: **fund manager** explains ~43% of the incentive-driven price informativeness improvement | Fig. 1, p. 14 | Fund manager: 43.74% (h=1), 43.49% (h=3); year FE: ~30-35%; matching: ~22-25% |

**Overall (paper's conclusion).** Incentives reconcile the puzzle that domestic funds appear passive despite holding local informational advantages. Once direct and flow incentives are folded into a weighted ownership measure, domestic funds demonstrably improve price efficiency through both superior information processing and active information provision to firms.

## Theory / model

The paper has no formal theoretical model. It proposes two empirical hypotheses motivated by prior theory (Grossman and Stiglitz (1980), Kyle (1985), Holmstrom and Tirole (1993)):

**Hypothesis 1: Information processing channel.** Incentive-aligned fund managers process publicly available information more efficiently. Under this channel, an increase in incentive-weighted domestic fund ownership should align with subsequent stock-price movements, i.e., the change in Dom\_Inc should positively predict future stock returns (p. 9). Formally: if $$\beta_1 > 0$$ in the return-prediction regression (equation 11, p. 9), funds are proficient at anticipating future price movements.

**Hypothesis 2: Information provision channel.** Incentive-aligned funds actively seek and transmit private information to firm managers through corporate site visits (Chen, Goldstein and Jiang (2007); Bond, Edmans and Goldstein (2012)). Under this channel, higher Dom\_Inc should increase (a) the number of site visits (VisitNum) and (b) the quality of those visits (VisitTone), which in turn should improve the earnings-forecasting content of stock prices. A positive coefficient of Dom\_Inc in the visit regression and a significant interaction of VisitNum with log(M/A) in the earnings-forecastability regression (Table 6, cols 3-6) would support this channel (p. 11-12).

**Identification caveat.** The paper uses panel OLS with industry and period fixed effects plus firm-level controls; no instrument or quasi-natural experiment is employed. The identification rests on selection-on-observables. Results are robust to alternative price informativeness measures (synchronicity, PIN, RPE) and to lagged ownership, but a causal reading requires this conditional-ignorability assumption.

## Method

**Price informativeness measure (MO-OLS).** Following Keane and Neal (2020), the paper estimates a mean-observation OLS (MO-OLS) framework, building on `mo-ols`, that allows the coefficient linking stock prices to future earnings to vary over both firm and time dimensions. The procedure nests three regression levels:

Pooled regression to obtain $$\tilde{b}^{\text{Dom\_Inc},t+h}$$ (equation 16, p. 13):

$$
\frac{E_{i,t+h}}{A_{it}} = a^t + b^{\text{Dom\_Inc},t+h} \log\!\left(\frac{M}{A}\right)_{it} \times Dom\_Inc_{it} + \gamma' X_{it} + \varepsilon_{it}
\tag{16}
$$

Time-specific cross-sectional regression to obtain $$\hat{b}_t^{\text{Dom\_Inc},t+h}$$ (equation 17, p. 13):

$$
\frac{E_{i,t+h}}{A_{it}} = a^t + b_t^{\text{Dom\_Inc},t+h} \log\!\left(\frac{M}{A}\right)_{it} \times Dom\_Inc_{it} + \gamma_t' X_{it} + v_{it}
\tag{17}
$$

Unit-specific time-series regression to obtain $$\hat{b}_i^{\text{Dom\_Inc},t+h}$$ (equation 18, p. 13):

$$
\frac{E_{i,t+h}}{A_{it}} = a^t + b_i^{\text{Dom\_Inc},t+h} \log\!\left(\frac{M}{A}\right)_{it} \times Dom\_Inc_{it} + \gamma_i' X_{it} + u_{it}
\tag{18}
$$

A preliminary estimate (equation 19, p. 13) averages these three, and an iterative correction (equation 20) yields the consistent coefficient $$\hat{\beta}_{it}^{\text{Dom\_Inc},t+h}$$. The firm-level FPE measure is then $$\text{FPE}_{it}^{\text{Dom\_Inc},t+h} = \hat{\beta}_{it}^{\text{Dom\_Inc},t+h} \times \sigma_t(\log(M/A))$$ (equations 13-15, pp. 12-13), where $$\sigma_t(\log(M/A))$$ is the cross-sectional standard deviation of log price-to-asset ratios in year $$t$$.

**Decomposition.** Following Abdulkadiroglu, Pathak and Schellenberg (2020), the fund-level contribution of fund $$j$$ to firm $$i$$'s FPE is decomposed via a cross-sectional regression of fund-level contributions on fund-year intercepts and firm characteristics (equation 23, p. 15, using the `fund-pi-decomposition` approach):

$$
\text{FPE}_{ijt}^{t+h} = \alpha_{jt} + X_{it} \beta_{jt} + \varepsilon_{ijt}
\tag{23}
$$

The decomposition of equation 22 (p. 15) into three additive components then yields:

$$
\text{FPE}_{ijt}^{t+h} = \underbrace{\bar{\alpha}_t}_{\text{Year}_t} + \underbrace{(\alpha_{jt} - \bar{\alpha}_t)}_{\text{Manager}_{jt}} + \underbrace{X_{it}\beta_{jt} + \varepsilon_{ijt}}_{\text{Match}_{it}}
\tag{22}
$$

where $$\bar{\alpha}_t = \frac{1}{J}\sum_{j=1}^J \alpha_{jt}$$ is the year-average fund intercept.

## Empirical specifications

**Baseline (Table 2, equations 6, pp. 5-6).** The price informativeness regression follows Kacperczyk, Sundaresan and Wang (2021) and Bai, Philippon and Savoy (2016):

$$
\left(\frac{E}{A}\right)_{i,t+h} = \alpha + \beta_1 \log\!\left(\frac{M}{A}\right)_{it} + \beta_2 \log\!\left(\frac{M}{A}\right)_{it} \times \text{Fund\_ownership}_{it} + \beta_3 \text{Fund\_ownership}_{it} + \gamma' X_{it} + \lambda_{is} + \tau_t + \varepsilon_{it}
\tag{6}
$$

where $$(E/A)_{i,t+h}$$ is firm $$i$$'s earnings/assets in period $$t+h$$ ($$h=1,3$$); $$\log(M/A)_{it}$$ is the log price-to-asset ratio; Fund\_ownership is Dom, For, Dom\_Inc, or For\_Inc depending on the column; $$X_{it}$$ includes current earnings, insider ownership, leverage, tangibility, listed years, cash, and ROA; $$\lambda_{is}$$ are industry fixed effects; $$\tau_t$$ are period fixed effects. Standard errors are clustered at industry-period level. The coefficient of interest is $$\beta_2$$: the average price informativeness conditional on fund ownership type.

**Synchronicity robustness (Table 3, Panel A, equation 7-8, pp. 7-8).** Price synchronicity is estimated as the logistic transformation of $$R^2$$ from regressing firm $$i$$'s A-share return on market and industry factors:

$$
\text{SYNCH}_{it} = \log\!\left(\frac{R^2_{it}}{1 - R^2_{it}}\right)
\tag{8}
$$

A lower SYNCH implies more firm-specific information in prices. Fund ownership enters as a level regressor; a significantly negative coefficient on Dom\_Inc confirms the baseline result (Table 3 Panel A, col 2: -0.149\*\*\*).

**PIN robustness (Table 3, Panel B, equation 9, p. 7).** The probability of informed trading (VPIN) follows Easley, Kiefer, O'Hara and Paperman (1996):

$$
\text{VPIN} = \frac{1}{nV} \sum_{\tau=1}^{n} \left| V^{\tau}_{\text{buy}} - V^{\tau}_{\text{sell}} \right|
\tag{9}
$$

where $$V^{\tau}_{\text{buy}}$$ and $$V^{\tau}_{\text{sell}}$$ are buy and sell volumes in volume bucket $$\tau$$, $$n$$ is the number of buckets, and $$V$$ is the uniform bucket volume. The coefficient of Dom\_Inc on PIN (0.053\*\*\*, Table 3 Panel B, col 8) confirms the baseline.

**Information processing channel (Table 5, equation 11, pp. 9-10).** A return-prediction regression assesses whether fund ownership changes predict future stock returns:

$$
\text{Return}_{i,t+h} = \alpha + \beta_1 \Delta\text{Fund\_ownership}_{it} + \gamma' X_{i,t} + \lambda_{is} + \tau_t + \varepsilon_{it}
\tag{11}
$$

where $$h = 1$$ or $$4$$ periods; $$\Delta\text{Fund\_ownership}_{it}$$ is $$\Delta\text{Dom}_{it}$$, $$\Delta\text{For}_{it}$$, or $$\Delta\text{Dom\_Inc}_{it}$$; $$X_{it}$$ includes log size, book-to-market, past 12-month volatility, and momentum. A positive $$\beta_1$$ on $$\Delta\text{Dom\_Inc}$$ (0.023\*\*, col 2; 0.144\*\*, col 4) indicates forward-looking information content.

**Information provision channel (Table 6, equation 12, p. 11).** Firm site visits are regressed on fund ownership:

$$
\text{Visit}_{it} = \alpha + \beta_1 \text{Fund\_ownership}_{it} + \gamma' X_{i,t} + \lambda_{is} + \tau_t + \varepsilon_{it}
\tag{12}
$$

where Visit is proxied by VisitNum (annual count of site visits from all domestic funds, 2011-2019 from SZSE) or VisitTone (tone of the Investor Relations Activity Log, constructed using a Chinese Financial Sentiment Dictionary following Gordon, Loeb and Shu (2013) and Brockman, Cicon, Li, Price and Shu (2017)). A positive coefficient on Dom\_Inc in both (4.532\*\*\* and 0.320\*\*\*) supports the information provision channel.

**Fund incentive construction.** Fund $$j$$'s incentive to promote firm $$i$$'s value is the total management fee gain from a 1% increase in firm $$i$$'s value (equation 1, p. 3):

$$
\text{Incentives}_{ijt} = \text{Direct incentives}_{ijt} + \text{Flow incentives}_{ijt}
\tag{1}
$$

$$
\text{Direct incentives}_{ijt} = p \times \text{AUM}_{jt} \times w_{ijt}
\tag{2}
$$

$$
\text{Flow incentives}_{ijt} = p \times \text{AUM}_{jt} \times \beta^j \times (w_{ijt} - v_{(-j)it})
\tag{3}
$$

where $$p = 0.828\%$$ is the average management fee rate, $$w_{ijt}$$ is the value weight of stock $$i$$ in fund $$j$$'s portfolio, $$\beta^j$$ is fund $$j$$'s estimated inflow-to-performance sensitivity, and $$v_{(-j)it}$$ is the period-$$t$$ average value weight of stock $$i$$ across peer funds. The incentive-weighted domestic ownership variable is:

$$
\text{Dom\_Inc}_{it} = \sum_{j=1}^{J} \text{Incentives}_{ijt} \times \text{Dom}_{ijt}
\tag{5}
$$

Net fund inflows are estimated via (equation 4, p. 4):

$$
\text{Net Inflow}_{jt} = \frac{\text{AUM}_{jt} - \text{AUM}_{j,t-1}(1 + R_{jt})}{\text{AUM}_{j,t-1}}
\tag{4}
$$

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CSMAR (China Stock Market Accounting Research Database) | Firm financial characteristics, stock returns, market capitalization; Chinese A-listed non-financial corporates, 2005-2019 | no page yet |
| Resset (Renmin University CSMAR Economic Research Data System) | Semi-annual open-end fund holdings (3,400+ equity, hybrid, and index funds), 2005-2019 | no page yet |
| SZSE Investor Relations Activity Log | Firm site visit records (quantity and tone), 2011-2019; Shenzhen Stock Exchange only | no page yet |

Sample: 21,242 firm-period observations (Table 1), semi-annual frequency, 2005-2019 for baseline; site visit subsample 2011-2019. Observations with missing data, delisted firms, and firms with fewer than 90 trading days in the prior six months are excluded.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.finmar.2025.101027) if you are:
studying why domestic institutional investors in emerging markets fail to improve price efficiency despite having local informational advantages; extending the fund-incentive and price-discovery literature to non-US markets; replicating or extending the MO-OLS firm-level FPE measure or the three-component decomposition; or benchmarking the relative magnitudes of foreign vs. domestic institutional investors' impact on price efficiency in China.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Markets* 78 (2026) 101027. All rights reserved (© 2025 Elsevier B.V.). This distillation was extracted by an LLM (claude-sonnet-4-6) on 2026-06-25 and is **not human-verified or independently reproduced**. Extract-only: no verbatim PDF is hosted here.

> Chen, Shaoling, Xi Wu, Haisheng Yang, and Jiaying Zhong.
> "Incentives matter: Domestic funds and price informativeness improvement."
> *Journal of Financial Markets* 78 (2026) 101027.
> DOI: [10.1016/j.finmar.2025.101027](https://doi.org/10.1016/j.finmar.2025.101027).
> © 2025 Elsevier B.V. All rights reserved.
