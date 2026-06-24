---
title: "StockTwits social-media messages (licensed)"
description: >-
  StockTwits is a finance-focused social platform whose ticker-tagged messages,
  often self-labeled bullish or bearish, are used as a retail-sentiment signal.
  It is licensed: this page documents the access path and the gotchas, but the
  data was not exercised here.
sidebar:
  label: StockTwits
tags: [social-media, sentiment, text-as-data, retail-investors, fintech, licensed, data:stocktwits]
---

:::caution[Licensed: not exercised here]
**StockTwits message data is a paid licensed product** (StockTwits Inc., often
via Social Market Analytics), so it carries **no
provenance badge**: the access path below was **not** run in this session. Treat
it as unverified until someone exercises it through a StockTwits or SMA data
licence. This is the honest grade under the institute's Verified discipline.
:::

**StockTwits** is a finance-focused social network on which users post short
messages tagged with stock tickers (`$AAPL`), frequently attaching a
self-declared **Bullish** or **Bearish** label. That explicit sentiment tag,
plus the ticker structure, makes it a widely used measure of retail investor
sentiment at the firm-day level for text-as-data research. A paper we distill
uses it:
[Cookson, Niessner & Schiller](/wiki/papers/jf/2026/cookson-social-media-merger-withdrawals-2026/)
use roughly 260 million StockTwits posts (January 2010 to December 2021) matched
to 6,438 U.S. M&A deals to build firm-specific abnormal sentiment after a merger
announcement, showing that negative social-media sentiment predicts deal
withdrawal.

- **Cost:** licensed. Some current data is reachable through StockTwits' own
  API under terms, but the historical research corpus is typically obtained
  through Social Market Analytics or a direct StockTwits data agreement.
- **Vendor:** StockTwits Inc.; redistribution and history often via Social
  Market Analytics (SMA).
- **Coverage:** message-level, ticker-tagged, from the platform's launch around
  2009 to present; deepest for liquid U.S. equities that attract retail
  attention.

## Access (when licensed)

- **Through a StockTwits or SMA data licence.** The research corpus (full
  message history with timestamps, tickers, and the Bullish/Bearish label)
  comes as bulk extracts under agreement; the public API is rate-limited and
  governed by terms that restrict bulk historical collection.
- **The grain is the message.** Each row is a post with author, timestamp,
  ticker(s), text, and the optional sentiment tag; firm-day sentiment measures
  are aggregated up from messages, as the citing paper's abnormal-sentiment
  measure is.
- Credentials are required. Keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The self-labeled sentiment tag is optional and sparse.** Only a fraction of
  messages carry an explicit Bullish/Bearish flag; the rest need a text
  classifier, and the labeled subset is not a random sample of opinion. State
  how unlabeled messages are handled.
- **Population is self-selected retail, not the market.** Posters skew toward
  active retail traders and toward high-attention tickers; coverage is thin for
  small or neglected stocks and absent for most of the cross section. Sentiment
  is informative about the attentive crowd, not the marginal investor.
- **Volume confounds sentiment.** Message counts spike around news, so an
  abnormal-sentiment measure must net out the attention spike; the citing paper
  builds an *abnormal* sentiment for exactly this reason. Raw sentiment tracks
  volume.
- **Bots, promotion, and manipulation.** Ticker streams contain spam, paid
  promotion, and coordinated posting; naive aggregation imports that noise.
  Filter duplicates and low-quality accounts.
- **Terms restrict bulk reuse.** Both the API and the licensed corpus carry
  redistribution limits; cache derived features (firm-day sentiment), not raw
  messages, and do not republish the text. The same firm-day measure built from
  different filters will not match another paper's; document the pipeline.

## Citation

Cite the source and provider, e.g.: *StockTwits messages (StockTwits Inc., via
Social Market Analytics), [dates], accessed YYYY-MM-DD.* State the message
count and date range, how sentiment was assigned (self-label versus classifier),
and how attention/volume was netted out.
