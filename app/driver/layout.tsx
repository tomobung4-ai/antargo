import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driver Dashboard — Antargo",
  description: "Dashboard pengemudi Antargo untuk mengelola pesanan dan pendapatan.",
};

export default function DriverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
