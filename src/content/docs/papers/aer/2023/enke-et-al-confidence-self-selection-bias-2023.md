---
title: "Confidence, Self-Selection, and Bias in the Aggregate: Enke, Graeber & Oprea (2023)"
description: >-
  Distilled: Using 15 cognitive tasks and 2,153 participants in betting market,
  auction, and committee experiments, Enke, Graeber, and Oprea document that
  social institutions filter some biases strongly and others barely at all, with
  the cross-task variation explained almost entirely by the within-task
  confidence-performance correlation (r = 0.76 to 0.93). American Economic
  Review 2023, AEA copyright. Seven core results with source locators, the
  theoretical framework, the experimental design equations, and the datasets used.
sidebar:
  label: Enke-Graeber-Oprea 2023
  order: 1
tags: [paper-summary, behavioral-economics, cognitive-biases, self-selection,
       overconfidence, experimental, peer-reviewed, unreplicated]
paper:
  authors: Benjamin Enke, Thomas Graeber, Ryan Oprea
  authorList:
    - { family: Enke, given: Benjamin, orcid: "0000-0002-7400-3293", affiliation: Harvard University }
    - { family: Graeber, given: "Thomas G.", orcid: "0000-0001-8574-9181", affiliation: Harvard Business School }
    - { family: Oprea, given: Ryan, orcid: "0000-0003-3339-3210", affiliation: "University of California, Santa Barbara" }
  year: 2023
  venue: "American Economic Review 113(7), July 2023, 1933-1966"
  venueShort: AER 2023
  doi: 10.1257/aer.20220915
  jel:
    codes: [C91, D44, D91]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: [Decision-Making and Behavioral Economics, Experimental Behavioral Economics Studies]
  dataAccess: hand-collected
  outcome:
    - institutional bias filtering in betting markets, auctions, and committees
    - within-task confidence-performance correlation across cognitive tasks
    - aggregate optimality rate in social institutions
  outcomeClass: [behavioral-aggregate-outcomes]
  license: "AEA copyright (no license[] block in Crossref DOI metadata; AEA 12-month delayed open access after embargo; paper freely readable at pubs.aeaweb.org; no CC license detected)"
  licenseShort: AEA copyright
  access: open
  machineAccess: "freely accessible at pubs.aeaweb.org (AEA 12-month embargo expired; not machine-fetched in this session; checked 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 33
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [randomized-survey-experiment]
    identification: randomized
  contributionType: [new-fact, measurement]
  mechanisms: [team-self-selection]
  introducesData: true
  scope:
    region: global
    period: 2021-06..2021-06
    dataType: [experimental, survey]
    granularity: [individual]
    n: "2,153 subjects (1,381 between-subjects main treatments; 314 within-subjects treatments); ~70,000 decisions across 15 tasks"
  findings:
    - { ref: R1, outcome: "institutional bias filtering in betting markets, auctions, and committees", metric: pp-effect, value: "positive on average across all tasks and all three institutions: optimal subjects bet 64.8 vs 47.4 (Betting), bid 56.4 vs 43.6 (Auction), vote 75 vs 57.9 (Committee) on average (Figure 2, p. 1952)", direction: positive }
    - { ref: R2, outcome: "institutional bias filtering in betting markets, auctions, and committees", metric: pp-effect, value: "EGB (exponential growth bias): ~17 pp improvement across institutions; IR (iterated reasoning): ~8 pp; RM (regression to mean), AC, EQ near-zero or negative (as low as -4 pp) (Figure 3, p. 1954)", direction: mixed }
    - { ref: R3, outcome: within-task confidence-performance correlation across cognitive tasks, metric: correlation, value: "range -0.13 (RM: misunderstanding mean reversion) to 0.39 (GF: gambler's fallacy); 6 of 15 tasks negative; statistically significant negative for RM and TM (Figure 4, p. 1956)", direction: mixed }
    - { ref: R4, outcome: "institutional bias filtering in betting markets, auctions, and committees", metric: correlation, value: "r = 0.76 (between-subjects), r = 0.93 (within-subjects) between confidence-performance correlation and institutional improvement across 15 tasks (Figure 5, p. 1957)", direction: positive }
    - { ref: R5, outcome: "institutional bias filtering in betting markets, auctions, and committees", metric: correlation, value: "r^auction = 0.69, r^betting = 0.73, r^committee = 0.77 (between-subjects); r^auction,within = 0.90, r^betting,within = 0.90, r^committee,within = 0.91 (p. 1958)", direction: positive }
    - { ref: R6, outcome: "efficiency of institutions in reducing bias (fraction of theoretically possible improvement realized)", metric: correlation, value: "r = 0.87 (between-subjects), r = 0.94 (within-subjects) between confidence-performance correlation and institutional efficiency (p. 1959)", direction: positive }
    - { ref: R7, outcome: "institutional bias filtering in betting markets, auctions, and committees", metric: correlation, value: "r = -0.34 (between-subjects), r = -0.32 (within-subjects) between average overconfidence (d = c_bar - p_bar) and institutional improvement; neither significant at conventional levels (p. 1961)", direction: none }
  resultType: new-finding
  relatesTo:
    - { cite: "Fehr and Tyran (2005)", doi: '10.1257/089533005775196651', relation: builds-on, note: "foundational paper documenting that individual irrationality may or may not matter for aggregate market outcomes" }
    - { cite: "List (2003)", doi: '10.1162/00335530360535144', relation: tests, note: "extends the market experience and selection hypothesis to laboratory institutions covering 15 distinct cognitive biases" }
    - { cite: "Camerer and Lovallo (1999)", doi: '10.1257/aer.89.1.306', relation: extends, note: "generalizes the overconfidence-entry link to three institutional settings and 15 cognitive tasks" }
    - { cite: "Moore and Healy (2008)", doi: '10.1037/0033-295x.115.2.502', relation: cites, note: "taxonomy of overconfidence types used to frame what the paper argues does NOT predict institutional filtering (average overconfidence vs. the confidence-performance correlation)" }
    - { cite: "Kendall and Oprea (2018)", doi: '10.1016/j.jet.2018.04.005', relation: cites, note: "complementary test of the market selection hypothesis in laboratory setting; Oprea is a co-author of both papers" }
  openQuestions:
    - "The simplest static institutional variants were studied by design; markets and organizations with dynamic feedback may show larger differences across institution types that the static design attenuates (p. 1963)."
    - "The welfare effects of self-selection are not studied; if people select out of institutions they should enter (e.g., insurance markets), the welfare costs of non-participation may offset the aggregate debiasing benefit (p. 1963)."
    - "The determinants of the confidence-performance correlation itself are largely unknown: how nudges, frames, feedback, and learning change the correlation for a given cognitive bias is an open agenda (pp. 1963-1964)."
  replicationCode:
    url: "https://doi.org/10.3886/E185741V1"
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (pp. 1933-1966, 34 pages); seven results extracted from the source. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 7 Core-results rows confirmed (R1 p.1953, R2 Fig.3/p.1954, R3 Fig.4/p.1955-56, R4 Fig.5/p.1957, R5 p.1958, R6 p.1959, R7 pp.1960-61); all equations (1)-(9) verified term-by-term; one colorful adjective fixed (enormous→large in TL;DR)." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20220915", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] block present; link[].content-version=vor, URL=https://pubs.aeaweb.org/doi/pdf/10.1257/aer.20220915; AEA delayed open access applies after 12-month embargo; no CC license" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the theoretical framework linking confidence to institutional filtering, and the three experimental institutions (parimutuel betting market, discriminatory auction, committee voting) with their defining equations: enough to know what it found and how, without reading all 34 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.1257/aer.20220915).

## TL;DR

Enke, Graeber, and Oprea run a large preregistered online experiment on Prolific (2,153 subjects, June 2021) exposing participants to 15 canonical cognitive biases from behavioral economics and three simple social institutions (betting markets, auctions, committees) that allow voluntary self-selection. They find that institutions filter biases on average, but with large cross-task variation: exponential growth bias (EGB) is reduced by roughly 17 percentage points, while base-rate neglect and correlation neglect are barely affected, and the winner's curse is even amplified. Almost all of this cross-task heterogeneity (r = 0.76 to 0.93) is explained by a single sufficient statistic: the within-task Pearson correlation between subjects' stated confidence and their decision optimality. When better performers are also more confident, they self-select more intensively and the institution de-biases effectively. When confidence and performance are uncorrelated or negatively correlated, the institution cannot filter, regardless of average overconfidence levels.

## Core results

Magnitudes as reported; Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Positive self-selection in all three institutions on average across tasks: optimal decision makers bet, bid, and vote more intensively than suboptimal ones | Figure 2, p. 1952; p. 1953 | Betting: 64.8 avg. bet (optimal) vs 47.4 (suboptimal), 37% more; Auction: 56.4 vs 43.6, 29% more; Committee: 75 vs 57.9 votes, 29% more |
| R2 | Large cross-task variation in institutional filtering: EGB and iterated reasoning (IR) strongly improved, some tasks near-zero or negative | Figure 3, p. 1954 | EGB: ~17 pp improvement across institutions; IR: ~8 pp; RM, AC, EQ near-zero or negative (approx. -4 to 0 pp); pairwise correlations across institutions 0.85-0.91 |
| R3 | Confidence-performance correlation varies widely across tasks: from negative (RM = -0.13, TM significantly negative) to moderately positive (GF = 0.39); 6 of 15 tasks negative | Figure 4, p. 1956 | Pearson r ranges -0.13 (RM) to 0.39 (GF); N = 334 in Confidence treatment; no task exceeds r = 0.5 |
| R4 | Confidence-performance correlation strongly predicts institutional improvement across the 15 tasks | Figure 5, p. 1957 | r = 0.76 (between-subjects), r = 0.93 (within-subjects); robust to leave-two-out: between-subjects range 0.61-0.83 (mean 0.76) |
| R5 | Predictive power is consistent across all three institutions | p. 1958 | r\^auction = 0.69, r\^betting = 0.73, r\^committee = 0.77 (between); r\^auction,within = 0.90, r\^betting,within = 0.90, r\^committee,within = 0.91 |
| R6 | Confidence-performance correlation predicts institutional efficiency (fraction of theoretically possible improvement realized) even more strongly | p. 1959 | r = 0.87 (between-subjects), r = 0.94 (within-subjects) |
| R7 | Average overconfidence (d = c - p) shows a weak, statistically insignificant negative relationship with institutional improvement | p. 1961 | r = -0.34 (between-subjects), r = -0.32 (within-subjects); neither significantly different from 0 at conventional levels |

**Overall (paper's conclusion).** Average overconfidence, the traditional focus of most confidence research, is largely irrelevant for predicting whether markets and organizations de-bias economic aggregates. The relevant object is the confidence-performance correlation, which determines whether the biased individuals who self-select out of institutions are actually the ones making worse decisions. This implies a simple methodological blueprint: researchers studying cognitive biases can estimate the likely institutional impact by appending an unincentivized confidence question and reporting the resulting correlation with performance.

## Theory / model

The paper lays out a simple analytical framework (Section II, pp. 1947-1950) to derive testable predictions about institutional filtering. There is no fully specified equilibrium model; the framework is a linear approximation designed to connect observable confidence and performance to institutional outcomes.

**Setup.** Each of $$N$$ agents forms a judgment on a cognitive task. Agent $$i$$'s solution is optimal ($$X_i = 1$$) with probability $$p_i$$ and incorrect ($$X_i = 0$$) with probability $$1 - p_i$$. Pre-institutional aggregate performance equals the raw optimality rate

$$
\Theta^{\text{pre}} = \frac{1}{N}\sum_{i=1}^N X_i, \qquad \theta^{\text{pre}} \equiv E[\Theta^{\text{pre}}] = \frac{1}{N}\sum_{i=1}^N p_i.
$$

Each agent then makes an institutional decision $$k_i \in [0, 1]$$, representing bet intensity, bid size, or vote share, depending on the institution. Institutional filtering $$\mathbb{G} = \theta^{\text{post}} - \theta^{\text{pre}}$$ is positive when the institution makes aggregate outcomes appear as if participants were more rational than they actually are.

**Institutional performance metrics (pp. 1948).** For betting markets and committees, the performance metric is a weighted average of agents' optimality, weighted by their participation intensity:

$$
\theta^{\text{post}}_{\text{bet,com}} = \frac{\sum_i k_i p_i}{\sum_i k_i}. \tag{5}
$$

The expected institutional gain is

$$
\mathbb{G}_{\text{bet,com}} = \theta^{\text{post}} - \theta^{\text{pre}} = \frac{\sum_i p_i (k_i - \bar{k})}{N\bar{k}}. \tag{6}
$$

This expression is positive if and only if better-performing agents participate more intensively than the average. For auctions, only the top-5 bidders win and the metric is their average optimality rate, so

$$
\mathbb{G}_{\text{auc}} = \frac{1}{|W|}\sum_{j \in \Omega} p_j - \frac{1}{N}\sum_i p_i, \tag{7}
$$

where $$\Omega$$ is the set of winners (highest five bids).

**Confidence and performance (p. 1949).** Institutional self-selection is assumed to depend on agents' stated confidence $$c_i$$ about the ex ante optimality of their decision. The paper models the within-task confidence-performance relationship as approximately linear:

$$
c_i = \alpha + \beta \cdot p_i. \tag{8}
$$

The slope $$\beta$$ is the confidence-performance correlation (the key object). Average overconfidence is $$d = \bar{c} - \bar{p} = \alpha + (\beta - 1)\bar{p}$$, which combines both the intercept $$\alpha$$ and the slope $$\beta$$. Institutional self-selection is taken to be proportional to confidence:

$$
k_i = \omega \cdot c_i \in [0,1]. \tag{9}
$$

Here $$\omega > 0$$ captures the degree to which self-selection actually depends on confidence as opposed to other factors.

**Predictions.** Substituting equations (8) and (9) into (6) and (7) yields two preregistered predictions (pp. 1950):

- **Prediction 1**: If $$\beta > 0$$, then $$\mathbb{G} > 0$$ (institutions filter biases). Institutional improvement $$\mathbb{G}$$ increases in the confidence-performance correlation $$\beta$$.
- **Prediction 2**: The effect of average overconfidence $$d$$ on $$\mathbb{G}$$ is ambiguous. In auctions, there is no relationship (only the ordering of bids matters, not their level). In betting and committees with $$\beta > 0$$, the effect of $$d$$ is weakly negative.

Fehr and Tyran (2005) provide foundational evidence that individual irrationality sometimes survives in aggregate market outcomes, and sometimes does not; this framework clarifies that the confidence-performance correlation is the sufficient statistic for predicting which case applies. The paper complements List (2003), who shows that market experience reduces anomalies through learning; here the channel is purely self-selection, which operates even in the absence of feedback or repeated play.

## Method

The experiment (Section I, pp. 1938-1946) implements three maximally simple static variants of canonical economic institutions to isolate the self-selection mechanism. All three are implemented on Prolific with identical slider-based interfaces (0-100) so the self-selection decision is comparable across institutions. The three institutions and their performance metrics are:

**Betting market (parimutuel), p. 1942.** Ten subjects are grouped into a parimutuel betting market. Each subject $$i$$ bets $$b_i \in [0, 100]$$ ECUs on the proposition that her own part-1 response was optimal. The market price on the optimal-decision security is

$$
\theta^{\text{Betting}} = \frac{\sum_{i=1}^{10} x_i b_i}{\sum_{i=1}^{10} b_i} \in [0,1]. \tag{1}
$$

If subject $$i$$'s part-1 decision was optimal, her payoff is

$$
\pi_i^{\text{Betting}} = \frac{b_i}{\theta^{\text{Betting}}} + (100 - b_i). \tag{2}
$$

The market price in equation (1) is simply a reweighting of individual part-1 decisions $$x_i$$ by how much each subject bets; if no self-selection occurs (everyone bets equally), the price equals the raw optimality rate.

**Discriminatory auction (5 winners), p. 1943.** Subjects submit sealed bids $$b_i \in [0, 100]$$ ECUs. The five highest bidders win and receive a bonus of 100 ECUs if their part-1 decision was optimal. The institutional performance metric is the optimality rate among winners:

$$
\theta^{\text{Auction}} = \frac{\sum_{i \in \Omega} x_i}{5}, \tag{3}
$$

where $$\Omega$$ is the set of five highest bidders. Under standard assumptions this auction implements an efficient allocation to the highest-value bidders (Krishna 2009).

**Utilitarian committee voting, p. 1943.** Each subject receives 100 votes and submits $$v_i \in [0, 100]$$ votes in favor of her own part-1 answer. The fraction of votes on the optimal answer is

$$
\theta^{\text{Committee}} = \frac{\sum_{i=1}^{10} X_i v_i}{\sum_{i=1}^{10} v_i} \in [0,1]. \tag{4}
$$

All subjects earn $$100 \times \theta^{\text{Committee}}$$ regardless of their own vote.

**Confidence elicitation and treatments.** After each part-1 cognitive task, subjects in the Confidence treatment (N = 334) and the Within treatments (N = 314) are asked an unincentivized slider question: "How certain are you that your decision in Part 1 was optimal?" (0-100%). In between-subjects treatments (Betting, Auction, Committee), confidence is never elicited; the confidence-performance correlation is measured in a separate Confidence treatment. Table 2 (p. 1945) summarizes the full experimental design: Betting (N = 387), Auction (N = 323), Committee (N = 337), Confidence (N = 334) between-subjects; and Betting Within (N = 105), Auction Within (N = 105), Committee Within (N = 104) within-subjects.

The 15 cognitive tasks (Table 1, p. 1940) cover information processing and statistical reasoning (base rate neglect, correlation neglect, balls-and-urns belief updating, gambler's fallacy, sample size neglect, regression to mean), logic (Wason task, cognitive reflection test), strategic reasoning (backward induction, equilibrium reasoning), constrained optimization (knapsack), and financial reasoning (thinking at the margin, portfolio choice, exponential growth bias, acquiring a company).

## Empirical specifications

The main empirical analysis works at the task level (15 observations) rather than at the individual level. There is no single regression equation; the core result is a cross-task bivariate correlation.

**Step 1: Measure the confidence-performance correlation per task.** For each of the 15 tasks $$k$$ in the Confidence treatment (between-subjects) or the Within treatments (within-subjects), compute the Pearson correlation between the binary optimality indicator $$x_i$$ (part 1) and stated confidence $$c_i$$ (part 2):

$$
\hat{\beta}_k = \text{Corr}(x_i, c_i) \quad \text{in task } k.
$$

This is computed separately for each task across the 334 (between) or 314 (within) subjects who see the confidence elicitation.

**Step 2: Measure institutional improvement per task.** For each task $$k$$ and institution $$j \in \{\text{Betting, Auction, Committee}\}$$, simulate 10,000 random 10-subject cohorts by drawing with replacement from the pool of part-1 and part-2 decisions. Compute $$\theta^{\text{post}}_{k,j}$$ for each cohort using equations (1)-(4), and compare to the cohort's raw optimality rate $$\theta^{\text{pre}}_k$$. The institutional improvement is the mean of $$\theta^{\text{post}} - \theta^{\text{pre}}$$ over the 10,000 cohorts. Standard errors are computed conservatively as the standard deviation of cohort-level improvements divided by $$\sqrt{N/10}$$, where $$N$$ is the treatment sample size (e.g., $$387/10 = 38.7$$ cohorts in Betting; Figure 3 notes, p. 1954).

**Step 3: Cross-task regression.** The main result (Figure 5, p. 1957) is the Pearson correlation between $$\hat{\beta}_k$$ (step 1) and the average institutional improvement in task $$k$$ (step 2) across the 15 tasks. The between-subjects correlation pools improvements across Betting, Auction, and Committee. The within-subjects correlation uses the same subjects for both confidence and institutional decisions.

**Average overconfidence check.** As an ancillary test, the paper replaces $$\hat{\beta}_k$$ with task-level average overconfidence $$\hat{d}_k = \bar{c}_k - \bar{p}_k$$ and repeats step 3. This directly tests Prediction 2: the resulting correlation is weakly negative (r = -0.34 between, r = -0.32 within) but not statistically distinguishable from zero (p. 1961).

**Expert survey.** A separate sample of 38 behavioral economists (CESifo/VIBES panel, November 2021) predicted institutional improvements and confidence differences for 7 of the 15 tasks in the Auction treatment. Experts' median forecasts are compared to actual outcomes in Figure 6 (p. 1962). The analysis uses a paired comparison of forecast vs. actual for each of the 7 tasks; no regression is reported. Camerer and Lovallo (1999) document overconfidence in entry decisions; the expert results here parallel that finding in the prediction domain. Moore and Healy (2008) provide the taxonomy of overconfidence types that the paper uses to frame what experts miss. Kendall and Oprea (2018) study the market selection hypothesis in a related laboratory design.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Primary experimental data (Prolific online experiment, June 2021) | 15 cognitive tasks x 3 institutions x 2,153 subjects; ~70,000 individual decisions | No page yet |
| Expert survey (Social Science Prediction Platform, November 2021) | 38 behavioral economists predicting institutional filtering and confidence differences for 7 tasks | No page yet |

Sample: 1,381 subjects in between-subjects treatments (Betting, Auction, Committee, Confidence); 314 subjects in within-subjects treatments (Betting Within, Auction Within, Committee Within); June 2021 on Prolific. Replication data available at ICPSR (https://doi.org/10.3886/E185741V1).

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20220915) if you are: studying which specific cognitive biases survive market aggregation (the paper gives results for all 15 tasks by institution); designing experiments to study self-selection through institutions (the exact institution implementations are in online appendices); investigating what determines the confidence-performance correlation itself and why it varies across tasks (Section IV.C); or replicating the expert-survey methodology (the SSPP survey instruments are reproduced in online appendices). Locators above point to the exact figures and pages.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(7), July 2023. Published under AEA copyright with 12-month delayed open access. No CC license detected. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. Redistribution is extract-only.

> Enke, Benjamin, Thomas Graeber, and Ryan Oprea. "Confidence, Self-Selection, and Bias in the Aggregate."
> *American Economic Review* 113, no. 7 (July 2023): 1933-1966.
> DOI: 10.1257/aer.20220915.
> Replication data: https://doi.org/10.3886/E185741V1 (AEA/ICPSR).
> This page is an extraction by the Institute for Automated Research: core results
> and equations summarized; **not reproduced**.
