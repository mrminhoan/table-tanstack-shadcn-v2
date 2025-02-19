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
    <th className={cn("", className)} {...rest} ref={ref}>
      {children}
    </th>
  );
});
