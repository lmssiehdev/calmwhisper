import { w } from "windstitch";

export const Button = w.button(
  "rounded shadow-sm shadow-gray-900/40 hover:shadow-md cursor-pointer",
  {
    variants: {
      size: {
        sm: "p-1",
        base: "py-2 px-3",
        lg: "py-3 px-4",
      },
      color: {
        primary: "bg-orange-500 hover:bg-orange-400 text-white",
        secondary: "bg-white text-orange-500",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
);
