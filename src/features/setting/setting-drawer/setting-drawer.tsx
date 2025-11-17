"use client";

import { ANIMATION_DELAY } from "@/config/constants";
import { useOverlayLifecycle } from "@/core/utils/hooks/use-overlay-lifecycle";
import clsx from "clsx";
import { XIcon } from "lucide-react";
import { useRef } from "react";
import { useQueryState } from "nuqs";
import { settingItems } from "../setting-list/setting-items";
import { SettingLink } from "../setting-list/setting-link";

export function SettingDrawer() {
  const [view, setView] = useQueryState("view");
  const openSettingModal = view === "setting";
  const sheetRef = useRef<HTMLDivElement | null>(null);

  const { isAnimating, isMounted } = useOverlayLifecycle({
    open: openSettingModal,
  });

  const onClose = () => {
    setView(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  if (!isMounted) return null;

  return (
    <aside
      ref={sheetRef}
      role="dialog"
      aria-modal="true"
      aria-label={"Setting Dialog"}
      tabIndex={-1}
      className={clsx(
        isAnimating ? "translate-x-0 w-[80vw]" : "translate-x-full w-0",
        "relative min-h-svh transition-all"
      )}
      style={{ transitionDuration: `${ANIMATION_DELAY}ms` }}
      onKeyDown={handleKeyDown}
    >
      <button onClick={onClose} className="absolute top-4 left-4 p-2" aria-label="Close settings">
        <XIcon className="w-6 h-6" />
      </button>
      <div className="flex-1 pt-10 h-full grow overflow-y-auto px-8 pb-4 ">
        <nav aria-label="Primary navigation" className="mb-4">
          <ul className="flex flex-col gap-4">
            {settingItems.map((item, idx) => (
              <li key={item.href}>
                <SettingLink item={item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
