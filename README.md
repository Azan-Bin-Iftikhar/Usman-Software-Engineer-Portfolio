# My Portfolio

A React + TypeScript portfolio built with Vite and MUI.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This project is configured to deploy from the `main` branch using GitHub Actions.

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository settings, open `Pages` and set the source to `GitHub Actions`.
3. Push a commit to `main` or run the `Deploy to GitHub Pages` workflow manually.
4. For a local production build, run `npm run deploy`.

Important:

- The Vite base path is set to `/my-portfolio/` in [vite.config.ts](vite.config.ts).
- If your GitHub repository name is different, update that base path to match the repo name.

## Contact Form (EmailJS)

The contact form uses EmailJS and reads Vite environment variables.

1. Copy `.env.example` to `.env`.
2. Add your values from EmailJS dashboard.
3. Restart the Vite dev server after changing `.env`.

Required variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_RECIPIENT_EMAIL=tanoliusman2919@gmail.com
```

Compatibility fallback is also supported:

```env
VITE_EMAILJS_USER_ID=your_public_key
```

Only variables prefixed with `VITE_` are exposed to the frontend.
