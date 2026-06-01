import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Wallet, UtensilsCrossed, Clock3 } from "lucide-react";
import { merchantStats } from "@/lib/mock-merchant";

export function StatsCards() {
  const stats = [
    {
      title: "Pesanan Hari Ini",
      value: merchantStats.totalOrders,
      icon: ShoppingBag,
    },
    {
      title: "Pendapatan",
      value: `Rp ${merchantStats.revenue.toLocaleString("id-ID")}`,
      icon: Wallet,
    },
    {
      title: "Menu Aktif",
      value: merchantStats.activeMenus,
      icon: UtensilsCrossed,
    },
    {
      title: "Pending",
      value: merchantStats.pendingOrders,
      icon: Clock3,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((item) => (
        <Card key={item.title}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <item.icon className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="mt-3">
              <p className="text-xs text-muted-foreground">
                {item.title}
              </p>

              <h3 className="mt-1 text-lg font-bold">
                {item.value}
              </h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}