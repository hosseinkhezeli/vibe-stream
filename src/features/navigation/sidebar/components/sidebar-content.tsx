"use client";

import { useState } from "react";
import { SidebarHeader } from "./sidebar-header";
import { SidebarSections } from "./sidebar-sections";
import clsx from "clsx";

export function SidebarContent() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  function toggleCollapsed() {
    setCollapsed((prev) => !prev);
  }
  return (
    <div
      className={clsx(collapsed ? "w-18" : "w-[280px]", "transition-[width] flex flex-col h-full")}
    >
      <SidebarHeader collapsed={collapsed} onCollapseClick={toggleCollapsed} />
      <SidebarSections collapsed={collapsed} />
    </div>
  );
}
