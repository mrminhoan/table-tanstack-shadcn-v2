import { cn } from "@/lib/utils";
import React from "react";
import { ReactNode } from "react";

// interface IPropsTableRow extends React.HTMLAttributes<HTMLTableRowElement> {
//   key: string;
// }
export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <tr className={cn("hover:bg-muted/50", className)} {...rest} ref={ref}>
      {children}
    </tr>
  );
});
