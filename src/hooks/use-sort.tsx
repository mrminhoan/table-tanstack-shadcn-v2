import { SORT_TYPE } from "@/constants";
import { SortingState } from "@tanstack/react-table";
import { useState } from "react";

export function UseSort() {
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "",
      desc: true,
    },
  ]);

  return {
    keySort: sorting[0] ? sorting[0].id : "",
    sortType: sorting[0]?.desc ? SORT_TYPE.DESC : SORT_TYPE.ASC,
    sorting,
    setSorting,
  };
}
