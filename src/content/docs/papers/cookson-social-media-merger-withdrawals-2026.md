---
title: "Can Social Media Inform Corporate Decisions: Cookson, Niessner & Schiller (2026)"
description: >-
  Distilled: abnormal StockTwits sentiment after a merger announcement
  predicts a 0.64 percentage point higher withdrawal probability (16.6% of
  the baseline rate), robust to market reactions, news, and analyst signals;
  the effect strengthens after firms register corporate Twitter accounts and
  is driven by fundamental rather than technical or meme tweets. J. Finance
  2026, paywalled. Eight core results with source locators, datasets used, and
  the theory tested.
sidebar:
  label: Cookson-Niessner-Schiller 2026
  order: 1
tags: [paper-summary, mergers-and-acquisitions, social-media, text-as-data, corporate-decisions, fintech, panel-regression, event-study, peer-reviewed, unreplicated, data:wrds, data:stocktwits, data:sdc-platinum, data:ravenpack, data:ibes, data:ken-french]
paper:
  authors: J. Anthony Cookson, Marina Niessner, Christoph Schiller
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 91–142
  venueShort: J. Finance 2026
  licenseShort: paywalled
  resultsCount: 8
  doi: 10.1111/jofi.13508
  license: 'Paywalled (confirmed via Crossref DOI metadata 2026-05-31: license[0] content-version=vor URL=http://onlinelibrary.wiley.com/termsAndConditions#vor delay-in-days=0 start=2025-11-25; license[1] content-version=tdm URL=http://doi.wiley.com/10.1002/tdm_license_1.1; no Creative Commons licence present; artifact cover: © 2025 the American Finance Association)'
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/J. Finance publisher site; confirmed via Crossref licence metadata 2026-05-31)'
  redistribution: extract-only
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 91–142 of the PDF on disk); all eight results extracted with table/figure/page locators from the PDF. Not human-verified. Not reproduced. CC licence absent; no PDF mirror in this batch per distiller instructions.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13508
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0] content-version=vor URL=http://onlinelibrary.wiley.com/termsAndConditions#vor delay-in-days=0 start=2025-11-25; license[1] content-version=tdm URL=http://doi.wiley.com/10.1002/tdm_license_1.1; no CC licence entry'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and theory: enough
to know what it found without reading all 52 pages. To replicate or extend
it, access the original via the DOI:
[10.1111/jofi.13508](https://doi.org/10.1111/jofi.13508) (paywalled).

## TL;DR

Using 260 million StockTwits posts (2010–2021) matched to 6,438 U.S.
M&A deals from SDC Platinum, the paper measures firm-specific abnormal
social media sentiment in the four days after a merger announcement. A
one-standard-deviation decrease in abnormal sentiment predicts a 0.64
percentage point higher probability of deal withdrawal (16.6% of the
unconditional rate). This effect survives controls for acquirer CARs,
traditional news sentiment (RavenPack), analyst recommendation changes
(IBES), and deal characteristics. The effect is absent for deals withdrawn
by regulators or target boards (only one-third the magnitude), is
concentrated after firms register corporate Twitter accounts (especially
high-follower or verified accounts), and is driven by fundamental investor
tweets and M&A-relevant tweet topics, not meme or technical tweets.

## Core results

Magnitudes and significance are as reported; `\*`/`\*\*`/`\*\*\*` = 10%/5%/1%.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Negative abnormal social media sentiment predicts merger withdrawal**, controlling for market reactions, news, and analyst signals | Table II Panel A, pp. 107–108 | β = −0.643\*\*\* (col. 1, no controls) to −0.711\*\*\* (col. 6, full controls); 1-SD decrease in AbnSent associated with 0.64 pp higher withdrawal probability (16.6% of baseline 3.89%) |
| R2 | **StockTwits and Twitter sentiment each predict withdrawal independently** | Table II Panel B, pp. 107–108 | StockTwits col. (1): −0.706\*\*; Twitter (SMA) col. (2): −1.075\*\*\*; both significant when included jointly in col. (3) (StockTwits: −0.593\*\*, Twitter: −0.998\*\*\*) |
| R3 | **Effect is not driven by governance channel**: coefficients are similar for positive-CAR and negative-CAR deals | Figure 5, p. 111 | Estimated AbnSent coefficient indistinguishable across CAR < 0 and CAR ≥ 0 subsamples; governance-metric splits (ISS, board independence, antitakeover provisions) also yield no significant differences (Table IA.VI) |
| R4 | **Social media sentiment predicts market-favorable deal outcomes**: initial negative sentiment followed by withdrawal yields higher post-announcement BHARs | Table IV, p. 119 | Interaction AbnSent × 1(Deal Withdrawn): −0.101\*\* to −0.153\*\*\* across columns; withdrawal predicted by negative AbnSent associated with 10.09%–15.28% higher BHAR from day 11 to deal conclusion |
| R5 | **Effect strengthens after acquirer registers corporate Twitter account**, especially for high-follower or verified accounts | Table V, pp. 122–123 | AbnSent × Post(Twitter, HighFollow) col. (4): −0.956\*\*; AbnSent × Post(Twitter, Verified) col. (5): −1.301\*\*; coefficients on AbnSent alone (pre-Twitter) near zero and insignificant |
| R6 | **Effect is driven by fundamental investor tweets, not technical investor tweets** | Table VI Panel A, pp. 126–127 | Fundamental (non-technical) AbnSent: −1.105\*\*\* (col. 1); technical AbnSent: −0.350 (insignificant); result holds after adding media controls (col. 2): fundamental −1.080\*\*\*, technical −0.274 (insig.) |
| R7 | **Effect is driven by longer tweets and by M&A-relevant topics (Company/Business, Deal Terms, Disclosure), not by meme or trading tweets** | Table VI Panels A–B, pp. 126–127 | Long tweets: −1.214\*\*\* to −1.222\*\*\*; short tweets: −0.053 to +0.014 (insig.); Company/Business: −1.202\*\*\*; Deal-Terms: −1.139\*\*\*; Disclosure: −0.868\*\*; Meme: −0.280 (insig.); Technical: −0.487 (insig.) |
| R8 | **Effect is stronger when AbnSent disagrees with market and news signals, and when social media volume is higher** | Table VII, pp. 129, 130 | High N Tweets vs. low: −2.030\*\*\* vs. −0.516\* (coef. diff. t = 2.28, p = 0.023); split by social media vs. news disagreement drives the result; news-article-count split shows no statistically significant difference |

**Overall (paper's conclusion).** Social media sentiment contains
information about M&A deal outcomes that is not subsumed by market prices,
traditional media, or analyst signals. The evidence is consistent with a
revelatory channel: managers learn from social media, particularly after
engaging with the platform through a corporate Twitter account.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| StockTwits (260M posts, Jan 2010–Dec 2021, proprietary via Social Market Analytics / direct) | Primary social media sentiment measure (AbnSent); 6,438 M&A deals matched | No page yet |
| SDC Platinum (Thomson Reuters) | M&A deal universe (announcement dates, deal values, completion/withdrawal status, deal characteristics) | No page yet |
| CRSP | Stock returns for acquirer and target CARs; Fama-French three-factor model inputs | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| Compustat North America | Acquirer firm controls (market cap, leverage, cash holdings, M/B ratio) | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| RavenPack News Analytics (v. RPA 1.0) | Traditional news media sentiment (Event Sentiment Score) for M&A-related articles | [RavenPack](/wiki/licensed/ravenpack/) (licensed) |
| IBES (via Refinitiv) | Analyst recommendation changes as external signal control | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed via WRDS) |
| Ken French Data Library | Fama-French three-factor returns for CAR estimation | [Ken French Library](/wiki/datasets/ken-french/) |
| Social Market Analytics (SMA) Twitter data (2012–2021) | Robustness alternative sentiment measure from Twitter | No page yet |
| Refinitiv Streetevents (M&A conference call transcripts) | Conference call textual analysis (% constrained/negative words in presentation vs. Q&A) | No page yet |
| BoardEx / LinkedIn | CEO professional network proxies (education, employment, digital connections) | No page yet |

Sample: 6,438 M&A announcements (6,187 completed, 251 withdrawn); acquirers are U.S. public firms; deal values ≥ $25M; 2010–2021.

## Theory tested

**No original structural model.** The paper is empirical, testing the
distinction between *revelatory* and *forecasting* informativeness drawn
from Bond, Edmans, and Goldstein (2012) and Bai, Philippon, and Savov
(2016). The core question is whether social media sentiment reveals
information to managers (revelatory price efficiency analog) or merely
correlates with other information managers already have (forecasting
channel).

Identification strategy: linear probability model (eq. 2) with
year-by-quarter and acquirer-industry (GIC 2-digit) fixed effects;
standard errors clustered at year-by-quarter level. Controls include
acquirer CAR[−1, 10], CAR[−5, −1], news sentiment, analyst
recommendation changes, deal characteristics (deal value, pct. shares
held, white-knight indicator, competing-bidder indicator, rumored deal,
hostile deal, termination fee), and acquirer firm controls (size, leverage,
cash). Robustness: logit with fixed effects (Table IA.III), propensity score
matching (Table IA.IV), acquirer firm fixed effects (Table III col. 8),
alternative event windows and sentiment classifiers (maximum entropy, naive
Bayes). The Twitter-account timing test (eq. 4) uses within-acquirer
before/after variation; the BHAR regression (eq. 3) tests whether
social-media-predicted withdrawals are eventually ratified by markets.

## When to read the full paper

Use the original DOI link if you are: examining the Internet Appendix
robustness tables (Tables IA.I–IA.XIV); studying the conference call
presentation vs. Q&A split in detail (Table VIII); using the BTM tweet-topic
methodology; or replicating the BHAR analysis (Table IV). The locators
above point to the main tables. For "what did this paper find," the table
above covers the core results.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(1), February 2026.
© 2025 the American Finance Association. Published by Wiley; paywalled.
Licence confirmed via Crossref (Wiley VOR terms, no Creative Commons entry).

This distillation was extracted by an LLM on 2026-05-31 and is
**not human-verified or independently reproduced**. Extract-only: no PDF
mirror is hosted here.

> Cookson, J. Anthony, Marina Niessner, and Christoph Schiller.
> "Can Social Media Inform Corporate Decisions? Evidence from Merger
> Withdrawals." *The Journal of Finance* 81, no. 1 (February 2026): 91–142.
> DOI: 10.1111/jofi.13508. © 2025 the American Finance Association.
> All rights reserved. This page contains extracted findings only; no
> reproduction of the original text.
