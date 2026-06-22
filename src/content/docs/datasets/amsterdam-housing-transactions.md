---
title: "Amsterdam historical housing prices and rents"
description: >-
  How to pull the long-run Amsterdam house-price and rent series compiled by
  Eichholtz, Korevaar, Francke and co-authors as no-login Excel files, plus the
  gotchas (the compiled panels are separate from the raw City Archives, the
  hosting is personal Google Drive with link rot, and several distinct series
  must not be spliced).
sidebar:
  label: Amsterdam housing
  order: 68
tags: [housing, prices, rents, historical, real-estate, time-series, free, no-api-key, academic, data:amsterdam-housing-transactions]
verified:
  level: fetched
  date: 2026-06-22
  with: live no-login Google Drive download of the Amsterdam 1620-2019 house-price index .xlsx (42,591 bytes, sheets Sources/Data) and the RFS 2021 headline series .xlsx (29,096 bytes, Amsterdam 1900-1979 plus Paris 1809-1943), from Matthijs Korevaar's data page
  access: free
---

**The Amsterdam historical housing data** is a set of long-run house-price and
rent series for Amsterdam compiled from the city's archival records by Piet
Eichholtz, Matthijs Korevaar, Marc Francke, Thies Lindenthal and co-authors.
The headline product is a repeat-sales house-price index reaching back to the
seventeenth century, built from mandatory transaction registrations and, for the
nineteenth century, repeat sales on the Herengracht canal. It is the standard
free source for multi-century Dutch housing-return work. Used in, for example,
[Francke (2025)](/wiki/papers/jf/2025/francke-baby-booms-asset-booms-2025/),
where the Amsterdam house-price index (Bayesian repeat-sales) anchors the
long-run price series tested against demographic cohorts.

- **Cost:** free, no account, no key (Excel files on the authors' data page).
- **Source records:** Amsterdam City Archives (Stadsarchief Amsterdam): aldermen
  transaction registrations (1620 to 1811), nineteenth-century Herengracht repeat
  sales, the 1805 rental census, and civil registers.
- **Coverage:** the compiled house-price index runs 1620 to 2019; a separate
  total-return series covers 1900 to 1979; eighteenth-century rents and yields
  are a further file.
- **Data page:** Matthijs Korevaar,
  <https://sites.google.com/view/matthijskorevaar/data>

## Access

The compiled panels are posted as Excel workbooks on the authors' data page and
download with no login.

```bash
# Amsterdam house-price index 1620-2019 (Korevaar, Eichholtz & Francke 2021, ESB);
# 42,591-byte .xlsx, sheets "Sources / Citation" and "Data":
curl -sL "https://drive.usercontent.google.com/download?id=1d5nOAuyFcD7KhGrgRj3jhlvAgvEfCXt0&export=download" -o amsterdam_index_1620_2019.xlsx

# RFS 2021 headline total-return series (Amsterdam 1900-1979 + Paris 1809-1943);
# 29,096-byte .xlsx, sheets "Sources" and "Headline Series":
curl -sL "https://drive.usercontent.google.com/download?id=1u-cYs7TiB6-rEhcDqCiGkfXsHdP9mWx1&export=download" -o rfs2021_headline.xlsx

# Full RFS 2021 microdata replication package (large): the plain link returns a
# Google Drive virus-scan interstitial, so add the confirm token:
curl -sL "https://drive.usercontent.google.com/download?id=1G6X2034aQZCSVprT-7srBEWhMPPtgIxW&export=download&confirm=t" -o rfs2021_replication.zip
```

The eighteenth-century Amsterdam rents and yields (Korevaar 2023, JFE) are on
Mendeley Data: <https://data.mendeley.com/datasets/db9nz3yhdr/1>.

## Gotchas (the ones that bite pipelines)

- **The compiled panel is not the raw archive.** The fetchable value is the
  authors' Excel series. The underlying Stadsarchief Amsterdam records (notarial
  and transaction registers, in Dutch, largely un-digitized) are a separate,
  much harder source and are not a clean panel. Do not expect transaction-level
  microdata from the index file.
- **Personal Google Drive hosting, so link rot is real.** The files are served
  from id-based Drive links with no DOI and no versioned permanent URL. One link
  on the data page (a "Baby Booms" surfdrive link) is already dead (404).
  Snapshot the file and record the Drive id plus retrieval date.
- **Large packages need the Drive confirm token.** The microdata zip returns an
  HTML virus-scan interstitial on the plain link; add `&confirm=t` and verify you
  received a zip or xlsx, not an HTML page.
- **Several distinct series, do not splice blindly.** The 1620-2019 index, the
  1900-1979 total-return series, and the eighteenth-century rents/yields are
  built with different methods and scopes. Pick the file matching your period;
  joining them into one spliced series needs care about method breaks.
- **Workbooks are multi-sheet and partly Dutch.** Each file carries a Sources or
  Citation sheet plus a Data sheet; some labels are in Dutch. Read the Sources
  sheet for the exact definitions and the citation the authors ask for.
- **The index is a level, not transactions.** The headline product is a
  repeat-sales index (Bayesian, Francke method); it is a price level over time,
  not individual sales. For transaction-level analysis you must go back to the
  archive.

## Reference

| Field | Value |
|-------|-------|
| Data page | `sites.google.com/view/matthijskorevaar/data` |
| House-price index | Amsterdam 1620-2019, .xlsx (Drive id `1d5nO...CXt0`) |
| Total-return series | Amsterdam 1900-1979 + Paris 1809-1943, .xlsx (Drive id `1u-cYs...mWx1`) |
| 18th-century rents/yields | Mendeley Data `db9nz3yhdr` (Korevaar 2023) |
| Raw source | Amsterdam City Archives (Stadsarchief), separate, un-digitized |
| Format | Multi-sheet Excel (Sources + Data) |
| Key required | No |

## Citation

Cite the specific compiled series and its paper, plus the Drive file (id) and
retrieval date: Korevaar, Eichholtz & Francke (2021, ESB) for the 1620-2019
house-price index; Eichholtz, Korevaar, Lindenthal & Tallec (2021),
"The Total Return and Risk to Residential Real Estate," *Review of Financial
Studies* 34(8), 3608-3646, for the 1900-1979 total-return series; Korevaar
(2023, *Journal of Financial Economics*) for the eighteenth-century rents. If you
use the underlying records, cite Stadsarchief Amsterdam separately. Record the
Drive id and access date, since the files are not versioned.
