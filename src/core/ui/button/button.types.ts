import type { VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { buttonStyles } from "./button.styles";

export interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
  className?: string;
}
