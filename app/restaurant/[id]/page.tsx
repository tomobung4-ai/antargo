import { notFound } from "next/navigation";

import { RestaurantDetail } from "@/components/food/restaurant-detail";
import { getMenuByRestaurantId, getRestaurantById } from "@/lib/food/mock-data";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const restaurant = getRestaurantById(id);

  if (!restaurant) notFound();

  const menu = getMenuByRestaurantId(restaurant.id);
  return <RestaurantDetail restaurant={restaurant} menu={menu} />;
}

