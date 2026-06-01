import { Card, CardContent } from "@/components/ui/card";
import {
  UtensilsCrossed,
  ClipboardList,
  Store,
} from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      title: "Kelola Menu",
      icon: UtensilsCrossed,
    },
    {
      title: "Kelola Pesanan",
      icon: ClipboardList,
    },
    {
      title: "Profil Restoran",
      icon: Store,
    },
  ];

  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {actions.map((action) => (
          <Card
            key={action.title}
            className="cursor-pointer transition hover:shadow-md"
          >
            <CardContent className="flex flex-col items-center gap-3 p-6">
              <action.icon className="h-8 w-8" />

              <span className="text-sm font-medium">
                {action.title}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}