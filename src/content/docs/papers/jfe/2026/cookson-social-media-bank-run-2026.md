---
title: "Social Media as a Bank Run Catalyst: Cookson et al. (2026)"
description: >-
  Distilled: Banks with greater pre-run Twitter exposure lost 4.3 percentage
  points more stock value during the March 2023 Silicon Valley Bank run;
  Twitter attention at the hourly frequency predicted lower returns for high-risk
  banks, while Twitter sentiment did not amplify run risks. Journal of Financial
  Economics 176 (2026), paywalled. Eight core results with source locators,
  datasets used, and the estimating equations.
sidebar:
  label: Cookson et al. 2026
  order: 1
tags: [paper-summary, bank-runs, social-media, fintech, banking, financial-stability,
       text-as-data, panel-regression, cross-section, peer-reviewed, unreplicated,
       data:wrds, data:call-reports, data:firstrate, data:ravenpack, data:google-trends]
paper:
  authors: J. Anthony Cookson, Corbin Fox, Javier Gil-Bazo, Juan F. Imbet, Christoph Schiller
  authorList:
    - { family: Cookson, given: J. Anthony, orcid: "0000-0001-6920-9353", affiliation: University of Colorado Boulder }
    - { family: Fox, given: Corbin, orcid: "0009-0007-2285-1307", affiliation: Clemson University }
    - { family: Gil-Bazo, given: Javier, orcid: "0000-0002-1773-3900", affiliation: Universitat Pompeu Fabra }
    - { family: Imbet, given: Juan F., orcid: "0000-0003-4970-3711", affiliation: "Université Paris Dauphine-PSL" }
    - { family: Schiller, given: Christoph, orcid: "0009-0008-7691-6556", affiliation: The Ohio State University }
  year: 2026
  venue: Journal of Financial Economics 176 (2026) 104218
  venueShort: J. Fin. Econ. 2026
  doi: 10.1016/j.jfineco.2025.104218
  jel:
    codes: [G21, G28, G14, D83]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - "Banking stability, regulation, efficiency"
    - "FinTech, Crowdfunding, Digital Finance"
    - "Financial Distress and Bankruptcy Prediction"
  dataAccess: licensed-commercial
  outcome:
    - bank stock market loss during the SVB run period
    - Q1-2023 deposit outflows (uninsured and total)
    - hourly bank stock return during the run period
  outcomeClass: [security-returns, bank-funding]
  license: >-
    All rights reserved, (c) 2025 Elsevier B.V.; ISSN 0304-405X; text-and-data-mining
    TDM licence only (Elsevier TDM + TDMRep, start 2026-02-01); no CC or open licence.
    PDF states: "All rights are reserved, including those for text and data mining,
    AI training, and similar technologies."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect, 2026-06-24)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 10
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, text-classification, event-study]
    identification: selection-on-observables
  contributionType: [new-fact, new-data]
  mechanisms: [networks, information-asymmetry, social-coordination]
  introducesData: true
  scope:
    region: US
    assetClass: US bank stocks and deposits
    period: 2020-01..2023-03
    frequency: mixed
    dataType: [market, text, accounting, administrative]
    granularity: [firm, security, transaction]
    n: "277 bank holding companies (main cross-section); approx. 15,000 bank-hour observations; approx. 36,659 tweet-level observations"
  findings:
    - ref: R1
      outcome: bank stock market loss during the SVB run period
      metric: coefficient
      value: "4.317*** pp per 1-SD increase in log pre-run tweets (SE=0.936)"
      direction: positive
    - ref: R2
      outcome: bank stock market loss during the SVB run period
      metric: coefficient
      value: "Pre-Exposure x %Uninsured x %LossMTM = 2.407*** (SE=0.561); Pre-Exposure x %Uninsured = 2.695*** (SE=0.701)"
      direction: positive
      vsBenchmark: amplifies the classical %Uninsured x %LossMTM run-risk interaction
    - ref: R3
      outcome: bank stock market loss during the SVB run period
      metric: coefficient
      value: "Triple interaction with full controls = 1.660*** (SE=0.424); Pre-Exposure x %Uninsured = 1.641** (SE=0.613)"
      direction: positive
      vsBenchmark: robust to controls for size, analyst coverage, deposit franchise, and market returns
    - ref: R4
      outcome: "Q1-2023 deposit outflows (uninsured)"
      metric: coefficient
      value: "%Uninsured x %LossMTM x Pre-Exposure = 1.47** (SE=0.746)"
      direction: positive
      vsBenchmark: consistent with the stock-return finding at the quarterly deposit frequency
    - ref: R5
      outcome: hourly bank stock return during the run period
      metric: coefficient
      value: "Post-Mar-9 x high Twitter attention (4h lag) = -0.096** to -0.108** bps/hour for high-run-risk banks (SE approx. 0.038-0.047)"
      direction: negative
      vsBenchmark: near-zero and insignificant for low-run-risk banks
    - ref: R6
      outcome: hourly bank stock return during the run period
      metric: coefficient
      value: "High-retweet tweets: post-Mar-9 x high attention = -0.124*** (SE=0.062); low-retweet (col 3): -0.075* (SE=0.039)"
      direction: negative
      vsBenchmark: "coefficient approx. 65% larger for the high-retweet subsample"
    - ref: R7
      outcome: bank stock market loss during the SVB run period
      metric: coefficient
      value: "VADER Neg(z) x High Run Risk (M2) interaction = 2.99 to 3.15 across Table 8 cols 5-8 (SE approx. 2.02-2.87; all statistically insignificant)"
      direction: none
      vsBenchmark: Twitter attention is significant; Twitter sentiment is not
    - ref: R8
      outcome: bank stock market loss during the SVB run period
      metric: coefficient
      value: "Contagion tweets in-run = 6.696*** (SE=1.333); run-behavior tweets = 7.252*** (SE=1.374); controlling for both reduces pre-exposure coefficient to near zero and insignificant"
      direction: positive
      vsBenchmark: in-run tweet content mediates the pre-exposure effect
  resultType: new-finding
  relatesTo:
    - { cite: "Diamond and Dybvig (1983)", doi: '10.1086/261155', relation: builds-on, note: "foundational demand-deposit coordination model of bank runs" }
    - { cite: "Goldstein and Pauzner (2005)", doi: '10.1111/j.1540-6261.2005.00762.x', relation: builds-on, note: "global-games model in which depositor communication amplifies run equilibria" }
    - { cite: "Jiang et al. (2024a)", doi: '10.1016/j.jfineco.2024.103899', relation: extends, note: "adds Twitter pre-exposure as an amplifier of their % Uninsured x % Loss MTM run-severity result" }
    - { cite: "Pedersen (2022)", doi: '10.1016/j.jfineco.2022.05.002', relation: builds-on, note: "theory of investor social media fanatics justifies why pre-exposure is unrelated to traditional run risk" }
    - { cite: "Bianchi et al. (2023)", doi: '10.1016/j.jmoneco.2023.01.001', relation: extends, note: "adapts their tweet-level 5-minute window identification to bank run period hourly and high-frequency tests" }
    - { cite: "Drechsler et al. (2024)", relation: cites, note: "deposit beta and deposit franchise measures used as balance-sheet controls" }
  openQuestions:
    - "Whether social media can trigger runs on fundamentally solvent banks via a sunspot equilibrium, which is difficult to identify empirically given the self-fulfilling nature of runs (footnote 5, p. 3; conclusion p. 23)."
    - "Whether the findings generalize beyond the 2023 US regional banking episode to other financial crises, jurisdictions, or social media platforms (conclusion, p. 23)."
  replicationCode:
    status: upon-request
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-24, role: extracted, note: "Full PDF read (24 pages, all tables Figures 1-9); eight results extracted with table and page locators; equations transcribed from PDF Sections 2-3. Not human-verified. Not reproduced." }
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; fixed: JEL codes (added G28); R5 coefficient range corrected to -0.096** to -0.108** (col 5 value -0.108** was omitted); R6 low-retweet coefficient corrected to -0.075* (SE=0.039), col 2 value -0.047 had been wrongly paired with col 3 SE; R7 findings value corrected from -0.18 to 3.15 range to 2.99 to 3.15 (the -0.18 was VADER Neg main effect col 5, not the High Run Risk interaction); Eq. (5) control-vector coefficient corrected from b_4 to eta per PDF; colorful adjective 'comprehensive' removed from TL;DR. All other locators, magnitudes, signs, and equation terms verified correct."
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jfineco.2025.104218", checked: 2026-06-24, by: "paper-distiller (claude-sonnet-4-6)", found: "license[] entries all content-version=tdm (Elsevier TDM licence, TDMRep, and STM-ASF policies); no CC or open licence entry; PDF p.1 confirms 0304-405X c) 2025 Elsevier B.V. All rights reserved." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the empirical framework, and the estimating
equations, extracted for quick lookup. To replicate or extend the analysis, read the
original at [doi.org/10.1016/j.jfineco.2025.104218](https://doi.org/10.1016/j.jfineco.2025.104218).

## TL;DR

This paper quantifies social media's role in the March 2023 Silicon Valley Bank (SVB) run
and the broader US regional bank distress that followed, using Twitter data
for 277 publicly traded bank holding companies. The headline finding is that banks with
greater pre-run Twitter exposure (log number of cashtag tweets posted before SVB's failure,
January 1 to February 15, 2023) suffered 4.3 percentage points more stock market loss
during the run. The Twitter effect amplifies classical bank run risks: the interaction
between Twitter pre-exposure, the fraction of uninsured deposits, and mark-to-market asset
losses is large and statistically significant. At the hourly frequency during the run
period, Twitter attention (number of tweets in the prior four hours) predicts lower returns
for high-risk banks but not for low-risk banks. The effect is concentrated in periods when
tweets are highly retweeted, pointing to a social propagation channel. Twitter sentiment
(VADER negative score), by contrast, does not amplify run risks, distinguishing broad
attention from negativity as the operative mechanism.

## Core results

Magnitudes are as reported; `\*\*` = 5%, `\*\*\*` = 1%. Variables marked `(z)` are
standardized to mean zero, SD one.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | A 1-SD increase in Twitter pre-exposure predicts 4.3 pp more stock market loss during the SVB run | Table 4, Panel A, col. 2, p. 13 | 4.317\*\*\* pp (SE = 0.936) |
| R2 | Twitter amplifies classical run risks: triple interaction pre-exposure x %Uninsured x %LossMTM is significant | Table 4, Panel A, col. 4, p. 13 | 2.407\*\*\* (SE = 0.561); pre-exposure x %Uninsured = 2.695\*\*\* (SE = 0.701) |
| R3 | Triple interaction is robust to full controls for size, analyst coverage, deposit franchise, and market returns | Table 4, Panel B, col. 4, p. 14 | 1.660\*\*\* (SE = 0.424); pre-exposure x %Uninsured = 1.641\*\* (SE = 0.613) |
| R4 | Twitter pre-exposure predicts Q1-2023 uninsured deposit outflows through the same triple interaction | Table 5, col. 1, p. 16 | Triple interaction = 1.47\*\* (SE = 0.746); %Uninsured alone = 3.31\*\*\* (SE = 0.993) |
| R5 | At the hourly frequency, high Twitter attention predicts lower returns for high-run-risk banks, not for low-risk banks | Table 6, Panel A, col. 4-6, p. 18 | High risk: post-Mar-9 x high attention (4h lag) = -0.096\*\* to -0.108\*\* bps/hour (cols 4-6); low risk: near zero, insignificant |
| R6 | The hourly return effect is driven by broadly retweeted tweets, not low-retweet or high-follower tweets | Table 7, Panel B, col. 3 vs. col. 6, p. 20 | High-retweet: -0.124\*\*\* (SE = 0.062); low-retweet: -0.075\* (SE = 0.039, 10%) |
| R7 | Twitter sentiment (VADER negative score) does not amplify bank run risk | Table 8, col. 5-8, p. 21 | VADER Neg x High Run Risk = statistically insignificant across all specifications |
| R8 | In-run contagion tweets and run-behavior tweets predict stock losses and account for most of the pre-exposure effect | Table 4, Panel C, col. 2-5, p. 15 | Contagion tweets: 6.696\*\*\* (SE = 1.333); run tweets: 7.252\*\*\* (SE = 1.374); pre-exposure falls to near zero when both are included |

**Overall (paper's conclusion).** Social media exposure amplifies classical bank run
risks, with the channel being Twitter attention and social propagation via retweets,
not negative sentiment. The effect is consistent across stock-return and deposit-outflow
measures, and is evident at both the cross-sectional and hourly frequency. The paper
concludes that social media serves as a coordination device for depositors, linking it
to the theoretical framework of Diamond and Dybvig (1983) and Goldstein and Pauzner (2005).

## Theory / model

The paper has no formal structural model. The theoretical grounding draws on classical
bank run models. Diamond and Dybvig (1983) show that bank runs can arise as coordination
failures: even a fundamentally solvent bank can fail if a sufficient mass of depositors
withdraw simultaneously because each depositor's optimal action depends on what they
believe others will do. Goldstein and Pauzner (2005) extend this to show that
communication among depositors that reveals information about others' run intentions
can amplify the probability of a run equilibrium.

The paper's contribution is to ask whether social media functions as such a coordination
channel. Three related empirical hypotheses are tested:

1. Banks with greater pre-run social media exposure will experience more severe runs,
   conditional on traditional balance-sheet risk factors.
2. Twitter pre-exposure amplifies rather than substitutes for classical run risk
   factors (high uninsured deposits and large mark-to-market asset losses), consistent
   with amplification of the uninsured-depositor coordination problem documented
   by Jiang et al. (2024a).
3. The channel is social attention and propagation (retweets), not negative sentiment:
   broadly retweeted content raises the salience of run concerns and reaches the
   audience of likely depositors, while negativity alone does not coordinate behavior.

**Identification.** The main cross-sectional identification relies on the fact that
Twitter pre-exposure in January-February 2023 is driven primarily by bank size and
investor fanaticism (Pedersen (2022)), and is empirically near-zero correlated with
traditional run risk factors (Fig. 6b, p. 11: correlation of pre-exposure with run risk
is 0.023). The content of pre-period tweets is also unrelated to banking distress topics
(Fig. A.5 in the Appendix). Thus, cross-sectional variation in pre-exposure reflects
social media reach, not ex ante run vulnerability. For the hourly tests, a narrow
5-minute window around individual tweets (adapting the approach of Bianchi et al. (2023))
provides sharper identification by limiting the scope for confounding news and price
dynamics. For the deposit outflow tests, the quarterly FDIC Call Report data (Drechsler
et al. (2024) deposit beta measures are also used as controls) corroborates the
cross-sectional stock-return evidence.

## Method

**Twitter pre-exposure construction** (Section 2.1, p. 5). The paper uses academic
access to Twitter's API to collect 5,399,740 original tweets about 602 depository
institutions (SIC codes 602, 603, 609) from January 2020 to March 2023, filtered to
English original (non-retweeted) posts containing each bank's cashtag. A supplemental
sample of 765,224 retweets (January-March 2023) is also collected. Twitter pre-exposure
for bank $$i$$ is the log count of original cashtag tweets from January 1 to February 15,
2023, winsorized at the 95th percentile. The resulting data are available on Mendeley
Data (dataset link on p. 1 of the article).

**Sentiment scoring** (Section 2.1.1, p. 5). Each tweet is scored by the VADER
(Valence Aware Dictionary and sEntiment Reasoner) algorithm (Hutto and Gilbert (2014)),
which produces positive ($$\text{VADERPos}$$) and negative ($$\text{VADERNeg}$$) component
scores. Both components are standardized to mean zero and SD one within the estimation
sample.

**Content dictionaries** (Section 2.1.2, p. 6, Table 1). Four contextual dictionaries
classify tweet content into Balance Sheet, Run behavior, Contagion, and Tech Community
categories. Each dictionary is built iteratively using domain seed words; the top 40
most salient words by topic are selected via frequency analysis on the run-period corpus,
following the approach of Cookson et al. (2020) for investor tweets.

**Mark-to-market loss construction** (Section 2.2, p. 6, Eq. 1). Bank asset losses
are estimated from FDIC Call Report asset holdings as of January 2022 and Treasury Bond
index changes through Q1-2023:

$$
\Delta\text{Loss MTM} = \sum_m \Bigl( (\text{RMBS}_m + \text{Mortgages}_m) \times
\Delta\text{Treasury Price}_m \times \text{Multiplier} \Bigr) + \sum_m \Bigl(
\text{Treasuries}_m + \text{securities}_m + \text{loans}_m \Bigr) \times
\Delta\text{Treasury Price}_m \tag{1}
$$

where $$m$$ indexes 9 maturity-repricing breakdowns (1 month through 30 years);
$$\Delta\text{Treasury Price}_m$$ is the Q1-2022 to Q1-2023 percentage price change in
the corresponding CRSP Treasury index; and $$\text{Multiplier}$$ adjusts RMBS and
mortgages for the iShares MBS ETF return relative to the S&P U.S. Treasury Bond Index.
The resulting variable is labeled $$\%\text{ Asset Decline MTM}$$.

**Determinants of Twitter pre-exposure** (Section 2.5, p. 9, Eq. 2). To validate
identification, the cross-sectional regression

$$
\text{Twitter Pre-Exposure}_i = a + b_1 \text{Size}_i + b_2 \,\%\text{LossMTM}_i + b_3
\,\%\text{Uninsured}_i + b_4 \mathbf{X}_i + b_5 \mathbf{W}_i + b_6 \mathbf{Z}_i +
\varepsilon_i \tag{2}
$$

is estimated, where $$\text{Size}_i$$ is log market capitalization; $$\mathbf{X}_i$$
is an information-environment vector (analyst coverage from I/B/E/S, newspaper article
count from RavenPack); $$\mathbf{W}_i$$ includes Q3-Q4 2022 stock returns, the FOMC
2022 cumulative abnormal return, and the Google Trends SVI; and $$\mathbf{Z}_i$$ captures
deposit franchise characteristics (branch ZIP count, deposit beta, market-to-book,
CRE loan share, liquid assets, deposit concentration). Table 3 (p. 10) shows size
is the dominant predictor (coefficient 0.767\*\*\* in the baseline); the classical run
risk factors $$\%\text{LossMTM}$$ and $$\%\text{Uninsured}$$ are statistically
insignificant or slightly negative, supporting the identification strategy.

## Empirical specifications

**Main cross-sectional specification** (Section 3.1, p. 12, Eq. 3). Run severity is
measured as the percentage stock market loss from March 1 to March 15, 2023. The
headline estimating equation is:

$$
\text{Stock Loss}_i = \beta_1 \,\%\text{LossMTM}_i \times \%\text{Uninsured}_i \times
\text{Pre-Exposure}_i + \text{lower-order terms} + \gamma \mathbf{X}_i + \varepsilon_i
\tag{3}
$$

All variables marked $$z$$ in Table 4 are standardized to mean zero and SD one. The
vector $$\mathbf{X}_i$$ includes log market cap, analyst coverage, news article count,
2022 Q3/Q4 stock returns, FOMC CAR, Google SVI, Q4-2022 deposit flow, branch footprint,
deposit beta, market-to-book, CRE loan share, liquid assets, and deposit concentration.
The key coefficients are those on the triple interaction and the two-way interactions
involving Pre-Exposure (Table 4, Panel A, col. 4, p. 13).

**Deposit outflow specification** (Section 3.2, p. 14, Eq. 4). An analogous
cross-sectional specification uses Q1-2023 deposit outflows as the outcome:

$$
\text{Deposit Outflow}_i = \beta_1 \,\%\text{LossMTM}_i \times \%\text{Uninsured}_i
\times \text{Pre-Exposure}_i + \text{lower-order terms} + \gamma \mathbf{X}_i +
\varepsilon_i \tag{4}
$$

where $$\text{Deposit Outflow}_i = 100 \times (\text{Deposits}_{Q4\text{-}2022} -
\text{Deposits}_{Q1\text{-}2023}) / \text{Deposits}_{Q4\text{-}2022}$$, computed for
both uninsured (above the FDIC $250K threshold) and total deposits from the FDIC Call
Reports. Standard errors are robust. Sample size is 275 (Table 5, p. 16).

**Hourly panel specification** (Section 3.3, pp. 15-16, Eq. 5). For each bank-hour
in the period March 6-10, 2023 (shorter window: March 8-9), hourly stock returns
(in basis points, from FirstRate Data) are regressed on lagged Twitter attention:

$$
r_{i,t} = a + b_1 \mathbf{1}(\geq\!\text{Mar 09})_t + b_2 \mathbf{1}(\text{N Tweets High})_{i,t-1}
+ b_3 \bigl[ \mathbf{1}(\geq\!\text{Mar 09})_t \times \mathbf{1}(\text{N Tweets High})_{i,t-1} \bigr]
+ \eta \mathbf{X}_{i,t-1} + \delta_i + \gamma_t + \varepsilon_{i,t} \tag{5}
$$

where $$\mathbf{1}(\text{N Tweets High})_{i,t-1}$$ equals one if the count of cashtag
tweets about bank $$i$$ in the prior 4 hours was above the (within-sample) median;
$$\delta_i$$ and $$\gamma_t$$ are firm and day-by-hour fixed effects; and
$$\mathbf{X}_{i,t-1}$$ includes the bank's cumulative 4-hour return and lagged news
article count. Standard errors are clustered at the bank level. The specification is
estimated separately for high-run-risk banks (above-median $$\%\text{Uninsured} \times
\%\text{LossMTM}$$) and low-run-risk banks. The coefficient of interest is $$b_3$$:
whether, after the SVB run began (March 9), higher Twitter attention predicted lower
returns for high-risk banks. Table 6 (p. 18) reports Panel A (full March 6-10 window),
Panel B (shorter March 8-9 window), Panel C (excluding SVB), and Panel D
(retweet-weighted tweet counts).

**Tweet-level high-frequency specification** (Section 3.5, p. 20, Eq. 6). At the
individual tweet level (one observation per tweet), log price changes in the 5-minute
window around the tweet are regressed on VADER sentiment:

$$
\Delta p_{i,t} = a + b \times \text{VADERPos}_{i,t} + c \times \text{VADERNeg}_{i,t}
+ \eta \mathbf{X}_{i,t} + \gamma_i + \varepsilon_{i,t} \tag{6}
$$

where $$\Delta p_{i,t}$$ is the log price change from just before to 5-15 minutes after
the tweet (in basis points), following Bianchi et al. (2023, 2024); $$\gamma_i$$ is a
bank fixed effect; and $$\mathbf{X}_{i,t}$$ includes the log price change in the 10
minutes prior to the tweet, the count of RavenPack news articles in that window, and
their ESS sentiment. The interaction terms in Table 8 (p. 21) test whether VADER Neg
amplifies returns for high-run-risk banks and for specific tweet types (run tweets,
contagion tweets, tech community tweets). Standard errors are clustered at the bank-day
level.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Twitter API (original collection, Jan 2020-Mar 2023; data on Mendeley Data) | Twitter pre-exposure variable, in-run attention and sentiment, tweet content classification | No page yet (author-introduced dataset) |
| FDIC / FFIEC Call Reports (Q4-2022) | % Uninsured deposits, Q1-2023 deposit outflows, asset holdings for MTM loss | [FFIEC Call Reports](/wiki/datasets/call-reports/) |
| CRSP US Treasury and Inflation Indexes | Treasury bond price changes by maturity for % Loss MTM construction | [WRDS](/wiki/licensed/wrds/) (licensed) |
| Compustat bank fundamentals (via WRDS) | Market capitalization, market-to-book, liquid assets, CRE loan share | [WRDS](/wiki/licensed/wrds/) (licensed) |
| I/B/E/S analyst coverage (via WRDS) | Number of analysts as information-environment control | [WRDS](/wiki/licensed/wrds/) (licensed) |
| FirstRate Data (intraday) | Minute-level and 5-minute bank stock prices for hourly return construction (March 2023) | No page yet |
| RavenPack news analytics | Traditional news article count and ESS sentiment as controls in high-frequency tests | [RavenPack](/wiki/licensed/ravenpack/) (licensed) |
| Google Trends SVI | Retail investor attention to bank stocks as a market-control variable | No page yet |

Sample: 277 publicly traded bank holding companies; Twitter pre-exposure from
January 2020 to March 14, 2023; run period March 1-15, 2023; hourly panel March 6-10,
2023; tweet-level tests use approx. 36,659 tweet observations.

## When to read the full paper

Read the [original](https://doi.org/10.1016/j.jfineco.2025.104218) if you are:
studying bank run dynamics during the 2023 regional banking crisis and need the full
battery of robustness checks (Appendix Tables A.1-A.14, covering alternative pre-exposure
windows, alternative event windows, specification-curve analysis per Simonsohn et al. (2020),
and SVB-excluded subsamples); building on the Twitter data for US bank stocks (the
Mendeley dataset is linked from the article); examining the tweet-content classification
methodology in detail (Table 1 and Appendix Fig. A.5); or extending the hourly bank
panel (Table 6) or tweet-level sentiment tests (Tables 8-9) to other episodes. Table 7
(Panel B, p. 20) is particularly valuable for readers interested in the social propagation
mechanism via retweets.

## Attribution and rights

Source: peer-reviewed, *Journal of Financial Economics* 176 (2026) 104218. This
distillation was extracted by an LLM on 2026-06-24 and is **not human-verified or
independently reproduced**. The original is paywalled; extract-only redistribution applies.

> Cookson, J. Anthony, Corbin Fox, Javier Gil-Bazo, Juan F. Imbet, and Christoph Schiller.
> "Social media as a bank run catalyst."
> *Journal of Financial Economics* 176 (2026) 104218.
> DOI: [10.1016/j.jfineco.2025.104218](https://doi.org/10.1016/j.jfineco.2025.104218).
> © 2025 Elsevier B.V. All rights reserved.
