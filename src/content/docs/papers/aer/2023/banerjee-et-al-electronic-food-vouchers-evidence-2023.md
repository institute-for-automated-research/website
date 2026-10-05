---
title: "Electronic Food Vouchers: Banerjee, Hanna, Olken, Satriawan & Sumarto (2023)"
description: >-
  Distilled: An at-scale RCT across 105 Indonesian districts (3.4 million
  households) reports that switching from in-kind rice distribution to electronic food
  vouchers raised subsidy receipt by 46 percent for targeted households and cut
  poverty by 20 percent for the bottom 15 percent. The authors attribute these gains
  primarily to improved administrative fidelity; price-theoretic effects were smaller. American Economic
  Review 2023, paywalled. Twenty-two core results with source locators, the
  administrative-fidelity bargaining model, and the estimating specifications.
sidebar:
  label: Banerjee et al. 2023
  order: 1
tags: [paper-summary, macro, cross-section, peer-reviewed,
       unreplicated, data:susenas, data:podes]
paper:
  authors: >-
    Abhijit Banerjee, Rema Hanna, Benjamin A. Olken, Elan Satriawan, Sudarno Sumarto
  authorList:
    - { family: Banerjee, given: Abhijit, orcid: "0000-0001-9923-6088", affiliation: MIT }
    - { family: Hanna, given: Rema, orcid: "0000-0001-6845-2327", affiliation: Harvard Kennedy School }
    - { family: Olken, given: "Benjamin A.", affiliation: MIT }
    - { family: Satriawan, given: Elan, affiliation: "Gadjah Mada University and TNP2K" }
    - { family: Sumarto, given: Sudarno, affiliation: "TNP2K and SMERU" }
  year: 2023
  venue: "American Economic Review 113(2), February 2023, pp. 514-547"
  venueShort: AER 2023
  doi: 10.1257/aer.20210461
  jel:
    codes: [H53, I18, I32, I38, O12]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Gender, Labor, and Family Dynamics
    - Poverty, Education, and Child Welfare
    - Income, Poverty, and Inequality
  dataAccess: public
  outcome:
    - poverty rate (share of households below the poverty line)
    - total subsidy received per month
    - food consumption (rice and egg protein)
    - rice price level
    - share of recipient household-months receiving the full transfer
    - household per-capita consumption net of subsidy
    - subsidized food consumption (rice and egg protein)
    - share of intended district subsidy received by households
    - administrative cost as a share of benefits disbursed
    - baseline balance across treatment and control districts
    - program distribution channel
    - local political response to benefit concentration
    - household consumption of other foods and temptation goods
  outcomeClass: [social-welfare]
  license: >-
    AEA copyright; no CC licence found in Crossref record (standard paywalled
    AEA publication)
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (pubs.aeaweb.org, checked 2026-06-24)"
  redistribution: extract-only
  resultsCount: 22
  citedByCount: 49

  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [lasso]
    identification: randomized
  contributionType: [new-fact]
  mechanisms: [agency, behavioral-bias]
  scope:
    region: Indonesia
    period: "2018-03..2019-03"
    frequency: mixed
    dataType: [administrative, survey, experimental]
    granularity: [individual, aggregate]
    n: "105 districts, ~66,000 households in the March 2019 SUSENAS endline wave"
  findings:
    - ref: R1
      outcome: total subsidy received per month
      metric: level
      value: "Rp 13,496 more/month for targeted households (PMT <= 30); 46% above the in-kind mean of Rp 29,219 (p < 0.001)"
      direction: positive
      vsBenchmark: "46% above in-kind baseline for the targeted group (Table 1 col. 2)"
    - ref: R2
      outcome: total subsidy received per month
      metric: level
      value: "Conditional on receiving any assistance, voucher recipients received Rp 31,333 more/month (85% above in-kind recipient mean of Rp 36,931; p < 0.001)"
      direction: positive
      vsBenchmark: "85% above in-kind mean among actual recipients (Table 1 col. 7)"
    - ref: R3
      outcome: total subsidy received per month
      metric: level
      value: "Non-targeted households (PMT > 30) received Rp 2,532 less/month in voucher areas (-28% of in-kind mean of Rp 9,162; p = 0.002)"
      direction: negative
      vsBenchmark: "-28% relative to in-kind mean for non-targeted group (Table 1 col. 3)"
    - ref: R4
      outcome: share of households receiving any subsidy
      metric: pp-effect
      value: "Probability of receiving any subsidy fell 10.5pp (16%) for PMT <= 30 (p < 0.001) and 14.5pp (49%) for PMT > 30 (p < 0.001)"
      direction: negative
      vsBenchmark: "Exclusion rise much larger for non-targeted (49%) than targeted (16%); Table 1 cols. 5-6"
    - ref: R5
      outcome: poverty rate (share of households below the poverty line)
      metric: pp-effect
      value: "-4.3pp (20% reduction from baseline rate of 21.0%) for households with PMT <= 15 (bottom ~15%; p = 0.028)"
      direction: negative
      vsBenchmark: "20% reduction from in-kind baseline poverty rate for the poorest group (Table 2 col. 5)"
    - ref: R6
      outcome: rice quality
      metric: coefficient
      value: "0.203 on a 0-1 quality scale; 32% above the in-kind recipient mean of 0.630 (p < 0.001)"
      direction: positive
      vsBenchmark: "32% quality improvement over in-kind benchmark (Table 1 col. 8)"
    - ref: R7
      outcome: food consumption (rice and egg protein)
      metric: coefficient
      value: "Total egg protein for PMT <= 30: +9.3g/month (+4.3%; p = 0.10); no change in total rice consumption (p = 0.492)"
      direction: positive
      vsBenchmark: "28% of subsidized-egg increase represents net new consumption; no rice substitution (Table 3 Panel B)"
    - ref: R8
      outcome: rice price level
      metric: coefficient
      value: "Overall: Rp 129 (p = 0.309, not significant); in very remote areas (above 75th pct time to district capital): Rp 334 (3.5%; p = 0.027)"
      direction: positive
      vsBenchmark: "No overall price effect; 3.5% increase only in most-isolated villages (Table 4 cols. 1 and 7)"
    - ref: R9
      outcome: share of recipient household-months receiving the full transfer
      metric: probability
      value: "81% of voucher recipient-months reported exactly Rp 110,000 versus 24% of in-kind recipient-months within 10% of the nominal Rp 97,000 value; including imputed voucher purchases, 92% were within 10% of Rp 110,000 (Figure 1, p. 526; text p. 525)"
      direction: positive
      vsBenchmark: "Voucher distribution concentrated at the full entitlement, unlike in-kind transfers"
    - ref: R10
      outcome: total subsidy received per month
      metric: coefficient
      value: "All households: Rp 1,404.537 (SE = 617.436; randomization-inference p = 0.063; control mean Rp 14,461.335)"
      direction: positive
      vsBenchmark: "Approximately 10% more than the in-kind group (Table 1, col. 1)"
    - ref: R11
      outcome: poverty rate (share of households below the poverty line)
      metric: pp-effect
      value: "Voucher coefficients by baseline PMT cutoff: <=30, -0.023 (p = 0.134); <=25, -0.025 (p = 0.166); <=20, -0.034 (p = 0.078); <=10, -0.052 (p = 0.020); <=5, -0.065 (p = 0.012) (Table 2, cols. 2-4, 6-7)"
      direction: negative
      vsBenchmark: "Reductions grow in magnitude among poorer PMT groups; the <=15 estimate is R5 (Table 2, p. 537)"
    - ref: R12
      outcome: total subsidy received per month
      metric: coefficient
      value: "By contemporaneous per-capita consumption bins, voucher areas show more assistance among the poorest, especially the bottom decile, and less among wealthier households, especially the 65th-90th percentiles (Figure 3, p. 531)"
      direction: mixed
      vsBenchmark: "Validates that the PMT-based targeting pattern also tracks measured consumption poverty"
    - ref: R13
      outcome: household per-capita consumption net of subsidy
      metric: coefficient
      value: "Within voucher areas, BPNT recipients were about 18% poorer than nonrecipients conditional on flexible controls for PMT score (text p. 531; Online Appendix Table 13)"
      direction: negative
    - ref: R14
      outcome: subsidized food consumption (rice and egg protein)
      metric: coefficient
      value: "Voucher coefficients: subsidized rice -0.300 kg overall (p = 0.002), +0.062 kg for PMT <=30 (p = 0.773), and -0.424 kg for PMT >30 (p < 0.001); subsidized egg protein +10.932 g overall, +32.719 g for PMT <=30, and +3.362 g for PMT >30 (all p < 0.001) (Table 3 Panel A, p. 539)"
      direction: mixed
      vsBenchmark: "Voucher composition shifts toward eggs for recipients, with less subsidized rice received outside the target group"
    - ref: R15
      outcome: food consumption (rice and egg protein)
      metric: coefficient
      value: "Total egg protein rises 8.4% for PMT <10 (p = 0.053) and 11.7% for PMT <5 (p = 0.033) (text p. 540; Online Appendix Table 23)"
      direction: positive
      vsBenchmark: "Effects are larger among poorer households than the PMT <=30 estimate in R7"
    - ref: R16
      outcome: rice price level
      metric: coefficient
      value: "Voucher interactions with above-median supply shock: Rp 172.624 (p = 0.530); above-75th-percentile supply shock: Rp 539.234 (p = 0.138); nonasphalt road: Rp 52.554 (p = 0.677); road not always passable: Rp 195.171 (p = 0.317); above-median travel time to district capital: Rp 151.902 (p = 0.233) (Table 4, cols. 2-6, p. 541)"
      direction: none
      vsBenchmark: "No statistically significant interaction in these supply-shock and remoteness checks"
    - ref: R17
      outcome: share of intended district subsidy received by households
      metric: coefficient
      value: "Voucher effects on reported-value, market-price-adjusted, and quality-adjusted subsidy ratios: -0.018 (p = 0.583), -0.059 (p = 0.055), and -0.013 (p = 0.708), respectively (Table 5, p. 544)"
      direction: negative
      vsBenchmark: "No robust reduction in total leakage across the three definitions"
    - ref: R18
      outcome: administrative cost as a share of benefits disbursed
      metric: level
      value: "Estimated costs are 4.1% for in-kind delivery, 2.1% for vouchers under the all-agents-assigned-to-vouchers assumption, and 0.74% when existing agents' machine costs are treated as inframarginal (text pp. 545-546; Online Appendix Table 30)"
      direction: negative
      vsBenchmark: "Voucher administrative-cost share is approximately half, or 17% under the marginal-cost scenario, of in-kind costs"
    - ref: R19
      outcome: baseline balance across treatment and control districts
      metric: p-value
      value: "Only 1 of 11 baseline variables is statistically significant; joint randomization-inference F-test p = 0.384 (text p. 523; Online Appendix Table 1)"
      direction: none
    - ref: R20
      outcome: program distribution channel
      metric: probability
      value: "In-kind distribution points were government-run in 88% of districts; voucher sites were private bank agents in 99% (text p. 533; Online Appendix Table 15)"
      direction: mixed
      vsBenchmark: "Documents the change in the delivery agent that motivates the administrative mechanism"
    - ref: R21
      outcome: local political response to benefit concentration
      metric: probability
      value: "No observable differences in protests or voting for new local leaders (text p. 530; Online Appendix Table 12)"
      direction: none
    - ref: R22
      outcome: household consumption of other foods and temptation goods
      metric: probability
      value: "No systematic increase in other food consumption (joint-test p = 0.223), cigarettes, or alcohol; salt consumption decreases slightly (text p. 540; Online Appendix Table 24)"
      direction: none
  resultType: mixed
  relatesTo:
    - { cite: "Banerjee et al. (2018)", doi: '10.1086/700734', relation: builds-on, note: "prior work on information and food subsidy programs in the same Indonesian Rastra context" }
    - { cite: "Muralidharan et al. (2016)", doi: '10.1257/aer.20141346', relation: builds-on, note: "state capacity and biometric smartcards for welfare delivery in India; parallel administrative-fidelity finding" }
    - { cite: "Cunha, De Giorgi, and Jayachandran (2019)", doi: '10.1093/restud/rdy018', relation: tests, note: "price-theoretic predictions of cash vs in-kind programs; paper finds price effects are small relative to administrative-fidelity gains" }
    - { cite: "Hastings and Shapiro (2018)", doi: '10.1257/aer.20170866', relation: cites, note: "SNAP mental-accounting / earmarking evidence; consistent with egg-consumption stickiness from voucher labeling" }
  openQuestions:
    - "How much the results generalize to settings with different levels of administrative capacity: the poverty gain depends on the accuracy of government targeting data and on whether local officials use discretion to serve the very poor or the comparatively well-off (p. 518, p. 546)."
    - "Whether the self-targeting benefits of low-quality in-kind goods matter in settings where distributed food is not systematically degraded, given that higher rice quality in the voucher program did not impair concentration of benefits (pp. 534-535)."
  replicationCode:
    url: "https://doi.org/10.3886/E167262V1"
    status: available
  extraction:
    - by: "paper-distiller (claude-sonnet-4-6)"
      date: 2026-06-24
      role: extracted
      note: >-
        Full text read (pp. 514-547, all tables and figures); eight results
        extracted from the source PDF. Not human-verified. Not reproduced.
        Replication data at https://doi.org/10.3886/E167262V1 has not been
        run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; all
        eight Core results rows confirmed against Tables 1-4 (pp. 529-541); Nash
        bargaining model and estimating equation (1) verified term-by-term; two
        fixes applied: JEL codes expanded from [I32, I38, H53] to [H53, I18,
        I32, I38, O12] (I18 and O12 were in the abstract but omitted); colorful
        adverb "dramatically" removed from TL;DR.
    - by: "paper-distiller (gpt-6-luna)"
      date: 2026-10-04
      role: extracted
      note: >-
        [gpt-6-luna, effort high, codex-cli 0.160.0] Read the complete source PDF
        and added fourteen Core results rows, matching findings, and the missing
        randomized-balance, targeting, distribution-channel, food-consumption,
        leakage, price-interaction, and cost findings. Added the price and district
        leakage estimating specifications with PDF locators. This augmentation is
        not human-verified and has not been reproduced.
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Locators, reported magnitudes, equations, classifications, and prose checked against the source PDF; corrected metric/direction coding, added the price interaction main effect, narrowed summary claims, and clarified the prose-derived bargaining equations." }
  licenceVerification:
    - source: "Crossref REST API works/10.1257/aer.20210461"
      checked: 2026-06-24
      by: "paper-distiller (claude-sonnet-4-6)"
      found: >-
        No license[] block returned; standard paywalled AEA publication with no
        CC licence recorded in Crossref metadata. Open-access author copy
        available at MIT DSpace (https://dspace.mit.edu/bitstream/1721.1/153910/1/2023_Electronic_Food_Vouchers_aer.20210461.pdf)
        but no re-use licence attached.
  rightsSignalConflict: false
---

**What this is.** Core results, the administrative-fidelity bargaining model, and
the estimating equation from Banerjee, Hanna, Olken, Satriawan, and Sumarto (2023):
a distilled skeleton for quick orientation. To replicate or extend, read the original
at [https://doi.org/10.1257/aer.20210461](https://doi.org/10.1257/aer.20210461) and
use the replication package at [https://doi.org/10.3886/E167262V1](https://doi.org/10.3886/E167262V1).

## TL;DR

Indonesia's government randomized 105 districts across the transition from its
in-kind rice subsidy program (Rastra: 10 kg free rice per month) to an electronic
voucher program (BPNT: a debit card worth approximately the same value, redeemable
for rice and eggs at private agents). Forty-two districts converted in 2018; 63 were
randomized to convert in 2019. The voucher program improved fidelity to program
design: 81 percent of voucher recipient-months reported the exact entitlement
amount, versus broad distribution of smaller amounts in the in-kind program. As a
result, targeted (poor) households received 46 percent more subsidy value on net,
poverty rates fell 20 percent for the bottom 15 percent of the distribution, and
rice quality improved among recipient households. Price-theoretic channels (price effects,
consumption substitution, self-targeting) explain far less of the difference than
the administrative-fidelity mechanism: individually named debit cards and private
bank agents made it harder for local officials to divert or reallocate benefits.

## Core results

Magnitudes are as reported; locators point into the source PDF. `\*` = 10%,
`\*\*` = 5%, `\*\*\*` = 1% (randomization inference p-values, Young 2019).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Targeted households (PMT ≤ 30) received 46% more subsidy** per month in voucher districts than in in-kind districts | Table 1, col. 2, p. 529 | Rp 13,496 more/month (SE = Rp 1,909; p < 0.001); in-kind mean = Rp 29,219 |
| R2 | **Among recipients, voucher households received 85% more** per month (conditional on receiving any assistance) | Table 1, col. 7, p. 529 | Rp 31,333 more/month (SE = Rp 3,190; p < 0.001); in-kind recipient mean = Rp 36,931 |
| R3 | **Non-targeted households (PMT > 30) received 28% less** subsidy in voucher areas | Table 1, col. 3, p. 529 | -Rp 2,532/month (SE = Rp 564; p = 0.002); in-kind mean = Rp 9,162 |
| R4 | **Probability of receiving any subsidy fell** in voucher areas: 16% decline for targeted, 49% decline for non-targeted | Table 1, cols. 5-6, p. 529 | -10.5pp for PMT ≤ 30 (p < 0.001); -14.5pp for PMT > 30 (p < 0.001) |
| R5 | **Poverty rate fell 20% for the bottom 15%** in voucher areas | Table 2, col. 5, p. 537 | -4.3pp from a baseline of 21.0% for PMT ≤ 15 (p = 0.028) |
| R6 | **Rice quality rated 32% higher** in voucher areas (recipient households) | Table 1, col. 8, p. 529 | Coefficient = 0.203 on a 0-1 Likert scale (p < 0.001); in-kind mean = 0.630 |
| R7 | **Total egg protein consumption rose ~4.3%** for targeted households; no change in total rice consumption (consistent with Hastings and Shapiro 2018 earmarking evidence) | Table 3, Panel B, cols. 4-5, p. 539 | +9.3 g/month (p = 0.10) for PMT ≤ 30; rice coefficient = -0.411 kg (p = 0.492) |
| R8 | **No overall price effect** on rice; modest 3.5% increase in the most remote areas only | Table 4, cols. 1, 7, p. 541 | Overall: Rp 129 (p = 0.309); above 75th pct travel time to district capital: Rp 334 (p = 0.027) |
| R9 | Voucher recipients are much more likely to receive the full monthly transfer | Figure 1, p. 526; text p. 525 | 81% of voucher recipient-months report exactly Rp 110,000, versus 24% of in-kind months within 10% of its nominal Rp 97,000 value; with imputed purchases, 92% of voucher recipients are within 10% of Rp 110,000 |
| R10 | Total subsidy rises slightly across all households, with a marginally significant estimate | Table 1, col. 1, p. 529 | Rp 1,404.537/month (SE = Rp 617.436; randomization-inference p = 0.063; control mean = Rp 14,461.335) |
| R11 | Poverty reductions grow as the PMT cutoff narrows to poorer households | Table 2, cols. 2-4, 6-7, p. 537 | PMT <=30: -2.3pp (p = 0.134); <=25: -2.5pp (p = 0.166); <=20: -3.4pp (p = 0.078); <=10: -5.2pp (p = 0.020); <=5: -6.5pp (p = 0.012); the <=15 estimate is R5 |
| R12 | Voucher targeting also shifts aid toward households with low measured consumption | Figure 3, p. 531 | More aid to the bottom decile, and also the 20th-30th percentiles; less to wealthier households, especially the 65th-90th percentiles |
| R13 | Voucher recipients within treated areas are poorer than nonrecipients at the same PMT score | Text p. 531; Online Appendix Table 13 | About 18% lower per-capita consumption net of subsidy, controlling flexibly for PMT score |
| R14 | The subsidized food bundle shifts toward eggs, while subsidized rice receipt falls for non-targeted households | Table 3, Panel A, p. 539 | Subsidized rice: -0.300 kg overall (p = 0.002), +0.062 kg for PMT <=30 (p = 0.773), -0.424 kg for PMT >30 (p < 0.001); egg protein: +10.932 g overall, +32.719 g for PMT <=30, +3.362 g for PMT >30 (all p < 0.001) |
| R15 | Total egg-protein gains are larger for the poorest households | Text p. 540; Online Appendix Table 23 | +8.4% for PMT <10 (p = 0.053); +11.7% for PMT <5 (p = 0.033) |
| R16 | Most supply-shock and remoteness price interactions are statistically insignificant | Table 4, cols. 2-6, p. 541 | Interaction coefficients: above-median supply shock Rp 172.624 (p = 0.530); above-75th-percentile shock Rp 539.234 (p = 0.138); nonasphalt road Rp 52.554 (p = 0.677); road not always passable Rp 195.171 (p = 0.317); above-median travel time Rp 151.902 (p = 0.233) |
| R17 | Voucher conversion does not robustly change total leakage | Table 5, p. 544 | Reported-value subsidy ratio: -0.018 (p = 0.583); market-price adjusted: -0.059 (p = 0.055); quality-adjusted: -0.013 (p = 0.708) |
| R18 | Estimated administration costs are lower for vouchers | Text pp. 545-546; Online Appendix Table 30 | Cost shares: 4.1% in-kind, 2.1% vouchers assuming all agent machine costs are assigned to vouchers, and 0.74% under the marginal-cost scenario for pre-existing agents |
| R19 | Randomization checks show baseline balance | Text p. 523; Online Appendix Table 1 | One of 11 baseline variables is significant; joint randomization-inference F-test p = 0.384 |
| R20 | Distribution shifts from government-run to private-agent sites | Text p. 533; Online Appendix Table 15 | Government-run in-kind sites in 88% of districts versus private bank agents for vouchers in 99% |
| R21 | Benefit concentration shows no detectable political backlash | Text p. 530; Online Appendix Table 12 | No observable differences in protests or votes for new local leaders |
| R22 | No broad consumption increase appears in other foods or temptation goods | Text p. 540; Online Appendix Table 24 | Other food joint test p = 0.223; no observable change in cigarette or alcohol consumption; slight salt reduction |

**Overall (paper's conclusion).** Switching from an in-kind food program to
electronic vouchers substantially increased the concentration of benefits to the
poor, primarily by removing local officials from the distribution chain and
replacing them with private bank agents who issued individually named debit cards
(Banerjee et al. 2018 context). Price-theoretic mechanisms (consumption flexibility,
supply-side price effects, self-targeting) are present but small relative to the
administrative-fidelity mechanism. The result parallels the administrative gains from
biometric smartcards documented in India by Muralidharan et al. (2016), here at
larger scale and with electronic vouchers rather than smartcard identification. The
voucher program also costs about half as much to administer (2.1 vs. 4.1 percent
of benefits disbursed).

## Theory / model

The paper has no structural model. It posits a simple Nash bargaining framework
(Section II.C, pp. 532-534) to explain why the voucher program produced a point
mass at the full entitlement amount while in-kind transfers produced a diffuse
distribution.

**Nash bargaining equations (written out from the text; the paper presents this setup in prose, not as a numbered equation).** A beneficiary is entitled to transfer $$b$$ from the program. A village
head can impose a penalty $$X_i$$ on beneficiary $$i$$ (e.g., exclusion from community
activities). The village head and beneficiary split the surplus with bargaining
weight $$\alpha$$ for the village head. The beneficiary's net transfer and the village
head's rent are:

$$
\text{Transfer}_i = b - (1-\alpha)\,X_i, \qquad \text{village head rent} = \alpha\,X_i.
$$

There is a fixed cost $$F$$ for the village head to initiate bargaining with
beneficiary $$i$$.

**In-kind program.** The village head must distribute rice regardless, so $$F$$ is
sunk. The village head always bargains, and the distribution of $$X_i$$ across
beneficiaries produces a spread of realized transfer amounts (matching the broad
histogram in Figure 1, Panel A, p. 526).

**Voucher program.** Distribution moves to private bank agents with individually
named debit cards; the village head no longer has a role in the transfer unless
he actively seeks one. Now $$F$$ is not sunk. The village head bargains only
if $$\alpha X_i > F$$:

$$
\text{Transfer}_i = \begin{cases} b & \text{if } \alpha X_i \leq F \\ b - (1-\alpha)\,X_i & \text{if } \alpha X_i > F. \end{cases}
$$

This generates: (i) a point mass at the full entitlement $$b$$ for beneficiaries
where $$\alpha X_i \leq F$$, (ii) a gap just below $$b$$, and (iii) a left tail for
those with large $$X_i$$. The predicted distribution matches Figure 1, Panel A:
in voucher districts, 81 percent of monthly deliveries are exactly the
nominal Rp 110,000 entitlement, versus 24 percent in in-kind districts (p. 525).

**Identification.** The paper exploits budget-constrained random assignment: 105
districts were deemed potentially ready to convert, but the budget allowed
converting only about 42. The government randomized which 42 were treated in 2018
and which 63 were treated in 2019, stratifying by geography. Balance checks across
11 baseline variables show no significant imbalance (joint F-test p = 0.384; online
appendix Table 1, p. 523). The paper estimates intent-to-treat effects since only
3 of the 63 control districts converted early (p. 522).

## Method

The main estimator is OLS on the randomized intent-to-treat design with
double-LASSO-selected controls (Belloni, Chernozhukov, and Hansen 2014). The
method uses OLS for estimation and double LASSO for control selection.

Control variables $$\mathbf{X}_{hvds}$$ are selected from a large candidate set
(UDB household characteristics, village-census covariates, and district
$$\times$$ urban/rural baseline averages from SUSENAS) using a double LASSO
procedure. The LASSO simultaneously selects variables predictive of (i) the
outcome and (ii) treatment assignment. Including the double-LASSO-selected controls
raises precision without affecting consistency (Belloni, Chernozhukov, and Hansen 2014).

Standard errors are clustered at the district (kabupaten) level, which is the
unit of randomization (d). Permutation-based (randomization inference) p-values
are computed using 1,000 permutations of the treatment vector (Young 2019).

## Empirical specifications

**Main estimating equation.** The household-level outcomes are estimated using
equation (1, p. 523):

$$
y_{hvds} = \beta_0 + \beta_1\,\text{Voucher}_{ds} + \mathbf{X}_{hvds}'\,\gamma + \alpha_s + \varepsilon_{hvds}, \tag{1}
$$

where $$y_{hvds}$$ is the relevant outcome for household $$h$$ in village $$v$$,
district $$d$$, stratum $$s$$; $$\text{Voucher}_{ds}$$ is an indicator equal to 1 if
district $$d$$ was randomly assigned to receive the voucher program in 2018;
$$\mathbf{X}_{hvds}$$ is the vector of double-LASSO-selected control variables;
$$\alpha_s$$ is a stratum fixed effect; and $$\varepsilon_{hvds}$$ is the error term.
Standard errors are clustered at the district level; randomization-inference p-values
from 1,000 permutations (Young 2019) are reported in brackets in all tables.

**Outcome variables and samples.** The paper estimates equation (1) on several
outcomes: total subsidy received (Rp/month, the sum of Rastra and BPNT values),
an indicator for receiving any subsidy, total food consumption of rice and eggs
(from the separate SUSENAS consumption module), rice quality (a 0-1 Likert
scale), rice price (for non-eligible households to avoid compositional effects),
and the poverty indicator. Results are presented for (i) the full sample, (ii)
households with PMT score ≤ 30 at baseline (the approximate target population,
PMT ≤ 30 being the program eligibility threshold), and (iii) PMT > 30 (those
not targeted). For the poverty analysis (Table 2, p. 537), the sample is further
restricted to PMT ≤ 25, ≤ 20, ≤ 15, ≤ 10, and ≤ 5 to document heterogeneous
poverty effects at different points of the distribution.

**Price specification.** To isolate the general-equilibrium price effect,
equation (1) is estimated with rice price as the outcome for households not in the
UDB (i.e., those ineligible for the programs, whose reported prices are not
affected by selection into which program they receive). Heterogeneity by supply
shock size and geographic isolation is assessed through interaction terms
$$\text{Voucher}_{ds} \times \text{Variable}_{d}$$ (Table 4, cols. 2-7, p. 541).

**Subsidy-fidelity specification.** To examine overall leakage at the district
level, the unit of observation becomes the district: the fraction of intended
subsidy actually received (subsidy received from SUSENAS divided by intended
subsidy, computed from the official number of beneficiaries times the
entitlement amount) is regressed on $$\text{Voucher}_{ds}$$ with district-level
strata fixed effects (Table 5, p. 544; N = 105 districts).


**Price heterogeneity specification (written out from Table 4, p. 541).** The
interaction specifications use the same randomized treatment and selected
controls as equation (1), adding one village- or district-level characteristic
$$Z_{vd}$$, its main effect, and its treatment interaction:

$$
\text{RicePrice}_{hvds} = \beta_0 + \beta_1\,\text{Voucher}_{ds} + \beta_2 (\text{Voucher}_{ds} \times Z_{vd}) + \beta_3 Z_{vd} + \mathbf{X}_{hvds}'\gamma + \alpha_s + \varepsilon_{hvds}.
$$

Here $$Z_{vd}$$ is the relevant supply-shock or remoteness indicator. The sample is
non-UDB households in March 2019 SUSENAS (N = 32,343 or 32,334, depending on
the measure); stratum fixed effects and double-LASSO-selected controls are
included, with standard errors clustered by district and randomization-inference
p-values based on 1,000 permutations.

**District leakage specification (written out from Table 5, p. 544).** The
reported-value, market-price-adjusted, and quality-adjusted subsidy ratios are
estimated using the district as the observation:

$$
\text{ReceivedShare}_{ds} = \beta_0 + \beta_1\,\text{Voucher}_{ds} + \mathbf{X}_{ds}'\gamma + \alpha_s + \varepsilon_{ds}.
$$

The sample is all 105 randomized districts. Each specification includes stratum
fixed effects and double-LASSO-selected controls; standard errors are clustered
at the district level, with randomization-inference p-values from 1,000
permutations. The specification and definitions are summarized from Table 5,
p. 544; the paper does not assign it an equation number.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| SUSENAS (Survei Sosial Ekonomi Nasional) | Primary outcome data: subsidy receipt, food consumption, prices, poverty; March 2018 (baseline) and March 2019 (endline) waves | No page yet |
| Unified Targeting Database (UDB) | Household-level PMT scores and baseline characteristics for control selection and heterogeneity analysis; 2015 data merged by the government using national IDs; deidentified version in replication package | No page yet |
| PODES (Potensi Desa) village census | Village-level baseline control variables (roads, infrastructure, remoteness measures); 2018 wave | No page yet |
| Program administrative data | District-level intended subsidy disbursements (number of official beneficiaries times entitlement) for leakage calculations | No page yet |

Sample scope: 105 districts across Indonesia; approximately one-fifth of Indonesia's
population (53 million individuals); 3.4 million targeted beneficiary households.
Primary analysis uses household-level March 2019 SUSENAS (endline), approximately
66,000 households. Merged deidentified replication data available at
[https://doi.org/10.3886/E167262V1](https://doi.org/10.3886/E167262V1).

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20210461) if you are:
studying the design and analysis of large-scale RCTs in the presence of
general-equilibrium effects (Muralidharan and Niehaus 2017); evaluating the
relative merits of in-kind vs. voucher / cash transfer programs in settings with
limited administrative capacity; replicating (the ICPSR replication package at
[https://doi.org/10.3886/E167262V1](https://doi.org/10.3886/E167262V1) contains
all code and data); or reading for the price-effects analysis of the transition
(Section III.B; Cunha, De Giorgi, and Jayachandran 2019 predictions tested at
scale). Table 1 (p. 529) gives the full delivery and targeting results; Table 2
(p. 537) the poverty heterogeneity; Table 3 (p. 539) the consumption results.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(2). This page was
distilled from the source PDF and machine-verified on 2026-10-04; its results have
not been independently reproduced. The AEA copyright applies; no CC licence is recorded in Crossref.
Extract-only; the verbatim PDF is not hosted here.

> Banerjee, Abhijit, Rema Hanna, Benjamin A. Olken, Elan Satriawan, and Sudarno
> Sumarto. "Electronic Food Vouchers: Evidence from an At-Scale Experiment in
> Indonesia." *American Economic Review* 113, no. 2 (February 2023): 514-547.
> DOI: 10.1257/aer.20210461. Copyright 2023 American Economic Association.
> Replication data: DOI 10.3886/E167262V1. This page is an extract by the
> Institute for Automated Research: core results and equations summarized.
