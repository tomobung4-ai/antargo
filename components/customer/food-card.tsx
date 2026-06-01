import { UtensilsIcon } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/customer/constants";
import type { PopularFood } from "@/lib/customer/types";
import { cn } from "@/lib/utils";

type FoodCardProps = {
  food: PopularFood;
  className?: string;
  href?: string;
};

export function FoodCard({ food, className, href = "#" }: FoodCardProps) {
  return (
    <Link href={href} className={cn("group block shrink-0 snap-start", className)}>
      <Card
        size="sm"
        className="w-[8.5rem] gap-0 overflow-hidden py-0 ring-foreground/8 transition-shadow group-hover:shadow-md sm:w-36"
      >
        <div
          className="relative flex aspect-square w-full items-center justify-center bg-gradient-to-br from-orange-100 via-muted to-amber-50 dark:from-orange-950/40 dark:to-amber-950/20"
          role="img"
          aria-label={`Gambar ${food.name}`}
        >
          <UtensilsIcon className="size-8 text-orange-400/60" aria-hidden />
        </div>
        <CardContent className="space-y-1 py-2.5">
          <h3 className="line-clamp-2 text-sm font-medium leading-snug">
            {food.name}
          </h3>
          <p className="text-sm font-semibold text-primary">
            {formatPrice(food.price)}
          </p>
          <p className="line-clamp-1 text-xs text-muted-foreground">
            {food.restaurantName}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
