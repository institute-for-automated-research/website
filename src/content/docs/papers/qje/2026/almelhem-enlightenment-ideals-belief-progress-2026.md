---
title: "Enlightenment Ideals and Belief in Progress: Almelhem et al. (2026)"
description: >-
  Distilled: Using LDA topic modeling and sentiment analysis on 264,443 English
  volumes printed 1500-1900, this paper documents that science-language volumes
  secularized by the mid-eighteenth century, that those at the nexus of science
  and political economy became the most progress-oriented during the
  Enlightenment, and that industrial volumes at this nexus were the most
  progress-oriented from the mid-eighteenth century onward. QJE 2026, CC BY 4.0.
  Five core results with source locators, datasets used, the classification and
  sentiment methods with equations, and the estimating specifications.
sidebar:
  label: Almelhem et al. 2026
  order: 1
tags: [paper-summary, text-as-data, economic-history, panel-data, panel-regression,
       open-access, cc-by, peer-reviewed, unreplicated, data:hathitrust]
paper:
  authors: Ali Almelhem, Murat Iyigun, Austin Kennedy, Jared Rubin
  authorList:
    - { family: Almelhem, given: Ali, affiliation: "Ministry of Economy and Planning, Saudi Arabia" }
    - { family: Iyigun, given: Murat, affiliation: University of Colorado Boulder }
    - { family: Kennedy, given: Austin, affiliation: "NRG Energy, United States" }
    - { family: Rubin, given: Jared, orcid: 0000-0002-3133-7947, affiliation: Chapman University }
  year: 2026
  venue: "The Quarterly Journal of Economics 141(1), 2026, 263-314"
  venueShort: QJE 2026
  doi: 10.1093/qje/qjaf054
  jel:
    codes: [C81, C88, N33, N63, O14, Z11]
    assignedBy: claude-sonnet-4-6
    date: 2026-06-28
  topics: ["Computational and Text Analysis Methods", "Language and cultural evolution", "Historical Economic and Social Studies"]
  dataAccess: public
  outcome:
    - progress-oriented language score of published volumes
    - science-religion language separation in published volumes
  outcomeClass: [cultural-change]
  license: "CC BY 4.0 (confirmed via Crossref DOI metadata: content-version vor, URL https://creativecommons.org/licenses/by/4.0/, delay-in-days 0, start 2025-11-29; corroborated by artifact p. 263 Creative Commons Attribution License notice)"
  licenseShort: CC BY 4.0
  access: open
  machineAccess: "open-access PDF via Oxford Academic (CC BY 4.0, Advance Access 2025-11-29; not machine-fetched directly)"
  redistribution: extract-only (CC BY 4.0 permits mirroring; PDF not hosted in this batch)
  resultsCount: 5
  citedByCount: 4
  methods:
    role: applies-method
    family: descriptive
    buildsFrom: [lda-topic-model, k-fold-cross-validation, panel-regression]
    identification: descriptive
  contributionType: [new-data, new-fact, measurement]
  introducesData: true
  scope:
    region: England
    period: 1500-01..1900-12
    frequency: annual
    dataType: [text]
    granularity: [individual]
    n: "264,443 unique English volumes published in England, 1500-1900"
  findings:
    - { ref: R1, outcome: share of religious language in science-language volumes, metric: probability, value: "~30% religious language weight in early 18th century science volumes, declining to ~10% by 1850 (Figure III, p. 286)", direction: negative }
    - { ref: R2, outcome: average progress-oriented sentiment score (percentile), metric: probability, value: "~10th-15th percentile pre-1650, rising to ~50th-60th percentile by 1800-1850 (Figure V, p. 291)", direction: positive }
    - { ref: R3, outcome: predicted progress sentiment at science-political economy nexus, metric: coefficient, value: "50%/50% science-political economy mix has highest predicted progress score among all language combinations from approximately 1700 onward (Figure VII, p. 295)", direction: positive, vsBenchmark: "above 100% science, pure political economy, and religion-nexus combinations" }
    - { ref: R4, outcome: "predicted progress sentiment at science-political economy nexus with high industrial scores", metric: coefficient, value: "volumes at 75th industry percentile at science-political economy nexus have approximately 2x predicted progress score vs. zero-industry volumes at same nexus by 1800 (Figure XI, p. 305)", direction: positive, vsBenchmark: "zero industry score at 50%/50% science-political economy nexus" }
    - { ref: R5, outcome: "predicted progress sentiment at science-law and science-economics nexus", metric: coefficient, value: "sharp 18th-century rise mirroring science-political economy result when political economy is replaced by law or economics categories (Figure VIII, p. 298)", direction: positive, vsBenchmark: "arts and literature nexus combinations" }
  resultType: confirms
  relatesTo:
    - { cite: "Mokyr (2016)", relation: tests, note: "tests the Industrial Enlightenment thesis that progress-oriented scientific culture was central to Britain's industrialization" }
    - { cite: "Erikson (2021)", doi: '10.7312/erik18434', relation: extends, note: "extends LDA text analysis from political and economic tracts to a 400-year corpus of all types of English volumes" }
    - { cite: "Grajzl and Murrell (2024)", doi: '10.1017/ssh.2024.17', relation: extends, note: "extends their 1530-1700 corpus forward to 1900, documenting secularization of science language beginning mid-17th century" }
  openQuestions:
    - 'Whether similar patterns of progress-oriented language change appear in other European languages (Dutch, French, German), which would corroborate or refine the McCloskey (2006, 2010, 2016) bourgeois virtues thesis as a pan-European phenomenon (pp. 310-311).'
    - 'Whether the observed language changes reflect greater freedom of expression and a marketplace of ideas, consistent with theories of political fragmentation and Enlightenment belief in free thought (pp. 310-311).'
  extraction:
    - { by: "paper-distiller (claude-sonnet-4-6)", date: 2026-06-28, role: extracted, note: "Full text read (pp. 263-314 plus all figures); five results extracted from the CC-BY PDF. Not human-verified. Not reproduced. Replication data available at Harvard Dataverse (Almelhem et al. 2025); code availability not stated." }
    - { by: paper-verifier (claude-sonnet-4-6), date: 2026-06-28, role: verified, note: "Locators and reported magnitudes re-checked against the source PDF; all five Core result locators and magnitudes confirmed. Fixed: JEL codes expanded from [N33, O14, Z11] to [C81, C88, N33, N63, O14, Z11] per abstract; corrected 'Hathithrust' typo to 'HathiTrust' in two body locations. Equations (1)-(7) verified term-by-term against PDF pp. 279, 285, 289, 294, 303." }
  licenceVerification:
    - { source: "Crossref REST API works/10.1093/qje/qjaf054", checked: 2026-06-28, by: "paper-distiller (claude-sonnet-4-6)", found: "license[].content-version=vor, URL=https://creativecommons.org/licenses/by/4.0/, delay-in-days=0, start=2025-11-29" }
  rightsSignalConflict: false
---

**What this is.** The paper's core results, the LDA-based classification method it applies, and the two estimating regressions with real equations: enough to know what it found and how, without reading the full 52 pages. To replicate or extend, read the original at [https://doi.org/10.1093/qje/qjaf054](https://doi.org/10.1093/qje/qjaf054).

## TL;DR

The paper applies Latent Dirichlet Allocation to 264,443 English volumes from the HathiTrust Digital Library (printed in England, 1500-1900) to trace how the languages of science, religion, and political economy evolved in the centuries leading to the British Industrial Revolution. Three findings emerge. First, the languages of science and religion diverged in the mid-eighteenth century: science volumes that had used roughly 30% religious language in the early eighteenth century used only about 10% by 1850. Second, regression analysis shows that volumes using language at the nexus of science and political economy became the most progress-oriented beginning in the late seventeenth century, while volumes using purely scientific language were largely neutral. Third, within this nexus, those that also used the language of industrialization were the most progress-oriented from the mid-eighteenth century onward. The findings support Mokyr (2016)'s Industrial Enlightenment thesis: it was pragmatic, industrially oriented scientific writing aimed at a broad literate audience, not elite scientific discourse, that carried progress-oriented culture into Britain's economic take-off.

## Core results

Magnitudes and descriptions are as reported; locators point into the source PDF.

| # | Result | Locator | Magnitude |
|---|---|---|---|
| R1 | Languages of science and religion became **distinct in the mid-eighteenth century**; science volumes ceased to use religious language | Figure II, p. 284; Figure III, p. 286 | Science volumes used ~30% religious language in the early 18th century, declining to ~10% by 1850; by 1750 essentially no volumes sit at the science-religion vertex of the language simplex |
| R2 | **Average progress sentiment rose** from the mid-seventeenth century and persisted through the period | Figure V, p. 291 | Progress score (percentile) rose from ~10th-15th percentile pre-1650 to ~50th-60th percentile by 1800-1850 |
| R3 | **Science-political economy nexus** volumes were the most progress-oriented from ~1700 onward | Figure VII, p. 295; Online Appendix Table B.1 | Predicted progress score for 50%/50% science-political economy mix is highest among all language combinations beginning late 17th century; volumes using purely scientific or purely religious language score lower |
| R4 | **Industrial language** at the science-political economy nexus amplified progress orientation from the mid-eighteenth century | Figure XI, p. 305; Online Appendix Table B.4 | Within the 50%/50% science-political economy nexus, volumes at the 75th percentile of industrial language had approximately 2x the predicted progress score of zero-industry volumes by 1800 |
| R5 | Pattern is **robust to alternative category definitions**; replacing political economy with law or economics yields the same 18th-century rise | Figure VIII, p. 298 | Science-law and science-economics nexus volumes both show a sharp 18th-century rise in predicted progress sentiment, mirroring the science-political economy finding; the pattern does not emerge for arts and literature |

**Overall (paper's conclusion).** The results are consistent with Mokyr (2016)'s claim that the Industrial Enlightenment diffused progress-oriented views of science into industry and political economy. It was the literate artisan and applied-science audience, not the elite scientific community, whose language became most progress-oriented in the run-up to Britain's industrialization.

## Theory / model

The paper has no formal economic model. The empirical analysis tests three subsidiary hypotheses derived from Mokyr (2016) and Mokyr (2009)'s Industrial Enlightenment and Culture of Growth theses:

1. The language of science and religion became increasingly distinct during the Enlightenment (secularization of science).
2. The language of science became more progress-oriented during the Enlightenment, with the effect concentrated at the nexus of science and political economy rather than in pure scientific discourse.
3. Volumes using the language of industrialization at the science-political economy nexus were particularly progress-oriented in the period before and during Britain's Industrial Revolution.

**Identification strategy.** The analysis is descriptive: the regressions are accounting exercises documenting how progress-oriented language correlates with category weights and industrial language over time. The authors explicitly state that the regressions "are not meant to imply a causal relationship, as omitted variable biases and reverse causation may be present" (p. 293, p. 305). The evidence is structural in the sense of testing whether the pattern predicted by Mokyr (2016) is present in the data, but causality is not claimed.

## Method

The method builds on the `lda-topic-model` technique applied to historical text corpora. Related work using this approach includes Erikson (2021), who applies LDA and sentiment analysis to political and economic tracts from England, 1550-1720, and Grajzl and Murrell (2024), who study English print culture across 1530-1700; both cover shorter time windows than the 400-year corpus here.

### LDA topic model

The corpus is a document-term matrix $$D \times V$$, where $$D$$ is the number of volumes and $$V$$ is the vocabulary size. LDA (Blei, Ng, and Jordan (2003)) models each volume as a mixture over $$T = 60$$ topics and each topic as a multinomial distribution over words. The optimal $$T$$ is chosen by 4-fold cross-validation on perplexity (Section II.D, p. 276-277). The output is, for each volume $$v$$ and topic $$t$$, a weight $$\alpha_{t,v}$$ representing how strongly the topic appears in that volume, with $$\sum_{t=1}^{60} \alpha_{t,v} = 1$$ for each volume.

### Topic categorization and volume classification

Topics are grouped into three categories (science, religion, political economy) based on topic-pair co-occurrence. For each topic pair $$i \in \{1, \ldots, 1{,}770\}$$ and each volume $$v$$, let $$w_{iv}$$ be the product of the two topics' weights. The corpus-wide share of topic-pair $$i$$ is (equation 1, p. 279):

$$
\text{Share}_i = \frac{\sum_{v=1}^{V} w_{iv}}{\sum_{i=1}^{I} \sum_{v=1}^{V} w_{iv}} \tag{1}
$$

Categories are identified as the triplets of topics with the highest total share (Incidence) that are sufficiently distinct from each other. The three resulting categories are science (topics 3, 41, 43), religion (topics 10, 34, 38), and political economy (topics 13, 35, 36); see Table I, p. 282.

Each volume is assigned weights for all three categories by weighting the LDA topic weights by each topic's time-varying category coefficient (equations 2-4, p. 285):

$$
\text{Science}_v = \sum_{t=1}^{60} \alpha_{t,v}\,\beta_{t,\text{Science}} \tag{2}
$$

$$
\text{PolitEcon}_v = \sum_{t=1}^{60} \alpha_{t,v}\,\beta_{t,\text{PolitEcon}} \tag{3}
$$

$$
\text{Religion}_v = \sum_{t=1}^{60} \alpha_{t,v}\,\beta_{t,\text{Religion}} \tag{4}
$$

where $$\beta_{t,c}$$ is the category coefficient of topic $$t$$ for category $$c \in \{\text{Science, PolitEcon, Religion}\}$$, computed from the time-varying topic-pair shares over 20-year moving bins. By construction $$\text{Science}_v + \text{PolitEcon}_v + \text{Religion}_v = 1$$.

### Sentiment (progress-oriented score)

A progress dictionary (Table II, p. 289) lists 7 modern English synonyms of "progress" (progress, improvement, stride, betterment, advance, rise, amelioration), all in use before 1643 per the Oxford English Dictionary. The progress score for volume $$i$$ is the share of dictionary words in the volume (equation 5, p. 289):

$$
\text{Sentiment}_i = \frac{\sum_{\ell \in L} w_{i,\ell}}{W_i} \tag{5}
$$

where $$w_{i,\ell}$$ is the count of word $$\ell$$ from the progress dictionary $$L$$ in volume $$i$$, and $$W_i$$ is the total word count of volume $$i$$. Scores are converted to percentile ranks over the full corpus for comparability.

### Industrial score

An industrial score is constructed from the weighted index of machine-related root words transcribed from the five volumes of *Appleby's Illustrated Handbook of Machinery* (Appleby 1877-1903). The top 10 industrial words (by index frequency) include: crane (51), electr (42), weight (37), rope (27), cost (27); see Table IV, p. 301. Each volume's industrial score is the normalized sum of industrial word counts weighted by each word's Appleby index frequency.

## Empirical specifications

### Regression 1: Progress sentiment and language category weights (eq. 6, p. 294)

Volumes are placed into 20-year bins by publication date. The baseline estimating equation is:

$$
\text{Sentiment}_{v,t} = \alpha_1 + \alpha_2\,\text{Science}_v + \alpha_3\,\text{PolitEcon}_v + \alpha_4\,\text{Science}_v \times \text{PolitEcon}_v + \alpha_5\,\text{Science}_v \times \text{Religion}_v + \alpha_6\,\text{Religion}_v \times \text{PolitEcon}_v + \lambda_t + \lambda_t\,\mathbf{A}_{v,t}\,\boldsymbol{\alpha} + \varepsilon_{v,t} \tag{6}
$$

where $$\text{Sentiment}_{v,t}$$ is the progress score (percentile) of volume $$v$$ in bin $$t$$; $$\text{Science}_v$$, $$\text{Religion}_v$$, $$\text{PolitEcon}_v$$ are the volume's category weights from equations (2)-(4); $$\text{Religion}_v$$ is excluded as the reference category; $$\lambda_t$$ are 20-year bin fixed effects; and $$\mathbf{A}_{v,t}$$ is the vector of all variables and interactions in equation (6), with time-varying slope $$\lambda_t\,\boldsymbol{\alpha}$$ allowing all coefficients to change across bins. Standard errors are clustered by year of publication. Full results are in Online Appendix Table B.1; predicted values for key language mixes are plotted in Figure VII (p. 295).

### Regression 2: Progress sentiment, category weights, and industrial language (eq. 7, p. 303)

The industrial score is added as an additional regressor with all two-way and three-way interactions:

$$
\text{Sentiment}_{v,t} = \beta_1 + \beta_2\,\text{Science}_v + \beta_3\,\text{PolitEcon}_v + \beta_4\,\text{Industry}_v + \beta_5\,\text{Science}_v \times \text{PolitEcon}_v + \beta_6\,\text{Science}_v \times \text{Religion}_v + \beta_7\,\text{Religion}_v \times \text{PolitEcon}_v + \beta_8\,\text{Science}_v \times \text{Industry}_v + \beta_9\,\text{PolitEcon}_v \times \text{Industry}_v + \beta_{10}\,\text{Science}_v \times \text{Religion}_v \times \text{Industry}_v + \beta_{11}\,\text{Science}_v \times \text{PolitEcon}_v \times \text{Industry}_v + \beta_{12}\,\text{Religion}_v \times \text{PolitEcon}_v \times \text{Industry}_v + \lambda_t + \lambda_t\,\mathbf{B}_{v,t}\,\boldsymbol{\beta} + \varepsilon_{v,t} \tag{7}
$$

where $$\text{Industry}_v$$ is the normalized industrial language score of volume $$v$$ and all other notation follows equation (6). As before, all slope coefficients are interacted with bin fixed effects to allow time variation. Full results are in Online Appendix Table B.4; predicted values for the 50%/50% science-political economy location at varying industry percentiles are plotted in Figure XI (p. 305).

Both regressions are run on pre-1650 data excluded in robustness checks (Online Appendix Figure B.19, B.27); results are similar. Alternative dictionaries using 1708 *Dictionarium Anglo-Britannicum* progress words and a ChatGPT-generated Enlightenment-era synonym list also yield similar patterns (Online Appendix Figures B.10-B.13).

## Datasets used

| Dataset | Role in paper | Wiki page |
|---|---|---|
| HathiTrust Digital Library (HDL) extracted features, 264,443 volumes (Almelhem et al. 2025, Harvard Dataverse) | Main corpus: bag-of-words representation of all English volumes printed in England, 1500-1900; used for LDA and sentiment analysis | [no page yet](/wiki/) |
| *Appleby's Illustrated Handbook of Machinery*, vols. 1-5 (Appleby 1877-1903) | Source of industrial root-word index used to construct per-volume industrial scores | no page yet |

Sample: 264,443 unique English volumes printed in England, 1500-1900, after removing duplicates and non-English volumes from an initial set of 420,081. Data available at Harvard Dataverse: [https://doi.org/10.7910/DVN/DQRO8L](https://doi.org/10.7910/DVN/DQRO8L) (Almelhem et al. 2025).

## When to read the full paper

Use the [original](https://doi.org/10.1093/qje/qjaf054) if you are: replicating the LDA estimation or the sentiment regressions (Online Appendix Sections A-H contain the full data-cleaning protocol, all 60 topic definitions, robustness checks with alternative dictionaries and unbinned data, and author fixed-effect specifications); extending the corpus to other European languages to test the McCloskey (2006) thesis; or using the qualitative volume examples in Section VI (Clare 1735, Saul 1735, Stephenson 1831) to understand what progress-oriented industrial language looked like in practice.

## Attribution and rights

Source: peer-reviewed, *The Quarterly Journal of Economics* 141(1), 2026. This distillation was extracted by an LLM on 2026-06-28 and is **not human-verified or independently reproduced**. The CC BY 4.0 licence permits mirroring; the verbatim PDF is not hosted in this batch. Replication data are available at Harvard Dataverse (Almelhem et al. 2025), DOI: [10.7910/DVN/DQRO8L](https://doi.org/10.7910/DVN/DQRO8L).

> **Attribution (CC BY 4.0).** Almelhem, Ali, Murat Iyigun, Austin Kennedy, and Jared Rubin.
> "Enlightenment Ideals and Belief in Progress in the Run-up to the Industrial Revolution:
> A Textual Analysis."
> *The Quarterly Journal of Economics* 141, no. 1 (2026): 263-314.
> DOI: 10.1093/qje/qjaf054. (c) The Author(s) 2025.
> Published by Oxford University Press on behalf of President and Fellows of Harvard College.
> Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> This page is an **adaptation** by the Institute for Automated Research:
> core results extracted and re-expressed; **changes were made**.
