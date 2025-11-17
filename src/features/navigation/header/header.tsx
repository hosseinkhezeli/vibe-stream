"use client";

import { Avatar } from "@/core/ui/avatar/avatar";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import { useQueryState } from "nuqs";

export function Header() {
  const [_, setView] = useQueryState("view");
  const handleOpenSettings = () => {
    setView("setting");
  };

  return (
    <header className="fixed w-full top-0 z-10 bg-bg h-full max-h-16">
      <div className="px-4 min-h-full py-3 flex flex-row-reverse items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted">VIDE</span>
        </div>
        <button onClick={handleOpenSettings} className="md:hidden">
          <Avatar />
        </button>
      </div>
    </header>
  );
}
