

export class AppSetting {
  public static readonly BaseApiUrl: string = "http://localhost:1789";
  public static readonly LoginUrl: string = "/login";
  public static readonly CommentUrl: string = "/addcomment";
  public static readonly RateUrl: string = "/addrate";
  public static readonly GamesCommentsRatesUrl: string = "/GetGamesCommentsRates";
  public static readonly CurrentPageQeryString: string = "currentPage";
  public static readonly PageSizeQeryString: string = "pageSize";
  public static readonly SortDirectionQeryString: string = "sortDirection";
  public static readonly SortParameterQeryString: string = "sortParameter";
  public static readonly ApiCallDateQeryString: string = "apiCallDate";
  public static readonly PageSize: number = 10;
  public static readonly AscendingSortDirection: boolean = true;
  public static readonly DescendingSortDirection: boolean = false;
  public static readonly AlphabeticSortParameter: string = "alph";
  public static readonly RateSortParameter: string = "rate";
  public static readonly ErroMessage: string = "Something wrong happened";
  public static readonly PageNotFoundMessage: string = "This page is not found";
}

