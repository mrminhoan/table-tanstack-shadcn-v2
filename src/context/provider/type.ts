import { BaseSearchModel } from "@/models/class/base-search.model";
import { ColumnDef, Table } from "@tanstack/react-table";
import { PropsWithChildren } from "react";

export type TPropsTableContext<T> = {
  useTable: Table<T>;
  paramSearch?: BaseSearchModel;
  onTableChange: (value: BaseSearchModel) => void;
} & PropsWithChildren;

export type TTableContext<T> = {
  useTable: Table<T>;
  paramSearch: BaseSearchModel;
  onTableChange: (value: BaseSearchModel) => void;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // setParamSearch: React.Dispatch<React.SetStateAction<BaseSearchModel>>;
};
