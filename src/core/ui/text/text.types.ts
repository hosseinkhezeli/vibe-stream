import type { VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { textStyles } from "./text.styles";

export interface TextProps
  extends ComponentPropsWithoutRef<"p">,
    VariantProps<typeof textStyles> {
  asChild?: boolean;
  className?: string;
}
