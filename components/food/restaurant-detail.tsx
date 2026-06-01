"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { CategoryTabs } from "@/components/food/category-tabs";
import { MenuItemCard } from "@/components/food/menu-item-card";
import { RestaurantHeader } from "@/components/food/restaurant-header";
import { StickyCartBar } from "@/components/food/sticky-cart-bar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/food/cart-context";
import type { MenuCategory, MenuItem, Restaurant } from "@/lib/food/types";

export function RestaurantDetail({
  restaurant,
  menu,
}: {
  restaurant: Restaurant;
  menu: MenuItem[];
}) {
  const { totalItems } = useCart();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("makanan");

  const counts = useMemo(
    () =>
      menu.reduce(
        (acc, item) => {
          acc[item.category] += 1;
          return acc;
        },
        { makanan: 0, minuman: 0, snack: 0 } as Record<MenuCategory, number>
      ),
    [menu]
  );

  const filteredMenu = useMemo(
    () => menu.filter((item) => item.category === activeCategory),
    [menu, activeCategory]
  );

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="relative">
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 left-4 z-10 size-9 rounded-full bg-background/90 shadow-sm backdrop-blur"
          asChild
        >
          <Link href="/" aria-label="Kembali">
            <ArrowLeftIcon />
          </Link>
        </Button>
        <RestaurantHeader restaurant={restaurant} />
      </div>

      <main className="mx-auto max-w-lg sm:max-w-2xl">
        <section className="px-4 sm:px-6">
          <CategoryTabs
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
          <ul className="mt-4 flex flex-col gap-3">
            {filteredMenu.length === 0 ? (
              <li className="py-8 text-center text-sm text-muted-foreground">
                Belum ada menu di kategori ini.
              </li>
            ) : (
              filteredMenu.map((item) => (
                <li key={item.id}>
                  <MenuItemCard item={item} />
                </li>
              ))
            )}
          </ul>
        </section>
      </main>

      <StickyCartBar />
      {totalItems > 0 && <div className="h-4" aria-hidden />}
    </div>
  );
}

