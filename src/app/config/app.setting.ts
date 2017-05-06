

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
  public static readonly LoginUserKey: string = "GreenTubeUserName";
  public static readonly PageSize: number = 10;
  public static readonly DefaultSortDirection: boolean = true;
  public static readonly DefaultSortParameter: string = "alph"

}

