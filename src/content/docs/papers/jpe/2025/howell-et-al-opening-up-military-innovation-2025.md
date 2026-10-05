---
title: "Opening Up Military Innovation: Howell, Rathje, Van Reenen & Wong (2025)"
description: >-
  Distilled: Using a sharp regression discontinuity design in the U.S. Air Force
  SBIR program, the paper shows that Open (bottom-up, unspecified) awards increase
  military technology adoption by 11.4 pp, VC investment by 12 pp, and patenting
  by 7-9 pp, while Conventional (top-down, specified) awards have no such effects
  and create program lock-in. Journal of Political Economy 2025, VOR paywalled.
  Eighteen core results with source locators, datasets used, the model, and the method.
sidebar:
  label: Howell-Rathje-VanReenen-Wong 2025
  order: 1
tags: [paper-summary, innovation-policy, defense-rd, procurement, sbir,
       entrepreneurship, regression-discontinuity, panel-regression,
       peer-reviewed, unreplicated,
       data:sbir, data:fpds, data:pitchbook, data:crunchbase, data:uspto]
paper:
  authors: Sabrina T. Howell, Jason Rathje, John Van Reenen, Jun Wong
  authorList:
    - { family: Howell, given: Sabrina T., orcid: "0000-0002-5277-0336", affiliation: "NYU Stern, NBER" }
    - { family: Rathje, given: Jason, affiliation: "U.S. Air Force" }
    - { family: Van Reenen, given: John, orcid: "0000-0001-9153-2907", affiliation: "LSE, MIT, NBER" }
    - { family: Wong, given: Jun, affiliation: "University of Chicago" }
  year: 2025
  venue: "Journal of Political Economy 133(11), November 2025, pp. 3605-3651"
  venueShort: J. Political Economy 2025
  doi: 10.1086/737235
  jel:
    codes: [O31, O32, O38, H56, H57]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: [Innovation Policy and R&D, Defense Military and Policy Studies, Research Science and Academia]
  dataAccess: proprietary-confidential
  outcome:
    - probability of non-SBIR DoD contract (technology adoption by military)
    - probability of venture capital investment
    - probability of patent grant
    - probability of high-originality patent
    - probability of future SBIR award (program lock-in)
    - applicant firm age, employment, and pre-award innovation and financing
  outcomeClass: [firm-real-outcomes, firm-financing]
  license: >-
    VOR paywalled (Journal of Political Economy, University of Chicago Press).
    Accepted manuscript deposited CC BY 4.0 on LSE Research Online
    (researchonline.lse.ac.uk/id/eprint/128343). Crossref works/10.1086/737235
    returns no license[] block.
  licenseShort: paywalled (VOR)
  access: paywalled
  machineAccess: "blocked-paywall (J. Political Economy / U. Chicago Press, 2026-06-26)"
  redistribution: "extract-only (VOR paywalled; accepted MS CC BY 4.0 permits mirroring but not hosted in this batch)"
  resultsCount: 18
  citedByCount: 6
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [regression-discontinuity-design, panel-regression, k-means-clustering]
    identification: rdd
  contributionType: [new-fact, new-data]
  mechanisms: [information-asymmetry]
  introducesData: true
  scope:
    region: US
    period: 2017-01..2019-12
    frequency: annual
    dataType: [administrative, other]
    granularity: [firm]
    n: "2,283 unique firms (main sample, 2017-19 first-time applicants); 21,365 proposals from 6,701 firms (2003-19 extended sample)"
  findings:
    - { ref: R1, outcome: "probability of non-SBIR DoD contract (technology adoption)", metric: pp-effect, value: "+11.4 pp (69% of mean); Conventional: -8.6 pp (insig.)", direction: positive }
    - { ref: R2, outcome: "probability of venture capital investment", metric: pp-effect, value: "+12 pp (>mean of 9.2%; sig. at 5%); Conventional: no effect", direction: positive }
    - { ref: R3, outcome: "probability of patent grant", metric: pp-effect, value: "+8.9 pp (79% of mean; sig. at 5%); Conventional: negative, weakly sig.", direction: positive }
    - { ref: R4, outcome: "probability of high-originality patent", metric: pp-effect, value: "+7 pp (194% of mean; sig. at 1%); Conventional: no effect", direction: positive }
    - { ref: R5, outcome: "probability of future SBIR award (lock-in)", metric: pp-effect, value: "Conventional: +positive, ~3x mean (weakly sig.); Open: no effect", direction: mixed }
    - { ref: R6, outcome: "probability of non-SBIR DoD contract (cross-applicant robustness)", metric: pp-effect, value: "+15.1 pp (full-controls model); high-originality patents +10.7 pp", direction: positive }
    - { ref: R7, outcome: "probability of non-SBIR DoD contract (technology adoption)", metric: pp-effect, value: "+18.6 pp differential Open effect with lifecycle and technology fixed effects; Conventional: -8.9 pp", direction: positive, vsBenchmark: "Table 2 Panel B control specification" }
    - { ref: R8, outcome: "probability of non-SBIR DoD contract (technology adoption)", metric: pp-effect, value: "+9.4 pp differential Open effect in all 21,365 proposals; VC +10.8 pp, any patent +11.0 pp, high-originality patent +9.1 pp; future SBIR -6.7 pp", direction: positive, vsBenchmark: "Table 2 Panel C extended sample, 2003-2019" }
    - { ref: R9, outcome: "probability of non-SBIR DoD contract (technology adoption)", metric: pp-effect, value: "+29.3 pp differential Open effect among older firms; +15.9 pp among younger firms, not significant", direction: positive, vsBenchmark: "Table 3 Panel A age split" }
    - { ref: R10, outcome: "probability of non-SBIR DoD contract (technology adoption)", metric: pp-effect, value: "+37.6 pp differential Open effect among large firms; -7.3 pp among small firms, not significant", direction: positive, vsBenchmark: "Table 3 Panel B employment split" }
    - { ref: R11, outcome: "probability of patent grant", metric: pp-effect, value: "Non-specific-topic interaction +7.4 pp (Panel A); +5.8 pp with controls (Panel B); specific-topic award effects -3.4 pp and -4.1 pp", direction: mixed, vsBenchmark: "Conventional topics below versus above the 66th percentile of non-specificity" }
    - { ref: R12, outcome: "probability of non-SBIR DoD contract (technology adoption)", metric: pp-effect, value: "+20.2 pp differential Open effect with additional controls; VC +13.6 pp, any patent +18.7 pp, high-originality patent +9.5 pp, future SBIR -10.1 pp", direction: positive, vsBenchmark: "Table 7 Panel A" }
    - { ref: R13, outcome: "probability of non-SBIR DoD contract (technology adoption)", metric: pp-effect, value: "+17.0 pp differential Open effect within ranks ±1 and ±2; randomization-inference p=0.072", direction: positive, vsBenchmark: "Table 7 Panel B narrow bandwidth" }
    - { ref: R14, outcome: "probability of future SBIR award (program lock-in)", metric: pp-effect, value: "Conventional award effect +5.7 pp without controls and +5.5 pp with controls in 2003-2016; other listed outcomes have no positive significant effects", direction: mixed, vsBenchmark: "Table 7 Panel C, before Open existed" }
    - { ref: R15, outcome: "probability of future SBIR award (program lock-in)", metric: pp-effect, value: "Conventional award effect +8.3 pp without controls and +7.8 pp with controls among firms that never applied to Open; other listed outcomes have no positive significant effects", direction: mixed, vsBenchmark: "Table 7 Panel D" }
    - { ref: R16, outcome: "RDD cutoff manipulation diagnostic", metric: p-value, value: "Manipulation-test p-value >0.6 in both programs; 81% of applicants have at least one evaluator sub-score crossover", direction: none }
    - { ref: R17, outcome: "applicant firm age, employment, and pre-award innovation and financing", metric: level, value: "Open applicants average 9 vs. 12 years of age (difference not significant), 18 vs. 23 employees (difference significant at 10%), previous VC 9.7% vs. 2.3%, and previous patenting 15.2% vs. 11.7%", direction: mixed }
    - { ref: R18, outcome: "probability of non-SBIR DoD contract (technology adoption)", metric: attenuation-bound, value: "Worst-case selection on unobservables could attenuate the Open-vs-Conventional effect on DoD and VC outcomes by about 50%; reducing those estimates to zero requires selection on unobservables at least twice as important as selection on observables", direction: mixed }
  resultType: confirms
  relatesTo:
    - { cite: "Howell (2017)", doi: '10.1257/aer.20150808', relation: extends, note: "finds positive DoE SBIR grant effects on innovation; this paper compares DoD Open vs. Conventional and finds opposite null for Conventional with distinct lock-in dynamics" }
    - { cite: "Belenzon and Cioaca (2021)", doi: '10.3386/w28644', relation: builds-on, note: "R&D contracts crowd in private R&D via downstream procurement potential; Open works through this channel by enabling firms to reveal unknown technologies to DoD" }
    - { cite: "Che et al. (2021)", doi: '10.1093/restud/rdaa092', relation: tests, note: "bundled follow-on contracts are ideal for unsolicited proposals; the Open program matches this design, and its positive VC and patent results are consistent with the prediction" }
    - { cite: "Bhattacharya (2021)", doi: '10.3982/ecta16581', relation: cites, note: "structural model of R&D procurement contests in the Navy SBIR; complements the RDD causal approach used here" }
  openQuestions:
    - "Whether the Open program's positive effects generalize to other agencies and countries; the paper flags this as a key future research avenue (p. 34)."
    - "What general conditions make open procurement more effective than conventional procurement; the paper notes the answer likely depends on modular technology architectures and civilian ecosystem overlap (p. 7)."
    - "Whether the Open program will eventually develop its own lock-in as it matures; the paper uses 2020 applicant data to show it has not yet, but flags this for future monitoring (pp. 30-31)."
  replicationCode:
    url: https://doi.org/10.7910/DVN/78W8M6
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read full PDF (accepted MS, 34 pp. main text, LSE Research Online eprint 128343). Six results extracted from Table 2 (§5, pp. 19-20) and Table 6 (§6.3, pp. 24-25). Equation (1) transcribed from p. 18. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; three fixes applied: (1) JEL codes corrected from [O31,O38,H56] to [O31,O32,O38,H56,H57] per title page; (2) R3 significance corrected from sig. at 1%*** to sig. at 5%** per Table 2 Panel A col 3 (beta2=0.176**); (3) findings[R3] value updated to match. All other Core results (R1-R6), Equation 1, kernel formula, and Table 6 Panel B magnitudes verified correct." }
    - { by: paper-distiller (gpt-6-luna), date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the full PDF and added twelve Core results rows, corresponding findings, the missing p-value vocabulary proposal, and complete estimating specifications with equations. Additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-checked all 18 Core results, equations and specifications, classification axes, findings, prose, frontmatter, and DOI edges against the PDF; corrected R1-R6, R13, R16, and R17 locators, narrowed the selection and Conventional-effects claims, clarified the cross-applicant result and Che et al. note, and set resultType to confirms. The table-locator check is clean and all relatesTo cites are locatable. No headline results are omitted." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/737235", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] block present; container-title: Journal of Political Economy; published: 2025-11-01; volume: 133; issue: 11; page: 3605-3651. PDF cover page (LSE Research Online eprint 128343) states: Version: Accepted Version; Licence: Creative Commons Attribution 4.0." }
---

**What this is.** The paper's core results, the identification strategy, and the estimating
equation: enough to understand what the Air Force SBIR reform found and how it was
identified, without reading all 34 pages. To replicate or extend it, read the full source
at [doi.org/10.1086/737235](https://doi.org/10.1086/737235) or the accepted manuscript at
[LSE Research Online](https://researchonline.lse.ac.uk/id/eprint/128343).

## TL;DR

Should governments procuring innovation specify desired products (a "Conventional" approach)
or allow firms to propose their own ideas (an "Open" approach)? The paper studies a 2018
reform at the U.S. Air Force SBIR program that introduced an Open competition alongside the
existing Conventional one. Using a sharp RDD that exploits the rank-based award rule within
each competition topic, the paper finds that winning an Open award increases military
technology adoption (subsequent non-SBIR DoD contracts) by 11.4 pp, VC investment by 12 pp,
and high-originality patenting by 7 pp. Winning a Conventional award has no positive effects
on any of these outcomes and instead creates program lock-in: it raises the probability of
winning another SBIR award by roughly three times the mean. Three complementary designs
(firm-characteristic controls, specificity variation within Conventional, and firms applying
to both programs) show that differential firm selection alone does not explain the results.
Openness matters beyond differences in applicant composition.

## Core results

Magnitudes and significance are as reported in the text and tables; `\*` = 10%, `\*\*` = 5%,
`\*\*\*` = 1% (standard errors clustered by topic). Locators refer to the accepted manuscript
pagination.

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Open award raises probability of subsequent non-SBIR DoD contract (technology adoption) | Table 2 Panel A col 1, PDF p. 50 | Open: +11.4 pp = +0.200-0.086, p = 0.019, 69% of mean; Conventional: -8.6 pp (insig.) |
| R2 | Open award raises probability of VC investment | Table 2 Panel A col 2, PDF p. 50 | Open: +12 pp, >sample mean of 9.2%, sig. at 5%; Conventional: no effect |
| R3 | Open award raises probability of any patent grant | Table 2 Panel A col 3, PDF p. 50 | Open: +8.9 pp, 79% of mean, sig. at 5%`\*\*`; Conventional: negative, weakly sig. |
| R4 | Open award raises probability of high-originality patent | Table 2 Panel A col 4, PDF p. 50 | Open: +7 pp, 194% of mean, sig. at 1%`\*\*\*`; Conventional: no effect |
| R5 | Conventional award creates lock-in (future SBIR); Open does not | Table 2 Panel A col 5, PDF p. 50 | Conventional: positive, ~3x mean (weakly sig.); Open: no effect on future SBIR |
| R6 | Open effects hold among firms that applied to both programs, so selection by applicant composition alone does not explain them | Table 6 panels A-B, PDF p. 54 | Among 507 cross-applicant firms: Open raises DoD contracts by 15.1 pp and high-originality patents by 10.7 pp (controls model) |
| R7 | Adding firm lifecycle controls and 25 technology fixed effects preserves the Open differential across the five outcomes | Table 2 Panel B, PDF p. 50 | Open differentials: DoD contracts +0.186\*\*, VC +0.109\*, patents +0.163\*\*, high-originality patents +0.083\*\*\*, future SBIR -0.108\*\*; Conventional DoD effect -0.089 (insig.) |
| R8 | Open effects remain in the extended sample of all proposals | Table 2 Panel C, PDF p. 50 | Open differentials: DoD contracts +0.094\*\*, VC +0.108\*\*\*, patents +0.110\*\*\*, high-originality patents +0.091\*\*\*, future SBIR -0.067\*; 21,365 proposals, 2003-19 |
| R9 | The age split shows large Open effects among older firms, so younger applicants alone do not account for the result | Table 3 Panel A, PDF p. 51 | Open differential: DoD contracts +0.293\*\* among older firms and +0.159 (insig.) among younger firms; high-originality patents +0.080\*\* among older firms; VC +0.220\*\* among younger firms |
| R10 | The employment split shows Open effects among large firms and a patent effect among small firms | Table 3 Panel B, PDF p. 51 | Open differentials: DoD contracts +0.376\*\* for large firms and -0.073 (insig.) for small firms; any patents +0.216\*\* for small and +0.180\* for large firms; high-originality patents +0.144\*\*\* for large firms |
| R11 | Within Conventional, less-specific topics have larger patent effects, while specific-topic award effects are negative | Table 5 Panels A-B, PDF p. 53 | Patent award effects for specific topics: -0.034\*\* (Panel A), -0.041\*\* (Panel B); award × non-specific interaction: +0.074\*\* and +0.058\*; high-originality interaction +0.078\*\* / +0.064\*\*, high-citation interaction +0.064\*\* / +0.053\* |
| R12 | Open differentials persist after additional controls for pre-award outcomes, location, and product type | Table 7 Panel A, PDF p. 55 | Open differentials: DoD contracts +0.202\*\* (or +0.181\*\* with lifecycle and technology controls), VC +0.136\*\* (+0.123\*), patents +0.187\*\*\* (+0.180\*\*\*), high-originality patents +0.095\*\*\* (+0.099\*\*\*), future SBIR -0.101\* (-0.107\*\*) |
| R13 | The main Open pattern remains under a narrow bandwidth and randomization inference | Table 7 Panel B, PDF p. 56 | Within ranks ±1 and ±2: Open differentials for DoD contracts +0.170\*\* (RI p=0.072), VC +0.195\*\*\* (p=0.000), patents +0.153\*\*\* (p=0.011), high-originality patents +0.061\*\*\* (p=0.004); future SBIR -0.058 (p=0.370) |
| R14 | Before Open existed, Conventional awards did not increase the commercial outcomes but did predict later SBIR awards | Table 7 Panel C, PDF p. 56 | 2003-16 Conventional effects: DoD contracts -0.026 / -0.031\*\*, VC +0.006 / +0.006, patents -0.021 / -0.022, high-originality patents -0.035\*\* / -0.037\*\*\*, future SBIR +0.057\*\*\* / +0.055\*\*\* (without / with controls) |
| R15 | Among firms that never applied to Open, Conventional awards show the same absence of positive commercial effects and persistent SBIR lock-in | Table 7 Panel D, PDF p. 56 | Conventional effects: DoD contracts -0.016 / -0.027, VC +0.010 / +0.010, patents -0.013 / -0.018, high-originality patents -0.028\* / -0.033\*\*, future SBIR +0.083\*\*\* / +0.078\*\*\* (without / with controls) |
| R16 | RDD assignment diagnostics show no evidence of score manipulation around the cutoff | Figure 2, PDF p. 45; §4, PDF p. 18; Figure E.7, PDF p. 94 | Manipulation-test p-value exceeds 0.6 in both programs; 81% of applicants have at least one evaluator sub-score crossover |
| R17 | Open topics attract a different applicant mix, including younger, smaller firms with more prior VC and patenting | Table 1, PDF p. 49; §3, PDF p. 15 | Open vs. Conventional applicants: average age 9 vs. 12 years (not significant), employees 18 vs. 23 (10% significant), prior VC 9.7% vs. 2.3%, previous patenting 15.2% vs. 11.7% |
| R18 | Selection bounds indicate that unobserved selection would have to be substantially stronger than observed selection to explain away the DoD and VC effects | §6.1 text, PDF p. 24 | Worst-case unobserved selection could attenuate the DoD and VC treatment-effect differences by about 50%; to reduce them to zero, it must be at least twice as important as observed selection; bounds increase patent and SBIR effects |

**Overall (paper's conclusion).** The Air Force Open SBIR program succeeded in its stated
objectives: it increased commercial technology adoption by the military, expanded the
nontraditional industrial base (via VC investment), and raised commercial innovation intent
(via patenting). Conventional awards have no positive effects on these outcomes, with some
specifications showing negative patent effects, and instead create SBIR-mill incumbency.
Openness matters as a program design feature beyond the type of firm it attracts: three
complementary research designs all point to the same conclusion. Among non-defense-sector
firms, the estimated Open effect on DoD contracts is 16.4 pp, compared with 9.4 pp in the
full sample (Appendix Table E.13).

## Theory / model

The paper has no formal economic model. It frames the Open vs. Conventional comparison
as a principal-agent information problem: the government (DoD) holds a need but imperfect
knowledge of the technological landscape, while firms hold private knowledge of potentially
useful technologies. A Conventional approach forces the government to specify ex ante what
it wants, limiting the signal it sends to firms with unrecognized solutions. An Open
approach delegates identification of solutions to the private sector, allowing firms to
reveal technologies DoD did not know it needed.

The paper draws on two theoretical benchmarks. Belenzon and Cioaca (2021) show that
government R&D contracts (which carry an implicit promise of future downstream procurement)
crowd in private R&D investment; Open appears to activate this channel more effectively
because winning firms can credibly signal to venture capitalists that a large customer
exists for their commercially-oriented technology. Che et al. (2021) show that bundled
approaches in which the innovating firm receives the follow-on contract are optimal for
unsolicited proposals; the Open program's structure matches this prediction and the
positive VC and patent results are consistent with it.

On the SBIR program specifically, Bhattacharya (2021) develops a structural model of
R&D procurement contests in the Navy SBIR; the paper here complements that work with a
causal RDD design at the Air Force focused on program design rather than selection dynamics.

The paper presents three identification arguments that openness matters beyond selection.
First, adding lifecycle and technology fixed effects to Equation (1) leaves the Open
coefficients unchanged (Table 2, Panel B). Second, within the Conventional program,
less-specific topics (measured by cosine-similarity dispersion of proposal text) yield
larger positive effects on patenting, with specific topics yielding significantly negative
effects (Table 5). Third, among firms that applied to both Open and Conventional and thus
share unobservables by construction, only Open awards generate positive outcomes (Table 6).

## Method

The paper has no formal structural model. It uses a sharp regression discontinuity design: within each competition topic, applicants are ranked by evaluation scores, the budget determines the award cutoff, and the cutoff perfectly predicts awards. Score density is smooth at the cutoff, baseline covariates do not jump there, and the cutoff depends on the topic budget rather than evaluator scoring (§4, PDF pp. 16-17; Figure 2, PDF p. 45; Appendix Table E.7).

Ranks are normalized within topic so rank 1 is the lowest-ranked winner and rank -1 the highest-ranked loser. The triangular kernel downweights observations farther from the cutoff (PDF p. 17):

$$
\text{Kernel}_{iT} = 1 - \frac{|\text{Rank}_{iT}|}{\max_j |\text{Rank}_{jT}| + 0.01}
$$

The paper's only numbered main-text equation is the pooled Open and Conventional RDD (Equation 1, PDF p. 18):

$$
\begin{aligned}
Y_i ={}& \alpha + \beta_1 \text{Award}_{iT} + \beta_2 (\text{Award}_{iT} \cdot \text{Open}_T) \\
&+ \gamma_1 [\text{Rank}_{iT} \mid \text{Rank}_{iT} > 0]
+ \gamma_2 ([\text{Rank}_{iT} \mid \text{Rank}_{iT} > 0] \cdot \text{Open}_T) \\
&+ \gamma_3 [\text{Rank}_{iT} \mid \text{Rank}_{iT} < 0]
+ \gamma_4 ([\text{Rank}_{iT} \mid \text{Rank}_{iT} < 0] \cdot \text{Open}_T) \\
&+ \delta \text{Score}_{iT} + \mathbf{X}_i'\theta + \alpha_T + \varepsilon_{iT} \tag{1}
\end{aligned}
$$

Here $$\beta_1$$ is the Conventional award effect and $$\beta_1+\beta_2$$ is the Open award effect. The topic fixed effects $$\alpha_T$$ absorb topic-specific levels. $$\mathbf{X}_i$$ includes firm age and employment, and in controlled models 25 narrow technology fixed effects built by k-means clustering of proposal text. The regressions use triangular-kernel weighted OLS and cluster standard errors by topic; extended models with repeated firms also cluster by firm (§4, PDF pp. 17-18).

The paper's proposed channel is that an Open award lets a firm reveal a useful technology the government did not previously recognize. A successful award can signal potential downstream defense demand to private investors, crowding in private R&D and commercialization (PDF pp. 4-6). It also argues that Conventional awards can create lock-in by directing firms toward repeated program awards rather than broader commercialization (§5, PDF pp. 19-20).

## Empirical specifications

**Main effects and controls (Tables 2, 3, and 7A; Equation 1, PDF pp. 18-20, 50-51, 55).** Tables 2 and 7A estimate Equation (1) on the first proposal for 2,283 firms applying in 2017-19, with five ever-after binary outcomes observed through January 2023. Table 2 Panel A has no firm controls; Panel B adds age, employment, and 25 narrow technology fixed effects; Panel C uses all 21,365 proposals from 2003-19 and includes those controls. Table 7 Panel A further adds prior non-SBIR DoD contracts, VC, patents, high-originality patents, VC-hub and Air Force-base location indicators, and software/hardware status. Tables 2 and 7 cluster standard errors by topic. Table 3 repeats Equation (1) in separate age and employment subsamples, with the same controls-free first-proposal sample and topic-clustered standard errors (PDF p. 50).

**Conventional-topic specificity (Table 5, §6.2, PDF pp. 23-24, table PDF p. 53).** The sample is all Conventional proposals from 2003-19. The main award effect is for topics at or below the 66th percentile of non-specificity; the interaction measures how the award effect changes above that threshold. All specifications include topic fixed effects and an interaction of award with the number of proposals in the topic. Panel B additionally controls for firm age, employment, and 25 narrow technology fixed effects. Standard errors are clustered by topic. The estimating form is Equation (1) restricted to Conventional topics, replacing Open with the high-non-specificity indicator and adding the proposal-count interaction:

$$
\begin{aligned}
Y_i ={}& \alpha + \beta_1 \text{Award}_{iT} + \beta_2 (\text{Award}_{iT} \cdot \text{NonSpecific}_T) \\
&+ \beta_3 (\text{Award}_{iT} \cdot \text{ProposalCount}_T)
+ \gamma_1 [\text{Rank}_{iT} \mid \text{Rank}_{iT} > 0]
+ \gamma_2 [\text{Rank}_{iT} \mid \text{Rank}_{iT} < 0] \\
&+ \delta \text{Score}_{iT} + \mathbf{X}_i'\theta + \alpha_T + \varepsilon_{iT}
\end{aligned}
$$

**Cross-applicant design (Table 6, §6.3, table PDF p. 54).** The sample contains 507 firms that applied to Conventional before 2018 and later applied to Open. Because this subset contains Open competitions only, the treatment coefficient is the award effect; the Open interaction is not included. The same topic-specific rank controls and topic fixed effects from Equation (1) are used, with lifecycle controls and narrow technology fixed effects in Panel B. Standard errors are clustered by topic:

$$
\begin{aligned}
Y_i ={}& \alpha + \beta \text{Award}_{iT}
+ \gamma_1 [\text{Rank}_{iT} \mid \text{Rank}_{iT} > 0]
+ \gamma_2 [\text{Rank}_{iT} \mid \text{Rank}_{iT} < 0] \\
&+ \delta \text{Score}_{iT} + \mathbf{X}_i'\theta + \alpha_T + \varepsilon_{iT}
\end{aligned}
$$

**Narrow-bandwidth and pre-Open checks (Table 7 Panels B-D, table PDF pp. 55-56).** Panel B restricts the first-proposal sample to two ranks on each side of the cutoff, so rank controls are omitted; it reports both topic-clustered inference and randomization-inference p-values for 811 observations. Panel C estimates the Conventional award effect on all proposals from 2003-16, before Open existed. Panel D further restricts this earlier sample to firms that never subsequently applied to Open. Panels C-D report specifications with and without lifecycle and technology fixed effects; standard errors are clustered by topic (PDF pp. 26-27).
The narrow-bandwidth pooled equation drops the rank controls and retains the treatment interaction, score, topic effects, and the controls shown in the table:

$$
Y_i = \alpha + \beta_1 \text{Award}_{iT} + \beta_2 (\text{Award}_{iT} \cdot \text{Open}_T) + \delta \text{Score}_{iT} + \mathbf{X}_i'\theta + \alpha_T + \varepsilon_{iT}
$$

For Panels C-D, where all topics are Conventional, the fitted form is the single-program version of Equation (1):

$$
\begin{aligned}
Y_i ={}& \alpha + \beta \text{Award}_{iT}
+ \gamma_1 [\text{Rank}_{iT} \mid \text{Rank}_{iT} > 0]
+ \gamma_2 [\text{Rank}_{iT} \mid \text{Rank}_{iT} < 0] \\
&+ \delta \text{Score}_{iT} + \mathbf{X}_i'\theta + \alpha_T + \varepsilon_{iT}
\end{aligned}
$$

**Assignment diagnostics (Figure 2, PDF p. 45; §4, PDF pp. 16-17).** The density test reports p-values above 0.6 for both programs. The paper also reports that 81% of applicants have at least one evaluator sub-score crossover, limiting any one evaluator's ability to move a firm across the rank cutoff. Appendix Table E.7 checks baseline covariate continuity.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Air Force SBIR administrative microdata (proposals, evaluation sub-scores, award decisions, 2003-2019) | Running variable (rank/score), treatment (award), sample frame; obtained via research collaboration (Howell as Special Government Employee) | no page yet |
| Federal Procurement Data System (FPDS) | Non-SBIR DoD contract outcomes (technology adoption); linked to SBIR firms by firm identifier | no page yet |
| Pitchbook, CB Insights, SDC VentureXpert, Crunchbase (VC databases) | Venture capital investment outcome; VC deals matched to SBIR firms | [PitchBook](/wiki/commercial/pitchbook/) (licensed); [Crunchbase](/wiki/commercial/crunchbase/) (licensed) |
| USPTO patent data (granted patents, originality, citations) | Patent and high-originality patent outcomes; patent originality scored per Jaffe and Trajtenberg (2002) | no page yet (`data:uspto`) |
| SBA SBIR award data (all agencies) | Future SBIR outcome (lock-in measure) | no page yet (`data:sbir`) |

Sample: 2,283 unique firms applying 2017-2019 for the first time (main analysis).
Outcomes measured through January 2023 (at least 37 months after the last award).
The extended sample uses 21,365 proposals from 6,701 unique firms, 2003-2019.

## When to read the full paper

Use the [original](https://doi.org/10.1086/737235) or the
[accepted manuscript](https://researchonline.lse.ac.uk/id/eprint/128343) if you are:
designing or evaluating open vs. specified procurement programs in the public or private
sector; studying the SBIR program's innovation effects; comparing the Air Force results
to the DoE SBIR positive results in Howell (2017); examining the theoretical mechanisms
(downstream procurement signaling per Belenzon and Cioaca (2021), bundled follow-on
contracts per Che et al. (2021)); or using the replication data at Harvard Dataverse
([doi.org/10.7910/DVN/78W8M6](https://doi.org/10.7910/DVN/78W8M6)) to extend the analysis.

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 133(11), November 2025.
DOI: [10.1086/737235](https://doi.org/10.1086/737235).

This page was distilled and independently checked against the source PDF by
paper-distiller and paper-verifier (gpt-6-luna) on 2026-10-04; it has not been
human-verified or independently reproduced. The VOR is
paywalled (University of Chicago Press). An accepted manuscript is available under
CC BY 4.0 at LSE Research Online; the PDF mirror is not hosted in this batch.

> Howell, Sabrina T., Jason Rathje, John Van Reenen, and Jun Wong.
> "Opening Up Military Innovation: Causal Effects of Reforms to US Defense Research."
> *Journal of Political Economy* 133, no. 11 (November 2025): 3605-3651.
> DOI: 10.1086/737235. Extract only: reproduction rights not granted for the VOR.
