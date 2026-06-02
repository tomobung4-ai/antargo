export type DriverOrder = {
  id: string;
  restaurantName: string;
  restaurantAddress: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  total: number;
  distance: string;
  status:
    | "available"
    | "accepted"
    | "picked_up"
    | "on_the_way"
    | "completed";
};

export const driverOrders: DriverOrder[] = [
  {
    id: "ORD-1001",
    restaurantName: "Ayam Geprek Sultan",
    restaurantAddress: "Jl. Sudirman No. 12",
    customerName: "Andi Saputra",
    customerPhone: "081234567890",
    customerAddress: "Jl. Mawar No. 10",
    total: 85000,
    distance: "2.1 km",
    status: "available",
  },
  {
    id: "ORD-1002",
    restaurantName: "Bakso Mercon",
    restaurantAddress: "Jl. Veteran No. 8",
    customerName: "Rina Putri",
    customerPhone: "081298765432",
    customerAddress: "Jl. Melati No. 25",
    total: 65000,
    distance: "1.8 km",
    status: "accepted",
  },
  {
    id: "ORD-1003",
    restaurantName: "Nasi Goreng Nusantara",
    restaurantAddress: "Jl. Merdeka No. 45",
    customerName: "Dedi Kurniawan",
    customerPhone: "082211223344",
    customerAddress: "Jl. Kenanga No. 7",
    total: 120000,
    distance: "3.4 km",
    status: "picked_up",
  },
  {
    id: "ORD-1004",
    restaurantName: "Sate Madura Pak Haji",
    restaurantAddress: "Jl. Ahmad Yani No. 31",
    customerName: "Fitriani",
    customerPhone: "085612345678",
    customerAddress: "Jl. Flamboyan No. 9",
    total: 95000,
    distance: "4.2 km",
    status: "on_the_way",
  },
  {
    id: "ORD-1005",
    restaurantName: "Mie Pedas Gila",
    restaurantAddress: "Jl. Diponegoro No. 5",
    customerName: "Rahmat Hidayat",
    customerPhone: "081377788899",
    customerAddress: "Jl. Anggrek No. 20",
    total: 73000,
    distance: "2.7 km",
    status: "completed",
  },
];