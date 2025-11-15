import { primaryNav } from "../nav/nav-items";
import { NavLink } from "../nav/nav-link";
import { LibrarySection } from "../library/library-section";

type SidebarSectionsProps = {
  collapsed: boolean;
};

export function SidebarSections({ collapsed }: SidebarSectionsProps) {
  return (
    <>
      {/* Primary navigation */}
      <nav aria-label="Primary navigation" className="mb-4">
        <ul className="flex flex-col gap-1">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <NavLink item={item} collapsed={collapsed} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Library */}
      <LibrarySection collapsed={collapsed} />
    </>
  );
}
