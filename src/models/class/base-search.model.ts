import { SORT_TYPE } from "@/constants";
import { PAGINATION } from "@/constants/paginations";

export class BaseSearchModel {
  limit: number = PAGINATION.ITEM_PER_PAGE[0];
  currentPage: number = 1;
  offset: number;
  sortType: (typeof SORT_TYPE)[keyof typeof SORT_TYPE] = SORT_TYPE.DESC;
  keySort: string;

  constructor() {
    this.offset = (this.currentPage - 1) * this.limit;
  }
}
