---
title: "Local Peer Effects and Corporate Investment: Bao & Goetz (2026)"
description: >-
  Distilled: Using staggered U.S. state corporate income tax changes as an
  instrument within cross-state Economic Areas, Bao and Goetz identify a positive
  causal effect of local peer firms' investment on a firm's own investment,
  confirmed separately for physical and intangible capital, with learning from
  same-type peers as the primary mechanism. Journal of Corporate Finance vol. 97
  (2026), paywalled. Seven core results with source locators, datasets used, and
  empirical specifications.
sidebar:
  label: Bao-Goetz 2026
  order: 1
tags: [paper-summary, corporate-finance, corporate-investment, peer-effects,
       instrumental-variables, panel-regression, peer-reviewed, unreplicated,
       data:wrds, data:ken-french]
paper:
  authors: Yangming Bao, Martin R. Goetz
  authorList:
    - { family: Bao, given: Yangming, orcid: "0000-0002-4149-9747", affiliation: "Capital University of Economics and Business, Beijing" }
    - { family: Goetz, given: "Martin R.", affiliation: Deutsche Bundesbank }
  year: 2026
  venue: Journal of Corporate Finance 97, 2026, 102935
  venueShort: J. Corp. Finance 2026
  doi: 10.1016/j.jcorpfin.2025.102935
  tier: field
  jel:
    codes: [G31, G30, D83]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Corporate Taxation and Avoidance", "Corporate Finance and Governance", "Private Equity and Venture Capital"]
  dataAccess: licensed-commercial
  outcome:
    - total corporate investment rate
    - physical investment rate
    - intangible investment rate
  outcomeClass: [firm-real-outcomes]
  license: "Paywalled; Elsevier TDM and STM-ASF licenses only; no CC license found in Crossref metadata (checked 2026-06-26)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Elsevier ScienceDirect; checked 2026-06-26)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [instrumental-variables, panel-regression]
    identification: instrument
  contributionType: [new-fact]
  mechanisms: [learning]
  scope:
    region: US
    assetClass: US public equities (NYSE, AMEX, NASDAQ)
    period: 1989-01..2014-12
    frequency: annual
    dataType: [market, accounting, administrative]
    granularity: [firm]
    n: "9,099 firms, 75,858 firm-years (OLS); 3,871 firms, 28,066 firm-years (2SLS subsample)"
  findings:
    - { ref: R1, outcome: total investment rate, metric: coefficient, value: "0.088*** (SE 0.016); 0.407 pp per 1-SD peer investment change", direction: positive }
    - { ref: R2, outcome: total investment rate, metric: coefficient, value: "0.772*** (SE 0.285); 1.57-pp increase per 1-SD instrumented peer investment (~6.9% of mean)", direction: positive, vsBenchmark: "2SLS vs OLS benchmark; Table 5 col 1 p. 12" }
    - { ref: R3, outcome: total investment rate, metric: coefficient, value: "-0.629** (SE 0.258), coefficients x100; approximately -63 bp per tax rise", direction: negative }
    - { ref: R4, outcome: physical investment rate, metric: coefficient, value: "0.628*** (SE 0.235) state-specific IV spec", direction: positive, vsBenchmark: "2SLS; Table 10 col 2 p. 17" }
    - { ref: R5, outcome: intangible investment rate, metric: coefficient, value: "0.869** (SE 0.425) fraction-of-peers-affected IV spec", direction: positive, vsBenchmark: "2SLS; Table 10 col 4 p. 17" }
    - { ref: R6, outcome: physical investment rate, metric: coefficient, value: "-0.115 (SE 0.197), not significant; cross-type intangible peers on physical investment", direction: none, vsBenchmark: "vs same-type physical peer effect 0.774***; Table 11 Panel A col 1 p. 18" }
    - { ref: R7, outcome: physical investment rate, metric: coefficient, value: "Interaction Above x peer physical 0.914*** (SE 0.298); base peer effect 0.497*** (SE 0.147)", direction: positive, vsBenchmark: "signal-precision moderation (equity vol); Table 12 Panel A col 1 p. 20" }
  resultType: new-finding
  relatesTo:
    - { cite: "Dougal et al. (2015)", relation: extends, note: "builds on their OLS framework for local peer investment to add causal IV identification" }
    - { cite: "Bustamante and Fresard (2021)", relation: extends, note: "complements their non-local industry peer-effects approach with local peer effects identified causally" }
    - { cite: "Heider and Ljungqvist (2015)", relation: builds-on, note: "adopts their state corporate income tax change data and first-difference identification strategy for firm investment" }
    - { cite: "Peters and Taylor (2017)", relation: builds-on, note: "adopts their total investment measure encompassing physical and intangible capital" }
    - { cite: "Mukherjee et al. (2017)", relation: cites, note: "prior evidence on state tax effects on innovative investment used for first-stage motivation" }
  openQuestions:
    - "Whether peer effects improve the efficiency of firms' investment decisions; the paper examines only how peer investment affects investment choices, not optimality (footnote 5, p. 2)."
    - "Whether cross-capital-type peer effects (physical peers on intangible investment and vice versa) operate at finer industry levels or over longer horizons, outside the scope of this paper (pp. 17-18)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read PDF in full; all locators and magnitudes extracted from the PDF; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; fixed R5 value (0.842→0.869, Table 10 col 4), Eq.(4) missing Δ on peer-investment variable, and missing i-subscript in denominators of Eqs.(1)-(2); all other rows and specifications confirmed." }
  licenceVerification:
    - { source: "Crossref works/10.1016/j.jcorpfin.2025.102935", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No CC license found. TDM and STM-ASF licenses only. content-version tdm, URL elsevier.com/tdm/userlicense/1.0/, delay-in-days 0, start 2026-02-01." }
---

**What this is.** A distilled skeleton of Bao and Goetz (2026). Read the
original at https://doi.org/10.1016/j.jcorpfin.2025.102935 to replicate or
extend.

## TL;DR

Bao and Goetz study how a firm's investment is shaped by the investment of
neighboring peer firms within the same local Economic Area (EA) and
Fama-French industry. Using a large panel of U.S. public firms from 1989
to 2014, OLS results confirm a positive correlation between a firm's
investment and local peer firms' average investment, consistent with
Dougal et al. (2015) and Bustamante and Fresard (2021). To establish a
causal link, the paper exploits
staggered increases in U.S. state corporate income tax rates. Because EAs
span multiple states, a tax increase in one state depresses investment in
the taxed state without directly affecting investment conditions for peer
firms in other states of the same EA. The resulting variation in peer
investment is used as an instrument in a 2SLS framework. 2SLS results
confirm a positive causal peer effect: a one-standard-deviation increase in
instrumented peer investment raises a firm's total investment by roughly
1.57 percentage points (about 6.9% of average total investment). Separating
physical and intangible capital, the paper finds that peer effects in
physical investment do not spill over to a firm's intangible investment, and
vice versa. This type-specificity is consistent with managers learning from
peers who invest in the same type of capital. Further, peer effects in
physical investment are stronger among firms with weaker information
precision (higher earnings or equity volatility relative to local peers),
and peer effects in intangible investment are stronger in knowledge-intensive
local industries, consistent with a learning mechanism. Strategic competition
(product-market substitution) does not explain the results.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | OLS: local peer total investment on firm total investment | Table 2 col 2, p. 6 | 0.088\*\*\* (SE 0.016); 0.407 pp per 1-SD peer investment change |
| R2 | 2SLS causal peer effect on total investment (fraction-of-peers IV) | Table 5 col 1, p. 12 | 0.772\*\*\* (SE 0.285); 1.57-pp increase per 1-SD instrumented peer investment (~6.9% of mean total investment) |
| R3 | First-difference OLS: state corporate income tax rise on firm total investment | Table 3 col 1, p. 9 | -0.629\*\* (SE 0.258), coefficients x100; approximately -63 bp drop |
| R4 | 2SLS: local peer physical investment on firm physical investment | Table 10 col 2, p. 17 | 0.628\*\*\* (SE 0.235) |
| R5 | 2SLS: local peer intangible investment on firm intangible investment | Table 10 col 4, p. 17 | 0.869\*\* (SE 0.425) |
| R6 | No cross-type peer effect: intangible peer investment on firm physical investment | Table 11 Panel A col 1, p. 18 | -0.115 (SE 0.197), not significant |
| R7 | Signal precision moderates physical peer effect (equity-vol interaction) | Table 12 Panel A col 1, p. 20 | Interaction: 0.914\*\*\* (SE 0.298); base peer effect: 0.497\*\*\* (SE 0.147) |

**Overall (paper's conclusion).** Local peer firms exert a positive causal
influence on a firm's investment behavior. This result is robust to
alternative IV constructions, exclusion of indirect tax-spillover channels
(customer-supplier links, subsidiaries in taxed states), local expansion
opportunity concerns, local demand shocks, and alternative clustering of
standard errors. The type-specificity of peer effects (R4, R5, R6) and the
learning-incentive heterogeneity (R7 and Table 12 Panel B) are consistent
with managers learning from peers who invest in the same type of capital,
particularly when information about future investment conditions is scarce.

## Theory / model

The paper has no formal model. It derives sign predictions from two
competing theoretical mechanisms and tests which one dominates.

**Learning / information sharing (positive peer effects).** Research on
social learning argues that managers can infer information about future
conditions by tracking the investment behavior of neighboring peers
(Scharfstein and Stein (1990); Bikhchandani et al. (1992)). When a
manager's own signal about the future is noisy and informational
asymmetries are significant, observing peers' investment reduces uncertainty
and induces correlated investment behavior (strategic complements). This
force predicts same-sign peer effects that are stronger when the learning
incentive is high (weaker own signal precision, i.e., higher earnings or
equity volatility) and when knowledge can plausibly diffuse locally (higher
R&D intensity of the peer set).

**Strategic product-market competition (negative peer effects).** An
increase in local investment may raise the price of shared local inputs and
intensify product-market competition, inducing neighboring firms to reduce
investment (Dixit (1980); Gal-Or (1987)). This force predicts negative peer
effects.

**Type-specificity prediction.** Drawing on learning theories, the paper
hypothesizes that peer effects in physical investment influence a firm's
physical investment but not its intangible investment, because observing a
neighbor's factory-building decision provides a clearer signal about
physical investment conditions than about R&D conditions, and vice versa.
This prediction is supported by Table 11 (R6 above).

The identification assumption is that a neighboring state's decision to
raise corporate income taxes is exogenous to the investment of firms in
other states of the same EA. Table 4 (p. 10) shows that state-level
aggregate investment and neighboring states' aggregate investment do not
predict state tax increases, and that neighboring states' tax policies are
not correlated with a home state's decision to raise taxes, supporting
exogeneity of the instrument.

## Method

The paper applies 2SLS within a first-difference panel framework. The
first-difference transformation eliminates time-invariant firm-level
unobservables; EA, industry, and year fixed effects absorb remaining
common variation.

**Investment measures** (PDF p. 4, Appendix A):

Physical investment rate (eq. 1):

$$I^{phy}_{i,t} = \frac{capx_{i,t}}{K^{total}_{i,t-1}} \tag{1}$$

Intangible investment rate (eq. 2):

$$I^{int}_{i,t} = \frac{\text{R\&D} + (0.3 \times \text{SG\&A})}{K^{total}_{i,t-1}} \tag{2}$$

Total investment rate (eq. 3):

$$I^{total}_{i,t} = I^{phy}_{i,t} + I^{int}_{i,t} \tag{3}$$

where $$K^{total}$$ is the replacement cost of physical capital (Compustat
item ppegt) plus intangible capital, both estimated following
Peters and Taylor (2017).

**Instrumental variables.** Three instruments capture the exogenous component
of the average peer investment change induced by state corporate income tax
changes. The first-stage instruments exploit variation across states within
the same cross-state EA:

1. *Fraction of local peers affected* ($$\%\text{LocalPeersAffected}$$): the
   fraction of firm $$i$$'s local peers located in a state that raises
   corporate income taxes in year $$t$$. A higher fraction produces a larger
   negative shock to average peer investment.

2. *Predicted state-specific* $$\Delta \bar{I}$$: the coefficient on the tax
   increase dummy from equation (5) is estimated state by state to recover the
   state-specific investment effect of a tax rise; the average predicted peer
   investment change across other local peers is then computed.

3. *Predicted state-industry-specific* $$\Delta \bar{I}$$: the same
   procedure at the state-industry level, capturing heterogeneity in how
   the tax shock transmits across industries.

All three instruments are highly significant in first-stage regressions
(KP Wald F-statistics: 130.4, 211.7, and 283.3 for the three 2SLS
specifications in Table 5, p. 12), satisfying instrument relevance.
The first-stage coefficients on the fraction-of-peers instrument (-0.017***)
and the predicted investment changes (+0.842***; +0.681***) have the
expected signs (Panel B, Table 5).

The cross-type peer effect analysis in Section 6.2 uses separate instruments
for physical and intangible peer investment. The signal-precision
heterogeneity analysis in Section 6.3 interacts the instrumented peer
investment with above-median dummy variables for equity volatility, ROA
volatility, and local-industry R&D intensity.

## Empirical specifications

**Eq. (4): Benchmark first-difference OLS** (PDF p. 5)

$$\Delta I_{i,t} = \beta \Delta\bar{I}_{-i,a,j,t} + \Delta X'_{i,t} \rho + \delta_{a/j/t} + \varepsilon_{i,t} \tag{4}$$

where $$\Delta I_{i,t}$$ is the annual change in firm $$i$$'s total
investment rate; $$\Delta\bar{I}_{-i,a,j,t}$$ is the change in average investment rate of
firm $$i$$'s local peers in the same EA $$a$$ and Fama-French 12 industry
$$j$$, excluding firm $$i$$; $$X'_{i,t}$$ includes two additional controls
for the general industry investment trend (firms in the same industry outside
the EA) and the local area investment trend (firms in the same EA but
different industries); $$\delta_{a/j/t}$$ are EA, industry, and year fixed
effects. Standard errors are clustered at the firm level. Estimated on
75,858 firm-years (level model) and 64,675 firm-years (first-difference
model, Table 2).

OLS peer effect (Table 2 col 2, p. 6): $$\hat{\beta} = 0.088^{***}$$ (SE
0.016), implying a 0.407 pp increase in total investment per one-SD increase
in local peer investment. OLS does not allow causal interpretation due to
common local latent factors.

**Eq. (5): Tax effect first-difference OLS** (PDF p. 8)

$$\Delta I_{i,t} = \beta_1 \text{TaxInc}_{s,t-1} + \beta_2 \text{TaxCut}_{s,t-1} + \gamma \Delta X_{i,t} + \delta_{a/j/t} + \varepsilon_{i,t} \tag{5}$$

where $$\text{TaxInc}_{s,t-1}$$ ($$\text{TaxCut}_{s,t-1}$$) equals 1 if
state $$s$$ increases (decreases) its corporate income tax rate in year
$$t-1$$, and 0 otherwise; $$X_{i,t}$$ includes firm-level controls (Tobin's
Q, cashflow, log assets) and macroeconomic state-level controls (GSP growth,
unemployment, union penetration, population growth, per capita income
growth). EA and industry fixed effects are included. Standard errors are
clustered at the firm level. Coefficients multiplied by 100; sample 67,319
to 59,291 firm-years (Table 3). A tax increase reduces total investment by
approximately 63 basis points ($$\hat{\beta}_1 = -0.629^{**}$$, SE 0.258,
Table 3 col 1). This is consistent with Mukherjee et al. (2017), who find
state tax increases reduce innovative investment, and motivates using the tax
shock as an instrument for peer investment.

**Eq. (6): Pre/post event dynamics** (PDF p. 9)

$$I_{i,t} = \sum_{k=-4}^{4} \beta_k \text{TaxInc}_{s,t+k} + \delta_i + \delta_t + \varepsilon_{i,t} \tag{6}$$

This regression traces the investment path four years before and after a
state corporate income tax increase, with the tax increase year as the
reference. Figure 2 (p. 8) shows flat pre-trends (no anticipatory effects)
and declining investment in post-event years, supporting the parallel-trends
assumption and the validity of the instrument.

**2SLS second stage** (Table 5, p. 12)

$$\Delta I_{i,t} = \alpha \Delta \hat{\bar{I}}_{-i,a,j,t} + \Delta X'_{i,t} \rho + \delta_{a/j/t} + \varepsilon_{i,t}$$

where $$\Delta \hat{\bar{I}}_{-i,a,j,t}$$ is the instrumented change in
peer investment from one of the three first-stage IV constructions. The
sample is restricted to firms in EAs spanning more than one state (3,871
firms, 28,066 firm-years). Year, industry, and EA fixed effects are
included. All three IV specifications yield positive and significant peer
effect estimates (0.772***, 0.829***, 1.082*** across the three columns of
Table 5 Panel A). Economic magnitude: 1.57 pp increase in total investment
per one-SD of instrumented peer investment (Table 5 col 1 discussion, p. 12),
equal to about 6.9% of average total investment.

**Signal precision / learning heterogeneity** (PDF p. 19)

$$\Delta I_{i,t} = \beta_1 \Delta \bar{I}_{-i,a,j,t} \times \text{Above}_{i,t} + \beta_2 \Delta \bar{I}_{-i,a,j,t} + \Delta X'_{i,t} \rho + \delta_{a/j/t} + \varepsilon_{i,t}$$

where $$\text{Above}_{i,t}$$ is a dummy equal to 1 if the firm's equity
volatility (or ROA volatility, or local-industry R&D ratio) exceeds the
sample median of its local peers. A significant positive $$\beta_1$$
indicates stronger peer effects for firms with weaker own information
precision. Physical investment: $$\hat{\beta}_1 = 0.914^{***}$$ (SE 0.298)
for equity volatility; intangible investment: $$\hat{\beta}_1 = 1.244^{***}$$
(SE 0.387) for local-industry R&D stock ratio (Table 12, p. 20). The peer
investment variable is instrumented using the state-industry predicted IV
throughout.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP/Compustat Merged | Firm-level investment (capx, R&D, SG&A), total capital (ppegt), assets, Tobin's Q, cashflow, stock returns and equity volatility; NYSE, AMEX, NASDAQ; 1989-2014 | [WRDS](/wiki/commercial/wrds/) |
| BEA Economic Areas | Geographic definition of local peer groups as regional markets; 2004 BEA boundaries; cross-state EAs identify the IV subsample (Fig. 1, p. 5) | no page yet |
| Fama-French 12 industries | Industry classification for peer group construction and industry fixed effects | [Ken French library](/wiki/datasets/ken-french/) |
| State corporate income tax rates | Exogenous investment shock; Heider and Ljungqvist (2015) panel of 121 U.S. state tax changes 1989-2011, extended to 2014 using Tax Foundation data | no page yet |
| State macroeconomic controls | GSP growth (BEA), unemployment rate (BLS), union penetration (Hirsch and Macpherson 2003), population growth and per capita income growth (Census) | no page yet |

**Sample.** OLS sample: 9,099 publicly listed U.S. firms on NYSE, AMEX, or
NASDAQ with non-missing total investment data, fiscal years 1989-2014
(75,858 firm-years). Firms with fewer than five local peers in a given year
are excluded. Average firm assets: $3.0 billion; average total investment
rate: 22.7% of total capital (one third physical, two thirds intangible).
Average number of local peer firms per EA: 42. Approximately 47.9% of
sample firms are headquartered in cross-state EAs. 2SLS subsample: 3,871
firms, 28,066 firm-years (cross-state EAs only). All variables winsorized
at the 0.5 percentile in each tail.

## When to read the full paper

Read the full paper if you need:
- A causal IV design for local peer effects in corporate investment using
  state corporate income tax shocks (Tables 5-9), including robustness for
  indirect tax-spillover channels (Table 6), local expansion opportunities
  (Table 7), local demand shocks (Table 8), and fixed-effects alternatives
  (Table 9).
- Evidence on the type-specificity of peer effects: physical capital peers
  affect physical investment but not intangible investment, and vice versa
  (Table 11), with heterogeneity by firm operational strategy (Panel B).
- Tests of the learning-from-peers mechanism via signal-precision and
  knowledge-spillover proxies (Table 12).
- The cross-state EA identification strategy, which can be adapted to other
  firm-level outcomes affected by local conditions.

## Attribution and rights

Paywalled. Access at https://doi.org/10.1016/j.jcorpfin.2025.102935.
No open-access or CC license found in Crossref metadata (checked 2026-06-26;
Elsevier TDM and STM-ASF licenses only). Rights held by Elsevier B.V.

Citation: Bao, Y. and Goetz, M. R. (2026). Local peer effects and corporate
investment. *Journal of Corporate Finance*, 97, 102935.
https://doi.org/10.1016/j.jcorpfin.2025.102935

This page is LLM-distilled, not human-verified, and not a reproduction of
the paper. All quantitative results are extracted from the source PDF with
source locators.
