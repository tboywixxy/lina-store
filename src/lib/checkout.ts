import { store } from "../config/store";
import type { Product } from "../data/catalogue";

export type CartLine = { product: Product; quantity: number };
export const naira = (amount: number) => `₦${new Intl.NumberFormat("en-NG").format(amount)}`;

export function cartTotal(lines: CartLine[]): number | null {
  if (lines.some(({ product }) => product.price === null)) return null;
  return lines.reduce((sum, { product, quantity }) => sum + product.price! * quantity, 0);
}

export function orderMessage(lines: CartLine[]): string | null {
  const total = cartTotal(lines);
  if (!lines.length || total === null) return null;
  const items = lines.map(({ product, quantity }, index) =>
    `${index + 1}. ${product.name}${product.size ? ` (Size ${product.size})` : ""}\n   Quantity: ${quantity}\n   Unit Price: ${naira(product.price!)}\n   Subtotal: ${naira(product.price! * quantity)}`
  );
  return `Hello! I would like to order the following items from your website:\n\n${items.join("\n\n")}\n\nTOTAL: ${naira(total)}\n\nPlease confirm availability, delivery fees and payment details. Thank you!`;
}

export function orderUrl(lines: CartLine[]): string | null {
  const message = orderMessage(lines);
  return message ? `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}` : null;
}
