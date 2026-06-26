---
title: "Insider Trading with Options: Vacca (2026)"
description: >-
  Distilled: Using Finnish securities registry data (1995-2014), Vacca (2026)
  documents that rank-and-file employees' open-market purchases of own-company
  call options predict weekly excess stock returns of approximately 60 basis
  points, peaking before earnings announcements and extending to supply-chain
  partners. Journal of Corporate Finance 98 (2026) 102963, CC BY 4.0. Seven
  core results with source locators, datasets used, and the identification
  strategy.
sidebar:
  label: Vacca 2026
  order: 1
tags: [paper-summary, insider-trading, options-trading, information-asymmetry,
       corporate-finance, panel-regression, event-study, logit-regression,
       open-access, cc-by, peer-reviewed, unreplicated,
       data:euroclear-finland, data:alexander-incentives]
paper:
  authors: Matteo Vacca
  authorList:
    - { family: Vacca, given: Matteo, affiliation: Hanken School of Economics }
  year: 2026
  venue: Journal of Corporate Finance, vol. 98 (2026) 102963
  venueShort: J. Corp. Finance 2026
  doi: 10.1016/j.jcorpfin.2026.102963
  tier: field
  jel:
    codes: [G14, G11, M41]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Auditing, Earnings Management, Governance", "Corporate Finance and Governance", "Financial Markets and Investment Strategies"]
  dataAccess: proprietary-confidential
  outcome:
    - market-adjusted weekly stock returns after employee own-company call option purchases
    - probability of employee open-market purchase of own-company call options
  outcomeClass: [security-returns]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2026-01-22; corroborated by artifact p. 1 CC BY license notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access CC-BY VOR; PDF accessible via DOI on Elsevier publisher site (checked 2026-06-26)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 7
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, event-study, logit-regression]
    identification: descriptive
  contributionType: [new-fact]
  mechanisms: [information-asymmetry]
  scope:
    region: Finland
    assetClass: Finnish listed equities (single-name listed options and warrants)
    period: 1995-01..2014-12
    frequency: daily
    dataType: [administrative, market]
    granularity: [individual, transaction]
    n: "4,091 own-company call option purchases by 890 employees at 43 firms (current employees); 9,608 tippee trades from 783 anonymous informed accounts"
  findings:
    - { ref: R1, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: return-spread, value: "0.59 ppts (own-company avg 0.64%, N=4,091; unrelated firm avg 0.04%, N=3,250), p=0.000", direction: positive, vsBenchmark: "unrelated firm option purchases by same employees" }
    - { ref: R2, outcome: market-adjusted weekly stock returns after rank-and-file employee own-company call option purchases, metric: return-spread, value: "0.81 ppts (own-company 0.71%, N=3,413; unrelated -0.10%, N=2,587), p=0.000", direction: positive, vsBenchmark: "unrelated firm option purchases by same rank-and-file employees" }
    - { ref: R3, outcome: market-adjusted weekly stock returns on own-company purchases before earnings announcements, metric: basis-points, value: "~150 bps in the week [-5,-1] preceding announcement; near zero in windows far from announcement date", direction: positive }
    - { ref: R4, outcome: market-adjusted weekly stock returns after former employee call option purchases, metric: return-spread, value: "former employees -0.11% (N=2,275); current employees 0.64% (N=4,091); difference 0.76***, p=0.000", direction: none, vsBenchmark: "current employees (former earn 0.76 ppts less; former returns indistinguishable from zero)" }
    - { ref: R5, outcome: market-adjusted weekly stock returns by Nokia supply-chain employees on Nokia options, metric: return-spread, value: "0.43 ppts (Nokia cluster employee avg 0.58%, N=1,260 vs. employees at other firms 0.15%, N=1,767), p=0.019", direction: positive, vsBenchmark: "employees at non-Nokia cluster firms trading Nokia options" }
    - { ref: R6, outcome: market-adjusted weekly stock returns on identified tippee option purchases, metric: basis-points, value: "0.83*** (correlated employee+tippee trades, N=3,187); 0.59*** (tippee-only trades, N=6,421)", direction: positive }
    - { ref: R7, outcome: daily retail option buy count around employee own-company trades, metric: coefficient, value: "10.88** (t=2.26), stock + day FE; 10.01** (t=2.16), option + day FE (Retail buy count)", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Green, Huang, Wen & Zhou (2019)", doi: '10.1016/j.jfineco.2019.03.012', relation: builds-on, note: "builds on their evidence that employees hold price-relevant private information about employers; extends the finding to direct option market exploitation" }
    - { cite: "Augustin, Brenner & Subrahmanyam (2019)", doi: '10.1287/mnsc.2018.3122', relation: extends, note: "extends their evidence of informed options trading before takeover announcements to recurring earnings-driven information for rank-and-file employees" }
    - { cite: "Pan and Poteshman (2006)", doi: '10.1093/rfs/hhj024', relation: builds-on, note: "applies their option-demand informativeness framework to identify price-relevant employee trades from signed option volume" }
    - { cite: "Black (1975)", doi: '10.2469/faj.v31.n4.36', relation: builds-on, note: "motivated by their argument that informed investors prefer options for embedded leverage; employees trade own-company options at 5-8x the rate of own-company stocks" }
    - { cite: "Deuskar, Khatri & Subrahmanyam (2025)", doi: '10.1287/mnsc.2022.02907', relation: cites, note: "cites their evidence of supply-chain insider trading by primary insiders as motivation for examining the Nokia cluster" }
  openQuestions:
    - "Whether the patterns extend to jurisdictions with different disclosure rules and enforcement levels; Finland's strong enforcement may make the sample unusual (p. 3; conclusion p. 19)."
    - "The employment-identification procedure captures only short, clearly observable employment stints; estimates are a lower bound on the true prevalence and magnitude of informed employee option trading (p. 4, Section 1.2)."
    - "The full scale of tipping networks is unknown; correlated-trading detection yields a lower bound of approximately 4% of retail option activity, but true information transmission is likely higher (Section 4.3, pp. 15-16)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text read (pp. 1-21 main body plus references and appendix descriptions); seven results extracted from PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 7 Core results rows confirmed correct; both equations verified term-by-term; removed introducesData: true and new-data from contributionType (paper uses existing Euroclear Finland and Alexander Incentives sources, not a new introduction)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1016/j.jcorpfin.2026.102963", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2026-01-22" }
---

**What this is.** The paper's core results, the datasets, and the identification
strategy: enough to assess the scope of informed employee option trading and its
channels, without reading all 21 pages. To replicate or extend, read the full
source at the [original](https://doi.org/10.1016/j.jcorpfin.2026.102963).

## TL;DR

Using daily securities registry data from Euroclear Finland (January 1995 to
December 2014), Vacca (2026) documents that open-market purchases of own-company
call options by employees predict positive subsequent stock returns on short
horizons. The average market-adjusted weekly (five-day) return after an employee
buys own-company options is 64 basis points, compared with approximately zero for
purchases of options written on unrelated firms. Rank-and-file employees (below
the level of manager or primary insider) account for the vast majority of
own-company option purchases and their trades are the most informative, with a
spread of 81 basis points versus unrelated firm purchases. Consistent with the
argument of Black (1975) that informed investors prefer options for their embedded
leverage, employees trade own-company options at five to eight times the rate they
trade own-company stocks. The predictability concentrates before earnings
announcements (approximately 150 basis points in the preceding week), extends to
Nokia supply-chain partner stocks, and disappears entirely for former employees
(a key falsification). The paper also uncovers a tipping channel: anonymous
retail accounts that co-trade with employees earn similarly informed returns.

## Core results

All returns are market-adjusted weekly (five-day) returns, reported multiplied by
100 so that 0.64 = 64 basis points. Standard errors are clustered at the
stock-trade date level. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Own-company call option purchases by employees predict positive weekly stock returns; purchases of options on unrelated firms do not | Table 2, Panel A, p. 7 | Own-company avg = 0.64% (N=4,091); unrelated firm avg = 0.04% (N=3,250); difference = 0.59\*\*\*, p=0.000 |
| R2 | Rank-and-file employees drive the predictability; their own-company trades are more informative than those of higher-ranked employees | Table 2, Panel B, p. 7; Fig. 2, p. 7 | Rank-and-file own-company avg = 0.71% (N=3,413); unrelated = -0.10% (N=2,587); difference = 0.81\*\*\*, p=0.000 |
| R3 | Own-company option purchases in the week before earnings announcements are more informative than purchases at other times | Fig. 4, p. 9; text p. 8 | ~150 bps (annualized ~120%) for buys in window [-5,-1] before announcement; near zero in windows far from announcement date; 281 of 332 pre-announcement trades are by rank-and-file employees |
| R4 | Former employees' option purchases do not predict positive returns (falsification of the information-advantage story) | Table 3, Panel A, p. 13 | Former employees avg = -0.11% (N=2,275); current employees avg = 0.64% (N=4,091); difference = 0.76\*\*\*, p=0.000 |
| R5 | Employees at Nokia customer and supplier firms earn informed returns by trading Nokia options (supply-chain channel) | Table 4, Panel A, p. 14 | Nokia cluster employees avg = 0.58% (N=1,260); employees at other firms = 0.15% (N=1,767); difference = 0.43\*\*, p=0.019 |
| R6 | Tipping identified: anonymous retail accounts that co-trade with employees are also informed | Table 5, Panels B-C, p. 15 | Correlated (employee + tippee same day) avg = 0.83\*\*\* (N=3,187); tippee-only avg = 0.59\*\*\* (N=6,421); 783 anonymous informed accounts detected |
| R7 | Employee own-company option activity is associated with contemporaneous increases in retail option buying | Table 6, col. (1)-(2), p. 17 | Employee activity indicator coefficient = 10.88\*\* (t=2.26) on daily retail buy count (stock + day FE); 10.01\*\* (t=2.16) with option + day FE; positive also on log retail buy volume |

**Overall (paper's conclusion).** Between 3% and 9% of all retail demand in the
Finnish market for single-name equity derivatives can be attributed to employees
who likely have an information advantage; accounting for tipping raises this to
over 15% of retail investors and 10% of open-market option purchases. Rank-and-file
employees, not primary insiders or managers, are the primary source of informed
retail option trading. The evidence points to a disclosure gap: most informed
trading by employees goes undetected because rank-and-file employees face no
mandatory disclosure requirements.

## Theory / model

The paper has no formal theoretical model. It tests an information-advantage
hypothesis using the following chain of predictions.

**Theoretical foundation.** Black (1975) argues that informed investors prefer
options over stocks because of embedded leverage, which amplifies the return to
private information for a given capital outlay. If rank-and-file employees hold
private, price-relevant information about their employer, they should trade
own-company options at a higher rate relative to stocks than uninformed investors
do. The data confirm this: employees' share of Finnish retail option demand is
5 to 8 times their share of retail stock demand (Fig. 7, p. 12).

**Employee information.** Green, Huang, Wen and Zhou (2019) show that crowdsourced
employee reviews contain price-relevant information about firms, establishing that
employees hold private knowledge that reaches beyond their immediate job function.
Augustin, Brenner and Subrahmanyam (2019) document that informed options trading
occurs before corporate events such as takeovers. This paper extends both lines of
evidence by examining whether rank-and-file employees also trade on private
information through option purchases, not only around extraordinary events but
also as a recurring pattern around earnings announcements.

**Identification hypotheses.** The paper tests the information-advantage story
against the following predictions:

1. Own-company option purchases by current employees should predict positive
   short-horizon stock returns; purchases on unrelated stocks should not (R1, R2).
2. Predictability should peak immediately before earnings announcements, when
   private information about upcoming news is most valuable (R3).
3. Information advantage derives from active employment; former employees should
   lose access to current firm-specific information, so their trades should not
   predict returns (R4, falsification).
4. Economic linkages can transmit inside information to supply-chain partners.
   Prior studies find that primary insiders trade derivatives of supply-chain
   partners to circumvent own-company restrictions (Deuskar, Khatri and
   Subrahmanyam 2025). Rank-and-file employees at Nokia's customer and supplier
   firms should also exploit this channel (R5).
5. Employees may share private information with family members or acquaintances
   (tipping); correlated trading between employee and anonymous accounts should
   also be informed (R6).

Following Pan and Poteshman (2006), who link signed option demand to subsequent
stock price movements, this paper uses short-horizon market-adjusted returns as
the primary measure of option-trade informativeness.

## Method

The paper uses three main empirical tools.

**Return measurement.** For each employee trade on stock $j$ at trade date $t$,
the raw return over event window $\tau$ (expressed in trading days) is (p. 5):

$$
\text{Return}_{j,t} = \frac{P_{j,t+\tau} - P_{j,t}}{P_{j,t}} \tag{1}
$$

Market-adjusted returns subtract the contemporaneous market return, following the
approach of Brown and Warner (1985). Standard errors are clustered at the
stock-trade date level throughout; main results are robust to clustering by
stock-month or two-way clustering by stock and trade date.

**Tipping identification.** The procedure (Appendix C) identifies pairs $$(a, i)$$
where $$a$$ is an anonymous retail account and $$i$$ is a current employee at firm
$$j$$, such that $$a$$ buys call options on $$j$$ on the same day as $$i$$, with this
co-occurrence repeated at least $$k = 2$$ times and constituting a significant
fraction ($$p = 0.1$$) of $$a$$'s total own-company option activity during $$i$$'s
employment tenure. Very active traders are excluded to avoid false positives.

**Logit for option purchase decision.** The determinants of own-company option
purchasing are estimated by a logit model (Table 7, p. 18) with binary outcome
equal to 1 if employee $$i$$ at firm $$j$$ purchases at least one own-company call
option in month $$m$$. Regressors cover four domains: risk preferences (Female,
recent large portfolio losses/gains), probability of detection (Primary insider
status, which requires mandatory disclosure), habit (number of own-company option
buys in the prior year), and financial market familiarity (prior stock and option
trading activity, portfolio size). Standard errors are two-way clustered at the
employee and firm-month level.

## Empirical specifications

**Main return comparisons (R1, R2, R4).** For each employee-level option purchase,
the paper computes the one-week market-adjusted return on the underlying stock.
The primary comparison is between own-company and unrelated firm option purchases
by the same pool of employees (Table 2), tested via a t-test with standard errors
clustered at the stock-trade date level. The comparison is repeated separately for
rank-and-file employees vs. higher-ranked employees (Fig. 2) and for current vs.
former employees (Table 3). All returns multiplied by 100.

**Earnings-window event study (R3).** Employee option purchases are sorted by
calendar distance to the next earnings announcement date. Average market-adjusted
weekly returns following purchases in each window ([-21,-6], [-5,-1], [0], [1,5],
[6,21] relative to the announcement) are compared between own-company purchases and
purchases on other firms (Fig. 4, p. 9). Purchases in the five-day pre-announcement
window are further stratified by the sign and magnitude of standardized unexpected
earnings (SUE = realized EPS minus EPS from four quarters ago, scaled by the
eight-quarter rolling standard deviation) to separate event-timing from
earnings-surprise components (Fig. 5, p. 10).

**Supply-chain analysis (R5).** For the Nokia cluster, the sample is restricted to
purchases of Nokia call options by non-Nokia employees at identified customer and
supplier firms (111 employees, 1,260 purchases). Average weekly returns are compared
against returns after Nokia option purchases by employees at non-Nokia cluster firms
(Table 4, p. 14). Appendix Table F6 adds firm-year fixed effects to control for the
amount of private information available at a given firm in a given year.

**Retail response regression (R7).** The contemporaneous link between employee
activity and broader retail demand is estimated by (Eq. 1, p. 16):

$$
Y_{o,t} = \alpha + \beta X_{o,t} + \gamma_s + \delta_t + \varepsilon_{o,t} \tag{2}
$$

where $$o$$ indexes an option written on underlying stock $$s$$ on trading day $$t$$;
$$Y_{o,t}$$ is the daily retail buy count (or log retail buy volume) excluding
own-company employee trades; $$X_{o,t}$$ is the Employee activity indicator, equal to
1 if at least one own-company option purchase occurs on day $$t$$; $$\gamma_s$$ is
an underlying stock fixed effect (or option fixed effect in column 2); and
$$\delta_t$$ is a day fixed effect. Standard errors are two-way clustered at the
underlying stock and month level (Table 6, N = 106,519 option-day observations).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Euroclear Finland (securities registry) | Daily records of all Finnish securities holdings and changes, Jan 1995-Dec 2014; source of all option and stock trades; granular trade-type identifier separates open-market purchases from other transaction types | No page yet |
| Alexander Incentives (executive compensation data) | Information on hundreds of employee and executive stock option plans issued by Finnish firms; provides employment-relationship identification for over 40,000 individuals; used to classify each individual as primary insider, manager, or rank-and-file employee | No page yet |

Sample: January 1995 to December 2014; 43 Finnish firms with employee option
trading observed; 890 current employees making 4,091 own-company call option
purchases. Nokia supply-chain sub-sample: 111 employees at 7 Nokia customer and
supplier firms making 1,260 Nokia option purchases.

## When to read the full paper

Use the [original](https://doi.org/10.1016/j.jcorpfin.2026.102963) if you are:
studying the legal and institutional setting for employee options trading in Finland
(Section 1.1 and Appendix A); examining robustness by derivative type (listed
options vs. warrants, Appendix D) or by employer firm (Appendix E); seeking the
detail of the tipping-identification algorithm (Appendix C); extending the analysis
to non-earnings information events (Section 2.3, Fig. 6); or reviewing the logit
analysis of determinants of option purchasing (Table 7, Section 6).

## Attribution and rights

Source: peer-reviewed, *Journal of Corporate Finance* 98 (2026) 102963. This
distillation was extracted by an LLM on 2026-06-26 and is **not human-verified
or independently reproduced**. The CC BY 4.0 licence permits mirroring; the
verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Vacca, Matteo.
> "Insider Trading with Options: Evidence from Rank-and-File Employees."
> *Journal of Corporate Finance* 98 (2026) 102963.
> DOI: 10.1016/j.jcorpfin.2026.102963. (C) 2026 The Author.
> Published by Elsevier B.V. Licensed under
> [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
