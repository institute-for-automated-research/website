---
title: "Paris historical repeat-rent index"
description: >-
  How to reach the long-run Paris rent series from Eichholtz, Korevaar and
  Lindenthal, plus the honest gotcha that only the 1809-1943 slice is publicly
  posted (in the shared RFS 2021 workbook), while the deep 1500-1831 repeat-rent
  index used in some studies remains working-paper-only.
sidebar:
  label: Paris rents
  order: 69
tags: [housing, rents, historical, real-estate, time-series, free, no-api-key, academic, data:paris-rents]
verified:
  level: reachable
  date: 2026-06-22
  with: confirmed the Eichholtz-Korevaar-Lindenthal Paris rent data is reachable on Korevaar's Google Drive (the published 1809-1943 slice downloads as the RFS 2021 headline .xlsx, 29,096 bytes, as corroboration); the keystone Paris 1500-1831 repeat-rent index used by the citing paper is working-paper-only and was not exercised here, so the grade is reachable rather than fetched
  access: free
---

**The Paris historical rent data** is a set of long-run rent series for Paris
compiled from French notarial and archival sources by Piet Eichholtz, Matthijs
Korevaar and Thies Lindenthal. Two distinct products exist, and they differ
sharply in how available they are. The published total-return work includes a
Paris rent and price series for 1809 to 1943, posted openly. A separate,
much deeper repeat-rent index covering 1500 to 1831 is used in some studies but
remains a working paper with no public replication file. Used in, for example,
[Francke (2025)](/wiki/papers/jf/2025/francke-baby-booms-asset-booms-2025/),
which draws on the Paris 1500-1831 repeat-rent series (new rental contracts
only).

- **Cost:** free, no account, no key (the published slice is an Excel file).
- **Publicly available:** the Paris 1809-1943 series, inside the shared RFS 2021
  Amsterdam-and-Paris workbook.
- **Not publicly available:** the Paris 1500-1831 repeat-rent index, which is
  working-paper-only as of this writing.
- **Data page:** Matthijs Korevaar,
  <https://sites.google.com/view/matthijskorevaar/data>

## Access

The only Paris rent data that downloads here is the 1809-1943 slice, which ships
in the same Google Drive workbook as the Amsterdam total-return series (see the
[Amsterdam housing](/wiki/datasets/amsterdam-housing-transactions/) page).

```bash
# RFS 2021 headline series .xlsx (Amsterdam 1900-1979 + Paris 1809-1943);
# 29,096-byte .xlsx, sheets "Sources" and "Headline Series":
curl -sL "https://drive.usercontent.google.com/download?id=1u-cYs7TiB6-rEhcDqCiGkfXsHdP9mWx1&export=download" -o rfs2021_headline.xlsx
```

The deep 1500-1831 Paris repeat-rent index is described in the working paper
"The Housing Affordability Revolution" (predecessor "500 Years of Housing Rents,
Quality and Affordability," SSRN 3418495); no replication package is posted, so
it cannot be fetched here.

## Gotchas (the ones that bite pipelines)

- **The long 1500-1831 index is not public.** The series several studies cite
  (including the one above) is from a working paper with no replication file
  posted. Do not promise a downloadable 1500-1831 Paris panel: it does not exist
  publicly yet.
- **Only the 1809-1943 slice is fetchable.** That is what the green-versus-teal
  grade reflects: the endpoint and the published slice are reachable, but the
  specific long series the citing work used was not exercised here.
- **Shared workbook with Amsterdam.** The published Paris and Amsterdam series
  ship in one Excel file, so cite the same Drive file and mind the link-rot /
  no-DOI caveats noted on the Amsterdam page.
- **New-contract rents, not sitting-tenant rents.** The Paris series is built
  from new rental contracts; these move differently from the rent paid by sitting
  tenants, so do not read it as a tenant cost-of-living series without adjustment.
- **Compiled from archival sources.** Like Amsterdam, the raw French notarial and
  archival records are a separate, harder source; the machine-readable value is
  the compiled series, where one exists.

## Reference

| Field | Value |
|-------|-------|
| Data page | `sites.google.com/view/matthijskorevaar/data` |
| Public series | Paris 1809-1943, in the RFS 2021 headline .xlsx (Drive id `1u-cYs...mWx1`) |
| Not public | Paris 1500-1831 repeat-rent index (working paper, SSRN 3418495) |
| Raw source | French notarial and archival records, separate |
| Format | Multi-sheet Excel (Sources + Headline Series) |
| Key required | No |

## Citation

For the published series, cite Eichholtz, Korevaar, Lindenthal & Tallec (2021),
"The Total Return and Risk to Residential Real Estate," *Review of Financial
Studies* 34(8), 3608-3646, with the Drive file id and retrieval date. For the
1500-1831 series, cite the working paper (Eichholtz, Korevaar & Lindenthal,
"The Housing Affordability Revolution," SSRN 3418495) and note that it is not
yet publicly released.
