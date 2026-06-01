"use client";

import { bottomNavItems } from "@/components/dashboard/nav-config";

import { DashboardNavLink } from "@/components/dashboard/dashboard-nav-link";

export function DashboardBottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur-md lg:hidden"
      aria-label="Navigasi utama"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1">
        {bottomNavItems.map((item) => (
          <DashboardNavLink key={item.label} item={item} variant="bottom" />
        ))}
      </div>
    </nav>
  );
}
