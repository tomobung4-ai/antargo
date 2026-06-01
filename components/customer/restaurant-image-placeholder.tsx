import { StoreIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type RestaurantImagePlaceholderProps = {
  className?: string;
  label?: string;
};

export function RestaurantImagePlaceholder({
  className,
  label = "Gambar restoran",
}: RestaurantImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-muted to-primary/5",
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.72_0.12_155/0.25),transparent_55%)]" />
      <StoreIcon className="relative size-10 text-primary/40" aria-hidden />
    </div>
  );
}
