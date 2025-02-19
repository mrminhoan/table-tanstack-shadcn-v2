import { cn } from "@/lib/utils";
import React from "react";

interface ITableHeadProps
  extends React.HtmlHTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  ITableHeadProps
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <thead
      ref={ref}
      className={cn("[&_tr: border-b], w-full", className)}
      {...rest}
    >
      {children}
    </thead>
  );
});
