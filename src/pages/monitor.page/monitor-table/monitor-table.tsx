import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MonitorModel } from "@/models/class/monitor.model";
import { MockData } from "@/constants/mock";
import { TableProvider } from "@/context/provider/table.provider";
function MonitorTable() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const columns = React.useMemo<ColumnDef<MonitorModel>[]>(
    () => [
      {
        accessorKey: "uuid",
      },
      {
        accessorKey: "method",
      },
      {
        accessorKey: "host",
      },
      {
        accessorKey: "pathname",
      },
      {
        accessorKey: "level",
      },
      {
        accessorKey: "latency",
      },
      {
        accessorKey: "status",
      },
      {
        accessorKey: "regions",
      },
      {
        accessorKey: "date",
      },
    ],
    []
  );

  const useTable = useReactTable({
    columns,
    data: MockData,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <TableProvider data={MockData} columns={columns}>
        <table>
          <thead>
            {useTable.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {useTable.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableProvider>
    </div>
  );
}

export default MonitorTable;
