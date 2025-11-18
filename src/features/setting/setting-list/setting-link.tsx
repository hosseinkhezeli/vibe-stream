"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { SettingItem } from "../setting";

type Props = {
  item: SettingItem;
  withoutIcon?: boolean;
};

export function SettingLink({ item, withoutIcon = false }: Props) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={clsx(
        "flex items-center justify-start py-2 gap-3 rounded-md text-sm font-medium transition-colors",
        "hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
        "px-4"
      )}
    >
      {!withoutIcon && <Icon size={22} className={clsx("shrink-0")} />}
      {item.label}
    </Link>
  );
}
