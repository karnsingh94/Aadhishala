# Aadishala School React Website

Clean React + Tailwind CSS version of the school website.

## Run Locally

```bash
npm install
npm run dev
```

The frontend runs on `http://127.0.0.1:8120`.
The contact server runs on `http://127.0.0.1:5010`.

## Run Permanently On Your Server

The temporary URL created by a preview or tunnel expires when that preview
process stops. For a permanent URL, point your domain to a long-running server
and run this production build there:

```bash
npm install
npm run build
npm start
```

Set `PORT` to the port supplied by your hosting provider. The Node server now
serves both the React build and `/api`, and supports direct visits or refreshes
on routes such as `/solutions` without returning a 404.

Keep the process online with your host's process manager (for example PM2 or
systemd) and connect your permanent domain to it. A temporary preview/tunnel
URL itself cannot be made permanent from application code.

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
