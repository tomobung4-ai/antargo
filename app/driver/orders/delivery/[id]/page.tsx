"use client";

import { notFound } from "next/navigation";
import { useMemo } from "react";

import {
  useOrderStore,
  OrderStatus,
} from "@/lib/store/order-store";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { OrderStatusBadge } from "@/components/driver/order-status-badge";

type Props = {
  params: {
    id: string;
  };
};

const steps = [
  "Order Diterima",
  "Sampai Restoran",
  "Pesanan Diambil",
  "Dalam Perjalanan",
  "Pesanan Selesai",
];

export default function DeliveryDetailPage({
  params,
}: Props) {
  const getOrderById =
    useOrderStore(
      (state) => state.getOrderById
    );

  const updateOrderStatus =
    useOrderStore(
      (state) =>
        state.updateOrderStatus
    );

  const order = useMemo(
    () =>
      getOrderById(params.id),
    [params.id, getOrderById]
  );

  if (!order) {
    notFound();
  }

  const stepMap: Record<
    OrderStatus,
    number
  > = {
    new: 0,
    accepted: 1,
    preparing: 1,
    ready: 1,
    driver_assigned: 1,
    picked_up: 2,
    on_the_way: 3,
    completed: 4,
    cancelled: 0,
  };

  const currentStep =
    stepMap[order.status];

  return (
    <div className="container mx-auto space-y-6 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Delivery Detail
        </h1>

        <OrderStatusBadge
          status={
            order.status === "new" ||
            order.status ===
              "preparing" ||
            order.status ===
              "ready" ||
            order.status ===
              "driver_assigned" ||
            order.status ===
              "cancelled"
              ? "accepted"
              : order.status
          }
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            Informasi Restoran
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="font-medium">
            {order.restaurantName}
          </p>

          <p className="text-muted-foreground">
            {order.restaurantAddress}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Informasi Customer
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <p>{order.customerName}</p>
          <p>{order.customerPhone}</p>
          <p>{order.customerAddress}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Ringkasan Pesanan
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex justify-between">
            <span>Total</span>

            <span>
              Rp{" "}
              {order.total.toLocaleString(
                "id-ID"
              )}
            </span>
          </div>

          <Separator className="my-3" />

          <div className="space-y-2">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between"
              >
                <span>
                  {item.quantity}x{" "}
                  {item.name}
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Progress Pengiriman
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {steps.map(
              (step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`h-4 w-4 rounded-full ${
                      index <=
                      currentStep
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  />

                  <span>{step}</span>
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>

      {order.status ===
        "accepted" && (
        <Button
          className="w-full"
          onClick={() =>
            updateOrderStatus(
              order.id,
              "picked_up"
            )
          }
        >
          Sampai Restoran
        </Button>
      )}

      {order.status ===
        "picked_up" && (
        <Button
          className="w-full"
          onClick={() =>
            updateOrderStatus(
              order.id,
              "on_the_way"
            )
          }
        >
          Dalam Perjalanan
        </Button>
      )}

      {order.status ===
        "on_the_way" && (
        <Button
          className="w-full"
          onClick={() =>
            updateOrderStatus(
              order.id,
              "completed"
            )
          }
        >
          Selesaikan Pengiriman
        </Button>
      )}

      {order.status ===
        "completed" && (
        <div className="rounded-lg bg-green-100 p-4 text-center font-medium text-green-700">
          Pengiriman Selesai
        </div>
      )}
    </div>
  );
}