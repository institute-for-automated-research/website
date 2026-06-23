---
title: "NBER Working Papers"
description: >-
  How to pull NBER working paper metadata and full-text PDFs with no API key:
  the undocumented listing API, the predictable PDF path, and the gotchas that
  bite pipelines (copyright/redistribution, gated subset, undocumented API,
  displaydate strings, working-paper numbering).
sidebar:
  label: NBER working papers
  order: 26
tags: [working-papers, full-text, metadata, academic, free, no-api-key, data:nber-working-papers]
verified:
  level: fetched
  date: 2026-06-23
  with: live no-key fetch of the NBER listing API (35,851 results) and a full-text PDF (w31010, 4.1 MB application/pdf)
  access: free
---

**NBER Working Papers** are the pre-publication paper series of the National
Bureau of Economic Research, the main circulation channel for new US economics
and finance research. Both the working paper metadata (title, authors, date,
abstract) and the full-text PDFs are reachable over plain HTTP with no API key.
The metadata comes from an undocumented JSON listing endpoint; the PDFs sit at a
predictable path keyed by the working paper number.

- **Cost:** free to fetch; PDFs are copyrighted (see Gotchas).
- **API key:** none required.
- **Coverage:** the full working paper series. The listing API reported 35,851
  working papers as of the verification date, back to w0001.
- **Home:** <https://www.nber.org/papers>

## Access

### Metadata: the listing API

An undocumented JSON endpoint backs the site's paper listing. It paginates and
returns the total count plus an array of paper records:

```bash
# No key. page is 1-based; perPage caps the page size.
curl -sL "https://www.nber.org/api/v1/working_page_listing/contentType/working_paper/_/_/search?page=1&perPage=50"
```

Each result object carries `title`, `authors` (HTML anchor strings),
`displaydate` (e.g. `"June 2026"`), `abstract`, and `url` (e.g.
`/papers/w35366`). The working paper number is the last path segment of `url`,
not a separate numeric field. Walk `page` from 1 until you have collected
`totalResults` records.

### Full text: the PDF path

Given a working paper number `wNNNNN`, the PDF is at a predictable path:

```bash
# No key. Returns application/pdf.
curl -sL "https://www.nber.org/system/files/working_papers/w31010/w31010.pdf" -o w31010.pdf
```

The human landing page for the same paper is
`https://www.nber.org/papers/w31010` (HTTP 200), useful for the abstract,
JEL codes, and citation block.

### Load metadata in Python

```python
import requests

base = "https://www.nber.org/api/v1/working_page_listing/contentType/working_paper/_/_/search"
rows, page = [], 1
while True:
    r = requests.get(base, params={"page": page, "perPage": 100}, timeout=30).json()
    rows.extend(r["results"])
    if len(rows) >= r["totalResults"] or not r["results"]:
        break
    page += 1

# Working paper number is the tail of the url field
for x in rows[:3]:
    wp = x["url"].rsplit("/", 1)[-1]   # e.g. "w35366"
    print(wp, x["displaydate"], x["title"])
```

## Gotchas (the ones that bite pipelines)

- **The PDFs are copyrighted; fetchable is not redistributable.** Free download
  for research use does not grant the right to rehost or bulk-redistribute the
  PDFs. Treat them as inputs to read and cite, not as a corpus to republish.
  Store locally, cite the NBER, and respect the series' terms.
- **A subset of PDFs is access-gated.** Some downloads (notably very recent
  papers) are served free only to specific groups (subscribers, US journalists,
  residents of low-income countries) and otherwise sit behind a paywall. The
  predictable PDF path works for the open majority; do not assume every
  `wNNNNN.pdf` returns 200. Check the status code and fall back to the landing
  page metadata when a PDF is gated.
- **The listing API is undocumented.** The `/api/v1/working_page_listing/...`
  endpoint is not a published, versioned API. The path, query shape, and field
  names can change without notice. Pin nothing to it that you cannot quickly
  repair, and record the response shape with your snapshot.
- **Working paper number lives in the URL, not a field.** The result objects do
  not expose a clean numeric `wpnum` (it was null in testing). Parse the number
  from the tail of `url` (`/papers/w35366` -> `w35366`).
- **`displaydate` is a string, not a date.** Dates come as `"June 2026"`, not
  ISO. Parse to month resolution; do not expect a day component.
- **Working papers are not peer-reviewed and are revised in place.** A `wNNNNN`
  number is the working paper, which may differ from the final journal version.
  The PDF can be updated without a new number. Record the access date; do not
  treat the WP as the version of record for a published paper.
- **Rate-limit your crawl.** Walking 35k+ records and PDFs is a real load. Page
  politely, cache, and avoid hammering the host. `robots.txt` allows `/papers/`
  and `/system/files/` but disallows the admin and UI search paths.
- **Author field is HTML.** `authors` entries are anchor tag strings
  (`<a href="/people/...">Name</a>`), not plain names. Strip tags before use.

## Reference

| Field | Value |
|-------|-------|
| Metadata endpoint | `https://www.nber.org/api/v1/working_page_listing/contentType/working_paper/_/_/search?page=N&perPage=K` |
| PDF path | `https://www.nber.org/system/files/working_papers/wNNNNN/wNNNNN.pdf` |
| Landing page | `https://www.nber.org/papers/wNNNNN` |
| Metadata format | JSON (`totalResults` + `results[]`) |
| Total working papers | 35,851 (as of 2026-06-23) |
| Key required | No |
| PDF license | Copyrighted; free for research use, not for redistribution |

## Citation

Cite the individual working paper, not the series. Use the NBER's own citation
block from the landing page, for example: *Author(s), "Title," NBER Working
Paper No. NNNNN, National Bureau of Economic Research, Month Year.* Record the
access date and note the working paper number; the PDF may be revised in place
without a new number, and the final published version (if any) may differ.
