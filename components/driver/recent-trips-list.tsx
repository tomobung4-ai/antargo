import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/driver/format";
import type { RecentTrip } from "@/lib/driver/types";
import { cn } from "@/lib/utils";

type RecentTripsListProps = {
  trips: RecentTrip[];
  className?: string;
};

export function RecentTripsList({ trips, className }: RecentTripsListProps) {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-semibold">Perjalanan Terbaru</CardTitle>
        <Button variant="ghost" size="sm" className="h-8 text-primary" asChild>
          <Link href="/driver/trips">
            Lihat semua
            <ArrowRightIcon />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-0 divide-y p-0">
        {trips.map((trip, index) => (
          <div
            key={trip.id}
            className={cn(
              "flex items-center justify-between gap-3 px-4 py-3",
              index === 0 && "pt-0"
            )}
          >
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{trip.customerName}</p>
              <p className="truncate text-xs text-muted-foreground">{trip.route}</p>
            </div>
            <div className="shrink-0 text-right">
              <p
                className={cn(
                  "font-semibold tabular-nums",
                  trip.status === "cancelled" && "text-muted-foreground line-through"
                )}
              >
                {formatCurrency(trip.fare)}
              </p>
              <div className="mt-0.5 flex items-center justify-end gap-2">
                <span className="text-xs text-muted-foreground">{trip.completedAt}</span>
                <Badge
                  variant={trip.status === "completed" ? "secondary" : "outline"}
                  className={cn(
                    "text-[10px] px-1.5 py-0",
                    trip.status === "completed" &&
                      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                  )}
                >
                  {trip.status === "completed" ? "Selesai" : "Batal"}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
