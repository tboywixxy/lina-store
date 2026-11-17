import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";

const fixture = path.resolve("src/assets/products/__verification__");
const cover = path.join(fixture, "cover.png");
const front = path.join(fixture, "front.png");
if (fs.existsSync(fixture)) throw new Error("Verification fixture already exists; refusing to overwrite it.");
const pixel = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/lXcAAAAASUVORK5CYII=", "base64");
fs.mkdirSync(fixture);
fs.writeFileSync(cover, pixel);
fs.writeFileSync(front, pixel);
let server;
try {
  server = await createServer({ server: { middlewareMode: true }, appType: "custom" });
  const { products, sizes } = await server.ssrLoadModule("/src/data/catalogue.ts");
  const { cartTotal, orderMessage, orderUrl } = await server.ssrLoadModule("/src/lib/checkout.ts");
  const { addItem, updateQuantity, removeItem, parseStoredCart } = await server.ssrLoadModule("/src/lib/cart.ts");
  const { productImages } = await server.ssrLoadModule("/src/lib/images.ts");
  assert.equal(products.length, 96);
  assert.equal(new Set(products.map((p) => p.id)).size, products.length);
  assert.equal(new Set(products.map((p) => p.imageFolder)).size, products.length);
  for (const product of products) {
    assert.ok(fs.existsSync(path.join(product.imageFolder, ".gitkeep")), product.id);
    assert.ok(product.category === "accessories" ? product.size === null : sizes.includes(product.size), product.id);
    assert.ok(product.price === null || (Number.isInteger(product.price) && product.price > 0), product.id);
  }
  assert.equal(products.filter((p) => p.price === null).length, 2);
  const id = "size-6-palazzo-halter-set";
  const saved = addItem(addItem([], id), id);
  assert.deepEqual(saved, [{ id, quantity: 2 }]);
  assert.deepEqual(parseStoredCart(JSON.stringify(saved)), saved);
  assert.deepEqual(updateQuantity(saved, id, 3), [{ id, quantity: 3 }]);
  assert.deepEqual(removeItem(saved, id), []);
  assert.deepEqual(parseStoredCart("{bad json"), []);
  const pick = (id) => products.find((p) => p.id === id);
  const lines = [
    { product: pick("size-6-palazzo-halter-set"), quantity: 1 },
    { product: pick("size-10-leggings-cream-grey"), quantity: 2 },
    { product: pick("accessory-bfr-bands"), quantity: 1 },
  ];
  assert.equal(cartTotal(lines), 47000);
  const message = orderMessage(lines);
  assert.match(message, /TOTAL: ₦47,000/);
  assert.match(message, /Quantity: 2\n   Unit Price: ₦8,500\n   Subtotal: ₦17,000/);
  assert.match(message, /BFR bands/);
  const url = new URL(orderUrl(lines));
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, "/2348153895905");
  assert.equal(url.searchParams.get("text"), message);
  assert.equal(orderUrl([{ product: pick("size-14-leggings-grey"), quantity: 1 }]), null);
  assert.equal(orderUrl([]), null);
  const fixtureProduct = { imageFolder: "src/assets/products/__verification__/" };
  const images = productImages(fixtureProduct);
  assert.equal(images.length, 2);
  assert.match(images[0], /cover\.png/);
  assert.match(images[1], /front\.png/);
  assert.equal(productImages(pick("size-6-palazzo-halter-set")).length, 0);
  console.log("Verified 96 folders, catalogue integrity, image discovery/order, cart totals, and WhatsApp URL.");
} finally {
  if (server) await server.close();
  fs.unlinkSync(cover);
  fs.unlinkSync(front);
  fs.rmdirSync(fixture);
}
