import type { VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cardStyles } from "./card.styles";

export interface CardProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof cardStyles> {
  title: string;
  subtitle?: string;
  image: string;
  asChild?: boolean;
  className?: string;
}
