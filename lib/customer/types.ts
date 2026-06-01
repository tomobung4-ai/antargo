import type { LucideIcon } from "lucide-react";

export type FoodCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type Restaurant = {
  id: string;
  name: string;
  rating: number;
  deliveryTime: string;
  category: string;
};

export type PopularFood = {
  id: string;
  name: string;
  price: number;
  restaurantName: string;
};

export type Promotion = {
  id: string;
  title: string;
  description: string;
  cta: string;
  badge?: string;
};
