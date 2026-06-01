import { PackageOpenIcon } from "lucide-react";

import { SectionHeader } from "@/components/dashboard/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Order, OrderStatus } from "@/lib/dashboard/mock-data";

const statusLabels: Record<OrderStatus, string> = {
  completed: "Selesai",
  in_progress: "Dalam perjalanan",
  cancelled: "Dibatalkan",
};

const statusVariants: Record<
  OrderStatus,
  "default" | "secondary" | "destructive"
> = {
  completed: "secondary",
  in_progress: "default",
  cancelled: "destructive",
};

const serviceColors: Record<Order["service"], string> = {
  Ride: "bg-emerald-100 text-emerald-800",
  Food: "bg-orange-100 text-orange-800",
  Send: "bg-blue-100 text-blue-800",
  Mart: "bg-violet-100 text-violet-800",
};

type RecentOrdersProps = {
  orders: Order[];
};

function OrdersEmptyState() {
  return (
    <Card className="border-dashed py-10">
      <CardContent className="flex flex-col items-center text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-muted">
          <PackageOpenIcon className="size-7 text-muted-foreground" />
        </span>
        <h3 className="mt-4 font-semibold">Belum ada pesanan</h3>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Riwayat Ride, Food, Send, dan Mart akan muncul di sini setelah Anda
          memesan.
        </p>
        <Button className="mt-5" size="sm">
          Jelajahi layanan
        </Button>
      </CardContent>
    </Card>
  );
}

function OrderCard({ order }: { order: Order }) {
  return (
    <Card size="sm" className="transition-shadow hover:shadow-md">
      <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "rounded-md px-2 py-0.5 text-xs font-semibold",
                serviceColors[order.service]
              )}
            >
              {order.service}
            </span>
            <Badge variant={statusVariants[order.status]}>
              {statusLabels[order.status]}
            </Badge>
          </div>
          <p className="mt-2 font-medium">{order.title}</p>
          <p className="mt-0.5 truncate text-sm text-muted-foreground">
            {order.destination}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {order.date} · {order.id}
          </p>
        </div>
        <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
          <p className="text-base font-semibold tabular-nums">{order.amount}</p>
          <Button variant="outline" size="sm">
            Detail
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <section id="orders" className="scroll-mt-24" aria-labelledby="orders-heading">
      <SectionHeader
        id="orders-heading"
        title="Pesanan terbaru"
        description="Riwayat aktivitas Anda"
        actionLabel="Lihat semua"
        actionHref="/dashboard#orders"
      />

      <div className="mt-4 space-y-3">
        {orders.length === 0 ? (
          <OrdersEmptyState />
        ) : (
          orders.map((order) => <OrderCard key={order.id} order={order} />)
        )}
      </div>
    </section>
  );
}
