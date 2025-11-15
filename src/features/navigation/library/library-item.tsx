"use client";

import { clsx } from "clsx";

type LibraryItemProps = {
  title: string;
  isActive?: boolean;
};

export function LibraryItem({ title, isActive = false }: LibraryItemProps) {
  return (
    <button
      type="button"
      className={clsx(
        "w-full text-start px-3 py-2 rounded-md text-sm",
        "transition-colors",
        "hover:bg-white/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
        isActive ? "bg-white/10 text-white" : "text-muted"
      )}
    >
      <span className="truncate">{title}</span>
    </button>
  );
}
