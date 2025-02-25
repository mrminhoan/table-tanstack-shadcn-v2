import { PAGINATION } from "@/constants/paginations";

export class BaseSearchModel {
  limit: number = PAGINATION.ITEM_PER_PAGE[0];
  currentPage: number = 1;
  offset: number;

  constructor() {
    this.offset = (this.currentPage - 1) * this.limit;
  }
}
