"use client";

import { notFound } from "next/navigation";
import { useMemo, useState } from "react";

import {
  driverOrders,
  DriverOrder,
} from "@/lib/mock-driver-orders";

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
  const order = useMemo(
    () =>
      driverOrders.find(
        (item) => item.id === params.id
      ),
    [params.id]
  );

  if (!order) {
    notFound();
  }

  const [status, setStatus] =
    useState<DriverOrder["status"]>(
      order.status
    );

  const currentStep = {
    accepted: 1,
    picked_up: 2,
    on_the_way: 3,
    completed: 4,
    available: 0,
  }[status];

  return (
    <div className="container mx-auto space-y-6 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Delivery Detail
        </h1>

        <OrderStatusBadge status={status} />
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
            Ringkasan
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex justify-between">
            <span>Total</span>

            <span>
              Rp
              {order.total.toLocaleString(
                "id-ID"
              )}
            </span>
          </div>

          <Separator className="my-3" />

          <div className="flex justify-between">
            <span>Jarak</span>
            <span>{order.distance}</span>
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
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3"
              >
                <div
                  className={`h-4 w-4 rounded-full ${
                    index <= currentStep
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                />

                <span>{step}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {status === "accepted" && (
        <Button
          className="w-full"
          onClick={() =>
            setStatus("picked_up")
          }
        >
          Sampai Restoran
        </Button>
      )}

      {status === "picked_up" && (
        <Button
          className="w-full"
          onClick={() =>
            setStatus("on_the_way")
          }
        >
          Dalam Perjalanan
        </Button>
      )}

      {status === "on_the_way" && (
        <Button
          className="w-full"
          onClick={() =>
            setStatus("completed")
          }
        >
          Selesaikan Pengiriman
        </Button>
      )}

      {status === "completed" && (
        <div className="rounded-lg bg-green-100 p-4 text-center font-medium text-green-700">
          Pengiriman Selesai
        </div>
      )}
    </div>
  );
}