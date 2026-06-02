import { MenuItem } from "@/lib/mock-menu";
import { MenuCard } from "./menu-card";

interface Props {
  menus: MenuItem[];
}

export function MenuList({
  menus,
}: Props) {
  if (!menus.length) {
    return (
      <div className="rounded-2xl border p-12 text-center">
        <p className="text-muted-foreground">
          Belum ada menu
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {menus.map((menu) => (
        <MenuCard
          key={menu.id}
          item={menu}
        />
      ))}
    </div>
  );
}