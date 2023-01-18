import { w } from "windstitch";

export const Button = w.button(
  "rounded shadow-sm shadow-gray-899 hover:shadow-md cursor-pointer",
  {
    variants: {
      size: {
        base: "py-2 px-3",
        lg: "py-3 px-4",
      },
      color: {
        primary: "bg-orange-500 hover:bg-orange-400 text-white",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
);
