---
title: "Blue Chip Financial Forecasts (licensed)"
description: >-
  Blue Chip Financial Forecasts (Wolters Kluwer) is a monthly survey of
  professional forecasters' interest-rate and macro projections, widely used to
  measure forecast consensus and dispersion. It is licensed: this page documents
  the access path and the gotchas, but the data was not exercised here.
sidebar:
  label: Blue Chip Forecasts
tags: [forecasts, interest-rates, survey-expectations, licensed, data:blue-chip-forecasts]
---

:::caution[Licensed: not exercised here]
**Blue Chip Financial Forecasts is a paid licensed product** (Wolters Kluwer),
so it sits in the *Licensed* tier and carries **no provenance badge**: the access
path below was **not** run in this session (no subscription was available). The
page documents the access route and the gotchas; treat it as unverified until
someone exercises it through a licensed subscription. This is the honest grade
under the institute's Verified discipline.
:::

**Blue Chip Financial Forecasts** is a monthly survey in which a panel of
professional forecasters (banks, asset managers, consultancies) submit projections
for U.S. interest rates (across the curve), GDP growth, inflation, and other macro
variables, at several horizons. The companion **Blue Chip Economic Indicators**
covers the broader macro panel. The survey is a standard source for the
**consensus** forecast and the **cross-forecaster dispersion** used to proxy
disagreement and uncertainty. A paper we distill uses it:
[Stavrakeva & Tang](/wiki/papers/jf/2026/stavrakeva-dollar-great-recession-2026/)
use Blue Chip GDP forecasts to discipline an affine-term-structure VAR and to
measure GDP-forecast dispersion when studying the dollar during the Great
Recession.

- **Cost:** licensed, subscription. No free tier.
- **Publisher:** Wolters Kluwer (Blue Chip Financial Forecasts; Blue Chip
  Economic Indicators).
- **Coverage:** monthly survey of professional forecasters, with individual and
  consensus projections across rates and macro variables at multiple horizons;
  long monthly history.

## Access (when licensed)

- **Through the Wolters Kluwer subscription.** The newsletters are distributed by
  subscription; the historical individual-forecaster microdata is obtained through
  the publisher or a research arrangement.
- **Consensus is published; individual responses are the research asset.** The
  headline consensus is in the newsletter; forecaster-level responses (needed for
  dispersion) require the microdata.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Survey timing versus the forecast date.** Responses are collected in a survey
  window and refer to specific horizon dates; aligning a forecast to the
  information set at the survey date (not the publication date) matters for any
  predictability test. Be explicit about the timing.
- **Panel composition changes.** Forecasters enter and leave the panel, so the
  consensus is over a changing set; dispersion can move because the panel changed,
  not because disagreement did. Track panel membership.
- **Horizon and target conventions.** Forecasts are for fixed horizons or fixed
  target dates depending on the variable; mismatching the convention misaligns the
  realized value used to score accuracy. Confirm the target definition.
- **Consensus is a mean/median of submissions.** The published consensus is a
  simple summary; using it without the underlying responses hides skew and
  outliers. Use the microdata when distributional features matter.
- **Rounding and revisions.** Submissions are rounded and the realized macro series
  is revised; both add noise to forecast-error studies. Use real-time realized
  data where possible.

## Citation

Cite the publisher and product, e.g.: *Blue Chip Financial Forecasts (Wolters
Kluwer), accessed YYYY-MM-DD.* State whether consensus or forecaster-level data
was used, the variable and horizon, and the survey-date alignment.
