"use client";

import Link from "next/link";
import { useMemo } from "react";

import { useOrderStore } from "@/lib/store/order-store";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function MerchantPage() {
  const orders = useOrderStore(
    (state) => state.orders
  );

  const stats = useMemo(() => {
    const totalOrders =
      orders.length;

    const totalRevenue =
      orders
        .filter(
          (order) =>
            order.status ===
            "completed"
        )
        .reduce(
          (sum, order) =>
            sum + order.total,
          0
        );

    const newOrders =
      orders.filter(
        (order) =>
          order.status === "new"
      ).length;

    const processingOrders =
      orders.filter((order) =>
        [
          "accepted",
          "preparing",
          "ready",
        ].includes(order.status)
      ).length;

    const completedOrders =
      orders.filter(
        (order) =>
          order.status ===
          "completed"
      ).length;

    return {
      totalOrders,
      totalRevenue,
      newOrders,
      processingOrders,
      completedOrders,
    };
  }, [orders]);

  return (
    <main className="container mx-auto p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Dashboard Merchant
        </h1>

        <Button asChild>
          <Link href="/merchant/orders">
            Kelola Order
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">
              Total Order
            </p>

            <p className="mt-2 text-3xl font-bold">
              {stats.totalOrders}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">
              Order Baru
            </p>

            <p className="mt-2 text-3xl font-bold">
              {stats.newOrders}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">
              Diproses
            </p>

            <p className="mt-2 text-3xl font-bold">
              {stats.processingOrders}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">
              Selesai
            </p>

            <p className="mt-2 text-3xl font-bold">
              {stats.completedOrders}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">
              Pendapatan
            </p>

            <p className="mt-2 text-xl font-bold">
              Rp{" "}
              {stats.totalRevenue.toLocaleString(
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
              Aktivitas Merchant
            </h2>

            <div className="space-y-2">
              <p>
                • Total order masuk:
                {" "}
                {stats.totalOrders}
              </p>

              <p>
                • Order baru:
                {" "}
                {stats.newOrders}
              </p>

              <p>
                • Sedang diproses:
                {" "}
                {stats.processingOrders}
              </p>

              <p>
                • Order selesai:
                {" "}
                {stats.completedOrders}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}