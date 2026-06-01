import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type AddressSectionProps = {
  address: {
    name: string;
    phone: string;
    label: string;
    address: string;
  };
};

export default function AddressSection({
  address,
}: AddressSectionProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <MapPin className="mt-1 h-5 w-5 text-primary" />

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">
                  Alamat Pengantaran
                </h3>

                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {address.label}
                </span>
              </div>

              <p className="mt-2 font-medium">
                {address.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {address.phone}
              </p>

              <p className="mt-2 text-sm">
                {address.address}
              </p>
            </div>
          </div>

          <Button variant="outline" size="sm">
            Ubah
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}