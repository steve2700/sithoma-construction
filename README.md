# Sithoma Construction and Projects Website

Next.js (App Router), TypeScript, Tailwind CSS v4. Static export.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static site in /out
```

## Change contact details in one file
Phone, WhatsApp, email, address, Facebook, domain: `lib/site.ts`. Also update the domain in `public/robots.txt`.

## Where things are
| What | Where |
| --- | --- |
| Services: repairs, installations, FAQs, cost guides | `lib/services.ts` |
| Areas and job card options | `lib/areas.ts` |
| Problem finder on the home page | `lib/problems.ts` |
| Service by area pages (for example painters Sandton) | built from services and areas in `lib/combos.ts` |
| AI crawler files | `lib/llms.ts` (built from the data above) |
| Logo files | `public/logo-*.svg` (original logos kept in `public/brand-original`) |
| Colours and animations | `app/globals.css` |

Add a service or area by adding one entry to its file. Pages, menus, footer, sitemap, schema, llms files and the service by area pages update automatically.
