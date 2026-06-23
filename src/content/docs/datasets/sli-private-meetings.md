---
title: "SLI private meeting notes and fund records (restricted access)"
description: >-
  Internal records of one asset manager (Standard Life Investments / abrdn):
  private-meeting notes, analyst ratings and recommendations, fund holdings, and
  daily trades. It is confidential single-counterparty data. This page documents
  what it is and the gotchas, but it was not exercised here.
sidebar:
  label: SLI private meetings
tags: [asset-management, private-meetings, text, holdings, data:sli-private-meetings]
---

:::caution[Confidential single-counterparty data: not exercised here]
**This is confidential internal data from a single asset manager** (Standard
Life Investments / abrdn). It is **not for sale, not publicly downloadable, and
not re-obtainable without the same agreement**: it carries **no provenance
badge** because there is no access path we can run here. Researchers obtained it
under a confidential agreement with the firm. The page documents what the data
is and the gotchas; treat it as unverified. This is the honest grade under the
institute's Verified discipline.
:::

**The SLI data** is the internal record of one large asset manager: notes from
**private meetings** between the manager's analysts and the companies it invests
in, internal analyst ratings and Buy/Hold/Sell recommendations, fund holdings,
and daily trades. The meeting notes are the distinguishing asset, because they
capture private-access information flow that is otherwise unobservable. A paper we
distill uses it:
[Becht, Franks & Wagner](/wiki/papers/jf/2026/becht-private-meetings-portfolio-firms-2026/)
use 4,700 SLI meeting notes (with attendee info and analyst ratings), daily
fund holdings and trades across roughly 40 to 50 funds covering FTSE All-Share
stocks (2007 to 2015), and internal recommendations to study the value of private
access to portfolio firms.

- **Cost:** not for sale. Confidential single-counterparty data.
- **Source:** Standard Life Investments / abrdn (one asset manager).
- **Coverage:** this manager's own meetings, ratings, holdings, and trades over
  the sample window, focused on its UK (FTSE All-Share) investment universe.

## Access (restricted)

- **No public download and no resale.** The records are the firm's confidential
  internal documents; they cannot be purchased or redistributed.
- **Through a confidential agreement with the firm.** Access required a research
  agreement. There is no standing way for a third party to reach the same data.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **One manager is not the industry.** The notes, ratings, and trades reflect a
  single firm's process, universe, and house style; external validity to other
  managers is limited. Do not generalize the value of access from one firm.
- **Meeting notes are unstructured and analyst-written.** Notes vary in length,
  detail, and candor by author and over time; text measures (tone, content) inherit
  that heterogeneity. Validate any text classification against the raw notes.
- **Which meetings are recorded is selective.** A note exists when the analyst held
  and logged a meeting; absence is not evidence of no contact, and meeting selection
  is endogenous to interest in the stock. Treat note presence as a choice.
- **Holdings and trades need careful alignment to notes.** Linking a meeting to
  subsequent trades requires precise timestamps and a position panel; the
  10-million-plus fund-stock-day structure demands clustering. Align timing
  deliberately.
- **MNPI and disclosure constraints.** The notes can contain material non-public
  information; the firm's sharing is bounded and results are constrained
  accordingly. Respect the disclosure limits in what is reported.
- **Not redistributable.** Results can be reported but the microdata cannot be
  shared and cannot be re-pulled by others. Plan for non-reproducibility of the raw
  inputs.

## Citation

Cite the source and arrangement, e.g.: *SLI private-meeting notes and fund records
(Standard Life Investments / abrdn), confidential; used under agreement,
YYYY-MM-DD.* State the sample window, the note count, and the fund universe.
