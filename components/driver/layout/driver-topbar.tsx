"use client";

import { useState } from "react";
import { BellIcon, MenuIcon } from "lucide-react";

import { DriverNav } from "@/components/driver/layout/driver-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { driverBrand } from "@/lib/driver/constants";
import { cn } from "@/lib/utils";

type DriverTopbarProps = {
  title?: string;
  isOnline?: boolean;
  className?: string;
};

export function DriverTopbar({
  title = "Dashboard",
  isOnline = false,
  className,
}: DriverTopbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80 sm:px-6",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Buka menu"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0" showCloseButton>
            <SheetHeader className="border-b px-5 py-4 text-left">
              <SheetTitle className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
                  A
                </span>
                {driverBrand.name} {driverBrand.driverLabel}
              </SheetTitle>
            </SheetHeader>
            <DriverNav
              className="px-0"
              onNavigate={() => setMenuOpen(false)}
            />
          </SheetContent>
        </Sheet>

        <div>
          <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
          <p className="hidden text-xs text-muted-foreground sm:block">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Badge
          variant="outline"
          className={cn(
            "hidden gap-1.5 sm:inline-flex",
            isOnline
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "text-muted-foreground"
          )}
        >
          <span
            className={cn(
              "size-2 rounded-full",
              isOnline ? "animate-pulse bg-emerald-500" : "bg-zinc-400"
            )}
          />
          {isOnline ? "Online" : "Offline"}
        </Badge>
        <Button variant="outline" size="icon" className="relative" aria-label="Notifikasi">
          <BellIcon />
          <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
            3
          </span>
        </Button>
      </div>
    </header>
  );
}
