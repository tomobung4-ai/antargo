"use client";

import Link from "next/link";

import { DriverOrder } from "@/lib/mock-driver-orders";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { OrderStatusBadge } from "./order-status-badge";

type Props = {
  order: DriverOrder;
  onAccept?: (id: string) => void;
};

export function OrderCard({
  order,
  onAccept,
}: Props) {
  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            {order.id}
          </h3>

          <OrderStatusBadge
            status={order.status}
          />
        </div>

        <div>
          <p className="font-medium">
            {order.restaurantName}
          </p>

          <p className="text-sm text-muted-foreground">
            Customer: {order.customerName}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-muted-foreground">
              Jarak
            </span>
            <p>{order.distance}</p>
          </div>

          <div>
            <span className="text-muted-foreground">
              Total
            </span>
            <p>
              Rp
              {order.total.toLocaleString(
                "id-ID"
              )}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          {order.status === "available" &&
            onAccept && (
              <Button
                className="flex-1"
                onClick={() =>
                  onAccept(order.id)
                }
              >
                Ambil Order
              </Button>
            )}

          <Button
            asChild
            variant="outline"
            className="flex-1"
          >
            <Link
              href={`/driver/delivery/${order.id}`}
            >
              Detail
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}