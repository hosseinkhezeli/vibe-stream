import clsx from "clsx";
import { PanelRightClose } from "lucide-react";

type Props = {
  collapsed: boolean;
  onCollapseClick: () => void;
};

export function SidebarHeader({ onCollapseClick, collapsed }: Props) {
  return (
    <div className="flex items-center gap-2 px-3 max-h-16 h-full pt-4 pb-3">
      <button
        className={clsx(
          collapsed ? "w-5.5 mx-auto" : "group-hover:w-5.5 w-0 transition-[width]",
          "cursor-pointer"
        )}
        onClick={onCollapseClick}
      >
        <PanelRightClose
          size={22}
          className={clsx(
            collapsed ? "block -scale-x-100" : "group-hover:block hidden",
            "animate-appear transition-all"
          )}
        />
      </button>
      <span className={clsx(collapsed && "hidden")}>کتابخانه شما</span>
    </div>
  );
}
