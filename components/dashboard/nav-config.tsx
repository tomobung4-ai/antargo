"use client";

import type { LucideIcon } from "lucide-react";
import {
  BellIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  PackageIcon,
  SettingsIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react";

export type DashboardNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
};

export const sidebarNavItems: DashboardNavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon },
  { label: "Pesanan Saya", href: "/dashboard#orders", icon: PackageIcon },
  { label: "Dompet", href: "/dashboard#wallet", icon: WalletIcon },
  {
    label: "Notifikasi",
    href: "/dashboard#notifications",
    icon: BellIcon,
    badge: 3,
  },
  { label: "Profil", href: "/dashboard#profile", icon: UserIcon },
  { label: "Pengaturan", href: "/dashboard#settings", icon: SettingsIcon },
];

export const sidebarFooterNavItems: DashboardNavItem[] = [
  { label: "Keluar", href: "/login", icon: LogOutIcon },
];

export const bottomNavItems: DashboardNavItem[] = [
  { label: "Beranda", href: "/dashboard", icon: LayoutDashboardIcon },
  { label: "Pesanan", href: "/dashboard#orders", icon: PackageIcon },
  { label: "Dompet", href: "/dashboard#wallet", icon: WalletIcon },
  {
    label: "Notifikasi",
    href: "/dashboard#notifications",
    icon: BellIcon,
    badge: 3,
  },
  { label: "Profil", href: "/dashboard#profile", icon: UserIcon },
];
