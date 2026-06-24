---
title: "New York Times article archive (licensed)"
description: >-
  The full-text New York Times archive (back to 1851) is a long, consistent news
  corpus used for text-as-data measures of sentiment, attention, and discourse.
  It is licensed: this page documents the access path and the gotchas, but the
  data was not exercised here.
sidebar:
  label: NYT archive
tags: [text-as-data, news, media-archive, narrative, licensed, data:nyt-news]
---

:::caution[Licensed: not exercised here]
**The New York Times full-text archive is a licensed source** (The New York
Times), so it carries **no provenance badge**: the
access path below was **not** run in this session. The free NYT API exposes
article metadata and abstracts, but the full body text used for corpus-scale
text analysis is licensed. Treat it as unverified until someone exercises the
full-text archive. This is the honest grade under the institute's Verified
discipline.
:::

**The New York Times archive** is a continuously published newspaper running since
1851, which makes its full text one of the few news corpora long and consistent
enough to build **century-scale** text-as-data measures. It is used for narrative,
attention, sentiment, and topic measures in finance and economics. A paper we
distill uses it:
[Hirshleifer, Mai & Pukthuanthong](/wiki/papers/jf/2025/hirshleifer-war-discourse-cross-section-2025/)
run semisupervised topic modelling (sLDA) over roughly 7 million New York Times
articles spanning January 1871 to October 2019 to construct a war-discourse index,
whose innovations form a factor (WarFac) that prices the cross section of stock
returns.

- **Cost:** article metadata and abstracts are free via the NYT Developer API;
  the full body-text archive for bulk text mining is licensed.
- **Publisher:** The New York Times.
- **Coverage:** the full run of the paper from the 19th century to the present;
  millions of articles, with section, date, and length metadata.

## Access (when licensed)

- **Metadata is open; full text is licensed.** The NYT Developer API (Article
  Search, Archive) returns headlines, abstracts, sections, and dates for free with
  a key, but not the full body text. Corpus-scale full text comes through a
  licensed archive (for example ProQuest Historical Newspapers / TDM Studio, or a
  direct NYT text-and-data-mining licence).
- **Keyed by article and date.** A corpus extract is article text plus date,
  section, and length; topic models weight by article length (the citing paper
  uses length-weighted topic shares).
- API keys or archive credentials are required. Keep any credentials in `.env`,
  never hard-coded; respect the licence's rate and redistribution limits.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The free API is not the full text.** A pipeline that pulls the NYT API and
  treats abstracts as the article body silently truncates the corpus; topic and
  sentiment measures built on abstracts differ from full-text measures. Confirm
  which layer you have.
- **OCR and vocabulary drift over a long span.** A corpus spanning 1871 to today
  carries OCR errors in the older scanned material and large shifts in vocabulary,
  spelling, and section structure; a model trained naively across the whole span
  conflates language change with topic change. The citing paper uses a rolling
  120-month estimation window to handle this. Account for drift.
- **Composition changes (sections, length, supply).** Article counts, average
  length, and the mix of sections grow and shift over decades; a raw topic count
  rises with the volume of print, not necessarily with attention. Normalize
  (length-weight, share-of-coverage) rather than count.
- **Redistribution is restricted.** Licensed full text cannot be republished;
  store derived features (topic loadings, counts), not the raw articles, and keep
  the corpus inside the licence. Do not redistribute text.
- **Reproducibility needs the exact corpus vintage.** The archive and API results
  change as articles are added or corrected; a text measure is only reproducible
  if the corpus snapshot and query are pinned. Record the vintage.

## Citation

Cite the publisher and the access route, e.g.: *New York Times article archive
(full text via [archive provider]), accessed YYYY-MM-DD.* State the corpus span,
the article count, the access layer (metadata API versus licensed full text), and
any length weighting.
