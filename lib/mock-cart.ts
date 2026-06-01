export type CartItemType = {
  id: number;
  name: string;
  restaurant: string;
  image: string;
  price: number;
  quantity: number;
};

export const mockCartItems: CartItemType[] = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    restaurant: "Warung Nusantara",
    image: "/food/nasi-goreng.jpg",
    price: 28000,
    quantity: 2,
  },
  {
    id: 2,
    name: "Ayam Geprek Level 3",
    restaurant: "Geprek Mantap",
    image: "/food/ayam-geprek.jpg",
    price: 25000,
    quantity: 1,
  },
  {
    id: 3,
    name: "Es Teh Manis",
    restaurant: "Warung Nusantara",
    image: "/food/es-teh.jpg",
    price: 8000,
    quantity: 2,
  },
];