import { Injectable } from '@angular/core';
import { IUser, IRate } from '../interfaces/index'
import { AppSetting } from '../config/index'
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class RateService {

    constructor(private _http: Http) { }
    AddRate(rate: IRate): Observable<number> {
        let body = JSON.stringify(rate);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(AppSetting.BaseApiUrl + AppSetting.RateUrl, body, options)
            .map((response: Response) => {
                return <number>response.json();
            });
    }
}