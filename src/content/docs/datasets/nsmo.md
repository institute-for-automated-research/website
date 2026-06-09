---
title: "NSMO: National Survey of Mortgage Originations"
description: >-
  How to access the NSMO public-use file from FHFA, covering borrower
  shopping behavior, mortgage knowledge, and satisfaction linked to
  administrative credit and servicing data, plus the gotchas that bite
  pipelines working with survey-weighted microdata.
sidebar:
  label: NSMO
  order: 19
tags: [mortgage, survey, free, cfpb, microdata, data:nsmo]
verified:
  date: 2026-06-09
  with: NSMO public-use-file page live (fhfa.gov/data/nsmo/puf); the file sits behind a terms-of-use click-through and was not pulled here
  access: free
---

**NSMO** (the National Survey of Mortgage Originations) is a recurring survey
conducted jointly by the FHFA and the CFPB, and a component of the National
Mortgage Database (NMDB). It draws a sample of newly originated, closed-end
first-lien mortgages and asks borrowers about the shopping and search process,
expectations, mortgage knowledge, and satisfaction, then links the survey
responses to administrative credit-record and loan-servicing data in the NMDB.
FHFA releases a public-use file (PUF). It is used in, for example,
[Bhutta, Hizmo & Ringo](/wiki/papers/jf/2025/bhutta-much-racial-bias-affect-2025/)
for borrower satisfaction and service quality (N=35,162), and
[Bhutta, Fuster & Hizmo](/wiki/papers/jf/2026/bhutta-mortgage-overpayment-borrower-sophistication-2026/)
for borrower sophistication, shopping behavior, and knowledge, merged with
administrative credit and servicing data.

- **Cost:** free.
- **Access:** public-use file behind a terms-of-use click-through (no account or API key needed).
- **Coverage:** closed-end first-lien originations; survey waves from 2013 onward.
- **Home:** <https://www.fhfa.gov/data/nsmo> · **PUF:** <https://www.fhfa.gov/data/nsmo/puf>

## Access

The PUF is downloadable from the FHFA NSMO PUF page
(<https://www.fhfa.gov/data/nsmo/puf>) after accepting a terms-of-use
agreement. No account and no API key are required. A codebook is also
available on the same page.

The NSMO PUF page was confirmed live during this session, but the
end-to-end file download was not exercised here (the file sits behind the
terms-of-use click-through). The page's verified status is therefore
"Source reachable," not "Fetched."

For researchers with FHFA or CFPB affiliation, a restricted internal
NMDB/NSMO file exists with un-masked, uncoarsened data. The papers linked above
use that restricted version, not the PUF. See
<https://www.fhfa.gov/data/nmdb> for access information on the restricted
file.

## Gotchas (the ones that bite pipelines)

- **Survey weights are not optional.** NSMO is a stratified sample of
  originations, not a census. Unweighted statistics are biased. Apply the
  provided survey weights for any population-level inference about borrowers
  or originations.
- **PUF masking does not reproduce restricted-file results.** The public-use
  file is coarsened relative to the internal restricted file: values are
  top-coded or binned, geography is suppressed or rounded, and some
  variables are omitted entirely. Results from PUF analysis will not
  exactly match papers (such as those above) that were built on the
  restricted NMDB/NSMO data.
- **Self-report and non-response bias.** The sophistication, knowledge, and
  satisfaction questions are self-reported. Non-response is non-random (more
  engaged or satisfied borrowers may respond at different rates), and recall
  bias affects questions about the origination process answered after closing.
- **Originated loans only.** Coverage is restricted to closed originations:
  denied applicants and non-applicants are not in scope. The dataset cannot
  speak to credit access at the extensive margin.
- **Sample period depends on release vintage.** Waves accumulate over time,
  so the usable sample period depends on which PUF release vintage you
  download. Check the release notes and state the vintage explicitly in any
  replication package.

## Citation

Cite the FHFA/CFPB National Survey of Mortgage Originations, stating whether
the public-use file or the restricted NMDB file was used, the wave(s)
included, and that survey weights were applied. Example form: *Federal
Housing Finance Agency and Consumer Financial Protection Bureau, National
Survey of Mortgage Originations, Public-Use File, waves YYYY-YYYY, retrieved
from https://www.fhfa.gov/data/nsmo/puf, accessed YYYY-MM-DD; survey weights
applied.*
