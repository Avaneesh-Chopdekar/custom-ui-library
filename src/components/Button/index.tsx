import type { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export default function Button({ ...props }: ButtonProps) {
  return <button className="text-blue-500 cursor-pointer" {...props} />;
}
