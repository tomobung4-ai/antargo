"use client";

import { DriverSidebar } from "@/components/driver/layout/driver-sidebar";
import { DriverTopbar } from "@/components/driver/layout/driver-topbar";
type DriverShellProps = {
  children: React.ReactNode;
  title?: string;
  isOnline?: boolean;
};

export function DriverShell({
  children,
  title,
  isOnline,
}: DriverShellProps) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <DriverSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DriverTopbar title={title} isOnline={isOnline} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
