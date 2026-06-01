import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DriverCardProps = {
  driver: {
    name: string;
    vehicleType: string;
    vehicleNumber: string;
    photo: string;
  };
};

export default function DriverCard({
  driver,
}: DriverCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informasi Driver</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border">
            <Image
              src={driver.photo}
              alt={driver.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="font-semibold">
              {driver.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {driver.vehicleType}
            </p>

            <p className="text-sm font-medium">
              {driver.vehicleNumber}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}