---
title: "Incentives matter: Domestic funds and price informativeness improvement: Chen, Wu, Yang & Zhong (2026)"
description: >-
  Distilled: Using Chinese listed companies (2005-2019), domestic fund ownership
  alone has no significant association with stock price informativeness, while
  incentive-weighted ownership is positively associated with it, with evidence
  consistent with information processing and provision channels. J. Financial
  Markets 2026, paywalled. Sixteen core results with source locators, datasets,
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
  outcomeClass: [asset-prices, security-returns, fund-behavior]
  license: "All rights reserved (1386-4181/© 2025 Elsevier B.V.; TDM licenses only in Crossref; no CC licence)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 16
  citedByCount: 0

  methods:
    role: applies-method
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
    - { ref: R6, outcome: fund site visit quantity and quality, metric: coefficient, value: "Dom_Inc on VisitNum = 4.532*** (0.696); Dom on VisitNum = 2.131*** (0.191); Dom_Inc on VisitTone = 0.320*** (0.122)", direction: positive }
    - { ref: R7, outcome: share of price informativeness from fund manager, metric: probability, value: "43.74% (h=1), 43.49% (h=3) of FPE_Inc attributable to fund manager; year FE ~30-35%; matching ~22-25%", direction: positive }
    - { ref: R8, outcome: stock price informativeness, metric: coefficient, value: "For x log(M/A) = 0.350* (0.163) at h=1; 0.249** (0.119) at h=3", direction: positive }
    - { ref: R9, outcome: stock price informativeness, metric: coefficient, value: "For_Inc x log(M/A) = 0.800*** (0.303) at h=1; 0.484* (0.269) at h=3", direction: positive, vsBenchmark: "Larger than the corresponding Dom_Inc coefficients in Table 2, cols 4 and 9" }
    - { ref: R10, outcome: stock price informativeness, metric: coefficient, value: "Dom_Inc x log(M/A): total investment 0.400* (0.215), 0.300** (0.144); R&D 0.003** (0.001), 0.046*** (0.001); CAPE 0.537** (0.241), 0.316** (0.150), for h=1 and h=3 respectively", direction: positive }
    - { ref: R11, outcome: price synchronicity, metric: coefficient, value: "Dom_HiInc = -0.168** (0.073); Dom_LoInc = -0.136*** (0.029)", direction: negative, vsBenchmark: "Higher incentive group has the larger absolute synchronicity reduction" }
    - { ref: R12, outcome: price synchronicity, metric: coefficient, value: "Lagged Dom_Inc = -0.092*** (0.028); lagged Dom = 0.075** (0.033); lagged For = -0.733*** (0.169) and -1.038*** (0.151)", direction: mixed }
    - { ref: R13, outcome: future stock return predictability, metric: coefficient, value: "Delta For on Ret(t+1) = 0.093** (0.036); on Ret(t+4) = 0.142* (0.074)", direction: positive }
    - { ref: R14, outcome: stock price informativeness, metric: coefficient, value: "VisitNum x log(M/A) = 0.032 (0.024), 0.063*** (0.017) at h=1; 0.088*** (0.019), 0.086*** (0.019) at h=3. VisitTone x log(M/A) = 0.003 (0.004), 0.002* (0.001) at h=1; 0.004** (0.002), 0.004*** (0.001) at h=3", direction: positive }
    - { ref: R15, outcome: stock price informativeness, metric: coefficient, value: "Firm-level aggregate institutional incentive x log(M/A) = 0.016*** (0.007) at h=1; 0.014** (0.006) at h=3", direction: positive }
    - { ref: R16, outcome: stock price informativeness, metric: coefficient, value: "For x log(M/A): total investment 5.742** (2.620), 6.346** (2.944) at h=1 and 2.700*** (0.835), 2.585*** (0.776) at h=3; R&D 0.207** (0.086), 0.249*** (0.064) at h=1 and 0.144** (0.058), 0.147*** (0.056) at h=3; CAPE 5.896* (2.834), 5.882** (2.716) at h=1 and 2.570*** (0.830), 2.476*** (0.760) at h=3", direction: positive }

  resultType: confirms

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
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the 17-page PDF; appended Core results R8-R16 and findings entries, completed the numbered equations and estimating-specification coverage, and confirmed mechanisms. These additions are not human-verified or reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators and reported magnitudes re-checked against the source PDF; all 16 Core results rows, equations 1-23, specifications, classification axes, findings, prose claims, relations, and frontmatter checked. Corrected MO-OLS intercept notation, incentive-sensitivity notation, method role, title, baseline-measure attribution, and causal phrasing; no unsupported headline omissions found." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.finmar.2025.101027", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] contains TDM and STM-ASF entries only (Elsevier TDM 1.0, tdmrep, policy-017/037/012/029/004); no CC licence; all rights reserved as stated on artifact p. 1" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the empirical design, and the two proposed mechanisms (information processing and information provision) with their estimating equations: enough to know what it found and why, without reading the full article. To replicate or extend it, read the original at [https://doi.org/10.1016/j.finmar.2025.101027](https://doi.org/10.1016/j.finmar.2025.101027).

## TL;DR

Using a panel of Chinese A-share listed companies from 2005 to 2019 (21,242 firm-level observations), the paper finds no significant association between plain domestic institutional fund ownership and stock price informativeness, consistent with Kacperczyk, Sundaresan and Wang (2021). Incentive-weighted domestic ownership is positively associated with informativeness: a greater weighted shareholding ratio corresponds to higher future earnings forecastability from stock prices. Following Bai, Philippon and Savov (2016) and Kacperczyk, Sundaresan and Wang (2021), the baseline measure is the sensitivity of future earnings to current stock prices. The mechanism tests provide evidence consistent with two channels: incentivized funds' ownership changes better predict future stock returns (information processing), and incentive-weighted ownership is associated with more frequent and more positively toned site visits (information provision). A firm-level MO-OLS decomposition attributes approximately 43-44% of the incentive-weighted domestic fund contribution to the fund manager, followed by year fixed effects and fund-stock matching, consistent with Fang, Kempf and Trapp (2014).

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
| R8 | Foreign fund ownership is positively associated with earnings-forecasting price informativeness | Table 2, cols 2 and 7, p. 6 | For x log(M/A) = 0.350* (0.163) at h=1; 0.249** (0.119) at h=3 |
| R9 | Incentive-weighted foreign ownership has a stronger positive association with price informativeness | Table 2, cols 5 and 10, p. 6 | For_Inc x log(M/A) = 0.800*** (0.303) at h=1; 0.484* (0.269) at h=3 |
| R10 | Revelatory price efficiency results support incentive-weighted domestic ownership across investment outcomes | Table 4, Panels A-C, p. 10 | Dom_Inc x log(M/A): total investment 0.400* (0.215), 0.300** (0.144); R&D 0.003** (0.001), 0.046*** (0.001); CAPE 0.537** (0.241), 0.316** (0.150), for h=1 and h=3 respectively; plain Dom estimates are not significant |
| R11 | The synchronicity result holds above and below mean incentive-weighted ownership | Table 3, Panel A, cols 3-4, p. 8 | Dom_HiInc = -0.168** (0.073); Dom_LoInc = -0.136*** (0.029) |
| R12 | Lagged ownership tests retain the negative synchronicity association for incentive-weighted domestic and foreign funds | Table 3, Panel A, cols 5-6, p. 8 | Lagged Dom_Inc = -0.092*** (0.028); lagged Dom = 0.075** (0.033); lagged For = -0.733*** (0.169) and -1.038*** (0.151) |
| R13 | Changes in foreign fund ownership also predict subsequent stock returns | Table 5, cols 2 and 4, p. 11 | Delta For on Ret(t+1) = 0.093** (0.036); on Ret(t+4) = 0.142* (0.074) |
| R14 | Site visit quantity and tone interact positively with stock prices in forecasting future earnings | Table 6, cols 3-6 and 9-12, p. 12 | VisitNum x log(M/A) = 0.032 (0.024), 0.063*** (0.017) at h=1; 0.088*** (0.019), 0.086*** (0.019) at h=3. VisitTone x log(M/A) = 0.003 (0.004), 0.002* (0.001) at h=1; 0.004** (0.002), 0.004*** (0.001) at h=3 |
| R15 | Aggregate institutional fund incentives are positively associated with price informativeness | Table 2, cols 3 and 8, p. 6 | Inc x log(M/A) = 0.016*** (0.007) at h=1; 0.014** (0.006) at h=3 |
| R16 | Foreign ownership predicts more price-responsive investment across RPE outcomes | Table 4, Panels A-C, p. 10 | For x log(M/A): total investment 5.742** (2.620), 6.346** (2.944) at h=1 and 2.700*** (0.835), 2.585*** (0.776) at h=3; R&D 0.207** (0.086), 0.249*** (0.064) at h=1 and 0.144** (0.058), 0.147*** (0.056) at h=3; CAPE 5.896* (2.834), 5.882** (2.716) at h=1 and 2.570*** (0.830), 2.476*** (0.760) at h=3 |

**Overall (paper's conclusion).** Incentives help reconcile the puzzle that domestic funds appear passive despite holding local informational advantages. Once direct and flow incentives are folded into a weighted ownership measure, domestic funds are associated with greater price informativeness. The mechanism tests are consistent with improved information processing and active information provision to firms.

## Theory / model

The paper has no formal theoretical model. It proposes two empirical hypotheses motivated by prior theory (Grossman and Stiglitz (1980), Kyle (1985), Holmstrom and Tirole (1993)):

**Hypothesis 1: Information processing channel.** Incentive-aligned fund managers process information more efficiently. Under this channel, an increase in incentive-weighted domestic fund ownership should align with subsequent stock-price movements, i.e., the change in Dom\_Inc should positively predict future stock returns (p. 9). Formally: if $$\beta_1 > 0$$ in the return-prediction regression (equation 11, p. 9), funds are proficient at anticipating future price movements.

**Hypothesis 2: Information provision channel.** Incentive-aligned funds actively seek and transmit private information to firm managers through corporate site visits (Chen, Goldstein and Jiang (2007); Bond, Edmans and Goldstein (2012)). Under this channel, higher Dom\_Inc should increase (a) the number of site visits (VisitNum) and (b) the quality of those visits (VisitTone), which in turn should improve the earnings-forecasting content of stock prices. A positive coefficient of Dom\_Inc in the visit regression and a significant interaction of VisitNum with log(M/A) in the earnings-forecastability regression (Table 6, cols 3-6) would support this channel (p. 11-12).

**Identification caveat.** The paper uses panel OLS with industry and period fixed effects plus firm-level controls; no instrument or quasi-natural experiment is employed. The identification rests on selection-on-observables. Results are robust to alternative price informativeness measures (synchronicity, PIN, RPE) and to lagged ownership, but a causal reading requires this conditional-ignorability assumption.

## Method

Price informativeness is measured following Carpenter, Lu and Whitelaw (2021) as the sensitivity of future earnings to current stock prices.

**Price informativeness measure (MO-OLS).** Following Keane and Neal (2020), the paper estimates a mean-observation OLS (MO-OLS) framework, building on `mo-ols`, that allows the coefficient linking stock prices to future earnings to vary over both firm and time dimensions. The procedure nests three regression levels:

Pooled regression to obtain $$\tilde{b}^{\text{Dom\_Inc},t+h}$$ (equation 16, p. 13):

$$
\frac{E_{i,t+h}}{A_{it}} = a_{t+h} + b^{\text{Dom\_Inc},t+h} \log\!\left(\frac{M}{A}\right)_{it} \times Dom\_Inc_{it} + \gamma' X_{it} + \varepsilon_{it}
\tag{16}
$$

Time-specific cross-sectional regression to obtain $$\hat{b}_t^{\text{Dom\_Inc},t+h}$$ (equation 17, p. 13):

$$
\frac{E_{i,t+h}}{A_{it}} = a_{t+h} + b_t^{\text{Dom\_Inc},t+h} \log\!\left(\frac{M}{A}\right)_{it} \times Dom\_Inc_{it} + \gamma_t' X_{it} + v_{it}
\tag{17}
$$

Unit-specific time-series regression to obtain $$\hat{b}_i^{\text{Dom\_Inc},t+h}$$ (equation 18, p. 13):

$$
\frac{E_{i,t+h}}{A_{it}} = a_{t+h} + b_i^{\text{Dom\_Inc},t+h} \log\!\left(\frac{M}{A}\right)_{it} \times Dom\_Inc_{it} + \gamma_i' X_{it} + u_{it}
\tag{18}
$$

The paper first scales the time-varying interaction slope by the cross-sectional dispersion of log market capitalization to assets (equation 13, p. 13):

$$
\text{FPE}_{t}^{\text{Dom\_Inc},t+h} = b_{t}^{\text{Dom\_Inc},t+h} \times \sigma_t\!\left(\log\!\left(\frac{M}{A}\right)\right)
\tag{13}
$$

The cross-sectional regression defining that slope includes industry indicators (equation 14, p. 13):

$$
\frac{E_{i,t+h}}{A_{it}} = a_{t+h}^{t} + b_{t}^{\text{Dom\_Inc},t+h}\log\!\left(\frac{M_{it}}{A_{it}}\right)\times \text{Dom\_Inc}_{it} + c_{t+h}^{t}\left(\frac{E_{it}}{A_{it}}\right) + d_{t+h,s}^{t}\mathbf{1}_{s,it} + \varepsilon_{i,t+h}^{t}
\tag{14}
$$

The firm-year price informativeness measure replaces the common slope by the MO-OLS firm-specific estimate (equation 15, p. 13):

$$
\text{FPE}_{it}^{\text{Dom\_Inc},t+h} = b_{it}^{\text{Dom\_Inc},t+h} \times \sigma_t\!\left(\log\!\left(\frac{M}{A}\right)\right)
\tag{15}
$$

The preliminary MO-OLS coefficient combines pooled, time-specific, and firm-specific estimates (equation 19, p. 14):

$$
\beta_{it}^{\text{Dom\_Inc},t+h(\text{Prel})} = \widehat b_i^{\text{Dom\_Inc},t+h} + \widehat b_t^{\text{Dom\_Inc},t+h} - \widehat b^{\text{Dom\_Inc},t+h}
\tag{19}
$$

The authors then apply their iterative correction (equation 20, p. 14):

$$
\begin{aligned}
\beta_{it}^{\text{Dom\_Inc},t+h} ={}& \widehat b_i^{\text{Dom\_Inc},t+h} + \widehat b_t^{\text{Dom\_Inc},t+h} - \widehat b^{\text{Dom\_Inc},t+h} \\
&+ \sum_{\ell=0}^{L}(-1)^{\ell+1}\Bigg( Q_{xx,N}^{-1}\frac{1}{N}\sum_{i=1}^{N}x_{it}x_{it}'\Gamma_{1,\ell} + Q_{xx,T}^{-1}\frac{1}{T}\sum_{t=1}^{T}x_{it}x_{it}'\Gamma_{2,\ell} \\
&\qquad - Q_{xx,NT}^{-1}\frac{1}{NT}\sum_{i=1}^{N}\sum_{t=1}^{T}\left(x_{it}x_{it}'\Gamma_{1,\ell}+x_{it}x_{it}'\Gamma_{2,\ell}\right)\Bigg),
\end{aligned}
\tag{20}
$$

where $$\Gamma_{1,\ell}=Q_{xx,T}^{-1}\left(\frac{1}{T}\sum_{t=1}^{T}x_{it}x_{it}'\Gamma_{2,\ell-1}\right)$$ and $$\Gamma_{2,\ell}=Q_{xx,N}^{-1}\left(\frac{1}{N}\sum_{i=1}^{N}x_{it}x_{it}'\Gamma_{1,\ell-1}\right)$$. Equation 14 is estimated cross-sectionally with industry indicators; the corresponding baseline sample has 21,242 firm-period observations at $$h=1$$ and 15,532 at $$h=3$$. Equations 16-18 use pooled, time-specific, and firm-specific regressions on the paper's firm-period sample. The displayed MO-OLS equations do not specify additional fixed effects or standard-error treatment, and the paper does not report a separate sample count for each of these stages.

Fund $$j$$'s share of firm $$i$$'s total incentive-weighted domestic ownership allocates the firm-level contribution to that fund (equation 21, p. 14):

$$
\text{FPE}_{i,j,t}^{t+h} = \text{FPE}_{i,t}^{\text{Dom\_Inc},t+h} \times \text{Dom\_Inc}_{i,j,t}
\tag{21}
$$

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

where $$\bar{\alpha}_t = \frac{1}{J}\sum_{j=1}^J \alpha_{jt}$$ is the year-average fund intercept. Equation 23 is a year-specific cross-sectional regression over observed fund-firm holdings, with firm characteristics as regressors; the paper gives no separate fixed effects, standard-error treatment, or sample count for these decompositions (p. 15).

## Empirical specifications

**Baseline (Table 2, equations 6, pp. 5-6).** The price informativeness regression follows Kacperczyk, Sundaresan and Wang (2021) and Bai, Philippon and Savoy (2016):

$$
\left(\frac{E}{A}\right)_{i,t+h} = \alpha + \beta_1 \log\!\left(\frac{M}{A}\right)_{it} + \beta_2 \log\!\left(\frac{M}{A}\right)_{it} \times \text{Fund\_ownership}_{it} + \beta_3 \text{Fund\_ownership}_{it} + \gamma' X_{it} + \lambda_{is} + \tau_t + \varepsilon_{it}
\tag{6}
$$

where $$(E/A)_{i,t+h}$$ is firm $$i$$'s earnings/assets in period $$t+h$$ ($$h=1,3$$); $$\log(M/A)_{it}$$ is the log price-to-asset ratio; Fund\_ownership is Dom, For, Dom\_Inc, or For\_Inc depending on the column; $$X_{it}$$ includes current earnings, insider ownership, leverage, tangibility, listed years, cash, ROA, and domestic- and foreign-fund ownership status; $$\lambda_{is}$$ are industry fixed effects; $$\tau_t$$ are period fixed effects. The text specifies standard errors clustered at industry-period level, while Table 2 notes report robust standard errors. The coefficient of interest is $$\beta_2$$: the average price informativeness conditional on fund ownership type.

**Return and synchronicity specifications (equations 7 and 8, pp. 7-8).** The daily return regression used to construct firm-year $$R^2$$ is:

$$
\text{RET}_{it} = \alpha + \beta_1 \text{MKTRET}_t + \beta_2 \text{MKTRET}_{t-1} + \beta_3 \text{INDRET}_t + \beta_4 \text{INDRET}_{t-1} + \varepsilon_{it}
\tag{7}
$$

$$
\text{SYNCH}_{it} = \log\!\left(\frac{R^2_{it}}{1-R^2_{it}}\right)
\tag{8}
$$

The return model uses daily A-share returns with at least 200 trading days per fiscal year; Table 3 uses industry and period fixed effects, the Table 2 controls, and robust standard errors. The paper also logistic-transforms the bounded $$R^2$$ as described on p. 7.

**Revelatory price efficiency specification (equation 10, pp. 8-9).** Investment sensitivity to prices is estimated for total investment, R&D, and capital expenditure, each scaled by period-$$t$$ assets:

$$
\left(\frac{\text{Invest}}{A}\right)_{i,t+h} = \alpha + \beta_1 \log\!\left(\frac{M}{A}\right)_{it} + \beta_2 \log\!\left(\frac{M}{A}\right)_{it} \times \text{Fund\_ownership}_{it} + \beta_3 \text{Fund\_ownership}_{it} + \beta_4 \log\!\left(\frac{M}{A}\right)_{it} \times \text{FPE}_{it} + \gamma' X_{it} + \lambda_{is} + \tau_t + \varepsilon_{it}
\tag{10}
$$

Here $$h=1,3$$, and fund ownership is Dom, Dom\_Inc, or For in the reported comparisons. Table 4 includes industry and period fixed effects, controls for earnings, investment, insider ownership, leverage, tangibility, listing age, cash, ROA, and their price interactions, with robust standard errors. The observations are 23,795 and 19,395 for the total-investment panels at $$h=1$$ and $$h=3$$; samples vary for R&D and CAPE (Table 4, p. 10).

**Synchronicity robustness (Table 3, Panel A, equation 7-8, pp. 7-8).** Price synchronicity is estimated as the logistic transformation of $$R^2$$ from regressing firm $$i$$'s A-share return on market and industry factors:

Equation 8 transforms the return-regression $$R^2$$ to synchronicity. A lower SYNCH implies more firm-specific information in prices. Fund ownership enters as a level regressor; a significantly negative coefficient on Dom\_Inc confirms the baseline result (Table 3 Panel A, col 2: -0.149\*\*\*).

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

where $$h = 1$$ or $$4$$ periods; $$\Delta\text{Fund\_ownership}_{it}$$ is $$\Delta\text{Dom}_{it}$$, $$\Delta\text{For}_{it}$$, or $$\Delta\text{Dom\_Inc}_{it}$$; $$X_{it}$$ includes log size, book-to-market, past 12-month volatility, and momentum. Table 5 uses industry and period fixed effects, robust standard errors, and 19,908 observations at $$h=1$$ and 19,636 at $$h=4$$. A positive $$\beta_1$$ on $$\Delta\text{Dom\_Inc}$$ (0.023\*\*, col 2; 0.144\*\*, col 4) indicates forward-looking information content.

**Information provision channel (Table 6, equation 12, p. 11).** Firm site visits are regressed on fund ownership:

$$
\text{Visit}_{it} = \alpha + \beta_1 \text{Fund\_ownership}_{it} + \gamma' X_{i,t} + \lambda_{is} + \tau_t + \varepsilon_{it}
\tag{12}
$$

where Visit is proxied by VisitNum (annual count of site visits from all domestic funds, 2011-2019 from SZSE) or VisitTone (tone of the Investor Relations Activity Log, constructed using a Chinese Financial Sentiment Dictionary following Gordon, Loeb and Shu (2013) and Brockman, Cicon, Li, Price and Shu (2017)). Table 6 includes industry and period fixed effects, the stated firm controls and their interactions with log(M/A), and robust standard errors. The visit-outcome samples have 22,642 observations for VisitNum and 8,954 for VisitTone; the earnings forecast regressions have between 3,072 and 16,733 observations. A positive coefficient on Dom\_Inc in both (4.532\*\*\* and 0.320\*\*\*) supports the information provision channel.

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
\text{Flow incentives}_{ijt} = p \times \text{AUM}_{jt} \times \beta \times (w_{ijt} - v_{(-j)it})
\tag{3}
$$

where $$p = 0.828\%$$ is the average management fee rate, $$w_{ijt}$$ is the value weight of stock $$i$$ in fund $$j$$'s portfolio, $$\beta$$ is the estimated inflow-to-performance sensitivity, and $$v_{(-j)it}$$ is the period-$$t$$ average value weight of stock $$i$$ across peer funds. The incentive-weighted domestic ownership variable is:

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

Source: peer-reviewed, *Journal of Financial Markets* 78 (2026) 101027. All rights reserved (© 2025 Elsevier B.V.). The initial distillation was extracted by an LLM on 2026-06-25, with additional results and formal specifications added on 2026-10-04; it is **not human-verified or independently reproduced**. Extract-only: no verbatim PDF is hosted here.

> Chen, Shaoling, Xi Wu, Haisheng Yang, and Jiaying Zhong.
> "Incentives matter: Domestic funds and price informativeness improvement."
> *Journal of Financial Markets* 78 (2026) 101027.
> DOI: [10.1016/j.finmar.2025.101027](https://doi.org/10.1016/j.finmar.2025.101027).
> © 2025 Elsevier B.V. All rights reserved.
