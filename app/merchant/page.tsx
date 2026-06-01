import { DashboardHeader } from "@/components/merchant/dashboard-header";
import { StatsCards } from "@/components/merchant/stats-cards";
import { RecentOrders } from "@/components/merchant/recent-orders";
import { QuickActions } from "@/components/merchant/quick-actions";

import { merchantInfo } from "@/lib/mock-merchant";

export default function MerchantPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 p-4 pb-10">
      <DashboardHeader
        restaurantName={merchantInfo.restaurantName}
        isOnline={merchantInfo.isOnline}
      />

      <StatsCards />

      <QuickActions />

      <RecentOrders />
    </main>
  );
}