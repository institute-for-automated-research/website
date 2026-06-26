---
title: "Opening Up Military Innovation: Howell, Rathje, Van Reenen & Wong (2025)"
description: >-
  Distilled: Using a sharp regression discontinuity design in the U.S. Air Force
  SBIR program, the paper shows that Open (bottom-up, unspecified) awards increase
  military technology adoption by 11.4 pp, VC investment by 12 pp, and patenting
  by 7-9 pp, while Conventional (top-down, specified) awards have no such effects
  and create program lock-in. Journal of Political Economy 2025, VOR paywalled.
  Six core results with source locators, datasets used, and the estimating equation.
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
  resultsCount: 6
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
  resultType: new-finding
  relatesTo:
    - { cite: "Howell (2017)", doi: '10.1257/aer.20150808', relation: extends, note: "finds positive DoE SBIR grant effects on innovation; this paper compares DoD Open vs. Conventional and finds opposite null for Conventional with distinct lock-in dynamics" }
    - { cite: "Belenzon and Cioaca (2021)", doi: '10.3386/w28644', relation: builds-on, note: "R&D contracts crowd in private R&D via downstream procurement potential; Open works through this channel by enabling firms to reveal unknown technologies to DoD" }
    - { cite: "Che et al. (2021)", doi: '10.1093/restud/rdaa092', relation: tests, note: "bundled follow-on contract optimal for unsolicited proposals; Open program matches this design and the positive VC and patent results confirm the prediction" }
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
to both programs) rule out differential firm selection as the explanation. Openness matters
independently from applicant composition.

## Core results

Magnitudes and significance are as reported in the text and tables; `\*` = 10%, `\*\*` = 5%,
`\*\*\*` = 1% (standard errors clustered by topic). Locators refer to the accepted manuscript
pagination.

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Open award raises probability of subsequent non-SBIR DoD contract (technology adoption) | Table 2 Panel A col 1, pp. 19-20 | Open: +11.4 pp = +0.200-0.086, p = 0.019, 69% of mean; Conventional: -8.6 pp (insig.) |
| R2 | Open award raises probability of VC investment | Table 2 Panel A col 2, p. 19 | Open: +12 pp, >sample mean of 9.2%, sig. at 5%; Conventional: no effect |
| R3 | Open award raises probability of any patent grant | Table 2 Panel A col 3, pp. 19-20 | Open: +8.9 pp, 79% of mean, sig. at 5%`\*\*`; Conventional: negative, weakly sig. |
| R4 | Open award raises probability of high-originality patent | Table 2 Panel A col 4, p. 20 | Open: +7 pp, 194% of mean, sig. at 1%`\*\*\*`; Conventional: no effect |
| R5 | Conventional award creates lock-in (future SBIR); Open does not | Table 2 Panel A col 5, p. 20 | Conventional: positive, ~3x mean (weakly sig.); Open: no effect on future SBIR |
| R6 | Open effects hold for firms that applied to both programs (selection ruled out) | Table 6 panels A-B, pp. 24-25 | Among 507 cross-applicant firms: Open raises DoD contracts by 15.1 pp and high-originality patents by 10.7 pp (controls model); no Conventional effects |

**Overall (paper's conclusion).** The Air Force Open SBIR program succeeded in its stated
objectives: it increased commercial technology adoption by the military, expanded the
nontraditional industrial base (via VC investment), and raised commercial innovation intent
(via patenting). Conventional awards have zero effect on these outcomes and instead create
SBIR-mill incumbency. Openness matters as a program design feature, independently from the
type of firm it attracts: three complementary research designs all point to the same
conclusion. Among non-defense-sector firms, the Open effect on DoD contracts is even larger
(16.4 pp vs. 9.4 pp in the full sample, per Appendix Table E.13).

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

The identification exploits a sharp RDD: within each SBIR competition topic, applicants
receive an aggregate evaluation score (sum of three independent sub-scores on Technology,
Team, and Commercialization), and winners are exactly those above a rank threshold
determined by the available budget. Because the cutoff is set independently of the
evaluation process and no single evaluator can manipulate position around it, the running
variable (rank) is as-good-as-randomly assigned near the threshold.

Ranks are normalized within topic so that rank 1 is the lowest-scoring winner and rank -1
is the highest-scoring loser. A triangular kernel weights observations closest to the
cutoff more heavily (p. 17):

$$
\text{Kernel}_{iT} = 1 - \frac{|\text{Rank}_{iT}|}{\max_j |\text{Rank}_{jT}| + 0.01}
$$

The main estimating equation pools Open and Conventional topics and estimates the Open
effect as the interaction of winning with an Open indicator (Equation 1, p. 18):

$$
Y_i = \alpha + \beta_1 \text{Award}_{iT} + \beta_2 \text{Award}_{iT} \cdot \text{Open}_T
$$

$$
+ \gamma_1 [\text{Rank}_{iT} \mid \text{Rank}_{iT} > 0] + \gamma_2 [\text{Rank}_{iT} \mid \text{Rank}_{iT} > 0] \cdot \text{Open}_T
$$

$$
+ \gamma_3 [\text{Rank}_{iT} \mid \text{Rank}_{iT} < 0] + \gamma_4 [\text{Rank}_{iT} \mid \text{Rank}_{iT} < 0] \cdot \text{Open}_T
+ \delta \text{Score}_{iT} + \mathbf{X}_i' \theta + \alpha_T + \varepsilon_{iT} \tag{1}
$$

Here $$\beta_1$$ is the Conventional award effect, and $$\beta_1 + \beta_2$$ is the Open award
effect. $$\text{Open}_T$$ is an indicator for the topic being Open. Topic fixed effects
$$\alpha_T$$ absorb all time-invariant topic characteristics (including the date of award and
the program type per se). Standard errors $$\varepsilon_{iT}$$ are clustered by topic.
Optional controls $$\mathbf{X}_i$$ include firm age, firm size (employees), and 25 narrow
technology-class fixed effects constructed from k-means clustering of proposal abstract
text (Forgy 1965; Bonhomme and Manresa 2015), using a 25-cluster model on word embeddings.

The paper also uses topic-level specificity scores based on `k-means-clustering` of proposal
texts: for each topic, the standard deviation of cosine similarities between individual
proposals and the topic centroid measures how much the topic allows diverse technology
proposals (high SD = open, low SD = specific). This variable is used in Table 5 to show
that more open-style Conventional topics also have larger positive effects on patenting
(§6.2, pp. 22-24).

## Empirical specifications

**Main RDD specification (R1-R5).** The specification is Equation (1) above, estimated
by weighted OLS with the triangular kernel. The main sample is 2,283 unique firms from
the 2017-19 SBIR solicitation periods (restricting to first-time winners for homogeneity).
Outcomes are binary ever-after indicators measured through January 2023, at least 37 months
after the last award. Standard errors are clustered by topic. The coefficient of interest
is $$\beta_2$$ (Award $\times$ Open interaction), which captures the incremental Open effect
over and above the Conventional effect $$\beta_1$$.

Panel A of Table 2 runs Equation (1) with no firm-level controls. Panel B adds firm
lifecycle controls (age, employees) and 25 technology fixed effects. Panel C expands to
all applications from 2003 onwards (firms may appear more than once). Results are similar
across all panels.

**Narrow-bandwidth robustness (Table 7, Panel B).** The sample is restricted to ranks
$$\pm 2$$ around the cutoff (two ranks on each side), so no control for rank is needed.
Results remain significant, supporting the local randomization interpretation and
suggesting the results are not confined to the immediate neighborhood.

**Specificity test within Conventional (Table 5, §6.2).** The sample is restricted to
Conventional topics using data from 2003 onwards. The regression interacts winning with
an indicator for being in a non-specific topic (above the 66th percentile of the
topic specificity distribution). Columns 3-5 show that more open-style Conventional
topics have significantly higher patent effects; highly specified Conventional topics
have a significantly negative patent effect, suggesting over-specification deters
commercialization.

**Cross-applicant design (Table 6, §6.3).** The sample is restricted to 507 firms that
applied to both the Open and Conventional programs. These firms are observationally
similar by construction. The Open award effect on DoD contracts (+15.1 pp) and
high-originality patents (+10.7 pp) is robust within this sample (Table 6 Panel B with
full controls), while Conventional effects remain zero, ruling out selection as the sole
explanation.

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

This distillation was extracted by an LLM (paper-distiller, claude-sonnet-4-6) on
2026-06-26 and is **not human-verified or independently reproduced**. The VOR is
paywalled (University of Chicago Press). An accepted manuscript is available under
CC BY 4.0 at LSE Research Online; the PDF mirror is not hosted in this batch.

> Howell, Sabrina T., Jason Rathje, John Van Reenen, and Jun Wong.
> "Opening Up Military Innovation: Causal Effects of Reforms to US Defense Research."
> *Journal of Political Economy* 133, no. 11 (November 2025): 3605-3651.
> DOI: 10.1086/737235. Extract only: reproduction rights not granted for the VOR.
