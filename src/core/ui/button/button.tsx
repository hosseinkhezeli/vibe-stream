"use client";

import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { buttonStyles } from "./button.styles";
import type { ButtonProps } from "./button.types";

export function Button({
  asChild,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(buttonStyles({ variant, size }), className)}
      {...props}
    />
  );
}
