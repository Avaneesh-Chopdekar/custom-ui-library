import { forwardRef, type ComponentPropsWithRef } from "react";

type BoxProps = ComponentPropsWithRef<"div">;

const Box = forwardRef<HTMLDivElement, BoxProps>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});

export default Box;
