import { APP_ROUTES } from "@/config/constants.app-routes";
import { Icon } from "@/core/types/common.types";
import { Home, Search, User, Settings } from "lucide-react";
import { Route } from "next";

export type NavItem = {
  label: string;
  href: Route;
  icon: Icon;
};

export const primaryNav: NavItem[] = [
  {
    label: "خانه",
    href: APP_ROUTES.root(),
    icon: Home,
  },
  {
    label: "جستجو",
    href: APP_ROUTES.search(),
    icon: Search,
  },
    {
    label: "پروفایل",
    href: APP_ROUTES.user("user-id"),
    icon: User,
  },
    {
    label: "تنظیمات",
    href: APP_ROUTES.preferences(),
    icon: Settings,
  },
];