import { APP_ROUTES } from "@/config/constants.app-routes";
import {  User, Settings, LogOut } from "lucide-react";
import { ComponentType } from "react";

export type SettingItem = {
  label: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

export const settingItems: SettingItem[] = [
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
  {
    label: "خروج",
    href: APP_ROUTES.root(),
    icon: LogOut,
  },
];
