"use client";

import Image from "next/image";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/lib/food/cart-context";
import { formatPrice } from "@/lib/food/format";
import type { MenuItem } from "@/lib/food/types";

export function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();

  return (
    <Card size="sm" className="flex-row items-stretch gap-0 py-0 ring-0">
      <div className="relative size-24 shrink-0 overflow-hidden rounded-l-xl sm:size-28">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="112px"
        />
      </div>
      <CardContent className="flex min-w-0 flex-1 flex-col justify-between gap-2 py-3 pr-3 pl-3 sm:py-4 sm:pr-4">
        <div className="min-w-0">
          <h3 className="font-medium leading-snug">{item.name}</h3>
          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground sm:text-sm">
            {item.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-primary sm:text-base">
            {formatPrice(item.price)}
          </span>
          <Button size="sm" className="shrink-0" onClick={() => addItem(item)}>
            <PlusIcon />
            Tambah
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

