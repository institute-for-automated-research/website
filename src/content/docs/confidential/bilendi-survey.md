---
title: "Bilendi commissioned online survey (Germany, restricted access)"
description: >-
  An author-commissioned representative online survey of Germans, fielded through
  the panel provider Bilendi, with individual-level responses on attitudes and
  financial behavior. It is a bespoke confidential collection, not an
  off-the-shelf product. This page documents what it is and the gotchas, but it
  was not exercised here.
sidebar:
  label: Bilendi survey (Germany)
tags: [survey, household-finance, attitudes, germany, data:bilendi-survey]
---

:::caution[Bespoke confidential survey: not exercised here]
**This is an author-commissioned survey**, fielded through the panel provider
Bilendi. It is **not an off-the-shelf product and not publicly downloadable**: it
carries **no provenance badge** because there is no standing access path we can
run here. The individual-level responses belong to a specific research project
and were collected under that arrangement. The page documents what the survey is
and the gotchas; treat it as unverified. This is the honest grade under the
institute's Verified discipline.
:::

**The Bilendi survey** is a one-off, author-commissioned online survey of German
respondents, fielded through the survey-panel provider Bilendi. It collects
individual-level responses on attitudes, stock-market participation, demographics,
trust, and risk tolerance, designed to be representative of the target population.
Because it is bespoke, the questionnaire and sample are defined by the research
project rather than by a vendor catalog. A paper we distill uses it:
[Laudenbach, Malmendier & Niessen-Ruenzi](/wiki/papers/jf/2026/laudenbach-communism-attitudes-2026/)
use a 2023 Bilendi survey of 9,695 Germans (5,286 East, 4,409 West) on attitudes,
stock-market participation, trust, and risk tolerance, alongside the
[online-broker](/wiki/confidential/online-broker/) and
[proprietary bank](/wiki/confidential/bank-proprietary/) data.

- **Cost:** commissioned (the authors pay the panel provider to field it); not a
  resold product.
- **Provider:** Bilendi (the online-panel fieldwork); design by the authors.
- **Coverage:** the surveyed sample, weighted to be representative of the target
  German population; a single cross-section, not a panel.

## Access (restricted)

- **No off-the-shelf access.** The survey is specific to the project; there is no
  catalog product to buy and no public file.
- **Project-bound.** The microdata belongs to the commissioning researchers under
  the fielding arrangement; obtaining the same data means commissioning a new
  survey, not licensing this one.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Online panels are not random samples.** Respondents are drawn from an opt-in
  panel and quota-balanced, not a probability sample; representativeness depends on
  the weights and quotas, and some groups are reached poorly. Use the weights and
  report them.
- **Self-reported, single cross-section.** Attitudes, participation, and risk
  tolerance are self-reported at one point in time; there is no panel dimension and
  no administrative check. Treat the measures as stated preferences.
- **Recruitment and wording drive answers.** Question order, framing, and the
  recruitment script shape responses; results are not comparable to a differently
  worded survey. Pin the instrument.
- **Region splits rely on self-report or current location.** East/West (or similar)
  splits depend on where respondents say they grew up or now live; misclassification
  is possible. Check how the split is defined.
- **Not reproducible from a public source.** Others cannot re-pull the same
  responses; replication means a new survey with the same instrument. Plan for that.

## Citation

Cite the design and provider, e.g.: *Author-commissioned online survey fielded by
Bilendi, YYYY; individual responses used under the project arrangement.* State the
fielding year, the sample size and quotas, and the use of weights.
