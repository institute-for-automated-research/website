---
title: "Colluding against Workers: Delabastita & Rubens (2025)"
description: >-
  Distilled: proposes a new identification approach for employer collusion
  in labor markets using production and cost data, applied to 227 Belgian
  coal firms 1845-1913. The 1897 coal cartel explains the entire post-1900
  surge in wage markdowns and depressed wages and employment by 6%-17%
  relative to pre-cartel conduct. Journal of Political Economy 2025,
  paywalled. Seven core results with source locators, datasets used, the
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
  dataAccess: hand-collected
  outcome:
    - wage markdown (ratio of MRPL to wage)
    - equilibrium wages
    - equilibrium employment
    - employer collusion index
  outcomeClass: [labor-careers-health]
  license: "All rights reserved. Published by The University of Chicago Press. Copyright 2025 The University of Chicago."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (University of Chicago Press, 2026-06-26)"
  redistribution: extract-only
  resultsCount: 7
  citedByCount: 6
  methods:
    role: both
    contributes: collusion-identification-production-cost
    family: structural
    buildsFrom: [gmm, olley-pakes-control-function, panel-regression, instrumental-variables]
    identification: structural
  contributionType: [new-method, new-fact, new-data]
  mechanisms: [market-power]
  introducesData: true
  scope:
    region: Belgium (Liege and Namur provinces)
    assetClass: coal mining
    period: 1845-01..1913-12
    frequency: annual
    dataType: [accounting, administrative]
    granularity: [firm]
    n: "227 coal mining concessions, 1845-1913; 4,005-8,779 firm-year observations depending on specification"
  findings:
    - { ref: R1, outcome: "wage markdown (ratio of MRPL to wage)", metric: coefficient, value: "1.680 median (SE 0.450); 1.828 average (SE 0.491); implies wages ~40% below MRPL at median firm", direction: positive, vsBenchmark: "competitive benchmark of 1.0" }
    - { ref: R2, outcome: "wage markdown", metric: coefficient, value: "0.112 (SE 0.052) log-markdown premium for employers' association members", direction: positive }
    - { ref: R3, outcome: "wage markdown", metric: coefficient, value: "pre-1897 assoc. premium 0.132 (SE 0.042); post-1897 assoc. premium -0.058 (SE 0.091)", direction: mixed, vsBenchmark: "employers' association premium disappears after cartel formation" }
    - { ref: R4, outcome: "employer collusion index", metric: coefficient, value: "median collusion near zero pre-1900; null of zero collusion rejected every year 1901 onward at 10% level (except 1903)", direction: positive }
    - { ref: R5, outcome: "equilibrium wages", metric: pp-effect, value: "-5.9% wages and -5.9% employment vs pre-1898 conduct (exogenous coal prices)", direction: negative, vsBenchmark: "pre-1898 observed conduct" }
    - { ref: R6, outcome: "equilibrium wages", metric: pp-effect, value: "-10.3% wages and -10.2% employment vs Cournot competition (exogenous coal prices)", direction: negative, vsBenchmark: "Cournot competition baseline" }
    - { ref: R7, outcome: "equilibrium wages", metric: pp-effect, value: "-16.7% wages and -16.6% employment vs pre-1898; -25.1% wages and -24.9% employment vs Cournot (endogenous coal prices)", direction: negative, vsBenchmark: "Cournot / pre-1898 conduct, endogenous coal prices" }
  resultType: new-finding
  relatesTo:
    - { cite: "De Loecker and Warzynski (2012)", doi: '10.1257/aer.102.6.2437', relation: builds-on, note: "markup identification from production function, extended here to factor markets and labor conduct" }
    - { cite: "Bresnahan (1987)", doi: '10.2307/2098583', relation: builds-on, note: "conduct parameter identification in industrial organization; their demand-side approach is complemented by the supply-side approach here" }
    - { cite: "De Loecker and Scott (2016)", doi: '10.3982/ecta11042', relation: builds-on, note: "similar comparison of markup bounds for goods price markups without imposing conduct, providing the template for the factor-market analog" }
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
  licenceVerification:
    - { source: "Crossref REST API works/10.1086/734780", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "No license block in Crossref metadata. Artifact first page states: Copyright 2025 The University of Chicago. All rights reserved. Published by The University of Chicago Press. DOI 10.1086/734780." }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the structural model it proposes, and the identification method with its defining equations: enough to understand what was found and how, without reading all 44 pages. To replicate or extend, read the full source at [https://doi.org/10.1086/734780](https://doi.org/10.1086/734780).

## TL;DR

The paper develops an empirical method to detect and quantify employer collusion in labor markets using firm-level production and cost data. The idea is to estimate wage markdowns (the ratio of labor's marginal revenue product to the wage) from a production model that imposes no conduct assumptions, then compare those estimates to the markdown bounds that would arise under Cournot (no-collusion) and fully collusive behavior. Applied to 227 Belgian coal mining firms in the Liege and Namur provinces between 1845 and 1913, the paper finds: (i) wages were roughly 40% below labor's marginal revenue product at the median firm; (ii) wage markdowns were higher at employers' association members throughout the nineteenth century but that premium disappeared after the 1897 coal cartel; (iii) markdowns jumped to the fully collusive upper bound right after the cartel began, an increase the authors can detect without ex ante knowledge of the cartel's timing; and (iv) the cartel reduced equilibrium wages and employment by 6%-17% depending on assumptions about coal market competition.

## Core results

Results extracted from Tables 1-4 and Figures 3-4 of the source PDF. Magnitudes are as reported; the PDF was electronically published before final pagination (all pages show "000"), so locators reference equation, table, and figure numbers. Standard errors (SE) are block-bootstrapped with 200 iterations.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Median wage markdown (MRPL/wage) estimated at 1.680, implying miners were paid ~40% below their marginal revenue product; the coal price markup is below 1, suggesting firms derived profits mainly from labor market power | Table 1, panels A-B; markup equation (13) | Median markdown 1.680 (SE 0.450); average 1.828 (SE 0.491); median markup 0.714 (SE 0.494); firm-level labor supply elasticity 10.172 |
| R2 | Wage markdowns were 11.2% higher at employers' association members, consistent with wage-fixing collusion through these associations | Table 2, panel A, col. 1 | 0.112 (SE 0.052) |
| R3 | After the 1897 coal cartel, the employers' association premium entirely disappears, indicating informal association-based collusion was replaced by formal cartel collusion | Table 2, panel B | Pre-1897 association coefficient 0.132 (SE 0.042); post-1897 coefficient -0.058 (SE 0.091) |
| R4 | The collusion null cannot be rejected before 1900; from 1901 onward, it is rejected at the 10% level for every year except 1903, identifying cartel collusion without requiring prior knowledge of its existence | Figure 4B | Median collusion index near zero pre-1900; statistically positive from 1901 at 10% |
| R5 | The cartel reduced wages and employment by about 6% relative to the observed pre-1898 conduct (which was itself partially collusive), under exogenous coal prices | Table 4, panel A, column "Pre-1898 Conduct" | Wage change -0.059; employment change -0.059 |
| R6 | Compared to Cournot (no collusion) competition, the cartel reduced wages and employment by about 10%, under exogenous coal prices | Table 4, panel A, column "Cournot" | Wage change -0.103; employment change -0.102 |
| R7 | Under endogenous coal prices, the cartel reduced wages and employment by ~17% relative to pre-1898 conduct and ~25% relative to Cournot; coal output fell ~20%-28% and coal prices rose ~10%-17% | Table 4, panel B | vs pre-1898: wages -0.167, employment -0.166, output -0.195, price +0.100; vs Cournot: wages -0.251, employment -0.249, output -0.283, price +0.174 |

**Overall (paper's conclusion).** Wage markdowns in Belgian coal mining were stable during the first half of the nineteenth century but increased sharply around 1900. Decomposing markdowns into collusive and noncollusive components shows the pre-1900 growth was driven by noncollusive sources (concentration, productivity), while the post-1900 surge was entirely driven by the 1897 coal cartel. The method can identify this collusion without ex ante information about the cartel, and counterfactuals show it caused substantial losses in wages and employment for workers.

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

**Key identification equation.** Following De Loecker and Warzynski (2012), the product market markup is $$\mu_{ft} = \beta^m / \alpha^m_{ft}$$, where $$\alpha^m_{ft} = W^m_{ft} M_{ft} / (P_{ft} Q_{ft})$$ is the revenue share of materials. Substituting the production function output elasticity of labor $$\beta^l$$ and the revenue share of labor $$\alpha^l_{ft} = W^l_{ft} L_{ft} / (P_{ft} Q_{ft})$$ into the general first-order condition (eq. 11) yields the key markdown expression (eq. 14, Section III.D):

$$
\mu^l_{ft} = 1 + \tilde{\lambda}_{ft} \, \Psi^l = \frac{\beta^l \alpha^m_{ft}}{\beta^m \alpha^l_{ft}} \tag{14}
$$

The right-hand side is the cost-side markdown estimate: it depends only on the production function parameters $$\beta^l$$ and $$\beta^m$$ and the observable cost shares, not on $$\tilde{\lambda}_{ft}$$. This separates the cost-side estimate from the conduct-side model; equating them identifies the conduct parameter.

**Collusion index.** The paper rescales the conduct parameter to the unit interval (eq. 15), where 0 denotes no collusion (Cournot) and 1 denotes full collusion:

$$
\hat{\lambda}_{ft} \equiv \frac{\mu^l_{ft} - \underline{\mu}^l_{ft}}{\bar{\mu}^l_{ft} - \underline{\mu}^l_{ft}} = \frac{\mu^l_{ft} - (1 + s^l_{ft}\Psi^l)}{\Psi^l(1 - s^l_{ft})} \tag{15}
$$

**Production function estimation.** The paper builds on Olley and Pakes (1996) timing assumptions (capital fixed and dynamic; labor and materials static), combined with Blundell and Bond (2000) AR(1) differencing to avoid inverting the input demand function. The GMM moment conditions (eq. 17) are:

$$
\mathbb{E}\!\left[\left(q_{ft} - \rho q_{f,t-1} - \beta^0(1-\rho) - \beta^l(l_{ft} - \rho l_{f,t-1}) - \beta^m(m_{ft} - \rho m_{f,t-1}) - \beta^k(k_{ft} - \rho k_{f,t-1})\right)\Big|\, l_{f,t-1}, m_{f,t-1}, k_{ft}, k_{f,t-1}, w^{\text{agr}}_{t-1}\right] = 0 \tag{17}
$$

The instruments include lagged inputs plus lagged agricultural wages $$w^{\text{agr}}_{t-1}$$, which shift labor supply to coal mines (Walloon coal mines drew agricultural surplus labor from Flanders) but are assumed not to affect mining productivity directly.

**Labor supply estimation.** The market-level inverse labor supply elasticity $$\Psi^l$$ is estimated by IV on the market-year panel. Two instruments shift labor demand without shifting supply: (i) an indicator for 1871-1875, the coal demand surge from the Franco-Prussian War and Lorraine annexation; and (ii) cartel membership interacted with the post-cartel period, which reduced coal output and hence labor demand for cartel participants.

**Counterfactual equilibrium.** Under exogenous coal prices, closed-form equilibrium wages and employment as a function of the conduct parameter $$\tilde{\lambda}_{it}$$ and revenue $$R_{it} = P_{it}Q_{it}$$ are (Section IV.D):

$$
W^l_{it} = \left(\frac{\beta^l R_{it} \, \nu^{1/\Psi^l}_{it}}{1 + \Psi^l \tilde{\lambda}_{it}}\right)^{\Psi^l/(1+\Psi^l)}, \qquad L_{it} = \left(\frac{\beta^l R_{it}}{(1 + \Psi^l \tilde{\lambda}_{it})\,\nu_{it}}\right)^{1/(1+\Psi^l)}
$$

The cartel effects are computed by setting $$\tilde{\lambda}_{it}$$ to the Cournot value ($$1/N_{it}$$) or the pre-1898 average collusion level and comparing to the observed post-cartel fully collusive state.

## Empirical specifications

**Production function (Table 1, panel A).** Estimated by GMM on 4,005 firm-year observations (GMM sample, after conditioning on all variables being observed) using the moment conditions in eq. (17). Block-bootstrap with 200 iterations. The preferred specification (column 2, free RTS) gives $$\hat{\beta}^l = 0.699$$ (SE 0.327), $$\hat{\beta}^m = 0.222$$ (SE 0.138), $$\hat{\beta}^k = 0.153$$ (SE 0.075), serial correlation $$\hat{\rho} = 0.866$$ (SE 0.198). The model is overidentified; the Hansen J-test gives p = 0.126. A version with RTS restricted to 1.05 (column 3) yields tighter standard errors: $$\hat{\beta}^l = 0.661$$, $$\hat{\beta}^m = 0.237$$, $$\hat{\beta}^k = 0.102$$.

**Labor supply (Table 1, panel C).** The market-level inverse labor supply elasticity is estimated by IV on 1,990 market-year observations, regressing log wage on log employment with the two demand shifters as instruments. The IV estimate is $$\hat{\Psi}^l = 1.009$$ (SE 0.265), implying that at a monopsonistic firm the MRPL is twice the wage. The first-stage F-statistic is 462. The firm-level elasticity implied by the model is 10.172.

**Markdown correlations (Table 2).** OLS regressions of log markdown $$\mu^l_{ft}$$ on employer association and cartel membership indicators. Panel A (all years) on 4,432 observations with year fixed effects: employers' association coefficient 0.112 (SE 0.052); cartel coefficient 0.080 (SE 0.041). Panel B splits by pre- vs. post-1897: association coefficient pre-1897 is 0.132 (SE 0.042) and post-1897 is -0.058 (SE 0.091).

**Size-markdown correlations (Table 3).** Regressions of log markdown on log labor market share, separately for cartel and noncartel firms, with no, market, and market-by-year fixed effects. For noncartel firms, market-by-year FE explain 56% of markdown variation and the size-markdown gradient is positive (0.065, SE 0.005), consistent with the Cournot model. For cartel firms, conditioning on market-by-year FE makes the size-markdown gradient near zero (-0.004, SE 0.002), consistent with equalized markdowns under collusion.

**Collusion test (Figure 4B).** Year-by-year estimation of the median collusion index $$\hat{\lambda}_{ft}$$ with 10%-90% confidence intervals (200 bootstrap iterations). The collusion index fluctuates around 0-50% of the collusive range before 1900. From 1901 onward, the null of zero collusion is rejected at the 10% level for every year except 1903.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Administration des Mines annual inspection reports (Liege and Namur, 1845-1913) | Firm-level coal output (tons by type), employment (days worked, underground vs. surface), intermediate input expenditure, extraordinary expenses (capital investment), horsepower of machines | no page yet |
| Union des Charbonnages Ligeois monthly Bulletin (digitized) | Employer association membership per firm, per year | no page yet |
| Cartel lists from De Leener (1904) | Coal cartel membership 1897 onward | no page yet |
| Municipality-level railroad and tramway station opening dates | Control for transport network access; instrument validity check | no page yet |
| Consumer price index (Segers 2003; extended to 1845 using Scholliers 1995) | Price deflation of all nominal variables | no page yet |
| Agricultural wages in Belgium (Segers 2003) | Instrument for labor supply to coal mines; reflects labor supply shocks from the agricultural sector | no page yet |

Sample: 227 coal mining concessions in Liege and Namur provinces, annual observations 1845-1913. The GMM production function sample has 4,005 observations (requiring lagged variables to be observed); the full markdown-estimation sample has up to 8,779 firm-year observations. The market-level labor supply sample has 1,990 municipality-year observations.

## When to read the full paper

Read the [original](https://doi.org/10.1086/734780) if you are:
working on identification of employer conduct or monopsony in labor markets (Section III gives the complete model and identification logic, including the generalization to heterogeneous employers in appendix A.1);
studying the labor market effects of cartels historically or in contemporary antitrust contexts (Section IV.D and Table 4 give the counterfactual framework and parameter estimates);
interested in production function estimation with labor supply instruments or factor market power (the GMM approach with agricultural wage instruments is fully developed in Section IV.A and appendices B-C); or
working on economic history of the Industrial Revolution and employer associations (Sections II and V cover the Belgian coal setting and robustness checks including unionization, factor-biased technical change, and democratization); or concerned with antitrust policy toward labor markets (the results bear on arguments in Naidu, Posner, and Weyl (2018) that antitrust should address labor-market collusion, not only product-market collusion).

## Attribution and rights

Source: peer-reviewed, *Journal of Political Economy* 133(6), June 2025. Copyright 2025 The University of Chicago. All rights reserved. Published by The University of Chicago Press. This distillation was extracted by an LLM on 2026-06-26 and is **not human-verified or independently reproduced**. The journal version is paywalled; an accepted-manuscript copy is available at the Radboud University repository. Replication code: [Harvard Dataverse, https://doi.org/10.7910/DVN/FG1JSE](https://doi.org/10.7910/DVN/FG1JSE) (Delabastita and Rubens 2024).

> Delabastita, Vincent, and Michael Rubens. "Colluding against Workers."
> *Journal of Political Economy* 133, no. 6 (June 2025): 1796-1839.
> DOI: 10.1086/734780. Extract-only; all rights reserved.
