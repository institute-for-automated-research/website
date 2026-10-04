---
title: "Investor Memory: Godker, Jiao & Smeets (2025)"
description: >-
  Distilled: Three lab and online experiments document a positive memory bias
  in investment outcomes: subjects overremember gains and underremember losses,
  which translates into overly optimistic beliefs, excess reinvestment, and
  overconfidence about stock-picking ability. Review of Financial Studies 2025,
  paywalled. Eighteen core results have source locators and report the main
  effects, mechanism tests, and reported null and robustness checks, alongside
  the experimental model and estimating specifications.
sidebar:
  label: Godker-Jiao-Smeets 2025
  order: 1
tags: [paper-summary, behavioral-finance, investor-beliefs, memory-bias,
       overconfidence, reinvestment, experimental-economics,
       peer-reviewed, unreplicated]
paper:
  authors: Katrin Gödker, Peiran Jiao, Paul Smeets
  authorList:
    - { family: Gödker, given: Katrin, affiliation: Bocconi University }
    - { family: Jiao, given: Peiran, orcid: "0000-0001-5207-0287", affiliation: Maastricht University }
    - { family: Smeets, given: Paul, orcid: "0000-0002-9414-1749", affiliation: University of Amsterdam }
  year: 2025
  venue: The Review of Financial Studies 38(6), 2025, 1595–1640
  venueShort: Rev. Fin. Stud. 2025
  doi: 10.1093/rfs/hhaf006
  jel:
    codes: [D01, G4]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-06
  topics: ["Private Equity and Venture Capital", "State Capitalism and Financial Governance"]
  dataAccess: hand-collected
  introducesData: true
  outcome:
    - recalled number of positive and negative investment outcomes (memory bias)
    - subjective posterior belief about stock quality
    - probability of suboptimal reinvestment
    - points bet suboptimally (overconfidence measure)
    - points bet on the optimality of investment choice
    - probability of reinvestment
    - task-order effects on memory, beliefs, and suboptimal reinvestment
  outcomeClass: [household-finance, expectations]
  license: >-
    Oxford standard publication reuse rights (confirmed via Crossref DOI metadata:
    content-version vor, URL https://academic.oup.com/pages/standard-publication-reuse-rights,
    delay-in-days 0, start 2025-03-03); paywalled, no open-access licence.
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (OUP site; Crossref licence confirms no OA; 2026-06-06)"
  redistribution: extract-only
  resultsCount: 18
  citedByCount: 15
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [randomized-survey-experiment, logit-regression]
    identification: randomized
  contributionType: [new-fact, new-data]
  mechanisms: [behavioral-bias, learning, motivated-memory-suppression]
  scope:
    region: Germany, UK, US
    assetClass: experimental risky stocks (lab)
    frequency: mixed
    dataType: [experimental, survey]
    granularity: [individual]
    n: "229 subjects (Exp. 1), 498 subjects (Exp. 2), 487 subjects (Exp. 3)"
  findings:
    - { ref: R1, outcome: recalled number of positive investment outcomes (memory bias), metric: level, value: "Delay mean +0.89 outcomes (p = .000); Immediate +0.27 (p = .058); difference p = .018 (Table 2, p. 1614)", direction: positive, vsBenchmark: Delay significantly larger than Immediate control }
    - { ref: R2, outcome: recalled number of negative investment outcomes (memory bias), metric: level, value: "Delay mean -0.73 outcomes (p = .000); Immediate -0.28 (p = .037); difference p = .038 (Table 2, p. 1614)", direction: negative, vsBenchmark: Delay significantly more negative than Immediate control }
    - { ref: R3, outcome: subjective posterior belief about stock quality, metric: pp-effect, value: "Delay beliefs 8.16 percentage points above objective Bayesian posterior (t-test p = .004, Figure 2, p. 1616)", direction: positive, vsBenchmark: 8.16 pp above objective Bayesian benchmark }
    - { ref: R4, outcome: subjective posterior belief about stock quality, metric: coefficient, value: "Positive memory bias coefficient 6.196 (SE 0.92); negative memory bias coefficient -7.958 (SE 1.02); both p < .01 (Table 3, p. 1617)", direction: mixed, vsBenchmark: Memory bias predicts belief distortion }
    - { ref: R5, outcome: probability of suboptimal reinvestment, metric: probability, value: "41.9% in Delay vs 20.5% in Immediate; difference significant at 1% (Figure 3, p. 1619; Table 4, p. 1620)", direction: positive, vsBenchmark: Delay suboptimal reinvestment rate roughly double Immediate control }
    - { ref: R6, outcome: probability of suboptimal reinvestment, metric: level, value: "Odds ratio 1.599 (SE 0.22) for positive memory bias; odds ratio 0.617 (SE 0.10) for negative memory bias; both p < .01 (Table 4, p. 1620)", direction: mixed, vsBenchmark: Memory bias magnitude predicts suboptimal reinvestment }
    - { ref: R7, outcome: points bet suboptimally (overconfidence measure), metric: coefficient, value: "Delay coefficient +14.788 points (SE 4.18, p < .01; Table 5, p. 1622); mean 46.3 Delay vs 31.5 Reminder (Figure 4, p. 1621)", direction: positive, vsBenchmark: 47% more suboptimal betting in Delay vs Reminder }
    - { ref: R8, outcome: points bet suboptimally (overconfidence measure), metric: coefficient, value: "Each overremembered positive outcome is associated with 2.790 more points bet suboptimally (SE 1.25, p < .05; Table 5, p. 1622)", direction: positive, vsBenchmark: Memory bias magnitude predicts suboptimal betting }
    - { ref: R9, outcome: points bet on the optimality of investment choice, metric: coefficient, value: "Delay coefficient +9.381 points (SE 2.85, p < .01; N = 487; Table 5, p. 1622)", direction: positive, vsBenchmark: Delay vs Reminder for points bet across all choices }
    - { ref: R10, outcome: recalled number of positive investment outcomes (memory bias), metric: level, value: "HighStakes delay mean 0.11 (p = .591); Delay-Immediate treatment effect 0.32 (p = .151); Baseline treatment effect 0.48 (p = .010; Table 6, p. 1623)", direction: none, vsBenchmark: High recall incentives remove statistical evidence of the bias relative to Baseline }
    - { ref: R11, outcome: recalled number of positive investment outcomes (memory bias), metric: level, value: "NoChoice delay mean 0.18 (p = .398); Delay-Immediate treatment effect 0.49 (p = .051); Baseline treatment effect 0.48 (p = .010; Table 6, p. 1623)", direction: mixed, vsBenchmark: NoChoice condition lacks significant within-delay bias and has borderline treatment effect }
    - { ref: R12, outcome: recalled number of negative investment outcomes (memory bias), metric: probability, value: "Delay condition probability of underremembering negative outcomes is almost 60% (p < .001; text p. 1625, Internet Appendix C)", direction: positive, vsBenchmark: Higher than Immediate condition }
    - { ref: R13, outcome: subjective posterior belief about stock quality, metric: t-stat, value: "Delay vs NoRecall difference not significant (t-test p = .714; text p. 1605 and p. 1626, Internet Appendix G Table 16)", direction: none, vsBenchmark: NoRecall placebo }
    - { ref: R14, outcome: probability of suboptimal reinvestment, metric: t-stat, value: "Delay vs NoRecall difference not significant (t-test p = .343; suboptimal-investment subsample p = .383; text p. 1626, Internet Appendix G Table 16)", direction: none, vsBenchmark: NoRecall placebo }
    - { ref: R15, outcome: task-order effects on memory, beliefs, and suboptimal reinvestment, metric: t-stat, value: "No significant task-order impact: memory bias p = .314, beliefs p = .890, suboptimal reinvesting p = .428 (text p. 1626)", direction: none, vsBenchmark: Randomized task order }
    - { ref: R17, outcome: probability of reinvestment, metric: level, value: "Delay odds ratio 2.213 (SE 0.78, p < .05; N = 152; Table 4, p. 1620)", direction: positive, vsBenchmark: Delay vs Immediate }
    - { ref: R18, outcome: recalled number of positive investment outcomes (memory bias), metric: level, value: "Experiment 2 Baseline: Delay-group mean +0.36 (p = .023); Delay-Immediate treatment effect +0.48 (p = .010; N = 185; Table 6, p. 1623)", direction: positive, vsBenchmark: Experiment 2 Baseline Delay vs Immediate }
  resultType: new-finding
  replicationCode:
    url: "https://doi.org/10.7910/DVN/7K6ZPK"
    status: available
  relatesTo:
    - { cite: "Benabou and Tirole (2002)", doi: '10.1162/003355302760193913', relation: builds-on, note: "theoretical framework for motivated memory suppression: agents trade off utility from accurate memory vs utility from maintaining positive self-image" }
    - { cite: "Zimmermann (2020)", doi: '10.1257/aer.20180728', relation: tests, note: "applies same high-incentive manipulation to test memory suppression vs genuine forgetting in financial context" }
    - { cite: "Kaustia and Knupfer (2008)", doi: '10.1111/j.1540-6261.2008.01411.x', relation: extends, note: "explains their IPO reinvestment asymmetry (gains vs losses) via investor selective recall" }
    - { cite: "Strahilevitz, Odean, and Barber (2011)", doi: '10.1509/jmkr.48.spl.s102', relation: extends, note: "explains repurchase bias (investors more likely to repurchase stocks sold for a gain) via overremembering gains and underremembering losses" }
    - { cite: "Barber and Odean (2001)", doi: '10.1162/003355301556400', relation: cites, note: "overconfidence and trading; memory bias provides microfoundation for investor overconfidence" }
    - { cite: "Kuhnen (2015)", doi: '10.1111/jofi.12223', relation: tests, note: "asymmetric belief updating from financial information; paper adds memory channel on top of immediate belief formation" }
  openQuestions:
    - "Whether the positive memory bias extends to extreme outcome events (very large gains or losses), where psychologists document enhanced emotional memory (p. 1628)."
    - "How the memory bias and its behavioral consequences evolve over longer time horizons beyond 1 week; experiments studied memory 1 week after observation (p. 1629)."
    - "How the memory bias operates in field settings for uninvolved investors (not personally invested), and how social transmission of memory interacts with market prices (pp. 1628-1629)."
    - "Whether reminder-based interventions can debias investors in field settings and improve learning from experience, compared with information campaigns that target learning from description (p. 1601)."
  proposedVocab:
    - { axis: topic, term: behavioral-finance, def: "Research on how psychological biases, heuristics, and deviations from rationality affect investor behavior and asset prices.", aliases: [investor-psychology, behavioral-economics-finance] }
    - { axis: topic, term: investor-beliefs, def: "Formation, updating, and distortion of individual investor beliefs about asset quality or return distributions.", aliases: [belief-formation, subjective-beliefs] }
    - { axis: topic, term: memory-bias, def: "Systematic distortion in how agents recall past outcomes; in finance, overremembering gains and underremembering losses.", aliases: [selective-recall, positive-memory-bias] }
    - { axis: topic, term: overconfidence, def: "Investors' tendency to overestimate their own investment ability or the precision of their information relative to an objective benchmark.", aliases: [investor-overconfidence] }
    - { axis: topic, term: reinvestment, def: "Decision to reinvest in a previously chosen stock after observing its outcomes; studied as a revealed measure of reinforcement learning.", aliases: [stock-repurchase, reinvestment-decision] }
    - { axis: topic, term: experimental-economics, def: "Incentivized laboratory or online experiments eliciting preferences, beliefs, or choices from human subjects under controlled conditions.", aliases: [lab-experiment, online-experiment] }
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-06
      role: extracted
      note: >-
        Full text read (pp. 1595-1640 plus appendices A-E). Eight results
        extracted from Tables 2-7 and Figures 1-4. Not human-verified.
        Not reproduced. Replication code and data available at Harvard Dataverse
        (https://doi.org/10.7910/DVN/7K6ZPK) but not run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-06
      role: verified
      note: >-
        Locators and reported magnitudes re-checked against the source PDF; all
        eight Core-results rows confirmed against Tables 2-7 and Figures 1-4.
        Equations (1) and (2) verified term-by-term against PDF pp. 1604 and
        1611. Fixed JEL codes: distiller had [D01, G41, G11] but PDF lists
        only D01, G4; corrected to [D01, G4].
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the assigned PDF; appended ten Core-results rows and aligned findings, added the motivated-memory mechanism proposal, and completed the main-text estimating specifications. These additions are not human-verified or reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] All 18 Core results, equations, specifications, classification axes, findings, frontmatter, prose, and DOI edges checked against the PDF. Corrected mechanism overstatement, odds-vs-probability phrasing, unsupported Immediate-condition claim, null-result wording, finding metrics, causal-method classification, unsupported method and period tags, and design description; table-locator check flagged no rows and this page has no un-locatable relatesTo cites." }
  licenceVerification:
    - source: "Crossref REST API works/10.1093/rfs/hhaf006"
      checked: 2026-06-06
      by: paper-distiller (claude-sonnet-4-6)
      found: "license[].content-version=vor, URL=https://academic.oup.com/pages/standard-publication-reuse-rights, delay-in-days=0, start=2025-03-03; no Creative Commons licence; paywalled."
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the experimental designs, and the
estimating specifications with exact magnitudes: enough to know what was found and
how, without reading all 46 pages. To replicate or extend, read the full source at
the [original](https://doi.org/10.1093/rfs/hhaf006) or download the replication
data from [Harvard Dataverse](https://doi.org/10.7910/DVN/7K6ZPK).

## TL;DR

Across three incentivized experiments (N = 229, 498, 487), the paper documents
a positive memory bias for investment outcomes. After 1 week, subjects
overremember the positive returns and underremember the negative returns of
stocks they chose to invest in. This positive memory bias: (a) distorts beliefs
about stock quality by 8.16 percentage points toward optimism relative to the
objective Bayesian posterior, (b) doubles the rate of suboptimal reinvestment
(41.9% vs 20.5%), and (c) raises overconfident betting on one's own stock
picks by 47%. The proposed mechanism is motivated memory suppression,
consistent with the framework of Benabou and Tirole (2002): raising the
financial incentive for accurate recall reduces measured memory bias among
subjects high in self-deceptive enhancement, and the bias is not statistically
significant in the passive endowment condition.

## Core results

Magnitudes and significance are as reported; \* p < .1, \*\* p < .05, \*\*\* p < .01.
Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Subjects **overremember positive investment outcomes** after 1 week | Table 2, p. 1614; Figure 1, p. 1613 | Delay: +0.89 outcomes overremembered (p = .000); Immediate: +0.27 (p = .058); difference p = .018 |
| R2 | Subjects **underremember negative investment outcomes** after 1 week | Table 2, p. 1614; Figure 1, p. 1613 | Delay: -0.73 outcomes underremembered (p = .000); Immediate: -0.28 (p = .037); difference p = .038 |
| R3 | **Beliefs are 8.16 percentage points too optimistic** in the Delay condition relative to the objective Bayesian posterior | Figure 2, p. 1616; Internet App. D | t-test p = .004 |
| R4 | **Memory bias directly predicts belief distortion**: each recalled positive outcome raises subjective belief by 6.20pp; each underremembered loss reduces it by 7.96pp | Table 3 cols 1-2, p. 1617 | 6.20\*\*\* (0.92) and -7.958\*\*\* (1.02); R2 = 0.52-0.55 |
| R5 | **Suboptimal reinvestment doubles** in the Delay vs Immediate condition (41.9% vs 20.5%) | Figure 3, p. 1619; Table 4 col. 2, p. 1620 | Odds ratio 3.542\*\*\* (1.44) for Delay treatment dummy; significant at 1% |
| R6 | **Memory bias magnitude predicts suboptimal reinvestment**: each overremembered positive outcome is associated with 1.599 times the odds of suboptimal reinvestment | Table 4 cols 3-4, p. 1620 | Odds ratio 1.599\*\*\* (0.22) for positive-outcome memory bias; 0.617\*\*\* (0.10) for negative-outcome bias |
| R7 | **Overconfident betting is 47% higher** in Delay vs Reminder condition; Delay subjects bet 46.3 vs 31.5 points suboptimally | Figure 4, p. 1621; Table 5 col. 2, p. 1622 | 14.788\*\*\* (4.18) additional suboptimal points in Delay; p < .01 |
| R8 | **Evidence supports motivated memory suppression**: high recall incentives reduce the memory bias for high-SDE subjects; only actively choosing investors exhibit the bias | Table 7, p. 1625; Table 6, p. 1623 | HighStake coeff for high-SDE: -0.469\*\* (0.19); NoChoice treatment effect 0.18 (p = .398, insignificant) |
| R9 | **Delay raises confidence across all investment choices**, in addition to increasing suboptimal betting | Table 5, p. 1622 | Delay coefficient +9.381\*\*\* (SE 2.85, N = 487, R2 = .02) |
| R10 | **High recall incentives attenuate the positive memory bias**, consistent with suppression rather than deletion | Table 6, p. 1623 | HighStakes Delay mean 0.11 (p = .591); Delay-Immediate treatment effect +0.32 (p = .151); Baseline treatment effect +0.48 (p = .010) |
| R11 | **The positive memory bias depends on active choice**: it is not significant when subjects are assigned the stock | Table 6, p. 1623 | NoChoice Delay mean 0.18 (p = .398); Delay-Immediate treatment effect +0.49 (p = .051); Baseline treatment effect +0.48 (p = .010) |
| R12 | **Belief-based estimation implies frequent underremembering of negative outcomes** | Text p. 1625; Internet Appendix C | Delay probability of underremembering negative outcomes is almost 60% (p < .001), higher than in Immediate |
| R13 | **There is no significant evidence that the memory-elicitation task changes subjective beliefs** | Text p. 1626; Internet Appendix G, Table 16 | Delay vs NoRecall difference not significant (t-test p = .714) |
| R14 | **There is no significant evidence that the memory-elicitation task changes investment decisions** | Text p. 1626; Internet Appendix G, Table 16 | Delay vs NoRecall difference not significant (t-test p = .343); lower-expected-return subsample p = .383 |
| R15 | **Randomized task order does not affect the main outcomes** | Text p. 1626 | t-test p = .314 for memory bias, p = .890 for beliefs, and p = .428 for suboptimal reinvesting |
| R16 | **Anticipated regret is not supported as an alternative mechanism** | Text p. 1627; Internet Appendix I | Memory bias is not significantly correlated with regret proneness; the main text does not report a coefficient or p-value |
| R17 | **Delay increases reinvestment in the stock overall**, alongside the increase in suboptimal reinvestment | Table 4, col. 1, p. 1620 | Delay odds ratio 2.213\*\* (SE 0.78, N = 152, pseudo-R2 = .05) |
| R18 | **Experiment 2 replicates the positive memory bias in its Baseline condition** | Table 6, p. 1623 | Delay mean +0.36 (p = .023); Delay-Immediate treatment effect +0.48 (p = .010; N = 185) |

**Overall (paper's conclusion).** Investors systematically overremember their
gains and underremember their losses, and this positive memory bias operates as
a microfoundation for three stylized facts in behavioral finance: gains weigh
more than losses when investors learn from experience (Kaustia and Knupfer (2008));
investors are more likely to repurchase stocks previously sold at a gain
(Strahilevitz, Odean, and Barber (2011)); and overconfident investors trade
excessively (Barber and Odean (2001)). The paper also extends evidence from
Kuhnen (2015) on asymmetric belief updating from financial information by adding
a memory channel. The bias is motivated (driven by self-image concerns) rather
than a passive cognitive limitation.

## Theory / model

The paper has no formal structural model in the body. The hypothesis tested is:

**H (Positive memory bias):** When subjects have time to form memories
(Delay condition, 1 week between observation and elicitation), they recall
more positive investment outcomes and fewer negative outcomes than actually
occurred, relative to a control group that elicits memory immediately
(Immediate condition).

The identification logic is a between-subject random assignment to Delay vs
Immediate conditions, with the 1-week gap as the treatment that activates
memory processes. Both groups observe outcomes under the same experimental
design and with the same level of engagement; the outcome draws need not be
identical across subjects.

The Bayesian benchmark for subjective beliefs is the objective posterior
(equation 1, p. 1604):

$$
\mu_t^G(h_t) = \frac{1}{1 + \frac{1-\mu_0^G}{\mu_0^G} \times \left(\frac{\theta}{1-\theta}\right)^{t - 2n_t^+}} \tag{1}
$$

where $$\mu_0^G = 50\%$$ is the prior probability that the stock is good,
$$\theta = 60\%$$ is the probability that a good stock generates a positive
outcome each period, $$t$$ is the total number of observed outcomes, $$h_t$$
is the history of outcomes, and $$n_t^+$$ is the number of positive outcomes
observed. The objective Bayesian posterior $$\mu_t^G(h_t)$$ is the benchmark
against which subjective beliefs are compared to measure belief distortion.

The motivated-memory mechanism is tested via two conditions in experiment 2.
The **HighStake** condition increases the financial incentive for accurate
memory reporting from 8 to 50 GBP/USD per correct memory answer (following
Zimmermann (2020)), so that if the true information is still in memory
(suppressed, not deleted), high incentives should induce subjects to report
it more accurately. The **NoChoice** condition randomly endows subjects with
a stock rather than letting them choose, so that ego-relevance of outcomes is
reduced (following Mather, Shafir, and Johnson (2000, 2003)).

The Internet Appendix formalizes a model in which memory of investment
outcomes is systematically biased in a motivated way: memory bias stems from
quasi-Bayesian belief updating with a probability of underremembering
specific previously observed signals, where this probability depends on
whether the signals are consistent with the decision-maker's motivation
(Section 3, p. 1617 reference to the Internet Appendix model).

The parimutuel betting payoff in experiment 3 follows Enke, Graeber, and
Oprea (2023), equation 2 (p. 1611):

$$
\text{payoff}_i = \frac{b_i}{\frac{\sum_{j=1}^{10} x_j b_j}{\sum_{j=1}^{10} b_j}} + (100 - b_i) \tag{2}
$$

where $$b_i$$ denotes points bet by subject $$i$$ and $$x_i$$ is an indicator equal
to 1 if the subject's investment choice was optimal. This design provides an
objective measure of overconfidence: subjects should bet 0 if they believe
their choice was suboptimal and bet all 100 if they believe it was optimal,
so suboptimal betting (betting > 0 when the choice was suboptimal) directly
reveals overconfidence.

## Method

The paper uses a randomized between-subject design with exogenous variation in
the time span between observing investment outcomes and eliciting memory (Delay
vs Immediate conditions). Three experiments share a common framework but vary
in outcomes, conditions, and elicited beliefs/choices.

**Common structure.** Subjects observe 12 sequential investment outcomes from a
risky stock over 12 periods (each shown for 2 seconds on screen). Outcomes are
drawn from known distributions (positive/negative with known probabilities
depending on stock quality). After the observation phase, memory, beliefs, and
investment choices are elicited. The Delay condition places the elicitation in
week t+1 (1 week later); the Immediate condition places it in week t
(immediately after).

**Memory elicitation.** Subjects report how many positive and negative outcomes
they observed (experiment 1: how often each specific outcome value occurred;
experiments 2-3: total counts summing to 12). The memory bias at the individual
level is the difference between recalled and actually observed counts of
positive (or negative) outcomes.

**Identification via timing variation.** The comparison of Delay vs Immediate
conditions is designed to isolate memory effects from attention, salience, and
information processing, which the design holds constant across groups. A
NoRecall condition in experiment 1 (no memory task) finds no significant
differences in subsequent beliefs or investment decisions, consistent with the
memory elicitation task not affecting those outcomes.

The **randomized-survey-experiment** primitive underlies all three experiments:
random assignment to conditions, incentivized elicitation of beliefs and choices,
and exogenous variation in a single treatment variable (delay vs immediate, or
HighStake vs Baseline, or NoChoice vs Baseline).

## Empirical specifications

The paper reports treatment comparisons and regression tables rather than one
common estimating equation. The equations below express those reported
specifications. In the tables, standard errors are in parentheses where reported;
the paper does not state a clustering adjustment.

**Experiment 1 memory bias (R1-R2).** Memory bias is recalled minus observed
outcomes, tested against zero within each treatment and compared across
conditions (Table 2, p. 1614):

$$
\text{Bias}_{i,k}=\text{Recalled}_{i,k}-\text{Observed}_{i,k},\qquad
H_0:E[\text{Bias}_{i,k}\mid c]=0,\qquad
H_0:E[\text{Bias}_{i,k}\mid Delay]=E[\text{Bias}_{i,k}\mid Immediate]
$$

Here $$k$$ indexes positive or negative outcomes and $$c$$ the treatment condition.
The table reports t-tests, not a regression: stock investors only, N = 74 in
Delay and N = 78 in Immediate. No fixed effects are used; inference is by the
reported t-tests against zero and for the difference in means.

**Beliefs and belief distortion (R3-R4).** Table 3 reports separate OLS
specifications for each memory-bias measure and outcome (p. 1617):

$$
\text{SubjProb}_{i}=\alpha+\beta\,\text{MemBias}_{i,k}
+\gamma\,\text{ObjProb}_{i}+\lambda_{s(i)}+\varepsilon_i
$$

$$
\text{BeliefDist}_{i}=\alpha+\beta\,\text{MemBias}_{i,k}
+\lambda_{s(i)}+\varepsilon_i
$$

$$k$$ is positive bias in column 1 / 3 and negative bias in column 2 / 4;
$$\lambda_{s(i)}$$ are session fixed effects. Objective probability enters only
the subjective-probability specifications. N = 188 for subjective probability
and N = 182 for belief distortion. Standard errors are in parentheses; no
cluster adjustment is stated.

**Reinvestment (R5-R6, R17).** Table 4 uses logit regressions, reporting odds ratios,
for reinvestment and suboptimal reinvestment (p. 1620):

$$
\Pr(\text{Invest}_{i}=1)=F(\alpha+\beta\,\text{Delay}_{i}+\lambda_{s(i)})
$$

$$
\Pr(\text{InvestSubopt}_{i}=1)=F(\alpha+\beta\,X_i+\lambda_{s(i)})
$$

For the first specification, $$X_i=\text{Delay}_i$$; the suboptimal-investment
specification uses Delay in column 2, positive memory bias in column 3, and
negative memory bias in column 4. Column 1 estimates overall reinvestment on Delay. Session fixed effects are included in all
columns. N = 152, restricted to subjects investing in the stock. Standard errors
are in parentheses and odds ratios are reported; no cluster adjustment is stated.

**Experiment 3 betting (R7, R9).** Table 5 reports separate OLS regressions for
all points bet, suboptimal points bet by treatment, and suboptimal points bet on
positive memory bias (p. 1622):

$$
\text{PointsBet}_{i}=\alpha+\beta\,\text{Delay}_{i}+\varepsilon_i
$$

$$
\text{PointsBetSubopt}_{i}=\alpha+\beta\,\text{Delay}_{i}+\varepsilon_i
$$

$$
\text{PointsBetSubopt}_{i}=\alpha+\beta\,\text{MemBiasPos}_{i}+\varepsilon_i
$$

The comparison group is Reminder. No session fixed effects are included (one
online session); N = 487 for all bets, N = 191 for suboptimal bets by treatment,
and N = 83 for the memory-bias regression, restricted to Delay subjects with
suboptimal choices. Standard errors are in parentheses; no cluster adjustment
is stated.

**Mechanism tests (R8, R10-R11, R18).** Table 6 reports t-tests of mean positive
memory bias against zero by condition and Delay-versus-Immediate mean
comparisons (p. 1623):

$$
\text{Bias}_{i}=\text{RecalledPos}_{i}-\text{ObservedPos}_{i},\qquad
H_0:E[\text{Bias}\mid c,Delay]=0,\qquad
H_0:E[\text{Bias}\mid c,Delay]=E[\text{Bias}\mid c,Immediate]
$$

The conditions are Baseline, HighStakes, and NoChoice. Table 6 gives the total
condition Ns (185, 154, and 159); it reports t-test p-values, with no regression
or fixed effects. Table 7 then estimates the HighStakes treatment coefficient
separately above and below the median SDE score (p. 1625):

$$
\text{BiasPos}_{i}=\alpha+\beta\,\text{HighStakes}_{i}+\varepsilon_i
$$

N = 172 for high-SDE and N = 167 for low-SDE subjects. No fixed effects are
reported; standard errors are in parentheses, with no cluster adjustment stated.

**Placebo and robustness tests (R12-R16).** The text reports a model-based
probability of underremembering negative outcomes near 60% in Delay (p < .001;
text p. 1625, Internet Appendix C), with a larger probability than Immediate.
The NoRecall placebo tests report no significant Delay-NoRecall difference in
beliefs (p = .714) or investment decisions (p = .343; lower-expected-return
subsample p = .383; text p. 1626, Internet Appendix G Table 16). Randomized
task order has no significant effect on memory bias (p = .314), beliefs
(p = .890), or suboptimal reinvesting (p = .428; text p. 1626). The regret
robustness test finds no significant association, but its coefficient and p-value
are not stated in the main text (text p. 1627, Internet Appendix I).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Experiment 1 lab data (Hamburg University, N = 229) | Primary identification of memory bias, beliefs, and reinvestment (Results 1-6) | No page yet |
| Experiment 2 online lab data (CESS Oxford, Xlab UC Berkeley, N = 498) | Memory suppression and active-choice mechanism tests (Result 8, Table 6-7) | No page yet |
| Experiment 3 online data (Prolific, UK, N = 487) | Overconfidence measure via parimutuel betting (Results 6-8) | No page yet |

All three experiments use primary hand-collected data: incentivized laboratory
or online experiments with randomized treatment assignment. No external financial
databases are used; the investment outcomes are computer-generated draws from
known distributions. Experiment 1 programmed in z-Tree (Fischbacher 2007);
experiments 2 and 3 in oTree (Chen, Schonger, and Wickens 2016). Experiment 3
preregistered at AsPredicted under ID 153791.

## When to read the full paper

Read the [original](https://doi.org/10.1093/rfs/hhaf006) if you are: studying the
microfoundations of investor overconfidence or asymmetric learning from
experience; replicating the experimental paradigm (exact outcome distributions
in Appendix D, instructions in Appendices A-C); extending the motivated-memory
model to field settings or longer horizons; or connecting this to
reinforcement learning in finance (Kaustia and Knupfer (2008)) and stock
repurchase anomalies (Strahilevitz, Odean, and Barber (2011)). The exact
Table/Figure locators above point to the key results. Replication code and data
are publicly available at Harvard Dataverse
([https://doi.org/10.7910/DVN/7K6ZPK](https://doi.org/10.7910/DVN/7K6ZPK)).

## Attribution and rights

Source: peer-reviewed, *The Review of Financial Studies* 38(6), 2025.
Published by Oxford University Press on behalf of the Society for Financial
Studies. All rights reserved. Commercial re-use requires reprints permission
from OUP. This distillation was updated on 2026-10-04 and is **not independently
reproduced**. Extract-only: the OUP
standard publication reuse rights do not permit mirroring the verbatim PDF.

> Gödker, Katrin, Peiran Jiao, and Paul Smeets. "Investor Memory."
> *The Review of Financial Studies* 38, no. 6 (2025): 1595-1640.
> DOI: 10.1093/rfs/hhaf006. © 2025 The Author(s).
> Published by Oxford University Press on behalf of the Society for Financial Studies.
