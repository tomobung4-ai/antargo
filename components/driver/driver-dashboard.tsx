"use client";

import { useCallback, useState } from "react";

import { DriverProfileCard } from "@/components/driver/driver-profile-card";
import { EarningsCard } from "@/components/driver/earnings-card";
import { IncomingOrdersSection } from "@/components/driver/incoming-orders-section";
import { OnlineStatusToggle } from "@/components/driver/online-status-toggle";
import { OrdersSummary } from "@/components/driver/orders-summary";
import { RecentTripsList } from "@/components/driver/recent-trips-list";
import { DriverShell } from "@/components/driver/layout/driver-shell";
import {
  mockDriver,
  mockIncomingOrders,
  mockOrderStats,
  mockRecentTrips,
  mockTodayEarnings,
} from "@/lib/driver/mock-data";
import type { IncomingOrder } from "@/lib/driver/types";

export function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(true);
  const [incomingOrders, setIncomingOrders] =
    useState<IncomingOrder[]>(mockIncomingOrders);
  const [orderStats, setOrderStats] = useState(mockOrderStats);

  const handleAccept = useCallback((orderId: string) => {
    setIncomingOrders((prev) => prev.filter((o) => o.id !== orderId));
    setOrderStats((prev) => ({
      ...prev,
      active: prev.active + 1,
    }));
  }, []);

  const handleReject = useCallback((orderId: string) => {
    setIncomingOrders((prev) => prev.filter((o) => o.id !== orderId));
    setOrderStats((prev) => ({
      ...prev,
      cancelled: prev.cancelled + 1,
    }));
  }, []);

  return (
    <DriverShell title="Dashboard" isOnline={isOnline}>
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <DriverProfileCard driver={mockDriver} isOnline={isOnline} />
            <OnlineStatusToggle
              isOnline={isOnline}
              onToggle={setIsOnline}
            />
          </div>
          <div className="space-y-4">
            <EarningsCard amount={mockTodayEarnings} />
          </div>
        </div>

        <OrdersSummary stats={orderStats} />

        <IncomingOrdersSection
          orders={incomingOrders}
          onAccept={handleAccept}
          onReject={handleReject}
          isOnline={isOnline}
        />

        <RecentTripsList trips={mockRecentTrips} />
      </div>
    </DriverShell>
  );
}
