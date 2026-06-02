"use client";

import { useState } from "react";

import {
  DriverOrder,
  driverOrders,
} from "@/lib/mock-driver-orders";

import { OrderCard } from "@/components/driver/order-card";

export default function DriverOrdersPage() {
  const [orders, setOrders] =
    useState<DriverOrder[]>(driverOrders);

  const handleAccept = (id: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status: "accepted",
            }
          : order
      )
    );
  };

  return (
    <div className="container mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-bold">
        Order Tersedia
      </h1>

      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onAccept={handleAccept}
        />
      ))}
    </div>
  );
}