import { Badge } from "@/components/ui/badge";

interface DashboardHeaderProps {
  restaurantName: string;
  isOnline: boolean;
}

export function DashboardHeader({
  restaurantName,
  isOnline,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">
          {restaurantName}
        </h1>
        <p className="text-sm text-muted-foreground">
          Merchant Dashboard
        </p>
      </div>

      <Badge
        variant={isOnline ? "default" : "secondary"}
        className="rounded-full px-4"
      >
        {isOnline ? "Online" : "Offline"}
      </Badge>
    </div>
  );
}