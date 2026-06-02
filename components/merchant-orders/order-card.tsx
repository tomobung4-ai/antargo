"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Order,
  OrderStatus,
} from "@/lib/store/order-store";

import { OrderStatusBadge } from "./order-status-badge";

interface OrderCardProps {
  order: Order;

  onViewDetail: (
    order: Order
  ) => void;

  onStatusChange: (
    orderId: string,
    status: OrderStatus
  ) => void;
}

export function OrderCard({
  order,
  onViewDetail,
  onStatusChange,
}: OrderCardProps) {
  const renderActions = () => {
    switch (order.status) {
      case "new":
        return (
          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={() =>
                onStatusChange(
                  order.id,
                  "accepted"
                )
              }
            >
              Terima
            </Button>

            <Button
              variant="destructive"
              className="flex-1"
              onClick={() =>
                onStatusChange(
                  order.id,
                  "cancelled"
                )
              }
            >
              Tolak
            </Button>
          </div>
        );

      case "accepted":
        return (
          <Button
            className="w-full"
            onClick={() =>
              onStatusChange(
                order.id,
                "preparing"
              )
            }
          >
            Mulai Memasak
          </Button>
        );

      case "preparing":
        return (
          <Button
            className="w-full"
            onClick={() =>
              onStatusChange(
                order.id,
                "ready"
              )
            }
          >
            Siap Diambil
          </Button>
        );

      case "ready":
        return (
          <Button
            className="w-full"
            onClick={() =>
              onStatusChange(
                order.id,
                "completed"
              )
            }
          >
            Serahkan ke Driver
          </Button>
        );

      case "completed":
        return (
          <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-center text-sm font-medium text-green-700">
            Pesanan Selesai
          </div>
        );

      case "cancelled":
        return (
          <div className="rounded-lg border bg-muted p-3 text-center text-sm">
            Pesanan Dibatalkan
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden rounded-2xl">
      <CardContent className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold">
              {order.customerName}
            </h3>

            <p className="text-sm text-muted-foreground">
              {order.id}
            </p>
          </div>

          <OrderStatusBadge
            status={order.status}
          />
        </div>

        <div className="space-y-2">
          {order.items
            .slice(0, 3)
            .map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm"
              >
                <span>
                  {item.quantity}x {item.name}
                </span>

                <span>
                  Rp{" "}
                  {(
                    item.price *
                    item.quantity
                  ).toLocaleString(
                    "id-ID"
                  )}
                </span>
              </div>
            ))}
        </div>

        <div className="flex items-center justify-between border-t pt-3">
          <div>
            <p className="text-xs text-muted-foreground">
              Waktu Pesanan
            </p>

            <p className="font-medium">
              {order.createdAt}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground">
              Total
            </p>

            <p className="font-bold">
              Rp{" "}
              {order.total.toLocaleString(
                "id-ID"
              )}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={() =>
            onViewDetail(order)
          }
        >
          Detail
        </Button>

        {renderActions()}
      </CardContent>
    </Card>
  );
}