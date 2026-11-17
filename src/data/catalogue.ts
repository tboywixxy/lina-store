export type Product = {
  id: string;
  name: string;
  listingName: string;
  description?: string;
  price: number | null;
  category: "gym-wear" | "accessories";
  size: string | null;
  imageFolder: string;
  source: string;
};

type Row = [id: string, name: string, price: number | null, description?: string, source?: string, listingName?: string];

const sources: Record<string, string> = {
  a: "9.56.57 AM.jpeg", b: "9.56.57 AM (1).jpeg", c: "9.56.58 AM.jpeg",
  d: "9.56.59 AM.jpeg", e: "9.57.00 AM.jpeg", f: "9.57.00 AM (1).jpeg",
  g: "9.57.01 AM.jpeg", h: "9.57.01 AM (1).jpeg", i: "9.57.02 AM.jpeg",
  j: "9.57.03 AM.jpeg", k: "9.57.03 AM (1).jpeg", l: "9.57.04 AM.jpeg",
  m: "9.57.04 AM (1).jpeg", n: "9.57.05 AM.jpeg", o: "9.57.06 AM.jpeg",
  p: "9.57.06 AM (1).jpeg", q: "9.57.07 AM.jpeg",
};

function gym(size: string, rows: Row[]): Product[] {
  const sizeFolder = "size-" + size.replace("/", "-");
  return rows.map(([id, name, price, description, source, listingName]) => ({
    id: `${sizeFolder}-${id}`,
    name,
    listingName: listingName ?? `Size ${size}`,
    description,
    price,
    category: "gym-wear",
    size,
    imageFolder: `src/assets/products/gym-wear/${sizeFolder}/${id}/`,
    source: `WhatsApp Image 2026-11-17 at ${sources[source ?? "a"]}`,
  }));
}

function accessory(rows: Row[]): Product[] {
  return rows.map(([id, name, price, description]) => ({
    id: `accessory-${id}`, name, listingName: name, description, price,
    category: "accessories", size: null,
    imageFolder: `src/assets/products/accessories/${id}/`,
    source: `WhatsApp Image 2026-11-17 at ${sources.q}`,
  }));
}

export const products: Product[] = [
  ...gym("6", [
    ["palazzo-halter-set", "Size 6 palazzo and halter set", 15000, "palazzo pant and halter neck…", "a", "size 6 gym wear"],
    ["cream-gym-wear", "Size 6 cream gym wear", 13000, undefined, "a", "size 6 gym wear"],
    ["palazzo-bra-set", "Size 6 palazzo leggings and bra set", 15000, "palazzo leggings and bra top…", "a", "size 6"],
    ["leggings-taupe-red", "Size 6 leggings — taupe or red", 8500, "Price per 1 leggings", "a", "Size 6 leggings(price per 1 leggings)"],
    ["leggings-pink-blue", "Size 6 leggings — pink or blue", 8500, undefined, "a", "Size 6 leggings"],
    ["tops-blue", "Size 6 tops — blue", 7500, undefined, "a", "Size 6 tops"],
    ["black-top-halter", "Size 6 top and halter piece", 9000, "Size 6 top plus halter neck…", "a", "A"],
  ]),
  ...gym("6/8", [
    ["scrunch-short-crop-set", "Size 6/8 scrunch shorts and crop set", 13000, "scrunch short and stylish cro…", "b", "size 6/8"],
    ["body-sculpt-leggings", "Size 6/8 body sculpt leggings", 8500, "Body sculpt leggings", "b", "Size 6/8 leggings"],
  ]),
  ...gym("8", [
    ["pink-scrunch-set", "Size 8 pink scrunch top set", 13000, "scrunch top and longsleeve…", "c", "size 8"],
    ["blue-ribbed-set", "Size 8 blue ribbed two piece", 16000, "Two piece ribbed leggings a…", "c", "size 8"],
    ["shorts", "Size 8 shorts", 7500, undefined, "c", "Size 8 shorts"],
    ["bra-tops", "Size 8 bra tops", 3800, undefined, "c", "Size 8 bra tops"],
    ["rt-blue-teal", "Size 8 rt — blue and teal", 7500, undefined, "c", "Size 8 rt"],
    ["tops-black-cream", "Size 8 tops — black or cream", 7500, undefined, "e", "Size 8 tops"],
  ]),
  ...gym("8/10", [
    ["palazzo-bra-set", "Size 8/10 palazzo pant and bra set", 15000, "Palazzo pant plus bra top", "d"],
    ["green-body-sculpt-set", "Size 8/10 green body sculpt set", 16000, "Body sculpt leggings and zip…", "d"],
    ["green-hoodie-set", "Size 8/10 green hoodie set", 16000, "Hoodie Zip up jacket plus scr…", "d"],
    ["brown-ribbed-short-set", "Size 8/10 brown ribbed shorts set", 16000, "Ribbed short and zip up jacket", "d"],
    ["khaki-flare-set", "Size 8/10 khaki flare pant set", 15000, "Flare pant and longsleeve cr…", "d"],
    ["two-tone-scrunch-set", "Size 8/10 two tone scrunch shorts set", 16000, "Two toned scrunch butt shor…", "d"],
    ["coral-gym-shark-set", "Size 8/10 coral leggings and bra set", 13000, "Gym shark leggings plus bra…", "d"],
    ["black-hoodie-short-set", "Size 8/10 black hoodie and shorts set", 16000, "Scrunch butt short plus hoo…", "e"],
    ["purple-leggings-set", "Size 8/10 purple leggings set", 13000, "Two piece leggings and long…", "e"],
    ["black-palazzo-set", "Size 8/10 black palazzo leggings set", 15000, "Scrunch palazzo leggings pl…", "e"],
    ["khaki-zip-set", "Size 8/10 khaki leggings and zip set", 16000, "Gym shark leggings plus Zip…", "e"],
    ["leggings-blue-green", "Size 8/10 leggings — blue or green", 8500, undefined, "e", "Size 8/10 leggings"],
  ]),
  ...gym("10", [
    ["purple-leggings-bra", "Size 10 purple leggings and bra set", 13000, "Thick leggings plus bra top", "f", "size 10"],
    ["lilac-scrunch-set", "Size 10 lilac scrunch set", 13000, "Scrunch butt thick leggings…", "f"],
    ["cream-leggings-bra", "Size 10 cream leggings and bra set", 13000, "Thick leggings plus bra top", "f"],
    ["navy-zip-set", "Size 10 navy zip set", 16000, undefined, "f"],
    ["black-zip-set-a", "Size 10 black zip set A", 16000, undefined, "f"],
    ["pink-brown-set", "Size 10 pink and brown set", 16000, undefined, "f"],
    ["white-teal-set", "Size 10 white and teal set", 16000, undefined, "f"],
    ["black-zip-set-b", "Size 10 black zip set B", 16000, undefined, "g"],
    ["grey-leggings-crop", "Size 10 grey leggings and crop set", 13000, undefined, "g"],
    ["teal-set", "Size 10 teal gym wear", 14500, undefined, "g"],
    ["blue-zip-set", "Size 10 blue zip set", 16000, undefined, "g"],
    ["grey-flare-set", "Size 10 grey flare set", 18000, undefined, "g"],
    ["red-halter-set", "Size 10 red halter set", 13000, undefined, "g"],
    ["black-zip-set-c", "Size 10 black zip set C", 18000, undefined, "g"],
    ["slate-blue-set", "Size 10 slate blue set", 16000, undefined, "h"],
    ["brown-leggings-bra", "Size 10 brown leggings and bra set", 13000, undefined, "h"],
    ["black-halter-set", "Size 10 black halter set", 14500, undefined, "h"],
    ["red-long-sleeve-set", "Size 10 red long sleeve set", 16000, undefined, "h"],
    ["leggings-cream-grey", "Size 10 leggings — cream or grey", 8500, undefined, "h", "Size 10 leggings"],
    ["shorts", "Size 10 shorts", 7500, undefined, "h", "Size 10 shorts"],
    ["bra-tops", "Size 10 bra tops", 3800, undefined, "h", "Size 10 bra tops"],
    ["mauve-top", "Size 10 mauve top", 6000, undefined, "i", "Size 10 top"],
    ["tops-blue-brown", "Size 10 tops — blue or brown", 7500, undefined, "i", "Size 10 tops"],
  ]),
  ...gym("10/12", [
    ["black-set-a", "Size 10/12 black gym wear A", 13000, undefined, "j"],
    ["black-set-b", "Size 10/12 black gym wear B", 14500, undefined, "j"],
    ["green-white-set", "Size 10/12 green and white set", 13000, undefined, "j"],
    ["pink-set", "Size 10/12 pink set", 16000, undefined, "j"],
    ["blue-set", "Size 10/12 blue set", 16000, undefined, "j"],
    ["grey-teal-set", "Size 10/12 grey and teal set", 22000, undefined, "j"],
  ]),
  ...gym("12", [
    ["brown-set", "Size 12 brown gym wear", 14000, undefined, "k"],
    ["black-pink-set", "Size 12 black and pink gym wear", 15000, undefined, "k"],
    ["black-set-a", "Size 12 black gym wear A", 16000, undefined, "k"],
    ["pink-leggings-bra", "Size 12 pink leggings and bra set", 13000, undefined, "k"],
    ["beige-set", "Size 12 beige gym wear", 14500, undefined, "k"],
    ["aqua-black-set", "Size 12 aqua and black set", 21000, undefined, "k"],
    ["blue-leggings-bra", "Size 12 blue leggings and bra set", 13000, undefined, "k"],
    ["mauve-set", "Size 12 mauve gym wear", 14500, undefined, "l"],
    ["navy-white-set", "Size 12 navy and white set", 13000, undefined, "l"],
    ["black-set-b", "Size 12 black gym wear B", 16000, undefined, "l"],
    ["mint-green-set", "Size 12 mint and green set", 18000, undefined, "l"],
    ["black-khaki-set", "Size 12 black and khaki set", 15000, undefined, "l"],
    ["leggings-blue-lilac", "Size 12 leggings — blue or lilac", 8500, undefined, "l", "Size 12 leggings"],
    ["leggings-red-grey", "Size 12 leggings — red or grey", 8500, undefined, "l", "Size 12 leggings"],
    ["shorts", "Size 12 shorts", 7500, undefined, "m", "Size 12 shorts"],
    ["bra-tops", "Size 12 bra tops", 3800, undefined, "m", "Size 12 bra tops"],
  ]),
  ...gym("14", [
    ["brown-set", "Size 14 brown gym wear", 21000, undefined, "n"],
    ["purple-halter-piece", "Size 14 purple halter piece", 12000, undefined, "n"],
    ["black-set-a", "Size 14 black gym wear A", 16000, undefined, "n"],
    ["black-set-b", "Size 14 black gym wear B", 18000, undefined, "n"],
    ["black-patterned-set", "Size 14 black patterned set", 16000, undefined, "n"],
    ["black-halter-set", "Size 14 black halter set", 15000, undefined, "n"],
    ["blue-hoodie-set", "Size 14 blue hoodie set", 16000, undefined, "n"],
    ["leggings-grey", "Size 14 grey leggings", null, undefined, "o", "Size 14 leggings"],
    ["shorts-blue", "Size 14 blue shorts", 7500, undefined, "o", "Size 14 short"],
    ["bra-tops", "Size 14 bra tops", 3800, undefined, "o", "Size 14 bra tops"],
    ["tops-purple", "Size 14 purple tops", null, "First slide is 9000; listing also shows ₦7,500 and a struck-through ₦9,000.", "o", "Size 14 tops"],
  ]),
  ...gym("16", [
    ["blue-set-a", "Size 16 blue gym wear A", 16000, undefined, "p"],
    ["blue-set-b", "Size 16 blue gym wear B", 16000, undefined, "p"],
    ["black-halter-set", "Size 16 black halter set", 15000, undefined, "p"],
    ["black-set", "Size 16 black gym wear", 14500, undefined, "p"],
    ["shorts", "Size 16 shorts", 7500, undefined, "p", "Size 16 short"],
    ["bra-top", "Size 16 bra top", 3800, undefined, "p", "Size 16 bra top"],
  ]),
  ...accessory([
    ["bfr-bands", "BFR bands", 15000, "Comes as a pair (2 legs)"],
    ["long-power-bands", "Long power bands", 8000],
    ["weight-lifting-strap", "Weight lifting strap", 15000, "Comes as a pair (two hands)"],
    ["barbell-pad", "Barbell pad", 13000],
    ["socks", "Socks", 2500],
    ["knee-wraps", "Knee wraps", 18000, "Comes as a pair (2 legs)"],
    ["weight-lifting-belt", "Weight lifting belt", 25000],
  ]),
];

export const sizes = ["6", "6/8", "8", "8/10", "10", "10/12", "12", "14", "16"];
export const productById = new Map(products.map((product) => [product.id, product]));
