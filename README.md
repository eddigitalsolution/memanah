# Panah Ria

React + Vite static website, Tailwind CSS, Framer Motion and Lucide. No backend, accounts, payment processing or booking storage.

## Run

Use Node.js 22 or newer. Run `npm ci`, then `npm run dev`. Production: `npm run build`. Preview production with `npm run preview`. Booking logic tests: `npm test`.

## Cloudflare Pages

Push this folder to your GitHub repository named `memanah`, then connect it to Cloudflare Pages. Framework: Vite; build: `npm run build`; output: `dist`; Node version: 22. Set `SITE_URL` to your final HTTPS domain. The Cloudflare-provided `CF_PAGES_URL` is a fallback. The build produces canonical/Open Graph URLs and a sitemap using that domain. Without a domain, the local sitemap is intentionally empty rather than inventing a public address.

Publishing to Cloudflare Pages is managed separately in your Cloudflare account.

## Editable information

Business details and WhatsApp number: `src/data/siteData.js`. Message generation and validation: `src/utils/whatsapp.js`. Each main section lives in `src/components/`. Sessions are labels only; dates, times and fees require confirmation. The Maps button searches the supplied place name, without invented coordinates. The location panel is a destination card rather than a geographic map.

Registration validates locally, shows a notice and opens an encoded WhatsApp draft in a new tab. A fallback link remains if popups are blocked. Users must send the message themselves. Nothing is sent or saved by the website.

Original character artwork: `public/images/archery-adventure.webp`, generated with the built-in image generation tool. Artwork is reused consistently; the hero scene includes junior, girl, teen and coach. No separate official logo asset was supplied; the header uses a text wordmark and target icon, not an assertion of an official replacement logo.

Artwork prompt: polished original 2D editorial cartoon illustration for a Malaysian children's traditional archery adventure website; landscape 3:2, no text or UI; cream background, Malay junior boy with songkok aiming traditional bow, girl in cream hijab, teenage archer and friendly coach in red and black uniforms; green field, target, pale blue sky, clouds, warm sun, distant subtle mosque and gold sparkles; dark navy outlines, soft paper grain, flat color and soft shadows; consistent storybook character styling.

Google Fonts serves Nunito and DM Sans with system fallback. All decorative motion respects reduced-motion preferences.
