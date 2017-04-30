import { Injectable } from '@angular/core';
import { AppSetting } from '../config/index'
import { IUser } from '../entities/index'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class LoginService {

    constructor(private _http: Http) {
        this._currentUser = undefined;
    }
    private _currentUser: IUser
    public Login(userName: string) {
        return this._http.post(AppSetting.BaseApiUrl + AppSetting.LoginUrl, JSON.stringify({ userName: userName }))
            .map((response: Response) => {
                let user: IUser = <IUser>response.json();
                if (user) {
                    this.SetCurrentLoginUser(user);
                }
            });
    }
    public Logout() {
        this._currentUser = undefined;
        if (typeof (Storage) !== "undefined") {
            localStorage.removeItem(AppSetting.LoginUserKey);
        }
    }
    private SetCurrentLoginUser(user: IUser) {
        this._currentUser = user;
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(AppSetting.LoginUserKey, JSON.stringify(user));
        }
    }
    public GetCurrentLoginUser(): IUser {
        if (typeof (Storage) !== "undefined") {
            return <IUser>JSON.parse(localStorage.getItem(AppSetting.LoginUserKey));
        }
        else if (this._currentUser) {
            return this._currentUser
        }
        else {
            return undefined;
        }
    }
}