"use client";

import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { textStyles } from "./text.styles";
import type { TextProps } from "./text.types";

export function Text({
  asChild,
  variant,
  weight,
  truncate,
  className,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      className={clsx(textStyles({ variant, weight, truncate }), className)}
      {...props}
    />
  );
}
