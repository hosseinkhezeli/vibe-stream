import { LibraryItem } from "./library-item";

type LibrarySectionProps = {
  collapsed?: boolean;
};

export function LibrarySection({ collapsed = false }: LibrarySectionProps) {
  const items = [
    { id: "1", title: "لیست پخش موردعلاقه‌ها" },
    { id: "2", title: "پادکست‌های جدید" },
    { id: "3", title: "برای رانندگی" },
    { id: "4", title: "تمرکز و کار" },
  ];

  if (collapsed) {
    // Minimal representation in collapsed mode (just a small bar hint)
    return (
      <div className="mt-3 flex justify-center">
        <div className="h-8 w-8 rounded-md bg-white/5" aria-hidden="true" />
      </div>
    );
  }

  return (
    <section aria-label="کتابخانه شما" className="mt-3">
      {/* Header row: title + subtle action */}
      <div className="flex items-center justify-between px-2 mb-2">
        <h2 className="text-sm font-semibold text-start">
          کتابخانه شما
        </h2>
        <button
          type="button"
          className="
            text-xs text-muted 
            hover:text-white 
            transition-colors
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent/60
            rounded
            px-1 py-0.5
          "
        >
          مدیریت
        </button>
      </div>

      {/* Library items */}
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <LibraryItem key={item.id} title={item.title} />
        ))}
      </div>
    </section>
  );
}
