import "@tanstack/react-table";

export type TSearch = "input" | "checkbox" | "select" | "range";
declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    sorter?: boolean;
    iconSort?:
      | ReactNode
      | ((props: { header: Header<TData, unknown> }) => ReactNode);
    canSearch?: boolean;
    searchOptions?: {
      label?: string;
      type?: TSearch;
      options?: { label: string; value: string | number }[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component?: ReactNode | ((props: any) => ReactNode);
    };
  }
}
