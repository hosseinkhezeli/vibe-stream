"use client";

import { NavLink } from "../nav-link/nav-link";
import { primaryNav } from "../navigation";

export function BottomNavigation() {
  return (
    <nav aria-label="Primary navigation" className="w-full md:hidden ">
      <ul className="flex gap-1 min-w-max fixed z-50 bottom-0 left-0 px-8 w-full bg-linear-0 from-bg from-50% to-bg/70 backdrop-blur-xs">
        {primaryNav.map((item) => (
          <li key={item.href} className="w-full">
            <NavLink item={item} collapsed={false} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
