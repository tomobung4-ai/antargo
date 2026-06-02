"use client";

import Link from "next/link";

import {
  useOrderStore,
  Order,
} from "@/lib/store/order-store";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function DriverOrdersPage() {
  const orders = useOrderStore(
    (state) =>
      state.orders.filter(
        (order) => order.status === "ready"
      )
  );

  const updateOrderStatus =
    useOrderStore(
      (state) => state.updateOrderStatus
    );

  const handleAccept = (
    order: Order
  ) => {
    updateOrderStatus(
      order.id,
      "picked_up"
    );
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">
        Order Siap Diantar
      </h1>

      <div className="space-y-4">
        {orders.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center">
              Tidak ada order siap diantar
            </CardContent>
          </Card>
        )}

        {orders.map((order) => (
          <Card key={order.id}>
            <CardContent className="space-y-3 p-4">
              <div>
                <p className="font-bold">
                  {order.id}
                </p>

                <p>
                  {order.restaurantName}
                </p>

                <p className="text-sm text-muted-foreground">
                  {order.customerAddress}
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() =>
                    handleAccept(order)
                  }
                >
                  Ambil Order
                </Button>

                <Button
                  asChild
                  variant="outline"
                >
                  <Link
                    href={`/driver/orders/delivery/${order.id}`}
                  >
                    Detail
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}