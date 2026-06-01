"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/food/cart-context";
import { formatPrice } from "@/lib/food/format";

export function StickyCartBar() {
  const { totalItems, subtotal } = useCart();
  if (totalItems === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="mx-auto flex max-w-lg items-center gap-3 sm:max-w-2xl">
        <div className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <ShoppingBagIcon className="size-5" />
          <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-muted-foreground">{totalItems} item di keranjang</p>
          <p className="truncate text-base font-semibold">{formatPrice(subtotal)}</p>
        </div>
        <Button size="lg" className="h-11 shrink-0 px-5" asChild>
          <Link href="/cart">Lihat keranjang</Link>
        </Button>
      </div>
    </div>
  );
}

