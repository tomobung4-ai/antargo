import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: number | string;
  icon: LucideIcon;
  iconClassName?: string;
  valueClassName?: string;
};

export function StatCard({
  label,
  value,
  icon: Icon,
  iconClassName,
  valueClassName,
}: StatCardProps) {
  return (
    <Card size="sm" className="shadow-sm">
      <CardContent className="flex items-center gap-3 py-0">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl",
            iconClassName ?? "bg-primary/10 text-primary"
          )}
        >
          <Icon className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-muted-foreground">{label}</p>
          <p
            className={cn(
              "text-xl font-semibold tracking-tight tabular-nums",
              valueClassName
            )}
          >
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
