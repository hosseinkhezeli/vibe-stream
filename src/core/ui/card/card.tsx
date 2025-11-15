"use client";

import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { cardStyles, imageStyles } from "./card.styles";
import type { CardProps } from "./card.types";

export function Card({
  asChild,
  variant,
  size,
  title,
  subtitle,
  image,
  className,
  ...props
}: CardProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={clsx(cardStyles({ variant, size }), className)}
      {...props}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className={imageStyles({ variant })}
        />

        {/* Play button overlay */}
        <button
          className="
            absolute bottom-2 right-2
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
            bg-accent text-black rounded-full p-3 shadow-soft
            focus-visible:ring-2 focus-visible:ring-accent/60
          "
        >
          ▶
        </button>
      </div>

      {/* Metadata */}
      <div className="mt-3">
        <p className="font-semibold truncate">{title}</p>
        {subtitle && (
          <p className="text-muted text-sm truncate mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </Comp>
  );
}
