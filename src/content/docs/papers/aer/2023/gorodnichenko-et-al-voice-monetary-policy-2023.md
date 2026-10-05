---
title: "Voice of Monetary Policy: Gorodnichenko, Pham & Talavera (2023)"
description: >-
  Distilled: A deep learning model detects emotions in Fed chair voices during
  FOMC press conference Q&A sessions; a more positive voice tone raises S&P 500
  returns by roughly 100 basis points over five days, reduces VIX, lowers
  inflation expectations, and appreciates the dollar against the euro, after
  controlling for policy actions and text sentiment. American Economic Review
  113(2) 2023, paywalled. Twenty-six core results with source locators, the
  emotion-detection model, VoiceTone construction, and the local-projections
  specification. LLM-distilled, not human-verified, not reproduced.
sidebar:
  label: Gorodnichenko-Pham-Talavera 2023
  order: 1
tags: [paper-summary, monetary-policy, central-banking, text-as-data,
       machine-learning, financial-markets, local-projections, peer-reviewed,
       unreplicated, data:swanson-fomc-shocks, data:wu-xia-shadow-rate,
       data:nexis-uni]
paper:
  authors: Yuriy Gorodnichenko, Tho Pham, Oleksandr Talavera
  authorList:
    - { family: Gorodnichenko, given: Yuriy, orcid: "0000-0002-3639-4254", affiliation: "University of California, Berkeley" }
    - { family: Pham, given: Tho, orcid: "0000-0003-2311-912X", affiliation: "University of Reading" }
    - { family: Talavera, given: Oleksandr, orcid: "0000-0002-4799-778X", affiliation: "University of Birmingham" }
  year: 2023
  venue: "The American Economic Review 113(2), February 2023, 548-584"
  venueShort: AER 2023
  doi: 10.1257/aer.20220129
  jel:
    codes: [E52, E44, G14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Computational and Text Analysis Methods"]
  dataAccess: licensed-commercial
  outcome:
    - S&P 500 (SPY ETF) returns around FOMC press conferences
    - stock market volatility (VIX, VIXY)
    - corporate bond interest-rate-risk spread and corporate bond prices
    - real-estate sector prices (IVR)
    - inflation expectations (GOVT-TIP spread, gold price)
    - USD/EUR and USD/JPY exchange rates
    - VoiceTone variation across FOMC chair press conferences and correlation with policy stance
    - Fed tweet sentiment and FOMC-related media sentiment after press conferences
  outcomeClass: [security-returns, asset-prices, expectations]
  license: "AEA copyright; no CC licence found in Crossref record (licence URL points to publisher PDF, no Creative Commons identifier); replication data publicly available at ICPSR DOI 10.3886/E178302V1"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "paywalled (AEA site, 2026-06-25); preprint via SSRN DOI 10.2139/ssrn.3809564; replication data at https://doi.org/10.3886/E178302V1"
  redistribution: extract-only
  resultsCount: 26
  citedByCount: 0
  methods:
    role: both
    contributes: voice-tone-policy-index
    family: reduced-form-causal
    buildsFrom: [local-projections, text-classification, speech-emotion-recognition]
    identification: selection-on-observables
  contributionType: [new-method, new-data, new-fact]
  mechanisms: [information-asymmetry, learning, limits-to-arbitrage]
  introducesData: true
  scope:
    region: US
    assetClass: "US equities, government and corporate bonds, currency"
    period: 2011-04..2019-06
    frequency: daily
    dataType: [market, text, other]
    granularity: [aggregate]
    n: "36 FOMC press conferences, 692 Q&A audio segments, 68 FOMC meetings, April 2011 to June 2019"
  findings:
    - { ref: R1, outcome: "S&P 500 (SPY) returns", metric: basis-points, value: "~100 bps at h=5 days for +1 unit VoiceTone; ~75 bps for +1 SD (abstract p. 550)", direction: positive }
    - { ref: R2, outcome: "stock market volatility (VIX)", metric: basis-points, value: "large negative effect building over h=0-15 days; magnitude roughly equal to reduction from a 1-SD FG shock", direction: negative }
    - { ref: R3, outcome: "US nominal government bond price (GOVT ETF)", metric: basis-points, value: "point estimates near zero, statistically insignificant at all horizons h=0-15", direction: none }
    - { ref: R4, outcome: "GOVT-TIP spread (inflation expectations proxy)", metric: basis-points, value: "gradual increase peaking at h~10 days; positive tone signals lower expected inflation; statistically significant at longer horizons", direction: positive }
    - { ref: R5, outcome: "USD/EUR exchange rate (dollar vs euro)", metric: basis-points, value: "~5-7 bps at h=5-10 days (from Figure 13 scale); dollar appreciates; marginally significant", direction: positive }
    - { ref: R6, outcome: "S&P 500 (SPY) returns", metric: basis-points, value: "BERT text sentiment: positive point estimates but statistically insignificant in this 36-meeting sample", direction: none }
    - { ref: R7, outcome: "S&P 500 (SPY) returns (intraday)", metric: basis-points, value: "+1 bp at impact (h=0 minutes, flow spec); statistically significant", direction: positive }
    - { ref: R8, outcome: "VIX short-term futures (VIXY) volatility response", metric: basis-points, value: "VoiceTone coefficient falls to about -500 bps by h=15 days; a unit decrease in VoiceTone raises volatility by an amount roughly equal to a 1-SD FG shock (Figure 5, p. 565)", direction: negative }
    - { ref: R9, outcome: "Corporate bond interest-rate-risk spread (LQD minus LQDH)", metric: basis-points, value: "VoiceTone response reaches about -0.5 bps near h=9 days and returns toward zero by h=15; consistent with lower perceived interest-rate risk (Figure 6, p. 566; text p. 564)", direction: negative }
    - { ref: R10, outcome: "Investment-grade corporate bond prices (LQD)", metric: basis-points, value: "Positive VoiceTone response is short-lived, about +20 bps at early horizons, and statistically insignificant (Figure 8, p. 568; text p. 566)", direction: positive }
    - { ref: R11, outcome: "Real-estate sector prices (IVR)", metric: basis-points, value: "VoiceTone response is not statistically or economically distinguishable from zero; the paper describes results as broadly similar to LQD (Figure 9, p. 569; text p. 566)", direction: none }
    - { ref: R12, outcome: "USD/JPY exchange rate", metric: basis-points, value: "VoiceTone response is close to zero, with no statistically or economically significant effect (Figure 12, p. 572; text p. 569)", direction: none }
    - { ref: R13, outcome: "S&P 500 (SPY) returns with Fed-chair fixed effects", metric: basis-points, value: "Within-chair VoiceTone estimates continue to move SPY; plotted response is about +100 bps at h=15 days (Figure 14 Panel D, p. 574)", direction: positive }
    - { ref: R14, outcome: "S&P 500 (SPY) returns by positive versus negative voice tone", metric: basis-points, value: "Responses are similar for positive and negative tone in the first roughly 10 days; negative-tone effects appear stronger later (Figure 14 Panel E, p. 574; text p. 572)", direction: mixed }
    - { ref: R15, outcome: "Fed tweet sentiment after FOMC press conferences", metric: coefficient, value: "A unit increase in VoiceTone raises cumulative tweet sentiment to about 0.15 by h=15 days with controls; 90% bootstrap interval shown (Figure 16 Panel A, p. 579)", direction: positive }
    - { ref: R16, outcome: "Media sentiment after FOMC press conferences", metric: coefficient, value: "A unit increase in VoiceTone raises media sentiment to a peak of about 0.6 near day 6, then it falls below zero around day 11 (Figure 16 Panel B, p. 579)", direction: mixed }
    - { ref: R17, outcome: "VoiceTone score across FOMC chair press conferences", metric: level, value: "Mean VoiceTone is 0.64 for Bernanke, -0.13 for Yellen, and -0.30 for Powell; overall mean is 0.09 (Table 1, p. 558)", direction: mixed }
    - { ref: R18, outcome: "VoiceTone correlation with Fed policy stance and shocks", metric: correlation, value: "Correlation is -0.23 with the shadow rate and -0.19 with FFR shocks, indicating weak association with policy stance (text p. 559; Figure 2, pp. 559-560)", direction: negative }
    - { ref: R19, outcome: "Gold prices (GLD) as an inflation-expectations proxy", metric: basis-points, value: "Positive VoiceTone lowers GLD prices over the horizon, with a similar dynamic to the GOVT-TIP spread but less precise estimates (Figure 11, p. 571; text p. 568)", direction: negative }
    - { ref: R20, outcome: "S&P 500 (SPY) returns controlling for the Citigroup Economic Surprise Index", metric: basis-points, value: "VoiceTone response remains positive, about +120 bps by h=15 days (Figure 14 Panel A, p. 574)", direction: positive }
    - { ref: R21, outcome: "S&P 500 (SPY) returns controlling for corporate earnings announcements", metric: basis-points, value: "VoiceTone response remains positive, about +120 bps by h=15 days (Figure 14 Panel B, p. 574)", direction: positive }
    - { ref: R22, outcome: "S&P 500 (SPY) returns controlling for pre-FOMC media sentiment", metric: basis-points, value: "VoiceTone response remains positive, about +120 bps by h=15 days (Figure 14 Panel C, p. 574)", direction: positive }
    - { ref: R23, outcome: "S&P 500 (SPY) returns using RoBERTa text sentiment", metric: basis-points, value: "VoiceTone response remains positive, about +110 bps by h=15 days (Figure 14 Panel F, p. 574)", direction: positive }
    - { ref: R24, outcome: "S&P 500 (SPY) returns using FinBERT text sentiment", metric: basis-points, value: "VoiceTone response remains positive, about +110 bps by h=15 days (Figure 14 Panel G, p. 574)", direction: positive }
    - { ref: R25, outcome: "S&P 500 (SPY) returns using search-and-count text sentiment", metric: basis-points, value: "VoiceTone response remains positive, about +110 bps by h=15 days (Figure 14 Panel H, p. 574)", direction: positive }
    - { ref: R26, outcome: "S&P 500 (SPY) returns using human-coded text sentiment", metric: basis-points, value: "VoiceTone response remains positive, about +110 bps by h=15 days (Figure 14 Panel I, p. 574)", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Swanson (2021)", relation: builds-on, note: "three-factor FOMC policy shock series (FFR, FG, AP) used as controls; voice-tone effect on stocks is comparable in magnitude to the 1-SD FG shock effect" }
    - { cite: "Jorda (2005)", doi: '10.1257/0002828053828518', relation: builds-on, note: "local projections framework adopted to trace impulse responses across h=0-15 days" }
    - { cite: "Hansen and McMahon (2016)", doi: '10.1093/qje/qjx045', relation: cites, note: "prior textual analysis of FOMC communication that motivates controlling for text sentiment" }
    - { cite: "Cieslak, Morse, and Vissing-Jorgensen (2019)", doi: '10.1111/jofi.12818', relation: cites, note: "FOMC cycle stock-return anomaly; voice tone provides a nonverbal channel beyond textual content" }
    - { cite: "Romer and Romer (2000)", doi: '10.1257/aer.90.3.429', relation: cites, note: "Fed information effect: positive voice tone may signal superior Fed knowledge of economic fundamentals" }
    - { cite: "Curti and Kazinnik (2021)", doi: '10.2139/ssrn.3782239', relation: cites, note: "concurrent work showing negative facial expressions lower stock returns at press conferences; consistent with nonverbal channel" }
  openQuestions:
    - "Whether voice tone works as forward guidance or conveys a Fed information effect remains unresolved. The authors say the differing bond-market responses appear inconsistent with a pure forward-guidance account, but note other possible explanations and cannot determine which account dominates (pp. 576-578)"
    - "The paper cannot determine whether observed voice tone variation was intentional or inadvertent, leaving open how central banks should manage vocal cues as a policy instrument (p. 581)"
  replicationCode:
    url: "https://doi.org/10.3886/E178302V1"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "PDF read in full (pp. 548-584). Seven results extracted with figure and page locators. Not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; fixed four page-locator errors (R3 p.565->p.567, R4 pp.567-568->p.570 and GLD locator p.570->p.571, R5 p.572->p.573) and corrected correlation values confusing text-text with text-voice correlations (Identification and Method sections)." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and added nineteen Core results rows with matching findings, the information-diffusion mechanism discussion, equation (5), and written-out chair fixed-effect and sign-asymmetry specifications. These additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 26 Core results, locators, equations, specifications, findings, classification axes, frontmatter, and prose against the PDF; corrected the regression sample, VoiceTone feature order and scope, outcome classes, and channel summary. All rows supported." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20220129", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "licence entry: content-version=vor, URL=https://pubs.aeaweb.org/doi/pdf/10.1257/aer.20220129; no Creative Commons identifier; AEA standard terms apply" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the VoiceTone construction and the deep-learning emotion model, and the local-projections specification: enough to know what it found and how, without reading all 37 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1257/aer.20220129) or the [preprint](https://doi.org/10.2139/ssrn.3809564).

## TL;DR

Gorodnichenko, Pham, and Talavera (2023) build a deep learning model that classifies emotions from audio features of Fed chair answers during FOMC press conference Q&A sessions (April 2011 to June 2019) into positive, negative, or neutral. They aggregate these into a VoiceTone measure, then run local projections following Jorda (2005) of daily returns on 14 financial outcomes against VoiceTone and TextSentiment, controlling for Swanson (2021) policy shocks (FFR, FG, AP) and the Wu and Xia (2016) shadow rate. A one-unit increase in VoiceTone raises S&P 500 returns by roughly 100 basis points over five days, reduces VIX, lowers inflation expectations, and appreciates the dollar against the euro. The bond market shows no significant response in this sample. Text sentiment (BERT-based) does not have a statistically significant effect on stock prices across the 68-meeting sample, 36 of which had press conferences. The results are robust to Fed chair fixed effects, alternative text sentiment measures (RoBERTa, FinBERT, search-and-count, human classification per Cieslak, Morse, and Vissing-Jorgensen (2019) style controls), and a high-frequency intraday analysis showing an approximately +1 bp impact response. A concurrent paper by Curti and Kazinnik (2021) reports related evidence that facial expressions can affect financial markets.

## Core results

Estimates from nonparametric accelerated bootstrap with 90% bias-corrected confidence intervals. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Positive voice tone raises S&P 500 (SPY) returns**: effect builds over days, significant at 10% | Figure 3 Panel B, p. 562 | +~100 bps at h=5 days for +1 unit VoiceTone; +~75 bps per +1 SD (abstract, p. 550) |
| R2 | **Positive voice tone reduces stock market volatility (VIX)**: economically significant negative effect, builds over 15 days | Figure 4 Panel B, p. 563-564 | Reduction roughly equal to increase from a 1-SD FG shock (paper's comparison, p. 563) |
| R3 | **Bond market (GOVT ETF) does not respond significantly to voice tone**: statistically insignificant at all horizons | Figure 7 Panel B, p. 567 | Point estimates fluctuate near zero; 90% CI contains zero throughout h=0-15 days |
| R4 | **Positive voice tone raises GOVT-TIP spread** (signals lower inflation expectations): near zero on impact, builds and peaks at h~10 days | Figure 10, p. 570 | Gradual increase in spread, statistically significant at longer horizons; GLD (gold) price shows similar pattern (Figure 11, p. 571) |
| R5 | **Positive voice tone leads to dollar appreciation vs. euro** (EUR/USD coefficient positive): builds over 5-10 days | Figure 13, p. 573 | ~5-7 bps (from figure scale), marginally significant; JPY/USD shows no significant response |
| R6 | **Text sentiment (BERT) does not significantly move SPY**: positive point estimates but inside CI throughout | Figure 3 Panel C, p. 562 | Positive point estimates across all horizons, statistically insignificant in this sample |
| R7 | **Intraday (flow spec): positive voice tone raises SPY by +1 bp on impact**, answer by answer | Figure 15 top panels, p. 576-577 | +1 bp at h=0 minutes, statistically significant; cumulative spec shows gradual build during Q&A session |
| R8 | **Positive voice tone reduces VIX short-term futures (VIXY)** | Figure 5, p. 565 | VoiceTone coefficient reaches about -500 bps by h=15 days; a unit decrease in voice tone raises volatility about as much as a 1-SD FG shock |
| R9 | **Positive voice tone reduces the LQD-minus-LQDH interest-rate-risk spread** | Figure 6, p. 566; text p. 564 | About -0.5 bps near h=9 days, returning toward zero by h=15; interpreted as lower perceived interest-rate risk |
| R10 | **Positive voice tone briefly raises LQD prices, with an imprecise response** | Figure 8, p. 568; text p. 566 | About +20 bps at early horizons, short-lived and statistically insignificant |
| R11 | **No economically or statistically significant IVR response is reported** | Figure 9, p. 569; text p. 566 | Results described as broadly similar to LQD; VoiceTone response not distinguishable from zero |
| R12 | **Dollar-yen exchange rate does not significantly respond to voice tone** | Figure 12, p. 572; text p. 569 | Response is close to zero, with no statistically or economically significant effect |
| R13 | **SPY response persists with Fed-chair fixed effects** | Figure 14 Panel D, p. 574; text p. 572 | Within-chair VoiceTone estimates continue to move SPY; plotted response is about +100 bps at h=15 days |
| R14 | **Response varies by positive versus negative voice tone** | Figure 14 Panel E, p. 574; text p. 572 | Effects are similar for the first roughly 10 days; negative-tone estimates appear stronger afterward |
| R15 | **More positive voice tone predicts more dovish Fed tweet sentiment** | Figure 16 Panel A, p. 579 | Cumulative tweet sentiment reaches about 0.15 by h=15 days with controls; 90% bootstrap interval shown |
| R16 | **Media sentiment rises after positive voice tone, then fades** | Figure 16 Panel B, p. 579 | Media sentiment peaks near 0.6 around day 6 and falls below zero around day 11 |
| R17 | **VoiceTone differs across chair press conferences** | Table 1, p. 558 | Mean VoiceTone is 0.64 for Bernanke, -0.13 for Yellen, and -0.30 for Powell; overall mean is 0.09 |
| R18 | **VoiceTone is only weakly correlated with policy stance and shocks** | Text p. 559; Figure 2, pp. 559-560 | Correlation is -0.23 with the shadow rate and -0.19 with FFR shocks |
| R19 | **Positive voice tone lowers GLD prices, consistent with lower expected inflation** | Figure 11, p. 571; text p. 568 | Dynamics resemble the GOVT-TIP spread response, though estimates are less precise |
| R20 | **SPY response persists with an economic-surprise control** | Figure 14 Panel A, p. 574 | Positive VoiceTone response, about +120 bps by h=15 days |
| R21 | **SPY response persists with corporate-earnings-announcement controls** | Figure 14 Panel B, p. 574 | Positive VoiceTone response, about +120 bps by h=15 days |
| R22 | **SPY response persists with pre-FOMC media-sentiment controls** | Figure 14 Panel C, p. 574 | Positive VoiceTone response, about +120 bps by h=15 days |
| R23 | **SPY response persists with RoBERTa text sentiment** | Figure 14 Panel F, p. 574 | Positive VoiceTone response, about +110 bps by h=15 days |
| R24 | **SPY response persists with FinBERT text sentiment** | Figure 14 Panel G, p. 574 | Positive VoiceTone response, about +110 bps by h=15 days |
| R25 | **SPY response persists with search-and-count text sentiment** | Figure 14 Panel H, p. 574 | Positive VoiceTone response, about +110 bps by h=15 days |
| R26 | **SPY response persists with human-coded text sentiment** | Figure 14 Panel I, p. 574 | Positive VoiceTone response, about +110 bps by h=15 days |

**Overall (paper's conclusion).** Voice tone conveys economically significant information that moves financial markets across multiple asset classes, beyond the content of spoken words and beyond the Fed's explicit policy actions. The effect builds gradually over days. The authors offer several possible explanations, including later Fed communication, slower processing by less-attentive investors, and developing media coverage; the results do not establish which channel drives the delay (Figure 16, pp. 578-580).

## Theory / model

The paper has no formal structural model. The empirical strategy tests whether voice tone carries market-moving information orthogonal to text and policy actions, under two interpretations that the data cannot distinguish.

**Interpretation 1 (forward-guidance signaling, pp. 576-577).** A positive voice tone signals that the Fed is unlikely to tighten policy in the near future. Under the zero lower bound, this attenuates rate risk, reduces perceived future volatility (VIX falls), lowers discount uncertainty (equity prices rise), and, since monetary tightening is a lower-probability event, reduces the expected future path of inflation (GOVT-TIP spread rises). Responses to voice tone are qualitatively similar to those for the FG shock from Swanson (2021), consistent with this interpretation.

**Interpretation 2 (Fed information effect, Romer and Romer 2000, p. 577).** The Fed chair's positive tone signals superior private information about a stronger economic outlook. A more upbeat assessment reduces uncertainty, may lower the rate-risk component of yields, and raises equity valuations. The paper tests this by checking whether positive-tone press conferences are followed by more dovish Fed tweets on days h=1 to 15; Figure 16 (p. 578-579) confirms this pattern, consistent with information revelation.

**Information diffusion and media channel (pp. 578-580).** The authors also propose that investors process vocal signals gradually: more attentive investors may trade first, while less-attentive investors follow, a slow-moving-capital channel. Continued news coverage can amplify and relay that interpretation. In Figure 16 (p. 579), more positive VoiceTone is followed by more dovish Fed tweet sentiment and a hump-shaped rise in media sentiment, which peaks after several days and then fades. These are mechanism-consistent patterns, not a causal mediation design.

**Identification.** The design controls for observable channels: VoiceTone enters after partialling out TextSentiment (BERT-based, built from statements, remarks, and Q&A responses), three identified policy shocks from Swanson (2021) (FFR, FG, AP), the Wu and Xia (2016) shadow rate, and an indicator for meetings without press conferences. Voice tone and text sentiment are only weakly correlated ($$\rho = 0.37$$ (Pearson; Spearman = 0.30) for statement text sentiment vs. voice tone; $$\rho = 0.29$$ for Q&A text sentiment vs. voice tone; pp. 557-558), providing independent variation. Hansen and McMahon (2016) document that FOMC textual content carries significant information; controlling for it isolates the vocal dimension. The design is selection-on-observables: no instrument for voice tone is used, and the identifying assumption is that residual VoiceTone variation is uncorrelated with omitted drivers of financial outcomes after the controls listed above.

## Method

**Step 1: Emotion detection and VoiceTone construction (pp. 552-555).** Each FOMC press conference audio is manually split into individual answers (692 segments across 36 press conferences). For each audio segment, three audio feature sets are extracted via Librosa:

$$
\text{Features}_s = \bigl[\underbrace{128 \text{ mel spectrogram coeff.}}_{\text{loudness at frequency}} ,\; \underbrace{40 \text{ MFCCs}}_{\text{spectral envelope}} ,\; \underbrace{12 \text{ chroma coeff.}}_{\text{melodic/harmonic energy}}\bigr] \quad (180 \text{ features total})
$$

A fully connected neural network with architecture: Input(180) -> Linear(200) -> Linear(200) -> Linear(200) -> Softmax(5) [with dropout rate 0.3 after each hidden layer] is trained on RAVDESS and TESS labeled emotion databases (80% train / 20% test). Accuracy on the test set is 84% overall (equation 1, p. 553):

$$
\text{Accuracy}(y,\hat{y}) = \frac{1}{n} \sum_{i=1}^{n} \mathbf{1}\{\hat{y}_i = y_i\} \tag{1}
$$

with per-class accuracy: angry 87%, sad 84%, neutral 74%, surprised 87%, happy 80%. Each segment is then collapsed to positive (happy or pleasantly surprised), negative (sad or angry), or neutral. Press-conference-level VoiceTone is (equation 2, p. 554):

$$
\text{VoiceTone} = \frac{\text{Positive answers} - \text{Negative answers}}{\text{Positive answers} + \text{Negative answers}}, \qquad \text{VoiceTone} \in [-1, +1] \tag{2}
$$

The measure is constructed for three Fed chairs: Bernanke (12 press conferences), Yellen (16), and Powell (8). Mean VoiceTone is +0.64 (Bernanke), -0.13 (Yellen), -0.30 (Powell); within-chair variation is substantial (Table 1, p. 558).

**Step 2: TextSentiment via BERT (pp. 556-557).** BERT base model (12 layers, 768 hidden states, 110M parameters) generates word embeddings for each paragraph of FOMC policy texts. A neural network trained on hand-scored statements from 1997-2010 (scored -10 to +10 on dovish-hawkish axis by research assistants; 81% accuracy) classifies each paragraph as dovish (score $$\geq +0.5$$), hawkish (score $$\leq -0.5$$), or neutral. TextSentiment aggregates over statements, opening remarks, and Q&A responses (equation 3, p. 557):

$$
\text{TextSentiment} = \frac{\text{Dovish text} - \text{Hawkish text}}{\text{Dovish text} + \text{Hawkish text}}, \qquad \text{TextSentiment} \in [-1, +1] \tag{3}
$$

A positive value signals a dovish/expansionary stance. TextSentiment and VoiceTone are weakly correlated ($$\rho \approx 0.29$$ for Q&A text vs. voice tone; $$\rho \approx 0.37$$ (Pearson; Spearman = 0.30) for statement text vs. voice tone), confirming partial independence (pp. 557-558; Figure 1, p. 559).

This method builds on `text-classification` for the BERT-based text scoring and `speech-emotion-recognition` (proposed) for the audio emotion classification. As described in the paper, the audio feature vector combines 128 mel spectrogram coefficients, 40 MFCCs, and 12 chroma coefficients (p. 553).

## Empirical specifications

**Main specification (local projections, Jorda 2005).** For each horizon $$h = 0, 1, \ldots, 15$$ days, equation (4) from p. 560 is estimated separately by OLS:

$$
\text{Outcome}_{t,t+h} = b_0^{(h)} + b_1^{(h)} \text{VoiceTone}_t + b_2^{(h)} \text{TextSentiment}_t + b_3^{(h)} \text{FFRShock}_t + b_4^{(h)} \text{FGShock}_t + b_5^{(h)} \text{APShock}_t + b_6^{(h)} \text{ShadowRate}_t + b_7^{(h)} \mathbf{1}\{\text{NoPressConference}_t\} + \text{error}_t^{(h)} \tag{4}
$$

where $$t$$ indexes FOMC meetings; $$\text{Outcome}_{t,t+h}$$ is the log-return from open on FOMC day $$t$$ to close on day $$t+h$$ (e.g. $$\log(\text{SPY}_{t+h}^{\text{close}}) - \log(\text{SPY}_t^{\text{open}})$$); FFRShock, FGShock, APShock are Swanson (2021) policy shocks (normalized to unit variance over the pre-ZLB period); ShadowRate is from Wu and Xia (2016); and $$\mathbf{1}\{\text{NoPressConference}\} = 1$$ when no press conference was held. The coefficient path $$\{b_1^{(h)}\}_{h=0}^{15}$$ traces the impulse response to a unit increase in voice tone. Standard errors are from nonparametric accelerated bootstrap (90% bias-corrected confidence intervals; p. 561). The sample has 68 FOMC meetings, 36 with press conferences.

Results (R1)-(R6) in the Core results table are from specification (4). Outcomes studied: SPY (R1, R6), VIX (R2), VIXY, VIXM (Figure 5, p. 564-565), GOVT (R3), GOVT-TIP spread (R4), EUR/USD (R5), and others (LQD, GLD, IVR, JPY).

**Robustness variants (pp. 570-575; Figure 14, p. 574).** Adding the Citigroup Economic Surprise Index (Panel A), controlling for volume of corporate earnings announcements (Panel B), adding pre-FOMC media sentiment (Panel C), adding Fed chair fixed effects (Panel D), allowing sign asymmetry in voice tone (Panel E), and replacing BERT with RoBERTa (Panel F), FinBERT (Panel G), search-and-count (Panel H), or human classification (Panel I) leave the voice tone coefficient on SPY stable and statistically significant.

The paper does not print a numbered equation for the chair fixed-effect and sign-asymmetry checks. Written out from the description on p. 572, the chair fixed-effect variant adds a chair indicator to (4), and the asymmetry variant replaces VoiceTone with separate positive- and negative-tone measures:

$$
\text{Outcome}_{t,t+h} = b_0^{(h)} + b_1^{(h)}\text{VoiceTone}_t + b_2^{(h)}\text{TextSentiment}_t + b_3^{(h)}\text{FFRShock}_t + b_4^{(h)}\text{FGShock}_t + b_5^{(h)}\text{APShock}_t + b_6^{(h)}\text{ShadowRate}_t + b_7^{(h)}\mathbf{1}\{\text{NoPressConference}_t\} + \delta_{c(t)} + \text{error}_t^{(h)}
$$

$$
\text{Outcome}_{t,t+h} = b_0^{(h)} + b_1^{(h)}\text{PositiveVoiceTone}_t + b_2^{(h)}\text{NegativeVoiceTone}_t + \sum_{j=3}^{8} b_j^{(h)}X_{j,t} + \text{error}_t^{(h)}
$$

Here $$X_{j,t}$$ denotes the remaining controls in equation (4). These variants use the same 68-meeting sample and outcome construction; the paper reports 90% bias-corrected accelerated bootstrap intervals for specification (4) and the Figure 14 estimates. No additional fixed effects are stated for the asymmetry variant.

**Media sentiment measure (equation 5, p. 571).** The authors score 23,275 FOMC-related US news articles from January 2011 to July 15, 2019 and average the measure over the five days before each FOMC meeting when used as a control:

$$
\text{MediaSentiment}_t = \frac{\text{Dovish articles}_t - \text{Hawkish articles}_t}{\text{Articles}_t} \tag{5}
$$

**High-frequency (intraday) specifications (pp. 575-577).** Audio segments are timed to the second; SPY prices are matched to each answer. "Flow" specification (eq. 6', p. 575), answer by answer:

$$
\text{Outcome}_{t \to t+h,m,s} = b_0^{(h)} + b_1^{(h)} \text{VoiceTone}_{t,m,s} + b_2^{(h)} \text{TextSentiment}_{t,m,s} + \lambda_m + \gamma_s + \text{error}^{(h)} \tag{6'}
$$

"Cumulative" specification (eq. 6'', p. 575), cumulating from press conference start $$t_0$$:

$$
\text{Outcome}_{t_0 \to t+h,m,s} = b_0^{(h)} + b_1^{(h)} \text{VoiceTone}_{t_0 \to t,m,s} + b_2^{(h)} \text{TextSentiment}_{t_0 \to t,m,s} + \lambda_m + \gamma_s + \text{error}^{(h)} \tag{6''}
$$

where $$\lambda_m$$ is a meeting fixed effect and $$\gamma_s$$ is a question-order fixed effect; $$h$$ is in minutes; inference uses bootstrap clustered by meeting. The intraday sample is 692 answer segments from 36 press conferences. Result R7 uses specification (6').

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| FOMC press conference audio (Fed YouTube, 36 conferences, April 2011-June 2019) | Construct VoiceTone: 692 Q&A audio segments, split per answer; author-introduced dataset | No page yet |
| FOMC statements, opening remarks, Q&A transcripts (Fed website) | Construct TextSentiment; training corpus from 1997-2010 statements | No page yet |
| RAVDESS (Ryerson Audio-Visual Database of Emotional Speech and Song) | Train emotion-detection neural network (80% of combined training set) | No page yet |
| TESS (Toronto Emotional Speech Set) | Train emotion-detection neural network (joint with RAVDESS) | No page yet |
| ETF prices: SPY, VIX, VIXY, VIXM, GOVT, TIP, LQD, LQDH, IVR, GLD (Thomson Reuters, Yahoo Finance, Tiingo) | Outcome variables: daily log returns from open on FOMC day to close on day t+h | No page yet |
| Swanson (2021) policy shocks (FFR, FG, AP) | Controls for monetary policy actions in specification (4) | [No page yet](/wiki/datasets/) |
| Wu and Xia (2016) shadow policy rate | Control for ZLB period and monetary policy cycle in specification (4) | No page yet |
| Nexis Uni news database (23,275 FOMC-related articles, Jan 2011-Jul 2019) | Robustness: MediaSentiment control for media framing before each FOMC meeting | No page yet |
| Federal Reserve Twitter (Board of Governors + regional Fed accounts) | Robustness: post-FOMC tweet sentiment tracks positive voice tone (Figure 16, p. 578-579) | No page yet |

Sample: 68 FOMC meetings, 36 press conferences, April 2011 to June 2019. Among press conferences, mean VoiceTone = 0.09 and SD = 0.75 (Table 1, p. 558). The daily regression sample uses all 68 meetings and codes VoiceTone as zero when there was no Q&A session (p. 561).

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20220129) (or [preprint](https://doi.org/10.2139/ssrn.3809564)) if you are: studying nonverbal central bank communication as a channel for market expectations; building or extending an emotion-detection model for audio from policy events; evaluating whether text-only NLP models fully capture FOMC communication; checking exact robustness specifications and the Internet Appendix with additional results by ETF maturity and currency; or replicating via the [ICPSR replication data](https://doi.org/10.3886/E178302V1). The locators above point to the exact figures and tables.

## Attribution and rights

Source: peer-reviewed, *The American Economic Review* 113(2), February 2023. Paywalled; preprint available at SSRN. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. Rights are held by the American Economic Association; no CC licence was found in the Crossref record. Reproduce and adapt only per AEA terms.

> Gorodnichenko, Yuriy, Tho Pham, and Oleksandr Talavera. "The Voice of Monetary Policy." *The American Economic Review* 113, no. 2 (February 2023): 548-584. DOI: 10.1257/aer.20220129.
