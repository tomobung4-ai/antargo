import { Badge } from "@/components/ui/badge";

type Props = {
  status:
    | "available"
    | "accepted"
    | "picked_up"
    | "on_the_way"
    | "completed";
};

const statusMap = {
  available: {
    label: "Tersedia",
    className:
      "bg-blue-100 text-blue-700 hover:bg-blue-100",
  },
  accepted: {
    label: "Diterima",
    className:
      "bg-amber-100 text-amber-700 hover:bg-amber-100",
  },
  picked_up: {
    label: "Diambil",
    className:
      "bg-purple-100 text-purple-700 hover:bg-purple-100",
  },
  on_the_way: {
    label: "Dalam Perjalanan",
    className:
      "bg-orange-100 text-orange-700 hover:bg-orange-100",
  },
  completed: {
    label: "Selesai",
    className:
      "bg-green-100 text-green-700 hover:bg-green-100",
  },
};

export function OrderStatusBadge({
  status,
}: Props) {
  const current = statusMap[status];

  return (
    <Badge className={current.className}>
      {current.label}
    </Badge>
  );
}