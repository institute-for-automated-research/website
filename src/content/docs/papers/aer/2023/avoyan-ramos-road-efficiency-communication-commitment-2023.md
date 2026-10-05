---
title: "Road to Efficiency: Avoyan & Ramos (2023)"
description: >-
  Distilled: A laboratory experiment shows that a commitment-enhanced pre-play
  communication institution (asynchronous revision mechanism) achieves 82 percent
  efficiency in the minimum-effort coordination game, significantly outperforming
  cheap-talk communication (64 percent) and the no-communication baseline (48
  percent); commitment, asynchronicity, and revision frequency are all needed for
  its advantage over standard cheap talk. American Economic Review 2023, paywalled. Seventeen core results with
  source locators, the game-theoretic model, and the experimental design.
sidebar:
  label: Avoyan-Ramos 2023
  order: 1
tags: [paper-summary, game-theory, experimental, coordination, mechanism-design,
       peer-reviewed, unreplicated]
paper:
  authors: Ala Avoyan, João Ramos
  authorList:
    - { family: Avoyan, given: Ala, orcid: "0000-0002-7597-2045", affiliation: Indiana University }
    - { family: Ramos, given: João, orcid: "0000-0001-6458-375X", affiliation: "University of Southern California" }
  year: 2023
  venue: "American Economic Review 113(9), September 2023, pp. 2355-2381"
  venueShort: AER 2023
  doi: 10.1257/aer.20171014
  jel:
    codes: [C73, C92, D83]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-24
  topics:
    - Experimental Behavioral Economics Studies
    - Game Theory and Applications
    - Culture, Economy, and Development Studies
  dataAccess: hand-collected
  outcome:
    - normalized efficiency in the minimum-effort coordination game
    - fraction of subjects choosing the efficient effort
    - fraction of fully coordinated groups
    - payoffs and group coordination measures
    - fraction of revision moves to the efficient effort
    - payoff loss from the communication-action gap
  outcomeClass: [social-welfare]
  license: >-
    Copyright American Economic Association 2023; no CC license block found in
    Crossref DOI metadata; AEA provides free-to-read access via aeaweb.org under
    AEA publication terms (not a Creative Commons licence); redistribution
    extract-only
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA site; Crossref DOI confirmed 2026-06-24; full-text machine fetch not tested)"
  redistribution: extract-only
  resultsCount: 17
  citedByCount: 20

  methods:
    role: both
    contributes: asynchronous-revision-mechanism
    family: reduced-form-causal
    buildsFrom: [repeated-extensive-form-game, mechanism-design]
    identification: randomized
  contributionType: [new-fact, new-theory]
  mechanisms: [coordination-commitment]
  introducesData: true
  scope:
    region: US
    period: 2015-12..2021-04
    dataType: [experimental]
    granularity: [individual]
    n: "528 subjects (9 treatments, groups of 6, 10 rounds each)"

  findings:
    - ref: R1
      outcome: normalized efficiency in the minimum-effort coordination game
      metric: pp-effect
      value: "RM = 82.1%; Baseline = 47.8% (+34 pp, p < 0.01 MWU); S-CT = 64.1% (+18 pp, p < 0.01 MWU)"
      direction: positive
      vsBenchmark: "+18 pp over cheap-talk (S-CT); +34 pp over no-communication baseline"
    - ref: R2
      outcome: normalized efficiency in the minimum-effort coordination game
      metric: probability
      value: "RM efficiency = 82.1% (p < 0.01 below 100%); initial efficient-effort rate = 85.7% (p < 0.01 below 100%)"
      direction: negative
      vsBenchmark: "significantly below the 100% theoretical prediction"
    - ref: R3
      outcome: normalized efficiency in the minimum-effort coordination game
      metric: pp-effect
      value: "R-RM = 77.8% (MWU p = 0.173 vs RM); RM-VHBB = 82.2% (MWU p = 0.447 vs RM)"
      direction: none
      vsBenchmark: "statistically indistinguishable from RM = 82.1%"
    - ref: R4
      outcome: normalized efficiency in the minimum-effort coordination game
      metric: pp-effect
      value: "I-RM = 69.6% (-12.5 pp vs RM, p < 0.001 MWU); S-RM = 67.1% (-15 pp vs RM, p < 0.001 MWU)"
      direction: negative
      vsBenchmark: "12-15 pp below RM; both frequency and asynchronicity are required"
    - ref: R5
      outcome: normalized efficiency in the minimum-effort coordination game
      metric: pp-effect
      value: "R-CT = 67.2% vs RM = 82.1% (-15 pp, p < 0.001 MWU)"
      direction: negative
      vsBenchmark: "-15 pp vs RM; removing commitment drops efficiency to cheap-talk levels"
    - ref: R6
      outcome: fraction of forward-thinking revision moves during pre-play
      metric: probability
      value: "First 10 s: 91.6% forward-thinking, 2.9% myopic-down; last 10 s: 12.5% forward-thinking, 84.4% myopic-down"
      direction: mixed
      vsBenchmark: "behavior shifts from forward-looking to myopic as the deadline approaches"
    - ref: R7
      outcome: credibility of communication under commitment
      metric: probability
      value: "Groups converging to a common effort profile implement it 87.6% of the time in RM vs 51.1% in R-CT"
      direction: positive
      vsBenchmark: "commitment raises follow-through rate from 51% to 88%"
    - ref: R8
      outcome: payoff loss from communication-action gap in cheap talk
      metric: level
      value: "10.7% payoff loss from gap between 60th-second message and implemented effort in R-CT (payoff 10.18 vs 9.19)"
      direction: negative
      vsBenchmark: "payoff-relevant effort significantly below last-second communicated intention in R-CT"
    - ref: R9
      outcome: normalized efficiency in the minimum-effort coordination game
      metric: pp-effect
      value: "R-R-CT = 68.2% vs R-CT = 67.2%; not significantly different (MWU p >= 0.385)"
      direction: none
      vsBenchmark: "richer normative cheap-talk messages do not improve on simple cheap talk"
    - { ref: R10, outcome: payoffs and group coordination measures, metric: coefficient, value: "Table 2 treatment coefficients (SE): RM vs S-CT: payoffs 0.21 (0.012), minimum effort 1.21 (0.712), efficient-effort frequency 0.339 (0.136), full coordination 0.388 (0.141), equilibrium deviation -0.395 (0.221); Baseline vs S-CT: -0.168 (0.124), -1.03 (0.75), -0.173 (0.125), -0.25 (0.116), 0.589 (0.268), respectively", direction: mixed, vsBenchmark: "OLS, Table 2; standard errors clustered by group" }
    - { ref: R11, outcome: normalized efficiency in the minimum-effort coordination game, metric: pp-effect, value: "Round 1: Baseline 43.1%, S-CT 51.1%, RM 69.7%; round 10: Baseline 43.8%, S-CT 68.0%, RM 92.0%", direction: positive, vsBenchmark: "RM-S-CT gap widens from 18.6 pp in round 1 to 24.0 pp in round 10" }
    - { ref: R12, outcome: fraction of fully coordinated groups, metric: probability, value: "Baseline fully coordinated in 2 of 80 group-rounds", direction: none, vsBenchmark: "Pure-strategy Nash equilibrium predicts full coordination; observed baseline rarely coordinates" }
    - { ref: R13, outcome: fraction of revision moves to the efficient effort, metric: probability, value: "78.2% of revisions in the first 10 seconds move to effort 7, significantly below 100%", direction: negative, vsBenchmark: "Early-revision point prediction is not fully met" }
    - { ref: R14, outcome: fraction of subjects choosing the efficient effort, metric: probability, value: "RM-VHBB vs RM: efficient-effort frequency 0.59 vs 0.78 (MWU p < 0.01); minimum effort 5.44 vs 5.83 (p = 0.061)", direction: negative, vsBenchmark: "Different payoff parameters preserve efficiency but not all component outcomes" }
    - { ref: R15, outcome: payoffs and group coordination measures, metric: probability, value: "R-R-CT vs R-CT: payoffs 9.31 vs 9.19 (p = 0.685); minimum effort 4.94 vs 4.86 (p = 0.672); efficient-effort frequency 0.60 vs 0.56 (p = 0.385); full coordination 0.36 vs 0.32 (p = 0.500); equilibrium deviation 0.96 vs 0.97 (p = 0.687)", direction: none, vsBenchmark: "No difference detected across the five outcome measures" }
    - { ref: R16, outcome: payoff loss from the communication-action gap, metric: level, value: "R-CT 60-second message vs payoff-relevant action: payoffs 10.18 vs 9.19; minimum effort 5.5 vs 4.9; efficient-effort frequency 0.77 vs 0.56; fully coordinated groups 0.48 vs 0.32; equilibrium deviation 0.92 vs 0.97 (MWU p = 0.103 for equilibrium deviation)", direction: negative, vsBenchmark: "Payoff loss is 10.7%; other stated tests reject equality except equilibrium deviation" }
    - { ref: R17, outcome: normalized efficiency in the minimum-effort coordination game, metric: pp-effect, value: "S-CT = 64.1% vs Baseline = 47.8% (+16.3 pp)", direction: positive, vsBenchmark: "The paper describes the cheap-talk gain over Baseline as significant; no p-value is stated here" }

  resultType: mixed

  relatesTo:
    - { cite: "Van Huyck, Battalio & Beil (1990)", relation: extends, note: "provides the minimum-effort game; establishes the coordination-failure baseline the revision mechanism aims to overcome" }
    - { cite: "Calcagno et al. (2014)", doi: '10.3982/te1202', relation: tests, note: "tests their prediction that asynchronous revision uniquely selects the Pareto-dominant equilibrium; confirms direction (82%) but rejects the 100% point prediction" }
    - { cite: "Blume & Ortmann (2007)", relation: tests, note: "S-CT treatment replicates their one-shot cheap-talk design; efficiency levels are comparable (64% here vs 69% in B&O)" }
    - { cite: "Deck & Nikiforakis (2012)", doi: '10.1007/s10683-011-9289-1', relation: cites, note: "related real-time rich cheap-talk benchmark in minimum-effort games; efficiency levels similar to S-CT here" }

  openQuestions:
    - "Whether a study with sequential moves focusing on the horizon and order of play would shed further light on the importance of the random, repeated, sequential nature of moves in RM (p. 2379)."
    - "Whether the efficiency gains from the revision mechanism generalize beyond the minimum-effort game to other coordination environments (Proposition 1 covers K-coordination games, but only the minimum-effort game is tested empirically)."

  replicationCode:
    url: "https://doi.org/10.3886/E185662V1"
    status: available

  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-24
      role: extracted
      note: "Full text read (pp. 2355-2381); nine results extracted from PDF. Not human-verified. Not reproduced."
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-24
      role: verified
      note: "Locators and reported magnitudes re-checked against the source PDF; one fix applied: I-RM commitment column in the Method treatment table corrected from Gradual to Abrupt (PDF Table 1, p. 2369); all nine Core results magnitudes, equations (1)-(4), Proposition 1, regression coefficients (Table 2), and treatment descriptions verified correct."
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full source PDF (pp. 2355-2381); appended eight Core results rows and corresponding findings, added the complete Table 2 estimating specifications and their sample, controls, fixed-effect, and clustered-error details. These additions were not independently reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 17 Core results, equations and specifications, classification axes, findings, frontmatter, and prose against the full PDF; corrected the strict Proposition 1 boundary claim, two finding directions and metrics, R7 significance overclaim, resultType, and R17 text locator. Locator checker flagged no table-page errors; manually verified Table 2 on p. 2372." }

  licenceVerification:
    - source: "Crossref REST API works/10.1257/aer.20171014"
      checked: 2026-06-24
      by: paper-distiller (claude-sonnet-4-6)
      found: "no license[] block present; title confirmed: A Road to Efficiency through Communication and Commitment; authors: Avoyan Ala, Ramos Joao; container: American Economic Review; published: 2023-09-01; pages: 2355-2381"

  rightsSignalConflict: false
---

**What this is.** The paper's core results, the game-theoretic model of the minimum-effort game and the asynchronous revision mechanism, and the experimental design with its estimating comparisons: enough to understand what it found and how, without reading all 27 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1257/aer.20171014).

## TL;DR

Avoyan and Ramos run a laboratory experiment in the minimum-effort game, a canonical coordination game where groups chronically fail to reach the payoff-efficient outcome. They introduce a pre-play institution: an asynchronous revision mechanism (RM) in which each player posts a prepared effort choice that is publicly observable, but can be revised only when a stochastic revision opportunity is awarded. This incremental commitment makes prepared actions credible in a way that one-shot cheap-talk communication, as in Blume and Ortmann (2007), cannot. RM achieves 82.1 percent efficiency, versus 47.8 percent with no communication (Baseline) and 64.1 percent with one round of cheap-talk messages (S-CT). The full efficiency premium over standard cheap talk requires all three components together: commitment (removing it via R-CT drops to 67.2%), asynchronicity (S-RM drops to 67.1%), and frequent revision opportunities (I-RM drops to 69.6%). Removing any one leaves efficiency around the cheap-talk level, still above Baseline. The dynamic behavior within the pre-play phase also matches the theory: early revisions are forward-thinking (upward moves to lead others toward the efficient effort), while late revisions are myopic payoff-improving down-moves. Rich pre-play communication without commitment, as in Deck and Nikiforakis (2012), does not improve on one-shot cheap talk.

## Core results

Magnitudes and significance as reported; `\*\*\*` = 1%. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | RM significantly increases efficiency over Baseline and cheap talk (S-CT) | Figure 2, p. 2370; Result 1, p. 2371 | RM = 82.1%; Baseline = 47.8% (+34 pp, p < 0.01 MWU); S-CT = 64.1% (+18 pp, p < 0.01 MWU) |
| R2 | RM efficiency (82.1%) and initial efficient-effort rate (85.7%) are both significantly below the 100% theoretical prediction | §IV.B, pp. 2371-2372; Result 2, p. 2372 | Both p < 0.01; exact point predictions of Calcagno et al. (2014) rejected |
| R3 | RM performance is invariant to exogenous initial choices (R-RM) and to Van Huyck, Battalio, and Beil (1990) payoff parameters (RM-VHBB) | pp. 2372-2373; Result 3, p. 2373 | R-RM = 77.8% (MWU p = 0.173 vs RM); RM-VHBB = 82.2% (MWU p = 0.447 vs RM) |
| R4 | Reducing revision frequency (I-RM) or making revisions synchronous (S-RM) each reduces efficiency by 12-15 pp | pp. 2373-2374; Result 4, p. 2374 | I-RM = 69.6% (-12.5 pp, p < 0.001 MWU); S-RM = 67.1% (-15 pp, p < 0.001 MWU) |
| R5 | Removing commitment (R-CT) reduces efficiency by 15 pp to cheap-talk levels | p. 2374; Result 5, p. 2374 | R-CT = 67.2% vs RM = 82.1%, p < 0.001 MWU |
| R6 | Early revisions are forward-thinking; late revisions are myopic payoff-improving | Figure 3, p. 2375; Result 6, p. 2376 | First 10 s: 91.6% forward-thinking, 2.9% myopic-down; last 10 s: 12.5% forward-thinking, 84.4% myopic-down |
| R7 | Groups converging to a common effort profile implement it more often under commitment | pp. 2376-2377; Result 7, p. 2377 | 87.6% follow-through in RM vs 51.1% in R-CT when a common profile is reached |
| R8 | Substantial gap between final pre-play message and implemented effort in R-CT causes 10.7% payoff loss | p. 2377; Result 8, p. 2377 | Payoff at 60th-second message = 10.18; payoff-relevant choice = 9.19; p < 0.001 (MWU) for min effort and freq efficient effort |
| R9 | Richer normative cheap-talk messages (R-R-CT) do not improve efficiency over simple cheap talk (R-CT) | p. 2378; Result 9, p. 2378 | R-R-CT = 68.2% vs R-CT = 67.2%; MWU p >= 0.385 |
| R10 | Table 2 OLS estimates show RM improves payoffs and the coordination measures relative to S-CT, while Baseline is similar on most measures | Table 2, p. 2372 | RM vs S-CT coefficients (SE): payoffs 0.21 (0.012), minimum effort 1.21 (0.712), efficient-effort frequency 0.339 (0.136), full coordination 0.388 (0.141), equilibrium deviation -0.395 (0.221). Baseline vs S-CT: -0.168 (0.124), -1.03 (0.75), -0.173 (0.125), -0.25 (0.116), 0.589 (0.268), respectively |
| R11 | The efficiency advantage of RM grows over the ten rounds | text p. 2370 | Round 1: Baseline 43.1%, S-CT 51.1%, RM 69.7%; round 10: Baseline 43.8%, S-CT 68.0%, RM 92.0% |
| R12 | Baseline groups rarely achieve even an inefficient pure-strategy equilibrium | text p. 2372 | Full coordination occurs in 2 of 80 baseline group-rounds |
| R13 | Early moves toward the efficient effort fall short of the exact point prediction | text p. 2376 | 78.2% of revisions in the first 10 seconds move to effort 7, significantly below 100% |
| R14 | Under the VHBB payoff parameters, the efficient-effort share is lower even though aggregate efficiency is unchanged | text p. 2373; Result 3, p. 2373 | RM-VHBB vs RM: efficient-effort frequency 0.59 vs 0.78 (MWU p < 0.01); minimum effort 5.44 vs 5.83 (p = 0.061) |
| R15 | Adding normative messages to revision cheap talk leaves all five measured outcomes statistically indistinguishable | text p. 2378; Result 9, p. 2378 | R-R-CT vs R-CT: payoffs 9.31 vs 9.19 (p = 0.685); minimum effort 4.94 vs 4.86 (p = 0.672); efficient-effort frequency 0.60 vs 0.56 (p = 0.385); full coordination 0.36 vs 0.32 (p = 0.500); equilibrium deviation 0.96 vs 0.97 (p = 0.687) |
| R16 | In R-CT, the final communicated profile differs from the payoff-relevant action on four of five measures | text p. 2377; Result 8, p. 2377 | 60-second message vs action: payoffs 10.18 vs 9.19; minimum effort 5.5 vs 4.9; efficient-effort frequency 0.77 vs 0.56; full coordination 0.48 vs 0.32; equilibrium deviation 0.92 vs 0.97 (MWU p = 0.103 for equilibrium deviation) |
| R17 | Standard cheap talk raises efficiency over the no-communication baseline | Figure 2, p. 2370; text p. 2379 | S-CT = 64.1% vs Baseline = 47.8% (+16.3 pp); the conclusion calls this a significant improvement |

**Overall (paper's conclusion).** The three key ingredients of the revision mechanism (commitment, asynchronicity, and frequent revisions) are all necessary to achieve 82 percent efficiency. Removing any one reduces efficiency to the level of standard cheap talk. The paper's summary efficiency ordering is (equation (4), p. 2378):

$$
\text{RM} > \text{S-CT} \approx \text{R-CT} \approx \text{I-RM} \approx \text{S-RM} > \text{Baseline}. \tag{4}
$$

## Theory / model

The stage game is a normal-form game $$(I, (E)_{i \in I}, (\pi_i)_{i \in I})$$, where $$I = \{1, \ldots, n\}$$, $$E$$ is a finite effort set common to all players, and $$\pi_i(\mathbf{e})$$ is the payoff to player $$i$$ for profile $$\mathbf{e} \in E^n$$ (p. 2360). The highest effort is $$\bar{e}$$, the lowest $$\underline{e}$$. In the **minimum-effort game** (equation (1), p. 2360):

$$
\pi_i(\mathbf{e}) = \gamma + \alpha \cdot \min_{j \in I} e_j - \beta \cdot e_i, \tag{1}
$$

where $$\alpha > \beta > 0$$. Laboratory parameters: $$\gamma = 0.18$$, $$\alpha = 0.20$$, $$\beta = 0.04$$, $$E = \{1, 2, 3, 4, 5, 6, 7\}$$, groups of $$n = 6$$. Every profile where all players choose the same effort $$e^*$$ is a strict Nash equilibrium, Pareto-ranked by effort level. The efficient profile $$\bar{e} = (7,\ldots,7)$$ is uniquely Pareto dominant, yet laboratory groups routinely play far below it (Baseline efficiency: 48%).

**K-coordination games.** Following Calcagno et al. (2014) (Definition 1, p. 2361), a component game is a $$K$$-coordination game if for any pair of players $$i, j \in I$$ and any profile $$\mathbf{e}$$:

$$
\frac{\pi_i(\bar{\mathbf{e}}) - \pi_i(\mathbf{e})}{\pi_i(\bar{\mathbf{e}}) - \pi_i(\underline{\mathbf{e}})} \leq K \frac{\pi_j(\bar{\mathbf{e}}) - \pi_j(\mathbf{e})}{\pi_j(\bar{\mathbf{e}}) - \pi_j(\underline{\mathbf{e}})}. \tag{2}
$$

The constant $$K$$ measures payoff similarity: $$K = 1$$ is pure coordination. For the minimum-effort game, condition (2) reduces to $$\alpha / (\alpha - \beta) \leq K$$. At the laboratory parameters, $$K = 0.20/(0.20 - 0.04) = 1.25$$.

**The asynchronous revision game.** The pre-play phase uses discrete time $$t \in \{-T, \ldots, -1, 0\}$$. At $$t = -T$$, an initial effort profile is set simultaneously. During $$t < 0$$, at each instant a revision opportunity arrives for the group with probability $$p \in (0,1]$$; if it arrives, it is allocated to one of the $$n$$ players with equal probability. At $$t = 0$$ (the deadline), the most recently posted efforts are implemented. All past events are publicly observable, so the natural solution concept is subgame perfect equilibrium, called a revision equilibrium (p. 2362).

**Main theoretical result** (Proposition 1, p. 2362). In a discrete-time asynchronous revision game with symmetric arrival rate, if the component game is a $$K$$-coordination game with strict Pareto-dominant profile $$\bar{e}$$ and the condition

$$
(n-2)K < (n-1)
$$

holds, then for any $$\varepsilon > 0$$ there exists $$T' > 0$$ such that for all $$T > T'$$, all revision equilibria have $$\mathbf{e}(0) = \bar{e}$$ with probability higher than $$1 - \varepsilon$$.

The proof proceeds by induction (following Calcagno et al. (2014), online Appendix A): (i) $$\bar{e}$$ is absorbing once reached; (ii) far enough from the deadline it is optimal to revise up to $$\bar{e}$$ regardless of others' current choices, since the cost of being alone at $$\bar{e}$$ temporarily is small when the deadline is far. The condition $$(n-2)K < (n-1)$$ ensures the induction goes through in finite time. At the laboratory parameters, $$(6-2)(1.25) = 5 = 6-1$$, so the strict inequality in Proposition 1 is not satisfied (the parameters are at its boundary). The paper notes that this condition is sufficient but not necessary for the minimum-effort game; backward induction in online Appendix B confirms that the unique revision equilibrium prescribes choosing effort 7 from the start. The paper extends the Calcagno et al. (2014) theory from continuous to discrete time and derives two additional numerical insights: if players can choose effort before the pre-play phase, all should choose 7 from the outset; and far from the deadline, revising to $$\bar{e}$$ is dominant regardless of the current profile.

## Method

Sessions ran at the Center for Experimental Social Science (CESS) at New York University (NYU) and the Interdisciplinary Experimental Laboratory (IELAB) at Indiana University (IU), using z-Tree (Fischbacher 2007), from December 2015 through April 2021 (p. 2365). Participants are randomly assigned to groups of six; each session consists of 10 rounds of the minimum-effort game.

**Revision mechanism (RM) treatment.** Each round starts with all six group members simultaneously choosing an integer in $$E = \{1,\ldots,7\}$$. A 60-second countdown then begins. A real-time graph displays each player's currently posted effort, visible to all. At each second a revision opportunity arrives for the group with probability 0.8; if it arrives, it is allocated to one member uniformly at random (probability $$1/6$$). A player can change their cursor selection at any time, but the posted graph value updates only upon receiving a revision opportunity. At $$t = 0$$ only the posted choice matters for payoffs. Each player expects approximately eight revision opportunities per round (p. 2367).

**Nine treatments** (Table 1, p. 2369):

| Treatment | Communication | Commitment | Subjects | Groups |
|---|---|---|---|---|
| Baseline | None | N/A | 48 | 8 |
| Standard cheap talk (S-CT) | One-shot message | None | 48 | 8 |
| Revision mechanism (RM) | Revisions | Gradual | 96 | 16 |
| Random revision (R-RM) | Revisions | Gradual | 48 | 8 |
| RM-VHBB | Revisions | Gradual | 48 | 8 |
| Infrequent RM (I-RM) | Revisions | Abrupt | 48 | 8 |
| Synchronous RM (S-RM) | Revisions | Gradual | 48 | 8 |
| Revision cheap talk (R-CT) | Revisions | None | 96 | 16 |
| Richer R-CT (R-R-CT) | Revisions | None | 48 | 8 |

S-CT follows Blume and Ortmann (2007): before the effort choice, subjects simultaneously send a public number message; subjects then see all messages for 60 seconds before making their payoff-relevant effort. R-CT follows the RM protocol for the pre-play graph but, unlike RM, the choice at the end of the countdown is not payoff-relevant; subjects choose payoffs on a separate screen after. RM-VHBB uses Van Huyck, Battalio, and Beil (1990) payoff parameters ($$\alpha = 0.2$$, $$\beta = 0.1$$, $$\gamma = 0.6$$). I-RM reduces the group revision probability from 0.8 to 0.1. S-RM makes all revisions synchronous (all six group members receive the revision simultaneously at each opportunity). R-RM has initial effort choices assigned randomly from $$E$$.

**Efficiency measure** (equation (3), p. 2369):

$$
\text{Efficiency} = \frac{\text{Actual} - \text{Min}}{\text{Max} - \text{Min}}, \tag{3}
$$

where Actual is the average amount earned, and Min (Max) is the average minimum (maximum) possible earnings. Normalization enables comparison across payoff specifications.

## Empirical specifications

**Main treatment comparisons (R1, R4-R5, R8-R9).** The primary test is a two-sample Mann-Whitney U (MWU) test with the group's round average as the unit of observation (one group = one independent observation, since standard errors are clustered at the group level). Treatment sizes range from 8 groups (80 group-round observations) to 16 groups (160 group-round observations). Five outcome variables are compared: (i) subject payoffs, (ii) minimum effort of the group, (iii) frequency of efficient effort choice (fraction of group members choosing 7), (iv) fraction of fully coordinated groups (all six members choose the same effort), and (v) equilibrium deviation (average distance between a subject's effort and the group minimum).

**OLS regression (R1 core, Table 2 p. 2372).** Payoffs, three group-level coordination measures, and the subject-level equilibrium-deviation measure are regressed on treatment dummies (reference = S-CT) and controls, with standard errors clustered at the group level:

$$
y_{ig} = \beta_0 + \beta_1 \cdot \mathbf{1}[\text{Baseline}]_g + \beta_2 \cdot \mathbf{1}[\text{RM}]_g + \mathbf{X}_{ig}' \gamma + \varepsilon_{ig},
$$

where $$y_{ig}$$ is the outcome for subject $$i$$ in group $$g$$, $$\mathbf{X}$$ includes quiz score and demographics when listed for the column, and errors are clustered by group. Written out from the table notes, without an equation number in the article, the outcome-specific estimating equations are:

$$
y_{igr} = \beta_0 + \beta_1 \text{Baseline}_g + \beta_2 \text{RM}_g + \beta_3 \text{Quiz}_{i} + \mathbf{D}_{i}'\boldsymbol{\gamma} + \varepsilon_{igr},
$$

for subject-round payoffs and equilibrium deviation, and

$$
y_{gr} = \beta_0 + \beta_1 \text{Baseline}_g + \beta_2 \text{RM}_g + u_{gr},
$$

for group-round minimum effort, efficient-effort frequency, and full coordination. The reference treatment is S-CT. Table 2 reports 1,920 observations for payoffs and equilibrium deviation and 320 for each group-level outcome; demographic controls enter only the subject-level columns. The article reports no fixed effects. Standard errors are clustered at the group level. The RM estimates are 0.21 (SE 0.012) for payoffs, 1.21 (0.712) for minimum effort, 0.339 (0.136) for efficient-effort frequency, 0.388 (0.141) for full coordination, and -0.395 (0.221) for equilibrium deviation (Table 2, p. 2372).

**Exact theoretical predictions (R2).** The fraction of subjects initially choosing effort 7 is tested against 100 percent using the group average as unit. Average initial choice of 7 is 85.7 percent (93.8% in round 10); both are significantly below 100 percent (p < 0.01). RM efficiency of 82.1 percent is similarly tested against 100 percent.

**Dynamic behavior classification (R6).** Using the R-RM treatment (which introduces initial choice variation), each revision move is classified as: forward-thinking (increases effort even though this would decrease payoff if the game ended immediately, because it initiates a chain reaction when there is enough time); myopic-down (decreases effort toward the group minimum, payoff-improving if the game ended immediately); or other. The proportion of each type is plotted by 10-second interval across the 60-second pre-play phase (Figure 3, p. 2375).

**Communication credibility (R7).** All rounds in which a group converges to a homogeneous message profile during the 60-second pre-play are identified. The fraction of such rounds in which the communicated effort profile is also the payoff-relevant outcome (at $$t = 0$$ for RM, at the separate payoff screen for R-CT) is then compared between RM and R-CT. The 87.6% vs 51.1% gap quantifies the credibility gain from commitment (pp. 2376-2377).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Original laboratory data (CESS/NYU and IELAB/Indiana University, 2015-2021) | Primary experimental observations: effort choices, revision timing, group-level coordination outcomes across 9 treatments | no page yet |

Sample: 528 subjects across 9 treatments, 6 per group, 10 rounds each; 88 groups total.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20171014) if you are: designing or studying pre-play communication institutions in coordination games; testing or extending the Calcagno et al. (2014) theoretical framework to new environments; building laboratory experiments for the minimum-effort game (the online Appendix provides full instructions, backward induction numerical solutions, and complete robustness tables); studying the separate roles of commitment, asynchronicity, and revision frequency in coordination; or comparing against richer real-time communication benchmarks as in Deck and Nikiforakis (2012). The replication data are at the ICPSR archive (https://doi.org/10.3886/E185662V1).

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(9), September 2023, pp. 2355-2381. Copyright American Economic Association 2023. No CC license; redistribution is extract-only. This page was updated by an LLM on 2026-10-04 and checked against the source PDF; it has not been independently reproduced.

> Avoyan, Ala, and João Ramos. "A Road to Efficiency through Communication and Commitment." *American Economic Review* 113, no. 9 (September 2023): 2355-2381. DOI: 10.1257/aer.20171014.
