"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { DashboardNavItem } from "@/components/dashboard/nav-config";

type DashboardNavLinkProps = {
  item: DashboardNavItem;
  variant?: "sidebar" | "bottom";
  onNavigate?: () => void;
};

export function DashboardNavLink({
  item,
  variant = "sidebar",
  onNavigate,
}: DashboardNavLinkProps) {
  const pathname = usePathname();
  const isHashLink = item.href.includes("#");
  const basePath = isHashLink ? item.href.split("#")[0] : item.href;
  const isActive =
    item.href === "/dashboard"
      ? pathname === "/dashboard" && !isHashLink
      : pathname === basePath && isHashLink;

  const Icon = item.icon;

  if (variant === "bottom") {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "relative flex min-w-0 flex-1 flex-col items-center gap-1 px-1 py-2 text-[0.65rem] font-medium transition-colors",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
      >
        <span className="relative">
          <Icon className="size-5" />
          {item.badge ? (
            <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-destructive text-[0.55rem] font-bold text-white">
              {item.badge > 9 ? "9+" : item.badge}
            </span>
          ) : null}
        </span>
        <span className="truncate">{item.label}</span>
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
    >
      <Icon className="size-[1.125rem] shrink-0" />
      <span className="flex-1">{item.label}</span>
      {item.badge ? (
        <Badge variant="default" className="size-5 min-w-5 justify-center px-0">
          {item.badge}
        </Badge>
      ) : null}
    </Link>
  );
}
