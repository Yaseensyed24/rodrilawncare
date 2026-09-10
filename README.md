# Avenor — Landscaping Business OS Demo

A premium landscaping website connected to a functional frontend CRM / operations dashboard demo.

## Demo flow

Public website → Request a Quote → New CRM Lead → Lead Pipeline → Customers → Estimates → Jobs & Crews → Invoices → Reports.

## Included

- Premium responsive landscaping marketing site
- Services, work, process and quote sections
- Multi-field quote request
- Quote submissions become persistent CRM leads
- localStorage-backed demo data
- Lead pipeline with stage advancement
- Customer/property records
- Jobs and crew status workflow
- Estimate list
- Invoice dashboard with Mark Paid action
- Business analytics / reporting
- Settings + Reset Demo Data
- Responsive mobile layouts
- No backend or real customer data required

## Run

Open `index.html` directly or serve the folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Demo

Use **Business Portal** in the public navigation or `#dashboard`.

The project is intentionally frontend-only so the workflow can be demonstrated without a database, authentication service, payments, SMS, or email infrastructure. Those can be connected later without changing the product flow.
