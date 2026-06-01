import type { LucideIcon } from "lucide-react";
import {
  CarIcon,
  PackageIcon,
  ShoppingBagIcon,
  UtensilsCrossedIcon,
} from "lucide-react";

export type ServiceShortcut = {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
};

export const serviceShortcuts: ServiceShortcut[] = [
  {
    id: "ride",
    label: "Ride",
    description: "Ojek & mobil",
    icon: CarIcon,
    color: "text-emerald-700",
    bgColor: "bg-emerald-100",
  },
  {
    id: "food",
    label: "Food",
    description: "Pesan makanan",
    icon: UtensilsCrossedIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-100",
  },
  {
    id: "send",
    label: "Send",
    description: "Kirim paket",
    icon: PackageIcon,
    color: "text-blue-700",
    bgColor: "bg-blue-100",
  },
  {
    id: "mart",
    label: "Mart",
    description: "Belanja harian",
    icon: ShoppingBagIcon,
    color: "text-violet-700",
    bgColor: "bg-violet-100",
  },
];
