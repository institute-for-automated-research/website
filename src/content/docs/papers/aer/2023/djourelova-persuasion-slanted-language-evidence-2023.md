---
title: "Persuasion through Slanted Language: Djourelova (2023)"
description: >-
  Distilled: Djourelova (2023) exploits the AP's April 2013 ban on the term
  "illegal immigrant" to show that slanted language diffuses from news wires to
  local media and lowers public support for restrictive immigration policies.
  American Economic Review 113(3), 2023, AEA open access. Eighteen core
  results with source locators, datasets used, identification design, and
  estimating equations.
sidebar:
  label: Djourelova 2023
  order: 1
tags: [paper-summary, political-economy, media-economics, immigration,
       text-as-data, difference-in-differences, instrumental-variables,
       panel-regression, open-access, peer-reviewed, unreplicated,
       data:factiva, data:cces, data:acs, data:newsbank-newspaper-archive]
paper:
  authors: Milena Djourelova
  authorList:
    - { family: Djourelova, given: Milena, affiliation: "University of Chicago" }
  year: 2023
  venue: "American Economic Review 113(3), March 2023, 800-835"
  venueShort: AER 2023
  doi: 10.1257/aer.20211537
  jel:
    codes: [D72, L82, Z13]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-25
  topics:
    - Media Influence and Politics
    - Media Studies and Communication
    - Political Influence and Corporate Strategies
  dataAccess: licensed-commercial
  outcome:
    - use of the term "illegal immigrant" in media outlets
    - use of the term "illegal immigrant" in AP dispatches
    - co-occurrence of "illegal" with "immigrant" in AP dispatches
    - support for increasing border security
    - support for restrictive immigration policies (index)
    - coverage of the AP ban announcement in local media
  outcomeClass: [social-preferences, cultural-change]
  license: "AEA copyright; free-to-read PDF at aeaweb.org (confirmed via OpenAlex open_access_pdf link, 2026-06-25); no Creative Commons licence found in Crossref DOI metadata"
  licenseShort: AEA open access
  access: open
  machineAccess: "open PDF (aeaweb.org/articles/pdf/doi/10.1257/aer.20211537, 2026-06-25)"
  redistribution: extract-only
  resultsCount: 18
  citedByCount: 70
  methods:
    role: applies-method
    family: reduced-form-causal
    buildsFrom: [difference-in-differences, instrumental-variables, panel-regression, lda-topic-model, text-classification]
    identification: natural-experiment
  contributionType: [new-fact]
  mechanisms: [media-framing]
  introducesData: true
  scope:
    region: US
    period: 2009-01..2020-12
    frequency: mixed
    dataType: [text, survey, other]
    granularity: [aggregate, individual]
    n: "~192,635 CCES respondents across survey waves; 2,385 media outlets, 139,523 outlet-months (2009-2017)"
  findings:
    - { ref: R1, outcome: "use of term \"illegal immigrant\" in media outlets", metric: pp-effect, value: "-3.53 p.p. per 1-SD AP intensity increase (Table 2, col 1; mean 20.28 p.p.)", direction: negative, vsBenchmark: "17% decline relative to the mean; driven by AP-sourced articles, not original content" }
    - { ref: R3, outcome: "use of the term 'illegal immigrant' in local media outlets", metric: coefficient, value: "most-left-leaning outlet quartile effect approximately twice the most-right-leaning quartile; significant in Q1-Q3 and near zero in Q4 (Figure 6, Panel A, pp. 817-818)", direction: negative }
    - { ref: R4, outcome: "support for increasing border security", metric: pp-effect, value: "-0.8 p.p. per 1-SD AP intensity increase (Table 4, col 1; mean dep. var. 0.55)", direction: negative }
    - { ref: R5, outcome: "support for increasing border security", metric: pp-effect, value: "4.5 p.p. per 10 p.p. increase in local use of the term (Table 4, 2SLS)", direction: positive, vsBenchmark: "corresponds to 2% of partisan gap; persuasion rate is 4.4% in the full sample and 1.9% among newspaper readers" }
    - { ref: R6, outcome: "support for non-immigration policies (falsification index)", metric: coefficient, value: "-0.0002 (0.001), not significant (Table 6, col 8)", direction: none }
    - { ref: R7, outcome: "support for border security", metric: coefficient, value: "moderates: -0.0071; liberals: -0.0029; conservatives: -0.0014 (Table 7, cols 4-6)", direction: negative, vsBenchmark: "moderates have the largest point estimate; equality p-value = 0.224, not statistically significant" }
    - { ref: R8, outcome: "support for border security", metric: coefficient, value: "low-foreign-born counties: -0.0087; high-foreign-born counties: -0.0001 (Table 7, cols 7-8)", direction: negative, vsBenchmark: "point estimate is larger in areas with fewer immigrants; equality p-value = 0.054" }
    - { ref: R9, outcome: "use of the term \"illegal immigrant\" in AP dispatches", metric: pp-effect, value: "share fell from 50% before the ban to less than 5% after; AP-approved substitutes rose by 6 p.p. against a 47 p.p. decline in the banned term (Figure 2, p. 808-809)", direction: negative }
    - { ref: R10, outcome: "co-occurrence of \"illegal\" with \"immigrant\" in AP dispatches", metric: coefficient, value: "association fell from 0.66 before the ban to 0.21 after (Figure 3, Panel A, p. 810)", direction: negative }
    - { ref: R12, outcome: "use of the term \"illegal immigrant\" in local media outlets", metric: coefficient, value: "Reuters-intensity placebo: 0.292 (0.311) in the full sample and 0.482 (0.416) for daily print newspapers (Table 3, cols. 4 and 8, p. 817)", direction: none }
    - { ref: R13, outcome: "support for increasing border security", metric: coefficient, value: "nonreaders: -0.0009 (0.003); print readers: -0.0068 (0.003); equality p-value = 0.127 (Table 7, cols. 1 and 3, p. 829)", direction: negative, vsBenchmark: "the reader-group estimates are not statistically different" }
    - { ref: R14, outcome: "support for increasing border security", metric: coefficient, value: "Reuters-intensity reduced-form placebo: -0.0019 (0.0038) (Table 5, col. 4, p. 826)", direction: none }
    - { ref: R15, outcome: "support for restrictive immigration policies", metric: coefficient, value: "reduced form / 2SLS: employer sanctions -0.0062 (0.002) / 0.0051 (0.002); police questioning -0.0047 (0.001) / 0.0046 (0.002); prohibit services -0.0038 (0.002) / 0.0033 (0.002); legalization -0.0011 (0.001) / 0.0011 (0.001); all-policy index -0.0064 (0.002) / 0.0060 (0.002); consistent-question index -0.0059 (0.002) / 0.0056 (0.003) (Table 6, cols. 2-7, p. 828)", direction: mixed }
    - { ref: R16, outcome: "coverage of the AP ban announcement in local media", metric: correlation, value: "37 articles among approximately 1 million articles mentioning \"immigrant\"; coverage correlation with AP intensity close to zero (text p. 831)", direction: none }
    - { ref: R17, outcome: "use of the term \"illegal immigrant\" in local media outlets", metric: pp-effect, value: "top quartile of positive AP intensity reduced term use by 10 p.p. relative to outlets with zero AP intensity (Figure 5, Panel B; text p. 816)", direction: negative }
  resultType: new-finding
  relatesTo:
    - { cite: "Gentzkow and Shapiro (2010)", doi: '10.3982/ecta7195', relation: builds-on, note: "AP intensity measure and newspaper ideology index adapted from their measure of media slant; placebo uses Reuters intensity by the same method" }
    - { cite: "DellaVigna and Gentzkow (2010)", doi: '10.1146/annurev.economics.102308.124309', relation: builds-on, note: "persuasion rate formula (equation 8) and conceptual framework for benchmarking media persuasion magnitudes" }
    - { cite: "DellaVigna and Kaplan (2007)", doi: '10.1162/qjec.122.3.1187', relation: cites, note: "comparison benchmark for persuasion rates; Fox News effect yields a 12% persuasion rate vs 1.9-4.4% here" }
    - { cite: "Chiang and Knight (2011)", doi: '10.1093/restud/rdq037', relation: cites, note: "comparison benchmark: 2% persuasion rate for expected newspaper endorsements and 6.5% for surprising ones" }
  openQuestions:
    - "Evidence limited to unauthorized immigration and to one specific term; more work needed to understand external validity of slanted language as a persuasion mechanism (p. 832)"
    - "Setting does not allow disentangling equivalence framing (neutral substitution) from emphasis framing (omission of legal status) as the primary driver; emphasis framing is the preferred interpretation but the treatment is a mix of both (pp. 831-832)"
  replicationCode:
    status: available
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-25, role: extracted, note: "Full text read (pp. 800-835); eight results extracted from the PDF. Not human-verified. Not reproduced." }
    - { by: "paper-verifier (claude-sonnet-4-6)", date: 2026-06-25, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all 8 Core results rows verified (Table 2 col 1 for R1, Figure 5/6 for R2-R3, Table 4 for R4-R5, Table 6 col 8 for R6, Table 7 cols 4-6/7-8 for R7-R8), equations (2)-(8) checked term-by-term, frontmatter facts confirmed; no errors found." }
    - { by: "paper-distiller (gpt-6-luna)", date: 2026-10-04, role: extracted, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Read the PDF and appended ten Core results rows plus missing equation coverage and a dynamic specification. Additions are not human-verified and were not reproduced." }
    - { by: "paper-verifier (gpt-6-luna)", date: 2026-10-04, role: verified, note: "[gpt-6-luna, effort high, codex-cli 0.160.0] Pass after correcting the Table 4 LATE column/value, unreported significance stars, subgroup significance claims, findings metrics, and stale attribution; rows, locators, equations, specifications, axes, and prose checked against the PDF." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1257/aer.20211537", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "no license[] block in Crossref metadata; link to PDF via similarity-checking only (content-version vor); no CC licence asserted" }
    - { source: "OpenAlex W4322627373", checked: 2026-06-25, by: "paper-distiller (claude-sonnet-4-6)", found: "open_access_pdf: https://www.aeaweb.org/articles/pdf/doi/10.1257/aer.20211537; type article; year 2023; cited_by_count 70" }
  rightsSignalConflict: false
---

**What this is.** The core results, identification design, and estimating equations from this paper on slanted language and media persuasion: enough to know what it found and how, without reading all 36 pages. To replicate or extend it, read the full source at the [original](https://doi.org/10.1257/aer.20211537).

## TL;DR

The paper studies whether slanted language in news media affects readers' policy views, using the Associated Press (AP) ban on the term "illegal immigrant" in April 2013 as a natural experiment. The ban exploits supply-side variation: the AP distributes a common feed to member outlets, and outlets differ in how heavily they rely on AP copy (their AP intensity). The paper has three parts: (i) the ban caused near-complete disappearance of "illegal immigrant" from AP dispatches, while leaving other dimensions of immigration coverage largely unchanged; (ii) the ban diffused into local media, with 1-standard-deviation higher AP intensity associated with a 3.5 percentage point decline in use of the term; and (iii) respondents in high-AP-intensity counties showed significantly lower support for restrictive immigration policies after the ban. The estimated effects are largest for moderates and in areas with fewer immigrants, though the ideology-group difference is not statistically significant (p = 0.224) and the immigrant-share difference is marginal (p = 0.054). The results are specific to immigration and do not generalize to other policy issues, consistent with a persuasion rather than a social-signaling mechanism.

## Core results

Magnitudes are reported as in the source; standard errors are shown in parentheses where available. Locators point to the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | **Ban diffused to local media**: 1-SD higher AP intensity associated with 3.5 p.p. decline in use of "illegal immigrant" by media outlets | Table 2, col 1, p. 814 | Coef. on PostBan x IHS(AP-intensity) = -1.613 (0.171); effect for 1-SD = -3.53 p.p. (17% of mean 20.28); robust across 7 specifications including outlet-specific trends and DMA x year-month FEs |
| R2 | **Diffusion driven by AP-sourced content**, not original reporting; effect on original articles small and only marginally significant for print newspapers | Figure 5, Panel C, p. 815 | AP-sourced: large, sharp post-ban decline; original articles: near zero; visual evidence complemented by online Appendix Table B2 |
| R3 | **Left-leaning outlets show ~2x larger diffusion** than right-leaning ones; significant in 3 of 4 ideology quartiles | Figure 6, Panel A, pp. 817-818 | Most left-leaning (Q1): coefficient approximately twice as large as most right-leaning (Q4); declines significant for Q1-Q3; effect for Q4 near zero and insignificant |
| R4 | **Ban reduced support for border security** by 0.8 p.p. per 1-SD AP intensity increase (intention-to-treat) | Table 4, col 1, p. 824 | Reduced-form coef = -0.0051 (0.002); effect for 1-SD = -0.0083; mean dep. var. = 0.55; robust to county-specific trends, DMA x year FEs, and state x year FEs (cols 2-5) |
| R5 | **LATE (2SLS)**: 10 p.p. increase in "illegal immigrant" usage in local media associated with 4.5 p.p. more support for border security | Table 4, col 2, 2SLS panel, p. 824; text p. 826 | 2SLS coef = 0.0045 (0.002); first-stage F = 27.61; persuasion rate is 4.4% for the full sample and 1.9% for newspaper readers (equation 8, p. 830) |
| R6 | **Effects specific to immigration**: null effect on index of 9 non-immigration CCES policy questions (falsification test) | Table 6, col 8, p. 828 | Reduced-form coef = -0.0002 (0.001); 2SLS coef = 0.0002 (0.001); both statistically zero; covers abortion, gay marriage, healthcare, and economic policy questions |
| R7 | **Largest point estimate is for moderates**; estimates are not statistically different from those for liberals or conservatives | Table 7, cols 4-6, p. 829 | Moderates: -0.0071 (0.003); liberals: -0.0029 (0.003); conservatives: -0.0014 (0.002); p-value for equality of moderate vs extreme groups = 0.224 |
| R8 | **Larger estimated effect in counties with fewer immigrants** (low share of foreign-born); group difference is marginal | Table 7, cols 7-8, p. 829 | Low-foreign-born (bottom quartile): -0.0087 (0.003); high-foreign-born (top quartile): -0.0001 (0.004); p-value for equality = 0.054 |
| R9 | **The AP ban reduced use of the label in AP dispatches** | Figure 2, pp. 808-809 | Use fell from 50% before the ban to less than 5% after. AP-approved substitutes increased by 6 p.p., compared with a 47 p.p. decline in the banned term; dispatch volume using “immigrant” did not change |
| R10 | **The decline was only partly replaced by equivalent legal-status wording** | Figure 3, Panel A, p. 810 | Co-occurrence of “illegal” with “immigrant” fell from 0.66 to 0.21. “Illegally” increased by less than half that decline, and no other unigram compensated |
| R11 | **Other AP immigration coverage dimensions were largely unchanged** | Figure 4, p. 811; text p. 819 | Excluding the banned term and its substitutes, the AP slant index was flat. The sentiment shift was almost entirely due to removing “illegal”; no change in immigration coverage volume |
| R12 | **Reuters intensity predicts no comparable media-language change** | Table 3, cols. 4 and 8, p. 817 | Reuters placebo coefficients: 0.292 (0.311) for the full sample and 0.482 (0.416) for daily print newspapers; neither statistically significant |
| R13 | **Reader estimates differ in size, but not significantly** | Table 7, cols. 1 and 3, p. 829 | Nonreaders: -0.0009 (0.003); print readers: -0.0068 (0.003); equality p-value = 0.127 |
| R14 | **Reuters intensity does not predict border-security views** | Table 5, col. 4, p. 826 | Reduced-form placebo coefficient = -0.0019 (0.0038), statistically insignificant |
| R15 | **The effect extends to other restrictive immigration policies** | Table 6, cols. 2-7, p. 828 | Reduced-form / 2SLS coefficients: employer sanctions -0.0062 (0.002) / 0.0051 (0.002); police questioning -0.0047 (0.001) / 0.0046 (0.002); prohibit services -0.0038 (0.002) / 0.0033 (0.002); legalization -0.0011 (0.001) / 0.0011 (0.001), not significant; all-policy index -0.0064 (0.002) / 0.0060 (0.002); consistent-question index -0.0059 (0.002) / 0.0056 (0.003) |
| R16 | **The announcement itself received little coverage** | text p. 831 | 37 articles about the ban among approximately 1 million articles containing “immigrant”; article count correlation with AP intensity was close to zero |
| R17 | **Diffusion increases with baseline AP intensity** | Figure 5, Panel B, p. 815; text p. 816 | Relative to outlets with zero AP intensity, outlets in the top quartile of positive AP intensity reduced use of the term by 10 p.p. |
| R18 | **The estimated policy-view effects persist through 2020** | Figure 7, p. 825; text p. 826 | The dynamic estimates remain consistent with an effect through the 2020 survey wave; the text reports no single coefficient for this figure |

**Overall (paper's conclusion).** The AP ban on "illegal immigrant" propagated into local media language and shifted public opinion on immigration policy. The estimates are largest for moderates and in low-immigrant areas, consistent with a persuasion mechanism in which readers with weaker priors on the issue are more susceptible to media framing of immigration; the ideology-group estimates are not statistically different, and the immigrant-share difference is marginal. Effects do not transfer to other policies, which weighs against a general shift in political views.

## Theory / model

The paper has no structural economic model. The empirical strategy rests on two design features and a tested set of hypotheses.

**Hypotheses tested.** The AP functions as a centralized editor of news language: its guidelines affect a shared input in the editorial production of thousands of member outlets. The ban provides an exogenous variation in that input, orthogonal to outlet-specific demand, for the following reasons (pp. 801-802): (i) the AP is a cooperative that balances the interests of politically diverse member outlets, so the decision to ban reflects organizational consistency policy rather than ideological pressure; (ii) the ban did not coincide with any change in immigration volume, slant (excluding the banned term), or sentiment in AP dispatches; (iii) Reuters, a competing news wire that did not change its guidelines, serves as a placebo.

The tested hypotheses are:

1. **Diffusion**: Outlets with higher pre-ban reliance on AP copy (AP intensity) will show larger post-ban declines in use of "illegal immigrant" (Sections I-II).
2. **Persuasion**: Exposure to the reduced use of the term through locally circulated newspapers will lower support for restrictive immigration policies (Section III).
3. **Mechanism specificity**: Effects should be specific to immigration (not other policies), and stronger for politically persuadable readers (moderates, low-prior areas), consistent with a persuasion rather than social-signaling mechanism (Section III.E).

**Identification assumption.** Support for restrictive immigration policies in counties with high versus low AP intensity would have followed parallel trends in the absence of the ban. The identifying variation is the county-level AP intensity of locally circulated newspapers interacted with the post-ban indicator, a shift-share design where PostBan is the aggregate shock and IHS(APintensity) is local exposure (p. 823).

## Method

The analysis uses three estimators, all built on the DiD principle of comparing high-AP-intensity units to low-AP-intensity units before and after the ban.

**Diffusion (Section II).** Before the regressions, the paper uses Pearson's chi-squared statistic to identify phrases predictive of pre- versus post-ban publication, equation (1), p. 809:

$$
\chi^2_{pl} = \frac{\left(f_{pl,\text{before}}\tilde f_{pl,\text{after}} - \tilde f_{pl,\text{before}}f_{pl,\text{after}}\right)^2}{(f_{pl,\text{before}}+f_{pl,\text{after}})(f_{pl,\text{before}}+\tilde f_{pl,\text{before}})(f_{pl,\text{after}}+\tilde f_{pl,\text{after}})(\tilde f_{pl,\text{before}}+\tilde f_{pl,\text{after}})} \tag{1}
$$

Here, $$f_{pl,\text{before}}$$ and $$f_{pl,\text{after}}$$ count occurrences of phrase $$p$$ of length $$l$$ before and after the ban, while tildes count all other phrases of that length. The outlet-level diffusion regression is the continuous-treatment difference-in-differences equation (2), p. 813:

$$
\frac{\text{Illimm}}{\text{Imm}}_{mt} = \alpha_m + \beta_t + \rho \cdot \text{IHS}(\text{APintensity}_m) \times \text{PostBan}_t + \varepsilon_{mt} \tag{2}
$$

where $$\text{Illimm}/\text{Imm}_{mt}$$ is the share of articles in outlet $$m$$ and month $$t$$ using "illegal immigrant" relative to "immigrant"; $$\text{IHS}(\text{APintensity}_m)$$ is the inverse hyperbolic sine of AP intensity (share of AP-sourced articles, measured in the 12 months before the ban); $$\text{PostBan}_t$$ is a dummy for April 2013 onward; $$\alpha_m$$ and $$\beta_t$$ are outlet and year-month fixed effects; standard errors are clustered at the outlet level. Observations are weighted by the number of articles using "immigrant." The parameter $$\rho$$ estimates how much a 1-unit increase in IHS-transformed AP intensity shifts the share after the ban.

**County-level AP intensity and outcome aggregation.** Newspapers' AP intensity is aggregated to the county level as the circulation-weighted average across newspapers serving county $$c$$ (equation 3, p. 820):

$$
\text{APintensity}_c = \frac{\sum_m \left( \text{circ}_{mc} \times \text{APintensity}_m \right)}{\sum_m \text{circ}_{mc}} \tag{3}
$$

The circulation-weighted share of "illegal immigrant" articles in county $$c$$ and year $$y$$ is equation (4), p. 820:

$$
\text{Illimm/Imm}_{cy} = \frac{\sum_m \left(\text{circ}_{mcy} \times \text{Illimm/Imm}_{my}\right)}{\sum_m \text{circ}_{mcy}} \tag{4}
$$

**Reduced-form effect on views (Section III, equation 5).** The intention-to-treat effect on immigration policy views $$X_{icy}$$ for respondent $$i$$ in county $$c$$ and survey year $$y$$ is estimated as:

$$
X_{icy} = \alpha_c + \beta_y + \rho \cdot \text{IHS}(\text{APintensity}_c) \times \text{PostBan}_y + \varepsilon_{icy} \tag{5}
$$

where $$\alpha_c$$ and $$\beta_y$$ are county and survey-year fixed effects; standard errors are clustered by county. Respondent characteristics (age, gender, education, race, immigration status, household income) are included as controls (p. 822).

**Local average treatment effect (2SLS, equations 6-7).** To estimate the LATE for readers of newspapers that changed their language solely because of the AP input, the paper uses a shift-share IV strategy. The second stage is (p. 822):

$$
X_{icy} = \mu_c + \nu_y + \gamma \cdot \widehat{\text{Illimm}/\text{Imm}}_{mcy} + \eta_{icy} \tag{6}
$$

instrumented by the first stage:

$$
\text{Illimm}/\text{Imm}_{cy} = \alpha_c + \rho_y + \gamma \cdot \text{IHS}(\text{APintensity}_c) \times \text{PostBan}_y + \varepsilon_{cy} \tag{7}
$$

The excluded instrument is the interaction of county AP intensity with PostBan. The first stage at the county x year level replicates the diffusion result: 1-SD higher AP intensity is associated with an 8% reduction in "illegal immigrant" use after the ban (p. 824). The second stage includes county and survey-year fixed effects, respondent controls, and standard errors clustered by county; the first stage uses county-year data from the same newspaper-circulation-linked sample (pp. 822-824).

**Persuasion rate.** Following Gentzkow and Shapiro (2010) and DellaVigna and Gentzkow (2010), the paper converts magnitudes into a persuasion rate: the share of exposed readers who changed their survey response because of the treatment (equation 8, p. 830):

$$
f = \frac{db}{de} \cdot \frac{1}{1 - b_0} \tag{8}
$$

where $$b$$ is support for restricting immigration, $$e$$ is exposure to "illegal immigrant," and $$b_0$$ is the share who would oppose restrictive policy absent the treatment. Applied to the full-sample ITT with average newspaper readership, this yields a persuasion rate of 4.4%; the estimate for the sample of newspaper readers is 1.9%. For comparison, DellaVigna and Kaplan (2007) estimate a 12% persuasion rate for access to Fox News, and Chiang and Knight (2011) estimate 2% for expected and 6.5% for surprising newspaper endorsements. The estimates here are in the lower range, consistent with the milder nature of a language-change treatment.

## Empirical specifications

All regressions use CCES data for 192,635 respondents across survey waves 2009-2017 (main sample) with additional 2007 and 2018-2020 waves for long-run trends.

**Dynamic diffusion specification (Figure 5, Panel A, p. 815).** The paper describes and estimates the lead-lag version of equation (2), with the half-year before the ban omitted; written out from Section II.B because the paper does not number or display the full equation:

$$
\text{Illimm/Imm}_{mt} = \alpha_m + \beta_t + \sum_{k \neq -1} \rho_k \, \text{IHS}(\text{APintensity}_m) \times \text{Semester}_{kt} + \varepsilon_{mt}
$$

Outlet and year-month fixed effects, outlet-clustered standard errors, and article-count weights are as in equation (2); the full outlet-month panel covers 2,385 outlets and 139,523 observations (Table 2, p. 814).

**Diffusion regressions (R1-R3, Table 2 and Figures 5-6).** Equation (2), estimated at the outlet x month level. The full sample has 2,385 outlets and 139,523 outlet-month observations. The subsample of daily print newspapers has 853 outlets. Columns in Table 2 (p. 814) progressively add: state x year-month FEs (col 2), outlet-specific linear trends (col 3), DMA x year-month FEs (col 6), and linear trends combined with DMA FEs (col 7). The coefficient on PostBan x IHS(AP-intensity) ranges from -1.3 to -1.8 across all seven columns. The key channel test (Figure 5, Panel C) splits the dependent variable into AP-sourced versus original articles; the sharp post-ban decline appears only for AP-sourced content.

**Intention-to-treat regressions on immigration views (R4, Table 4).** Equation (5), estimated at the respondent level. Main outcome is support for increasing border security (mean = 0.55). Columns in Table 4 add county characteristics x year (col 2), state x year FEs (col 3), DMA x year FEs (col 4), and county-specific linear trends (col 5). The reduced-form coefficient is stable at -0.004 to -0.006, corresponding to 0.77-0.92 p.p. per 1-SD AP intensity increase. The 2SLS estimates in Table 4 (bottom panel) yield a coefficient of 0.0045-0.0071 on the share of "illegal immigrant" articles (LATE), with first-stage F-statistics ranging from 10.5 to 29.8.

**Other immigration policy outcomes (R6, Table 6).** Equation (5) replicated for all five immigration policy questions available in pre- and post-ban waves, and for two aggregate indexes. Four of five individual questions show significant effects (border security, employer sanctions, police questioning, prohibiting services); legalization support shows no significant effect. The falsification test replicates the specification with a nine-item non-immigration policy index (column 8): coefficient -0.0002 (0.001) in the reduced form, 0.0002 (0.001) in 2SLS, both indistinguishable from zero.

**Heterogeneity regressions (R7-R8, Table 7).** Equation (5) estimated within subsamples split by self-reported newspaper readership (did not read, read any, read print), respondent ideology quartile (liberal/moderate/conservative), and county foreign-born population quartile. All specifications include respondent controls, baseline county characteristics x year, and county and survey-year FEs.

**Reuters placebo.** Tables 3 and 5 replace AP intensity with Reuters intensity (share of Reuters-credited articles per 10,000). Reuters did not change its guidelines on "illegal immigrant." The PostBan x IHS(Reuters-intensity) coefficient is 0.292 (0.311) in the diffusion regression (Table 3, col 4) and -0.0019 (0.0038) in the views regression (Table 5, col 4), both statistically zero, supporting the identification assumption.

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| Factiva (Dow Jones) | AP dispatches, June 2009-June 2017: ~28,000 dispatches using "immigrant" (8,000 using "illegal immigrant"); date, headline, full text | No page yet |
| NewsLibrary (NewsBank) | Media content: ~2,566 print and online outlets, July 2009-July 2017; article-level keyword search for "immigrant" and "illegal immigrant" | [Historical newspaper archives](/wiki/commercial/newsbank-newspaper-archive/) (licensed) |
| ProQuest (Newsstream) | 125 major newspapers missing from NewsLibrary, 2009-2017; complements NewsLibrary for diffusion analysis | [Historical newspaper archives](/wiki/commercial/newsbank-newspaper-archive/) (licensed) |
| CCES (Cooperative Congressional Election Study) | Immigration policy views (5 questions) and other policy preferences across pre- and post-ban survey waves, 2006-2020; ~50,000-60,000 respondents per election-year wave | No page yet |
| Alliance for Audited Media (AAM) | Circulation by newspaper and ZIP code (Fall 2012 GEO/Circ report); used to aggregate AP intensity and outcomes to county level | No page yet |
| Gentzkow-Shapiro ideology index | Newspaper ideological lean for ~370 newspapers (based on congressional speech phrase scores, 2005 data); used for heterogeneity by outlet ideology | No page yet |
| American Community Survey | County-level demographics (share college educated, share foreign-born, log income per capita), 2012 five-year estimates | [ACS](/wiki/datasets/acs/) |
| Editor and Publisher yearbook | Universe of daily print newspapers; baseline circulation for low-circulation outlets not in AAM | No page yet |

Sample: AP dispatches June 2009 to June 2017. Media content July 2009 to July 2017. CCES survey waves 2006-2020 (election years 2008-2016 as main sample; 2018 and 2020 for long-run trends). County-level analysis covers ~2,300 counties matched to ~800 daily newspapers.

## When to read the full paper

Use the [original](https://doi.org/10.1257/aer.20211537) if you are: designing a research project on media language and political attitudes; replicating the diffusion or persuasion estimates (the Internet Appendix contains the plagiarism-detection algorithm, AP-intensity distribution, and additional robustness tables); studying the AP as a supply-side source of variation in media content; or comparing persuasion rates across media interventions (Tables 4-5 contain all the inputs for equation 8). The locators above point directly to the key tables and figures.

## Attribution and rights

Source: peer-reviewed, *American Economic Review* 113(3). This distillation was extracted by an LLM on 2026-10-04 and verified against the source PDF on 2026-10-04; it has not been independently reproduced. No Creative Commons licence is asserted; the PDF is freely readable at aeaweb.org under AEA copyright. Redistribution of this distillation is extract-only.

> Djourelova, Milena. "Persuasion through Slanted Language: Evidence from the Media Coverage of Immigration." *American Economic Review* 113, no. 3 (March 2023): 800-835. DOI: 10.1257/aer.20211537.
