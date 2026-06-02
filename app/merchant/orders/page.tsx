"use client";

import { useMemo } from "react";

import {
  useOrderStore,
  OrderStatus,
} from "@/lib/store/order-store";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function MerchantOrdersPage() {
  const orders = useOrderStore(
    (state) => state.orders
  );

  const updateOrderStatus =
    useOrderStore(
      (state) =>
        state.updateOrderStatus
    );

  const sortedOrders = useMemo(
    () => [...orders].reverse(),
    [orders]
  );

  const handleNextStatus = (
    orderId: string,
    currentStatus: OrderStatus
  ) => {
    const flow: Record<
      OrderStatus,
      OrderStatus
    > = {
      new: "accepted",
      accepted: "preparing",
      preparing: "ready",
      ready: "ready",
      driver_assigned: "picked_up",
      picked_up: "on_the_way",
      on_the_way: "completed",
      completed: "completed",
      cancelled: "cancelled",
    };

    updateOrderStatus(
      orderId,
      flow[currentStatus]
    );
  };

  const getButtonLabel = (
    status: OrderStatus
  ) => {
    switch (status) {
      case "new":
        return "Terima Order";

      case "accepted":
        return "Mulai Masak";

      case "preparing":
        return "Siap Diambil";

      case "ready":
        return "Menunggu Driver";

      default:
        return "Update";
    }
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">
        Order Merchant
      </h1>

      <div className="space-y-4">
        {sortedOrders.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center">
              Belum ada order
            </CardContent>
          </Card>
        )}

        {sortedOrders.map((order) => (
          <Card key={order.id}>
            <CardContent className="space-y-4 p-4">
              <div>
                <p className="font-bold">
                  {order.id}
                </p>

                <p>
                  {order.restaurantName}
                </p>

                <p className="text-sm text-muted-foreground">
                  {order.customerName}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">
                    Status
                  </span>

                  <p className="font-medium capitalize">
                    {order.status}
                  </p>
                </div>

                <div>
                  <span className="text-muted-foreground">
                    Total
                  </span>

                  <p className="font-medium">
                    Rp{" "}
                    {order.total.toLocaleString(
                      "id-ID"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                {order.status !==
                  "completed" &&
                  order.status !==
                    "cancelled" &&
                  order.status !==
                    "ready" && (
                    <Button
                      onClick={() =>
                        handleNextStatus(
                          order.id,
                          order.status
                        )
                      }
                    >
                      {getButtonLabel(
                        order.status
                      )}
                    </Button>
                  )}

                {order.status ===
                  "ready" && (
                  <Button
                    disabled
                    variant="secondary"
                  >
                    Menunggu Driver
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}