import { cn } from "@/lib/utils";
import React from "react";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  >
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <td ref={ref} className={cn("", className)} {...rest}>
      {children}
    </td>
  );
});

export { TableCell };
