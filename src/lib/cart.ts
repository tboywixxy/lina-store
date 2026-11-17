import { productById } from "../data/catalogue";

export type SavedLine = { id: string; quantity: number };

export function parseStoredCart(json: string | null): SavedLine[] {
  try {
    const parsed: unknown = JSON.parse(json ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is SavedLine =>
      !!item && typeof item.id === "string" && productById.has(item.id) &&
      Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99
    );
  } catch { return []; }
}

export function addItem(current: SavedLine[], id: string): SavedLine[] {
  const found = current.find((line) => line.id === id);
  return found
    ? current.map((line) => line.id === id ? { ...line, quantity: Math.min(line.quantity + 1, 99) } : line)
    : [...current, { id, quantity: 1 }];
}

export function updateQuantity(current: SavedLine[], id: string, quantity: number): SavedLine[] {
  return current.map((line) => line.id === id ? { ...line, quantity: Math.min(Math.max(quantity, 1), 99) } : line);
}

export function removeItem(current: SavedLine[], id: string): SavedLine[] {
  return current.filter((line) => line.id !== id);
}
