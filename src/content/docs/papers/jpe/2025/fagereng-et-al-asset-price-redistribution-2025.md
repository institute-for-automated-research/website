---
title: "Asset-Price Redistribution: Fagereng et al. (2025)"
description: >-
  Distilled: Rising asset valuations redistribute welfare from buyers to sellers, not from
  non-holders to holders. Individual welfare gains range from -$185,000 (p1) to +$273,000
  (p99) in Norway 1994-2019, with redistribution from young cohorts to old and from the
  poor to the wealthy. Journal of Political Economy 2025, paywalled. Fifteen core results with
  source locators, datasets used, the model (envelope-theorem sufficient statistic), and the
  empirical implementation (NPV of net asset sales weighted by price-dividend deviation).
sidebar:
  label: Fagereng et al. 2025
  order: 1
tags: [paper-summary, household-finance, wealth-inequality, redistribution, life-cycle,
       asset-pricing, welfare, peer-reviewed, unreplicated,
       data:statistics-norway, data:vps-norway, data:worldscope]
paper:
  authors: "Andreas Fagereng, Matthieu Gomez, Emilien Gouin-Bonenfant, Martin Holm, Benjamin Moll, Gisle Natvik"
  authorList:
    - { family: Fagereng, given: Andreas, orcid: "0000-0002-0427-9737", affiliation: BI Norwegian Business School }
    - { family: Gomez, given: Matthieu, affiliation: Columbia University }
    - { family: Gouin-Bonenfant, given: Emilien, affiliation: Columbia University }
    - { family: Holm, given: Martin Blomhoff, affiliation: University of Oslo }
    - { family: Moll, given: Benjamin, affiliation: London School of Economics and Political Science }
    - { family: Natvik, given: Gisle James, orcid: "0000-0001-5709-1191", affiliation: BI Norwegian Business School }
  year: 2025
  venue: "Journal of Political Economy 133(11), November 2025, 3494-3549"
  venueShort: J. Polit. Econ. 2025
  doi: 10.1086/736769
  jel:
    codes: [D31, E21, G12]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Banking stability, regulation, efficiency", "Economic theories and models", "Global Financial Crisis and Policies"]
  dataAccess: proprietary-confidential
  outcome:
    - individual money-metric welfare gain from asset-price deviations
    - distribution of welfare gains across individuals, cohorts, and wealth percentiles
  outcomeClass: [household-finance, social-welfare]
  license: "Journal of Political Economy standard rights (VOR paywalled); LSE-hosted accepted manuscript distributed CC BY 4.0"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (University of Chicago Press publisher site, 2026-06-26); AAM openly available at https://researchonline.lse.ac.uk/id/eprint/129496/"
  redistribution: extract-only
  resultsCount: 15
  citedByCount: 12

  methods:
    role: both
    contributes: asset-price-welfare-statistic
    family: theory
    buildsFrom: [life-cycle-model, panel-regression]
    identification: descriptive
  contributionType: [new-method, new-fact]
  mechanisms: [risk-sharing, collateral, net-asset-sales-redistribution]
  scope:
    region: Norway
    assetClass: "housing, equity, mortgage debt, deposits"
    period: 1994-01..2019-12
    frequency: annual
    dataType: [administrative, market, accounting]
    granularity: [individual, firm]
    n: "universe of Norwegian adults aged >= 18 at any point 1994-2019"
  findings:
    - { ref: R1, outcome: "individual money-metric welfare gain from asset-price deviations", metric: level, value: "avg +$10,000; p1 = -$185,000; p99 = +$273,000 (2011 USD); interquartile range $31,000 (Figure 4a, p. 24)", direction: mixed }
    - { ref: R2, outcome: "individual money-metric welfare gain from asset-price deviations", metric: pp-effect, value: "0.0% of total wealth on average; -30% at p1; +27% at p99; interquartile range 5.0% (Figure 4b, p. 24)", direction: mixed }
    - { ref: R3, outcome: "average welfare gain by birth cohort", metric: level, value: "Millennials (<=15 in 1993): -$13,000; Baby Boomers (>50 in 1993): +$22,000 (2011 USD) (Figure 7c, p. 27)", direction: mixed }
    - { ref: R4, outcome: "average welfare gain by within-cohort wealth percentile", metric: level, value: "top 1%: +$73,000; bottom 1%: +$8,000; top 1% normalized 3.1% vs. population avg 1.5% of total wealth (Figure 8c-d, pp. 29-30)", direction: positive }
    - { ref: R5, outcome: "rank correlation between welfare gains and revaluation gains", metric: correlation, value: "Spearman rank correlation = 0.19 (Figure 6b, p. 26)", direction: positive, vsBenchmark: "revaluation gains avg 16.4% of total wealth vs. welfare gains avg 0.0% of total wealth (Figure 6a)" }
    - { ref: R6, outcome: "welfare gain contribution by asset class", metric: level, value: "housing: -$4,700; debt: +$16,900; deposits: -$2,400; equity: +$200; total: +$10,000 (thousands 2011 USD, Table 2, PDF p. 26)", direction: mixed }
    - { ref: R7, outcome: "social welfare gain under wealth-weighted social marginal welfare weights", metric: level, value: "At inequality-aversion parameter σ = 0, about $10,000; the social welfare gain declines and becomes negative as σ rises (Figure 5, p. 25)", direction: negative }
    - { ref: R8, outcome: "sectoral welfare gains from asset-price deviations", metric: level, value: "Households +$8,000 per capita; government -$21,700; foreigners +$13,700 (2011 USD, Table A5, p. A36)", direction: mixed }
    - { ref: R9, outcome: "cohort welfare gain with uninsurable income risk", metric: level, value: "For the cohort aged 10 in 1994, average gain rises from -$17,000 at γ = 0 to -$13,000 at γ = 1 and -$6,000 at γ = 3 (Figure 10, p. 34)", direction: positive }
    - { ref: R10, outcome: "mortgage interest rate as a function of loan-to-value ratio", metric: coefficient, value: "Loan-to-value coefficient 0.0024 (SE 0.00001), N = 28,298,160; with age and education controls, 0.0039 (SE 0.00002), N = 27,501,724; R² = 0.519 and 0.533 (Table A9, p. A47)", direction: positive }
    - { ref: R11, outcome: "cohort welfare gains under the second-order correction", metric: level, value: "Incremental effect: mean +$3,500; age 0-20: -$9,500; 20-40: +$8,800; 40-60: +$12,000; 60-80: +$4,800 (thousands of 2011 USD, Table 3, PDF p. 33)", direction: mixed }
    - { ref: R12, outcome: "cohort welfare gains under extended valuation paths and combined corrections", metric: level, value: "At φ = 0.9, 0.95, and 0.98, higher persistence shifts cohort gains toward older sellers and raises the average; combined extensions: mean $23,700, age 0-20 -$4,300, 20-40 +$42,800, 40-60 +$39,300, 60-80 +$10,900 (2011 USD, Table 3, PDF p. 33; Figure 13, p. 42)", direction: mixed }
    - { ref: R13, outcome: "top-percentile revaluation gains compared with welfare gains", metric: level, value: "For the top 1%, revaluation gains are 44.5% of total wealth while welfare gains are 3.1% (Figure 9b, p. 30)", direction: negative }
    - { ref: R14, outcome: "normalized welfare gain across middle wealth percentiles", metric: level, value: "Approximately 1.8% of total wealth from the 20th through 80th wealth percentiles (Figure 8d, p. 30)", direction: positive }
    - { ref: R15, outcome: "cohort welfare gain correction from borrowing constraints and collateral effects", metric: level, value: "At ξ = 0.01, incremental effect: mean -$100; age 0-20: +$1,900; 20-40: -$1,400; 40-60: -$1,100; 60-80: +$100 (2011 USD, Table 3, PDF p. 33)", direction: mixed }
  resultType: new-finding
  relatesTo:
    - { cite: "Davila and Korinek (2018)", doi: '10.1093/restud/rdx010', relation: extends, note: "generalizes their formula for welfare effects of asset-price changes to the multi-period multi-asset setting with adjustment costs, inter-generational linkages, and government" }
    - { cite: "Greenwald et al. (2021)", relation: extends, note: "their duration-mismatch measure of welfare from declining interest rates is a special case of the general sufficient statistic here" }
    - { cite: "Piketty and Zucman (2014)", doi: '10.1093/qje/qju018', relation: tests, note: "rising asset prices do not uniformly benefit asset holders; only net sellers gain; pure holders are unaffected at first order" }
    - { cite: "Doepke and Schneider (2006)", doi: '10.1086/508379', relation: extends, note: "they estimate redistributive effects of inflation across nominal wealth positions via Survey of Consumer Finances; this paper extends to all asset classes using admin microdata" }
    - { cite: "Kiyotaki and Moore (1997)", doi: '10.1086/262072', relation: builds-on, note: "collateral constraint mechanism underlying the Section 4.2 extension where higher asset prices relax borrowing limits" }
  openQuestions:
    - "The empirical results are country-specific: Norway has floating-rate mortgages, 3% equity share of household wealth, and a net-saver government via the Sovereign Wealth Fund. Results may differ substantially in the US or other countries (Conclusion, p. 43)."
    - "Systematically quantifying the welfare consequences of higher-frequency asset-price booms and busts that drive short-run wealth inequality dynamics (Conclusion, p. 44)."
    - "Optimal design of capital gains and wealth taxation in environments with changing asset prices, using the tools of public finance (Conclusion, p. 44)."
  replicationCode: { url: "https://doi.org/10.7910/DVN/TJDOVI", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Full PDF read (LSE accepted manuscript, pp. 1-47 + appendix); six core results extracted with table/figure locators. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; four locator corrections applied: R1/R3 figure page numbers in findings[] and table (Figure 4a p.23→p.24, Figure 7c p.28→p.27), eqs. 3-4 page reference (p.6→p.5), eq. 17 page reference (p.25→p.26). All six result magnitudes confirmed correct." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the assigned PDF in full; added nine Core results and matching findings, the missing numbered main-text equations, the mortgage-rate estimating specification, and a staged mechanism term. These additions are not human-verified and were not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Audited all 15 Core results, equations and specifications, classifications, findings, frontmatter, and prose against the PDF; corrected Table 2 and Table 3 PDF page locators, theory/descriptive classifications, the housing-channel summary, and R14 finding direction. Locator check now passes; no headline findings omitted. Equation pass (2026-10-04): corrected the Eq. (26) LTV denominator from P_t to P_{i,t}; Eq. (27) matches the PDF. Post-verification review (2026-10-04) corrected the Eq. (24) effective discount factor, which was transcribed inverted, to the PDF's product of Q_{i,s}(1 + (B_{i,s}/Q_{i,s}) dQ_{i,s}/dB_{i,s})." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/736769", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block in Crossref metadata; VOR title/authors/venue/pages confirmed; VOR likely under JPE standard rights (paywalled)." }
    - { source: "LSE Research Online eprint cover page https://researchonline.lse.ac.uk/id/eprint/129496/", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "Accepted manuscript distributed CC BY 4.0 under LSE open-access policy; PDF on disk is this AAM version." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the model it builds on (the envelope-theorem welfare formula for asset-price changes), and the empirical implementation: enough to know what it found and how, without reading the full 56-page manuscript. To replicate or extend it, read the full source at the [original](https://doi.org/10.1086/736769).

## TL;DR

The paper asks who wins and who loses from rising asset valuations. It derives a sufficient statistic for the individual money-metric welfare effect of a price-dividend deviation: the net present value of an individual's net asset sales, weighted by the percentage price deviation from a balanced-growth baseline. Applied to Norwegian administrative data on all financial transactions from 1994 to 2019 (four asset classes: housing, debt, deposits, equity), the paper finds that the rise in asset valuations had large redistributive effects, redistributing from the young to the old and from the poor to the wealthy. Housing price increases dominate the intergenerational redistribution, while falling mortgage rates partly offset losses for young buyers. Welfare gains differ from revaluation gains (the Spearman rank correlation is 0.19), because revaluation gains accrue to holders while welfare gains accrue only to net sellers.

## Core results

Magnitudes and signs are as reported in the paper (2011 US dollars unless stated). Locators point to the accepted manuscript.

| \# | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Distribution of individual welfare gains is wide and centered near zero | Figure 4a, p. 24 | avg +$10,000; p1 = -$185,000; p99 = +$273,000; interquartile range $31,000 (2011 USD) |
| R2 | Welfare gains as a fraction of total wealth: near zero on average with fat tails | Figure 4b, p. 24 | avg 0.0%; p1 = -30%; p99 = +27%; interquartile range 5.0% |
| R3 | Intergenerational redistribution: old gain, young lose | Figure 7c, p. 27 | Millennials (<=15 in 1993): avg -$13,000; Baby Boomers (>50 in 1993): avg +$22,000 |
| R4 | Redistribution across wealth percentiles: gains concentrated at the top | Figure 8c-d, pp. 29-30 | top 1%: avg +$73,000 (3.1% of total wealth); bottom 1%: avg +$8,000; population avg normalized 1.5% |
| R5 | Welfare gains and revaluation gains are weakly correlated | Figure 6, p. 26 | Spearman rank correlation = 0.19; revaluation gains avg 16.4% of total wealth vs. welfare gains avg 0.0% |
| R6 | Housing and debt dominate the welfare-gain decomposition | Table 2, PDF p. 26 | housing: -$4,700; debt: +$16,900; deposits: -$2,400; equity: +$200; total: +$10,000 (avg, 2011 USD) |
| R7 | Social welfare gain falls as the planner places more weight on poorer individuals | Figure 5, p. 25 | At inequality-aversion parameter σ = 0, the social welfare gain is about $10,000; it declines and becomes negative as σ rises |
| R8 | Household-sector gains are offset by losses in the government and foreign sectors | Table A5, p. A36 | household: +$8,000 per capita; government: -$21,700; foreigners: +$13,700 (2011 USD) |
| R9 | Incomplete markets dampen the welfare loss for younger cohorts | Figure 10, p. 34 | For the cohort aged 10 in 1994, average welfare gain rises from -$17,000 at γ = 0 to -$13,000 at γ = 1 and -$6,000 at γ = 3 |
| R10 | Mortgage interest rates rise with loan-to-value ratios, supporting the collateral extension | Table A9, p. A47 | Loan-to-value coefficient 0.0024 (SE 0.00001), N = 28,298,160; with age and education controls, 0.0039 (SE 0.00002), N = 27,501,724; R² = 0.519 and 0.533 |
| R11 | Second-order effects shift cohort gains but leave the overall pattern similar | Table 3, PDF p. 33 | Incremental effect: mean +$3,500; ages 0-20: -$9,500; 20-40: +$8,800; 40-60: +$12,000; 60-80: +$4,800 (thousands of 2011 USD) |
| R12 | Persistent post-2019 valuation deviations shift gains toward older cohorts; combined extensions change cohort totals | Table 3, PDF p. 33; Figure 13, p. 42 | For φ = 0.9, 0.95, and 0.98, persistence raises average gains and shifts cohort gains toward older sellers; combined extensions: mean $23,700, ages 0-20: -$4,300; 20-40: +$42,800; 40-60: +$39,300; 60-80: +$10,900 (2011 USD) |
| R13 | Revaluation gains greatly exceed welfare gains at the top of the wealth distribution | Figure 9b, p. 30 | For the top 1%, revaluation gains are 44.5% of total wealth versus welfare gains of 3.1% |
| R14 | Normalized welfare gains are stable across the middle of the wealth distribution | Figure 8d, p. 30 | About 1.8% of total wealth from the 20th through 80th percentiles |
| R15 | The average welfare correction from collateral constraints is near zero, with offsetting cohort effects | Table 3, PDF p. 33 | At ξ = 0.01, incremental effect: mean -$100; ages 0-20: +$1,900; 20-40: -$1,400; 40-60: -$1,100; 60-80: +$100 (2011 USD) |

**Overall (paper's conclusion).** Asset-price changes redistribute welfare rather than creating it. The rise in Norwegian asset valuations from 1994 to 2019 benefited the old and the wealthy because they are net sellers of assets, while the young and the poor are net buyers. This contrasts with the view in Piketty and Zucman (2014) that rising asset prices benefit existing asset holders generally. Revaluation gains, which are positive for all asset holders, overstate welfare gains by a factor of more than ten on average and are at best weakly correlated with actual welfare gains at the individual level. The government (via the sovereign wealth fund, a net saver) bore losses that offset household gains in the aggregate. Compared to Doepke and Schneider (2006), who estimate redistributive effects of inflation using Survey of Consumer Finances data for the US, this paper uses admin microdata and covers all four major asset classes over a longer horizon.

## Theory / model

The paper builds a framework for measuring the welfare effect of a deviation in asset prices. The key insight, illustrated first in a two-period model (Section 1.1, pp. 5-7), is that the welfare gain depends on net asset *sales*, not net asset *holdings*. An individual who holds an asset but never sells it gains nothing from a price increase at first order.

**Two-period intuition (Section 1.1).** Individual $$i$$ maximizes utility over consumption paths subject to budget constraints (eqs. 3-4, p. 5):

$$
V_{i,0} \equiv \max_{\{C_{i,0},\, C_{i,1},\, N_{i,0}\}} U(C_{i,0}) + \beta U(C_{i,1}) \tag{3}
$$

$$
C_{i,0} + (N_{i,0} - N_{i,-1}) P_0 = Y_{i,0}, \qquad C_{i,1} = N_{i,0} D_1 + Y_{i,1}. \tag{4}
$$

Applying the envelope theorem to evaluate the welfare effect of an infinitesimal change in the asset price $$P_0$$, holding dividends $$D_1$$ fixed, yields (eq. 5, p. 6):

$$
\frac{dV_{i,0}}{U'(C_{i,0})} = (N_{i,-1} - N_{i,0}) \, dP_0. \tag{5}
$$

The welfare gain is the net asset sale $$(N_{i,-1} - N_{i,0})$$ multiplied by the price change. A pure holder who plans never to trade ($$N_{i,0} = N_{i,-1}$$) is unaffected; sellers gain; buyers lose. This two-period result was also derived by Davila and Korinek (2018) and Moll (2020) in similar two- and three-period environments; the present paper generalizes it to multiple assets, infinite horizon, and the empirical Norwegian setting.

**Baseline infinite-horizon model (Section 1.2, pp. 8-10).** There are $$K$$ long-lived assets and a sequence of one-period bonds. Individual $$i$$ maximizes (eq. 8, p. 9):

$$
V_{i,0} \equiv \max_{\{C_{i,t},\, B_{i,t},\, \{N_{i,k,t}\}_k\}_{t=0}^{\infty}} \sum_{t=0}^{\infty} \beta^t U(C_{i,t}), \tag{8}
$$

subject to budget constraints with adjustment costs $$\chi_k$$ (eq. 9, p. 9):

$$
C_{i,t} + \sum_{k=1}^{K}(N_{i,k,t} - N_{i,k,t-1}) P_{k,t} + B_{i,t} Q_t + \sum_{k=1}^{K} \chi_k(N_{i,k,t} - N_{i,k,t-1}) = \sum_{k=1}^{K} N_{i,k,t-1} D_{k,t} + B_{i,t-1} + Y_{i,t}. \tag{9}
$$

**Proposition 1** (welfare gain, eq. 10, p. 9): the welfare gain of a price deviation $$\{dQ_t, \{dP_{k,t}\}_k\}_{t=0}^{\infty}$$ is:

$$
\frac{dV_{i,0}}{U'(C_{i,0})} = \sum_{t=0}^{\infty} R_{0 \to t}^{-1} \left( \sum_{k=1}^{K} (N_{i,k,t-1} - N_{i,k,t}) \, dP_{k,t} - B_{i,t} \, dQ_t \right). \tag{10}
$$

The formula sums the NPV of net asset sales weighted by the price deviation. The adjustment-cost function $$\chi_k$$ drops out via the envelope theorem: what matters is observed transactions, not why they happen. For bonds, holdings rather than sales matter (because bonds must be rolled over continuously). Welfare gains aggregate to zero across all individuals trading with each other (but not across sectors, since Norwegian households also trade with the government and foreigners).

**Extensions (Section 4):** (i) With uninsurable idiosyncratic income risk (Proposition 2, eq. 18), the formula gains a covariance term between the growth in marginal utility and future net sales, causing welfare gains to no longer aggregate to zero across the population. (ii) With borrowing constraints indexed to loan-to-value following Kiyotaki and Moore (1997) (Proposition 3 / Corollary 4, eqs. 24-27), asset holdings also matter via a collateral channel, and individual discount rates rise with the LTV ratio. (iii) Second-order effects require accounting for portfolio responses to price changes (eq. 29) but are quantitatively small given stable observed transaction patterns across cohorts. A related welfare decomposition for interest-rate changes is provided by Greenwald et al. (2021); that duration-mismatch formula is a special case of the general sufficient statistic here.

**Additional two-period and multi-period results.** The introduction states the one-asset sufficient statistic and baseline price deviation (eqs. 1-2, pp. 1-2):

$$
\text{Welfare Gain}_i = \sum_{t=0}^{T} R^{-t} \text{Sales}_{i,t} \times \text{Price Deviation}_t. \tag{1}
$$

$$
\text{Price Deviation}_t = \frac{PD_t-\overline{PD}}{PD_t}. \tag{2}
$$

The return-channel decomposition of the two-period result (eqs. 6-7, p. 6) is:

$$
\frac{dR_0}{dP_0}=\frac{1}{P_{-1}}>0, \qquad \frac{dR_1}{dP_0}=-\frac{R_1}{P_0}<0. \tag{6}
$$

$$
\frac{dV_{i,0}}{U'(C_{i,0})}=N_{i,-1}P_{-1}\frac{dR_0}{dP_0}+R_1^{-1}N_{i,0}P_0\frac{dR_1}{dP_0}=(N_{i,-1}-N_{i,0})dP_0. \tag{7}
$$

For joint price and income deviations, Proposition A1 adds the discounted income effect to the baseline (eq. 11, p. 10):

$$
\frac{dV_{i,0}}{U'(C_{i,0})}=\sum_{t=0}^{\infty}R_{0\to t}^{-1}\left[\sum_{k=1}^{K}(N_{i,k,t-1}-N_{i,k,t})dP_{k,t}-B_{i,t}dQ_t+\sum_{k=1}^{K}N_{i,k,t-1}dD_{k,t}+dY_{i,t}\right]. \tag{11}
$$

In the stochastic extension, Proposition 2 weights trading profits by the individual's marginal rate of substitution (eq. 18, p. 32); rewriting it with the Euler equation gives the baseline expected term plus the marginal-utility covariance term (eq. 19, p. 32):

$$
\frac{dV_{i,0}}{U'(C_{i,0})}=\mathbb{E}_0\left[\sum_{t=0}^{\infty}\frac{\beta^t U'(C_{i,t})}{U'(C_{i,0})}\left(\sum_{k=1}^{K}(N_{i,k,t-1}-N_{i,k,t})dP_{k,t}-B_{i,t}dQ_t\right)\right]. \tag{18}
$$

$$
\frac{dV_{i,0}}{U'(C_{i,0})}=\sum_{t=0}^{\infty}R_{0\to t}^{-1}\mathbb{E}_0[\Pi_{i,t}]+\sum_{t=0}^{\infty}\operatorname{cov}_0\!\left(\frac{\beta^tU'(C_{i,t})}{U'(C_{i,0})},\Pi_{i,t}\right), \quad \Pi_{i,t}=\sum_{k=1}^{K}(N_{i,k,t-1}-N_{i,k,t})dP_{k,t}-B_{i,t}dQ_t. \tag{19}
$$

Here the first term is expected trading profits under the objective measure and the second is the covariance correction. The CRRA log-linear approximation used to estimate that correction is (eq. 20, p. 33):

$$
\operatorname{cov}_0\!\left(\frac{\beta^tU'(C_{i,t})}{U'(C_{i,0})},(N_{i,k,t-1}-N_{i,k,t})P_{k,t}\right)\approx R_{0\to t}^{-1}\gamma\,\operatorname{cov}_0\!\left(\log\frac{C_{i,t}}{C_{i,0}},(N_{i,k,t}-N_{i,k,t-1})P_{k,t}\right). \tag{20}
$$

**Borrowing constraints and collateral.** The two-asset problem and individual interest-rate schedule are (eqs. 21-23, pp. 35-36):

$$
V_{i,0}=\max_{\{C_{i,t},N_{i,t},B_{i,t}\}_{t=0}^{\infty}}\sum_{t=0}^{\infty}\beta^tU(C_{i,t}). \tag{21}
$$

$$
C_{i,t}+(N_{i,t}-N_{i,t-1})P_t+B_{i,t}Q_{i,t}+\chi(N_{i,t}-N_{i,t-1})=Y_{i,t}+B_{i,t-1}+N_{i,t-1}D_t. \tag{22}
$$

$$
Q_{i,t}=F(Q_t,B_{i,t},N_{i,t}P_t). \tag{23}
$$

Proposition 3 gives the welfare effect under the general interest-rate schedule, where the effective discount factor is defined below (eqs. 24-25, p. 36):

$$
\frac{dV_{i,0}}{U'(C_{i,0})}=\sum_{t=0}^{\infty}\widetilde R_{i,0\to t}^{-1}\left[(N_{i,t-1}-N_{i,t})dP_t-B_{i,t}\left(\frac{\partial Q_{i,t}}{\partial Q_t}dQ_t+\frac{\partial Q_{i,t}}{\partial(N_{i,t}P_t)}N_{i,t}dP_t\right)\right], \quad \widetilde R_{i,0\to t}^{-1}=\prod_{s=0}^{t-1}Q_{i,s}\left(1+\frac{B_{i,s}}{Q_{i,s}}\frac{\partial Q_{i,s}}{\partial B_{i,s}}\right). \tag{24}
$$

$$
\frac{dV_{i,0}}{U'(C_{i,0})}=\sum_{t=0}^{\infty}R_{0\to t}^{-1}\left[(N_{i,t-1}-N_{i,t})dP_t-B_{i,t}\frac{\partial Q_{i,t}}{\partial Q_t}dQ_t\right]+\sum_{t=0}^{\infty}(\widetilde R_{i,0\to t}^{-1}-R_{0\to t}^{-1})\left[(N_{i,t-1}-N_{i,t})dP_t-B_{i,t}\frac{\partial Q_{i,t}}{\partial Q_t}dQ_t\right]+\sum_{t=0}^{\infty}\widetilde R_{i,0\to t}^{-1}\left(-B_{i,t}\frac{\partial Q_{i,t}}{\partial(N_{i,t}P_t)}N_{i,t}dP_t\right). \tag{25}
$$

For the linear log-rate specification (eq. 26, p. 36) and its loan-to-value welfare formula (eq. 27, p. 37):

$$
Q_{i,t}=Q_t e^{-\xi\,\text{LTV}_{i,t}}, \qquad \text{LTV}_{i,t}=-\frac{B_{i,t}}{N_{i,t}P_{i,t}}. \tag{26}
$$

$$
\frac{dV_{i,0}}{U'(C_{i,0})}=\sum_{t=0}^{\infty}\widetilde R_{i,0\to t}^{-1}\left[(N_{i,t-1}-N_{i,t})dP_t-B_{i,t}Q_{i,t}\left(\frac{dQ_t}{Q_t}+\xi\,\text{LTV}_{i,t}\frac{dP_t}{P_t}\right)\right], \quad \widetilde R_{i,0\to t}^{-1}=\prod_{s=0}^{t-1}Q_{i,s}(1-\xi\,\text{LTV}_{i,s}). \tag{27}
$$

## Method

The empirical method has two parts: defining the counterfactual price deviation and implementing the welfare formula with administrative data.

The first-order approximation and relative-price version (eqs. 12-13, pp. 14-15) are:

$$
\text{Welfare Gain}_i=\sum_{t=0}^{\infty}R_{0\to t}^{-1}\left[\sum_{k=1}^{K}(N_{i,k,t-1}-N_{i,k,t})\Delta P_{k,t}-B_{i,t}\Delta Q_t\right]. \tag{12}
$$

$$
\text{Welfare Gain}_i=\sum_{t=0}^{\infty}R_{0\to t}^{-1}\left[\sum_{k=1}^{K}(N_{i,k,t-1}-N_{i,k,t})P_{k,t}\frac{\Delta P_{k,t}}{P_{k,t}}-B_{i,t}Q_t\frac{\Delta Q_t}{Q_t}\right]. \tag{13}
$$

The paper's four-asset empirical decomposition (eq. 16, p. 17) is shown in full here, including deposits and equity:

$$
\begin{aligned}
\text{Welfare Gain}_i&=\sum_{k\in\{H,M,D,E\}}\text{Welfare Gain}_{i,k},\\
\text{Welfare Gain}_{i,H}&=\sum_{t=0}^{25}R^{-t}(N_{i,H,t-1}-N_{i,H,t})P_{H,t}\frac{PD_{H,t}-\overline{PD}_H}{PD_{H,t}},\\
\text{Welfare Gain}_{i,M}&=\sum_{t=0}^{25}R^{-t}(-B_{i,M,t}Q_{M,t})\frac{Q_{M,t}-\overline Q_M}{Q_{M,t}},\\
\text{Welfare Gain}_{i,D}&=\sum_{t=0}^{25}R^{-t}(-B_{i,D,t}Q_{D,t})\frac{Q_{D,t}-\overline Q_D}{Q_{D,t}},\\
\text{Welfare Gain}_{i,E}&=\sum_{t=0}^{25}R^{-t}(N_{i,E,t-1}-N_{i,E,t})P_{E,t}\frac{PD_{E,t}-\overline{PD}_E}{PD_{E,t}}.
\end{aligned} \tag{16}
$$

**Price-dividend deviation (eq. 14, p. 16).** The counterfactual is a balanced growth path where asset prices grow at the same rate as dividends (constant price-dividend ratio). The percentage price deviation for asset class $$k$$ is:

$$
\frac{\Delta P_{k,t}}{P_{k,t}} = \frac{PD_{k,t} - \overline{PD}_k}{PD_{k,t}}, \tag{14}
$$

where $$\overline{PD}_k$$ is the 1992-1996 average price-dividend ratio for asset class $$k$$. For housing, the price-dividend ratio is the price-to-rent ratio; for debt and deposits, it is the inverse of the real interest rate; for equity, it is the enterprise-value-to-cash-flow ratio.

**First-order sufficient statistic (eq. 15, p. 17).** Combining Proposition 1 with the percentage deviation formula and truncating the sum at $$T = 25$$ years (1994-2019) gives the implementable statistic:

$$
\text{Welfare Gain}_i = \sum_{t=0}^{T} R^{-t} \left( \sum_{k=1}^{K} (N_{i,k,t-1} - N_{i,k,t}) P_{k,t} \times \frac{PD_{k,t} - \overline{PD}_k}{PD_{k,t}} - B_{i,t} Q_t \times \frac{Q_t - \overline{Q}}{Q_t} \right), \tag{15}
$$

with discount rate $$R = 1.05$$ (the approximate average deposit/mortgage rate at the start of the sample), baseline values from 1992 to 1996, and $$T = 25$$.

**Asset-class decomposition (eq. 16, p. 17).** The statistic is computed separately for four asset classes and summed:

$$
\text{Welfare Gain}_{i,\text{housing}} = \sum_{t=0}^{25} R^{-t} \, (N_{i,H,t-1} - N_{i,H,t}) P_{H,t} \times \frac{PD_{H,t} - \overline{PD}_H}{PD_{H,t}},
$$

$$
\text{Welfare Gain}_{i,\text{debt}} = \sum_{t=0}^{25} R^{-t} \, (-B_{i,M,t} Q_{M,t}) \times \frac{Q_{M,t} - \overline{Q}_M}{Q_{M,t}},
$$

with analogous terms for deposits and equity. The formula builds on the `life-cycle-model` portfolio-choice framework and relies on `panel-regression` to estimate the loan-to-value elasticity of interest rates ($$\hat{\xi} \approx 0.0025$$ to $$0.004$$, from panel regressions in Appendix D.2.2) used in the Section 4.2 collateral-channel extension.

## Empirical specifications

**Data construction (Section 2.3, pp. 20-22).** Individual-level financial transactions are constructed from Norwegian administrative registries. Net transactions in housing are directly observed from housing transaction registries. For equity, net transactions are imputed as the change in market value minus capital gains (using individual stock ownership from VPS from 2005 onward; Financial Accounts aggregate capital gains before 2005). Indirect asset positions via privately owned businesses are consolidated through ten layers of ownership, allocating firm-level transactions to ultimate owners. Holdings and transactions are aggregated at the household level and distributed equally across adult household members.

**Baseline sample (Section 2.1, p. 17).** The sample covers the universe of Norwegians aged at least 18 at any point between 1994 and 2019, observed annually ($$T = 25$$ years). All monetary values are expressed in real 2011 Norwegian krone using the CPI, then converted to 2011 USD at a fixed rate of 5.607.

**Mortgage-rate specification (Appendix D.2.2, Table A9, p. A47).** The paper estimates the relationship between mortgage interest rates and lagged loan-to-value ratios as:

$$
\text{InterestRate}_{i,t}=\alpha_t+\xi\,\text{LTV}_{i,t-1}+u_{i,t}.
$$

The second specification adds age and education-group controls to this equation. Both include year fixed effects; standard errors are reported in parentheses in Table A9 (the equation text does not state a clustering adjustment). The sample is restricted to yearly interest rates in the 5th-95th percentile and debt-to-housing-value ratios from 0.2 to 0.99; N is 28,298,160 without controls and 27,501,724 with controls. Table A9 reports slopes 0.0024 (SE 0.00001) and 0.0039 (SE 0.00002), respectively.

**Revaluation gains comparison (Section 3.1, eq. 17, p. 26).** The revaluation gain is the NPV of the price-deviation effect on asset *holdings* rather than sales:

$$
\text{Revaluation Gain}_i = \sum_{t=0}^{T} R_{0 \to t}^{-1} \sum_{k=1}^{K} N_{i,k,t-1} P_{k,t-1} \, \Delta\!\left(\frac{P_{k,t}}{P_{k,t-1}}\right), \tag{17}
$$

where $$\Delta(P_{k,t}/P_{k,t-1})$$ is the deviation in the capital-gains component caused by the price deviation. Revaluation gains are positive for virtually all asset holders (average 16.4% of total wealth), while welfare gains average 0.0% and can be negative for buyers. The Spearman rank correlation between the two is 0.19 across individuals.

**Robustness and extensions (Section 4, pp. 31-42).** The baseline welfare gains are shown to be robust to (i) uninsurable income risk (which moderately dampens the welfare loss of the young), (ii) borrowing constraints with collateral effects (small average effect), (iii) second-order effects (small, since observed transaction patterns are roughly stable across cohorts), and (iv) extrapolation beyond 2019 (higher-persistence scenarios shift cohort gains toward older sellers and raise the average gain). Table 3 (p. 31) reports welfare gains across cohorts for each generalization; the combined-extension mean rises from $11,900 to $23,700.

**Second-order and post-sample specifications.** For a finite price change indexed by θ, the equivalent variation integrates the infinitesimal welfare effect along Hicksian asset paths (eq. 28, p. 39):

$$
EV_i(\theta)=\int_0^{\theta}\sum_{t=0}^{\infty}R_{0\to t}^{-1}(u)\left[\sum_{k=1}^{K}(N_{i,k,t-1}(u)-N_{i,k,t}(u))\Delta P_{k,t}-B_{i,t}(u)\Delta Q_t\right]du.
\tag{28}
$$

The trapezoidal second-order approximation (eq. 29, p. 39) averages baseline and counterfactual positions and uses the midpoint discount factor:

$$
EV_i(\theta)=\sum_{t=0}^{\infty}R_{0\to t}^{-1}(\theta/2)\left[\sum_{k=1}^{K}\frac{(N_{i,k,t-1}(0)-N_{i,k,t}(0))+(N_{i,k,t-1}(\theta)-N_{i,k,t}(\theta))}{2}\Delta P_{k,t}(\theta)-\frac{B_{i,t}(0)+B_{i,t}(\theta)}{2}\Delta Q_t(\theta)\right]+o(\theta^2).
\tag{29}
$$

The age-specific counterfactual transactions and bonds used in the second-order implementation are (eq. 30, p. 40):

$$
N_{a,k,t}(\theta)-N_{a,k,t-1}(\theta)=N_{a,k,0}(0)-N_{a,k,-1}(0),\qquad B_{a,t}(\theta)=G^tB_{a,0}(0),\quad G=1.01.
\tag{30}
$$

For extrapolation beyond 2019, valuation deviations decay geometrically at rate φ (eq. 31, p. 42):

$$
\log\frac{PD_{k,t}}{\overline{PD}_k}=\phi^{t-T}\log\frac{PD_{k,T}}{\overline{PD}_k},\qquad \log\frac{Q_t}{\overline Q}=\phi^{t-T}\log\frac{Q_T}{\overline Q},\quad t>T.
\tag{31}
$$

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Norwegian administrative registries (tax records, private business balance sheets, housing transaction registries, equity ownership registers) | Individual-level asset holdings, net transactions, income, and household identifiers, 1993-2019 | [Statistics Norway](/wiki/confidential/statistics-norway/) (licensed/confidential) |
| VPS (Norwegian Securities Registry, Verdipapirsentralen) | Listed equity holdings at the individual level from 2005 onward | [VPS Norway](/wiki/confidential/vps-norway/) (licensed/confidential) |
| Statistics Norway interest-rate and CPI databases | Real interest rates on mortgages and deposits for price-dividend ratio of debt/deposit asset classes | [Statistics Norway](/wiki/confidential/statistics-norway/) (licensed/confidential) |
| Norges Bank Historical Monetary Statistics (Eitrheim and Erlandsen 2005) | House price index (combined with Stats Norway rental index for price-to-rent series) | No page yet |
| Worldscope | Enterprise value and cash flows for listed Norwegian non-financial firms; equity valuation ratio | [Worldscope](/wiki/commercial/worldscope/) (licensed) |

Sample: Norway, universe of adults aged >=18, 1994-2019 (25 years, annual). Asset classes: housing (principal residence, secondary homes, recreational estates), mortgage debt, bank deposits, public and private equity.

## When to read the full paper

Read the [original](https://doi.org/10.1086/736769) if you are: (i) extending the sufficient statistic approach to other countries or asset classes (the method is general, the Norway calibration is country-specific); (ii) implementing the incomplete-markets or borrowing-constraint corrections (Propositions 2-3, Appendix D.1-D.2); (iii) replicating any of the distributional figures using the Harvard Dataverse replication package; or (iv) studying optimal capital gains and wealth taxation in environments with changing asset prices. The locators above point to the exact tables, figures, and equations.

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 133(11), November 2025. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The version of record is paywalled (University of Chicago Press). The LSE-hosted accepted manuscript is available under CC BY 4.0 at [https://researchonline.lse.ac.uk/id/eprint/129496/](https://researchonline.lse.ac.uk/id/eprint/129496/); this page extracts and re-expresses core results only.

> **Citation.** Fagereng, Andreas, Matthieu Gomez, Emilien Gouin-Bonenfant, Martin Holm, Benjamin Moll, and Gisle Natvik.
> "Asset-Price Redistribution."
> *Journal of Political Economy* 133, no. 11 (November 2025): 3494-3549.
> DOI: [10.1086/736769](https://doi.org/10.1086/736769).
