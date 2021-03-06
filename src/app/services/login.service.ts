import { Injectable } from '@angular/core';
import { AppSetting } from '../config/index'
import { IUser } from '../interfaces/index'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class LoginService {

    constructor(private _http: Http) {
        this._currentUser = undefined;
    }
    private _currentUser: IUser
    public Login(userName: string) {
        let body = JSON.stringify({ Name: userName });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(AppSetting.BaseApiUrl + AppSetting.LoginUrl, body, options)
            .map((response: Response) => {
                let user: IUser = <IUser>response.json();
                if (user) {
                    this.SetCurrentLoginUser(user);
                }
            });
    }
    public Logout() {
        this._currentUser = undefined;
    }
    private SetCurrentLoginUser(user: IUser) {
        this._currentUser = user;
    }
    public GetCurrentLoginUser(): IUser {
        if (this._currentUser) {
            return this._currentUser
        }
        else {
            return undefined;
        }
    }
}