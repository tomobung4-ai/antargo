"use client";

import { Button } from "@/components/ui/button";

export type OrderFilterType =
  | "all"
  | "processing"
  | "completed"
  | "cancelled";

type Props = {
  activeFilter: OrderFilterType;
  onChange: (filter: OrderFilterType) => void;
};

export default function OrderFilter({
  activeFilter,
  onChange,
}: Props) {
  const tabs = [
    {
      label: "Semua",
      value: "all",
    },
    {
      label: "Diproses",
      value: "processing",
    },
    {
      label: "Selesai",
      value: "completed",
    },
    {
      label: "Dibatalkan",
      value: "cancelled",
    },
  ] as const;

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          variant={
            activeFilter === tab.value
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