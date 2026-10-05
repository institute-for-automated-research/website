---
title: "Colluding against Workers: Delabastita & Rubens (2025)"
description: >-
  Distilled: proposes a new identification approach for employer collusion
  in labor markets using production and cost data, applied to 227 Belgian
  coal firms 1845-1913. The 1897 coal cartel explains the entire post-1900
  surge in wage markdowns and depressed wages and employment by 6%-17%
  relative to pre-cartel conduct. Journal of Political Economy 2025,
  paywalled. Fifteen core results with source locators, datasets used, the
  structural model, and the method with its defining equations.
sidebar:
  label: Delabastita-Rubens 2025
  order: 1
tags: [paper-summary, labor-markets, monopsony, wage-markdowns, employer-collusion,
       economic-history, industrial-organization, structural, panel-regression,
       peer-reviewed, unreplicated]
paper:
  authors: Vincent Delabastita, Michael Rubens
  authorList:
    - { family: Delabastita, given: Vincent, orcid: 0000-0002-4187-5220, affiliation: Radboud University Nijmegen }
    - { family: Rubens, given: Michael, affiliation: University of California, Los Angeles }
  year: 2025
  venue: Journal of Political Economy 133(6), June 2025, 1796-1839
  venueShort: J. Pol. Econ. 2025
  doi: 10.1086/734780
  jel:
    codes: [J42, L41, N33]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ['Global trade, sustainability, and social impact', 'Employment and Welfare Studies', 'Global trade and economics']
  dataAccess: public
  outcome:
    - wage markdown (ratio of MRPL to wage)
    - market-level inverse labor supply elasticity
    - coal price markup and joint markup
    - equilibrium wages
    - equilibrium employment
    - employer collusion index
  outcomeClass: [labor-careers-health]
  license: "All rights reserved. Published by The University of Chicago Press. Copyright 2025 The University of Chicago."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (University of Chicago Press, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 15
  citedByCount: 6
  methods:
    role: both
    contributes: collusion-identification-production-cost
    family: structural
    buildsFrom: [gmm, panel-regression, instrumental-variables]
    identification: structural
  contributionType: [new-method, new-fact, new-data]
  mechanisms: [market-power, employer-collusion]
  introducesData: true
  scope:
    region: Belgium (Liege and Namur provinces)
    assetClass: coal mining
    period: 1845-01..1913-12
    frequency: annual
    dataType: [accounting, administrative]
    granularity: [firm]
    n: "227 coal mining concessions; 8,779 underlying firm-year records, with estimation samples from 4,005 (preferred GMM) to 4,705 (largest Table 2 regression)"
  findings:
    - { ref: R1, outcome: "wage markdown (ratio of MRPL to wage)", metric: level, value: "1.680 median (SE 0.450); 1.828 average (SE 0.491); implies wages ~40% below MRPL at median firm", direction: positive, vsBenchmark: "competitive benchmark of 1.0" }
    - { ref: R2, outcome: "wage markdown", metric: coefficient, value: "0.112 (SE 0.052) log-markdown premium for employers' association members", direction: positive }
    - { ref: R3, outcome: "wage markdown", metric: coefficient, value: "pre-1897 assoc. premium 0.132 (SE 0.042); post-1897 assoc. premium -0.058 (SE 0.091)", direction: mixed, vsBenchmark: "employers' association premium disappears after cartel formation" }
    - { ref: R5, outcome: "equilibrium wages and employment", metric: pp-effect, value: "-5.9% wages and -5.9% employment vs pre-1898 conduct (exogenous coal prices)", direction: negative, vsBenchmark: "pre-1898 observed conduct" }
    - { ref: R6, outcome: "equilibrium wages and employment", metric: pp-effect, value: "-10.3% wages and -10.2% employment vs Cournot competition (exogenous coal prices)", direction: negative, vsBenchmark: "Cournot competition baseline" }
    - { ref: R7, outcome: "equilibrium wages, employment, coal output and price", metric: pp-effect, value: "vs pre-1898: -16.7% wages, -16.6% employment, -19.5% output, +10.0% price; vs Cournot: -25.1%, -24.9%, -28.3%, +17.4%", direction: mixed, vsBenchmark: "Cournot / pre-1898 conduct, endogenous coal prices" }
    - { ref: R8, outcome: "production-function output elasticities", metric: coefficient, value: "GMM free-RTS production estimates: beta_l = 0.699 (SE 0.327), beta_m = 0.222 (SE 0.138), beta_k = 0.153 (SE 0.075), rho = 0.866 (SE 0.198); Hansen J = 2.34, p = 0.126; 4,005 firm-years", direction: positive, vsBenchmark: "overidentifying restrictions not rejected" }
    - { ref: R9, outcome: "market-level inverse labor supply elasticity", metric: coefficient, value: "IV Psi_l = 1.009 (SE 0.265); first-stage F = 462; Hansen J = 5.92, p = 0.014; 1,990 municipality-years", direction: positive }
    - { ref: R10, outcome: "coal price markup and joint markup", metric: level, value: "Median joint markup = 1.44, mean = 1.58; joint markup below zero for 13% of observations", direction: mixed, vsBenchmark: "coal price markup below 1; joint markup above 1 at median and mean" }
    - { ref: R11, outcome: "wage markdown (ratio of MRPL to wage)", metric: coefficient, value: "Cartel-member coefficient = 0.080 (SE 0.041) in log markdown", direction: positive, vsBenchmark: "nonmembers" }
    - { ref: R12, outcome: "wage markdown (ratio of MRPL to wage)", metric: coefficient, value: "Relative to 1845-1859: 1855-1865 = -0.021 (SE 0.039); 1865-1875 = -0.020 (SE 0.038); 1875-1885 = 0.059 (SE 0.045); 1885-1895 = 0.108 (SE 0.047); 1895-1905 = 0.196 (SE 0.045); 1905-1915 = 0.422 (SE 0.054)", direction: mixed, vsBenchmark: "1845-1859 reference period" }
    - { ref: R13, outcome: "wage markdown (ratio of MRPL to wage)", metric: coefficient, value: "Noncartel log labor-share slope: 0.037 (SE 0.000) no FE, 0.053 (SE 0.005) market FE, 0.065 (SE 0.005) market-by-year FE; R2 = 0.561 in market-by-year specification", direction: positive }
    - { ref: R14, outcome: "wage markdown (ratio of MRPL to wage)", metric: coefficient, value: "Cartel log labor-share slope: 0.043 (SE 0.001) no FE, 0.008 (SE 0.002) market FE, -0.004 (SE 0.002) market-by-year FE; R2 = 0.793 in market-by-year specification", direction: mixed, vsBenchmark: "slope near zero with market-by-year FE, unlike noncartel firms" }
    - { ref: R15, outcome: "employer collusion index", metric: level, value: "With RTS fixed at 1.05, zero collusion is rejected at 10% from 1908; the unrestricted model rejects from 1901 except 1903; Figure 4B reports 10%-90% bootstrap intervals (200 draws)", direction: positive, vsBenchmark: "unrestricted production model" }
  resultType: new-finding
  relatesTo:
    - { cite: "De Loecker and Warzynski (2012)", doi: '10.1257/aer.102.6.2437', relation: builds-on, note: "markup identification from production function, extended here to factor markets and labor conduct" }
    - { cite: "Bresnahan (1987)", doi: '10.2307/2098583', relation: builds-on, note: "conduct parameter identification in industrial organization; their demand-side approach is complemented by the supply-side approach here" }
    - { cite: "De Loecker and Scott (2016)", relation: builds-on, note: "similar comparison of markup bounds for goods price markups without imposing conduct, providing the template for the factor-market analog" }
    - { cite: "Olley and Pakes (1996)", relation: builds-on, note: "timing assumptions used for production function identification; labor and materials static, capital dynamic" }
    - { cite: "Naidu, Posner, and Weyl (2018)", relation: cites, note: "antitrust policy and monopsony power in labor markets; paper supports their call to extend antitrust to labor-market collusion" }
  openQuestions:
    - "Whether the method can be applied to current-day labor markets where collusion is unobserved and production-cost data may be harder to obtain; the paper illustrates feasibility but notes data requirements (conclusion)."
    - "Effects of collusive practices beyond overt wage fixing: tacit wage collusion, information sharing, no-poaching agreements; the paper calls for further investigation of these specific forms (conclusion)."
  replicationCode:
    url: https://doi.org/10.7910/DVN/FG1JSE
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "PDF read in full (all sections including model, identification, estimation results, and counterfactuals); PDF shows '000' page numbers (electronically published ahead of final pagination); results extracted from Tables 1-4 and Figures 3-4 with equation-number locators. Not human-verified. Not reproduced." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against source PDF; two fixes applied: (1) β^k corrected from 0.155 to 0.153 (Table 1 Panel A GMM col., confirmed by PDF text); (2) eq. (17) restored missing intercept term −β^0(1−ρ) dropped during transcription. All 7 Core-results rows confirmed against Tables 1-4 and Figure 4B; equations (1)-(3), (7), (10), (12), (14), (15), counterfactual wage/employment expressions, and all regression specifications verified term-by-term." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Re-read the PDF and appended eight Core-results rows with matching findings, employer-collusion mechanism, missing numbered main-text equations (4)-(6), (8)-(9), (11), (13), (16), (18), and empirical specifications for Tables 2-3 and the labor-supply IV. Not human-verified. Not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Rechecked all 15 Core results rows, equations and specifications, classifications, findings, prose, frontmatter, and cited works against the PDF. Corrected Table 4 and Figure 4B page locators, R7's mixed-sign coding, the sample description, and standard-error wording; removed an incorrect De Loecker-Scott DOI and an unsupported Olley-Pakes control-function classification. All table locator and relate-to checks pass; identified one omitted headline markdown time-path magnitude for later redistillation." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/734780", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license block in Crossref metadata. Artifact first page states: Copyright 2025 The University of Chicago. All rights reserved. Published by The University of Chicago Press. DOI 10.1086/734780." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the structural model it proposes, and the identification method with its defining equations: enough to understand what was found and how, without reading all 44 pages. To replicate or extend, read the full source at [https://doi.org/10.1086/734780](https://doi.org/10.1086/734780).

## TL;DR

The paper develops an empirical method to detect and quantify employer collusion in labor markets using firm-level production and cost data. The idea is to estimate wage markdowns (the ratio of labor's marginal revenue product to the wage) from a production model that imposes no conduct assumptions, then compare those estimates to the markdown bounds that would arise under Cournot (no-collusion) and fully collusive behavior. Applied to 227 Belgian coal mining firms in the Liege and Namur provinces between 1845 and 1913, the paper finds: (i) wages were roughly 40% below labor's marginal revenue product at the median firm; (ii) wage markdowns were higher at employers' association members before the cartel and that premium disappeared after its formation; (iii) markdowns jumped to the fully collusive upper bound right after the cartel began, an increase the authors can detect without ex ante knowledge of the cartel's timing; and (iv) relative to pre-cartel conduct, the cartel reduced equilibrium wages and employment by 6%-17%, and by 10%-25% relative to Cournot, depending on assumptions about coal market competition.

## Core results

Results extracted from Tables 1-4 and Figures 3-4 of the source PDF. Magnitudes are as reported; the PDF was electronically published before final pagination (all pages show "000"), so locators reference equation, table, and figure numbers. Standard errors in Tables 1-3 are block-bootstrapped with 200 iterations except for Table 1 panel C, which uses the Driscoll-Kraay lag-2 correction.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Median wage markdown (MRPL/wage) estimated at 1.680, implying miners were paid ~40% below their marginal revenue product; the coal price markup is below 1, suggesting firms derived profits mainly from labor market power | Table 1, panels A-B (PDF p. 25); markup equation (13) (PDF p. 21) | Median markdown 1.680 (SE 0.450); average 1.828 (SE 0.491); median markup 0.714 (SE 0.494); average firm-level labor supply elasticity 10.172 |
| R2 | Wage markdowns were 11.2% higher at employers' association members, consistent with wage-fixing collusion through these associations | Table 2, panel A, col. 1 (PDF p. 29) | 0.112 (SE 0.052) |
| R3 | After the 1897 coal cartel, the employers' association premium entirely disappears, consistent with formal cartel collusion replacing associations as a driver of markdowns | Table 2, panel B (PDF p. 29) | Pre-1897 association coefficient 0.132 (SE 0.042); post-1897 coefficient -0.058 (SE 0.091) |
| R4 | The collusion null cannot be rejected through 1900; from 1901 onward, it is rejected at the 10% level for every year except 1903, identifying cartel collusion without requiring prior knowledge of its existence | Figure 4B (PDF p. 32) | Median collusion index fluctuates around 0%-50% of the collusive level through 1900; statistically positive from 1901 at 10% except 1903 |
| R5 | The cartel reduced wages and employment by about 6% relative to the observed pre-1898 conduct (which was itself partially collusive), under exogenous coal prices | Table 4, panel A, column "Pre-1898 Conduct" (PDF p. 35) | Wage change -0.059; employment change -0.059 |
| R6 | Compared to Cournot (no collusion) competition, the cartel reduced wages and employment by about 10%, under exogenous coal prices | Table 4, panel A, column "Cournot" (PDF p. 35) | Wage change -0.103; employment change -0.102 |
| R7 | Under endogenous coal prices, the cartel reduced wages and employment by ~17% relative to pre-1898 conduct and ~25% relative to Cournot; coal output fell ~20%-28% and coal prices rose ~10%-17% | Table 4, panel B (PDF p. 35) | vs pre-1898: wages -0.167, employment -0.166, output -0.195, price +0.100; vs Cournot: wages -0.251, employment -0.249, output -0.283, price +0.174 |
| R8 | The preferred free-returns-to-scale production-function GMM estimates support the production-cost markdown calculation; the overidentifying restrictions are not rejected | Table 1, panel A, col. 2 (PDF p. 25) | βˡ = 0.699 (SE 0.327); βᵐ = 0.222 (SE 0.138); βᵏ = 0.153 (SE 0.075); ρ = 0.866 (SE 0.198); Hansen J = 2.34, p = 0.126; N = 4,005 firm-years |
| R9 | The IV labor-supply estimate implies a market-level inverse elasticity above zero, while the Hansen test rejects the overidentifying restrictions | Table 1, panel C (PDF p. 25) | Ψˡ = 1.009 (SE 0.265); first-stage F = 462; Hansen J = 5.92, p = 0.014; N = 1,990 municipality-years |
| R10 | Although the median coal price markup is below one, combined product- and labor-market markup remains positive at the median and mean | Text, discussion of Table 1 panel B (PDF p. 27) | Median joint markup 1.44; mean 1.58; joint markup below zero for 13% of observations |
| R11 | Coal-cartel membership is associated with an 8.0% higher wage markdown, though the paper cautions that membership overlaps with employer associations | Table 2, panel A, col. 1 (PDF p. 29) | 0.080 (SE 0.041) |
| R12 | Relative markdown coefficients turn positive from 1875-1885 and rise to their largest value in 1905-1915 | Table 2, panel A, col. 2 (PDF p. 29) | Relative to 1845-1859: 1855-1865 -0.021 (SE 0.039); 1865-1875 -0.020 (SE 0.038); 1875-1885 0.059 (SE 0.045); 1885-1895 0.108 (SE 0.047); 1895-1905 0.196 (SE 0.045); 1905-1915 0.422 (SE 0.054) |
| R13 | Among noncartel firms, larger labor-market shares predict higher markdowns, including within market-year cells | Table 3, panel B (PDF p. 31) | Log labor-share slope: 0.037 (SE 0.000), no FE; 0.053 (SE 0.005), market FE; 0.065 (SE 0.005), market-by-year FE; market-by-year R² = 0.561; N = 3,183 |
| R14 | Among cartel firms, the positive size-markdown gradient shrinks with fixed effects and is near zero in market-year cells, consistent with markdown equalization under collusion | Table 3, panel C (PDF p. 31) | Log labor-share slope: 0.043 (SE 0.001), no FE; 0.008 (SE 0.002), market FE; -0.004 (SE 0.002), market-by-year FE; market-by-year R² = 0.793; N = 1,472 |
| R15 | The collusion test is robust to fixing returns to scale at 1.05, with later detection than in the unrestricted model | Figure 4B (PDF p. 32) | At 10%, zero collusion rejected from 1908 with RTS = 1.05; unrestricted model rejects from 1901 except 1903; 10%-90% confidence intervals, 200 bootstrap draws |

**Overall (paper's conclusion).** Wage markdowns in Belgian coal mining were stable through the 1870s, increased during the 1880s and 1890s, then rose around 1900. Decomposing markdowns into collusive and noncollusive components shows that pre-1900 growth was mostly due to noncollusive sources, while the post-1900 increase was entirely driven by the 1897 coal cartel. The method can identify this collusion without ex ante information about the cartel, and counterfactuals show it lowered wages and employment by 6%-17% relative to observed pre-cartel conduct and 10%-25% relative to Cournot competition, depending on coal-market assumptions.

## Theory / model

The paper builds a model of the labor market with three components: a production technology, a labor supply function, and an employer behavior model with a conduct parameter.

**Production function.** Output $$Q_{ft}$$ at firm $$f$$ in year $$t$$ follows a Cobb-Douglas specification in log labor $$l_{ft}$$, log materials $$m_{ft}$$, and log capital $$k_{ft}$$, with log total factor productivity $$\omega_{ft}$$ (eq. 1, Section III.A):

$$
q_{ft} = \beta^l l_{ft} + \beta^m m_{ft} + \beta^k k_{ft} + \omega_{ft} \tag{1}
$$

TFP follows an AR(1) Markov process with serial correlation $$\rho$$ and innovation $$v_{ft}$$ (eq. 2):

$$
\omega_{ft} = \rho \, \omega_{f,t-1} + v_{ft} \tag{2}
$$

**Labor supply.** Firms face an upward-sloping market-level labor supply curve with inverse elasticity $$\Psi^l$$. The log-linear supply function at market $$i$$ in year $$t$$ is (eq. 3, Section III.B):

$$
W^l_{it} = L^{\Psi^l}_{it} \, \nu_{it} \tag{3}
$$

where $$L_{it}$$ is market-level employment and $$\nu_{it}$$ is a labor supply shifter. If firms are wage takers, $$\Psi^l = 0$$; labor market power implies $$\Psi^l > 0$$. The firm-level inverse elasticity $$\psi^l_{ft} \equiv (\partial W^l_{ft}/\partial L_{ft})(L_{ft}/W^l_{ft})$$ is related to the market-level elasticity by the firm's labor market share.

**Wage markdown and markup.** The wage markdown is defined as the ratio of labor's marginal revenue product to the wage:

$$
\mu^l_{ft} \equiv \frac{\text{MRPL}_{ft}}{W^l_{ft}}, \qquad \text{where} \quad \text{MRPL}_{ft} \equiv \frac{\partial(P_{ft} Q_{ft})}{\partial L_{ft}}
$$

A percentage wage wedge $$\delta^l_{ft} = (\mu^l_{ft} - 1)/\mu^l_{ft}$$ measures how far below MRPL workers are paid. The product market markup is $$\mu_{ft} \equiv P_{ft}/\text{MC}_{ft}$$.

**Employer behavior and conduct.** Firms minimize a weighted combination of their own and rivals' input costs (eq. 4, Section III.C), with collusion weights $$\lambda_{fgt}$$ parameterizing the degree to which firm $$f$$ internalizes firm $$g$$'s costs. When $$\lambda_{fgt} = 0$$ for $$f \ne g$$, firms minimize only their own costs (Cournot). When $$\lambda_{fgt} = 1$$, firms jointly minimize the cartel's total costs.

The general objective weights each rival's variable costs, while the no-collusion objective includes only the firm's own costs (eqs. 4-5, Section III.C; PDF pp. 18-19):

$$
\min_{L_{ft},M_{ft}} \left(\sum_{g\in F_{i(f)t}} \lambda_{fgt}(L_{gt}W^l_{gt}+M_{gt}W^m_{gt})-MC_{ft}[Q_{ft}-Q(L_{ft},M_{ft},K_{ft},\Omega_{ft};\beta)]\right), \quad \lambda_{fft}=1,\;0\leq\lambda_{fgt}\leq1 \ (f\ne g) \tag{4}
$$

$$
\min_{L_{ft},M_{ft}} \left((L_{ft}W^l_{ft}+M_{ft}W^m_{ft})-MC_{ft}[Q_{ft}-Q(L_{ft},M_{ft},K_{ft},\Omega_{ft};\beta)]\right) \tag{5}
$$

The Cournot labor first-order condition (eq. 6, Section III.C; PDF p. 18) and the joint-cost objective and first-order condition under full collusion (eqs. 8-9; PDF p. 19) are:

$$
L_{ft}\frac{\partial W^l_{it}}{\partial L_{it}}+W^l_{it}=\frac{\partial Q_{ft}}{\partial L_{ft}}\frac{P_{ft}}{\mu_{ft}} \tag{6}
$$

$$
\min_{L_{ft},M_{ft}} \left(\sum_{g\in F_{i(f)t}}(L_{gt}W^l_{gt}+M_{gt}W^m_{gt})-MC_{ft}[Q_{ft}-Q(L_{ft},M_{ft},K_{ft},\Omega_{ft};\beta)]\right) \tag{8}
$$

$$
L_{it}\frac{\partial W^l_{it}}{\partial L_{it}}+W^l_{it}=\frac{\partial Q_{ft}}{\partial L_{ft}}\frac{P_{ft}}{\mu_{ft}} \tag{9}
$$

**Markdown bounds.** Under no collusion (Cournot), the first-order condition for labor yields the no-collusion markdown lower bound (eq. 7):

$$
\underline{\mu}^l_{ft} = 1 + s^l_{ft} \, \Psi^l \tag{7}
$$

where $$s^l_{ft} = L_{ft}/L_{it}$$ is the firm's labor market share. Under full collusion, all firms within market $$i$$ minimize joint costs, treating the market-level supply curve as endogenous; the fully collusive markdown upper bound is (eq. 10):

$$
\bar{\mu}^l_{ft} = 1 + \Psi^l \tag{10}
$$

Nesting both cases through a scalar conduct parameter $$\tilde{\lambda}_{ft} \in [s^l_{ft}, 1]$$ (eq. 12):

$$
\mu^l_{ft} = 1 + \tilde{\lambda}_{ft} \, \Psi^l \tag{12}
$$

## Method

The central methodological contribution is a way to identify employer conduct without imposing a conduct assumption. The approach builds on the demand-side conduct-identification tradition of Bresnahan (1987) but uses the supply side: the identification comes from combining two independently estimable quantities: (i) a cost-side markdown estimate that does not depend on conduct, derived from the production function; and (ii) the conduct-dependent markdown bounds from the labor supply model. De Loecker and Scott (2016) applied a similar comparison for goods market price markups without imposing conduct; the present paper extends that logic to the factor market and allows for collusive behavior.

The generalized labor first-order condition nests Cournot and full collusion using conduct parameter $$\tilde{\lambda}_{ft}$$ (eq. 11, Section III.C; PDF p. 19):

$$
W^l_{it}+\tilde{\lambda}_{ft}\frac{\partial W^l_{it}}{\partial L_{it}}L_{it}=\frac{\partial Q_{ft}}{\partial L_{ft}}\frac{P_{ft}}{\mu_{ft}} \tag{11}
$$

The intermediate-input first-order condition gives the product-market markup (eq. 13, Section III.D; PDF p. 21):

$$
\mu_{ft}=\frac{\beta^m}{\alpha^m_{ft}} \tag{13}
$$

**Key identification equation.** Following De Loecker and Warzynski (2012), the product market markup is $$\mu_{ft} = \beta^m / \alpha^m_{ft}$$, where $$\alpha^m_{ft} = W^m_{ft} M_{ft} / (P_{ft} Q_{ft})$$ is the revenue share of materials. Substituting the production function output elasticity of labor $$\beta^l$$ and the revenue share of labor $$\alpha^l_{ft} = W^l_{ft} L_{ft} / (P_{ft} Q_{ft})$$ into the general first-order condition (eq. 11) yields the key markdown expression (eq. 14, Section III.D):

$$
\mu^l_{ft} = 1 + \tilde{\lambda}_{ft} \, \Psi^l = \frac{\beta^l \alpha^m_{ft}}{\beta^m \alpha^l_{ft}} \tag{14}
$$

The right-hand side is the cost-side markdown estimate: it depends only on the production function parameters $$\beta^l$$ and $$\beta^m$$ and the observable cost shares, not on $$\tilde{\lambda}_{ft}$$. This separates the cost-side estimate from the conduct-side model; equating them identifies the conduct parameter.

**Collusion index.** The paper rescales the conduct parameter to the unit interval (eq. 15), where 0 denotes no collusion (Cournot) and 1 denotes full collusion:

$$
\hat{\lambda}_{ft} \equiv \frac{\mu^l_{ft} - \underline{\mu}^l_{ft}}{\bar{\mu}^l_{ft} - \underline{\mu}^l_{ft}} = \frac{\mu^l_{ft} - (1 + s^l_{ft}\Psi^l)}{\Psi^l(1 - s^l_{ft})} \tag{15}
$$

The first production-function moment condition uses lagged inputs and lagged agricultural wages as instruments (eq. 16, Section IV.A; PDF p. 22):

$$
\mathbb{E}\left[u_{ft}\mid(l_{fr-1},m_{fr-1},k_{fr},w^{\text{agri}}_{r-1})_{r\in[2,\ldots,t]}\right]=0 \tag{16}
$$

**Production function estimation.** The paper builds on Olley and Pakes (1996) timing assumptions (capital fixed and dynamic; labor and materials static), combined with Blundell and Bond (2000) AR(1) differencing to avoid inverting the input demand function. The GMM moment conditions (eq. 17) are:

$$
\mathbb{E}\!\left[\left(q_{ft} - \rho q_{f,t-1} - \beta^0(1-\rho) - \beta^l(l_{ft} - \rho l_{f,t-1}) - \beta^m(m_{ft} - \rho m_{f,t-1}) - \beta^k(k_{ft} - \rho k_{f,t-1})\right)\Big|\, l_{f,t-1}, m_{f,t-1}, k_{ft}, k_{f,t-1}, w^{\text{agr}}_{t-1}\right] = 0 \tag{17}
$$

The instruments include lagged inputs plus lagged agricultural wages $$w^{\text{agr}}_{t-1}$$, which shift labor supply to coal mines (Walloon coal mines drew agricultural surplus labor from Flanders) but are assumed not to affect mining productivity directly.

**Labor supply estimation.** The market-level inverse labor supply elasticity $$\Psi^l$$ is estimated by IV on the market-year panel. Two instruments shift labor demand without shifting supply: (i) an indicator for 1871-1875, the coal demand surge from the Franco-Prussian War and Lorraine annexation; and (ii) cartel membership interacted with the post-cartel period, which reduced coal output and hence labor demand for cartel participants.

**Counterfactual equilibrium.** Under exogenous coal prices, closed-form equilibrium wages and employment as a function of the conduct parameter $$\tilde{\lambda}_{it}$$ and revenue $$R_{it} = P_{it}Q_{it}$$ are (Section IV.D):

$$
W^l_{it} = \left(\frac{\beta^l R_{it} \, \nu_{it}^{1/\Psi^l}}{1 + \Psi^l \tilde{\lambda}_{it}}\right)^{\Psi^l/(1+\Psi^l)}, \qquad L_{it} = \left(\frac{\beta^l R_{it}}{(1 + \Psi^l \tilde{\lambda}_{it})\,\nu_{it}}\right)^{1/(1+\Psi^l)}
$$

The cartel effects are computed by setting $$\tilde{\lambda}_{it}$$ to the Cournot value ($$1/N_{it}$$) or the pre-1898 average collusion level and comparing to the observed post-cartel fully collusive state.

## Empirical specifications

**Production function (Table 1, panel A).** Estimated by GMM on 4,005 firm-year observations (GMM sample, after conditioning on all variables being observed) using the moment conditions in eq. (17). Block-bootstrap with 200 iterations. The preferred specification (column 2, free RTS) gives $$\hat{\beta}^l = 0.699$$ (SE 0.327), $$\hat{\beta}^m = 0.222$$ (SE 0.138), $$\hat{\beta}^k = 0.153$$ (SE 0.075), serial correlation $$\hat{\rho} = 0.866$$ (SE 0.198). The model is overidentified; the Hansen J-test gives p = 0.126. A version with RTS restricted to 1.05 (column 3) yields tighter standard errors: $$\hat{\beta}^l = 0.661$$, $$\hat{\beta}^m = 0.237$$, $$\hat{\beta}^k = 0.102$$.

**Labor supply (Table 1, panel C).** The market-level inverse labor supply elasticity is estimated by IV on 1,990 market-year observations, regressing log wage on log employment with the two demand shifters as instruments. The IV estimate is $$\hat{\Psi}^l = 1.009$$ (SE 0.265), implying that at a monopsonistic firm the MRPL is twice the wage. The first-stage F-statistic is 462. The average firm-level elasticity implied by the model is 10.172.

**Markdown correlations (Table 2).** OLS regressions of log markdown $$\mu^l_{ft}$$ on employer association and cartel membership indicators. Panel A (all years) on 4,432 observations with year fixed effects: employers' association coefficient 0.112 (SE 0.052); cartel coefficient 0.080 (SE 0.041). Panel B splits by pre- vs. post-1897: association coefficient pre-1897 is 0.132 (SE 0.042) and post-1897 is -0.058 (SE 0.091).

**Size-markdown correlations (Table 3).** Regressions of log markdown on log labor market share, separately for cartel and noncartel firms, with no, market, and market-by-year fixed effects. For noncartel firms, market-by-year FE explain 56% of markdown variation and the size-markdown gradient is positive (0.065, SE 0.005), consistent with the Cournot model. For cartel firms, conditioning on market-by-year FE makes the size-markdown gradient near zero (-0.004, SE 0.002), consistent with equalized markdowns under collusion.

**Collusion test (Figure 4B, PDF p. 32).** Year-by-year estimation of the median collusion index $$\hat{\lambda}_{ft}$$ with 10%-90% confidence intervals (200 bootstrap iterations). The collusion index fluctuates around 0%-50% of the collusive range through 1900. From 1901 onward, the null of zero collusion is rejected at the 10% level for every year except 1903.

**Markdown correlations (R2-R3, R11-R12; Table 2, PDF p. 29).** The firm-year outcome is log markdown. Panel A, col. 1 relates it to association and cartel indicators with year fixed effects; col. 2 estimates period indicators relative to 1845-1859 without year fixed effects. Panel B estimates the association premium separately before and after 1897. Standard errors are block-bootstrapped (200 iterations); samples are 4,432, 4,705, 3,737, and 695 firm-years, respectively. These table regressions are summarized by:

$$
\log(\mu^l_{ft})=a+\beta_A A_{ft}+\beta_C C_{ft}+\tau_t+\epsilon_{ft}, \qquad \log(\mu^l_{ft})=a+\sum_j\beta_j 1[t\in j]+\epsilon_{ft} 
$$

$$
\log(\mu^l_{ft})=a+\beta_{pre}A_{ft}+\epsilon_{ft} \ (1845-1897), \qquad \log(\mu^l_{ft})=a+\beta_{post}A_{ft}+\epsilon_{ft} \ (1898-1913) 
$$

**Size-markdown correlations (R13-R14; Table 3, PDF p. 31).** Each cartel-status subsample regresses firm-year log markdown on log labor market share with a linear time trend and, in the successive columns, no FE, market FE, or market-by-year FE. Block-bootstrap SEs use 200 draws. The samples are 4,671 observations overall, 3,183 noncartel, and 1,472 cartel observations; cartel status is unavailable for 16 observations. The estimating form is:

$$
\log(\mu^l_{ft})=a+\beta\log(s^l_{ft})+\gamma t+\eta_{i}+\delta_{it}+\epsilon_{ft}, 
$$

Here $$\eta_i$$ or $$\delta_{it}$$ is included according to the column's fixed-effects specification, but not both. The labor-supply IV specification is (Table 1, panel C, PDF p. 25):

$$
\log(W^l_{it})=\Psi^l\log(L_{it})+\theta_C C_{it}+\theta_P P_t+\epsilon_{it}
$$

Here $$\log(L_{it})$$ is instrumented by the 1871-1875 demand-shock indicator and cartel membership interacted with the post-1897 indicator; cartel and post-period indicators enter as controls. The sample has 1,990 municipality-years. Standard errors use the Driscoll-Kraay lag-2 correction; the first-stage F-statistic is 462.

**Endogenous coal-price counterfactual (R7; eq. 18, Section IV.D.3; Table 4 PDF p. 35).** Market-level inverse demand is:

$$
P_{it}=Q_{it}^{\eta}y_{it} \tag{18}
$$

The demand elasticity estimate is $$\eta=-0.383$$; Table 4 panel B reports the equilibrium changes. This specification solves the labor supply curve (eq. 3), production function (eq. 1), and coal demand (eq. 18) jointly under symmetric firms. The exogenous-price wage and employment equilibrium expressions given above are solved under the same symmetric-market assumptions. Table 4 magnitudes use median calibrated parameters and block-bootstrap uncertainty as described in Section IV.D.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Administration des Mines annual inspection reports (Liege and Namur, 1845-1913) | Firm-level coal output (tons by type), employment (days worked, underground vs. surface), intermediate input expenditure, extraordinary expenses (capital investment), horsepower of machines | no page yet |
| Union des Charbonnages Ligeois monthly Bulletin (digitized) | Employer association membership per firm, per year | no page yet |
| Cartel lists from De Leener (1904) | Coal cartel membership 1897 onward | no page yet |
| Municipality-level railroad and tramway station opening dates | Control for transport network access; instrument validity check | no page yet |
| Consumer price index (Segers 2003; extended to 1845 using Scholliers 1995) | Price deflation of all nominal variables | no page yet |
| Agricultural wages in Belgium (Segers 2003) | Instrument for labor supply to coal mines; reflects labor supply shocks from the agricultural sector | no page yet |

Sample: 227 coal mining concessions in Liege and Namur provinces, annual observations 1845-1913. The underlying panel has 8,779 firm-year records. Estimation samples vary with available variables: the preferred GMM production-function sample has 4,005 observations, the largest Table 2 regression has 4,705, and the market-level labor-supply sample has 1,990 municipality-year observations.

## When to read the full paper

Read the [original](https://doi.org/10.1086/734780) if you are:
working on identification of employer conduct or monopsony in labor markets (Section III gives the complete model and identification logic, including the generalization to heterogeneous employers in appendix A.1);
studying the labor market effects of cartels historically or in contemporary antitrust contexts (Section IV.D and Table 4 give the counterfactual framework and parameter estimates);
interested in production function estimation with labor supply instruments or factor market power (the GMM approach with agricultural wage instruments is fully developed in Section IV.A and appendices B-C); or
working on economic history of the Industrial Revolution and employer associations (Sections II and V cover the Belgian coal setting and robustness checks including unionization, factor-biased technical change, and democratization); or concerned with antitrust policy toward labor markets (the results bear on arguments in Naidu, Posner, and Weyl (2018) that antitrust should address labor-market collusion, not only product-market collusion).

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 133(6), June 2025. Copyright 2025 The University of Chicago. All rights reserved. Published by The University of Chicago Press. The initial distillation was extracted on 2026-06-26 and augmented on 2026-10-04; it is **not human-verified or independently reproduced**. The journal version is paywalled; an accepted-manuscript copy is available at the Radboud University repository. Replication code: [Harvard Dataverse, https://doi.org/10.7910/DVN/FG1JSE](https://doi.org/10.7910/DVN/FG1JSE) (Delabastita and Rubens 2024).

> Delabastita, Vincent, and Michael Rubens. "Colluding against Workers."
> *Journal of Political Economy* 133, no. 6 (June 2025): 1796-1839.
> DOI: 10.1086/734780. Extract-only; all rights reserved.
