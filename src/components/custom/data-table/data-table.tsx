import { TableProvider } from "@/context/provider/table.provider";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "../custom-table/table/table";
import TableDataCellHeader from "../custom-table/table-data-cell-header/table-data-cell-header";
import React from "react";
import CustomPagination from "../custom-pagination/custom-pagination";
import { BaseSearchModel } from "@/models/class/base-search.model";

interface IDataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  paramSearch: BaseSearchModel;
  onTableChange: (value: BaseSearchModel) => void;
}

function DataTable<T>(props: IDataTableProps<T>) {
  const { columns, data, paramSearch, onTableChange } = props;
  const useTable = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    // Sorting config:
    manualSorting: true,
  });

  const columnSizeVars = React.useMemo(() => {
    const headers = useTable.getFlatHeaders();
    const colSize: { [key: string]: string } = {};
    headers.forEach((header) => {
      const columnSize = header.getSize();
      colSize[`--col-size-${columnSize}`] = `${columnSize}px`;
    });
    return colSize;
  }, [
    useTable.getState().columnSizingInfo,
    useTable.getState().columnSizing,
    useTable.getState().columnVisibility,
  ]);

  return (
    <>
      <TableProvider
        useTable={useTable}
        paramSearch={paramSearch}
        onTableChange={onTableChange}
      >
        <div style={{ ...columnSizeVars }}>
          <Table>
            <Table.Head>
              {useTable.getHeaderGroups().map((headerGroup) => (
                <Table.Row key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Table.Header
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{
                          width: `var(--col-size-${header.getSize()})`,
                          maxWidth: `var(--col-size-${header.getSize()})`,
                        }}
                        className="relative"
                      >
                        {header.isPlaceholder ? null : (
                          <TableDataCellHeader header={header} />
                        )}
                      </Table.Header>
                    );
                  })}
                </Table.Row>
              ))}
            </Table.Head>
            <Table.Body>
              {useTable.getRowModel().rows.map((row) => {
                return (
                  <Table.Row key={row.id} className="">
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Table.Cell
                          key={cell.id}
                          style={{
                            width: `var(--col-size-${cell.column.getSize()})`,
                            maxWidth: `var(--col-size-${cell.column.getSize()})`,
                          }}
                          className="px-2 py-3 border-b border-x border-border text-sm truncate"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Table.Cell>
                      );
                    })}
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
        <CustomPagination />
      </TableProvider>
    </>
  );
}

export default DataTable;
