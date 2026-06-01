import {
  BeefIcon,
  CakeSliceIcon,
  CoffeeIcon,
  DrumstickIcon,
  FishIcon,
  PizzaIcon,
  SaladIcon,
  SoupIcon,
} from "lucide-react";

import type {
  FoodCategory,
  PopularFood,
  Promotion,
  Restaurant,
} from "@/lib/customer/types";

export const foodCategories: FoodCategory[] = [
  { id: "nasi", label: "Nasi", icon: SoupIcon },
  { id: "mie", label: "Mie", icon: SaladIcon },
  { id: "ayam", label: "Ayam", icon: DrumstickIcon },
  { id: "pizza", label: "Pizza", icon: PizzaIcon },
  { id: "seafood", label: "Seafood", icon: FishIcon },
  { id: "daging", label: "Daging", icon: BeefIcon },
  { id: "minuman", label: "Minuman", icon: CoffeeIcon },
  { id: "dessert", label: "Dessert", icon: CakeSliceIcon },
];

export const featuredRestaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Warung Bu Siti",
    rating: 4.8,
    deliveryTime: "15–25 mnt",
    category: "Masakan Padang",
  },
  {
    id: "r2",
    name: "Bakmi Jaya Abadi",
    rating: 4.7,
    deliveryTime: "20–30 mnt",
    category: "Mie & Bakso",
  },
  {
    id: "r3",
    name: "Ayam Geprek Pak Budi",
    rating: 4.9,
    deliveryTime: "10–20 mnt",
    category: "Ayam Geprek",
  },
  {
    id: "r4",
    name: "Sate Madura Mas Bro",
    rating: 4.6,
    deliveryTime: "25–35 mnt",
    category: "Sate & Grill",
  },
];

export const nearbyRestaurants: Restaurant[] = [
  {
    id: "n1",
    name: "Nasi Goreng Pak Kumis",
    rating: 4.5,
    deliveryTime: "8–15 mnt",
    category: "Nasi Goreng",
  },
  {
    id: "n2",
    name: "Martabak Manis Bang Jack",
    rating: 4.8,
    deliveryTime: "12–20 mnt",
    category: "Martabak",
  },
  {
    id: "n3",
    name: "Es Teh Solo Bu Ani",
    rating: 4.4,
    deliveryTime: "5–12 mnt",
    category: "Minuman",
  },
  {
    id: "n4",
    name: "Pecel Lele Lela",
    rating: 4.7,
    deliveryTime: "18–28 mnt",
    category: "Pecel Lele",
  },
  {
    id: "n5",
    name: "Burger Keju Meletus",
    rating: 4.6,
    deliveryTime: "15–22 mnt",
    category: "Burger & Fast Food",
  },
];

export const popularFoods: PopularFood[] = [
  {
    id: "f1",
    name: "Nasi Goreng Spesial",
    price: 28000,
    restaurantName: "Nasi Goreng Pak Kumis",
  },
  {
    id: "f2",
    name: "Ayam Geprek Level 15",
    price: 25000,
    restaurantName: "Ayam Geprek Pak Budi",
  },
  {
    id: "f3",
    name: "Bakmi Ayam Jamur",
    price: 32000,
    restaurantName: "Bakmi Jaya Abadi",
  },
  {
    id: "f4",
    name: "Sate Ayam 10 Tusuk",
    price: 35000,
    restaurantName: "Sate Madura Mas Bro",
  },
  {
    id: "f5",
    name: "Martabak Keju Spesial",
    price: 45000,
    restaurantName: "Martabak Manis Bang Jack",
  },
  {
    id: "f6",
    name: "Es Teh Manis Jumbo",
    price: 8000,
    restaurantName: "Es Teh Solo Bu Ani",
  },
];

export const promotions: Promotion[] = [
  {
    id: "p1",
    title: "Gratis ongkir hari ini",
    description: "Min. belanja Rp50.000 untuk pengantaran gratis di area Anda.",
    cta: "Pesan sekarang",
    badge: "Promo",
  },
  {
    id: "p2",
    title: "Diskon 30% menu favorit",
    description: "Berlaku di restoran pilihan hingga pukul 21.00 WIB.",
    cta: "Lihat restoran",
    badge: "Terbatas",
  },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
