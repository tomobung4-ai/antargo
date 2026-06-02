"use client";

import { Button } from "@/components/ui/button";

const filters = [
  "Semua",
  "Makanan",
  "Minuman",
  "Dessert",
];

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function MenuFilter({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={
            value === filter
              ? "default"
              : "outline"
          }
          onClick={() => onChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}