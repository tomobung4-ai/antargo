import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Order } from "@/lib/mock-orders";

type Props = {
  order: Order;
};

export default function OrderCard({
  order,
}: Props) {
  const statusConfig = {
    processing: {
      label: "Diproses",
      className:
        "bg-yellow-100 text-yellow-700",
    },
    completed: {
      label: "Selesai",
      className:
        "bg-green-100 text-green-700",
    },
    cancelled: {
      label: "Dibatalkan",
      className:
        "bg-red-100 text-red-700",
    },
  };

  const status =
    statusConfig[order.status];

  return (
    <Card className="overflow-hidden rounded-2xl">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className="relative h-20 w-20 overflow-hidden rounded-xl">
            <Image
              src={order.restaurantImage}
              alt={order.restaurantName}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold">
                {order.restaurantName}
              </h3>

              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}
              >
                {status.label}
              </span>
            </div>

            <p className="mt-1 text-xs text-muted-foreground">
              {order.id}
            </p>

            <p className="text-xs text-muted-foreground">
              {order.orderDate}
            </p>

            <p className="mt-2 font-semibold">
              Rp{" "}
              {order.totalPayment.toLocaleString(
                "id-ID"
              )}
            </p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button
            asChild
            variant="outline"
            className="flex-1"
          >
            <Link
              href={`/orders/${order.id}`}
            >
              Lihat Detail
            </Link>
          </Button>

          <Button className="flex-1">
            Pesan Lagi
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}