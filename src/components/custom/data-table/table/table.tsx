import { cn } from "@/lib/utils";
import React from "react";

interface ITableProps extends React.HTMLProps<HTMLTableElement> {
  classNameContainer?: string;
}
const Table = React.forwardRef<HTMLTableElement, ITableProps>((props, ref) => {
  const { classNameContainer, children, ...rest } = props;
  return (
    <div className={cn("w-full", classNameContainer)}>
      <table ref={ref} {...rest}>
        {children}
      </table>
    </div>
  );
});

export default Table;
