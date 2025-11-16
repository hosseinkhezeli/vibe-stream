"use client";

import { ANIMATION_DELAY } from "@/config/constants";
import { Portal } from "@/core/ui/portal/portal";
import useHash from "@/core/utils/hooks/use-hash";
import { useOverlayLifecycle } from "@/core/utils/hooks/use-overlay-lifecycle";
import clsx from "clsx";
import { XIcon } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { primaryNav } from "../nav/nav-items";
import Link from "next/link";

export function SettingModal() {
  const [view] = useQueryState("view");
  const router = useRouter();
  const openSettingModal = view === "setting";
  const sheetRef = useRef<HTMLDivElement | null>(null);

  const { isAnimating, isMounted } = useOverlayLifecycle({
    open: openSettingModal,
  });

  const onClose = () => {
    router.back();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  if (!isMounted) return null;

  return (
    <Portal>
      <aside
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={"Setting Dialog"}
        tabIndex={-1}
        className={clsx(
          isAnimating ? "translate-x-0" : "translate-x-full",
          "absolute top-0 left-0 z-60 min-w-svw min-h-svh bg-bg/95"
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
              {primaryNav.map((item, idx) => (
                <li
                  key={item.href}
                  className="overflow-hidden opacity-0 animate-slide-to-right transition-all"
                  style={{ animationDelay: `${(idx + 1) * 300}ms`, animationFillMode: "forwards" }}
                >
                  <Link href={item.href} className="text-xl">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </Portal>
  );
}
