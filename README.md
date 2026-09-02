# Rodriguez Lawn Maintenance — mobile-first website demo

A static demo designed around phone-first lead generation rather than a generic brochure site.

## What changed in this version
- Mobile-first layout with large tap targets and persistent Call / Free Estimate actions.
- Fast actions for Call, Text, and Estimate from the top of the page.
- Natural-looking lawn-care photography from free-to-use Pexels sources for the concept; these should be replaced by the owner's real job photos before launch.
- Service cards that jump directly into the estimate form with the selected service prefilled.
- Optional multi-photo yard upload preview.
- Estimate request stored locally for demo testing.
- Generates a formatted lead summary with Copy Request and Open Email actions.
- Gallery lightbox for viewing work photos.
- Weekly / biweekly selector section, service-area section, FAQ, and local-business CTAs.
- No invented reviews, prices, licenses, guarantees, years in business, or other unverified claims.

## Run locally
Open `index.html` in a browser, or run a simple server:

```bash
cd rodriguez-lawn-demo
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Before production
1. Replace concept photography with Rodriguez's real work photos.
2. Connect the estimate form to an email/CRM endpoint or serverless function.
3. Store uploaded images securely rather than only previewing them in-browser.
4. Add the owner's real reviews, exact service-area boundaries, logo file, and any verified business credentials.
5. Add analytics for call clicks, text clicks, estimate starts, estimate submits, and photo uploads.
6. Connect Google Business Profile / Maps only after confirming the correct business listing.
