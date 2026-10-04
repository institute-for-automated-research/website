---
title: "Insider Trading with Options: Vacca (2026)"
description: >-
  Distilled: Using Finnish securities registry data (1995-2014), Vacca (2026)
  documents that rank-and-file employees' open-market purchases of own-company
  call options predict weekly excess stock returns of approximately 60 basis
  points, peaking before earnings announcements and extending to supply-chain
  partners. Journal of Corporate Finance 98 (2026) 102963, CC BY 4.0. Twenty-one
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
    - daily retail option buy count around employee own-company trades
    - employee own-company call option purchase counts before non-earnings information events
    - employee share of retail option and stock trading
    - retail option buying volume during employee own-company option activity
    - market-adjusted monthly stock returns after employee own-company call option purchases
  outcomeClass: [security-returns, household-finance]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2026-01-22; corroborated by artifact p. 1 CC BY license notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access CC-BY VOR; PDF accessible via DOI on Elsevier publisher site (checked 2026-06-26)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 21
  citedByCount: 0
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [panel-regression, event-study, logit-regression]
    identification: descriptive
  contributionType: [new-fact]
  mechanisms: [information-asymmetry, networks]
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
    - { ref: R2, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: return-spread, value: "0.81 ppts (own-company 0.71%, N=3,413; unrelated -0.10%, N=2,587), p=0.000", direction: positive, vsBenchmark: "unrelated firm option purchases by same rank-and-file employees" }
    - { ref: R3, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: basis-points, value: "~150 bps in the week [-5,-1] preceding announcement; return difference remains above 80 bps in the days after announcement and fades farther from the event", direction: positive }
    - { ref: R4, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: return-spread, value: "former employees -0.11% (N=2,275); current employees 0.64% (N=4,091); difference 0.76***, p=0.000", direction: positive, vsBenchmark: "current employees (former earn 0.76 ppts less; former return is not price-relevant)" }
    - { ref: R5, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: return-spread, value: "0.43 ppts (Nokia cluster employee avg 0.58%, N=1,260 vs. employees at other firms 0.15%, N=1,767), p=0.019", direction: positive, vsBenchmark: "employees at non-Nokia cluster firms trading Nokia options" }
    - { ref: R6, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: basis-points, value: "83 bps (0.83%, p=0.000; correlated employee+tippee trades, N=3,187); 59 bps (0.59%, p=0.000; tippee-only trades, N=6,421); difference p=0.17; matched accounts represent 7.6% of retail accounts and 7.8% of option buys", direction: positive }
    - { ref: R7, outcome: daily retail option buy count around employee own-company trades, metric: coefficient, value: "10.88** (t=2.26), stock + day FE; 10.01** (t=2.16), option + day FE (Retail buy count)", direction: positive }
    - { ref: R8, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: level, value: "Primary insiders' median holding period >80 days vs. roughly 35 days for rank-and-file; return differentials by rank are statistically insignificant", direction: none }
    - { ref: R9, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: basis-points, value: "Figure point estimates: approx. 3.0% for positive-SUE news vs. approximately 0% for negative-SUE news; approx. 2.5% for high absolute SUE vs. approx. 0.3% for low absolute SUE", direction: positive }
    - { ref: R10, outcome: employee own-company call option purchase counts before non-earnings information events, metric: level, value: "Positive jumps: 142 own-company vs. 63 unrelated-firm buys; negative jumps: 68 vs. 54", direction: positive }
    - { ref: R11, outcome: employee share of retail option and stock trading, metric: probability, value: "Options: 8.6% of retail investors and 3.3% of retail trades; stocks: 1.6% of investors and 0.4% of trades", direction: positive, vsBenchmark: "employee shares are higher for options than stocks" }
    - { ref: R12, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: basis-points, value: "Approx. 100 bps on over 1,000 purchases by 371 employees who never buy own-company stock", direction: positive }
    - { ref: R13, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: return-spread, value: "0.74 ppts (customer/supplier 0.65%, N=820; other firms -0.09%, N=996), p=0.003", direction: positive, vsBenchmark: "Nokia-option purchases by employees at other firms" }
    - { ref: R14, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: coefficient, value: "No price-relevant return predictability reported", direction: none }
    - { ref: R15, outcome: market-adjusted weekly stock returns after employee own-company call option purchases, metric: coefficient, value: "Column (1) economically linked effect is positive but not statistically significant; investor-FE Columns (2)-(3) have larger positive coefficients and t-statistics", direction: positive }
    - { ref: R16, outcome: retail option buying volume during employee own-company option activity, metric: coefficient, value: "4.036*** (t=5.25), stock + day FE; 2.000*** (t=8.05), option + day FE; N=106,457", direction: positive }
    - { ref: R17, outcome: probability of employee open-market purchase of own-company call options, metric: coefficient, value: "Female: -1.559*** (t=-5.84), -1.538*** (t=-4.77); large losses: 0.375*** (t=3.41), 0.321*** (t=2.93); large gains insignificant", direction: mixed }
    - { ref: R18, outcome: probability of employee open-market purchase of own-company call options, metric: coefficient, value: "Primary insider: -0.242 (t=-1.56), -0.282* (t=-1.74); p-values 0.07-0.11", direction: negative }
    - { ref: R19, outcome: probability of employee open-market purchase of own-company call options, metric: coefficient, value: "Prior-year own-company option buys: 0.422*** (t=6.57), 0.448*** (t=7.42)", direction: positive }
    - { ref: R20, outcome: probability of employee open-market purchase of own-company call options, metric: coefficient, value: "Other-stock trades 0.018*** (t=3.59), 0.018*** (t=3.27); own-company portfolio value 0.035*** (t=2.95), 0.031*** (t=2.63); other-stock portfolio value 0.126*** (t=8.54), 0.104*** (t=5.56)", direction: positive }
    - { ref: R21, outcome: market-adjusted monthly stock returns after employee own-company call option purchases, metric: basis-points, value: "Approx. 80 bps for one-month return; returns remain positive and statistically significant using Fama-French three-factor adjustment", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Green, Huang, Wen & Zhou (2019)", doi: '10.1016/j.jfineco.2019.03.012', relation: builds-on, note: "builds on their evidence that employees hold price-relevant private information about employers; extends the finding to direct option market exploitation" }
    - { cite: "Augustin, Brenner & Subrahmanyam (2019)", doi: '10.1287/mnsc.2018.3122', relation: extends, note: "extends their evidence of informed options trading before takeover announcements to recurring earnings-driven information for rank-and-file employees" }
    - { cite: "Pan and Poteshman (2006)", doi: '10.1093/rfs/hhj024', relation: builds-on, note: "builds on their finding that option volume contains information about future stock prices by testing employee own-company call purchases" }
    - { cite: "Black (1975)", doi: '10.2469/faj.v31.n4.36', relation: builds-on, note: "motivated by their argument that informed investors prefer options for embedded leverage; employees trade own-company options at 5-8x the rate of own-company stocks" }
    - { cite: "Deuskar, Khatri & Subrahmanyam (2025)", doi: '10.1287/mnsc.2022.02907', relation: cites, note: "cites their evidence of supply-chain insider trading by primary insiders as motivation for examining the Nokia cluster" }
  openQuestions:
    - "Whether the patterns extend to jurisdictions with different disclosure rules and enforcement levels; Finland's strong enforcement may make the sample unusual (p. 3; conclusion p. 19)."
    - "The employment-identification procedure captures only short, clearly observable employment stints; estimates are a lower bound on the true prevalence and magnitude of informed employee option trading (p. 4, Section 1.2)."
    - "The full scale of tipping networks is unknown; Table 5 identifies matched accounts representing 7.6% of retail accounts and 7.8% of retail option buys in the observed sample, while the paper treats detected tipping as a lower bound (pp. 15-16)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full text read (pp. 1-21 main body plus references and appendix descriptions); seven results extracted from PDF. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 7 Core results rows confirmed correct; both equations verified term-by-term; removed introducesData: true and new-data from contributionType (paper uses existing Euroclear Finland and Alexander Incentives sources, not a new introduction)." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and added 14 Core results rows, aligned findings, and expanded the formal sections with the main-text equation and estimating specifications. Additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked Core rows, equations, classifications, findings, prose, and frontmatter against the source PDF; corrected the return equation subscript, earnings-window post-event description, tipping comparison and prevalence, finding directions, and Pan-Poteshman edge note. One abstract headline about trading skill remains unrepresented; supplementary appendix tables are outside the supplied PDF." }
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
own-company option purchases and their returns are numerically highest, although
the return differences across employee ranks are not statistically significant.
Rank-and-file trades exceed unrelated-firm purchases by 81 basis points.
Consistent with the
argument of Black (1975) that informed investors prefer options for their embedded
leverage, employees trade own-company options at five to eight times the rate they
trade own-company stocks. The predictability peaks before earnings announcements
(approximately 150 basis points in the preceding week), remains elevated
immediately after announcements, extends to Nokia supply-chain partner stocks,
and is absent for former employees' former-employer trades. The paper also
uncovers a tipping channel: anonymous retail accounts that co-trade with
employees earn positive returns; the difference between correlated-trade and
tippee-only averages is not statistically significant (p=0.17).

## Core results

All returns are market-adjusted weekly (five-day) returns, reported multiplied by
100 so that 0.64 = 64 basis points. Standard errors are clustered at the
stock-trade date level. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Own-company call option purchases by employees predict positive weekly stock returns; purchases of options on unrelated firms do not | Table 2, Panel A, p. 7 | Own-company avg = 0.64% (N=4,091); unrelated firm avg = 0.04% (N=3,250); difference = 0.59\*\*\*, p=0.000 |
| R2 | Rank-and-file employees account for most own-company buys and have high returns; their apparent advantage over higher ranks is not statistically significant | Table 2, Panel B, p. 7; Fig. 2, p. 7; §5.1, p. 16 | Rank-and-file own-company avg = 0.71% (N=3,413); unrelated = -0.10% (N=2,587); difference = 0.81\*\*\*, p=0.000; rank-level differences are not significant |
| R3 | Own-company option purchases peak in informativeness before earnings announcements; the return difference remains positive immediately afterward | Fig. 4, p. 9; text pp. 8-9 | ~150 bps (annualized over 120%) for buys in window [-5,-1] before announcement; the difference remains over 80 bps in the days after announcements and fades farther from the event; 281 of 332 pre-announcement trades are by rank-and-file employees |
| R4 | Former employees' option purchases do not predict positive returns (falsification of the information-advantage story) | Table 3, Panel A, p. 13 | Former employees avg = -0.11% (N=2,275); current employees avg = 0.64% (N=4,091); difference = 0.76\*\*\*, p=0.000 |
| R5 | Employees at Nokia customer and supplier firms earn informed returns by trading Nokia options (supply-chain channel) | Table 4, Panel A, p. 14 | Nokia cluster employees avg = 0.58% (N=1,260); employees at other firms = 0.15% (N=1,767); difference = 0.43\*\*, p=0.019 |
| R6 | Repeatedly co-trading anonymous accounts are associated with positive returns; their average return is not significantly different from correlated employee-tippee trades | Table 5, pp. 15-16 | Correlated trades avg = 0.83% (N=3,187); tippee-only avg = 0.59% (N=6,421); difference p=0.17; 783 accounts represent 7.6% of retail accounts and 7.8% of option buys |
| R7 | Employee own-company option activity is associated with contemporaneous increases in retail option buying | Table 6, col. (1)-(2), p. 17 | Employee activity indicator coefficient = 10.88\*\* (t=2.26) on daily retail buy count (stock + day FE); 10.01\*\* (t=2.16) with option + day FE; positive also on log retail buy volume |
| R8 | Higher-ranked employees hold own-company options longer, but rank-specific weekly return differences are not statistically significant | Fig. 2-3, pp. 6-7; §5.1, p. 16 | Median holding period >80 days for primary insiders vs. roughly 35 days for rank-and-file; rank-level return differences are statistically indistinguishable |
| R9 | Pre-announcement option buying is most informative before positive and highly surprising earnings news | Fig. 5, p. 10; §2.2, p. 8 | Approx. 3.0% weekly market-adjusted returns for positive-SUE announcements vs. approximately 0% for negative-SUE; approx. 2.5% for high-absolute-SUE vs. approx. 0.3% for low-absolute-SUE (figure point estimates) |
| R10 | Employee own-company call buying rises before positive non-earnings information events, not before negative events | Fig. 6, p. 11; §2.3, p. 9 | Positive jumps: 142 own-company vs. 63 unrelated-firm call purchases; negative jumps: 68 vs. 54 |
| R11 | Employee own-company trading is more prevalent in options than in stocks | Fig. 7, p. 12; §2.4, p. 11 | Employees are 8.6% of retail option investors and 3.3% of retail option trades, vs. 1.6% of stock investors and 0.4% of stock trades |
| R12 | Employees who buy own-company options but never own-company stock have especially informative option trades | Table F4, col. (2), cited §2.4, p. 11 | About 1.00% average weekly market-adjusted return on over 1,000 purchases by 371 employees |
| R13 | Rank-and-file employees at Nokia customer and supplier firms also earn positive returns trading Nokia options | Table 4, Panel B, p. 14; §3.3, p. 13 | Customer/supplier employees 0.65% (N=820) vs. other-firm employees -0.09% (N=996); spread 0.74\*\*\*, p=0.003 |
| R14 | Same-industry option purchases do not explain the supply-chain result | Table F5, cited §3.3, p. 13 | No price-relevant return predictability for options on firms in the employee's industry |
| R15 | Direct economic links remain informative after controlling for industry knowledge, with stronger estimates after investor fixed effects | Table F6, cited §3.3, p. 13 | Economically linked option trades are more informative; Column (1) effect is not statistically significant, while investor-FE Columns (2)-(3) have larger coefficients and t-statistics |
| R16 | Employee option activity is associated with higher retail option buying volume as well as buy counts | Table 6, cols. (3)-(4), p. 17; §5.2, p. 16 | Employee activity coefficients 4.036\*\*\* (t=5.25) with stock + day FE and 2.000\*\*\* (t=8.05) with option + day FE; N=106,457 |
| R17 | Risk preferences and recent losses predict employee own-company option purchases | Table 7, cols. (1)-(2), p. 18; §6.1, p. 17 | Female: -1.559\*\*\* (t=-5.84), -1.538\*\*\* (t=-4.77); large losses: 0.375\*\*\* (t=3.41), 0.321\*\*\* (t=2.93); large gains are insignificant |
| R18 | Mandatory disclosure is associated with a lower propensity for primary insiders to buy own-company options | Table 7, cols. (1)-(2), p. 18; §6.2, p. 17 | Primary-insider coefficients -0.242 (t=-1.56) and -0.282\* (t=-1.74); p-values range 0.07-0.11 |
| R19 | Own-company option buying exhibits habit persistence | Table 7, cols. (1)-(2), p. 18; §6.3, p. 18 | Prior-year own-company option buys: 0.422\*\*\* (t=6.57), 0.448\*\*\* (t=7.42) |
| R20 | Greater stock-market familiarity is positively associated with own-company option purchases | Table 7, cols. (1)-(2), p. 18; §6.4, p. 18 | Other-stock trades 0.018\*\*\* (t=3.59), 0.018\*\*\* (t=3.27); own-company portfolio value 0.035\*\*\* (t=2.95), 0.031\*\*\* (t=2.63); other-stock portfolio value 0.126\*\*\* (t=8.54), 0.104\*\*\* (t=5.56) |
| R21 | Own-company option purchases remain informative at monthly horizons and under factor adjustment | Table F12-F13, cited §7, p. 18 | Approximately 80 bps average market-adjusted return over one month; Fama-French three-factor adjusted returns remain positive and statistically significant |

**Overall (paper's conclusion).** Between 3% and 9% of all retail demand in the
Finnish market for single-name equity derivatives can be attributed to employees
who likely have an information advantage; accounting for tipping raises this to
over 15% of retail investors and 10% of open-market option purchases. Rank-and-file
employees, not primary insiders or managers, are the primary source of informed
retail option trading. The evidence points to a disclosure gap: most informed
trading by employees goes undetected because rank-and-file employees face no
mandatory disclosure requirements.

## Theory / model

The paper has no formal theoretical model. It tests the information-advantage
hypothesis: employees with private, price-relevant information should buy
own-company call options before favorable news; the signal should be strongest
before positive and unexpected earnings, weaken after employment ends, and appear
in trades on firms linked through the supply chain. Correlated employee and
anonymous-account trades test the additional information-transmission channel
(tipping). Green, Huang, Wen and Zhou (2019) establish that employee information
can be price-relevant; Augustin, Brenner and Subrahmanyam (2019) study informed
options trading before corporate events. These predictions and tests are
described in §§2.1-4.3, pp. 5-15. Black (1975) provides the options-leverage
intuition, and Pan and Poteshman (2006) motivate using option trading to study
subsequent stock returns.

The empirical return measure starts with the close-to-close underlying-stock
return over an event horizon (Eq. definition in §2.1, p. 5):

$$
\text{Return}_{j,t} =
\frac{P_{j,t+\tau}-P_{j,t}}{P_{j,t}}
$$

The main outcome subtracts the market return over the same horizon. The primary
horizon is five trading days; returns and group differences are multiplied by
100. The earnings-event tests define standardized unexpected earnings as realized
EPS minus EPS from four quarters earlier, scaled by the eight-quarter rolling
standard deviation (§2.2, p. 8).

## Method

The empirical design is descriptive: the paper compares post-trade market-adjusted
returns across employer-linked and unrelated option purchases, employee ranks,
current and former employees, and Nokia supply-chain ties. It also uses event-time
sorts around earnings and non-earnings jumps, account-level repeated co-trading to
identify potential tippees, option-day fixed-effect regressions, and employee-
firm-month logit models. There is no randomized or quasi-experimental assignment.

**Tipping classification.** For anonymous account $$a$$ and employee $$i$$ at firm
$$j$$, candidate pairs trade the same call option on the same day repeatedly. The
baseline requires at least $$k=2$$ repeated co-trades and that those co-trades
represent at least $$p=0.1$$ of account $$a$$'s own-company option activity during
$$i$$'s employment; very active traders are filtered out (§4.1 and Appendix C,
pp. 14-15). This is a lower-bound classification of potentially informed
accounts, not a causal estimate of tipping.

**Employee purchase model.** Table 7 estimates logit models for an indicator
that employee $$i$$ at firm $$j$$ buys at least one own-company call option in month
$$m$$ (§6, Table 7, pp. 17-18):

$$
\Pr(\text{Buy}_{ijm}=1\mid X_{ijm})
=\Lambda\!\left(\alpha+X_{ijm}'\beta\right),
\qquad
\Lambda(z)=\frac{1}{1+\exp(-z)}
$$

The covariates cover gender, large recent portfolio gains and losses, primary-
insider status, prior-year own-company option activity, other option and stock
trading, portfolio values, age, and age squared (Table 7, p. 18). Column (1)
contains 1,211,725 employee-firm-month observations; column (2) contains 639,301
observations restricted to employees who held stocks one month earlier. Warrants
and observations where own-company options are not listed are excluded. The table
reports t-statistics from standard errors two-way clustered by employee and
firm-month. No fixed effects are reported for this specification.

## Empirical specifications

**Return comparisons and event splits.** The paper calculates the five-trading-day
market-adjusted return for each open-market call-option buy and reports means and
differences for own-company versus unrelated-firm trades (Table 2, p. 7), for
employee rank (Fig. 2, p. 6), current versus former employment (Table 3, p. 13),
and Nokia supply-chain versus other-firm purchases (Table 4, p. 14). These are
trade-level descriptive comparisons, not regressions with covariates or fixed
effects. Inference uses stock-trade-date clustered standard errors and two-sided
tests. The standard-error clustering and outcome construction are stated in
§2.1, pp. 5-6 and in the captions to Tables 2-4. Table 4's rank-and-file split
uses 820 customer/supplier trades and 996 other-firm trades (p. 14).

**Earnings and information-event specifications.** Figure 4 sorts own-company
and other-firm purchases by trading-day distance from the next earnings
announcement and compares their subsequent one-week returns (§2.2, Fig. 4,
p. 9). Figure 5 restricts the event sample to own-company purchases in the five
preceding trading days and splits announcements at the median SUE and median
absolute SUE; its 95% confidence intervals cluster at the firm level (Fig. 5,
p. 10). For non-earnings news, a jump is an absolute market-adjusted daily return
above 10%; the paper counts own-company and unrelated-firm call buys during the
five trading days before and including the jump, excluding the earnings window
(Fig. 6, §2.3, pp. 9-11). The latter is an event-frequency comparison, not a
return regression.

**Supply-chain identification checks.** Consistent with the supply-chain insider
trading evidence in Deuskar, Khatri and Sunder (2025), Table 4 compares Nokia call purchases
by employees at Nokia customer/supplier firms with purchases by employees at
other firms, then repeats the comparison for rank-and-file employees (p. 14).
Table F5 is an industry-knowledge placebo: same-industry firm purchases do not
predict returns (§3.3, p. 13). Table F6 isolates direct economic links within the
Nokia cluster, excluding Nokia employees and own-company trades; column (1) shows
no statistically significant effect and investor fixed effects in columns (2)
and (3) increase the coefficient and t-statistic (§3.3, p. 13). These appendix
checks are reported in the main text, but their numerical coefficients are not
printed there.

**Retail response regression.** The numbered main-text estimating specification
is Eq. (1), p. 16:

$$
Y_{o,t}=\alpha+\beta X_{o,t}+\gamma_s+\delta_t+\epsilon_{o,t}
\tag{1}
$$

Here $$o$$ is an option on stock $$s$$ on day $$t$$; $$Y_{o,t}$$ is either the retail buy
count or the natural logarithm of one plus retail buy volume, excluding
own-company trades; and $$X_{o,t}$$ indicates at least one own-company option
purchase that day. The models include underlying-stock fixed effects in columns
(1) and (3), option fixed effects in columns (2) and (4), and day fixed effects
in all columns. The option-day samples are 106,519 observations for count
outcomes and 106,457 for volume outcomes. Standard errors are two-way clustered
by underlying stock and month (Table 6, p. 17).

**Main samples and logit inference.** The principal current-employee sample is
4,091 own-company purchases by 890 employees at 43 firms. The Nokia supply-chain
sample contains 1,260 Nokia-option purchases by 111 employees at seven firms;
market-adjusted returns in these comparisons are multiplied by 100 (Table 1,
p. 5; Table 4, p. 14). The Table 7 logit estimates above use employee-firm-month
observations, two-way employee and firm-month clustered standard errors, and no
reported fixed effects (Table 7, p. 18).

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
distillation was first extracted by an LLM on 2026-06-26 and expanded on
2026-10-04. It was checked against the source PDF by an LLM but is **not
independently reproduced**. The CC BY 4.0 licence permits mirroring; the
verbatim PDF is not hosted in this batch.

> **Attribution (CC BY 4.0).** Vacca, Matteo.
> "Insider Trading with Options: Evidence from Rank-and-File Employees."
> *Journal of Corporate Finance* 98 (2026) 102963.
> DOI: 10.1016/j.jcorpfin.2026.102963. (C) 2026 The Author.
> Published by Elsevier B.V. Licensed under
> [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
