"use client";

import { useMemo, useState } from "react";

import OrderCard from "./order-card";
import EmptyState from "./empty-state";
import OrderFilter, {
  OrderFilterType,
} from "./order-filter";

import { Order } from "@/lib/mock-orders";

type Props = {
  orders: Order[];
};

export default function OrderList({
  orders,
}: Props) {
  const [filter, setFilter] =
    useState<OrderFilterType>("all");

  const filteredOrders = useMemo(() => {
    if (filter === "all") {
      return orders;
    }

    return orders.filter(
      (order) => order.status === filter
    );
  }, [orders, filter]);

  return (
    <div className="space-y-4">
      <OrderFilter
        activeFilter={filter}
        onChange={setFilter}
      />

      {filteredOrders.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
            />
          ))}
        </div>
      )}
    </div>
  );
}