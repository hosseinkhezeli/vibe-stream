export type SidebarSection = {
  title?: string;
  items: React.ReactNode;
};

export type SidebarProps = {
  /** Optional initial collapsed state; defaults to value from localStorage or false */
  initialCollapsed?: boolean;
};
