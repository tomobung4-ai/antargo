import type {
  DriverProfile,
  IncomingOrder,
  OrderStats,
  RecentTrip,
} from "@/lib/driver/types";

export const mockDriver: DriverProfile = {
  id: "drv-001",
  name: "Budi Santoso",
  vehicle: "Honda Beat",
  plateNumber: "B 1234 ABC",
  rating: 4.92,
  totalTrips: 1847,
};

export const mockOrderStats: OrderStats = {
  completed: 12,
  active: 1,
  cancelled: 2,
};

export const mockTodayEarnings = 485_000;

export const mockIncomingOrders: IncomingOrder[] = [
  {
    id: "ord-101",
    customerName: "Siti Rahayu",
    pickup: "Jl. Sudirman No. 45, Jakarta Pusat",
    destination: "Mall Grand Indonesia, Jakarta Pusat",
    estimatedFare: 28_000,
    distanceKm: 4.2,
    serviceType: "ride",
  },
  {
    id: "ord-102",
    customerName: "Andi Pratama",
    pickup: "KFC Kemang, Jakarta Selatan",
    destination: "Apartemen Verde, Jakarta Selatan",
    estimatedFare: 22_500,
    distanceKm: 3.1,
    serviceType: "food",
  },
  {
    id: "ord-103",
    customerName: "Dewi Lestari",
    pickup: "Toko Elektronik Blok M",
    destination: "Jl. Panglima Polim No. 12",
    estimatedFare: 35_000,
    distanceKm: 5.8,
    serviceType: "send",
  },
];

export const mockRecentTrips: RecentTrip[] = [
  {
    id: "trip-901",
    customerName: "Rina Wijaya",
    route: "Senayan → Kuningan",
    fare: 32_000,
    completedAt: "10:42",
    status: "completed",
  },
  {
    id: "trip-902",
    customerName: "Fajar Nugroho",
    route: "Kemang → Cilandak",
    fare: 24_500,
    completedAt: "09:15",
    status: "completed",
  },
  {
    id: "trip-903",
    customerName: "Maya Sari",
    route: "Blok M → Fatmawati",
    fare: 18_000,
    completedAt: "08:30",
    status: "cancelled",
  },
  {
    id: "trip-904",
    customerName: "Hendra Gunawan",
    route: "Thamrin → Gambir",
    fare: 21_000,
    completedAt: "07:55",
    status: "completed",
  },
];
