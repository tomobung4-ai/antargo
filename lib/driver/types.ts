export type DriverProfile = {
  id: string;
  name: string;
  vehicle: string;
  plateNumber: string;
  rating: number;
  totalTrips: number;
};

export type OrderStats = {
  completed: number;
  active: number;
  cancelled: number;
};

export type IncomingOrder = {
  id: string;
  customerName: string;
  pickup: string;
  destination: string;
  estimatedFare: number;
  distanceKm: number;
  serviceType: "ride" | "food" | "send";
};

export type RecentTrip = {
  id: string;
  customerName: string;
  route: string;
  fare: number;
  completedAt: string;
  status: "completed" | "cancelled";
};

export type DriverNavItem = {
  label: string;
  href: string;
  icon: string;
  badge?: number;
};
