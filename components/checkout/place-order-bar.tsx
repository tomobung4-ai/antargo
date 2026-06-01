"use client";

import { Button } from "@/components/ui/button";

type PlaceOrderBarProps = {
  total: number;
};

export default function PlaceOrderBar({
  total,
}: PlaceOrderBarProps) {
  return (
    <div className="sticky bottom-0 z-50 border-t bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Total Pembayaran
          </p>

          <p className="text-xl font-bold">
            Rp {total.toLocaleString("id-ID")}
          </p>
        </div>

        <Button size="lg" className="min-w-[180px]">
          Pesan Sekarang
        </Button>
      </div>
    </div>
  );
}