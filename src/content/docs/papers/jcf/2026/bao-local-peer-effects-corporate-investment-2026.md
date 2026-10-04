---
title: "Local Peer Effects and Corporate Investment: Bao & Goetz (2026)"
description: >-
  Distilled: Using staggered U.S. state corporate income tax changes as an
  instrument within cross-state Economic Areas, Bao and Goetz identify a positive
  causal effect of local peer firms' investment on a firm's own investment,
  confirmed separately for physical and intangible capital. The same-type and
  heterogeneity patterns are consistent with learning from peers. Journal of Corporate Finance vol. 97
  (2026), paywalled. Twenty-three core results with source locators, datasets used, and
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
    assignedBy: gpt-6-luna
    date: 2026-10-04
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
  resultsCount: 23
  citedByCount: 0
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [instrumental-variables, panel-regression]
    identification: instrument
  contributionType: [new-fact]
  mechanisms: [learning, networks, market-power]
  scope:
    region: US
    assetClass: US public equities (NYSE, AMEX, NASDAQ)
    period: 1989-01..2014-12
    frequency: annual
    dataType: [market, accounting, administrative]
    granularity: [firm]
    n: "9,099 firms, 75,858 firm-years (OLS); 3,871 firms, 28,066 firm-years (2SLS subsample)"
  findings:
    - { ref: R1, outcome: total corporate investment rate, metric: coefficient, value: "0.088*** (SE 0.016); 0.407 pp per 1-SD peer investment change", direction: positive }
    - { ref: R2, outcome: total corporate investment rate, metric: coefficient, value: "0.772*** (SE 0.285); 1.57-pp increase per 1-SD instrumented peer investment (~6.9% of mean)", direction: positive, vsBenchmark: "2SLS vs OLS benchmark; Table 5 col 1 p. 12" }
    - { ref: R3, outcome: total corporate investment rate, metric: coefficient, value: "-0.629** (SE 0.258), coefficients x100; approximately -63 bp per tax rise", direction: negative }
    - { ref: R4, outcome: physical investment rate, metric: coefficient, value: "0.628*** (SE 0.235) state-specific IV spec", direction: positive, vsBenchmark: "2SLS; Table 10 col 2 p. 17" }
    - { ref: R5, outcome: intangible investment rate, metric: coefficient, value: "0.869** (SE 0.425) fraction-of-peers-affected IV spec", direction: positive, vsBenchmark: "2SLS; Table 10 col 4 p. 17" }
    - { ref: R6, outcome: physical investment rate, metric: coefficient, value: "-0.115 (SE 0.197), not significant; cross-type intangible peers on physical investment", direction: none, vsBenchmark: "vs same-type physical peer effect 0.774***; Table 11 Panel A col 1 p. 18" }
    - { ref: R7, outcome: physical investment rate, metric: coefficient, value: "Interaction Above x peer physical 0.914*** (SE 0.298); base peer effect 0.497*** (SE 0.147)", direction: positive, vsBenchmark: "signal-precision moderation (equity vol); Table 12 Panel A col 1 p. 20" }
    - { ref: R8, outcome: total corporate investment rate, metric: level, value: "Mean 0.227 (SD 0.202), N = 75,858 firm-years; physical investment mean 0.074 and intangible investment mean 0.147", direction: positive, vsBenchmark: "Table 1 p. 6; mean of local peers per firm = 42.182" }
    - { ref: R9, outcome: total corporate investment rate, metric: coefficient, value: "Tax-cut coefficient: -0.350 (SE 0.300) to 0.438 (SE 0.372) without controls; -0.497* (SE 0.280) to 0.396 (SE 0.329) with controls", direction: mixed, vsBenchmark: "Tax cuts show no consistent significant effect across specifications, Table 3 p. 9" }
    - { ref: R10, outcome: total corporate investment rate, metric: coefficient, value: "No statistically significant pre-increase coefficients; post-increase coefficients indicate declining investment", direction: negative, vsBenchmark: "Event time relative to state corporate tax increase; Figure 2 p. 8" }
    - { ref: R11, outcome: total corporate investment rate, metric: coefficient, value: "Home-state investment level -0.083 (SE 0.140); neighboring-state investment level -1.100 (SE 0.711); home-state investment growth 0.132 (SE 0.137); neighboring-state growth -0.295 (SE 0.617); neighboring TaxInc 0.006 (SE 0.025), TaxCut 0.002 (SE 0.012)", direction: none, vsBenchmark: "No significant association with tax-rise timing; Table 4 p. 10" }
    - { ref: R12, outcome: total corporate investment rate, metric: coefficient, value: "0.829*** (SE 0.290) state-specific IV; 1.082*** (SE 0.327) state-industry IV", direction: positive, vsBenchmark: "Alternative 2SLS instruments alongside R2's fraction-affected estimate; Table 5 Panel A cols 2-3 p. 12" }
    - { ref: R13, outcome: total corporate investment rate, metric: coefficient, value: "0.833*** (SE 0.279) and 1.060*** (SE 0.300) excluding major customers; 1.650** (SE 0.809) and 1.906** (SE 0.750) excluding firms with subsidiaries in taxed states", direction: positive, vsBenchmark: "Indirect tax spillover exclusions; Table 6 p. 13" }
    - { ref: R14, outcome: total corporate investment rate, metric: coefficient, value: "Neighbor_TaxInc: -0.004* (SE 0.003), -0.006** (SE 0.003), -0.005 (SE 0.004); interaction terms 0.009 (SE 0.006) and 0.003 (SE 0.005), both insignificant", direction: negative, vsBenchmark: "No evidence peer effect is explained by fewer neighboring-state expansion opportunities; Table 7 p. 14" }
    - { ref: R15, outcome: total corporate investment rate, metric: coefficient, value: "Tradable/nontradable interaction estimates: 0.004 (SE 0.543), -0.349 (SE 0.507), -0.704 (SE 0.767), -0.519 (SE 0.609), all insignificant; estimates remain positive after excluding sales-tax rises (0.955***, SE 0.346; 1.079***, SE 0.351) and personal-income-tax rises (0.823**, SE 0.338; 0.914**, SE 0.365)", direction: positive, vsBenchmark: "Table 8 Panel A and B p. 15" }
    - { ref: R16, outcome: total corporate investment rate, metric: coefficient, value: "1.930*** (SE 0.746), 2.052*** (SE 0.669), 2.233*** (SE 0.765)", direction: positive, vsBenchmark: "Firm fixed-effects 2SLS robustness; Table 9 p. 16" }
    - { ref: R17, outcome: intangible investment rate, metric: coefficient, value: "Physical-peer coefficients -0.441 (SE 0.478) and -0.065 (SE 0.224), neither significant", direction: none, vsBenchmark: "Physical peers do not affect intangible investment; Table 11 Panel A cols 3-4 p. 18" }
    - { ref: R18, outcome: physical investment rate, metric: coefficient, value: "Physical-peer effect on physical investment: -0.101 (SE 0.179) for high-intangible firms, 1.433*** (SE 0.404) for high-physical firms; intangible-peer effect on physical investment: 0.149 (SE 0.179), 0.058 (SE 0.314); physical-peer effect on intangible investment: -0.080 (SE 0.614), 0.225 (SE 0.148); intangible-peer effect on intangible investment: 1.956** (SE 0.792) for high-intangible firms, 0.269* (SE 0.152) for high-physical firms", direction: mixed, vsBenchmark: "Same-type effects dominate and are concentrated among firms for which that capital type is central; Table 11 Panel B p. 18" }
    - { ref: R19, outcome: physical investment rate, metric: coefficient, value: "ROA-volatility interaction 1.928*** (SE 0.670), base effect 0.112 (SE 0.223); intangible-investment interactions for equity volatility -0.060 (SE 0.641) and ROA volatility 0.561 (SE 0.374), both insignificant", direction: positive, vsBenchmark: "Table 12 Panel A col 2 and Panel B cols 1-2 p. 20" }
    - { ref: R20, outcome: intangible investment rate, metric: coefficient, value: "Industry R&D interaction 0.815* (SE 0.456), base 0.506 (SE 0.457); local-industry R&D interaction 1.244*** (SE 0.387), base 0.517** (SE 0.244); physical-investment interactions -0.906 (SE 0.968) and -0.463 (SE 0.646), insignificant", direction: positive, vsBenchmark: "Intangible peer effects are stronger in knowledge-intensive settings; Table 12 Panel A-B cols 3-4 p. 20" }
    - { ref: R21, outcome: total corporate investment rate, metric: coefficient, value: "0.184*** (SE 0.021)", direction: positive, vsBenchmark: "Firm fixed-effects estimate in Table 2 col 1; Table 2 p. 7" }
    - { ref: R22, outcome: total corporate investment rate, metric: coefficient, value: "First stage: fraction affected -0.017*** (SE 0.002); predicted state-specific peer investment 0.842*** (SE 0.058); predicted state-industry peer investment 0.681*** (SE 0.040); KP Wald F = 130.4, 211.7, 283.3", direction: mixed, vsBenchmark: "All three instruments are relevant; Table 5 Panel B p. 12" }
    - { ref: R23, outcome: physical investment rate, metric: coefficient, value: "First stages: affected-peer fraction -0.012*** (SE 0.001) physical and -0.007*** (SE 0.001) intangible; predicted peer changes 1.351*** (SE 0.106), 1.072*** (SE 0.053), 0.750*** (SE 0.066), 0.541*** (SE 0.031); KP Wald F-statistics 151.6, 161.7, 403.8 (physical) and 40.63, 128.1, 303.2 (intangible)", direction: mixed, vsBenchmark: "Instrument relevance for capital-type 2SLS; Table 10 Panel B p. 17" }
  resultType: confirms
  relatesTo:
    - { cite: "Dougal et al. (2015)", doi: '10.1111/jofi.12215', relation: extends, note: "builds on their OLS framework for local peer investment to add causal IV identification" }
    - { cite: "Bustamante and Fresard (2021)", relation: extends, note: "complements their non-local industry peer-effects approach with local peer effects identified causally" }
    - { cite: "Heider and Ljungqvist (2015)", doi: '10.1016/j.jfineco.2015.01.004', relation: builds-on, note: "adopts their state corporate income tax change data and first-difference identification strategy for firm investment" }
    - { cite: "Peters and Taylor (2017)", doi: '10.1016/j.jfineco.2016.03.011', relation: builds-on, note: "adopts their total investment measure encompassing physical and intangible capital" }
    - { cite: "Mukherjee et al. (2017)", doi: '10.1016/j.jfineco.2017.01.004', relation: cites, note: "prior evidence on state tax effects on innovative investment used for first-stage motivation" }
  openQuestions:
    - "Whether peer effects improve the efficiency of firms' investment decisions; the paper examines only how peer investment affects investment choices, not optimality (footnote 5, p. 2)."
    - "Whether cross-capital-type peer effects (physical peers on intangible investment and vice versa) operate at finer industry levels or over longer horizons, outside the scope of this paper (pp. 17-18)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read PDF in full; all locators and magnitudes extracted from the PDF; not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; fixed R5 value (0.842→0.869, Table 10 col 4), Eq.(4) missing Δ on peer-investment variable, and missing i-subscript in denominators of Eqs.(1)-(2); all other rows and specifications confirmed." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and augmented the Core results/findings axes, mechanisms discussion, and complete numbered equations and estimating specifications; additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 23 Core rows, equations, specifications, classification, prose, and frontmatter against the PDF; corrected channel wording, moderator definitions, and finding directions. Table-locator pass (2026-10-04): R1, from Table 2 p. 6 to p. 7; R15, from Table 8 p. 14 to p. 15; R16, from Table 9 p. 15 to p. 16; R21, from Table 2 p. 6 to p. 7." }
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
1.57 percentage points (about 6.9% of average total investment). For physical
and intangible capital, peer investment affects firms' investment in the same
type, with no significant cross-type effects. This type-specificity is
consistent with managers learning from
peers who invest in the same type of capital. Further, peer effects in
physical investment are stronger among firms with weaker information
precision (higher earnings or equity volatility relative to local peers),
and peer effects in intangible investment are stronger in knowledge-intensive
local industries, consistent with a learning mechanism. The evidence is more
consistent with learning than with the competing strategic-substitutes
prediction; the paper does not separately identify that channel.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | OLS: local peer total investment on firm total investment | Table 2 col 2, p. 7 | 0.088\*\*\* (SE 0.016); 0.407 pp per 1-SD peer investment change |
| R2 | 2SLS causal peer effect on total investment (fraction-of-peers IV) | Table 5 col 1, p. 12 | 0.772\*\*\* (SE 0.285); 1.57-pp increase per 1-SD instrumented peer investment (~6.9% of mean total investment) |
| R3 | First-difference OLS: state corporate income tax rise on firm total investment | Table 3 col 1, p. 9 | -0.629\*\* (SE 0.258), coefficients x100; approximately -63 bp drop |
| R4 | 2SLS: local peer physical investment on firm physical investment | Table 10 col 2, p. 17 | 0.628\*\*\* (SE 0.235) |
| R5 | 2SLS: local peer intangible investment on firm intangible investment | Table 10 col 4, p. 17 | 0.869\*\* (SE 0.425) |
| R6 | No cross-type peer effect: intangible peer investment on firm physical investment | Table 11 Panel A col 1, p. 18 | -0.115 (SE 0.197), not significant |
| R7 | Signal precision moderates physical peer effect (equity-vol interaction) | Table 12 Panel A col 1, p. 20 | Interaction: 0.914\*\*\* (SE 0.298); base peer effect: 0.497\*\*\* (SE 0.147) |
| R8 | Descriptive level and composition of investment in the main sample | Table 1, p. 6 | Total investment mean 0.227 (SD 0.202; N = 75,858); physical mean 0.074 and intangible mean 0.147; 42.182 local peers on average |
| R9 | Tax-cut effect is not robust across first-difference specifications | Table 3, p. 9 | Tax-cut estimates range from -0.350 (SE 0.300) to 0.438 (SE 0.372) without controls and -0.497\* (SE 0.280) to 0.396 (SE 0.329) with controls; no consistent significant effect |
| R10 | No anticipatory investment trend before state tax increases; investment falls afterward | Figure 2, p. 8 | Pre-increase coefficients are not statistically significant; investment declines after the tax increase |
| R11 | Instrument-timing check: firm investment and neighboring tax policy do not predict tax increases | Table 4, p. 10 | Home-state level -0.083 (SE 0.140), neighbor level -1.100 (SE 0.711), home-state growth 0.132 (SE 0.137), neighbor growth -0.295 (SE 0.617); neighbor TaxInc 0.006 (SE 0.025), TaxCut 0.002 (SE 0.012) |
| R12 | Main local peer effect holds with the two predicted-investment instruments | Table 5 Panel A cols 2-3, p. 12 | State-specific IV: 0.829\*\*\* (SE 0.290); state-industry IV: 1.082\*\*\* (SE 0.327) |
| R13 | Peer effects survive exclusions for customer and subsidiary tax exposure | Table 6, p. 13 | Excluding major customers: 0.833\*\*\* (SE 0.279), 1.060\*\*\* (SE 0.300); excluding subsidiaries in taxed states: 1.650\*\* (SE 0.809), 1.906\*\* (SE 0.750) |
| R14 | Nearby tax increases predict lower investment, but expansion-opportunity proxies do not moderate the effect | Table 7, p. 14 | Neighbor_TaxInc: -0.004\* (SE 0.003), -0.006\*\* (SE 0.003), -0.005 (SE 0.004); interactions: 0.009 (SE 0.006), 0.003 (SE 0.005), neither significant |
| R15 | Local-demand checks do not explain the peer effect | Table 8 Panels A-B, p. 15 | Tradable/nontradable interaction estimates 0.004 (SE 0.543), -0.349 (SE 0.507), -0.704 (SE 0.767), -0.519 (SE 0.609), all insignificant; effects stay positive after excluding sales-tax rises (0.955\*\*\*, SE 0.346; 1.079\*\*\*, SE 0.351) or personal-income-tax rises (0.823\*\*, SE 0.338; 0.914\*\*, SE 0.365) |
| R16 | Main peer effect holds in firm fixed-effects 2SLS | Table 9, p. 16 | 1.930\*\*\* (SE 0.746), 2.052\*\*\* (SE 0.669), 2.233\*\*\* (SE 0.765) |
| R17 | Physical peer investment does not affect firm intangible investment | Table 11 Panel A cols 3-4, p. 18 | -0.441 (SE 0.478) and -0.065 (SE 0.224), neither statistically significant |
| R18 | Same-type peer effects vary with a firm's primary capital intensity | Table 11 Panel B, p. 18 | Physical peers on physical investment: -0.101 (SE 0.179) for high-intangible firms, 1.433\*\*\* (SE 0.404) for high-physical firms; intangible peers on physical investment: 0.149 (SE 0.179), 0.058 (SE 0.314); physical peers on intangible investment: -0.080 (SE 0.614), 0.225 (SE 0.148); intangible peers on intangible investment: 1.956\*\* (SE 0.792), 0.269\* (SE 0.152), respectively |
| R19 | Signal-precision moderation is strong for physical investment and weak for intangible investment | Table 12 Panel A col 2 and Panel B cols 1-2, p. 20 | Physical peer x ROA volatility: 1.928\*\*\* (SE 0.670), base 0.112 (SE 0.223); intangible interactions: -0.060 (SE 0.641) and 0.561 (SE 0.374), both insignificant |
| R20 | Knowledge spillovers strengthen intangible peer effects, not physical peer effects | Table 12 Panels A-B cols 3-4, p. 20 | Intangible interaction: 0.815\* (SE 0.456), base 0.506 (SE 0.457); local-industry interaction 1.244\*\*\* (SE 0.387), base 0.517\*\* (SE 0.244); physical interactions -0.906 (SE 0.968) and -0.463 (SE 0.646), insignificant |
| R21 | Level fixed-effects specification also finds positive local peer association | Table 2 col 1, p. 7 | 0.184\*\*\* (SE 0.021) |
| R22 | The three excluded instruments predict peer investment and pass first-stage relevance tests | Table 5 Panel B, p. 12 | Coefficients: -0.017\*\*\* (SE 0.002), 0.842\*\*\* (SE 0.058), 0.681\*\*\* (SE 0.040); KP Wald F-statistics: 130.4, 211.7, 283.3 |
| R23 | First-stage instruments predict both physical and intangible peer investment | Table 10 Panel B, p. 17 | Physical instrument coefficients: -0.012\*\*\* (SE 0.001), 1.351\*\*\* (SE 0.106), 1.072\*\*\* (SE 0.053); intangible: -0.007\*\*\* (SE 0.001), 0.750\*\*\* (SE 0.066), 0.541\*\*\* (SE 0.031); KP F-statistics: 151.6, 161.7, 403.8 (physical), 40.63, 128.1, 303.2 (intangible) |

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
competing theoretical mechanisms and examines evidence consistent with each.

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

$$I^{\text{phy}}_{i,t} = \frac{\text{capx}_{i,t}}{K^{\text{total}}_{i,t-1}} \tag{1}$$

Intangible investment rate (eq. 2):

$$I^{\text{int}}_{i,t} = \frac{\text{R\&D}_{i,t} + (0.3 \times \text{SG\&A}_{i,t})}{K^{\text{total}}_{i,t-1}} \tag{2}$$

Total investment rate (eq. 3):

$$I^{\text{total}}_{i,t} = I^{\text{phy}}_{i,t} + I^{\text{int}}_{i,t} \tag{3}$$

where $$K^{total}$$ is the replacement cost of physical capital (Compustat
item ppegt) plus intangible capital, both estimated following
Peters and Taylor (2017).

Firm total capital combines the replacement cost of physical capital
(Compustat item ppegt) and intangible capital estimated following Peters and
Taylor (2017) (PDF p. 4, footnote 8).

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

**Table 2 col 1: level fixed-effects benchmark** (PDF p. 7). The dependent
variable is the firm's total investment rate and the focal regressor is
leave-one-out total investment of its peers in the same EA and industry:

$$I_{i,t} = \beta \bar{I}_{-i,a,j,t} + \gamma_1 \bar{I}_{a,-j,t} + \gamma_2 \bar{I}_{-a,j,t} + \alpha_i + \alpha_a + \alpha_j + \lambda_t + \varepsilon_{i,t}$$

The fixed-effects specification uses firm, EA, industry, and year fixed
effects as indicated in the table; standard errors are clustered by firm.
The full sample includes 75,858 firm-years. Table 2 col 1 reports the
positive peer coefficient in R21. The preferred first-difference form is
equation (4).

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

OLS peer effect (Table 2 col 2, p. 7): $$\hat{\beta} = 0.088^{***}$$ (SE
0.016), implying a 0.407 pp increase in total investment per one-SD increase
in local peer investment. OLS does not allow causal interpretation due to
common local latent factors.

Table 2 col 2 uses 64,675 differenced firm-years, EA, industry, and year fixed
effects, and firm-clustered standard errors (PDF p. 7).

**Eq. (5): Tax effect first-difference OLS** (PDF p. 8)

$$\Delta I_{i,t} = \beta_1 \text{TaxInc}_{s,t-1} + \beta_2 \text{TaxCut}_{s,t-1} + \gamma \Delta X_{i,t} + \delta_{j,t} + \delta_a + \varepsilon_{i,t} \tag{5}$$

where $$\text{TaxInc}_{s,t-1}$$ ($$\text{TaxCut}_{s,t-1}$$) equals 1 if
state $$s$$ increases (decreases) its corporate income tax rate in year
$$t-1$$, and 0 otherwise; $$X_{i,t}$$ includes firm-level controls (Tobin's
Q, cashflow, log assets) and macroeconomic state-level controls (GSP growth,
unemployment, union penetration, population growth, per capita income
growth). Industry-by-year and EA fixed effects are included. Standard errors are
clustered at the firm level. Coefficients are multiplied by 100; samples are
67,319 to 59,291 firm-years for the full sample and 28,802 to 25,476 for
the multi-state-EA subsample (Table 3). A tax increase reduces total investment by
approximately 63 basis points ($$\hat{\beta}_1 = -0.629^{**}$$, SE 0.258,
Table 3 col 1). This is consistent with Mukherjee et al. (2017), who find
state tax increases reduce innovative investment, and motivates using the tax
shock as an instrument for peer investment.

**Eq. (6): Pre/post event dynamics** (PDF p. 9)

$$I_{i,t} = \beta_{-4}\text{TaxInc}_{s,t-4} + \beta_{-3}\text{TaxInc}_{s,t-3} + \cdots + \beta_3\text{TaxInc}_{s,t+3} + \beta_4\text{TaxInc}_{s,t+4} + \delta_i + \delta_t + \varepsilon_{i,t} \tag{6}$$

This event-study traces investment four years before and after state corporate
tax rises, with the event year as the reference category (PDF pp. 8-9).
Firm and year fixed effects are included and standard errors are clustered at
the firm level. Figure 2 (p. 8) shows no significant pre-event trend and
declining investment after the tax rise. The sample follows the tax-response
specification in Table 3.

**Table 4: State tax-rise timing check** (PDF p. 10). The state-year
specification regresses an indicator for a corporate tax rise on home-state
and neighboring-state investment levels or growth, neighboring-state tax
changes, and the paper's state controls:

$$\text{TaxRise}_{s,t} = \theta_1 \text{HomeInvest}_{s,t-1} + \theta_2 \text{NeighborInvest}_{s,t-1} + \theta_3 \Delta\text{HomeInvest}_{s,t-1} + \theta_4 \Delta\text{NeighborInvest}_{s,t-1} + \theta_5 \text{NeighborTaxChanges}_{s,t-1} + \Gamma' Z_{s,t} + \alpha_s + \lambda_t + u_{s,t}$$

The reported columns vary the investment-level, investment-growth, and
neighboring-tax regressors. State and year fixed effects are included, and
standard errors are clustered at the state level. Table 4 uses 1,171 to 1,248
state-year observations depending on the specification.

**2SLS second stage** (Table 5, p. 12)

$$\Delta I_{i,t} = \alpha \Delta \widehat{\bar{I}}_{-i,a,j,t} + \Delta X'_{i,t} \rho + \delta_a + \delta_j + \delta_t + \varepsilon_{i,t}$$

where $$\Delta \hat{\bar{I}}_{-i,a,j,t}$$ is the instrumented change in
peer investment from one of the three first-stage IV constructions. The
sample is restricted to firms in EAs spanning more than one state (3,871
firms, 28,066 firm-years). Year, industry, and EA fixed effects are
included. Standard errors are clustered at the firm level. All three IV specifications yield positive and significant peer
effect estimates (0.772***, 0.829***, 1.082*** across the three columns of
Table 5 Panel A). Economic magnitude: 1.57 pp increase in total investment
per one-SD of instrumented peer investment (Table 5 col 1 discussion, p. 12),
equal to about 6.9% of average total investment.

The corresponding first stage replaces the endogenous change in peer
investment with one excluded instrument at a time (Table 5 Panel B, p. 12):

$$\Delta\bar{I}_{-i,a,j,t} = \pi Z_{i,t} + \Delta X'_{i,t}\kappa + \delta_a + \delta_j + \delta_t + v_{i,t}$$

Here $$Z_{i,t}$$ is the fraction of local peers affected by a tax increase,
the state-specific predicted leave-out peer investment change, or the
state-industry-specific predicted change. The first-stage sample has 28,066
observations, year, EA, and industry fixed effects, and firm-clustered
standard errors. KP Wald F-statistics are 130.4, 211.7, and 283.3.

**Physical and intangible outcomes** (Tables 10-11, PDF pp. 17-18). The
paper re-estimates the second stage by replacing the dependent variable and
the instrumented peer investment with the relevant capital type. For the
cross-type tests, it includes both peer investment types:

$$\Delta I^{c}_{i,t} = \alpha_{c,c}\Delta\widehat{\bar{I}}^{c}_{-i,a,j,t} + \alpha_{c,c'}\Delta\widehat{\bar{I}}^{c'}_{-i,a,j,t} + \Delta X'_{i,t}\rho + \delta_a + \delta_j + \delta_t + \varepsilon_{i,t}, \quad c,c' \in \{\text{phy},\text{int}\}$$

Each peer investment type is instrumented using its corresponding tax-based
predicted peer-investment change. The estimation uses first differences,
year, EA, and industry fixed effects, and firm-clustered standard errors.
Table 10 uses 28,090 physical-investment observations and 28,010
intangible-investment observations; Table 11 Panel A has 27,492 to 27,552
observations, while Panel B uses 13,038 to 14,455 observations by
capital-intensity split.

**Signal precision / learning heterogeneity** (PDF p. 19)

$$\Delta I_{i,t} = \beta_1 \Delta \bar{I}_{-i,a,j,t} \times \text{Above}_{i,t} + \beta_2 \Delta \bar{I}_{-i,a,j,t} + \Delta X'_{i,t} \rho + \delta_{a/j/t} + \varepsilon_{i,t}$$

where $$\text{Above}_{i,t}$$ is a dummy equal to 1 if the firm's equity
volatility or ROA volatility exceeds the median among its local peers, if its
industry R&D stock ratio exceeds the median across industries, or if its local
share of industry-year R&D stock (excluding the firm) exceeds the sample median. A significant positive $$\beta_1$$
indicates stronger peer effects for firms with weaker own information
precision. Physical investment: $$\hat{\beta}_1 = 0.914^{***}$$ (SE 0.298)
for equity volatility; intangible investment: $$\hat{\beta}_1 = 1.244^{***}$$
(SE 0.387) for local-industry R&D stock ratio (Table 12, p. 20). The peer
investment variable is instrumented using the state-industry predicted IV
throughout.

For Table 12 (PDF p. 20), the dependent and endogenous peer-investment
variables are physical in Panel A and intangible in Panel B. The four
moderators are above-median equity volatility, ROA volatility, industry R&D
stock ratio, and local-industry R&D stock ratio. The state-industry predicted
peer-investment change instruments the endogenous peer level and its
interaction with the moderator. Every specification includes year, EA, and
industry fixed effects and firm-clustered standard errors; observations range
from 22,359 to 28,090.

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
