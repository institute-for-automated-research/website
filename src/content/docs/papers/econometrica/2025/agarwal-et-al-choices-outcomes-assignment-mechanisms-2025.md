---
title: "Choices and Outcomes in Assignment Mechanisms: Agarwal, Hodgson & Somaini (2025)"
description: >-
  Distilled: Using quasi-experimental variation in deceased donor kidney offers and a
  scarcity instrument, this paper identifies a joint model of patient acceptance
  decisions and survival outcomes, finding the kidney waitlist mechanism achieves an
  average LYFT of 9.29 years (1.75 years above random assignment) while the maximum
  possible is 14.08 years, exposing a planner's dilemma between efficiency and
  prioritizing the sickest. Econometrica 2025, paywalled. Seven core results with
  source locators, the assignment-outcomes joint model, and the defining equations.
sidebar:
  label: Agarwal-Hodgson-Somaini 2025
  order: 1
tags: [paper-summary, mechanism-design, market-design, health-economics, organ-allocation,
       structural, peer-reviewed, unreplicated, data:optn]
paper:
  authors: Nikhil Agarwal, Charles Hodgson, Paulo Somaini
  authorList:
    - { family: Agarwal, given: Nikhil, orcid: "0000-0003-2106-6175", affiliation: MIT and NBER }
    - { family: Hodgson, given: Charles, affiliation: Yale University and NBER }
    - { family: Somaini, given: Paulo, orcid: "0000-0001-9485-1866", affiliation: Stanford Graduate School of Business and NBER }
  year: 2025
  venue: Econometrica 93(2), March 2025, 395-438
  venueShort: Econometrica 2025
  doi: 10.3982/ECTA20203
  jel:
    codes: [D47, I11, C51]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Organ Donation and Transplantation", "Global Maternal and Child Health", "Renal Transplantation Outcomes and Treatments"]
  dataAccess: proprietary-confidential
  outcome:
    - life-years from transplantation (LYFT) under observed and counterfactual kidney assignments
    - patient survival with and without a deceased donor kidney transplant
    - patient acceptance decisions for sequentially arriving organ offers
  outcomeClass: [labor-careers-health, social-welfare]
  license: "paywalled (Econometric Society; no CC licence found in Crossref metadata, verified 2026-06-26)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (Econometric Society site, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 4
  methods:
    role: both
    contributes: assignment-outcomes-joint-model
    family: structural
    buildsFrom: [instrumental-variables, survival-analysis, gibbs-mcmc-estimation]
    identification: instrument
  contributionType: [new-method, new-fact, measurement]
  mechanisms: [information-asymmetry]
  scope:
    region: US
    assetClass: deceased donor kidneys (ESRD patient waitlist)
    period: 2000-01..2020-02
    frequency: mixed
    dataType: [administrative]
    granularity: [individual, transaction]
    n: "175,640 patients registered 2000-2010; survival tracked through Feb 29, 2020"
  findings:
    - { ref: R1, outcome: "life-years from transplantation (LYFT) under realized assignment", metric: level, value: "9.29 years average (2005 cohort)", direction: positive, vsBenchmark: "random assignment = 7.54 years (+1.75 years above random)" }
    - { ref: R2, outcome: "LYFT attributable to patient choice vs priority rules alone", metric: level, value: "no-choice assignment LYFT = 8.05 years; choice accounts for 70.4% of LYFT gain over random", direction: positive, vsBenchmark: "realized 9.29 vs no-choice 8.05 vs random 7.54" }
    - { ref: R3, outcome: "maximum achievable LYFT under optimal planner assignment", metric: level, value: "14.08 years; realized is 4.8 years below the maximum", direction: positive, vsBenchmark: "4.8 years above realized (9.29); optimal rematching of transplanted = 9.93 (13.4% of gap)" }
    - { ref: R4, outcome: "LYFT under optimal assignment using observables only", metric: level, value: "11.04 years; 1.8 years above realized assignment", direction: positive, vsBenchmark: "1.8 years above realized (9.29); 3.0 years below full-information optimal (14.08)" }
    - { ref: R5, outcome: "average LYFT from preferred spec vs observational model", metric: level, value: "preferred specification (with unobservables) = 8.93 years; no-instruments observational = 8.25 years", direction: positive, vsBenchmark: "observational model understates LYFT by 0.68 years vs preferred specification (Table VII)" }
    - { ref: R6, outcome: "positive selection on unobservables into transplantation", metric: correlation, value: "1-SD rise in selectivity raises untransplanted survival 0.316 SD (s.e. 0.062); lowers acceptance 4.0 pp (s.e. 0.001)", direction: positive, vsBenchmark: "transplanted patients' predicted LYFT distribution shifted ~1.1 years right vs full distribution (Figure 2b)" }
    - { ref: R7, outcome: "LYFT variance decomposition into patient, donor, and match components", metric: sd-effect, value: "patient-specific SD = 3.26 years; donor-specific = 0.99 years; match-specific = 0.41 years", direction: positive, vsBenchmark: "patient heterogeneity dominates; rematching alone captures only 13.4% of maximum possible LYFT gain" }
  resultType: new-finding
  relatesTo:
    - { cite: "Wolfe et al. (2008)", relation: extends, note: "prior observational LYFT estimates using hazard ratios; this paper improves with quasi-experimental variation and finds ~1 year upward revision in average LYFT" }
    - { cite: "Heckman and Navarro (2007)", relation: builds-on, note: "framework for jointly identifying outcome distributions conditional on selection unobservables using a continuous instrument to trace out selectivity" }
    - { cite: "Imbens and Angrist (1994)", relation: builds-on, note: "LATE identification arguments extended in Lemma 1 to the sequential organ-offer setting" }
    - { cite: "Roth and Sotomayor (1992)", relation: builds-on, note: "foundational preference-based mechanism design welfare standard that this paper departs from in favor of outcome-based evaluation" }
    - { cite: "Abdulkadiroglu and Sonmez (2003)", relation: builds-on, note: "school choice mechanism design; cited as the canonical preference-welfare approach this paper moves beyond by focusing on realized survival outcomes" }
  openQuestions:
    - "Microfounding the choice model for evaluating equilibria of alternative mechanisms rather than fixed-assignment benchmarks -- left to future work (p. 429)."
    - "Formalizing distributional and non-utilitarian ethical considerations (prioritarianism for the sickest, inequality in remaining life-years) into a formal planner's objective (p. 429)."
    - "Extending the framework to dynamic equilibrium counterfactuals in which patients respond strategically to mechanism changes (footnote 4, p. 397)."
  replicationCode: { status: available }
  proposedVocab:
    - { axis: method, term: assignment-outcomes-joint-model, def: "Joint structural model for sequential assignment mechanisms combining a latent-index accept/reject decision equation and separate Box-Cox survival outcome equations for unassigned and assigned states; identified by variation in offer sequences plus a continuous choice shifter (scarcity) to trace selection on unobservables.", aliases: [generalized-roy-assignment-mechanism, assignment-mechanism-outcome-model] }
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-26", role: extracted, note: "Full PDF read (pp. 395-438); results, model equations, instruments, and empirical specifications extracted. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; fixed 3 errors: Table III SE clustering was 'offer year' (PDF says 'registration year'); diabetic half-life example had 3.58 assigned to Panel A (without transplant) when PDF p. 419 says 3.58 is Panel B (with transplant) and 1.45 is Panel A; R2 Magnitude column '70.9%' corrected to PDF-stated 70.4% (p. 426). All 7 core result magnitudes confirmed against Figure 4 (p. 425) and Table VII (p. 421); all equations (3.1-3.3, 5.1-5.7, 7.1) verified term-by-term against PDF." }
  licenceVerification:
    - { source: "Crossref REST API works/10.3982/ECTA20203", checked: "2026-06-26", by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] block present; Econometric Society; access is paywalled; no CC licence identified." }
---

**What this is.** The paper's core results, the structural model it estimates (joint decisions and survival outcomes), and the two-instrument identification strategy with the defining equations: enough to know what it found and how, without reading all 44 pages. To replicate or extend, read the full source at the [original](https://doi.org/10.3982/ECTA20203).

## TL;DR

The paper evaluates the deceased donor kidney allocation mechanism by estimating patient Life-Years from Transplantation (LYFT), defined as the gain in median survival from receiving a transplant. The current observational standard (Wolfe et al. (2008)) relies on hazard-ratio comparisons that cannot account for selection on unobservables. This paper uses two quasi-experimental instruments: (1) random variation in the sequence of organ offers made to each patient, and (2) a scarcity measure (number of donors or offers in the patient's Donor Service Area) that shifts acceptance decisions but is excluded from survival outcomes. These instruments identify a joint structural model of accept/reject decisions and post-transplant and untransplanted survival.

The canonical mechanism design literature, following Roth and Sotomayor (1992), and its school choice applications, such as Abdulkadiroglu and Sonmez (2003), evaluate mechanisms based on revealed agent preferences. This paper takes a different approach: it evaluates the kidney allocation mechanism based on a downstream outcome (patient survival), because policymakers and transplantation communities focus on survival rather than preference satisfaction.

Applied to 175,640 patients on the US kidney waitlist (2000-2010), the preferred estimates find that the realized allocation achieves an average LYFT of 9.29 years among patients registered in 2005, 1.75 years above a random assignment benchmark. Most of this gain is driven by patient choice rather than priority rules: removing patient choice while keeping priority rules yields a LYFT of only 8.05 years. The maximum achievable LYFT is 14.08 years, but reaching it requires systematically transplanting healthier patients with longer expected untransplanted survival, creating a sharp conflict with prioritarianism for the sickest.

## Core results

Magnitudes are as reported; locators point into the source PDF. The 2005 cohort results (R1-R4) are from Figure 4 (p. 425); the preferred-spec LYFT (R5) is from Table VII (p. 421).

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Realized assignment achieves average LYFT of **9.29 years**, 1.75 years above random | Figure 4, p. 425 | Realized = 9.29; random = 7.54; difference = +1.75 years |
| R2 | **Patient choice drives 70.4% of the LYFT gain** over random assignment; priority rules alone (no-choice) achieve only 8.05 | Figure 4, p. 425 | No-choice LYFT = 8.05; realized = 9.29; random = 7.54; choice share = 70.4% (PDF text, p. 426; no-choice achieves 29.6% of the gain over random) |
| R3 | **Maximum possible LYFT = 14.08 years**, 4.8 years above realized; optimal rematching of transplanted yields only 9.93 (13.4% of the gap) | Figure 4, p. 425 | Optimal = 14.08; realized = 9.29; optimal rematching = 9.93; patient-selection dominates |
| R4 | Observables-only optimal assignment reaches **11.04 years**, 1.8 years above realized and 3.0 below full-information optimal | Figure 4, p. 425 | Observables optimum = 11.04; full optimal = 14.08; realized = 9.29 |
| R5 | Preferred specification (instruments + unobservables) LYFT = **8.93 years**; observational model (no instruments) = 8.25, a 0.68-year underestimate | Table VII, col 1-2, p. 421 | Preferred = 8.93 (s.e. 0.12); no-instruments = 8.25 (s.e. 0.07); positive selection on unobservables biases the observational estimate downward |
| R6 | **Positive selection on unobservables**: 1-SD rise in patient selectivity reduces acceptance by 4.0 pp and raises untransplanted survival by 0.316 SD | Table VI, p. 420; Figure 2b, p. 422 | Acceptance effect: -0.040 (s.e. 0.001); untransplanted survival: +0.316 SD (s.e. 0.062); transplanted patients' predicted LYFT distribution shifted ~1.1 years right vs full distribution |
| R7 | **Patient heterogeneity dominates LYFT variance**: patient-specific SD = 3.26 years; donor-specific = 0.99 years; match-specific = 0.41 years | p. 423 | Variance decomposition of LYFT: patient component = 3.26 yr SD vs donor = 0.99 yr vs match = 0.41 yr; rematching alone captures only 13.4% of maximum gain |

**Overall (paper's conclusion).** The mechanism outperforms random assignment primarily through patient choice and selection, not priority rules or patient-kidney matching. However, meaningful gains in average LYFT require changing which patients are transplanted, not only to whom they are matched, creating a dilemma for policymakers who also wish to prioritize the sickest patients. Observational methods that do not account for selection on unobservables underestimate both LYFT and the potential gains from improved allocation.

## Theory / model

The model generalizes the Roy selection framework to a sequential assignment setting in which agents (patients, indexed $$i$$) receive offers for heterogeneous objects (organs, indexed $$j$$) arriving sequentially and make accept-or-reject decisions.

**Unassigned outcome** (eq. 3.1, p. 404): survival if patient $$i$$ never receives a transplant,

$$
Y_{i,0} = g_0(x_i, \nu_{i,0}), \tag{3.1}
$$

where $$x_i \in \mathbb{R}^{d_x}$$ are patient observables and $$\nu_{i,0} \in \mathbb{R}$$ is a patient-specific unobservable (frailty).

**Assignment outcome** (eq. 3.2, p. 404): survival if patient $$i$$ is transplanted organ $$j$$,

$$
Y_{i,j} = g_1(q_j, x_i, \nu_{i,1}, \varepsilon_{i,j,1}), \tag{3.2}
$$

where $$q_j \in \mathbb{R}^{d_q}$$ are organ-type observables, $$\nu_{i,1}$$ is a patient-specific post-transplant unobservable, and $$\varepsilon_{i,j,1}$$ is a match-specific shock.

**Decision equation** (eq. 3.3, p. 405): patient accepts organ $$j$$ if

$$
D_{i,j} = g_D(q_j, x_i, z_i, \nu_{i,D}, \varepsilon_{i,j,D}) = 1, \tag{3.3}
$$

where $$z_i \in \mathbb{R}^{d_z}$$ is the scarcity instrument (excluded from outcome equations), $$\nu_{i,D}$$ is unobserved selectivity, and $$\varepsilon_{i,j,D}$$ is a match-specific preference shock.

Patient $$i$$ is transplanted organ $$j$$ if $$T_{i,j} = 1\{A_i \ge t_{i,j}\} \prod_{j' < j, j' \in J_i} (1 - D_{i,j'}) D_{i,j} = 1$$, i.e., she is alive when the organ arrives, rejects all prior offers, and accepts this one. The observed outcome is then

$$
Y_i = \sum_{j \in J_i} T_{i,j} Y_{i,j} + \Bigl(1 - \sum_{j \in J_i} T_{i,j}\Bigr) Y_{i,0}.
$$

**Key assumptions** (pp. 406-407):

Assumption 1: $$\varepsilon_i$$, $$\nu_i$$, and $$z_i$$ are mutually independent conditional on $$x_i$$ (the scarcity instrument is excludable).

Assumption 2: The potential offer sequence $$J_i$$ is conditionally independent of $$(\nu_i, \varepsilon_i)$$ given $$(x_i, z_i)$$ (organ arrivals are random conditional on patient priority type and geography).

**LYFT** (eq. 7.1, p. 421) for patient-organ pair $$(i, j)$$ conditional on covariates $$I_{i,j} = \{x_i, q_j, D_{i,j}, \eta_j, \nu_{i,D}, \nu_{i,f}\}$$:

$$
\text{LYFT}(I_{i,j}) = M(Y_{i,j} \mid I_{i,j},\, Y_{i,0} \ge t_{i,j}) - M(Y_{i,0} \mid I_{i,j},\, Y_{i,0} \ge t_{i,j}), \tag{7.1}
$$

where $$M(Y \mid X)$$ denotes the median of $$Y$$ given $$X$$ and $$t_{i,j}$$ is the time elapsed between patient registration and organ arrival. This conditions on the patient being alive at the time of the offer and accounts for selection on both patient observables and unobservables.

## Method

Identification proceeds in three steps building on Heckman and Navarro (2007) and Imbens and Angrist (1994).

**Lemma 1** (p. 411) uses variation in the offer sequence $$J_i$$. Let $$N_i = \min\{n : D_{i,j(i,n)} = 1\}$$ be the number of offers rejected before first acceptance. For a patient with priority type $$x_i$$ and scarcity $$z_i$$, comparing patients who received offer-type sequences $$(q_{j(i,1)}, \ldots, q_{j(i,n)})$$ vs $$(q_{j(i,1)}, \ldots, q_{j(i,n-1)})$$ identifies the marginal distributions of $$Y_{i,j(i,n)}$$ and $$Y_{i,0}$$ conditional on $$N_i = n$$. This is a standard LATE argument (Imbens and Angrist (1994)) extended to the sequential setting.

**Lemma 2** (p. 413) shows that offer-sequence variation identifies the choice function $$g_D(\cdot)$$ via its Fourier-Legendre approximation. The key quantity is the moment generating structure: for a sequence $$q_j^n$$ of $$n$$ identical organ-type offers and $$k \le n$$,

$$
P(N_i > k \mid q_j^n, z) = \int_0^1 \varepsilon_D^k \,\mathrm{d}v(\varepsilon_D;\, q_j, z), \tag{5.1}
$$

where $$v(\varepsilon_D; q_j, z)$$ is the CDF of rejection probabilities across patients given organ type $$q_j$$ and scarcity $$z$$. These moments identify the $$(n-1)$$-th order Fourier-Legendre approximation of $$v(\cdot; q_j, z)$$, which converges in Cesaro mean to the true CDF.

**Theorem 1** (p. 414) combines the offer instrument and the scarcity instrument $$z_i$$ to identify the expected outcomes conditional on the selection unobservables $$\nu_{i,D}$$ and $$\varepsilon_{i,j,D}$$. The scarcity instrument "traces out" the selectivity unobservable via (eq. 5.2, p. 414):

$$
E\!\left[Y_{i,0} \times 1\{T_i = 0\} \mid q_j^k, z_i\right] = \int_0^1 E\!\left[Y_{i,0} \mid \nu_D = v(\varepsilon_D;\, z_i, q_i)\right] \varepsilon_D^k \,\mathrm{d}v(\varepsilon_D;\, z_i, q_i). \tag{5.2}
$$

**Estimation** uses a parameterized Box-Cox version of equations (3.1)-(3.3), estimated by Gibbs sampling (McCulloch and Rossi (1994)) (eqs. 5.3-5.7, pp. 415-416). Let $$B(Y; \rho) = (Y^\rho - 1)/\rho$$ denote the Box-Cox transformation (Box and Cox (1964)):

$$
y_{i,0} = B(Y_{i,0};\, \rho_0) = x_i \beta_x + \nu_{i,0}, \tag{5.3}
$$

$$
y_{i,j} = B(Y_{i,j};\, \rho_1) = \chi(x_i, q_j)\alpha_{x,q} + \alpha_\eta \eta_j + \nu_{i,1} + \varepsilon_{i,j,1}, \tag{5.4}
$$

$$
D_{i,j} = 1\!\left\{\chi(x_i, q_j)\gamma_{x,q} + z_i \gamma_z + \eta_j - \nu_{i,D} + \varepsilon_{i,j,D} > 0\right\}, \tag{5.5}
$$

where $$\eta_j \sim N(0, \sigma_\eta^2)$$ captures unobserved organ-level quality and $$\chi(x_i, q_j)$$ is a flexible function of patient and donor characteristics. The unobservables follow the factor structure (eqs. 5.6-5.7, p. 415):

$$
\nu_{i,1} = \delta_{1,D}\, \nu_{i,D} + \nu_{i,f}, \quad \nu_{i,0} = \delta_{0,D}\, \nu_{i,D} + \delta_{0,f}\, \nu_{i,f} + \tilde{\nu}_{i,0}, \tag{5.6-5.7}
$$

where $$\nu_{i,D}$$, $$\nu_{i,f}$$, and $$\tilde{\nu}_{i,0}$$ are independently distributed mean-zero normals. This factor structure allows selectivity into transplantation ($$\nu_{i,D}$$) to be correlated with both post-transplant and untransplanted survival. The Gibbs sampler (Geweke, Gowrisankaran, and Town (2003)) draws sequentially from conditional posteriors; by the Bernstein-von Mises theorem this is interpreted as maximum likelihood. Monte Carlo simulations on 100 data sets with 10,000 patients and 2,500 donors confirm good coverage and convergence (footnote 23, p. 416).

## Empirical specifications

**First stage: offer instrument** (Table III, p. 409). A linear probability model for whether a transplant occurs and its type, as a function of the number of "desirable" donors available in the two years following registration:

$$
\text{Transplant}_{i} = \alpha \log(1 + \#\text{top-10 offers in 2 years}) + x_i \gamma + \text{DSA FE} + \text{year FE} + \text{blood-type FE} + e_i.
$$

Coefficients: 0.0479 (s.e. 0.0046) for KDPI $$\le 50\%$$ organs (column 1). F-statistics range from 142.6 to 162.7 across columns, far above the conventional threshold of 10. Sample: N = 132,507 non-pediatric patients registered 2000-2008.

**First stage: scarcity instruments** (Table IV, p. 410). A linear probability model for whether patient $$i$$ accepts an offer from donor $$j$$:

$$
\text{Accept}_{ij} = \alpha_1 \log(1 + \#\text{donors}) + \alpha_2 \log(1 + \#\text{offers}) + x_i \gamma + w_j \psi + m_{ij} \delta + \text{FE} + e_{ij}.
$$

The number of donors has coefficient $$-0.0434$$ (s.e. 0.00209) and the number of offers $$-0.039$$ (s.e. 0.00106) in columns 1-2. F-statistics range from 296.8 to 1,361.8 across specifications. The instruments remain significant and of similar magnitude after adding patient characteristics (columns 3-4), donor characteristics (columns 5-6), and match characteristics (columns 7-8). Sample: N = 851,753-863,073 offers from the first 100 donors per patient, registered 2000-2009.

Standard errors are clustered by DSA, registration year, and blood type in Table III; by DSA, offer year, years waited at offer, and blood type in Table IV.

**Survival and choice estimates** (Table V, p. 417-418). The structural model is estimated across three specifications: (1) observational (no instruments, $$\nu_{i,D}$$ independent of $$\nu_{i,0}$$ and $$\nu_{i,1}$$), (2) preferred (scarcity instrument = number of past donors), and (3) robustness (past offers instrument). Marginal half-life effects are reported for a 1-SD increase in continuous characteristics. Diabetic patients have a shorter half-life by 3.58 years with a transplant (Panel B) and 1.45 years without a transplant (Panel A; PDF p. 419). Positive tissue-type matching raises post-transplant half-life substantially (Panel B). Selectivity raises untransplanted survival by 0.316 SD per 1-SD increase in $$\nu_{i,D}$$ (Table VI, Panel A, p. 420).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| OPTN Potential Transplant Recipient (PTR) dataset | All organ offers made to each waitlisted patient and each patient's accept/reject decision; match characteristics including HLA mismatches | no page yet |
| OPTN Standard Transplantation Analysis and Research (STAR) dataset | Deceased donor characteristics, patient histories, transplant outcomes, annual follow-up data, patient survival (death dates merged from Social Security records) | no page yet |

Sample: 175,640 patients registered January 1, 2000 through December 31, 2010, excluding pediatric patients and those needing multiple organs or a living donor. Data on approximately 6,195 donors per year and 15,967 new patients per year. Survival tracked through February 29, 2020 (up to 20 years and 2 months from registration).

Both datasets are supplied by UNOS as contractor for OPTN. Access requires a data use agreement with OPTN (https://optn.transplant.hrsa.gov/data/request-data/); data are proprietary-confidential.

## When to read the full paper

Use the [original](https://doi.org/10.3982/ECTA20203) if you are:
- Extending the identification framework to other assignment settings (public housing, school choice, gig-economy jobs) where agents face sequentially arriving heterogeneous objects and outcomes depend on the match;
- Evaluating the distributional consequences of alternative kidney allocation policies, particularly the trade-off between LYFT maximization and prioritizing the sickest (Table VIII, p. 427);
- Replicating the Gibbs sampler estimation of the joint model (replication code available; footnote 23, p. 416);
- Building on the identification results (Lemmas 1-2, Theorem 1) for settings with multiple unobserved dimensions of heterogeneity in both choices and outcomes.

The variance decomposition (patient vs donor vs match, p. 423) and the planner's dilemma (Figure 4, p. 425; Table VIII, p. 427) are the most directly policy-relevant sections.

## Attribution and rights

Source: peer-reviewed, *Econometrica* 93(2), March 2025. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The paper is paywalled; only text extraction is permitted here.

> Agarwal, Nikhil, Charles Hodgson, and Paulo Somaini.
> "Choices and Outcomes in Assignment Mechanisms: The Allocation of Deceased Donor Kidneys."
> *Econometrica* 93, no. 2 (March 2025): 395-438.
> DOI: 10.3982/ECTA20203. (c) 2025 The Econometric Society.
> Extract-only; full text at the [Econometric Society](https://doi.org/10.3982/ECTA20203).
