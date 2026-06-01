import { WelcomeCard } from "@/components/dashboard/welcome-card";
import { ServiceShortcuts } from "@/components/dashboard/service-shortcuts";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { WalletCard } from "@/components/dashboard/wallet-card";
import { PromotionsSection } from "@/components/dashboard/promotions-section";
import { NotificationsSection } from "@/components/dashboard/notifications-section";
import {
  dashboardNotifications,
  placeholderUser,
  promotions,
  recentOrders,
  walletBalance,
} from "@/lib/dashboard/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeCard
        userName={placeholderUser.name}
        initials={placeholderUser.initials}
      />

      <ServiceShortcuts />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-6">
        <div className="space-y-8 lg:col-span-3">
          <RecentOrders orders={recentOrders} />
          <PromotionsSection promotions={promotions} />
        </div>

        <div className="space-y-8 lg:col-span-2">
          <WalletCard balance={walletBalance} />
          <NotificationsSection notifications={dashboardNotifications} />
        </div>
      </div>
    </div>
  );
}
