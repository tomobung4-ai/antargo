import {
  Bike,
  Package,
  ShoppingBag,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import { SectionContainer } from "@/components/landing/section-container";
import { SectionHeader } from "@/components/landing/section-header";
import { cn } from "@/lib/utils";

type Service = {
  name: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

const services: Service[] = [
  {
    name: "Antargo Ride",
    description:
      "Ojek dan mobil online dengan tarif transparan dan driver terverifikasi.",
    icon: Bike,
    accent: "from-emerald-500/15 to-emerald-500/5",
  },
  {
    name: "Antargo Food",
    description:
      "Pesan makanan dari restoran terdekat, diantar hangat ke depan pintu Anda.",
    icon: UtensilsCrossed,
    accent: "from-orange-500/15 to-orange-500/5",
  },
  {
    name: "Antargo Send",
    description:
      "Kirim dokumen dan paket same-day ke seluruh kota dengan pelacakan real-time.",
    icon: Package,
    accent: "from-sky-500/15 to-sky-500/5",
  },
  {
    name: "Antargo Mart",
    description:
      "Belanja kebutuhan harian dari minimarket dan toko mitra dalam hitungan menit.",
    icon: ShoppingBag,
    accent: "from-violet-500/15 to-violet-500/5",
  },
];

export function Services() {
  return (
    <SectionContainer id="services" className="bg-muted/40">
      <SectionHeader
        eyebrow="Layanan"
        title="Semua yang Anda butuhkan, satu aplikasi"
        description="Dari perjalanan hingga belanja harian — pilih layanan Antargo yang sesuai dengan aktivitas Anda hari ini."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {services.map((service) => (
          <li key={service.name}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div
                className={cn(
                  "mb-5 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br",
                  service.accent
                )}
              >
                <service.icon
                  className="size-6 text-primary"
                  aria-hidden
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
