# Lina Store catalogue

A mobile-first gym wear and fitness accessories catalogue built with React, Vite, TypeScript, Tailwind CSS, and React Router. Customers can search and filter 96 screenshot-sourced listings, add them to a persistent bag, and prepare a complete WhatsApp order enquiry. There is no database or payment gateway.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local address printed by Vite. To verify a production build:

```bash
npm run build
npm run preview
```

The static output is `dist/`. Deploy that directory to any static host configured to serve `index.html` for unknown paths so product URLs and the cart work on refresh. Netlify can use the included `public/_redirects`; for other hosts, configure an equivalent SPA fallback.

## Edit the store

- **Name, text logo, optional image logo, colours, WhatsApp number, and optional contact links:** [`src/config/store.ts`](src/config/store.ts). The name is a temporary label pending confirmation. To use an image logo, put it in `public/` and set `logoUrl` to a path such as `/logo.svg`.
- **Products and prices:** [`src/data/catalogue.ts`](src/data/catalogue.ts). Each row belongs to a size group or the accessory group. The price is in whole Nigerian naira; use `null` when unverified. An item with a null price can be added to the bag, but WhatsApp checkout is disabled until the item is removed or its price is confirmed in the data.
- **Product photos:** See [`IMAGE_UPLOAD_GUIDE.md`](IMAGE_UPLOAD_GUIDE.md) for every exact folder. Every listing already has a dedicated folder with `.gitkeep`. Copy original product photos into its folder; do not use the WhatsApp catalogue screenshots. Supported extensions are JPG, JPEG, PNG, WebP and AVIF. Name the preferred main photo `cover.jpg` or `front.jpg`; other images appear in the detail gallery. Images are discovered at build time by folder, so no component imports need changing.
- **New products:** Add a unique row to the catalogue, then run `npm run prepare:images` to create its folder and refresh the upload guide.

Vite detects added image files during local development. A deployed static site needs a fresh `npm run build` and redeployment of `dist/` after new images are added.

## Checkout behaviour

The bag is saved in the browser's local storage. The “Buy on WhatsApp” link creates a URL-encoded message with every item, applicable size, quantity, unit price, subtotal, and total. It opens WhatsApp for the customer to send; opening WhatsApp does not place an order or empty the bag. Availability, delivery fees, and payment details are confirmed in the conversation.

## Catalogue review

See [`CATALOGUE_REVIEW.md`](CATALOGUE_REVIEW.md) for source ambiguities, truncated WhatsApp text, and prices needing confirmation. The screenshots were used only as catalogue references and are excluded from the website.
