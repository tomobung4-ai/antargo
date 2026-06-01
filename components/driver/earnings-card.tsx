import { TrendingUpIcon, WalletIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/driver/format";
import { cn } from "@/lib/utils";

type EarningsCardProps = {
  amount: number;
  changePercent?: number;
  className?: string;
};

export function EarningsCard({
  amount,
  changePercent = 12,
  className,
}: EarningsCardProps) {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Pendapatan Hari Ini
          </CardTitle>
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <WalletIcon className="size-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold tracking-tight tabular-nums">
          {formatCurrency(amount)}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-sm">
          <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            <TrendingUpIcon className="size-3" />
            +{changePercent}%
          </span>
          <span className="text-muted-foreground">vs kemarin</span>
        </div>
      </CardContent>
    </Card>
  );
}
