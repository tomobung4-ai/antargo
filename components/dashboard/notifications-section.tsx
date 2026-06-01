import {
  BellIcon,
  GiftIcon,
  PackageIcon,
  WalletIcon,
} from "lucide-react";

import { SectionHeader } from "@/components/dashboard/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { DashboardNotification } from "@/lib/dashboard/mock-data";

const typeIcons: Record<DashboardNotification["type"], typeof BellIcon> = {
  order: PackageIcon,
  promo: GiftIcon,
  wallet: WalletIcon,
  system: BellIcon,
};

const typeColors: Record<DashboardNotification["type"], string> = {
  order: "bg-emerald-100 text-emerald-700",
  promo: "bg-orange-100 text-orange-700",
  wallet: "bg-blue-100 text-blue-700",
  system: "bg-muted text-muted-foreground",
};

type NotificationsSectionProps = {
  notifications: DashboardNotification[];
};

export function NotificationsSection({
  notifications,
}: NotificationsSectionProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <section
      id="notifications"
      className="scroll-mt-24"
      aria-labelledby="notifications-heading"
    >
      <SectionHeader
        id="notifications-heading"
        title="Notifikasi"
        description={
          unreadCount > 0
            ? `${unreadCount} belum dibaca`
            : "Semua sudah dibaca"
        }
        actionLabel="Atur"
        actionHref="/dashboard#settings"
      />

      <div className="mt-4 space-y-2">
        {notifications.map((notification) => {
          const Icon = typeIcons[notification.type];

          return (
            <Card
              key={notification.id}
              size="sm"
              className={cn(
                "transition-colors",
                !notification.read && "border-primary/20 bg-primary/[0.03]"
              )}
            >
              <CardContent className="flex gap-3">
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-xl",
                    typeColors[notification.type]
                  )}
                >
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium leading-snug">
                      {notification.title}
                    </p>
                    {!notification.read ? (
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                    ) : null}
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {notification.message}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Button variant="ghost" className="mt-2 w-full" size="sm">
        Tandai semua dibaca
      </Button>
    </section>
  );
}
