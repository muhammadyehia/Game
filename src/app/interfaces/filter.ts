export interface IFilter {
    CurrentPage: number,
    PageSize: number,
    TotalPages: number,
    TotalRecords: number,
    SortDirection: boolean,
    SortParameter: string,
    SkipRecords: number
}