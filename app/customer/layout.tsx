import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antargo Food — Pesan Makanan",
  description:
    "Pesan makanan favorit dari restoran terdekat. Cari menu, promo, dan pengantaran cepat di Antargo.",
};

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
