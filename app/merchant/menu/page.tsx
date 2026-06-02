"use client";

import { useMemo, useState } from "react";

import { mockMenus } from "@/lib/mock-menu";

import { MenuHeader } from "@/components/merchant-menu/menu-header";
import { MenuFilter } from "@/components/merchant-menu/menu-filter";
import { MenuList } from "@/components/merchant-menu/menu-list";
import { AddMenuDialog } from "@/components/merchant-menu/add-menu-dialog";

export default function MerchantMenuPage() {
  const [filter, setFilter] =
    useState("Semua");

  const [open, setOpen] =
    useState(false);

  const filteredMenus = useMemo(() => {
    if (filter === "Semua") {
      return mockMenus;
    }

    return mockMenus.filter(
      (menu) =>
        menu.category === filter
    );
  }, [filter]);

  return (
    <main className="mx-auto max-w-7xl space-y-6 p-4">
      <MenuHeader
        total={mockMenus.length}
        onAdd={() => setOpen(true)}
      />

      <MenuFilter
        value={filter}
        onChange={setFilter}
      />

      <MenuList menus={filteredMenus} />

      <AddMenuDialog
        open={open}
        onOpenChange={setOpen}
      />
    </main>
  );
}