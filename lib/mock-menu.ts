export type MenuCategory =
  | "Makanan"
  | "Minuman"
  | "Dessert";

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  active: boolean;
};

export const mockMenus: MenuItem[] = [
  {
    id: "1",
    name: "Nasi Goreng Spesial",
    category: "Makanan",
    price: 25000,
    description: "Nasi goreng dengan telur dan ayam.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    active: true,
  },
  {
    id: "2",
    name: "Ayam Geprek",
    category: "Makanan",
    price: 28000,
    description: "Ayam geprek sambal pedas.",
    image: "https://images.unsplash.com/photo-1604908177522-4725f6aee76f?w=600",
    active: true,
  },
  {
    id: "3",
    name: "Mie Goreng",
    category: "Makanan",
    price: 22000,
    description: "Mie goreng khas restoran.",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600",
    active: false,
  },
  {
    id: "4",
    name: "Es Teh Manis",
    category: "Minuman",
    price: 8000,
    description: "Es teh segar.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600",
    active: true,
  },
  {
    id: "5",
    name: "Jus Alpukat",
    category: "Minuman",
    price: 15000,
    description: "Jus alpukat premium.",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600",
    active: true,
  },
  {
    id: "6",
    name: "Kopi Susu",
    category: "Minuman",
    price: 18000,
    description: "Kopi susu kekinian.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
    active: false,
  },
  {
    id: "7",
    name: "Brownies",
    category: "Dessert",
    price: 20000,
    description: "Brownies coklat lembut.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
    active: true,
  },
  {
    id: "8",
    name: "Cheesecake",
    category: "Dessert",
    price: 28000,
    description: "Cheesecake premium.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600",
    active: true,
  },
  {
    id: "9",
    name: "Pudding Coklat",
    category: "Dessert",
    price: 12000,
    description: "Pudding lembut.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",
    active: false,
  },
  {
    id: "10",
    name: "Sate Ayam",
    category: "Makanan",
    price: 32000,
    description: "Sate ayam bumbu kacang.",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=600",
    active: true,
  },
  {
    id: "11",
    name: "Es Jeruk",
    category: "Minuman",
    price: 10000,
    description: "Jeruk segar.",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600",
    active: true,
  },
  {
    id: "12",
    name: "Ice Cream Vanilla",
    category: "Dessert",
    price: 18000,
    description: "Ice cream vanilla.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",
    active: true,
  },
];