"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type CartItemProps = {
  item: {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
    restaurant?: string;
  };
  onIncrease?: (id: string) => void;
  onDecrease?: (id: string) => void;
  onRemove?: (id: string) => void;
};

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex gap-4 rounded-xl border p-4">
      <div className="relative h-24 w-24 overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold">{item.name}</h3>

          {item.restaurant && (
            <p className="text-sm text-muted-foreground">
              {item.restaurant}
            </p>
          )}

          <p className="mt-1 font-medium">
            Rp {item.price.toLocaleString("id-ID")}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => onDecrease?.(item.id)}
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="min-w-8 text-center font-medium">
              {item.quantity}
            </span>

            <Button
              size="icon"
              variant="outline"
              onClick={() => onIncrease?.(item.id)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove?.(item.id)}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </div>
    </div>
  );
}