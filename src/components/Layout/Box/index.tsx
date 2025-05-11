import { cn } from "@/utils";
import { forwardRef, type ComponentPropsWithRef } from "react";

type BoxProps = ComponentPropsWithRef<"div"> & {
  className?: string;
};

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("w-full", className)} {...props} />;
  }
);

export default Box;
