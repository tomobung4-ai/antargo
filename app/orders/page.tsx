"use client";

import { Order } from "@/lib/store/order-store";
import { useOrderStore } from "@/lib/store/order-store";

export default function OrdersPage() {
const orders = useOrderStore(
(state) => state.orders
);

return ( <main className="p-4"> <h1 className="text-2xl font-bold">
Semua Order </h1>

  <div className="mt-4 space-y-4">
    {orders.map((order: Order) => (
      <div
        key={order.id}
        className="rounded-lg border p-4"
      >
        <p>{order.id}</p>

        <p>
          {order.restaurantName}
        </p>

        <p>{order.status}</p>
      </div>
    ))}
  </div>
</main>

);
}
