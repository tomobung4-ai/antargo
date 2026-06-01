import { BellIcon, MapPinIcon, SearchIcon } from "lucide-react";

import { UserAvatar } from "@/components/dashboard/user-avatar";
import { Button } from "@/components/ui/button";
import { placeholderUser } from "@/lib/dashboard/mock-data";

export function DashboardTopNav() {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur-md sm:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-2 lg:max-w-md">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground lg:hidden">
          A
        </div>
        <div className="hidden min-w-0 sm:block">
          <p className="truncate text-xs text-muted-foreground">Lokasi saat ini</p>
          <p className="inline-flex items-center gap-1 truncate text-sm font-medium">
            <MapPinIcon className="size-3.5 shrink-0 text-primary" />
            Jakarta Selatan
          </p>
        </div>
      </div>

      <div className="hidden flex-1 items-center justify-center md:flex">
        <div className="flex h-9 w-full max-w-md items-center gap-2 rounded-xl border bg-muted/40 px-3 text-sm text-muted-foreground">
          <SearchIcon className="size-4 shrink-0" />
          <span>Cari layanan, restoran, atau toko...</span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        <Button variant="ghost" size="icon" className="relative" asChild>
          <a href="/dashboard#notifications" aria-label="Notifikasi">
            <BellIcon />
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-destructive ring-2 ring-background" />
          </a>
        </Button>
        <UserAvatar
          name={placeholderUser.name}
          initials={placeholderUser.initials}
          className="size-9"
        />
      </div>
    </header>
  );
}
