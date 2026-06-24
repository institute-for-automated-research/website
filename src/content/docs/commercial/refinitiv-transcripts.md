---
title: "Refinitiv (LSEG) earnings-call transcripts (licensed)"
description: >-
  Refinitiv (now LSEG) distributes transcripts of analyst-management conference
  calls, a standard corpus for textual analysis of disclosure. It is licensed:
  this page documents the access path and the gotchas, but the data was not
  exercised here.
sidebar:
  label: Refinitiv transcripts
tags: [text, disclosure, earnings-calls, nlp, licensed, data:refinitiv-transcripts]
---

:::caution[Licensed: not exercised here]
**Refinitiv (LSEG) transcripts are a paid licensed product**, so they carry **no provenance badge**: the access path below was
**not** run in this session (no Refinitiv / LSEG credentials were available). The
page documents the access route and the gotchas; treat it as unverified until
someone exercises it through a licensed account. This is the honest grade under
the institute's Verified discipline.
:::

**Refinitiv (LSEG) earnings-call transcripts** are textual transcripts of
public-company conference calls (earnings calls and other analyst-management
calls), with the call segmented into presentation and question-and-answer
sections and tagged by speaker (management, analyst, operator). They are one of
the standard corpora for textual analysis of corporate disclosure, alongside
S&P Global / Capital IQ transcripts; researchers use them to measure tone,
topic attention, and the timing of management discussion of specific issues. A
paper we distill uses them:
[Kruttli, Roth Tran & Watugala](/wiki/papers/jf/2025/kruttli-pricing-poseidon-extreme-weather-2025/)
run textual analysis of hurricane-channel discussion across the 120 trading days
after landfall over 2002-2019.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** Refinitiv / LSEG (lineage through Thomson Reuters; the transcript
  product traces to StreetEvents).
- **Coverage:** global public companies, denser for large U.S. and developed-market
  firms; usable history reaches back to the early 2000s, with broader coverage in
  later years.

## Access (when licensed)

- **Through a Refinitiv/LSEG feed or a research data licence.** Transcripts are
  delivered as structured documents (often per-call files with speaker and
  section tags) through a Refinitiv/LSEG entitlement or a negotiated bulk research
  licence. Check which route your institution provides.
- **Keyed by company identifier and event date.** Each transcript is tied to a
  company (Refinitiv identifiers, mappable to RIC/PERMNO) and a call date/event;
  an extract is a set of calls for a firm list over a date range.
- Credentials are required. Keep any credentials in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Coverage is selective and grows over time.** Not every call is transcribed;
  coverage skews to larger, more-followed firms and thickens in later years.
  Absence of a transcript is not evidence a call did not happen, and a firm panel
  conditioned on transcript presence is size-biased.
- **Speaker and section tags are the analysis unit and they vary.** Tone and
  attention measures differ sharply between the scripted presentation and the
  unscripted Q&A; tagging quality and the operator/analyst/management labels are
  not perfectly consistent across vintages. Parse and validate the segmentation
  rather than treating the whole transcript as one block.
- **Transcription is approximate.** Transcripts are produced from audio and
  contain misspellings, mis-attributions, and "[inaudible]" gaps; named-entity
  and keyword counts inherit these errors. Build dictionaries and matching to be
  robust to transcription noise.
- **Event timing versus call timing.** The call date is not the period the call
  discusses; aligning text to an event window (as in the distilled paper's
  post-landfall windows) requires the actual call date, not the fiscal period.
  Be explicit about which date drives the window.
- **Licensing forbids redistribution.** The corpus cannot be re-posted; published
  work can report derived measures (counts, tone scores) but not the raw text.
  Keep derived features, not the source documents, in any shared artifact.
- **Identifier linking.** Refinitiv company identifiers must be linked to
  CRSP/Compustat; the join has known mismatches across reorganizations and
  ticker changes. Verify the link rather than assuming a clean one-to-one map.

## Reference: transcript structure

| Element | What it is |
|---|---|
| Header | Company, call date/time, event type, identifiers |
| Presentation | Scripted management remarks |
| Q&A | Unscripted analyst questions and management answers |
| Speaker tags | Management / analyst / operator attribution |

The presentation/Q&A split and speaker tags are the units most textual measures
are built on; validate the segmentation for the vintage you pulled.

## Citation

Cite the provider and database, e.g.: *Refinitiv / LSEG earnings-call
transcripts, accessed YYYY-MM-DD.* State the firm universe, the date range, the
sections analyzed (presentation, Q&A, or both), and the extraction date so the
text sample is reproducible.
