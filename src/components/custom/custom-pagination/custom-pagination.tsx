import { cn } from "@/lib/utils";
import { usePagination } from "@mantine/hooks";
import CustomSelect from "../custom-select/custom-select";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PAGINATION } from "@/constants/paginations";
import { DataTableContext } from "@/context/provider/data-table.provider";

interface IProps {
  classNameContainer?: string;
  totalItems?: number;
}
function CustomPagination(props: IProps) {
  const { paramSearch, onTableChange } = useContext(DataTableContext);
  // eslint-disable-next-line prefer-const
  let { limit, currentPage } = paramSearch;
  const { classNameContainer, totalItems = 100 } = props;

  const totalPage = useMemo(() => {
    return totalItems / +limit;
  }, [totalItems, limit]);

  const { range, setPage, active } = usePagination({
    total: totalPage,
    onChange: (page) => {
      const offset = handleUpdateOffset(page, limit);
      onTableChange({ ...paramSearch, currentPage: page, offset });
    },
  });

  const handleChangeItemPerPage = (newItemPerPage: string) => {
    const startIndex = (currentPage - 1) * limit;
    let newCurrentPage = Math.floor(startIndex / +newItemPerPage + 1);

    if (newCurrentPage > totalPage) {
      setPage(1);
      newCurrentPage = 1;
    } else {
      setPage(newCurrentPage);
    }
    const offset = handleUpdateOffset(newCurrentPage, limit);

    onTableChange({
      ...paramSearch,
      limit: +newItemPerPage,
      currentPage: newCurrentPage,
      offset,
    });
  };

  const canNext = useMemo(() => {
    return currentPage < totalPage;
  }, [totalPage, currentPage]);

  const canPrevious = useMemo(() => {
    return currentPage > 1;
  }, [totalPage, currentPage]);

  const handleUpdateOffset = (page: number, limit: number) => {
    return (page - 1) * limit;
  };

  useEffect(() => {}, [limit]);

  return (
    <div className="flex items-center justify-center gap-5 mt-5">
      <div className={cn("flex justify-center", classNameContainer)}>
        <div className="flex gap-2 select-none">
          <button
            className={`${
              !canPrevious ? "bg-gray-300" : "bg-blue-400 hover:opacity-85"
            }  px-3 py-1 rounded-md text-white font-medium cursor-pointer`}
            disabled={!canPrevious}
            onClick={() => setPage(1)}
          >
            {"<<"}
          </button>
          <button
            className={`${
              !canPrevious ? "bg-gray-300" : "bg-blue-400 hover:opacity-85"
            }  px-3 py-1 rounded-md text-white font-medium cursor-pointer`}
            disabled={!canPrevious}
            onClick={() => setPage(currentPage - 1)}
          >
            {"|<"}
          </button>
          {range.map((page) => {
            if (page === "dots") {
              return "...";
            }
            return (
              <p
                key={page}
                onClick={() => setPage(page)}
                className={`${
                  active === page ? "bg-red-400" : "bg-blue-400"
                } px-3 py-1 rounded-md text-white font-medium cursor-pointer hover:opacity-85 `}
              >
                {page}
              </p>
            );
          })}
          <button
            className={`${
              !canNext ? "bg-gray-300" : "bg-blue-400 hover:opacity-85"
            }  px-3 py-1 rounded-md text-white font-medium cursor-pointer`}
            disabled={!canNext}
            onClick={() => setPage(currentPage + 1)}
          >
            {">|"}
          </button>
          <button
            className={`${
              !canNext ? "bg-gray-300" : "bg-blue-400 hover:opacity-85"
            }  px-3 py-1 rounded-md text-white font-medium cursor-pointer`}
            disabled={!canNext}
            onClick={() => setPage(totalPage)}
          >
            {">>"}
          </button>
        </div>
      </div>

      {/* Items per page */}
      <Select
        onValueChange={(e) => handleChangeItemPerPage(e)}
        defaultValue={limit.toString()}
      >
        <SelectTrigger className={cn("w-[80px] border border-gray-600")}>
          <SelectValue placeholder={"Per page"} />
        </SelectTrigger>
        <SelectContent>
          {PAGINATION.ITEM_PER_PAGE.map((item) => {
            return (
              <SelectItem value={item.toString()} key={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CustomPagination;
