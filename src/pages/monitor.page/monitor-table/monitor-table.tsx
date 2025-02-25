import React, { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MonitorModel } from "@/models/class/monitor.model";
import { MockData } from "@/constants/mock";
import DataTable from "@/components/custom/data-table/data-table";
import { ArrowUpDown, Minus } from "lucide-react";
import { getLevelStyleColor } from "@/lib/get-level-style-color";
import { getStatusColor } from "@/lib/get-status-color";
import { regions } from "@/constants";
import { BaseSearchModel } from "@/models/class/base-search.model";
import { toast } from "sonner";

function MonitorTable() {
  const [paramSearch, setParamSearch] = useState<BaseSearchModel>(
    new BaseSearchModel()
  );
  const columns = React.useMemo<ColumnDef<MonitorModel>[]>(
    () => [
      {
        accessorKey: "uuid",
        meta: {
          sorter: true,
          iconSort: <ArrowUpDown />,
        },
        header: "Request ID",
        size: 1050,
      },
      {
        accessorKey: "method",
        header: "Method",
        meta: {
          sorter: true,
        },
        size: 550,
      },
      {
        accessorKey: "host",
        header: "Host",
        // size: 400
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
        cell: ({ row }) => {
          return (
            <p
              className={`capitalize`}
              style={{ color: getLevelStyleColor(row.getValue("level")) }}
            >
              {row.getValue("level")}
            </p>
          );
        },
      },
      {
        accessorKey: "latency",
        header: "Latency",
        size: 550,
        cell: ({ row }) => {
          return <LatencyDisplay value={row.getValue("latency")} />;
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 550,
        cell: ({ row }) => {
          const value = row.getValue("status");
          if (typeof value === "undefined") {
            return <Minus className="h-4 w-4 text-muted-foreground/50" />;
          }
          if (typeof value === "number") {
            const colors = getStatusColor(value);
            return <div className={`${colors.text} font-mono`}>{value}</div>;
          }
          return <div className="text-muted-foreground">{`${value}`}</div>;
        },
      },
      {
        accessorKey: "regions",
        header: "Regions",
        cell: ({ row }) => {
          const value = row.getValue("regions");
          if (Array.isArray(value)) {
            if (value.length > 1) {
              return (
                <div className="text-muted-foreground">{value.join(", ")}</div>
              );
            } else {
              return (
                <div className="whitespace-nowrap flex gap-5 items-center justify-between">
                  <span>{value}</span>
                  <span className="text-muted-foreground text-xs">
                    {`${regions[value[0]]}`}
                  </span>
                </div>
              );
            }
          }
          if (typeof value === "string") {
            return (
              <div className="text-muted-foreground">{`${regions[value]}`}</div>
            );
          }
          return <Minus className="h-4 w-4 text-muted-foreground/50" />;
        },
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 400,
      },
    ],
    []
  );

  function LatencyDisplay({ value }: { value: number }) {
    return (
      <div className="font-mono">
        {new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 }).format(
          value
        )}
        <span className="text-muted-foreground">ms</span>
      </div>
    );
  }

  useEffect(() => {
    toast("Params Search has been changed", {
      description: JSON.stringify(paramSearch),
    });
  }, [paramSearch]);

  const handleParamSearchChange = (value: BaseSearchModel) => {
    setParamSearch((prev) => ({
      ...prev,
      ...value,
    }));
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={MockData}
        paramSearch={paramSearch}
        onTableChange={handleParamSearchChange}
      />
    </div>
  );
}

export default MonitorTable;
