import { cn } from "@/lib/utils";
import React from "react";

interface ITableHeaderProps
  extends React.HtmlHTMLAttributes<HTMLTableSectionElement> {
  containerClassName?: string;
  className?: string;
}

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  ITableHeaderProps
>((props, ref) => {
  const { className, containerClassName, children, ...rest } = props;
  return (
    <div className={cn("[&_tr]: border-b", containerClassName)}>
      <thead ref={ref} className={className} {...rest}>
        {children}
      </thead>
    </div>
  );
});

export default TableHeader;
