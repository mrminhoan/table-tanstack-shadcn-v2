import { TableHeaderContext } from "@/context/provider/table-header.provider";
import { cn } from "@/lib/utils";
import { flexRender, Header } from "@tanstack/react-table";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useContext } from "react";

interface IProps<T> {
  classNameContainer?: string;
  classNameContent?: string;
}
function TableDataCellHeader<T>(props: IProps<T>) {
  const { header } = useContext(TableHeaderContext);
  const { column } = header;

  const { classNameContainer, classNameContent } = props;
  const { meta } = column.columnDef;

  const contentHeader = flexRender(
    column.columnDef.header,
    header.getContext()
  );

  return (
    <>
      <div className={cn("flex justify-between", classNameContainer)}>
        <span className={cn("truncate", classNameContent)}>
          {contentHeader}
        </span>
        <div onClick={column.getToggleSortingHandler()}>
          {meta?.sorter &&
            (meta?.iconSort ? (
              typeof meta?.iconSort === "function" ? (
                meta.iconSort(header)
              ) : (
                React.cloneElement(meta.iconSort, {
                  header,
                })
              )
            ) : (
              <span className="flex flex-col cursor-pointer">
                <ChevronUp
                  className={cn(
                    "-mb-0.5 h-3.5 w-3.5",
                    column.getIsSorted() === "asc"
                      ? "text-accent-foreground  font-bold"
                      : "text-muted-foreground"
                  )}
                />
                <ChevronDown
                  className={cn(
                    "-mt-0.5 h-3.5 w-3.5",
                    column.getIsSorted() === "desc"
                      ? "text-accent-foreground font-bold"
                      : "text-muted-foreground"
                  )}
                />
              </span>
            ))}
        </div>
      </div>
      {header.column.getCanResize() && (
        <div
          onDoubleClick={() => header.column.resetSize()}
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
          className={cn(
            "absolute top-0 h-full w-1 cursor-col-resize select-none touch-none right-0 z-10 flex justify-center bg-[rgba(0,_0,_0,_0.5)] opacity-0 hover:opacity-100"
            // "before:absolute before:w-px before:inset-y-0 before:bg-border before:translate-x-px"
          )}
        />
      )}
    </>
  );
}

export default TableDataCellHeader;
