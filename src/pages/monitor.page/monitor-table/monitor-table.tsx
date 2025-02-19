import React from "react";
import {
  ColumnDef,
} from "@tanstack/react-table";
import { MonitorModel } from "@/models/class/monitor.model";
import { MockData } from "@/constants/mock";
import DataTable from "@/components/custom/data-table/data-table/data-table";
function MonitorTable() {
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

  return (
    <div>
      <DataTable columns={columns} data={MockData} />
    </div>
  );
}

export default MonitorTable;
