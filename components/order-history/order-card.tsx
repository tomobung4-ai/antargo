"use client";

import Link from "next/link";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Order } from "@/lib/store/order-store";

type Props = {
  order: Order;
};

export default function OrderCard({
  order,
}: Props) {
  const getStatusLabel = () => {
    switch (order.status) {
      case "new":
        return "Pesanan Baru";

      case "accepted":
        return "Diterima";

      case "preparing":
        return "Diproses";

      case "ready":
        return "Siap Diambil";

      case "completed":
        return "Selesai";

      case "cancelled":
        return "Dibatalkan";

      default:
        return order.status;
    }
  };

  return (
    <Card className="rounded-2xl">
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold">
            {order.restaurantName}
          </h3>

          <p className="text-sm text-muted-foreground">
            {order.id}
          </p>

          <p className="text-sm">
            Status: {getStatusLabel()}
          </p>

          <p className="text-sm">
            Waktu: {order.createdAt}
          </p>

          <p className="font-bold">
            Rp{" "}
            {order.total.toLocaleString(
              "id-ID"
            )}
          </p>
        </div>

        <div className="mt-4 flex gap-2">
          <Button
            asChild
            variant="outline"
            className="flex-1"
          >
            <Link
              href={`/orders/${order.id}/tracking`}
            >
              Lacak
            </Link>
          </Button>

          <Button
            variant="secondary"
            className="flex-1"
          >
            Detail
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}