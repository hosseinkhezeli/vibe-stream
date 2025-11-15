import { Home, Search, Library as LibraryIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

export const primaryNav: NavItem[] = [
  {
    label: "خانه",
    href: "/",
    icon: Home,
  },
  {
    label: "جستجو",
    href: "/search",
    icon: Search,
  },
  {
    label: "کتابخانه شما",
    href: "/library",
    icon: LibraryIcon,
  },
];
