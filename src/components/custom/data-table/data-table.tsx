import { DataTableProvider } from "@/context/provider/data-table.provider";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "../custom-table/table/table";
import TableDataCellHeader from "../custom-table/table-data-cell-header/table-data-cell-header";
import React, { useEffect, useState } from "react";
import CustomPagination from "../custom-pagination/custom-pagination";
import { BaseSearchModel } from "@/models/class/base-search.model";
import { TableHeaderProvider } from "@/context/provider/table-header.provider";
import { UseSort } from "@/hooks";
import { Input } from "@/components/ui/input";
import FilterController from "../custom-table/filter-controller/filter-controller";

interface IDataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  paramSearch: BaseSearchModel;
  onTableChange: (value: Partial<BaseSearchModel>) => void;
}

function DataTable<T>(props: IDataTableProps<T>) {
  const { columns, data, paramSearch, onTableChange } = props;

  const { sorting, setSorting, keySort, sortType } = UseSort();

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const useTable = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",

    manualSorting: true,
    onSortingChange: setSorting,
    sortDescFirst: true,

    manualFiltering: true,
    onColumnFiltersChange: setColumnFilters,

    state: {
      sorting,
      columnFilters,
    },
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

  useEffect(() => {
    onTableChange({
      keySort,
      sortType,
    });
  }, [keySort, sortType]);

  console.log({ columnFilters });

  return (
    <>
      <DataTableProvider
        useTable={useTable}
        paramSearch={paramSearch}
        onTableChange={onTableChange}
      >
        <FilterController />
        <div style={{ ...columnSizeVars }}>
          <Table className="max-h-screen">
            <Table.Head className="">
              {useTable.getHeaderGroups().map((headerGroup) => (
                <Table.Row key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const memoizedHeaderProvider = React.useMemo(() => {
                      return (
                        <TableHeaderProvider header={header} key={header.id}>
                          <Table.Header
                            colSpan={header.colSpan}
                            style={{
                              width: `var(--col-size-${header.getSize()})`,
                              maxWidth: `var(--col-size-${header.getSize()})`,
                            }}
                            className="relative"
                          >
                            {header.isPlaceholder ? null : (
                              <TableDataCellHeader />
                            )}

                            <Input
                              placeholder="Search..."
                              onChange={(e) =>
                                header.column.setFilterValue(e.target.value)
                              }
                            />
                          </Table.Header>
                        </TableHeaderProvider>
                      );
                    }, [{ ...header }]);
                    return memoizedHeaderProvider;
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
      </DataTableProvider>
    </>
  );
}

export default DataTable;
