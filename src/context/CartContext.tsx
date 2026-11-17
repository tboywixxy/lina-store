import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { productById, type Product } from "../data/catalogue";
import type { CartLine } from "../lib/checkout";
import { addItem, parseStoredCart, removeItem, updateQuantity, type SavedLine } from "../lib/cart";

type CartContextValue = {
  lines: CartLine[];
  count: number;
  add: (product: Product) => void;
  change: (id: string, quantity: number) => void;
  remove: (id: string) => void;
};
const key = "lina-store-cart-v1";
const CartContext = createContext<CartContextValue | null>(null);

function loadCart(): SavedLine[] {
  try {
    return parseStoredCart(localStorage.getItem(key));
  } catch { return []; }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<SavedLine[]>(loadCart);
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(saved)); } catch { /* Private browsing may block storage. */ }
  }, [saved]);
  const lines = useMemo(() => saved.flatMap(({ id, quantity }) => {
    const product = productById.get(id);
    return product ? [{ product, quantity }] : [];
  }), [saved]);
  const value: CartContextValue = {
    lines,
    count: lines.reduce((sum, line) => sum + line.quantity, 0),
    add: (product) => setSaved((current) => addItem(current, product.id)),
    change: (id, quantity) => setSaved((current) => updateQuantity(current, id, quantity)),
    remove: (id) => setSaved((current) => removeItem(current, id)),
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("CartProvider is missing");
  return cart;
}
