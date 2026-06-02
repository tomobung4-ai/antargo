"use client";

import Link from "next/link";
import { useMemo } from "react";

import { useOrderStore } from "@/lib/store/order-store";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function DriverPage() {
  const orders = useOrderStore(
    (state) => state.orders
  );

  const stats = useMemo(() => {
    const activeOrders =
      orders.filter((order) =>
        [
          "picked_up",
          "on_the_way",
        ].includes(order.status)
      ).length;

    const completedOrders =
      orders.filter(
        (order) =>
          order.status ===
          "completed"
      ).length;

    const availableOrders =
      orders.filter(
        (order) =>
          order.status === "ready"
      ).length;

    const earnings =
      completedOrders * 10000;

    return {
      activeOrders,
      completedOrders,
      availableOrders,
      earnings,
    };
  }, [orders]);

  return (
    <main className="container mx-auto p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Dashboard Driver
        </h1>

        <Button asChild>
          <Link href="/driver/orders">
            Lihat Order
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">
              Order Tersedia
            </p>

            <p className="mt-2 text-3xl font-bold">
              {stats.availableOrders}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">
              Order Aktif
            </p>

            <p className="mt-2 text-3xl font-bold">
              {stats.activeOrders}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">
              Pengiriman Selesai
            </p>

            <p className="mt-2 text-3xl font-bold">
              {stats.completedOrders}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">
              Penghasilan
            </p>

            <p className="mt-2 text-xl font-bold">
              Rp{" "}
              {stats.earnings.toLocaleString(
                "id-ID"
              )}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardContent className="p-5">
            <h2 className="mb-4 text-xl font-semibold">
              Ringkasan Driver
            </h2>

            <div className="space-y-2">
              <p>
                • Order tersedia:
                {" "}
                {stats.availableOrders}
              </p>

              <p>
                • Sedang diantar:
                {" "}
                {stats.activeOrders}
              </p>

              <p>
                • Pengiriman selesai:
                {" "}
                {stats.completedOrders}
              </p>

              <p>
                • Total penghasilan:
                {" "}
                Rp{" "}
                {stats.earnings.toLocaleString(
                  "id-ID"
                )}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}