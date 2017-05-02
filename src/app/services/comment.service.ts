import { Injectable } from '@angular/core';
import { IUser, Icomment } from '../interfaces/index'
import { AppSetting } from '../config/index'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class CommentService {

    constructor(private _http: Http) { }
    AddComment(comment: Icomment) {
        let body = JSON.stringify(comment);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(AppSetting.BaseApiUrl + AppSetting.CommentUrl, body, options)
            .map((response: Response) => {

            });
    }
}