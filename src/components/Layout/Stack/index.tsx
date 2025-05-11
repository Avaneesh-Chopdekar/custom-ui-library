import { type ComponentProps } from "react";
import Box from "../Box";
import { cn } from "@/utils";

type StackProps = ComponentProps<typeof Box> & {
  className?: string;
};

const Stack = ({ className, ...props }: StackProps) => {
  return (
    <Box
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
    />
  );
};

export default Stack;
