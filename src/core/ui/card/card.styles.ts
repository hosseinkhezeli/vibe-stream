import { cva } from "class-variance-authority";

export const cardStyles = cva(
  `
  group relative cursor-pointer overflow-hidden rounded-md
  bg-bge transition-all duration-300
  focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
  focus-visible:ring-offset-2 focus-visible:ring-offset-bg
  hover:shadow-card
  `,
  {
    variants: {
      variant: {
        playlist: "rounded-md",
        album: "rounded-lg",
        artist: "rounded-full",
        show: "rounded-lg aspect-[2/3]",
      },

      size: {
        sm: "w-28",
        md: "w-40",
        lg: "w-56",
      },
    },

    defaultVariants: {
      variant: "playlist",
      size: "md",
    },
  }
);

export const imageStyles = cva(
  `
  object-cover w-full h-full
  transition-transform duration-300
  group-hover:scale-105
  `,
  {
    variants: {
      variant: {
        playlist: "",
        album: "",
        artist: "rounded-full",
        show: "rounded-lg",
      },
    },
  }
);
