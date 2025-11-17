import { clsx } from "clsx";
import { SidebarContent } from "./components/sidebar-content";
import { SettingDrawer } from "../../setting/setting-drawer/setting-drawer";

export function Sidebar() {
  return (
    <>
      <SettingDrawer />
      <aside
        className={clsx(
          "w-max group sticky h-full bg-bg-elevated overflow-hidden rounded-2xl",
          "hidden",
          "md:flex flex-col"
        )}
        aria-label="Sidebar"
      >
        <SidebarContent />
      </aside>
    </>
  );
}
