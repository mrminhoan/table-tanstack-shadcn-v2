import { MockData } from "@/constants/mock";
import { TableProvider } from "@/context/provider/table.provider";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "../../custom-table/table/table";

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
  });
  return (
    <>
      <TableProvider data={data} columns={columns} useTable={useTable}>
        <Table>
          <Table.Head>
            {useTable.getHeaderGroups().map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Table.Header key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
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
                      <Table.Cell key={cell.id}>
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
      </TableProvider>
    </>
  );
}

export default DataTable;
