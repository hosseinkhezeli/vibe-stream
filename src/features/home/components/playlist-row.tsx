import Image from "next/image";

type PlaylistLike = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

type PlaylistRowProps = {
  title: string;
  subtitle?: string;
  items: PlaylistLike[];
};

export function PlaylistRow({ title, subtitle, items }: PlaylistRowProps) {
  return (
    <section className="space-y-4">
      {/* Section header */}
      <header className="flex items-baseline justify-between gap-2">
        <div className="min-w-0">
          <h2 className="text-lg md:text-2xl font-semibold text-start hover:underline cursor-pointer">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-xs md:text-sm text-muted text-start">
              {subtitle}
            </p>
          )}
        </div>
        <button
          type="button"
          className="hidden md:inline-flex text-xs text-muted hover:text-white transition-colors"
        >
          نمایش همه
        </button>
      </header>

      {/* Cards row */}
      <div className="relative">
        {/* Mobile: horizontal scroll; Desktop: fixed grid */}
        <div
          className="
            grid grid-flow-col auto-cols-[60%] gap-4 overflow-x-auto
            md:grid-flow-row md:auto-cols-auto md:grid-cols-5 md:overflow-visible
          "
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="
                group bg-bg rounded-md p-3
                hover:bg-white/5 transition-colors cursor-pointer
              "
            >
              <div className="relative mb-3 aspect-square overflow-hidden rounded-md shadow-soft">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 60vw, 180px"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <h3 className="text-sm md:text-base font-semibold mb-1 truncate text-start">
                {item.title}
              </h3>
              <p className="text-xs text-muted line-clamp-2 text-start">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
