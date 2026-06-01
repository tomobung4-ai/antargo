import { ClockIcon, StarIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Restaurant } from "@/lib/customer/types";
import { cn } from "@/lib/utils";

import { RestaurantImagePlaceholder } from "./restaurant-image-placeholder";

type RestaurantCardProps = {
  restaurant: Restaurant;
  className?: string;
  href?: string;
};

export function RestaurantCard({
  restaurant,
  className,
  href = "#",
}: RestaurantCardProps) {
  return (
    <Link href={href} className={cn("group block shrink-0 snap-start", className)}>
      <Card
        size="sm"
        className="w-[11.5rem] gap-0 overflow-hidden py-0 ring-foreground/8 transition-shadow group-hover:shadow-md sm:w-60"
      >
        <RestaurantImagePlaceholder />
        <CardContent className="space-y-2 py-3">
          <div className="space-y-1">
            <h3 className="line-clamp-1 font-semibold leading-snug">
              {restaurant.name}
            </h3>
            <Badge variant="secondary" className="font-normal">
              {restaurant.category}
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 font-medium text-foreground">
              <StarIcon className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
              {restaurant.rating.toFixed(1)}
            </span>
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="size-3.5" aria-hidden />
              {restaurant.deliveryTime}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function RestaurantCardWide({
  restaurant,
  className,
  href = "#",
}: RestaurantCardProps) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <Card className="flex-row gap-0 overflow-hidden py-0 ring-foreground/8 transition-shadow group-hover:shadow-md">
        <RestaurantImagePlaceholder className="aspect-square w-28 shrink-0 sm:w-32" />
        <CardContent className="flex flex-1 flex-col justify-center gap-2 py-3">
          <div className="space-y-1">
            <h3 className="line-clamp-1 font-semibold leading-snug">
              {restaurant.name}
            </h3>
            <Badge variant="secondary" className="font-normal">
              {restaurant.category}
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 font-medium text-foreground">
              <StarIcon className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
              {restaurant.rating.toFixed(1)}
            </span>
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="size-3.5" aria-hidden />
              {restaurant.deliveryTime}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
