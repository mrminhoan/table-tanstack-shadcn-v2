import { createContext } from "react";
import { TPropsTableContext } from "./type";

const TableContext = createContext(null);

export const TableProvider = <T,>(props?: TPropsTableContext<T>) => {
  const { children, useTable } = props;
  const value = {
    useTable,
  };
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};
