---
title: "Health and Retirement Study (HRS)"
description: >-
  The HRS is a biennial U.S. panel of older households covering health, income,
  wealth, retirement, and expectations. It is free academic data behind a
  registration and data-use agreement; the portal blocked automated requests
  from this session, so the download was not exercised here.
sidebar:
  label: HRS
  order: 33
tags: [household, retirement, aging, expectations, survey, panel, free, academic, data:hrs]
---

:::note[Free academic data, registration-walled, not exercised here]
The Health and Retirement Study is **free** for research, but access requires a
free account and acceptance of a data-use agreement at the University of
Michigan HRS portal. The portal (`hrsdata.isr.umich.edu`) returned automated
requests with a 403 from this session, so the end-to-end download was **not**
run here. The page therefore carries **no provenance badge**: it documents the
dataset and the access path, but the pull is unverified under the institute's
Verified discipline.
:::

**The Health and Retirement Study (HRS)** is a biennial longitudinal survey of
U.S. households over age 50, run by the University of Michigan Institute for
Social Research with sponsorship from the National Institute on Aging and the
Social Security Administration. It follows the same respondents and their
spouses over time on health, cognition, employment and retirement, income and
wealth, pensions and Social Security, and expectations (including subjective
probabilities about inflation, recessions, and stock returns). It is used in,
for example,
[Ke](/wiki/papers/jf/2025/ke-intrahousehold-disagreement-macroeconomic-expectations-2025/),
where the macroeconomic expectations of both spouses and household portfolio
outcomes (stock market participation and equity share) come from the HRS panel.

- **Cost:** free for research; registration and a data-use agreement required.
- **Access:** free account at the Michigan HRS data portal, then bulk download.
- **Coverage:** U.S. households age 50 and over, biennial since 1992, with
  refresher cohorts added over time; individual and couple-level records.
- **Home:** <https://hrs.isr.umich.edu> ·
  **Data portal:** <https://hrsdata.isr.umich.edu>

For a household wealth survey with no registration step, see the
[SCF](/wiki/datasets/scf/), which the same retirement-and-wealth work often
pairs with the HRS.

## Access

- **Register, then download.** Create a free account at the HRS data portal,
  accept the data-use agreement, and download the data products in bulk. The
  raw HRS files are released wave by wave.
- **RAND HRS Longitudinal File.** Most analysts use the RAND HRS Longitudinal
  File rather than the raw wave files: it is a cleaned, harmonized,
  cross-wave extract with consistent variable names and derived measures, which
  removes most of the wave-to-wave reconciliation work.
- **Not exercised here.** The portal returned a 403 to automated requests from
  this session, so confirm the current download path in a browser. Access is
  gated by the account and agreement, not by payment.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; the download itself was not run here.

- **Registration and a data-use agreement gate every download.** There is no
  anonymous bulk endpoint; an automated pull needs an authenticated session
  under the agreement, so a pipeline cannot fetch it keyless the way it fetches
  SCF or FRED.
- **RAND HRS and raw HRS are different products.** The RAND file harmonizes and
  renames variables across waves; the raw wave files do not. Mixing the two in
  one script breaks on variable names and codings. Pick one.
- **It is biennial and respondent-linked.** Waves are roughly two years apart,
  and individuals are linked to spouses and across waves by household and person
  identifiers. Couple-level analysis requires joining both spouses' records
  within a wave; getting the link keys wrong silently drops or duplicates
  couples.
- **Complex survey design.** Estimates require the supplied person- and
  household-level weights (and the sampling design for standard errors). An
  unweighted mean is biased toward the sample design.
- **An aging panel attrits, partly through mortality.** Respondents leave the
  panel as they die or drop out, and refresher cohorts enter, so the composition
  shifts over time. Account for attrition and entry when building a balanced
  panel.
- **Detailed pension and Social Security modules are separate.** Rollover and
  pension-disposition events need the detailed-pension supplements, not the core
  panel; do not assume the headline file carries them.

## Citation

Cite the Health and Retirement Study (University of Michigan, sponsored by the
National Institute on Aging and the Social Security Administration), the
specific product and waves used (for example the RAND HRS Longitudinal File and
its version), the variables and sample, and the access date. Follow the data-use
agreement's required acknowledgment language.
