---
title: "Optimal Contracting with Altruistic Agents: Gaynor, Mehta & Richards-Shubik (2023)"
description: >-
  Distilled: A structural screening model estimated on 2008-2009 Medicare EPO
  claims shows that optimal nonlinear payment contracts for dialysis providers
  eliminate all medically excessive dosages and reduce spending by 12-48%, for
  aggregate gains of roughly $300 million per year. American Economic Review
  2023, paywalled. Seven core results with source locators, the model, the
  method (demand profile approach for supply contracting), and the empirical
  specifications with equations.
sidebar:
  label: Gaynor-Mehta-Richards-Shubik 2023
  order: 1
tags: [paper-summary, health-economics, optimal-contracting, mechanism-design, structural-estimation, peer-reviewed, unreplicated, data:cms-medicare]
paper:
  authors: Martin Gaynor, Nirav Mehta, Seth Richards-Shubik
  authorList:
    - { family: Gaynor, given: Martin, orcid: 0000-0002-9291-2677, affiliation: Carnegie Mellon University and NBER }
    - { family: Mehta, given: Nirav, orcid: 0000-0003-1698-836X, affiliation: University of Western Ontario }
    - { family: Richards-Shubik, given: Seth, orcid: 0000-0002-4732-0568, affiliation: Lehigh University and NBER }
  year: 2023
  venue: American Economic Review 113(6), June 2023, 1530-1571
  venueShort: AER 2023
  doi: 10.1257/aer.20210208
  jel:
    codes: [D64, D86, H51, I11, I13, J33, L21]
    assignedBy: paper
    date: 2026-06-25
  topics: ["Auction Theory and Applications", "Healthcare Policy and Management", "Experimental Behavioral Economics Studies"]
  dataAccess: proprietary-confidential
  outcome:
    - EPO dosage administered to dialysis patients
    - Medicare payments to dialysis providers
    - government welfare objective (patient health minus payments)
  outcomeClass: [firm-real-outcomes, social-welfare]
  license: "paywalled (no license block in Crossref works/10.1257/aer.20210208; AER standard copyright)"
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA publisher site, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 14
  methods:
    role: both
    contributes: demand-profile-supply-contracting
    family: structural
    buildsFrom: [principal-agent, mechanism-design, panel-regression, demand-profile-supply-contracting]
    identification: structural
  contributionType: [new-method, new-fact, measurement]
  mechanisms: [information-asymmetry, moral-hazard, agency]
  scope:
    region: US
    assetClass: dialysis provider-administered drugs (Medicare Part B EPO)
    period: 2008-01..2009-12
    frequency: monthly
    dataType: [administrative]
    granularity: [individual, firm]
    n: "919,745 claims, 74,260 patients, 5,148 providers"
  findings:
    - { ref: R1, outcome: "EPO dosage - share providing medically excessive amounts", metric: probability, value: "82%/75%/86% under observed -> 0% under optimal nonlinear (low/medium/high hematocrit, Table 5 p.1560)", direction: negative, vsBenchmark: "zero vs majority of providers under observed contract" }
    - { ref: R2, outcome: "Medicare payments to dialysis providers", metric: level, value: "$744->$388 (-48%), $541->$392 (-27%), $437->$384 (-12%) per patient per month (low/medium/high hematocrit, Table 5 p.1560)", direction: negative, vsBenchmark: "observed contract mean payments" }
    - { ref: R3, outcome: "government welfare objective (patient health minus payments)", metric: level, value: "$220/$124/$87 per patient per month gain (low/medium/high hematocrit, Table 5 p.1560)", direction: positive, vsBenchmark: "gain over observed contract" }
    - { ref: R4, outcome: "aggregate welfare gains from optimal contracting", metric: level, value: "~$300M per year (Section VI p.1563, rough approximation)", direction: positive }
    - { ref: R5, outcome: "EPO dosage response to reimbursement rate", metric: coefficient, value: "6.39 (SE 2.12) thousand units per $1/1,000u rate increase, middle hematocrit; 9.53 (SE 3.11) low; 3.92 (SE 1.89) high (Table 2 p.1552)", direction: positive }
    - { ref: R6, outcome: "losses from asymmetric information about provider types", metric: level, value: "$1,739 to $3,752 per patient per month (Section VB p.1561)", direction: negative, vsBenchmark: "full-information minus second-best government objective" }
    - { ref: R7, outcome: "EPO dosage standard deviation across providers", metric: sd-effect, value: "9.7->7.2 thousand units (-26%) medium hematocrit; 5.2->2.5 thousand units (-52%) high hematocrit (Table 5 p.1560)", direction: negative, vsBenchmark: "reduction vs observed contract" }
  resultType: new-finding
  relatesTo:
    - { cite: "Goldman, Leland, and Sibley (1984)", doi: '10.2307/2297694', relation: builds-on, note: "demand profile approach for monopoly pricing; adapted here to supply contracting with multidimensional agent heterogeneity" }
    - { cite: "Wilson (1993)", doi: '10.1093/oso/9780195068856.001.0001', relation: builds-on, note: "demand profile approach; paper shows it extends to supply contracting" }
    - { cite: "Ellis and McGuire (1986)", doi: '10.1016/0167-6296(86)90002-0', relation: builds-on, note: "altruistic physician utility model underlying the provider preference specification" }
    - { cite: "Myerson (1981)", doi: '10.1287/moor.6.1.58', relation: builds-on, note: "screening model foundations; IC-based approach used as infeasible benchmark for multidimensional case" }
    - { cite: "Maskin and Riley (1984)", doi: '10.2307/2555674', relation: builds-on, note: "multidimensional screening; motivation for demand profile approach over standard IC reduction" }
    - { cite: "Clemens and Gottlieb (2014)", relation: tests, note: "examines Medicare payment incentive effects broadly; this paper derives optimal contracts for a specific treatment" }
  openQuestions:
    - 'Applicability to other provider-administered treatments: key requirements are that decisions relate to treatment quantity (not type) and that quantity is observable (Section VI p.1564).'
    - 'Full social welfare accounting including downstream care costs (transfusions, hospitalizations) is not captured in the government objective (footnote 51 p.1559).'
    - 'Whether treating each dialysis center as an independent unit with its own type distribution is valid given large chain effects on dosing protocols (Section IVA p.1551).'
  replicationCode:
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full PDF read (pp. 1530-1571); seven results extracted from Tables 2, 4, 5 and Section VI. Not human-verified. Not reproduced. Replication package referenced on article page but not run here." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; two fixes applied: (1) JEL codes corrected from [D86, I11, I13] to the full paper-listed set [D64, D86, H51, I11, I13, J33, L21]; (2) R6 overclaim removed: 'roughly 2-3 times larger' replaced with the PDF-supported ratio of approximately 8-43 times; all other seven result rows, equations (1)-(11), and frontmatter facts confirmed correct." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20210208", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "No license[] block returned in Crossref response; AER standard copyright applies; paper classified as paywalled." }
---

**What this is.** The paper's core results, the structural model (provider utility and government objective), the method (demand profile approach for supply contracting), and the empirical specifications with equations: enough to know what it found and how, without reading all 42 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1257/aer.20210208).

## TL;DR

The paper estimates a structural screening model of health-care provider behavior using 2008-2009 Medicare claims for epoetin alfa (EPO), an expensive drug used to treat anemia in dialysis patients with end-stage renal disease. Dialysis providers are heterogeneous in their degree of altruism toward patients and their marginal costs of administering EPO, both unobservable to Medicare. Using natural variation in patient hematocrit levels and quarterly variation in national Medicare payment rates, the paper recovers the joint distribution of provider types. It then derives optimal nonlinear payment contracts using the demand profile approach of Goldman, Leland, and Sibley (1984) and Wilson (1993), which handles multidimensional heterogeneity tractably. The optimal contracts completely eliminate medically excessive dosages (present for 75-86% of providers under the observed linear contract), reduce Medicare spending by 12-48%, and improve the government's welfare objective by $87-$220 per patient per month. Aggregate gains are approximately $300 million per year. Like Clemens and Gottlieb (2014), who examine Medicare payment incentive effects broadly, this paper pushes further to derive and characterize the optimal contract for a specific treatment.

## Core results

Magnitudes as reported; `\*\*`/`\*\*\*` = 5%/1%.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Optimal nonlinear contract **eliminates medically excessive dosages** for all provider types | Table 5, p. 1560 | Share with medically excessive dosages: 82% / 75% / 86% under observed contract -> 0% / 0% / 0% under optimal nonlinear (low / medium / high hematocrit intervals); optimal linear contract reduces but does not eliminate this inefficiency (19% and 45% share remain in medium and high intervals) |
| R2 | Optimal nonlinear contract **reduces mean Medicare spending by 12-48%** | Table 5, p. 1560 | Mean monthly payments per patient: $744 -> $388 (-48%, low hematocrit); $541 -> $392 (-27%, medium); $437 -> $384 (-12%, high) |
| R3 | **Government welfare objective improves by $87-$220 per patient per month** under optimal nonlinear contract | Table 5, p. 1560 | Gains vs observed: $220 (low), $124 (medium), $87 (high) per patient per month; optimal linear achieves 70-85% of these gains but leaves medically excessive dosages in the medium and high intervals |
| R4 | **Aggregate gains from better contracting estimated at ~$300 million per year** | Section VI, p. 1563 | Rough approximation multiplying per-patient gains by patient-months; Medicare spent ~$2 billion per year on EPO during the study period |
| R5 | Providers **respond significantly to reimbursement rates**: dosage rises by 6,390 units per $1 payment rate increase | Table 2, p. 1552 | OLS reduced form: $$\beta_2$$ = 9.53 (SE 3.11), 6.39 (SE 2.12), 3.92 (SE 1.89) thousand units per $1/1,000u payment rate in low / medium / high hematocrit intervals; SEs clustered on dialysis center, 250 bootstrap replications |
| R6 | **Losses from asymmetric information** about provider types are $1,739-$3,752 per patient per month | Section VB, p. 1561 | Difference between full-information government objective and second-best achievable gains; approximately 8-43 times the gains achievable through optimal contracting ($220/$124/$87 in low/medium/high intervals), indicating costs of asymmetric information dwarf the gains from better contracting alone |
| R7 | Optimal nonlinear contract **reduces unjustified dosage variation by 26-52%** | Table 5, p. 1560 | Std dev of dosage: 9.7 -> 7.2 thousand units (-26%) for medium hematocrit; 5.2 -> 2.5 thousand units (-52%) for high; variation reduction reflects elimination of type-heterogeneity-driven overprovision |

**Overall (paper's conclusion).** The observed Medicare fee-for-service contract, which pays a constant marginal rate per EPO unit regardless of dosage, cannot be rationalized as optimal for any value of the government's health weight given the estimated structural parameters. Moving to an optimal nonlinear contract with declining marginal payments would eliminate medically excessive dosages, reduce both mean and variance of treatment amounts, and improve the government's welfare objective by hundreds of millions of dollars per year. The demand profile approach, applied here for the first time to supply contracting, is the tool used to handle the multidimensional provider heterogeneity (joint unobservability of altruism and marginal cost) that is central to this and many similar health-care payment settings.

## Theory / model

The framework is a static screening model where the government (principal) pays a dialysis provider (agent) to treat a patient with end-stage renal disease (Section II, p. 1537). The patient arrives with baseline hematocrit $$b$$ and observed characteristics $$x$$; the provider chooses EPO dosage $$a$$ (total units administered per month). All three are observable by the government because providers report them on Medicare insurance claims.

**Provider utility** (equation 1, p. 1539): the provider values patient health, weighted by altruism $$\alpha$$, less the cost $$za$$ of administering the drug, plus the government's payment $$P(a; b, x)$$:

$$
u(a;\,\alpha,z,b,x,P) \;\equiv\; \alpha\, h(a;b,x) \;-\; za \;+\; P(a;b,x). \tag{1}
$$

The provider utility specification follows the altruistic physician model of Ellis and McGuire (1986), extended here to allow heterogeneity in both altruism and costs. The health production function $$h(a; b, x)$$ is twice differentiable and strictly concave in $$a$$; it first increases then decreases in dosage. Dosages with $$h'(a; b, x) < 0$$ are "medically excessive." The provider's type $$(\alpha, z)$$ is unobserved by the government (asymmetric information): $$(\alpha, z)$$ has joint density $$f(\alpha, z)$$ on a compact support $$[\underline{\alpha}, \bar{\alpha}] \times [\underline{z}, \bar{z}]$$.

**Government objective** (equation 2, p. 1539): the government maximizes patient health (weighted by its own health preference $$\alpha_g$$) minus payments to the provider:

$$
u_g(a;\,b,x,P) \;\equiv\; \alpha_g\, h(a;b,x) \;-\; P(a;b,x). \tag{2}
$$

The government sets a potentially nonlinear payment policy $$\{P(a; b, x)\}$$ before provider types and patient health states are realized. Given $$(b, x)$$, the government maximizes the expectation of (2) over the distribution of types and their resulting treatment choices, subject to incentive compatibility (IC) and voluntary participation (VP) for each type $$(\alpha, z)$$:

$$
\max_{P \in \mathcal{P}} \int_{\alpha,z} \Bigl[\alpha_g\,h\bigl(a^*(\alpha,z;b,x,P);\,b,x\bigr) - P\bigl(a^*(\alpha,z;b,x,P);\,b,x\bigr)\Bigr]\,f(\alpha,z)\,d\alpha\,dz,
$$

subject to

$$
\text{IC:}\quad a^*(\alpha,z;b,x,P) = \arg\max_{a \geq 0}\,u(a;\alpha,z,b,x,P),\quad \forall\,\alpha,z,
$$

$$
\text{VP:}\quad u\!\bigl(a^*(\alpha,z;b,x,P);\,\alpha,z,b,x,P\bigr) \;\geq\; \underline{u},\quad \forall\,\alpha,z.
$$

**Full-information first best** (equation 3, p. 1540): under full information, the optimal treatment equates the government's marginal benefit to the agent's net marginal cost:

$$
\alpha_g\,h'(a^{*FI}(\alpha,z)) \;=\; z - \alpha\,h'(a^{*FI}(\alpha,z)). \tag{3}
$$

Altruism reduces the agent's effective marginal cost, so first-best treatment amounts are higher with altruism than without. The full-information allocation never produces medically excessive dosages (where $$h' < 0$$), because both $$\alpha$$ and $$\alpha_g$$ are positive.

## Method

The paper uses the demand profile approach of Goldman, Leland, and Sibley (1984) and Wilson (1993) to solve the optimal contracting problem with two-dimensional unobserved heterogeneity (Section IIC, p. 1541). Standard methods based on the revelation principle (Myerson (1981); Maskin and Riley (1984)) require a strict ordering of agent types so that the binding IC constraints reduce to adjacent-type comparisons; under multidimensional heterogeneity such a reduction is generally unavailable. The demand profile approach instead reformulates the government's problem in terms of setting the marginal payment for each treatment amount, and separates it into independent subproblems.

**Provider first-order condition** under any differentiable contract $$P$$ (equation 4, p. 1541): the provider equates the net marginal cost to the marginal payment:

$$
\underbrace{z - \alpha\,h'(a^*)}_{\text{nc}(a^*;\alpha,z)} \;=\; \underbrace{\dfrac{\partial P(a^*)}{\partial a}}_{p(a^*)}. \tag{4}
$$

The net marginal cost $$\text{nc}(a;\alpha,z) = z - \alpha h'(a)$$ is upward sloping in $$a$$ (since $$h'' < 0$$). If the marginal payment curve is downward sloping, each net marginal cost curve intersects it at most once from below, which is the key regularity condition for the demand profile approach.

**Demand profile** (equation 6, p. 1542): $$S(p, a)$$ is the probability (over the type distribution) that the provider supplies at least amount $$a$$ when the marginal payment at $$a$$ equals $$p$$:

$$
S(p, a) \;\equiv\; \Pr\!\bigl\{p(a) \;\geq\; z - \alpha\,h'(a)\bigr\}. \tag{6}
$$

**Decomposed government problem** (equations 5 and 7, pp. 1540-1544): because of the regularity condition and quasilinearity of provider preferences, the government's objective separates into independent maximizations, one for each treatment amount $$a \in A$$:

$$
\max_{p(a)\in\mathbb{R}}\; S(p(a),\,a)\,\bigl[\alpha_g\,h'(a) - p(a)\bigr]. \tag{7}
$$

**Optimal contract first-order condition** (equation 8, p. 1544):

$$
\frac{\partial S(p^*(a),a)}{\partial p(a)}\,\bigl[\alpha_g\,h'(a) - p^*(a)\bigr] \;=\; S(p^*(a),\,a). \tag{8}
$$

This equates the marginal benefit of raising the marginal payment (the change in the probability of provision times the government's marginal health valuation) to the marginal cost (the probability that $$a$$ is already being provided). The optimal total payment $$P^*$$ is recovered by integrating $$p^*(a)$$ over dosage. The optimal marginal payment declines toward and past the health-maximizing dosage level, ensuring that no medically excessive dosages arise in the second-best allocation (a standard no-distortion-at-the-top result holds at the highest treatment amount; all others are distorted downward).

## Empirical specifications

Estimation proceeds in three steps (Section IV, p. 1547).

**Step 1: Reduced-form OLS.** The health function is quadratic (equation 9, p. 1547):

$$
h(a;b,x) \;=\; H \;-\; \tfrac{1}{2}(\delta\,a + b - \tau'x)^2, \tag{9}
$$

where $$\delta$$ converts EPO units into hematocrit points and $$\tau'x$$ is a patient-characteristics index. Under a linear contract with constant marginal payment $$p_1$$, the provider's first-order condition (4) yields (equation 10, p. 1547):

$$
a^*(\alpha,z;b,x,P^L) \;=\; \frac{\tau'x - b}{\delta} + \frac{p_1 - z}{\alpha\,\delta^2}. \tag{10}
$$

Decomposing the marginal cost as $$z_{ik} = \mu_z + \zeta_{ik}$$ and adding an idiosyncratic shock $$\eta_{ijt}$$, the estimating equation within hematocrit interval $$k$$ is (equation 11, p. 1549):

$$
a_{ijt} \;=\; \underbrace{\!\left[\frac{-1}{\delta_k}\right]\!}_{\beta_1^k}\! b_{jt} \;+\; \underbrace{\!\left[\frac{1}{\alpha_{ik}\delta_k^2}\right]\!}_{\beta_2^k}\![p_{1t} - \mu_z] \;+\; \underbrace{\!\frac{\tau_k'}{\delta_k}\!}_{\beta_3^k}\! x_{jt} \;+\; \underbrace{\!\left[\frac{-\zeta_{ik}}{\alpha_{ik}\delta_k^2}\right]\!}_{\nu_i^k} \;+\; \eta_{ijt}. \tag{11}
$$

This is estimated by OLS separately within each of three hematocrit intervals ($$b \in (30, 33]$$, $$(33, 36]$$, $$(36, 39]$$). The regression includes age, sex, CCI indicators, and month and year dummies. Standard errors are clustered on dialysis center (250 bootstrap replications). Identification rests on: (i) natural month-to-month variation in patient hematocrit $$b_{jt}$$ (not manipulated by providers), which identifies $$\beta_1^k$$; and (ii) quarterly variation in the national Medicare payment rate $$p_{1t}$$, set by an administrative formula (106% of average sales price lagged six months) that no individual facility influences, which identifies $$\beta_2^k$$. The mean marginal cost $$\mu_z = \$8.58$$ per 1,000 units is set externally from facility cost reports (acquisition cost $7.53 + administration cost $1.05).

**Step 2: Structural parameter recovery.** Structural parameters $$\delta_k$$, $$\tau_k$$, and the joint distribution $$F_k(\alpha, z)$$ are recovered analytically from the reduced-form moments within each hematocrit interval. The joint distribution of $$(\ln\alpha, z)$$ is bivariate normal with four unknown parameters per interval. Using Stein's lemma and properties of the log-normal distribution, these are identified from the first and second moments of the random coefficient $$\beta_2^k$$ and random effect $$\nu^k$$ in equation (11), estimated via a semiparametric auxiliary regression of the residuals (Section IVB, p. 1549-1550; Online Appendix F for full details).

**Step 3: Optimal contract construction.** The government's health weight $$\alpha_g = 52.6$$ is calibrated from a statistical life year value and EPO dose-response estimates from clinical trials (Online Appendix G.2). Type distributions are truncated at the 0.5th and 99.5th percentiles to ensure compact support. The demand profile $$S(p, a)$$ is computed from the estimated distributions; optimal marginal payments $$p^*(a)$$ are solved numerically from equation (8) for each treatment amount and hematocrit interval and integrated to obtain $$P^*$$. The paper verifies that the regularity condition (no provider type has a net marginal cost curve with multiple intersections with the optimal marginal payment curve) holds in the estimated model (Online Appendix I).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Medicare outpatient claims (CMS 2008-2009b, 20% sample) | Primary estimation data: monthly EPO dosages, baseline hematocrit, patient demographics (age, sex), Charlson Comorbidity Index, payment rates; 919,745 claims after exclusions | No page yet |
| Renal Dialysis Facilities Cost Report Data (CMS 2008-2009a) | Annual per-facility EPO acquisition costs used to set mean marginal cost $$\mu_z$$; publicly available from CMS | No page yet |
| Medicare Part B ASP Drug Pricing Files (CMS 2008, 2009) | National quarterly payment limits for EPO (the source of payment rate variation); public administrative data | No page yet |
| Medicare Beneficiary Summary File (MedPAR; CMS 2007-2009a) | Patient age and sex, linked to claims | No page yet |

Sample: January 2008 to December 2009 (monthly, US). Final sample restricts to patients with hematocrit in 30-39 percent range: 919,745 claims, 74,260 unique patients, 5,148 dialysis providers.

## When to read the full paper

Read the [original](https://doi.org/10.1257/aer.20210208) if you are:
designing optimal nonlinear payment contracts for provider-administered drugs or any supply-contracting problem with multidimensional unobserved agent heterogeneity;
applying the demand profile approach beyond its original monopoly-pricing context;
estimating structural models of provider behavior with altruism, including the identification argument and semiparametric moment-recovery details (Section IVB and Online Appendices E, F);
or studying the welfare costs of asymmetric information in health-care reimbursement. The locators above point to the exact tables and figures.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(6), June 2023. This distillation was extracted by an LLM on 2026-06-25 and is **not human-verified or independently reproduced**. The paper is paywalled; only text extracts are reproduced here under extract-only terms.

> Gaynor, Martin, Nirav Mehta, and Seth Richards-Shubik. "Optimal Contracting with Altruistic Agents: Medicare Payments for Dialysis Drugs." *American Economic Review* 113, no. 6 (June 2023): 1530-1571. DOI: 10.1257/aer.20210208.
