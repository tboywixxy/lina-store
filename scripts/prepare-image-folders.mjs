import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "src/data/catalogue.ts"), "utf8");
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { products } = await import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);
const ids = new Set();
const folders = new Set();
for (const product of products) {
  if (ids.has(product.id) || folders.has(product.imageFolder)) throw new Error(`Duplicate product ID or folder: ${product.id}`);
  ids.add(product.id);
  folders.add(product.imageFolder);
  const directory = path.resolve(root, product.imageFolder);
  if (!directory.startsWith(path.join(root, "src", "assets", "products") + path.sep)) throw new Error(`Invalid folder: ${product.imageFolder}`);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, ".gitkeep"), "");
}
const guide = [
  "# Product image upload guide",
  "",
  "Each product has its own folder below. Copy original product photos into that folder. Supported formats: JPG, JPEG, PNG, WebP, AVIF (upper- or lower-case extension). Do not put the WhatsApp catalogue screenshots here.",
  "",
  "Name the preferred main photo `cover.jpg` or `front.jpg`. The site chooses `cover` first, then `front`, then other files in filename order. Multiple files become a gallery on the product detail page. A product without files shows a placeholder. The folder path, not the product's display name, determines which images belong to it.",
  "",
  "During development Vite detects added files. On a deployed static site, add the files to the project, rebuild with `npm run build`, and redeploy the new `dist/` output.",
  "",
  "| Product ID | Product | Exact folder path |",
  "| --- | --- | --- |",
  ...products.map((p) => `| ${p.id} | ${p.name} | \`${p.imageFolder}\` |`),
  "",
];
fs.writeFileSync(path.join(root, "IMAGE_UPLOAD_GUIDE.md"), guide.join("\n"));
console.log(`Prepared ${products.length} product folders and IMAGE_UPLOAD_GUIDE.md`);
