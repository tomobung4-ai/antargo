"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOutIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { driverNavItems } from "@/lib/driver/constants";
import { cn } from "@/lib/utils";

type DriverNavProps = {
  onNavigate?: () => void;
  className?: string;
};

function useHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return hash;
}

function isNavItemActive(pathname: string, hash: string, href: string): boolean {
  const [path, fragment] = href.split("#");

  if (fragment) {
    return pathname === path && hash === `#${fragment}`;
  }

  if (path === "/driver") {
    return pathname === "/driver" && hash === "";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

export function DriverNav({ onNavigate, className }: DriverNavProps) {
  const pathname = usePathname();
  const hash = useHash();

  return (
    <nav className={cn("flex flex-1 flex-col gap-1 p-3", className)}>
      <ul className="flex flex-1 flex-col gap-0.5">
        {driverNavItems.map((item) => {
          const active = isNavItemActive(pathname, hash, item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="size-5 shrink-0" />
                <span className="flex-1">{item.label}</span>
                {item.badge != null && item.badge > 0 && (
                  <Badge
                    className={cn(
                      "min-w-5 justify-center px-1.5",
                      active
                        ? "bg-white/20 text-white hover:bg-white/20"
                        : "bg-emerald-600 text-white hover:bg-emerald-600"
                    )}
                  >
                    {item.badge}
                  </Badge>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto border-t border-sidebar-border pt-3">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 px-3 text-destructive hover:bg-destructive/10 hover:text-destructive"
          asChild
        >
          <Link href="/" onClick={onNavigate}>
            <LogOutIcon className="size-5" />
            Keluar
          </Link>
        </Button>
      </div>
    </nav>
  );
}
