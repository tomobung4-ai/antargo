"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ActionButtons() {
  return (
    <div className="flex flex-col gap-3">
      <Button asChild size="lg">
        <Link href="/orders/ORDER-001/tracking">
          Lacak Pesanan
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
      >
        <Link href="/customer">
          Kembali ke Beranda
        </Link>
      </Button>
    </div>
  );
}