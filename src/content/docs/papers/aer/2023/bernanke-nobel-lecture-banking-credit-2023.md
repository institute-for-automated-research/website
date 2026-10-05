---
title: "Nobel Lecture, Banking and Credit: Bernanke (2023)"
description: >-
  Distilled: Ben Bernanke's Nobel Prize lecture synthesizes his career research
  showing that informational frictions in credit markets interact with borrower
  and lender net worth to amplify and prolong economic contractions. The lecture
  argues that banking and credit disruptions complemented monetary forces in the
  Great Depression and were central to the Great Recession of 2007-2009, and explains
  the financial accelerator mechanism through which credit conditions propagate
  business cycles. American Economic Review 2023, copyright The Nobel Foundation
  2022, paywalled. Twenty-one core results with source locators, the Appendix model
  (moral hazard and credit rationing, eqs. 1-9), and the financial accelerator
  channel.
sidebar:
  label: Bernanke 2023
  order: 1
tags: [paper-summary, banking, credit-markets, financial-crises, great-depression,
       monetary-policy, business-cycles, macro, peer-reviewed, data:fred]
paper:
  authors: Ben S. Bernanke
  authorList:
    - { family: Bernanke, given: Ben S., affiliation: Brookings Institution }
  year: 2023
  venue: American Economic Review 113(5), May 2023, 1143-1169
  venueShort: AER 2023
  doi: 10.1257/aer.113.5.1143
  jel:
    codes: [E44, G21, E32]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics: ["Banking stability, regulation, efficiency", "Global Financial Crisis and Policies", "Economic Theory and Policy"]
  dataAccess: public
  outcome:
    - depth and persistence of the Great Depression
    - severity of the Great Recession of 2007-2009
    - credit-supply contraction during financial crises
    - macroeconomic transmission of banking disruptions
  outcomeClass: [macro-aggregates, credit-supply]
  license: "Copyright The Nobel Foundation 2022; published in the American Economic Review with permission of the Nobel Foundation. All rights reserved."
  licenseShort: paywalled
  access: paywalled
  machineAccess: "blocked-paywall (AEA/AER site, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 21
  citedByCount: 38
  methods:
    role: theory
    family: theory
    buildsFrom: [principal-agent]
  contributionType: [survey]
  mechanisms: [information-asymmetry, moral-hazard, financial-constraint, intermediary-constraint, fire-sale-externality, liquidity, collateral, flight-to-safety, debt-deflation]
  scope:
    region: "US (primary); 24-country international panel for Great Depression analysis"
    assetClass: "bank loans, corporate bonds, mortgages, aggregate credit"
    period: 1929-01..2014-12
    frequency: mixed
    dataType: [market, survey, other]
    granularity: [aggregate, industry, firm]
    n: "Varies by cited study; includes a 24-country Depression-era panel and US aggregate series"
  findings:
    - ref: R1
      outcome: bank loan-to-deposit ratio (Great Depression)
      metric: level
      value: "fell from 0.85 (1929) to 0.58 (January 1933), even as deposits shrank"
      direction: negative
    - ref: R2
      outcome: Baa-Aaa credit spread (Great Depression)
      metric: basis-points
      value: "rose from approximately 250 bps (1929-1930) to approximately 800 bps (mid-1932)"
      direction: positive
      vsBenchmark: "understates actual credit-risk increase because downgraded Baa bonds were excluded from the index"
    - ref: R3
      outcome: manufacturing employment decline attributed to banking crisis (1929-1933)
      metric: probability
      value: "approximately 22% of total decline in manufacturing employment 1929-1933 due to the banking crisis (Lee and Mezzanotti 2014)"
      direction: negative
    - ref: R4
      outcome: aggregate bank lending contraction (Great Depression)
      metric: index-growth
      value: "reduced by 15% between 1929 and 1933 (Mitchener and Richardson 2019)"
      direction: negative
    - ref: R5
      outcome: bank credit outstanding relative to GDP (GFC)
      metric: index-growth
      value: "fell 8.5% between Q4 2008 and Q4 2013; did not regain its December 2008 nominal level for nearly three years"
      direction: negative
    - ref: R6
      outcome: employment losses (GFC, pre-/post-Lehman contrast)
      metric: level
      value: "fewer than 1.2M jobs lost Jan-Aug 2008 (pre-Lehman); 5.4M jobs lost Sep 2008-Apr 2009 (post-Lehman)"
      direction: negative
      vsBenchmark: "post-Lehman 8-month losses approximately 4.5x the pre-Lehman 8-month losses"
    - ref: R7
      outcome: real GDP growth rate (GFC trough)
      metric: level
      value: "annualized -8.7% in Q4 2008, -4.7% in Q1 2009"
      direction: negative
    - ref: R8
      outcome: entrepreneur access to credit in the Appendix model
      metric: equilibrium-condition
      value: "a loan is extended if and only if pR - r(1 - w_i) >= [p/(p-q)]e; entrepreneurs below the endowment threshold receive no loan"
      direction: positive
    - ref: R9
      outcome: US banks failed or merged during the Great Depression
      metric: probability
      value: "close to 40 percent of the 25,000 US banks in existence in 1929 had failed or merged by 1933"
      direction: positive
    - ref: R10
      outcome: mortgage default rate in Depression-era cities surveyed
      metric: probability
      value: "ranged from 21 percent to 62 percent in the cities studied"
      direction: positive
    - ref: R11
      outcome: farm mortgage debt in default (1933)
      metric: probability
      value: "more than half of farm mortgage debt was in default in 1933"
      direction: positive
    - ref: R12
      outcome: asset-backed commercial paper outstanding (GFC)
      metric: index-growth
      value: "declined 20 percent in August 2007 alone and cumulatively 30 percent by year-end 2007"
      direction: negative
    - ref: R13
      outcome: US private credit intermediation outside commercial banks (pre-GFC)
      metric: probability
      value: "more than half of private credit intermediation took place outside commercial banks by the GFC"
      direction: positive
    - ref: R14
      outcome: single-family mortgage delinquency rate (GFC and aftermath)
      metric: probability
      value: "about 2 percent before the crisis; more than 11 percent in Q1 2010"
      direction: positive
    - ref: R15
      outcome: US unemployment rate after the Great Recession
      metric: probability
      value: "peaked at 10 percent in October 2009 and did not fall below 6 percent until five years later"
      direction: positive
  resultType: confirms
  relatesTo:
    - { cite: "Bernanke (1983)", relation: builds-on, note: "the lecture's primary empirical foundation: bank failures constrained credit supply and prolonged the Depression beyond what money alone explains" }
    - { cite: "Bernanke and Gertler (1989)", relation: builds-on, note: "agency-cost model embedding borrower net worth in the external finance premium; the financial accelerator's theoretical foundation" }
    - { cite: "Bernanke, Gertler, and Gilchrist (1999)", doi: '10.1016/s1574-0048(99)10034-x', relation: extends, note: "financial accelerator in a quantitative New Keynesian business cycle framework with heterogeneous borrowers and cross-sectional differences in external finance premiums" }
    - { cite: "Friedman and Schwartz (1963)", relation: extends, note: "the lecture argues the credit channel complements the monetarist money-supply story; credit disruptions explain depth and persistence that medium-term money neutrality leaves unexplained" }
    - { cite: "Diamond and Dybvig (1983)", doi: '10.1086/261155', relation: cites, note: "bank-run fragility from maturity transformation; explains why short-term bank funding is prone to silent runs during crises" }
    - { cite: "Stiglitz and Weiss (1981)", relation: builds-on, note: "credit rationing in markets with asymmetric information: foundational for the external finance premium framework and the role of net worth in loan access" }
  openQuestions:
    - "Future research should quantify more precisely the overall contributions of money, credit, and other factors to the phases of the Great Depression (p. 1155)."
    - "Much work remains to develop fully the implications of credit-market disruptions for economic forecasting and policymaking; the basic mechanisms seen in severe crises also operate in less dramatic business cycles (p. 1163)."
    - "Shadow banks are still allowed to take risks that traditional banks cannot, and macroprudential oversight of system-wide risks is not as strong or proactive as it should be (p. 1164)."
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: "2026-06-25", role: extracted, note: "Read PDF in full (27 pages, AER 113(5): 1143-1169). Not human-verified; not reproduced. Quantitative results in R1-R7 originate from studies cited in the lecture, not from original analysis in this article; the Appendix model equations (eqs. 1-9, pp. 1165-1167) are the lecture's original theoretical contribution." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: "2026-06-24", role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 8 Core result rows confirmed at their cited pages and all equations 1-9 verified term-by-term against pp. 1165-1167, no errors found." }
    - { by: "paper-distiller (gpt-6-luna)", date: "2026-10-04", role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and added seven quantitative findings, six distinct evidence rows, missing scope/mechanism axes, and a note on the absence of original main-text estimating equations. These additions are not human-verified and not reproduced." }
    - { by: paper-verifier (gpt-6-luna), date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] All 21 result rows, equations (1)-(9), specifications, classifications, findings, prose, and frontmatter checked against the PDF; corrected finding metrics/directions, scope/contribution axes, an unsupported model interpretation, and a mismatched DOI. Locator and relatesTo checks found no issues for this page." }
  licenceVerification:
    - { source: "Crossref works/10.1257/aer.113.5.1143", checked: "2026-06-25", by: "paper-distiller (claude-sonnet-4-6)", found: "No open-access or CC licence in Crossref metadata. PDF first page states: 'This article is copyright The Nobel Foundation 2022 and is published here with the permission of the Nobel Foundation.' AEA/AER standard paywalled access; no delay-in-days or open-licence URL found." }
---

**What this is.** This is the LLM-distilled skeleton of Ben Bernanke's Nobel Prize lecture, a revised version of the talk delivered in Stockholm on December 8, 2022, published in the American Economic Review. Read the original at https://doi.org/10.1257/aer.113.5.1143 to replicate or extend. Quantitative results in the Core results table originate from studies cited in the lecture; the Appendix provides a stripped-down theoretical illustration of the credit threshold.

## TL;DR

Credit markets are permeated by informational frictions: borrowers know more than lenders about their own riskiness and effort. These frictions, identified by Stiglitz and Weiss (1981) and formalized in the principal-agent framework of Ross (1973), create a wedge between the cost of external and internal finance (the external finance premium) that rises when borrower and lender net worth falls. When a financial shock destroys net worth, the premium spikes, credit contracts sharply, and real activity falls and stays depressed long after the initial shock - a mechanism Bernanke and Gertler (1989) embed in a dynamic general equilibrium model and call the financial accelerator.

Bernanke synthesizes evidence across two crises: the Great Depression of the 1930s and the Global Financial Crisis (GFC) and Great Recession of 2007-2009. In both episodes, banking and credit-market disruptions amplified contractions; for the Depression, Bernanke presents them as complementing monetary forces and challenging the strict view that money-supply declines alone explain the downturn. A simple Appendix model formalizes how limited liability and moral hazard prevent low-net-worth entrepreneurs from obtaining credit, even at higher interest rates.

## Core results

| # | Result | Locator | Magnitude as reported |
|---|--------|---------|----------------------|
| R1 | Bank loan-to-deposit ratio collapsed (Great Depression) | p. 1150 | Fell from 0.85 (1929) to 0.58 (January 1933), even as deposits shrank |
| R2 | Baa-Aaa credit spread widened sharply (Great Depression) | p. 1151 | Rose from approximately 2.5 pp (1929-1930) to approximately 8 pp (mid-1932) |
| R3 | Banking crisis share of Depression manufacturing employment decline | p. 1154 | Approximately 22% of total 1929-1933 manufacturing employment decline due to banking crisis (Lee and Mezzanotti 2014) |
| R4 | Aggregate bank lending contraction 1929-1933 | p. 1155 | Reduced by 15% (Mitchener and Richardson 2019) |
| R5 | Bank credit/GDP declined sharply in the GFC | p. 1159 | Fell 8.5% between Q4 2008 and Q4 2013; did not regain December 2008 nominal level for nearly three years |
| R6 | Employment losses: pre- vs. post-Lehman contrast | p. 1160 | Fewer than 1.2M jobs lost Jan-Aug 2008; 5.4M jobs lost Sep 2008-Apr 2009 |
| R7 | Real GDP growth at the GFC trough | p. 1160 | Annualized -8.7% in Q4 2008, -4.7% in Q1 2009 |
| R8 | Net-worth credit threshold (Appendix model) | p. 1167, eq. (9) | Credit extended iff pR - r(1-w) >= [p/(p-q)]e; entrepreneurs below the endowment threshold receive no loans |
| R9 | Depression-era bank failures | text p. 1148 | Close to 40% of the 25,000 US banks in 1929 had failed or merged by 1933 |
| R10 | Depression-era household mortgage distress | text p. 1151 | Mortgage default rates ranged from 21% to 62% in the cities studied |
| R11 | Depression-era farm mortgage distress | text p. 1151 | More than half of farm mortgage debt was in default in 1933 |
| R12 | Run on asset-backed commercial paper | text p. 1157 | ABCP outstanding declined 20% in August 2007 alone and 30% cumulatively by year-end |
| R13 | Shift of US credit intermediation to shadow banks | text p. 1155 | More than half of private credit intermediation occurred outside commercial banks by the GFC |
| R14 | Mortgage delinquency in the GFC and aftermath | text p. 1161 | Single-family mortgage delinquency was about 2% before the crisis and above 11% in Q1 2010 |
| R15 | Slow unemployment recovery after the Great Recession | text p. 1160 | Unemployment peaked at 10% in October 2009 and took five years to fall below 6% |
| R16 | Earlier gold-standard exit and Depression recovery | text pp. 1148-1149 | Countries that left gold in 1931 or earlier, or never joined, recovered more quickly than countries that stayed on gold well into the 1930s |
| R17 | Bank distress and local Depression activity, IV evidence | text p. 1154 | State- and county-level estimates using predictors of bank distress as instruments find loan supply explains an important part of geographic variation in economic activity |
| R18 | Value of local lending relationships during bank suspensions | text p. 1154 | The economic effect of bank suspensions was greater in high-relationship areas, consistent with destruction of bank information capital |
| R19 | Lender distress versus borrower distress in the GFC | text p. 1159 | Dynamic-factor forecasts using high-frequency lender-stress indicators outperform indicators tied to mortgage delinquency and housing for output, consumption, employment, and other macro variables |
| R20 | Firm borrowing composition after monetary tightening | text pp. 1162-1163 | Firms shifted away from bank loans toward market funding; small firms' credit fell relative to large firms, consistent with a bank-lending channel |
| R21 | Credit-cost response around monetary-policy announcements | text p. 1163 | Small policy-rate movements often led to large credit-cost changes, primarily through term and risk premiums rather than the safe rate |

**Overall (paper's conclusion).** When Bernanke began this research in the late 1970s, the prevailing view treated financial markets as a veil with no independent macroeconomic role. Monetarists (Friedman and Schwartz 1963) and real-business-cycle economists both marginalized credit. The research synthesized here established banking and credit markets as central to macroeconomic fluctuations: credit-market disruptions can be important causes of economic contractions, operating through balance-sheet channels that prolong the effects of an initial shock.

## Theory / model

The Appendix, "Net Worth, Borrowing, and Investment" (pp. 1164-1167), presents a stripped-down two-period moral hazard model illustrating why only borrowers with sufficient net worth can obtain credit. The model motivates the inverse relationship between net worth and the external finance premium that underlies the financial accelerator (Bernanke and Gertler 1989, 1990) and the credit channel of monetary policy (Bernanke and Gertler 1995).

**Setup (p. 1165).** There are $$M$$ risk-neutral agents with heterogeneous endowments $$w_i \in [0, 1]$$. A subset of $$N \ll M$$ agents ("entrepreneurs") can invest in risky projects. Each entrepreneur can choose either a "good" project (probability $$p$$ of producing $$R$$ units when effort $$e$$ is exerted) or a "fair" project (probability $$q < p$$ of producing $$R$$, no effort required). Project choice and effort are private information. The condition for the good project to be socially preferred (p. 1165, eq. 1) is:

$$pR - e \geq qR \tag{1}$$

An entrepreneur with endowment $$w_i$$ must borrow $$1 - w_i$$ from competitive financial intermediaries (coalitions of non-entrepreneurs) at opportunity cost $$r$$.

**Optimal contract (p. 1166, eqs. 2-5).** The intermediary maximizes expected profit subject to the entrepreneur's participation constraint (3), incentive-compatibility constraint (4), and limited liability (5):

$$\max\{pR - r(1 - w_i) - C_p^*\} \tag{2}$$

$$C_p^* - e \geq rw_i \tag{3}$$

$$C_p^* \geq C_q^* + e \tag{4}$$

$$C_s, C_u \geq 0 \tag{5}$$

where $$C_p^* = pC_s + (1-p)C_u$$ and $$C_q^* = qC_s + (1-q)C_u$$ are expected entrepreneur payments under the good and fair projects, and $$C_s, C_u$$ are state-contingent payments on success and failure.

**Zero-profit and credit threshold (p. 1166-1167, eqs. 6-9).** Under competitive intermediation, zero profits require:

$$C_p^* = pR - r(1 - w_i) \tag{6}$$

Setting $$C_u = 0$$ (which maximizes the entrepreneur's incentive to choose the good project) yields the incentive constraint:

$$(p - q)(C_s - C_u) \geq e \tag{7}$$

Substituting (6) with $$C_u = 0$$:

$$pC_s = pR - r(1 - w_i) \tag{8}$$

Inserting (8) into the incentive-compatibility constraint and rearranging gives the credit condition (p. 1167, eq. 9):

$$pR - r(1 - w_i) \geq \left[\frac{p}{p-q}\right] e \tag{9}$$

Equation (9) is the key result: only entrepreneurs whose endowment $$w_i$$ is large enough to satisfy this inequality receive loans. Below the threshold, the intermediary cannot simultaneously cover its opportunity cost and give the entrepreneur enough residual stake to deter the fair project. The higher the borrower's net worth $$w_i$$, the more the intermediary can pay on success while satisfying its zero-profit condition, making it more likely that the entrepreneur's incentive constraint is met. The model shows that access to credit depends on net worth as well as the project's expected return.

## Method

This paper is a Nobel lecture and survey; it introduces no new estimation method. The analytical framework it synthesizes rests on two building blocks: (i) the external finance premium, defined as the all-in cost of external finance net of the safe interest rate, and (ii) the net worth of borrowers and lenders as the key linking variable between financial conditions and economic activity (pp. 1145-1147). The external finance premium framework builds on Stiglitz and Weiss (1981) (credit rationing under asymmetric information) and the principal-agent analysis of Ross (1973).

The financial accelerator (Bernanke and Gertler 1989, 1990; Bernanke, Gertler, and Gilchrist 1999) is the main conceptual tool for business-cycle analysis: endogenous changes in net worth feed back into borrowing costs and investment, amplifying any initial shock. A downturn lowers net worth, raises the external finance premium, reduces borrowing and investment, and further reduces net worth. The credit channel of monetary policy (Bernanke and Gertler 1995) follows from this: unanticipated policy tightenings reduce asset values and net worth, raising the external finance premium and magnifying the total output effect beyond what the safe-rate channel implies.

For the Depression analysis, the empirical methodology in Bernanke (1983) is reduced-form time-series regression of industrial production on bank-failure measures alongside money growth - a descriptive design that documents forecasting power rather than identifying a structural causal effect. Subsequent work applies causal designs: instrumental variables for bank distress (Calomiris and Mason 2003), city-level variation in bank exposure (Lee and Mezzanotti 2014), and interbank contagion networks (Mitchener and Richardson 2019). For the GFC, Bernanke (2018) uses dynamic factor models to compare the forecasting power of lender-stress indicators against borrower-distress indicators.

## Empirical specifications

The lecture reports no original empirical estimates, numbered main-text equations, or printed estimating specifications. The empirical evidence below is summarized from cited studies, whose full regression equations, fixed effects, and standard-error procedures are not reproduced in the lecture. The Appendix equations (1)-(9) are the lecture's only numbered equations; no additional main-text estimating equation can be transcribed without inventing a specification.

The lecture surveys empirical designs from prior work rather than reporting original estimation. The key designs it describes are as follows.

**Great Depression, aggregate time series (Section II, p. 1154).** Bernanke (1983) regressed industrial production on bank-failure variables and money growth in a vector autoregression. Bank-lending variables had significant forecasting power for industrial production over and above monetary aggregates - evidence that credit channels operate independently of money. Identification is descriptive; the challenge (noted in the lecture) is that bank credit and money move together, making it difficult to disentangle their effects without additional variation.

**Great Depression, cross-sectional and international (Section II, pp. 1154-1155).** Calomiris and Mason (2003) use Depression-era state and county data, instrumenting for bank distress using pre-crisis bank-risk predictors, and find that loan supply explains important cross-sectional variation in economic activity. Lee and Mezzanotti (2014) use city-level data to show that industries reliant on external finance were relatively more affected by local bank distress, attributing approximately 22% of manufacturing employment decline 1929-1933 to the banking crisis (p. 1154). Bernanke and James (1991) used a 24-country panel, finding that countries experiencing banking crises had sharper output declines controlling for gold-standard exit timing (Eichengreen and Sachs 1985).

**GFC, timing evidence (Section III, pp. 1159-1160).** The central empirical argument is timing: the recession became "great" only after the Lehman collapse intensified the financial crisis in fall 2008. In the eight months before Lehman (January to August 2008) the US economy lost fewer than 1.2 million jobs; in the eight months after (September 2008 to April 2009) it lost 5.4 million. Real GDP fell at annualized rates of 8.7% in Q4 2008 and 4.7% in Q1 2009, the sharpest post-WWII declines before the pandemic (p. 1160; data from FRED).

**GFC, dynamic factor models (Section III, p. 1159).** Bernanke (2018) used dynamic factor models to show that high-frequency indicators of lender stress are significantly better predictors of output, consumption, employment, and other macro variables than indicators tied to mortgage delinquency and housing. This timing argument supports the lender-distress hypothesis over the borrower-distress hypothesis (Mian and Sufi 2014b).

**Credit channel of monetary policy (Section IV, pp. 1161-1163).** Empirical tests exploit compositional shifts in firms' external finance (Kashyap, Stein, and Wilcox 1993), cross-firm borrowing cyclicality by size using post-1958 data from the Quarterly Financial Report of Manufacturing Firms (Bernanke, Gertler, and Gilchrist 1996), and asset-price responses around FOMC announcements (Gertler and Karadi 2015). Small firms - which face higher and more cyclically sensitive external finance premiums (Bernanke, Gertler, and Gilchrist 1996) - reduce external borrowing more than large firms after monetary tightenings, consistent with the credit channel.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---------|--------------|-----------|
| FRED (Federal Reserve Economic Data) | Bank credit outstanding relative to GDP, mortgage delinquency rates, business formations; cited explicitly pp. 1159, 1161 and footnotes 16, 18 | [FRED](/wiki/datasets/fred/) |
| Aggregate US banking and deposit data (1929-1933) | Loan-to-deposit ratios, bank failure counts, corporate credit spreads; sourced from Calomiris (1993) and other Depression-era historical compilations | no page yet |
| 24-country Depression-era international panel (Bernanke and James 1991) | Cross-country output and banking crisis data used to compare Depression severity by gold-standard status | no page yet |
| Quarterly Financial Report of Manufacturing Firms | Composition of external finance for small vs. large manufacturing firms (post-1958); cited p. 1162 | no page yet |

Sample scope: US aggregate credit and banking data; international Depression-era panel (24 countries); period 1929-2014; mixed frequency (monthly, quarterly, annual).

## When to read the full paper

Read the source if you want: (i) the canonical synthesis of Bernanke's career research on credit markets and macroeconomic fluctuations, written by the economist most responsible for developing the credit-market disruption framework; (ii) the Appendix model (eqs. 1-9, pp. 1165-1167) as a worked example of how limited liability and moral hazard create a net-worth threshold for credit access; (iii) the financial accelerator mechanism and the credit channel of monetary policy as laid out in Section IV; or (iv) a structured map to the broader research program: Bernanke (1983), Bernanke and Gertler (1989, 1990), Bernanke, Gertler, and Gilchrist (1999), and Bernanke (2018) are all directly synthesized here. The Diamond and Dybvig (1983) bank-run model and the Stiglitz and Weiss (1981) credit-rationing framework are also placed in context.

## Attribution and rights

This article is copyright © The Nobel Foundation 2022 and is published in the *American Economic Review* with the permission of the Nobel Foundation. Paywalled; extract-only redistribution. LLM-distilled by claude-sonnet-4-6 and gpt-6-luna; not human-authored; not reproduced.

> Bernanke, Ben S. 2023. "Nobel Lecture: Banking, Credit, and Economic Fluctuations." *American Economic Review* 113(5): 1143-1169. https://doi.org/10.1257/aer.113.5.1143
