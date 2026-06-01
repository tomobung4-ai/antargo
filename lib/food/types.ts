export type MenuCategory = "makanan" | "minuman" | "snack";

export const MENU_CATEGORY_LABELS: Record<MenuCategory, string> = {
  makanan: "Makanan",
  minuman: "Minuman",
  snack: "Snack",
};

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
}

export interface Restaurant {
  id: string;
  name: string;
  coverImage: string;
  logo: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  category: string;
}

export interface CartLineItem {
  menuItem: MenuItem;
  quantity: number;
}
