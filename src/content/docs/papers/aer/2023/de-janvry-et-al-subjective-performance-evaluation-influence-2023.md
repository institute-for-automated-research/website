---
title: "Subjective Performance Evaluation and Influence Activities: de Janvry et al. (2023)"
description: >-
  A randomized field experiment among 3,785 Chinese civil servants shows that revealing
  the evaluator's identity induces evaluator-specific influence activities, creating a 0.311-point
  asymmetry in supervisor assessments (0.24 SD) that disappears under a masked scheme. Masking the
  evaluator's identity improves colleague assessments, supervisor assessments, and objective
  performance pay. American Economic Review vol. 113(3), 2023, paywalled. 8 core results
  with source locators, datasets used, the model, and the method. LLM-distilled.
sidebar:
  label: de Janvry et al. 2023
  order: 1
tags: [paper-summary, bureaucracy, incentives, public-sector, field-experiment,
       panel-regression, peer-reviewed, unreplicated]
paper:
  authors: "Alain de Janvry, Guojun He, Elisabeth Sadoulet, Shaoda Wang, and Qiong Zhang"
  authorList:
    - { family: de Janvry, given: Alain, affiliation: "University of California, Berkeley" }
    - { family: He, given: Guojun, orcid: "0000-0003-2391-9493", affiliation: "University of Hong Kong" }
    - { family: Sadoulet, given: Elisabeth, affiliation: "University of California, Berkeley" }
    - { family: Wang, given: Shaoda, affiliation: "University of Chicago" }
    - { family: Zhang, given: Qiong, orcid: "0000-0003-2717-7773", affiliation: "Renmin University of China" }
  year: 2023
  venue: "American Economic Review, vol. 113, no. 3 (March 2023), pp. 766-799"
  venueShort: AER 2023
  doi: 10.1257/aer.20211207
  jel:
    codes: [D73, H83, J45, M54, O17, O18, P25]
    assignedBy: paper
    date: 2026-06-25
  topics: ["Experimental Behavioral Economics Studies", "Public Policy and Administration Research", "Social Capital and Networks"]
  dataAccess: proprietary-confidential
  introducesData: true
  outcome:
    - evaluator assessment advantage over nonevaluator
    - colleague assessment of CGCS work performance
    - probability rated top 10% by colleagues
    - nonevaluator supervisor assessment
    - performance-linked monthly wage
    - promotion to permanent civil service
  outcomeClass: [labor-careers-health]
  license: "AEA standard copyright, no CC license (Crossref: no license block found)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (publisher site, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 8
  citedByCount: 46
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [panel-regression, principal-agent]
    identification: randomized
  contributionType: [new-fact, new-data]
  mechanisms: [moral-hazard, agency]
  scope:
    region: China
    period: 2017-09..2018-06
    frequency: annual
    dataType: [administrative, survey, experimental]
    granularity: [individual]
    n: "3,785 CGCSs at randomization in 788 townships; 2,854 at endline after 24.5% attrition"
  findings:
    - { ref: R1, outcome: "evaluator assessment advantage", metric: coefficient, value: "0.311 (SE 0.082; 0.24 SD, DV SD=1.31)", direction: positive }
    - { ref: R2, outcome: "evaluator assessment advantage under masked scheme", metric: coefficient, value: "-0.097 (SE 0.121)", direction: none }
    - { ref: R3, outcome: "colleague assessment of CGCS performance", metric: coefficient, value: "0.217 on 1-7 scale (SE 0.035)", direction: positive }
    - { ref: R4, outcome: "probability rated top 10% by colleagues", metric: pp-effect, value: "7.7 pp (SE 1.3)", direction: positive }
    - { ref: R5, outcome: "nonevaluator supervisor assessment", metric: coefficient, value: "0.215 on 1-7 scale (SE 0.059)", direction: positive }
    - { ref: R6, outcome: "performance-linked monthly wage", metric: level, value: "48.81 yuan (~2.3%) (SE 22.41)", direction: positive }
    - { ref: R7, outcome: "promotion to permanent civil service per 1-point evaluator score", metric: pp-effect, value: "7.3 pp (SE 1.1)", direction: positive }
    - { ref: R8, outcome: "evaluator assessment advantage for same-hometown CGCS (revealed scheme)", metric: coefficient, value: "0.189 (SE 0.067)", direction: positive, vsBenchmark: "vs. different-hometown evaluator; null in masked scheme" }
  resultType: confirms
  relatesTo:
    - { cite: "Milgrom and Roberts (1988)", doi: '10.1086/228945', relation: tests, note: "core theoretical framework on productive and nonproductive influence activities; this paper provides the first field-experimental test" }
    - { cite: "Lazear and Oyer (2012)", doi: '10.1515/9781400845354-014', relation: builds-on, note: "handbook survey of personnel economics and influence activities motivating the empirical gap" }
    - { cite: "Baker, Gibbons, and Murphy (1994)", doi: '10.2307/2118358', relation: builds-on, note: "theory of subjective performance measures and implicit incentive contracts" }
    - { cite: "Finan, Olken, and Pande (2015)", doi: '10.3386/w21825', relation: cites, note: "related RCT literature on incentivizing public employees in developing countries" }
    - { cite: "Prendergast and Topel (1996)", doi: '10.1086/262048', relation: cites, note: "theoretical model of favoritism under subjective organizational evaluation" }
    - { cite: "Wu (2017)", doi: '10.1162/rest_a_00557', relation: cites, note: "related Chinese-context natural experiment on authority allocation and bureaucratic performance" }
  openQuestions:
    - "If one supervisor is systematically better at performance assessment and the organization can commit to always using that supervisor as the evaluator, the masked scheme may not improve performance (p.797, fn.41)"
    - "Generalizability of the masking intervention to private-sector dual-leadership arrangements (CEO-COO pairs, Office of the President structures) remains untested (pp.796-797)"
    - "The evidence on nonproductive influence activities (personal favors, buttering-up) is indirect; direct measurement of these behaviors is left for future work (p.788-790)"
  replicationCode: { url: "https://doi.org/10.3886/E182787V1", status: available }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Read full PDF (pp.766-799); all locators verified against tables and page numbers. Not human-verified; not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and magnitudes re-checked against source PDF; fixed: R1/R2/R8 metric sd-effect->coefficient (0.311 and 0.189 are raw score coefficients, paper text p.780 states 0.24 SD for R1); JEL codes corrected to paper's own D73/H83/J45/M54/O17/O18/P25; dataAccess hand-collected->proprietary-confidential; resultType new-finding->confirms (tests Milgrom & Roberts 1988, predictions hold); all other locators and magnitudes verified correct." }
  licenceVerification:
    - { source: "Crossref works/10.1257/aer.20211207", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No formal CC license block; only a PDF link with content-version vor and content-type unspecified. AEA standard copyright applies." }
---

**What this is.** This page is a distilled skeleton of the paper. Read the original at [https://doi.org/10.1257/aer.20211207](https://doi.org/10.1257/aer.20211207) to replicate or extend.

## TL;DR

De Janvry, He, Sadoulet, Wang, and Zhang (2023) run a randomized field experiment with 3,785 college graduate civil servants ("CGCSs") in two Chinese provinces. The experiment randomizes whether each civil servant learns the identity of her performance evaluator at the start of the evaluation cycle (the "revealed" scheme, mimicking the status quo) or only learns that one of her two supervisors will be randomly selected as evaluator at the end of the year (the "masked" scheme). Under the revealed scheme the evaluating supervisor gives 0.311 higher assessment score points than the nonevaluating supervisor (0.24 SD; DV SD = 1.31): consistent with the CGCS engaging in evaluator-specific influence activities to improve her evaluation outcome, which determines her promotion to a permanent civil service position. Switching to the masked scheme eliminates this assessment asymmetry and improves multiple performance indicators: colleague assessments rise by 0.22 points on a 7-point scale, nonevaluator assessments rise by 0.22 points, and performance-linked monthly wages increase by roughly 2.3 percent. The results show that a low-cost modification of the evaluation scheme can improve bureaucratic work performance.

## Core results

| # | Result | Locator | Magnitude |
|---|--------|---------|-----------|
| R1 | Evaluator gives higher assessment than nonevaluator under revealed scheme | Table 2, col 1, p.781 | 0.311 (SE 0.082); 0.24 SD (paper text p.780; DV SD=1.31) |
| R2 | Evaluator-nonevaluator asymmetry disappears under masked scheme | Table 2, col 2, p.781 | -0.097 (SE 0.121), not significant |
| R3 | Masked scheme increases colleague assessment score | Table 3, Panel A, col 1, p.782 | +0.217 on 1-7 scale (SE 0.035) |
| R4 | Masked scheme increases probability rated top 10% by colleagues | Table 3, Panel A, col 2, p.782 | +7.7 pp (SE 1.3) |
| R5 | Masked scheme increases nonevaluator supervisor assessment | Table 3, Panel B, col 3, p.782 | +0.215 on 1-7 scale (SE 0.059) |
| R6 | Masked scheme increases performance-linked monthly wage | Table 3, Panel C, col 1, p.782 | +48.81 yuan (~2.3%) (SE 22.41) |
| R7 | One-point increase in evaluator score raises promotion probability | Table 4, col 1, p.787 | +7.3 pp (SE 1.1) |
| R8 | Hometown tie with evaluator raises evaluator assessment under revealed scheme only | Table 7, Panel A, col 2, p.791 | +0.189 (SE 0.067); null in masked scheme (-0.067, SE 0.088) |

**Overall.** Evidence from Tables 2-7 consistently supports the existence of evaluator-specific influence activities under the revealed scheme and shows that the masked scheme eliminates such activities while improving actual job performance. The hometown favoritism result (R8) isolates "bottom-up" influence activities from "top-down" evaluator preferences: hometown favoritism appears only under the revealed scheme, where the CGCS knows who the evaluator is and can direct influence efforts accordingly.

## Theory / model

The paper has no full structural model; Section II (pp. 777-779) presents a conceptual framework to rationalize the experimental design and derive testable propositions.

A CGCS allocates effort across three types of activity: $$X$$ (common productive tasks valued by both supervisors), $$x_j$$ (supervisor-$$j$$-specific productive influence activities, i.e., tasks assigned or observed mainly by supervisor $$j$$), and $$u_j$$ (nonproductive influence activities directed at supervisor $$j$$, e.g., personal favors). Following Milgrom and Roberts (1988), $$x_j$$ are "productive influence activities" and $$u_j$$ are "nonproductive influence activities."

The organization's performance measure uses only productive activities (p.778):

$$P = X + x_1 + x_2 \tag{1}$$

Supervisor $$j$$'s subjective assessment score is (p.778):

$$Y_j = \alpha X + x_j + u_j, \quad j = 1, 2 \tag{2}$$

where $$\alpha > 0$$ is the relative weight the supervisor places on common productive activities over supervisor-specific influence activities.

Each CGCS maximizes utility subject to a total time constraint of $$T$$ (p.778):

$$\max_{X,\, x,\, u} V = \alpha X + \sum_{j \in \{1,2\}} s_j (x_j + u_j) - G(X) - g\!\left(\sum_j x_j\right) - h\!\left(\sum_j u_j\right) \tag{3}$$

subject to $$X + \sum_j x_j + \sum_j u_j = T$$, $$X, x_j, u_j \in [0, T]$$,

where $$s_j$$ is the probability supervisor $$j$$'s assessment determines the CGCS's reward ($$\sum_j s_j = 1$$), and $$G$$, $$g$$, $$h$$ are strictly convex cost functions. Under the revealed scheme $$s_1 = 1$$, $$s_2 = 0$$; under the masked scheme $$s_1 = s_2 = 1/2$$.

Two propositions follow from solving the CGCS's maximization problem (pp.778-779):

**Proposition 1.** Under the revealed scheme, the CGCS engages in evaluator-specific influence activities ($$x_j > 0$$, $$u_j > 0$$), and the evaluating supervisor gives a higher assessment ($$Y_j$$) than the nonevaluating supervisor.

**Proposition 2.** Compared to the revealed scheme, the masked scheme increases common productive effort ($$X$$) and improves overall work performance ($$P$$). The masked scheme raises the nonevaluator's assessment unambiguously, but its effect on the evaluator's assessment is ambiguous (the evaluator benefits from more $$X$$ but loses evaluator-specific influence).

## Method

The primary identification strategy is random assignment of CGCSs to the revealed vs. masked evaluation scheme. In collaboration with two Chinese provincial governments in 2017, the authors randomized all 3,785 CGCSs employed in that year across 788 townships (Section I.B-C, pp.773-775). Two-thirds were assigned to the revealed scheme and one-third to the masked scheme. Randomization was conducted at the work-unit level; since 83.9 percent of units had only one CGCS, this is statistically nearly equivalent to individual-level randomization.

Each CGCS reports to a party leader and an administrative leader under China's dual-leadership governance structure (Shirk 1993). One of the two supervisors was randomly selected as evaluator. In the revealed scheme, the CGCS was notified of the evaluator's identity at the start of the evaluation year. In the masked scheme, the CGCS was told only that one supervisor would be randomly selected at year-end. Neither supervisor was informed of the selection. Official government notifications with formal stamps were sent to all CGCSs to establish credibility.

The benchmark performance measure is the average colleague assessment, collected through anonymous surveys of coworkers who have no incentive to inflate or deflate CGCS evaluations (they are not in the CGCS's evaluation chain and do not compete with her for promotion). Performance is further benchmarked against both supervisor assessments and administrative salary records verified by the provincial governments.

The method builds on the principal-agent framework of Baker, Gibbons, and Murphy (1994), operationalized as an RCT in the spirit of Finan, Olken, and Pande (2015) on public employee incentives. Lazear and Oyer (2012) survey the theoretical literature motivating the empirical test. Prendergast and Topel (1996) develop the theoretical foundations of favoritism in organizations under subjective evaluation. Wu (2017) provides a related natural experiment varying authority allocation in Chinese media, complementing this paper's approach of directly cross-randomizing the employee's knowledge of the evaluator's identity.

## Empirical specifications

**Specification 1 (Proposition 1 test).** Using the revealed-scheme subsample, the paper estimates (p.780, eq.1):

$$\text{Sup1\_Edge}_{icst} = \alpha \times \text{Sup1\_Eval}_i + \gamma_c + \lambda_s + \phi_t + \varepsilon_{icst} \tag{4}$$

where $$\text{Sup1\_Edge}_{icst}$$ is Supervisor 1's assessment minus Supervisor 2's assessment for CGCS $$i$$ in county $$c$$, CGCS type $$s$$, cohort $$t$$. $$\text{Sup1\_Eval}_i$$ is a dummy for whether Supervisor 1 is the randomly selected evaluator. $$\gamma_c$$, $$\lambda_s$$, $$\phi_t$$ are county, CGCS-type, and cohort fixed effects. Standard errors are clustered at the work-unit level. Because the evaluator is chosen randomly, $$\alpha$$ causally identifies the additional positiveness of the evaluating supervisor's assessment due to influence activities. The same regression is estimated on the masked-scheme sample (Table 2, cols 1 and 2, p.781) to check that the asymmetry disappears when evaluator identity is withheld.

**Specification 2 (Proposition 2 test).** Using the full sample, the paper estimates (p.782, eq.2):

$$Y_{icst} = \alpha \times \text{Mask}_i + \gamma_c + \lambda_s + \phi_t + \varepsilon_{icst} \tag{5}$$

where $$Y_{icst}$$ is a performance measure (colleague assessment, supervisor assessment, performance pay) and $$\text{Mask}_i$$ is a dummy for being assigned to the masked scheme. Same fixed effects and clustering. Random scheme assignment means $$\alpha$$ identifies the causal effect of masking on performance (Table 3, p.782).

**Balance.** Table 1 (p.776) shows no statistically significant differences in CGCS characteristics (age, gender, college type, major, party membership, CEE score, risk aversion, local birth) across the two schemes; the joint F-statistic is 0.90 (p = 0.54).

**Robustness.** The paper controls for LASSO-selected covariates (online Appendix Tables A7, A13), applies Lee (2009) bounds for non-random attrition (online Appendix Tables A9, A15), and uses an interaction approach on the full sample (online Appendix Table A10). Results are stable across these checks.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|--------------|-----------|
| Author-collected CGCS baseline and endline surveys (Sep 2017, Jun 2018) | Primary performance measures: colleague assessments, supervisor assessments, self-assessments, job-task allocation, influence activity proxies | no page yet |
| Chinese provincial government administrative records (2017-2018) | Promotion outcomes (permanent civil service placement) and salary data verified against administrative records | no page yet |

Sample: 3,785 CGCSs ("College Graduate Civil Servants" hired through China's "3+1 Supports" program) in two provinces (Province A coastal, Province B inland), cohorts admitted 2016 and 2017. Endline: 2,854 CGCSs after 24.5 percent attrition, primarily from reassignment between townships (14.9 percent) and voluntary exits to graduate school or civil service exams (7.4 percent). Position types: township government clerks (poverty alleviation and agricultural support), primary school teachers, and township clinic nurses. Randomization at the work-unit level across 788 townships.

## When to read the full paper

Read Section II for formal proofs of the two propositions and model extensions in online Appendices C-E. Read Section III.A (Table 2, p.781) for the evaluator-asymmetry test. Read Section III.B (Table 3, p.782) for the performance-improvement results and Section III.C (Table 4, p.787) for the promotion-weight evidence confirming the stakes are real. Read Section IV for the mechanism analysis: Table 5 (p.789) for productive influence activities (task reallocation toward evaluator-assigned tasks), Table 6 (p.789) for indirect proxies of nonproductive influence activities, and Table 7 (p.791) for hometown favoritism as a test of bottom-up vs. top-down favoritism. Read Section IV.C-D (pp.791-796) for the full battery of robustness checks ruling out evaluator behavioral change and information-quality alternative explanations.

Useful for: researchers studying subjective performance evaluation, influence activities in bureaucracies, and personnel economics of the public sector; practitioners designing evaluation systems in organizations with multiple supervisors or dual-leadership structures.

## Attribution and rights

This paper is published in the *American Economic Review* 113(3), 2023 under AEA standard copyright. No CC license was found in Crossref metadata (checked 2026-06-25). Extract-only.

> de Janvry, Alain, Guojun He, Elisabeth Sadoulet, Shaoda Wang, and Qiong Zhang. "Subjective Performance Evaluation, Influence Activities, and Bureaucratic Work Behavior: Evidence from China." *American Economic Review* 113, no. 3 (March 2023): 766-799. https://doi.org/10.1257/aer.20211207

Replication data: de Janvry et al. (2023). *Replication Data for: Subjective Performance Evaluation, Influence Activities, and Bureaucratic Work Behavior: Evidence from China.* AEA/ICPSR. https://doi.org/10.3886/E182787V1

LLM-distilled by paper-distiller (claude-sonnet-4-6), 2026-06-25. Not human-verified. Not reproduced.
