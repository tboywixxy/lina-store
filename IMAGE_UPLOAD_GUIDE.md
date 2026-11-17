# Product image upload guide

Each product has its own folder below. Copy original product photos into that folder. Supported formats: JPG, JPEG, PNG, WebP, AVIF (upper- or lower-case extension). Do not put the WhatsApp catalogue screenshots here.

Name the preferred main photo `cover.jpg` or `front.jpg`. The site chooses `cover` first, then `front`, then other files in filename order. Multiple files become a gallery on the product detail page. A product without files shows a placeholder. The folder path, not the product's display name, determines which images belong to it.

During development Vite detects added files. On a deployed static site, add the files to the project, rebuild with `npm run build`, and redeploy the new `dist/` output.

| Product ID | Product | Exact folder path |
| --- | --- | --- |
| size-6-palazzo-halter-set | Size 6 palazzo and halter set | `src/assets/products/gym-wear/size-6/palazzo-halter-set/` |
| size-6-cream-gym-wear | Size 6 cream gym wear | `src/assets/products/gym-wear/size-6/cream-gym-wear/` |
| size-6-palazzo-bra-set | Size 6 palazzo leggings and bra set | `src/assets/products/gym-wear/size-6/palazzo-bra-set/` |
| size-6-leggings-taupe-red | Size 6 leggings — taupe or red | `src/assets/products/gym-wear/size-6/leggings-taupe-red/` |
| size-6-leggings-pink-blue | Size 6 leggings — pink or blue | `src/assets/products/gym-wear/size-6/leggings-pink-blue/` |
| size-6-tops-blue | Size 6 tops — blue | `src/assets/products/gym-wear/size-6/tops-blue/` |
| size-6-black-top-halter | Size 6 top and halter piece | `src/assets/products/gym-wear/size-6/black-top-halter/` |
| size-6-8-scrunch-short-crop-set | Size 6/8 scrunch shorts and crop set | `src/assets/products/gym-wear/size-6-8/scrunch-short-crop-set/` |
| size-6-8-body-sculpt-leggings | Size 6/8 body sculpt leggings | `src/assets/products/gym-wear/size-6-8/body-sculpt-leggings/` |
| size-8-pink-scrunch-set | Size 8 pink scrunch top set | `src/assets/products/gym-wear/size-8/pink-scrunch-set/` |
| size-8-blue-ribbed-set | Size 8 blue ribbed two piece | `src/assets/products/gym-wear/size-8/blue-ribbed-set/` |
| size-8-shorts | Size 8 shorts | `src/assets/products/gym-wear/size-8/shorts/` |
| size-8-bra-tops | Size 8 bra tops | `src/assets/products/gym-wear/size-8/bra-tops/` |
| size-8-rt-blue-teal | Size 8 rt — blue and teal | `src/assets/products/gym-wear/size-8/rt-blue-teal/` |
| size-8-tops-black-cream | Size 8 tops — black or cream | `src/assets/products/gym-wear/size-8/tops-black-cream/` |
| size-8-10-palazzo-bra-set | Size 8/10 palazzo pant and bra set | `src/assets/products/gym-wear/size-8-10/palazzo-bra-set/` |
| size-8-10-green-body-sculpt-set | Size 8/10 green body sculpt set | `src/assets/products/gym-wear/size-8-10/green-body-sculpt-set/` |
| size-8-10-green-hoodie-set | Size 8/10 green hoodie set | `src/assets/products/gym-wear/size-8-10/green-hoodie-set/` |
| size-8-10-brown-ribbed-short-set | Size 8/10 brown ribbed shorts set | `src/assets/products/gym-wear/size-8-10/brown-ribbed-short-set/` |
| size-8-10-khaki-flare-set | Size 8/10 khaki flare pant set | `src/assets/products/gym-wear/size-8-10/khaki-flare-set/` |
| size-8-10-two-tone-scrunch-set | Size 8/10 two tone scrunch shorts set | `src/assets/products/gym-wear/size-8-10/two-tone-scrunch-set/` |
| size-8-10-coral-gym-shark-set | Size 8/10 coral leggings and bra set | `src/assets/products/gym-wear/size-8-10/coral-gym-shark-set/` |
| size-8-10-black-hoodie-short-set | Size 8/10 black hoodie and shorts set | `src/assets/products/gym-wear/size-8-10/black-hoodie-short-set/` |
| size-8-10-purple-leggings-set | Size 8/10 purple leggings set | `src/assets/products/gym-wear/size-8-10/purple-leggings-set/` |
| size-8-10-black-palazzo-set | Size 8/10 black palazzo leggings set | `src/assets/products/gym-wear/size-8-10/black-palazzo-set/` |
| size-8-10-khaki-zip-set | Size 8/10 khaki leggings and zip set | `src/assets/products/gym-wear/size-8-10/khaki-zip-set/` |
| size-8-10-leggings-blue-green | Size 8/10 leggings — blue or green | `src/assets/products/gym-wear/size-8-10/leggings-blue-green/` |
| size-10-purple-leggings-bra | Size 10 purple leggings and bra set | `src/assets/products/gym-wear/size-10/purple-leggings-bra/` |
| size-10-lilac-scrunch-set | Size 10 lilac scrunch set | `src/assets/products/gym-wear/size-10/lilac-scrunch-set/` |
| size-10-cream-leggings-bra | Size 10 cream leggings and bra set | `src/assets/products/gym-wear/size-10/cream-leggings-bra/` |
| size-10-navy-zip-set | Size 10 navy zip set | `src/assets/products/gym-wear/size-10/navy-zip-set/` |
| size-10-black-zip-set-a | Size 10 black zip set A | `src/assets/products/gym-wear/size-10/black-zip-set-a/` |
| size-10-pink-brown-set | Size 10 pink and brown set | `src/assets/products/gym-wear/size-10/pink-brown-set/` |
| size-10-white-teal-set | Size 10 white and teal set | `src/assets/products/gym-wear/size-10/white-teal-set/` |
| size-10-black-zip-set-b | Size 10 black zip set B | `src/assets/products/gym-wear/size-10/black-zip-set-b/` |
| size-10-grey-leggings-crop | Size 10 grey leggings and crop set | `src/assets/products/gym-wear/size-10/grey-leggings-crop/` |
| size-10-teal-set | Size 10 teal gym wear | `src/assets/products/gym-wear/size-10/teal-set/` |
| size-10-blue-zip-set | Size 10 blue zip set | `src/assets/products/gym-wear/size-10/blue-zip-set/` |
| size-10-grey-flare-set | Size 10 grey flare set | `src/assets/products/gym-wear/size-10/grey-flare-set/` |
| size-10-red-halter-set | Size 10 red halter set | `src/assets/products/gym-wear/size-10/red-halter-set/` |
| size-10-black-zip-set-c | Size 10 black zip set C | `src/assets/products/gym-wear/size-10/black-zip-set-c/` |
| size-10-slate-blue-set | Size 10 slate blue set | `src/assets/products/gym-wear/size-10/slate-blue-set/` |
| size-10-brown-leggings-bra | Size 10 brown leggings and bra set | `src/assets/products/gym-wear/size-10/brown-leggings-bra/` |
| size-10-black-halter-set | Size 10 black halter set | `src/assets/products/gym-wear/size-10/black-halter-set/` |
| size-10-red-long-sleeve-set | Size 10 red long sleeve set | `src/assets/products/gym-wear/size-10/red-long-sleeve-set/` |
| size-10-leggings-cream-grey | Size 10 leggings — cream or grey | `src/assets/products/gym-wear/size-10/leggings-cream-grey/` |
| size-10-shorts | Size 10 shorts | `src/assets/products/gym-wear/size-10/shorts/` |
| size-10-bra-tops | Size 10 bra tops | `src/assets/products/gym-wear/size-10/bra-tops/` |
| size-10-mauve-top | Size 10 mauve top | `src/assets/products/gym-wear/size-10/mauve-top/` |
| size-10-tops-blue-brown | Size 10 tops — blue or brown | `src/assets/products/gym-wear/size-10/tops-blue-brown/` |
| size-10-12-black-set-a | Size 10/12 black gym wear A | `src/assets/products/gym-wear/size-10-12/black-set-a/` |
| size-10-12-black-set-b | Size 10/12 black gym wear B | `src/assets/products/gym-wear/size-10-12/black-set-b/` |
| size-10-12-green-white-set | Size 10/12 green and white set | `src/assets/products/gym-wear/size-10-12/green-white-set/` |
| size-10-12-pink-set | Size 10/12 pink set | `src/assets/products/gym-wear/size-10-12/pink-set/` |
| size-10-12-blue-set | Size 10/12 blue set | `src/assets/products/gym-wear/size-10-12/blue-set/` |
| size-10-12-grey-teal-set | Size 10/12 grey and teal set | `src/assets/products/gym-wear/size-10-12/grey-teal-set/` |
| size-12-brown-set | Size 12 brown gym wear | `src/assets/products/gym-wear/size-12/brown-set/` |
| size-12-black-pink-set | Size 12 black and pink gym wear | `src/assets/products/gym-wear/size-12/black-pink-set/` |
| size-12-black-set-a | Size 12 black gym wear A | `src/assets/products/gym-wear/size-12/black-set-a/` |
| size-12-pink-leggings-bra | Size 12 pink leggings and bra set | `src/assets/products/gym-wear/size-12/pink-leggings-bra/` |
| size-12-beige-set | Size 12 beige gym wear | `src/assets/products/gym-wear/size-12/beige-set/` |
| size-12-aqua-black-set | Size 12 aqua and black set | `src/assets/products/gym-wear/size-12/aqua-black-set/` |
| size-12-blue-leggings-bra | Size 12 blue leggings and bra set | `src/assets/products/gym-wear/size-12/blue-leggings-bra/` |
| size-12-mauve-set | Size 12 mauve gym wear | `src/assets/products/gym-wear/size-12/mauve-set/` |
| size-12-navy-white-set | Size 12 navy and white set | `src/assets/products/gym-wear/size-12/navy-white-set/` |
| size-12-black-set-b | Size 12 black gym wear B | `src/assets/products/gym-wear/size-12/black-set-b/` |
| size-12-mint-green-set | Size 12 mint and green set | `src/assets/products/gym-wear/size-12/mint-green-set/` |
| size-12-black-khaki-set | Size 12 black and khaki set | `src/assets/products/gym-wear/size-12/black-khaki-set/` |
| size-12-leggings-blue-lilac | Size 12 leggings — blue or lilac | `src/assets/products/gym-wear/size-12/leggings-blue-lilac/` |
| size-12-leggings-red-grey | Size 12 leggings — red or grey | `src/assets/products/gym-wear/size-12/leggings-red-grey/` |
| size-12-shorts | Size 12 shorts | `src/assets/products/gym-wear/size-12/shorts/` |
| size-12-bra-tops | Size 12 bra tops | `src/assets/products/gym-wear/size-12/bra-tops/` |
| size-14-brown-set | Size 14 brown gym wear | `src/assets/products/gym-wear/size-14/brown-set/` |
| size-14-purple-halter-piece | Size 14 purple halter piece | `src/assets/products/gym-wear/size-14/purple-halter-piece/` |
| size-14-black-set-a | Size 14 black gym wear A | `src/assets/products/gym-wear/size-14/black-set-a/` |
| size-14-black-set-b | Size 14 black gym wear B | `src/assets/products/gym-wear/size-14/black-set-b/` |
| size-14-black-patterned-set | Size 14 black patterned set | `src/assets/products/gym-wear/size-14/black-patterned-set/` |
| size-14-black-halter-set | Size 14 black halter set | `src/assets/products/gym-wear/size-14/black-halter-set/` |
| size-14-blue-hoodie-set | Size 14 blue hoodie set | `src/assets/products/gym-wear/size-14/blue-hoodie-set/` |
| size-14-leggings-grey | Size 14 grey leggings | `src/assets/products/gym-wear/size-14/leggings-grey/` |
| size-14-shorts-blue | Size 14 blue shorts | `src/assets/products/gym-wear/size-14/shorts-blue/` |
| size-14-bra-tops | Size 14 bra tops | `src/assets/products/gym-wear/size-14/bra-tops/` |
| size-14-tops-purple | Size 14 purple tops | `src/assets/products/gym-wear/size-14/tops-purple/` |
| size-16-blue-set-a | Size 16 blue gym wear A | `src/assets/products/gym-wear/size-16/blue-set-a/` |
| size-16-blue-set-b | Size 16 blue gym wear B | `src/assets/products/gym-wear/size-16/blue-set-b/` |
| size-16-black-halter-set | Size 16 black halter set | `src/assets/products/gym-wear/size-16/black-halter-set/` |
| size-16-black-set | Size 16 black gym wear | `src/assets/products/gym-wear/size-16/black-set/` |
| size-16-shorts | Size 16 shorts | `src/assets/products/gym-wear/size-16/shorts/` |
| size-16-bra-top | Size 16 bra top | `src/assets/products/gym-wear/size-16/bra-top/` |
| accessory-bfr-bands | BFR bands | `src/assets/products/accessories/bfr-bands/` |
| accessory-long-power-bands | Long power bands | `src/assets/products/accessories/long-power-bands/` |
| accessory-weight-lifting-strap | Weight lifting strap | `src/assets/products/accessories/weight-lifting-strap/` |
| accessory-barbell-pad | Barbell pad | `src/assets/products/accessories/barbell-pad/` |
| accessory-socks | Socks | `src/assets/products/accessories/socks/` |
| accessory-knee-wraps | Knee wraps | `src/assets/products/accessories/knee-wraps/` |
| accessory-weight-lifting-belt | Weight lifting belt | `src/assets/products/accessories/weight-lifting-belt/` |
