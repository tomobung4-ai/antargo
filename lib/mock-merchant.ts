export type MerchantStats = {
  totalOrders: number;
  revenue: number;
  activeMenus: number;
  pendingOrders: number;
};

export type MerchantOrder = {
  id: string;
  customerName: string;
  total: number;
  status: "Pending" | "Diproses" | "Selesai";
};

export const merchantInfo = {
  restaurantName: "Antargo Fried Chicken",
  isOnline: true,
};

export const merchantStats: MerchantStats = {
  totalOrders: 42,
  revenue: 1850000,
  activeMenus: 18,
  pendingOrders: 7,
};

export const recentOrders: MerchantOrder[] = [
  {
    id: "ORD-001",
    customerName: "Budi Santoso",
    total: 55000,
    status: "Pending",
  },
  {
    id: "ORD-002",
    customerName: "Andi Saputra",
    total: 78000,
    status: "Diproses",
  },
  {
    id: "ORD-003",
    customerName: "Siti Rahma",
    total: 125000,
    status: "Selesai",
  },
  {
    id: "ORD-004",
    customerName: "Rina Putri",
    total: 67000,
    status: "Diproses",
  },
  {
    id: "ORD-005",
    customerName: "Dewi Lestari",
    total: 43000,
    status: "Pending",
  },
];