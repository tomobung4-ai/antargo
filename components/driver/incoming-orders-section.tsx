"use client";

import { InboxIcon } from "lucide-react";

import { IncomingOrderCard } from "@/components/driver/incoming-order-card";
import { Badge } from "@/components/ui/badge";
import type { IncomingOrder } from "@/lib/driver/types";
import { cn } from "@/lib/utils";

type IncomingOrdersSectionProps = {
  orders: IncomingOrder[];
  onAccept: (orderId: string) => void;
  onReject: (orderId: string) => void;
  isOnline: boolean;
  className?: string;
};

export function IncomingOrdersSection({
  orders,
  onAccept,
  onReject,
  isOnline,
  className,
}: IncomingOrdersSectionProps) {
  return (
    <section
      id="incoming-orders"
      className={cn("scroll-mt-20 space-y-4", className)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold">Pesanan Masuk</h3>
          {orders.length > 0 && (
            <Badge className="bg-emerald-600 hover:bg-emerald-600">
              {orders.length} baru
            </Badge>
          )}
        </div>
      </div>

      {!isOnline ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-muted/30 px-6 py-12 text-center">
          <InboxIcon className="size-10 text-muted-foreground/50" />
          <p className="mt-3 font-medium">Anda sedang offline</p>
          <p className="mt-1 max-w-xs text-sm text-muted-foreground">
            Aktifkan status online untuk mulai menerima pesanan masuk.
          </p>
        </div>
      ) : orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-muted/30 px-6 py-12 text-center">
          <InboxIcon className="size-10 text-muted-foreground/50" />
          <p className="mt-3 font-medium">Belum ada pesanan</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Pesanan baru akan muncul di sini.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {orders.map((order) => (
            <IncomingOrderCard
              key={order.id}
              order={order}
              onAccept={onAccept}
              onReject={onReject}
            />
          ))}
        </div>
      )}
    </section>
  );
}
