export type OrderStatus = "completed" | "in_progress" | "cancelled";

export type Order = {
  id: string;
  service: "Ride" | "Food" | "Send" | "Mart";
  title: string;
  destination: string;
  date: string;
  amount: string;
  status: OrderStatus;
};

export type Promotion = {
  id: string;
  title: string;
  description: string;
  code: string;
  expiresAt: string;
  accent: "emerald" | "orange" | "blue";
};

export type DashboardNotification = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "order" | "promo" | "wallet" | "system";
};

export const placeholderUser = {
  name: "Andi Pratama",
  initials: "AP",
  email: "andi.pratama@email.com",
};

export const walletBalance = "Rp 125.000";

export const recentOrders: Order[] = [
  {
    id: "ORD-28491",
    service: "Ride",
    title: "Antargo Ride",
    destination: "Jl. Sudirman → Bandara Soekarno-Hatta",
    date: "Hari ini, 08:42",
    amount: "Rp 89.000",
    status: "completed",
  },
  {
    id: "ORD-28472",
    service: "Food",
    title: "Warung Nusantara",
    destination: "3 item · Diantar ke Apartemen Green Park",
    date: "Kemarin, 19:15",
    amount: "Rp 62.500",
    status: "completed",
  },
  {
    id: "ORD-28455",
    service: "Mart",
    title: "Antargo Mart",
    destination: "12 item · Diantar ke rumah",
    date: "28 Mei 2026",
    amount: "Rp 156.200",
    status: "in_progress",
  },
];

export const promotions: Promotion[] = [
  {
    id: "promo-1",
    title: "Gratis ongkir Food",
    description: "Min. belanja Rp 50.000 untuk pengguna baru",
    code: "FOODGRATIS",
    expiresAt: "Berlaku hingga 30 Jun 2026",
    accent: "orange",
  },
  {
    id: "promo-2",
    title: "Diskon Ride 30%",
    description: "Maks. Rp 15.000 · 3x per minggu",
    code: "RIDE30",
    expiresAt: "Berlaku hingga 15 Jun 2026",
    accent: "emerald",
  },
  {
    id: "promo-3",
    title: "Cashback dompet 10%",
    description: "Top up min. Rp 100.000 via e-wallet",
    code: "TOPUP10",
    expiresAt: "Berlaku hingga 7 Jun 2026",
    accent: "blue",
  },
];

export const dashboardNotifications: DashboardNotification[] = [
  {
    id: "notif-1",
    title: "Pesanan Mart sedang diantar",
    message: "Kurir Budi akan tiba dalam ±12 menit.",
    time: "5 menit lalu",
    read: false,
    type: "order",
  },
  {
    id: "notif-2",
    title: "Promo Ride30 aktif",
    message: "Gunakan kode saat checkout untuk diskon 30%.",
    time: "2 jam lalu",
    read: false,
    type: "promo",
  },
  {
    id: "notif-3",
    title: "Top up berhasil",
    message: "Saldo dompet bertambah Rp 50.000.",
    time: "Kemarin",
    read: true,
    type: "wallet",
  },
];
