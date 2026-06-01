import Link from "next/link";

import { DriverNav } from "@/components/driver/layout/driver-nav";
import { driverBrand } from "@/lib/driver/constants";
import { cn } from "@/lib/utils";

type DriverSidebarProps = {
  className?: string;
};

export function DriverSidebar({ className }: DriverSidebarProps) {
  return (
    <aside
      className={cn(
        "hidden h-full w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex",
        className
      )}
    >
      <div className="flex h-16 items-center gap-2.5 border-b border-sidebar-border px-5">
        <Link href="/driver" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-sm">
            A
          </span>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">{driverBrand.name}</p>
            <p className="text-xs text-muted-foreground">{driverBrand.driverLabel}</p>
          </div>
        </Link>
      </div>
      <DriverNav className="flex-1 overflow-y-auto" />
      <div className="border-t border-sidebar-border p-4">
        <p className="text-center text-[10px] text-muted-foreground">
          {driverBrand.tagline}
        </p>
      </div>
    </aside>
  );
}
