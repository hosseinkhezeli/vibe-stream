import { cva } from "class-variance-authority";

export const textStyles = cva(
  `
  text-start select-none
  `,
  {
    variants: {
      variant: {
        h1: "text-3xl font-bold leading-tight",
        h2: "text-2xl font-semibold leading-snug",
        h3: "text-xl font-semibold leading-snug",
        body: "text-base leading-relaxed",
        subtle: "text-sm text-muted leading-normal",
        muted: "text-muted text-sm",
        overline: "uppercase tracking-wider text-xs text-muted",
      },

      weight: {
        default: "",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },

      truncate: {
        none: "",
        single: "truncate",
        multi: "line-clamp-2",
      },
    },

    defaultVariants: {
      variant: "body",
      weight: "default",
      truncate: "none",
    },
  }
);
