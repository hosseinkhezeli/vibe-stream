"use client";
import { NavLink } from "../../nav-link/nav-link";
import { primaryNav } from "../../navigation";

type Props = {
  collapsed: boolean;
};

export function SidebarSections({ collapsed }: Props) {
  return (
    <div className="flex-1 h-full grow overflow-y-auto px-2 pb-4 pt-3">
      <nav aria-label="Primary navigation" className="mb-4">
        <ul className="flex flex-col gap-1">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <NavLink item={item} collapsed={collapsed} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
