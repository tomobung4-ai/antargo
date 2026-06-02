import Image from "next/image";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Badge,
} from "@/components/ui/badge";

import {
  Button,
} from "@/components/ui/button";

import { Pencil, Trash2 } from "lucide-react";
import { MenuItem } from "@/lib/mock-menu";

interface Props {
  item: MenuItem;
}

export function MenuCard({
  item,
}: Props) {
  return (
    <Card className="overflow-hidden rounded-2xl">
      <div className="relative h-40">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="space-y-3 p-4">
        <div>
          <h3 className="font-semibold">
            {item.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {item.category}
          </p>
        </div>

        <div className="font-bold text-primary">
          Rp {item.price.toLocaleString("id-ID")}
        </div>

        <Badge
          variant={
            item.active
              ? "default"
              : "secondary"
          }
        >
          {item.active
            ? "Aktif"
            : "Nonaktif"}
        </Badge>

        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Button>

          <Button
            size="sm"
            variant="outline"
            className="flex-1"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Hapus
          </Button>
        </div>

        <Button
          className="w-full"
          variant={
            item.active
              ? "secondary"
              : "default"
          }
        >
          {item.active
            ? "Nonaktifkan"
            : "Aktifkan"}
        </Button>
      </CardContent>
    </Card>
  );
}