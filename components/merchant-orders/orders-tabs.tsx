"use client";

import { Button } from "@/components/ui/button";

export type OrderFilter =
  | "all"
  | "new"
  | "accepted"
  | "preparing"
  | "ready"
  | "completed"
  | "cancelled";

interface OrdersTabsProps {
  value: OrderFilter;
  onChange: (
    value: OrderFilter
  ) => void;
}

const tabs: {
  label: string;
  value: OrderFilter;
}[] = [
  {
    label: "Semua",
    value: "all",
  },
  {
    label: "Baru",
    value: "new",
  },
  {
    label: "Diterima",
    value: "accepted",
  },
  {
    label: "Diproses",
    value: "preparing",
  },
  {
    label: "Siap",
    value: "ready",
  },
  {
    label: "Selesai",
    value: "completed",
  },
  {
    label: "Batal",
    value: "cancelled",
  },
];

export function OrdersTabs({
  value,
  onChange,
}: OrdersTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          variant={
            value === tab.value
              ? "default"
              : "outline"
          }
          size="sm"
          onClick={() =>
            onChange(tab.value)
          }
          className="whitespace-nowrap"
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}