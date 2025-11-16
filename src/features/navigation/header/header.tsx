import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed w-full top-0 z-10 bg-bg h-full max-h-16">
      <div className="px-4 min-h-full py-3 flex flex-row-reverse items-center justify-between gap-2">
        <Link href={"#setting"} className="md:hidden">
          <MenuIcon size={24} className={clsx("shrink-0", "text-muted")} />
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted">VIDE</span>
        </div>
      </div>
    </header>
  );
}
