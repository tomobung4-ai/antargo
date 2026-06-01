import Image from "next/image";
import { ClockIcon, StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Restaurant } from "@/lib/food/types";

export function RestaurantHeader({ restaurant }: { restaurant: Restaurant }) {
  return (
    <header className="relative">
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted sm:aspect-[3/1]">
        <Image
          src={restaurant.coverImage}
          alt={`Sampul ${restaurant.name}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, 640px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-lg px-4 pb-4 sm:max-w-2xl sm:px-6">
        <div className="-mt-10 flex gap-4 sm:-mt-12">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl border-4 border-background bg-card shadow-md sm:size-24">
            <Image
              src={restaurant.logo}
              alt={`Logo ${restaurant.name}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div className="min-w-0 flex-1 pt-2 sm:pt-3">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {restaurant.name}
            </h1>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {restaurant.category}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <StarIcon className="fill-amber-500 text-amber-500" />
                {restaurant.rating.toFixed(1)}
                <span className="font-normal text-muted-foreground">
                  ({restaurant.reviewCount.toLocaleString("id-ID")})
                </span>
              </Badge>
              <Badge variant="outline" className="gap-1">
                <ClockIcon />
                {restaurant.deliveryTime}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

