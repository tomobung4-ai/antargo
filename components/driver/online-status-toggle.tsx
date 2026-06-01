"use client";

import { PowerIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type OnlineStatusToggleProps = {
  isOnline: boolean;
  onToggle: (online: boolean) => void;
  className?: string;
};

export function OnlineStatusToggle({
  isOnline,
  onToggle,
  className,
}: OnlineStatusToggleProps) {
  return (
    <Card
      className={cn(
        "shadow-sm transition-colors",
        isOnline
          ? "border-emerald-200 bg-emerald-50/80 dark:border-emerald-900 dark:bg-emerald-950/30"
          : "border-border",
        className
      )}
    >
      <CardContent className="flex items-center justify-between gap-4 py-0">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex size-11 items-center justify-center rounded-xl transition-colors",
              isOnline
                ? "bg-emerald-500 text-white"
                : "bg-muted text-muted-foreground"
            )}
          >
            <PowerIcon className="size-5" />
          </div>
          <div>
            <p className="font-medium">
              {isOnline ? "Anda sedang online" : "Anda sedang offline"}
            </p>
            <p className="text-xs text-muted-foreground">
              {isOnline
                ? "Siap menerima pesanan baru"
                : "Aktifkan untuk mulai menerima pesanan"}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Switch
            checked={isOnline}
            onCheckedChange={onToggle}
            aria-label={isOnline ? "Matikan status online" : "Aktifkan status online"}
          />
          <span
            className={cn(
              "text-xs font-medium",
              isOnline ? "text-emerald-600" : "text-muted-foreground"
            )}
          >
            {isOnline ? "ONLINE" : "OFFLINE"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
