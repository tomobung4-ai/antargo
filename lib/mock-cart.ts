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
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800",
    price: 28000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Ayam Geprek Mozzarella",
    restaurant: "Geprek Mantap",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=800",
    price: 35000,
    quantity: 2,
  },
  {
    id: 3,
    name: "Mie Aceh Seafood",
    restaurant: "Dapur Aceh",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800",
    price: 32000,
    quantity: 1,
  },
];