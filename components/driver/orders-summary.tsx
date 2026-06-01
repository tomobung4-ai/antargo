import {
  BanIcon,
  CheckCircle2Icon,
  ClockIcon,
} from "lucide-react";

import { StatCard } from "@/components/driver/stat-card";
import type { OrderStats } from "@/lib/driver/types";
import { cn } from "@/lib/utils";

type OrdersSummaryProps = {
  stats: OrderStats;
  className?: string;
};

export function OrdersSummary({ stats, className }: OrdersSummaryProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-sm font-semibold">Ringkasan Pesanan</h3>
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard
          label="Selesai"
          value={stats.completed}
          icon={CheckCircle2Icon}
          iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
          valueClassName="text-emerald-700 dark:text-emerald-400"
        />
        <StatCard
          label="Aktif"
          value={stats.active}
          icon={ClockIcon}
          iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
          valueClassName="text-amber-700 dark:text-amber-400"
        />
        <StatCard
          label="Dibatalkan"
          value={stats.cancelled}
          icon={BanIcon}
          iconClassName="bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400"
          valueClassName="text-red-600 dark:text-red-400"
        />
      </div>
    </div>
  );
}
