---
title: "RavenPack: news and event analytics (licensed)"
description: >-
  RavenPack turns text news into structured, timestamped entity-event records
  with sentiment, relevance, and novelty scores. It is a paid subscription:
  this page documents the access path and the gotchas that bite event-study
  pipelines, but the data was not exercised here.
sidebar:
  label: RavenPack
  order: 2
tags: [equities, licensed, event-data, data:ravenpack]
---

:::caution[Licensed: not exercised here]
**RavenPack is a paid subscription**, so it sits in the *Licensed* tier and
carries **no provenance badge**: the access path below was **not** run in this
session (no RavenPack credentials were available). The page documents the
access route and the gotchas; treat it as unverified until someone exercises
it through a licensed account. This is the honest grade under the institute's
Verified discipline, which forbids a badge for an unrun claim.
:::

**RavenPack** converts unstructured news and other text into structured,
machine-readable **entity-event records**: each detected company, person, or
place in a story gets a timestamped row carrying a sentiment score, a
relevance score, a novelty score, and a topic taxonomy. It is a
commercial feed for news-based signals in finance. The
[Kwan, Liu & Matthies](/wiki/papers/jf/2026/kwan-liu-matthies-2026/) attention paper
uses **RavenPack 1.0** to classify the topic, subject, and sentiment of the
news that institutional investors read, and to map stories to stock tickers.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** RavenPack (news and event analytics; the analytics product has
  versioned editions, e.g. a legacy **1.0** and later editions, with
  different fields and taxonomies; confirm the edition against current vendor
  documentation).
- **Coverage:** global news (newswires such as Dow Jones, plus web and
  press-release sources); millions of entity-event records per day.

## Access (when licensed)

- **Direct from the vendor.** Delivered as historical flat-file dumps plus an
  ongoing feed (SFTP / API / cloud share). You pull dated files and the
  point-in-time analytics for each story.
- **Via WRDS.** Subscribing institutions can reach RavenPack News Analytics
  through [WRDS](/wiki/licensed/wrds/), which is the easiest academic route if
  your university licenses it. Query it like any other WRDS library; filter on
  date and relevance before pulling.
- Either way, credentials are required. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Filter on relevance first.** Each record has a `RELEVANCE` score (0 to 100).
  A story that merely mentions a company in passing scores low; keep
  `RELEVANCE = 100` (or a high threshold) when you want stories that are
  *about* the entity, or your signal is mostly noise.
- **Deduplicate with the novelty score.** Newswires re-run and syndicate the
  same story. The Event Novelty Score (`ENS`) flags the first report
  (`ENS = 100`) versus echoes; without it you double-count one event many
  times.
- **Timestamps are UTC; align to the trading calendar.** The production
  timestamp is when the record was created, in UTC. Convert to the market
  timezone and decide deliberately how to treat after-close and weekend news
  before forming a daily signal.
- **Use the point-in-time timestamp, not the story date, to avoid look-ahead.**
  Signals must be built from when the analytics were available, not when the
  event nominally happened.
- **Sentiment scales differ by version.** The Event Sentiment Score and
  Composite Sentiment Score conventions changed between RavenPack 1.0 and
  later editions (e.g. a 0 to 100 scale with 50 neutral). Confirm which edition
  and scale you are on before thresholding.
- **Entity mapping is its own step.** Records key on `RP_ENTITY_ID`, not a
  ticker or PERMNO. Use RavenPack's mapping files to join to security
  identifiers, and remember entities include private firms, people, and
  places, not just listed equities.
- **Volume.** The raw feed is large; filter on entity, relevance, and date at
  read time rather than loading everything.

## Citation

Cite the product and edition, e.g.: *RavenPack News Analytics (RavenPack 1.0),
RavenPack; data licensed and accessed YYYY-MM-DD.* State the relevance and
novelty filters used, since they materially define the sample.
