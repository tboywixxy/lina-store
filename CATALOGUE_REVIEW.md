# Catalogue review

The 17 WhatsApp screenshots show 96 identifiable, distinct listings after overlapping scroll positions are de-duplicated. All 96 are in `src/data/catalogue.ts` and have dedicated image folders. The source screenshot filename for each listing is recorded in its product data. The screenshot files are references only; they are not displayed on the site or deployed.

## Prices requiring confirmation

| Product ID | Issue | Current handling |
| --- | --- | --- |
| `size-14-leggings-grey` | The price is outside the visible area of the Size 14 screenshot. | Price is `null`; checkout is blocked while this item is in the bag. |
| `size-14-tops-purple` | Listing shows ₦7,500 with ₦9,000 struck through, while the visible note says “First slide is 9000”. It is unclear which price applies to the pictured piece or other slides. | Price is `null`; checkout is blocked while this item is in the bag. |

## Names and descriptions requiring confirmation

- Several Size 10, 10/12, 12, 14 and 16 listings are titled only “Size [number]”. The site gives each a unique visual label such as “blue set” or “black gym wear A/B” to keep the items distinct. These labels are based on the visible thumbnail and should be replaced with official product names when available. The original short WhatsApp title is preserved as `listingName`.
- `size-8-rt-blue-teal` is titled “Size 8 rt” in the screenshot. The meaning of “rt” is unclear; the site preserves it in the product name.
- `size-6-black-top-halter` has the short listing title “A” and a cut-off description beginning “Size 6 top plus halter neck…”. Confirm its full name and included pieces.
- Description text is visibly cut off for `size-6-palazzo-halter-set`, `size-6-palazzo-bra-set`, `size-6-8-scrunch-short-crop-set`, `size-8-pink-scrunch-set`, `size-8-blue-ribbed-set`, and several Size 8/10 sets. The catalogue preserves only the legible fragment, marked with an ellipsis. Confirm the full text before adding more details.
- Multiple colours appear in some single-listing thumbnails, especially leggings, shorts and bra tops. The screenshots do not confirm selectable colour stock or separate prices, so the website has no colour selector. Confirm available colours and stock through WhatsApp.
- No original product photos were provided. Add them using `IMAGE_UPLOAD_GUIDE.md`; until then, each product shows a designed placeholder.

## Manual checks before launch

1. Confirm the two prices above.
2. Replace visual labels with official product names and complete only the descriptions the business verifies.
3. Confirm whether colours shown together are options for one listing or separate stock items.
4. Add original photos to the prepared product folders.
5. Confirm the final brand name and any public email or social links in `src/config/store.ts`.
