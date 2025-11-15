import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  `
  inline-flex items-center justify-center font-medium rounded-md 
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70
  focus-visible:ring-offset-2 focus-visible:ring-offset-bg
  disabled:opacity-50 disabled:pointer-events-none
  relative
  after:absolute after:inset-0 after:rounded-md after:opacity-0 
  after:transition-opacity after:duration-300 hover:after:opacity-20 
  after:bg-accent
  `,
  {
    variants: {
      variant: {
        primary:
          "bg-accent hover:bg-accent-hover text-black shadow-soft",
        secondary:
          "bg-bge hover:bg-bg text-white border border-white/10",
        ghost:
          "bg-transparent hover:bg-white/5 text-white",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
