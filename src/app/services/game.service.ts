import { Injectable } from '@angular/core';
import { AppSetting } from '../config/index'
import { IFilteredGamesCommentsWithUser, IFilter } from '../interfaces/index'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class GameService {

    constructor(private _http: Http) { }
    GetFilteredGamesCommentsAndRates(filter: IFilter): Observable<IFilteredGamesCommentsWithUser> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(`${AppSetting.BaseApiUrl}${AppSetting.GamesCommentsRatesUrl}?${AppSetting.CurrentPageQeryString}=${filter.CurrentPage}&${AppSetting.PageSizeQeryString}=${filter.PageSize}&${AppSetting.SortDirectionQeryString}=${filter.SortDirection}&${AppSetting.SortParameterQeryString}=${filter.SortParameter}`
        , options)
            .map((response: Response) => <IFilteredGamesCommentsWithUser>response.json());
    }
}

