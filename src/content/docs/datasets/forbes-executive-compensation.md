---
title: "Forbes executive compensation surveys"
description: >-
  The Forbes annual executive compensation surveys (roughly 1970-1992) are the
  pre-ExecuComp source of U.S. CEO pay. No maintained machine-readable file
  exists; researchers reconstruct figures from archived print issues or reuse
  compiled tables. The modern successor is Compustat ExecuComp (1992, licensed).
sidebar:
  label: Forbes exec comp
  order: 67
tags: [executive-compensation, corporate-governance, historical, no-stable-source, data:forbes-executive-compensation]
---

:::note[Historical print surveys, no standing machine-readable source]
The Forbes CEO-pay surveys exist only as compilations from print Forbes issues. There is no maintained downloadable dataset, no archive endpoint, and nothing to pull here. The page carries no provenance badge: it documents the dataset and how researchers have reconstructed it, but no data was exercised here.
:::

**The Forbes annual executive compensation surveys** (roughly 1970 to 1992) are the standard pre-ExecuComp source of U.S. CEO pay. Forbes published annual surveys of CEO salary, bonus, and in later years option gains for large U.S. companies. The data exist only as figures in print magazine issues; researchers reconstruct a machine-readable panel by hand-keying from archived issues or by reusing compiled tables from prior studies, most notably Gibbons and Murphy (1992). Used in, for example, [Borgschulte, Guenzel, Liu, and Malmendier (2025)](/wiki/papers/jf/2025/borgschulte-ceo-stress-aging-death-2025/), where the Forbes surveys 1975-1991 (via the Gibbons and Murphy (1992) compilation) form the mortality analysis sample of 2,720 CEOs at 1,501 firms.

- **Cost:** no purchase price for the compiled data (it is an academic hand-collection); accessing original print issues requires library access or archive subscriptions.
- **Machine-readable source:** none maintained; hand-keyed by researchers from print issues.
- **Modern successor:** Compustat ExecuComp (1992 onward, licensed via WRDS).
- **Coverage:** roughly 1970 to 1992, annual; large U.S. companies, not a complete universe.
- **Reference sources:** EPI CEO pay series (https://epi.org/publication/ceo-pay); Gabaix and Landier (2008) (https://pages.stern.nyu.edu/~xgabaix/papers/CEO_EJ.pdf).

## Access

There is no download endpoint or authoritative machine-readable file. To use the Forbes surveys, researchers typically:

1. Obtain the compiled dataset from a prior study. The most common source is Gibbons and Murphy (1992), which covers 1974-1991; Gibbons and Murphy (1990) covers an earlier window.
2. Hand-key additional years from archived print Forbes issues. Some years are digitized on ProQuest Business Collection or similar subscription databases; major research libraries hold print archives.
3. Splice in ExecuComp for 1992 onward (licensed, via WRDS) and apply a concordance to align definitions across the pre- and post-1992 samples.

No official digital archive of the compiled data exists. Researchers who need the data typically contact the authors of studies that built it, subject to data-sharing arrangements.

## Gotchas (the ones that bite pipelines)

- **No authoritative machine-readable file exists.** Each paper that uses pre-1992 CEO pay either hand-keys the data anew or inherits another researcher's compilation, including that compilation's coverage gaps and definitional choices.
- **Forbes pay definitions vary year to year and differ from ExecuComp.** Forbes reported salary plus bonus in early years and later included estimated option gains using varying methodologies. ExecuComp reports TDC1 (total compensation including option grants at grant-date value) and TDC2 (including options exercised). The series are not directly comparable without a definitional bridge.
- **Coverage is incomplete and biased toward larger firms.** Forbes surveyed a subset of large companies; the cross-section is not a fixed universe and changes year to year. Survivorship and selection into the survey introduce bias in the cross-section.
- **Option valuations before 1992 are crude.** Pre-1992 there was no required proxy-statement disclosure of option grant details, so option valuations in the Forbes surveys are approximate or absent depending on the year.
- **Splicing with ExecuComp requires a concordance.** Companies must be matched by name or GVKEY across the two sources; unmatched observations are a common data-quality problem in pre- and post-1992 panels.
- **The 1992 break is a hard discontinuity.** Proxy-statement disclosure rules changed with SEC regulations effective 1993 (for fiscal year 1992), making ExecuComp the post-1992 standard. Pre- and post-1992 samples should be analyzed with care when pooled.

## Reference

| Field | Value |
|-------|-------|
| Source | Print Forbes annual surveys, approximately 1970-1992 |
| Machine-readable | None maintained; hand-compiled by researchers |
| Coverage | Large U.S. companies; survey composition varies year to year |
| Modern successor | Compustat ExecuComp, 1992 onward (licensed, via WRDS) |
| Key compiled source | Gibbons and Murphy (1992): covers 1974-1991 |
| Key required | Not applicable |

## Citation

Cite the specific Forbes survey year(s) and issue, or the compiled secondary source used (e.g., Gibbons and Murphy 1992 with full citation), and note the definition of pay used (salary plus bonus, with or without option gains). If spliced with ExecuComp for 1992 onward, note both sources and the concordance applied. For the Gibbons and Murphy compilation: Gibbons, Robert, and Kevin J. Murphy. "Optimal Incentive Contracts in the Presence of Career Concerns: Theory and Evidence." *Journal of Political Economy* 100, no. 3 (1992): 468-505.
