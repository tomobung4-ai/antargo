import { BellIcon, MapPinIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CustomerHeaderProps = {
  className?: string;
};

export function CustomerHeader({ className }: CustomerHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className
      )}
    >
      <div className="mx-auto flex max-w-3xl items-start justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0 space-y-0.5">
          <p className="text-xs text-muted-foreground">Antar ke</p>
          <button
            type="button"
            className="inline-flex max-w-full items-center gap-1.5 text-left font-semibold transition-colors hover:text-primary"
          >
            <MapPinIcon className="size-4 shrink-0 text-primary" aria-hidden />
            <span className="truncate">Jl. Sudirman No. 45, Jakarta Pusat</span>
          </button>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Notifikasi">
            <BellIcon />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Keranjang" asChild>
            <Link href="#">
              <ShoppingBagIcon />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
