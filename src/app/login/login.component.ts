import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/index'
import { IUser } from '../interfaces/index'
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(private _router: Router, private _loginService: LoginService) {

    }
    public UserName: string;
    public ShowLoadImage: boolean;
    public ShowLoagInUser: boolean;
    public CurrentUser: IUser;
    public Submit: boolean;
    ngOnInit() {
        this.Submit = true;
        this.ShowLoadImage = false;
        this.CurrentUser = this._loginService.GetCurrentLoginUser()
        if (this.CurrentUser) {
            this.ShowLoagInUser = true;
        }
        else {
            this.ShowLoagInUser = false;
        }
    }
    OnPressEnter(event: any) {
        if (event.keyCode == 13) {
            this.Login();
        }
        else if (!this.Submit) {
            this.Submit = true;
        }
    }
    Logout() {
        this._loginService.Logout();
        this.ShowLoagInUser = false;
        this.ShowLoadImage = false;
    }
    Login() {
        if (!this.UserName) {
            this.Submit = false;
        }
        else {
            this.Submit = true;
        }
        if (this.Submit) {
            this.ShowLoadImage = true;
            this._loginService.Logout();
            this._loginService.Login(this.UserName).subscribe(
                () => {
                    this.ShowLoadImage = false;
                    let link = ['/games'];
                    this._router.navigate(link);
                },
                error => {
                    console.log(error);
                });
        }

    }
}