import type { Metadata } from "next";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export const metadata: Metadata = {
  title: "Dashboard — Antargo",
  description:
    "Kelola pesanan, dompet, promo, dan notifikasi Anda di satu tempat.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardShell>{children}</DashboardShell>;
}
