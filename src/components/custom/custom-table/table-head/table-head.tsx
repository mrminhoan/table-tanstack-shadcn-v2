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
      className={cn(
        "[&_tr]:border-b  w-full text-muted-foreground bg-muted/50 overflow-hidden",
        className
      )}
      {...rest}
    >
      {children}
    </thead>
  );
});
