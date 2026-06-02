"use client";

import { useMemo, useState } from "react";

import {
  useOrderStore,
  Order,
  OrderStatus,
} from "@/lib/store/order-store";

import {
  OrdersHeader,
} from "@/components/merchant-orders/orders-header";

import {
  OrdersTabs,
  OrderFilter,
} from "@/components/merchant-orders/orders-tabs";

import {
  OrderCard,
} from "@/components/merchant-orders/order-card";

import {
  OrderDetailDialog,
} from "@/components/merchant-orders/order-detail-dialog";

export default function MerchantOrdersPage() {
  const orders = useOrderStore(
    (state) => state.orders
  );

  const updateOrderStatus =
    useOrderStore(
      (state) => state.updateOrderStatus
    );

  const [filter, setFilter] =
    useState<OrderFilter>("all");

  const [selectedOrder, setSelectedOrder] =
    useState<Order | null>(null);

  const [detailOpen, setDetailOpen] =
    useState(false);

  const statistics = useMemo(() => {
    return {
      newOrders: orders.filter(
        (o) => o.status === "new"
      ).length,

      preparingOrders: orders.filter(
        (o) =>
          o.status === "accepted" ||
          o.status === "preparing"
      ).length,

      readyOrders: orders.filter(
        (o) => o.status === "ready"
      ).length,

      completedOrders: orders.filter(
        (o) => o.status === "completed"
      ).length,
    };
  }, [orders]);

  const filteredOrders = useMemo(() => {
    if (filter === "all") {
      return orders;
    }

    return orders.filter(
      (order) =>
        order.status === filter
    );
  }, [orders, filter]);

  const handleViewDetail = (
    order: Order
  ) => {
    setSelectedOrder(order);
    setDetailOpen(true);
  };

  const handleStatusChange = (
    orderId: string,
    status: OrderStatus
  ) => {
    updateOrderStatus(
      orderId,
      status
    );

    if (
      selectedOrder &&
      selectedOrder.id === orderId
    ) {
      setSelectedOrder({
        ...selectedOrder,
        status,
      });
    }
  };

  return (
    <main className="mx-auto max-w-7xl space-y-6 p-4 pb-10">
      <OrdersHeader
        newOrders={statistics.newOrders}
        preparingOrders={
          statistics.preparingOrders
        }
        readyOrders={
          statistics.readyOrders
        }
        completedOrders={
          statistics.completedOrders
        }
      />

      <OrdersTabs
        value={filter}
        onChange={setFilter}
      />

      {filteredOrders.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center">
          <p className="font-medium">
            Tidak ada pesanan
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Belum ada pesanan pada status ini.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {filteredOrders.map(
            (order) => (
              <OrderCard
                key={order.id}
                order={order}
                onViewDetail={
                  handleViewDetail
                }
                onStatusChange={
                  handleStatusChange
                }
              />
            )
          )}
        </div>
      )}

      <OrderDetailDialog
        order={selectedOrder}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </main>
  );
}