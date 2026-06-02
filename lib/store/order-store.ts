import { create } from "zustand";
import { persist } from "zustand/middleware";

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

  driverName?: string;

  items: OrderItem[];

  createdAt: string;
};

type OrderStore = {
  orders: Order[];

  addOrder: (
    order: Order
  ) => void;

  updateOrderStatus: (
    id: string,
    status: OrderStatus
  ) => void;

  assignDriver: (
    orderId: string,
    driverName: string
  ) => void;

  getOrderById: (
    id: string
  ) => Order | undefined;
};

const initialOrders: Order[] = [
  {
    id: "ORDER-001",

    customerName:
      "Budi Santoso",

    customerPhone:
      "08123456789",

    customerAddress:
      "Jl. Merdeka No. 10",

    restaurantName:
      "Warung Nusantara",

    restaurantAddress:
      "Jl. Asia No. 2",

    total: 69000,

    status: "ready",

    createdAt: "12:00",

    items: [
      {
        id: "1",
        name:
          "Nasi Goreng Spesial",
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

    customerPhone:
      "0812121212",

    customerAddress:
      "Jl. Veteran",

    restaurantName:
      "Ayam Geprek Mantap",

    restaurantAddress:
      "Jl. Sudirman",

    total: 45000,

    status: "preparing",

    createdAt: "12:10",

    items: [
      {
        id: "3",
        name:
          "Ayam Geprek",
        quantity: 1,
        price: 45000,
      },
    ],
  },
];

export const useOrderStore =
  create<OrderStore>()(
    persist(
      (set, get) => ({
        orders: initialOrders,

        addOrder: (
          order: Order
        ) =>
          set((state) => ({
            orders: [
              order,
              ...state.orders,
            ],
          })),

        updateOrderStatus: (
          id,
          status
        ) =>
          set((state) => ({
            orders:
              state.orders.map(
                (order) =>
                  order.id === id
                    ? {
                        ...order,
                        status,
                      }
                    : order
              ),
          })),

        assignDriver: (
          orderId,
          driverName
        ) =>
          set((state) => ({
            orders:
              state.orders.map(
                (order) =>
                  order.id === orderId
                    ? {
                        ...order,
                        driverName,
                        status:
                          "driver_assigned",
                      }
                    : order
              ),
          })),

        getOrderById: (
          id
        ) =>
          get().orders.find(
            (order) =>
              order.id === id
          ),
      }),
      {
        name:
          "antargo-orders",
      }
    )
  );