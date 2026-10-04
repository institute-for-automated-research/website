---
title: "Discount Factors and Monetary Policy: Vandeweyer, Yang & Yannelis (2026)"
description: >-
  Distilled: Exploiting dual-listed stocks in Mainland China and Hong Kong to isolate
  the discount factor channel of monetary policy, the paper finds that US FOMC surprises
  cause significant revisions in investors' risk-adjusted discount factors: a 100 bp
  surprise shifts the A/H share-price ratio by about 30 bp within five trading days,
  driven exclusively by cycle-amplifying surprises. J. Fin. Econ. 2026, paywalled. Sixteen
  core results with source locators, datasets used, the conceptual model, and the
  estimating equations.
sidebar:
  label: Vandeweyer-Yang-Yannelis 2026
  order: 1
tags: [paper-summary, monetary-policy, asset-pricing, equities, macro, international-finance,
       event-study, difference-in-differences, panel-regression, peer-reviewed, unreplicated,
       data:wind, data:fred, data:hkma, data:datastream, data:bloomberg, data:wrds,
       data:factset, data:shibor]
paper:
  authors: Quentin Vandeweyer, Minghao Yang, Constantine Yannelis
  authorList:
    - { family: Vandeweyer, given: Quentin, orcid: "0009-0009-2710-118X", affiliation: "University of Chicago, Booth School of Business" }
    - { family: Yang, given: Minghao, affiliation: "University of California, Berkeley, Haas School of Business" }
    - { family: Yannelis, given: Constantine, orcid: "0000-0002-4894-265X", affiliation: "University of Cambridge, Austin Robinson Building" }
  year: 2026
  venue: Journal of Financial Economics 175 (2026) 104190
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104190
  jel:
    codes: [G12, E44, E52]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Financial Markets and Investment Strategies
    - Financial Risk and Volatility Modeling
    - Market Dynamics and Volatility
  dataAccess: licensed-commercial
  outcome:
    - A/H share-price ratio of dual-listed stocks
    - investors' risk-adjusted discount factors
    - 3-month SHIBOR
    - EPS forecast ratio of Mainland China brokers over Hong Kong brokers
    - HKD-CNY, USD-CNY, and six-month forward exchange-rate levels
  outcomeClass: [asset-prices, expectations]
  license: >-
    Paywalled; copyright 2025 Elsevier B.V. Crossref license block contains
    only tdm (URL: https://www.elsevier.com/tdm/userlicense/1.0/) and stm-asf
    licences, all non-CC (start 2026-01-01); no open-access or CC licence present.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier/ScienceDirect, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 16
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, event-study, panel-regression]
    identification: natural-experiment
  contributionType: [new-fact, new-method]
  mechanisms: [learning, discount-factor-revision]
  scope:
    region: "US and China"
    assetClass: dual-listed equities (A-shares and H-shares)
    period: 2000-06..2024-09
    frequency: daily
    dataType: [market]
    granularity: [security]
    n: "143 dual-listed stocks, 129 FOMC announcements, 93,414 company-announcement observations"
  findings:
    - { ref: R1, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "0.293 (SE 0.0297) with company FE and post-announcement indicator (Table 3 col 3); range 0.276 to 0.306 across all five specifications", direction: positive }
    - { ref: R2, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "amplifying-hike 0.390*** (0.112); amplifying-cut 0.355*** (0.0400); contradictory-cut -0.0964 (0.107) and contradictory-hike 0.0467 (0.179), both insignificant", direction: mixed }
    - { ref: R3, outcome: 3-month HIBOR, metric: coefficient, value: "approximately 1 pp per 1 pp Fed funds surprise; SHIBOR coefficient near zero and insignificant", direction: positive }
    - { ref: R4, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "below-median PE: 0.346*** (0.0651); above-median PE: 0.162*** (0.0485)", direction: positive, vsBenchmark: low-PE firms roughly 2x more reactive than high-PE firms }
    - { ref: R5, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "below-median market cap: 0.367*** (0.0575); above-median market cap: 0.237*** (0.0346)", direction: positive, vsBenchmark: small firms roughly 1.5x more reactive than large firms }
    - { ref: R6, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "below-median CAPM beta: 0.220*** (0.0638); above-median CAPM beta: 0.381*** (0.0730)", direction: positive, vsBenchmark: high-beta firms roughly 1.7x more reactive than low-beta firms }
    - { ref: R7, outcome: 3-month SHIBOR, metric: coefficient, value: "near-zero and statistically insignificant response to US monetary policy surprises", direction: none }
    - { ref: R8, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "flat-rate-cycle Surprise x Post: surprise increases -0.351 (SE 0.228), decreases -0.521 (SE 0.528), near zero -0.630 (SE 0.702); all insignificant", direction: none }
    - { ref: R9, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "equal-weighted standardized 0.185** (SE 0.0772), equal-weighted demeaned 0.377** (SE 0.157), value-weighted standardized 0.231*** (SE 0.0534), value-weighted demeaned 0.349*** (SE 0.0806); adjusted R-squared 0.0256 and 0.0324", direction: positive }
    - { ref: R10, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "below-median lagged A/H ratio: 0.211*** (SE 0.0327); above-median: 0.396*** (SE 0.0622); triple interaction: 0.0338*** (SE 0.00650)", direction: positive, vsBenchmark: more reactive for above-median lagged A/H ratio }
    - { ref: R11, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "Surprise x Post x US Export Share is -0.00155 to -0.0000369 and insignificant in cols 1-5; zero-share and positive-share coefficients are 0.194*** (SE 0.0411) and 0.208*** (SE 0.0396), statistically indistinguishable", direction: none }
    - { ref: R12, outcome: EPS forecast ratio of Mainland China brokers over Hong Kong brokers, metric: coefficient, value: "Surprise x Post ranges from -0.00109 (SE 0.00584) to 0.00488 (SE 0.00539), insignificant in all five specifications", direction: none }
    - { ref: R13, outcome: HKD-CNY, USD-CNY, and six-month forward exchange-rate levels, metric: coefficient, value: "spot and forward event-study estimates are statistically insignificant; figure does not tabulate point estimates", direction: none }
    - { ref: R14, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "Table 7 cols 1-4: 0.130*** (SE 0.0254), 0.291*** (SE 0.0288), 0.286*** (SE 0.0279), 0.295*** (SE 0.0300)", direction: positive }
    - { ref: R15, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "stacked estimates: 0.446*** (SE 0.0405), 0.445*** (SE 0.0404), 0.447*** (SE 0.0408), 0.445*** (SE 0.0409)", direction: positive, vsBenchmark: slightly above the baseline estimate }
    - { ref: R16, outcome: A/H share-price ratio of dual-listed stocks, metric: coefficient, value: "event-time path has no pre-trend, persists through day 5, peaks around day 3; day-one coefficient around 0.15 (text p. 10); event-time confidence intervals overlap under serial-correlation bootstrap", direction: positive }
  resultType: confirms
  relatesTo:
    - { cite: "Kuttner (2001)", doi: '10.1016/s0304-3932(01)00055-1', relation: builds-on, note: "uses the Kuttner (2001) fed-funds-futures surprise measure as the main monetary policy shock" }
    - { cite: "Bernanke and Kuttner (2005)", doi: '10.1111/j.1540-6261.2005.00760.x', relation: extends, note: "extends their stock-index reaction to a 100 bp shock by isolating the discount factor component via the A/H ratio design" }
    - { cite: "Cieslak and Pang (2021)", doi: '10.1016/j.jfineco.2021.06.008', relation: builds-on, note: "draws on their decomposition of equity discount factors into risk-free-rate and risk-premium components" }
    - { cite: "Fama and French (1992)", doi: '10.1016/0304-405x(93)90023-5', relation: cites, note: "cites size and value as stock characteristics that predict cross-sectional sensitivity to monetary policy surprises" }
    - { cite: "Nakamura and Steinsson (2018)", relation: tests, note: "tests the information channel: finds no differential cash-flow revisions, supporting a pure discount-rate channel over an information channel" }
  openQuestions:
    - "What are the underlying drivers of the asymmetry between cycle-amplifying and cycle-contradicting surprises? The paper documents the pattern and notes it is consistent with investors updating beliefs about the Fed's propensity to intervene, but leaves the causal mechanism to future research (p. 13, Concluding remarks)."
  replicationCode:
    status: available
  licenceVerification:
    - source: "Crossref REST API works/10.1016/j.jfineco.2025.104190"
      checked: 2026-06-24
      by: "paper-distiller (claude-sonnet-4-6)"
      found: >-
        license[] contains only tdm licences (https://www.elsevier.com/tdm/userlicense/1.0/
        and https://www.elsevier.com/legal/tdmrep-license) and five stm-asf policy licences,
        all starting 2026-01-01; no open-access or CC licence present. Artifact p. 1 states
        copyright 2025 Published by Elsevier B.V.
  rightsSignalConflict: false
  extraction:
    - by: "paper-distiller (claude-sonnet-4-6)"
      date: 2026-06-24
      role: extracted
      note: >-
        Full PDF read (18 pp. including appendices A-E); six results extracted with
        locators from Tables 3, 4, 6 and Figure 3. Conceptual-framework equations (Eqs.
        1-2, p. 4), main estimating equation (Eq. 3, p. 4), HIBOR specification (Eq. 4,
        p. 5), dynamic event study (Eq. 5, p. 5), and cross-sectional triple-difference
        (Eq. 6, p. 10) transcribed from the source PDF. Not human-verified. Not reproduced.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; all six
        Core-results rows confirmed against Tables 3, 4, 6 and Figure 3 (pp. 8, 6, 11).
        Equations 1-6 verified term-by-term. One description fix applied: R1 "event-time FE"
        corrected to "post-announcement indicator (col 3)" since 0.293 (SE 0.0297) comes
        from Table 3 col 3 (Company FE + post dummy), not the full event-time FE col 4
        (0.292, SE 0.0298); range 0.276-0.306 and all other magnitudes are correct.
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full 18-page PDF. Added ten Core results rows covering cycle-flat nulls, time-series regressions, lagged A/H heterogeneity, export-share and EPS forecast checks, exchange-rate nulls, robustness, stacked DiD, and dynamics; added discount-factor mechanism vocabulary and equations (7)-(9). Additions are not human-verified and not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 16 Core results rows, equations (1)-(9), classifications, findings, frontmatter, and narrative against the PDF; corrected contradictory-surprise labels, Table 7 description, Figure 4 page, and overstrong information-channel and exchange-rate claims; corrected R11 direction and resultType. No unresolved row errors." }
---

**What this is.** The paper's core results, the conceptual model that motivates the A/H
ratio design, and the estimating equations: enough to understand what the paper found and
how the discount factor channel is identified, without reading all 18 pages. To replicate
or extend, read the original at [https://doi.org/10.1016/j.jfineco.2025.104190](https://doi.org/10.1016/j.jfineco.2025.104190).

## TL;DR

The paper uses dual-listed stocks (A-shares in Mainland China, H-shares in Hong Kong) as a
laboratory to isolate the discount factor channel of monetary policy transmission to stock
prices. Since both share types represent claims on the same firm cash flows, the ratio of
A-share to H-share prices (the A/H ratio) cancels out cash flow news and reflects only
differences in investors' discount rates across the two segmented markets. US Federal
Open Market Committee (FOMC) monetary policy surprises, as measured by Kuttner (2001)
fed-funds futures, significantly shift the A/H ratio, with a 100 basis-point surprise
causing roughly a 30 basis-point change within five trading days. The effect is concentrated
in cycle-amplifying surprises (surprise rate cuts during easing cycles and surprise rate
hikes during tightening cycles), while contradictory surprises are insignificant. Cross-
sectionally, value stocks, small stocks, and high-beta stocks respond more strongly,
consistent with standard asset pricing theory in which discount rate revisions have
disproportionately large effects on risky, short-duration cash flows.

## Core results

Magnitudes and significance as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%.
Locators refer to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **A 100 bp Fed surprise shifts the A/H ratio by ~30 bp within five trading days**, isolating the discount factor channel | Table 3, cols 1-5, p. 8 | Surprise x Post = 0.293\*\*\* (SE 0.0297) with company FE and post-announcement indicator (col 3); stable across specifications: range 0.276 to 0.306, all significant at 1% |
| R2 | **The effect is asymmetric: only cycle-amplifying surprises matter**. Surprise rate cuts during easing cycles and surprise rate hikes during tightening cycles move the A/H ratio significantly; contradictory surprises do not | Table 4, Panels A-B, p. 8 | Amplifying-hike: 0.390\*\*\* (0.112); amplifying-cut: 0.355\*\*\* (0.0400); contradictory-cut: -0.0964 (0.107); contradictory-hike: 0.0467 (0.179) |
| R3 | **US monetary policy passes through ~1-for-1 to Hong Kong interbank rates (HIBOR) but leaves Mainland China interbank rates (SHIBOR) unaffected**, validating the market segmentation assumption | Figure 3, p. 6 | 1 pp Fed funds surprise generates ~1 pp increase in 3-month HIBOR by day 1; LIBOR (USD) also rises; SHIBOR coefficient near zero and statistically insignificant |
| R4 | **Value firms (low PE ratio) show roughly twice the discount-factor sensitivity of growth firms** | Table 6, Panel A, p. 11 | Below-median PE: Surprise x Post = 0.346\*\*\* (0.0651); above-median PE: 0.162\*\*\* (0.0485); triple interaction Surprise x Post x Charact = -0.161\* (0.0908) |
| R5 | **Small firms (low market capitalization) are more sensitive to discount-factor revisions than large firms** | Table 6, Panel B, p. 11 | Below-median MC: Surprise x Post = 0.367\*\*\* (0.0575); above-median MC: 0.237\*\*\* (0.0346); triple interaction = -0.0889\*\*\* (0.0210) |
| R6 | **High-CAPM-beta stocks react more strongly than low-beta stocks**, consistent with discount rate revisions hitting riskier cash flows disproportionately | Table 6, Panel C, p. 11 | Below-median beta: Surprise x Post = 0.220\*\*\* (0.0638); above-median beta: 0.381\*\*\* (0.0730); triple interaction = 0.362\*\* (0.146) |

| R7 | **US policy surprises do not pass through to Mainland interbank rates**, consistent with monetary independence and capital controls | Figure 3, p. 6 | SHIBOR event-study response is near zero and statistically insignificant; point estimates are plotted, not tabulated |
| R8 | **Flat-cycle surprises do not move the A/H ratio significantly**, unlike surprises that amplify a hike or cut cycle | Table 4, Panel C, p. 8 | Surprise increases: -0.351 (SE 0.228); decreases: -0.521 (SE 0.528); near-zero: -0.630 (SE 0.702); all insignificant |
| R9 | **The main effect is also present in time-series changes in average A/H ratios**, rather than only in cross-sectional variation | Table 5, p. 10 | Equal-weight standardized: 0.185\*\* (0.0772); equal-weight demeaned: 0.377\*\* (0.157); value-weight standardized: 0.231\*\*\* (0.0534); value-weight demeaned: 0.349\*\*\* (0.0806); adjusted R² 0.0256 and 0.0324 |
| R10 | **Stocks with higher lagged A/H ratios are more sensitive to policy surprises** | Table 6, Panel D, p. 11 | Below-median lagged ratio: 0.211\*\*\* (0.0327); above-median: 0.396\*\*\* (0.0622); triple interaction: 0.0338\*\*\* (0.00650) |
| R11 | **The A/H response does not vary with firms' US export exposure**, weighing against differential cash-flow news as the explanation | Table A.1, p. 13 | Surprise × Post × US Export Share is -0.00155 to -0.0000369 and insignificant across cols 1-5; zero-share: 0.194\*\*\* (0.0411), positive-share: 0.208\*\*\* (0.0396), statistically indistinguishable |
| R12 | **Analyst EPS forecasts do not diverge significantly across the two markets after surprises**, consistent with the cash-flow-news exclusion | Table B.1, p. 17 | Mainland/Hong Kong forecast-ratio Surprise × Post coefficients: -0.00109 (0.00584), 0.00148 (0.00589), 0.00179 (0.00589), 0.00223 (0.00592), 0.00488 (0.00539); all insignificant |
| R13 | **Spot and forward exchange rates provide little evidence that currency movements explain the A/H result** | Figures C.2-C.3, p. 16 | HKD-CNY and USD-CNY spot and six-month forward event-study responses are insignificant; plotted point estimates are not tabulated |
| R14 | **Baseline estimates remain positive and significant under alternative announcement and event-time samples** | Table 7, p. 11 | Include ZLB announcements: 0.130\*\*\* (0.0254); exclude near-zero: 0.291\*\*\* (0.0288); exclude holiday announcements: 0.286\*\*\* (0.0279); exclude holiday event times: 0.295\*\*\* (0.0300) |
| R15 | **A stacked estimator robust to dynamic and heterogeneous treatment effects gives larger but similar estimates** | Table D.1, p. 17 | Surprise × Post: 0.446\*\*\* (0.0405), 0.445\*\*\* (0.0404), 0.447\*\*\* (0.0408), 0.445\*\*\* (0.0409) |
| R16 | **The A/H response develops over several days**, with no pre-trend and an event-time peak around day three | Figure 4, p. 9; text p. 10 | Persists through day 5; day-one coefficient around 0.15; peaks around day 3 and then mean-reverts; bootstrap confidence intervals across event times overlap |

**Overall (paper's conclusion).** Monetary policy announcements cause investors to revise
their discount factors and impact stock prices. The discount factor channel is substantial
and survives controls for cash-flow news: professional analysts' EPS forecasts for the
same firms do not diverge across the two regions following FOMC announcements (providing evidence against a differential information channel as in Nakamura and Steinsson (2018)), and non-exporting firms (with
no US revenue channel) react similarly to exporters. The
asymmetry toward cycle-amplifying surprises suggests that higher-frequency event-study
strategies that do not control for business-cycle context may understate the effects of
monetary policy on asset prices.

## Theory / model

The conceptual framework follows Section 2.2 (p. 4). Consider an economy with two
segmented regions, A (Mainland China) and H (Hong Kong), populated by different investors
but trading integrated firms whose shares represent claims on the same future cash flows.
The monetary policy stance in each region is captured by $$m_A$$ and $$m_H$$, interpreted as
the central bank's reaction function across all policy instruments.

Following Cochrane (2005), the price of stock $$i$$ in region $$J \in \{A, H\}$$ equals the
expected discounted cash flow under the region's risk-adjusted discount factor, and following
Cieslak and Pang (2021) the discount factor decomposes into a risk-free rate and a risk
premium component (Eq. 1, p. 4):

$$
P_J^i = \frac{1}{R_J^i(m_J)} E\!\left[x^i(m_A, m_H)\right], \tag{1}
$$

where $$R_J^i(m_J)$$ is the risk-adjusted discount factor applied by region-$$J$$ investors to
stock $$i$$, and $$E[x^i(m_A, m_H)]$$ is the common cash-flow expectation (identical across
regions under integrated trade). The discount factor decomposes into a risk-free component
and a firm-specific risk premium:

$$
R_J^i = r^f(m_J) + r^{p,i}(m_J), \qquad J \in \{A, H\}.
$$

Taking the ratio of A-share price to H-share price (Eq. 2, p. 4):

$$
\frac{P_A^i}{P_H^i} = \frac{R_H^i(m_H)}{R_A^i(m_A)}. \tag{2}
$$

The common cash-flow term $$E[x^i]$$ cancels exactly. The A/H ratio therefore depends only
on the ratio of discount factors across the two regions, not on firms' cash flows. A change
in the A/H ratio around an FOMC announcement reflects changes in relative discount
factors attributable to monetary policy, not information about earnings or dividends.

The identification logic rests on two institutional facts. First, the Hong Kong dollar is
pegged to the USD through the Linked Exchange Rate System (LERS), so the Hong Kong
overnight interbank rate (HIBOR) closely tracks the US federal funds rate (Section 2.1,
p. 3). Second, Mainland China maintains strict capital controls, so investors there are
largely insulated from US monetary policy and have an independent monetary policy stance
via the People's Bank of China. A US monetary policy surprise therefore affects
$$m_H$$ but not $$m_A$$, generating an exogenous shift in $$R_H^i$$ that moves the A/H ratio
without contaminating the Mainland discount factor $$R_A^i$$. Figure 3 (p. 6) confirms this
empirically: a 1 pp Fed funds surprise shifts 3-month HIBOR by approximately 1 pp but
leaves SHIBOR (the Mainland equivalent) near zero.

## Method

The paper applies two estimating frameworks from the macro-finance event-study tradition,
building on `difference-in-differences` and `event-study` designs, with `panel-regression`
for inference.

**Main DiD specification (Eq. 3, p. 4).** The primary specification regresses the A/H ratio
on the interaction of the Kuttner (2001) monetary policy surprise with a post-announcement
indicator. The approach extends Bernanke and Kuttner (2005), who found a roughly 1%
stock-index response to a 100 bp surprise, by isolating the discount factor channel via
the A/H design:

$$
(P_A/P_H)_{ist} = \alpha_i + \eta_s + \lambda_t + \beta\,\text{Surprise}_s \times \text{Post}_t + \epsilon_{ist}, \tag{3}
$$

where $$(P_A/P_H)_{ist}$$ is the A/H share-price ratio for stock $$i$$ around announcement $$s$$
at event time $$t$$; $$\alpha_i$$ are company fixed effects absorbing time-invariant
characteristics (size, location, sector); $$\eta_s$$ are announcement fixed effects absorbing
macroeconomic conditions on each FOMC date; $$\lambda_t$$ are event-time fixed effects;
$$\text{Surprise}_s$$ is the surprise component of the change in the target rate computed
from federal-funds futures following Kuttner (2001); and $$\text{Post}_t$$ equals one for
event times $$t \geq 0$$. The coefficient $$\beta$$ measures the change in the A/H ratio per
percentage-point surprise. Standard errors are clustered at the company level (Section 2.3,
p. 4). The sample covers FOMC announcements from June 2000 to September 2024, excluding
ZLB periods (December 2008 to December 2015) and COVID (March 2020 to March 2022).

**HIBOR passthrough specification (Eq. 4, p. 5).** To validate the transmission assumption,
the paper estimates event-by-event passthrough of the Fed surprise to Hong Kong interbank
rates:

$$
\text{HIBOR}_{st} = \eta_s + \lambda_t + \sum_{\tau=-4}^{5} \beta_\tau^{HB}\,\text{Surprise}_s \times \mathbf{1}(\text{Time Since Announcement}_{st} = \tau) + \epsilon_{st}. \tag{4}
$$

The rate event studies use announcement and event-time effects. Figure 3 clusters standard
errors by announcement; it includes all 129 announcements for HIBOR and HIBOR futures,
announcements through June 14, 2023 for LIBOR, and announcements after October 25, 2006
for SHIBOR (launched in October 2006). The event window is four trading days before through
five after the announcement.

**Dynamic A/H event study (Eq. 5, p. 5).** For graphical assessment of pre-trends and
post-announcement dynamics, the main specification is extended to a full coefficient path:

$$
(P_A/P_H)_{ist} = \alpha_i + \eta_s + \sum_{\tau=-4}^{5} \beta_\tau\,\text{Surprise}_s \times \mathbf{1}(\text{Time Since Announcement}_{st} = \tau) + \epsilon_{ist}. \tag{5}
$$

Figure 4 (p. 9) shows no pre-trend ($$\beta_\tau \approx 0$$ for $$\tau < 0$$), with the effect
peaking around day 3 and showing some mean-reversion by day 5. The A/H event-study uses
company and announcement fixed effects, company-clustered standard errors, the 129 baseline
announcements, and event days -4 through 5.

## Empirical specifications

**Baseline results (R1, Table 3, p. 8).** Equation (3) is estimated on 93,414
company-announcement observations (143 stocks, 129 announcements). Column (3) adds company
FE and a post-announcement indicator for event-time trend; Column (4) adds company FE and
full event-time FE; Column (5) adds separately trending company-specific time controls.
Across all five specifications the Surprise x Post coefficient ranges from 0.276 to 0.306,
all significant at the 1% level.

**Asymmetry test (R2, Table 4, p. 8).** Announcements are split by interest rate cycle phase
(hiking vs. cutting vs. flat, defined by Figure 2) and by surprise direction (increase vs.
decrease vs. near-zero). This yields a 3 x 3 grid. The key finding is that Panels A and B
show significant coefficients only for amplifying configurations: surprise increases during
hike periods (0.390\*\*\*) and surprise decreases during cut periods (0.355\*\*\*). All other
cells are statistically insignificant, including surprise hikes during cutting cycles and
surprise cuts during hiking cycles (contradictory surprises). Column (3) in each panel
(near-zero surprises) is also insignificant.

**Cross-sectional triple-difference (R4-R6, Eq. 6, p. 10).** To examine heterogeneity in
discount-factor sensitivity, the paper estimates a triple-difference specification adding a
stock characteristic $$\text{Charact}_{ist}$$ (lagged one year) to equation (3). Following
Fama and French (1992), the characteristics tested include price-to-earnings ratio and
market capitalization, which predict cross-sectional stock returns and are interpreted as
proxies for risk-factor exposure:

$$
\begin{aligned}
(P_A/P_H)_{ist} &= \alpha_i + \eta_s + \lambda_t
  + \beta_1 \text{Surprise}_s \times \text{Post}_t
  + \beta_2 \text{Charact}_{ist} \\
  &\quad + \beta_3 \text{Surprise}_s \times \text{Charact}_{ist}
  + \beta_4 \text{Post}_t \times \text{Charact}_{ist} \\
  &\quad + \beta_5 \text{Surprise}_s \times \text{Post}_t \times \text{Charact}_{ist}
  + \epsilon_{ist}.
\end{aligned} \tag{6}
$$

The coefficient $$\beta_5$$ captures differential discount-factor sensitivity by firm
characteristic. Characteristics tested: price-to-earnings ratio (PE, lagged 1 year);
log market capitalization (MC); CAPM beta from 5-year rolling monthly regressions on the
Shanghai Composite Index; and the lagged A/H ratio. Table 6 (p. 11) reports results for
splits below and above the cross-sectional median of each characteristic.

**Cash-flow exposure triple difference (Eq. 7, Appendix A, p. 14).** The authors interact
the baseline treatment with the firm's US export revenue share to test whether cash-flow
exposure explains the price-ratio response:

$$
\begin{aligned}
(P_A/P_H)_{ist} &= \alpha_i + \eta_s + \lambda_t
 + \beta_1 \text{Surprise}_s \times \text{Post}_t
 + \beta_2 \text{USExportShare}_{ist} \\
&\quad + \beta_3 \text{Surprise}_s \times \text{USExportShare}_{ist}
 + \beta_4 \text{Post}_t \times \text{USExportShare}_{ist} \\
&\quad + \beta_5 \text{Surprise}_s \times \text{Post}_t
 \times \text{USExportShare}_{ist} + \epsilon_{ist}.
\end{aligned} \tag{7}
$$

Table A.1 uses announcement FE in every column, variations in company FE and event-time
controls, and company-clustered standard errors. It covers 110 announcements and 53,988
observations in columns (1)-(5), ending in 2022 because of FactSet coverage. The
zero-export and positive-export split specifications use 29,135 and 24,853 observations,
respectively; the latter has 92 announcements.

**Stacked difference-in-differences and event study (Eqs. 8-9, Appendix D, p. 17).** To
address dynamic and heterogeneous treatment effects, the paper stacks each announcement
event and compares a stock's treated window with its own lagged control window. In Eq. 8,
$$T=1$$ denotes the current treated window and $$T=0$$ the same stock lagged by ten trading
days; $$\alpha_{i(T),s}$$ are stock-by-treatment-group-by-announcement fixed effects and
$$\eta_{s,t}$$ are announcement-by-event-time fixed effects:

$$
(P_A/P_H)_{i(T),st} = \alpha_{i(T),s} + \eta_{s,t}
 + \beta \text{Surprise}_{i(T),s} \times \text{Post}_t
 + \epsilon_{i(T),st}. \tag{8}
$$

$$
(P_A/P_H)_{i(T),st} = \alpha_{i(T),s} + \eta_{s,t}
 + \sum_{\tau=-4}^{5} \beta_\tau \text{Surprise}_{i(T),s}
 \times \mathbf{1}(\text{TimeSinceAnnouncement}_{st}=\tau)
 + \epsilon_{i(T),st}. \tag{9}
$$

Both stacked specifications use the 129 baseline announcements and a five-trading-day
pre/post window, with company-clustered standard errors. Eq. 8 includes announcement by
treatment-group and announcement by event-time fixed effects; columns vary company FE and
company-specific trends. Table D.1 reports 186,232 observations in each specification.
Eq. 9 uses the same fixed effects and sample construction; Figure D.1 plots its event-time
path.

**Robustness (Table 7, p. 11).** Results are stable when including ZLB announcements
(Column 1, coefficient 0.130\*\*\*), excluding near-zero surprises (Column 2, 0.291\*\*\*),
excluding holiday announcements (Column 3, 0.286\*\*\*), and excluding holiday event
times (Column 4, 0.295\*\*\*). Appendix D applies the stacked DiD approach
of Baker et al. (2022), finding larger point estimates (Table D.1, all specifications
approximately 0.445-0.447\*\*\*) consistent with the main results.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Wind Information (China) | Daily closing prices for A-shares and H-shares of 143 dual-listed firms; primary source for the A/H ratio | [no page yet](/wiki/datasets/) |
| HKMA (Hong Kong Monetary Authority) | Historical 3-month HIBOR rates on each trading day; core channel-validation data | [no page yet](/wiki/datasets/) |
| FRED (Federal Reserve Economic Data) | Fed target rate before December 2008; target-rate series for computing Kuttner surprises | [FRED](/wiki/datasets/fred/) |
| Datastream (Refinitiv) | 1-month fed-funds futures; 3-month HIBOR futures; LIBOR historical series (USD) | [no page yet](/wiki/datasets/) |
| Bloomberg | Historical USD-denominated LIBOR series used for placebo test (Figure 3, bottom-left panel) | [no page yet](/wiki/datasets/) |
| SHIBOR (Shanghai Interbank Offered Rate) | Mainland China interbank rate; placebo test confirming capital controls prevent Fed passthrough | [no page yet](/wiki/datasets/) |
| I/B/E/S via WRDS | EPS forecasts for dual-listed firms from Hong Kong and Mainland China brokers; used in robustness (Appendix B) | [WRDS](/wiki/commercial/wrds/) |
| FactSet GeoRev | Firm-level US export revenue share; used to rule out the cash-flow channel in robustness (Appendix A) | [no page yet](/wiki/datasets/) |
| China Foreign Exchange Trade System (CFETS) | HKD-CNY and USD-CNY 6-month forward exchange rates; used to rule out exchange-rate channel (Appendix C) | [no page yet](/wiki/datasets/) |

Sample: June 2000 to September 2024 (daily), 143 dual-listed firms, 129 FOMC announcements
(excluding ZLB and COVID periods), window of 5 trading days before and after each
announcement. Stock prices converted to CNY using daily HKD-CNY exchange rates from Wind.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jfineco.2025.104190) if you are:
studying the transmission mechanism of monetary policy to stock prices; working on
macro-finance models that need to distinguish the cash-flow and discount-rate channels;
examining the role of the "Fed Put" and belief updating about the Fed's reaction function;
or designing event studies around FOMC announcements. The appendices (pp. 13-18) contain
robustness tests on US export share (Appendix A), EPS forecast divergence (Appendix B),
exchange rates (Appendix C), stacked DiD (Appendix D), and alternative clustering
(Appendix E). The replication package (pseudo-data) is available via the Mendeley Data
link on the article page.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 175 (2026) 104190.
This distillation was extracted by an LLM on 2026-06-24 and is **not human-verified
or independently reproduced**. The article is paywalled (copyright 2025 Elsevier B.V.);
no CC licence was found in the Crossref metadata. Reproduction is extract-only.

> Vandeweyer, Quentin, Minghao Yang, and Constantine Yannelis.
> "Discount factors and monetary policy: Evidence from dual-listed stocks."
> *Journal of Financial Economics* 175 (2026): 104190.
> DOI: 10.1016/j.jfineco.2025.104190. Copyright 2025 Elsevier B.V.
