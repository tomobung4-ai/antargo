"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { CartLineItem, MenuItem } from "@/lib/food/types";

interface CartState {
  restaurantId: string | null;
  items: CartLineItem[];
}

interface CartContextValue extends CartState {
  addItem: (item: MenuItem) => void;
  totalItems: number;
  subtotal: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const emptyCart: CartState = { restaurantId: null, items: [] };

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartState>(emptyCart);

  const addItem = useCallback((item: MenuItem) => {
    setCart((prev) => {
      if (prev.restaurantId && prev.restaurantId !== item.restaurantId) {
        return {
          restaurantId: item.restaurantId,
          items: [{ menuItem: item, quantity: 1 }],
        };
      }

      const existing = prev.items.find((line) => line.menuItem.id === item.id);
      if (existing) {
        return {
          restaurantId: prev.restaurantId ?? item.restaurantId,
          items: prev.items.map((line) =>
            line.menuItem.id === item.id
              ? { ...line, quantity: line.quantity + 1 }
              : line
          ),
        };
      }

      return {
        restaurantId: prev.restaurantId ?? item.restaurantId,
        items: [...prev.items, { menuItem: item, quantity: 1 }],
      };
    });
  }, []);

  const clearCart = useCallback(() => setCart(emptyCart), []);

  const totalItems = useMemo(
    () => cart.items.reduce((sum, line) => sum + line.quantity, 0),
    [cart.items]
  );
  const subtotal = useMemo(
    () =>
      cart.items.reduce(
        (sum, line) => sum + line.menuItem.price * line.quantity,
        0
      ),
    [cart.items]
  );

  const value = useMemo(
    () => ({ ...cart, addItem, totalItems, subtotal, clearCart }),
    [cart, addItem, totalItems, subtotal, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

