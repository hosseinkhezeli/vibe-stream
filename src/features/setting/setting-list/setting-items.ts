import { Home, Search, Library as LibraryIcon, User, Settings, LogOut } from "lucide-react";
import { ComponentType } from "react";

export type SettingItem = {
  label: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

export const settingItems: SettingItem[] = [
  {
    label: "پروفایل",
    href: "/profile",
    icon: User,
  },
  {
    label: "تنظیمات",
    href: "/setting",
    icon: Settings,
  },
  {
    label: "خروج",
    href: "/authentication",
    icon: LogOut,
  },
];
