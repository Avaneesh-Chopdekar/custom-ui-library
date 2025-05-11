import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";

const inputStyles = cva(
  [
    "w-full",
    "border-2",
    "border-gray-200",
    "p-2",
    "rounded-lg",
    "transition-all",
    "duration-100",
    "outline-none",
    "focus:border-blue-500",
    "placeholder:text-gray-400",
    "placeholder:text-sm",
  ],
  {
    variants: {
      emphasis: {
        low: "text-gray-600 font-light",
      },
      size: {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
      },
    },
    defaultVariants: {
      emphasis: "low",
      size: "base",
    },
  }
);

export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyles>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, emphasis, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        className={cn(inputStyles({ className, emphasis, size }))}
        {...props}
      />
    );
  }
);

export default Input;
