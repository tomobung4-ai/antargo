import Link from "next/link";

import { Button } from "@/components/ui/button";

import { DriverHeader } from "@/components/driver/driver-header";
import { DriverStats } from "@/components/driver/driver-stats";

export default function DriverDashboardPage() {
  return (
    <div className="container mx-auto space-y-6 p-4">
      <DriverHeader online />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <DriverStats
          title="Pendapatan Hari Ini"
          value="Rp 250.000"
        />

        <DriverStats
          title="Pengiriman"
          value="12"
        />

        <DriverStats
          title="Rating"
          value="4.9 ★"
        />

        <DriverStats
          title="Status"
          value="Online"
        />
      </div>

      <Button asChild className="w-full">
        <Link href="/driver/orders">
          Lihat Order
        </Link>
      </Button>
    </div>
  );
}