# PeakNewsDaily Full Website Scan + Deployment Cleanup

Date: 2026-03-25
Scope: broken links, duplicate content/pages, UX/content/ad-readiness, deploy configuration

## What was checked

- Internal route integrity check across `app/**/page.tsx` and JSX/TSX `href="/..."` links
- Duplicate page detection in `app/how-to/**/page.tsx`:
  - exact-content hash matches
  - near-duplicate slug patterns
- Code health checks:
  - `npm run lint`
  - `npm run typecheck`
- Deployment config sanity (`vercel.json`, `next.config.js`)

## Results

### 1) Broken internal links

- **Result:** No broken static internal links found from `href="/..."` usage in repository source.
- Notes:
  - Dynamic links and runtime-generated paths still need periodic crawl checks in production.

### 2) Duplicate content/pages

Detected duplicate/near-duplicate URL paths in `how-to` content:

- Exact duplicate content pair:
  - `/how-to/how-to-choose-federal-vs-private-student-loans`
  - `/how-to/how-to-consolidate-or-refinance-student-debt`
- Near-duplicate slug pairs:
  - `/how-to/how-to-track-income-and-expenses-for-side-gig`
  - `/how-to/how-to-track-income-and-expenses-for-a-side-gig`
  - `/how-to/how-to-scale-side-hustle-into-business`
  - `/how-to/how-to-scale-a-side-hustle-into-a-business`
  - `/how-to/how-to-get-a-credit-limit-increase-responsibly`
  - `/how-to/how-to-get-credit-limit-increase-responsibly`
  - `/how-to/how-to-open-separate-bank-account-for-hustle`
  - `/how-to/how-to-open-a-separate-bank-account-for-your-hustle`

### 3) UX/content/AdSense readiness

- Site has substantial content volume and legal/trust pages exist.
- Current technical debt impacting perceived quality:
  - `eslint` reports **2523 warnings** (0 errors), including:
    - many `react/no-unescaped-entities`
    - many `react/no-danger`
    - multiple `jsx-no-target-blank`
    - unused vars and hook dependency warnings
- AdSense readiness risk factors to address before re-review:
  - duplicate content URLs (mitigated below via redirects)
  - large warning volume suggests inconsistent content QA and potential trust/quality concerns

### 4) Deployment cleanup

- `vercel.json` is currently `{}` (safe for Hobby; no invalid cron schedule present).
- Redirect canonicalization strengthened in `next.config.js` (see changes).

## Changes implemented now

Updated `next.config.js` with permanent redirects:

1. `/privacy` → `/privacy-policy`
2. `/how-to/how-to-track-income-and-expenses-for-side-gig` → `/how-to/how-to-track-income-and-expenses-for-a-side-gig`
3. `/how-to/how-to-scale-side-hustle-into-business` → `/how-to/how-to-scale-a-side-hustle-into-a-business`
4. `/how-to/how-to-get-a-credit-limit-increase-responsibly` → `/how-to/how-to-get-credit-limit-increase-responsibly`
5. `/how-to/how-to-open-separate-bank-account-for-hustle` → `/how-to/how-to-open-a-separate-bank-account-for-your-hustle`
6. `/how-to/how-to-consolidate-or-refinance-student-debt` → `/how-to/how-to-choose-federal-vs-private-student-loans`

This immediately reduces crawl duplication and consolidates ranking signals.

## Recommended next fix plan

### Phase 1 (high impact, low risk)
- Add canonical tags or keep strict redirect policy for all duplicate slugs.
- Fix all `target="_blank"` links to include `rel="noopener noreferrer"`.
- Resolve `prefer-const`, obvious unused imports/vars in core templates/components.

### Phase 2 (content quality + trust)
- Rewrite one of each near-duplicate pair into genuinely distinct intent pages, or keep only one canonical page.
- Normalize article templates to reduce copy-pattern footprints.
- Add/verify author bio, editorial policy links, update timestamps, and source citations in article template.

### Phase 3 (ad approval preparation)
- Reduce lint warnings dramatically in high-traffic templates.
- Run production crawl (Screaming Frog/Playwright) for 4xx/5xx, thin pages, and duplicate titles/descriptions.
- Validate ad placement policy (no excessive ad density, above-the-fold content-first layout).

## Verification commands used

```bash
npm run lint
npm run typecheck
# custom scripts for duplicate-content and link checks were executed in-session
```
