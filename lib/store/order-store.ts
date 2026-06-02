import { create } from "zustand";

export type OrderStatus =
| "new"
| "accepted"
| "preparing"
| "ready"
| "driver_assigned"
| "picked_up"
| "on_the_way"
| "completed"
| "cancelled";

export type OrderItem = {
id: string;
name: string;
quantity: number;
price: number;
};

export type Order = {
id: string;

customerName: string;
customerPhone: string;
customerAddress: string;

restaurantName: string;
restaurantAddress: string;

total: number;

status: OrderStatus;

items: OrderItem[];

createdAt: string;
};

type OrderStore = {
orders: Order[];

createOrder: (
    order: Order
  ) => void;

updateOrderStatus: (
id: string,
status: OrderStatus
) => void;

getOrderById: (
id: string
) => Order | undefined;
};

const initialOrders: Order[] = [
{
id: "ORDER-001",
customerName: "Budi Santoso",
customerPhone: "08123456789",
customerAddress: "Jl. Merdeka No. 10",

restaurantName: "Warung Nusantara",
restaurantAddress: "Jl. Asia No. 2",

total: 69000,

status: "ready",

createdAt: "12:00",

items: [
  {
    id: "1",
    name: "Nasi Goreng Spesial",
    quantity: 2,
    price: 28000,
  },
  {
    id: "2",
    name: "Es Teh Manis",
    quantity: 1,
    price: 13000,
  },
],

},

{
id: "ORDER-002",
customerName: "Siti",
customerPhone: "0812121212",
customerAddress: "Jl. Veteran",

restaurantName: "Ayam Geprek Mantap",
restaurantAddress: "Jl. Sudirman",

total: 45000,

status: "preparing",

createdAt: "12:10",

items: [
  {
    id: "3",
    name: "Ayam Geprek",
    quantity: 1,
    price: 45000,
  },
],

},
];

export const useOrderStore =
  create<OrderStore>((set, get) => ({
    orders: initialOrders,
createOrder: (order) =>
  set((state) => ({
    orders: [order, ...state.orders],
  })),

    updateOrderStatus: (
      id: string,
      status: OrderStatus
    ) =>
      set((state) => ({
        orders: state.orders.map((order) =>
          order.id === id
            ? {
                ...order,
                status,
              }
            : order
        ),
      })),

    getOrderById: (id) =>
      get().orders.find(
        (order) => order.id === id
      ),

  }));