---
title: "Compustat Segments: business- and geographic-segment financials (licensed)"
description: >-
  Compustat Segment data reports financials below the consolidated firm level,
  by line of business and by geography, as disclosed under segment-reporting
  accounting standards. It is licensed: this page documents the access path and
  the gotchas, but the data was not exercised here.
sidebar:
  label: Compustat Segments
tags: [accounting, fundamentals, segments, licensed, data:compustat-segments]
---

:::caution[Licensed: not exercised here]
**Compustat Segment data is a paid S&P product**, so it sits in the *Licensed*
tier and carries **no provenance badge**: the access path below was **not** run
in this session (no WRDS / Compustat credentials were available). It is
commonly reached through WRDS. The page documents the access route and the
gotchas; treat it as unverified until someone exercises it through a licensed
account. This is the honest grade under the institute's Verified discipline.
:::

**Compustat Segment data** reports financials **below the consolidated firm
level**, broken out by line of business (operating / business segments) and by
geography, as disclosed under segment-reporting accounting standards (US:
SFAS 131; earlier SFAS 14). Fields include segment sales, operating profit,
identifiable assets, capital expenditure, depreciation, and the segment's
industry classification (SIC / NAICS). It is used to study diversification,
internal capital markets, and within-firm exposure. A paper we distill uses it:
[Grigoris et al.](/wiki/papers/jf/2026/grigoris-investment-upstream-downstream-uncertainty-2026/)
on investment and upstream / downstream uncertainty, where segment links map
vertical exposure across the supply chain.

- **Cost:** licensed, subscription. No free tier.
- **Vendor:** S&P Global Market Intelligence / Compustat.
- **Coverage:** US / North American filers that report segments; segment history
  from the late 1970s for the legacy standard and from 1998 for SFAS 131;
  annual.

## Access (when licensed)

- **Via WRDS.** Compustat Segment files are reached through
  [WRDS](/wiki/licensed/wrds/) under the Compustat segment data set. The main
  tables are the segment annual files (for example `wrds_segmerged` /
  `seg_annual`), keyed by `gvkey`.
- **Filter by segment type.** Segment type codes (`stype`) distinguish
  business / operating segments from geographic segments and from
  pension / other segment types; always select the type you intend before
  aggregating.
- Credentials are required. Keep any WRDS credentials in `.env`, never
  hard-coded.

## Gotchas (the ones that bite pipelines)

These are the failure modes to expect; they are documented, not verified here.

- **The SFAS 14 to SFAS 131 break is not comparable.** In 1997 / 1998 the
  reporting standard changed from industry segments (SFAS 14) to the
  "management approach" (SFAS 131), which redefined what counts as a reportable
  segment. Segment counts and definitions are **not** comparable across that
  break; do not pool a panel straight through it without accounting for the
  change.
- **Segment type codes matter; do not double-count.** Business / operating,
  geographic, and operating segment types overlap. Segment sales summed across
  all types can exceed firm sales. Filter by `stype` to one type before summing,
  or you will double-count.
- **Segments are not a stable panel unit.** Firms self-define their segments and
  re-define them from year to year, so a segment is not a fixed entity over
  time and segment identifiers are not persistent. Do not assume a segment in
  year *t* is the same unit in year *t+1*.
- **Segment items do not reconcile to the consolidated total.** The sum of
  segment-level items does not equal the firm-level total because of
  eliminations, "other / corporate" segments, and unallocated items. Expect a
  residual; do not treat the segment sum as the firm number.
- **Industry codes attached to segments are coarse and move.** The SIC / NAICS
  code on a segment is at a high level and can change across years, so an
  industry-based segment classification is approximate.
- **Coverage is conditional on disclosure.** Small or single-segment firms
  report a single segment, and non-disclosure is not missing-at-random. A
  segment sample is selected toward larger, more diversified firms.
- **Linking needs gvkey plus care.** Joining segments over time, or to
  firm-level Compustat, uses `gvkey` plus careful handling of the segment IDs;
  do not rely on segment identifiers alone to track a segment across years.

## Reference: segment type codes and main fields

| Segment type (`stype`) | What it holds |
|---|---|
| Business / operating | Line-of-business segments (the SFAS 131 reportable segments) |
| Geographic | Sales and assets broken out by region or country |
| Pension / other | Pension and residual segment types reported alongside the above |

| Field | What it holds |
|---|---|
| `gvkey` | Firm identifier (links to firm-level Compustat) |
| Segment sales | Revenue attributed to the segment |
| Operating profit | Segment operating income |
| Identifiable assets | Assets attributed to the segment |
| Capital expenditure | Segment capex |
| Depreciation | Segment depreciation |
| SIC / NAICS | Segment industry classification |

## Citation

Cite the provider and the files, e.g.: *S&P Compustat Segment files (via WRDS),
accessed YYYY-MM-DD.* State the tables used (for example `wrds_segmerged` /
`seg_annual`), the segment types retained, and the extraction date.
