---
title: "CRA disclosure data (FFIEC)"
description: >-
  How the FFIEC Community Reinvestment Act small-business, small-farm, and
  community-development lending files are structured, plus why a pipeline cannot
  fetch them no-key (the FFIEC host returns a Cloudflare challenge to automated
  requests), the fixed-width record-type layouts, and the disclosure vs
  aggregate vs transmittal split.
sidebar:
  label: CRA (FFIEC)
  order: 60
tags: [banking, lending, small-business, filings, panel-data, free, no-api-key, academic, data:cra-ffiec]
---

:::note[Open data, but not fetchable no-key from this session]
CRA disclosure data is **free and public** (no account, no key, no fee), but
every FFIEC host path (`www.ffiec.gov`) returned a **Cloudflare bot challenge**
(HTTP 403 with a ~244 KB HTML body) to automated requests from this session, and
no non-blocked mirror of the actual data files could be confirmed. The page
therefore carries **no provenance badge**: it documents the dataset and access
path, but the end-to-end pull was **not** exercised here. A human browser can
download the files directly; an unattended pipeline needs a headless browser that
solves the JS challenge, or a manually cached copy.
:::

**CRA disclosure data** is the FFIEC's annual record of bank lending to small
businesses, small farms, and communities under the Community Reinvestment Act.
For each reporting institution it gives the count and dollar volume of
small-business and small-farm loans by census tract, plus community-development
lending. It is the standard free source for studying where banks lend to small
firms, distinct from the mortgage-focused [HMDA](/wiki/datasets/hmda/). Used in,
for example,
[Rehbein & Rother (2025)](/wiki/papers/rfs/2025/rehbein-social-connectedness-bank-lending-2025/),
where county-to-county CRA small-business loan volumes are the dependent
variable linked to social connectedness.

- **Cost:** free, public (no account, no key, no fee).
- **API key:** none (the data are flat files, not an API).
- **Coverage:** annual, roughly 1996 to the latest release; institution-level
  disclosure files plus MSA/county aggregate files.
- **Content:** small-business, small-farm, and community-development lending
  (NOT home mortgages; that is HMDA).
- **Home (browser only):** <https://www.ffiec.gov/data/cra>

## Access

The files live under `https://www.ffiec.gov/data/cra` (Data Products), with the
bulk flat files at `.../cra/flat-files` and interactive query tools at
`https://www.ffiec.gov/craadweb/`. All sit on the same Cloudflare-gated host, so
the path below works in a browser but is blocked for unattended automation.

```bash
# Reachable in a browser; an automated GET returns a Cloudflare challenge
# page (HTTP 403, HTML body) rather than the zip:
#   https://www.ffiec.gov/data/cra/flat-files
# Disclosure (institution-by-institution) and Aggregate (MSA/county totals)
# flat files are released per year, alongside the fixed-width layout specs:
#   .../flat-files/<yy>FlatDiscSpecs.pdf   (Disclosure layout)
#   .../flat-files/<yy>FlatAggSpecs.pdf    (Aggregate layout)
```

Validate any download by magic bytes before trusting it: a real flat-file zip
starts with `PK\x03\x04`; the Cloudflare challenge is HTML even when the request
named a `.zip`.

## Gotchas (the ones that bite pipelines)

- **The host bot-blocks, and the block masquerades as data.** A naive fetch
  gets HTTP 403 with a ~244 KB HTML challenge body. A pipeline that only checks
  the status code, or that saves the body to a `.zip` without checking the
  magic bytes, silently captures the challenge page. Check `PK\x03\x04`.
- **Fixed-width flat files, not CSV.** Each line is parsed by the published
  column-position layout in the spec PDF; there are no delimiters and no header.
- **Three distinct file families, do not conflate.** Transmittal Sheet (reporter
  roster and identity), Disclosure (institution-by-institution lending), and
  Aggregate (MSA/county totals across all reporters). Pick by analysis level.
- **Multiple record types interleaved in one file.** A single file mixes several
  record formats (e.g. table D1-1, D1-2, D2, ...), keyed by a leading
  record-identifier code; branch the parser on that code per line.
- **Reporting year is not activity year.** Small-business and small-farm lending
  is reported the year after it occurs, so the latest release lags the activity
  it covers.
- **CRA is not HMDA.** CRA here is small-business, small-farm, and
  community-development lending; home mortgages are the separate (and
  no-key-fetchable) [HMDA](/wiki/datasets/hmda/) dataset, now CFPB-hosted.
- **Geography keys need a join.** Records carry FIPS state/county plus MSA/MD
  codes; tract characteristics come from the separate FFIEC Census flat files on
  the same blocked host.

## Reference

| Field | Value |
|-------|-------|
| Host | FFIEC Data Products: `www.ffiec.gov/data/cra` (browser only) |
| File families | Transmittal, Disclosure (institution), Aggregate (MSA/county) |
| Format | Fixed-width flat files, multiple record types per file |
| Layout specs | `<yy>FlatDiscSpecs.pdf`, `<yy>FlatAggSpecs.pdf` |
| Coverage | Annual, roughly 1996 to latest |
| Content | Small-business, small-farm, community-development lending |
| Key required | No (but host bot-blocks automation) |

## Citation

Cite the FFIEC as the source: Federal Financial Institutions Examination Council,
"Community Reinvestment Act (CRA) data," with the specific year, file family
(Disclosure or Aggregate), and retrieval date. Note in a methods appendix that
the files were retrieved through a browser session, since the host blocks
automated access.
