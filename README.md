# Aadishala School React Website

Clean React + Tailwind CSS version of the school website.

## Run Locally

```bash
npm install
npm run dev
```

The frontend runs on `http://127.0.0.1:8120`.
The contact server runs on `http://127.0.0.1:5010`.

## Edit The Website

- Page content and repeatable sections: `src/data/siteData.js`
- Layout pages: `src/pages`
- Reusable sections: `src/components`
- Tailwind theme and fonts: `tailwind.config.js`
- Shared Tailwind component classes: `src/styles.css`

## Mail Setup

Copy `.env.example` to `.env`, then fill in your Zoho mail details:

```bash
ZOHO_MAIL=yourmail@yourdomain.com
ZOHO_APP_PASSWORD=your_zoho_app_password
INQUIRY_TO=yourmail@yourdomain.com
```
