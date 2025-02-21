import { cn } from "@/lib/utils";
import React, { HtmlHTMLAttributes } from "react";

export const TableHeader = React.forwardRef<
  HTMLTableCellElement,
  React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  >
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <th
      className={cn(
        "text-left py-4 px-2 font-semibold text-base hover:text-black border-t border-x border-border",
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </th>
  );
});
