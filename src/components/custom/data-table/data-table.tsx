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
import { cn } from "@/lib/utils";

interface IDataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
}

function DataTable<T>(props: IDataTableProps<T>) {
  const { columns, data } = props;

  const useTable = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),

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
  }, []);

  return (
    <>
      <TableProvider useTable={useTable}>
        <div style={{ ...columnSizeVars }} className="w-max">
          <Table>
            <Table.Head>
              {useTable.getHeaderGroups().map((headerGroup) => (
                <Table.Row key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Table.Header
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{ width: `var(--col-size-${header.getSize()})` }}
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
                  <Table.Row key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Table.Cell
                          key={cell.id}
                          style={{
                            width: `var(--col-size-${cell.column.getSize()})`,
                          }}
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
      </TableProvider>
    </>
  );
}

export default DataTable;
