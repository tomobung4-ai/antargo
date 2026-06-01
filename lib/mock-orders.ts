export type OrderStatus =
  | "processing"
  | "completed"
  | "cancelled";

export type Order = {
  id: string;
  restaurantName: string;
  restaurantImage: string;
  orderDate: string;
  status: OrderStatus;
  totalPayment: number;
};

export const mockOrders: Order[] = [
  {
    id: "ANT-240601-1001",
    restaurantName: "Warung Nusantara",
    restaurantImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    orderDate: "01 Juni 2026 • 12:10",
    status: "processing",
    totalPayment: 98000,
  },
  {
    id: "ANT-240601-1002",
    restaurantName: "Ayam Geprek Mantap",
    restaurantImage:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    orderDate: "31 Mei 2026 • 18:20",
    status: "completed",
    totalPayment: 76000,
  },
  {
    id: "ANT-240601-1003",
    restaurantName: "Bakso Pak Dedi",
    restaurantImage:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
    orderDate: "30 Mei 2026 • 13:40",
    status: "cancelled",
    totalPayment: 45000,
  },
  {
    id: "ANT-240601-1004",
    restaurantName: "Sate Madura Asli",
    restaurantImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    orderDate: "29 Mei 2026 • 19:00",
    status: "completed",
    totalPayment: 112000,
  },
  {
    id: "ANT-240601-1005",
    restaurantName: "Mie Aceh Favorit",
    restaurantImage:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
    orderDate: "28 Mei 2026 • 20:15",
    status: "processing",
    totalPayment: 87000,
  },
  {
    id: "ANT-240601-1006",
    restaurantName: "Seafood Bahari",
    restaurantImage:
      "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=600&q=80",
    orderDate: "27 Mei 2026 • 17:10",
    status: "completed",
    totalPayment: 156000,
  },
  {
    id: "ANT-240601-1007",
    restaurantName: "Nasi Goreng Spesial",
    restaurantImage:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600&q=80",
    orderDate: "25 Mei 2026 • 11:45",
    status: "cancelled",
    totalPayment: 52000,
  },
  {
    id: "ANT-240601-1008",
    restaurantName: "Pizza Corner",
    restaurantImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    orderDate: "23 Mei 2026 • 20:30",
    status: "completed",
    totalPayment: 134000,
  },
];