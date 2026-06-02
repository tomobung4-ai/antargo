"use client";

import { Bike } from "lucide-react";

type Props = {
  online: boolean;
};

export function DriverHeader({
  online,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">
          Driver Dashboard
        </h1>
        <p className="text-muted-foreground">
          Kelola pengiriman pesanan
        </p>
      </div>

      <div
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
          online
            ? "bg-green-100 text-green-700"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        <Bike className="h-4 w-4" />
        {online ? "Online" : "Offline"}
      </div>
    </div>
  );
}