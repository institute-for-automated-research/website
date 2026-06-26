---
title: "Generalist CEO and Managerial Challenge: Gelman, Fralich, Bitektine & Zahraei (2026)"
description: >-
  Distilled: CEO generalist experience raises announcement CARs only when the hiring firm faces a
  managerial challenge (high complexity or prior poor performance); the pooled average effect is
  zero. CEO compensation carries a stable experience premium regardless of firm challenge. Journal
  of Corporate Finance vol. 97 (2026), CC BY 4.0. Nine core results with source locators, datasets
  used, the CEO job-market toy model, and the event-study and OLS interaction specifications.
sidebar:
  label: Gelman et al. 2026
  order: 1
tags: [paper-summary, corporate-governance, executive-compensation, ceo-turnover, managerial-ability,
       event-study, panel-regression, open-access, cc-by, peer-reviewed, unreplicated,
       data:wrds, data:worldscope, data:factiva]
paper:
  authors: Sergey Gelman, Russell Fralich, Alex Bitektine, Sara Zahraei
  authorList:
    - { family: Gelman, given: Sergey, orcid: "0000-0001-6670-1457", affiliation: "Concordia University" }
    - { family: Fralich, given: Russell, orcid: "0000-0002-7232-2485", affiliation: "HEC Montréal" }
    - { family: Bitektine, given: Alex, orcid: "0000-0003-0266-3759", affiliation: "Concordia University" }
    - { family: Zahraei, given: Sara, affiliation: "Concordia University" }
  year: 2026
  venue: Journal of Corporate Finance 97 (2026) 102917
  venueShort: J. Corp. Finance 2026
  doi: 10.1016/j.jcorpfin.2025.102917
  tier: field
  jel:
    codes: [G34, M12, G14]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-26
  topics: ["Human Resource and Talent Management", "Corporate Finance and Governance", "Leadership and Management in Organizations"]
  dataAccess: licensed-commercial
  outcome:
    - cumulative abnormal return around new CEO announcement
    - CEO total compensation (log)
    - long-term industry-adjusted ROA and Tobin's Q
  outcomeClass: [security-returns, firm-real-outcomes, labor-careers-health]
  license: "CC BY 4.0 (Crossref: content-version vor, URL http://creativecommons.org/licenses/by/4.0/, start 2025-11-18)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF via doi.org/10.1016/j.jcorpfin.2025.102917 (CC BY 4.0, confirmed 2026-06-26)"
  redistribution: "extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)"
  resultsCount: 9
  citedByCount: 1
  methods:
    role: both
    family: reduced-form-causal
    buildsFrom: [event-study, panel-regression, survival-analysis, matching]
    identification: selection-on-observables
  contributionType: [new-theory, new-fact]
  mechanisms: [ceo-firm-complementarity]
  scope:
    region: US
    assetClass: US equities (S&P 1500 common stocks)
    period: 2000-01..2015-12
    frequency: mixed
    dataType: [market, accounting, administrative, text]
    granularity: [firm, individual]
    n: "1095 CEO turnovers in S&P 1500-listed firms, 2000-2015"
  findings:
    - { ref: R1, outcome: "cumulative abnormal return around new CEO announcement", metric: coefficient, value: "0.00252 (se = 0.00248), not significant", direction: none }
    - { ref: R2, outcome: "cumulative abnormal return around new CEO announcement", metric: coefficient, value: "GAI x Complexity index = 0.00405** (se = 0.00183)", direction: positive }
    - { ref: R3, outcome: "cumulative abnormal return around new CEO announcement", metric: coefficient, value: "GAI x High complexity = 0.00900** (se = 0.00372); F-test split p = 0.0433", direction: positive }
    - { ref: R4, outcome: "cumulative abnormal return around new CEO announcement", metric: coefficient, value: "GAI x Performance index = -0.00654*** (se = 0.00241); F-test split p = 0.0028", direction: negative }
    - { ref: R5, outcome: "cumulative abnormal return around new CEO announcement", metric: coefficient, value: "GAI x Low performance = 0.00874*** (se = 0.00329)", direction: positive }
    - { ref: R6, outcome: "cumulative abnormal return around new CEO announcement", metric: coefficient, value: "GAI x Any challenge = 0.00727*** (se = 0.00281); vs No Challenge p = 0.0031", direction: positive }
    - { ref: R7, outcome: CEO total compensation (log), metric: coefficient, value: "GAI = 0.0728** (se = 0.0307); moderation by complexity or performance not significant", direction: positive }
    - { ref: R8, outcome: "cumulative abnormal return around new CEO announcement", metric: coefficient, value: "GAI_SURP x Any challenge = 0.00743** (se = 0.00289); GAI_SURP x No challenge = -0.00738* (se = 0.00442)", direction: mixed }
    - { ref: R9, outcome: long-term industry-adjusted ROA, metric: coefficient, value: "GAI_SURP x Complexity index = 0.00592** (se = 0.00252)", direction: positive }
  resultType: new-finding
  relatesTo:
    - { cite: "Custodio, Ferreira and Matos (2013)", doi: '10.1016/j.jfineco.2013.01.001', relation: extends, note: "uses their GAI measure; extends their null CAR finding by showing it is conditional on firm-level challenge" }
    - { cite: "Betzer, van den Bongard and Limbach (2020)", relation: contradicts, note: "their broad null investor reaction to CEO experience explained by pooling challenge and non-challenge firms" }
    - { cite: "Gabaix and Landier (2008)", doi: '10.1162/qjec.2008.123.1.49', relation: builds-on, note: "competitive assignment framework; CEO compensation tied to market-average firm outside option, not hiring-firm challenge" }
    - { cite: "Pan (2017)", relation: builds-on, note: "CEO assignment and value creation with CEO labor-market frictions" }
    - { cite: "Tervio (2008)", doi: '10.1257/aer.98.3.642', relation: builds-on, note: "CEO-firm assignment and total surplus framework motivating complementarity assumptions" }
    - { cite: "Demerjian, Lev and McVay (2012)", relation: builds-on, note: "residual firm efficiency measure used as performance component of the moderating index" }
    - { cite: "Hambrick et al. (2005)", doi: '10.5465/amr.2005.17293355', relation: cites, note: "managerial challenge concept as motivation for why complexity and poor performance demand skilled managers" }
  openQuestions:
    - "Why complex firms do not attract more experienced generalist CEOs and do not offer higher compensation for experience relative to non-complex firms, despite creating more investor surplus from the match: noted as an open pattern and an avenue for future research (p. 20)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-26, role: extracted, note: "Read full PDF; not human-verified; not reproduced. CC BY 4.0 confirmed via Crossref API." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-26, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; 3 fixes: CAPM Alpha citation corrected from Carhart (1997) to Jensen (1969) per PDF p. 7; R6 locator widened from col 8 to cols 7-8 (Double Challenge term is col 7, Any Challenge is col 8); colorful adjective removed from openQuestions." }
  licenceVerification:
    - { source: "Crossref works/10.1016/j.jcorpfin.2025.102917", checked: 2026-06-26, by: "paper-distiller (claude-sonnet-4-6)", found: "license[]: vor CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/, start 2025-11-18); also tdm licenses from Elsevier" }
---

**What this is.** This is a machine-distilled skeleton of the paper. Read the
[original article](https://doi.org/10.1016/j.jcorpfin.2025.102917) to replicate or extend the results.

## TL;DR

Gelman, Fralich, Bitektine and Zahraei study whether investors react positively to generalist CEO
experience at new CEO announcements, and why prior studies found no such reaction. Using 1095 CEO
turnovers in S&P 1500 firms from 2000 to 2015 and the General Ability Index (GAI) of Custodio,
Ferreira and Matos (2013), they find no significant average CAR response to CEO experience. However,
when the firm is complex (large in scale and scope of operations) or has performed poorly prior to the
CEO change, investors react positively to higher GAI. One standard deviation of experience raises
market capitalization by about 0.85% for a complex firm and 0.82% for a poorly performing firm; in
firms facing at least one challenge (roughly two-thirds of the sample), the effect is 0.68%. CEO
compensation, by contrast, carries a positive and stable experience premium (7.3% per SD) regardless
of firm challenge, consistent with a CEO job-market model where the outside option is priced against
average-firm challenge rather than the specific hiring firm.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|---|---|---|
| R1 | Base effect of CEO generalist experience (GAI) on 5-day announcement CARs: no significant average effect | Table 4, col 1, p. 11 | GAI coeff = 0.00252 (se = 0.00248), not significant |
| R2 | Firm complexity positively moderates the GAI-CAR relation (linear interaction) | Table 4, col 2, p. 11 | GAI × Complexity index = 0.00405\*\* (se = 0.00183) |
| R3 | High-complexity firms show positive investor reaction to CEO experience; low-complexity firms do not | Table 4, col 3, p. 11 | GAI × High complexity = 0.00900\*\* (se = 0.00372); F-test split-sample p = 0.0433 |
| R4 | Prior firm performance negatively moderates the GAI-CAR effect (higher performance, smaller GAI benefit) | Table 4, col 4, p. 11 | GAI × Performance index = −0.00654\*\*\* (se = 0.00241); F-test split-sample p = 0.0028 |
| R5 | Low-performing firms: CEO experience raises CARs by 0.82%; high-performing firms: no significant effect | Table 4, col 5, p. 11 | GAI × Low performance = 0.00874\*\*\* (se = 0.00329); GAI × High performance = −0.00439 (not sig) |
| R6 | Any-challenge firms: one SD in GAI raises CARs by 0.68%; Double Challenge shows the largest effect | Table 4, cols 7-8, p. 11 | GAI × Any challenge = 0.00727\*\*\* (se = 0.00281); GAI × Double challenge = 0.0162\*\*\* (se = 0.00545); vs No Challenge p = 0.0031 |
| R7 | CEO compensation premium for generalist experience is positive and unmoderated by firm challenge | Table 5, col 1, p. 13 | GAI = 0.0728\*\* (se = 0.0307); 7.3% per SD; no significant moderation by complexity or performance |
| R8 | GAI Surprise robustness: challenge firms show positive CARs; no-challenge firms show negative CARs | Table 6, col 8, p. 15 | GAI\_SURP × Any challenge = 0.00743\*\* (se = 0.00289); GAI\_SURP × No challenge = −0.00738\* (se = 0.00442) |
| R9 | Long-term ROA: complexity positively moderates the effect of residual CEO experience on operational performance | Table 7, col 2, p. 16 | GAI\_SURP × Complexity index = 0.00592\*\* (se = 0.00252) |

**Overall.** Generalist CEO experience benefits investors when the firm faces at least one dimension of
managerial challenge (complexity or prior poor performance), and appears to destroy value for firms
without such challenge. CEO compensation does not share this conditionality: boards pay a consistent
premium for experience irrespective of firm challenge, consistent with the theoretical prediction that
CEO outside options are tied to market-average challenge, not the specific firm. Betzer, van den
Bongard and Limbach (2020)'s absence of a broad investor reaction is explained by pooling challenge
and non-challenge firms where the effects partially cancel.

## Theory / model

The paper develops a two-round CEO job-market model (Appendix A, pp. 21-22) grounded in the
competitive assignment literature of Gabaix and Landier (2008), Pan (2017), and Tervio (2008).
The model has limited market participation: only one CEO candidate enters per period and faces one
firm in round one, with probability $$\pi$$ the candidate also meets a second firm in round two.

**Total surplus.** The production function assumes complementarity between firm challenge $$c_j$$ and
CEO generalist experience $$m_i$$, so total surplus from a match is:

$$T(c_j, m_i) = c_j \cdot m_i \tag{A1}$$

Investor (residual) surplus is the difference between total surplus and CEO compensation $$p$$:

$$v(c_j, m_i) = c_j \cdot m_i - p \tag{A2}$$

**CEO outside option and round-1 compensation.** If round two occurs, the CEO faces firm $$k$$ with
challenge $$c_k \sim U[C_{\min}, C_{\max}]$$ and receives pay equal to total surplus. The expected
round-2 compensation, conditional on entering round two, is:

$$E[p_2 \mid \text{Round two}] = E[c_k] \cdot m_i = \frac{C_{\min} + C_{\max}}{2} \cdot m_i \tag{A4}$$

The CEO's outside option in round one is the probability-weighted average of round-two pay and
current-position pay $$p_0$$:

$$\text{outside\_option} = \pi \cdot \frac{C_{\min} + C_{\max}}{2} \cdot m_i + (1-\pi) \cdot p_0 \tag{A5}$$

Because firms match the outside option exactly (they have stronger bargaining power in round one),
first-round CEO compensation is:

$$p_1 = \pi \cdot \frac{C_{\min} + C_{\max}}{2} \cdot m_i + (1-\pi) \cdot p_0 \tag{A6}$$

Taking the derivative with respect to experience shows that CEO compensation is independent of the
hiring firm's specific challenge level $$c_j$$:

$$\frac{\partial p_1}{\partial m_i} = \pi \cdot \frac{C_{\min} + C_{\max}}{2} \tag{A7}$$

**Investor surplus and the threshold.** Substituting (A6) into (A2) yields investor surplus:

$$v(c_j, m_i) = c_j \cdot m_i - \left\{ \pi \cdot \frac{C_{\min} + C_{\max}}{2} \cdot m_i + (1-\pi) \cdot p_0 \right\} \tag{A8}$$

subject to the firm participation constraint (investor surplus is non-negative):

$$c_j \cdot m_i \geq \pi \cdot \frac{C_{\min} + C_{\max}}{2} \cdot m_i + (1-\pi) \cdot p_0 \tag{A9}$$

The marginal effect of CEO experience on investor surplus is:

$$\frac{\partial v(c_j, m_i)}{\partial m_i} = c_j - \pi \cdot \frac{C_{\max} + C_{\min}}{2} \tag{A10}$$

This is positive if and only if $$c_j > \pi(C_{\max} + C_{\min})/2$$: investor surplus is increasing
in CEO experience only when the firm's challenge level exceeds the threshold. For firms below the
threshold, the CEO captures the full increment in total surplus as compensation, leaving investors no
better off with a more experienced hire.

**Hypotheses (pp. 4-5).** Drawing on the managerial challenge concept of Hambrick et al. (2005)
and the firm complexity literature, the model yields four empirical predictions:
- H1: Firm complexity positively moderates the GAI effect on investor reaction to a new CEO.
- H2: CEO experience has a positive effect on investor reaction when the firm is sufficiently complex.
- H3: Prior firm performance negatively moderates the GAI effect on investor reaction.
- H4: CEO experience has a positive effect on investor reaction when prior performance is sufficiently poor.

## Method

**General Ability Index.** Following Custodio, Ferreira and Matos (2013), CEO generalist experience
is measured by GAI, the first principal component of five standardized career-breadth variables
(p. 6):

$$\text{GAI}_{it} = 0.494 \cdot \#\_\text{positions} + 0.585 \cdot \#\_\text{firms} + 0.508 \cdot \#\_\text{industries} + 0.316 \cdot \text{CEO\_Exp\_Dummy} + 0.238 \cdot \text{Cong\_Exp\_Dummy} \tag{1}$$

where all inputs are standardized. Number of positions, firms, and industries come from BoardEx merged
with Execucomp; conglomerate experience from Worldscope. The final GAI is also standardized.

**Complexity Index.** Firm complexity captures the scale and scope dimensions of Chandler (1994)'s
analysis: the average of standardized log(number of employees) (from Compustat/Execucomp) and
number of product segments (from Worldscope, counting non-zero-sales segments in the CEO appointment
year). High complexity = upper tercile; low complexity = lower two terciles (p. 6-7).

**Performance Index.** Firm performance is isolated from industry and firm-characteristics effects
using two components (p. 7): (1) CAPM Alpha (Jensen, 1969) estimated on monthly CRSP returns
over the three years before the CEO announcement; (2) Residual Firm Efficiency from
Demerjian, Lev and McVay (2012), the residual of a regression of total factor productivity on firm
characteristics, averaged over years t-3 to t-1. The Performance Index is the average of these two
standardized measures. Low performance = below-median index in the year of turnover.

**GAI Surprise.** To partially address endogeneity from non-random CEO-firm matching, the paper
constructs GAI Surprise as the OLS residual from regressing incoming CEO GAI on Complexity,
Performance, firm controls, and departing CEO compensation (Table 3, col 4, pp. 8-10). This
isolates the portion of incoming CEO experience not predicted by observable firm characteristics
and the departing CEO's pay, which may reflect unobserved challenge.

## Empirical specifications

**Announcement CAR regression (primary, Table 4, p. 11).** The dependent variable is the
Carhart (1997) 4-factor cumulative abnormal return over a 5-day window [-2, 2] centered on the
new CEO announcement date, estimated using a [-255, -46] pre-announcement window. The baseline
regression and interaction specifications are:

$$\text{CAR}_{22,it} = \alpha + \beta_1 \text{GAI}_{it} + \beta_2 \text{GAI}_{it} \times \text{Challenge}_{it} + \beta_3 \text{Challenge}_{it} + \gamma' X_{it} + \delta_t + \delta_s + \varepsilon_{it}$$

where $$\text{Challenge}_{it}$$ is either the Complexity Index (col 2, linear) or the Performance Index
(col 4, linear), or piecewise high/low dummies (cols 3, 5), or intersection dummies for "No
Challenge" (high performance × low complexity), "One Challenge" (low performance × low complexity
or high performance × high complexity), "Double Challenge" (low performance × high complexity), and
"Any Challenge" (One + Double, cols 7-8). Controls $$X_{it}$$ include prior 3-year sales growth, log
assets, prior 3-year firm efficiency, complexity, performance, previous-year stock return and
volatility, Fasttrack, MaleY0, Insider, Forced, Unclassified, and CEO age dummies. Year and
2-digit SIC industry fixed effects are included throughout; standard errors are clustered by firm.

**Compensation regression (Table 5, p. 13).** Log total CEO compensation (TDC1 from Execucomp,
first full calendar year as CEO) is regressed on GAI and the same challenge interactions with
identical controls. This tests whether firm challenge moderates the compensation-experience relation,
as it does for CARs; the prediction is that it does not.

**GAI Surprise robustness (Table 6, p. 15).** GAI Surprise replaces GAI as the main explanatory
variable, replicating all challenge-interaction specifications with the same control set. The
purpose is to show that results hold when the experience measure isolates the component not
predicted by observable firm and departing-CEO characteristics.

**Long-term performance (Tables 7-8, p. 16-17).** Industry-adjusted ROA ($$\bar{\Omega}\_{\text{IND\_ADJ\_ROA}}_{t+1:t+3}$$)
and Tobin's Q, averaged over years t+1 to t+3 after appointment, are the outcome variables.
Lagged industry-adjusted performance ($$\Omega\_{\text{IND\_ADJ\_ROA}}_{t-1}$$) controls for mean
reversion. GAI Surprise is used as the explanatory variable to address selection; the same
challenge-interaction structure as Table 4 applies. Year and sector fixed effects; firm-clustered
standard errors. A propensity-score-matched sample (matched on complexity, performance, firm
controls, year and industry) is used as a further robustness check (Internet Appendix 7).

**CEO tenure (Cox hazard model, Table 9, p. 19).** The hazard of CEO succession is modeled as:

$$h(t) = h_0(t) \exp\!\left(\beta_1 \text{GAI}_{it} + \beta_2 \text{GAI}_{it} \times \text{Challenge}_{it} + \gamma' X_{it}\right)$$

using CEO departure dates from Execucomp as of June 30, 2024. Year and 2-digit SIC dummies; same
controls as Table 4. A higher (lower) coefficient means shorter (longer) expected CEO tenure.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| CRSP (via WRDS) | Stock prices for 4-factor Carhart CAR estimation; stock return and volatility controls | [WRDS](/wiki/commercial/wrds/) |
| Compustat (via WRDS) | Firm financial characteristics (assets, sales growth, firm size) | [WRDS](/wiki/commercial/wrds/) |
| Execucomp (via WRDS) | CEO identification; compensation (TDC1); GAI components (positions, prior CEO role) | [WRDS](/wiki/commercial/wrds/) |
| Worldscope | Number of product segments (scope dimension of Complexity Index); conglomerate experience for GAI | [Worldscope](/wiki/commercial/worldscope/) |
| BoardEx | CEO career history (positions, firms, industries) for GAI construction; merged with Execucomp and Worldscope | no page yet |
| Factiva | News articles used to classify CEO departure reason as exogenous, forced, or unclassified per Eisfeldt and Kuhnen (2013) | no page yet |
| Demerjian, Lev and McVay (2012) data | Residual firm efficiency scores (managerial ability measure); from public data supplement at faculty.washington.edu/pdemeri | no page yet |

Sample: 1095 CEO turnovers in S&P 1500-listed firms, January 2000-December 2015 (after excluding
interim CEO appointments, financial firms, and turnovers without media announcement data). Long-term
ROA/Tobin's Q analyses use 890-891 observations; CEO tenure analysis uses 1086 observations.

## When to read the full paper

Read the original when: studying CEO succession and whether CEO human capital creates value
differentially by firm type; examining whether competitive CEO assignment models with market
frictions can explain the compensation-investor-reaction disconnect; interested in the GAI
measure of Custodio, Ferreira and Matos (2013) and its interaction with firm characteristics. The
main CAR results are in Table 4 (pp. 11-12); compensation results in Table 5 (pp. 13-14); the
identification robustness using GAI Surprise in Table 6 (p. 15); and long-term performance and
CEO tenure in Tables 7-9 (pp. 16-19). The toy model and threshold derivation are in Appendix A
(pp. 21-22).

## Attribution and rights

This article is open access under a Creative Commons Attribution (CC BY 4.0) license.
Published by Elsevier B.V.

> Gelman, S., Fralich, R., Bitektine, A., & Zahraei, S. (2026). When does a generalist CEO create
> shareholder value? The effect of managerial challenge. *Journal of Corporate Finance*, 97, 102917.
> https://doi.org/10.1016/j.jcorpfin.2025.102917

Machine-distilled by paper-distiller (claude-sonnet-4-6), 2026-06-26. Not human-verified; not
reproduced. Extraction role: extracted only.
