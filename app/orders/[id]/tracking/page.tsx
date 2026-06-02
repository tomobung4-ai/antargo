"use client";

import { notFound } from "next/navigation";
import { use } from "react";

import { useOrderStore } from "@/lib/store/order-store";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function TrackingPage({
  params,
}: Props) {
  const { id } = use(params);

  const order = useOrderStore(
    (state) => state.getOrderById(id)
  );

  if (!order) {
    notFound();
  }

  const currentStep = {
    new: 0,
    accepted: 1,
    preparing: 2,
    ready: 3,
    driver_assigned: 4,
    picked_up: 5,
    on_the_way: 6,
    completed: 7,
    cancelled: 0,
  }[order.status];

  const steps = [
    "Pesanan Dibuat",
    "Merchant Menerima",
    "Sedang Diproses",
    "Siap Diambil Driver",
    "Driver Ditugaskan",
    "Pesanan Diambil",
    "Dalam Perjalanan",
    "Pesanan Selesai",
  ];

  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="mb-6 text-2xl font-bold">
        Tracking Pesanan
      </h1>

      <div className="rounded-lg border p-4 space-y-3">
        <p>
          <strong>ID:</strong>{" "}
          {order.id}
        </p>

        <p>
          <strong>Restoran:</strong>{" "}
          {order.restaurantName}
        </p>

        <p>
          <strong>Total:</strong>{" "}
          Rp{" "}
          {order.total.toLocaleString(
            "id-ID"
          )}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {order.status}
        </p>

        {order.driverName && (
          <p>
            <strong>Driver:</strong>{" "}
            {order.driverName}
          </p>
        )}
      </div>

      <div className="mt-6 rounded-lg border p-4">
        <h2 className="mb-4 font-semibold">
          Progress Pesanan
        </h2>

        <div className="space-y-4">
          {steps.map(
            (step, index) => (
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

                <span>
                  {step}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {order.status ===
        "completed" && (
        <div className="mt-6 rounded-lg bg-green-100 p-4 text-center font-medium text-green-700">
          Pesanan telah selesai
          diantar
        </div>
      )}

      {order.status ===
        "cancelled" && (
        <div className="mt-6 rounded-lg bg-red-100 p-4 text-center font-medium text-red-700">
          Pesanan dibatalkan
        </div>
      )}
    </main>
  );
}