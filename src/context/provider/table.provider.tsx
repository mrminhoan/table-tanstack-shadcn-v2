import { createContext } from "vm";
import { TPropsTableContext } from "./type";

const TableContext = createContext(null);

export const TableProvider = <T,>(props?: TPropsTableContext<T>) => {
  const { children, columns, data } = props;
  const value = {
    columns,
    data,
  };
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};
