"use client";

import { Button } from "@/components/ui/button";

type CheckoutBarProps = {
  total: number;
  itemCount?: number;
  onCheckout?: () => void;
};

export default function CheckoutBar({
  total,
  itemCount = 0,
  onCheckout,
}: CheckoutBarProps) {
  return (
    <div className="sticky bottom-0 border-t bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div>
          <p className="text-sm text-muted-foreground">
            {itemCount} item(s)
          </p>

          <p className="text-xl font-bold">
            Rp {total.toLocaleString("id-ID")}
          </p>
        </div>

        <Button
          size="lg"
          className="min-w-[180px]"
          onClick={onCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}