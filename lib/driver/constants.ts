import type { LucideIcon } from "lucide-react";
import {
  HistoryIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  PackageIcon,
  SettingsIcon,
  UserIcon,
  WalletIcon,
  WalletCardsIcon,
} from "lucide-react";

export type DriverNavItemConfig = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
};

export const driverNavItems: DriverNavItemConfig[] = [
  {
    label: "Dashboard",
    href: "/driver",
    icon: LayoutDashboardIcon,
  },
  {
    label: "Pesanan Masuk",
    href: "/driver#incoming-orders",
    icon: PackageIcon,
    badge: 3,
  },
  {
    label: "Riwayat Perjalanan",
    href: "/driver/trips",
    icon: HistoryIcon,
  },
  {
    label: "Pendapatan",
    href: "/driver/earnings",
    icon: WalletCardsIcon,
  },
  {
    label: "Dompet",
    href: "/driver/wallet",
    icon: WalletIcon,
  },
  {
    label: "Profil",
    href: "/driver/profile",
    icon: UserIcon,
  },
  {
    label: "Pengaturan",
    href: "/driver/settings",
    icon: SettingsIcon,
  },
];

export const driverBrand = {
  name: "Antargo",
  driverLabel: "Driver",
  tagline: "Partner pengemudi",
};
