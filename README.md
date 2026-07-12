# SageStone Inc Website

Production source for `https://www.sagestoneinc.com/`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- React Server Components by default
- Server-rendered metadata and JSON-LD
- Native `sitemap.ts` and `robots.ts`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

The build statically generates all preserved evergreen routes from `src/lib/site.ts`.

## Important Integrations

- Google Analytics: `G-6J7F2V82TP`
- Calendly: `https://calendly.com/d/cym9-q4q-pnm`
- Email: `hello@sagestoneinc.com`
- Phone: `+1 214-945-2234`

Do not add secrets to this repository. Contact submissions are validated by `/api/contact`; production email delivery should be connected through a verified provider when credentials are available.
