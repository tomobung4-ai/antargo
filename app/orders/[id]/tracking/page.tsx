"use client";

import { notFound } from "next/navigation";

import {
  useOrderStore,
} from "@/lib/store/order-store";

type Props = {
  params: {
    id: string;
  };
};

export default function TrackingPage({
  params,
}: Props) {
  const order = useOrderStore(
    (state) =>
      state.getOrderById(params.id)
  );

  if (!order) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-xl p-4">
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
          <strong>Pelanggan:</strong>{" "}
          {order.customerName}
        </p>

        <p>
          <strong>Alamat:</strong>{" "}
          {order.customerAddress}
        </p>

        <p>
          <strong>Total:</strong>{" "}
          Rp{" "}
          {order.total.toLocaleString(
            "id-ID"
          )}
        </p>

        <div className="pt-3">
          <p className="font-semibold">
            Status Pesanan
          </p>

          <div className="mt-2 rounded-lg bg-primary/10 p-3">
            {order.status}
          </div>
        </div>
      </div>
    </main>
  );
}