import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MonitorModel } from "@/models/class/monitor.model";
import { MockData } from "@/constants/mock";
import DataTable from "@/components/custom/data-table/data-table";
import { ArrowUpDown } from "lucide-react";
function MonitorTable() {
  const columns = React.useMemo<ColumnDef<MonitorModel>[]>(
    () => [
      {
        accessorKey: "uuid",
        meta: {
          sorter: true,
          iconSort: <ArrowUpDown />,
        },
        header: "Uuid",
        size: 500
      },
      {
        accessorKey: "method",
        header: "Method",
        meta: {
          sorter: true,
        },
        size: 550
      },
      {
        accessorKey: "host",
        header: "Host",
      },
      {
        accessorKey: "pathname",
        header: "Path name",
      },
      {
        accessorKey: "level",
        header: "Level",
        meta: {
          sorter: true,
        },
      },
      {
        accessorKey: "latency",
        header: "Latency",
        size: 550

      },
      {
        accessorKey: "status",
        header: "Status",
        size: 550

      },
      {
        accessorKey: "regions",
        header: "Regions",
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 400
      },
    ],
    []
  );

  return (
    <div>
      <DataTable columns={columns} data={MockData} />
    </div>
  );
}

export default MonitorTable;
