export type OrderStatus =
  | "new"
  | "accepted"
  | "preparing"
  | "ready"
  | "completed"
  | "cancelled";

export type OrderItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type MerchantOrder = {
  id: string;
  customerName: string;
  customerPhone: string;
  orderTime: string;
  total: number;
  paymentMethod: string;
  deliveryAddress: string;
  notes: string;
  status: OrderStatus;
  items: OrderItem[];
};

export const merchantOrders: MerchantOrder[] = [
  {
    id: "ORD-1001",
    customerName: "Budi Santoso",
    customerPhone: "081234567890",
    orderTime: "09:15",
    total: 58000,
    paymentMethod: "QRIS",
    deliveryAddress:
      "Jl. Merdeka No. 12, Padang Lawas",
    notes: "Sambal dipisah",
    status: "new",
    items: [
      {
        id: "1",
        name: "Ayam Geprek",
        quantity: 2,
        price: 22000,
      },
      {
        id: "2",
        name: "Es Teh Manis",
        quantity: 2,
        price: 7000,
      },
    ],
  },
  {
    id: "ORD-1002",
    customerName: "Siti Rahma",
    customerPhone: "081278889999",
    orderTime: "09:30",
    total: 45000,
    paymentMethod: "COD",
    deliveryAddress:
      "Jl. Sudirman No. 88, Sibuhuan",
    notes: "Tanpa bawang",
    status: "accepted",
    items: [
      {
        id: "3",
        name: "Nasi Goreng",
        quantity: 1,
        price: 30000,
      },
      {
        id: "4",
        name: "Es Jeruk",
        quantity: 1,
        price: 15000,
      },
    ],
  },
  {
    id: "ORD-1003",
    customerName: "Andi Saputra",
    customerPhone: "081377777777",
    orderTime: "10:05",
    total: 72000,
    paymentMethod: "QRIS",
    deliveryAddress:
      "Jl. Karya Bakti No. 15",
    notes: "",
    status: "preparing",
    items: [
      {
        id: "5",
        name: "Ayam Bakar",
        quantity: 2,
        price: 30000,
      },
      {
        id: "6",
        name: "Teh Botol",
        quantity: 2,
        price: 6000,
      },
    ],
  },
  {
    id: "ORD-1004",
    customerName: "Dewi Lestari",
    customerPhone: "081355555555",
    orderTime: "10:25",
    total: 88000,
    paymentMethod: "Transfer Bank",
    deliveryAddress:
      "Jl. Veteran No. 21",
    notes: "Tambahkan sendok",
    status: "ready",
    items: [
      {
        id: "7",
        name: "Sate Ayam",
        quantity: 2,
        price: 44000,
      },
    ],
  },
  {
    id: "ORD-1005",
    customerName: "Rina Putri",
    customerPhone: "081366666666",
    orderTime: "08:40",
    total: 36000,
    paymentMethod: "QRIS",
    deliveryAddress:
      "Jl. Mawar No. 9",
    notes: "",
    status: "completed",
    items: [
      {
        id: "8",
        name: "Mie Goreng",
        quantity: 2,
        price: 18000,
      },
    ],
  },
  {
    id: "ORD-1006",
    customerName: "Fajar Hidayat",
    customerPhone: "081344444444",
    orderTime: "08:10",
    total: 42000,
    paymentMethod: "COD",
    deliveryAddress:
      "Jl. Flamboyan No. 2",
    notes: "",
    status: "cancelled",
    items: [
      {
        id: "9",
        name: "Bakso",
        quantity: 2,
        price: 21000,
      },
    ],
  },
];