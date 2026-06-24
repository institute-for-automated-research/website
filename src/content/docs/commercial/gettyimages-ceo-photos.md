---
title: "Getty Images executive photographs (licensed)"
description: >-
  Getty Images licenses dated press photographs of executives, the raw material
  for machine-learning apparent-age and facial measures of CEOs. It is licensed:
  this page documents the access path and the gotchas, but the data was not
  exercised here.
sidebar:
  label: Getty CEO photos
tags: [images, executives, machine-learning, apparent-age, licensed, data:gettyimages-ceo-photos]
---

:::caution[Licensed: not exercised here]
**Getty Images is a paid licensed product**, so it carries **no provenance badge**: the access path below was **not** run in this
session. Treat it as unverified until someone exercises it through a Getty Images
licence. This is the honest grade under the institute's Verified discipline.
:::

**Getty Images** is a stock and editorial photo agency whose **dated editorial
photographs of public figures** let researchers assemble time-stamped image sets
for named executives. Paired with a facial-analysis model, the photos yield
apparent-age and other face-based measures over time. A paper we distill uses it:
[Borgschulte, Guenzel, Liu & Malmendier](/wiki/papers/jf/2025/borgschulte-ceo-stress-aging-death-2025/)
build a CEO Apparent Aging Data Set of 3,002 dated photographs of 453 Fortune 1000
CEOs (the 2006 cohort), spanning 2000 to 2016, sourced from Getty Images
(supplemented with Google Images), and run a deep convolutional apparent-age model
to show that industry distress visibly ages CEOs.

- **Cost:** licensed, per-image or subscription editorial licence.
- **Vendor:** Getty Images.
- **Coverage:** editorial / press photographs of public figures with capture dates
  and captions; depth depends on how often a person was photographed, so prominent
  executives are well covered and others sparsely.

## Access (when licensed)

- **Through a Getty Images licence.** Images are searched and licensed on the Getty
  platform (editorial collection); the date and caption metadata, needed to place
  each photo in time, come with the image.
- **Build a per-person, per-date image set.** A usable dataset is the set of dated
  photos for each named individual; the research asset is the derived measure
  (apparent age), not the images themselves.
- **Respect the editorial licence.** Getty terms restrict redistribution and some
  automated use; store derived features and licence the images properly. Keep any
  credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Capture date versus publication date.** The research date must be when the
  photo was taken, not when it was uploaded or republished; a wrong date corrupts
  any aging trajectory. Verify the capture date, not just the metadata timestamp.
- **Photo selection is endogenous.** Which photos exist and get licensed depends on
  events (a CEO is photographed more during a crisis), and editorial photos are
  retouched, lit, and posed differently; both confound a face-based measure. The
  citing paper uses a difference-in-differences design over many images per person
  to net out fixed appearance. Account for selection.
- **Model bias and validation.** Apparent-age and facial models carry systematic
  error by lighting, pose, expression, gender, and race; the measure is only as
  good as the model's validation on this population. State the model and its
  validation.
- **Coverage is uneven across people and time.** Some CEOs have many dated photos,
  others very few; sparse coverage makes per-person trajectories noisy and biases
  toward the most-photographed. Report images per person.
- **Mixing sources changes the distribution.** Supplementing Getty with Google
  Images (as the citing paper does) mixes editorial and web images with different
  quality and date reliability; treat source as a covariate, not as
  interchangeable.

## Citation

Cite the source and that a measure was derived, e.g.: *Editorial photographs
licensed from Getty Images, accessed YYYY-MM-DD.* State the population, the number
of images and dates, any supplementary image source, and the facial model used to
derive the measure.
