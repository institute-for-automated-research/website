---
title: "The Benefits of Access: Becht, Franks & Wagner (2026)"
description: >-
  Distilled: Using GPT-4 to parse 4,700 private meeting notes from a large
  active asset manager and its UK portfolio firms (2007-2015), the paper shows
  that meetings convey predominantly soft information that is associated with
  fund-manager trading, generates risk-adjusted outperformance of 180 bps/month
  for a combined FM+GS meeting portfolio, and in only 0.4% of cases involves
  material nonpublic information. J. Finance 2026, CC BY 4.0. Ten core results
  with source locators, datasets used, the identification strategy, and the
  estimating specifications.
sidebar:
  label: Becht-Franks-Wagner 2026
  order: 1
tags: [paper-summary, corporate-governance, institutional-investors, asset-pricing,
       text-as-data, panel-regression, event-study, open-access, cc-by, peer-reviewed,
       unreplicated, data:sli-private-meetings, data:ftse-all-share]
paper:
  authors: Marco Becht, Julian Franks, Hannes F. Wagner
  authorList:
    - { family: Becht, given: Marco, orcid: "0000-0002-2457-2586", affiliation: "Solvay Brussels School, Universite libre de Bruxelles, CEPR, and ECGI" }
    - { family: Franks, given: Julian, orcid: "0009-0000-1077-4294", affiliation: "London Business School and ECGI" }
    - { family: Wagner, given: Hannes F., orcid: "0000-0002-2813-7522", affiliation: "Bocconi University and ECGI" }
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 739-789
  venueShort: J. Finance 2026
  doi: 10.1111/jofi.13495
  topics: ['Financial Markets and Investment Strategies', 'Corporate Finance and Governance', 'Auditing, Earnings Management, Governance']
  dataAccess: proprietary-confidential
  outcome:
    - daily fund trading response around private meetings
    - probability of buy or sell trade following a meeting
    - risk-adjusted portfolio return (alpha) from meeting-informed trades
  license: >-
    CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor,
    URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0,
    start 2026-02-22; corroborated by artifact p.739 open-access notice)
  licenseShort: CC BY 4.0
  access: open
  machineAccess: >-
    blocked-paywall (Wiley site wrapper; CC-BY VOR licence confirmed in
    Crossref DOI metadata 2026-06-01)
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 10
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, event-study, text-classification, llm-text-classification, fama-macbeth]
  scope:
    region: UK
    assetClass: UK equities (FTSE All-Share)
    period: 2007-01..2015-12
    frequency: daily
  relatesTo:
    - { cite: 'Bradley, Jame & Williams (2022)', doi: '10.1111/jofi.13096', relation: builds-on, note: 'follows their methodology for constructing long-short meeting portfolios; extends it with actual meeting notes and daily trade data' }
    - { cite: 'Bushee, Gerakos & Lee (2018)', doi: '10.1016/j.jacceco.2018.06.001', relation: tests, note: 'compares trading response magnitude; finds estimates ~7x larger than their corporate-jet-visit evidence due to daily (vs inferred) data' }
    - { cite: 'Liberti & Petersen (2019)', doi: '10.1093/rcfs/cfz010', relation: builds-on, note: 'adopts their definition of hard vs soft information to classify meeting content via LLM' }
    - { cite: 'Becht, Franks, Mayer & Rossi (2009)', doi: '10.1093/rfs/hhn080', relation: extends, note: 'prior study of the same asset manager using Hermes UK fund activism; this paper uses SLI/abrdn proprietary meeting notes' }
  openQuestions:
    - 'The paper does not examine the outcomes of firm-level engagements, i.e., whether private meetings improve portfolio firm share prices or governance, which would benefit all shareholders (pp. 782-783).'
    - 'External validity: results are based on one asset manager (SLI); the strict UK regulatory environment may not generalise to less regulated markets such as the United States (pp. 744-745).'
    - 'Whether the distinction between hard and soft information will blur as generative AI advances, potentially making all soft information as tradeable as hard information (p. 782).'
    - 'Meeting notes may not capture the full conversation; transcripts or recordings could be sanitised or communication could be nonverbal (p. 775).'
  replicationCode:
    status: available
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: >-
        Full text read (pp. 739-789 plus appendix variable definitions);
        ten results extracted from the CC-BY PDF. Not human-verified.
        Not reproduced. Replication code is referenced in the paper
        (Supporting Information) but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF;
        nine of ten rows confirmed exactly; R8 All LS significance corrected
        from *** to ** (Table XI Panel A col.(3) shows 1.802** not 1.802***);
        equation (1) transcription and four-factor portfolio spec confirmed correct;
        no em-dashes or colorful adjectives found.
  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.13495
      checked: 2026-06-01
      by: paper-distiller (claude-sonnet-4-6)
      found: >-
        license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/,
        delay-in-days=0, start=2026-02-22
  rightsSignalConflict: false
  proposedVocab:
    - { axis: topic, term: institutional-investor-engagement, def: "Research on private meetings, engagements, and stewardship activities between asset managers and portfolio firms.", aliases: [private-meetings, investor-engagement, stewardship] }
---

**What this is.** The paper's core results, identification strategy, and estimating equations for how private meetings between an active asset manager and its UK portfolio firms affect trading: enough to know what was found and how, without reading all 51 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1111/jofi.13495).

## TL;DR

Using proprietary data from Standard Life Investments (SLI, the UK's largest active asset manager in 2015), the paper analyses 4,700 private meetings between the asset manager's fund managers (FMs) and governance specialists (GSs) and their FTSE All-Share portfolio firms over 2007-2015. GPT-4 is used to classify the information content of detailed meeting notes. The paper finds that meetings convey predominantly soft information (about management quality, strategy, and culture) rather than hard financial metrics, that this soft information is associated with fund-manager trading, and that meeting-informed portfolios generate risk-adjusted outperformance of about 180 basis points per month. Only 0.4% of meetings contain material nonpublic information (MNPI), and possession of MNPI is associated with no trading.

## Core results

Magnitudes and significance as reported; `\*\*\*`/`\*\*`/`\*` = 1%/5%/10%. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **FM meetings trigger significant net buying**: funds increase positions by 3.2% per day in the [0,5]-day window around FM meetings | Table IV, Panel A, col.(1), p. 761 | FM_{0,5} coeff. = 3.197\*\*\* [0.660] |
| R2 | **GS meetings trigger significant net selling**: funds decrease positions by 2.3% per day in the same window | Table IV, Panel A, col.(1), p. 761 | GS_{0,5} coeff. = -2.272\*\*\* [0.727] |
| R3 | **Soft information drives both trading directions**: above-median soft FM meetings cause 1.8% net buying; above-median soft GS meetings cause 2.6% net selling; hard-information FM meetings cause larger buys of 7.5% | Table V, col.(1), pp. 764-766 | FM Soft_{0.5}(>=x-bar) = 1.810\*\*\* [0.772]; FM Hard_{0.5}(>=x-bar) = 7.526\*\*\* [1.373]; GS Soft_{0.5}(>=x-bar) = -2.566\*\*\* [0.827] |
| R4 | **High-quality FM meetings are associated with the strongest buy trades**: high-rating meetings generate 9.5% net position increase per day; low-rating meetings generate net selling of 5.5% | Table VIII, Panel A, col.(1), p. 771 | FM High Rating_{0,5} = 9.466\*\*\* [1.585]; FM Low Rating_{0,5} = -5.485\*\*\* [1.729] |
| R5 | **Consensus about meeting information is required to trade**: consensus FM meetings cause 3.4% net buying; no-consensus meetings do not trigger significant aggregate trading | Table IX, col.(1), p. 773 | FM Cons_{0,5} = 3.412\*\*\* [0.890]; FM No Consensus_{0,5} = 0.123 (n.s.) [1.801] |
| R6 | **Analyst upgrades combined with consensus generate the largest buy response** (15.5% per day); downgrades with consensus generate the largest sell response (-19.2% per day) | Table IX, col.(4), p. 773 | Upgrade_{0,5} x Consensus_{-30,0} = 15.48\*\*\* [3.983]; Downgrade_{0,5} x Consensus_{-30,0} = -19.15\*\*\* [2.871] |
| R7 | **Only 0.4% of meetings discuss MNPI; possession of MNPI is associated with no trading** | Figure 5; p. 775 | 17 of 4,700 meetings flagged as MNPI after manual review; all event-time coefficients around MNPI meetings are statistically indistinguishable from zero |
| R8 | **FM meeting long-short portfolio alpha is 198 bps/month**; GS meeting alpha is 83 bps/month (insignificant); combined all-meetings alpha is 180 bps/month | Table XI, Panel A, cols.(1)-(3), p. 778 | FM LS: Constant = 1.983\*\* (0.695); GS LS: 0.828 (n.s.) (0.495); All LS: 1.802\*\* (0.610); No-meeting LS: 0.493\*\*\* (0.105) |
| R9 | **Money made per position from active FM trading is 19 bps (fast) or 6 bps (slow)** in the [0,5]-day window; GS meetings generate 7 bps (fast) or -1 bps (slow) | Table XI, Panel B, p. 779 | FM: 19 bps fast / 6 bps slow; GS: 7 / -1 bps; All meetings: 15 / 4 bps |
| R10 | **FM meeting cumulative market-adjusted long-short return reaches 213 bps over 20 trading days and 314 bps over 40 trading days** after the meeting; GS meetings generate 121 bps / 128 bps; No-meeting stocks generate 30 / 52 bps | Figure 6, p. 780 | FM Meeting LS: 213 bps (day 20), 314 bps (day 40); GS Meeting LS: 121 / 128 bps; No Meeting LS: 30 / 52 bps |

**Overall (paper's conclusion).** Private meetings between active asset managers and portfolio firms convey predominantly soft information that significantly influences fund manager trading decisions and generates risk-adjusted outperformance. The information advantage from private access is based on soft, not material nonpublic, information. The paper informs the regulatory debate on the balance between transparency and the value of private, candid interactions between asset managers and portfolio firms.

## Theory / model

The paper has no formal structural model. It tests four interconnected hypotheses about the information economics of private meetings:

1. **Information content**: meetings convey soft information (non-quantitative, requiring interpretation) rather than hard information (quantitative, self-evident). The LLM-based classification following Liberti and Petersen (2019) operationalises this distinction.
2. **Trading response**: soft information obtained in FM meetings should generate buying (FM meetings are interpreted as positive on average), while GS meetings focusing on ESG governance risks should generate selling.
3. **MNPI absence**: if meetings convey material nonpublic information, funds should not trade at the time of those meetings (UK "parity of information" law prohibits trading while in possession of MNPI). The LLM is used to test whether MNPI meetings are associated with zero trading.
4. **Performance**: meeting-informed trades should earn positive risk-adjusted returns if private access provides an information advantage.

**Identification.** The key empirical challenge is that meetings may not cause trading; they may instead proxy for pre-existing concerns shared between FMs and GSs. The event-time plots (Figure 3, p. 763) address this: for FM meetings, trading spikes only on the meeting day, supporting a meeting-driven interpretation. For GS meetings, elevated trading precedes the meeting, consistent with shared concerns driving both the GS engagement and earlier FM trading. Meetings are timed relative to earnings announcements: FM meetings occur systematically after earnings reports (Figure IA.3), deliberately avoiding insider-information risk. GS meetings are scheduled independently of earnings dates (p. 758).

## Method

The paper combines three methodological building blocks, each with its own specification:

**LLM text classification.** Meeting notes (up to 2,200 words) are parsed using OpenAI's GPT-4 Turbo, GPT-4, and GPT-4o via the API. Separate prompts (reported in the Internet Appendix) instruct the model to act as a finance expert and assess: (i) the fraction of hard vs soft information in each note; (ii) the subject focus of soft information (firm, industry, market); (iii) the probability that a note discusses MNPI on a five-point Likert scale; and (iv) for FM notes with a "Conclusion" section, a no-consensus likelihood score. This builds on `text-classification` and `llm-text-classification` (proposed vocab). The LLM assessment of hard/soft information is validated against human-labelled random samples and representative quote examples (Table II).

**Panel regression (baseline trading).** The main estimating equation (p. 760, equation 1) is:

$$
\text{Trade}_{ijt} = \alpha + \beta' X_{it} + \gamma' Y_{ijt} + \Lambda + e_{ijt}
$$

- $$\text{Trade}_{ijt}$$ = daily % change in shares of company i held by fund j on day t (or a 0/1 indicator for sell/buy trade)
- $$X_{it}$$ = meeting indicators $$\text{FM}_{0,5}$$, $$\text{GS}_{0,5}$$ (= 1 if meeting in [0,5]-day window)
- $$Y_{ijt}$$ = controls: Ln(Shrout), Stake Held, Day Return
- $$\Lambda$$ = stock fixed effects + date fixed effects
- SE = clustered at fund and trading-day level
- Sample = 2007-2015, FTSE All-Share; restricted to positions with at least one FM meeting, at least one GS meeting, and at least one nonzero trade during the sample period

For the soft/hard information split (Table V), $$X_{it}$$ is replaced by $$\text{FM Soft}_{0,5}(\geq \bar{x})$$, $$\text{FM Hard}_{0,5}(\geq \bar{x})$$, $$\text{GS Soft}_{0,5}(\geq \bar{x})$$, and $$\text{GS Hard}_{0,5}(\geq \bar{x})$$, where $$\bar{x}$$ is the sample median LLM-assessed soft-information share. An alternative split at 50% is also used.

**Calendar-time portfolio performance (Table XI).** Monthly time-series Fama-MacBeth-style regressions on long-short portfolios:

$$
R^{\text{LS}}_{t} = \text{Constant} + \beta (\text{Mkt-Rf})_t + s\,\text{SMB}_t + h\,\text{HML}_t + u\,\text{UMD}_t + \varepsilon_t
$$

- $$R^{\text{LS}}_{t}$$ = monthly return on a long-short portfolio; Long: top tercile of buy-trade stocks after meeting day; Short: bottom tercile of sell-trade stocks after meeting day; Portfolios rebalanced daily; monthly returns compounded
- Factors = Fama-French (1993) + Carhart (1997) momentum, UK version from Gregory, Tharayan & Christidis (2013)
- $$\text{Constant}$$ = risk-adjusted alpha in % per month
- SE = robust standard errors; N = 108 monthly observations

## Empirical specifications

**Baseline meetings-and-trading (Table IV, Panel A).** The sample is the full unbalanced panel of fund-stock-day positions, 2007-2015 (N = 10,436,084 for the full-sample columns; 240,058 for the trades-only column). All specifications include stock and date fixed effects; standard errors are clustered at fund and trading-day level. Columns (1)-(2) use $$\text{Trade}$$ (net % change in shares) as the dependent variable; columns (3)-(4) use linear probability models for $$P(\text{Sell Trade})$$ and $$P(\text{Buy Trade})$$. Results are robust to longer [6,20]-day windows (Panel B).

**Soft and hard information by meeting type (Table V).** Same specification as Table IV but with meeting-type indicators split by LLM-assessed soft/hard content above and below the sample median. Separately estimated for FM and GS meetings. N = 240,058 (trades) and 10,450,063 (full panel).

**Meeting quality and sentiment (Table VIII, Panel A).** FM meetings are split by the analyst's human-assigned quality rating (Low 1-2, Average 3, High 4-5) and by the ratio of negative to positive words using the Loughran-McDonald (2011) dictionary (Neg Tone: ratio > 0.5; Pos Tone: ratio <= 0.5). Each indicator interacted with the [0,5]-day meeting window.

**Consensus and recommendation changes (Table IX).** For consensus, meeting notes are redacted of any recommendation language, then the LLM assesses the no-consensus likelihood. The interaction $$\text{Upgrade}_{0,5} \times \text{Consensus}_{-30,0}$$ combines a recommendation upgrade within [0,5] days with an FM meeting assessed as leading to consensus within the prior 30 trading days. Standard errors clustered at fund and trading-day level; stock and date fixed effects.

**MNPI event-time analysis (Figure 5, p. 777).** For the 17 confirmed MNPI meetings, event-time coefficients of the Table IV Panel A specification are estimated with event indicators from t-5 to t+5 around the MNPI meeting date. The dependent variable is the daily % change in shares held; no coefficient is statistically significant.

**Long-short portfolio performance (Table XI, Panel A).** Monthly OLS of long-short portfolio returns on the four-factor model. Long portfolio includes stocks with FM (or GS or both) meeting within 20 trading days in the top tercile of aggregate net buy trades on that day; short portfolio includes stocks in the bottom tercile of sell trades. Portfolios containing fewer than three stocks are replaced with the market return. N = 108 months (2007-2015).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| SLI private meeting notes (Standard Life Investments / abrdn) | 4,700 meeting notes (3,410 FM + 1,285 GS) with detailed text, attendee info, analyst ratings; the core proprietary dataset | No page yet |
| SLI fund holdings and daily trades | Daily fund-level positions and trades across ~40-50 funds covering FTSE All-Share stocks, 2007-2015 (10.45 million fund-stock-day observations) | No page yet |
| FTSE All-Share Index constituents and daily returns | Universe of eligible stocks, market capitalisation, daily return; used as controls and to define the sample universe | No page yet |
| SLI analyst recommendations | Internal Buy/Hold/Sell recommendations and recommendation changes (upgrades/downgrades) | No page yet |
| Loughran-McDonald (2011) financial dictionary | Positive and negative word lists for meeting-note tone measurement | No page yet |
| Fama-French + Carhart UK factors | Monthly size, value, and momentum factors for the UK, from Gregory, Tharayan & Christidis (2013); used for portfolio alpha estimation | No page yet |
| OpenAI GPT-4 Turbo/GPT-4/GPT-4o API | LLM text classification of meeting notes for soft/hard information content, MNPI likelihood, and consensus assessment | No page yet |

Sample: January 2007 to December 2015 (nine years). Universe: FTSE All-Share Index (353-703 firms at any given time). Meetings cover firms held at any point across 40-50 UK Equities Desk funds.

## When to read the full paper

Use the [original](https://doi.org/10.1111/jofi.13495) if you are: studying the regulatory economics of private meetings between institutional investors and portfolio firms; building LLM-based classification of investment research or meeting content; examining whether active asset manager stewardship generates trading advantages; or investigating the empirical distinction between soft and hard information in financial markets. The Internet Appendix contains all LLM prompts, detailed data construction steps, and a timeline of individual firm meetings (Figure IA.2).

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2). This distillation was extracted by an LLM on 2026-06-01 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Becht, Marco, Julian Franks, and Hannes F. Wagner.
> "The Benefits of Access: Evidence from Private Meetings with Portfolio Firms."
> *The Journal of Finance* 81, no. 2 (April 2026): 739-789.
> DOI: 10.1111/jofi.13495. (C) 2026 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
