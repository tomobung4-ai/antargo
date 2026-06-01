import {
  featuredRestaurants,
  foodCategories,
  nearbyRestaurants,
  popularFoods,
  promotions,
} from "@/lib/customer/constants";
import { CustomerHeader } from "@/components/customer/customer-header";
import { FoodCard } from "@/components/customer/food-card";
import { FoodCategories, FoodCategoriesGrid } from "@/components/customer/food-categories";
import { HorizontalScroll } from "@/components/customer/horizontal-scroll";
import { PromotionsBanner } from "@/components/customer/promotions-banner";
import { RestaurantCard, RestaurantCardWide } from "@/components/customer/restaurant-card";
import { SearchBar } from "@/components/customer/search-bar";
import { SectionHeader } from "@/components/customer/section-header";

export default function CustomerHomePage() {
  return (
    <div className="min-h-screen bg-background pb-8">
      <CustomerHeader />

      <main className="mx-auto max-w-3xl space-y-6 px-4 pt-4 sm:px-6 sm:space-y-8 sm:pt-6">
        <section className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Mau makan apa hari ini?
          </h1>
          <p className="text-sm text-muted-foreground">
            Pesan dari ratusan restoran di sekitar Anda.
          </p>
        </section>

        <SearchBar />

        <section className="space-y-3">
          <SectionHeader title="Kategori" href="#" actionLabel="Semua" />
          <div className="sm:hidden">
            <FoodCategories categories={foodCategories} />
          </div>
          <div className="hidden sm:block">
            <FoodCategoriesGrid categories={foodCategories} />
          </div>
        </section>

        <section>
          <PromotionsBanner promotions={promotions} />
        </section>

        <section className="space-y-3">
          <SectionHeader title="Restoran unggulan" href="#" />
          <HorizontalScroll>
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </HorizontalScroll>
        </section>

        <section className="space-y-3">
          <SectionHeader title="Makanan populer" href="#" />
          <HorizontalScroll gap="sm">
            {popularFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </HorizontalScroll>
        </section>

        <section className="space-y-3">
          <SectionHeader title="Restoran terdekat" href="#" />
          <div className="space-y-3">
            {nearbyRestaurants.map((restaurant) => (
              <RestaurantCardWide key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
