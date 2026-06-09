---
title: "I/B/E/S: analyst estimates and actuals (licensed)"
description: >-
  I/B/E/S is the standard panel of sell-side analyst forecasts (EPS and other
  measures), consensus summaries, and matched "street" actuals, reached by most
  researchers through WRDS. It is licensed: this page documents the access path
  and the gotchas, but the data was not exercised here.
sidebar:
  label: I/B/E/S
  order: 5
tags: [equities, analyst-forecasts, licensed, panel-data, data:ibes]
---

:::caution[Licensed: not exercised here]
**I/B/E/S is a licensed commercial dataset** (LSEG / Refinitiv, reached for most
academics through [WRDS](/wiki/licensed/wrds/)), so it sits in the *Licensed*
tier and carries **no provenance badge**: the access path below was **not** run
in this session (the keystone WRDS pull is documented on the
[WRDS page](/wiki/licensed/wrds/), but the IBES-specific tables were not queried
here). The page documents the access route and the gotchas; treat it as
unverified until someone exercises it through a licensed account. This is the
honest grade under the institute's Verified discipline.
:::

**I/B/E/S** (Institutional Brokers' Estimate System) is the long-running panel
of **sell-side analyst forecasts**: per-analyst (Detail) and consensus (Summary)
estimates of earnings per share and other measures, plus recommendations, price
targets, and matched "street" **actuals**. It is the standard source for analyst
expectations, forecast dispersion, and earnings surprises in empirical finance.
Papers we distill use it for analyst coverage and forecast measures, for example
[Ben-Rephael, Carlin, Da & Israelsen](/wiki/papers/jf/2025/ben-rephael-uncovering-hidden-effort-problem-2025/)
and [Cookson, Niessner & Schiller](/wiki/papers/jf/2026/cookson-social-media-merger-withdrawals-2026/).

- **Cost:** licensed, subscription. No free tier. Most academics reach it
  through an institutional WRDS license.
- **Vendor:** LSEG / Refinitiv (the dataset passed through Thomson Reuters and
  Refinitiv ownership; older citations say Thomson Financial / Thomson Reuters).
- **Coverage:** US (`ibes` US files) and international (`epsint`) equities, from
  the mid-1970s for US EPS; per-analyst detail, consensus summary, actuals,
  recommendations, and price targets.

## Access (when licensed)

- **Through WRDS (the usual path).** The `ibes` libraries on
  [WRDS](/wiki/licensed/wrds/): Summary statistics (`ibes.statsum_epsus`),
  Detail history (`ibes.det_epsus`), actuals (`ibes.actu_epsus`),
  recommendations (`ibes.recddet`), and the broker/analyst translation files.
  Query through a licensed WRDS session exactly as for CRSP and Compustat; see
  the [WRDS page](/wiki/licensed/wrds/) for the connection pattern.
- **Direct from LSEG / Refinitiv.** Through Refinitiv Workspace / a data feed,
  for institutions that license I/B/E/S directly rather than via WRDS.
- Credentials are required either way. Keep them in `.env`, never hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **Summary vs Detail are different objects.** The Summary file is the
  consensus snapshot computed on each month's "statistical period" cutoff; the
  Detail file is the per-analyst estimate history. Do not rebuild a consensus
  from Detail and expect it to equal Summary: the cutoffs, the included
  estimates, and the staleness rules differ.
- **Split adjustment and rounding corrupt small-cap EPS.** I/B/E/S historically
  stored estimates on a split-adjusted basis rounded to the cent, so for
  high-split or low-price stocks the adjusted EPS can round to zero or flip
  sign. Where possible work from unadjusted values and apply the CRSP
  cumulative adjustment factor yourself, and be wary of tiny denominators.
- **"Street" actuals are not GAAP and not Compustat.** I/B/E/S actuals are the
  analyst-basis ("street") earnings that exclude items analysts deem
  non-recurring; they do not equal Compustat GAAP EPS. Use the I/B/E/S actual,
  not a Compustat figure, when computing a surprise against an I/B/E/S forecast,
  or the surprise is mismatched at the numerator.
- **Forecast period indicator (FPI) and measure must be filtered.** A single
  permno-month carries many rows: FY1/FY2 annual, quarterly, long-term growth,
  and non-EPS measures (sales, CFPS, EBITDA). Always filter `fpi` and `measure`
  explicitly; an unfiltered pull mixes horizons and metrics.
- **Look-ahead bias from review and activation dates.** Use the estimate's
  announce/review and activation dates, not just the statistical period, to know
  what was actually observable as-of a date. The Summary file's "as-of" is the
  cutoff date, not the date the underlying estimates became public.
- **Historical revisions and the anonymity recoding.** I/B/E/S has restated
  parts of its history (the well-documented late-1990s/2000s changes), and
  analyst identities are masked codes that have been recoded over time; a broker
  or analyst code is not a stable cross-vintage key. Pin the data vintage.
- **Identifiers are CUSIP-based and need linking.** I/B/E/S keys on its own
  `ticker` plus historical CUSIP, not PERMNO or GVKEY; join through the
  WRDS-supplied I/B/E/S-CRSP link (or `iclink`) rather than a naive CUSIP merge,
  and respect that CUSIPs are reused over time.
- **US vs international files are separate.** The US (`epsus`) and international
  (`epsint`) files have different conventions and currencies; do not pool them
  without aligning currency and measure definitions.

## Reference: key WRDS I/B/E/S tables

| Table | What it holds |
|---|---|
| `ibes.statsum_epsus` | Consensus Summary statistics (mean/median/stdev, count) |
| `ibes.det_epsus` | Detail: individual analyst EPS estimates |
| `ibes.actu_epsus` | Reported "street" actuals matched to estimates |
| `ibes.recddet` | Analyst recommendations (detail) |
| `ibes.id` / link files | Identifier and broker/analyst translation tables |

## Citation

Cite the provider and the access route, e.g.: *I/B/E/S, LSEG / Refinitiv,
accessed via WRDS, YYYY-MM-DD.* State whether estimates are split-adjusted or
unadjusted, the FPI and measure used, and the data vintage.
