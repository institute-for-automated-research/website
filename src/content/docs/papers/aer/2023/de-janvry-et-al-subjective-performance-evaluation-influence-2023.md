---
title: "Subjective Performance Evaluation and Influence Activities: de Janvry et al. (2023)"
description: >-
  A randomized field experiment among 3,785 Chinese civil servants shows that revealing
  the evaluator's identity induces evaluator-specific influence activities, creating a 0.311-point
  asymmetry in supervisor assessments (0.24 SD) that is not detectable under a masked scheme. Masking the
  evaluator's identity improves colleague assessments, supervisor assessments, and objective
  performance pay. American Economic Review vol. 113(3), 2023, paywalled. 29 core results
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
    - probability Supervisor 1 is more positive than Supervisor 2
    - baseline CGCS characteristics across evaluation schemes
    - colleague assessment of CGCS work performance
    - probability rated top 10% by colleagues
    - colleague assessment of hardworking and tenure recommendation
    - mean supervisor assessment
    - evaluator supervisor assessment
    - nonevaluator supervisor assessment
    - supervisor assessment deviation
    - performance-linked monthly wage
    - nurse performance-linked monthly wage
    - promotion to permanent civil service
    - task allocation toward evaluator-assigned work
    - CGCS beliefs about meritocracy and returns to hard work
    - evaluator-specific influence activity proxies
    - nonevaluator supervisor assessment by hometown tie
    - evaluator assessment by hometown tie
    - supervisor behavior and evaluation outcomes by match characteristics
    - supervisor behavior by randomized evaluator status
  outcomeClass: [labor-careers-health]
  license: "AEA standard copyright, no CC license (Crossref: no license block found)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (publisher site, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 29
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
    assetClass: Chinese local civil service labor
    frequency: mixed
    dataType: [administrative, survey, experimental]
    granularity: [individual]
    n: "3,785 CGCSs at randomization in 788 townships; 2,854 at endline after 24.5% attrition"
  findings:
    - { ref: R1, outcome: "evaluator assessment advantage over nonevaluator", metric: coefficient, value: "0.311 (SE 0.082; 0.24 SD, DV SD=1.31)", direction: positive }
    - { ref: R2, outcome: "evaluator assessment advantage under masked scheme", metric: coefficient, value: "-0.097 (SE 0.121)", direction: none }
    - { ref: R3, outcome: "colleague assessment of CGCS performance", metric: coefficient, value: "0.217 on 1-7 scale (SE 0.035)", direction: positive }
    - { ref: R4, outcome: "probability rated top 10% by colleagues", metric: pp-effect, value: "7.7 pp (SE 1.3)", direction: positive }
    - { ref: R5, outcome: "nonevaluator supervisor assessment", metric: coefficient, value: "0.215 on 1-7 scale (SE 0.059)", direction: positive }
    - { ref: R6, outcome: "performance-linked monthly wage", metric: level, value: "48.81 yuan (~2.3%) (SE 22.41)", direction: positive }
    - { ref: R7, outcome: "promotion to permanent civil service per 1-point evaluator score", metric: pp-effect, value: "7.3 pp (SE 1.1)", direction: positive }
    - { ref: R8, outcome: "evaluator assessment advantage for same-hometown CGCS (revealed scheme)", metric: coefficient, value: "0.189 (SE 0.067)", direction: positive, vsBenchmark: "vs. different-hometown evaluator; null in masked scheme" }
    - { ref: R9, outcome: "baseline CGCS characteristics across evaluation schemes", metric: p-value, value: "joint F=0.90, p=0.54", direction: none }
    - { ref: R10, outcome: "probability Supervisor 1 is more positive than Supervisor 2", metric: coefficient, value: "revealed 0.075 (SE 0.028); masked 0.024 (SE 0.042); equality-test p=0.25", direction: mixed }
    - { ref: R11, outcome: "colleague assessment of hardworking", metric: coefficient, value: "0.028 (SE 0.012)", direction: positive }
    - { ref: R12, outcome: "colleague recommendation for permanent tenure", metric: coefficient, value: "0.035 (SE 0.011)", direction: positive }
    - { ref: R13, outcome: "mean supervisor assessment", metric: coefficient, value: "0.139 on 1-7 scale (SE 0.046)", direction: positive }
    - { ref: R14, outcome: "evaluator supervisor assessment", metric: coefficient, value: "0.049 (SE 0.055)", direction: none }
    - { ref: R15, outcome: "supervisor assessment deviation", metric: coefficient, value: "-0.100 (SE 0.050)", direction: negative }
    - { ref: R16, outcome: "log performance-linked monthly wage", metric: coefficient, value: "0.02 (SE 0.01)", direction: positive }
    - { ref: R17, outcome: "nurse performance-linked monthly wage", metric: level, value: "115.54 yuan (SE 61.94); log wage 0.05 (SE 0.03)", direction: positive }
    - { ref: R18, outcome: "promotion to permanent civil service", metric: coefficient, value: "full sample 0.015 (SE 0.011); revealed 0.020 (SE 0.014); masked 0.006 (SE 0.022)", direction: none }
    - { ref: R19, outcome: "promotion to permanent civil service", metric: coefficient, value: "0.014 (SE 0.024)", direction: none }
    - { ref: R20, outcome: "task allocation toward evaluator-assigned work", metric: coefficient, value: "revealed: task share 0.031 (SE 0.014), important-task assignment 0.072 (SE 0.032), improvement in evaluator-valued areas 0.132 (SE 0.058); masked: -0.015 (SE 0.023), -0.015 (SE 0.050), -0.006 (SE 0.095)", direction: positive }
    - { ref: R21, outcome: "evaluator-specific influence activity proxies", metric: coefficient, value: "masking: supervisor-relationship challenge -0.030 (SE 0.014); colleague-relationship challenge -0.003 (SE 0.009)", direction: mixed }
    - { ref: R22, outcome: "CGCS belief that civil service is meritocratic", metric: coefficient, value: "0.017 (SE 0.009)", direction: positive }
    - { ref: R23, outcome: "CGCS belief that hard work pays off", metric: coefficient, value: "0.024 (SE 0.012)", direction: positive }
    - { ref: R24, outcome: "nonevaluator supervisor assessment by hometown tie", metric: coefficient, value: "same hometown: full -0.016 (SE 0.049), revealed -0.045 (SE 0.060), masked 0.046 (SE 0.100); equality-test p=0.39", direction: none }
    - { ref: R25, outcome: "supervisor behavior and evaluation outcomes by match characteristics", metric: coefficient, value: "party-leader match (evaluator full/revealed/masked; nonevaluator full/revealed/masked): 0.041 (0.046), 0.023 (0.058), 0.045 (0.091); -0.007 (0.048), -0.063 (0.058), 0.076 (0.098). Same-gender match: -0.024 (0.050), 0.003 (0.064), -0.030 (0.094); 0.000 (0.051), 0.008 (0.061), -0.063 (0.106). Same-education match: -0.023 (0.070), 0.055 (0.087), -0.195 (0.130); 0.016 (0.065), -0.006 (0.079), 0.080 (0.126); no revealed/masked differences detected", direction: none }
    - { ref: R26, outcome: "supervisor behavior by randomized evaluator status", metric: coefficient, value: "revealed estimates (SEs): -0.590 (0.649), 0.233 (0.236), 0.614 (0.528), 0.527 (1.056), -0.678 (1.438), -0.009 (0.020); masked: -1.187 (1.062), 0.081 (0.393), 0.362 (0.736), 0.041 (1.591), -1.539 (2.108), -0.056 (0.030); joint tests F=0.58, p=0.71 and F=0.49, p=0.78", direction: none }
    - { ref: R27, outcome: "evaluator awareness of randomized evaluation role", metric: probability, value: "65.5% of revealed-scheme supervisors did not know their role until after completing assessments", direction: none }
    - { ref: R29, outcome: "evaluator assessment by hometown tie", metric: coefficient, value: "same hometown 0.102 (SE 0.051), full sample", direction: positive }
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
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and augmented the Core results and findings axes with missing main-text results, mechanisms, and the printed estimating equations. These additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 29 Core results, equations and specifications, classifications, findings, prose, and frontmatter against the PDF; softened claims about evaluator influence and revised the promotion result to describe its association. All table locators manually confirmed; the required locator checker could not detect the PDF's table captions." }
  licenceVerification:
    - { source: "Crossref works/10.1257/aer.20211207", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No formal CC license block; only a PDF link with content-version vor and content-type unspecified. AEA standard copyright applies." }
---

**What this is.** This page is a distilled skeleton of the paper. Read the original at [https://doi.org/10.1257/aer.20211207](https://doi.org/10.1257/aer.20211207) to replicate or extend.

## TL;DR

De Janvry, He, Sadoulet, Wang, and Zhang (2023) run a randomized field experiment with 3,785 college graduate civil servants ("CGCSs") in two Chinese provinces. The experiment randomizes whether each civil servant learns the identity of her performance evaluator at the start of the evaluation cycle (the "revealed" scheme, mimicking the status quo) or only learns that one of her two supervisors will be randomly selected as evaluator at the end of the year (the "masked" scheme). Under the revealed scheme the evaluating supervisor gives a 0.311-point higher assessment than the nonevaluating supervisor (0.24 SD; DV SD = 1.31): consistent with the CGCS engaging in evaluator-specific influence activities to improve her evaluation outcome, which influences her promotion to a permanent civil service position. Under the masked scheme no assessment asymmetry is detected, and multiple performance indicators improve: colleague assessments rise by 0.22 points on a 7-point scale, nonevaluator assessments rise by 0.22 points, and performance-linked monthly wages increase by roughly 2.3 percent. The results show that a low-cost modification of the evaluation scheme can improve bureaucratic work performance.

## Core results

| # | Result | Locator | Magnitude |
|---|--------|---------|-----------|
| R1 | Evaluator gives higher assessment than nonevaluator under revealed scheme | Table 2, col 1, p.781 | 0.311 (SE 0.082); 0.24 SD (paper text p.780; DV SD=1.31) |
| R2 | Evaluator-nonevaluator asymmetry disappears under masked scheme | Table 2, col 2, p.781 | -0.097 (SE 0.121), not significant |
| R3 | Masked scheme increases colleague assessment score | Table 3, Panel A, col 1, p.782 | +0.217 on 1-7 scale (SE 0.035) |
| R4 | Masked scheme increases probability rated top 10% by colleagues | Table 3, Panel A, col 2, p.782 | +7.7 pp (SE 1.3) |
| R5 | Masked scheme increases nonevaluator supervisor assessment | Table 3, Panel B, col 3, p.782 | +0.215 on 1-7 scale (SE 0.059) |
| R6 | Masked scheme increases performance-linked monthly wage | Table 3, Panel C, col 1, p.782 | +48.81 yuan (~2.3%) (SE 22.41) |
| R7 | One-point increase in evaluator score is associated with higher promotion probability | Table 4, col 1, p.787 | +7.3 pp (SE 1.1) |
| R8 | Hometown tie with evaluator raises evaluator assessment under revealed scheme only | Table 7, Panel A, col 2, p.791 | +0.189 (SE 0.067); null in masked scheme (-0.067, SE 0.088) |
| R9 | Baseline characteristics are balanced across randomized schemes | Table 1, p.776 | Joint test F = 0.90, p = 0.54; N = 2,854 |
| R10 | Evaluator is more likely to give a strictly higher score under revealed assignment, with no corresponding masked-scheme effect | Table 2, cols 3-4, p.781 | Revealed 0.075 (SE 0.028); masked 0.024 (SE 0.042); equality-test p = 0.25 |
| R11 | Masking raises colleagues' assessment that the CGCS is hardworking | Table 3, Panel A, col 3, p.782 | 0.028 (SE 0.012) |
| R12 | Masking raises colleagues' recommendation for permanent tenure | Table 3, Panel A, col 4, p.782 | 0.035 (SE 0.011) |
| R13 | Masking raises the mean of the two supervisor assessments | Table 3, Panel B, col 1, p.782 | 0.139 (SE 0.046) |
| R14 | Masking has no significant effect on the evaluator's assessment | Table 3, Panel B, col 2, p.782 | 0.049 (SE 0.055), not significant |
| R15 | Masking reduces the gap between supervisor assessments | Table 3, Panel B, col 4, p.782 | -0.100 (SE 0.050) |
| R16 | Masking raises logged monthly remuneration | Table 3, Panel C, col 2, p.782 | 0.02 (SE 0.01) |
| R17 | Masking raises performance pay for township clinic nurses | Table 3, Panel C, cols 3-4, p.782 | Wage 115.54 yuan (SE 61.94); ln(wage) 0.05 (SE 0.03) |
| R18 | Nonevaluator assessments do not predict promotion, unlike evaluator assessments | Table 4, cols 1-3, p.787 | Nonevaluator score: 0.015 (SE 0.011) full sample, 0.020 (SE 0.014) revealed, 0.006 (SE 0.022) masked |
| R19 | Masking does not significantly change permanent-tenure promotion | Table 4, col 4, p.787 | 0.014 (SE 0.024), not significant |
| R20 | Revealed evaluators steer task allocation and perceived improvement toward their assignments; these patterns are absent when masked | Table 5, cols 1-6, p.789 | Revealed: task share 0.031 (SE 0.014), most important task 0.072 (SE 0.032), improvement in evaluator-valued dimension 0.132 (SE 0.058); masked coefficients -0.015 (SE 0.023), -0.015 (SE 0.050), -0.006 (SE 0.095) |
| R21 | Masking reduces concern about supervisor relationships, while concern about colleague relationships is unchanged | Table 6, cols 1-2, p.789 | Supervisor relationship -0.030 (SE 0.014); colleague relationship -0.003 (SE 0.009) |
| R22 | Masking increases belief that the civil service is meritocratic | Table 6, col 3, p.789 | 0.017 (SE 0.009) |
| R23 | Masking increases belief that hard work pays off | Table 6, col 4, p.789 | 0.024 (SE 0.012) |
| R24 | Hometown ties do not predict nonevaluator assessments in the masked scheme | Table 7, Panel A, cols 4-6, p.791 | Same-hometown coefficients: full -0.016 (SE 0.049), revealed -0.045 (SE 0.060), masked 0.046 (SE 0.100); revealed/masked equality-test p = 0.39 |
| R25 | Party-leader, gender, and education matches show no significant evaluation heterogeneity | Table 7, Panels B-D, p.791 | Party-leader match (evaluator full/revealed/masked; nonevaluator full/revealed/masked): 0.041 (0.046), 0.023 (0.058), 0.045 (0.091); -0.007 (0.048), -0.063 (0.058), 0.076 (0.098). Same-gender match: -0.024 (0.050), 0.003 (0.064), -0.030 (0.094); 0.000 (0.051), 0.008 (0.061), -0.063 (0.106). Same-education match: -0.023 (0.070), 0.055 (0.087), -0.195 (0.130); 0.016 (0.065), -0.006 (0.079), 0.080 (0.126); no revealed/masked differences detected |
| R26 | Placebo measures show no detectable change in supervisors' behavior when selected as evaluator | Table 8, Panels A-B, cols 1-6, p.792 | Revealed coefficients (SEs): -0.590 (0.649), 0.233 (0.236), 0.614 (0.528), 0.527 (1.056), -0.678 (1.438), -0.009 (0.020); masked: -1.187 (1.062), 0.081 (0.393), 0.362 (0.736), 0.041 (1.591), -1.539 (2.108), -0.056 (0.030); joint-test p = 0.71 and 0.78 |
| R27 | Most revealed-scheme supervisors were unaware of their evaluator role until after submitting assessments | text p.793 | 65.5% did not know their role until after completing their assessments |
| R28 | Performance gains under masking are distributed across the outcome distributions rather than driven by a few outliers | Figure 1, p.786 | Visual comparison of colleague scores, mean supervisor scores, and ln(wage); the figure shows distribution shifts for each measure without reporting a treatment-effect coefficient |
| R29 | Sharing a hometown with the CGCS predicts a more positive evaluator assessment in the full sample | Table 7, Panel A, col 1, p.791 | 0.102 (SE 0.051) |

**Overall.** Evidence from Tables 2-7 supports the existence of evaluator-specific influence activities under the revealed scheme and indicates that masking reduces them while improving several measures of work performance. The productive-influence evidence is direct: under the revealed scheme, CGCSs allocate relatively more tasks toward the evaluator and improve more in areas the evaluator values; those patterns are absent under masking. The hometown-favoritism comparison is consistent with a bottom-up influence channel, because evaluator hometown ties predict more positive evaluator assessments in the revealed arm but not the masked arm. The evidence for nonproductive influence remains indirect and suggestive.

## Theory / model

Section II (pp. 777-779) gives a conceptual framework, not a fully estimated structural model. A civil servant divides fixed time across common productive effort $$X$$, supervisor-specific productive effort $$x_j$$, and nonproductive influence effort $$u_j$$. Only productive effort contributes to organizational performance (p. 778):

$$
P = X + x_1 + x_2
$$

Supervisor $$j$$'s subjective assessment (p. 778) values common tasks, tasks directed to that supervisor, and personal influence effort:

$$
Y_j = \alpha X + x_j + u_j, \quad j = 1, 2
$$

The civil servant chooses effort to maximize expected evaluation returns net of convex effort costs (p. 778):

$$
\max_{X,x,u} V = \alpha X + \sum_{j=1}^{2} s_j (x_j + u_j) - G(X) - g\left(\sum_{j=1}^{2} x_j\right) - h\left(\sum_{j=1}^{2} u_j\right)
$$

$$
\text{subject to } X + \sum_{j=1}^{2} x_j + \sum_{j=1}^{2} u_j = T, \quad X, x_j, u_j \in [0,T]
$$

Here $$s_j$$ is the probability supervisor $$j$$'s assessment determines the reward. Under the revealed scheme, the known evaluator has $$s_j=1$$ and the other supervisor has $$s_j=0$$; under the masked scheme, the employee perceives $$s_1=s_2=1/2$$. Proposition 1 predicts evaluator-specific influence and a higher evaluator score when identity is revealed. Proposition 2 predicts that masking shifts effort toward common productive work, raising total performance and the nonevaluator's assessment while leaving the evaluator's assessment ambiguous.

## Method

The study is a randomized field experiment with 3,785 College Graduate Civil Servants in 788 townships in two Chinese provinces. Assignment was at the work-unit level; two-thirds received the revealed scheme and one-third the masked scheme. One of the two supervisors was randomly selected as evaluator in both arms. In the revealed arm the CGCS learned the evaluator's identity at the beginning of the evaluation cycle. In the masked arm the identity was withheld until the end, and supervisors were not told their status. The experiment ran from the September 2017 baseline to the June 2018 endline. The main tables use outcome-specific samples after attrition and missing supervisor assessments.

The primary identification design is randomized assignment. The evaluator-edge comparison additionally uses random assignment of evaluator identity within the revealed arm. The authors collect colleague, supervisor, and CGCS surveys, then link them to provincial administrative records on tenure and salary. Work-unit-clustered standard errors account for the assignment unit. The mechanisms tested are productive influence (task allocation and effort toward evaluator-valued dimensions), suggestive nonproductive influence (reported difficulty handling supervisor relationships), and hometown ties as a bottom-up influence channel. The paper also tests placebo explanations based on evaluator behavior and matching characteristics.

## Empirical specifications

The paper prints two numbered main-text estimating equations. For the evaluator-asymmetry test, the sample is the revealed scheme; the same equation is separately estimated in the masked scheme and with an indicator outcome for whether Supervisor 1's score strictly exceeds Supervisor 2's score (Section III.A, p. 780):

$$
\text{Sup1\_Edge}_{icst} = \alpha \times \text{Sup1\_Eval}_{i} + \gamma_c + \lambda_s + \phi_t + \epsilon_{icst} \tag{1}
$$

$$\text{Sup1\_Edge}$$ is Supervisor 1's score minus Supervisor 2's score for CGCS $$i$$, and $$\text{Sup1\_Eval}$$ indicates whether Supervisor 1 is the randomized evaluator. The fixed effects are county, CGCS type, and cohort. Standard errors are clustered by work unit; the baseline has no additional controls. Table 2 reports 1,300 observations in the revealed arm and 580 in the masked arm for the continuous score outcome.

For the effect of masking on performance, the authors pool both schemes and estimate the following for each outcome (Section III.B, p. 782):

$$
Y_{icst} = \alpha \times \text{Mask}_{i} + \gamma_c + \lambda_s + \phi_t + \epsilon_{icst} \tag{2}
$$

$$Y$$ is the relevant endline performance measure, and $$\text{Mask}$$ indicates assignment to the masked scheme. The specification includes county, CGCS-type, and cohort fixed effects, with standard errors clustered at the work-unit level and no additional controls. Table 3 outcome samples range from 193 nurses to 2,837 CGCSs, depending on the measure. The same fixed-effect and clustering structure is used for the results in Tables 4-8, with outcome-specific samples; Table 4 relates tenure to evaluator and nonevaluator scores, while Tables 5-7 examine mechanisms and evaluator-match heterogeneity.

The remaining main-text tables reuse these fixed effects and work-unit-clustered standard errors. The following are written out from the described specifications because the paper does not print them as numbered equations. For Table 4, the tenure outcome is regressed on both supervisors' scores; columns 2 and 3 estimate the same relation within the revealed and masked arms, and column 4 estimates the treatment effect:

$$
\text{Tenured}_{i} = \beta_E \, \text{EvaluatorScore}_{i} + \beta_N \, \text{NonevaluatorScore}_{i} + \gamma_c + \lambda_s + \phi_t + \epsilon_i
$$

For Table 4, column 4 estimates the masking effect on tenure separately from the score-predictor specifications:

$$
\text{Tenured}_{i} = \beta_M \, \text{Mask}_{i} + \gamma_c + \lambda_s + \phi_t + \epsilon_i
$$

Table 4 uses 1,940 observations for the full sample, 1,300 in the revealed arm, and 580 in the masked arm. For Tables 5 and 8, the authors estimate within-arm comparisons on randomized evaluator identity:

$$
Y_{icst} = \beta \, \text{Sup1\_Eval}_{i} + \gamma_c + \lambda_s + \phi_t + \epsilon_{icst}
$$

Table 5 outcomes measure task allocation and relative improvement; samples are 1,482 revealed and 659 masked for task share and improvement, and 1,134 revealed and 529 masked for the important-task outcome. Table 8 outcomes measure supervisor behavior, with 1,288-1,910 revealed observations and 577-869 masked observations across outcomes. For Table 7, the outcomes are evaluator and nonevaluator scores, and the regressor is an evaluator-CGCS match indicator, estimated in full and arm-specific samples:

$$
\text{SupervisorScore}_{icst} = \beta \, \text{Match}_{i} + \gamma_c + \lambda_s + \phi_t + \epsilon_{icst}
$$

The match indicator is the relevant supervisor-CGCS match (same hometown, party-leader supervisor, same gender, or same education), depending on the panel and whether the outcome is the evaluator's or nonevaluator's score. Table 7 samples vary by missing supervisor and CGCS characteristics (hometown panel: 2,307 full-sample evaluator-score observations and 2,274 nonevaluator-score observations). All these specifications include county, CGCS-type, and cohort fixed effects and cluster standard errors by work unit. Table 6 applies specification (2) to the four survey outcomes. Table 1 reports balance on baseline characteristics (joint F = 0.90, p = 0.54). The paper reports robustness checks using post-double-selection LASSO covariates, baseline controls, Lee bounds for attrition, and an interaction specification in online Appendix Tables A7-A10 and A13-A15. These appendix specifications are described but are not separately numbered in the main text.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|--------------|-----------|
| Author-collected CGCS baseline and endline surveys (Sep 2017, Jun 2018) | Primary performance measures: colleague assessments, supervisor assessments, self-assessments, job-task allocation, influence activity proxies | no page yet |
| Chinese provincial government administrative records (2017-2018) | Promotion outcomes (permanent civil service placement) and salary data verified against administrative records | no page yet |

Sample: 3,785 CGCSs ("College Graduate Civil Servants" hired through China's "3+1 Supports" program) in two provinces (Province A coastal, Province B inland), cohorts admitted 2016 and 2017. Endline: 2,854 CGCSs after 24.5 percent attrition, primarily from reassignment between townships (14.9 percent) and voluntary exits to graduate school or civil service exams (7.4 percent). Position types: township government clerks (poverty alleviation and agricultural support), primary school teachers, and township clinic nurses. Randomization at the work-unit level across 788 townships.

## When to read the full paper

Read Section II for formal proofs of the two propositions and model extensions in online Appendices C-E. Read Section III.A (Table 2, p.781) for the evaluator-asymmetry test. Read Section III.B (Table 3, p.782) for the performance-improvement results and Section III.C (Table 4, p.787) for the promotion-weight evidence confirming the stakes are real. Read Section IV for the mechanism analysis: Table 5 (p.789) for productive influence activities (task reallocation toward evaluator-assigned tasks), Table 6 (p.789) for indirect proxies of nonproductive influence activities, and Table 7 (p.791) for hometown favoritism and the possible bottom-up influence channel. Read Section IV.C-D (pp.791-796) for the tests of evaluator behavioral change and information-quality alternative explanations.

The framing draws on Milgrom and Roberts (1988) for influence activities and Baker, Gibbons, and Murphy (1994) for subjective performance incentives. Lazear and Oyer (2012) and Finan, Olken, and Pande (2015) situate the paper in personnel economics and public-employee incentives; Prendergast and Topel (1996) provide related work on favoritism in organizations; Wu (2017) studies authority allocation and performance in a Chinese newspaper.

Useful for: researchers studying subjective performance evaluation, influence activities in bureaucracies, and personnel economics of the public sector; practitioners designing evaluation systems in organizations with multiple supervisors or dual-leadership structures.

## Attribution and rights

This paper is published in the *American Economic Review* 113(3), 2023 under AEA standard copyright. No CC license was found in Crossref metadata (checked 2026-06-25). Extract-only.

> de Janvry, Alain, Guojun He, Elisabeth Sadoulet, Shaoda Wang, and Qiong Zhang. "Subjective Performance Evaluation, Influence Activities, and Bureaucratic Work Behavior: Evidence from China." *American Economic Review* 113, no. 3 (March 2023): 766-799. https://doi.org/10.1257/aer.20211207

Replication data: de Janvry et al. (2023). *Replication Data for: Subjective Performance Evaluation, Influence Activities, and Bureaucratic Work Behavior: Evidence from China.* AEA/ICPSR. https://doi.org/10.3886/E182787V1

LLM-distilled by paper-distiller (claude-sonnet-4-6), 2026-06-25. Not human-verified. Not reproduced.
