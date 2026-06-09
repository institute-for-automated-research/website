---
title: "Federal Register"
description: >-
  The daily journal of U.S. federal agency Rules, Proposed Rules, and Notices,
  with full text from 1994 via the federalregister.gov API. Covers the no-key
  access recipe and the gotchas that bite pipelines.
sidebar:
  label: Federal Register
  order: 24
tags: [regulation, government, text-as-data, free, no-api-key, data:federal-register]
verified:
  level: fetched
  date: 2026-06-09
  with: live no-key Federal Register API call (federalregister.gov /api/v1/documents.json)
  access: free
---

The **Federal Register** is the daily journal of the U.S. federal government,
publishing agency Rules, Proposed Rules, and Notices, plus Presidential
Documents. It is produced by the Office of the Federal Register (part of the
National Archives, NARA) and printed through the GPO. Full text from 1994 to
the present is available through the federalregister.gov REST API and the
GovInfo bulk repository. Used in, for example,
[Kalmenovitz, Lowry & Volkova](/wiki/papers/jf/2025/kalmenovitz-regulatory-fragmentation-2025/),
where the full text of 783,950 documents (1994-2019) trains an LDA topic model
measuring regulatory fragmentation.

- **Cost:** free, public.
- **API key:** none required.
- **Coverage:** full text 1994 to present on federalregister.gov; older
  material back to 1936 is on GovInfo as scanned or text.
- **Home:** <https://www.federalregister.gov/developers/documentation/api/v1>

## Access

The API base is `https://www.federalregister.gov/api/v1`. Endpoints include
`/documents.json` (search with field selection), `/documents/{document_number}.json`
(one document), and `/agencies`. No authentication is needed.

### Step 1: search, selecting fields

```bash
# Search the Federal Register, selecting fields, no key
curl -sL "https://www.federalregister.gov/api/v1/documents.json?per_page=1&fields[]=document_number&fields[]=type&fields[]=agencies&fields[]=publication_date&fields[]=title"
```

The response carries `description`, `count`, `total_pages`, `next_page_url`,
and a `results` array. Each result includes `document_number`, `type` (one of
`Rule`, `Proposed Rule`, `Notice`, `Presidential Document`), `agencies` (a
list, each with `id`, `name`, `slug`), `publication_date`, `title`, `abstract`,
CFR references, and links to the body via `raw_text_url` and
`full_text_xml_url`.

### Step 2: page through a date window in Python

The search endpoint returns metadata only. Partition the query by a date
window so each slice stays under the page cap (see Gotchas).

```python
import requests

BASE = "https://www.federalregister.gov/api/v1/documents.json"

def fetch_window(start, end, per_page=1000):
    """All documents published in [start, end] (YYYY-MM-DD)."""
    params = {
        "per_page": per_page,
        "conditions[publication_date][gte]": start,
        "conditions[publication_date][lte]": end,
        "fields[]": [
            "document_number", "type", "agencies",
            "publication_date", "title", "raw_text_url",
        ],
    }
    url, docs = BASE, []
    while url:
        r = requests.get(url, params=params if url == BASE else None, timeout=60)
        r.raise_for_status()
        page = r.json()
        docs.extend(page["results"])
        url = page.get("next_page_url")
    return docs

docs = fetch_window("2019-01-01", "2019-01-31")
```

### Step 3: fetch a document's body text

The body comes from `raw_text_url` (plain text) or `full_text_xml_url` (XML),
one extra request per document:

```python
body = requests.get(docs[0]["raw_text_url"], timeout=60).text
```

## Gotchas (the ones that bite pipelines)

- **The search API caps a single query at 50 pages.** Confirmed live:
  `total_pages` was 50 even when `count` reported 10000. With the per-page
  maximum you cannot page through an unbounded match in one query. To retrieve
  a full corpus, partition by date window (or by agency) so each slice stays
  under the cap; do not trust that one query returns every matching document.
- **`count` overstates what you can retrieve.** The `count` field can report
  the full match count while only 50 pages are actually retrievable. Reconcile
  your downloaded count against the slice boundaries, not against `count`.
- **Search returns metadata only.** The document body must be fetched
  separately via `raw_text_url` or `full_text_xml_url`, one extra request per
  document. Budget request volume and caching accordingly.
- **`agencies` is a list (many-to-many).** A single document can be issued
  jointly by several agencies (confirmed: one result listed both the
  Transportation Department and the Federal Aviation Administration). Do not
  assume one agency per document.
- **Use GovInfo bulk data for a full historical pull.** For an entire-corpus
  download, the GovInfo bulk data repository is the route, not thousands of
  per-document API calls. Use the API for targeted or incremental queries.
- **Publication is uneven across the calendar.** There is no issue on federal
  holidays, so daily document counts are not a smooth series; do not treat the
  per-day count as a regular time series without accounting for non-publication
  days.

## Key document fields

| Field | Meaning |
|-------|---------|
| `document_number` | Unique ID, e.g. `2026-11559` |
| `type` | `Rule`, `Proposed Rule`, `Notice`, or `Presidential Document` |
| `agencies` | List of issuing agencies (`id`, `name`, `slug`) |
| `publication_date` | Date printed in the Register |
| `title` | Document title |
| `abstract` | Summary text, when present |
| `raw_text_url` | Plain-text body of the document |
| `full_text_xml_url` | XML body of the document |

## Citation

Cite the Office of the Federal Register / National Archives, the Federal
Register, the document number(s) or query used, the federalregister.gov URL,
and the access date, for example: *Office of the Federal Register, National
Archives and Records Administration, Federal Register, document no. 2026-11559,
retrieved from https://www.federalregister.gov/, accessed YYYY-MM-DD.* Record
the document number(s) or the exact query and date window so the pull is
reproducible.
