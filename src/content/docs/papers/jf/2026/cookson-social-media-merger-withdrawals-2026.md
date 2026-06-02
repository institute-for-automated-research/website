---
title: "Can Social Media Inform Corporate Decisions: Cookson, Niessner & Schiller (2026)"
description: >-
  Distilled: abnormal StockTwits sentiment after a merger announcement
  predicts a 0.64 percentage point higher withdrawal probability (16.6% of
  the baseline rate), robust to market reactions, news, and analyst signals;
  the effect strengthens after firms register corporate Twitter accounts and
  is driven by fundamental rather than technical or meme tweets. J. Finance
  2026, paywalled. Eight core results with source locators, datasets used, the
  model, and the method with formal equations.
sidebar:
  label: Cookson-Niessner-Schiller 2026
  order: 1
tags: [paper-summary, mergers-and-acquisitions, social-media, text-as-data, corporate-decisions, fintech, panel-regression, event-study, peer-reviewed, unreplicated, data:wrds, data:stocktwits, data:sdc-platinum, data:ravenpack, data:ibes, data:ken-french]
paper:
  authors: J. Anthony Cookson, Marina Niessner, Christoph Schiller
  authorList:
    - { family: Cookson, given: "J. Anthony", affiliation: "University of Colorado Boulder, Leeds School of Business" }
    - { family: Niessner, given: Marina, affiliation: "Indiana University, Kelley School of Business" }
    - { family: Schiller, given: Christoph, affiliation: "Arizona State University, W.P. Carey School of Business" }
  year: 2026
  venue: The Journal of Finance 81(1), February 2026, 91–142
  venueShort: J. Finance 2026
  licenseShort: paywalled
  resultsCount: 8
  citedByCount: 4
  topics: ['Auditing, Earnings Management, Governance', 'Media Influence and Politics', 'Digital Marketing and Social Media']
  dataAccess: proprietary-confidential
  outcome:
    - merger withdrawal probability
    - acquirer buy-and-hold abnormal return post-announcement
  doi: 10.1111/jofi.13508
  license: 'Paywalled (confirmed via Crossref DOI metadata 2026-05-31: license[0] content-version=vor URL=http://onlinelibrary.wiley.com/termsAndConditions#vor delay-in-days=0 start=2025-11-25; license[1] content-version=tdm URL=http://doi.wiley.com/10.1002/tdm_license_1.1; no Creative Commons licence present; artifact cover: © 2025 the American Finance Association)'
  access: paywalled
  machineAccess: 'blocked-paywall (Wiley/J. Finance publisher site; confirmed via Crossref licence metadata 2026-05-31)'
  redistribution: extract-only

  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, event-study, text-classification]

  scope:
    region: US
    assetClass: US equities (M&A acquirers, public firms)
    period: 2010-01..2021-12
    frequency: daily

  relatesTo:
    - { cite: 'Luo (2005)', relation: builds-on, doi: 10.1111/j.1540-6261.2005.00755.x, note: 'baseline design for using market reactions to predict M&A withdrawal; paper extends it with social media signals' }
    - { cite: 'Bond, Edmans & Goldstein (2012)', relation: tests, doi: 10.1146/annurev-financial-110311-101826, note: 'tests the revelatory vs. forecasting price-efficiency distinction in the social media context' }
    - { cite: 'Bai, Philippon & Savov (2016)', relation: tests, doi: 10.1016/j.jfineco.2016.01.030, note: 'applies their revelatory price efficiency concept to social media sentiment instead of stock prices' }
    - { cite: 'Liu & McConnell (2013)', relation: builds-on, doi: 10.1016/j.jfineco.2013.04.008, note: 'parallel test using traditional news sentiment for M&A decisions; paper adds social media as a distinct, nonsubsumed channel' }
    - { cite: 'Ang et al. (2021)', relation: contradicts, note: 'Chinese message board study emphasizes governance channel; this US-sample paper finds no governance-channel pattern and instead supports revelatory learning' }

  openQuestions:
    - 'Whether the revelatory informativeness of social media extends beyond M&A decisions to other high-stakes corporate decisions such as SEOs, capital expenditure, or earnings guidance (p. 136).'
    - 'Whether similar social media effects operate in non-US markets with different financial development, language norms, and platform ecosystems (fn. 5, p. 96).'
    - 'Understanding how investors and firms will interact on social media as these platforms become more integrated into financial markets and information environments (p. 137).'

  replicationCode:
    status: available

  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 91–142 of the PDF on disk); all eight results extracted with table/figure/page locators from the PDF. Not human-verified. Not reproduced. CC licence absent; no PDF mirror in this batch per distiller instructions.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; verdict pass.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Augment pass. Added methods, scope, relatesTo, openQuestions, replicationCode,
        and proposedVocab frontmatter blocks, and the three formal body sections
        (Theory / model, Method, Empirical specifications) with equations (1)-(4)
        transcribed from the source PDF (pp. 103, 106, 118, 121). Replaced the prior
        "Theory tested" section. Core results table and Attribution block are unchanged
        from the verified version above. New formal sections are extracted, not yet
        re-verified by paper-verifier.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF for all
        8 core result rows; equations (1)-(4) checked term-by-term against pp. 103,
        106, 118, 121; all correct. No em-dashes or colorful adjectives found.
        No fixes required; verdict pass.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13508
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0] content-version=vor URL=http://onlinelibrary.wiley.com/termsAndConditions#vor delay-in-days=0 start=2025-11-25; license[1] content-version=tdm URL=http://doi.wiley.com/10.1002/tdm_license_1.1; no CC licence entry'
  rightsSignalConflict: false
---

**What this is.** The paper's core results, datasets, and formal specifications:
enough to know what it found and how without reading all 52 pages. To replicate
or extend it, access the original via the DOI:
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
| R1 | **Negative abnormal social media sentiment predicts merger withdrawal**, controlling for market reactions, news, and analyst signals | Table II Panel A, pp. 107–108 | beta = -0.643\*\*\* (col. 1, no controls) to -0.711\*\*\* (col. 6, full controls); 1-SD decrease in AbnSent associated with 0.64 pp higher withdrawal probability (16.6% of baseline 3.89%) |
| R2 | **StockTwits and Twitter sentiment each predict withdrawal independently** | Table II Panel B, pp. 107–108 | StockTwits col. (1): -0.706\*\*; Twitter (SMA) col. (2): -1.075\*\*\*; both significant when included jointly in col. (3) (StockTwits: -0.593\*\*, Twitter: -0.998\*\*\*) |
| R3 | **Effect is not driven by governance channel**: coefficients are similar for positive-CAR and negative-CAR deals | Figure 5, p. 111 | Estimated AbnSent coefficient indistinguishable across CAR < 0 and CAR >= 0 subsamples; governance-metric splits (ISS, board independence, antitakeover provisions) also yield no significant differences (Table IA.VI) |
| R4 | **Social media sentiment predicts market-favorable deal outcomes**: initial negative sentiment followed by withdrawal yields higher post-announcement BHARs | Table IV, p. 119 | Interaction AbnSent x 1(Deal Withdrawn): -0.101\*\* to -0.153\*\*\* across columns; withdrawal predicted by negative AbnSent associated with 10.09%–15.28% higher BHAR from day 11 to deal conclusion |
| R5 | **Effect strengthens after acquirer registers corporate Twitter account**, especially for high-follower or verified accounts | Table V, pp. 122–123 | AbnSent x Post(Twitter, HighFollow) col. (4): -0.956\*\*; AbnSent x Post(Twitter, Verified) col. (5): -1.301\*\*; coefficients on AbnSent alone (pre-Twitter) near zero and insignificant |
| R6 | **Effect is driven by fundamental investor tweets, not technical investor tweets** | Table VI Panel A, pp. 126–127 | Fundamental (non-technical) AbnSent: -1.105\*\*\* (col. 1); technical AbnSent: -0.350 (insignificant); result holds after adding media controls (col. 2): fundamental -1.080\*\*\*, technical -0.274 (insig.) |
| R7 | **Effect is driven by longer tweets and by M&A-relevant topics (Company/Business, Deal Terms, Disclosure), not by meme or trading tweets** | Table VI Panels A–B, pp. 126–127 | Long tweets: -1.214\*\*\* to -1.222\*\*\*; short tweets: -0.053 to +0.014 (insig.); Company/Business: -1.202\*\*\*; Deal-Terms: -1.139\*\*\*; Disclosure: -0.868\*\*; Meme: -0.280 (insig.); Technical: -0.487 (insig.) |
| R8 | **Effect is stronger when AbnSent disagrees with market and news signals, and when social media volume is higher** | Table VII, pp. 129, 130 | High N Tweets vs. low: -2.030\*\*\* vs. -0.516\* (coef. diff. t = 2.28, p = 0.023); split by social media vs. news disagreement drives the result; news-article-count split shows no statistically significant difference |

**Overall (paper's conclusion).** Building on the parallel test of traditional
news sentiment for M&A decisions in Liu and McConnell (2013), the paper adds
social media as a distinct channel. Social media sentiment contains
information about M&A deal outcomes that is not subsumed by market prices,
traditional media, or analyst signals. The evidence is consistent with a
revelatory channel: managers learn from social media, particularly after
engaging with the platform through a corporate Twitter account.

## Theory / model

The paper has no original structural model. It tests a conceptual distinction
introduced by Bond, Edmans, and Goldstein (2012) and Bai, Philippon, and Savov
(2016) between two channels of informativeness:

- **Revelatory**: social media reveals genuinely new information to the firm
  manager, analogous to revelatory price efficiency (RPE), where prices
  aggregate dispersed information that managers subsequently learn from.
- **Forecasting**: social media merely correlates with information the manager
  already has (market prices, analyst signals, news), providing no incremental
  input.

The key empirical test distinguishes these channels: under the revelatory channel
the predictive coefficient on $$\text{AbnSent}_i$$ is large and robust to controlling for
all other signals managers are known to rely on; it grows stronger after the firm
engages actively with social media (registering a corporate Twitter account); and
it weakens for deals where withdrawal cannot reflect manager learning (regulator-
or target-rejected deals). Under a pure forecasting channel these patterns would
not arise. Under a governance channel, predictability would be concentrated in
negative-CAR mergers and in firms with weaker governance, which is not observed.
Whereas the Chinese message board study of Ang et al. (2021) emphasizes the
governance channel, this US-sample paper finds no governance-channel pattern and
instead supports revelatory learning.

**Identification strategy.** The baseline design of using market reactions to
predict M&A withdrawal follows Luo (2005), which the paper extends by adding
social media signals. The paper exploits deal-level cross-sectional
variation in $$\text{AbnSent}_i$$ (eq. 1, p. 103), which is constructed as the
difference between announcement-window and pre-announcement-window sentiment,
removing firm-level baseline sentiment differences. The main specification
(eq. 2, p. 106) further controls for the acquirer CAR, traditional news
sentiment, analyst recommendations, deal characteristics, year-by-quarter time
fixed effects, and acquirer-industry fixed effects. Coefficient stability as
controls are added ($$R^2$$ rising from 0.001 to 0.216 with a stable beta, following
Oster (2019)) is the primary guard against omitted-variable concerns. The
Twitter-account timing test (eq. 4, p. 121) uses within-acquirer before/after
variation as an additional quasi-experimental design.

## Method

**Step 1: Constructing abnormal sentiment (equation 1, p. 103).**

$$
\text{AbnSent}_i = \left( \frac{1}{|J_{i,[0,3]}|} \sum_{j \in J_{i,[0,3]}} \text{Sentiment}_{i,j(t)} \right)
- \left( \frac{1}{|J_{i,[-13,-7]}|} \sum_{j \in J_{i,[-13,-7]}} \text{Sentiment}_{i,j(t)} \right)
\tag{1}
$$

- $$\text{Sentiment}_{i,j(t)}$$ is the sentiment of tweet $$j$$ about acquiring firm $$i$$ occurring $$t$$ days after the merger announcement date (day 0).
- $$J_{i,[t_1,t_2]}$$ is the set of tweets about firm $$i$$ between day $$t_1$$ and $$t_2$$.
- The first term averages sentiment over the four-day announcement window $$[0, 3]$$; the second term averages over a reference period $$[-13, -7]$$ (7 to 13 days prior to announcement), omitting the 6 days immediately before the announcement to address information leakage.
- The primary sentiment scores are from StockTwits' proprietary MarketLex classifier, bounded in $$[-1, 1]$$; robustness uses maximum entropy and naive Bayes classifiers trained on user-labelled bullish/bearish tags, and SMA Twitter sentiment bounded in $$[0, 1]$$.

**Step 2: Estimating abnormal sentiment in a text classifier.** To construct
alternative sentiment measures, a maximum entropy (MaxEnt) classifier and a
naive Bayes (Bayes) classifier are trained on StockTwits posts with user-provided
sentiment tags (bullish/bearish), following Antweiler and Frank (2004) and
Cookson and Niessner (2020). The classifiers assign a continuous sentiment
score to each tweet and are validated against held-out samples (Section I.A of
the Internet Appendix; cross-sample correlations 0.85-0.90, Table IA.I, p. 99
of the Internet Appendix).

**Step 3: Topic classification via Biterm Topic Model (BTM, p. 128).** To
decompose the social media signal into fundamental vs. meme/technical content,
the paper trains a BTM with eight topics on all tweets in the $$[0, 3]$$ window
around merger announcements, following Yan et al. (2013). Six topics are
retained: Company/Business, Disclosure, Deal Terms, Trading, Technical, and
Memes. Separate $$\text{AbnSent}$$ measures are constructed for each topic subset.

The method builds on `panel-regression` for the estimating equation, `event-study`
for the CAR controls, and `text-classification` for the sentiment and topic scores.

## Empirical specifications

**Baseline withdrawal regression (equation 2, p. 106, produces R1–R3).**

$$
\text{Deal\_Withdrawn}_i = \beta_1 \cdot \text{AbnSent}_i + \beta_2 \cdot \text{CAR}_i + \Gamma \cdot X_i
+ \alpha_t + \gamma_j + \epsilon_i
\tag{2}
$$

- $$\text{Deal\_Withdrawn}_i$$ is an indicator equal to 1 if M&A deal $$i$$ was subsequently withdrawn, multiplied by 100.
- $$\text{AbnSent}_i$$ is eq. (1) above, standardized to mean 0, SD 1.
- $$\text{CAR}_i$$ is the acquirer CAR[-1, 10] from the Fama-French three-factor model (100-day pre-event window, 10-day gap), also standardized.
- $$X_i$$ includes CAR[-5, -1], news sentiment (RavenPack ESS), analyst recommendation changes (IBES), deal value, pct. shares held, white-knight/competing-bidder/rumored/hostile deal indicators, termination fee, N tweets, N news articles, and acquirer firm size, leverage, cash.
- $$\alpha_t$$ = year-by-quarter fixed effects; $$\gamma_j$$ = acquirer industry (GIC 2-digit) fixed effects.
- Standard errors clustered at the year-by-quarter level. Sample: 5,932-6,306 deal-level observations (2010-2021).

**BHAR regression (equation 3, p. 118, produces R4).**

$$
\text{BHAR}_{i,[11, T_{\text{conclusion}}]} = \beta_1 \cdot \mathbf{1}(\text{Deal Withdrawn})_i + \beta_2 \cdot \text{AbnSent}_i
+ \beta_3 \cdot \mathbf{1}(\text{Deal Withdrawn})_i \times \text{AbnSent}_i
+ \Gamma \cdot X_i + \epsilon_i
\tag{3}
$$

- $$\text{BHAR}_{i,[11, T_{\text{conclusion}}]}$$ is the buy-and-hold abnormal return from day 11 after the merger announcement until deal conclusion (withdrawal or completion), using the Fama-French three-factor model.
- $$\mathbf{1}(\text{Deal Withdrawn})_i$$ equals 1 for withdrawn deals.
- The coefficient of interest is $$\beta_3$$ on the interaction: a negative $$\beta_3$$ means that initial negative social media reaction predicts the market eventually responds positively to a merger withdrawal.
- Industry (GIC2) and year-by-quarter fixed effects included. Standard errors clustered at year-by-quarter level.
- Sample restricted to deals with interim period > 25 days (and > 75 days for robustness) to avoid overlap with the announcement window; target-rejected deals excluded. N = 1,784-3,343 (Table IV, p. 119).

**Twitter-account timing test (equation 4, p. 121, produces R5).**

$$
\text{Deal\_Withdrawn}_i = \beta_1 \cdot \text{AbnSent}_i + \beta_2 \cdot \text{AbnSent}_i \times \text{Post}_{i,t}
+ \beta_3 \cdot \text{Post}_{i,t} + \Gamma \cdot X_i + \alpha_t + \gamma_j + \epsilon_i
\tag{4}
$$

- $$\text{Post}_{i,t}$$ equals 1 for acquisitions by firm $$i$$ announced after firm $$i$$ registered its corporate Twitter account.
- Columns vary whether any Twitter account counts (cols 1-2), whether the account must have an above-median follower count (cols 3-4), or whether it must be a verified account (cols 5-6).
- $$X_i$$ includes the same controls as eq. (2) including $$\text{CAR}_i$$.
- The identification relies on within-acquirer before/after variation in Twitter engagement.
- Sample: 5,932 observations with year-by-quarter and industry FE; acquirer FE added in cols 2, 4, 6 (Table V, pp. 122-123).

**Content heterogeneity regressions (Table VI, pp. 126-127, produces R6-R7).**
Variants of eq. (2) replacing the single $$\text{AbnSent}_i$$ with two simultaneous
signals: $$\text{AbnSent}_i(\text{Technical}=\text{N})$$ and $$\text{AbnSent}_i(\text{Technical}=\text{Y})$$ in Panel A
columns 1-2 (technical vs. fundamental traders); $$\text{AbnSent}_i(\text{Long}=\text{Y})$$ and
$$\text{AbnSent}_i(\text{Long}=\text{N})$$ in columns 3-4 (above-/below-median word count); and one
topic-specific $$\text{AbnSent}$$ per topic in Panel B (Company/Business, Deal Terms,
Disclosure, Meme, Technical, Trading). Same FE structure and clustering.

**Information-source heterogeneity regressions (Table VII, p. 129, produces R8).**
Variants of eq. (2) with sample split at median N Tweets (cols 1-2), N News
Articles (cols 3-4), and $$|\text{CAR}|$$ (cols 5-6); coefficient difference tested with
a Wald t-statistic.

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

Sample: 6,438 M&A announcements (6,187 completed, 251 withdrawn); acquirers are U.S. public firms; deal values >= $25M; 2010–2021.

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

This distillation was extracted by an LLM on 2026-05-31 and augmented on
2026-06-01; **not human-verified or independently reproduced**. Extract-only:
no PDF mirror is hosted here.

> Cookson, J. Anthony, Marina Niessner, and Christoph Schiller.
> "Can Social Media Inform Corporate Decisions? Evidence from Merger
> Withdrawals." *The Journal of Finance* 81, no. 1 (February 2026): 91–142.
> DOI: 10.1111/jofi.13508. © 2025 the American Finance Association.
> All rights reserved. This page contains extracted findings only; no
> reproduction of the original text.
