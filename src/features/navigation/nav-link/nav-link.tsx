"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import type { NavItem } from "../navigation";

type NavLinkProps = {
  item: NavItem;
  collapsed: boolean;
};

export function NavLink({ item, collapsed }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={clsx(
        "flex flex-col md:flex-row items-center justify-center md:justify-start py-4 md:py-2 gap-2 md:gap-3 rounded-md text-sm font-medium transition-colors overflow-hidden",
        "hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
        "px-4 py-2"
      )}
    >
      <Icon
        size={22}
        strokeWidth={1.5}
        className={clsx("shrink-0", isActive ? "text-white fill-muted/50" : "text-muted")}
      />
      <div className={clsx(collapsed ? "w-0" : "w-max", "transition-[width]")}>
        <span className={clsx("truncate", collapsed ? "hidden" : "block")}>{item.label}</span>
      </div>
    </Link>
  );
}
