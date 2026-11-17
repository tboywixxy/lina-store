import type { Product } from "../data/catalogue";

const discovered = import.meta.glob<string>(
  "/src/assets/products/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, query: "?url", import: "default" },
);

export function productImages(product: Product): string[] {
  const prefix = `/${product.imageFolder}`;
  return Object.entries(discovered)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => {
      const rank = (path: string) => /\/cover\./i.test(path) ? 0 : /\/front\./i.test(path) ? 1 : 2;
      return rank(a) - rank(b) || a.localeCompare(b, undefined, { numeric: true });
    })
    .map(([, url]) => url);
}
