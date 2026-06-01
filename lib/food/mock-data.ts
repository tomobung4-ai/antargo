import type { MenuItem, Restaurant } from "@/lib/food/types";

export const restaurants: Restaurant[] = [
  {
    id: "warung-padang-sederhana",
    name: "Warung Padang Sederhana",
    coverImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=200&fit=crop",
    rating: 4.8,
    reviewCount: 1240,
    deliveryTime: "25–35 menit",
    category: "Indonesia · Nasi Padang",
  },
  {
    id: "burger-lab",
    name: "Burger Lab",
    coverImage:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop",
    rating: 4.6,
    reviewCount: 892,
    deliveryTime: "20–30 menit",
    category: "Western · Burger",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "rendang-daging",
    restaurantId: "warung-padang-sederhana",
    name: "Rendang Daging",
    description: "Daging sapi empuk dengan bumbu rendang khas Minang.",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=400&fit=crop",
    category: "makanan",
  },
  {
    id: "ayam-pop",
    restaurantId: "warung-padang-sederhana",
    name: "Ayam Pop",
    description: "Ayam kampung lembut dengan kuah kuning gurih.",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=400&fit=crop",
    category: "makanan",
  },
  {
    id: "nasi-padang-komplit",
    restaurantId: "warung-padang-sederhana",
    name: "Nasi Padang Komplit",
    description: "Nasi putih dengan rendang, telur, sayur, dan sambal.",
    price: 42000,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop",
    category: "makanan",
  },
  {
    id: "teh-talua",
    restaurantId: "warung-padang-sederhana",
    name: "Teh Talua",
    description: "Teh manis dengan kuning telur khas Padang.",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1556672327-d5c5376b8f2e?w=400&h=400&fit=crop",
    category: "minuman",
  },
  {
    id: "es-teh-manis",
    restaurantId: "warung-padang-sederhana",
    name: "Es Teh Manis",
    description: "Teh melati dingin dengan gula aren.",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1556672327-d5c5376b8f2e?w=400&h=400&fit=crop",
    category: "minuman",
  },
  {
    id: "keripik-singkong",
    restaurantId: "warung-padang-sederhana",
    name: "Keripik Singkong",
    description: "Keripik singkong renyah balado pedas.",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1613919113640-25732d5fbf69?w=400&h=400&fit=crop",
    category: "snack",
  },
  {
    id: "classic-beef-burger",
    restaurantId: "burger-lab",
    name: "Classic Beef Burger",
    description: "Patty daging sapi 150g, keju cheddar, dan saus spesial.",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    category: "makanan",
  },
  {
    id: "crispy-chicken-burger",
    restaurantId: "burger-lab",
    name: "Crispy Chicken Burger",
    description: "Ayam krispi, coleslaw, dan mayo pedas.",
    price: 38000,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=400&fit=crop",
    category: "makanan",
  },
  {
    id: "loaded-fries",
    restaurantId: "burger-lab",
    name: "Loaded Fries",
    description: "Kentang goreng dengan keju cair dan beef bits.",
    price: 32000,
    image:
      "https://images.unsplash.com/photo-1573080496219-4fa960f94976?w=400&h=400&fit=crop",
    category: "snack",
  },
  {
    id: "milkshake-vanilla",
    restaurantId: "burger-lab",
    name: "Milkshake Vanilla",
    description: "Milkshake krim vanila dengan whipped cream.",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop",
    category: "minuman",
  },
  {
    id: "iced-latte",
    restaurantId: "burger-lab",
    name: "Iced Latte",
    description: "Espresso double shot dengan susu dingin.",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1461021778943-933f6a6b0a8a?w=400&h=400&fit=crop",
    category: "minuman",
  },
];

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find((r) => r.id === id);
}

export function getMenuByRestaurantId(restaurantId: string): MenuItem[] {
  return menuItems.filter((item) => item.restaurantId === restaurantId);
}

