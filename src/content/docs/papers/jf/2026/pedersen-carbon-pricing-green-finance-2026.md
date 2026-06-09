---
title: "Carbon Pricing versus Green Finance: Pedersen (2026)"
description: >-
  Distilled: a unified model shows when carbon taxes and green finance
  (ESG investing, sustainable finance regulation) can substitute for each
  other and when green finance fails; the sustainable discount rate equals
  the normal rate plus a firm's carbon burden rate. J. Finance 2026,
  CC BY 4.0. Eight core results with source locators, datasets used, the
  model, and the method with its defining equations.
sidebar:
  label: Pedersen 2026
  order: 1
tags: [paper-summary, climate-finance, esg, carbon-pricing, asset-pricing, sustainable-finance, factors, panel-regression, open-access, cc-by, peer-reviewed, unreplicated, data:trucost, data:wrds, data:eia-electricity]
paper:
  authors: Lasse Heje Pedersen
  authorList:
    - family: Pedersen
      given: Lasse Heje
      affiliation: AQR Capital Management; Copenhagen Business School; CEPR
  year: 2026
  venue: The Journal of Finance 81(2), April 2026, 561–602
  venueShort: J. Finance 2026
  licenseShort: CC BY 4.0
  resultsCount: 8
  citedByCount: 0
  jel:
    codes: [G12, Q54, H23]
    assignedBy: claude-opus-4-8
    date: 2026-06-05
  topics: ['Sustainable Finance and Green Bonds', 'Climate Change Policy and Economics', 'Corporate Social Responsibility Reporting']
  dataAccess: licensed-commercial
  outcome:
    - firm cost of capital (sustainable discount rate)
    - cross-sectional implied cost of capital
  outcomeClass: [firm-financing, social-welfare]
  doi: 10.1111/jofi.70022
  license: 'CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2026-02-08; corroborated by artifact p.561 Creative Commons Attribution License notice)'
  access: open
  machineAccess: 'blocked-paywall (Wiley site wrapper; VOR licence in Crossref DOI metadata overrides the wrapper; not machine-fetchable as of 2026-05-31)'
  redistribution: extract-only (CC BY 4.0 permits mirroring; not hosted in this batch)

  methods:
    role: theory
    family: structural
    buildsFrom: [dynamic-general-equilibrium, pigouvian-taxation]
  contributionType: [new-theory, new-fact]
  mechanisms: [externality]

  scope:
    region: US
    assetClass: US equities (Trucost/CRSP/Compustat universe)
    period: 2021..2021
    frequency: annual
    dataType: [market, accounting, other]
    granularity: [firm, aggregate]
    n: "~3,000+ U.S. publicly listed firms, fiscal year 2021 cross-section"

  relatesTo:
    - { cite: 'Nordhaus (2019)', doi: '10.1257/aer.109.6.1991', relation: builds-on, note: 'Takes the social cost of carbon S_t as given from Nordhaus calibrations (43 $/tCO2 baseline, 300 $/tCO2 high); translates it into a cost-of-capital adjustment (pp. 561-562).' }
    - { cite: 'Pastor, Stambaugh & Taylor (2021)', doi: '10.1016/j.jfineco.2020.12.011', relation: extends, note: 'Extends equilibrium ESG investing framework to show exactly when green finance can and cannot replicate a carbon tax (p. 568).' }
    - { cite: 'Eskildsen, Ibert, Jensen & Pedersen (2024)', doi: '10.2139/ssrn.4744608', relation: tests, note: 'Uses their cross-sectional regression slope of 4 on emission-to-asset ratio as the empirical calibration of the market-implied carbon price (pp. 564-565, 591).' }
    - { cite: 'Chittaro, Piazzesi, Sena & Schneider (2025)', doi: '10.3386/w34342', relation: extends, note: 'Notes that Chittaro et al. generalize the framework with a rich input-output structure and short-sale constraints (p. 565).' }

  openQuestions:
    - 'Whether sustainable finance regulation can deliver sufficient cost-of-capital adjustments in practice given the commitment problem: firms may promise low future emissions to secure cheap capital and then emit at full capacity (pp. 571-572, 591).'
    - 'How to handle stranded assets under a purely voluntary green-finance approach when purely financial investors remain in the market and keep asset prices above zero (pp. 564-565, 572, 591).'
    - 'Whether the model results extend naturally to other ESG dimensions (social, governance) beyond the environmental carbon externality, which the paper discusses but does not formally develop (p. 568).'
    - 'How emission-based capital taxes could be implemented in practice, since such taxes do not currently exist and would likely face political and legal barriers (p. 591).'

  findings:
    - ref: R5
      outcome: firm cost of capital (sustainable discount rate)
      metric: pp-effect
      value: 0.19 pp (market-value-weighted average; scope-1 only)
      direction: positive
      vsBenchmark: above baseline normal rate r = 5%
    - ref: R6
      outcome: firm cost of capital (sustainable discount rate)
      metric: pp-effect
      value: 3.2 pp average (scope 1 baseline calibration); 8.0 pp (alternative calibration)
      direction: positive
      vsBenchmark: above baseline normal rate r = 5% for brown electricity sector
    - ref: R7
      outcome: cross-sectional implied cost of capital
      metric: coefficient
      value: slope = 4 $/tCO2 (emission-to-value ratio regressed on implied cost of capital)
      direction: positive
      vsBenchmark: far below social cost of carbon (43 $/tCO2 Nordhaus baseline)
    - ref: R8
      outcome: carbon offset market price
      metric: pp-effect
      value: effective carbon tax reduced to ~10% of intended level for low-quality offsets
      direction: negative
      vsBenchmark: below intended carbon tax level
  resultType: new-finding

  replicationCode:
    status: available

  licenceVerification:
    - source: Crossref REST API works/10.1111/jofi.70022
      checked: 2026-05-31
      by: paper-distiller (claude-sonnet-4-6)
      found: 'license[0].content-version=vor, URL=http://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2026-02-08'
  extraction:
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-05-31
      role: extracted
      note: Full text read (pp. 561–602); eight results extracted from the CC-BY PDF. Not human-verified. Not reproduced. Replication code is published as Supporting Information but has not been run here.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-05-31
      role: verified
      note: Locators and reported magnitudes re-checked against the source PDF; verdict pass.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-01
      role: extracted
      note: 'Augment pass. Added methods, scope, relatesTo, openQuestions, replicationCode, and proposedVocab frontmatter blocks, and three formal body sections (Theory / model, Method, Empirical specifications) with equations transcribed from the source PDF read this session (eqs. 1, 4-18, 21-22, 25-30, B1-B7; pp. 561-602). Core results table and Attribution block are unchanged from the verified version above. New formal sections are extracted, not yet re-verified by paper-verifier.'
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-01
      role: verified
      note: 'Locators and reported magnitudes re-checked against the source PDF (all 42 pages); all 8 result rows confirmed correct. One fix: "(r+delta)/a = 0.44 * 0.11 $/kWh" corrected to "0.40 * 0.11 $/kWh" in the Alternative Calibration section (PDF p. 587 states 0.40, not 0.44; arithmetic result 0.044 was already correct). All equations (4-18, 21-22, 25-27, 30) verified term-by-term; all propositions and locators confirmed. No em-dashes or colorful adjectives found.'
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-03
      role: extracted
      note: >-
        Added classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) from a fresh PDF read; existing results and
        sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-04
      role: verified
      note: >-
        Classification axes (identification, contributionType, mechanisms,
        introducesData, data-scope) re-checked against the source PDF; two fixes
        applied - mechanisms changed from [taxes] to [externality] (pollution
        externality is the primary channel; taxes is the instrument, not the
        friction; externality proposed in proposedVocab), and scope.dataType
        extended to [market, accounting, other] to cover Trucost emissions data.
    - by: paper-distiller (claude-sonnet-4-6)
      date: 2026-06-04
      role: extracted
      note: >-
        Added the effectiveness axis (findings[] per Core-results row,
        resultType) built from the page's already-verified Core-results table and
        relatesTo edges; existing results and sections unchanged.
    - by: paper-verifier (claude-sonnet-4-6)
      date: 2026-06-04
      role: verified
      note: >-
        Effectiveness axis (findings[] values/direction, resultType) re-checked
        against the source PDF; all four entries confirmed correct - R5 0.19 pp
        (p.584), R6 3.2 pp / 8.0 pp (pp.564, 587 eq.27), R7 slope=4 (pp.564-565),
        R8 ~10% of intended level (p.600) all match the PDF; directions and
        resultType new-finding are defensible; no fixes required.
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the model it builds on (a dynamic
general-equilibrium model with firms, households, and carbon externalities),
and the theory it contributes (sustainable discount rates as a second-best
substitute for carbon taxes) with the defining equations: enough to know what
it found and how, without reading all 42 pages. To replicate or extend it,
read the full source at the [original](https://doi.org/10.1111/jofi.70022)
(CC BY 4.0; open access).

## TL;DR

In a dynamic general-equilibrium model with green and brown firms, carbon
taxes, and ESG investors, Pedersen shows: (i) when the carbon price is
at the social cost, green finance should not be used; (ii) when carbon
prices are too low, green finance can restore the social optimum if each
firm's cost of capital is set to its *sustainable discount rate*, which
equals the normal rate plus the ratio of untaxed carbon externality to
firm value. Calibration with Trucost emissions and CRSP/Compustat values
shows the market-value-weighted average sustainable discount rate
adjustment for U.S. firms is only 0.19 pp at a 43 $/tCO2 social cost,
while the brown electricity sector requires a 3.2 pp (average) to 8 pp
(alternative calibration) increase. Empirical evidence from Eskildsen
et al. (2024) suggests current green finance has an effect equivalent to
only ~4 $/tCO2, far below what a green transition requires.

## Core results

Magnitudes and significance are as reported. Locators point into the
source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Carbon tax at the social cost is sufficient; green finance should not be used** when carbon is efficiently priced | Proposition 1, p. 576 | Social optimum implemented by scope-1 taxes at $$\tau = S$$; discount rates stay at $$r$$ for all firms; green finance distorts the equilibrium if applied on top |
| R2 | **Sustainable discount rate implements the social optimum** when carbon tax is too low, if firms can commit to future emissions | Proposition 4, pp. 578-579, eq. (17) | $$r^*_{it} = r + (S_{t+1} - \tau_{it+1}) X_{it+1} / v_{it}$$; equals normal rate plus firm's carbon burden rate (untaxed externality scaled by firm value) |
| R3 | **Scope 1+2 sustainable discount rates can handle stranded assets** where scope-1-only rates fail | Proposition 5, pp. 579-580, eq. (18) | Discount rate adds both direct (scope 1) and indirect (scope 2) carbon burden; brown electricity firms collapse as in the social optimum; stranded-asset problem resolved |
| R4 | **Green electricity firms can receive subsidized discount rates** as compensation for implicit over-taxation via scope-2 rules | Proposition 6, pp. 580, eqs. (19)-(20) | Green electricity discount rate $$r_{gt} = r - (S_{t+1} - \tau_{t+1})(F_b - F_g) G_{t+1} / v_{gt}$$; lower than normal rate $$r$$; mirrors Proposition 3 green-subsidy result |
| R5 | **Market-value-weighted average sustainable discount rate adjustment is 0.19 pp** for U.S. firms at S = 43 $/tCO2 (scope 1) | Figure 1 / Figure 3, pp. 564, 584; §VI.A | Median scope-1 burden rate 0.01%; market-weighted average 0.19%; scope 1+2 weighted average 0.23% (median 0.04%); most firms near baseline, a minority account for bulk of economy-wide emissions |
| R6 | **Brown electricity sector requires a 3.2 pp average increase** in cost of capital (scope 1); alternative calibration gives 8 pp | Figure 1, p. 564; §VI.C, p. 587, eq. (27) | Brown electricity average 8.2% (3.2 pp above 5% baseline) at S = 43 $/tCO2; alternative calibration (zero-profit, $$F_b = 820 \times 10^{-6}$$ tCO2/kWh, 40% profit margin): $$r_{bt} = 5\% + 8.0\% = 13\%$$ |
| R7 | **Empirical green finance implies an effective carbon tax of only ~4 $/tCO2**, far below the social cost | Figure 1, p. 564-565; Eskildsen et al. (2024) | Slope of 4 on emission-to-value ratio from regressing firms' implied cost of capital; corresponds to implicit $$S - \tau = 4$$ $/tCO2; at least an order of magnitude below what a green transition requires |
| R8 | **Carbon offset markets exhibit low and variable prices**, predicted by the model as a sign of greenwashing | Appendix D, pp. 599-600 | In equilibrium, offset prices must be proportional to quality ($$\phi_q = \bar{\phi} \cdot q$$); any price dispersion implies poor-quality offsets; firms buying low-quality offsets face an effective carbon tax reduced to ~10% of intended level |

**Overall (paper's conclusion).** Green finance is a second-best response
when carbon pricing is inadequate, but implementation challenges (commitment
problems, stranded assets, heterogeneous investors, greenwashing) make it
difficult to deliver the required cost-of-capital adjustments. Regions able
to impose a carbon tax have a clearer path to a green transition.

## Theory / model

The model is a dynamic general-equilibrium model (Section III, pp. 572-575).
There are $$N$$ goods-producing firms, green and brown electricity producers, and
a representative household. The paper extends the equilibrium ESG investing
framework of Pastor, Stambaugh, and Taylor (2021) to show exactly when green
finance can and cannot replicate a carbon tax.

**Goods-producing firms.** Firm $$i$$ at time $$t$$ chooses labor $$L_{it}$$, green
electricity $$G_{it}$$, brown electricity $$B_{it}$$, scope-1 emissions $$X_{it}$$, and
investment $$I_{it}$$ to maximize endogenous firm value $$V_{it}$$. Output is
$$Y_{it}(z_{it})$$ where $$z_{it} = (K_{it}, L_{it}, G_{it}, B_{it}, X_{it})$$.
Capital accumulates as $$K_{it} = (1 - \delta) K_{it-1} + I_{it-1}$$.
Firm profit (eq. 8, p. 573):

$$
\Pi_{it}(z_{it}) = Y_{it} - w_t L_{it} - p_{gt} G_{it} - p_{bt} B_{it}
                  - \tau_{it} X_{it} - \tau_{it}^{(2)} f_b B_{it} - \tau_{it}^{(2)} f_g G_{it}
$$

where $$\tau_{it}$$ is a scope-1 carbon tax on direct emissions $$X_{it}$$;
$$\tau_{it}^{(2)}$$ is a scope-2 carbon tax on indirect emissions via electricity
use; $$f_b$$ ($$f_g$$) is the fossil intensity of brown (green) electricity in tCO2/kWh.

The firm maximizes its endogenous value (eq. 9, p. 573):

$$
V_{it}(K_{it}) = \max_{z_{it+1}} \frac{\Pi_{it+1}(z_{it+1}) + V_{it+1}(K_{it+1})}{1 + r_{it}} - I_{it}
$$

taking the discount rate $$r_{it}$$ as given.

**Stylized two-period model (Section II, pp. 570-572).** A single firm uses
capital $$K$$ and fuel $$X$$, with output (eq. 4, p. 570):

$$
Y = AK - \frac{1}{fK}(fK - X)^2
$$

where $$A > 0$$ is productivity and $$f > 0$$ captures how polluting the firm is.
Given a carbon tax $$\tau$$, profit is (eq. 5, p. 570):

$$
\Pi = AK - \frac{1}{fK}(fK - X)^2 - \tau X
$$

The profit-maximizing emission is $$X = (1 - \tau/2) fK$$.

**Electricity firms.** Green electricity producer profit (eq. 10, p. 574):

$$
\Pi_{gt}(z_{gt}) = (p_{gt} + v_{gt} - \tau_{gt} F_g) G_t(z_{gt}) - \chi_{gt}(z_{gt})
$$

where $$v_{gt}$$ is a proportional government subsidy and $$\chi_{gt}$$ is production
cost. Brown electricity producer profit (eq. 11, p. 574):

$$
\Pi_{bt}(z_{bt}) = (p_{bt} - \tau_{bt} F_b) B_t(z_{bt}) - \chi_{bt}(z_{bt})
$$

where $$\tau_{bt}$$ is the direct carbon tax and $$F_b > F_g$$ is the fossil intensity
of brown electricity.

**Households.** The household owns shares $$\theta_{it}$$ in each firm. Consumption
(eq. 12, p. 574):

$$
C_t = w_t L_t + \sum_{i \in I} \theta_{i,t-1} (\Pi_{it} + V_{it})
      - \sum_{i \in I} \theta_{it} (V_{it} + I_{it}) + G_t
$$

where $$G_t$$ is the government budget (carbon taxes net subsidies). Household
utility (eq. 13, p. 574):

$$
U = \sum_{t=1}^{\infty} \beta^t [ u_t(C_t) - d_t(X_t) ]
$$

where $$\beta$$ is the time-preference rate, $$u_t$$ is consumption utility, $$d_t$$ is the
damage of aggregate emissions $$X_t = \sum_i X_{it} + X_{gt} + X_{bt}$$.

**Social planner's problem.** The planner maximizes $$U$$ subject to resource
constraints (eq. 14, p. 575):

$$
\sum_i G_{it} = G_t, \quad \sum_i B_{it} = B_t, \quad \sum_i L_{it} = L_t, \quad \theta_{it} = 1
$$

The social cost of carbon $$S_t = d'_t(X_t) / u'_t(C_t)$$ is the marginal
utility cost of pollution relative to the marginal utility of consumption.

**Key propositions.**
- Proposition 1 (p. 576): The social optimum is a competitive equilibrium
  with scope-1 carbon taxes $$\tau_{it} = S_t$$ for all firms, no green subsidies,
  and discount rate $$r_{it} = r$$ for all $$i$$.
- Proposition 2 (p. 576): The social optimum can also be implemented via
  scope-2 carbon taxes $$\tau_{it}^{(2)} = S_t$$ with no direct scope-1 taxes on
  goods producers.
- Proposition 3 (p. 577): With scope-2 taxes treating all electricity as
  brown, the social optimum requires a proportional subsidy to green
  electricity producers $$v_{gt} = S_t(F_b - F_g)$$.

Chittaro, Piazzesi, Sena, and Schneider (2025) generalize this framework with
a rich input-output structure and short-sale constraints (p. 565).

## Method

The paper is theoretical; it derives closed-form sustainable discount rates
analytically and then calibrates them with external data. The method builds on
`dynamic-general-equilibrium` and `pigouvian-taxation`.

**Deriving the sustainable discount rate (Section V.A, pp. 577-579).** Green
finance must set each firm's discount rate $$r_{it}$$ such that the firm's
optimization problem under the too-low carbon tax $$\tau_{it}$$ yields the same
choices $$z_{it+1}$$ as the star-equilibrium under the social cost $$S_t$$. The
condition (eq. 15, p. 577) is:

$$
\max_{z_{it+1}} \frac{\Pi_{it+1}(z_{it+1}) + V_{it+1}}{1 + r_{it}} - I_{it}
  = V_{it}
  = \max_{z_{it+1}} \frac{\Pi_{it+1}(z_{it+1}) + V_{it+1} - (S_{t+1} - \tau_{it+1}) X_{it+1}}{1 + r} - I_{it}
$$

where the right side is the star-equilibrium firm problem under the optimal
carbon tax. Solving for $$r_{it}$$ (eq. 16, p. 578; full derivation pp. 578):

$$
r_{it} = \frac{(1+r)(\Pi_{it+1} + V_{it+1})}{\Pi_{it+1} + V_{it+1} - (S_{t+1} - \tau_{it+1}) X_{it+1}} - 1
       = r + \frac{(S_{t+1} - \tau_{it+1}) X_{it+1}}{v_{it}}
$$

where $$v_{it} = (\Pi_{it+1} + V_{it+1} - (S_{t+1} - \tau_{it+1}) X_{it+1}) / (1 + r)$$
is the firm's social value, equal to its market value in equilibrium.
This is the `carbon-burden-rate` term: the missing carbon tax $$(S - \tau)$$ times
emissions $$X$$, scaled by firm value $$v$$. Equations (17)-(20) state the four
Propositions (4, 5, 6) in this notation (pp. 578-580).

**Investor preferences that generate the sustainable discount rate (Section V.B,
p. 581).** When investors experience a disutility proportional to their
carbon-footprint ownership (eq. 21, p. 581):

$$
\sum_i \theta_{it} (\Pi_{it+1} + V_{it+1}) + \left(W_t - \sum_{i \neq 1} \theta_{it} v_{it}\right)(1+r)
  - \sum_i (S_{t+1} - \tau_{it+1}) \theta_{it} X_{it+1}
$$

the FOC w.r.t. $$\theta_{it}$$ yields the required return (eq. 22, p. 581):

$$
r_{it} = r + \frac{(S_{t+1} - \tau_{it+1}) X_{it+1}}{v_{it}}
$$

which is exactly the sustainable discount rate (17). This shows green finance
works precisely when the marginal investor fully internalizes externalities.

**Long-term sustainable discount rate (Section VII.A, pp. 587-588).** Using a
Gordon growth model with dividend growth $$g_{\Pi}$$ and externality growth $$g_X$$
(eq. 30, p. 588):

$$
\bar{r}^x_i = r + \frac{(S - \tau_i) X_i}{v_i} \cdot \frac{r - g_{\Pi}}{r - g_{X_i}}
           = r + \frac{\text{PV}[(S - \tau_i) X_i]}{v_i} \cdot \frac{1}{\text{Dur}_i}
$$

where $$\text{Dur}_i = 1 / (r - g_{\Pi})$$ is the modified duration of dividends. The
long-term sustainable discount rate is smaller than the short-term rate
$$r^*_{it}$$ when emission growth is below dividend growth ($$g_X < g_{\Pi}$$).

**Alternative calibration for brown electricity (Section VI.C, pp. 586-587).**
With a constant-returns-to-scale brown electricity technology $$B_t = a K_{bt}$$,
cost $$\chi_{bt} = \bar{\chi} \cdot a K_{bt}$$, and the zero-profit condition (eq. 24-27):

$$
p_{bt+1} = \tau_{bt+1} F_b + \bar{\chi} + \frac{r_{bt} + \delta}{a} \tag{24}
$$

$$
r_{bt} = r + (S_{t+1} - \tau_{bt+1}) F_b \cdot a \tag{25}
$$

$$
r_{bt} = r + \frac{(S_{t+1} - \tau_{bt+1}) F_b}{(r+\delta)/a} \cdot (r + \delta) \tag{26}
$$

Calibrated at S = 43 $/tCO2, $$F_b = 820 \times 10^{-6}$$ tCO2/kWh, $$(r+\delta)/a = 0.40 \times 0.11$$ $/kWh (eq. 27, p. 587):

$$
r_{bt} = 5\% + \frac{43 \times 820 \times 10^{-6}}{0.40 \times 0.11} \times (5\% + 5\%)
       = 5\% + \frac{0.035}{0.044} \times 10\% = 5\% + 8.0\% = 13\% \tag{27}
$$

## Empirical specifications

The paper is primarily theoretical; there is no econometric estimation. The
empirical content is a calibration exercise (Section VI, pp. 582-587) using
external data, plus a single regression from Eskildsen et al. (2024).

**Calibration of sustainable discount rates (Section VI.A, pp. 582-584).**
For each U.S. publicly listed firm with Trucost scope-1 emissions data (fiscal
year 2021), the scope-1 sustainable discount rate from Proposition 4 is
computed as (eq. 17):

$$
r^x_{it} = r + \frac{(S_{t+1} - \tau_{it+1}) X_{it+1}}{v_{it}}
$$

- $$X_{it+1}$$: Trucost scope-1 CO2 emissions in tCO2 for fiscal year 2021
- $$v_{it}$$: firm market value = CRSP market equity + Compustat book value of debt,
  beginning of calendar year 2021
- $$S_{t+1} - \tau_{it+1}$$: set to $$S = 43$$ $/tCO2 (Nordhaus (2019) baseline; $$\tau = 0$$ for illustration)
- $$r$$: set to 5% for illustration

The social cost of carbon $$S_t$$ is taken as given from the Nordhaus (2019)
calibrations and translated into a cost-of-capital adjustment. The resulting
firm-level rates are aggregated to value-weighted industry
averages using two-digit GICS sectors (Utilities split into Renewable
Electricity, Brown Electricity, and Other Utilities).

**Scope 1+2 calibration (Section VI.B, p. 585).** Same procedure as above but
using Proposition 5, adding scope-2 emissions $$X^{\text{scope2}}_{it+1} = F_b B_{it+1} + F_g G_{it+1}$$
(also from Trucost). Each firm's scope-2 electricity estimate is
multiplied by 1/0.6 = 1.67 to proxy total brown-equivalent consumption
(60% of U.S. electricity from fossil fuels, 40% from renewables/nuclear).

**Empirical regression (Figure 1, pp. 564-565; Eskildsen et al. 2024).**
Eskildsen et al. (2024) regress firms' implied cost of capital on their
emission-to-asset ratio, controlling for risk characteristics:

$$
\text{implied\_COC}_i = \alpha + \beta \cdot \frac{X_i}{v_i} + \gamma \cdot \text{controls}_i + \epsilon_i
$$

The estimated slope $$\beta = 4$$ ($/value per tCO2/value = $/tCO2). The paper
reads this as empirical evidence that the market is pricing carbon externalities
as if the implicit social cost minus explicit carbon tax is $$S - \tau = 4$$ $/tCO2,
far below Nordhaus's 43 $/tCO2 estimate (R7 above).

No panel regressions, fixed effects, or standard-error treatments are applied
by the paper itself; the calibration is a direct plug-in of equation (17) into
data.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Trucost (scope 1 and scope 2 emissions, fiscal year 2021) | Firm-level carbon emission data for calibrating sustainable discount rates; scope 1 emissions in tCO2 per fiscal year; scope 2 electricity-based emissions | [Trucost](/wiki/licensed/trucost/) (licensed) |
| CRSP and Compustat (2021) | Market value of equity and book value of debt for constructing firm value $$v_{it}$$ used in calibration; also used to identify GICS industry sectors | [WRDS / CRSP / Compustat](/wiki/licensed/wrds/) (licensed) |
| Eskildsen et al. (2024) working paper data | Cross-sectional regression of firms' implied cost of capital on emission-to-asset ratio; slope estimate of 4 used as empirical calibration of effective implicit carbon tax | No page yet |
| U.S. Energy Information Administration (electricity price data, 2021) | Average electricity price 0.11 $/kWh used in alternative calibration (§VI.C) | No page yet |

Sample: U.S. publicly listed firms with Trucost emission data, fiscal year 2021;
roughly 3,000+ firms ranked by scope-1 externality rate (Figure 3, p. 584).
The paper's model is calibrated at a single cross-section; no time-series
econometrics are performed.

## When to read the full paper

Use the [original article](https://doi.org/10.1111/jofi.70022) if you are:
extending the model to heterogeneous investors or multiple externalities
(see also Pedersen 2026, *J. Finance: Insights and Perspectives*, forthcoming);
calibrating sustainable discount rates for a specific sector or carbon-tax
scenario using the exact proposition formulas; auditing a specific proposition
or appendix proof (all proofs are in Appendix A); or doing a literature
review on the carbon-pricing versus ESG debate. The Appendix B Cobb-Douglas
model provides an alternative tractable derivation of the sustainable discount
rate for readers preferring that functional form.

## Attribution and rights

Source: peer-reviewed, *The Journal of Finance* 81(2). This distillation
was extracted by an LLM on 2026-05-31 and augmented on 2026-06-01; it is
**not human-verified or independently reproduced**. The article is open access
under CC BY 4.0; this page is an adaptation (core results extracted and
re-expressed; changes were made).

> **Attribution (CC BY 4.0).** Pedersen, Lasse Heje.
> "Carbon Pricing versus Green Finance." *The Journal of Finance* 81, no. 2
> (April 2026): 561–602. DOI: 10.1111/jofi.70022. © 2026 The Author(s).
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
