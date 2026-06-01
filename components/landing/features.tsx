import {
  MapPin,
  Shield,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { SectionContainer } from "@/components/landing/section-container";
import { SectionHeader } from "@/components/landing/section-header";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Real-time tracking",
    description:
      "Pantau perjalanan dan pengantaran secara langsung di peta, dari penjemputan hingga tiba.",
    icon: MapPin,
  },
  {
    title: "Fast delivery",
    description:
      "Jaringan driver dan kurir tersebar untuk waktu tunggu lebih singkat di jam sibuk.",
    icon: Zap,
  },
  {
    title: "Secure payment",
    description:
      "Bayar dengan dompet digital, kartu, atau tunai — semua transaksi terenkripsi dan aman.",
    icon: Shield,
  },
  {
    title: "Professional drivers",
    description:
      "Mitra driver melalui seleksi, pelatihan, dan rating untuk pengalaman yang konsisten.",
    icon: Users,
  },
];

export function Features() {
  return (
    <SectionContainer id="about">
      <SectionHeader
        eyebrow="Keunggulan"
        title="Dirancang untuk kecepatan dan kepercayaan"
        description="Antargo menggabungkan teknologi, jaringan mitra, dan standar layanan agar setiap perjalanan terasa mudah."
      />

      <ul className="grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="flex gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <feature.icon className="size-5" aria-hidden />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
