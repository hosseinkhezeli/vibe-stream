import { clsx } from "clsx";
import { SidebarContent } from "./components/sidebar-content";

export function Sidebar() {
  return (
    <aside
      className={clsx(
        "w-max group sticky h-full bg-bg-elevated flex-col overflow-hidden rounded-2xl",
        "hidden",
        "md:flex"
      )}
      aria-label="Sidebar"
    >
      <SidebarContent />
    </aside>
  );
}
