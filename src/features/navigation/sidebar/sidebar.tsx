"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import type { SidebarProps } from "./sidebar.types";
import { SidebarSections } from "./sidebar.sections";

const STORAGE_KEY = "goosh-sidebar-collapsed";

export function Sidebar({ initialCollapsed }: SidebarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(!!initialCollapsed);

  // Read from localStorage on mount
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        setCollapsed(stored === "true");
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(collapsed));
    } catch {
      // ignore
    }
  }, [collapsed]);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <aside
      className={clsx(
        "h-screen bg-bg-elevated border-e border-white/10 flex flex-col overflow-hidden",
        "transition-[width] duration-300",
        collapsed ? "w-[72px]" : "w-[280px]"
      )}
      aria-label="Sidebar"
      data-collapsed={collapsed ? "true" : "false"}
    >
      {/* Top: brand + collapse button */}
      <div className="px-3 pt-4 pb-3 border-b border-white/10">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            {/* Logo circle */}
            <div className="h-8 w-8 rounded-full bg-accent shadow-soft shrink-0" />
            {/* Brand text hidden when collapsed */}
            <div
              className={clsx(
                "flex flex-col text-start transition-opacity duration-150",
                collapsed && "opacity-0 pointer-events-none"
              )}
            >
              <span className="text-sm font-semibold leading-tight">
                گووش
              </span>
              <span className="text-xs text-muted leading-tight">
                موسیقی برای تو
              </span>
            </div>
          </div>

          {/* Collapse toggle */}
          <button
            type="button"
            onClick={toggleCollapsed}
            aria-label={collapsed ? "گسترش نوار کناری" : "جمع کردن نوار کناری"}
            aria-pressed={collapsed}
            className={clsx(
              "inline-flex h-8 w-8 items-center justify-center rounded-full",
              "bg-bg hover:bg-white/10 text-muted",
              "transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            )}
          >
            {collapsed ? (
              <ChevronsRight size={18} />
            ) : (
              <ChevronsLeft size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Scrollable middle content */}
      <div className="flex-1 overflow-y-auto px-2 pb-4 pt-3">
        <SidebarSections collapsed={collapsed} />
      </div>

      {/* Bottom footer links (hidden when very collapsed) */}
      <div
        className={clsx(
          "px-4 py-4 text-xs text-muted flex flex-col gap-2 border-t border-white/10",
          collapsed && "items-center px-1"
        )}
      >
        {collapsed ? (
          // In collapsed mode just tiny dots for spacing / balance
          <div className="flex flex-col gap-1">
            <span className="block h-1 w-6 rounded-full bg-white/20" />
            <span className="block h-1 w-5 rounded-full bg-white/15" />
            <span className="block h-1 w-4 rounded-full bg-white/10" />
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <a href="#" className="hover:underline">
                کوکی‌ها
              </a>
              <a href="#" className="hover:underline">
                حریم خصوصی
              </a>
              <a href="#" className="hover:underline">
                شرایط استفاده
              </a>
            </div>
            <p className="mt-1 text-[0.7rem] text-muted">
              © {new Date().getFullYear()} گووش
            </p>
          </>
        )}
      </div>
    </aside>
  );
}
