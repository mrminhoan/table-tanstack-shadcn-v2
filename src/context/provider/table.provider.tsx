import { createContext, useState } from "react";
import { TPropsTableContext, TTableContext } from "./type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableContext = createContext<TTableContext<any>>(null);

export const TableProvider = <T,>(props?: TPropsTableContext<T>) => {
  const { children, useTable, paramSearch, onTableChange } = props;
  const value = {
    useTable,
    paramSearch,
    onTableChange,
  };
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};
