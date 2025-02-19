import { ColumnDef } from "@tanstack/react-table";
import { PropsWithChildren } from "react";

export type TPropsTableContext<T> = {
  columns: ColumnDef<T>[];
  data: T[]
} & PropsWithChildren;
