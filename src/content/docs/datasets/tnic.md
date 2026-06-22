---
title: "TNIC (Hoberg-Phillips text-based industries)"
description: >-
  How to pull the Hoberg-Phillips Text-based Network Industry Classifications
  (TNIC) firm-pair similarity data as no-key bulk files, plus the gotchas that
  bite pipelines (it is a firm-specific relational network, not a partition;
  gvkey identifiers; the score is an excess-over-threshold, not a raw cosine).
sidebar:
  label: TNIC (Hoberg-Phillips)
  order: 49
tags: [industry-classification, firm-similarity, network, panel, free, no-api-key, academic, data:tnic]
verified:
  level: fetched
  date: 2026-06-22
  with: live no-key download of tnic3_data.zip from the Hoberg-Phillips Data Library (151 MB zip, tnic3_data.txt = 27,161,831 firm-pair-year rows, year/gvkey1/gvkey2/score, 1988 to 2023)
  access: free
---

**TNIC** (Text-based Network Industry Classifications) is Gerard Hoberg and
Gordon Phillips's reclassification of US public firms into industries built from
the text of their 10-K product descriptions. Instead of a fixed code like SIC or
NAICS, TNIC gives **each firm its own industry**: the set of other firms whose
product-description text is similar enough to that firm's. The core download is a
firm-pair-year table with a similarity score for every related pair. Used in, for
example,
[Hoberg & Phillips (2025)](/wiki/papers/jf/2025/hoberg-scope-scale-concentration-21st-2025/),
where TNIC similarity drives firm-specific measures of scope and product-market
concentration.

- **Cost:** free, public.
- **API key:** none required (bulk file download from an academic data library).
- **Coverage:** US public firms with a machine-readable 10-K product
  description, annual 1988 to 2023 (TNIC-3 release). Identifier is Compustat
  `gvkey`.
- **Home:** <https://hobergphillips.tuck.dartmouth.edu/industryclass.htm>

## Access

The Hoberg-Phillips Data Library serves each product as a zipped flat file, no
key and no registration. The three main products are TNIC-3 (recommended,
calibrated to be about as granular as three-digit SIC), TNIC-2 (coarser), and
FIC (Fixed Industry Classifications, see below).

```bash
# TNIC-3 firm-pair similarity (151 MB zip -> ~679 MB tab-delimited text):
curl -sL "https://hobergphillips.tuck.dartmouth.edu/idata/tnic3_data.zip" -o tnic3.zip
unzip -p tnic3.zip Readme_tnic3.txt | head   # read the technical notes first
```

The data file `tnic3_data.txt` is tab-delimited with header `year gvkey1 gvkey2
score`: one row per related firm pair per year. A higher score means a nearer
product-market rival.

### Load in Python

```python
import pandas as pd, zipfile

with zipfile.ZipFile("tnic3.zip") as z:
    tnic = pd.read_csv(z.open("tnic3_data.txt"), sep="\t")

# firm-specific industry: every rival of gvkey 1011 in 2023
rivals = tnic[(tnic.gvkey1 == 1011) & (tnic.year == 2023)]
```

## Gotchas (the ones that bite pipelines)

- **It is a relational network, not a partition.** There is no industry code to
  group on. Each firm has its own set of rivals, industries overlap, and
  membership is **not transitive**: A related to B and B related to C does not
  imply A related to C. Do not `groupby(industry)`; work with the firm-pair
  edges, or use FIC (below) when you genuinely need mutually exclusive groups.
- **The identifier is Compustat `gvkey`, not CUSIP/ticker/PERMNO.** Both
  `gvkey1` and `gvkey2` are gvkeys. Link through Compustat to get names, CRSP
  PERMNOs, or CUSIPs; there is no security identifier in the file.
- **`score` is an excess over the inclusion threshold, not a raw cosine.** A pair
  appears only when its pairwise product similarity clears the TNIC threshold,
  and the score is the amount by which it exceeded that threshold, so the
  distribution starts near zero. A score near zero means the pair barely
  qualified. Do not read it as a cosine in [0, 1] or as a probability.
- **Pairs are symmetric and both directions are stored.** `(i, j)` and `(j, i)`
  both appear with the same score, so the file roughly double-counts unordered
  pairs (27.2M rows in the 1988 to 2023 TNIC-3). Deduplicate to `gvkey1 < gvkey2`
  if you want each pair once.
- **Self-pairs are included.** Rows with `gvkey1 == gvkey2` appear (with an empty
  score); drop the diagonal before counting rivals.
- **It is recomputed every year; relationships move.** A firm's rival set in 2010
  differs from 2020 as product descriptions and the firm universe change. Always
  filter on `year`; do not treat a single year as time-invariant.
- **Coverage is 10-K-bound.** Only firms that file a machine-readable 10-K with a
  product-description section are classified. Firms without one (many foreign
  private issuers, firms in non-filing years, very early years) are simply
  absent, not zero.
- **Pick the granularity deliberately.** TNIC-3 is the recommended general-use
  release (about three-digit SIC granularity); TNIC-2 is coarser. They share the
  same column layout but answer different questions.
- **The file is large.** TNIC-3 is 151 MB zipped, about 679 MB and 27.2M rows
  unzipped; TNIC-2 is larger still. Read it in chunks or filter on read.

## FIC vs TNIC

The library also ships **FIC** (Fixed Industry Classifications): a transitive,
mutually exclusive classification with a fixed, preset number of industries,
built from the same text but assigning each firm to a single industry (the
library publishes several granularities). Use FIC when you need a conventional
partition (industry fixed effects, counts per industry); use TNIC when you want
firm-specific rival sets and pairwise similarity.

## Reference

| Field | Value |
|-------|-------|
| Library | `https://hobergphillips.tuck.dartmouth.edu/industryclass.htm` |
| TNIC-3 file | `idata/tnic3_data.zip` -> `tnic3_data.txt` (tab-delimited) |
| Columns | `year`, `gvkey1`, `gvkey2`, `score` |
| Identifier | Compustat `gvkey` |
| Frequency | Annual, 1988 to 2023 (TNIC-3 release) |
| Other products | TNIC-2 (coarser), FIC (fixed transitive classification) |
| Key required | No |

## Citation

The library's readme names the two papers to cite: Gerard Hoberg and Gordon
Phillips, "Text-Based Network Industries and Endogenous Product Differentiation,"
*Journal of Political Economy* 124(5), 2016, 1423-1465; and Gerard Hoberg and
Gordon Phillips, "Product Market Synergies and Competition in Mergers and
Acquisitions: A Text-Based Analysis," *Review of Financial Studies* 23(10), 2010,
3773-3811. Cite the specific release (TNIC-2, TNIC-3, or FIC), the retrieval URL,
and the access date, since the library updates the data over time.
