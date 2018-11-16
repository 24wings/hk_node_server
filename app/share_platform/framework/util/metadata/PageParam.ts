
export class PageParam {
    pageIndex: number = 0;
    pageSize: number = 20;
    sortField?: string = "";//"排序的字段",
    sortByAsc?: boolean = true;//"升序还是降序",  asc /desc
}
