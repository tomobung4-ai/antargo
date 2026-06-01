import { CarIcon, StarIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatRating } from "@/lib/driver/format";
import type { DriverProfile } from "@/lib/driver/types";
import { cn } from "@/lib/utils";

type DriverProfileCardProps = {
  driver: DriverProfile;
  isOnline: boolean;
  className?: string;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function DriverProfileCard({
  driver,
  isOnline,
  className,
}: DriverProfileCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden border-0 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-md ring-0",
        className
      )}
    >
      <CardContent className="relative pt-1">
        <div className="absolute -right-6 -top-6 size-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-8 right-8 size-24 rounded-full bg-white/5" />

        <div className="relative flex items-start gap-4">
          <div className="relative">
            <Avatar size="lg" className="size-16 ring-2 ring-white/30">
              <AvatarFallback className="bg-emerald-800 text-lg font-semibold text-white">
                {getInitials(driver.name)}
              </AvatarFallback>
            </Avatar>
            <span
              className={cn(
                "absolute bottom-0 right-0 size-4 rounded-full border-2 border-emerald-700",
                isOnline ? "bg-lime-400" : "bg-zinc-400"
              )}
              aria-hidden
            />
          </div>

          <div className="min-w-0 flex-1 pt-1">
            <p className="text-xs font-medium text-emerald-100">Driver Partner</p>
            <h2 className="truncate text-lg font-semibold">{driver.name}</h2>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge className="border-0 bg-white/20 text-white hover:bg-white/20">
                <CarIcon className="size-3" />
                {driver.vehicle}
              </Badge>
              <span className="text-xs text-emerald-100">{driver.plateNumber}</span>
            </div>
          </div>
        </div>

        <div className="relative mt-4 flex items-center justify-between rounded-xl bg-white/15 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <StarIcon className="size-5 fill-amber-300 text-amber-300" />
            <div>
              <p className="text-lg font-bold leading-none">
                {formatRating(driver.rating)}
              </p>
              <p className="text-xs text-emerald-100">Rating</p>
            </div>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="text-right">
            <p className="text-lg font-bold leading-none tabular-nums">
              {driver.totalTrips.toLocaleString("id-ID")}
            </p>
            <p className="text-xs text-emerald-100">Total trip</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
