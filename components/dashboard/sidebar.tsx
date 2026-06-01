"use client";

import Link from "next/link";

import { DashboardNavLink } from "@/components/dashboard/dashboard-nav-link";
import {
  sidebarFooterNavItems,
  sidebarNavItems,
} from "@/components/dashboard/nav-config";

export function DashboardSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <div className="flex h-16 items-center gap-2.5 border-b border-sidebar-border px-5">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            A
          </span>
          <span className="text-lg font-semibold tracking-tight text-sidebar-foreground">
            Antargo
          </span>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-3">
        {sidebarNavItems.map((item) => (
          <DashboardNavLink key={item.label} item={item} variant="sidebar" />
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        {sidebarFooterNavItems.map((item) => (
          <DashboardNavLink key={item.label} item={item} variant="sidebar" />
        ))}
      </div>
    </aside>
  );
}
