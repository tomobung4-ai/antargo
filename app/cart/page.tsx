"use client";

import { useMemo, useState } from "react";

import CartHeader from "@/components/cart/cart-header";
import CartItem from "@/components/cart/cart-item";
import OrderSummary from "@/components/cart/order-summary";
import PromoSection from "@/components/cart/promo-section";
import CheckoutBar from "@/components/cart/checkout-bar";

import {
CartItemType,
mockCartItems,
} from "@/lib/mock-cart";

export default function CartPage() {
const [items, setItems] =
useState<CartItemType[]>(mockCartItems);

const deliveryFee = 12000;
const serviceFee = 3000;

const increaseQuantity = (id: number) => {
setItems((prev) =>
prev.map((item) =>
item.id === id
? { ...item, quantity: item.quantity + 1 }
: item
)
);
};

const decreaseQuantity = (id: number) => {
setItems((prev) =>
prev.map((item) =>
item.id === id
? {
...item,
quantity: Math.max(1, item.quantity - 1),
}
: item
)
);
};

const removeItem = (id: number) => {
setItems((prev) =>
prev.filter((item) => item.id !== id)
);
};

const subtotal = useMemo(() => {
return items.reduce(
(total, item) =>
total + item.price * item.quantity,
0
);
}, [items]);

const grandTotal =
subtotal + deliveryFee + serviceFee;

return ( <main className="min-h-screen bg-slate-50 pb-32"> <CartHeader />

  <div className="mx-auto max-w-md px-4 py-4 space-y-4">
    {items.length === 0 ? (
      <div className="rounded-2xl border bg-white p-10 text-center">
        <h2 className="font-semibold">
          Keranjang Kosong
        </h2>

        <p className="text-sm text-muted-foreground mt-2">
          Belum ada makanan di keranjang.
        </p>
      </div>
    ) : (
      <>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() =>
              increaseQuantity(item.id)
            }
            onDecrease={() =>
              decreaseQuantity(item.id)
            }
            onRemove={() =>
              removeItem(item.id)
            }
          />
        ))}

        <PromoSection />

        <OrderSummary
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          serviceFee={serviceFee}
          total={grandTotal}
        />
      </>
    )}
  </div>

  <CheckoutBar total={grandTotal} />
</main>

);
}
