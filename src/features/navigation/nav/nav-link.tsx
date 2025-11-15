"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import type { NavItem } from "./nav-items";

type NavLinkProps = {
  item: NavItem;
  collapsed?: boolean;
};

export function NavLink({ item, collapsed = false }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={clsx(
        "flex items-center gap-3 rounded-md text-sm font-medium transition-colors",
        "hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
        "px-4 py-2",
        collapsed && "justify-center px-0",
        isActive ? "bg-white/10 text-white" : "text-muted"
      )}
    >
      <Icon
        size={20}
        className={clsx(
          "shrink-0",
          isActive ? "text-accent" : "text-muted"
        )}
      />

      {/* Label: visible when expanded, screen-reader-only when collapsed */}
      <span
        className={clsx(
          "truncate",
          collapsed && "sr-only"
        )}
      >
        {item.label}
      </span>
    </Link>
  );
}
