declare interface Result<T = any> {
  code: number;
  data: T;
  msg: string;
}
declare interface ResultList<T = any> {
  code: number;
  data: List<T>;
  msg: string;
}
interface List<T = any> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

declare interface Pager {
  page: number;
  pageSize: number;
}
