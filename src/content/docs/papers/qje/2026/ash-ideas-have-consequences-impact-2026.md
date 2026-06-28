---
title: "Ideas Have Consequences: Ash, Chen & Naidu (2026)"
description: >-
  Distilled: The Manne Economics Institute for Federal Judges shifted judicial
  behavior: trained judges used more economics language in their opinions, voted
  more often against federal regulatory agencies, and imposed stricter criminal
  sentences. The Quarterly Journal of Economics (2026), CC BY-NC 4.0. Seven
  core results with source locators, datasets used, and the DiD estimating
  equations.
sidebar:
  label: Ash-Chen-Naidu 2026
  order: 1
tags: [paper-summary, law-economics, judicial-decision-making, criminal-sentencing,
       text-as-data, difference-in-differences, panel-regression, open-access,
       peer-reviewed, unreplicated, data:bloomberg-law, data:trac, data:fjc,
       data:songer-auburn]
paper:
  authors: Elliott Ash, Daniel L. Chen, Suresh Naidu
  authorList:
    - { family: Ash, given: Elliott, orcid: 0000-0002-6817-7529, affiliation: ETH Zurich }
    - { family: Chen, given: "Daniel L.", orcid: 0000-0002-5774-2211, affiliation: Toulouse School of Economics }
    - { family: Naidu, given: Suresh, orcid: 0000-0002-9774-1678, affiliation: Columbia University }
  year: 2026
  venue: "The Quarterly Journal of Economics (2026), 845-887"
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf042
  jel:
    codes: [D7, K0, Z1]
    assignedBy: authors (stated on p. 845)
    date: 2026-06-28
  topics: ["Law, Economics, and Judicial Systems", "Legal and Constitutional Studies"]
  dataAccess: licensed-commercial
  outcome:
    - use of economics language in judicial opinions
    - probability of voting against federal regulatory agencies
    - conservative vote rate in economics cases
    - probability of imposing a prison sentence
  outcomeClass: [judicial-behavior, political-development]
  license: "CC BY-NC 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL https://creativecommons.org/licenses/by-nc/4.0/, delay-in-days 0, start 2025-08-26; corroborated by artifact pp. 845 and 887 CC BY-NC notice)"
  licenseShort: CC BY-NC 4.0
  access: open
  machineAccess: "open-access at OUP site (CC BY-NC 4.0 confirmed in Crossref DOI metadata 2026-06-28); not machine-fetched this session"
  redistribution: "extract-only (CC BY-NC 4.0 permits non-commercial mirroring; PDF not hosted in this batch)"
  resultsCount: 7
  citedByCount: 2
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, panel-regression, event-study]
    identification: natural-experiment
  contributionType: [new-fact, new-data]
  mechanisms: [learning, ideological-persuasion]
  introducesData: true
  scope:
    region: US
    period: 1970-01..2011-12
    frequency: annual
    dataType: [administrative, text]
    granularity: [individual]
    n: "~200,000 circuit court cases (1970-2005); ~1 million district court sentencing decisions (1992-2011, full dataset per abstract p. 846); ~840 Manne-attending federal judges (1976-1998)"
  findings:
    - { ref: R1, outcome: "use of economics language in judicial opinions", metric: sd-effect, value: "beta=0.363 (se=0.154), approx +0.36 SD short-run within-judge effect on word-embedding similarity to economics lexicon", direction: positive }
    - { ref: R2, outcome: "use of economics language in judicial opinions", metric: sd-effect, value: "beta=0.430 (se=0.1305), approx +0.43 SD in early period (pre-1987 sample)", direction: positive, vsBenchmark: "pre-1987 effect larger than all-years estimate; economics ideas more novel in LEC heyday" }
    - { ref: R3, outcome: "probability of voting against federal regulatory agencies", metric: pp-effect, value: "beta=0.162 (se=0.0675), +16.2 pp short-run effect on votes against labor and environmental agencies", direction: positive }
    - { ref: R4, outcome: "conservative vote rate in economics cases", metric: pp-effect, value: "beta=0.265 (se=0.1316), +26.5 pp short-run; most conservative long-run estimate col.(11) beta=0.043", direction: positive }
    - { ref: R5, outcome: "conservative vote rate in non-economics cases", metric: pp-effect, value: "beta=0.02 to 0.06 across cols.(13)-(16), not statistically significant", direction: none }
    - { ref: R6, outcome: "probability of prison sentence given", metric: pp-effect, value: "beta=0.0617 (se=0.0202), +6.2 pp short-run incarceration rate in district courts (1992-2003)", direction: positive }
    - { ref: R7, outcome: "probability of prison sentence given", metric: pp-effect, value: "beta=0.035 (se=0.0135), +3.5 pp long-run incarceration rate", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Baye and Wright (2011)", relation: builds-on, note: "prior evidence that law and economics training affected antitrust decisions and that Manne-trained judges are less likely to be reversed on appeal" }
    - { cite: "DellaVigna and Gentzkow (2010)", relation: builds-on, note: "persuasion rate formula used to benchmark the Manne effect size against media-effects studies" }
    - { cite: "Callaway and Sant'Anna (2021)", relation: builds-on, note: "staggered DiD framework; parallel trends in already-treated units required here, differing from their not-yet-treated-only requirement" }
    - { cite: "Bonica et al. (2019)", relation: extends, note: "prior best evidence was clerk ideology shifting Supreme Court votes; this paper identifies broader within-judge training effects across the full federal bench" }
  openQuestions:
    - "Whether effects generalize to training programs based on more recent law and economics scholarship (behavioral, empirical); the 1970s LEC curriculum tested here differs from the field today (p. 881)."
    - "Whether other legal schools of thought (originalism, critical legal studies) exert comparable influence on judicial decisions (p. 882)."
    - "Long-run effects on never-attenders cannot be identified with this design; causal estimates apply only to ever-attenders (pp. 862-863)."
  replicationCode:
    url: https://doi.org/10.7910/DVN/XATYFX
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-28", role: extracted, note: "Full text read (pp. 845-887); seven results extracted from the PDF. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: "2026-06-28", role: verified, note: "Locators and reported magnitudes re-checked against source PDF; all 7 Core results coefficients and SEs confirmed in Tables I and II. Fixed: JEL codes corrected to paper's stated D7/K0/Z1; scope period extended to 2011-12 (district court data goes to 2011 per abstract p.846); fabricated Bayes-plausibility equation removed (not in PDF; replaced with p.880 verbal description); 'not statistically different from' overclaim corrected to 'not that different from' (p.877 wording); district court sentencing period clarified as 1992-2011 full dataset / 1992-2003 event-study window throughout." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: "2026-06-28", role: verified, note: "R3 N=2,408 re-checked against Table I p.868 col.(5): confirmed correct. Col.(5) Post Manne=0.162 (SE=0.0675), N=2,408, Short run sample (Voting against regulators). Col.(13) also has N=2,408 but is Conservative vote nonecon cases; the shared N reflects the same Bloomberg Law short-run event-study sample. No correction needed." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf042", checked: "2026-06-28", by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://creativecommons.org/licenses/by-nc/4.0/, delay-in-days=0, start=2025-08-26" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, identification design, and estimating equations: enough to know what it found and how, without reading the full 43 pages. To replicate or extend, read the original at [https://doi.org/10.1093/qje/qjaf042](https://doi.org/10.1093/qje/qjaf042). Replication data are available at [Harvard Dataverse](https://doi.org/10.7910/DVN/XATYFX).

## TL;DR

The paper estimates the causal effect of economics training on U.S. federal judges. The treatment is attendance at the Manne Economics Institute for Federal Judges, an intensive two-week program run by Henry Manne and the Law and Economics Center (LEC) starting in 1976. The program was oversubscribed from its second year onward, with admission on a first-come, first-served basis, which the authors exploit as a source of quasi-random variation in the timing of attendance. The sample covers the universe of published opinions in U.S. Circuit Courts (1970-2005) and approximately 1 million District Court criminal sentencing decisions (1992-2011; main event-study analysis uses 1992-2003). After attending the program, judges used more economics language in their opinions (roughly 0.36 standard deviations more word-embedding similarity to the economics lexicon), voted more often against federal labor and environmental regulatory agencies (roughly 16 percentage points more), and imposed prison sentences more frequently (roughly 6 percentage points more in the short run). Effects are concentrated in economics-related cases; no significant shift appears in non-economics cases.

## Core results

Significance is as reported; standard errors clustered by judge. Locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Manne attendance **increased economics language use** by ~0.36 SD short-run (all years) | Table I col. (1), p. 868; Figure III, p. 869 | beta=0.363 (se=0.154), N=5,261; significant at 5% |
| R2 | Effect on economics language is larger in the **early period** (pre-1987): ~0.43 SD | Table I col. (2), p. 868 | beta=0.430 (se=0.1305), N=3,214; significant at 1% |
| R3 | Manne attendance **raised probability of voting against labor/environmental regulators** by ~16 pp | Table I col. (5), p. 868; Figure IV, p. 872 | beta=0.162 (se=0.0675), N=2,408; significant at 5% |
| R4 | **Conservative voting in economics cases** increased by ~27 pp short-run (long-run conservative estimate: ~4 pp) | Table I col. (9), p. 868; col. (11) discussed p. 877 | beta=0.265 (se=0.1316), N=804 short-run; beta=0.043 long-run conservative estimate |
| R5 | **No significant effect** on conservative voting in non-economics cases | Table I cols. (13)-(16), p. 868 | beta=0.02 to 0.06 across specs, all insignificant; consistent with economics-specific channel |
| R6 | Manne attendance **increased probability of imposing a prison sentence** by ~6.2 pp short-run | Table II col. (1), p. 869; Figure V, p. 875 | beta=0.0617 (se=0.0202), N=70,784; significant at 1% |
| R7 | Long-run effect on **prison sentence probability**: ~3.5 pp | Table II col. (2), p. 869 | beta=0.035 (se=0.0135), N=260,516; significant at 5% |

**Overall (paper's conclusion).** The U.S. law and economics movement, disseminated through the Manne program, shifted legal outcomes across the federal judiciary. The finding that neither the legalist view (judges apply law as written) nor the attitudinalist view (judges follow party) can explain the results points to a third channel: within-judge shifts in the intellectual framework used to decide cases. The persuasion rate for conservative voting in economics cases is approximately 8%, comparable in magnitude to major media-effects estimates such as the Fox News effect on Republican voting estimated by DellaVigna and Kaplan (2007).

## Theory / model

The paper has no formal structural model. The theoretical framework proceeds in three steps.

**Step 1: Two null benchmarks.** A legal formalist would predict no effect: judges apply statutes and precedents as written, leaving no room for a training program to shift outcomes. An attitudinalist would likewise predict no effect: judges follow their appointing party platform, and training within the window of a sitting judge's tenure cannot move a party affiliation. Both predict a zero treatment effect. The paper argues that neither model fits because judges in a common-law system have substantial discretion, and the empirical results confirm it.

**Step 2: Why economics?** The best prior evidence on ideological influence in courts came from Bonica et al. (2019), who found that changes in clerk ideology sometimes shift a Supreme Court justice's votes; the Manne program extended and broadened that channel. The paper invokes the Bayesian persuasion framework of Gentzkow and Kamenica (2011) to explain why economics, as a rigorous social science, is especially persuasive with professional judges (p. 880). The Manne curriculum corresponds to a signal structure with commitment: the instructor, bound by academic or scientific norms, reveals the results of economic analysis even when the findings may conflict with the preferred conclusion of funders. In the Gentzkow-Kamenica (2011) framework, the principal will choose either an informative signal or none at all; thus, even if the judge knows the economist is biased for a particular outcome, the economist can still influence the judge to vote in the preferred direction some of the time, precisely because the economist is committed to revealing the signal generated by the economic analysis. The credibility of academic economic analysis means the signal is informative even to skeptical judges, raising the persuasion probability.

**Step 3: Persuasion rate.** The paper benchmarks its effect estimates against media-effects studies using the persuasion rate formula from DellaVigna and Gentzkow (2010) (p. 877):

$$p = 100 \times \frac{\Delta y}{\Delta e} \cdot \frac{1}{1 - y_0},$$

where $\Delta y$ is the change in the outcome, $\Delta e = 1$ (all attenders exposed), and $y_0 = 0.46$ is the pre-treatment mean conservative vote rate in economics cases. Setting $\Delta y = 0.043$ (Table I, col. (11), the most conservative long-run estimate) gives $p \approx 8\%$, not that different from the Fox News persuasion rate of 11.6% estimated by DellaVigna and Kaplan (2007) (p. 877).

## Method

**Economics language measurement.** The first outcome measure is constructed using word embeddings (p. 858-860). Judicial opinions are preprocessed (lowercased, punctuation removed) and represented as word lists. The paper uses the word2vec algorithm from Mikolov et al. (2013) to map each word to a dense vector. The starting point for the economics lexicon is the Ellickson (2000) index of 11 economics-related terms used in legal scholarship (externalit\*, transaction\_cost, efficien\*, deterr\*, cost\_benefit, capital, game\_theo, chicago\_school, marketplace, law1economic, law2economic). The economics language measure for opinion $i$ is the cosine similarity in word-embedding space between the opinion vector and the Ellickson lexicon vector:

$$\text{EconLang}_i = \cos(\text{emb}(\text{opinion}_i),\, \text{emb}(\text{lexicon})),$$

where emb(·) maps a document to its embedding-space centroid. The measure is approximately normally distributed and captures contextual use of economics reasoning, not just raw word counts. The paper also constructs an alternative supervised-learning measure (predicting whether an opinion is on an economics topic), which gives consistent results (Online Appendix D).

**Identification.** The identification strategy exploits the quasi-random timing of Manne program attendance. From 1977 through the late 1980s, the program was oversubscribed, with admission on a first-come, first-served basis. This means that among judges who applied, the specific year of attendance was largely determined by luck of timing rather than by judge characteristics. The paper's baseline sample restricts to ever-attenders (excludes never-attenders, who differ on pretreatment levels and trends) and exploits within-judge variation in the years before versus after attendance.

**Peer-share controls.** To address SUTVA concerns (judges communicate within circuits), the paper augments the main specification with a judge-specific peer attendance variable: $\bar{Z}^{-j}_{ct}$ = share of peer judges (weighted by caseload) on the same court who have attended Manne (p. 866-867). This is included interacted with circuit-judge fixed effects, allowing a judge-specific spillover effect.

## Empirical specifications

The outcome $Y_{ijct}$ is a decision, vote, or text metric for case $i$ by judge $j$ in court $c$ during year $t$. The baseline difference-in-differences specification is (equation (1), p. 863):

$$Y_{ijct} = \alpha_j + \alpha_{ct} + \gamma Z^{\text{post}}_{jt} + \mathbf{X}'_{ijct}\beta + \varepsilon_{ijct}, \tag{1}$$

where $\alpha_j$ is a judge fixed effect, $\alpha_{ct}$ is a court-year fixed effect, $Z^{\text{post}}_{jt}$ is an indicator for years after judge $j$ attended the Manne program, $\mathbf{X}_{ijct}$ includes optional elastic-net-selected judge characteristics interacted with five-year time effects (predicting timing of attendance), and $\varepsilon_{ijct}$ is an error term clustered by judge. The court-year fixed effect absorbs time-varying court-level confounders including case-mix changes, since cases are quasi-randomly assigned to judges within court-year cells.

The design differs from the standard Callaway and Sant'Anna (2021) staggered DiD in that parallel trends are required in the already-treated group (not only the not-yet-treated), because many judges attend early and restricting to not-yet-treated comparators would cost too much statistical power (p. 862).

The event-study specification replaces the post-indicator with leads and lags (equation (2), p. 863):

$$Y_{ijct} = \alpha_j + \alpha_{ct} + \sum_{k \in K} \gamma_k Z^k_{jt} + \mathbf{X}'_{ijct}\beta + \varepsilon_{ijct}, \tag{2}$$

where $Z^k_{jt}$ are indicators for $k$ years before/after Manne attendance ($k \in K$, with the year before attendance and the first year of the window excluded following Borusyak, Jaravel, and Spiess (2024)). The event-study plots for each of the three main outcomes (Figures III, IV, V) show minimal pre-trends and a jump at the time of attendance.

Specific implementations by outcome:

- **Economics language (R1-R2):** Sample limited to majority-opinion authors on economics cases; circuit court level (N approx 5,261 in the short-run sample). The early-period (pre-1987) subsample isolates the heyday when classes were most oversubscribed (N=3,214).
- **Voting against regulators (R3):** Binary outcome: whether judge voted against the government in a labor or environmental agency case. Sample: ever-attenders in the event-study window (N=2,408 short run; 4,244 long run).
- **Conservative voting (R4-R5):** Binary vote direction from the Songer-Auburn database (hand-coded 5% sample of circuit court cases through 2002). Smaller N (N=804 short-run economics cases) due to the limited Songer-Auburn coverage.
- **Criminal sentencing (R6-R7):** Binary outcome: any prison sentence given. OLS. District court cases; event-study (short-run) sample 1992-2003, N=70,784; long-run sample uses all ever-attenders across all years (1992-2011), N=260,516. Sentence length analyzed separately via Poisson regression; no significant effect found (Table II cols. (3)-(4)), consistent with limited judicial discretion over length under mandatory guidelines in this period.

Observations are weighted so that judge-years count equally (reweighting by judge-year to prevent courts and years with more cases from having disproportionate influence).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Bloomberg Law circuit court opinions | ~200,000 cases (1970-2005); source of judicial opinions, three-judge panel composition, vote direction, and case topic codes | No page yet |
| TRAC district court criminal sentencing records | ~1 million cases (1992-2011); prison sentence given, sentence length in months, crime type, judge identity; event-study analysis uses 1992-2003 window | No page yet |
| Federal Judicial Center (FJC) judge biographies | Judge biographical data: appointment party, birth cohort/region, education, career history | No page yet |
| Manne Program attendance records | Hand-compiled from Butler (1999) and FOIA requests to the LEC at George Mason University; attendance year for each of ~840 ever-attending federal judges, 1976-1998 | No page yet |
| Songer-Auburn database | Hand-coded 5% sample of circuit court cases through 2002; liberal/conservative/neutral vote coding for 5% of cases | No page yet |

Sample scope: circuit courts 1970-2005 (economics language and regulatory voting); district courts 1992-2011 (criminal sentencing; event-study window 1992-2003). Judge-year is the effective unit of observation. Observations weighted to treat judge-years equally.

## When to read the full paper

Use the [original](https://doi.org/10.1093/qje/qjaf042) if you are:
- Studying how ideas and intellectual frameworks influence policy decisions;
- Interested in the history and effects of the law and economics movement on the U.S. judiciary;
- Replicating (the Online Appendix covers the complete robustness battery including never-attenders, alternative clustering, unweighted regressions, and SUTVA checks);
- Extending the analysis to other ideological training programs, other policy domains, or other countries with analogous judge training programs;
- Benchmarking text-as-data measures of ideological style against supervised alternatives.
- Extending the decision-quality evidence from Baye and Wright (2011), who show Manne-trained judges are less likely to have antitrust decisions reversed on appeal, to the full breadth of judicial outcomes studied here.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* (2026), pp. 845-887. This distillation was extracted by an LLM on 2026-06-28 and is **not human-verified or independently reproduced**.

The paper is distributed under the Creative Commons Attribution-NonCommercial License (CC BY-NC 4.0). Commercial re-use requires permission from the publisher.

> **Attribution (CC BY-NC 4.0).** Ash, Elliott, Daniel L. Chen, and Suresh Naidu.
> "Ideas Have Consequences: The Impact of Law and Economics on American Justice."
> *The Quarterly Journal of Economics* (2026), 845-887.
> DOI: 10.1093/qje/qjaf042. © 2025 The Author(s).
> Published by Oxford University Press on behalf of President and Fellows of Harvard College.
> Licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
